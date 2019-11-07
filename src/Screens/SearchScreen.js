import React, { useState} from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../Components/SearchBar';
import ResultsList from '../Components/ResultsList';
import useResults from '../hooks/useResults';

const SearchScreen = ({ navigation }) => {
    const[term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults();
    const filterResultsByPrice = (price) => {
        return results.filter(results => {
            return results.restaurant.price_range === price;
        });
    }
    return <>
        <SearchBar 
            term= {term} 
            onTermChange= { newTerm => setTerm(newTerm)}
            onTermSubmit= { () => searchApi(term) } />
           {errorMessage ?  <Text>{errorMessage}</Text> : null }
           <ScrollView>
            <ResultsList results={filterResultsByPrice(1)} navigation={ navigation } isHorizontal= { true } title="Seminars"/>
            <><View style= {styles.viewstyle}>
            <ResultsList results={filterResultsByPrice(2)} navigation={ navigation } isHorizontal= { false } title="Bit Pricier"/>
            <ResultsList results={filterResultsByPrice(3)} navigation={ navigation } isHorizontal= { false } title="Big Spender"/>
            </View></>
            </ScrollView>
    </>
}

const styles= StyleSheet.create({
    viewstyle: {
        flexDirection: 'row'
    }
});

export default SearchScreen;
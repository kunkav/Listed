import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import ResultsDetail from './ResultsDetail';
import { withNavigation } from 'react-navigation';

const ResultsList = ({title, results, navigation, isHorizontal}) => {
    
    return <View style={styles.container}>
        <Text style= {styles.title}>{title}</Text>
        <FlatList 
            showsHorizontalScrollIndicator= {false}
            bounces
            horizontal = { isHorizontal }
            data = {results}
            keyExtractor = { (result) => result.restaurant.id }
            renderItem = { ({item}) => {
                return (
                <TouchableOpacity onPress= { ()=> { navigation.navigate('ResultsShow', { id: item.restaurant.R.res_id } ) } }>
                    <ResultsDetail result={item}/>
                </TouchableOpacity>
                )
            } }
        />
        </View>
}

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        marginLeft: 15,
        marginBottom: 5,
        fontWeight: "bold"
    },
    container: {
        marginBottom: 12,
    }
});

export default withNavigation(ResultsList);
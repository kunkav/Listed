import React from 'react';
import {View, Image, Text, StyleSheet, Dimensions, FlatList, ScrollView} from 'react-native';

const categories = [
    {id: 'a', value: 'Academics'},
    {id: 'b', value: 'Languages'},
    {id: 'c', value: 'Music'},
    {id: 'd', value: 'Sports/Games'},
    {id: 'e', value: 'Coding'},
    {id: 'f', value: 'Hobbies'},
  ];
  const seminars = [
    {id: '1', value: 'Motivation'},
    {id: '2', value: 'Self Help'},
    {id: '3', value: 'Entrepreneurship'},
    {id: '4', value: 'Fitness'},
    {id: '5', value: 'Music'},
    {id: '6', value: 'Competetive Exams'},
  ];
  const offers = [
    {id: '1', value: '10%'},
    {id: '2', value: '20%'},
    {id: '3', value: '30%'},
    {id: '4', value: '40%'},
    {id: '5', value: '50%'},
    {id: '6', value: '100%'},
  ];
const numColumns = 2;
const size = (Dimensions.get('window').width/(numColumns) - 25) ;
const HomeScreen = () => {
    
    return <>
    <View style= {styles.headerStyle}>
        <Text style={styles.textStyle}>Listed</Text>
    </View>
    <ScrollView style= {{marginLeft: 15}}>
    <FlatList 
        data={offers}  
        horizontal
        showsHorizontalScrollIndicator= {false}
        renderItem={({item}) => (
            <View style={styles.itemContainer}>
              <Text style={styles.item}>{item.value}</Text>
            </View>
        )}
        keyExtractor={item => item.id}
    />
        <FlatList 
        data={seminars}  
        horizontal
        showsHorizontalScrollIndicator= {false}
        renderItem={({item}) => (
            <View style={styles.itemContainer}>
              <Text style={styles.item}>{item.value}</Text>
            </View>
        )}
        keyExtractor={item => item.id}
    />
    
    <FlatList
    //style= {styles.listStyle}
    data={categories}
    renderItem={({item}) => (
      <View style={styles.itemContainer}>
        <Text style={styles.item}>{item.value}</Text>
      </View>
    )}
    keyExtractor={item => item.id}
    numColumns={numColumns} />
    </ScrollView>
    </>
}

const styles = StyleSheet.create({
    itemContainer: {
      width: size,
      height: size,
    },
    item: {
      flex: 1,
      margin: 5,
      backgroundColor: 'lightblue',
    },
    listStyle: {        
        marginVertical: 20,
        marginHorizontal: 20,
        borderWidth: 2,
        borderColor: 'red'
    },
    headerStyle: {
        height: 70,
        backgroundColor: '#694fad'
    },
    textStyle: {
        color:'#ffffff',
        fontSize: 24,
        marginTop: 20,
        marginLeft: 20
    }
  });

export default HomeScreen;
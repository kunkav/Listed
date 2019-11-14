import React from 'react';
import {View, Image, Text, StyleSheet, FlatList, Dimensions, TouchableOpacity} from 'react-native';
import { withNavigation } from 'react-navigation';

const numColumns = 2;
const size = (Dimensions.get('window').width/(numColumns) - 25) ;
const CategoryList = ( {data, isHorizontal, navigation} ) => {
    return isHorizontal ? (              
    <FlatList 
        data={data}
        bounces= {true}
        horizontal= {isHorizontal}
        showsHorizontalScrollIndicator= {false}   
        renderItem={({item}) => (
            <View style={styles.itemContainer}>
              <Image style={styles.item} source={ {uri: item.uri}}/>
            </View>
        )}
        keyExtractor={item => item.id}
    />
    ) :
    (<FlatList 
    data={data}  
    horizontal= {isHorizontal}
    showsHorizontalScrollIndicator= {false}
    numColumns= {numColumns}   
    renderItem={({item}) => (
      <TouchableOpacity onPress= { ()=> { navigation.navigate('Institute', { resultName: item.name, url: item.uri } ) } }>
        <View style={styles.itemContainer}>
          <Image style={styles.item} source={ {uri: item.uri}}/>
          <Text>{item.name}</Text>
        </View>
      </TouchableOpacity>
    )}
    keyExtractor={item => item.id}
/>)
        
}

const styles = StyleSheet.create({
    itemContainer: {
        width: size,
        height: size,
        marginHorizontal: 5,
        marginVertical: 5        
      },
      item: {
        flex: 1,               
        borderRadius: 10 ,
        height: size,
        width: size      
      },
      listStyle: {
        borderWidth:2,

      }
});

export default withNavigation(CategoryList);
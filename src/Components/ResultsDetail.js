import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';

const ResultsDetail = ( {result} ) => {
    return <View style={styles.container}>
        <Image style={styles.image} source = {result.restaurant.thumb ? { uri: result.restaurant.thumb } : null} />
        <Text style={styles.name}>{result.restaurant.name}</Text>
        <Text>{result.restaurant.user_rating.aggregate_rating} Stars, {result.restaurant.user_rating.votes} Reviews</Text>
        </View>
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 15
    },
    image: {
        width: 250,
        height: 140,
        borderRadius: 4,
        marginBottom: 5
    },
    name: {
        fontWeight: 'bold'
    }
});

export default ResultsDetail;
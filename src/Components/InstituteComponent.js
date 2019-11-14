import React from 'react';
import {View, Image, Text, StyleSheet, FlatList} from 'react-native';

const InstituteComponent = ({navigation}) => {
    console.log(navigation.state.params.url);
    return <View style={styles.outerViewStyle}>        
        <View><Image style= {styles.imageViewStyle}  source= {{uri: navigation.state.params.url}}/></View> 
        <View style={styles.resultTextsStyle}>
            <Text>{navigation.state.params.resultName}</Text>
            <Text>Comma separated list of subjects</Text>
            <View style={styles.reviewRowStyle}><Text>Stars</Text><Text>345</Text><Text style= {styles.reviewStyle}>Reviews</Text></View>
        </View>
    </View>
}

const styles = StyleSheet.create({
    outerViewStyle: {
        flexDirection: "row",
        borderBottomColor: '#11a7f7',
        borderBottomWidth: 2        
    },
    resultTextsStyle: {
        marginTop: 10
    },
    imageViewStyle: {
        width: 75,
        height: 75,
        marginHorizontal: 10,
        marginVertical: 10
    },
    reviewRowStyle: {
        flexDirection: "row"
    },
    reviewStyle: {
        marginLeft: 25
    }
});

export default InstituteComponent;
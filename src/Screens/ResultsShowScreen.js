import React, {useState, useEffect} from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import zomato from '../api/zomato';
import { FlatList } from 'react-native-gesture-handler';
const ResultsShowScreen = ( { navigation } ) => {
    const id = navigation.getParam('id');
    const [result, setResult] = useState(null);
    console.log(result);

    const getResult = async (id) => {
        const response = await zomato.get('/restaurant', {
            params: {
                apikey: 'b46cae0e0a2b67c9eb267fed7ae6307b',
                res_id: id
            }
        });

        setResult(response.data);
    }

    useEffect(()=>{
        getResult(id);
    }, []);
    if(!result) {
        return null;
    }
    
    return <View>
       <Text> { result.name } </Text>
       <FlatList
       
        data={result.photos}
        keyExtractor= { photo => photo.photo.id }
        renderItem= { ({item}) => {
            return (<><Image style={styles.image} source={{uri: item.photo.thumb_url}}/>
            </>);
        } }
        
       />
    </View>
};


const styles = StyleSheet.create({
    image: {
        height: 200,
        width: 300
    }
});

export default ResultsShowScreen;
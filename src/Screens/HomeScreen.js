import React from 'react';
import {View, Image, Text, StyleSheet, Dimensions, FlatList, ScrollView} from 'react-native';
import CategoryList from '../Components/CategoryList';
import OfferBanner from '../Components/OfferBanner';

const categories = [
    {id: 'a', name: 'Academics', uri:'https://www.johncabot.edu/academics/academics%20news%20feed.jpg'},
    {id: 'b', name: 'Languages', uri:'https://mycroft.ai/wp-content/uploads/2018/05/languages-edited.png'},
    {id: 'c', name: 'Music', uri:'https://soundtraining.com/music-academy/wp-content/uploads/2016/03/singing-lessons-dublin.jpg'},
    {id: 'd', name: 'Sports/Games', uri:'https://media.istockphoto.com/photos/various-sport-equipments-on-grass-picture-id949190756?k=6&m=949190756&s=612x612&w=0&h=dNek5l5xc68G0gCZv-fe0vHP8kjDpAYFrRnSPh8iLyc='},
    {id: 'e', name: 'Coding', uri:'https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Fforbestechcouncil%2Ffiles%2F2019%2F01%2Fcanva-photo-editor-8-7.jpg'},
    {id: 'f', name: 'Hobbies',  uri:'https://image.shutterstock.com/image-vector/people-hobbies-persons-creative-handicraft-260nw-1246798162.jpg'},
  ];
  const seminars = [
    {id: '1', name: 'Motivation', uri:'https://cdn.lifehack.org/wp-content/uploads/2016/08/29055841/teamcoaching2.jpg'},
    {id: '2', name: 'Self Help', uri:'https://image.shutterstock.com/image-illustration/self-help-bulb-word-cloud-260nw-1105665239.jpg'},
    {id: '3', name: 'Entrepreneurship', uri:'https://image.shutterstock.com/image-photo/entrepreneurship-strategy-business-plan-brainstorming-260nw-519946912.jpg'},
    {id: '4', name: 'Fitness', uri:'https://www.kalevfitness.com/wp-content/uploads/2018/10/total-body-compressor-300x240.jpg'},
    {id: '5', name: 'Music', uri:'https://static01.nyt.com/images/2019/09/26/smarter-living/26_gubar_music/26_gubar_music-articleLarge.jpg?quality=75&auto=webp&disable=upscale'},
    {id: '6', name: 'Competetive Exams', uri:'https://thumbs.dreamstime.com/b/final-exam-results-test-reading-books-words-concept-79093620.jpg'},
  ];
  const offers = [
    {id: '1', name: '10%', uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaLsZWYxuTTbmBqFoQrX0KOqjRhvFMKXhneFxTDMPV_MFfatan&s'},
    {id: '2', name: '20%', uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaLsZWYxuTTbmBqFoQrX0KOqjRhvFMKXhneFxTDMPV_MFfatan&s'},
    {id: '3', name: '30%', uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaLsZWYxuTTbmBqFoQrX0KOqjRhvFMKXhneFxTDMPV_MFfatan&s'},
    {id: '4', name: '40%', uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaLsZWYxuTTbmBqFoQrX0KOqjRhvFMKXhneFxTDMPV_MFfatan&s'},
    {id: '5', name: '50%', uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaLsZWYxuTTbmBqFoQrX0KOqjRhvFMKXhneFxTDMPV_MFfatan&s'},
    {id: '6', name: '100%', uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaLsZWYxuTTbmBqFoQrX0KOqjRhvFMKXhneFxTDMPV_MFfatan&s'},
  ];

const HomeScreen = ( {navigation} ) => {
    
    return (<>    
    <ScrollView contentContainerStyle={ styles.containerStyle } >      
      <OfferBanner/>
      <CategoryList navigation= { navigation } style={ styles.listStyle} data={offers} isHorizontal= {true} />
      <OfferBanner/>
      <CategoryList navigation= { navigation } style={ styles.listStyle} data={seminars} isHorizontal= {true} />
      <OfferBanner/>
      <CategoryList navigation= { navigation } style={ styles.listStyle} data={categories} isHorizontal= {false} />
</ScrollView>
</>);
}

const styles = StyleSheet.create({    
    headerStyle: {
        height: 70,
        backgroundColor: '#11a7f7'
    },
    textStyle: {
        color:'#ffffff',
        fontSize: 24,
        marginTop: 20,
        marginLeft: 20
    },
    containerStyle: {
      marginHorizontal: 10,
      marginVertical: 10
    }
  });

export default HomeScreen;
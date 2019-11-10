import { createStackNavigator } from 'react-navigation-stack';
import SearchScreen from './src/Screens/SearchScreen';
import HomeScreen from './src/Screens/HomeScreen';
import ProfileScreen from './src/Screens/ProfileScreen';
import { createAppContainer } from 'react-navigation';
import ResultsShowScreen from './src/Screens/ResultsShowScreen';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { FontAwesome5, Feather } from '@expo/vector-icons';
import React from 'react';
import CategoryResultList from './src/Components/CategoryResultList';

const navigator1 = createStackNavigator(
    {
        Search: SearchScreen,
        ResultsShow: ResultsShowScreen
    }, {
        initialRouteName: 'Search',
        defaultNavigationOptions: {
            title: 'Listed'
        }
    }
);

const navigator = createMaterialBottomTabNavigator(
    {
        Home: {
            screen: HomeScreen,
            navigationOptions: {
                tabBarIcon: ()=> <FontAwesome5 name="home" size={24} color="#ffffff"/>
            }
        },
        Search: {
            screen: SearchScreen,
        navigationOptions: {
            tabBarIcon: ()=> <Feather name="search" size={24} color="#ffffff"/>
        }
    },
        Result: {
            screen: ResultsShowScreen,
            navigationOptions: {
                tabBarIcon: ()=> <FontAwesome5 name="book-medical" size={24} color="#ffffff"/>
            }
        },        
        Profile: {
            screen: ProfileScreen,
            navigationOptions: {
                tabBarIcon: ()=> <FontAwesome5 name="user-circle" size={24} color="#ffffff"/>
            }
        },
        CategoryResultList: {
            screen: CategoryResultList
        }
    },
    {
        initialRouteName: 'Home',
        activeColor: '#f0edf6',
    inactiveColor: '#3e2465',
    barStyle: { backgroundColor: '#11a7f7' },
    }    
);

export default createAppContainer(navigator);
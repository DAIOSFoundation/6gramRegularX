import React from 'react';
import { Ionicons } from 'react-native-vector-icons';
import {
    createStackNavigator,
    createBottomTabNavigator,
    createAppContainer,
} from 'react-navigation';

import HomeScreen from './pages/HomeScreen';
import SettingsScreen from './pages/SettingsScreen';
import DetailsScreen from './pages/DetailsScreen';
import ProfileScreen from './pages/ProfileScreen';

const HomeStack = createStackNavigator(
    {
        //Defination of Navigaton from home screen
        Home: { screen: HomeScreen },
        Details: { screen: DetailsScreen },
    },
    {
        //For React Navigation 2.+ change defaultNavigationOptions->navigationOptions
        defaultNavigationOptions: {
            //Header customization of the perticular Screen
            headerStyle: {
                backgroundColor: '#42f44b',
            },
            headerTintColor: '#FFFFFF',
            title: 'Home',
            //Header title
        },
    }
);

const SettingsStack = createStackNavigator(
    {
        //Defination of Navigaton from setting screen
        Settings: { screen: SettingsScreen },
        Details: { screen: DetailsScreen },
        Profile: { screen: ProfileScreen },
    },
    {
        //For React Navigation 2.+ change defaultNavigationOptions->navigationOptions
        defaultNavigationOptions: {
            //Header customization of the perticular Screen
            headerStyle: {
                backgroundColor: '#42f44b',
            },
            headerTintColor: '#FFFFFF',
            title: 'Settings',
            //Header title
        },
    }
);

const App = createBottomTabNavigator(
    {
        //Defination of Navigaton bottom options
        Home: { screen: HomeStack },
        Settings: { screen: SettingsStack },
    },
    {
        navigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, horizontal, tintColor }) => {
                const { routeName } = navigation.state;
                let IconComponent = Ionicons;
                let iconName;
                if (routeName === 'Home') {
                    iconName = `ios-information-circle${focused ? '' : '-outline'}`;
                    // Sometimes we want to add badges to some icons.
                    // You can check the implementation below.
                } else if (routeName === 'Settings') {
                    iconName = `ios-options${focused ? '' : '-outline'}`;
                }

                // You can return any component that you like here!
                return <IconComponent name={iconName} size={25} color={tintColor} />;
            },
        }),
        tabBarOptions: {
            activeTintColor: '#42f44b',
            inactiveTintColor: 'gray',
        },
    }
);
export default createAppContainer(App);

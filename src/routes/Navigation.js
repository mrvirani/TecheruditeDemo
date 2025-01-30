import {Image, StyleSheet} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Events from '../screens/DashBoard/Events';
import Favorite from '../screens/DashBoard/Favorite';
import Search from '../screens/DashBoard/Search';
import Profile from '../screens/DashBoard/Profile';
import Login from '../screens/Auth/Login';
import Register from '../screens/Auth/Register';
import {navigationRef} from '../helper/Navigation';
import {useSelector} from 'react-redux';

const BottomTab = createBottomTabNavigator();
export const BottomTabScreen = () => {
  return (
    <BottomTab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'EventsScreen') {
            iconName = require('../assets/Images/Calendar.png');
          } else if (route.name === 'FavoriteScreen') {
            iconName = require('../assets/Images/heart.png');
          } else if (route.name === 'SearchScreen') {
            iconName = require('../assets/Images/search.png');
          } else if (route.name === 'ProfieScreen') {
            iconName = require('../assets/Images/user.png');
          }
          return (
            <Image
              source={iconName}
              style={{
                width: 24,
                height: 24,
                tintColor: focused ? 'black' : 'gray',
              }}
              resizeMode="contain"
            />
          );
        },
        tabBarStyle: {
          height: 60,
          paddingTop: 5,
        },
        tabBarLabel:
          route.name === 'EventsScreen'
            ? 'Events'
            : route.name === 'FavoriteScreen'
            ? 'Favourites'
            : route.name === 'SearchScreen'
            ? 'Search'
            : route.name === 'ProfieScreen'
            ? 'Profile'
            : null,
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'gray',
      })}
      initialRouteName="EventsScreen">
      <BottomTab.Screen name="SearchScreen" component={Search} />
      <BottomTab.Screen name="EventsScreen" component={Events} />
      <BottomTab.Screen name="FavoriteScreen" component={Favorite} />
      <BottomTab.Screen name="ProfieScreen" component={Profile} />
    </BottomTab.Navigator>
  );
};

const AuthStack = createNativeStackNavigator();
export const AuthStackScreen = () => {
  return (
    <AuthStack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="LoginScreen">
      <AuthStack.Screen name="LoginScreen" component={Login} />
      <AuthStack.Screen name="RegisterScreen" component={Register} />
    </AuthStack.Navigator>
  );
};

const Navigation = () => {
  const isAuthenticated = useSelector(state => state?.auth?.userIsLogin);

  console.log('isAuthenticated::', isAuthenticated);

  const AppStack = createNativeStackNavigator();

  return (
    <NavigationContainer ref={navigationRef}>
      <AppStack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName={false ? 'BottomTab' : 'AuthStack'}>
        <AppStack.Screen name="AuthStack" component={AuthStackScreen} />
        <AppStack.Screen name="BottomTab" component={BottomTabScreen} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

const styles = StyleSheet.create({});

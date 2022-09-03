import React from 'react';
import Feed from './Feed';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import Appointments from './Appointments';
import {routes} from '../contants';

const Tab = createBottomTabNavigator();

const Home = ({navigation}) => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarItemStyle: {},
        tabBarStyle: {height: 50},
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === routes.mainPage) {
            iconName = 'hospital-o';
          } else if (route.name === routes.appointments) {
            iconName = 'book';
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen name={routes.mainPage} component={Feed} />
      <Tab.Screen name={routes.appointments} component={Appointments} />
    </Tab.Navigator>
  );
};

export default Home;

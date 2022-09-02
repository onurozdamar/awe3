import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './screens/Home';
import Detail from './screens/HastaneDetail';
import AddYeniKayit from './screens/AddYeniKayit';
import AddRandevu from './screens/AddRandevu';
import AddIlac from './screens/AddIlac';
import AddGorev from './screens/AddGorev';
import {Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useDispatch} from 'react-redux';
import {setOpenModal} from './store/hospital/actions';

const Stack = createStackNavigator();

const Menu = () => {
  const dispatch = useDispatch();

  return (
    <TouchableOpacity
      style={{margin: 15}}
      hitSlop={{top: 15, bottom: 15, left: 20, right: 20}}
      onPress={() => {
        dispatch(setOpenModal(true));
      }}>
      <Icon name={'ellipsis-v'} size={30} color={'black'} />
    </TouchableOpacity>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{header: () => {}}}
        />
        <Stack.Screen
          name="Detail"
          component={Detail}
          options={({navigation, route}) => ({
            headerRight: () => (
              <Text style={{fontSize: 14, margin: 10}}>
                {route.params.date}
              </Text>
            ),
          })}
        />
        <Stack.Screen name="Yeni Kayıt" component={AddYeniKayit} />
        <Stack.Screen name="Yeni Randevu" component={AddRandevu} />
        <Stack.Screen name="Yeni İlaç" component={AddIlac} />
        <Stack.Screen name="Yeni Görev" component={AddGorev} />
        <Stack.Screen
          name="Kayıt Güncelle"
          component={AddYeniKayit}
          options={{
            headerRight: () => <Menu />,
          }}
        />
        <Stack.Screen
          name="Randevu Güncelle"
          component={AddRandevu}
          options={{
            headerRight: () => <Menu />,
          }}
        />
        <Stack.Screen
          name="İlaç Güncelle"
          component={AddIlac}
          options={{
            headerRight: () => <Menu />,
          }}
        />
        <Stack.Screen
          name="Görev Güncelle"
          component={AddGorev}
          options={{
            headerRight: () => <Menu />,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

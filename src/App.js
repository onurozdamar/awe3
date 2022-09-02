import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './screens/Home';
import Detail from './screens/HospitalDetail';
import AddNewRecord from './screens/AddNewRecord';
import AddAppointment from './screens/AddAppointment';
import AddDrag from './screens/AddDrag';
import AddTask from './screens/AddTask';
import {Text, TouchableOpacity} from 'react-native';
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
        <Stack.Screen name="Yeni Kayıt" component={AddNewRecord} />
        <Stack.Screen name="Yeni Appointment" component={AddAppointment} />
        <Stack.Screen name="Yeni İlaç" component={AddDrag} />
        <Stack.Screen name="Yeni Görev" component={AddTask} />
        <Stack.Screen
          name="Kayıt Güncelle"
          component={AddNewRecord}
          options={{
            headerRight: () => <Menu />,
          }}
        />
        <Stack.Screen
          name="Appointment Güncelle"
          component={AddAppointment}
          options={{
            headerRight: () => <Menu />,
          }}
        />
        <Stack.Screen
          name="İlaç Güncelle"
          component={AddDrag}
          options={{
            headerRight: () => <Menu />,
          }}
        />
        <Stack.Screen
          name="Görev Güncelle"
          component={AddTask}
          options={{
            headerRight: () => <Menu />,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

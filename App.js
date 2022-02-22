import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Paytmhome from './paytmhome';
import SearchProduct from './searchProduct';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SearchProduc"
        screenOptions={{
          headerShown: false,
        }}>

        <Stack.Screen name="Paytmhome" component={Paytmhome}></Stack.Screen>
        <Stack.Screen name="SearchProduct" component={SearchProduct}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import Login from './src/components/Login';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TeamSetup from './src/components/teamSetup';
import CategoryItems from './src/components/CategoryItems';
import ItemDetails from './src/components/ItemDetails';
type RootStackParamList = {
  NomeCategoria: {data: any[]};
  Login: undefined;
  Impostazioni: undefined;
  Dettagli: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Impostazioni"
          component={TeamSetup}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="NomeCategoria"
          component={CategoryItems}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Dettagli"
          component={ItemDetails}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

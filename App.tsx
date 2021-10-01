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
import {Provider} from 'react-redux';
import {store} from './src/store/store';
import ItemDetails from './src/components/ItemDetails';
import theme from './src/components/Theme';
type RootStackParamList = {
  Prodotti: {data: any[]};
  Login: undefined;
  Impostazioni: undefined;
  Dettagli: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <Provider store={store}>
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
            name="Prodotti"
            component={CategoryItems}
            options={{
              headerStyle: {
                backgroundColor: theme.colors.lightOrange,
              },
            }}
          />
          <Stack.Screen
            name="Dettagli"
            component={ItemDetails}
            options={{
              headerStyle: {
                backgroundColor: theme.colors.lightOrange,
              },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;

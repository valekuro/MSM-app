/**
 * @author: Valentina D'Orazio
 * year: 2021
 */
import React from 'react';
import theme from '../Theme';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Settings from './Settings';
import User from '../User';

const Tab = createMaterialTopTabNavigator();
/**
 * setting tab navigation bar
 * @returns
 */
export default function SettingTabsNavBar() {
  return (
    <Tab.Navigator
      screenOptions={() => ({
        tabBarActiveTintColor: theme.colors.darkOrange,
        tabBarInactiveTintColor: theme.colors.darkGrey,
        tabBarStyle: {
          borderBottomColor: theme.colors.darkOrange,
          backgroundColor: theme.colors.lightOrange,
        },
        tabBarIndicatorStyle:{
          backgroundColor: theme.colors.darkOrange,
        }
      })}>
      <Tab.Screen name="Utente" component={User} />
      <Tab.Screen name="Gruppo" component={Settings} />
    </Tab.Navigator>
  );
}

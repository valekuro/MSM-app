import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SettingTabsNavBar from '../Settings/SettingTabsNavBar';
import Notify from '../Notify';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import theme from '../Theme';
import Catalog from '../Catalog';
import {
  faSearch,
  faList,
  faCommentAlt,
  faCog,
} from '@fortawesome/free-solid-svg-icons';
import List from '../List';
import CategoryItems from '../CategoryItems';
export default function TeamSetup() {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => {
          switch (route.name) {
            case 'Catalog':
              return (
                <FontAwesomeIcon
                  icon={faSearch}
                  style={{
                    color: `${focused ? theme.colors.darkOrange : 'black'}`,
                  }}
                />
              );
            case 'Lista':
              return (
                <FontAwesomeIcon
                  icon={faList}
                  style={{
                    color: `${focused ? theme.colors.darkOrange : 'black'}`,
                  }}
                />
              );
            case 'Notifiche':
              return (
                <FontAwesomeIcon
                  icon={faCommentAlt}
                  style={{
                    color: `${focused ? theme.colors.darkOrange : 'black'}`,
                  }}
                />
              );
            case 'Settings':
              return (
                <FontAwesomeIcon
                  icon={faCog}
                  style={{
                    color: `${focused ? theme.colors.darkOrange : 'black'}`,
                  }}
                />
              );
          }
          return;
        },
        tabBarActiveTintColor: `${theme.colors.darkOrange}`,
        tabBarInactiveTintColor: 'black',
      })}>
      <Tab.Screen name="Settings" component={SettingTabsNavBar} />
      <Tab.Screen name="Catalog" component={Catalog} />
      <Tab.Screen name="Lista" component={List} />
      <Tab.Screen
        name="Notifiche"
        component={Notify}
        options={{tabBarBadge: 3}}
      />
    </Tab.Navigator>
  );
}

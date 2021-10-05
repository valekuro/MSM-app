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
export default function TeamSetup() {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => {
          switch (route.name) {
            case 'Catalogo':
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
            case 'Impostazioni':
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
        tabBarActiveBackgroundColor: `${theme.colors.lightOrange}`,
        tabBarInactiveBackgroundColor: `${theme.colors.lightOrange}`,
        tabBarIndicatorStyle: {
          backgroundColor: `${theme.colors.darkOrange}`,
        },
      })}>
      <Tab.Screen
        name="Impostazioni"
        component={SettingTabsNavBar}
        options={{
          headerStyle: {
            backgroundColor: theme.colors.lightOrange,
          },
          tabBarLabel: 'Impostazioni',
        }}
      />
      <Tab.Screen
        name="Catalogo"
        component={Catalog}
        options={{
          headerStyle: {
            backgroundColor: theme.colors.lightOrange,
          },
          tabBarLabel: 'Catalogo',
        }}
      />
      <Tab.Screen
        name="Lista"
        component={List}
        options={{
          headerStyle: {
            backgroundColor: theme.colors.lightOrange,
          },
          tabBarLabel: 'Lista',
        }}
      />
      <Tab.Screen
        name="Notifiche"
        component={Notify}
        options={{
          tabBarBadge: 3,
          headerStyle: {
            backgroundColor: theme.colors.lightOrange,
          },
          tabBarLabel: 'Notifiche',
        }}
      />
    </Tab.Navigator>
  );
}

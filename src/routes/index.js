import * as React from 'react';
import {Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

import DashboardScreen from '../screens/dashboard';
import SetCompareScreen from '../screens/setCompare';
import SelectSetAction from '../screens/selectSetAction';
import SetQuestion from '../screens/setQuestion';
import SelectAnswer from '../screens/selectAnswer/SelectAnswer';

const Tab = createMaterialBottomTabNavigator();
const TabStack = createStackNavigator();
const CompareStack = createStackNavigator();
const Stack = createStackNavigator();

function CompareStackNavigator() {
  return (
    <CompareStack.Navigator>
      <CompareStack.Screen name="SetCompare" component={SetCompareScreen} />
      <CompareStack.Screen name="SetAction" component={SelectSetAction} />
      <CompareStack.Screen name="SetQuestion" component={SetQuestion} />
      <CompareStack.Screen name="SelectAnswer" component={SelectAnswer} />
    </CompareStack.Navigator>
  );
}

function TabsNavigation() {
  return (
    <Tab.Navigator activeColor="#f0edf6" inactiveColor="#3e2465">
      <TabStack.Screen
        name="DashboardScreen"
        component={DashboardScreen}
        options={{
          tabBarLabel: 'Dashboard',
          tabBarIcon: () => (
            <Image
              source={require('../assets/icons/dashboard.png')}
              style={{width: 23, height: 23}}
            />
          ),
        }}
      />
      <TabStack.Screen
        name="SetCompareScreen"
        component={CompareStackNavigator}
        options={{
          tabBarLabel: 'SetCompare',
          tabBarIcon: () => (
            <Image
              source={require('../assets/icons/compare.png')}
              style={{width: 23, height: 23}}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export const AppContainer = () => (
  <NavigationContainer>
    {/* <Stack.Navigator initialRouteName="MainTabs">
      <Stack.Screen name="MainTabs" component={TabsNavigation} />
      <Stack.Screen name="SetAction" component={CompareStackNavigator} />
    </Stack.Navigator> */}
    <TabsNavigation />
    {/* <CompareStackNavigator /> */}
  </NavigationContainer>
);

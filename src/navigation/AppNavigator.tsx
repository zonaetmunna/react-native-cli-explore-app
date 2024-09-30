import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Welcome from '../screens/Welcome';
import TermsOfUse from '../screens/TermsOfUse';
import Login from '../../Login';
import Home from '../../Home';
import RegisterScreen from '../screens/RegisterScreen';

const Stack = createNativeStackNavigator();

function AppNavigator(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="welcome">
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="TermsOfUse"
          component={TermsOfUse}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="register"
          component={RegisterScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
    </NavigationContainer>
  );
}

export default AppNavigator;

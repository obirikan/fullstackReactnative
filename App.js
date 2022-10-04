import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Signup from './components/Signup';
import Login from './components/Login';
import Home from './components/Home';
import Slayers from './components/Slayers';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
  <NavigationContainer>
    <Stack.Navigator  screenOptions={{headerShown: false,animation: 'none' }} >
       <Stack.Screen name="sign" component={Signup}  />
       <Stack.Screen name="login" component={Login} />
       <Stack.Screen name="home" component={Home} />
       <Stack.Screen name='slayers' component={Slayers}/>
    </Stack.Navigator>
  </NavigationContainer>
  );
}

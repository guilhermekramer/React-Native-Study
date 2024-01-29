import { StyleSheet } from 'react-native';
import HomePage from './src/components/home/HomePage';
import { NavigationContainer } from '@react-navigation/native';
import MyDrawer from './src/components/drawer/Drawer';

export default function App() {
  return (
    <NavigationContainer>
      <MyDrawer/>
    </NavigationContainer>
   
);
}

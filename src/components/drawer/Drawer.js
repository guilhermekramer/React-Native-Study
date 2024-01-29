import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Stocks from '../stocks/Stocks';
import HomePage from '../home/HomePage';

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator>
        <Drawer.Screen name="Stocks" component={Stocks} />
        <Drawer.Screen name="Home" component={HomePage} />

    </Drawer.Navigator>
  );
}

export default MyDrawer;

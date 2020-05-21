import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../pages/Home';
import Detail from '../pages/Detail';
import Subtitle from '../pages/Subtitle';

const Router = createStackNavigator();

const Routes: React.FC = () => (
  <Router.Navigator screenOptions={{ headerShown: false }}>
    <Router.Screen name="Home" component={Home} />
    <Router.Screen name="Detail" component={Detail} />
    <Router.Screen name="Subtitle" component={Subtitle} />
  </Router.Navigator>
);

export default Routes;

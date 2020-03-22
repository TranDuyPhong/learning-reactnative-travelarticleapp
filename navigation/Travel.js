import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';

import Article from '../screens/Article';
import List from '../screens/List';

export default createStackNavigator({
    List,
    Article
}, {
    initialRouteName: 'List'
});
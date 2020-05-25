import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Appstack = createStackNavigator();

import Incidents from './pages/Incidents';
import Detail from './pages/Detail';

export default function Routes() {
    return (
        <NavigationContainer>

            <Appstack.Navigator screenOptions={{ headerShown: false }}>
                <Appstack.Screen name="Incidents" component={Incidents} />
                <Appstack.Screen name="Detail" component={Detail} />
            </Appstack.Navigator>

        </NavigationContainer>
    );
}
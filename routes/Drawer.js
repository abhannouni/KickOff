import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
import JoueursStack from './JoueursStack';
import MatchsStack from './MatchsStack';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
    return (
        <Drawer.Navigator>
        <Drawer.Screen
            name="Matchs"
            component={MatchsStack}
            options={{
            drawerIcon: () => <Ionicons name="football" size={24} />,
            }}
        />
        <Drawer.Screen
            name="Joueurs"
            component={JoueursStack}
            options={{
            drawerIcon: () => <Ionicons name="people" size={24} />,
            }}
        />
        </Drawer.Navigator>
    );
    }
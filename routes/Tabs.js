import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from '@expo/vector-icons/Ionicons';
import JoueursStack from './JoueursStack';
import MatchsStack from './MatchsStack';
import Colors from '../styles/Colors';
import FavoriteStack from './FavoriteStack';


const matchs = "matchs";
const players = "players";
const FavoriteName = "Favorite";

const Tab = createBottomTabNavigator();


function MainContainer() {

    return (
        <Tab.Navigator
        initialRouteName={matchs}
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                let iconName;
                let rn = route.name;
                
                if (rn === matchs) {
                    iconName = focused ? 'football' : 'football-outline';
                    
                    
                } else if (rn === players) {
                    iconName = focused ? 'people' : 'people-outline';
                } else if (rn === FavoriteName) {
                    iconName = focused ? 'star' : 'star-outline';
                }
                return <Icon name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: Colors.textWhite,
            tabBarInactiveTintColor: Colors.textGray,
            tabBarInactiveBackgroundColor: Colors.background,
            tabBarActiveBackgroundColor: Colors.background,

            tabBarLabelStyle: { paddingBottom: 10, fontSize: 10 },
            tabBarStyle: { height: 70 }
          })}>
            
  
          <Tab.Screen name={matchs} component={MatchsStack} options={{headerShown: false}}/>
          <Tab.Screen name={players} component={JoueursStack} options={{headerShown: false}}/>
          <Tab.Screen name={FavoriteName} component={FavoriteStack} options={{headerShown: false}}/>
          

  
        </Tab.Navigator>
    );
  }

export default MainContainer;
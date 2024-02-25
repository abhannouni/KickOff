import { createStackNavigator } from '@react-navigation/stack';

import Favorite from '../screens/Favorite';

export default function FavoriteStack() {
    const Stack = createStackNavigator();
    
    return (
        <Stack.Navigator>
        <Stack.Screen name="Favorit" component={Favorite} options={{headerShown: false}}/>
        </Stack.Navigator>
    );
}
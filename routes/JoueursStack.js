import { createStackNavigator } from '@react-navigation/stack';

import Joueurs from '../screens/Joueurs';
import JoueurDetails from '../screens/JoueurDetails';

export default function JoueursStack() {
    const Stack = createStackNavigator();
    
    return (
        <Stack.Navigator>
        <Stack.Screen name="Joueurs" component={Joueurs} options={{headerShown: false}}/>
        <Stack.Screen name="JoueurDetails" component={JoueurDetails} options={{headerShown: false}} />
        </Stack.Navigator>
    );
}
import { createStackNavigator } from '@react-navigation/stack';

import Matchs from '../screens/Matchs';
import MatchDetails from '../screens/MatchDetails';

export default function MatchsStack() {
    const Stack = createStackNavigator();
    
    return (
        <Stack.Navigator>
        <Stack.Screen name="Match" component={Matchs} options={{headerShown: false}}/>
        <Stack.Screen name="MatchDetails" component={MatchDetails} options={{headerShown: false}}/>
        </Stack.Navigator>
    );
}
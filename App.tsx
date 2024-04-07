import Home from './src/screens/Home/Home';
import PasswordSaved from './src/screens/PassSaved/PasswordSaved';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={Home} options={{ headerShown: false }}/>
        <Stack.Screen name='PasswordSaved' component={PasswordSaved}/>
      </Stack.Navigator>
    </NavigationContainer>
      
  );
}


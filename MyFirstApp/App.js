import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TableScreen from './screens/TableScreen';
import FormScreen from './screens/FormScreen';
import Footer from './Footer';
const API_BASE_URL = 'http://localhost:2500';
const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <View style={{ flex: 1, flexDirection: 'column' }}>
            <NavigationContainer>
                <Tab.Navigator>
                    <Tab.Screen name="Table" component={TableScreen} />
                    <Tab.Screen name="Form" component={FormScreen} />
                </Tab.Navigator>
            </NavigationContainer>
            <Footer />
            <StatusBar style="auto" />
        </View>
    );
}



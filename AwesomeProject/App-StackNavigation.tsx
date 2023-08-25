import { Text, View, StyleSheet, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Create Stack Object
const Stack = createNativeStackNavigator();

const HomeScreen = (props) => {

    const onMove = () => {
        props.navigation.navigate('Profile', { id: 1, name: 'Subramanian' })
    }

    return <View style={styles.container}>
        <Text>Home Screen</Text>
        <Button title="Profile" onPress={onMove} />
    </View>
}
const ProfileScreen = (props) => {

    return <View style={styles.container}>
        <Text>Profile Screen</Text>
        <Text>{props.route.params.id} {props.route.params.name}</Text>
    </View>
}

export default function App() {
    return <NavigationContainer>

        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen options={({ route }) => {
                return {
                    title: `Profile`    ,
                    headerStyle: {
                        backgroundColor: 'yellow'
                    },
                    headerTintColor: 'blue',
                    headerTitleStyle: {
                        fontWeight: 'bold'
                    }
                }
            }} name="Profile" component={ProfileScreen} />
        </Stack.Navigator>

    </NavigationContainer>
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
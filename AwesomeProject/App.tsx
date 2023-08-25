import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { View, Text, StyleSheet, Button } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';


//Create Drawer
const Drawer = createDrawerNavigator();

//screens

const Feed = () => <View style={styles.container}><Text>Feed</Text></View>
const Article = () => <View style={styles.container}><Text>Articles</Text></View>

function App() {
    return <NavigationContainer>
        <Drawer.Navigator>
            <Drawer.Screen name="Feed" component={Feed} />
            <Drawer.Screen name="Article" component={Article} />
        </Drawer.Navigator>
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

export default App
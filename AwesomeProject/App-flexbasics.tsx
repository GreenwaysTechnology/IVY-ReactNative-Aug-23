import { StyleSheet, Text, View } from 'react-native'

const MyComponent_ = props => {
    // Flex container
    return <View style={{ flex: 1 }}>
        {/* Flex items:children */}
        <View style={{flex:1,backgroundColor:'red'}} />
        <View style={{flex:2,backgroundColor:'yellow'}}/>
        <View style={{flex:3,backgroundColor:'blue'}} />
        <View style={{flex:4,backgroundColor:'pink'}} />

        </View>
}
const MyComponent_nested = props => {
    // Flex container
    return <View style={{ flex: 1 }}>
        {/* Flex items:children */}
        <View style={{ flex: 1, backgroundColor: 'red' }} />
        <View style={{ flex: 2, backgroundColor: 'yellow' }} />
        <View style={{ flex: 3, backgroundColor: 'blue' }} />
        <View style={{ flex: 4, backgroundColor: 'green' }}>
            <View style={{ flex: 1, backgroundColor: 'white' }} />
            <View style={{ flex: 2, backgroundColor: 'yellow' }} />
        </View>
    </View>
}
const MyComponent = props => {
    // Flex container
    return <View style={styles.container}>
        <Text style={styles.headerStyle}>Flex Direction</Text>
        <View style={styles.elementsContainer}>
            <View style={{width:50,height:50,backgroundColor:'red'}}/>
            <View style={{width:50,height:50,backgroundColor:'yellow'}}/>
            <View style={{width:50,height:50,backgroundColor:'green'}}/>
        </ View>
    </View>
}

const App = () => {
    return <MyComponent />
}

export default App;
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    headerStyle: {
        fontSize: 29,
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 24,
        color:'blue'
    },
    elementsContainer: {
        flex:1,
        backgroundColor:'black',
        marginLeft: 24,
        marginRight:24,
        flexDirection:'row-reverse',
        marginBottom:24
    }

})
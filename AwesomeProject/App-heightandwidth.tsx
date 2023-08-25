import { StyleSheet, Text, View } from 'react-native'

const Message = props => {
    return <>
        <Text style={styles.label}>{props.message}</Text>
        <Text style={{
            fontSize: 90,
            fontWeight: 'bold',
            fontFamily: "TGaramond",
            color: '#61dafb',
            borderWidth: 4
        }}>{props.message}</Text>

    </>
}
const MyComponent = props => {
    return <View style={{ height: '100%', width: '100%' }}>
        <View style={{ height: '15%', backgroundColor: 'red' }} />
        <View style={{ height: '35%', width: '66%', backgroundColor: 'skyblue' }} />
        <View style={{ height: '50%', width: '33%', backgroundColor: 'steelblue' }} />
    </View >
}

const App = () => {
    return <View>
        {/* <Message message="Hello" /> */}
        <MyComponent/>
    </View>


}
export default App;

//Style sheet Object 
const styles = StyleSheet.create({
    container: {
       flex:1 //100%
    },
    label: {
        fontSize: 90,
        fontWeight: 'bold',
        fontFamily: "TGaramond",
        color: '#61dafb',
        borderWidth: 4,
        width: 220
    }
})
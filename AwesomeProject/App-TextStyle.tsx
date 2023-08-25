import { useState } from "react";
import { Text, View, StyleSheet, Button } from "react-native";

const Welcome = props => {
    return <>
        <Text>{props.text}</Text>
    </>
}

const Counter = props => {
    const [counter, setCounter] = useState(0)

    return <>
        <Text style={styles.label}>Counter : {counter}</Text>
        <Button title="+" onPress={() => {
            setCounter(counter + 1)
        }} />
    </>
}


export default function App() {

    return <View style={styles.container}>
        <Text style={styles.label}>
            Hello
        </Text>
        <Text style={{ fontSize: 30 }}>
            Welcome
        </Text>
        <Welcome text="Welcome" />
        <Counter/>
    </View>

}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#61dafb'
    },
    label: {
        fontSize: 40
    }

})
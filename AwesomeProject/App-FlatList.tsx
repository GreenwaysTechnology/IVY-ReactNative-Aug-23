import { useState } from "react";
import { Text,FlatList,View,StyleSheet } from "react-native";
import { TODOS } from "./mock-data/todos";

//todos 

export default function App() {

    return <View style={styles.container}>
          <FlatList
            data={TODOS}
            renderItem={({ item: { title } }) => <Text>{title}</Text>}
            keyExtractor={item => item.id.toString()}
        />
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
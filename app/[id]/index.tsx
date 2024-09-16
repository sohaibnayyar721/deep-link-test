import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { useRoute } from '@react-navigation/native'
import { useLocalSearchParams } from 'expo-router';
function Details() {
    const { id, name, age, gender, hobby } = useLocalSearchParams();
    console.log("id: ", id)
    console.log("name: ", name)
    console.log("age: ", age)

    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <View style={styles.item}>
                <Text style={styles.title}>Name: {name}</Text>
                <Text style={styles.title}>Age: {age}</Text>
                <Text style={styles.title}>Gender: {gender}</Text>
                <Text style={styles.title}>Hobby: {hobby}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
       
        gap: 10,
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    }
})

export default Details
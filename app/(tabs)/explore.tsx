import React from 'react'
import { View, Text, KeyboardAvoidingView, SafeAreaView } from 'react-native'
function Explore() {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <KeyboardAvoidingView style={{ flex: 1 }}>
                <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                    <Text style={{ color: "black", fontSize: 20 }}>
                        Explore</Text></View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

export default Explore
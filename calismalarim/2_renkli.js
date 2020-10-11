import React from "react";
import {SafeAreaView, View, StyleSheet} from "react-native";

const App = () => {
    return (
      <SafeAreaView style={{flex: 1}}>
            <View style={styles.container}>
                <View style={{backgroundColor:"red", flex:1}}></View>
                <View style={{backgroundColor:"green", flex:1}}></View>
            </View>
            <View style={{backgroundColor:"blue", flex:1}}></View>
            <View style={{backgroundColor:"gray", flex:1}}></View>
            <View style={{backgroundColor:"yellow", flex:1}}></View>
        </SafeAreaView>
    );
};

export default App;

const styles = StyleSheet.create ({
    container: {
        flex: 3,
        flexDirection: "row"
    },
});


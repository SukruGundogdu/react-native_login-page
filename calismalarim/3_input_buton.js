import React, { version } from 'react';
import {SafeAreaView,
     View, 
     Text, 
     StyleSheet, 
     TextInput, 
     Platform,
     TouchableOpacity,
    } from 'react-native';

const App = () => {
    const platform = Platform.OS;

    function sayHello(deviceType) {
        if(deviceType === "ios")
            return <Text style={{fontSize:30,}} >Hello  to İphone {version} </Text>
        else
            return <Text style={{fontSize:30,}} >Hello to Android! {version}</Text>
    }

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>

        <View style={styles.inputContainer}>
            <TextInput 
            keyboardType= "number-pad"   
            placeholder="Aramak istediğiniz ürünü giriniz.."
            />
        </View>
        {/* <Text style={{fontSize: 40}}> Cihaz: {platform} </Text> */}
        {sayHello()}

        <TouchableOpacity style={styles.buttonContainer}>
           <Text style={styles.textStyle}>Ara</Text>
       </TouchableOpacity>
       </View>
       

    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0e0e0',
    justifyContent: "center"
  },
  inputContainer: {
      backgroundColor: "white",
      padding: 10,
      margin: 10,
      borderColor: "gray",
      borderRadius: 10,
      borderWidth:1
  },
  buttonContainer: {
      backgroundColor: "blue",
      padding: 10,
      margin: 20,
      borderRadius: 5,
      alignItems: "center"
  },
  textStyle: {
      fontSize: 17,
      color: "white",
      fontWeight: "bold"
  }
});
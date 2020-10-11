import React from "react";
import {SafeAreaView, Text, View, Button} from "react-native";



const App =  () => {

    const pressFunction = () => {
        // console.log("Merhaba!")

        //SPREAD OPERATOR
        // user nesnesindeki biglileri memberin içine kopyalamak isteyelim üc nokta user(...user)
        // tek tek name: user.name, age: user.age vs. yazmaktan bizi kurtarıyor

        const user = {
            name: "Ezran",
            age: 28,
            isAdmin: false
        }
        
        const member = {
            ...user,              
            password: "12345",
            type: null
        }
        // console.log(user);
        // console.log(member);

         //spread özelliği arraylerdede geçerlidir.

    const myArr = [1,2,3,4];

    const secArr = ["İzmir", "Ankara", ...myArr]
    
    // console.log(secArr);





    // DESTRUCTİON OPERATOR

    const myObj = {
        url: "www.google.com",
        data: [1,2,3],
        config: "EMPTY"
    }

    //normalde bu objemizin config valuesine ulaşmak için aşagıda
    // console.log(myObj.config);

    // destruction özelliği ile  suslu parantez içinde yazarak asagıda, artık istediğim yerde daha rahat cagırırım

    // const {config} = myObj
    // console.log(config);

    // çoklu degiskene atayarakda yapabiliriz

    const {config, url} = myObj
    console.log(config);
    console.log(url);


    // call back functionlardada yazabiliriz asagıda

    // (event) => {
    //     event.target
    //     //
    //     //
    //     //
    //     event.domain
    // }

    // ({target, domain}) => {
    //     target
    //     //
    //     //
    //     //
    //     domain
    // }

    
    }

   

    

    return (
        <SafeAreaView style={{flex:1}} >
            <View style={{flex:1, justifyContent:"center", alignItems:"center"}} >
                <Text>Hello React Native CLARUSWAY</Text>
                <Button title="Log" onPress={pressFunction} />   
                {/* fonksiyonu () ile cagırırsak derlenmıs olur fonksıyonu cagırırır bir kere calıstırı ve biter. birdaha gelmez buton her tıklandıgında Merhaba gelmesi için parantez koymayızki her tırklandıgıda calıssın. normalde onPress={() => {console.log("Merhaba!")}} yazabilirdik kod fazlalıgı olmamması ıcın yazmadık*/}
            </View>
        </SafeAreaView>
    );
};


export default App;




{/* <Button title="Log" onPress={pressFunction} /> bunun çıktısı asagıda

---- <Button title="Log" onPress={() => {
    console.log("Merhaba")
}} />


<Button title="Log" onPress={pressFunction()} /> bunun cıktısı asagıda

---- <Button title="Log" onPress={console.log("Merhaba!")} /> */}
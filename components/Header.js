import React from "react";
import { Text, View, ScrollView, StyleSheet } from "react-native";

const Header = () =>{
    return(
        <>
        
        <View>

        <Text style={styles.texto} > Hola mundo </Text>
        </View>
        
        </>
    )
}

const styles = StyleSheet.create({
    texto:{
        textAlign: 'center',
        fontSize: 35,
        backgroundColor: 'blue',
        color: '#fff',
        marginTop: 20
    }
})
export default Header
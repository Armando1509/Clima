import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView } from "react-native";

import Header from "./components/Header";
import Formulario from "./components/Formulario";
export default function App() {
  return (
    <>
      
        <View style={styles.app} >
          <View style={styles.contenido}>
            <Formulario />
          </View>
        </View>
      
    </>
  );
}

const styles = StyleSheet.create({
  contenido:{
    marginHorizontal: '2.5%'
  },
  app:{
    flex: 1,
    backgroundColor: 'rgb(71,149,212)',
    justifyContent: 'center'
  }
});

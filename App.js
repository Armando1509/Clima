import React, {useEffect, useState} from "react";
import {
  StyleSheet,
  Text,
  View,
  Keyboard,
  TouchableWithoutFeedback,
  Alert
} from "react-native";

import Clima from "./components/Clima";
import Formulario from "./components/Formulario";
export default function App() {
  const [ busqueda, guardarBusqueda ] = useState({
    ciudad: '',
    pais: ''
  })

  const {ciudad, pais}= busqueda;
  const [consultar, guardarConsultar] = useState(false)
  const [ resultado, guardarResultado ] = useState({})
  const [bgcolor, guardarBgcolor] = useState('rgb(71,149,212)')

  useEffect(()=>{
   const consultarClima = async () =>{
    if(consultar){

      
      const appId = '9e6b1979c286bba5ddcdbaf0b9c4fde0'
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`
     
      try {
        const respuesta = await fetch(url)   
        const resultado = await respuesta.json()
        guardarResultado(resultado)
        guardarConsultar(false)
        // modifica los colores de fondo basado en la temperatura
        const kelvin = 273.15
        const {main} = resultado
        const actual = main.temp - kelvin;

        if(actual < 11) {
          guardarBgcolor('rgb( 105, 108, 149 )');
        } else if(actual >= 10 && actual < 25) {
          guardarBgcolor('rgb(71, 149, 212)');
        } else {
          guardarBgcolor('rgb( 178, 28, 61)');
        }

      } catch (error) {
        mostrarAlerta()
      }
    }
   }
   consultarClima()
    
  },[consultar])

  const mostrarAlerta = () =>{
    Alert.alert(
      'Alerta',
      'Ciudad no encontrada',
      [
        {text: 'Aceptar'}
      ]
    )
  }

  const ocultarTeclado = ( ) =>{
    Keyboard.dismiss()
  }
  const bgColorApp = {
    backgroundColor: bgcolor
  }
  return (
    <>
      <TouchableWithoutFeedback onPress={()=> ocultarTeclado()} >
        <View style={[styles.app, bgColorApp]}>
          <View style={styles.contenido}>
            <Clima
            resultado={resultado}
            />
            <Formulario
            busqueda={busqueda}
            guardarBusqueda={guardarBusqueda}
            guardarConsultar={guardarConsultar}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </>
  );
}

const styles = StyleSheet.create({
  contenido: {
    marginHorizontal: "2.5%",
  },
  app: {
    flex: 1,
    justifyContent: "center",
  },
});

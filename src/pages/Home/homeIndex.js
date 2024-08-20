import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput,
TouchableOpacity } from "react-native";
import { Picker } from '@react-native-picker/picker';
import * as Animatable from "react-native-animatable";
import { useNavigation } from '@react-navigation/native';


export default function Home(){
    const navigation = useNavigation();
    return (
      <View style={styles.container}>

            <Animatable.View animation="fadeInDown" delay={100} style={styles.containerHeader}>
                <Text style={styles.message}>Perfis</Text>
                <View style={styles.profile}>
                  <Text style={styles.name}>Nome-conta</Text>
                  <View style={styles.image}></View>
                </View>
            </Animatable.View>

            <Animatable.View animation= "fadeInUp" delay={100} style={styles.containerForm}>
                <Text style={styles.title}>Responsável</Text>

                <View style={styles.user}>
                  <View style={styles.imageuser}></View>
                  <View style={styles.userbox}>
                    <Text style={styles.name2}>Nome do Usuario:</Text>
                    <View>
                      <Text>Idade:</Text>
                      <Text>Sexo:</Text>
                    </View>
                  </View>

                </View>
                <Text style={styles.title}>Adicionar nova conta</Text>
                <Text style={styles.buttontext} onPress={() => navigation.navigate('Entrar')}>Anterior</Text>
                <Text style={styles.buttontext} onPress={() => navigation.navigate('UsuarioSecundario')}>Adicionar Novo Usuario</Text>
            </Animatable.View>
        </View>
    );
}
const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: "#613CF0",
  },
  message:{
    fontWeight: 'bold',
    fontSize: 25,
    color: "#fff",
  },
  containerHeader:{
    flexDirection: "row",
    paddingTop:10,
    paddingBottom:10,
    paddingStart: 25,
    paddingEnd:25,
    justifyContent: `space-between`,
  },
  profile:{
    flexDirection: 'row',
  },
  name:{
    marginTop: 10,
    fontWeight: 'bold',
    fontSize: 15,
    paddingEnd: 10,
    color: "white",
  },
  name2:{
    marginTop: 10,
    fontWeight: 'bold',
    fontSize: 20,
    paddingEnd: 10,
    color: "black",
  },
  image:{
    borderColor: '#000',
    borderWidth: 1,
    borderRadius:50,
    backgroundColor: '#fff',
    width:30,
    height:30,
    margin: `auto`,
  },
  containerForm: {
    flex: 1,
    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    padding: 40,
  },
  title:{
    fontSize:15,
    fontWeight: 'bold',
    marginBottom:20,
  }, 
  user:{
    paddingTop: 8,
    paddingBottom: 10,
    paddingStart: 25,
    paddingEnd:25,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: 'black',
    flexDirection: 'row',
    marginLeft:15,
    marginBottom:10,
  },
  imageuser:{
    borderColor: '#000',
    borderWidth: 1,
    borderRadius:50,
    backgroundColor: '#fff',
    width:65,
    height:65,
    marginEnd:6,
  },
  userbox:{
    paddingHorizontal: 10,
    paddingLeft: 10,
    width:'75%',
  },
})
import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput,
TouchableOpacity,Image } from "react-native";
import { Picker } from '@react-native-picker/picker';
import * as Animatable from "react-native-animatable";
import { useNavigation } from '@react-navigation/native';


export default function Home(){
    const navigation = useNavigation();
    const voltarpng = require("../../assets/voltar.png");
    const add = require("../../assets/Adicionar.png");
    return (
      <View style={styles.container}>

            <Animatable.View animation="fadeInDown" delay={100} style={styles.containerHeader}>
                <Text style={styles.buttonvolt} onPress={() => navigation.navigate('Entrar')}>                
                  <Image source={voltarpng} style={styles.buttonvolt}></Image>
                </Text>
                <View style={styles.profileHeader}>
                  <Text style={styles.message}>Perfis</Text>
                  <View style={styles.profile}>
                    <Text style={styles.name}>Nome-conta</Text>
                    <View style={styles.image}></View>
                  </View>
                </View>
            </Animatable.View>

            <Animatable.View animation= "fadeInUp" delay={100} style={styles.containerForm}>
                <Text style={styles.title}>Responsável</Text>

                <View style={styles.user}>
                  <View style={styles.imageuser}></View>
                  <View style={styles.userbox}>
                    <Text style={styles.name2}>(Nome do perfil)</Text>
                    <View>
                      <Text>Idade:</Text>
                      <Text>Sexo:</Text>
                    </View>
                    <View style={styles.line}></View>
                  </View>
                </View>
                
                <Text style={styles.title}>Usuarios</Text>

                <View style={styles.user}>
                  <View style={styles.imageuser}></View>
                  <View style={styles.userbox}>
                    <Text style={styles.name2}>(Nome do perfil)</Text>
                    <View>
                      <Text>Idade:</Text>
                      <Text>Sexo:</Text>
                    </View>
                    <View style={styles.line}></View>
                  </View>

                </View><View style={styles.user}>
                  <View style={styles.imageuser}></View>
                  <View style={styles.userbox}>
                    <Text style={styles.name2}>(Nome do perfil)</Text>
                    <View>
                      <Text>Idade:</Text>
                      <Text>Sexo:</Text>
                    </View>
                    <View style={styles.line}></View>
                  </View>
                </View>
                
                <Text style={styles.buttonadd} onPress={() => navigation.navigate('UsuarioSecundario')}>
                  <View>
                    <Image source={add} style={styles.addimg} />
                    <Text>Adicionar Novo Usuario</Text>
                  </View>
                </Text>
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
    paddingStart: 5,
    paddingEnd:25
  },
  profileHeader:{
    flexDirection:"row",
    justifyContent: `space-between`,
    flex:1,
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
    fontWeight: 'bold',
    fontSize: 20,
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
    paddingBottom: 10,
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
    flex:1,
  },
  line:{
    marginTop:10,
    height:2,
    width:`100%`,
    backgroundColor:"black",
  },
  buttonadd:{
    margin:'auto',
    fontSize:15,
    fontWeight: 'bold',
    marginBottom:70,
  },
  buttonvolt:{
    color: "white",
    margin:"auto",
    width:30,
    height:30,
    marginRight:5,
  },
  addimg:{
    width:80,
    height:80,
    margin:"auto",
  }
})
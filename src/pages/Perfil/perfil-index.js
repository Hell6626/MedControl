import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';

export default function Perfil() {
  const navigation = useNavigation();
  const addPng = require("../../assets/Adicionar.png");

  return (
    <View style={styles.container}>
      <Animatable.View animation="fadeInDown" delay={600} style={styles.containerHeader}>
        <TouchableOpacity onPress={() => navigation.navigate('Entrar')} style={styles.buttonvolt}>
          <Icon name="chevron-left" size={35} color="#fff" />
        </TouchableOpacity>
        <View style={styles.profileHeader}>
          <Text style={styles.message}>Perfis</Text>
        </View>
      </Animatable.View>

      <Animatable.View animation="fadeInUp" delay={1000} style={styles.containerForm}>
        <Text style={styles.title}>Responsável</Text>
        <UserProfile />
        <Text style={styles.title}>Usuários</Text>
        <ScrollView>
          <UserProfile />
          <UserProfile />
          <UserProfile />
        </ScrollView>


        <TouchableOpacity style={styles.buttonadd} onPress={() => navigation.navigate('UsuarioSecundario')}>
          <Image source={addPng} style={styles.addimg} />
          <Text>Adicionar Novo Usuario</Text>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
}

const UserProfile = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity style={styles.user} onPress={() => navigation.navigate('Home')}>
      <View style={styles.imageuser}></View>
      <View style={styles.userbox}>
        <Text style={styles.name}>(Nome do perfil)</Text>
        <Text>Idade:</Text>
        <Text>Sexo:</Text>
        <View style={styles.line}></View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#613CF0",
  },
  message: {
    fontWeight: 'bold',
    fontSize: 25,
    color: "#fff",
  },
  containerHeader: {
    flexDirection: "row",
    paddingTop: 15,
    paddingBottom: 15,
    paddingStart: 5,
    paddingEnd: 25,
  },
  profileHeader: {
    flexDirection: "row",
    justifyContent: `space-between`,
    flex: 1,
  },
  profile: {
    flexDirection: 'row',
  },
  name: {
    fontWeight: 'bold',
    fontSize: 20,
    color: "black",
  },
  image: {
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 50,
    backgroundColor: '#fff',
    width: 30,
    height: 30,
    margin: `auto`,
  },
  containerForm: {
    flex: 1,
    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    padding: 40,
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  user: {
    backgroundColor: "#fff",
    flexDirection: 'row',
    marginBottom: 10,
    borderRadius: 20,
    padding: 25,
    marginHorizontal: '1%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  imageuser: {
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 50,
    backgroundColor: '#fff',
    width: 65,
    height: 65,
    marginEnd: 6,
  },
  userbox: {
    flex: 1,

  },
  line: {
    marginTop: 10,
    height: 2,
    width: `100%`,
    backgroundColor: "black",
  },
  buttonadd: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 40,
    paddingTop: 20,
    margin: "auto",
    alignItems: "center",
    justifyContent: "center"

  },

  buttonvolt: {
    color: "white",
    margin: "auto",
    width: 30,
    height: 30,
    marginRight: 5,
  },
  addimg: {
    width: 80,
    height: 80,
    margin: "auto",
  }
})
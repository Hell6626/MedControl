
import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/Entypo';
export default function Home() {
    const navigation = useNavigation();
    const icon2 = <Icon2 name="magnifying-glass" size={35} color="#fff" />

    return (
      <View style={styles.container}>
        <Animatable.View animation="fadeInDown" delay={400} style={styles.containerHeader}>
            <View style={styles.profileHeader}>
                <TouchableOpacity onPress={() => navigation.navigate('Entrar')} style={styles.buttonvolt}>
                    <Icon name="menufold" size={40} color="#fff" />
                </TouchableOpacity>           
                <View style={styles.profile}>
                    <Text style={styles.name}>Nome-conta</Text>
                    <View style={styles.image}></View>
                </View>
            </View>
            <Text style={styles.message}>Home</Text>
        </Animatable.View>

        <View>
          <TextInput placeholder={icon2}/>
        </View>
        
        <Animatable.View animation="fadeInUp" delay={600} style={styles.containerForm}>
            <Med />
            <Med />
            <Med />
        </Animatable.View>
      </View>
    );
}

const Med = () => (
  <View style={styles.med}>
    <View style={styles.medbox}>
      <Text style={styles.name2}>Medicamento</Text>
      <Text style={styles.title}>Dosagem:</Text>
    </View>
    <Text style={styles.time}>17:55</Text>      
  </View>
);

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColo:"white"
  },
  message:{
    fontWeight: 'bold',
    fontSize: 25,
    color: "#fff",
    margin: "auto",
  },
  containerHeader:{
    paddingTop:10,
    paddingBottom:10,
    height:150,
    backgroundColor:"#613CF0",
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  profileHeader:{
    flexDirection:"row",
  },
  profile:{
    flexDirection: 'row',
    marginLeft:"auto",
  },
  name:{
    fontWeight: 'bold',
    fontSize: 15,
    paddingEnd: 10,
    color: "white",
    margin:"auto",
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
    marginRight:15,
  },
  containerForm: {
    paddingTop:40,
    paddingHorizontal:1,
  },
  title:{
    fontSize:15,
    marginTop:9,
  }, 
  med:{
    backgroundColor:"white",
    flexDirection: 'row',
    marginBottom:10,
    borderRadius:10,
    padding:25,
    width:'100%',
  },
  medbox:{ 
    flex:1,
  },
  time:{
    fontWeight:"bold",
    marginLeft:"auto",
    fontSize:45,
  },
  buttonvolt:{
    color: "white",
    width:30,
    height:30,
    marginLeft:15,
    marginTop:15,
  },
})
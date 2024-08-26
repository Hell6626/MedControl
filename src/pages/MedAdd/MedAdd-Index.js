import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import * as Animatable from "react-native-animatable";
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/EvilIcons';
import Icon2 from 'react-native-vector-icons/Entypo';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function MedAdd() {
    const navigation = useNavigation();
    const [time, setTime] = useState(new Date());
    const [showPicker, setShowPicker] = useState(false);

    const onChange = (event, selectedTime) => {
        const currentTime = selectedTime || time;
        setShowPicker(false);
        setTime(currentTime);
    };

    return (
        <View style={styles.container}>
            <Animatable.View animation="fadeInUpBig" style={styles.containerForm}>
                <View>
                    <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                        <Icon name="close" size={40} style={styles.icon} />
                    </TouchableOpacity>
                    <Text style={styles.message}>Medicamento</Text>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
                        <Icon2 name="squared-plus" size={50} style={styles.icon2} />
                    </TouchableOpacity>
                </View>

                <Text style={styles.timeNumber}>{time.toLocaleTimeString()}</Text>
                <TouchableOpacity onPress={() => setShowPicker(true)}>
                    <Text style={styles.timeButton}>
                        Selecionar horário da primeira dosagem
                    </Text>
                </TouchableOpacity>
                
                <TextInput placeholder={"Produto:"} style={styles.timeText}></TextInput>
                <TextInput placeholder={"Dosegem:"}style={styles.timeText}></TextInput>
                <TextInput placeholder={"Intervalo entre dosagens:"}style={styles.timeText}></TextInput>
                <TextInput placeholder={"Dias de uso:"}style={styles.timeText}></TextInput>
                <TextInput placeholder={"Quantidade por Caixa:"}style={styles.timeText}></TextInput>
                <TextInput placeholder={"Quantidade de Caixas:"}style={styles.timeText}></TextInput>

              
                {showPicker && (
                    <DateTimePicker
                        value={time}
                        mode="time"
                        is24Hour={true}
                        display="default"
                        onChange={onChange}
                        style={styles.time}
                        />
                )}
            </Animatable.View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#613CF0",
    },
    icon: {
        marginTop: 15,
        marginBottom: 15,
        position: "absolute",
    },
    icon2: {
        marginTop: 15,
        marginBottom: 15,
        position: "absolute",
        color:"#613CF0",
    },
    message: {
        marginTop: 15,
        marginBottom: 15,
        fontSize: 28,
        fontWeight: "bold",
        margin:"auto"
    },
    containerForm: {
        flex: 1,
        padding:'5%',
        backgroundColor: "white",
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
    },
    timeText: {
        borderBottomWidth: 1,
        padding: 10,
        backgroundColor: "#e0e0e0",
        borderRadius: 5,
        marginHorizontal: "auto",
        marginBottom:10,
        width:'100%',
        fontSize: 18,
        color: "#333",
    },
    timeButton: {
        backgroundColor:"#613CF0",
        fontSize: 20,
        fontWeight:'bold',
        color:"white",
        textAlign: 'center',
        borderBottomWidth: 1,
        borderRadius: 15,
        width:'90%',
        padding: 10,
        marginBottom:40,
        margin:'auto',
    },
    timeNumber: {
        margin:"auto",
        fontSize: 50,
        color: "#333",
    },
    button: {
        position:'absolute',
        right:45,
        top:-7,
    },
});

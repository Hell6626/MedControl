import React, { useState } from "react";
import {
    View, Text, StyleSheet, TextInput,
    TouchableOpacity
} from "react-native";
import { Picker } from '@react-native-picker/picker';
import * as Animatable from "react-native-animatable";
import { useNavigation } from '@react-navigation/native';
import { TextInputMask } from 'react-native-masked-text';
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export default function UsuarioSecundario() {
    const navigation = useNavigation();
    const [date, setDate] = useState('');

    return (
        <View style={styles.container}>
            <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
                <Text style={styles.message}>Novo Usuário</Text>
            </Animatable.View>

            <Formik
                initialValues={{
                    name: "",
                    birthDate: "",
                    gender: "",
                }}
                validationSchema={Yup.object({
                    name: Yup.string()
                        .min(2, "O nome deve ter pelo menos 2 caracteres")
                        .required("Nome é obrigatório"),
                    birthDate: Yup.string()
                        .required("Data de nascimento é obrigatória")
                        .matches(
                            /^([0-2][0-9]|(3)[0-1])(\/)((0)[0-9]|(1)[0-2])(\/)\d{4}$/,
                            "Formato de data inválido"
                        ),
                    gender: Yup.string().required("Gênero é obrigatório"),
                })}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                        navigation.navigate('Entrar');
                    }, 400);
                }}
            >
                {({ handleChange, handleBlur, handleSubmit, values, isSubmitting, setFieldValue }) => (
                    <Animatable.View animation="fadeInUp" style={styles.containerForm}>
                        <Text style={styles.title}>Nome:</Text>
                        <TextInput
                            placeholder="Nome"
                            style={styles.input}
                            onChangeText={handleChange('name')}
                            onBlur={handleBlur('name')}
                            value={values.name}
                        />
                        <ErrorMessage name="name" component={Text} style={styles.errorText} />

                        <Text style={styles.title}>Data de Nascimento:</Text>
                        <TextInputMask
                            type={'datetime'}
                            options={{
                                format: 'DD/MM/YYYY',
                            }}
                            value={values.birthDate}
                            onChangeText={text => setFieldValue('birthDate', text)}
                            placeholder="DD/MM/AAAA"
                            style={styles.input}
                        />
                        <ErrorMessage name="birthDate" component={Text} style={styles.errorText} />

                        <Text style={styles.title}>Informe seu Sexo Biológico:</Text>
                        <Picker
                            selectedValue={values.gender}
                            style={styles.picker}
                            onValueChange={itemValue => setFieldValue('gender', itemValue)}
                        >
                            <Picker.Item label="Selecione..." value="" />
                            <Picker.Item label="Feminino" value="fem" />
                            <Picker.Item label="Masculino" value="masc" />
                        </Picker>
                        <ErrorMessage name="gender" component={Text} style={styles.errorText} />

                        <View style={styles.buttonContainer}>
                            <TouchableOpacity style={styles.button} onPress={handleSubmit} disabled={isSubmitting}>
                                <Text style={styles.buttontext}>Próximo</Text>
                            </TouchableOpacity>
                        </View>
                    </Animatable.View>
                )}
            </Formik>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#613CF0",
    },
    message: {
        marginTop: 100,
        marginBottom: 100,
        paddingStart: "5%",
        fontSize: 28,
        fontWeight: "bold",
        color: "#fff",
    },
    containerForm: {
        flex: 1,
        backgroundColor: "white",
        paddingStart: "5%",
        paddingEnd: "5%",
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
    },
    title: {
        fontSize: 20,
        marginTop: 28,
    },
    input: {
        borderBottomWidth: 1,
        height: 40,
        marginBottom: 12,
        fontSize: 16,
    },
    picker: {
        marginTop: 5,
        fontSize: 18,
        marginBottom: 12,
    },
    buttonContainer: {
        marginTop: 50,
        alignItems: 'center',
    },
    button: {
        backgroundColor: "#613CF0",
        paddingVertical: 15,
        paddingHorizontal: 25,
        borderRadius: 10,
    },
    buttontext: {
        fontSize: 20,
        color: "#fff",
    },
    errorText: {
        fontSize: 14,
        color: 'red',
        marginTop: -10,
        marginBottom: 10,
    },
});
import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from "react-native";
import * as Animatable from "react-native-animatable";
import { useNavigation } from '@react-navigation/native';
import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {connect} from mysql2;


export default function Cadastro() {
    const navigation = useNavigation();
    const mysql = require('mysql2');

    // Estado para alternar a visibilidade da senha
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    // Esquema de validação com Yup
    const validationSchema = yup.object().shape({
        email: yup
            .string()
            .email("Digite um e-mail válido")
            .required("O e-mail é obrigatório"),
        password: yup
            .string()
            .min(8, "A senha deve ter no mínimo 8 caracteres")
            .matches(/[A-Z]/, "A senha deve conter pelo menos uma letra maiúscula")
            .matches(/[!@#$%^&*(),.?":{}|<>]/, "A senha deve conter pelo menos um caractere especial")
            .required("A senha é obrigatória"),
        confirmPassword: yup
            .string()
            .oneOf([yup.ref('password'), null], 'As senhas não correspondem')
            .required("Confirmação de senha é obrigatória")
    });

    // Função para enviar os dados ao backend
    const handleRegister = async (values) => {
        try {
            const response = await fetch('https://localhost/api', { // Substitua pela URL do seu backend
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: values.email,
                    password: values.password,
                }),
            });

            const result = await response.json();

            if (response.ok) {
                Alert.alert("Sucesso", "Cadastro realizado com sucesso!");
                navigation.navigate('UsuarioSecundario'); // Navegar para a próxima tela
            } else {
                Alert.alert("Erro", result.message || "Erro ao cadastrar.");
            }
        } catch (error) {
            console.error('Erro ao fazer a requisição:', error);
            Alert.alert("Erro", "Erro ao conectar ao servidor.");
        }
    };

    return (
        <View style={styles.container}>
            <Animatable.View animation="fadeInLeft" delay={500} syle={styles.containerHeader}>
                <Text style={styles.message}>Cadastre-se</Text>
            </Animatable.View>

            <Animatable.View animation="fadeInUp" style={styles.containerForm}>
                <Formik
                    initialValues={{ email: '', password: '', confirmPassword: '' }}
                    validationSchema={validationSchema}
                    onSubmit={(values) => handleRegister(values)} // Chamar a função de registro
                >
                    {({ handleChange, handleBlur, handleSubmit, values, validateForm }) => (
                        <>
                            <Text style={styles.title}>E-mail:</Text>
                            <TextInput
                                placeholder="Digite um E-mail..."
                                style={styles.input}
                                onChangeText={handleChange('email')}
                                onBlur={handleBlur('email')}
                                value={values.email}
                            />
                            <Text style={styles.errorText}>
                                <ErrorMessage name="email" />
                            </Text>

                            <Text style={styles.title}>Senha:</Text>
                            <View style={styles.passwordContainer}>
                                <TextInput
                                    placeholder="Sua Senha"
                                    style={styles.input}
                                    secureTextEntry={!showPassword}
                                    onChangeText={handleChange('password')}
                                    onBlur={(e) => {
                                        handleBlur('password')(e);
                                        validateForm();  // Forçar revalidação após blur
                                    }}
                                    value={values.password}
                                />
                                <TouchableOpacity
                                    onPress={() => setShowPassword(!showPassword)}
                                    style={styles.eyeIcon}
                                >
                                    <Icon name={showPassword ? "eye-off" : "eye"} size={24} color="grey" />
                                </TouchableOpacity>
                            </View>
                            <Text style={styles.errorText}>
                                <ErrorMessage name="password" />
                            </Text>

                            <Text style={styles.title}>Confirme sua senha:</Text>
                            <View style={styles.passwordContainer}>
                                <TextInput
                                    placeholder="Confirmação"
                                    style={styles.input}
                                    secureTextEntry={!showConfirmPassword}
                                    onChangeText={handleChange('confirmPassword')}
                                    onBlur={(e) => {
                                        handleBlur('confirmPassword')(e);
                                        validateForm();  // Forçar revalidação após blur
                                    }}
                                    value={values.confirmPassword}
                                />
                                <TouchableOpacity
                                    onPress={() => setShowConfirmPassword(!showConfirmPassword)}
                                    style={styles.eyeIcon}
                                >
                                    <Icon name={showConfirmPassword ? "eye-off" : "eye"} size={24} color="grey" />
                                </TouchableOpacity>
                            </View>
                            <Text style={styles.errorText}>
                                <ErrorMessage name="confirmPassword" />
                            </Text>

                            <TouchableOpacity style={styles.button} onPress={() => {
                                    handleSubmit();
                                    navigation.navigate('UsuarioSecundario');
                                }}
                            >
                                <Text style={styles.buttontext}>Próximo</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Entrar')}>
                                <Text style={styles.buttontext}>Anterior</Text>
                            </TouchableOpacity>
                        </>
                    )}
                </Formik>
            </Animatable.View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#613CF0",
    },
    containerHeader: {
        flex: 2,
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
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
    },
    title: {
        fontSize: 20,
        marginTop: 28,
    },
    input: {
        flex: 1,
        borderBottomWidth: 1,
        height: 40,
        fontSize: 16,
        marginRight: '5%',
    },
    passwordContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    eyeIcon: {
        marginLeft: 10,
    },
    button: {
        marginTop: 50,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    buttontext: {
        fontSize: 20,
        color: "#fff",
        backgroundColor: "#613CF0",
        paddingVertical: 15,
        paddingHorizontal: 25,
        marginRight: '5%',
        borderRadius: 10,
    },
    errorText: {
        color: 'red',
        fontSize: 12,
    }
});

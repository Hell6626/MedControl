import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from "react-native";
import * as Animatable from "react-native-animatable";
import { useNavigation } from '@react-navigation/native';
import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Axios from 'axios'; // Certifique-se de instalar axios com `npm install axios`

export default function Cadastro() {
    const navigation = useNavigation();

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

    // Função para enviar os dados ao servidor
    const handleRegister = (values) => {
        Axios.post("http://localhost:3001/Cadastro", {
          email: values.email,
          password: values.password,
        }).then(response => {
          alert(response.data.msg);
          navigation.navigate('UsuarioSecundario');
        })
          .catch(error => {
            console.error(error.response ? error.response.data : error.message);
          });
      };

    return (
        <View style={styles.container}>
            <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
                <Text style={styles.message}>Cadastre-se</Text>
            </Animatable.View>

            <Animatable.View animation="fadeInUp" style={styles.containerForm}>
                <Formik
                    initialValues={{ email: '', password: '', confirmPassword: '' }}
                    validationSchema={validationSchema}
                    onSubmit={handleRegister}  // Chama a função de registro
                >
                    {({ handleChange, handleBlur, handleSubmit, values }) => (
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
                                    onBlur={handleBlur('password')}
                                    value={values.password}
                                />
                                <TouchableOpacity
                                    onPress={() => setShowPassword(!showPassword)}
                                    style={styles.eyeIcon}
                                >
                                    <Icon name={showPassword ? "eye" : "eye-off"} size={24} color="grey" />
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
                                    onBlur={handleBlur('confirmPassword')}
                                    value={values.confirmPassword}
                                />
                                <TouchableOpacity
                                    onPress={() => setShowConfirmPassword(!showConfirmPassword)}
                                    style={styles.eyeIcon}
                                >
                                    <Icon name={showConfirmPassword ? "eye" : "eye-off"} size={24} color="grey" />
                                </TouchableOpacity>
                            </View>
                            <Text style={styles.errorText}>
                                <ErrorMessage name="confirmPassword" />
                            </Text>

                            <Animatable.View style={styles.buttonContainer}>
                                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Entrar')}>
                                    <Text style={styles.buttontext}>Anterior</Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                                    <Text style={styles.buttontext}>Próximo</Text>
                                </TouchableOpacity>    
                            </Animatable.View>

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
        flex: 1,  // Altere de 2 para 1 para aumentar a área do formulário
    },
    message: {
        marginTop: 50, // Ajuste a margem superior
        marginBottom: 30, // Ajuste a margem inferior
        paddingStart: "5%",
        fontSize: 28,
        fontWeight: "bold",
        color: "#fff",
    },
    containerForm: {
        flex: 2,  // Altere de 1 para 2 para ocupar mais espaço
        backgroundColor: "white",
        paddingStart: "5%",
        paddingTop: 20, // Adicione um padding no topo
        paddingBottom: 20, // Adicione um padding na parte inferior
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
    },
    title: {
        fontSize: 20,
        marginTop: 20, // Ajuste a margem superior
    },
    input: {
        flex: 1,
        borderBottomWidth: 1,
        height: 50, // Aumente a altura do input
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
        marginTop: 30, // Ajuste a margem superior
        flexDirection: 'row',
        justifyContent: 'space-between',
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
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between', // Para os botões ficarem em cada canto
        marginTop: 30, // Margem superior para espaçar dos campos acima
        paddingHorizontal: 20, // Espaçamento lateral
    }


});

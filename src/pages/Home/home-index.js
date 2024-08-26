import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, Dimensions, Animated } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Entypo';

export default function Home() {
    const navigation = useNavigation();
    const [isSidebarVisible, setIsSidebarVisible] = useState(false);
    const animatedValue = useRef(new Animated.Value(-50)).current;

    const toggleSidebar = () => {
        const toValue = isSidebarVisible ? -50 : 0;
        Animated.timing(animatedValue, {
            toValue,
            duration: 300,
            useNativeDriver: false,
        }).start();

        setIsSidebarVisible(!isSidebarVisible);
    };

    const menuPng = require("../../assets/menuIcon.png");
    const [searchQuery, setSearchQuery] = useState('');

    return (
        <View style={styles.container}>
            {/* Sidebar */}
            <Animated.View style={[styles.sidebar, { transform: [{ translateX: animatedValue }] }]}>
                <TouchableOpacity style={styles.closeButton} onPress={toggleSidebar}>
                    <Icon name="cross" size={40} color="#fff" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.user} onPress={() => navigation.navigate('Perfil')}>
                    <View style={styles.image}></View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.sidebarButton} onPress={() => navigation.goBack()}>
                    <Icon name="home" size={24} color='#fff' />
                </TouchableOpacity>
                <TouchableOpacity style={styles.sidebarButton} onPress={() => navigation.navigate('Config')}>
                    <Icon name="cog" size={24} color='#fff' />
                </TouchableOpacity>
                <TouchableOpacity style={styles.sidebarButton} onPress={() => navigation.navigate('MedControl')}>
                    <Icon name="log-out" size={24} color='#fff' />
                </TouchableOpacity>
            </Animated.View>

            {/* Botão de Menu */}
            <TouchableOpacity style={styles.menuButton} onPress={toggleSidebar}>
                <Image source={menuPng} style={styles.menuButton}></Image>
            </TouchableOpacity>

            {/* Conteúdo Principal */}
            <View style={styles.mainContent}>
                <Animatable.View animation="fadeInDown" delay={400} style={styles.containerHeader}>
                    <Text style={styles.message}>Home</Text>
                    <Animatable.View animation="fadeInLeft" delay={600} style={styles.boxSearch}>
                        <Icon name="magnifying-glass" size={24} color="#000" />
                        <TextInput
                            style={styles.searchBar}
                            placeholder="Pesquisar..."
                            value={searchQuery}
                            onChangeText={text => setSearchQuery(text)}
                        />
                    </Animatable.View>
                </Animatable.View>

                <Animatable.View animation="fadeInUp" delay={600} style={styles.containerForm}>
                    <MedList />
                </Animatable.View>
            </View>
        </View>
    );
};

const Med = () => {
    const navigation = useNavigation();

    return (
        <TouchableOpacity style={styles.med} onPress={() => navigation.navigate('MedAdd')}>
            <View style={styles.medbox}>
                <Text style={styles.name2}>Medicamento</Text>
                <Text style={styles.title}>Dosagem:</Text>
            </View>
            <Text style={styles.time}>17:55</Text>
        </TouchableOpacity>
    );
};

const MedList = () => {
    const quantity = 2;  // Especifique a quantidade de componentes Med que você deseja renderizar

    const renderMedComponents = () => {
        return Array.from({ length: quantity }).map((_, index) => (
            <Med key={index} />
        ));
    };

    return (
        <View style={styles.medListContainer}>
            {renderMedComponents()}
        </View>
    );
};

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    },
    mainContent: {
        flex: 1,
        backgroundColor: "white",
    },
    message: {
        marginTop: 20,
        fontWeight: 'bold',
        fontSize: 25,
        color: "#fff",
        textAlign: "center",
    },
    containerHeader: {
        paddingTop: 10,
        paddingBottom: 10,
        height: 150,
        backgroundColor: "#613CF0",
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
        zIndex: 5,
    },
    profileHeader: {
        marginTop: 10,
        flexDirection: "row",
    },
    name: {
        fontWeight: 'bold',
        fontSize: 15,
        paddingEnd: 10,
        color: "white",
        textAlignVertical: "center",
    },
    name2: {
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
        marginRight: 15,
    },
    containerForm: {
        paddingTop: 40,
        paddingHorizontal: 1,
        zIndex: 5,
    },
    title: {
        fontSize: 15,
        marginTop: 9,
    },
    med: {
        backgroundColor: "#fff",
        flexDirection: 'row',
        marginBottom: 10,
        borderRadius: 20,
        padding: 25,
        marginHorizontal: '10%',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    medbox: {
    },
    time: {
        fontWeight: "bold",
        marginLeft: "auto",
        fontSize: 45,
    },
    menuButton: {
        position: 'absolute',
        top: 20,
        left: 5,
        width: 30,
        height: 30,
        zIndex: 10,
        padding: 10,
    },
    sidebar: {
        position: 'absolute',
        left: -0, // Começa fora da tela
        top: 0,
        width: 50,
        height: '100%',
        backgroundColor: '#4a2dbd',
        paddingVertical: 50,
        paddingHorizontal: 10,
        zIndex: 20, // Garante que a sidebar fique acima dos outros elementos
    },
    sidebarButton: {
        marginBottom: 35,
    },
    sidebarButtonText: {
        color: '#fff',
        fontSize: 16,
    },
    user: {
        marginTop: 35,
        right: '5%',
        marginBottom: 30,
    },
    boxSearch: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: "black",
        borderWidth: 1,
        borderRadius: 50,
        paddingHorizontal: 10,
        backgroundColor: "#fff",
        paddingVertical: 10,
        marginTop: 45,
        width: width * 0.8,
        left: width * 0.1,
    },
    searchBar: {
        flex: 1,
        paddingHorizontal: 10,
    },
    closeButton: {
        marginTop: -20,
        right: "20%",
    },
});

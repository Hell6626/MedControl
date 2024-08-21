import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MedControl from '../pages/MedControl/MedControl-index'
import Cadastro from '../pages/Cadastro/cadastro-index'
import UsuarioSecundario from '../pages/UsuarioSecundario/UsuarioSec-index'
import Entrar from "../pages/Entrar/Entrar-index";
import Perfil from "../pages/Perfil/perfil-index.js";
import Home from "../pages/Home/home-index.js";

const Stack = createNativeStackNavigator();

export default function Routes() {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
                name="MedControl"
                component={MedControl}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Entrar"
                component={Entrar} 
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Cadastro"
                component={Cadastro}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="UsuarioSecundario"
                component={UsuarioSecundario}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Perfil"
                component={Perfil}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Home"
                component={Home}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
}
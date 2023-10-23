import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const ScreenOption = {
    "Login": {
        title: 'Login',
        headerTintColor: '#fff',
        headerShown: false,
        headerStyle: {
            backgroundColor: 'rgb(17, 24, 39)'
        }
    },
    "Home": {
        headerLeft: () => null,
        title: 'Venta',

        tabBarIcon: ({ focused, color, size }) => {
            return <Feather name="shopping-bag" size={size} color={"#f59222"} />
        },
        headerShown: false,
    },
    "BusinessPartner": {
        headerLeft: () => null,
        title: 'Socio de negocio',
        headerTintColor: '#fff',
        headerStyle: {
            backgroundColor: 'rgb(17, 24, 39)'
        }
    },
    "Configuration": {
        headerLeft: () => null,
        title: 'Configuración',

        tabBarIcon: ({ facused, color, size }) => {
            return <AntDesign name="setting" size={size} color={"#f59222"} />
        },
        headerShown: false,
    }
}

export default ScreenOption
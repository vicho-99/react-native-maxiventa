import { View } from "react-native";
import { Button } from "react-native-elements";
import useAuth from "../hooks/useAuth";

export default function ConfigurationScreen() {

    const { closeSession } = useAuth();

    return (
        <View style={{
            flex: 1, backgroundColor: 'white',
            padding: 6,
        }} >
            <Button onPress={closeSession} title={"Cerrar sesión"} />
        </View>
    )
}
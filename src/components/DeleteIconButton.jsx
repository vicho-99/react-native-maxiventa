import { Alert } from "react-native";
import { IconButton } from "react-native-paper";

export default function DeleteIconButton({
    size,
    removeItemFromCart,
    itemKey
}) {
    return (
        <IconButton
            icon="delete-outline"
            size={size}
            iconColor='red'
            containerColor='#ffebee'
            onPress={() => {
                Alert.alert('Eliminación', 'Seguro desea eliminar el item seleccionado?', [
                    {
                        text: 'Cancelar',
                        style: 'cancel',
                    },
                    {
                        text: 'OK',
                        onPress: () => removeItemFromCart(itemKey)
                    },
                ]);

            }}
        />
    )
}
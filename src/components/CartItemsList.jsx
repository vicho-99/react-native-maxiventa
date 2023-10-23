import { ScrollView } from "react-native";
import { List, TextInput } from "react-native-paper";
import DeleteIconButton from "./DeleteIconButton";
import styles from "../utils/styles";
import formatToCurrency from "../utils/formatToCurrency";
import InputEditCartQty from "./InputEditCartQty";

export default function CartItemsList({
    cart,
    removeItemFromCart,
    updateItemQtyFromCart
}) {
    return (
        <ScrollView style={styles.containerCardList} >

            {cart.map(item => (
                <List.Item
                    key={item.barCode + item.productId}
                    title={item.name}
                    description={"Precio: " + formatToCurrency(item.price)}

                    right={() =>
                        <DeleteIconButton
                            itemKey={item.barCode}
                            removeItemFromCart={removeItemFromCart}
                            size={16}
                        />}
                    left={() =>
                        <InputEditCartQty
                            maxQty={parseFloat(item.stock)}
                            qty={item.amount}
                            itemKey={item.barCode}
                            updateItemQtyFromCart={updateItemQtyFromCart}
                        />
                    }
                />
            ))}


        </ScrollView>
    )
}


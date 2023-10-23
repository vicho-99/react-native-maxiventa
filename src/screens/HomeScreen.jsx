
import { View } from 'react-native';
import Select from '../components/Select';
import usePos from '../hooks/usePos';
import { Button, IconButton } from 'react-native-paper';
import CartItemsList from '../components/CartItemsList';
import CartResumen from '../components/CartResumen';
import styles from '../utils/styles';

const HomeScreen = () => {

    const {
        documentType,
        setDocumentType,
        priceList,
        setPriceList,
        clients,
        priceListsByDocumentType,
        client,
        setClient,
        documentTypes,
        products,
        cart,
        product,
        setProduct,
        addItemToCart,
        removeItemFromCart,
        updateItemQtyFromCart,
        totalAmountWithTaxes,
        totalAmountWithoutTaxes
    } = usePos();

    return (

        <View style={styles.homeSales} >

            <View>

                <View style={styles.flexRow}>

                    <View style={styles.flexPadding} >

                        <Select
                            name="Tipo documento"
                            labelField={"label"}
                            valueField={"value"}
                            data={documentTypes}
                            setValue={setDocumentType}
                            value={documentType}
                        />

                    </View>

                    <View style={styles.flexPadding} >

                        <Select
                            name="Lista de precio"
                            data={priceListsByDocumentType}
                            labelField={"name"}
                            valueField={"priceListId"}
                            setValue={setPriceList}
                            value={priceList}
                        />
                    </View>

                </View>

                <View style={styles.paddingFive} >

                    <Select
                        name="Cliente"
                        data={clients}
                        setValue={setClient}
                        value={client}
                        labelField={"name"}
                        valueField={"businessPartnerId"}
                    />

                </View>

                <View style={styles.paddingFive} >

                    <View style={styles.boxSearchProduct} >

                        <View style={styles.flexOne} >

                            <Select

                                name="Producto"
                                data={products}
                                setValue={setProduct}
                                value={product}
                                labelField={"name"}
                                valueField={"barCode"}
                            />
                        </View>

                        <IconButton
                            icon="magnify"
                            mode='contained'
                            iconColor='black'
                            containerColor='#fafafa'
                            size={25}
                            onPress={addItemToCart}
                        />
                    </View>

                </View>

            </View>

            <CartItemsList
                updateItemQtyFromCart={updateItemQtyFromCart}
                cart={cart}
                removeItemFromCart={removeItemFromCart}
            />

            <View style={styles.orderDetail} >

                <CartResumen
                    documentType={documentType}
                    totalAmountWithTaxes={totalAmountWithTaxes}
                    totalAmountWithoutTaxes={totalAmountWithoutTaxes}
                />

                <View style={styles.orderBoxButton} >
                    <Button
                        style={styles.fullWidth}
                        buttonColor='#f59222'
                        mode="contained"

                    >Finalizar venta</Button>
                </View>

            </View>

        </View>
    );
};

export default HomeScreen;

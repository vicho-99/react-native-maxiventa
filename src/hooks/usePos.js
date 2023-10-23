import { useEffect, useState } from "react";
import useClient from "./useClient";
import usePriceList from "./usePriceList";
import useProduct from "./useProduct";
import useCart from "./useCart";
import { Alert } from "react-native";

const documentTypes = [
    { label: 'Boleta', value: 'Boleta' },
    { label: 'Factura', value: 'Factura' },
];

//const DEFAULT_PRICE_LIST_BY_DOCUMENT_TYPE = "Boleta";

export default function usePos() {

    const [documentType, setDocumentType] = useState(null);
    const [priceList, setPriceList] = useState(null);
    const [product, setProduct] = useState(null);
    const [client, setClient] = useState();

    const { clients } = useClient();
    const { products, searchProduct } = useProduct();
    const { priceListsByDocumentType, listPriceListsByDocumentType } = usePriceList();


    const {
        cart,
        addItem,
        removeItem,
        updateItemQty,
        totalAmountWithTaxes,
        totalAmountWithoutTaxes,
        emply
    } = useCart();

    async function addItemToCart() {

        try {

            if (!priceList) throw "Precio de lista es requerido."
            if (!product) throw "Producto  es requerido."
            const data = await searchProduct({ barCode: product, priceListId: priceList })
            if (data) {
                await addItem({ item: data[0] });
                setProduct(null);
            }
        } catch (error) {
            Alert.alert(error)
        }

    }

    async function removeItemFromCart(barCode) {
        try {
            await removeItem({ barCode })
            Alert.alert("Item eliminado.")
        } catch (error) {
            Alert.alert(error)
        }
    }

    async function updateItemQtyFromCart({ barCode, newQty }) {
        try {
            await updateItemQty({ barCode, newQty })
        } catch (error) {
            Alert.alert(error)
        }
    }


    useEffect(() => {

        if (documentType) {

            listPriceListsByDocumentType({ documentType });

            if (documentType === "Boleta") {
                const clientBoleta = clients.find(client => client.tax === "11111111-1")
                setClient(clientBoleta.businessPartnerId)
            }

            emply()

        }

    }, [documentType])

    return {
        documentType,
        setDocumentType,
        priceList,
        clients,
        setPriceList,
        client,
        setClient,
        priceListsByDocumentType,
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
    }

}
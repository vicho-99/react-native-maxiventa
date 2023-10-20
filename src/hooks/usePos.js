import { useEffect, useState } from "react";
import useClient from "./useClient";
import usePriceList from "./usePriceList";
import useProduct from "./useProduct";

const documentTypes = [
    { label: 'Boleta', value: 'Boleta' },
    { label: 'Factura', value: 'Factura' },
];

export default function usePos() {

    const [documentType, setDocumentType] = useState("");

    const [priceList, setPriceList] = useState(null);

    const { clients } = useClient();
    const { products } = useProduct();
    const { priceListsByDocumentType, listPriceListsByDocumentType } = usePriceList();

    const [client, setClient] = useState();

    useEffect(() => {
        if (documentType)
            listPriceListsByDocumentType({ documentType });
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
        products
    }

}
import { useEffect } from "react";
import { PriceListContext } from "../context/priceList";
import errorHandling from "../utils/errorHandling";
import priceListService from "../services/priceList";
import { useState } from "react";

const taxIncluded = {
    "Boleta": 1,
    "Factura": 0,
}

const DEFAULT_PRICE_LIST_BY_DOCUMENT_TYPE = "Boleta";

export default function usePriceList() {

    const { priceLists, setPriceLists } = PriceListContext();

    const [priceListsByDocumentType, setPriceListsByDocumentType] = useState([]);

    async function listPriceLists() {
        try {
            const { data } = await priceListService.getPriceLists();
            setPriceLists(data)

        } catch (error) {
            errorHandling(error)
        }
    }

    async function listPriceListsByDocumentType({ documentType }) {
        console.log(taxIncluded[documentType])
        setPriceListsByDocumentType(priceLists.filter(priceList => priceList.taxIncluded === taxIncluded[documentType]));

    }

    useEffect(() => {

        (async () => {
            await listPriceLists()
        })();

    }, [])

    return {
        priceLists,
        listPriceListsByDocumentType,
        priceListsByDocumentType
    }
}
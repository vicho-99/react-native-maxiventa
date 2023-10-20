import { useEffect } from "react";
import { ProductContext } from "../context/product";
import errorHandling from "../utils/errorHandling";
import productService from "../services/product";

export default function useProduct() {

    const { products, setProducts } = ProductContext();

    async function listProducts() {
        try {
            const { data } = await productService.getProductsWithStock();
            setProducts(data)
        } catch (error) {
            const errorMessage = errorHandling(error);
            console.log({ errorMessage })
        }
    }

    useEffect(() => {


        (async () => await listProducts())();


    }, [])

    return {
        products,
        setProducts
    }
}
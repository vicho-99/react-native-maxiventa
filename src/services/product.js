import api from './api'

export const productService = {

    getProductsWithStock: async () => {
        return api.get("/product/withStock");
    },

};


export default productService
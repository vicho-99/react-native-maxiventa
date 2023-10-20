import api from './api'

const priceListService = {

    getPriceLists: async () => {
        return api.get("/priceList");
    },

};

export default priceListService
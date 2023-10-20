import api from './api'

const clientService = {

    getClients: async () => {
        return api.get("/client");
    },

};

export default clientService
import { useEffect } from "react";
import { ClientContext } from "../context/client"
import clientService from "../services/client";
import errorHandling from "../utils/errorHandling";

export default function useClient() {

    const { clients, setClients } = ClientContext();

    async function listClients() {

        try {
            const { data } = await clientService.getClients();
            setClients(data);
        } catch (error) {
            let errorMessage = errorHandling();
            console.log({ errorMessage })
        }
    }

    useEffect(() => {
        (async () => await listClients())();
    }, [])

    return {
        clients
    }
}
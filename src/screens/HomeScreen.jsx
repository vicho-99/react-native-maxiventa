import React, { } from 'react';
import { View } from 'react-native';

import Select from '../components/DropBox';

import usePos from '../hooks/usePos';
import { useState } from 'react';

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
        products
    } = usePos();

    const [product, setProduct] = useState("");

    return (
        <View style={{
            flex: 1,
            
        }} >

            <View  >

                <View style={{
                    flexDirection: 'row',

                }}>
                    <View style={{ flex: 1, padding: 5 }} >

                        <Select
                            name="Tipo documento"
                            data={documentTypes}
                            setValue={setDocumentType}
                            value={documentType}
                        />
                    </View>

                    <View style={{ flex: 1, padding: 5 }} >
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

                <View style={{ padding: 5 }} >
                    <Select
                        name="Cliente"
                        data={clients}
                        setValue={setClient}
                        value={client}
                        labelField={"name"}
                        valueField={"clientId"}
                    />
                </View>

                <View style={{ padding: 5 }} >
                    <Select
                        name="Producto"
                        data={products}
                        setValue={setProduct}
                        value={product}
                        labelField={"name"}
                        valueField={"productId"}
                    />
                </View>

            </View>



        </View>
    );
};

export default HomeScreen;

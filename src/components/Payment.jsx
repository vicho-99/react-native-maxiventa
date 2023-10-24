import { View } from "react-native";
import { Text } from "react-native-elements";
import Select from "./Select";
import { Button, IconButton } from "react-native-paper";
import styles from "../utils/styles";
import NumericInput from "react-native-numeric-input";
import formatToCurrency from "../utils/formatToCurrency";
import DeleteIconButton from "./DeleteIconButton";

export default function Payment({
    paymentsTypes,
    addPaymentToPayments,
    removePayment,
    updatePaymentAmount,
    payments,
    paymentType,
    setPaymentType,
    cancelPayment,
    totalPending,
    TotalToPay,
    processTransaction,
    loading
}) {

    return (
        <View style={styles.containerPayment} >

            <View style={styles.boxInputButton} >

                <View style={styles.flexOne} >
                    <Select
                        data={paymentsTypes}
                        labelField={"name"}
                        name={"Seleccione metodo de pago"}
                        valueField={"paymentTypeId"}
                        value={paymentType}
                        setValue={setPaymentType}
                    />
                </View>

                <View>
                    <IconButton
                        icon="plus"
                        mode='contained'
                        iconColor='black'
                        containerColor='white'
                        size={24}
                        onPress={() => addPaymentToPayments()}
                    />
                </View>

            </View>

            <View style={styles.boxPaymentList} >

                {payments.map((payment, index) => (

                    <View key={payment.name + index} style={styles.boxPaymentListItem} >

                        <View style={styles.paymentListItem} >

                            <DeleteIconButton
                                itemKey={index}
                                removeFunction={removePayment}
                                size={18}
                            />

                            <Text>{payment.name}</Text>

                            <NumericInput
                                totalWidth={132}
                                totalHeight={36}
                                iconSize={16}
                                value={payment.amount}
                                onChange={(value) => updatePaymentAmount({ index, newAmount: value })}
                            />

                        </View>

                    </View>

                ))}

            </View>

            <View style={styles.boxResumenPayment} >

                <View style={styles.resumenItem} >
                    <Text variant="titleMedium">PENDIENTE A PAGAR:</Text>
                    <Text variant="titleMedium">{formatToCurrency(totalPending())}</Text>
                </View>

                <View style={styles.resumenItem} >
                    <Text variant="titleMedium">TOTAL A PAGAR:</Text>
                    <Text variant="titleMedium">{formatToCurrency(TotalToPay())}</Text>
                </View>

                <Button
                    disabled={loading}
                    loading={loading}
                    onPress={processTransaction}
                    buttonColor="black"
                    mode="contained"
                >{loading ? 'Pagando, favor espere....' : 'Pagar'}</Button>
                <Button disabled={loading} onPress={cancelPayment} >Cancelar</Button>

            </View>

        </View >
    )

}
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    fullWidth: {
        width: '100%'
    },
    paddingFive: {
        padding: 5,
    },
    homeSales: {
        marginTop: '12%',
        flex: 1,
        padding: 10,
        justifyContent: 'space-between',
        flexDirection: 'column',
        backgroundColor: 'white'
    },
    flexPadding: {
        flex: 1,
        padding: 5
    },
    flexRow: {
        flexDirection: 'row',
    },
    flexOne: {
        flex: 1,
    },
    containerCardList: {
        flex: 1,
        margin: 5,
        borderRadius: 10,
        overflow: 'scroll',
        height: '100%',
    },
    cartInputEditQty: {
        height: 40,
        width: 50,
        borderWidth: 0.1,
        borderRadius: 6,
    },
    containerResumen: {
        flexDirection: 'column',
        height: 80,
        marginTop: 5,
    },
    boxSearchProduct: {
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    orderBoxButton: {
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        marginTop: 10
    },
    orderDetail: {

        flexDirection: 'column',
        padding: 5,
        borderRadius: 8,
        backgroundColor: 'white',
        borderTopWidth: 0.3,
        justifyContent: 'flex-end'

    },
    resumenItems: {
        flex: 1,
        flexDirection: 'column',
        gap: 1
    },
    resumenItem: {
        flex: 1,
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    containerSignIn: {
        flex: 1,
        paddingTop: '35%',
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 35,
    },
    items: {
        width: '100%',
        margin: 10
    },
    forgetPassword: {
        alignSelf: 'flex-end',
        margin: 10
    },
    containerLogo: {
        marginBottom: 50
    },
    buttonSignIn: {
        buttonStyle: {
            backgroundColor: '#047aff',
            height: 38,
            borderRadius: 5,
        },
        containerStyle: {
            width: '100%',
        }
    }
});

export default styles;
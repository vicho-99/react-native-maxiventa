import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    containerSignIn: {
        flex: 1,
        paddingTop: '20%',
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 35,
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
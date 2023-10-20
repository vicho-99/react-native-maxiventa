import { TouchableWithoutFeedback, View } from 'react-native';
import { Button, Input } from '@rneui/themed';

import useSignIn from '../../hooks/useSignIn'
import Logo from '../Logo';
import styles from '../../utils/styles';
import { Keyboard } from 'react-native';
import useOrg from '../../hooks/useOrg';
import OrganizationListSelected from './OrganizationListSelected';

const SignIn = () => {

    const {
        username,
        password,
        setUsername,
        setPassword,
        handleSignIn,
        signInStep
    } = useSignIn();

    const { orgs } = useOrg();

    const handleScreenPress = () => Keyboard.dismiss();


    return (

        <TouchableWithoutFeedback onPress={handleScreenPress}>


            <View style={{ flex: 1 }}>

                {signInStep === 1 &&

                    <View style={styles.containerSignIn}>

                        <View style={styles.containerLogo} >

                            <Logo
                                width={255}
                                height={30}
                            />

                        </View>

                        <Input
                            placeholder='Rut'
                            value={username}
                            onChangeText={(text) => setUsername(text)}
                        />

                        <Input
                            placeholder='Contraseña'
                            secureTextEntry
                            value={password}
                            onChangeText={(text) => setPassword(text)}
                        />

                        <Button

                            onPress={() => {
                                handleScreenPress();
                                handleSignIn({ orgId: null })
                            }}

                            title="Iniciar Sesión"
                            buttonStyle={styles.buttonSignIn.buttonStyle}
                            containerStyle={styles.buttonSignIn.containerStyle}
                        />
                    </View>

                }

                {signInStep === 2 &&

                    <OrganizationListSelected
                        handleSignIn={handleSignIn}
                        orgs={orgs}
                    />
                }

            </View>

        </TouchableWithoutFeedback>

    );
};


export default SignIn;

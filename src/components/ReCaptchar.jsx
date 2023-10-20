import Recaptcha from 'react-native-recaptcha-that-works';
import { RecaptchaContext } from '../context/recaptcha';
import { useEffect } from 'react';

export default function ReCaptchar() {

    const {
        recaptcha,
        onVerify,
        onExpire,
        send
    } = RecaptchaContext();

    useEffect(() => {
        send()
    }, [])

    return (
        <Recaptcha
        
            ref={recaptcha}
            siteKey="6Lc0lSwnAAAAAOXzwRO8NkzWWnugRTeD_M1T7c_v"
            baseUrl="https://maxiventa.cl/"
            onVerify={onVerify}
            onExpire={onExpire}
            size="invisible"
            hideBadge={true}
        />
    )
}
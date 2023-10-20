import { Image } from 'react-native';


export default function Logo({
    height,
    width
}) {

    return (
        <Image
            source={require('../../assets/maxiventa.png')}
            style={{ width, height }}
        />

    )
}
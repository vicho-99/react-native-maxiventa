import { Dialog } from "react-native-elements";

export default function ModalOrg({
    isVisible,
    toggleModal,
    children,
    title
}) {

    return (

        <Dialog isVisible={isVisible} onBackdropPress={toggleModal} >

            <Dialog.Title title={title} />

            {children}

        </Dialog>
        
    )
}
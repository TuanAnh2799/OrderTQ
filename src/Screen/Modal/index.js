import React,{useState} from 'react';
import { StyleSheet, Text, View,Modal, Button } from 'react-native';

export default function ModalScreen() {
    const [openModal, setModal] = useState(false);
    return (
        <View>
            <Modal
            visible={openModal}
            onRequestClose={()=> setModal(false)}
            animationType={'fade'}
            >   
                <View style={styles.wrapModal}>
                    <View style={styles.modal}>
                        <Text>Đây là modal</Text>
                        <Button title="OK" onPress={()=>setModal(false)}/>
                    </View>
                </View>     
            </Modal>
            <Button title="Submit" onPress={()=>setModal(true)}/>
        </View>
    )
}

const styles = StyleSheet.create({
    modal:{
        width: "90%",
        height: '80%',
        backgroundColor:'#ffffff',
    },
    wrapModal: {
        backgroundColor: '#00000099',
        justifyContent: 'center',
        flex: 1,
        alignItems: 'center',
    }
});

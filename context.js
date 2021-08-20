import React, {useState} from 'react';
import { firebaseApp } from './src/configFireBase/firebaseConfig';

export const AuthContext = React.createContext();

export const AuthProvider = ({childen}) => {

    const [user , setUser] = useState(null);

    return(
        <AuthContext.Provider
        value = {{
            user,
            setUser,
            login: async (email, password) => {
                try {
                    await firebaseApp.auth().signInWithEmailAndPassword(email, password)
                }
                catch(e){
                    console.log(e);
                }
            },
            register: async (email, password) => {
                try {
                    await firebaseApp.auth().createUserWithEmailAndPassword(email, password)
                }
                catch(e){
                    console.log(e);
                }
            },
            logout: async () => {
                try {
                   await firebaseApp.auth().signOut();
                    console.log('Dang xuat ok');
                }
                catch(e){
                    console.log(e);
                }
            },
        }}
        >
            {childen}
        </AuthContext.Provider>
    )
}
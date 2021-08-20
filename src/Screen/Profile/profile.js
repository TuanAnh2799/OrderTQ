import React from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';
import { AuthContext } from '../../../context';

export default function ProfileScreen({ navigation }) {
  const {signOut} = React.useContext(AuthContext);
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Profile Screen</Text>
        <Button title="Đăng xuất" onPress={()=>signOut()}/>
      </View>
    );
}
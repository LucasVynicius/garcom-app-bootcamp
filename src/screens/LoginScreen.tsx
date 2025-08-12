import { StyleSheet, View, Image } from 'react-native'
import React from 'react'
import { Button, Text, TextInput } from 'react-native-paper'
import { useState } from 'react'

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  return (
    <View style={{flex: 1, padding: 20, marginTop: 50, alignItems: 'center', backgroundColor: 'white'}}>
      {/*Logo do app*/}
      <Image 
        source={require("../../assets/logo.png")}
        style={{width: 120, height: 120, marginBottom: 20}}
        resizeMode="contain"
      />

      <Text variant="titleLarge">Login do Garçom</Text>

      <TextInput
        label="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        style={{width: '100%', marginBottom: 10}}
      />

      <TextInput
        label="Senha"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
        style={{width: '100%', marginBottom: 20}}
      />

      <Button
        mode="contained"
        onPress={() => console.log("Login Pressed")}
        style={{width: '100%'}}
      >Entrar</Button>

    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({})
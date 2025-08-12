import { StyleSheet, View } from 'react-native'
import React from 'react'
import { Button, Text, TextInput } from 'react-native-paper'
import { Picker } from '@react-native-picker/picker'
import { useState } from 'react'
import { db, auth } from '../firebase/config';
import { createUserWithEmailAndPassword,  signOut as firebaseSignOut } from 'firebase/auth';
import { serverTimestamp, setDoc, doc } from 'firebase/firestore'


const CadastroScreen = () => {
    const [role, setRole] = useState<'garcom' | 'cozinha'>("garcom")
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [Confirmarsenha, setConfirmarSenha] = useState("");

    const handleCadastro = async () => {
        if (senha !== Confirmarsenha) {
            alert("As senhas não coincidem");
            return;
        }

        try {
            const usuarioCriado = await createUserWithEmailAndPassword(auth, email, senha);
            await setDoc(doc(db, "users", usuarioCriado.user.uid), {
                email,
                role,
                createdAt: serverTimestamp()
            });

            alert("Usuário cadastrado com sucesso!");

            await firebaseSignOut(auth); 
        } catch  {
            alert("Erro ao cadastrar usuário: ");
        }

    }
  return (
    <View style={{flex: 1, padding: 20, backgroundColor: 'white'}}>
          <Text variant={"titleLarge"}>
              Cadastro de Usuário
          </Text> 
          <Text style={{marginTop: 16, fontSize: 14}}>Você é:</Text>
          <Picker
          selectedValue={role}
          onValueChange={(itemValue) => setRole(itemValue as any)}
          style={{marginBottom: 20}}

          > 
            <Picker.Item label="Garçom" value="garcom" />
            <Picker.Item label="Cozinha" value="cozinha" />
          </Picker>

          <TextInput
            label="Email"
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
            style={{marginBottom: 10}}
            />

            <TextInput
            label="Senha"
            value={senha}
            onChangeText={setSenha}
            secureTextEntry
            style={{marginBottom: 10}}
            />

            <TextInput
            label="Confirmar Senha"
            value={Confirmarsenha}
            onChangeText={setConfirmarSenha}
            secureTextEntry
            style={{marginBottom: 10}}
            />

            <Button
            mode="contained"
            onPress={handleCadastro}
            style={{marginBottom: 20}}

            >Cadastrar</Button>

          
    </View>
  )
}

export default CadastroScreen

const styles = StyleSheet.create({})
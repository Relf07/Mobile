import React, { useState } from 'react';
import { Image, Modal, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { ModalPassowrd } from './src/assets/components/modal';
export default function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  function handleLogin(){
    console.log('Username:', username);
    console.log('Password:', password);
    setModalVisible(true);
  }

  return (
    <View style={styles.container}>
      <Image
        source={require("./src/assets/Tigrinho.png")}
        style={styles.Tigrinho}
      />
      <Text style={styles.title}>JOGO DO TIGRINHO</Text>
      <Text style={styles.subTitle}>Faça login para continuar</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome de usuário"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
      <Text style={styles.creator}>By Relf</Text>

      <Modal visible={modalVisible} animationType='fade' transparent={true}>
        <ModalPassowrd/>
      </Modal>

      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F3FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Tigrinho: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subTitle: {
    fontSize: 16,
    marginBottom: 20,
  },
  input: {
    width: 300,
    height: 40,
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 5,
    paddingLeft: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#007BFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  creator: {
    fontSize: 18,
    marginTop: 20,
  },
});

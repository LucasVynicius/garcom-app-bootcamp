import { StyleSheet, View } from 'react-native'
import React from 'react'
import { PaperProvider } from 'react-native-paper'
import { AuthProvider } from './src/context/AuthContext'
import AppRoutes from './src/navigation'

const App = () => {
  return (
    <PaperProvider>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </PaperProvider>
  )
}

export default App

const styles = StyleSheet.create({})
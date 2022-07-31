import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'


export const App = () => {
    return (
      <SafeAreaView style={styles.container}>
        <View>
          <Text>Ola</Text>
        </View>
      </SafeAreaView>
    )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f11',
    flex: 1,
  }
})
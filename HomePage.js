import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, Button } from "react-native";

function HomePage({navigation}){
    return(
        <SafeAreaView>
        <View>
          <View >
          <Text>To-Do Items</Text>
          <Button onPress={() => navigation.navigate('MyProfile')} title="ME"/>
          </View>
          <ScrollView>
          </ScrollView>
        </View>
      </SafeAreaView>
    )
}

export default HomePage;


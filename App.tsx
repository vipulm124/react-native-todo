import React from "react";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomePage from "./HomePage";
import Home from "./Home";
import Profile from "./Profile";
import ToDoTiles from "./components/ToDoTiles";
import ToDoItem from "./components/ToDoItem";

const Stack = createNativeStackNavigator();

function App(){
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home" component={Home}
        />
        <Stack.Screen name="ToDoItem" component={ToDoItem} />
        {/* <Stack.Screen name="MyProfile" component={Profile} /> */}
      </Stack.Navigator>
    </NavigationContainer>
)}


export default App;
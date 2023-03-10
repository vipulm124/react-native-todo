import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, SafeAreaView, ScrollView,TouchableOpacity } from "react-native";
import ToDoTiles from "./components/ToDoTiles";
import Icon from 'react-native-vector-icons/FontAwesome';
import { StorageService } from "./services/StorageService";

function Home({...props}){

  const[selectedKeys, setSelectedKeys] = useState([]);
  const [allToDoData, setAllToDoData] = useState([]);
  
  function updateSelectedKeys(newKey, newValue){
    console.log("I'm clicked.", newValue)
    const currentKeys = [...selectedKeys];
    if(newValue === true){
      currentKeys.push(newKey);
      setSelectedKeys(currentKeys);
    }
    else{
      const index = currentKeys.indexOf(newKey);
      if(index>-1){
        currentKeys.splice(index,1);
        setSelectedKeys(currentKeys);
      }
    }
  }

  function onTrashClick(){
    console.log("trash clicked")
    StorageService.DeleteKeys(selectedKeys);
    fetchAllDataFromStorage();
    setSelectedKeys([]);
  }

  function onNewClick(){
    props.navigation.navigate('ToDoItem',{key:'',title:'',data:''})
  }

  useEffect(() => {
    console.log("Welcome back")
    fetchAllDataFromStorage();
  },[])

  const fetchAllDataFromStorage = async ()=>{
    const data = await StorageService.ReadAllTitles();
    console.log("got all data, printing it")
    console.log(data);
    setAllToDoData(await StorageService.ReadAllTitles());
  }
  
return(
    
<SafeAreaView>
  <View>
    <View style={styles.container}>
    <Text style={styles.headingText}>To Do List</Text>
    <TouchableOpacity onPress={() => onNewClick()}  >
    <Icon name="plus-circle" size={30} color="#4F8EF7" style={styles.icon} />
    </TouchableOpacity>
    <TouchableOpacity onPress={() => onTrashClick()} disabled={selectedKeys.length > 0 ? false : true} >
    <Icon name="trash" size={30} color={selectedKeys.length > 0 ? "#4F8EF7" : 'grey'} style={styles.icon} />
    </TouchableOpacity>
    </View>
    <ScrollView>
    <ToDoTiles {...props} updateSelectedKeys={updateSelectedKeys} allToDoData = {allToDoData}/>
    </ScrollView>
  </View>
</SafeAreaView>

)
}

const styles = StyleSheet.create({
    container:{
      marginHorizontal:20,
      marginVertical:20,
      flexDirection:'row',

    },
    headingText:{
      fontSize:24,
      fontWeight:'bold',
      flex:9
    },
    icon:{
      flex:1,
      marginLeft:10
    }
  })

export default Home;
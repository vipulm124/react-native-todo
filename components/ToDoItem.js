import React, {useEffect, useState} from "react";
import { Text, View, StyleSheet, TextInput, Button, Alert } from "react-native";
import { StorageService } from "../services/StorageService";

function ToDoItem({navigation, route}){
    const [value, onChangeText] = useState('');
    const [titleValue, onChangeTitle] = useState('');

    const [key, setKey] = useState('');

    const createTwoButtonAlert = (title, message) =>
    Alert.alert(title, message, [
      {text: 'OK', onPress: () => navigation.navigate('Home')},
    ]);

    useEffect(() => {
        fetchDataFromStorage();
      },[])

    function saveDataToStorage() {
        let dataToSave = {
            title:titleValue,
            data:value,
            date: new Date().toLocaleDateString(),
            time: new Date().toLocaleTimeString()
        };
         StorageService.AddNewData(JSON.stringify(dataToSave));
         createTwoButtonAlert("Save!", "Data Saved Successfully");
    }


    
    function updateData(){
        console.log("We are updating the data ", route.params.key);
        let dataToSave = {
            title: titleValue,
            data: value,
            date: new Date().toLocaleDateString(),
            time: new Date().toLocaleTimeString()
        };
         StorageService.UpdateData(JSON.stringify(dataToSave), route.params.key);
         createTwoButtonAlert("Update!", "Data Updated Successfully");

    }

    const fetchDataFromStorage = async () =>{
        if(route.params.key !== ''){
            setKey(route.params.key);
            const jsonData = await StorageService.GetAKeyDataAsync(route.params.key); 
            onChangeText(jsonData.data);
            onChangeTitle(jsonData.title);
        }
    }

    return(
        <View style={styles.container}>
            {/* <Text>This is an item</Text> */} 
            <TextInput editable multiline numberOfLines={2} value={titleValue}
            onChangeText={text => onChangeTitle(text)} placeholder="TITLE" style={styles.headingTitle} />
            {/* <Text style={styles.headingTitle}>{route.params.title}</Text> */}
            <View style={styles.content}>
                <TextInput editable multiline numberOfLines={4} 
                    value={value}
                    onChangeText={text => onChangeText(text)}
                />
            </View>
            <View style={styles.buttonContainer}>
            <Button title="Save" style={styles.btn} onPress={() => key === '' ? saveDataToStorage() : updateData()}></Button>
            </View>
            <View style={styles.buttonContainer}>
            <Button title="Cancel" style={styles.btn} onPress={() => navigation.navigate('Home')}></Button>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        padding:12,
    },
    headingTitle:{
        fontSize:24,
        fontWeight:'bold'
    },
    content:{
        padding:10,
        elevation:6,
        borderRadius:7,
        height:400
    },
    buttonContainer:{
        paddingTop:10
    },
    btn:{
        marginBottom:15
    }

})

export default ToDoItem;
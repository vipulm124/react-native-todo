import React, {useEffect, useState} from "react";
import {View, Text, StyleSheet, ScrollView} from 'react-native'
import TodoTile from "./TodoTile";
import { StorageService } from "../services/StorageService";


function ToDoTiles({...props}){
    let count = [
        { "title":"This is Title 11. A relatively long title", "description":"This is description 1"},
        { "title":"This is Title 2", "description":"This is description 2"},
        { "title":"This is Title 3", "description":"This is description 3"},
        { "title":"This is Title 4", "description":"This is description 4"},
        { "title":"This is Title 4", "description":"This is description 4"},
        { "title":"This is Title 4", "description":"This is description 4"},
        { "title":"This is Title 4", "description":"This is description 4"},
        { "title":"This is Title 4", "description":"This is description 4"},
        { "title":"This is Title 4", "description":"This is description 4"},
        { "title":"This is Title 4", "description":"This is description 4"},
        { "title":"This is Title 4", "description":"This is description 4"},
        { "title":"This is Title 4", "description":"This is description 4"},
        { "title":"This is Title 4", "description":"This is description 4"},
        { "title":"This is Title 4", "description":"This is description 4"},
        { "title":"This is Title 4", "description":"This is description 4"},
        { "title":"This is Title 4", "description":"This is description 4"},
        { "title":"This is Title 4", "description":"This is description 4"},
        { "title":"This is Title 4", "description":"This is description 4"},
        { "title":"This is Title 4", "description":"This is description 4"},


    ];


   


    return(
        <View>
        {/* {count.map((item, index)=>{
            return(

                <TodoTile key={index} {...item} {...props}/>
            )
        })} */}
        {props.allToDoData != undefined && props.allToDoData.map((item, index)=>{
            return(
                <View key={index}>
                {/* <Text>{item[0]}</Text>
                <Text>{JSON.parse(item[1]).title}</Text> */}
                <TodoTile key={index} {...item} {...props} updateSelectedKeys={props.updateSelectedKeys}/>
                </View>
            )
        })}
</View>
    )

}

const styles = StyleSheet.create({
    container:{},
})

export default ToDoTiles;
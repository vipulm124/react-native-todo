import AsyncStorage from "@react-native-async-storage/async-storage";

export class StorageService{

    static async ReadAllTitles(){
        try{
            const allData = [];
            const keys = await AsyncStorage.getAllKeys();
            const result = await AsyncStorage.multiGet(keys);
console.log("all data");
console.log(result);
return result;
            // return result.map(req => JSON.parse(req)).forEach(console.log);
            }
        catch(error){
            return error;
        }
    }

    static async GetATitle(title){
        try{
            const values = await AsyncStorage.getAllKeys();
            console.log(values);
            console.log("Getting all elements from storage");
            // console.log(await AsyncStorage.getItem("ITEMS"))
            // values.forEach(element => {
                const data = await AsyncStorage.getItem("TASKS1");
                console.log(JSON.parse(data));
                const data2 = await AsyncStorage.getItem("TASKS2");
                console.log(JSON.parse(data2));

                    // console.log(JSON.parse(await AsyncStorage.getItem("TASKS1")))      
            // });
            if(values != null && values != undefined){
                // return values[2].title;
            }
            return null;
        }
        catch(error){
            return error;
        }
    }

    static async AddNewData(newData){
        try{
            if(newData !== null){
                const count = await this.GetCountOfTasks();
                await AsyncStorage.setItem(`TASKS${count+1}`, newData);
            }
        }
        catch(error){
            console.log(error);
        }
    }

    static async UpdateData(data, key){
        try{
            if(data !== null && key !== null){
                await AsyncStorage.mergeItem(key, data);
            }
        }
        catch(error){
            console.log(error);
        }
    }

    static async GetCountOfTasks(){
        const tasks = await AsyncStorage.getAllKeys();
        return tasks.length;
    }

    static GetAKeyData(key){
        try{
            AsyncStorage.getItem(key)
            .then((response)=>{
                console.log("response " ,response)
                return response;
            })
        } catch(error){
            return error;
        }
    }

    static async GetAKeyDataAsync(key){
        try{
           const data = await AsyncStorage.getItem(key);
           return JSON.parse(data);
        } catch(error){
            return error;
        }
    }

    static async DeleteKeys(keys){
        try{
            await AsyncStorage.multiRemove(keys);

        }
        catch(error){
            return error;
        }
    }

    
}
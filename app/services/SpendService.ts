import AsyncStorage from "@react-native-async-storage/async-storage";
import SpendItem from "../interfaces/SpendItem";
import { Guid } from "guid-ts";

export async function GetSpendItems() : Promise<SpendItem[]>{
    var result = await AsyncStorage.getItem("spending");
    if(result){
      return (JSON.parse(result))
    }
    return [];
}

export async function GetSpendTotal() : Promise<number> {
    var result = await AsyncStorage.getItem("spending");
    
    if(!result){
        return 0;
    }

    var items: SpendItem[] = JSON.parse(result);

    var total = 0;
    
    for(let i = 0; i<items.length; i++){
        total += items[i].value
    }

    return total;
}

export function GetMonthlyAllowance() : number {
    return 2470.61
}

export async function AddSpendItem(): Promise<void> {
    console.log("ADDING")
    var test: SpendItem = {
        id: Guid.newGuid().toString(),
        title: "TEST TITLE",
        value: 1000,
        dueDate: new Date('2024-02-01')
      };
      var list : SpendItem[] | undefined = await GetSpendItems();
      list?.push(test);
  
      await AsyncStorage.setItem("spending", JSON.stringify(list));
}

export async function RemoveAllSpending() : Promise<void> {
    console.log("REMOVING ALL ITEMS");
    await AsyncStorage.removeItem("spending");

}
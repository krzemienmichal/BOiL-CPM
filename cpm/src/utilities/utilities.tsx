import CPMEvent from "../services/CPMEvent";
import Activity from "../services/model"


const createActivitiesArray = (taskList: Array<Activity>, namesList: Array<string>): Array<Activity> =>{

    var activities = new Array<Activity>()
    namesList.forEach(function(item){
        let x =  taskList.find((t:Activity) => t.name === item);
        if(x)
            activities.push(x);
    })
    console.log(activities)
    return activities;

}

const createNamesArray = (taskList: Array<Activity>): Array<String> =>{

    var names = new Array<String>()
    taskList.forEach(function(item){
            names.push(item.name);
    })
    // console.log(activities)
    return names;

}

const findPath = (taskList: Array<Activity>):Array<Array<Activity>> =>{
    var paths = new Array<Array<Activity>>(0)
    taskList.forEach(function (item){

    })
    return paths
}


export {createActivitiesArray, createNamesArray}
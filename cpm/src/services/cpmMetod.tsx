import CPMEvent from "./CPMEvent"
import Activity from "./model"

// const findStartingActivities = (taskList: Array<Activity>): Array<Activity> =>{
//     var startingActivities = new Array<Activity>(0)
//     taskList.forEach((item)=>{
//         if(item.previous_activity.length == 0){
//             startingActivities.push(item)
//         }
//     })
//     return startingActivities
// }
//
// const createEventList = (taskList: Array<Activity>): Array<CPMEvent> =>{
//     var eventList = new Array<CPMEvent>(0);
//     var e_id = 1;
//     eventList.push({id:e_id, t_begin: 0, t_end:0, t_diff:0,
//         prev_activities: new Array<Activity>(0),
//         next_activities: new Array<Activity>(0)})
//     e_id += 1;
//     taskList.forEach(function (item){
//         if(item.previous_activity.length == 0)
//             eventList[0].next_activities.push(item);
//         else{
//             item.previous_activity.forEach(function (prev_act){
//                 var temp_ev = eventList.find((t:CPMEvent)=>
//                     t.prev_activities.find((prv_a:Activity) => prv_a === prev_act) ||
//                     t.next_activities.find((next_a: Activity) => next_a === item))
//                 if(!temp_ev){
//                     eventList.push({id: e_id, t_begin: 0, t_end: 0, t_diff:0,
//                         prev_activities: new Array<Activity>(prev_act),
//                         next_activities: new Array<Activity>(item)})
//                     e_id += 1;
//                 }
//                 else if (!eventList[temp_ev.id-1].next_activities.find((t:Activity) => t === item)){
//                     eventList[temp_ev.id-1].next_activities.push(item)
//                 }
//                 else{
//                     eventList[temp_ev.id-1].prev_activities.push(prev_act)
//                 }
//             })
//         }
//
//
//     })
//     return eventList
// }
//
// const calculateBeginTime = (eventList: Array<CPMEvent>) => {
//     var tr = 0;
//     eventList.forEach(function (item){
//         if(item.prev_activities.length===0){
//             eventList[item.id-1].t_begin = 0;
//         }
//         else{
//             item.prev_activities.forEach(function (activities){
//                 var temp_ev = eventList.find((t)=> t.next_activities.find((n_act)=> n_act === activities))
//
//                 if(temp_ev){
//
//                     var sum = temp_ev.t_begin + activities.duration;
//                     console.log(sum)
//                     if(sum > item.t_begin) eventList[item.id-1].t_begin = sum;
//                 }
//                 //else jakis error tu powinien byc
//             })
//         }
//
//     })
//
//     return eventList;
// }
// export {findStartingActivities, createEventList, calculateBeginTime}

const calculateESEF = (taskList: Array<Activity>) => {
    taskList.forEach(function (item){
        if(item.previous_activity.length == 0){
            item.es = 0;
            item.ef = item.duration;
        }
        else{

            item.previous_activity.forEach(function (prev_task){
                if(prev_task.ef > item.es ) item.es = prev_task.ef;
                if(!prev_task.next_activity.includes(item)) prev_task.next_activity.push(item);
            })
            item.ef = item.es + item.duration;
        }
    })
}

const findLastTasks = (taskList: Array<Activity>) : Array<Activity> =>{
    var prev_act_list = new Array<Activity>(0)
    taskList.forEach(function(activ){
        activ.previous_activity.forEach(function(item){
            prev_act_list.push(item)
        })
    })
    var last_activities = new Array<Activity>()
    taskList.forEach(function (item){
        var duplicates = false
        for( var i = 0; i < prev_act_list.length; i++){
            if(prev_act_list[i] === item){
                duplicates = true;
                break;
            }
        }
        if(duplicates === false){
            last_activities.push(item)
        }
    })
    return last_activities;
}

const calculateLSLF = (taskList: Array<Activity>) => {
    var lastTasks = findLastTasks(taskList);
    var T = 0
    lastTasks.forEach(function (item){
        if(item.ef > T) T = item.ef;
    })
    console.log(T)
    for(var i = taskList.length-1; i > -1; i--){
        if(lastTasks.includes(taskList[i])){
            taskList[i].lf = T
            taskList[i].ls = T - taskList[i].duration
        }
        else{
            taskList[i].lf = Number.MAX_SAFE_INTEGER;
            taskList[i].next_activity.forEach(function (item){
                if(item.ls < taskList[i].lf){
                    taskList[i].lf = item.ls;
                    taskList[i].ls = taskList[i].lf - taskList[i].duration
                }
            })
        }
    }
}

const calculateDiff = (taskList: Array<Activity>) =>{
    taskList.forEach(function (item){
        item.t_diff = item.lf - item.ef;
    })
}

const findCritical = (taskList: Array<Activity>)=>{
    taskList.forEach(function (item){
        if(item.t_diff === 0) item.is_critical = true;
    })
}

const solveCPM = (taskList: Array<Activity>)=>{
    calculateESEF(taskList);
    calculateLSLF(taskList);
    calculateDiff(taskList);
    findCritical(taskList);
}

export {solveCPM}
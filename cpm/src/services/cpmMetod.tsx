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
                if(item.es + prev_task.es > item.es ) item.es = item.es+prev_task.es;
            })
            item.ef = item.es + item.duration;
        }
    })
}

const findLastTasks = (taskList: Array<Activity>) : Array<Activity> =>{
    var lastTasks = new Array<Activity>(0);

    return lastTasks;
}

const calculateLSLF = (taskList: Array<Activity>) => {

}
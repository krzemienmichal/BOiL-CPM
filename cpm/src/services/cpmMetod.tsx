import Activity from "./model"

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
    return T
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
    var criticalTime = calculateLSLF(taskList);
    calculateDiff(taskList);
    findCritical(taskList);
    return criticalTime
}

export {solveCPM}
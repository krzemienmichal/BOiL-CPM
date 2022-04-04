import Activity from "./model"

type CPMEvent = {
    id: number;
    t_begin: number;
    t_end: number;
    t_diff: number;
    prev_activities: Array<Activity>;
    next_activities: Array<Activity>;
}

export default CPMEvent
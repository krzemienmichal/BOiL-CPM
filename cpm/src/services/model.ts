type Activity = {
    id: number;
    name: string;
    duration: number;
    previous_activity: Array<Activity>;
    next_activity: Array<Activity>;
    es: number;
    ef: number;
    ls: number;
    lf: number;
    t_diff: number;
    is_critical: boolean;
}

export default Activity;


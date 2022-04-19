type Activity = {
    id: number;
    name: string;
    duration: number;
    previous_activity: Array<Activity>;
    es: number;
    ef: number;
    ls: number;
    lf: number;
}

export default Activity;


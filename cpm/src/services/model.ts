type Activity = {
    id: number;
    name: string;
    duration: number;
    previous_activity: Array<Activity>;
}

export default Activity;


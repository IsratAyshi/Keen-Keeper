

const getActivitiesFromLocalDB = () => {
    if (typeof window === "undefined") return [];

    const allActivities = localStorage.getItem('activities');
    
    // if (allActivities) {
    //     return JSON.parse(allActivities);
    // };    // date is still string so need to convert it to date if doing date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })

    if (allActivities) {
        const parsedActivities = JSON.parse(allActivities);
        // console.log(parsedActivities);

        const activitiesWithDateFix = parsedActivities.map(activity => (
            {
            ...activity,
            date: new Date(activity.date),
            }
        ));
        // console.log(activitiesWithDateFix);

        return activitiesWithDateFix;
    };

    return [];
}

const addActivityToLocalDB = (activity) => {
    if (typeof window === "undefined") return;

    const allActivities = getActivitiesFromLocalDB();

    allActivities.push(activity);
    localStorage.setItem('activities', JSON.stringify(allActivities));
}

export { getActivitiesFromLocalDB, addActivityToLocalDB };

"use client";

import { getActivitiesFromLocalDB } from "@/utils/localDB";

const ActivityCount = () => {

    const count = getActivitiesFromLocalDB().length

    return (
        <>
            {count}
        </>
    );
};

export default ActivityCount;
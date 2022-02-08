type dataType = {
    name: string;
    specialist: string;
    date: string;
    time: string;
    status: boolean;
    settings: boolean;
}
export const Data : dataType[] = [
    {
        name: "Clark Amber",
        specialist: "Cardiologist",
        date: "24 Mar 2020",
        time:"14:00 PM",
        status: false,
        settings: true,
    },
    {
        name: "Adam Kelin",
        specialist: "Dantist",
        date: "24 Jan 2020",
        time:"08:30 AM",
        status: true,
        settings: true,
    },
    {
        name: "Mary Bella",
        specialist: "Psycologist",
        date: "10 Nov 2020",
        time:"09:00 AM",
        status: true,
        settings: true,
    }
]
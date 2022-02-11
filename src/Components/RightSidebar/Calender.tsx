import { useState, useEffect } from "react";
import {
    format,
    subMonths,
    addMonths,
    startOfWeek,
    addDays,
    isSameDay,
    lastDayOfWeek,
    getWeek,
    addWeeks,
    subWeeks
} from "date-fns";
import data from '../../Data/TreatmentInformation/VisitingDoctorInformations.json';

interface calenderType {
    calSelectedDate: Date;
    calSetSelectedDate: React.Dispatch<React.SetStateAction<Date>>;
    showDetailsHandle: (day: string) => void;
    startDate: string;
    setStartDate: React.Dispatch<React.SetStateAction<string>>;
    endDate: string;
    setEndDate: React.Dispatch<React.SetStateAction<string>>;
}

const Calendar: React.FC<calenderType> = ({ showDetailsHandle, calSelectedDate, calSetSelectedDate, startDate, setStartDate, endDate, setEndDate }) => {
    const [currentMonth, setCurrentMonth] = useState(calSelectedDate);
    const [currentWeek, setCurrentWeek] = useState(getWeek(currentMonth));
    const [selectedDate, setSelectedDate] = useState(calSelectedDate);

    //   const changeMonthHandle = (btnType) => {
    //     if (btnType === "prev") {
    //       setCurrentMonth(subMonths(currentMonth, 1));
    //     }
    //     if (btnType === "next") {
    //       setCurrentMonth(addMonths(currentMonth, 1));
    //     }
    //   };

    useEffect(() => {
        setCurrentMonth(calSelectedDate)
        setSelectedDate(calSelectedDate)
        calSetSelectedDate(calSelectedDate)
    }, [calSelectedDate])

    const changeWeekHandle = (btnType: string) => {
        //console.log("current week", currentWeek);
        if (btnType === "prev") {
            //console.log(subWeeks(currentMonth, 1));
            setCurrentMonth(subWeeks(currentMonth, 1));
            setCurrentWeek(getWeek(subWeeks(currentMonth, 1)));
        }
        if (btnType === "next") {
            //console.log(addWeeks(currentMonth, 1));
            setCurrentMonth(addWeeks(currentMonth, 1));
            setCurrentWeek(getWeek(addWeeks(currentMonth, 1)));
        }
    };

    const onDateClickHandle = (day: any, dayStr: any) => {
        setSelectedDate(day);
        showDetailsHandle(dayStr);
    };

    const renderHeader = () => {
        const dateFormat = "MMM yyyy";
        // console.log("selected day", selectedDate);

        return (
            <div className="header row flex-middle">
                <div className="col col-center">
                    <span>{format(currentMonth, dateFormat)}</span>
                </div>
            </div>
        );
    };
    const renderDays = () => {
        const dateFormat = "EEE";
        const days = [];
        let startDate = startOfWeek(currentMonth, { weekStartsOn: 1 });
        for (let i = 0; i < 7; i++) {
            days.push(
                <div className="col col-center" key={i}>
                    {format(addDays(startDate, i), dateFormat)}
                </div>
            );
        }
        return <div className="days row">{days}</div>;
    };
    const renderCells = () => {
        const startDate = startOfWeek(currentMonth, { weekStartsOn: 1 });
        const endDate = lastDayOfWeek(currentMonth, { weekStartsOn: 1 });
        setStartDate(startDate.toLocaleDateString())
        setEndDate(endDate.toLocaleDateString());
        const dateFormat = "d";
        const rows = [];
        let days = [];
        let day = startDate;
        let formattedDate = "";
        while (day <= endDate) {
            for (let i = 0; i < 7; i++) {
                const colorArr = data.filter((item) => {
                    if (item.visitingDate === day.toLocaleDateString()) {
                        return item.colors
                    }
                })
                formattedDate = format(day, dateFormat);
                const cloneDay = day;
                days.push(
                    <div
                        className={`col cell ${isSameDay(day, new Date())
                            ? "today"
                            : isSameDay(day, selectedDate)
                                ? "selected"
                                : ""
                            }`}
                        key={day.toString()}
                        onClick={() => {
                            const dayStr = format(cloneDay, "ccc dd MMM yy");
                            onDateClickHandle(cloneDay, dayStr);
                        }}
                    >
                        <div>
                            <span className="number">{formattedDate}</span>
                            <span className="bg">{formattedDate}</span>
                        </div>
                        <div className="flex mt-10 ml-5 p-1 ">
                            {
                                colorArr[0]?.colors.map((item, index:number)=><div key={index} className={'h-2 w-2 p-1 mr-1 mt-2 rounded-full bg-' + item}></div>)
                            }
                        </div>
                    </div>
                );
                day = addDays(day, 1);
            }

            rows.push(
                <div className="row" key={day.toString()}>
                    {days}
                </div>
            );
            days = [];
        }
        return <div className="body">{rows}</div>;
    };
    const renderFooter = () => {
        return (
            <div className="header row flex-middle">
                <div className="col col-start">
                    <div className="icon" onClick={() => changeWeekHandle("prev")}>
                        prev week
                    </div>
                </div>
                <div className="col col-end" onClick={() => changeWeekHandle("next")}>
                    <div className="icon">next week</div>
                </div>
            </div>
        );
    };
    return (
        <div className="calendar">
            {renderDays()}
            {renderCells()}
            {renderFooter()}
        </div>
    );
};

export default Calendar;

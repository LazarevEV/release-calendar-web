import { React, useEffect, useState } from "react";
import { HeaderWrapper, HeaderSubWrapper, CurrentCalendarStateWrapper, MonthYearWrapper, MonthHeader, YearHeader, FilterWrapper, FilterElement, WeekdayWrapper, WeekdayElement } from "./HeaderStyled";

export default function Header(props) {
    const [ filterStates, setFilterStates ] = useState([true, true, true])

    const handleFilterClick = (filterId) => {
        let filterStatesNew = [...filterStates]
        filterStatesNew[filterId] = !filterStatesNew[filterId]
        setFilterStates(filterStatesNew)
    }


    return (
        <HeaderWrapper>
            <HeaderSubWrapper>
                <CurrentCalendarStateWrapper>
                    <MonthYearWrapper>
                        <MonthHeader>{props.currentDate.month.toUpperCase()}</MonthHeader>
                        <YearHeader>{props.currentDate.year}</YearHeader>
                    </MonthYearWrapper>
                    <FilterWrapper>
                        <FilterElement isActive={filterStates[0]} onClick={() => handleFilterClick(0)}>Game</FilterElement>
                        <FilterElement isActive={filterStates[1]} onClick={() => handleFilterClick(1)}>Movie</FilterElement>
                        <FilterElement isActive={filterStates[2]} onClick={() => handleFilterClick(2)}>Series</FilterElement>
                    </FilterWrapper>
                </CurrentCalendarStateWrapper>
            </HeaderSubWrapper>
            <WeekdayWrapper>
                <WeekdayElement>MON</WeekdayElement>
                <WeekdayElement>TUE</WeekdayElement>
                <WeekdayElement>WED</WeekdayElement>
                <WeekdayElement>THU</WeekdayElement>
                <WeekdayElement>FRI</WeekdayElement>
                <WeekdayElement>SAT</WeekdayElement>
                <WeekdayElement>SUN</WeekdayElement>
            </WeekdayWrapper>
        </HeaderWrapper>
    )
}
import styled from "styled-components";

const HeaderWrapper = styled.div`
    display: flex;
    flex-direction: column;

    padding: 18px;
`
const HeaderSubWrapper = styled.div`
    display: flex;
    flex-direction: row;

    margin-bottom: 32px;
`

// Calendar State: Month, Year
const CurrentCalendarStateWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
`

const MonthYearWrapper = styled.div`
    display: flex;
    flex-direction: row;
    gap: 12px;
`

const MonthHeader = styled.span`
    font-size: 42px;
    font-weight: 700;
    color: #f4f4f4;
`

const YearHeader = styled.span`
    font-size: 42px;
    font-weight: 400;
    color: #f4f4f4;
`

// Filters: Media Type, Platform (for games)
const FilterWrapper = styled.div`
    display: flex;
    flex-direction: row;
    gap: 8px;

    margin-top: 8px;
`

const FilterElement = styled.button`
    width: 64px;
    height: 18px;

    line-height: 18px;
    font-size: 14px;

    border: none;
    border-radius: 32px;
    background-color: ${props => props.isActive ? "rgba(228, 228, 228, 1)" : "rgba(228, 228, 228, .4)"};

    padding: 0;

    &:hover {
        cursor: pointer;
        background-color: rgba(228, 228, 228, .7)
    }
`

const WeekdayWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(7, minmax(128px, 1fr));
    column-gap: 12px;

    // display: flex;
    // flex-direction: row;
    // gap: 32px;
    // justify-content: space-between;
`

const WeekdayElement = styled.span`
    width: 48px;
    height: 18px;
    line-height: 20px;

    font-weight: 500;
    font-size: 14px;
    text-align: center;

    color: #000000;
    background-color: #f4f4f4;
    border-radius: 32px;

    padding: 0;
    margin: auto;
`

export { HeaderWrapper, HeaderSubWrapper, CurrentCalendarStateWrapper, MonthYearWrapper, MonthHeader, YearHeader, FilterWrapper, FilterElement, WeekdayWrapper, WeekdayElement }
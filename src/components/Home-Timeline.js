import React from "react";
import renderHTML from "react-render-html";

const HomeTimeline = props => {
    //logic
    // console.log("Timeline: ", props.data);

    let datesArray = [];

    //generate list of dates
    for(let date in props.data) {
        if(props.data[date].hasOwnProperty("date")) {
            datesArray.push(props.data[date]);
        }
    }

    //map time
    let dates = datesArray.map(date => {
        //determine the class
        let classes;
        let now = new Date();
        let targetDate = new Date(date.date);

        if(now > targetDate) {
            classes = `section--timeline__timeline-date date-past`
        } else {
            classes = `section--timeline__timeline-date`
        }

        return (
            <li key={date.event} className={classes}>
                <h3 className="section--timeline__timeline-date-year">{date.year}</h3>
                <div className="section--timeline__timeline-date-completion"></div>
                <p className="section--timeline__timeline-date-text">{date.dateText}</p>
                <p className="section--timeline__timeline-date-event">{renderHTML(date.event)}</p>
                <div className="section--timeline__timeline-date-completion-down-arrow">
                    <img src={props.data.downChevron.file.url} alt="Down chevron"/>
                </div>
            </li>
        );
    });

    return(
        <section className="section section--timeline">
            <h2 className="section__header">{props.data.sectionHeader}</h2>
            <div className="section--timeline__timeline-container">
                <ul className="section--timeline__timeline-list">
                    {dates}
                </ul>
            </div>
        </section>
    );
}

export default HomeTimeline;

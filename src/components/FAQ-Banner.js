import React from "react";

const FAQ = props => {
    //logic

    return(
        <section className="section section--faq">
            <h3 className="section__header"><a target="_blank" href="/faq">{props.data.sectionHeader}</a></h3>
            <img src={props.data.rightArrow.file.url} alt="Right arrow" className="section--faq__arrow" />
        </section>
    );
}

export default FAQ;

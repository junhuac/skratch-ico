import React from "react";

const HomePress = props => {
    //logic

    return(
        <section className="section section--press">
            <h2 className="section__header">{props.data.sectionHeader}</h2>
            <div className="section__image-container">
                <img src={props.data.sectionImage.file.url} alt="Press"/>
            </div>
        </section>
    );
}

export default HomePress;

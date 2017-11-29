import React from "react";

const ResourcesBanner = props => {
    //logic

    //markup
    return(
        <section className="section section--resources-banner">
            <h3 className="section__header"><a href="/">{props.data.bannerText}</a></h3>
        </section>
    );
}

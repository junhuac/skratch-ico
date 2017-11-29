import React from "react";
import renderHTML from "react-render-html";

const HomeHowItWorks = props => {
    //logic
    // console.log("How it works props: ", props);

    return(
        <section className="section section--home-works">
            <div className="section--home-works__left-content">
                {/*<h2 className="section__header">{props.data.sectionHeader}</h2>
                <p className="section__text">{renderHTML(props.data.sectionText.sectionText)}</p>*/}
                <h2 className="section__header what-is-skratch">{props.data.sectionHeader2}</h2>
                <p className="section__text what-is-skratch-text what-is-skratch">{props.data.sectionText2Paragraph1.sectionText2Paragraph1}</p>
                <p className="section__text what-is-skratch">{props.data.sectionText2Paragraph2.sectionText2Paragraph2}</p>
            </div>
            <div className="section--home-works__middle-content">
               {/* <h2 className="section__header what-is-skratch">{props.data.sectionHeader2}</h2>
                <p className="section__text what-is-skratch-text what-is-skratch">{props.data.sectionText2Paragraph1.sectionText2Paragraph1}</p>
                <p className="section__text what-is-skratch">{props.data.sectionText2Paragraph2.sectionText2Paragraph2}</p>*/}
                <h2 className="section__header">{props.data.sectionHeader}</h2>
                <p className="section__text">{renderHTML(props.data.sectionText.sectionText)}</p>
            </div>
            <div className="section--home-works__right-content">

                <img src={props.data.sectionImage.file.url} alt="How Skratch works"/>
                <p className="image-caption what-is-skratch">{props.data.imageCaption.imageCaption}</p>
            </div>
        </section>
    );
}

export default HomeHowItWorks;

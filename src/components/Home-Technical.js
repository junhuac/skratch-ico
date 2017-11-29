import React from "react";
import renderHTML from "react-render-html";

const HomeTechnical = props => {
    //logic

    return(
        <section className="section section--technical">
            <div className="section--technical__text-content">
                <h2 className="section__header">{props.data.sectionHeader}</h2>
                <p className="section__text">{renderHTML(props.data.childContentfulSectionTechnicalDetailsSectionTextTextNode.sectionText)}</p>
            </div>
{/*            <div className="section__image-container">
                <img src={props.data.sectionImage.file.url} alt="image" />
                <img src={props.data.sectionImage.file.url} alt="image" />
            </div>*/}
            <div className="section__image-container video-container">
                <img src={props.data.icoVideo.file.url} alt="Technical details video" />
            </div>
        </section>
    );
}

export default HomeTechnical;

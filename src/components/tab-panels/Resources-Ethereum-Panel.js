import React from "react";
import renderHTML from "react-render-html";

const ResourcesEthereumPanel = props => {
    //logic
    console.log("Etehreum Props: ", props);
    //return
    return (
        <div className={`resources__carousel-panel ethereum-wallet`}>
            <div className="resources__banner section">
                <h2 className="section__header">
                    {props.data.tabHeader}
                </h2>
            </div>
            <section className="section section--resources-page">
                <div className="section--resources-page__panel-div">
                    <h3 className="section--resources-page__subheader">
                        {props.data.whatIsAnEthereumWalletSubheader}
                    </h3>
                    <p className="section--resources-page__text">
                        {renderHTML(props.data.whatIsAnEthereumWalletText1.whatIsAnEthereumWalletText1)}
                    </p>
                    <p className="section--resources-page__text">
                        {props.data.whatIsAnEthereumWalletText2.whatIsAnEthereumWalletText2}
                    </p>
                    <div className="section--resources-page__image-container">
                        <img src={props.data.ethereumWalletImage.file.url} alt="Ethereum wallet image" />
                    </div>
                    <p className="section--resources-page__text">
                        {props.data.whatIsAnEthereumWalletText3.whatIsAnEthereumWalletText3}
                    </p>
                </div>
                <div className="section--resources-page__panel-div">
                    <h3 className="section--resources-page__subheader">
                        {props.data.differentTypesSubheader}
                    </h3>
                    <p className="section--resources-page__text">
                        {props.data.differentTypesText.differentTypesText}
                    </p>
                    <h4 className="section--resources-page__big-text">
                        {props.data.differentTypesDesktopBigText}
                    </h4>
                    <p className="section--resources-page__text">
                        {renderHTML(props.data.differentTypesDesktopText.differentTypesDesktopText)}
                    </p>
                    <h4 className="section--resources-page__big-text">
                        {props.data.differentTypesOnlineBigText}
                    </h4>
                    <p className="section--resources-page__text">
                        {renderHTML(props.data.differentTypesOnlineText.differentTypesOnlineText)}
                    </p>
                    <h4 className="section--resources-page__big-text">
                        {props.data.differentTypesMobileBigText}
                    </h4>
                    <p className="section--resources-page__text">
                        {renderHTML(props.data.differentTypesMobileText.differentTypesMobileText)}
                    </p>
                    <h4 className="section--resources-page__big-text">
                        {props.data.differentTypesHardwareBigText}
                    </h4>
                    <p className="section--resources-page__text">
                        {renderHTML(props.data.differentTypesHardwareText.differentTypesHardwareText)}
                    </p>
                    <h4 className="section--resources-page__big-text">
                        {props.data.differentTypesPaperBigText}
                    </h4>
                    <p className="section--resources-page__text">
                        {renderHTML(props.data.differentTypesPaperText1.differentTypesPaperText1)}
                    </p>
                    <p className="section--resources-page__text">
                        {renderHTML(props.data.differentTypesPaperText2.differentTypesPaperText2)}
                    </p>
                </div>
            </section>
        </div>
    );
};

export default ResourcesEthereumPanel;

import React from "react";
import renderHTML from "react-render-html";
import WhitepaperForm from "../WhitepaperForm";

const ResourcesBlockchainPanel = props => {
    //logic

    //return
    return (
        <div className={`resources__carousel-panel blockchain`}>
            <div className="resources__banner section">
                <h2 className="section__header">
                    {props.data.tabHeader}
                </h2>
            </div>
            <section className="section section--resources-page">
                <div className="section--resources-page__panel-div">
                    <h3 className="section--resources-page__subheader">
                        {props.data.whatIsBlockchainSubheader}
                    </h3>
                    <p className="section--resources-page__text">
                        {renderHTML(props.data.whatIsBlockchainText1.whatIsBlockchainText1)}
                    </p>
                    <p className="section--resources-page__text">
                        {props.data.whatIsBlockchainText2.whatIsBlockchainText2}
                    </p>
                    <p className="section--resources-page__text">
                        {props.data.whatIsBlockchainText3.whatIsBlockchainText3}
                    </p>
                </div>
                <div className="section--resources-page__panel-div">
                    <h3 className="section--resources-page__subheader">
                        {props.data.keyPropertiesSubheader}
                    </h3>
                    <p className="section--resources-page__text">
                        {props.data.keyPropertiesText1.keyPropertiesText1}
                    </p>
                    <ul className="key-properties__list">
                        <li className="key-properties__list">
                            {renderHTML(props.data.keyPropertiesBullet1.keyPropertiesBullet1)}
                        </li>
                        <li className="key-properties__list">
                            {renderHTML(props.data.keyPropertiesBullet2.keyPropertiesBullet2)}
                        </li>
                        <li className="key-properties__list">
                            {renderHTML(props.data.keyPropertiesBullet3.keyPropertiesBullet3)}
                        </li>
                        <li className="key-properties__list">
                            {renderHTML(props.data.keyPropertiesBullet4.keyPropertiesBullet4)}
                        </li>
                        <li className="key-properties__list">
                            {renderHTML(props.data.keyPropertiesBullet5.keyPropertiesBullet5)}
                        </li>
                    </ul>
                </div>
                <div className="section--resources-page__panel-div">
                    <h3 className="section--resources-page__subheader">
                        {props.data.componentsOfABlockchainSubheader}
                    </h3>
                    <ul className="components-of-blockchain__list">
                        <li className="components-of-blockchain__list-item">
                            {renderHTML(props.data.componentsOfABlockchainBullet1.componentsOfABlockchainBullet1)}
                        </li>
                        <li className="components-of-blockchain__list-item">
                            <p>
                                {props.data.componentsOfABlockchainBullet2}
                            </p>
                        </li>
                        <li className="components-of-blockchain__sub-item">
                            {props.data.componentsOfABlockchainBullet2Sub1.componentsOfABlockchainBullet2Sub1}
                        </li>
                        <li className="components-of-blockchain__sub-item">
                            {props.data.componentsOfABlockchainBullet2Sub2.componentsOfABlockchainBullet2Sub2}
                        </li>
                        <li className="components-of-blockchain__sub-item">
                            {props.data.componentsOfABlockchainBullet2Sub3.componentsOfABlockchainBullet2Sub3}
                        </li>
                        <li className="components-of-blockchain__sub-item">
                            {props.data.componentsOfABlockchainBullet2Sub4.componentsOfABlockchainBullet2Sub4}
                        </li>
                    </ul>
                    <div className="section--resources-page__image-container">
                        <img src={props.data.componentsOfABlockchainImage.file.url} alt="Blockchain image" />
                    </div>
                </div>
                <div className="section--resources-page__panel-div">
                    <h3 className="section--resources-page__subheader">
                        {props.data.whoUsesBlockchainSubheader}
                    </h3>
                    <p className="section--resources-page__text">
                        {renderHTML(props.data.whoUsesBlockchainText1.whoUsesBlockchainText1)}
                    </p>
                    <p className="section--resources-page__text">
                        {props.data.whoUsesBlockchainText2.whoUsesBlockchainText2}
                    </p>
                    <p className="join-text before-disclaimer">
                        {props.data.readyToLearn}
                    </p>
                    <p className="resources__disclaimer">
                        {renderHTML(props.data.disclaimer.disclaimer)}
                    </p>
                </div>
            </section>
            <WhitepaperForm />
        </div>
    );
};

export default ResourcesBlockchainPanel;

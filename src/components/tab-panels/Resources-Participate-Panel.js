import React from "react";
import renderHTML from "react-render-html";
import WhitepaperForm from "../WhitepaperForm";

const ResourcesParticipatePanel = props => {
  //logic

  //return
  return (
    <div className={`resources__carousel-panel how-to-participate`}>
      <div className="resources__banner section">
        <h2 className="section__header">
          {props.data.tabHeader}
        </h2>
      </div>
      <section className="section section--resources-page">
        <div className="section--resources-page__panel-div">
          <h3 className="section--resources-page__subheader">
            {props.data.skratchEconomySubheader}
          </h3>
          <h4 className="section--resources-page__big-text">
            {props.data.participantsBigText}
          </h4>
          <ul className="participants__list">
            <li className="participants__list-item">
              {renderHTML(props.data.participantsBullet1.participantsBullet1)}
            </li>
            <li className="participants__list-item">
              {renderHTML(props.data.participantsBullet2.participantsBullet2)}
            </li>
            <li className="participants__list-item">
              {renderHTML(props.data.participantsBullet3.participantsBullet3)}
            </li>
          </ul>
          <h4 className="section--resources-page__big-text">
            {props.data.currencyAndTransactionsBigText}
          </h4>
          <p className="section--resources-page__text">
            {props.data.currencyAndTransactionsText}
          </p>
        </div>
        <div className="section--resources-page__panel-div">
          <h3 className="section--resources-page__subheader">
            {props.data.icoPresaleSubheader}
          </h3>
          <h4 className="section--resources-page__big-text">
            {props.data.whyParticipateBigText}
          </h4>
          <p className="section--resources-page__text">
            {props.data.whyParticipateText.whyParticipateText}
          </p>
          <ul className="why-participate__list">
            <li className="why-participate__list-item">
              {props.data.whyParticipateBullet1}
            </li>
            <li className="why-participate__list-item">
              {props.data.whyParticipateBullet2}
            </li>
            <li className="why-participate__list-item">
              {props.data.whyParticipateBullet3}
            </li>
          </ul>
          <h4 className="section--resources-page__big-text">
            {props.data.howToParticipateBigText}
          </h4>
          <ul className="how-to-participate__list">
            <li className="how-to-participate__list-item">
              {renderHTML(props.data.howToParticipateBullet1.howToParticipateBullet1)}
            </li>
            <li className="how-to-participate__list-item">
              {renderHTML(props.data.howToParticipateBullet2.howToParticipateBullet2)}
            </li>
            <li className="how-to-participate__list-item">
              {renderHTML(props.data.howToParticipateBullet3.howToParticipateBullet3)}
            </li>
            <li className="how-to-participate__list-item">
              {renderHTML(props.data.howToParticipateBullet4.howToParticipateBullet4)}
            </li>
            <li className="how-to-participate__list-item">
              {renderHTML(props.data.howToParticipateBullet5.howToParticipateBullet5)}
            </li>
            <li className="how-to-participate__list-item">
              {renderHTML(props.data.howToParticipateBullet6.howToParticipateBullet6)}
            </li>
          </ul>
          <p className="join-text">
            {props.data.howToParticipateJoinText}
          </p>
        </div>
      </section>
      <WhitepaperForm />
    </div>
  );
};

export default ResourcesParticipatePanel;

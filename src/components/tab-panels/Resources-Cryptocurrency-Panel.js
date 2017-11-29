import React from "react";
import renderHTML from "react-render-html";
import WhitepaperForm from "../WhitepaperForm";

const ResourcesCryptocurrencyPanel = props => {
  //logic

  //return
  return (
    <div className={`resources__carousel-panel cryptocurrency`}>
      <div className="resources__banner section">
        <h2 className="section__header">
          {props.data.tabHeader}
        </h2>
      </div>
      <section className="section section--resources-page">
        <div className="section--resources-page__panel-div">
          <h3 className="section--resources-page__subheader">
            {props.data.whatIsCryptocurrencySubheader}
          </h3>
          <p className="section--resources-page__text">
            {props.data.whatIsCryptocurrencyText.whatIsCryptocurrencyText}
          </p>
        </div>
        <div className="section--resources-page__panel-div">
          <h3 className="section--resources-page__subheader">
            {props.data.whyCryptocurrencySubheader}
          </h3>
          <p className="section--resources-page__text">
            {props.data.whyCryptocurrencyText1.whyCryptocurrencyText1}
          </p>
          <p className="section--resources-page__text">
            {props.data.whyCryptocurrencyText2.whyCryptocurrencyText2}
          </p>
          <p className="section--resources-page__text">
            {renderHTML(props.data.whyCryptocurrencyText3.whyCryptocurrencyText3)}
          </p>
        </div>
        <div className="section--resources-page__panel-div">
          <h3 className="section--resources-page__subheader">
            {props.data.whatCryptocurrencyDoesSubheader}
          </h3>
          <p className="section--resources-page__text">
            {props.data.whatCryptocurrencyDoesText.whatCryptocurrencyDoesText}
          </p>
          <ol className="what-crypto-currency-does__list">
            <li className="what-crypto-currency-does__list">
              {props.data.whatCryptocurrencyDoesBullet1.whatCryptocurrencyDoesBullet1}
            </li>
            <li className="what-crypto-currency-does__list">
              {props.data.whatCryptocurrencyDoesBullet2.whatCryptocurrencyDoesBullet2}
            </li>
          </ol>
        </div>
        <div className="section--resources-page__panel-div">
          <h3 className="section--resources-page__subheader">
            {props.data.economicsOfCryptocurrencySubheader}
          </h3>
          <p className="section--resources-page__text">
            {props.data.economicsOfCryptocurrencyText.economicsOfCryptocurrencyText}
          </p>
          <ul className="economics-of-cryptocurrency__list">
            <li>
              {renderHTML(props.data.economicsOfCryptocurrencyBullet1.economicsOfCryptocurrencyBullet1)}
            </li>
            <li>
              {renderHTML(props.data.economicsOfCryptocurrencyBullet2.economicsOfCryptocurrencyBullet2)}
            </li>
            <li>
              {renderHTML(props.data.economicsOfCryptocurrencyBullet3.economicsOfCryptocurrencyBullet3)}
            </li>
            <li>
              {renderHTML(props.data.economicsOfCryptocurrencyBullet4.economicsOfCryptocurrencyBullet4)}
            </li>
            <li>
              {renderHTML(props.data.economicsOfCryptocurrencyBullet5.economicsOfCryptocurrencyBullet5)}
            </li>
            <li>
              {renderHTML(props.data.economicsOfCryptocurrencyBullet6.economicsOfCryptocurrencyBullet6)}
            </li>
          </ul>
          <div className="section--resources-page__image-container">
            <img src={props.data.economicsOfCryptocurrencyImage.file.url} alt="Cryptocurrency image" />
          </div>
        </div>
        <div className="section--resources-page__panel-div">
          <h3 className="section--resources-page__subheader">
            {props.data.cryptocurrencyLingoSubheader}
          </h3>
          <ul className="cryptocurrency-lingo__list">
            <li>
              {renderHTML(props.data.cryptocurrencyLingoBullet1.cryptocurrencyLingoBullet1)}
            </li>
            <li>
              {renderHTML(props.data.cryptocurrencyLingoBullet2.cryptocurrencyLingoBullet2)}
            </li>
            <li>
              {renderHTML(props.data.cryptocurrencyLingoBullet3.cryptocurrencyLingoBullet3)}
            </li>
            <li>
              {renderHTML(props.data.cryptocurrencyLingoBullet4.cryptocurrencyLingoBullet4)}
            </li>
            <li>
              {renderHTML(props.data.cryptocurrencyLingoBullet5.cryptocurrencyLingoBullet5)}
            </li>
          </ul>
          <p className="join-text before-disclaimer">
            {props.data.readyToGoText}
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

export default ResourcesCryptocurrencyPanel;

import React from "react";
import EasyTransition from 'react-easy-transition';
import {Helmet} from "react-helmet";
import {pageTransition} from "../layouts/";
import "../SASS/SCSS/faq-page.scss";
import WhitepaperForm from "../components/WhitepaperForm";

const FAQ = props => {
    let location = (props.location ? props.location : "");
    console.log("FAQ data: ", props.data);

    let data = props.data.contentfulFaqPage;

    let metaSite = 'https://skratch-ico.surge.sh/faq';
    let metaTitle = "Skratch Marketplace FAQs | Skratch Cryptocurrency";
    let metaImage = "http://images.contentful.com/j5zy0n17n2ql/1jeoK6W0gCI0ecq6G0keiO/bd993849a4cfcc76bd32c0328a3d9650/logo.png";

    return(
        <EasyTransition
            path={location.pathname}
            initialStyle={{opacity: .4}}
            transition={pageTransition}
            finalStyle={{opacity: 1}}
        >

            <Helmet>
                <title>{metaTitle}</title>
                <link rel="canonical" href={metaSite} />
                <meta name="description" content="The cryptocurrency and blockchain world is complex. Learn where Skratch fits in, and how it ensures truly secure, trustless transactions." />
                <meta name="robots" content="noindex, nofollow" />

                {/*facebook data*/}
                <meta property="og:title" content={metaTitle} />
                <meta property="og:type" content="article" />
                <meta property="og:url" content={metaSite} />
                <meta property="og:image" content={metaImage} />
                <meta property="og:description" content="Skratch is changing how the music community buys, sells, and trades music products and services. Learn about Skratch smart contracts, trustless transactions, and more." />

                {/*twitter data*/}
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:site" content={metaSite} />
                <meta name="twitter:title" content={metaTitle} />
                <meta name="twitter:description" content="Learn how the Skratch marketplace is going to reshape the music community—Check out the FAQs:" />
                <meta name="twitter:creator" content="@skratchcoin" />
                <meta name="twitter:image" content={metaImage} />
            </Helmet>

            <div className="main-content faq-page">
                <div className="faq__banner section">
                  <h2 className="section__header">
                    {data.pageHeader}
                  </h2>
                </div>
                <section className="section section--faq-page">
                    <ol>
                        <li className="section--faq-page__list">
                            <div className="section--faq-page__panel-div">
                              <h3 className="section--faq-page__big-text">
                                {data.question1}
                              </h3>
                              <p className="section--faq-page__text">
                                {data.answer1.answer1}
                              </p>
                            </div>
                        </li>
                        <li className="section--faq-page__list">
                            <div className="section--faq-page__panel-div">
                              <h3 className="section--faq-page__big-text">
                                {data.question2}
                              </h3>
                              <p className="section--faq-page__text">
                                {data.answer2.answer2}
                              </p>
                            </div>
                        </li>
                        <li className="section--faq-page__list">
                            <div className="section--faq-page__panel-div">
                              <h3 className="section--faq-page__big-text">
                                {data.question3}
                              </h3>
                              <p className="section--faq-page__text">
                                {data.answer3.answer3}
                              </p>
                            </div>
                        </li>
                        <li className="section--faq-page__list">
                            <div className="section--faq-page__panel-div">
                              <h3 className="section--faq-page__big-text">
                                {data.question4}
                              </h3>
                              <p className="section--faq-page__text">
                                {data.answer4.answer4}
                              </p>
                            </div>
                        </li>
                        <li className="section--faq-page__list">
                            <div className="section--faq-page__panel-div">
                              <h3 className="section--faq-page__big-text">
                                {data.question5}
                              </h3>
                              <p className="section--faq-page__text">
                                {data.answer5.answer5}
                              </p>
                            </div>
                        </li>
                        <li className="section--faq-page__list">
                            <div className="section--faq-page__panel-div">
                              <h3 className="section--faq-page__big-text">
                                {data.question6}
                              </h3>
                              <p className="section--faq-page__text">
                                {data.answer6.answer6}
                              </p>
                            </div>
                        </li>
                        <li className="section--faq-page__list">
                            <div className="section--faq-page__panel-div">
                              <h3 className="section--faq-page__big-text">
                                {data.question7}
                              </h3>
                              <p className="section--faq-page__text">
                                {data.answer7.answer7}
                              </p>
                            </div>
                        </li>
                        <li className="section--faq-page__list">
                            <div className="section--faq-page__panel-div">
                              <h3 className="section--faq-page__big-text">
                                {data.question8}
                              </h3>
                              <p className="section--faq-page__text">
                                {data.answer8.answer8}
                              </p>
                            </div>
                        </li>
                        <li className="section--faq-page__list">
                            <div className="section--faq-page__panel-div">
                              <h3 className="section--faq-page__big-text">
                                {data.question9}
                              </h3>
                              <p className="section--faq-page__text">
                                {data.answer9.answer9}
                              </p>
                            </div>
                        </li>
                    </ol>
                </section>
                <WhitepaperForm />
            </div>
        </EasyTransition>
    );
}

export default FAQ



//query
export const query = graphql`
  query faqContentfulQuery {
    contentfulFaqPage {
        pageHeader
        question1
        answer1 {
          answer1
        }
        question2
        answer2 {
          answer2
        }
        question3
        answer3 {
          answer3
        }
        question4
        answer4 {
          answer4
        }
        question5
        answer5 {
          answer5
        }
        question6
        answer6 {
          answer6
        }
        question7
        answer7 {
          answer7
        }
        question8
        answer8 {
          answer8
        }
        question9
        answer9 {
          answer9
        }
      }
  }`

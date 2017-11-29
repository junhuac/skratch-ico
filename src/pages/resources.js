import React from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import {Helmet} from "react-helmet";
import "../SASS/SCSS/resources-page.scss";
import FAQ from "../components/FAQ-Banner";
import EasyTransition from 'react-easy-transition';
import {pageTransition} from "../layouts/";
import ParticipatePanel from "../components/tab-panels/Resources-Participate-Panel";
import ResourcesTabs from "../components/Resources-Tabs";
import Link from "gatsby-link";
import WhitepaperForm from "../components/WhitepaperForm";

class Resources extends React.Component {
  static propTypes = {
    name: React.PropTypes.string
  };

  constructor(props) {
    super(props);

  }

  componentDidMount() {}

  componentWillUnmount() {}


  render() {
    let data = this.props.data;
    let sectionFAQData = this.props.data.contentfulSectionFaq;
    let howToParticipateTabData = this.props.data.contentfulResourcesPageHowToParticipateTab;
    let spinner = this.props.data.contentfulResourcesPageHowToParticipateTab.loadingSpinner.file.url;

    let location = (this.props.location ? this.props.location : "");

    let metaSite = 'https://skratch-ico.surge.sh/resources';
    let metaTitle = "Participating in the Skratch Marketplace | Skratch ICO";
    let metaImage = "http://images.contentful.com/j5zy0n17n2ql/4wJhG16RNe2a4GKSEeE0ik/4803525ff2aa57f3ab003c35565a842b/how-it-works.png";


    return (
      <EasyTransition
          path={location.pathname}
          initialStyle={{opacity: .4}}
          transition={pageTransition}
          finalStyle={{opacity: 1}}
      >

        <Helmet>
            <title>{metaTitle}</title>
            <link rel="canonical" href={metaSite} />
            <meta name="description" content="Skratch token pre-sale opens soon! Learn how to buy cryptocurrency, set up your Ethereum wallet, and participate in the Skratch ICO." />
            <meta name="robots" content="noindex, nofollow" />

            {/*facebook data*/}
            <meta property="og:title" content={metaTitle} />
            <meta property="og:type" content="article" />
            <meta property="og:url" content={metaSite} />
            <meta property="og:image" content={metaImage} />
            <meta property="og:description" content="Skratch token pre-sale opens soon! Learn how to buy cryptocurrency, set up your Ethereum wallet, and participate in the Skratch ICO." />

            {/*twitter data*/}
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:site" content={metaSite} />
            <meta name="twitter:title" content={metaTitle} />
            <meta name="twitter:description" content="Skratch token pre-sale opens soon! Learn how to participate in the Skratch ICO:" />
            <meta name="twitter:creator" content="@skratchcoin" />
            <meta name="twitter:image" content={metaImage} />
        </Helmet>

        <div className="main-content resources">
          <ResourcesTabs spinner={spinner} />
          <div className="resources__carousel-panels">
            <ParticipatePanel data={howToParticipateTabData} key="1" />
          </div>
          <FAQ data={sectionFAQData} />
        </div>
      </EasyTransition>
    );
  }
}

export default Resources;

//query

export const query = graphql`
  query resourcesContentfulQuery {
    contentfulResourcesPageHowToParticipateTab {
      loadingSpinner {
        file {
          url
        }
      }
    }
    contentfulSectionFaq {
      sectionHeader
      rightArrow {
        file {
          url
        }
      }
    }
    contentfulResourcesPageHowToParticipateTab {
      resourcesTabs
      tabHeader
      skratchEconomySubheader
      participantsBigText
      participantsBullet1 {
        participantsBullet1
      }
      participantsBullet2 {
        participantsBullet2
      }
      participantsBullet3 {
        participantsBullet3
      }
      currencyAndTransactionsBigText
      currencyAndTransactionsText
      icoPresaleSubheader
      whyParticipateBigText
      whyParticipateText {
        whyParticipateText
      }
      whyParticipateBullet1
      whyParticipateBullet2
      whyParticipateBullet3
      howToParticipateBigText
      howToParticipateBullet1 {
        howToParticipateBullet1
      }
      howToParticipateBullet2 {
        howToParticipateBullet2
      }
      howToParticipateBullet3 {
        howToParticipateBullet3
      }
      howToParticipateBullet4 {
        howToParticipateBullet4
      }
      howToParticipateBullet5 {
        howToParticipateBullet5
      }
      howToParticipateBullet6 {
        howToParticipateBullet6
      }
      howToParticipateJoinText
    }
  }
`;

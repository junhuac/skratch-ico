import React from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import {Helmet} from "react-helmet";
import "../SASS/SCSS/resources-page.scss";
import FAQ from "../components/FAQ-Banner";
import EasyTransition from 'react-easy-transition';
import {pageTransition} from "../layouts/";
import BlockchainPanel from "../components/tab-panels/Resources-Blockchain-Panel";
import ResourcesTabs from "../components/Resources-Tabs";
import Link from "gatsby-link";
import renderHTML from "react-render-html";

class ResourcesBlockchain extends React.Component {
  static propTypes = {
    name: React.PropTypes.string
  };

  constructor(props) {
    super(props);

    this.state = {
      selectedSectionID: 1
    };
  }

  componentDidMount() {

  }

  componentWillUnmount() {}


  render() {
    let data = this.props.data;
    let sectionFAQData = this.props.data.contentfulSectionFaq;
    let blockchainTabData = this.props.data.contentfulResourcesPageBlockchain;
    let spinner = this.props.data.contentfulResourcesPageHowToParticipateTab.loadingSpinner.file.url;

    let location = (this.props.location ? this.props.location : "");

    let metaSite = 'https://skratch-ico.surge.sh/blockchain';
    let metaTitle = "Blockchain Overview | Skratch Token ICO";
    let metaImage = "http://images.contentful.com/j5zy0n17n2ql/1GmhwGBo6gUW86A26Ka4Co/cdf5a40df557bfbcb7e7e85390672e03/blockchain.png";

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
            <meta name="description" content="Skratch runs atop the Ethereum and Hyperledger Fabric blockchain. Learn what blockchain is, and how it works." />
            <meta name="robots" content="noindex, nofollow" />

            {/*facebook data*/}
            <meta property="og:title" content={metaTitle} />
            <meta property="og:type" content="article" />
            <meta property="og:url" content={metaSite} />
            <meta property="og:image" content={metaImage} />
            <meta property="og:description" content="Skratch runs atop the Ethereum and Hyperledger Fabric blockchain. Learn what blockchain is, and how it works." />

            {/*twitter data*/}
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:site" content={metaSite} />
            <meta name="twitter:title" content={metaTitle} />
            <meta name="twitter:description" content="The Skratch marketplace runs atop the Ethereum and Hyperledger Fabric blockchain. Learn how blockchain works:" />
            <meta name="twitter:creator" content="@skratchcoin" />
            <meta name="twitter:image" content={metaImage} />
        </Helmet>

        <div className="main-content resources">
          <ResourcesTabs spinner={spinner} />
          <BlockchainPanel data={blockchainTabData} />
          <FAQ data={sectionFAQData} />
        </div>
      </EasyTransition>
    );
  }
}

export default ResourcesBlockchain;

//query

export const query = graphql`
  query resourcesBlockchainContentfulQuery {
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

    contentfulResourcesPageBlockchain {
      tabHeader
      whatIsBlockchainSubheader
      whatIsBlockchainText1 {
        whatIsBlockchainText1
      }
      whatIsBlockchainText2 {
        whatIsBlockchainText2
      }
      whatIsBlockchainText3 {
        whatIsBlockchainText3
      }
      keyPropertiesSubheader
      keyPropertiesText1 {
        keyPropertiesText1
      }
      keyPropertiesBullet1 {
        keyPropertiesBullet1
      }
      keyPropertiesBullet2 {
        keyPropertiesBullet2
      }
      keyPropertiesBullet3 {
        keyPropertiesBullet3
      }
      keyPropertiesBullet4 {
        keyPropertiesBullet4
      }
      keyPropertiesBullet5 {
        keyPropertiesBullet5
      }
      componentsOfABlockchainSubheader
      componentsOfABlockchainBullet1 {
        componentsOfABlockchainBullet1
      }
      componentsOfABlockchainBullet2
      componentsOfABlockchainBullet2Sub1 {
        componentsOfABlockchainBullet2Sub1
      }
      componentsOfABlockchainBullet2Sub2 {
        componentsOfABlockchainBullet2Sub2
      }
      componentsOfABlockchainBullet2Sub3 {
        componentsOfABlockchainBullet2Sub3
      }
      componentsOfABlockchainBullet2Sub4 {
        componentsOfABlockchainBullet2Sub4
      }
      componentsOfABlockchainBullet2Sub1 {
        componentsOfABlockchainBullet2Sub1
      }
      componentsOfABlockchainImage {
        file {
          url
        }
      }
      whoUsesBlockchainSubheader
      whoUsesBlockchainText1 {
        whoUsesBlockchainText1
      }
      whoUsesBlockchainText2 {
        whoUsesBlockchainText2
      }
      readyToLearn
      disclaimer {
        disclaimer
      }
    }
  }
`;

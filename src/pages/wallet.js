import React from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import {Helmet} from "react-helmet";
import "../SASS/SCSS/resources-page.scss";
import FAQ from "../components/FAQ-Banner";
import EasyTransition from 'react-easy-transition';
import {pageTransition} from "../layouts/";
import EthereumPanel from "../components/tab-panels/Resources-Ethereum-Panel";
import ResourcesTabs from "../components/Resources-Tabs";
import Link from "gatsby-link";

class ResourcesWallet extends React.Component {
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
    let ethereumTabData = this.props.data.contentfulResourcesPageEthereum;
    let spinner = this.props.data.contentfulResourcesPageHowToParticipateTab.loadingSpinner.file.url;

    let location = (this.props.location ? this.props.location : "");

    let metaSite = 'https://skratch-ico.surge.sh/wallet';
    let metaTitle = "Ethereum Wallet Overview | Skratch Cryptocurrency";
    let metaImage = "http://images.contentful.com/j5zy0n17n2ql/40R6I8rFHikIeYeswGOGCi/af708e1c04851d3d0b2ee1778410b75d/skratch-flow-chart.svg";

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
            <meta name="description" content="Skratch token sales will happen in the Ethereum network. Learn how to get ETH, different types of cryptocurrency wallets, and more." />
            <meta name="robots" content="noindex, nofollow" />

            {/*facebook data*/}
            <meta property="og:title" content={metaTitle} />
            <meta property="og:type" content="article" />
            <meta property="og:url" content={metaSite} />
            <meta property="og:image" content={metaImage} />
            <meta property="og:description" content="Skratch tokens run on the Ethereum network. Learn what types of ETH wallets there are, how they work, and how to set yours up for Skratch." />

            {/*twitter data*/}
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:site" content={metaSite} />
            <meta name="twitter:title" content={metaTitle} />
            <meta name="twitter:description" content="Skratch tokens run on the Ethereum network. Learn what types of ETH wallets there are, and how to set yours up:" />
            <meta name="twitter:creator" content="@skratchcoin" />
            <meta name="twitter:image" content={metaImage} />
        </Helmet>

        <div className="main-content resources">
          <ResourcesTabs spinner={spinner} />
          <div className="resources__carousel-panels">
            <EthereumPanel data={ethereumTabData} key="4" />
          </div>
          <FAQ data={sectionFAQData} />
        </div>
      </EasyTransition>
    );
  }s
}

export default ResourcesWallet;

//query

export const query = graphql`
  query resourcesWalletContentfulQuery {
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
    contentfulResourcesPageEthereum {
      tabHeader
      ethereumWalletImage {
        file {
          url
        }
      }
      whatIsAnEthereumWalletSubheader
      whatIsAnEthereumWalletText1 {
        whatIsAnEthereumWalletText1
      }
      whatIsAnEthereumWalletText2 {
        whatIsAnEthereumWalletText2
      }
      whatIsAnEthereumWalletText3 {
        whatIsAnEthereumWalletText3
      }
      differentTypesSubheader
      differentTypesText {
        differentTypesText
      }
      differentTypesDesktopBigText
      differentTypesDesktopText {
        differentTypesDesktopText
      }
      differentTypesOnlineBigText
      differentTypesOnlineText {
        differentTypesOnlineText
      }
      differentTypesMobileBigText
      differentTypesMobileText {
        differentTypesMobileText
      }
      differentTypesHardwareBigText
      differentTypesHardwareText {
        differentTypesHardwareText
      }
      differentTypesPaperBigText
      differentTypesPaperText1 {
        differentTypesPaperText1
      }
      differentTypesPaperText2 {
        differentTypesPaperText2
      }
    }
  }
`;

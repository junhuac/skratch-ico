import React from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import {Helmet} from "react-helmet";
import "../SASS/SCSS/resources-page.scss";
import FAQ from "../components/FAQ-Banner";
import EasyTransition from 'react-easy-transition';
import {pageTransition} from "../layouts/";
import CryptocurrencyPanel from "../components/tab-panels/Resources-Cryptocurrency-Panel";
import ResourcesTabs from "../components/Resources-Tabs";
import Link from "gatsby-link";

class ResourcesCryptocurrency extends React.Component {
  static propTypes = {
    name: React.PropTypes.string
  };

  constructor(props) {
    super(props);

    this.state = {
      selectedSectionID: 1
    };
  }

  componentDidMount() {}

  componentWillUnmount() {}

  onTabClick(id) {
    // console.log(id);

    this.setState({
      selectedSectionID: id
    });
  }

  render() {
    let data = this.props.data;
    let sectionFAQData = this.props.data.contentfulSectionFaq;
    let cryptocurrencyTabData = this.props.data.contentfulResourcesPageCryptocurrency;
    let spinner = this.props.data.contentfulResourcesPageHowToParticipateTab.loadingSpinner.file.url;
    let location = (this.props.location ? this.props.location : "");

    let metaSite = 'https://skratch-ico.surge.sh/cryptocurrency';
    let metaTitle = "Cryptocurrency Overview | Skratch Token ICO";
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
            <meta name="description" content="Skratch cryptocurrency fuels the Skratch economy. Get a high level primer on what cryptocurrency is, including some important vocab to know." />
            <meta name="robots" content="noindex, nofollow" />

            {/*facebook data*/}
            <meta property="og:title" content={metaTitle} />
            <meta property="og:type" content="article" />
            <meta property="og:url" content={metaSite} />
            <meta property="og:image" content={metaImage} />
            <meta property="og:description" content="If you’re thinking about participating in the Skratch community, you’ll need to understand cryptocurrency first. Check out our high level overview." />

            {/*twitter data*/}
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:site" content={metaSite} />
            <meta name="twitter:title" content={metaTitle} />
            <meta name="twitter:description" content="Skratch cryptocurrency fuels the Skratch economy. Get a high level primer on what cryptocurrency is" />
            <meta name="twitter:creator" content="@skratchcoin" />
            <meta name="twitter:image" content={metaImage} />
        </Helmet>

        <div className="main-content resources">
          <ResourcesTabs spinner={spinner} />
          <div className="resources__carousel-panels">
            <CryptocurrencyPanel data={cryptocurrencyTabData} key="1" />
          </div>
          <FAQ data={sectionFAQData} />
        </div>
      </EasyTransition>
    );
  }
}

export default ResourcesCryptocurrency;

//query

export const query = graphql`
  query resourcesCryptocurrencyContentfulQuery {
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
    contentfulResourcesPageCryptocurrency {
      tabHeader
      whatIsCryptocurrencySubheader
      whatIsCryptocurrencyText {
        whatIsCryptocurrencyText
      }
      whyCryptocurrencySubheader
      whyCryptocurrencyText1 {
        whyCryptocurrencyText1
      }
      whyCryptocurrencyText2 {
        whyCryptocurrencyText2
      }
      whyCryptocurrencyText3 {
        whyCryptocurrencyText3
      }
      whatCryptocurrencyDoesSubheader
      whatCryptocurrencyDoesText {
        whatCryptocurrencyDoesText
      }
      whatCryptocurrencyDoesBullet1 {
        whatCryptocurrencyDoesBullet1
      }
      whatCryptocurrencyDoesBullet2 {
        whatCryptocurrencyDoesBullet2
      }
      economicsOfCryptocurrencySubheader
      economicsOfCryptocurrencyText {
        economicsOfCryptocurrencyText
      }
      economicsOfCryptocurrencyBullet1 {
        economicsOfCryptocurrencyBullet1
      }
      economicsOfCryptocurrencyBullet2 {
        economicsOfCryptocurrencyBullet2
      }
      economicsOfCryptocurrencyBullet3 {
        economicsOfCryptocurrencyBullet3
      }
      economicsOfCryptocurrencyBullet4 {
        economicsOfCryptocurrencyBullet4
      }
      economicsOfCryptocurrencyBullet5 {
        economicsOfCryptocurrencyBullet5
      }
      economicsOfCryptocurrencyBullet6 {
        economicsOfCryptocurrencyBullet6
      }
      economicsOfCryptocurrencyImage {
        file {
          url
        }
      }
      cryptocurrencyLingoSubheader
      cryptocurrencyLingoBullet1 {
        cryptocurrencyLingoBullet1
      }
      cryptocurrencyLingoBullet2 {
        cryptocurrencyLingoBullet2
      }
      cryptocurrencyLingoBullet3 {
        cryptocurrencyLingoBullet3
      }
      cryptocurrencyLingoBullet4 {
        cryptocurrencyLingoBullet4
      }
      cryptocurrencyLingoBullet5 {
        cryptocurrencyLingoBullet5
      }
      readyToGoText
      disclaimer {
        disclaimer
      }
    }
  }
`;

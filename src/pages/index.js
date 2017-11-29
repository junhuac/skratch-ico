import React from "react";
import Link from "gatsby-link";
import "../SASS/SCSS/home-page.scss";
import { pageTransition } from "../layouts/";
import EasyTransition from "react-easy-transition";
import HomeBanner from "../components/Home-Banner";
import HomeHowItWorks from "../components/Home-Works";
import HomeTeam from "../components/Home-Team";
import HomeAllocations from "../components/Home-Allocations";
import HomeTechnical from "../components/Home-Technical";
import HomeTimeline from "../components/Home-Timeline";
import HomePress from "../components/Home-Press";
import FAQ from "../components/FAQ-Banner";
import WhitepaperForm from "../components/WhitepaperForm";
import { Helmet } from "react-helmet";

const IndexPage = props => {
  let bannerData = props.data.contentfulBanner;
  let sectionHowItWorksData = props.data.contentfulSectionHowSkratchWorks;
  let sectionTeamData = props.data.contentfulSectionTeam;
  let sectionAllocationData = props.data.contentfulSectionTokenAllocation;
  let sectionTechnicalData = props.data.contentfulSectionTechnicalDetails;
  let sectionTimelineData = props.data.contentfulSectionTimeline;
  let sectionPressData = props.data.contentfulSectionPress;
  let sectionFAQData = props.data.contentfulSectionFaq;
  let marketingTabData = props.data.contentfulMarketingStrategy;
  let whitePaperTabData = props.data.contentfulWhitePaperHighlights;
  let financialModelData = props.data.contentfulFinancialModel;
  let images = props.data.allContentfulAsset.edges;

  let location = props.location ? props.location : "";

  let metaSite = "https://skratch-ico.surge.sh/";
  let metaTitle = "Cryptocurrency for the Music Community - How It Works";
  let metaImage =
    "http://images.contentful.com/j5zy0n17n2ql/4wJhG16RNe2a4GKSEeE0ik/4803525ff2aa57f3ab003c35565a842b/how-it-works.png";

  return (
    <EasyTransition
      path={location.pathname}
      initialStyle={{ opacity: 0.4 }}
      transition={pageTransition}
      finalStyle={{ opacity: 1 }}
    >
      <Helmet>
        <title>
          {metaTitle}
        </title>
        <link rel="canonical" href={metaSite} />
        <meta
          name="description"
          content="The Skratch marketplace opens new ways to buy, sell, and trade music products and media with cryptocurrency. Learn how it works, and get whitelisted for the pre-sale."
        />
        <meta name="robots" content="noindex, nofollow" />

        {/*facebook data*/}
        <meta property="og:title" content={metaTitle} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={metaSite} />
        <meta property="og:image" content={metaImage} />
        <meta
          property="og:description"
          content="Skratch is a new cryptocurrency protocol that will change the way people buys, sells, and trades music products, services, and media. Check it out, and get on the whitelist for the ICO."
        />

        {/*twitter data*/}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content={metaSite} />
        <meta name="twitter:title" content={metaTitle} />
        <meta
          name="twitter:description"
          content="Skratch is changing how people buy, sell, and trade music. Learn how the Skratch marketplace works:"
        />
        <meta name="twitter:creator" content="@skratchcoin" />
        <meta name="twitter:image" content={metaImage} />
      </Helmet>

      <div className="main-content">
        <HomeBanner data={bannerData} images={images} />
        <HomeHowItWorks data={sectionHowItWorksData} />
        <HomeTeam
          data={sectionTeamData}
          marketingTab={marketingTabData}
          whitePaperTab={whitePaperTabData}
          financialTab={financialModelData}
        />
        <HomeAllocations data={sectionAllocationData} />
        {/*<HomeTechnical data={sectionTechnicalData} />*/}
        <HomeTimeline data={sectionTimelineData} />
        {/*<HomePress data={sectionPressData} />*/}
        <FAQ data={sectionFAQData} />
        <WhitepaperForm />
      </div>
    </EasyTransition>
  );
};

export default IndexPage;

export const query = graphql`
  query homeContentfulQuery {
    contentfulBanner {
      bannerHeader
      bannerButtonText
      presaleText
      getEmailText
      emailButton
      slackImage {
        file {
          url
        }
      }
      twitterImage {
        file {
          url
        }
      }
      emailImage {
        file {
          url
        }
      }
      downArrow {
        file {
          url
        }
      }
    }
    contentfulSectionHowSkratchWorks {
      sectionHeader
      sectionHeader2
      sectionText {
        sectionText
      }
      sectionText2Paragraph1 {
        sectionText2Paragraph1
      }
      sectionText2Paragraph2 {
        sectionText2Paragraph2
      }
      sectionImage {
        file {
          url
        }
      }
      imageCaption {
        imageCaption
      }
    }
    contentfulSectionTeam {
      teamTabs
      coreTeamSubsectionHeader
      mikeKing {
        type
        teamMemberImage {
          file {
            url
          }
        }
        teamMemberName
        teamMemberTitle
        childContentfulTeamMemberTeamMemberDescriptionTextNode {
          teamMemberDescription
        }
      }
      jiafengLi {
        type
        teamMemberImage {
          file {
            url
          }
        }
        teamMemberName
        teamMemberTitle
        childContentfulTeamMemberTeamMemberDescriptionTextNode {
          teamMemberDescription
        }
      }
      tao {
        type
        teamMemberImage {
          file {
            url
          }
        }
        teamMemberName
        teamMemberTitle
        childContentfulTeamMemberTeamMemberDescriptionTextNode {
          teamMemberDescription
        }
      }
      kathyIandoli {
        type
        teamMemberImage {
          file {
            url
          }
        }
        teamMemberName
        teamMemberTitle
        childContentfulTeamMemberTeamMemberDescriptionTextNode {
          teamMemberDescription
        }
      }
      marketingTeamSubsectionHeader
      wolfgangTsoutsouris {
        type
        teamMemberImage {
          file {
            url
          }
        }
        teamMemberName
        teamMemberTitle
        childContentfulTeamMemberTeamMemberDescriptionTextNode {
          teamMemberDescription
        }
      }
      sebastian {
        type
        teamMemberImage {
          file {
            url
          }
        }
        teamMemberName
        teamMemberTitle
        childContentfulTeamMemberTeamMemberDescriptionTextNode {
          teamMemberDescription
        }
      }
      katieDelAngel {
        type
        teamMemberImage {
          file {
            url
          }
        }
        teamMemberName
        teamMemberTitle
        childContentfulTeamMemberTeamMemberDescriptionTextNode {
          teamMemberDescription
        }
      }
      andresGarcia {
        type
        teamMemberImage {
          file {
            url
          }
        }
        teamMemberName
        teamMemberTitle
        childContentfulTeamMemberTeamMemberDescriptionTextNode {
          teamMemberDescription
        }
      }
      taylorCahill {
        type
        teamMemberImage {
          file {
            url
          }
        }
        teamMemberName
        teamMemberTitle
        childContentfulTeamMemberTeamMemberDescriptionTextNode {
          teamMemberDescription
        }
      }
      neilBanerjee {
        type
        teamMemberImage {
          file {
            url
          }
        }
        teamMemberName
        teamMemberTitle
        childContentfulTeamMemberTeamMemberDescriptionTextNode {
          teamMemberDescription
        }
      }
      advisorsSubsectionHeader
      marcAdesso {
        type
        teamMemberImage {
          file {
            url
          }
        }
        teamMemberName
        teamMemberTitle
        childContentfulTeamMemberTeamMemberDescriptionTextNode {
          teamMemberDescription
        }
      }
      shaneMorris {
        type
        teamMemberImage {
          file {
            url
          }
        }
        teamMemberName
        teamMemberTitle
        childContentfulTeamMemberTeamMemberDescriptionTextNode {
          teamMemberDescription
        }
      }
      kristenJohns {
        type
        teamMemberImage {
          file {
            url
          }
        }
        teamMemberName
        teamMemberTitle
        childContentfulTeamMemberTeamMemberDescriptionTextNode {
          teamMemberDescription
        }
      }
      brittanBright {
        type
        teamMemberImage {
          file {
            url
          }
        }
        teamMemberName
        teamMemberTitle
        childContentfulTeamMemberTeamMemberDescriptionTextNode {
          teamMemberDescription
        }
      }
      cBrandonOgbunu {
        type
        teamMemberImage {
          file {
            url
          }
        }
        teamMemberName
        teamMemberTitle
        childContentfulTeamMemberTeamMemberDescriptionTextNode {
          teamMemberDescription
        }
      }
    }
    contentfulSectionTokenAllocation {
      sectionHeader
      childContentfulSectionTokenAllocationSectionTextTextNode {
        sectionText
      }
      allocation1 {
        allocationHeader
        allocationSubheader
        allocationText
      }
      allocation2 {
        allocationHeader
        allocationSubheader
        allocationText
      }
      allocation3 {
        allocationHeader
        allocationSubheader
        allocationText
      }
    }
    contentfulSectionTechnicalDetails {
      sectionHeader
      sectionImage {
        file {
          url
        }
      }
      sectionImage2 {
        file {
          url
        }
      }
      childContentfulSectionTechnicalDetailsSectionTextTextNode {
        sectionText
      }
      icoVideo {
        file {
          url
        }
      }
    }
    contentfulSectionPress {
      sectionHeader
      sectionImage {
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
    contentfulSectionTimeline {
      sectionHeader
      downChevron {
        file {
          url
        }
      }
      date1 {
        year
        date
        dateText
        event
      }
      date2 {
        year
        date
        dateText
        event
      }
      date3 {
        year
        date
        dateText
        event
      }
      date4 {
        year
        date
        dateText
        event
      }
      date5 {
        year
        date
        dateText
        event
      }
      date6 {
        year
        date
        dateText
        event
      }
      date7 {
        year
        date
        dateText
        event
      }
      date8 {
        year
        date
        dateText
        event
      }
      date9 {
        year
        date
        dateText
        event
      }
      date10 {
        year
        date
        dateText
        event
      }
      date11 {
        year
        date
        dateText
        event
      }
      date12 {
        year
        date
        dateText
        event
      }
      date13 {
        year
        date
        dateText
        event
      }
      date14 {
        year
        date
        dateText
        event
      }
      date15 {
        year
        date
        dateText
        event
      }
      date16 {
        year
        date
        dateText
        event
      }
      date17 {
        year
        date
        dateText
        event
      }
    }
    allContentfulAsset {
      edges {
        node {
          file {
            url
          }
        }
      }
    }
    contentfulMarketingStrategy {
      tabHeader
      paragraph1 {
        paragraph1
      }
      paragraph2 {
        paragraph2
      }
      paragraph3 {
        paragraph3
      }
      paragraph4 {
        paragraph4
      }
      paragraph5 {
        paragraph5
      }
      paragraph6 {
        paragraph6
      }
      paragraph7 {
        paragraph7
      }
      paragraph8 {
        paragraph8
      }
      paragraph9 {
        paragraph9
      }
      paragraph10 {
        paragraph10
      }
      subheader1
      subheader2
      bullet1
      bullet2
      bullet3
      bullet4
      bullet5
      bullet6
      bullet7
    }
    contentfulWhitePaperHighlights {
      tabHeader
      paragraph1 {
        paragraph1
      }
      paragraph2 {
        paragraph2
      }
      paragraph3 {
        paragraph3
      }
      paragraph4 {
        paragraph4
      }
      paragraph5 {
        paragraph5
      }
      paragraph6 {
        paragraph6
      }
    }
    contentfulFinancialModel {
      tabHeader
      financialModelImage {
        file {
          url
        }
      }
    }
  }
`;

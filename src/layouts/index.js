import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import Typekit from "react-typekit";
import "../SASS/SCSS/normalize.scss";
import "../SASS/SCSS/base.scss";
import HeaderNav from "../components/HeaderNav";
import Footer from "../components/Footer";
import $ from "jquery";

export const pageTransition = "opacity 0.3s";

const TemplateWrapper = ({ children, data }) => {
  let gtmHeadScript = `<!-- Google Tag Manager -->
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-TG9SMNX');<!-- End Google Tag Manager -->`;

  return (
    <div>
      <Helmet
        script={[
          {
            type: "text/javascript",
            innerHTML: gtmHeadScript
          }
        ]}
      >
        <meta charSet="utf-8" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/*        <meta name="robots" content="noindex, nofollow" />*/}

        {/*        <meta name="description" content="Learn about the upcoming Skratch Initial Coin Offering and about the benefits of cryptocurrencies" />
        <title>The Skratch Initial Coin Offering | Welcome</title>*/}
        {/*social metadata*/}
        {/*        <meta property="og:title" content="Skratch ICO" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://skratch-ico.surge.sh/" />
        <meta property="og:image" content="" />
        <meta property="og:description" content="Learn about the Skratch Initial Coin Offering" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="Your @publisher_handle" />
        <meta name="twitter:title" content="Skratch ICO" />
        <meta name="twitter:description" content="Learn about the Skratch Initial Coin Offering" />
        <meta name="twitter:creator" content="Your @author_handle" />
        <meta name="twitter:image" content="" />*/}

        <meta name="google-site-verification" content="JjGuWlaDnXSFxyIrl5vX2BVtpd9J89xlCruvl8JqdKk" />

        <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" rel="stylesheet" />
        <link
          rel="icon"
          type="image/png"
          href="//images.contentful.com/j5zy0n17n2ql/OXwy6UmtSCYgiyuimAicW/92dae13c75e37476956b3f12c80386f7/skratch-favicon.png"
        />
      </Helmet>
      <Typekit kitId="vlo5ywu" />
      <HeaderNav data={data.allContentfulNavBar.edges[0].node} images={data.allContentfulAsset.edges} />
      <div>
        {children()}
      </div>
      <Footer data={data.allContentfulFooter.edges[0].node} images={data.allContentfulAsset.edges} />
    </div>
  );
};

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;

export const query = graphql`
  query NavFooterQuery {
    allContentfulNavBar {
      edges {
        node {
          id
          internal {
            type
          }
          logo
          presaleText
          navLinks
          navLinksAlt
          menuBars {
            file {
              url
            }
          }
          upArrow {
            file {
              url
            }
          }
          close {
            file {
              url
            }
          }
        }
      }
    }
    allContentfulFooter {
      edges {
        node {
          id
          internal {
            type
          }
          presaleText
          childContentfulFooterFooterTextTextNode {
            footerText
          }
          emailButton
        }
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
  }
`;

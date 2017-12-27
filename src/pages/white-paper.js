import React from 'react';
import EasyTransition from 'react-easy-transition';
import {Helmet} from "react-helmet";
import {pageTransition} from "../layouts/";
import "../SASS/SCSS/whitepaper-page.scss";
import spdf from "simple-react-pdf";
import ReactDOM from "react-dom";
import WhitepaperHTML from "../components/WhitepaperHTML";


const WhitePaper = props => {
    let location = props.location ? props.location : "";

    // let whitepaperURL = props.data.contentfulWhitepaperPage.whitepaperPdf.file.url;

    let metaSite = 'https://skratch-ico.surge.sh/white-paper';
    let metaTitle = "Cryptocurrency for Music and Media | Skratch Whitepaper";
    let metaImage = "http://images.contentful.com/j5zy0n17n2ql/4wJhG16RNe2a4GKSEeE0ik/4803525ff2aa57f3ab003c35565a842b/how-it-works.png";

    return (
        <EasyTransition
            path={location.pathname}
            initialStyle={{opacity: 0}}
            transition={pageTransition}
            finalStyle={{opacity: 1}}
        >
            <Helmet>
                <title>{metaTitle}</title>
                <link rel="canonical" href={metaSite} />
                <meta name="description" content="The Skratch marketplace, run on the Ethereum blockchain, allows anyone to buy, sell, and trade music products securely. Learn how the protocol works." />
                <meta name="robots" content="noindex, nofollow" />

                {/*facebook data*/}
                <meta property="og:title" content={metaTitle} />
                <meta property="og:type" content="article" />
                <meta property="og:url" content={metaSite} />
                <meta property="og:image" content={metaImage} />
                <meta property="og:description" content="Skratch is a decentralized marketplace protocol that will change the way the music community buys, sells, and trades. Download the whitepaper to learn how it works." />

                {/*twitter data*/}
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:site" content={metaSite} />
                <meta name="twitter:title" content={metaTitle} />
                <meta name="twitter:description" content="Skratch is changing how people buy, sell, and trade music. Learn how to participate in the Skratch marketplace:" />
                <meta name="twitter:creator" content="@skratchcoin" />
                <meta name="twitter:image" content={metaImage} />
            </Helmet>

            <div className="main-content whitepaper">
                <WhitepaperHTML />
{/*                <WhitepaperForm />*/}
            </div>
        </EasyTransition>
    );
};

export default WhitePaper


//query

// export const query = graphql`
//   query whitepaperContentfulQuery {
//     contentfulWhitepaperPage {
//         whitepaperPdf {
//           file {
//             url
//           }
//       }
//     }
//   }
// `

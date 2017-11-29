import React from "react";
import { createClient } from "contentful-management";
import _ from "lodash";
import EasyTransition from "react-easy-transition";
import { Helmet } from "react-helmet";
import Axios from "axios";
import { pageTransition } from "../layouts/index";
import "../SASS/SCSS/price.scss";

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

const CustomTooltip = React.createClass({
  render() {
    const { active } = this.props;

    if (active) {
      const { payload, label } = this.props;
      let minutes = new Date(label).getMinutes();
      let hours = new Date(label).getHours();
      let date = new Date(label).getDate();
      let month = new Date(label).getMonth() + 1;
      let year = new Date(label).getFullYear();
      return (
        <div className="custom-tooltip">
          <p className="payload">{`  $${payload[0].value}`}</p>
          <p className="label">{`  ${month}/${date}/${year}, ${hours}:${minutes}`}</p>
        </div>
      );
    }

    return null;
  }
});

//set up contentful client
let client = createClient({
  // This is the access token for this space. Normally you get the token in the Contentful web app
  accessToken: "CFPAT-e06916206ce632b7af9d0588a41a8257606d43ef680d67e0420b3cc721f7fec2"
});

export default class Price extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      price: "",
      historicalData: [],
      volume24h: "",
      priceChange1h: "",
      priceChange24h: "",
      priceChange7d: "",
      loadingDone: false
    };
  }

  componentDidMount() {
    const priceEndpoint = "https://api.coinmarketcap.com/v1/ticker/ethereum/";
    let date = new Date();
    Axios.get(priceEndpoint).then(response => {
      this.setState({
        price: parseFloat(response.data[0].price_usd / 30),
        priceChange1h: response.data[0].percent_change_1h,
        priceChange24h: response.data[0].percent_change_24h,
        priceChange7d: response.data[0].percent_change_7d
      });

      client
        .getSpace("j5zy0n17n2ql")
        .then(space =>
          space.createEntry("skratchPrice", {
            fields: {
              price: {
                "en-US": this.state.price
              },
              date: {
                "en-US": date.toUTCString()
              }
            }
          })
        )
        .then(entry => {
          //get all entries and filter
          let results = [];
          client
            .getSpace("j5zy0n17n2ql")
            .then(space => space.getEntries())
            .then(response => {
              response.items.map(entry => {
                if (entry.sys.contentType.sys.id === "skratchPrice") {
                  // let date = new Date(entry.fields.date["en-US"]);
                  results.push({
                    price: parseFloat(entry.fields.price["en-US"]).toFixed(2),
                    date: entry.fields.date["en-US"]
                  });
                }
              });
              results.sort(function(a, b) {
                // Turn your strings into dates, and then subtract them
                // to get a value that is either negative, positive, or zero.
                return new Date(b.date) - new Date(a.date);
              });
              console.log("Historical Prices: ", results.reverse());
              this.setState({
                historicalData: results
              });
              setTimeout(() => {
                this.setState({
                  loadingDone: true
                });
              }, 1500);
            })
            .catch(console.error);
        })
        .catch(console.error);
    });
  }

  formatTicker(input) {
    let minutes = new Date(input).getMinutes();
    let hours = new Date(input).getHours();
    let date = new Date(input).getDate();
    let month = new Date(input).getMonth() + 1;
    let year = new Date(input).getFullYear();
    return `${month}/${date}/${year}, ${hours}:${minutes}`;
  }

  render() {
    let location = this.props.location ? this.props.location : "";

    let metaSite = "https://www.undergroundhiphop.com/skratch/price/";
    let metaTitle = "Skratch Prices";
    let metaImage =
      "http://images.contentful.com/j5zy0n17n2ql/4wJhG16RNe2a4GKSEeE0ik/4803525ff2aa57f3ab003c35565a842b/how-it-works.png";

    //graph stuff
    let data = [];
    this.state.historicalData.map(dataPoint => {
      let dateNumber = new Date(dataPoint.date).getTime();
      data.push({
        date: dateNumber,
        price: parseFloat(dataPoint.price)
      });
    });

    console.log(data);

    //generate arrow image
    let arrowTicker1h;
    let arrowTicker24h;
    let arrowTicker7d;

    if (parseFloat(this.state.priceChange1h) > 0) {
      arrowTicker1h =
        "//images.contentful.com/j5zy0n17n2ql/3mbVwjYY2Qq0mG0u6WqU08/f5b377739634b96f774ea62a1e1a862b/up-ticker.svg";
    } else if (parseFloat(this.state.priceChange1h) < 0) {
      arrowTicker1h =
        "//images.contentful.com/j5zy0n17n2ql/4sLI9YJVa0giGuYGYIIua4/e658f048148f388bde37b4f4f1eb1fa6/down-ticker.svg";
    } else {
      arrowTicker1h =
        "//images.contentful.com/j5zy0n17n2ql/2dNFGl92FmEoMCqGSWWIyO/0fb884a57facc873145aa404ba371f5b/side-ticker.svg";
    }

    if (parseFloat(this.state.priceChange24h) > 0) {
      arrowTicker24h =
        "//images.contentful.com/j5zy0n17n2ql/3mbVwjYY2Qq0mG0u6WqU08/f5b377739634b96f774ea62a1e1a862b/up-ticker.svg";
    } else if (parseFloat(this.state.priceChange24h) < 0) {
      arrowTicker24h =
        "//images.contentful.com/j5zy0n17n2ql/4sLI9YJVa0giGuYGYIIua4/e658f048148f388bde37b4f4f1eb1fa6/down-ticker.svg";
    } else {
      arrowTicker24h =
        "//images.contentful.com/j5zy0n17n2ql/2dNFGl92FmEoMCqGSWWIyO/0fb884a57facc873145aa404ba371f5b/side-ticker.svg";
    }

    if (parseFloat(this.state.priceChange7d) > 0) {
      arrowTicker7d =
        "//images.contentful.com/j5zy0n17n2ql/3mbVwjYY2Qq0mG0u6WqU08/f5b377739634b96f774ea62a1e1a862b/up-ticker.svg";
    } else if (parseFloat(this.state.priceChange7d) < 0) {
      arrowTicker7d =
        "//images.contentful.com/j5zy0n17n2ql/4sLI9YJVa0giGuYGYIIua4/e658f048148f388bde37b4f4f1eb1fa6/down-ticker.svg";
    } else {
      arrowTicker7d =
        "//images.contentful.com/j5zy0n17n2ql/2dNFGl92FmEoMCqGSWWIyO/0fb884a57facc873145aa404ba371f5b/side-ticker.svg";
    }

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
            content="The cryptocurrency and blockchain world is complex. Learn where Skratch fits in, and how it ensures truly secure, trustless transactions."
          />

          {/*facebook data*/}
          <meta property="og:title" content={metaTitle} />
          <meta property="og:type" content="article" />
          <meta property="og:url" content={metaSite} />
          <meta property="og:image" content={metaImage} />
          <meta
            property="og:description"
            content="Skratch is changing how the music community buys, sells, and trades music products and services. Learn about Skratch smart contracts, trustless transactions, and more."
          />

          {/*twitter data*/}
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content={metaSite} />
          <meta name="twitter:title" content={metaTitle} />
          <meta
            name="twitter:description"
            content="Learn how the Skratch marketplace is going to reshape the music community—Check out the FAQs:"
          />
          <meta name="twitter:creator" content="@skratchcoin" />
          <meta name="twitter:image" content={metaImage} />
        </Helmet>

        <div className="main-content faq-page">
          <div className="faq__banner section">
            <h2 className="section__header">Skratch Pricing</h2>
          </div>
          <section className="section section--price-page">
            <div className={`section--price-page__loader ${!this.state.loadingDone ? "" : "loader-hidden"}`}>
              <h3 className="section--price-page__loader-header">Loading Price Data</h3>
              <img
                src="//images.contentful.com/j5zy0n17n2ql/4Pik0nZ4Vy8w6mcoaag82E/34de38e122e366bdd1f0d06d6aa9082e/Rolling.svg"
                alt="Processing"
              />
            </div>
            <div className={`section--price-page__prices ${this.state.loadingDone ? "prices-shown" : ""}`}>
              <ul className={`section--price-page__prices-items`}>
                <li className="section--price-page__prices-item">
                  <h3>Current Skratch price:</h3>
                  <p>
                    ${parseFloat(this.state.price).toFixed(2)}
                  </p>
                </li>
                <li className="section--price-page__prices-item">
                  <h3>One-hour change:</h3>
                  <p>
                    {this.state.priceChange1h}%
                  </p>
                  <div className="section--price-page__prices-arrow">
                    <img src={arrowTicker1h} alt="arrow" />
                  </div>
                </li>
                <li className="section--price-page__prices-item">
                  <h3>24-hour change:</h3>
                  <p>
                    {this.state.priceChange24h}%
                  </p>
                  <div className="section--price-page__prices-arrow">
                    <img src={arrowTicker24h} alt="arrow" />
                  </div>
                </li>
                <li className="section--price-page__prices-item">
                  <h3>Seven-day change:</h3>
                  <p>
                    {this.state.priceChange7d}%
                  </p>
                  <div className="section--price-page__prices-arrow">
                    <img src={arrowTicker7d} alt="arrow" />
                  </div>
                </li>
              </ul>

              {/*chart goes here*/}
              <div className="section--price-page__graph">
                <h3 className="section--price-page__graph-header">Skratch Price Trend</h3>
                <LineChart width={700} height={400} data={data}>
                  <XAxis dataKey="date" tickFormatter={this.formatTicker} />
                  <YAxis type="number" domain={["auto", "auto"]} />
                  <CartesianGrid strokeDasharray="3 3" />
                  <Tooltip content={<CustomTooltip />} />
                  <Legend />
                  <Line type="monotone" dataKey="price" stroke="#8884d8" activeDot={{ r: 8 }} />
                </LineChart>
              </div>
            </div>
          </section>
        </div>
      </EasyTransition>
    );
  }
}

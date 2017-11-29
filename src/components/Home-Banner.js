import React from "react";
import $ from 'jquery';
import Link from "gatsby-link";
import StartTimer from "../utils/countdown";
import Form from "./EmailForm";

class HomeBanner extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);

    this.state = {
      timerExpired: false
    };
  }


  componentDidMount() {
    // console.log("Header Images:", this.props.images);
    // StartTimer("section--home-banner");
    this.setState({
      intervalID: window.setInterval(StartTimer.bind(null, "section--home-banner"), 1000)
    });
  }

  componentWillUnmount() {
    // clearInterval(5);
    clearInterval(this.state.intervalID);
  }


  render() {

    //logic

    let data = this.props.data;
    let images = this.props.images;

    let rollerImage = _.find(images, function(object) {
      return object.node.file.url.includes("Rolling.svg");
    });

    return(
        <section className="section section--home-banner">
            <div className="section--home-banner__left-content">
                <h2 className="section--home-banner__left-content-text">{data.bannerHeader}</h2>
                <div className="section--home-banner__left-content-buttons">
                  <button className="section--home-banner__left-content-wp-button button--wp">  <a target="_blank" className="section--home-banner__left-content-wp-button-link button--wp" href="/white-paper">{data.bannerButtonText}</a></button>
                  <button className="section--home-banner__left-content-wp-button button--lp">  <a target="_blank" className="section--home-banner__left-content-wp-button-link button--lp" href="//assets.contentful.com/j5zy0n17n2ql/2uTFa3os5WsAwGsy4WaYc2/4b452b1a9e1679d7d8c8c5f52659e09f/litepaper.pdf">Check out the Light Paper</a></button>
                    <div className="section--home-banner__left-content-icons">
                        <p className="section--home-banner__left-content-icon" data-tag="Slack Channel"><a href="https://skratch.slack.com/" target="_blank"><img src={data.slackImage.file.url} alt="Slack"/></a><span className="home-banner-social-popup">Slack Channel</span></p>
                        <p className="section--home-banner__left-content-icon" data-tag="Twitter"><a href="https://twitter.com/skratchcoin" target="_blank"><img src={data.twitterImage.file.url} alt="Twitter"/></a><span className="home-banner-social-popup">Twitter</span></p>
                        <p className="section--home-banner__left-content-icon" data-tag="Email Us"><a href="mailto:skratch@ughh.com?Subject=Skratch ICO"><img src={data.emailImage.file.url} alt="Email"/></a><span className="home-banner-social-popup">Email Us</span></p>
                    </div>
                </div>
            </div>
            <div className="section--home-banner__right-content">
                <div className="banner__countdown-container">
                  <span className="banner__presale-text">{`${data.presaleText}`}</span><p className="countdown"><img src={rollerImage.node.file.url} alt="Spinner" className="loading-spinner" /></p>
                </div>
                <p className="banner__countdown-email-text">{data.getEmailText}</p>
                <Form data={data} images={images} />
            </div>
            <p className="section--home-banner__arrow">
              <img src={data.downArrow.file.url} alt="Down arrow"/>
            </p>
        </section>
    );
  }
}





export default HomeBanner;

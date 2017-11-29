import React from "react";
import _ from "lodash";
import StartTimer from "../utils/countdown";
import "../SASS/SCSS/footer.scss";
import Form from "./EmailForm";
import LoadingPanel from "../components/LoadingPanel";

export default class Footer extends React.Component {

  constructor(props) {
    super(props);

    this.state={
      timerExpired: false,
      intervalID: "",
      loadingDone: false
    };
  }

  componentDidMount() {
    this.setState({
      intervalID: window.setInterval(StartTimer.bind(null, "footer"), 1000)
    });

    setTimeout(() => {
      this.setState({
        loadingDone: true
      });
    }, 100);


  }

  componentWillUnmount() {
    // clearInterval(5);
    clearInterval(this.state.intervalID);
  }

  render() {

    let data = this.props.data;
    let images = this.props.images;

    let rollerImage = _.find(images, function(object) {
      return object.node.file.url.includes("Rolling.svg");
    });

    return (
      <footer className="footer">
          <LoadingPanel loaded={this.state.loadingDone} />
          <div className="footer__countdown-container">
            <span className="footer__presale-text">{`${data.presaleText}`}</span><p className="countdown"><img src={rollerImage.node.file.url} alt="Spinner" className="loading-spinner" /></p>
          </div>
          <p className="footer__text">{data.childContentfulFooterFooterTextTextNode.footerText}</p>
          <Form data={data} images={images} />
      </footer>
    );
  }
}

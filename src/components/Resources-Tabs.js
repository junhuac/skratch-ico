import React from 'react';
import Link from "gatsby-link";

export default class ResourcesTabs extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);

    this.state = {
        selectedTab: "",
        showSpinner: false
    };
  }

  componentDidMount() {
      this.setState({
        selectedTab: window.location.pathname.split("/")[1],
        showSpinner: true
      });

      setTimeout(() => {
        this.setState({
          showSpinner: false
        })
      }, 500);
  }

  showSpinner() {
    this.setState({
      showSpinner: true
    });

    setTimeout(() => {
      this.setState({
        showSpinner: false
      });
    }, 800);
  }

  render() {

    return (
      <ul className="resources__tabs">
        <li className={`resources__tab ${(this.state.selectedTab === "resources" ? "tab-selected" : "")}`}>
          <Link
            key="1"
            to="/resources/"
          >
            How to Participate
          </Link>
        </li>
        <li className={`resources__tab ${(this.state.selectedTab === "cryptocurrency" ? "tab-selected" : "")}`}>
          <Link
            key="2"
            to="/cryptocurrency"
          >
            Cryptocurrency
          </Link>
        </li>
        <li className={`resources__tab ${(this.state.selectedTab === "blockchain" ? "tab-selected" : "")}`}>
          <Link
            key="3"
            to="/blockchain"
          >
            Blockchain
          </Link>
        </li>
        <li className={`resources__tab ${(this.state.selectedTab === "wallet" ? "tab-selected" : "")}`}>
          <Link
            key="4"
            to="/wallet"
          >
            Ethereum Wallet
          </Link>
        </li>
        <div className={`resources__tab-spinner ${(this.state.showSpinner ? "spinner-shown" : "" )}`}>
          <img src={this.props.spinner} alt="Spinner"/>
        </div>
      </ul>
    );
  }
}



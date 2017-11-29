import React from "react";
import StartTimer from "../utils/countdown";
import Link from "gatsby-link";
import _ from "lodash";
import $ from "jquery";
import "../SASS/SCSS/header.scss";

export default class HeaderNav extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedSection: "",
      collapsed: false,
      showTopButton: false,
      timerExpired: false,
      intervalID: "",
      sideMenuShown: "",
      sideMenuButtonShown: ""
    };

    this.slugify = this.slugify.bind(this);
    this.onNavItemClick = this.onNavItemClick.bind(this);
    this.onScroll = this.onScroll.bind(this);
    this.onScrollUp = this.onScrollUp.bind(this);
    this.scrollToTeam = this.scrollToTeam.bind(this);
  }

  componentDidMount() {
    //insert GTM tag into body
    let gtmBodyScript = `<!-- Google Tag Manager (noscript) --><noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TG9SMNX"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript><!-- End Google Tag Manager (noscript) -->`;

    $("body").prepend($.parseHTML(gtmBodyScript));

    window.addEventListener("scroll", throttle(this.onScroll, 10));
    this.setState({
      intervalID: window.setInterval(StartTimer.bind(null, "header"), 1000)
    });

    this.setState({
      selectedSection:
        window.location.pathname === "/"
          ? "how-skratch-works"
          : window.location.pathname.includes("/cryptocurrency") ||
            window.location.pathname.includes("/blockchain") ||
            window.location.pathname.includes("/wallet")
            ? "resources"
            : window.location.pathname.split("/")[1]
    });
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", throttle);
    clearInterval(this.state.intervalID);
  }

  //methods
  onNavItemClick(section) {
    this.setState({
      selectedSection: this.slugify(section)
    });
  }

  onScroll() {
    let scrollTop = document.body.scrollTop || window.pageYOffset || document.documentElement.scrollTop;
    let stickyThreshold = 100;

    if (this.refs.headerRef) {
      if (scrollTop > stickyThreshold && window.innerWidth > 1200) {
        this.setState({
          collapsed: true
        });
      } else {
        this.setState({
          collapsed: false
        });
      }

      if (scrollTop > stickyThreshold) {
        this.setState({
          showTopButton: true
        });
      } else {
        this.setState({
          showTopButton: false
        });
      }

      if (scrollTop > stickyThreshold && window.innerWidth < 901) {
        this.setState({
          sideMenuButtonShown: true
        });
      } else {
        this.setState({
          sideMenuButtonShown: false
        });
      }
    }
  }

  onScrollUp() {
    $("body, html").animate(
      {
        scrollTop: 0
      },
      1000
    );
  }

  slugify(text) {
    return text
      .toString()
      .toLowerCase()
      .replace(/\s+/g, "-") // Replace spaces with -
      .replace(/[^\w\-]+/g, "") // Remove all non-word chars
      .replace(/\-\-+/g, "-") // Replace multiple - with single -
      .replace(/^-+/, "") // Trim - from start of text
      .replace(/-+$/, ""); // Trim - from end of text
  }

  scrollToTeam() {
    setTimeout(() => {
      let teamOffset = $(".section--home-team").offset().top;
      $("body, html").animate(
        {
          scrollTop: teamOffset
        },
        1000
      );
    }, 300);

    this.setState({
      selectedSection: "how-skratch-works"
    });
  }

  render() {
    let data = this.props.data;
    let images = this.props.images;

    let rollerImage = _.find(images, function(object) {
      return object.node.file.url.includes("Rolling.svg");
    });

    let navList = data.navLinksAlt.map((linkText, index) => {
      //format linktext as a slug

      let toText;

      if (index === 0) {
        toText = "/";
      } else {
        toText = `${this.slugify(linkText)}`;
      }

      if (toText === "team") {
        return (
          <li className="header__nav-list-item" key={this.slugify(linkText)}>
            <Link
              className={`header__nav-list-item-link ${toText}-link ${this.state.selectedSection ===
              this.slugify(linkText)
                ? " selected"
                : ""}`}
              to="/"
              onClick={this.scrollToTeam}
            >
              {linkText}
            </Link>
          </li>
        );
      } else {
        return (
          <li className="header__nav-list-item" key={this.slugify(linkText)}>
            <Link
              className={`header__nav-list-item-link ${toText}-link ${this.state.selectedSection ===
              this.slugify(linkText)
                ? " selected"
                : ""}`}
              to={toText}
              onClick={this.onNavItemClick.bind(null, linkText)}
            >
              {linkText}
            </Link>
          </li>
        );
      }
    });

    return (
      <header className={`header ${this.state.collapsed ? "collapsed" : ""}`} ref={`headerRef`}>
        <div
          className={`header__mobile-menu-button`}
          onClick={() => {
            this.setState({ sideMenuShown: !this.state.sideMenuShown });
          }}
        >
          <img src={data.menuBars.file.url} alt="Menu bars" />
        </div>
        <Link onClick={this.onNavItemClick.bind(null, "how-skratch-works")} to="/">
          <h1 className="header__logo">
            s<span>k</span>ratch
          </h1>
        </Link>
        <div className="header__countdown-container">
          <span className="header__presale-text">{`${data.presaleText}`}</span>
          <p className="countdown">
            <img src={rollerImage.node.file.url} alt="Spinner" className="loading-spinner" />
          </p>
        </div>
        <nav className={`header__nav ${this.state.sideMenuShown ? "side-menu-shown" : ""}`}>
          <ul className="header__nav-list">
            {navList}
          </ul>
          <div
            className="header__side-menu-close"
            onClick={() => {
              this.setState({ sideMenuShown: false });
            }}
          >
            <img src={data.close.file.url} alt="Close" />
          </div>
        </nav>
        <div className={`top-arrow ${this.state.showTopButton ? "shown" : ""}`} onClick={this.onScrollUp}>
          <img src={data.upArrow.file.url} alt="Up arrow" />
        </div>
        <div
          className={`header__mobile-menu-button--secondary ${this.state.sideMenuButtonShown ? "button-shown" : ""}`}
          onClick={() => {
            this.setState({ sideMenuShown: !this.state.sideMenuShown });
          }}
        >
          <img src={data.menuBars.file.url} alt="Menu bars" />
        </div>
      </header>
    );
  }
}

//throttling function
function throttle(fn, wait) {
  "use strict";
  var time = Date.now();
  return function() {
    if (time + wait - Date.now() < 0) {
      fn();
      time = Date.now();
    }
  };
}

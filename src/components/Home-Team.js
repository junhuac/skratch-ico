import React from "react";
import $ from "jquery";
import _ from "lodash";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import TeamPanel from "./tab-panels/Home-Team-Panel";
import ProjectPanel from "./tab-panels/Home-Project-Panel";
import StrategyPanel from "./tab-panels/Home-Strategy-Panel";
import PaperPanel from "./tab-panels/Home-Paper-Panel";
import FinancialPanel from "./tab-panels/Home-Financial-Panel";

export default class HomeTeam extends React.Component {
  static propTypes = {
    name: React.PropTypes.string
  };

  constructor(props) {
    super(props);

    this.state = {
      selectedSectionID: 1,
      carouselPanels: [],
      mobileMenuShown: false
    };

    this.onScroll = this.onScroll.bind(this);
    this.scrollUp = this.scrollUp.bind(this);
  }

  componentDidMount() {
    this.setState({
      sectionShown: true
    });
    window.addEventListener('scroll', throttle(this.onScroll, 10));

    // if(window.innerWidth < 901) {
    //   this.setState({
    //     mobileMenuShown: true
    //   });
    // }
  }

  componentWillUnmount() {
    this.setState({
      sectionShown: false
    });
    window.removeEventListener('scroll', throttle);
  }

  onTabClick(id) {
    let selectedPanel = this.state.carouselPanels[id - 1];
    // console.log(selectedPanel);

    this.setState({
      selectedSectionID: id
    });
  }

  onScroll() {
    if(window.location.pathname === "/") {
      let scrollTop = document.body.scrollTop || window.pageYOffset || document.documentElement.scrollTop;
      let teamSection = $(".section--home-team");
      let teamSectionTop = teamSection.offset().top;
      let teamSectionBottom = teamSection.offset().top + teamSection.height();

      if(this.refs.teamSectionRef) {
        if(window.innerWidth < 901) {
          if(scrollTop > teamSectionTop && scrollTop < teamSectionBottom) {
            this.setState({
              mobileMenuShown: true
            });
          } else {
            this.setState({
              mobileMenuShown: false
            });
          }
        } else {
           this.setState({
              mobileMenuShown: false
            });
        }
      }
    }
  }

  scrollUp() {
    this.setState({
      mobileMenuShown: false
    });

    let teamSection = $(".section--home-team");
    let teamSectionTop = teamSection.offset().top;
    $('body, html').animate({
        scrollTop: teamSectionTop
    }, 0);

  }

  render() {
    //logic
    //group the related member objects into arrays
    let coreArray = [];
    let marketingArray = [];
    let advisorsArray = [];

    for (var item in this.props.data) {
      let object = this.props.data[item];
      if(object.hasOwnProperty("type")) {
        if (object.type === "Core") {
          coreArray.push(object);
        } else if (object.type === "Marketing") {
          marketingArray.push(object);
        } else if (object.type === "Advisors") {
          advisorsArray.push(object);
        }
      }
    }

    let coreList = coreArray.map(member => {
      return (
        <li className="section__member" key={member.teamMemberTitle}>
          <div className="section__member-image-container">
            <img src={member.teamMemberImage.file.url} alt="Team member" className="section__member-image" />
          </div>
          <p className="section__member-name">
            {member.teamMemberName}
          </p>
          <p className="section__member-title">
            {member.teamMemberTitle}
          </p>
          <p className="section__member-description">
            {member.childContentfulTeamMemberTeamMemberDescriptionTextNode.teamMemberDescription}
          </p>
        </li>
      );
    });

    let marketingList = marketingArray.map(member => {
      return (
        <li className="section__member" key={member.teamMemberTitle}>
          <div className="section__member-image-container">
            <img src={member.teamMemberImage.file.url} alt="Team member" className="section__member-image" />
          </div>
          <p className="section__member-name">
            {member.teamMemberName}
          </p>
          <p className="section__member-title">
            {member.teamMemberTitle}
          </p>
          <p className="section__member-description">
            {member.childContentfulTeamMemberTeamMemberDescriptionTextNode.teamMemberDescription}
          </p>
        </li>
      );
    });

    let advisorsList = advisorsArray.map(member => {
      return (
        <li className="section__member" key={member.teamMemberTitle}>
          <div className="section__member-image-container">
            <img src={member.teamMemberImage.file.url} alt="Team member" className="section__member-image" />
          </div>
          <p className="section__member-name">
            {member.teamMemberName}
          </p>
          <p className="section__member-title">
            {member.teamMemberTitle}
          </p>
          <p className="section__member-description">
            {member.childContentfulTeamMemberTeamMemberDescriptionTextNode.teamMemberDescription}
          </p>
        </li>
      );
    });

    let tabID = 0;
    let tabsList = this.props.data.teamTabs.map(tab => {
      tabID++;
      return (
        <li
          className={`section--home-team-tab ${tabID === this.state.selectedSectionID ? "tab-selected" : ""}`}
          key={tab}
          ref={tabID}
          onClick={this.onTabClick.bind(this, tabID)}
        >
          {tab}
        </li>
      );
    });

    return (
      <section className="section section--home-team" ref={`teamSectionRef`}>
        <ul className="section--home-team-tabs">
          {tabsList}
        </ul>
        <div className={`section--home-team__mobile-menu ${(this.state.mobileMenuShown ? "shown" : "")}`}>
            <ul className="section--home-team__mobile-menu-list" onClick={this.scrollUp}>
                {tabsList}
            </ul>
        </div>
        <div className="section--home-team__carousel-panels">
          <ReactCSSTransitionGroup transitionName="fade" transitionLeave={false} transitionEnterTimeout={300}>
            {this.state.selectedSectionID === 1
              ? <TeamPanel
                  key="1"
                  data={this.props.data}
                  coreList={coreList}
                  marketingList={marketingList}
                  advisorsList={advisorsList}
                />
              : null}
            {this.state.selectedSectionID === 2 ? <StrategyPanel key="2" data={this.props.marketingTab} /> : null}
            {this.state.selectedSectionID === 3 ? <PaperPanel key="3" data={this.props.whitePaperTab} /> : null}
            {this.state.selectedSectionID === 4 ? <FinancialPanel key="4" data={this.props.financialTab} /> : null}
          </ReactCSSTransitionGroup>
        </div>
      </section>
    );
  }
}

//throttling function
function throttle(fn, wait) {
  "use strict";
  var time = Date.now();
  return function() {
    if ((time + wait - Date.now()) < 0) {
      fn();
      time = Date.now();
    }
  };
}

function getYPosition(element) {
    var xPosition = 0;
    var yPosition = 0;

    while(element) {
        xPosition += (element.offsetLeft - element.scrollLeft + element.clientLeft);
        yPosition += (element.offsetTop - element.scrollTop + element.clientTop);
        element = element.offsetParent;
    }

    return { yPosition };
}

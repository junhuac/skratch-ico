import React from "react";

const HomeTeamPanel = props => {
    //logic

    //return
    return (
        <div className={`section--home-team__carousel-panel`}>
            <div className="section--home-team__subsection subsection--core">
                <h3 className="section__subheader core-team">
                    {props.data.coreTeamSubsectionHeader}
                </h3>
                <ul className="section__member-list">
                    {props.coreList}
                </ul>
            </div>
            <div className="section--home-team__subsection subsection--core">
                <h3 className="section__subheader marketing-team">
                    {props.data.marketingTeamSubsectionHeader}
                </h3>
                <ul className="section__member-list marketing-list">
                    {props.marketingList}
                </ul>
            </div>
            <div className="section--home-team__subsection subsection--core">
                <h3 className="section__subheader advisors-team">
                    {props.data.advisorsSubsectionHeader}
                </h3>
                <ul className="section__member-list">
                    {props.advisorsList}
                </ul>
            </div>
        </div>
    );
};

export default HomeTeamPanel;

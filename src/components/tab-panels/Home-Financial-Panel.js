import React from "react";

const HomeFinancialPanel = props => {
    //logic

    //return
    return (
    	<div className={`section--home-paper__carousel-panel`}>
		<div className="section--home-strategy__subsection financial-section">
		    <h3 className="section__subheader strategy-subheader big-subheader">
		    	{props.data.tabHeader}
		    </h3>
		    <p className="section__text">Funds raised will go towards building a world class development team, infrastructure and executing a marketing strategy focused primarily on brand awareness. In an effort toward transparency, we will identify an independent auditor that will prepare an annual report so that verified token purchasers can have visibility into how these funds have been spent year over year.</p>
		    <div className="section--home-strategy__subsection-image">
			<img src={props.data.financialModelImage.file.url} alt="Financial model"/>
		    </div>
		</div>
    	</div>
    );
};

export default HomeFinancialPanel;

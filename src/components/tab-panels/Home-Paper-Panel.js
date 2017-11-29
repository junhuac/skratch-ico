import React from "react";

const HomePaperPanel = props => {
    //logic

    //return
    return (
    	<div className={`section--home-paper__carousel-panel`}>
		<div className="section--home-strategy__subsection">
		    <h3 className="section__subheader strategy-subheader big-subheader">
		    	{props.data.tabHeader}
		    </h3>
		    <p className="section__text">{props.data.paragraph1.paragraph1}</p>
		    <p className="section__text">{props.data.paragraph2.paragraph2}</p>

		    <p className="section__text">{props.data.paragraph3.paragraph3}</p>
		    <p className="section__text">{props.data.paragraph4.paragraph4}</p>
		    <p className="section__text">{props.data.paragraph5.paragraph5}</p>
		    <p className="section__text">{props.data.paragraph6.paragraph6}</p>
		</div>
    	</div>
    );
};

export default HomePaperPanel;

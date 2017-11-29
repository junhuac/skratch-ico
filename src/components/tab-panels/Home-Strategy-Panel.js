import React from "react";

const HomeStrategyPanel = props => {
    //logic

    //return
    return (
    	<div className={`section--home-strategy__carousel-panel`}>
		<div className="section--home-strategy__subsection">
		    <h3 className="section__subheader strategy-subheader big-subheader">
		    	{props.data.tabHeader}
		    </h3>
		    <p className="section__text">{props.data.paragraph1.paragraph1}</p>
	{/*	    <p className="section__text">{props.data.paragraph2.paragraph2}</p>*/}
		    <h3 className="section__subheader strategy-subheader">
			{props.data.subheader1}
		    </h3>
		    <p className="section__text">{props.data.paragraph3.paragraph3}</p>
		    <p className="section__text">{props.data.paragraph4.paragraph4}</p>
		    <ul className="section--home-strategy__subsection-list section__text">
			<li className="section--home-strategy__subsection-list-item">{props.data.bullet1}</li>
			<li className="section--home-strategy__subsection-list-item">{props.data.bullet2}</li>
			<li className="section--home-strategy__subsection-list-item">{props.data.bullet3}</li>
			<li className="section--home-strategy__subsection-list-item">{props.data.bullet4}</li>
			<li className="section--home-strategy__subsection-list-item">{props.data.bullet5}</li>
			<li className="section--home-strategy__subsection-list-item">{props.data.bullet6}</li>
			<li className="section--home-strategy__subsection-list-item">{props.data.bullet7}</li>
		    </ul>
		    <p className="section__text">{props.data.paragraph5.paragraph5}</p>
		    <h3 className="section__subheader strategy-subheader">
		    	    {props.data.subheader2}
		    </h3>
		    <p className="section__text">{props.data.paragraph6.paragraph6}</p>
		    <p className="section__text">{props.data.paragraph7.paragraph7}</p>
		    <p className="section__text">{props.data.paragraph8.paragraph8}</p>
		    <p className="section__text">{props.data.paragraph9.paragraph9}</p>
		    <p className="section__text">{props.data.paragraph10.paragraph10}</p>
		</div>
    	</div>
    );
};

export default HomeStrategyPanel;

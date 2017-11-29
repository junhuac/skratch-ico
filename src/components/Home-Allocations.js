import React from "react";
import renderHTML from "react-render-html";

const HomeAllocations = props => {
    //logic

    return(
        <section className="section section--allocations">
            <h2 className="section__header">{props.data.sectionHeader}</h2>
            <p className="section__text">{renderHTML(props.data.childContentfulSectionTokenAllocationSectionTextTextNode.sectionText)}</p>
            <ul className="section--allocations__list">
                <li className="section--allocations__list-item">
                    <h3 className="section--allocations__list-header">{props.data.allocation1.allocationHeader}</h3>
                    <h4 className="section--allocations__list-subheader">{props.data.allocation1.allocationSubheader}</h4>
                    <p className="section--allocations__list-text">{props.data.allocation1.allocationText}</p>
                </li>
                <li className="section--allocations__list-item">
                    <h3 className="section--allocations__list-header">{props.data.allocation2.allocationHeader}</h3>
                    <h4 className="section--allocations__list-subheader">{props.data.allocation2.allocationSubheader}</h4>
                    <p className="section--allocations__list-text">{props.data.allocation2.allocationText}</p>
                </li>
                <li className="section--allocations__list-item">
                    <h3 className="section--allocations__list-header">{props.data.allocation3.allocationHeader}</h3>
                    <h4 className="section--allocations__list-subheader">{props.data.allocation3.allocationSubheader}</h4>
                    <p className="section--allocations__list-text">{props.data.allocation3.allocationText}</p>
                </li>
            </ul>
        </section>
    );
}

export default HomeAllocations;

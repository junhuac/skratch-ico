import React from "react";
import EasyTransition from "react-easy-transition";
import { pageTransition } from "../layouts/";

const Team = props => {
    let location = props.location ? props.location : "";

    return (
        <EasyTransition
            path={location.pathname}
            initialStyle={{opacity: .4}}
            transition={pageTransition}
            finalStyle={{opacity: 1}}
        >
            <div className="main-content">
                <p>Welcome to the team page</p>
            </div>
        </EasyTransition>
    );
};

export default Team;

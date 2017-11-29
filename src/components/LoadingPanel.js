import React from "react";

const LoadingPanel = props => {
    //logic

    //return
    return(
        <div className={`footer__loading-panel ${props.loaded ? "loading-done" : ""}`}>
          <div className={`footer__loading-panel-text ${props.loaded ? "loading" : ""}`}>
		<span className="loading-letter first-letter">s</span>
		<span className="loading-letter second-letter">k</span>
		<span className="loading-letter third-letter">r</span>
		<span className="loading-letter fourth-letter">a</span>
		<span className="loading-letter fifth-letter">t</span>
		<span className="loading-letter sixth-letter">c</span>
		<span className="loading-letter seventh-letter">h</span>
          </div>
        </div>
    );
}

export default LoadingPanel;

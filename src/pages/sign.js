import React from 'react';

export default class Sign extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="main-content">
		<section className="section section--e-sign">
			<h3 className="section__header">Please sign</h3>
			<p className="section__text">Derpalerp</p>
		</section>
	</div>
    );
  }
}

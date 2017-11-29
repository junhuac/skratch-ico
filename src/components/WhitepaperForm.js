import React from 'react';
import {createClient} from 'contentful-management';

//set up contentful client
let client = createClient({
  // This is the access token for this space. Normally you get the token in the Contentful web app
  accessToken: 'CFPAT-e06916206ce632b7af9d0588a41a8257606d43ef680d67e0420b3cc721f7fec2'
})

export default class WhitepaperForm extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);

    this.state = {
      paymentSelection: "",
      emailValue: "",
      emailValid: false,
      emailSending: false,
      emailSuccess: false,
      emailFalure: false,
      showDownload: false,
      mobileFormShown: false
    };

    this.choosePayment = this.choosePayment.bind(this);
    this.onEmailChange = this.onEmailChange.bind(this);
    this.validateEmail = this.validateEmail.bind(this);
    this.onEmailSubmit = this.onEmailSubmit.bind(this);
    this.toggleMobileForm = this.toggleMobileForm.bind(this);
  }

  validateEmail(email) {
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!filter.test(email)) {
      return false;
    }
    return true;
  }

  choosePayment(event) {
    let clickedButton = event.target;

    if(clickedButton.classList.contains("button--email")) {
      this.setState({
        paymentSelection: "email"
      });
    } else {
      this.setState({
        paymentSelection: "tweet"
      });
    }
  }

  onEmailChange(event) {
    let value = event.target.value;
    this.setState({
      emailValue: value
    }, () => {
      if(this.validateEmail(this.state.emailValue)) {
        this.setState({
          emailValid: true
        })
      } else {
        this.setState({
          emailValid: false
        })
      }
    });


    // if(this.validateEmail(this.state.emailValue)) {
    //   this.setState({
    //     emailValid: true
    //   })
    // } else {
    //   this.setState({
    //     emailValid: false
    //   })
    // }
  }

  onEmailSubmit(event) {
    event.preventDefault();

    let email = this.state.emailValue;

    this.setState({
      emailSending: true,
      emailSuccess: false,
      emailFailure: false
    })

    //send data to contentful
    client.getSpace('j5zy0n17n2ql')
    .then((space) => space.createEntry('whitePaperContacts', {
      fields: {
        email: {
          'en-US': email
        }
      }
    }))
    .then((entry) => {
      // console.log(entry);

      setTimeout(() => {
        this.setState({
          emailSuccess: true,
          emailFailure: false,
          emailSending: false
        });

        setTimeout(() => {
          this.setState({
            showDownload: true
          });
        }, 500);

        //end
        this.setState({
          emailValue: ""
        });
      }, 1000);
    })
    .catch(error => {
      console.log(error);
      setTimeout(() => {
        this.setState({
          emailSuccess: false,
          emailFailure: true,
          emailSending: false
        });
      }, 1000);
    })
  }

  toggleMobileForm() {
    this.setState({
      mobileFormShown: !this.state.mobileFormShown
    });
  }

  render() {
    return (
      <div className={`whitepaper-form ${(this.state.mobileFormShown ? "" : "mobile-hidden")}`}>
        <div className={`whitepaper-form-mobile-toggle`} onClick={this.toggleMobileForm}>
          <p className="whitepaper-form-mobile-toggle-caption">White Paper</p>
          <img src="//images.contentful.com/j5zy0n17n2ql/6wPwtYD4s0Oqg68wQGGmK4/a6fcd8b488026d9dc6a38ca6b9f14a9b/download.svg" alt="Download" />
        </div>
        <div className="whitepaper-form__payment-buttons">
          <h3 className="whitepaper-form__choose-caption">Get the White Paper PDF:</h3>
          <button className={`whitepaper-form__payment-button button--email ${(this.state.paymentSelection ==="email" ? "button-selected" : "")}`} onClick={this.choosePayment}>Enter Email Address</button>
          <a className={`whitepaper-form__payment-button button--tweet ${(this.state.paymentSelection ==="tweet" ? "button-selected" : "")}`} href="http://www.paywithapost.de/pay?id=fa1d4e95-cca3-4fae-809f-0a954a6ee4ef" target="_blank">Pay with a Tweet</a>
        </div>
        <div className={`whitepaper-form__inputs ${(this.state.paymentSelection !== "" ? "inputs-expanded" : "")}`}>
          <div className={`whitepaper-form__input email-input input-email ${(this.state.paymentSelection === "email" && !this.state.emailSuccess ? "input-shown" : "")}`}>
              <input type="text" className="whitepaper-form__email-input" placeholder="Email Address" onChange={this.onEmailChange} value={this.state.emailValue} />
              <button className={`whitepaper-form__email-submit ${(this.state.emailValid ? "" : "email-invalid")}`} onClick={this.onEmailSubmit}>Submit</button>
              <div className="form-status">
                <img src="//images.contentful.com/j5zy0n17n2ql/4Pik0nZ4Vy8w6mcoaag82E/34de38e122e366bdd1f0d06d6aa9082e/Rolling.svg" alt="Processing" className={(this.state.emailSending ? "status-shown" : "status-hidden")} />
                <img src="//images.contentful.com/j5zy0n17n2ql/1IoQKAXWjykuy42quCc4Qo/8184426cfbbb0751a11e3cb1a96abb9b/success.svg" alt="Success" className={(this.state.emailSuccess ? "status-shown" : "status-hidden")} />
                <img src="//images.contentful.com/j5zy0n17n2ql/6cbeCDdAqWMeCS6WSY0agi/cf116f99874bae4dcec4e9b2aad3f3e5/failure.svg" alt="Failure" className={(this.state.emailFailure ? "status-shown" : "status-hidden")} />
              </div>
          </div>
          <div className={`whitepaper-form__input ${(this.state.showDownload ? "input-shown" : "")}`}>
            <form target="_blank" method="get" action="//assets.contentful.com/j5zy0n17n2ql/jBg7sxSPlYCqSmwu8IeSU/9783410afeb56455fe0121bb20e39694/whitepaper.pdf" className="pdf-download-form">
              <button type="submit" className="pdf-download-button">Download Whitepaper</button>
            </form>
          </div>
          <div className={`whitepaper-form__input tweet-input input-tweet ${(this.state.paymentSelection === "tweet" ? "input-shown" : "")}`}>
            Tweet
          </div>
        </div>
      </div>
    );
  }
}

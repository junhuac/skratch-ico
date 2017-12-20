import React from "react";
import { createClient } from "contentful-management";
import _ from "lodash";
import axios from "axios";
import ClientOAuth2 from "client-oauth2";
import Countries from "../utils/countries";

//geo IP endpoint
let geoIP = "https://ipinfo.io/json";
let countryBlacklisted = false;

//set up contentful client
let client = createClient({
  // This is the access token for this space. Normally you get the token in the Contentful web app
  accessToken: "CFPAT-e06916206ce632b7af9d0588a41a8257606d43ef680d67e0420b3cc721f7fec2"
});

let mailchimpScript = "https://undergroundhiphop.com/ughh-premier-handlers/skratchMailHandler.php";

//invest ready info
let authorizationEndpoint = "https://api.investready.com/oauth/authorize";
let tokenEndpoint = "https://api.investready.com/oauth/token";
let profileEndpoint = "https://api.investready.com/api/me.json";
let clientID = "QqdL2OCpmg3waWs8fxYPpIcomFP7epa5QoRTctiy";
let clientSecret = "Jl5Uhx2x51mvJzU6eKdt9nz0LqTYUcxDyDxPbAmh";
let redirectURL = "http://skratch-ico.surge.sh/investor-redirect/";
let responseType = "code";

let currencyPlaceholder = "Currency";
let countryPlaceholder = "Country of residence";

var oAuth = new ClientOAuth2({
  clientId: clientID,
  clientSecret: clientSecret,
  accessTokenUri: tokenEndpoint,
  authorizationUri: authorizationEndpoint,
  redirectUri: redirectURL,
  scopes: [""]
});

export default class EmailForm extends React.Component {
  static propTypes = {
    name: React.PropTypes.string
  };

  constructor(props) {
    super(props);

    this.state = {
      emailField: "",
      firstName: "",
      lastName: "",
      dob: "",
      country: countryPlaceholder,
      amount: "",
      currency: currencyPlaceholder,
      emailValid: "NA",
      firstNameValid: "NA",
      lastNameValid: "NA",
      dobValid: "NA",
      countryValid: "NA",
      amountValid: "NA",
      currencyValid: "NA",
      sendingData: "",
      success: false,
      failure: false,
      formValid: "",
      modalShown: false,
      statusShown: false,
      blacklistedCountries: ["CN"]
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.validateEmail = this.validateEmail.bind(this);
    this.validateName = this.validateName.bind(this);
    this.validateDOB = this.validateDOB.bind(this);
    this.validateAmount = this.validateAmount.bind(this);
    this.validateCurrency = this.validateCurrency.bind(this);
    this.validateCountry = this.validateCountry.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.addSlashes = this.addSlashes.bind(this);
  }

  componentDidMount() {
    //get country code
    axios
      .get(geoIP)
      .then(response => {
        console.log("GeoIP data: ", response);
        if (response.country === "CN") {
          countryBlacklisted = true;
        }
      })
      .catch(error => {
        console.log("GeoIP error: ", error);
      });
  }

  validateEmail(email) {
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!filter.test(email)) {
      return false;
    }
    return true;
  }

  validateAmount(amount) {
    var filter = /^\d+$/;
    if (!filter.test(amount)) {
      return false;
    }
    return true;
  }

  validateCurrency(currency) {
    if (currency === currencyPlaceholder) {
      return false;
    }
    return true;
  }

  validateCountry(country) {
    if (country === countryPlaceholder) {
      return false;
    }
    return true;
  }

  validateName(name) {
    if (/^[A-Za-z\s\-]+$/.test(name) && name.length > 1) {
      return true;
    } else {
      return false;
    }
  }

  validateDOB(date) {
    var birthDate = new Date(date);
    var today = new Date();

    if (
      today >= new Date(birthDate.getFullYear() + 18, birthDate.getMonth(), birthDate.getDate()) &&
      birthDate.getFullYear().toString().length === 4
    ) {
      return true;
    } else {
      return false;
    }
  }


  onFormSubmit(event) {
    event.preventDefault();

    let email = this.state.emailField;
    let firstName = this.state.firstName;
    let lastName = this.state.lastName;
    let dob = this.state.dob;
    let country = this.state.country;
    let amount = this.state.amount;
    let currency = this.state.currency;

    if (
      this.validateEmail(email) &&
      this.validateName(firstName) &&
      this.validateName(lastName) &&
      this.validateDOB(dob) &&
      this.validateCountry(country) &&
      this.validateAmount(amount) &&
      this.validateCurrency(currency)
    ) {
      this.setState({
        formValid: "valid",
        statusShown: true
      });
    } else {
      this.setState({
        formValid: "NA"
      });
    }

    //check each field
    if (!this.validateEmail(email)) {
      this.setState({
        emailValid: "invalid"
      });
    }

    if (!this.validateName(firstName)) {
      this.setState({
        firstNameValid: "invalid"
      });
    }

    if (!this.validateName(lastName)) {
      this.setState({
        lastNameValid: "invalid"
      });
    }

    if (!this.validateDOB(dob)) {
      this.setState({
        dobValid: "invalid"
      });
    }

    if (!this.validateCountry(country)) {
      this.setState({
        countryValid: "invalid"
      });
    }

    if (!this.validateAmount(amount)) {
      this.setState({
        amountValid: "invalid"
      });
    }

    if (!this.validateCurrency(currency)) {
      this.setState({
        currencyValid: "invalid"
      });
    }

    if (
      this.validateEmail(email) &&
      this.validateName(firstName) &&
      this.validateName(lastName) &&
      this.validateDOB(dob) &&
      this.validateCountry(country) &&
      this.validateAmount(amount) &&
      this.validateCurrency(currency)
    ) {
      this.setState({
        sendingData: true,
        success: false,
        failure: false,
        formValid: "valid"
      });

      client
        .getSpace("j5zy0n17n2ql")
        .then(space =>
          space.createEntry("emailContacts", {
            fields: {
              email: {
                "en-US": email
              },
              firstName: {
                "en-US": firstName
              },
              lastName: {
                "en-US": lastName
              },
              dateOfBirth: {
                "en-US": dob
              },
              amount: {
                "en-US": amount
              },
              currency: {
                "en-US": currency
              },
              country: {
                "en-US": country
              }
            }
          })
        )
        .then(entry => {
          // successful submission

          //mailchimp call
          // axios({
          //     method: 'post',
          //     // url: 'http://localhost/ughh-premier-handlers/skratchMailHandler.php', // mailChimpScript
          //     url: mailchimpScript,
          //     data: {
          //         mode: "",
          //         userRecord: {
          //             email: email,
          //             firstName: firstName,
          //             lastName: lastName,
          //             dateOfBirth: dob
          //         }
          //     }
          // }).then((response) => {
          //   console.log("Mailchimp success response: ", response);
          // }).catch((error) => {
          //   console.log("Mailchimp error response: ", error);
          // });

          setTimeout(() => {
            this.setState({
              sendingData: false,
              success: true,
              failure: false,
              emailField: "",
              firstName: "",
              lastName: "",
              dob: "",
              country: countryPlaceholder,
              amount: "",
              currency: currencyPlaceholder,
              formValid: "",
              emailValid: "NA",
              firstNameValid: "NA",
              lastNameValid: "NA",
              dobValid: "NA",
              countryValid: "NA",
              amountValid: "NA",
              currencyValid: "NA"
            });

            //route user to InvestReady
            // window.location.href = oAuth.token.getUri().replace("response_type=token", "response_type=code");
          }, 500);
        })
        .catch(error => {
          console.log(error);
          setTimeout(() => {
            this.setState({
              sendingData: false,
              success: false,
              failure: true,
              formValid: ""
            });
          }, 500);
        });
    } else {
      this.setState({
        formValid: "invalid"
      });
    }
  }

  onInputChange(event) {
    let value = event.target.value;

    this.setState({
      statusShown: false
    });

    if (event.target.classList.contains("email-input")) {
      //email
      if (this.validateEmail(value)) {
        this.setState({
          emailValid: "valid",
          emailField: value
        });
      } else {
        this.setState({
          emailValid: "NA",
          emailField: value
        });
      }
    } else if (event.target.classList.contains("first-name-input")) {
      //first name
      if (this.validateName(value)) {
        this.setState({
          firstNameValid: "valid",
          firstName: value
        });
      } else {
        this.setState({
          firstNameValid: "NA",
          firstName: value
        });
      }
    } else if (event.target.classList.contains("last-name-input")) {
      //last name
      if (this.validateName(value)) {
        this.setState({
          lastNameValid: "valid",
          lastName: value
        });
      } else {
        this.setState({
          lastNameValid: "NA",
          lastName: value
        });
      }
    } else if (event.target.classList.contains("amount-input")) {
      //amount
      if (this.validateAmount(value)) {
        this.setState({
          amountValid: "valid",
          amount: value
        });
      } else {
        this.setState({
          amountValid: "NA",
          amount: value
        });
      }
    } else if (event.target.classList.contains("currency-input")) {
      //currency select
      if (this.validateCurrency(value)) {
        this.setState({
          currencyValid: "valid",
          currency: value
        });
      } else {
        this.setState({
          currencyValid: "NA",
          currency: value
        });
      }
    } else if (event.target.classList.contains("country-input")) {
      //currency select
      if (this.validateCountry(value)) {
        this.setState({
          countryValid: "valid",
          country: value
        });
      } else {
        this.setState({
          countryValid: "NA",
          country: value
        });
      }
    } else {
      //dob
      if (this.validateDOB(value)) {
        this.setState({
          dobValid: "valid",
          dob: value
        });
      } else {
        this.setState({
          dobValid: "NA",
          dob: value
        });
      }
    }

    setTimeout(() => {
      if (
        this.state.emailValid === "valid" &&
        this.state.firstNameValid === "valid" &&
        this.state.lastNameValid === "valid" &&
        this.state.dobValid === "valid" &&
        this.state.countryValid === "valid" &&
        this.state.amountValid === "valid" &&
        this.state.currencyValid === "valid"
      ) {
        this.setState({
          formValid: "valid"
        });
      } else {
        this.setState({
          formValid: "invalid"
        });
      }
    }, 100);
  }

  toggleModal() {
    if (this.state.modalShown) {
      this.setState({
        modalShown: !this.state.modalShown,
        formValid: "",
        success: false,
        failure: false,
        emailField: "",
        firstName: "",
        lastName: "",
        dob: "",
        country: countryPlaceholder,
        amount: "",
        currency: currencyPlaceholder,
        emailValid: "NA",
        firstNameValid: "NA",
        lastNameValid: "NA",
        dobValid: "NA",
        amountValid: "NA",
        currencyValid: "NA"
      });
    } else {
      // console.log(countryBlacklisted);
      this.setState({
        modalShown: !this.state.modalShown
      });
    }
  }

  addSlashes(event) {
    let value = event.target.value;
    if ((value.length === 2 || value.length === 5) && event.keyCode !== 8) {
      this.setState({
        dob: this.state.dob + "/"
      });
    }
  }

  render() {
    let rollerImage = _.find(this.props.images, function(object) {
      return object.node.file.url.includes("Rolling.svg");
    });

    let successImage = _.find(this.props.images, function(object) {
      return object.node.file.url.includes("success.svg");
    });

    let failureImage = _.find(this.props.images, function(object) {
      return object.node.file.url.includes("failure.svg");
    });

    let closeImage = _.find(this.props.images, function(object) {
      return object.node.file.url.includes("cancel.svg");
    });

    return (
      <div className="email-form-container">
        <button className={`email-form-container__form-button`} onClick={this.toggleModal}>
          Sign Up
        </button>
        <div className={`email-form-container__modal ${this.state.modalShown ? "modal-shown" : ""}`}>
          <form className="email-form" autoComplete="off">
            <h3 className="email-form-container__modal-header">
              Please complete the following form to learn more about the Skratch ICO.
            </h3>
            <div className="form-row">
              <input
                type="text"
                className="email-input"
                placeholder="Email"
                value={this.state.emailField}
                onChange={this.onInputChange}
              />
              <div className={`validation-message ${this.state.emailValid === "invalid" ? "validation-shown" : ""}`}>
                <p>Please provide a valid email address</p>
              </div>
            </div>
            <div className="form-row">
              <input
                type="text"
                className="first-name-input"
                placeholder="First name"
                value={this.state.firstName}
                onChange={this.onInputChange}
              />
              <div
                className={`validation-message ${this.state.firstNameValid === "invalid" ? "validation-shown" : ""}`}
              >
                <p>Please provide your first name</p>
              </div>
            </div>
            <div className="form-row">
              <input
                type="text"
                className="last-name-input"
                placeholder="Last name"
                value={this.state.lastName}
                onChange={this.onInputChange}
              />
              <div className={`validation-message ${this.state.lastNameValid === "invalid" ? "validation-shown" : ""}`}>
                <p>Please provide your last name</p>
              </div>
            </div>
            <div className="form-row">
              <input
                type="text"
                className={`dob-input ${this.state.dobValid !== "valid" ? "dob-input-invalid" : ""}`}
                placeholder="Date of birth (mm/dd/yyyy)"
                value={this.state.dob}
                onChange={this.onInputChange}
                onKeyUp={this.addSlashes}
              />
              <div className="input-format-helper">
                <p>
                  In the format mm/dd/yyyy. For example, 01/30/1990 for January 30th, 1990. We'll add the slashes for
                  you.
                </p>
              </div>
              <div className={`validation-message ${this.state.dobValid === "invalid" ? "validation-shown" : ""}`}>
                <p>Please provide a date of birth (note: you must be at least 18 years old to sign up)</p>
              </div>
            </div>
            <div className="form-row">
              <select
                name="country"
                className="country-input form-dropdown"
                onChange={this.onInputChange}
                value={this.state.country}
              >
                <option value="default" disabled>
                  {countryPlaceholder}
                </option>
                {Countries.map(country => {
                    return <option key={country.code} value={country.code}>{country.name}</option>
                })}
              </select>
              <div
                className={`validation-message ${this.state.countryValid === "invalid"
                  ? "validation-shown"
                  : ""}`}
              >
                <p>Please select your country</p>
              </div>
            </div>
            <div className="form-row currency-questions">
              <input
                type="text"
                className={`amount-input ${this.state.amountValid !== "valid" ? "amount-input-invalid" : ""}`}
                placeholder="Amount you'd like to spend"
                value={this.state.amount}
                onChange={this.onInputChange}
              />
              <select
                name="currency"
                className="currency-input"
                onChange={this.onInputChange}
                value={this.state.currency}
              >
                <option value="default" disabled>
                  {currencyPlaceholder}
                </option>
                <option value="usd">USD</option>
                <option value="bitcoin">Bitcoin</option>
                <option value="ethereum">Ethereum</option>
              </select>
              <div
                className={`validation-message ${this.state.amountValid === "invalid" ||
                this.state.currencyValid === "invalid"
                  ? "validation-shown"
                  : ""}`}
              >
                <p>Please let us know how much you're looking to spend on Skratch tokens</p>
              </div>
            </div>
            <button
              className={`email-button ${this.state.formValid === "valid" ? "" : "button-disabled"}`}
              onClick={this.onFormSubmit}
            >
              {this.props.data.emailButton}
            </button>
            <div className="form-status">
              <img
                src={rollerImage.node.file.url}
                alt="Processing"
                className={this.state.sendingData ? "status-shown" : "status-hidden"}
              />
              <img
                src={successImage.node.file.url}
                alt="Success"
                className={this.state.success && this.state.statusShown ? "status-shown" : "status-hidden"}
              />
              <img
                src={failureImage.node.file.url}
                alt="Failure"
                className={this.state.failure && this.state.statusShown ? "status-shown" : "status-hidden"}
              />
            </div>
            <div className="email-form-container__modal-close" onClick={this.toggleModal}>
              <img src={closeImage.node.file.url} alt="Close modal" />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

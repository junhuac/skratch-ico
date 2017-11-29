import React from 'react';
import queryString from "query-string";
import axios from "axios";


//invest ready info
let authorizationEndpoint = "https://api.investready.com/oauth/authorize";
let tokenEndpoint = "https://api.investready.com/oauth/token";
let profileEndpoint = "https://api.investready.com/api/me.json";
let clientID = "QqdL2OCpmg3waWs8fxYPpIcomFP7epa5QoRTctiy";
let clientSecret = "Jl5Uhx2x51mvJzU6eKdt9nz0LqTYUcxDyDxPbAmh";
let redirectURL = "http://skratch-ico.surge.sh/investor-redirect/";
let responseType = "code";

export default class InvestorRedirect extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.state = {
      tokenCode: "",
      name: "",
      email: "",
      certificates: "",
      processFinished: ""
    };

    this.checkCertificates = this.checkCertificates.bind(this);
  }

  componentDidMount() {

    //get token code from query string
    let location = (this.props.location ? this.props.location : "");
    const parameters = queryString.parse(location.search);
    // console.log("Query string parameters: ", parameters);


    this.setState({
      tokenCode: parameters.code
    }, () => {
        //get code from query parameter
        axios.post(tokenEndpoint, {
            'grant_type': 'authorization_code',
            'client_id': clientID,
            'client_secret': clientSecret,
            'redirect_uri': redirectURL,
            'code': this.state.tokenCode
        })

        .then((response) => {

          //get the user's profile with the access token
          axios.post(profileEndpoint, {
            'access_token': response.data.access_token
          })
          .then((response) => {
            // handle the user profile data
            this.setState({
              name: response.data.data.person.name,
              email: response.data.data.person.email,
              certificates: response.data.data.certificates
            }, () => {
              //check for accreditation and make Mailchimp calls
              console.log("Certificates: ", this.state.certificates);
              let accredited = this.checkCertificates(this.state.certificates);
              // axios({
              //     method: 'post',
              //     url: 'http://localhost/ughh-premier-handlers/skratchMailHandler.php', // mailChimpScript
              //     data: {
              //         mode: "accredited",
              //         userRecord: {
              //             email: "testing@gmail.com",
              //             firstName: "sebTest",
              //             lastName: "sebTest",
              //             dateOfBirth: "05/02/1988"
              //         }
              //     }
              // }).then((response) => {
              //   console.log("Mailchimp success response: ", response);
              // }).catch((error) => {
              //   console.log("Mailchimp error response: ", error);
              // })

            });
          })
          .catch(function (error) {
            console.log("Can't get user profile: ", error);
          });
        })

        .catch(function (error) {
          console.log("Get token error: ", error);
        });
    });
  }


  checkCertificates(certificatesArray) {
    let accredited = "";
    for(var i = 0; i < certificatesArray.length; i++) {
      let certificate = certificatesArray[i];
      let now = new Date().getTime();
      let expirationDate;
      if(certificate.hasOwnProperty("expires_on")) {
        expirationDate = new Date(certificate.expires_on).getTime();
      } else {
        expirationDate = 0;
      }
      if(certificate.hasOwnProperty("reason") && certificate.hasOwnProperty("certificate") && expirationDate > now) {
        accredited = "accredited";
        break;
      }
    }

    return accredited;
  }



  render() {
	//logic
    if(!this.state.name) {
      return (
        <div className="main-content">
          <section className="section--investor-redirect">
            <div className="investor-image-container">
              <img src="//images.contentful.com/j5zy0n17n2ql/4Pik0nZ4Vy8w6mcoaag82E/34de38e122e366bdd1f0d06d6aa9082e/Rolling.svg" alt="Loading"/>
            </div>
          </section>
        </div>
      );
    } else {
      return (
        <div className="main-content">
          <section className="section--investor-redirect">
            <h3 className="section__header investor-redirect-header">Thanks for signing up, {this.state.name}</h3>
              <p className="section__text">We'll review your information and be in touch regarding next steps.</p>
          </section>
        </div>
      );
    }
  }
}


    // //test out mailchimp requests
    // axios({
    //     method: 'post',
    //     url: 'http://localhost/ughh-premier-handlers/skratchMailHandler.php', // mailChimpScript
    //     data: {
    //         mode: "accredited",
    //         userRecord: {
    //             email: "testing@gmail.com",
    //             firstName: "sebTest",
    //             lastName: "sebTest",
    //             dateOfBirth: "05/02/1988"
    //         }
    //     }
    // }).then((response) => {
    //   console.log("Mailchimp success response: ", response);
    // }).catch((error) => {
    //   console.log("Mailchimp error response: ", error);
    // })

webpackJsonp([0xe519a4df11f1],{757:function(e,t,n){"use strict";function r(e){switch(e.arrayFormat){case"index":return function(t,n,r){return null===n?[a(t,e),"[",r,"]"].join(""):[a(t,e),"[",a(r,e),"]=",a(n,e)].join("")};case"bracket":return function(t,n){return null===n?a(t,e):[a(t,e),"[]=",a(n,e)].join("")};default:return function(t,n){return null===n?a(t,e):[a(t,e),"=",a(n,e)].join("")}}}function o(e){var t;switch(e.arrayFormat){case"index":return function(e,n,r){return t=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),t?(void 0===r[e]&&(r[e]={}),void(r[e][t[1]]=n)):void(r[e]=n)};case"bracket":return function(e,n,r){return t=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),t?void 0===r[e]?void(r[e]=[n]):void(r[e]=[].concat(r[e],n)):void(r[e]=n)};default:return function(e,t,n){return void 0===n[e]?void(n[e]=t):void(n[e]=[].concat(n[e],t))}}}function a(e,t){return t.encode?t.strict?c(e):encodeURIComponent(e):e}function i(e){return Array.isArray(e)?e.sort():"object"==typeof e?i(Object.keys(e)).sort(function(e,t){return Number(e)-Number(t)}).map(function(t){return e[t]}):e}var c=n(909),s=n(12);t.extract=function(e){return e.split("?")[1]||""},t.parse=function(e,t){t=s({arrayFormat:"none"},t);var n=o(t),r=Object.create(null);return"string"!=typeof e?r:(e=e.trim().replace(/^(\?|#|&)/,""))?(e.split("&").forEach(function(e){var t=e.replace(/\+/g," ").split("="),o=t.shift(),a=t.length>0?t.join("="):void 0;a=void 0===a?null:decodeURIComponent(a),n(decodeURIComponent(o),a,r)}),Object.keys(r).sort().reduce(function(e,t){var n=r[t];return Boolean(n)&&"object"==typeof n&&!Array.isArray(n)?e[t]=i(n):e[t]=n,e},Object.create(null))):r},t.stringify=function(e,t){var n={encode:!0,strict:!0,arrayFormat:"none"};t=s(n,t);var o=r(t);return e?Object.keys(e).sort().map(function(n){var r=e[n];if(void 0===r)return"";if(null===r)return a(n,t);if(Array.isArray(r)){var i=[];return r.slice().forEach(function(e){void 0!==e&&i.push(o(n,e,i.length))}),i.join("&")}return a(n,t)+"="+a(r,t)}).filter(function(e){return e.length>0}).join("&"):""}},909:function(e,t){"use strict";e.exports=function(e){return encodeURIComponent(e).replace(/[!'()*]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}},419:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var c=n(1),s=r(c),u=n(757),f=r(u),l=n(149),d=r(l),p="https://api.investready.com/oauth/token",m="https://api.investready.com/api/me.json",h="QqdL2OCpmg3waWs8fxYPpIcomFP7epa5QoRTctiy",v="Jl5Uhx2x51mvJzU6eKdt9nz0LqTYUcxDyDxPbAmh",y="http://skratch-ico.surge.sh/investor-redirect/",g=function(e){function t(n){o(this,t);var r=a(this,e.call(this,n));return r.state={tokenCode:"",name:"",email:"",certificates:"",processFinished:""},r.checkCertificates=r.checkCertificates.bind(r),r}return i(t,e),t.prototype.componentDidMount=function(){var e=this,t=this.props.location?this.props.location:"",n=f.default.parse(t.search);this.setState({tokenCode:n.code},function(){d.default.post(p,{grant_type:"authorization_code",client_id:h,client_secret:v,redirect_uri:y,code:e.state.tokenCode}).then(function(t){d.default.post(m,{access_token:t.data.access_token}).then(function(t){e.setState({name:t.data.data.person.name,email:t.data.data.person.email,certificates:t.data.data.certificates},function(){console.log("Certificates: ",e.state.certificates);e.checkCertificates(e.state.certificates)})}).catch(function(e){console.log("Can't get user profile: ",e)})}).catch(function(e){console.log("Get token error: ",e)})})},t.prototype.checkCertificates=function(e){for(var t="",n=0;n<e.length;n++){var r=e[n],o=(new Date).getTime(),a=void 0;if(a=r.hasOwnProperty("expires_on")?new Date(r.expires_on).getTime():0,r.hasOwnProperty("reason")&&r.hasOwnProperty("certificate")&&a>o){t="accredited";break}}return t},t.prototype.render=function(){return this.state.name?s.default.createElement("div",{className:"main-content"},s.default.createElement("section",{className:"section--investor-redirect"},s.default.createElement("h3",{className:"section__header investor-redirect-header"},"Thanks for signing up, ",this.state.name),s.default.createElement("p",{className:"section__text"},"We'll review your information and be in touch regarding next steps."))):s.default.createElement("div",{className:"main-content"},s.default.createElement("section",{className:"section--investor-redirect"},s.default.createElement("div",{className:"investor-image-container"},s.default.createElement("img",{src:"//images.contentful.com/j5zy0n17n2ql/4Pik0nZ4Vy8w6mcoaag82E/34de38e122e366bdd1f0d06d6aa9082e/Rolling.svg",alt:"Loading"}))))},t}(s.default.Component);g.propTypes={name:s.default.PropTypes.string},t.default=g,e.exports=t.default}});
//# sourceMappingURL=component---src-pages-investor-redirect-js-5f4091b1b5d65a049fbd.js.map
//import logo from "./logo.svg";
import "./App.css";

// Constant value
const TITLE = "Front End Technologies";
const HTMLLOGO = require(`./images/html_logo.png`).default;
const CSSLOGO = require(`./images/css_logo.png`).default;
const REACTLOGO = require(`./images/react_logo.png`).default;
const JSLOGO = require(`./images/js_logo.png`).default;
const TITLESUBSCRIBE = "Subscribe";
const SUBDESCRIPTION = "Sign up with your email address to receive news and updates";
//const LOGOSTYLE = {} ;

const title = <h1 className="Title">{TITLE}</h1>;

const listTechs = (
  <div className="List-tech">
    <img src={HTMLLOGO} alt="HTML logo" className="logo-style" />
    <img src={CSSLOGO} alt="CSS logo" className="logo-style" />
    <img src={JSLOGO} alt="Javascript logo" className="logo-style" />
    <img src={REACTLOGO} alt="React logo" className="logo-style" />
  </div>
);

const ex01 = (
  <div className="ex01">
    {title}
    {listTechs}
  </div>
);

const titleSubscribe = <h1>{TITLESUBSCRIBE}</h1>;
const subDes = <p>{SUBDESCRIPTION}</p>;
const inputForm = (
  <div className="input-form">
    <input type="text" placeholder="First name" className = "input-text"/>
    <input type="text" placeholder="First name" className = "input-text"/>
    <input type="email" placeholder="abc@domain.com" className = "input-text"/>
  </div>
);
const subscribeButton = (
  <button type="button" id="subscribe-but">Subscribe</button>
);
const ex02 = (
  <div className="ex02">
    {titleSubscribe}
    {subDes}
    {inputForm}
    {subscribeButton}
  </div>
);
function App() {
  return (<div className="App">
    {ex01}
   {ex02}
   </div>);
}

export default App;

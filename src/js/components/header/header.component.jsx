import React from 'react';
import style from './header.style.css'
import { Link, withRouter } from 'react-router-dom';
import KeyboardEventHandler from 'react-keyboard-event-handler';


let openSaleBill = (props) => {
  props.history.push('/saleBill')
}

let keyPressed = (key,e,props) => {
  console.log('Key and e ',key,e,props);
  switch (key) {
    case "alt+s":
      openSaleBill(props);
      break;
  
    default:
      break;
  }
}
function HeaderComponent(props) {
  console.log('I am header props',props)
  return (
    <div className="top-header">
      <div className="inner-header">
        <div className="left-logo">
        ਲੋਪੋ ਸ਼ਟਰਿੰਗ 
        <KeyboardEventHandler
        handleKeys={['alt+s']}
        onKeyEvent={(key, e) => keyPressed(key, e,props)} />
        </div>

        <div className="navigation-left-top">
          <ul id="nav" style={{display: 'inherit'}}>
            <li><Link to={"/"}><i className={"fa fa-home"}></i>Home</Link></li>
            <li>
              <a><i className="fa fa-calculator"></i> &nbsp;Transactions</a>
              <ul>
                <li><Link to={"/saleBill"}><i className={"fa fa-"}></i>Sale / Rent Bill (Alt + s)</Link></li>
                <li><Link to={"/saleBill"}><i className={"fa fa-"}></i>Estimate</Link></li>
                <li><a><i className={"fa fa-"}></i>Purchase Bill</a></li>
              </ul>
            </li>
            <li>
              <a><i className="fa fa-calculator"></i> &nbsp;Account</a>
            </li>
            <li>
              <Link to={"products"}><i className="fa fa-times"></i> &nbsp;Products</Link>
              <a></a>
            </li>
            <li>
              <a><i className="fa fa-male"></i> &nbsp;Parties</a>
            </li>
            <li>
              <a><i className="fa fa-male"></i> &nbsp;Settings</a>
            </li>
          </ul>
          
          
        </div>
      </div>
        
    </div>
  );
}

export default withRouter(HeaderComponent)

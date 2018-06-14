//import react into the bundle
import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

//include bootstrap npm library into the bundle
import 'bootstrap';

//include your index.scss file into the bundle
import '../styles/index.scss';

//import your own components
import {Home} from './component/home.jsx';
var seconds = 0;
setInterval( function(){
    seconds++;
ReactDOM.render(
    <div>
        <Navbar />
        <PricingHeader />
        <setInterval />
        <div className=" container">
            <div className="card-deck mb-3 text-center">
                <Card 
                   title="Free"
                   price="0"
                   users={seconds}
                   storage={2}
                   textButton="Sign up for free"
                   other={["Email support","Help center access"]}
                   
                />
                <Card 
                   title="Pro"
                   price="15"
                   users={seconds}
                   storage={10}
                   textButton="Sign up for free"
                   other={["Priority email support","Help center access"]}
                
                />
                <Card 
                   title="Enterprice"
                   price="29"
                   users={seconds}
                   storage={15}
                   textButton="Sign up for free"
                   other={["Phone and email support","Help center access"]}
                />
            </div>
        </div>
        <footer/>
    </div>
    ,
    document.querySelector('#app')
    );
}, 1000);
function Welcome(){
    return <h1> Hello, </h1>;
}

function Navbar(props){
    return (<div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow">
        <h5 className="my-0 mr-md-auto font-weight-normal">Company name</h5>
        <nav className="my-2 my-md-0 mr-md-3">
            <a className="p-2 text-dark" href="#">Features</a>
            <a className="p-2 text-dark" href="#">Enterprise</a>
            <a className="p-2 text-dark" href="#">Support</a>
            <a className="p-2 text-dark" href="#">Pricing</a>
        </nav>
        <a className="btn btn-outline-primary" href="#">Sign up</a>
    </div>);
}
function PricingHeader(){
    return <div>
        <div className="pricing-header jumbotron jumbotron-fluid bg-white mx-auto pb-1">
            <div className="container text-center">
                <h1 className="display-4">Pricing</h1>
                <p className="lead">Quickly build an effective pricing table for your potential customers with this Bootstrap example. It&apos;s built with default Bootstrap components and utilities with little customization.</p>
            </div>
        </div>
    </div>;
}
function Card(props){
   const others = [];
   props.other.forEach(function(element,index){
           others.push(<li key={index}>{element}</li>);
       });
   
   return <div className="card mb-4 box-shadow">
       <div className="card-header">
           <h4 className="my-0 font-weight-normal">{props.title}</h4>
       </div>
       <div className="card-body">
           <h1 className="card-title pricing-card-title">${props.price}<small className="text-muted">/ mo</small></h1>
           <ul className="list-unstyled mt-3 mb-4">
               <li>{props.users} users included</li>
               <li>{props.storage} GB of storage</li>
               {/* TODO PROPS.OTHER */}
               {others}
           </ul>
           <button type="button" className={"btn btn-lg btn-block btn"+(props.buttonStyle || "")+"-primary"}>{props.textButton}</button>
       </div>
   </div>;
}
Card.propTypes = {
 title: PropTypes.string,
 price: PropTypes.number,
 users: PropTypes.number,
 storage: PropTypes.number,
 other: PropTypes.string,
 textButton: PropTypes.string,
 buttonStyle: PropTypes.string
};

function Footer(props){
    return (<footer className="pt-4 my-md-5 pt-md-5 border-top mx-auto">
        <div className="row">
            <div className="col-12 col-md">
                <img className="mb-2" src="https://getbootstrap.com/assets/brand/bootstrap-solid.svg" alt="" width="24" height="24" />
                <small className="d-block mb-3 text-muted">© 2017-2018</small>
            </div>
            <div className="col-6 col-md">
                <h5>Features</h5>
                <ul className="list-unstyled text-small">
                    <li><a className="text-muted" href="#">Cool stuff</a></li>
                    <li><a className="text-muted" href="#">Random feature</a></li>
                    <li><a className="text-muted" href="#">Team feature</a></li>
                    <li><a className="text-muted" href="#">Stuff for developers</a></li>
                    <li><a className="text-muted" href="#">Another one</a></li>
                    <li><a className="text-muted" href="#">Last time</a></li>
                </ul>
            </div>
            <div className="col-6 col-md">
                <h5>Resources</h5>
                <ul className="list-unstyled text-small">
                    <li><a className="text-muted" href="#">Resource</a></li>
                    <li><a className="text-muted" href="#">Resource name</a></li>
                    <li><a className="text-muted" href="#">Another resource</a></li>
                    <li><a className="text-muted" href="#">Final resource</a></li>
                </ul>
            </div>
            <div className="col-6 col-md">
                <h5>About</h5>
                <ul className="list-unstyled text-small">
                    <li><a className="text-muted" href="#">Team</a></li>
                    <li><a className="text-muted" href="#">Locations</a></li>
                    <li><a className="text-muted" href="#">Privacy</a></li>
                    <li><a className="text-muted" href="#">Terms</a></li>
                </ul>
            </div>
        </div>
    </footer>);
    function setInterval(){
       setInterval(function(){}, 1000); 
    }
    
    
    
    }
    
   
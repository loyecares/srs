import { render } from '@testing-library/react';
import React from 'react';
import { Button,Modal} from 'react-bootstrap';
import './App.css';
import Chapter from './chapter';
import {
    BrowserRouter as Router,
    Link,
    Switch,
    Route,
    useParams
  } from "react-router-dom";

//create a component that displays data (scripture verses and title )
function Showcontent(props){
       console.log(props.item)
                return(
                           <div>
                            <p className="container">
                             {props.item}                    
                            </p>  
                            <Button className="text-center" onClick={props.closeModal}> 
                            <Router>
                            <Link to={`/dashboard/${props.id}`} >  Read Chapter </Link>
                            
                            </Router>
                            </Button>
                            </div>       
                    
                )       
    
}

export default Showcontent;

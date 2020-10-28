import { render } from '@testing-library/react';
import React from 'react';
import { Modal} from 'react-bootstrap';
import './App.css';

//create a component that displays data (scripture verses and title )
function Showcontent(props){
       console.log(props.item)
                return(
                           <div>
                            <p className="container">
                                {props.item}                  
                            </p>  
                            </div>       
                    
                )       
    
}

export default Showcontent;

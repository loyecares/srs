
import React from 'react';
import './App.css';
//create a component that displays data (scripture verses and title )
class Verses extends React.Component{
       render(){
        return(
            <div>
                <li className="content-wrapper" onClick={(e) => this.props.showcontent(this.props.id,e)}>
                    <h2> {this.props.text}</h2>
                </li>
            </div>
        )}
       
    
}

export default Verses;



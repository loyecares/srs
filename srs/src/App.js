
import React from 'react';
import {Button , Modal} from 'react-bootstrap';
import './App.css';
import './modal.css';
import Verses from './verses';
import Showcontent from './showcontent';
import Chapter from './chapter';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"



class App extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      listOfVerse: [],
      currentVerses:{
        text: '',
        content: '',
        key: ''
      },
      contentView: '',
      
     
      showModal1:false,
      showModal2:false  
    }
    this.handleInput = this.handleInput.bind(this);
    this.addItem = this.addItem.bind(this);
    this.handleModal2 = this.handleModal2.bind(this);
  }

  handleModal(){
    this.setState({
     
      showModal1:!this.state.show,
    })

  }
  handleModal2(content,e){
    let getKeyValue = this.state.listOfVerse.find(singleVerse => singleVerse.key === content)
    this.setState({
      showModal2:!this.state.show,
      contentView: getKeyValue.content
       
    })
      
  }
  handleModalClose(){
    this.setState({showModal1:this.state.show})
  }
  handleModalClose2(){
    this.setState({showModal2:this.state.show})
  }

  // a function that handles multiple input changes and store the data in the state
  handleInput(e){
    this.setState({
      ...this.state,
    currentVerses:  {
      ...this.state.currentVerses,
        [e.target.name]: e.target.value,
        key: Date.now()

      }
    })
  }
 

// a function that push currentverse object into an empty array and as well map the array to display the a list of data
  
  addItem(e){
    e.preventDefault();
    const newVerse =this.state.currentVerses;
    console.log(newVerse);
    //a conditional statement to check if  data was inputed in the textarea and input section (validation)
    if(newVerse !== ''){
      const newListOfVerse = [ ...this.state.listOfVerse, newVerse];
      this.setState({
        listOfVerse: newListOfVerse,
        currentVerses:{
          text: '',
          content: '',
          key: ''
        }
      })
    }
 
  }

   
  
  render(){
    return(
      <div>
        <div className="text-center">
        <Button onClick={()=>{this.handleModal()}} className="mt-3 mb-3 text-center"> New verse </Button>
        
        </div>
        <Modal show={this.state.showModal1}>
          <Modal.Header> 
            <h2> Create new Scripture verse</h2>
          <Button onClick={()=>{this.handleModalClose()}}> X </Button>  
            </Modal.Header> 
          <Modal.Body> 
            <form onSubmit={this.addItem}>
              <label>Bible text: </label><br></br>
              <input value={this.state.currentVerses.text}  onChange={this.handleInput} name="text" />
              <br></br>
              <label>Content: </label><br></br>
              <textarea value={this.state.currentVerses.content}  onChange={this.handleInput} name="content"> </textarea>

              <input type="submit" value="Submit" />
            </form>
          </Modal.Body>
          <Modal.Footer> 
         
          </Modal.Footer> 

        </Modal>

        <Modal show={this.state.showModal2}>
          <Modal.Header> 
            <h2> Scripture Content</h2>
          <Button onClick={()=>{this.handleModalClose2()}}> X </Button>  
            </Modal.Header> 
          <Modal.Body> 
            <Showcontent item={this.state.contentView} />
               
          </Modal.Body>
          <Modal.Footer> 
         
          </Modal.Footer> 

        </Modal>

        <div className="container">
          <div className=" text-center wrapper ">
            <ul>

              {
                this.state.listOfVerse.map((items)=>{
                  return(
                    <Verses id={items.key} text={items.text} showcontent={(e) =>this.handleModal2(items.key,e)} />
                  )
                })

              } 
            </ul>
          </div>

        </div>
      </div>
    
    );

  }
} 


export default App;

import React, {Component} from 'react';

export default class about extends Component {



render() {
    
    return (<div className="comptext">
    <br></br>
    <h3 id="title">About</h3>
    <p id="rcorners1"></p>
    
         
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          
          <form id="for">
                    <div className="form-group">
                        <label>Add Person Name:  </label>
                        <input type="text" className="form-control form-rounded" id="name" />
                    </div>
                    <div className="form-group">
                        <label>Add College Name: </label>
                        <input type="text"  className="form-control form-rounded" id="name"/>
                    </div>
                    <div className="form-group">
                        <label>Add GPA: </label>
                        <input type="text" className="form-control form-rounded" id="name"/>
                    </div>
                    <div className="form-group">
                        <label>Add MCAT: </label>
                        <input type="text" className="form-control form-rounded" id="name"/>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Register Business" className="btn btn-primary"/>
                    </div>
                </form>
    </div>)
    }
}

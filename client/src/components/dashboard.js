import React, {Component} from 'react';

export default class about extends Component {

constructor(props) {
    super(props)
    }

render() {
    const element = (<div>Text from Element</div>)
    return (<div className="comptext">
    <h3>About</h3>
    <p id="rcorners3"></p>
    <p id="rcorners2"></p>
    </div>)
    }
}
import React from 'react';
import {randomPw, CalcPw} from '../../lib/permutation';


class Sidebar extends React.Component{
    constructor(props){
        super(props)
        this.state={
            pw: '',
            crack: ''
        }
        /* this.pw = false */
    }

    handleClickGenerate = () => {
        let x = randomPw(this.props.array)
        console.log('x', x)
        this.setState({
            pw: x
        })
    }

    handleClickCrack = () => {
        let y = CalcPw(this.props.array, this.state.pw)
        this.setState({
            crack: y
        })
    }
    

render(){
    return(
        <div>
            <div className="m-2 border border-light">
                <p className="output">Array</p>
                <p className="output">{`[${this.props.array}]`}</p>
            </div>
            <div className="m-2">
                <button type="button" onClick={this.handleClickGenerate} className="btn btn-primary rounded-0">Generate Password</button>
                <input type="password" readOnly value={this.state.pw} className="m-2"/>
            </div>
            <div className="m-2">
                <button type="button" onClick={this.handleClickCrack} className="btn btn-primary rounded-0">Crack it!</button>
                <p>This is the Password: {this.state.crack}</p>
            </div>
        </div>
    )
}

}

export default Sidebar;
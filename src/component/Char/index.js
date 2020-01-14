import React from 'react';
import {SPECIAL} from '../../lib/chars'

const Chars = (props) => {
     const x = SPECIAL.map(char => <Char display={char} updateChar={props.updateChar} />)
     return(
         <div className="chars row row-cols-7 items-align-center">{x}</div>
     )

}

class Char extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            active: false,
       
    }
}

    handleClickChar = (char) => {
       this.setState({
            active: !this.state.active
       })
    
      this.props.updateChar(char);

    }
   


    render(){
        return(
            <div onClick={() => this.handleClickChar(this.props.display)} className = {this.state.active ? 'Char col-2 p-3 bg-primary border border-secondary m-2 text-center' : 'Char col-2 p-3 bg-white border border-secondary m-2 text-center'}>
            {this.props.display}
            </div>
        )
    }
}

export default Chars;
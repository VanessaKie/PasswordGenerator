import React from 'react';
import Chars from '../Char';
import Sidebar from '../Sidebar';


class Main extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            activChar: []
        }
    }


    
    updateChar = (char) => {
        

        let arr = this.state.activChar
        
      /*   let arr2 = arr.filter(el => {arr.includes(el) ? arr.splice(arr.indexOf(char), 1) : null}) */

        if (!arr.includes(char)){
            arr.push(char);
        }   else if (arr.includes(char)){
                let index = arr.indexOf(char);
                arr.splice(index, 1)
            } 
        
        this.setState({
            activChar: arr
        })
    }


render(){
    return(
        <>
            <div className="container">
                <div className="row">
                    <div className="chars col-8 border border-light mr-2 bg-light">
                        <Chars updateChar={this.updateChar} />
                    </div>
                    <div className="col-3 text-center border border-light">
                    <Sidebar array={this.state.activChar} />
                    </div>
                </div>
            </div>  
        </>
    )
}

}

export default Main; 
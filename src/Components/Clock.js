import React, { Component } from 'react'
import Button from './Button';

export default class Clock extends Component {
   constructor(props) {
       super(props)
   
       this.state = {
        date : new Date(),
        local : "bn-BD"
       }
   }
   

    componentDidMount() {
        this.clockTimer= setInterval(() => {
            this.tick();
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.clockTimer)
    }
    

    tick = () =>{
        this.setState({
            date : new Date()
        })
    }
    
    handelClick = ( local ) =>{
        this.setState ({
            local
        })
    }
    
    

    render() {
        const {date, local}=this.state;
        
        // console.log("Clock.js Clock Component render")
        return (
            <div>
               <h1> Time :  <span>{date.toLocaleTimeString(local)} </span></h1><br></br>
                {/* <button onClick={this.handelClick}>Click</button>   best coding*/}
                {/* <button onClick={()=>this.handelClick("en-US")}>Click</button> test parameter on event */}

                {/* <Button areaChange={this.handelClick} local={"en-US"} />  */}
                
                
                {/*  <Button areaChange={this.handelClick} local={"en-US"} />
                  <Button  areaChange={this.handelClick} local={"bn-BD"} /> */} 

                  {
                      local == 'bn-BD' ? (<Button areaChange={this.handelClick} local={"en-US"} show={false}/>) : (<Button  areaChange={this.handelClick} local={"bn-BD"} show />)
                  }

            </div>
        )
    }
}

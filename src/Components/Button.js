import React, { Component } from 'react'

export default class Button extends Component {

    // Button component re rende3ring off function system
    shouldComponentUpdate(nextProps) {
        const{areaChange:currentChange, local:currentLocal} = this.props;
        const{areaChange:nextChange, local:nextLocal} = nextProps;
        if ( currentChange == nextChange && currentLocal == nextLocal ) {
            return false;
        } else {
            return true;
        }
    }
    

    render() {
        const {areaChange, local, show}=this.props  /* receive reference valu from Clock by Button Component */
        // console.log("Button.js Button Component render")

        return (
            <div>
                <button onClick={()=>areaChange(local)}>
                    {
                        local == 'en-US' ? 'English' : 'Bangla'
                    }
                </button> 
                {show && <p>bangla display</p>}
            </div>
        )
    }
}


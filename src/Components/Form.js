import React, { Component } from 'react'

export default class Form extends Component {

    state = {
        memberName: "radim",
        commenText: "Test form and component on React",
        library: "React",
        isCheck: true
    }

    handelChange = (event) => {
        if (event.target.type == "text") {
            this.setState({
                memberName: event.target.value
            });
        } else if (event.target.type == "textarea") {
            this.setState({
                commenText: event.target.value
            });
        } else if (event.target.type == "select-one") {
            this.setState({
                library: event.target.value
            });
        } else if (event.target.type == "checkbox") {
            this.setState({
                isCheck: event.target.checked
            });
        }
        else {
            console.log(event.target.type)
            console.log("nothing")
        }
    };

    handelSubmit = (e) => {
        const { memberName, commenText, library, isCheck } = this.state
        e.preventDefault();
        console.log(memberName, commenText, library, isCheck)

    }

    render() {
        const { memberName, commenText, library, isCheck } = this.state

        return (
            <div>
                <form onSubmit={this.handelSubmit}>
                    <input
                        type="text"
                        name="memberName"
                        onChange={this.handelChange}
                        value={memberName}>
                    </input> <br /><br />
                    <textarea
                        type='text'
                        name="commenText"
                        value={commenText}
                        onChange={this.handelChange}>
                    </textarea>
                    <br /><br />
                    <select name="" value={library} onChange={this.handelChange}>
                        <option value="React">React</option>
                        <option value="Angular">Angular</option>
                        <option value="Vue">Vue</option>
                    </select>
                    <br /><br />
                    <input type="checkbox" checked={isCheck} onChange={this.handelChange} />
                    <br /><br />
                    <input type="submit" value="submit" />
                </form>

            </div>
        )
    }
}

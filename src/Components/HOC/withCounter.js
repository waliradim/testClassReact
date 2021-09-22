import React from 'react'

const withCounter = (OrginalComponent) => {

    class newComponent extends React.Component {
        state = {
            count: 0
        };

        incrementCount = () => {
            this.setState((prevState) => ({ count: prevState.count + 1 }))
        }
        render() {
            const { count } = this.state;
            return <OrginalComponent count={count} incrementCount={this.incrementCount} />
        }
    }
    return newComponent;
}
export default withCounter;
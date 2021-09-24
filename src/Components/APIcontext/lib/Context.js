class Context {
    constructor(value = null) {
        this.value = value;
    }

    //provider
    Provider = ({ children, value }) => {
        this.value = value;
        return children;
    }

    //consumer
    Consumer = ({ children }) => children(this.value);

}

function createContext(value = null) {
    const context = new Context(value);
    return {
        provider: context.provider,
        consumer: context.consumer
    }
}


export default createContext;
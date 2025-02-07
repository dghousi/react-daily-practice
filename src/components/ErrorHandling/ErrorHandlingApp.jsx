import { Component } from "react";


function ErrorHandlingApp() {
    return (
        <>
        <h1>Hello World!</h1>

        <ErrorBoundary fallback={<h1 style={{color:'red'}}>There was some errors!</h1>}>
            <Buggy />
        </ErrorBoundary>
        </>
    )
}

function Buggy()
{
    throw new Error('Error');
    return <h1>Buggy!</h1>
}

export default ErrorHandlingApp

class ErrorBoundary extends Component {
    state = {hasError:false}
    
    static getDerivedStateFromError()
    {
        return {hasError:true}
    }

    componentDidCatch(error, errorInfo)
    {
        console.log(error, errorInfo)
        // logToTheServer(error, errorInfo)
    }

    render()
    {
        if(this.state.hasError)
        {
            return this.props.fallback;
        }
        return this.props.children;
    }
}
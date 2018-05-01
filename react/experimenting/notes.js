//We can define a react component with a regular function like so
function Heading(props){
    return <h1>This is the heading component defined by a normal function.</h1>;
}

//We can also define a component using an ES6 class
//React considers this as equivalent to a component defined via function
class Header extends React.Component{
    render(){
        return <h1>This is the heading component defined by a class.</h1>;
    }
}

ReactDOM.render(
    <Heading/>,
    document.getElementById('root')
);
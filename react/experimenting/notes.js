//To render all the components we have we just use a component that returns components
function App() {
    return (
    <div>
        <Heading/>
        <Header/>
        <User name="Bob"/>
    </div>
    );
}

//We can define a react component with a regular function like so
function Heading(props) {
    return <h1>This is the heading component defined by a normal function.</h1>;
}

//We can also define a component using an ES6 class
//React considers this as equivalent to a component defined via function
class Header extends React.Component {
    render() {
        return <h1>This is the heading component defined by a class.</h1>;
    }
}

//We can use the props of a component to define things within that components
//For instance, passing a user name
//If you look at the App component you'll see we passed the value in
function User(props){
        return <p>Hello, {props.name}</p>;
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
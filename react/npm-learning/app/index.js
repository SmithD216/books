const React = require('react');
const ReactDOM = require('react-dom');

function Tester(props){
    return(<h1>It works!</h1>);
}

function App(props){
    return <Tester />;
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
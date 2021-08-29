import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

const color = Math.random() >0.5? 'green':'red';
//React component is a simple function
const App = (props) => {
    return (
        <h2 className="text-center">
            {props.headermessage}
        </h2>
    );
};
// JSX sample
    // <h2 className="text-center" style = {{color}}>
    //     Hello React with JSX!! -- {Math.random()} 
    // </h2>,
    // 

App.propTypes = {
    headermessage: PropTypes.string.isRequired
};

App.defaultProps = {
    headermessage: "Hello"
};

ReactDOM.render(
    <App />,
    document.getElementById('root')
);

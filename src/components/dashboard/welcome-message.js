import './welcome-message.css';
import React from 'react';
import { render } from 'react-dom';

var marginstyle = {
    marginLeft: "10%"
};

class WelcomeMessage extends React.Component {
    render()
        {
        return (
            <div className="Body">
                <header className="welcome" style={marginstyle}>
                    <p>
                        GOOD FOOD IS
                    </p>
                    <br></br>
                    <p>
                        GOOD MOOD.
                    </p>
                </header>
            </div>
        );
        }
}

export default WelcomeMessage;

import React from 'react';
import ReactDOM from 'react-dom';

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            color: "green",
            colorNumber: 1
        };
    }

    componentDidMount() {
        this.timerId = setInterval(() => {
            if (this.state.colorNumber > 3) {
                this.setState({
                    colorNumber: 1
                })
            } else {
                this.setState({
                    colorNumber: this.state.colorNumber + 1
                })
            }
            switch (this.state.colorNumber) {
                case 1:
                    this.setState({
                        color: "green",
                    })
                    break;
                case 2:
                    this.setState({
                        color: "blue",
                    })
                    break;
                case 3:
                    this.setState({
                        color: "red",
                    })
                    break;

                default:
                    break;
            }
            this.tick();
        }, 1000);
    }

    componentWillMount() {
        clearInterval(this.timerId);
    }

    tick() {
        this.setState({
            date: new Date()
        })
    }

    render() {
        return (
            <header className="App-header">
                <div>
                    <h1>Welcome, Lamar!</h1>
                    <h2>The time is {<span style={{ color: this.state.color }}>{this.state.date.toLocaleTimeString()}</span>}</h2>
                </div>
            </header >
        )
    }
}

export default Clock;
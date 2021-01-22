import React, { Component } from 'react';
import "./styles/index.css";

class Side_bar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            startStop: '',
            finishStop: ''
        };

        this.stops = this.stops.bind(this);
    }

    stops(event) {
        const value = event.target.value;
        const name = event.target.name;

        this.setState({
            [name]: value
        });
    }

    search(event) {
        this.props.updateData(this.state.name)
        event.preventDefault();
    }

    render() {
        return (
            <div className="directions" onSubmit={this.search}>
                <p className="chooseDirection">
                    Вибір напрямку
                </p>
                    <input name="startStop" type="text" placeholder="з міста" value={this.state.value}
                    onChange={this.stops} />
                <input name="finishStop" type="text" placeholder="в місто" value={this.state.value}
                    onChange={this.stops} />
                <p>
                    <input type="submit" value="Пошук" />
                </p>
            </div>
        );
    }
}

export default Side_bar;
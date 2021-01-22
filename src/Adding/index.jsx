import React, { Component } from 'react';


export default class Adding extends Component {
    constructor(props) {
        super(props);

        this.onChangeBus_id = this.onChangeBus_id.bind(this);
        this.onChangeStart_stop = this.onChangeStart_stop.bind(this);
        this.onChangeFinish_stop = this.onChangeFinish_stop.bind(this);
        this.onChangeTicket_cost = this.onChangeTicket_cost.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);

        this.state = {
            bus_id: 0,
            start_stop: '',
            finish_stop: '',
            ticket_cost: 0,
            date: '',
            directions: []
        }
    }

    componentDidMount() {
        this.setState({
            directions: ['test direction'],
            bus_id: 'test bus_id'
        })
    }

    onChangeBus_id(e) {
        this.setState({
            bus_id: e.target.value
        });
    }

    onChangeStart_stop(e) {
        this.setState({
            start_stop: e.target.value
        });
    }

    onChangeFinish_stop(e) {
        this.setState({
            finish_stop: e.target.value
        });
    }

    onChangeTicket_cost(e) {
        this.setState({
            ticket_cost: e.target.value
        });
    }

    onChangeDate(e) {
        this.setState({
            date: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        const direction = {
            bus_id: this.state.bus_id,
            start_stop: this.state.start_stop,
            finish_stop: this.state.finish_stop,
            ticket_cost: this.state.ticket_cost,
            date: this.state.date,
        }

        console.log(direction);

        window.location = '/';
    }

    render() {
        return (
            <div>
                <h3>Create New Directions</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Bus_id: </label>
                        <select ref="directionInput"
                            required
                            className="form-control"
                            value={this.state.bus_id}
                            onChange={this.onChangeBus_id}>
                            {
                                this.state.directions.map(function (direction) {
                                    return <option
                                        key={direction}
                                        value={direction}>{direction}
                                    </option>;
                                })
                            }
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Start_stop: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.start_stop}
                            onChange={this.onChangeStart_stop}
                        />
                    </div>
                    <div className="form-group">
                        <label>Finish_stop: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.finish_stop}
                            onChange={this.onChangeFinish_stop}
                        />
                    </div>
                    <div className="form-group">
                        <label>Ticket_cost: </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.ticket_cost}
                            onChange={this.onChangeTicket_cost}
                        />
                    </div>
                    <div className="form-group">
                        <label>Date: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.date}
                            onChange={this.onChangeDate}
                        />
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Create Direction" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}
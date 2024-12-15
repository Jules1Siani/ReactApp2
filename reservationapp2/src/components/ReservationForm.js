import React, { Component } from 'react';

class ReservationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      zone: '',
      timeslot: '',
    };
  }

  handleZoneChange = (e) => {
    this.setState({ zone: e.target.value });
  };

  handleTimeslotChange = (e) => {
    this.setState({ timeslot: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { zone, timeslot } = this.state;
    if (zone && timeslot) {
      this.props.addReservation(zone, timeslot);
      this.setState({ zone: '', timeslot: '' });
    } else {
      alert('Please select a zone and a time slot.');
    }
  };

  render() {
    const timeslots = ['09:00 - 12:00', '12:00 - 15:00', '15:00 - 18:00'];
    return (
      <div className="container mt-4">
        <h2 className="text-success">Reservation</h2>
        <form onSubmit={this.handleSubmit} className="border p-4 rounded bg-light">
          <div className="mb-3">
            <label className="form-label">Zone</label>
            <select
              value={this.state.zone}
              onChange={this.handleZoneChange}
              className="form-select"
            >
              <option value="">Select a zone</option>
              <option value="Peace Forest">Peace Forest</option>
              <option value="Mountain Park">Mountain Park</option>
              <option value="Swan Lake">Swan Lake</option>
              <option value="Botanical Garden">Botanical Garden</option>
            </select>
          </div>
          <div className="mb-3">
            <label className="form-label">Time Slot</label>
            <select
              value={this.state.timeslot}
              onChange={this.handleTimeslotChange}
              className="form-select"
            >
              <option value="">Select a time slot</option>
              {timeslots.map((slot, index) => (
                <option key={index} value={slot}>{slot}</option>
              ))}
            </select>
          </div>
          <button type="submit" className="btn btn-success w-100">Reserve</button>
        </form>
      </div>
    );
  }
}

export default ReservationForm;

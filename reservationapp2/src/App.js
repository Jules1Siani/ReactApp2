import React, { Component } from 'react';
import ZoneList from './components/ZoneList';
import ReservationForm from './components/ReservationForm';
import ReservationList from './components/ReservationList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reservations: [],
    };
  }

  addReservation = (zone, timeslot) => {
    this.setState((prevState) => ({
      reservations: [...prevState.reservations, { zone, timeslot }],
    }));
  };

  render() {
    return (
      <>
        <nav className="navbar navbar-dark bg-primary">
          <div className="container-fluid">
            <span className="navbar-brand mb-0 h1">Reservation System</span>
          </div>
        </nav>
        <div className="container mt-4">
          <ZoneList />
          <ReservationForm addReservation={this.addReservation} />
          <ReservationList reservations={this.state.reservations} />
        </div>
      </>
    );
  }
}

export default App;

import React, { Component } from 'react';

class ReservationList extends Component {
  render() {
    const { reservations } = this.props;
    return (
      <div className="container mt-4">
        <h2 className="text-warning">Confirmed Reservations</h2>
        {reservations.length > 0 ? (
          <ul className="list-group">
            {reservations.map((reservation, index) => (
              <li key={index} className="list-group-item">
                <strong>Zone:</strong> {reservation.zone} - <strong>Time Slot:</strong> {reservation.timeslot}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-muted">No reservations at the moment.</p>
        )}
      </div>
    );
  }
}

export default ReservationList;

import React, { Component } from 'react';

class ZoneList extends Component {
  render() {
    const zones = ['Peace Forest', 'Mountain Park', 'Swan Lake', 'Botanical Garden'];
    return (
      <div className="container mt-4">
        <h2 className="text-primary">Conservation Areas</h2>
        <ul className="list-group">
          {zones.map((zone, index) => (
            <li key={index} className="list-group-item">{zone}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ZoneList;

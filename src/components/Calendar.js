import React, { Component } from "react";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Navigation from './Navigation';

class Calendarc extends Component {
    state = {
      date: new Date(),
    }

    onChange = date => this.setState({ date })

    render() {
      return (
        <div>
        <Navigation titulo="Notardo"><a>Hola</a></Navigation>
          <Calendar
            onChange={this.onChange}
            value={this.state.date}
          />
          {/* Temporal-inicio */}
          <div>
          <button className="btn btn-primary mt-3">
            <a className="text-white text-decoration-none" href="/CreateTask">Tabla de tareas</a>
          </button>

          <button className="btn btn-primary mt-3 ml-5">
            <a className="text-white text-decoration-none" href="/CreateNote">Tabla de notas</a>
          </button>
          </div>
         {/* Temporal-final */}
        </div>
      );
    }
  }

export default Calendarc

// Schedule.js
import React from "react";
import './Schedule.css';

const Schedule = () => {
  return (
    <div className="schedule-container">
      <h1 className="schedule-title">Event Itinerary</h1>

      {/* Day 1 */}
      <section className="schedule-day">
        <h2>Day 1 – 18th September 2025 (Thursday)</h2>
        <p className="schedule-venue">Venue: Anna Auditorium, VIT (Morning Session)</p>
        <table className="schedule-table">
          <thead>
            <tr>
              <th>Time</th>
              <th>Event</th>
              <th>Venue</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td data-label="Time">08:30 – 09:30 AM</td>
              <td data-label="Event">Registration (CS Hall Help Desk)</td>
              <td data-label="Venue">CS Hall Help Desk</td>
            </tr>
            <tr>
              <td data-label="Time">09:30 – 09:45 AM</td>
              <td data-label="Event">Inaugural Session / INSA-INYAS Video / High Tea</td>
              <td data-label="Venue">Anna Auditorium</td>
            </tr>
            <tr>
              <td data-label="Time">09:45 – 10:00 AM</td>
              <td data-label="Event">Welcome & Lamp Lighting</td>
              <td data-label="Venue">Anna Auditorium</td>
            </tr>
            <tr>
              <td data-label="Time">10:00 – 10:15 AM</td>
              <td data-label="Event">Welcome Address by INYAS Chairperson</td>
              <td data-label="Venue">Anna Auditorium</td>
            </tr>
            <tr>
              <td data-label="Time">10:15 – 10:30 AM</td>
              <td data-label="Event">Presidential Address by VIT Chancellor</td>
              <td data-label="Venue">Anna Auditorium</td>
            </tr>
            <tr>
              <td data-label="Time">10:30 – 10:45 AM</td>
              <td data-label="Event">INYS Activities by Secretary</td>
              <td data-label="Venue">Anna Auditorium</td>
            </tr>
            <tr>
              <td data-label="Time">10:45 – 11:30 AM</td>
              <td data-label="Event">Address by Chief Guest</td>
              <td data-label="Venue">Anna Auditorium</td>
            </tr>
            <tr>
              <td data-label="Time">11:30 – 11:35 AM</td>
              <td data-label="Event">Vote of Thanks</td>
              <td data-label="Venue">Anna Auditorium</td>
            </tr>
            <tr>
              <td data-label="Time">11:35 – 11:45 AM</td>
              <td data-label="Event">Prize Distribution / Group Photo / High Tea</td>
              <td data-label="Venue">Anna Auditorium</td>
            </tr>
            <tr>
              <td data-label="Time">11:45 AM – 01:15 PM</td>
              <td data-label="Event">Guest of Honor Talks</td>
              <td data-label="Venue">Anna Auditorium</td>
            </tr>
          </tbody>
        </table>

        <p className="schedule-venue">Venue: Dr. Ambedkar Auditorium (Afternoon Session)</p>
        <table className="schedule-table">
          <tbody>
            <tr>
              <td data-label="Time">02:00 – 04:00 PM</td>
              <td data-label="Event">Plenary Session 1 – 4 Keynote Speakers</td>
              <td data-label="Venue">Dr. Ambedkar Auditorium</td>
            </tr>
            <tr>
              <td data-label="Time">04:00 – 04:30 PM</td>
              <td data-label="Event">High Tea</td>
              <td data-label="Venue">Dr. Ambedkar Auditorium</td>
            </tr>
            <tr>
              <td data-label="Time">04:30 – 05:50 PM</td>
              <td data-label="Event">4 Keynote Speakers</td>
              <td data-label="Venue">Dr. Ambedkar Auditorium</td>
            </tr>
            <tr>
              <td data-label="Time">05:50 – 06:35 PM</td>
              <td data-label="Event">Panel 1 – Topic TBD</td>
              <td data-label="Venue">Dr. Ambedkar Auditorium</td>
            </tr>
          </tbody>
        </table>

        <p className="schedule-venue">Evening Activities</p>
        <table className="schedule-table">
          <tbody>
            <tr>
              <td data-label="Time">06:45 – 07:30 PM</td>
              <td data-label="Event">Campus Walk/Tour (Open EV Vehicle)</td>
              <td data-label="Venue">Campus</td>
            </tr>
            <tr>
              <td data-label="Time">07:30 – 08:30 PM</td>
              <td data-label="Event">Light Music / Stage Performance + Dinner</td>
              <td data-label="Venue">Open Stage</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Day 2 */}
      <section className="schedule-day">
        <h2>Day 2 – 19th September 2025 (Friday)</h2>
        <p className="schedule-venue">Venue: Dr. Ambedkar Auditorium</p>
        <table className="schedule-table">
          <thead>
            <tr>
              <th>Time</th>
              <th>Event</th>
              <th>Venue</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td data-label="Time">09:00 – 10:30 AM</td>
              <td data-label="Event">Plenary Session 2 – Keynote Talks</td>
              <td data-label="Venue">Dr. Ambedkar Auditorium</td>
            </tr>
            <tr>
              <td data-label="Time">10:30 – 12:30 PM</td>
              <td data-label="Event">Panel Discussion 2 + Poster Session</td>
              <td data-label="Venue">Dr. Ambedkar Auditorium</td>
            </tr>
            <tr>
              <td data-label="Time">12:30 – 01:30 PM</td>
              <td data-label="Event">Lunch</td>
              <td data-label="Venue">VIT Dining</td>
            </tr>
            <tr>
              <td data-label="Time">02:00 – 05:00 PM</td>
              <td data-label="Event">Parallel Workshops / Competitions / Demos</td>
              <td data-label="Venue">Various Labs & Halls</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Day 3 */}
      <section className="schedule-day">
        <h2>Day 3 – 20th September 2025 (Saturday)</h2>
        <p className="schedule-venue">Venue: VIT Campus</p>
        <table className="schedule-table">
          <thead>
            <tr>
              <th>Time</th>
              <th>Event</th>
              <th>Venue</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td data-label="Time">09:30 – 11:30 AM</td>
              <td data-label="Event">Science Exhibition + Project Demonstrations</td>
              <td data-label="Venue">Tech Park</td>
            </tr>
            <tr>
              <td data-label="Time">11:30 – 12:00 PM</td>
              <td data-label="Event">Closing Ceremony & Feedback</td>
              <td data-label="Venue">Dr. Ambedkar Auditorium</td>
            </tr>
            <tr>
              <td data-label="Time">12:00 – 01:00 PM</td>
              <td data-label="Event">Valedictory Address + Certificate Distribution</td>
              <td data-label="Venue">Dr. Ambedkar Auditorium</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default Schedule;
// Schedule.js
import React from "react";


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
              <td>08:30 – 09:30 AM</td>
              <td>Registration (CS Hall Help Desk)</td>
              <td>CS Hall Help Desk</td>
            </tr>
            <tr>
              <td>09:30 – 09:45 AM</td>
              <td>Inaugural Session / INSA-INYAS Video / High Tea</td>
              <td>Anna Auditorium</td>
            </tr>
            <tr>
              <td>09:45 – 10:00 AM</td>
              <td>Welcome & Lamp Lighting</td>
              <td>Anna Auditorium</td>
            </tr>
            <tr>
              <td>10:00 – 10:15 AM</td>
              <td>Welcome Address by INYAS Chairperson</td>
              <td>Anna Auditorium</td>
            </tr>
            <tr>
              <td>10:15 – 10:30 AM</td>
              <td>Presidential Address by VIT Chancellor</td>
              <td>Anna Auditorium</td>
            </tr>
            <tr>
              <td>10:30 – 10:45 AM</td>
              <td>INYS Activities by Secretary</td>
              <td>Anna Auditorium</td>
            </tr>
            <tr>
              <td>10:45 – 11:30 AM</td>
              <td>Address by Chief Guest (PSA to PM / DST Secretary / CSIR DG)</td>
              <td>Anna Auditorium</td>
            </tr>
            <tr>
              <td>11:30 – 11:35 AM</td>
              <td>Vote of Thanks</td>
              <td>Anna Auditorium</td>
            </tr>
            <tr>
              <td>11:35 – 11:45 AM</td>
              <td>Prize Distribution / Group Photo / High Tea</td>
              <td>Anna Auditorium</td>
            </tr>
            <tr>
              <td>11:45 AM – 01:15 PM</td>
              <td>Guest of Honor Talks (2 guests – details TBD)</td>
              <td>Anna Auditorium</td>
            </tr>
          </tbody>
        </table>

        <p className="schedule-venue">Venue: Dr. Ambedkar Auditorium, Technology Tower (Afternoon Session)</p>
        <table className="schedule-table">
          <tbody>
            <tr>
              <td>02:00 – 04:00 PM</td>
              <td>Plenary Session 1 – 4 Keynote Speakers (Names/Topics TBD)</td>
              <td>Dr. Ambedkar Auditorium</td>
            </tr>
            <tr>
              <td>04:00 – 04:30 PM</td>
              <td>High Tea</td>
              <td>Dr. Ambedkar Auditorium</td>
            </tr>
            <tr>
              <td>04:30 – 05:50 PM</td>
              <td>4 Keynote Speakers (Names/Topics TBD)</td>
              <td>Dr. Ambedkar Auditorium</td>
            </tr>
            <tr>
              <td>05:50 – 06:35 PM</td>
              <td>Panel 1 – Topic and Members TBD</td>
              <td>Dr. Ambedkar Auditorium</td>
            </tr>
          </tbody>
        </table>

        <p className="schedule-venue">Evening Activities</p>
        <table className="schedule-table">
          <tbody>
            <tr>
              <td>06:45 – 07:30 PM</td>
              <td>Campus Walk/Tour (Open EV Vehicle)</td>
              <td>Campus</td>
            </tr>
            <tr>
              <td>07:30 – 08:30 PM</td>
              <td>Light Music / Stage Performance + Dinner (Open Stage)</td>
              <td>Open Stage</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Day 2 */}
      <section className="schedule-day">
        <h2>Day 2 – 19th September 2025 (Friday)</h2>
        <p className="schedule-venue">Venue: Dr. Ambedkar Auditorium (Morning Session)</p>
        <table className="schedule-table">
          <tbody>
            <tr>
              <td>09:00 – 11:00 AM</td>
              <td>Plenary Session 2 – 4 Keynote Speakers (Names/Topics TBD)</td>
              <td>Dr. Ambedkar Auditorium</td>
            </tr>
            <tr>
              <td>11:00 – 11:30 AM</td>
              <td>High Tea</td>
              <td>Dr. Ambedkar Auditorium</td>
            </tr>
            <tr>
              <td>11:30 – 12:50 PM</td>
              <td>4 Keynote Speakers (Names/Topics TBD)</td>
              <td>Dr. Ambedkar Auditorium</td>
            </tr>
          </tbody>
        </table>

        <p className="schedule-venue">09:00 AM – 04:00 PM: Poster Presentation by Rural Scholars (Foodies or CS Hall)</p>

        <p className="schedule-venue">Venue: Dr. Ambedkar Auditorium (Afternoon Session)</p>
        <table className="schedule-table">
          <tbody>
            <tr>
              <td>02:00 – 04:00 PM</td>
              <td>Plenary Session 3 – 4 Keynote Speakers (Names/Topics TBD)</td>
              <td>Dr. Ambedkar Auditorium</td>
            </tr>
            <tr>
              <td>04:00 – 04:30 PM</td>
              <td>High Tea</td>
              <td>Dr. Ambedkar Auditorium</td>
            </tr>
            <tr>
              <td>04:30 – 05:50 PM</td>
              <td>4 Keynote Speakers (Names/Topics TBD)</td>
              <td>Dr. Ambedkar Auditorium</td>
            </tr>
            <tr>
              <td>05:50 – 06:35 PM</td>
              <td>Panel 2 – Topic: DST / DBT / ANRF, Members: Max 3 (Details TBD)</td>
              <td>Dr. Ambedkar Auditorium</td>
            </tr>
          </tbody>
        </table>

        <p className="schedule-venue">07:00 – 08:30 PM: Dinner at Open Stage</p>
      </section>

      {/* Day 3 */}
      <section className="schedule-day">
        <h2>Day 3 – 20th September 2025 (Saturday)</h2>
        <p className="schedule-venue">Venue: Dr. Ambedkar Auditorium (Morning Session)</p>
        <table className="schedule-table">
          <tbody>
            <tr>
              <td>09:00 – 11:35 AM</td>
              <td>Plenary Session 4 – 5 Keynote Speakers (Names/Topics TBD)</td>
              <td>Dr. Ambedkar Auditorium</td>
            </tr>
            <tr>
              <td>11:25 – 11:35 AM</td>
              <td>High Tea</td>
              <td>Dr. Ambedkar Auditorium</td>
            </tr>
          </tbody>
        </table>

        <p className="schedule-venue">INYAS Members Only Session<br/>Venue: Board Room, Dr. MGR Block</p>
        <table className="schedule-table">
          <tbody>
            <tr>
              <td>11:30 – 11:40 AM</td>
              <td>Opening Remarks by INYAS Chair</td>
              <td>Board Room</td>
            </tr>
            <tr>
              <td>11:40 – 12:00 PM</td>
              <td>INYS Activities by CC Members</td>
              <td>Board Room</td>
            </tr>
            <tr>
              <td>12:00 – 12:20 PM</td>
              <td>Flagship Programs (Speakers: Coordinators)</td>
              <td>Board Room</td>
            </tr>
            <tr>
              <td>12:20 – 12:50 PM</td>
              <td>INYAS Agenda Discussion</td>
              <td>Board Room</td>
            </tr>
            <tr>
              <td>12:50 – 01:00 PM</td>
              <td>Concluding Session</td>
              <td>Board Room</td>
            </tr>
          </tbody>
        </table>

        <p className="schedule-venue">01:00 – 02:00 PM: Lunch & Departure</p>
      </section>
    </div>
  );
};

export default Schedule;

import { useState } from "react";
import Table from "react-bootstrap/Table";
import { useSelector } from "react-redux";

function EventTable() {
  const events = useSelector((state) => state);

  console.log(events, "Events");

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Event name</th>
          <th>Event type </th>
          <th>Event Start date</th>
          <th>Event end date</th>
          <th> Event description</th>
          <th>Event handled by </th>
          <th>Event Organisation</th>
          <th>Total numberof sub Events</th>
        </tr>
      </thead>
      <tbody>
        {events.allEvents.events.map((value, index) => {
          return (
            <tr>
              <td>{value?.eventName}</td>
              <td>{value?.eventType}</td>
              <td>{value?.eventStartDate?.value}</td>
              <td>{value?.eventEndDate?.value}</td>
              <td>{value?.eventDesc}</td>
              <td>{value?.eventhandleBy}</td>
              <td>{value?.eventOrg}</td>
              <td>{value?.eventsubType}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}

export default EventTable;

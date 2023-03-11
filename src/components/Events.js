import React, { useState } from "react";
import DatePicker from "react-datepicker";
import EventTable from "./EventTable";
import { useDispatch } from "react-redux";
import { setEvents } from "../redux/actions/EventActions";

function Events() {
  const eventData = {
    eventName: "",
    eventType: "",
    eventStartDate: new Date(),
    eventEndDate: new Date(),
    eventDesc: "",
    eventhandleBy: "",
    eventOrg: "",
    eventsubType: "",
  };
  const [formData, setFormData] = useState(eventData);
  const dispatch = useDispatch();

  // function handleChange(value, eventname) {
  //   console.log(value, eventname, "HandleChange");
  //   let eventData = {
  //     ...formData,
  //   };
  //   eventData[eventname] = value;
  //   setFormData(eventData);
  // }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevProps) => ({
      ...prevProps,
      [name]: value,
    }));
  };

  function SubmitEvent(event) {
    event.preventDefault();
    dispatch(setEvents(formData));
    setFormData(eventData);
  }

  return (
    <div className="container">
      <form
        onSubmit={(event) => {
          SubmitEvent(event);
        }}
      >
        <div className="row">
          <div className="col-6">
            <div class="form-group">
              <label>Event Name</label>
              <input
                // onChange={(e) => {
                //   handleChange(e.target.value, "eventName");
                // }}
                placeholder="Event Name"
                onChange={handleChange}
                value={formData.eventName}
                name="eventName"
                class="form-control"
              ></input>
            </div>
          </div>
          <div className="col-6">
            <div class="form-group">
              <label>Event Type</label>
              <select
                placeholder="Event Type"
                onChange={handleChange}
                value={formData.eventType}
                name="eventType"
                class="form-select"
              >
                <option selected>Choose Event type</option>
                <option value="Sports">Sports</option>
                <option value="Music">Music</option>
                <option value="General">General</option>
                <option value="Children">Children</option>
                <option value="School">School</option>
              </select>
            </div>
          </div>
          <div className="col-6">
            <div class="form-group">
              <label>Event Start Date</label>
              <DatePicker
                onSelect={handleChange}
                selected={formData.eventStartDate}
                onChange={formData.eventStartDate}
                name="eventStartDate"
              ></DatePicker>
            </div>
          </div>
          <div className="col-6">
            <div class="form-group">
            <label>Event End Date</label>

              <DatePicker
                onSelect={handleChange}
                selected={formData.eventEndDate}
                onChange={formData.eventEndDate}
                name="eventEndDate"
              ></DatePicker>
            </div>
          </div>
          <div className="col-6">
            <div class="form-group">
              <label>Event Description</label>
              <input
                placeholder="Event Description"
                onChange={handleChange}
                value={formData.eventDesc}
                name="eventDesc"
                class="form-control"
              ></input>
            </div>
          </div>
          <div className="col-6">
            <div class="form-group">
              <label>Event Handled by</label>
              <input
                placeholder="Event Handled by"
                onChange={handleChange}
                value={formData.eventhandleBy}
                name="eventhandleBy"
                class="form-control"
              ></input>
            </div>
          </div>
          <div className="col-6">
            <div class="form-group">
              <label>Event Organisation</label>

              <input
                placeholder="Event Organisation"
                onChange={handleChange}
                value={formData.eventOrg}
                name="eventOrg"
                class="form-control"
              ></input>
            </div>
          </div>
          <div className="col-6">
            <div class="form-group">
              <label>Total Sub Events</label>
              <input
                class="form-control"
                placeholder="Event Sub Events"
                onChange={handleChange}
                value={formData.eventsubType}
                name="eventsubType"
              ></input>
            </div>
          </div>

          <div className="p-4 mt-2">
            <button className="btn btn-primary" type="submit">
              Submit
            </button>
          </div>
        </div>
      </form>
      <EventTable />
    </div>
  );
}

export default Events;

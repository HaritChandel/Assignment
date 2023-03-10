import React, { useState } from "react";
import DatePicker from "react-datepicker";
import EventTable from "./EventTable";
import { useDispatch } from "react-redux";
import { setEvents } from "../redux/actions/EventActions";

function Events() {
  const eventData = {
    eventName: {
      value: "",
    },
    eventType: {
      value: "",
    },
    eventStartDate: {
      value: new Date(),
    },
    eventEndDate: {
      value: new Date(),
    },
    eventDesc: {
      value: "",
    },
    eventhandleBy: {
      value: "",
    },
    eventOrg: {
      value: "",
    },
    eventsubType: {
      value: "",
    },
  };
  const [formData, setFormData] = useState(eventData);
  const dispatch = useDispatch();

  function handleChange(value, eventname) {
    console.log(value, eventname, "HandleChange");
    let eventData = {
      ...formData,
    };
    eventData[eventname] = value;
    setFormData(eventData);
  }

  function SubmitEvent(event) {
    event.preventDefault();
    dispatch(setEvents(formData));
    setFormData(eventData)
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
                onChange={(e) => {
                  handleChange(e.target.value, "eventName");
                }}
                value={formData.eventName.value}
                class="form-control"
              ></input>
            </div>
          </div>
          <div className="col-6">
            <div class="form-group">
              <label>Event Type</label>
              <select
                onChange={(e) => {
                  handleChange(e.target.value, "eventType");
                }}
                value={formData.eventType.value}
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
                onSelect={(e) => {
                  handleChange(e, "eventStartDate");
                }}
                // selected={formData.eventStartDate.value}
              ></DatePicker>
            </div>
          </div>
          <div className="col-6">
            <div class="form-group">
              <DatePicker
                onSelect={(e) => {
                  console.log(e, "datePicker");
                  handleChange(e, "eventEndDate");
                }}
                // selected={formData.eventEndDate.value}
              ></DatePicker>
            </div>
          </div>
          <div className="col-6">
            <div class="form-group">
              <label>Event Description</label>
              <input
                onChange={(e) => {
                  handleChange(e.target.value, "eventDesc");
                }}
                value={formData.eventDesc.value}
                class="form-control"
              ></input>
            </div>
          </div>
          <div className="col-6">
            <div class="form-group">
              <label>Event Handled by</label>
              <input
                onChange={(e) => {
                  handleChange(e.target.value, "eventhandleBy");
                }}
                value={formData.eventhandleBy.value}
                class="form-control"
              ></input>
            </div>
          </div>
          <div className="col-6">
            <div class="form-group">
              <label>Event Organisation</label>

              <input
                onChange={(e) => {
                  handleChange(e.target.value, "eventOrg");
                }}
                value={formData.eventOrg.value}
                class="form-control"
              ></input>
            </div>
          </div>
          <div className="col-6">
            <div class="form-group">
              <label>Total Sub Events</label>
              <input
                onChange={(e) => {
                  handleChange(e.target.value, "eventsubType");
                }}
                class="form-control"
                value={formData.eventsubType.value}
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

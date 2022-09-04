import React, { useState } from "react";
import axios from "axios";
import "./form.css";


function PostForm({ fetchData}) {
  const [values, setValue] = useState({});

  const handleChange = (event) => {
    setValue({ ...values, [event.target.name]: event.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("/api/workouts", values).then((res) => {
      fetchData()
    });

    setValue('')
  };




  return (
    <div className="main">
      <form onSubmit={handleSubmit}>
        <h1>Add New Post</h1>
        <input
          type="text"
          name="title"
          value={values.title || ""}
          onChange={handleChange}
          required
          placeholder="Title...."
        />
        <input
          type="number"
          name="reps"
          value={values.reps || ""}
          onChange={handleChange}
          required
          placeholder="Reps...."
        />
        <input
          type="number"
          name="load"
          value={values.load || ""}
          onChange={handleChange}
          required
          placeholder="Load...."
        />
        <button className="btn btn-primary w-50 my-3">Add Post</button>
      </form>
    </div>
  );
}

export default PostForm;

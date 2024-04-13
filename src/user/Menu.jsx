import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const Write = () => {
  const [value, setValue] = useState("");
  console.log(value);
  return (
    <div className="add bg-blue-400">
      <div className="content">Content</div>
      <input type="text" placeholder="Title" />
      <div className="editcontainer">
        <ReactQuill
          theme="snow"
          value={value}
          onChange={setValue}
          style={{ width: "60%", marginLeft: "20%", borderRadius: "40%" }}
        />
      </div>
      <div className="menu">
        <div className="item">
          <h1>Publish</h1>
          <span>
            <b>Status:</b>Draft
          </span>
          <span>
            <b>Visibility:</b>Public
          </span>
          <input type="file" id="file" name="" />

          <div className="buttons">
            <button className="btn">Save as draft</button>
            <button className="btn">Updated</button>
          </div>
        </div>
        <div className="item"></div>
      </div>
    </div>
  );
};

export default Write;

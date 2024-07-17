import React from "react";
import { useState } from "react";
function Form({ colorValue }) {
  const [color, setColor] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    colorValue(color);
  }
  return (
    <section className="container">
      <h4>color generator</h4>
      <form action="" className="color-form" onSubmit={handleSubmit}>
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        <input
          type="text"
          onChange={(e) => setColor(e.target.value)}
          value={color}
          placeholder="#f15025"
        />
        <button type="submit" className="btn" style={{ background: color }}>
          Submit
        </button>
      </form>
    </section>
  );
}

export default Form;

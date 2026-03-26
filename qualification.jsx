import React from "react";
import "../components/qualification.css";

function Qualification() {
  return (
    <section id="qualification" className="qualification">
      <h2>Qualification</h2>

      <div className="timeline">

        <div className="card left">
          <h3>B.Tech in Computer Science(AIML)</h3>
          <p>sandip university (2024 - 2028)</p>
        </div>

        <div className="card right">
          <h3>Intermediate</h3>
          <p>narayana junior College (2022 - 2024)</p>
        </div>

        <div className="card left">
          <h3>SSC</h3>
          <p>DCSR zphs (2019 - 2022)</p>
        </div>

      </div>
    </section>
  );
}

export default Qualification;
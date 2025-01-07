import React, { useState } from "react";
import "./Databot.css";
import Card from "../utils/Cards/Card";


import { Progress } from "antd";
import DonutChart  from "../utils/PieChart";


function Databot() {
  const [option, setOption] = useState("");
  const data = [
    "Give me summary of data",
    "User engangement change vs last week",
    "Provide an overview of this week's IAP Revenue performance",
    "What are the factors of drop in our Sales Revenue this week",
   ];

  return (
    <div className="main_container">
      <div className="sidebar">
        <aside className="icons">
          <div className="logo">A</div>
          <div className="just_a_border"></div>
          <div className="icon">⚙️</div>
          <div className="icon">📊</div>
          <div className="icon">🔲</div>
          <div className="icon">➕</div>
        </aside>
      </div>
      <div className="mid_section">
        <div className="heading">
          <div className="title">Databot</div>
          <div className="options_label">
            Connected Data:
            <select id="dropdown" value={option}>
              <option value="Clothing Sales">Clothing Sales</option>
              <option value="Ecommerce">Ecommerce</option>
              <option value="HealthCare">HealthCare</option>
            </select>
          </div>
        </div>
        <div className="just_a_border"></div>
        <div className="Ai_title">
          <span className="Ai">AI Conversational</span> Data Analyst
        </div>
        <p className="content">
          Your personal AI data assistant. Seamlessly integrate your database
          for rapid, informed decision-making. Get instant analysis and answers,
          optimizing growth metrics daily. Ask anything, get analyst-grade
          responses.
        </p>
        <div className="card_section">
          {data.map((item, i) => (
            <span>
              <Card text={item} />
            </span>
          ))}
        </div>
        <div className="Summary">
          <div className="heading">Summary</div>
          <div className="summary_section">
            <p>
              Supplier references refer to information provided by a supplier
              that can be used to verify their capabilities and experience. This
              information is typically used during the procurement process to
              evaluate potential vendors. Here are some samples of supplier
              references{" "}
            </p>
            <h5>Basic Reference:</h5>
            <ul>
              <li>Supplier Name: Acme Corporation Contact</li>
              <li>Name: John Smith, Sales Manager</li>
              <li> Phone Number: (555) 555-5555</li>
              <li>Email Address: [email address removed]</li>
              <li>
                Relationship: Supplied office furniture for our headquarters in
                2023.{" "}
              </li>
            </ul>

            <h5> Detailed Reference:</h5>
            <ul>
              <li> Name: Global Tech Solutions</li>
              <li>Contact Name: Jane Doe, Account Manager</li>
              <li> Phone Number: (555) 555-1234 </li>
              <li> Email Address: [email address removed]</li>
            </ul>
          </div>
        </div>
        <div className="search_container">
          <input
            type="text"
            className="search_input"
            placeholder="Ask your AI for data summary..."
          />
          <button className="support_button">
            <span>Support</span>
          </button>
        </div>
      </div>
      <div className="last_section">
        <div className="title">Data Visual</div>
        <div className="just_a_border"></div>
        <h3>Data Overview</h3>
        <div className="overview_section">
         <div className="metricss">
         <div className="metric">
            <span>Total Number of rows</span>
            <strong>34.1M</strong>
          </div>
          <div className="metric">
            <span>Total Number of Columns</span>
            <strong>2</strong>
          </div>
         </div>
          <div className="metric">
            <h6>MetaData</h6>
            <div className="metadata">
              <table>
                <tr>
                  <td classname="key">Name</td>
                  <td>Samples</td>
                </tr>
                <tr>
                  <td classname="key">Created at</td>
                  <td>20 jul 2022</td>
                </tr>
                <tr>
                  <td classname="key">Realtes to</td>
                  <td>dim_book</td>
                </tr>
                <tr>
                  <td classname="key">Connection</td>
                  <td>Postgre</td>
                </tr>
              </table>
            </div>
          </div>
          <div className="metric" style={{ width: "200px" }}>
            <h6>SLA</h6>
            <Progress percent={100} />
            <div className="report">
              <h6>Test Report</h6>
              <span>See All</span>
            </div>
            <span>100% score</span>
            <Progress percent={100} />
          </div>
        </div>
        <h5>Data Quality</h5>
        <div className="data_quality">
          <div className="charts">
            <div className="metric" style={{ width: "200px" ,height:"200px" }} >
            <DonutChart />
            </div>
            <div className="metric"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Databot;

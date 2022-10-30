import React, { useState } from "react";
import { InvitationCodePage } from "./entities/client/pages/InvitationCodePage";
import { ServiceRegistrationPage } from "./entities/service/pages/ServiceRegistrationPage";
import "./App.css";

const App = () => {
  const [tab, setTab] = useState("client");

  return (
    <div style={{ margin: "20px" }}>
      <div>Cлужба такси</div>

      {/* Temp block */}
      <h1>Кто ты?</h1>
      <ul>
        <li onClick={() => setTab("client")}>Я клиент</li>
        <li onClick={() => setTab("driver")}>Я водитель</li>
        <li onClick={() => setTab("service-registration")}>Зарегистрировать службу такси</li>
      </ul>

      <div style={{ border: "1px solid gray", padding: "10px", borderRadius: "5px" }}>
        {tab === "client" && <InvitationCodePage />}
        {tab === "driver" && <div>появится позже</div>}
        {tab === "service-registration" && <ServiceRegistrationPage />}
      </div>
    </div>
  );
};

export default App;

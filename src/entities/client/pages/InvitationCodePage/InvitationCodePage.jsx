import React, { useState } from "react";
import { RideOrderPage } from "../RideOrderPage";

const InvitationCodePage = () => {
  // Temp! Will history push
  const [map, setMap] = useState(false);

  const onSendCode = () => {
    // проверка службы такси и подключение юзера к ней
    // хистори пуш на карту с месторасположением и такси где можно сделать заказ
    setMap(true); // Temp! Will history push
  };

  if (map) {
    return <RideOrderPage />;
  }

  return (
    <div>
      <div>Введи код приглашения службы такси своего города</div>
      <div>
        <input />
        <button onClick={onSendCode}>Подтвердить</button>
      </div>
    </div>
  );
};

export default InvitationCodePage;

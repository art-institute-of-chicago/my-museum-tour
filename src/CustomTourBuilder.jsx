import React from "react";
import { useState } from "react";

const CustomTourBuilder = (props) => {
  const { initMessage } = props;
  const [message, setMessage] = useState(initMessage);
  return (
    <>
      <h1 className="f-headline" style={{ marginBottom: "20px" }}>
        {message}
      </h1>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
    </>
  );
};

export default CustomTourBuilder;

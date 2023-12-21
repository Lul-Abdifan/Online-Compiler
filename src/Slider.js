import React from "react";
import { CircleLoader } from "react-spinners";

const Loading = () => {
  return (
    <div
      style={{
        backgroundColor: "#112121",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <CircleLoader color="#36d7b7" loading size={250} speedMultiplier={1} />
    </div>
  );
};

export default Loading;

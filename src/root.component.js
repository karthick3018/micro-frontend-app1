import React from "react";
import CustomComponent from "./custom";

export default function Root(props) {
  return (
    <div>
      <p>hey react here!</p>
      <CustomComponent />
      <section>{props.name} is mounted!</section>
    </div>
  );
}

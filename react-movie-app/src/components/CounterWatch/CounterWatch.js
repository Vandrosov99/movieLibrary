import React from "react";
import "./CounterWatch.css";
import "../../styles/Common.css";
export default function CounterWatch(props) {
  const { count } = props;
  return (
    <div className='counterContainer'>
      <h1 className='counterWatch card'>You will watch {count} films.</h1>
    </div>
  );
}

import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const ToyInfo = () => {
  const [toyInfo, setToyInfo] = useState([]);
  const url = "http://localhost:3000/toyInfo";
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setToyInfo(data));
  }, []);

  return (
    <div>
      <h2></h2>
    </div>
  );
};

export default ToyInfo;

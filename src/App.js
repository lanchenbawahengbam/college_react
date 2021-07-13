import React, { useEffect } from "react";

function App() {
  const [students, setStudents] = React.useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/students")
      .then((result) => result.json())
      .then((res) => {
        setStudents(res);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      {students.map((elm, idx) => (
        <div key={idx}>
          Student Name
          <br />
          {elm.name}
          <br />
          <br />
          <br />
          Student Department
          <br />
          {elm.dept}
          <br />
          <br />
          <br />
          Student Roll
          <br />
          {elm.roll}
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
      ))}
    </div>
  );
}

export default App;

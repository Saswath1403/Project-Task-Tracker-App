import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "DSA Lecture",
      day: "Aug 24th at 11:00am",
      reminder: true,
    },
    {
      id: 2,
      text: "Lunch Break",
      day: "Aug 24th at 2:00pm",
      reminder: false,
    },
    {
      id: 3,
      text: "TA Session",
      day: "Aug 24th at 6:30pm",
      reminder: true,
    },
  ]);


  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks} />
    </div>
  );
};

export default App;

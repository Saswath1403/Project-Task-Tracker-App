import Task from './Tasks.js'

const Tasks = ({ tasks }) => {
  return (
    <>
      {tasks.map((tasks) => (
        <h3 key={tasks.id}> tasks={tasks}</h3>
      ))}
    </>
  );
};

export default Tasks;

import NewTask from "./NewTask";
export default function Tasks({ tasks, onAddTask, onDeleteTask }) {
  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
      <NewTask onAddTask={onAddTask} onDeleteTask={onDeleteTask} />
      {tasks.length === 0 ? (
        <p className="text-stone-800 my-4">
          This project does not have any task yet
        </p>
      ) : (
        <ul className="p-4 rounded-md bg-stone-100 mt-6">
          {tasks.map((task) => (
            <li key={task.id} className="flex justify-between my-4">
              <span>{task.text}</span>
              <button
                onClick={() => onDeleteTask(task.id)}
                className="text-stone-700 hover:text-red-500"
              >
                Clear
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

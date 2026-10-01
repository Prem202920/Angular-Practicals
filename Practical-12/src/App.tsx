import { useState } from 'react';

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [task, setTask] = useState('');
  const [editId, setEditId] = useState<number | null>(null);

  const addTask = () => {
    if (task.trim() === '') return;

    if (editId !== null) {
      setTasks(
        tasks.map(t =>
          t.id === editId ? { ...t, text: task } : t
        )
      );
      setEditId(null);
    } else {
      setTasks([
        ...tasks,
        {
          id: Date.now(),
          text: task,
          completed: false
        }
      ]);
    }

    setTask('');
  };

  const toggleComplete = (id: number) => {
    setTasks(
      tasks.map(t =>
        t.id === id
          ? { ...t, completed: !t.completed }
          : t
      )
    );
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  const editTask = (task: Task) => {
    setTask(task.text);
    setEditId(task.id);
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>To-Do List</h1>

      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter a task"
      />

      <button onClick={addTask}>
        {editId !== null ? 'Update' : 'Add'}
      </button>

      <ul style={{ listStyle: 'none' }}>
        {tasks.map(t => (
          <li key={t.id}>
            <span
              style={{
                textDecoration: t.completed
                  ? 'line-through'
                  : 'none'
              }}
            >
              {t.text}
            </span>

            <button onClick={() => toggleComplete(t.id)}>
              {t.completed ? 'Undo' : 'Complete'}
            </button>

            <button onClick={() => editTask(t)}>
              Edit
            </button>

            <button onClick={() => deleteTask(t.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
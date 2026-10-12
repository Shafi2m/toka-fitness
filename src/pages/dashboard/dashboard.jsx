import { useState } from "react";
import "./dashboard.css";

import back_bi from "../../assets/back-bi.mp4";
import chest_tri from "../../assets/chest-tri.mp4"
import legs from "../../assets/Legs.mp4"
const tasks = [
  {
    id: 1,
    title: "Back & Biceps",
    description: "Lat Pulldown — 3 × 8–12: Pull the bar to your upper chest, then slowly release. Seated Cable Row — 3 × 8–12: Pull the handle toward your ribs, squeeze your back, then return. Chest-Supported Dumbbell Row — 3 × 8–12: Pull the dumbbells toward your ribs, then lower slowly. Straight-Arm Pulldown — 2 × 12–15: Pull the bar toward your thighs while keeping your arms mostly straight. Dumbbell Curls — 3 × 8–12: Curl the dumbbells toward your shoulders without swinging. Hammer Curls — 3 × 8–12: Curl with your palms facing each other, then lower slowly. Cable Curls — 2 × 10–15: Curl the handle toward your shoulders while keeping your elbows still.",
    video: back_bi,
  },
  {
    id: 2,
    title: "Chest",
    description: "Bench Press — 3 × 8–12: Lower the bar to your chest with control, then press it up. Incline Dumbbell Press — 3 × 8–12: Press the dumbbells up from your upper chest, then lower slowly. Cable Fly — 3 × 10–15: Bring your hands together in front of your chest, then slowly open them. Rope Pushdown — 3 × 10–15: Push the rope down while keeping your elbows close to your sides. Overhead Triceps Extension — 3 × 10–15: Lower the weight behind your head, then extend your arms. Triceps Dips — 2 × 8–12: Lower your body with control, then push yourself back up.",
    video: chest_tri,
  },
  {
    id: 3,
    title: "Legs",
    description: "Leg Press — 3 × 8–12: Lower slowly, then push through your feet. Goblet Squat — 3 × 8–12: Hold a dumbbell at your chest, squat down, then stand up. Leg Extension — 2 × 10–15: Extend your legs, squeeze your quads, then lower slowly. Romanian Deadlift — 3 × 8–12: Push your hips back while lowering the weights, then stand tall. Seated Leg Curl — 3 × 10–15: Curl your heels back, squeeze your hamstrings, then return slowly. Standing Calf Raise — 3 × 12–15: Raise your heels, pause, then lower slowly.",
    video: legs,
  },
];

export default function Dashboard() {
  const [selectedTask, setSelectedTask] = useState(tasks[0]);
  const [completedTasks, setCompletedTasks] = useState([]);

  const progress = Math.round(
    (completedTasks.length / tasks.length) * 100
  );

  function toggleTask(taskId) {
    setCompletedTasks((previous) =>
      previous.includes(taskId)
        ? previous.filter((id) => id !== taskId)
        : [...previous, taskId]
    );
  }

  const radius = 70;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <div className="dashboard">
      <div className="main-content">

        {/* Circular progress */}
        <div className="progress-container">
          <svg className="progress-circle" viewBox="0 0 180 180">
            <circle
              className="progress-background"
              cx="90"
              cy="90"
              r={radius}
            />

            <circle
              className="progress-value"
              cx="90"
              cy="90"
              r={radius}
              strokeDasharray={circumference}
              strokeDashoffset={offset}
            />
          </svg>

          <div className="progress-text">
            <span>{progress}%</span>
            <small>Completed</small>
          </div>
        </div>

        {/* Video */}
        <div className="video-container">
          <video
            key={selectedTask.video}
            controls
            src={selectedTask.video}
          />
        </div>
      </div>

      <div className="sidebar">
        <div className="tasks">
          <h2>Tasks</h2>

          {tasks.map((task) => (
            <div className="task-row" key={task.id}>
              <button
                className={`task ${
                  selectedTask.id === task.id ? "selected" : ""
                }`}
                onClick={() => setSelectedTask(task)}
              >
                {task.title}
              </button>

              <input
                type="checkbox"
                checked={completedTasks.includes(task.id)}
                onChange={() => toggleTask(task.id)}
                aria-label={`Mark ${task.title} as completed`}
              />
            </div>
          ))}
        </div>

        <div className="description">
          <h2>Description</h2>
          <p>{selectedTask.description}</p>
        </div>
      </div>
    </div>
  );
}
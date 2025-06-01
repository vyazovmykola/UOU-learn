// src/pages/Home.jsx

import { Link } from "react-router-dom";

const lessons = [
  { id: 1, name: "Lesson 1" },
  { id: 2, name: "Lesson 2" },
];

export default function Home() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Select a Lesson</h1>
      <ul className="space-y-2">
        {lessons.map((lesson) => (
          <li key={lesson.id}>
            <Link
              to={`/lesson/${lesson.id}`}
              className="text-blue-600 hover:underline"
            >
              {lesson.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

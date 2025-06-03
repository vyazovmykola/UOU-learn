import './Home.css';
import { Link } from "react-router-dom";

const lessons = [
  { id: 1, name: "Lesson 1" },
  { id: 2, name: "Lesson 2" },
];

export default function Home() {
  return (
    <div className="p-4">
      
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
      
    </div>
  );
}

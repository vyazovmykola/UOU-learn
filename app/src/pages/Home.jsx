import './Home.css'
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';

const lessons = [
  { id: 'greetings', title: 'Greetings' },
  { id: 'numbers', title: 'Numbers' },
];

export default function Home() {
  const completedLessons = JSON.parse(Cookies.get('completedLessons') || '[]');

  return (
    <div className="p-4 grid gap-4">
      {lessons.map(lesson => (
        <Link
          key={lesson.id}
          to={`/lesson/${lesson.id}`}
          className="p-4 border rounded-xl shadow hover:scale-105 transition"
        >
          <div className="text-xl">{lesson.title}</div>
          {completedLessons.includes(lesson.id) && (
            <div className="text-green-500 mt-1">✅ Completed</div>
          )}
        </Link>
      ))}
    </div>
  );
}

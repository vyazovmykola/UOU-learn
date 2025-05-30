// app/src/pages/Lesson.jsx
import { useParams } from "react-router-dom";
import Cookies from "js-cookie";

export default function Lesson() {
  const { lessonId } = useParams();

  const saveProgress = () => {
    const completed = JSON.parse(Cookies.get("completedLessons") || "[]");
    if (!completed.includes(lessonId)) {
      completed.push(lessonId);
      Cookies.set("completedLessons", JSON.stringify(completed), { expires: 365 });
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Lesson: {lessonId}</h1>
      <p>This is where questions will go for this lesson.</p>
      <button
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg"
        onClick={saveProgress}
      >
        Finish Lesson
      </button>
    </div>
  );
}

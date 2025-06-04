// src/pages/Lesson.jsx
import { useParams } from "react-router-dom";
import Lesson1 from "./Lesson1";
import Lesson2 from "./Lesson2";

export default function Lesson() {
  const { lessonId } = useParams();

  const renderLesson = () => {
    switch (lessonId) {
      case "1":
        return <Lesson1 />;
      case "2":
        return <Lesson2 />;
      default:
        return <div>Lesson not found</div>;
    }
  };

  return (
    <div className="p-4">
      {renderLesson()}
    </div>
  );
}

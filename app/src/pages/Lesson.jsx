import { useParams } from "react-router-dom";

export default function Lesson() {
  const { lessonId } = useParams(); // "1", "2", etc.

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Lesson {lessonId}</h1>
      {<p>asdasdaad</p>}
    </div>
  );
}

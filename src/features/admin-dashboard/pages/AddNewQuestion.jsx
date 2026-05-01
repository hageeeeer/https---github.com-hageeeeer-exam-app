import React, { useRef, useState } from "react";
import DisplayExam from "../components/DisplayExam";
import Loading from "../../../components/Loading/Loading";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getSingleExam } from "../../../apis/admin/exam/getSingleExam";
import { Link, useParams } from "react-router-dom";
import { getQuestionsOnExam } from "../../../apis/admin/questions/getQuestionsOnExam";
import AddQuestionForm from "../components/AddQuestionForm";
import { Button, Input, toast } from "@heroui/react";
import { useForm } from "react-hook-form";
import { addQuestionFun } from "../../../apis/admin/questions/addQuestion";

export default function AddNewQuestion() {
  // Each answer: { id, text, isCorrect }
  const [question, setQuestion] = useState("");
  const [answers, setAnswers] = useState([]);
  const [answerInput, setAnswerInput] = useState("");

  const { examId, subId } = useParams();
  const { isLoading, data } = useQuery({
    queryKey: ["examDetail", examId, subId],
    queryFn: () => getSingleExam(examId, subId),
  });
  //   question
  const { data: questionsData } = useQuery({
    queryKey: ["questionDetail", examId],
    queryFn: () => getQuestionsOnExam(examId),
  });

  const query = useQueryClient();

  // add question
  const { data: questionData, mutate } = useMutation({
    mutationFn: addQuestionFun,
    onSuccess: () => {
      toast("question added");
      query.invalidateQueries({ queryKey: ["questionDetail", examId] });
      query.invalidateQueries({ queryKey: ["examDetail", examId, subId] });
    },
    onError: () => {
      toast("error");
    },
  });

  // handleAddQuestion

  function handleAddQuestion() {
    const correctIndex = answers.findIndex((ans) => ans.isCorrect);

    const payload = {
      question: question,
      A1: answers[0].text,
      A2: answers[1].text,
      A3: answers[2].text,
      A4: answers[3].text,
      correct: `A${correctIndex + 1}`,
      subject: subId,
      exam: examId,
    };

    mutate(payload);
  }

  // function add answer

  function addAnswer() {
    if (!answerInput.trim()) return;
    setAnswers((prev) => [
      ...prev,
      { id: crypto.randomUUID(), text: answerInput, isCorrect: false },
    ]);
    setAnswerInput("");
  }

  // function mark correct

  function toggleCorrect(id) {
    setAnswers((prev) =>
      prev.map((ans) =>
        ans.id === id ? { ...ans, isCorrect: !ans.isCorrect } : ans,
      ),
    );
  }

  // function delete answer

  function deleteAnswer(id) {
    setAnswers([...answers].filter((ans) => ans.id !== id));
  }



  if (isLoading) return <Loading></Loading>;
  return (
    <div className="px-4 py-8">
      <Link className="cursor-pointer" to={`/admin/exam/${examId}`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
          />
        </svg>
      </Link>
      <Input
        className="w-full my-4"
        placeholder="question headline"
        onChange={(e) => setQuestion(e.target.value)}
      />

      {answers.length ? (
        <div className="my-5">
          {answers.map((ans) => (
            <div key={ans.id} className="flex items-center ">
              <span
                onClick={() => deleteAnswer(ans.id)}
                className="cursor-pointer text-red-500 bg-red-100 p-3"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                  />
                </svg>
              </span>
              <p className="bg-white p-3 w-1/2">{ans.text}</p>

              <span
                onClick={() => toggleCorrect(ans.id)}
                className={`flex cursor-pointer p-3 ${
                  ans.isCorrect ? "bg-green-300 text-white" : "bg-gray-300"
                }`}
              >
                {ans.isCorrect ? "Correct Answer" : "Mark correct"}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 12.75 6 6 9-13.5"
                  />
                </svg>
              </span>
            </div>
          ))}
        </div>
      ) : (
        ""
      )}
      <div className="flex gap-3 items-center">
        <div className="w-2/3">
          <Input
            value={answerInput}
            onChange={(e) => setAnswerInput(e.target.value)}
            placeholder="enter anwswer body"
            className={`w-full`}
          />
        </div>

        <div className="w-1/3">
          <Button className={`my-3 w-full`} onClick={addAnswer}>
            Add
          </Button>
        </div>
      </div>
      {/* add question */}
      <Button className={`my-5 w-full`} onClick={handleAddQuestion}>
        Add Question
      </Button>
    </div>
  );
}

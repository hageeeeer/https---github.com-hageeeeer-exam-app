import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getQuestionsOnExam } from "../../../apis/admin/questions/getQuestionsOnExam";
import {
  Button,
  Label,
  ProgressBar,
  ProgressCircle,
  Radio,
  RadioGroup,
} from "@heroui/react";

export default function StudentExamsPage() {
  const [counter, setCounter] = useState(0);
  const [questionNum, setQuestionNum] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const { examId } = useParams();
  const navigate = useNavigate();

  const { data } = useQuery({
    queryKey: ["questionDetail", examId],
    queryFn: () => getQuestionsOnExam(examId),
  });

  const totalQuestions = data?.questions?.length || 10;

  function NextFun() {
    if (questionNum >= totalQuestions - 1) return;
    setQuestionNum((q) => q + 1);
  }

  function PrevFun() {
    if (questionNum <= 0) return;
    setQuestionNum((q) => q - 1);
  }

  function handleChange(myAns, correct, questionIndex) {
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionIndex]: { myAns, correct },
    }));
  }

  useEffect(() => {
    const clr = setInterval(() => {
      setCounter((prevCounter) => {
        if (prevCounter >= totalQuestions) {
          clearInterval(clr);
          const finalScore = Object.values(selectedAnswers).filter(
            (ans) => ans.myAns === ans.correct
          ).length;
          navigate(`/admin/results?score=${finalScore}&total=${totalQuestions}&examId=${examId}`);
          return prevCounter;
        }
        return prevCounter + 1;
      });
    }, 2000);
    return () => clearInterval(clr);
  }, [totalQuestions, selectedAnswers]);

  return (
    <div>
      <div className="bg-blue-500 flex gap-2 text-white dark:bg-blue-950 py-5 px-2">
        <h3>Css Exam Questions</h3>
      </div>

      <div className="mt-12 px-8">
        <div className="mb-12">
          <div className="quiz flex">
            <div className="w-full border-r-2 px-5">
              <div className="quiz-label flex justify-between items-center">
                <p className="my-2">Front End Css Quiz</p>
                <span>
                  question
                  <span className="text-blue-600"> {questionNum + 1} </span>
                  of {totalQuestions}
                </span>
              </div>
              <ProgressBar
                className="w-full"
                value={(questionNum / (totalQuestions - 1)) * 100}
              >
                <ProgressBar.Track>
                  <ProgressBar.Fill />
                </ProgressBar.Track>
              </ProgressBar>
            </div>
          </div>

          <div className="questions px-8 mt-4">
            <RadioGroup
              onChange={(myAns) =>
                handleChange(
                  myAns,
                  data?.questions[questionNum]?.correct,
                  questionNum
                )
              }
              value={selectedAnswers[questionNum]?.myAns || ""}
              name="correctAnswer"
            >
              <Label className="text-blue-600" style={{ fontSize: "20px" }}>
                {data?.questions[questionNum]?.question}
              </Label>

              {data?.questions[questionNum]?.answers?.map((ans) => (
                <Radio
                  key={ans?.key}
                  className="bg-gray-300 p-2"
                  value={ans?.key}
                >
                  <Radio.Control>
                    <Radio.Indicator />
                  </Radio.Control>
                  <Radio.Content>
                    <Label>{ans?.answer}</Label>
                  </Radio.Content>
                </Radio>
              ))}
            </RadioGroup>
          </div>

          <div className="flex p-8 items-center justify-between">
            <Button className="text-white w-1/3" onClick={PrevFun}>
              Previous
            </Button>

            <ProgressCircle
              size="lg"
              aria-label="Timer"
              value={(counter / totalQuestions) * 100}
            >
              <ProgressCircle.Track>
                <ProgressCircle.TrackCircle />
                <ProgressCircle.FillCircle />
              </ProgressCircle.Track>
            </ProgressCircle>

            <Button className="text-white w-1/3" onClick={NextFun}>
              Next
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
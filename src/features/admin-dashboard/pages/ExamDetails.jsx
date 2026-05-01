import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getSingleExam } from "../../../apis/admin/exam/getSingleExam";
import Loading from "../../../components/Loading/Loading";
import { getQuestionsOnExam } from "../../../apis/admin/questions/getQuestionsOnExam";
import { Table } from "@heroui/react";
import DisplayExam from "../components/DisplayExam";
import Nav from "../../../components/Nav";

export default function ExamDetails() {
  const { examId } = useParams();
  const { isLoading, data } = useQuery({
    queryKey: ["examDetail", examId],
    queryFn: () => getSingleExam(examId),
  });
  //   question
  const { data: questionsData } = useQuery({
    queryKey: ["questionDetail", examId],
    queryFn: () => getQuestionsOnExam(examId),
  });



  if (isLoading) return <Loading></Loading>;

  return (
    <>
    <DisplayExam
      addPage={false}
      data={data}
      questionsData={questionsData}
    ></DisplayExam>
     </>
  );
}

import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { getQuestionsOnExam } from "../../../apis/admin/questions/getQuestionsOnExam";
import { useSearchParams } from "react-router-dom";
import { Label, Radio, RadioGroup } from "@heroui/react";
import { PaginationBasic } from "../../../components/Pagination";
import ProgressBarCom from "../../../components/ProgressBarCom";

export default function Result() {
  const [searchParams] = useSearchParams();
  const [page, setPageNum] = useState(0);
  const correct = searchParams.get("score");
  const total = searchParams.get("total");
  const examId = searchParams.get("examId");
  const { data } = useQuery({
    queryKey: ["questionDetail", examId],
    queryFn: () => getQuestionsOnExam(examId),
  });

  return (
    <div className="flex items-center my-5 ">
      <div className="lg:w-1/3 flex items-center flex-col justify-center">
        <ProgressBarCom
          correct={correct}
          total={total}
        ></ProgressBarCom>
        <span className="font-bold">Total questions: {total} </span>
        <span className="text-green-500">correct : {Number(correct)}</span>
        <span className="text-red-500">wrong : {total - correct}</span>
      </div>
      <div className="lg:w-2/3">
        {data?.questions?.slice(page * 3, page * 3 + 3).map((ele) => (
          <>
            <div className="questions px-8 mt-4">
              <RadioGroup
                onChange={(myAns) =>
                  handleChange(myAns, ele?.correct, questionNum)
                }
                value={ele?.correct}
                name="correctAnswer"
              >
                <Label className="text-blue-600" style={{ fontSize: "15px" }}>
                  {ele?.question}
                </Label>
                <div className="flex">
                  {ele?.answers?.map((ans) => (
                    <Radio key={ans?.key} className="p-2" value={ans?.key}>
                      <Radio.Control>
                        <Radio.Indicator />
                      </Radio.Control>
                      <Radio.Content>
                        <Label>{ans?.answer}</Label>
                      </Radio.Content>
                    </Radio>
                  ))}
                </div>
              </RadioGroup>
            </div>
          </>
        ))}

        {/* pagination */}
        <PaginationBasic setPageNum={setPageNum}></PaginationBasic>
      </div>
    </div>
  );
}

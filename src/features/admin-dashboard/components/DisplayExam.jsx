import AddQuestion from "./AddQuestion";
import { Table } from "@heroui/react";
import AddQuestionForm from "./AddQuestionForm";

export default function DisplayExam({ questionsData, data, addPage }) {
  return (
    <div className="bg-gray-100 px-4 py-8">
      <div className="bg-white px-4 py-8">
        <span className="text-gray-400 text-sm">title</span>
        <p className="text-sm mb-3">{data?.exam?.title}</p>
        <span className="text-gray-400 text-sm">duration</span>
        <p className="text-sm mb-3">
          {data?.exam?.duration} <span>min</span>{" "}
        </p>
        <span className="text-gray-400 text-sm">numberOfQuestions</span>
        <p className="text-sm mb-3">{data?.exam?.numberOfQuestions}</p>
      </div>

    

      <div className="bg-white px-4 py-8">
        {!addPage && (
          <AddQuestion
            examId={data?.exam?._id}
            subId={data?.exam?.subject}
          ></AddQuestion>
        )}

        <Table className="my-5">
          <Table.ScrollContainer>
            <Table.Content aria-label="Team members">
              <Table.Header>
                <Table.Column>Title</Table.Column>
                <Table.Column>Exam</Table.Column>
              </Table.Header>
              <Table.Body>
                {questionsData?.questions?.map((exam) => (
                  <Table.Row key={exam?._id}>
                    <Table.Cell>{exam?.question}</Table.Cell>

                    <Table.Cell>
                      <p>{exam?.exam?.title}</p>
                    </Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table.Content>
          </Table.ScrollContainer>
        </Table>
      </div>
    </div>
  );
}

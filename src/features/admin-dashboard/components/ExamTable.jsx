import { Button, Dropdown, Label, Table } from "@heroui/react";
import { Options } from "./Options";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { auth } from "../../../context/auth.context";

export function ExamTable({
  displayData,
  sortByNewest,
  sortByOldest,
  ascending,
  descending,
}) {
  const { role } = useContext(auth);
  return (
    <Table className="my-5">
      <Table.ScrollContainer>
        <Table.Content aria-label="Team members">
          <Table.Header>
            <Table.Column>Title</Table.Column>
            <Table.Column isRowHeader>duration</Table.Column>
            <Table.Column>No of Questions</Table.Column>
            <Table.Column className="flex gap-2 items-center">
              <Dropdown>
                <Button aria-label="Menu" variant="secondary">
                  Sort
                </Button>
                <Dropdown.Popover>
                  <Dropdown.Menu
                    onAction={(key) => console.log(`Selected: ${key}`)}
                  >
                    <Dropdown.Item
                      onClick={descending}
                      id="Descending"
                      textValue="Descending"
                    >
                      <Label>Descending</Label>
                    </Dropdown.Item>
                    <Dropdown.Item
                      onClick={ascending}
                      id="Ascending"
                      textValue="Ascending"
                    >
                      <Label>Ascending</Label>
                    </Dropdown.Item>

                    <Dropdown.Item
                      onClick={sortByNewest}
                      id="Newest"
                      textValue="Newest"
                    >
                      <Label>Newest</Label>
                    </Dropdown.Item>

                    <Dropdown.Item
                      onClick={sortByOldest}
                      id="oldest"
                      textValue="oldest"
                    >
                      <Label>oldest</Label>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown.Popover>
              </Dropdown>
            </Table.Column>
          </Table.Header>
          <Table.Body>
            {displayData?.map((ex) => (
              <Table.Row key={ex?._id}>
                <Table.Cell>
                  {role === "admin" ? (
                    <Link to={`/admin/exam/${ex?._id}`}>
                      <span>{ex?.title}</span>
                    </Link>
                  ) : (
                    <Link to={`/admin/student/exam/${ex?._id}`}>
                      <span>{ex?.title}</span>
                    </Link>
                  )}
                </Table.Cell>

                <Table.Cell>
                  <p>
                    {ex?.duration} <span>min</span>
                  </p>
                </Table.Cell>
                <Table.Cell>
                  <p>{ex?.numberOfQuestions}</p>
                </Table.Cell>
                <Table.Cell>{role === "admin" && <Options />}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Content>
      </Table.ScrollContainer>
    </Table>
  );
}

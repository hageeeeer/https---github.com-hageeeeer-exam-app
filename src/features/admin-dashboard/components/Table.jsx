import { Button, Dropdown, Label, Table } from "@heroui/react";
import { Options } from "./Options";
import { Link } from "react-router-dom";


export function AdminDiplomaTable({displayData,descending,ascending,sortByNewest ,sortByOldest}) {


  return (
    <Table className="my-5">
      <Table.ScrollContainer>
        <Table.Content aria-label="Team members">
          <Table.Header>
            <Table.Column isRowHeader>Image</Table.Column>
            <Table.Column>Title</Table.Column>
            <Table.Column>Description</Table.Column>
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
                      id="new-file"
                      textValue="Descending"
                    >
                      <Label>Descending</Label>
                    </Dropdown.Item>
                    <Dropdown.Item
                      onClick={ascending}
                      id="copy-link"
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
            {displayData?.map((sub) => (
              <Table.Row key={sub?._id}>
                <Table.Cell>
                  <Link to={`/admin/diplomadmin/${sub?._id}`}>
                    <img className="w-30" src={sub?.icon} alt="" />
                  </Link>
                </Table.Cell>
                <Table.Cell>{sub?.name}</Table.Cell>
                <Table.Cell>
                
                  <p>
                    UI Diploma focused on designing user-friendly and visually
                    appealing interfaces. Covered design principles, typography,
                    color theory, and layout techniques. Gained hands-on
                    experience using tools like Figma to create responsive{" "}
                  </p>
                </Table.Cell>
                <Table.Cell>
                  <Options />
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Content>
      </Table.ScrollContainer>
    </Table>
  );
}

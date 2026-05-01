import { Accordion, Input, Select, ListBox, Button } from "@heroui/react";

export default function Search({getInputValue,clearFun,inputValue,applySearch}) {
  const items = [
    {
      title: "Search & Filters",
    },
  ];

  return (
    <Accordion className="w-full ">
      {items.map((item, index) => (
        <Accordion.Item key={index}>
          <Accordion.Heading>
            <Accordion.Trigger className="bg-blue-500  text-white">
              <div className="text-white font-bold flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
                  />
                </svg>

                <span>{item.title}</span>
              </div>
              <div className="flex gap-2">
                <span>Hide</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
                  />
                </svg>
              </div>
            </Accordion.Trigger>
          </Accordion.Heading>
          <Accordion.Panel className="bg-white px-2 py-4">
            <Accordion.Body className="px-2 py-4 ">
              <div className="relative">
                <Input
                  className="w-full rounded-none 
                  placeholder:text-gray-400 py-4 px-2"
                  placeholder="Search by Title"
                  value={inputValue}
                  onChange={getInputValue}
                />
                <div className="absolute top-1/2 -translate-1/2 right-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="size-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                    />
                  </svg>
                </div>
              </div>

              <Select
                className="w-1/2 rounded-none my-3"
                placeholder="Imutability"
              >
                <Select.Trigger className="rounded-none py-4 px-2">
                  <Select.Value className={`text-gray-400`} />
                  <Select.Indicator className="text-gray-400" />
                </Select.Trigger>
                <Select.Popover className={`text-gray-400 rounded-none`}>
                  <ListBox>
                    <ListBox.Item id="florida" textValue="Florida">
                      Florida
                      <ListBox.ItemIndicator />
                    </ListBox.Item>
                  </ListBox>
                </Select.Popover>
              </Select>

              <div className="flex gap-3 justify-end">
                <Button className={`rounded-none`} onClick={applySearch}>Apply</Button>
                <Button className={`rounded-none`} onClick={clearFun}>Clear</Button>
              </div>
            </Accordion.Body>
          </Accordion.Panel>
        </Accordion.Item>
      ))}
    </Accordion>
  );
}

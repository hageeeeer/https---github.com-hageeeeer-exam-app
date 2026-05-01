import { Button, Input, Label, ListBox, Select } from "@heroui/react";
import React from "react";
import { useForm, Controller } from "react-hook-form";

export default function AddQuestionForm() {
  const { register, handleSubmit, control } = useForm({
    defaultValues: {
      question: "",
      A1: "",
      A2: "",
      A3: "",
      A4: "",
      correct: "",
    },
  });

  function handleAddQues(data) {
    console.log(data);
  }

  return (
    <div className="bg-white px-4 py-8">
      <form className="w-full" onSubmit={handleSubmit(handleAddQues)}>
        <Input {...register("question")} className="w-full my-4"  placeholder="question headline"/>
        <div className="my-4 flex gap-4">
          <Input {...register("A1")} className="w-1/2" />
          <Input {...register("A2")} className="w-1/2" />
        </div>
        <div className="my-4 flex gap-4">
          <Input {...register("A3")} className="w-1/2" />
          <Input {...register("A4")} className="w-1/2" />
        </div>

        <Controller
          name="correct"
          control={control}
          render={({ field }) => (
            <Select
              className="w-[256px]"
              placeholder="Select answer"
              selectedKeys={field.value ? new Set([field.value]) : new Set()}
              onSelectionChange={(keys) =>{
                field.onChange(keys)}}
            >
              <Label>Correct answer</Label>
              <Select.Trigger>
                <Select.Value />
                <Select.Indicator />
              </Select.Trigger>
              <Select.Popover>
                <ListBox>
                  <ListBox.Item id="A1" textValue="A1">A1<ListBox.ItemIndicator /></ListBox.Item>
                  <ListBox.Item id="A2" textValue="A2">A2<ListBox.ItemIndicator /></ListBox.Item>
                  <ListBox.Item id="A3" textValue="A3">A3<ListBox.ItemIndicator /></ListBox.Item>
                  <ListBox.Item id="A4" textValue="A4">A4<ListBox.ItemIndicator /></ListBox.Item>
                </ListBox>
              </Select.Popover>
            </Select>
          )}
        />

        <Button type="submit" className="my-4 w-full rounded-none">
          + Add Question
        </Button>
      </form>
    </div>
  );
}
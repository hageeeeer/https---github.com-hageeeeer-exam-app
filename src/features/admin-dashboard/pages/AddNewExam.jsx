import { QueryClient, useMutation, useQuery } from "@tanstack/react-query";
import React from "react";
import { getDiplomas } from "../../../apis/admin/diploma/getDiplomas";
import { Input, ListBox, Select, Label, Button, toast } from "@heroui/react";
import { Controller, useForm } from "react-hook-form";
import { addExam } from "../../../apis/admin/exam/addExam";
import Loading from "../../../components/Loading/Loading";

export default function AddNewExam() {
  const {
    control,
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm();

  const { data } = useQuery({
    queryKey: ["Subjects"],
    queryFn: getDiplomas,
  });

  const query = new QueryClient();

  // add exam

  const {
    data: examData,
    mutate,
    isPending,
  } = useMutation({
    mutationFn: addExam,
    onSuccess: () => {
      query.invalidateQueries(["Subjects"]);
      query.invalidateQueries(["Exams"]);
      toast("successfull added");
    },
    onError: () => {
      toast("cant add");
    },
  });

  function handleAddExam(FormData) {
    mutate(FormData);
  }

  if (isPending) return <Loading></Loading>;

  return (
    <div className="px-4 py-8">
      <form className="my-4" onSubmit={handleSubmit(handleAddExam)}>
        <div className="my-3 flex items-center gap-5">
          <div className={`w-1/2`}>
            <Label className="my-2">Title</Label>
            <Input
              {...register("title", { required: true })}
              className={`w-full`}
            />
          </div>
          <div className={`w-1/2`}>
            <Label className="my-2">Diploma</Label>
            <Controller
              rules={{ required: true }}
              name="subject"
              control={control}
              render={({ field }) => (
                <Select
                  className="w-full"
                  placeholder="Select answer"
                  selectedKeys={
                    field.value ? new Set([field.value]) : new Set()
                  }
                  onSelectionChange={(keys) => {
                    field.onChange(keys);
                  }}
                >
                  <Select.Trigger>
                    <Select.Value />
                    <Select.Indicator />
                  </Select.Trigger>
                  <Select.Popover>
                    <ListBox>
                      {data?.subjects?.map((item) => (
                        <ListBox.Item
                          key={item?._id}
                          id={item?._id}
                          textValue={item?._id}
                        >
                          {item?.name}
                          <ListBox.ItemIndicator />
                        </ListBox.Item>
                      ))}
                    </ListBox>
                  </Select.Popover>
                </Select>
              )}
            />
          </div>
        </div>
        <div className="my-3 flex items-center gap-5">
          <div className={`w-1/2`}>
            <Label htmlFor="input-type-number">Duration</Label>
            <Input
              {...register("duration", { required: true })}
              className={`w-full`}
              id="input-type-number"
              min={0}
              type="number"
            />
          </div>
          <div className={`w-1/2`}>
            <Label htmlFor="input-type-number">NumOfQues</Label>
            <Input
              {...register("numberOfQuestions", { required: true })}
              className={`w-full`}
              id="input-type-number"
              min={0}
              type="number"
            />
          </div>
        </div>
        <Button disabled={!isValid} type="submit" className={`my-2`}>
          + Add Exam
        </Button>
      </form>
    </div>
  );
}

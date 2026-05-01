import React from "react";
import { ExamTable } from "../../admin-dashboard/components/ExamTable";
import { useFilter } from "../../../hooks/filter.hook";
import { getExams } from "../../../apis/admin/exam/getExams";
import Loading from "../../../components/Loading/Loading";

export default function StudentDiplomas() {
  const {
    isLoading,
    displayData,
    inputValue,
    getInputValue,
    applySearch,
    clearFun,
    ascending,
    descending,
    sortByNewest,
    sortByOldest,
  } = useFilter("Exams", getExams, "exams", "title");

  if (isLoading) return <Loading></Loading>;
  return (
    <div>
      <ExamTable
        displayData={displayData}
        sortByNewest={sortByNewest}
        sortByOldest={sortByOldest}
        ascending={ascending}
        descending={descending}
      />
    </div>
  );
}

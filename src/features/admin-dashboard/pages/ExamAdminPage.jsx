import Search from "../components/Search";
import Pagination from "../components/Pagination";
import { Button } from "@heroui/react";
import { ExamTable } from "../components/ExamTable";
import { useFilter } from "../../../hooks/filter.hook";
import { getExams } from "../../../apis/admin/exam/getExams";
import Loading from "./../../../components/Loading/Loading";
import { Link } from "react-router-dom";

export default function ExamAdminPage() {
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
      <div className="bg-blue-500 flex gap-2 text-white dark:bg-blue-950 py-5 px-2 ">
        <h3>Exams</h3>
      </div>
      <p className="text-[14px] text-custom-gray-400 py-4 px-2">exams</p>

      <div className="flex justify-between  items-center  sm:gap-0 gap-2 px-4 py-2 border-2 border-gray-100">
        <Pagination />
        <Link to={`/admin/exam/add`}>
          <Button className="rounded-none text-[14px] bg-custom-green-500 text-white">
            + Create New Exam
          </Button>
        </Link>
      </div>
      <div className="wrapper bg-gray-100">
        <Search
          clearFun={clearFun}
          inputValue={inputValue}
          getInputValue={getInputValue}
          applySearch={applySearch}
        />
        {/* AdminDiplomaTable */}
        <ExamTable
          displayData={displayData}
          sortByNewest={sortByNewest}
          sortByOldest={sortByOldest}
          ascending={ascending}
          descending={descending}
        ></ExamTable>
      </div>
    </div>
  );
}

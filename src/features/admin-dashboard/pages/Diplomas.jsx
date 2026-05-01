import Pagination from "../components/Pagination";
import { Button } from "@heroui/react";
import Search from "../components/Search";
import { AdminDiplomaTable } from "../components/Table";
import { Link } from "react-router-dom";
import { useContext, useMemo, useState } from "react";
import Loading from "../../../components/Loading/Loading";
import { useQuery } from "@tanstack/react-query";
import { getDiplomas } from "../../../apis/admin/diploma/getDiplomas";
import { useFilter } from "../../../hooks/filter.hook";
import { auth } from "../../../context/auth.context";

export default function DiplomasAdmin() {
  const {role} = useContext(auth)
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
  } = useFilter("Subjects", getDiplomas, "subjects", "name");

  if (isLoading) return <Loading></Loading>;

  return (
    <div>
      <div className="bg-blue-500 flex gap-2 text-white dark:bg-blue-950 py-5 px-2 ">
        <h3>Css Diploma</h3>
      </div>
      <p className="text-[14px] text-custom-gray-400 py-4 px-2">Diplomas</p>
      {role === "admin" && (
        <div className="flex justify-between  items-center  sm:gap-0 gap-2 px-4 py-2 border-2 border-gray-100">
          <Pagination />
          <Link to="/admin/AddNewDiploma">
            <Button className="rounded-none text-[14px] bg-custom-green-500 text-white">
              + Add New Diploma
            </Button>
          </Link>
        </div>
      )}
      <div className="wrapper bg-gray-100">
        <Search
          inputValue={inputValue}
          applySearch={applySearch}
          getInputValue={getInputValue}
          clearFun={clearFun}
        />
        {/* AdminDiplomaTable */}
        <AdminDiplomaTable
          sortByNewest={sortByNewest}
          sortByOldest={sortByOldest}
          descending={descending}
          ascending={ascending}
          displayData={displayData}
        ></AdminDiplomaTable>
      </div>
    </div>
  );
}

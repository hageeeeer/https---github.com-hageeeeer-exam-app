import { Button } from "@heroui/react";
import { useQuery } from "@tanstack/react-query";

import { Link, useParams } from "react-router-dom";
import Loading from "../../../components/Loading/Loading";
import { getSingleDiploma } from "../../../apis/admin/diploma/getSingleDiploma";

export default function DiplomaAdminDetails() {

  const {subId} = useParams()
  
  const {isLoading,data} = useQuery({
    queryKey:['diploma', `${subId}` ],
    queryFn:()=>getSingleDiploma(subId)
  })



  console.log(data);
  

  if(isLoading)
    return <Loading></Loading>



  return (
    <div>
      <p className="text-[14px] text-custom-gray-400 py-4 px-2">
        Diplomas / <span className="text-blue-600">Title</span>
      </p>

      <div className="flex justify-between  items-center  sm:gap-0 gap-2 px-4 py-2 border-2 border-gray-100">
        <h4> title </h4>
        <div className="flex gap-3">
          <Link to="/admin/EditNewDiploma">
            <Button className="rounded-none text-[14px] bg-blue-600 text-white">
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
                  d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                />
              </svg>
              <span>Edit</span>
            </Button>
          </Link>
          <Button className="rounded-none text-[14px] bg-red-600 text-white">
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
                d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
              />
            </svg>
            <span>Delete</span>
          </Button>
        </div>
      </div>

      <section className="px-4 py-8 bg-gray-100">
        <div className="bg-white py-8 px-4">
          <p className="text-gray-400">Image</p>
          <img
            className="w-80"
            src={data?.category?.icon}
            alt=""
          />
          <p className="text-gray-400">Title</p>
          <p>{data?.category?.name}</p>
          <p className="text-gray-400 mt-4">Description</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
            cumque. Ratione eius facilis rem consequatur iste ipsam, illo
            sapiente dolor quidem consectetur mollitia commodi temporibus cumque
            accusantium animi iusto sunt distinctio, provident tempore nihil
            itaque! Eligendi facere, voluptates possimus animi, at sapiente sed
            a assumenda cumque ad, pariatur doloremque nulla.
          </p>
        </div>
      </section>
    </div>
  );
}

import React from "react";

export default function Pagination() {
  return (
    <nav class="inline-flex border-gray-200 border-2 items-center  rounded bg-white space-x-2">
      <a
        class="p-1 flex justify-center items-center  text-black bg-gray-200 hover:text-white
        w-10
        h-10
        "
        href=""
      >
        <svg
          class="w-3 h-3"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
          />
        </svg>
      </a>
      <p class="text-gray-500">Page 1 of 10</p>
      <a
        class="p-1 flex justify-center items-center  text-black bg-gray-200 hover:text-white
        w-10
        h-10
        "
        href=""
      >
        <svg class="w-3 h-3" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
            <path fill-rule="evenodd"
                d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
        </svg>
      </a>
    </nav>
  );
}

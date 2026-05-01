"use client";

import { Pagination } from "@heroui/react";
import { useState } from "react";

export function PaginationBasic({ setPageNum }) {
  const [page, setPage] = useState(1);
  const totalPages = 4;

  return (
    <Pagination className="justify-center my-5 fixed bottom-14 left-14 ">
      <Pagination.Content>
        <Pagination.Item>
          <Pagination.Previous
            isDisabled={page === 1}
            onPress={() => {
                setPage((p) => p - 1)
                setPageNum((p) => p - 1)
            }}
          >
            <Pagination.PreviousIcon />
            <span>Previous</span>
          </Pagination.Previous>
        </Pagination.Item>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
          <Pagination.Item key={p}>
            <Pagination.Link isActive={p === page} onPress={() => {setPage(p)
                 setPageNum(p-1)
            }}>
              {p} 
            </Pagination.Link>
          </Pagination.Item>
        ))}
        <Pagination.Item>
          <Pagination.Next
            isDisabled={page === totalPages}
            onPress={() => {
              setPageNum((p) => p + 1);
              setPage((p) => p + 1);
            }}
          >
            <span>Next</span>
            <Pagination.NextIcon />
          </Pagination.Next>
        </Pagination.Item>
      </Pagination.Content>
    </Pagination>
  );
}

import React from "react";
import { LayoutHome } from "../../layout-components/home/layout-home";
import { DataTable } from "../../ui/data-table";
import { columns } from "./columns";
import { mockUsers } from "@/const/mock-users-table";


export const TableUsers = async () => {
  

  return (
    <LayoutHome>
      <DataTable columns={columns} data={mockUsers} />
    </LayoutHome>
  );
};

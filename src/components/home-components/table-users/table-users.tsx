import React from "react";
import { LayoutHome } from "../../layout-components/home/layout-home";
import { DataTable } from "../../ui/data-table";
import { columns, User } from "./columns";

async function getData(): Promise<User[]> {
  // Datos simulados de usuarios del gimnasio
  return [
    {
      id: "u1",
      name: "Juan Pérez",
      email: "juan.perez@gmail.com",
      membership: "Premium",
      status: "active",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      joinedAt: "2024-02-10",
    },
    {
      id: "u2",
      name: "María Gómez",
      email: "maria.gomez@hotmail.com",
      membership: "Standard",
      status: "inactive",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      joinedAt: "2023-11-03",
    },
    {
      id: "u3",
      name: "Lucas Romero",
      email: "lucas.romero@fitlife.com",
      membership: "Basic",
      status: "active",
      avatar: "https://randomuser.me/api/portraits/men/12.jpg",
      joinedAt: "2025-01-21",
    },
    {
      id: "u4",
      name: "Carla Díaz",
      email: "carla.diaz@gmail.com",
      membership: "Premium",
      status: "active",
      avatar: "https://randomuser.me/api/portraits/women/50.jpg",
      joinedAt: "2024-09-15",
    },
    {
      id: "u5",
      name: "Martín Sánchez",
      email: "martin.sanchez@yahoo.com",
      membership: "Standard",
      status: "suspended",
      avatar: "https://randomuser.me/api/portraits/men/75.jpg",
      joinedAt: "2024-06-22",
    },
    {
      id: "u6",
      name: "Valentina Ramos",
      email: "valentina.ramos@protonmail.com",
      membership: "Basic",
      status: "active",
      avatar: "https://randomuser.me/api/portraits/women/33.jpg",
      joinedAt: "2023-10-01",
    },
    {
      id: "u7",
      name: "Pablo Martínez",
      email: "pablo.martinez@gmail.com",
      membership: "Premium",
      status: "active",
      avatar: "https://randomuser.me/api/portraits/men/43.jpg",
      joinedAt: "2024-12-17",
    },
    {
      id: "u8",
      name: "Camila Suárez",
      email: "camila.suarez@outlook.com",
      membership: "Standard",
      status: "inactive",
      avatar: "https://randomuser.me/api/portraits/women/21.jpg",
      joinedAt: "2023-07-12",
    },
    {
      id: "u9",
      name: "Agustín Gómez",
      email: "agustin.gomez@gmail.com",
      membership: "Basic",
      status: "active",
      avatar: "https://randomuser.me/api/portraits/men/61.jpg",
      joinedAt: "2024-05-04",
    },
    {
      id: "u10",
      name: "Sofía López",
      email: "sofia.lopez@gmail.com",
      membership: "Premium",
      status: "active",
      avatar: "https://randomuser.me/api/portraits/women/56.jpg",
      joinedAt: "2025-03-09",
    },
  ];
}

export const TableUsers = async () => {
  const data = await getData();

  return (
    <LayoutHome>
      <DataTable columns={columns} data={data} />
    </LayoutHome>
  );
};

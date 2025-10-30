"use client"

import { ColumnDef } from "@tanstack/react-table"
import Image from "next/image"
import { Badge } from "@/components/ui/badge" // si usás shadcn/ui
import { cn } from "@/lib/utils"

export type User = {
    id: string
    name: string
    email: string
    membership: "Basic" | "Standard" | "Premium"
    status: "active" | "inactive" | "suspended"
    avatar: string
    joinedAt: string
}

export const columns: ColumnDef<User>[] = [
    {
        accessorKey: "name",
        header: "Usuario",
        cell: ({ row }) => {
            const { avatar, name, email } = row.original
            return (
                <div className="flex items-center gap-3">
                    <Image
                        src={avatar}
                        alt={name}
                        width={36}
                        height={36}
                        className="rounded-full object-cover"
                    />
                    <div>
                        <p className="font-medium">{name}</p>
                        <p className="text-sm text-muted-foreground">{email}</p>
                    </div>
                </div>
            )
        },
    },
    {
        accessorKey: "membership",
        header: "Membresía",
        cell: ({ getValue }) => {
            const membership = getValue() as string
            const color =
                membership === "Premium"
                    ? "bg-yellow-100 text-yellow-800"
                    : membership === "Standard"
                        ? "bg-blue-100 text-blue-800"
                        : "bg-gray-100 text-gray-800"

            return (
                <span
                    className={`px-2 py-1 text-xs font-semibold rounded-full ${color}`}
                >
                    {membership}
                </span>
            )
        },
    },
    {
        accessorKey: "status",
        header: "Estado",
        cell: ({ getValue }) => {
            const status = getValue() as string
            const color =
                status === "active"
                    ? "bg-green-100 text-green-800"
                    : status === "inactive"
                        ? "bg-gray-200 text-gray-700"
                        : "bg-red-100 text-red-800"

            return (
                <Badge
                    variant="secondary"
                    className={`capitalize px-2 py-1 text-xs font-semibold rounded-full ${color}`}
                >
                    {status}
                </Badge>
            )
        },
    },
    {
        accessorKey: "joinedAt",
        header: "Fecha de ingreso",
        cell: ({ getValue }) => {
            const date = new Date(getValue() as string)
            return (
                <span className="text-sm text-muted-foreground">
                    {date.toLocaleDateString("es-AR", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                    })}
                </span>
            )
        },
    },
]

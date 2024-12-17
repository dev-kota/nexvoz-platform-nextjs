"use client"

import { ColumnDef } from "@tanstack/react-table"
import { Button } from "@/components/ui/button"
import { TrashIcon } from "lucide-react";
import { TeamMember } from "@/app/this/constants/type";

// Update columns definition to match the data type
export default function createTeamColumns(handleRemove: (id: number) => void): ColumnDef<TeamMember>[] {
    return [
        {
            accessorKey: "member",
            header: "Team Member",
            cell: ({ row }) => {
                return (
                    <div className="flex items-center gap-4">
                        <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 font-medium">
                            {row.original.name[0]}
                        </div>
                        <div>
                            <div className="font-medium">{row.original.name}</div>
                            <div className="text-sm text-gray-500">{row.original.email}</div>
                        </div>
                    </div>
                )
            }
        },
        {
            accessorKey: "role",
            header: "Role",
            cell: ({ row }) => {
                return (
                    <div className="font-medium">
                        {row.original.role}
                    </div>
                )
            }
        },
        {
            accessorKey: "status",
            header: "Status",
            cell: ({ row }) => {
                return (
                    <div className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${row.original.status === 'Active'
                            ? 'bg-green-100 text-green-800'
                            : row.original.status === 'Pending'
                                ? 'bg-yellow-100 text-yellow-800'
                                : 'bg-gray-100 text-gray-800'
                        }`}>
                        {row.original.status}
                    </div>
                )
            }
        },
        {
            id: "actions",
            header: "Actions",
            cell: ({ row }) => {
                return (
                    <Button variant="destructive" onClick={() => handleRemove(row.original.id)}>
                        <TrashIcon className="w-4 h-4" />
                    </Button>
                )
            }
        }
    ];
}

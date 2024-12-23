"use client"

import { Knowledge } from "@/app/this/constants/type";
import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { EyeIcon, TrashIcon, DownloadIcon, ArrowUpDown } from "lucide-react";

export default function createKnowledgeColumns(
    handleView: (knowledge: Knowledge) => void,
    handleDelete: (id: string) => void,
    handleExport: (knowledge: Knowledge) => void,
): ColumnDef<Knowledge>[] {
    return [
        {
            accessorKey: "name",
            header: () => (
                <div className="flex items-center">
                    Name
                    <Button variant="ghost" className="ml-2">
                        <ArrowUpDown className="h-4 w-4" />
                    </Button>
                </div>
            ),
            cell: ({ row }) => row.original.name
        },
        {
            accessorKey: "description",
            header: "Description",
            cell: ({ row }) => row.original.description
        },
        {
            accessorKey: "type",
            header: "Type",
            cell: ({ row }) => {
                return (
                    <div className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                        ${row.original.type === 'PDF'
                            ? 'bg-red-100 text-red-800'
                            : row.original.type === 'AUDIO'
                                ? 'bg-blue-100 text-blue-800'
                                : row.original.type === 'VIDEO'
                                    ? 'bg-purple-100 text-purple-800'
                                    : 'bg-gray-100 text-gray-800'
                        }`}>
                        {row.original.type}
                    </div>
                )
            }
        },
        {
            accessorKey: "size",
            header: "Size",
            cell: ({ row }) => {
                const sizeInMB = row.original.size / (1024 * 1024);
                return `${sizeInMB.toFixed(2)} MB`
            }
        },
        {
            accessorKey: "createdAt",
            header: () => (
                <div className="flex items-center">
                    Created At
                    <Button variant="ghost" className="ml-2">
                        <ArrowUpDown className="h-4 w-4" />
                    </Button>
                </div>
            ),
            cell: ({ row }) => {
                return new Date(row.original.createdAt).toLocaleString()
            }
        },
        {
            id: "actions",
            header: "Actions",
            cell: ({ row }) => {
                return (
                    <div className="flex items-center gap-2">
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleView(row.original)}
                        >
                            <EyeIcon className="w-4 h-4" />
                        </Button>
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleExport(row.original)}
                        >
                            <DownloadIcon className="w-4 h-4" />
                        </Button>
                        <Button
                            variant="destructive"
                            size="sm"
                            onClick={() => handleDelete(row.original.id)}
                        >
                            <TrashIcon className="w-4 h-4" />
                        </Button>
                    </div>
                )
            }
        }
    ]
}


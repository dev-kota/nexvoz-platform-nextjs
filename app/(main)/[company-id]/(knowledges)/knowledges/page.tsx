"use client";

import { useState, useEffect } from "react";
import { Search, SlidersHorizontal, Upload } from "lucide-react";
import { Input } from "@/components/ui/input";
import { KnowledgeTable } from "../this/components/knowledge-table";
import createKnowledgeColumns from "../this/components/knowledge-table/columns";
import SubHeader from "@/app/(main)/this/components/sub-header";
import Container from "@/app/this/components/container";
import { Button } from "@/components/ui/button";
import { useReactTable, getCoreRowModel } from "@tanstack/react-table";
import { DataTableViewOptions } from "@/app/this/components/table/datatable-view";
import OperationContainer, { OperationButton } from "@/app/(main)/this/components/operation-container";
import { DataTablePagination } from "@/app/this/components/table/datatable-pagination";
import { Knowledge } from "@/app/this/constants/type";
import { knowledges as sample_knowledges } from "@/app/this/constants/garbage";
import { Download } from "lucide-react";

export default function KnowledgePage() {
    const [knowledges, setKnowledges] = useState<Knowledge[]>([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [pagination, setPagination] = useState({
        pageIndex: 0,
        pageSize: 10,
        total: 245
    });

    // Filter knowledges based on search query
    useEffect(() => {
        const filteredKnowledges = sample_knowledges.filter(knowledge =>
            knowledge.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            knowledge.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
            knowledge.size.toString().includes(searchQuery) ||
            new Date(knowledge.createdAt).toLocaleString().toLowerCase().includes(searchQuery.toLowerCase())
        );
        setKnowledges(filteredKnowledges);
    }, [searchQuery, pagination]);

    const handleView = (knowledge: Knowledge) => {
        console.log(knowledge);
    }

    const handleDelete = (id: string) => {
        console.log(id);
    }

    const handleExport = (knowledge: Knowledge) => {
        console.log(knowledge);
    }

    const table = useReactTable({
        data: knowledges,
        columns: createKnowledgeColumns(handleView, handleDelete, handleExport),
        getCoreRowModel: getCoreRowModel(),
        initialState: {}, // Add empty initial state to avoid hydration warning
    });

    return (
        <div className="flex flex-col">
            <SubHeader>
                <div className="flex items-center justify-start gap-2">
                    <div className="relative flex-1 justify-start max-w-lg">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                            placeholder="Search knowledge..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="pl-9"
                        />
                    </div>
                    <div className="flex items-center gap-2 ml-auto">
                        <DataTableViewOptions table={table}>
                            <Button variant="outline">
                                <SlidersHorizontal className="h-4 w-4 md:mr-2" />
                                <span className="hidden md:block">Filter</span>
                            </Button>
                        </DataTableViewOptions>
                    </div>
                </div>
            </SubHeader>

            <Container>
                <div className="flex flex-col gap-2 md:gap-4">
                    <KnowledgeTable table={table} />
                    <DataTablePagination pagination={pagination} setPagination={setPagination} />
                </div>
            </Container>

            <OperationContainer>
                <OperationButton iconNode={Upload} tooltip="Upload" />
            </OperationContainer>
        </div>
    );
}
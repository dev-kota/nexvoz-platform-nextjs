"use client";

import { useState, useEffect } from "react";
import { teamMembers as sample_teamMembers } from "@/app/this/constants/garbage";
import { UserPlus, Search, SlidersHorizontal } from "lucide-react";
import { Input } from "@/components/ui/input";
import { TeamTable } from "../this/components/team-table";
import createTeamColumns from "../this/components/team-table/columns";
import SubHeader from "@/app/(main)/this/components/sub-header";
import Container from "@/app/this/components/container";
import { Button } from "@/components/ui/button";
import { useReactTable, getCoreRowModel, Table as TableType } from "@tanstack/react-table";
import { DataTableViewOptions } from "@/app/this/components/table/datatable-view";
import { TeamMember } from "@/app/this/constants/type";
import OperationContainer, { OperationButton } from "@/app/(main)/this/components/operation-container";
import InviteDialog from "../this/components/invite-dialog.tsx";
import { DataTablePagination } from "@/app/this/components/table/datatable-pagination";


export default function TeamPage() {
    const [searchQuery, setSearchQuery] = useState("");
    const [teamMembers, setTeamMembers] = useState<TeamMember[]>(sample_teamMembers);
    const [openInviteDialog, setOpenInviteDialog] = useState(false);
    const [pagination, setPagination] = useState({
        pageIndex: 0,
        pageSize: 10,
        total: 127
    });

    // Filter team members based on search query
    useEffect(() => {
        const filteredTeamMembers = sample_teamMembers.filter(member =>
            member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            member.email.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setTeamMembers(filteredTeamMembers);
    }, [searchQuery, pagination]);

    const handleRemove = (id: number) => {
        const newTeamMembers = teamMembers.filter(member => member.id !== id);
        setTeamMembers(newTeamMembers);
    }

    const handleOpenInviteDialog = () => {
        setOpenInviteDialog(true);
    }

    const handleAddTeamMember = (email: string) => {
        console.log("add team member");
        const newTeamMember = {
            id: teamMembers.length + 1,
            name: "New Team Member",
            email: email,
            avatar: "/images/agents/agent-male-1.jpg",
            role: "Agent",
            status: "Pending",
        };
        setTeamMembers([...teamMembers, newTeamMember]);
    }


    const table = useReactTable({
        data: teamMembers,
        columns: createTeamColumns(handleRemove),
        getCoreRowModel: getCoreRowModel(),
    });

    

    return (
        <div className="flex flex-col">
            <SubHeader>
                <div className="flex items-center justify-start gap-2">
                    <div className="relative flex-1 justify-start max-w-lg">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                            placeholder="Search team members..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="pl-9"
                        />
                    </div>
                    <div className="flex items-center gap-2 ml-auto">
                        <DataTableViewOptions table={table} >
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
                    <TeamTable
                        table={table}
                    />
                    <DataTablePagination pagination={pagination} setPagination={setPagination} />
                </div>
            </Container>

            <OperationContainer>
                <OperationButton tooltip="Add team member" iconNode={UserPlus} onClick={handleOpenInviteDialog} />
            </OperationContainer>

            {openInviteDialog && <InviteDialog open={openInviteDialog} onOpenChange={setOpenInviteDialog} handleAddTeamMember={handleAddTeamMember} />}
        </div>
    );
}

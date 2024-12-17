"use client";

import { useState, useMemo } from "react";
import { Plus, Search, SlidersHorizontal, Table } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Container from "@/app/this/components/container";
import SubHeader from "@/app/(main)/this/components/sub-header";
import OperationContainer, { OperationButton } from "@/app/(main)/this/components/operation-container";
import { teamMembers } from "@/app/this/constants/garbage";
import { TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";


export default function TeamPage() {
    const [searchQuery, setSearchQuery] = useState("");

    // Filter team members based on search query
    const filteredTeamMembers = useMemo(() => {
        return teamMembers.filter((member: any) =>
            member.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }, [teamMembers, searchQuery]);

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
                        <Button variant="outline">
                            <SlidersHorizontal className="h-4 w-4 md:mr-2" />
                            <span className="hidden md:block">Filter</span>
                        </Button>
                    </div>
                </div>
            </SubHeader>

            <Container className="grid grid-cols-[repeat(auto-fill,minmax(320px,1fr))] md:grid-cols-[repeat(auto-fill,minmax(400px,1fr))] gap-2 md:gap-4 w-full">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Name</TableHead>
                            <TableHead>Email</TableHead>
                            <TableHead>Role</TableHead>
                            <TableHead>Status</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {filteredTeamMembers.map((member) => (
                            <TableRow key={member.id}>
                                <TableCell className="font-medium">{member.name}</TableCell>
                                <TableCell>{member.email}</TableCell>
                                <TableCell>{member.role}</TableCell>
                                <TableCell>
                                    <span className={`px-2 py-1 text-sm rounded ${
                                        member.status === "Active" 
                                            ? "bg-green-100 text-green-800"
                                            : "bg-yellow-100 text-yellow-800"
                                    }`}>
                                        {member.status}
                                    </span>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Container>

            <OperationContainer>
                <OperationButton tooltip="Add team member" iconNode={Plus}>
                </OperationButton>
            </OperationContainer>
        </div>
    );
}
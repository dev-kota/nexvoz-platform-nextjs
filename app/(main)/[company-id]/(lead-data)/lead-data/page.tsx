"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Search } from "lucide-react";
import { useState } from "react";
import { Table, TableBody, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function LeadDataPage() {
    const [searchQuery, setSearchQuery] = useState("");

    return (
        <div className="h-screen flex flex-col">
            <div className="p-6 border-b sticky top-0 bg-background z-10">
                <div className="flex justify-between items-center">
                    <div className="relative w-96">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
                        <Input
                            className="pl-10"
                            type="search"
                            placeholder="Search leads..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>

                    <Button>
                        <Plus className="h-4 w-4 mr-2" />
                        Import Leads
                    </Button>
                </div>
            </div>

            <div className="flex-1 overflow-y-auto p-6">
                <div className="rounded-lg border">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Name</TableHead>
                                <TableHead>Phone</TableHead>
                                <TableHead>Email</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead>Last Contact</TableHead>
                                <TableHead>Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {/* Add table rows here when data is available */}
                        </TableBody>
                    </Table>
                </div>
            </div>
        </div>
    );
}
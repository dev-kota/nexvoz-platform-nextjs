"use client";

import { useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Plus, Search, SlidersHorizontal } from "lucide-react";
import AdvancedSearch from "../this/components/advanced-search";
import SubHeader from "@/app/(main)/this/components/sub-header";
import LeadGroupListSheet from "../this/components/lead-group-list/sheet";

export default function LeadDataPage() {
    const [searchQuery, setSearchQuery] = useState("");
    const [openLeadGroups, setOpenLeadGroups] = useState(false);
    const [advancedSearchQuery, setAdvancedSearchQuery] = useState("");
    const [openAdvancedSearch, setOpenAdvancedSearch] = useState(false);

    const handleSearchChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
    }, []);

    const handleAdvancedSearchChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setAdvancedSearchQuery(e.target.value);
    }, []);

    const handleOpenAdvancedSearch = useCallback(() => {
        setOpenAdvancedSearch(true);
    }, []);

    const handleOpenLeadGroups = useCallback(() => {
        setOpenLeadGroups(true);
    }, []);

    return (
        <div className="h-screen flex flex-col">
            <div className="flex-1 flex flex-col">
                <SubHeader>
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <div className="relative flex-1 max-w-[600px]">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
                                <Input
                                    className="pl-10"
                                    type="search"
                                    placeholder="Search leads..."
                                    value={searchQuery}
                                    onChange={handleSearchChange}
                                />
                            </div>

                            <Button variant="outline" onClick={handleOpenAdvancedSearch}>
                                <SlidersHorizontal className="h-4 w-4 mr-2" />
                                Advanced Search
                            </Button>
                        </div>

                        <div className="flex gap-2">
                            <Button variant="outline" className="sm:w-auto w-full">
                                <Plus className="h-4 w-4 mr-2" />
                                Add Lead
                            </Button>
                            <Button className="sm:w-auto w-full">
                                <Plus className="h-4 w-4 mr-2" />
                                Import Leads
                            </Button>
                        </div>
                    </div>
                </SubHeader>

                <main className="flex-1 p-6 overflow-auto">
                    <div className="rounded-lg border">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Name</TableHead>
                                    <TableHead>Phone</TableHead>
                                    <TableHead>Email</TableHead>
                                    <TableHead>Status</TableHead>
                                    <TableHead>Group</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {/* Add table rows here when data is available */}
                            </TableBody>
                        </Table>
                    </div>
                </main>
            </div>

            <Button className="fixed bottom-4 right-4" onClick={handleOpenLeadGroups}>Open Lead Groups</Button>

            <LeadGroupListSheet open={openLeadGroups} onOpenChange={setOpenLeadGroups} />

            <AdvancedSearch open={openAdvancedSearch} onOpenChange={setOpenAdvancedSearch} searchQuery={advancedSearchQuery} onSearchChange={handleAdvancedSearchChange} />
        </div>
    );
}
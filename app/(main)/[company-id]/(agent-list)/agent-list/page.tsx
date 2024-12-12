"use client";

import { useState, useMemo } from "react";
import { agents } from "@/app/this/constants/garbage";
import { Agent } from "@/app/this/constants/type";


import { Plus, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import DialerDialog from "../this/components/dialer-dialog";
import AgentSheetContent from "../this/components/agent-sheet-content";
import AgentCard from "../this/components/agent-card";

export default function AgentListPage() {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedAgent, setSelectedAgent] = useState<Agent | null>(null);
    const [openDialer, setOpenDialer] = useState(false);


    // Filter agents based on search query
    const filteredAgents = useMemo(() => {
        return agents.filter(agent =>
            agent.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }, [agents, searchQuery]);

    const handleOpenDialer = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        setOpenDialer(true);
    };

    return (
        <div className="h-screen flex flex-col">
            <div className="p-6 border-b sticky top-0 bg-background z-10">
                <div className="flex justify-between items-center">
                    <div className="relative w-96">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
                        <Input
                            className="pl-10"
                            type="search"
                            placeholder="Search agents by name..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>

                    <Button>
                        <Plus className="h-4 w-4 mr-2" />
                        Create New Agent
                    </Button>
                </div>
            </div>

            <div className="flex-1 overflow-y-auto p-6">
                <div className="grid grid-cols-[repeat(auto-fill,minmax(400px,1fr))] gap-6 w-full">
                    {filteredAgents.map((agent) => (
                        <AgentCard key={agent.id} agent={agent} handleClickAgent={() => setSelectedAgent(agent)} handleOpenDialer={handleOpenDialer} />
                    ))}
                </div>
            </div>

            {selectedAgent && <AgentSheetContent agent={selectedAgent} handleCloseSheet={() => setSelectedAgent(null)} handleOpenDialer={handleOpenDialer} />}
            {openDialer && <DialerDialog open={openDialer} onOpenChange={setOpenDialer} />}
        </div>
    );
}

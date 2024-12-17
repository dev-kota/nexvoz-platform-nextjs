"use client";

import { Sheet, SheetContent, SheetDescription, SheetTitle } from "@/components/ui/sheet";
import LeadGroupList from ".";

interface LeadGroupListProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

export default function LeadGroupListSheet({ open, onOpenChange }: LeadGroupListProps) {
    return (
        <Sheet open={open} onOpenChange={onOpenChange}>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <SheetTitle>Lead Groups</SheetTitle>
                <SheetDescription>View and manage your lead groups</SheetDescription>
                <div className="pt-6">
                    <LeadGroupList />
                </div>
            </SheetContent>
        </Sheet>
    );
}
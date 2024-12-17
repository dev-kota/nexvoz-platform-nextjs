import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export default function LeadGroupList() {

    return (
        <div className="flex flex-col h-full">
            <div className="mb-4">
                <Button variant="outline" className="w-full">
                    <Plus className="h-4 w-4 mr-2" />
                    New Group
                </Button>
            </div>

            <div className="flex-1 overflow-y-auto space-y-2">
                {/* Placeholder for lead groups - replace with actual data */}
                <div className="p-4 rounded-lg border hover:bg-accent cursor-pointer">
                    <h3 className="font-medium">Cold Leads</h3>
                    <p className="text-sm text-muted-foreground">120 leads</p>
                </div>
                <div className="p-4 rounded-lg border hover:bg-accent cursor-pointer">
                    <h3 className="font-medium">Hot Leads</h3>
                    <p className="text-sm text-muted-foreground">45 leads</p>
                </div>
                <div className="p-4 rounded-lg border hover:bg-accent cursor-pointer">
                    <h3 className="font-medium">Follow Up</h3>
                    <p className="text-sm text-muted-foreground">78 leads</p>
                </div>
            </div>
        </div>
    )

}
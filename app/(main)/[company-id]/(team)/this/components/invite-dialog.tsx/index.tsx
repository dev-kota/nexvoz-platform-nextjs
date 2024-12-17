"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function InviteDialog({ open, onOpenChange, handleAddTeamMember }: { open: boolean, onOpenChange: (open: boolean) => void, handleAddTeamMember: (email: string) => void }) {
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    
    const validateEmail = (email: string) => {
        if (!email) {
            setError("Email is required");
            return false;
        }
        if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
            setError("Please enter a valid email address");
            return false;
        }
        setError("");
        return true;
    };

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
        validateEmail(e.target.value);
    };

    const handleInvite = () => {
        if (validateEmail(email)) {
            handleAddTeamMember(email);
            onOpenChange(false);
        }
    }

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="w-full md:max-w-md">
                <DialogHeader>
                    <DialogTitle>Invite Team Member</DialogTitle>
                    <DialogDescription>Invite a new team member to join your team.</DialogDescription>
                </DialogHeader>
                <div className="flex flex-col gap-2">
                    <div className="space-y-1">
                        <Input 
                            placeholder="Email" 
                            onChange={handleEmailChange}
                            value={email}
                        />
                        {error && (
                            <p className="text-sm text-red-500">{error}</p>
                        )}
                    </div>
                    <Button onClick={handleInvite}>Invite</Button>
                </div>
            </DialogContent>
        </Dialog>
    );
}
"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function SignUp() {
    const router = useRouter();

    return (
        <div className="relative z-10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-4 sm:px-8 py-8 rounded-lg shadow-lg border w-full max-w-[95%] sm:max-w-md">
            <div className="space-y-6">
                <div className="space-y-2 text-center">
                    <h1 className="text-2xl font-semibold tracking-tight">Sign Up</h1>
                    <p className="text-sm text-muted-foreground">
                        Create a new account to get started
                    </p>
                </div>
                <Button
                    className="w-full"
                    onClick={() => router.push("/sign-up/user-info")}
                >
                    Get Started
                </Button>
            </div>
        </div>
    );
}
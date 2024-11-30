"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Loader2, CheckCircle2, XCircle } from "lucide-react";

export default function CodeVerification() {
    const router = useRouter();
    const [codes, setCodes] = useState(["", "", "", "", "", ""]);
    const [isVerifying, setIsVerifying] = useState(false);
    const [verificationResult, setVerificationResult] = useState<"success" | "error" | null>(null);
    const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

    const handleChange = (index: number, value: string) => {
        const newValue = value.replace(/\D/g, "");
        if (newValue.length <= 1) {
            const newCodes = [...codes];
            newCodes[index] = newValue;
            setCodes(newCodes);

            // Move to next input if value is entered
            if (newValue.length === 1 && index < 5) {
                inputRefs.current[index + 1]?.focus();
            }
        }
    };

    const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Backspace" && !codes[index] && index > 0) {
            inputRefs.current[index - 1]?.focus();
        }
    };

    const handlePaste = (e: React.ClipboardEvent) => {
        e.preventDefault();
        const pastedData = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, 6);
        const newCodes = [...codes];
        pastedData.split("").forEach((char, index) => {
            if (index < 6) newCodes[index] = char;
        });
        setCodes(newCodes);
        if (pastedData.length > 0) {
            inputRefs.current[Math.min(pastedData.length - 1, 5)]?.focus();
        }
    };

    useEffect(() => {
        const fullCode = codes.join("");
        if (fullCode.length === 6) {
            setIsVerifying(true);
            // Simulate API call
            setTimeout(() => {
                // Simulate success (you should replace this with actual API call)
                const success = Math.random() > 0.5;
                setVerificationResult(success ? "success" : "error");
                if (success) {
                    setTimeout(() => {
                        router.push("/sign-up/company-info");
                    }, 1000);
                } else {
                    setTimeout(() => {
                        setIsVerifying(false);
                        setVerificationResult(null);
                        setCodes(["", "", "", "", "", ""]);
                        inputRefs.current[0]?.focus();
                    }, 2000);
                }
            }, 3000);
        }
    }, [codes, router]);

    return (
        <div className="relative z-10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-4 sm:px-8 py-8 rounded-lg shadow-lg border w-full max-w-[95%] sm:max-w-md">
            <div className="space-y-6 w-full">
                <div className="space-y-2 text-center">
                    <h1 className="text-2xl font-semibold tracking-tight">Verify your account</h1>
                    <p className="text-sm text-muted-foreground">
                        Enter the verification code sent to your email
                    </p>
                </div>

                <div className="flex justify-center gap-2">
                    {codes.map((code, index) => (
                        <Input
                            key={index}
                            type="text"
                            maxLength={1}
                            value={code}
                            ref={el => { inputRefs.current[index] = el; }}
                            onChange={e => handleChange(index, e.target.value)}
                            onKeyDown={e => handleKeyDown(index, e)}
                            onPaste={handlePaste}
                            className="w-12 h-12 text-center text-lg"
                        />
                    ))}
                </div>

                <Dialog open={isVerifying}>
                    <DialogContent className="sm:max-w-md border-none bg-transparent shadow-none">
                        <div className="flex flex-col items-center justify-center p-6 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 rounded-lg border shadow-lg animate-in fade-in-0 zoom-in-95">
                            {!verificationResult && (
                                <>
                                    <Loader2 className="h-12 w-12 animate-spin text-primary" />
                                    <p className="mt-4 text-lg font-medium">Verifying your code...</p>
                                    <p className="text-sm text-muted-foreground">This will only take a moment</p>
                                </>
                            )}
                            {verificationResult === "success" && (
                                <>
                                    <CheckCircle2 className="h-12 w-12 text-green-500 animate-in zoom-in duration-300" />
                                    <p className="mt-4 text-lg font-medium text-green-500">Verification successful!</p>
                                    <p className="text-sm text-muted-foreground">Redirecting you to the next step...</p>
                                </>
                            )}
                            {verificationResult === "error" && (
                                <>
                                    <XCircle className="h-12 w-12 text-destructive animate-in zoom-in duration-300" />
                                    <p className="mt-4 text-lg font-medium text-destructive">Invalid verification code</p>
                                    <p className="text-sm text-muted-foreground">Please try again</p>
                                </>
                            )}
                        </div>
                    </DialogContent>
                </Dialog>
            </div>
        </div>
    );
}
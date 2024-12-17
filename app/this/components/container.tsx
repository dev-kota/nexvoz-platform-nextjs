import { cn } from "@/lib/utils";

export default function Container({ children, className }: { children: React.ReactNode, className?: string }) {
    return (
        <div className={cn("flex-1 overflow-y-auto p-2 md:p-4", className)}>
            {children}
        </div>
    );
}
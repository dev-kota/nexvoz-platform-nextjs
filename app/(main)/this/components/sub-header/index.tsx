export default function SubHeader({ children }: { children: React.ReactNode }) {
    return (
        <div className="sticky top-0 z-10 bg-background border-b p-6">
            {children}
        </div>
    );
}
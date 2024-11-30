import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-background">
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-4">
                404 - Page Not Found
            </h1>
            <p className="leading-7 text-muted-foreground mb-8">
                Sorry, the page you are looking for does not exist.
            </p>
            <Link href="/">
                <Button variant="default">
                    Go back to Home
                </Button>
            </Link>
        </div>
    )
}
"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useSelector, useDispatch } from "react-redux";
import { changeSidebarCollapsed } from "@/app/this/store/actions/sidebar";
import { useTheme } from "next-themes";
import {
    ChevronDown,
    LayoutDashboard,
    Users,
    CreditCard,
    Info,
    UserSearch,
    DatabaseZap,
    NotebookTabs,
    CalendarSync,
    PhoneCall,
    ChevronLeft,
    LogOut,
    Settings,
    Bell,
    Sun,
    Moon,
    Laptop,
    Home,
    Menu,
    User
} from "lucide-react";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
    DropdownMenuSeparator,
    DropdownMenuSub,
    DropdownMenuSubTrigger,
    DropdownMenuSubContent,
} from "@/components/ui/dropdown-menu";

import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar";

import { Sheet, SheetContent, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import VisuallyHidden from "@/app/this/components/visually-hidden";

import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";

import type { RootState } from "@/app/this/store/reducers";
import { usePathname } from "next/navigation";
import { useDeviceInfo } from "@/hooks/use-device-info";

const getMenuItems = (companyId: string) => [
    { href: `/${companyId}`, icon: LayoutDashboard, label: "Dashboard" },
    { href: `/${companyId}/agents`, icon: UserSearch, label: "Agents" },
    { href: `/${companyId}/knowledges`, icon: DatabaseZap, label: "Knowledge" },
    { href: `/${companyId}/leads`, icon: NotebookTabs, label: "Leads" },
    { href: `/${companyId}/campaigns`, icon: CalendarSync, label: "Campaigns" },
    { href: `/${companyId}/calls`, icon: PhoneCall, label: "Calls" },
    null, // separator
    { href: `/${companyId}/team`, icon: Users, label: "Team" },
    { href: `/${companyId}/subscription`, icon: CreditCard, label: "Subscription" },
    { href: `/${companyId}/information`, icon: Info, label: "Information" },
];

export default function Sidebar() {
    const dispatch = useDispatch();
    const pathname = usePathname();
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const isCollapsed = useSelector((state: RootState) => state.sidebar.collapsed);
    const companyId = useSelector((state: RootState) => state.auth.companyId);
    const MENU_ITEMS = getMenuItems(companyId);
    const { device } = useDeviceInfo();
    const isMobile = device === "mobile";
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const toggleCollapse = useCallback(() => {
        dispatch(changeSidebarCollapsed(!isCollapsed));
    }, [dispatch, isCollapsed]);

    const MenuItem = ({ href, icon: Icon, label, isCollapsed }: { href: string, icon: React.ElementType, label: string, isCollapsed: boolean }) => (
        <Link
            href={href}
            className={cn(
                "flex items-center gap-2 p-2 rounded-md hover:bg-muted text-lg",
                isCollapsed && "justify-center",
                pathname === href && "bg-primary/10 text-primary",
                isMobile && "text-sm p-1"
            )}
            onClick={() => isMobile && setIsOpen(false)}
        >
            <Icon className={cn("flex-shrink-0 text-muted-foreground", isMobile ? "h-4 w-4" : "h-6 w-6")} />
            {(!isCollapsed || isMobile) && <span className="text-muted-foreground">{label}</span>}
        </Link>
    );

    if (!mounted) {
        return null;
    }

    if (isMobile) {
        return (
            <>
                <nav className="fixed t-0 left-0 right-0 bg-card border-b md:border-t z-50">
                    <div className="flex items-center justify-between p-2 md:p-4">
                        <div className="flex items-center gap-2">
                            <Button variant="ghost" size="icon" onClick={() => setIsOpen(true)}>
                                <Menu className="h-5 w-5" />
                            </Button>
                        </div>
                        <div className="flex items-center gap-2">
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="ghost" size="icon">
                                        <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                                        <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent>
                                    <DropdownMenuItem onClick={() => setTheme("light")}>
                                        <Sun className="mr-2 h-4 w-4" />
                                        <span>Light</span>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem onClick={() => setTheme("dark")}>
                                        <Moon className="mr-2 h-4 w-4" />
                                        <span>Dark</span>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem onClick={() => setTheme("system")}>
                                        <Laptop className="mr-2 h-4 w-4" />
                                        <span>System</span>
                                    </DropdownMenuItem>
                                    <DropdownMenuSeparator />
                                    
                                </DropdownMenuContent>
                            </DropdownMenu>
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="ghost" size="icon">
                                        <Avatar className="h-5 w-5">
                                            <AvatarImage src="/images/avatar.svg" />
                                            <AvatarFallback>UN</AvatarFallback>
                                        </Avatar>
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent>
                                    <DropdownMenuItem>
                                        <User className="mr-2 h-4 w-4" />
                                        <span>Profile</span>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                        <Bell className="mr-2 h-4 w-4" />
                                        <span>Notifications</span>
                                    </DropdownMenuItem>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem>
                                        <LogOut className="mr-2 h-4 w-4" />
                                        <span>Logout</span>
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                    </div>
                </nav>

                <Sheet open={isOpen} onOpenChange={setIsOpen}>
                    <SheetContent side="left" className="w-fit min-w-[60vw] p-2 md:p-4 ">
                        <VisuallyHidden>
                            <SheetTitle>Navigation Menu</SheetTitle>
                            <SheetDescription>Navigation Menu</SheetDescription>
                        </VisuallyHidden>
                        <div className="flex flex-col h-full">
                            <div className="flex items-center gap-2 p-2 md:p-4 border-b">
                                <Image
                                    src="/images/company-logo.jpg"
                                    alt="Company Logo"
                                    width={32}
                                    height={32}
                                />
                                <h2 className="font-semibold">World Wide Inc.</h2>
                            </div>

                            <nav className="flex-1 overflow-y-auto p-2 md:p-4">
                                <div className="space-y-2">
                                    {MENU_ITEMS.map((item, index) =>
                                        item ? (
                                            <MenuItem key={item.href} {...item} isCollapsed={false} />
                                        ) : (
                                            <div key={`separator-${index}`} className="h-px w-full bg-border my-2"></div>
                                        )
                                    )}
                                </div>
                            </nav>
                        </div>
                    </SheetContent>
                </Sheet>
            </>
        );
    } else {
        return (
            <div className="relative flex">
                <div className={cn(
                    "flex flex-col h-screen bg-card border-r transition-all duration-300",
                    isCollapsed ? "w-16" : "w-64"
                )}>
                    {/* Logo & Company Name - Fixed */}
                    <div className={cn("p-2 flex flex-col items-center shrink-0", !isCollapsed ? "border-b" : "")}>
                        <Image
                            src="/images/company-logo.jpg"
                            alt="Company Logo"
                            width={64}
                            height={64}
                            className="mb-2"
                        />
                        {!isCollapsed && <h2 className="font-semibold">World Wide Inc.</h2>}
                    </div>

                    {/* Menu Items - Scrollable */}
                    <nav className="flex-1 p-2 md:p-4 overflow-y-auto">
                        <div className="space-y-2">
                            {MENU_ITEMS.map((item, index) =>
                                item ? (
                                    <MenuItem key={item.href} {...item} isCollapsed={isCollapsed} />
                                ) : (
                                    <div key={`separator-${index}`} className="h-px w-full bg-border my-2"></div>
                                )
                            )}
                        </div>
                    </nav>

                    {/* User Profile - Fixed */}
                    <div className="p-2 md:p-4 border-t shrink-0">
                        <DropdownMenu>
                            <DropdownMenuTrigger className={cn(
                                "flex items-center gap-2 w-full p-2 rounded-md hover:bg-muted transition-colors",
                                isCollapsed ? "justify-center" : "justify-between"
                            )}>
                                <div className="flex items-center gap-2">
                                    <Avatar className="h-8 w-8">
                                        <AvatarImage src="/images/avatar.svg" />
                                        <AvatarFallback>UN</AvatarFallback>
                                    </Avatar>
                                    {!isCollapsed && (
                                        <div className="flex-1 text-left">
                                            <div className="font-medium">User Name</div>
                                            <div className="text-xs text-muted-foreground">user@example.com</div>
                                        </div>
                                    )}
                                </div>
                                {!isCollapsed && <ChevronDown className="h-4 w-4 text-muted-foreground" />}
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align={isCollapsed ? "center" : "end"} className="w-56">
                                <DropdownMenuItem asChild>
                                    <Link href="/settings" className="flex items-center gap-2 cursor-pointer">
                                        <Settings className="h-4 w-4" />
                                        <span>Settings</span>
                                    </Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem asChild>
                                    <Link href="/notifications" className="flex items-center gap-2 cursor-pointer">
                                        <Bell className="h-4 w-4" />
                                        <span>Notifications</span>
                                    </Link>
                                </DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuSub>
                                    <DropdownMenuSubTrigger className="cursor-pointer">
                                        {theme === 'light' && <Sun className="h-4 w-4 mr-2" />}
                                        {theme === 'dark' && <Moon className="h-4 w-4 mr-2" />}
                                        {theme === 'system' && <Laptop className="h-4 w-4 mr-2" />}
                                        <span>Theme</span>
                                    </DropdownMenuSubTrigger>
                                    <DropdownMenuSubContent>
                                        <DropdownMenuItem onClick={() => setTheme("light")} className={cn("cursor-pointer", theme === "light" && "bg-accent")}>
                                            <Sun className="h-4 w-4 mr-2" />
                                            <span>Light</span>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem onClick={() => setTheme("dark")} className={cn("cursor-pointer", theme === "dark" && "bg-accent")}>
                                            <Moon className="h-4 w-4 mr-2" />
                                            <span>Dark</span>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem onClick={() => setTheme("system")} className={cn("cursor-pointer", theme === "system" && "bg-accent")}>
                                            <Laptop className="h-4 w-4 mr-2" />
                                            <span>System</span>
                                        </DropdownMenuItem>
                                    </DropdownMenuSubContent>
                                </DropdownMenuSub>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem asChild>
                                    <Link href="/logout" className="flex items-center gap-2 cursor-pointer text-destructive">
                                        <LogOut className="h-4 w-4" />
                                        <span>Log Out</span>
                                    </Link>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>

                {/* Collapse Button */}
                <button
                    onClick={toggleCollapse}
                    className="z-100 h-8 w-8 flex items-center justify-center border-2 border-muted-foreground text-muted-foreground rounded-full hover:bg-primary/10 absolute -right-4 top-1/2 transform -translate-y-1/2"
                >
                    <ChevronLeft className={cn(
                        "h-4 w-4 transition-transform",
                        isCollapsed ? "rotate-180" : ""
                    )} />
                </button>
            </div>
        );
    }
}

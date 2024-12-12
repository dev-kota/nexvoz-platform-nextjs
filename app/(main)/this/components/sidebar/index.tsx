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
    RotateCw,
    
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

import type { RootState } from "@/app/this/store/reducers";
import { usePathname } from "next/navigation";

const getMenuItems = (companyId: string) => [
    { href: `/${companyId}`, icon: LayoutDashboard, label: "Dashboard" },
    { href: `/${companyId}/agent-list`, icon: UserSearch, label: "Agent List" },
    { href: `/${companyId}/knowledge`, icon: DatabaseZap, label: "Knowledge" },
    { href: `/${companyId}/lead-data`, icon: NotebookTabs, label: "Lead Data" },
    { href: `/${companyId}/campaign`, icon: CalendarSync, label: "Campaign" },
    { href: `/${companyId}/call-log`, icon: PhoneCall, label: "Call Log" },
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
    const [isPortrait, setIsPortrait] = useState(false);
    const isCollapsed = useSelector((state: RootState) => state.sidebar.collapsed);
    const companyId = useSelector((state: RootState) => state.auth.companyId);
    const MENU_ITEMS = getMenuItems(companyId);

    useEffect(() => {
        setMounted(true);

        const checkOrientation = () => {
            if (window.innerWidth <= 768) { // Mobile breakpoint
                setIsPortrait(window.innerHeight > window.innerWidth);
            } else {
                setIsPortrait(false);
            }
        };

        checkOrientation();
        window.addEventListener('resize', checkOrientation);
        window.addEventListener('orientationchange', checkOrientation);

        return () => {
            window.removeEventListener('resize', checkOrientation);
            window.removeEventListener('orientationchange', checkOrientation);
        };
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
                pathname === href && "bg-primary/10 text-primary"
            )}
        >
            <Icon className="h-6 w-6 flex-shrink-0 text-muted-foreground" />
            {!isCollapsed && <span className="text-muted-foreground">{label}</span>}
        </Link>
    );

    if (!mounted) {
        return null;
    }

    if (isPortrait) {
        return (
            <div className="fixed inset-0 flex items-center justify-center bg-background/95 z-50">
                <div className="text-center p-4 flex flex-col items-center">
                    <RotateCw className="h-12 w-12 text-primary mb-4 animate-spin" />
                    <h2 className="text-xl font-bold mb-2">Please Rotate Your Device</h2>
                    <p>This application works best in landscape mode on mobile devices.</p>
                </div>
            </div>
        );
    }

    return (
        <div className="relative flex">
            <div className={cn(
                "flex flex-col h-screen bg-card border-r transition-all duration-300",
                isCollapsed ? "w-16" : "w-64"
            )}>
                {/* Logo & Company Name - Fixed */}
                <div className="p-2 flex flex-col items-center border-b shrink-0">
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
                <nav className="flex-1 p-4 overflow-y-auto">
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
                <div className="p-4 border-t shrink-0">
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
                className="h-8 w-8 flex items-center justify-center border-2 border-muted-foreground text-muted-foreground rounded-full hover:bg-primary/10 absolute -right-4 top-1/2 transform -translate-y-1/2"
            >
                <ChevronLeft className={cn(
                    "h-4 w-4 transition-transform",
                    isCollapsed ? "rotate-180" : ""
                )} />
            </button>
        </div>
    );
}

"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import * as z from "zod";
import { User, Mail, Phone, Lock, Eye, EyeOff } from "lucide-react";
import { useState } from "react";

const formSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Invalid email address"),
    phone: z.string()
        .min(10, "Phone number must be at least 10 digits")
        .regex(/^[0-9]+$/, "Phone number can only contain digits")
        .transform((val) => val.replace(/\D/g, "")), // Remove non-digits
    password: z.string().min(8, "Password must be at least 8 characters"),
});

export default function UserInfoRegistration() {
    const router = useRouter();
    const [showPassword, setShowPassword] = useState(false);
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            password: "",
        },
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        // Here you would typically send the data to your backend
        console.log(values);
        // Navigate to code verification page
        router.push("/sign-up/code-verification");
    }

    return (
        <div className="relative z-10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-4 sm:px-8 py-8 rounded-lg shadow-lg border w-full max-w-[95%] sm:max-w-md">
            <div className="space-y-6">
                <div className="space-y-2 text-center">
                    <h1 className="text-2xl font-semibold tracking-tight">Create an account</h1>
                    <p className="text-sm text-muted-foreground">
                        Enter your information to create your account
                    </p>
                </div>

                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Full Name</FormLabel>
                                    <FormControl>
                                        <div className="relative">
                                            <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                                            <Input placeholder="John Doe" className="pl-10" {...field} />
                                        </div>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <div className="relative">
                                            <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                                            <Input placeholder="example@email.com" type="email" className="pl-10" {...field} />
                                        </div>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Phone Number</FormLabel>
                                    <FormControl>
                                        <div className="relative">
                                            <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                                            <Input
                                                placeholder="1234567890"
                                                className="pl-10"
                                                {...field}
                                                onChange={(e) => {
                                                    const value = e.target.value.replace(/\D/g, '');
                                                    e.target.value = value;
                                                    field.onChange(value);
                                                }}
                                                maxLength={10}
                                            />
                                        </div>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Password</FormLabel>
                                    <FormControl>
                                        <div className="relative">
                                            <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                                            <Input
                                                placeholder="••••••••"
                                                type={showPassword ? "text" : "password"}
                                                className="pl-10 pr-10"
                                                {...field}
                                            />
                                            <button
                                                type="button"
                                                onClick={() => setShowPassword(!showPassword)}
                                                className="absolute right-3 top-3 h-4 w-4 text-muted-foreground"
                                            >
                                                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                                            </button>
                                        </div>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <Button type="submit" className="w-full">
                            Continue
                        </Button>
                    </form>
                </Form>
            </div>
        </div>
    );
}
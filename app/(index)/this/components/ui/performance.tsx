import React from "react";
import Image from "next/image";
import { ArrowRight, Brain, Zap, MessageSquare, BarChart2, LineChart } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Performance() {
    return (
        <section className="relative py-20 bg-background overflow-hidden">
            <div className="absolute inset-0">
                <Image
                    src="/images/performance.jpg"
                    alt="Performance background"
                    fill
                    sizes="(max-width: 640px) 100vw, 
                 (max-width: 768px) 100vw,
                 100vw"
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-background/75 dark:bg-background/90" />
            </div>
            <div className="container mx-auto px-4 relative z-10">
                <div className="flex items-center justify-center gap-4 mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-center bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">Platform Performance</h2>
                    <LineChart className="h-8 w-8 text-primary" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    <Card className="h-full flex flex-col">
                        <CardHeader>
                            <div className="flex items-center gap-4">
                                <Brain className="h-8 w-8 text-primary" />
                                <CardTitle className="text-xl font-semibold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">Continuous Learning</CardTitle>
                            </div>
                        </CardHeader>
                        <CardContent className="flex-grow">
                            <p className="text-sm text-muted-foreground">Our AI dives deep into your sales data, learning from every interaction to continuously improve. It analyzes customer patterns and behaviors to provide more precise and effective responses, ensuring your sales strategies are always optimized.</p>
                        </CardContent>
                    </Card>

                    <Card className="h-full flex flex-col">
                        <CardHeader>
                            <div className="flex items-center gap-4">
                                <Zap className="h-8 w-8 text-primary" />
                                <CardTitle className="text-xl font-semibold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">Autonomous Adaptation</CardTitle>
                            </div>
                        </CardHeader>
                        <CardContent className="flex-grow">
                            <p className="text-sm text-muted-foreground">With each interaction, the AI evolves, ensuring your sales and customer service strategies are always up-to-date and effective. This constant adaptation allows for seamless adjustments to market changes and customer preferences, keeping you ahead of the competition.</p>
                        </CardContent>
                    </Card>

                    <Card className="h-full flex flex-col">
                        <CardHeader>
                            <div className="flex items-center gap-4">
                                <MessageSquare className="h-8 w-8 text-primary" />
                                <CardTitle className="text-xl font-semibold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">Brand Voice Integration</CardTitle>
                            </div>
                        </CardHeader>
                        <CardContent className="flex-grow">
                            <p className="text-sm text-muted-foreground">Nexvoz aligns with the unique voice and values of your brand, offering a consistent and harmonious customer experience that reinforces your brand identity. Our AI adjusts to your desired tone and communication style, ensuring every interaction reflects your brand's personality and resonates with your audience.</p>
                        </CardContent>
                    </Card>

                    <Card className="h-full flex flex-col">
                        <CardHeader>
                            <div className="flex items-center gap-4">
                                <BarChart2 className="h-8 w-8 text-primary" />
                                <CardTitle className="text-xl font-semibold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">Cutting-Edge AI</CardTitle>
                            </div>
                        </CardHeader>
                        <CardContent className="flex-grow">
                            <p className="text-sm text-muted-foreground">Harness the power of advanced AI to transform your customer service. Nexvoz's state-of-the-art technology ensures precise, natural interactions every time. Our AI leverages the latest advancements in machine learning and natural language processing to deliver unparalleled performance and customer satisfaction.</p>
                        </CardContent>
                    </Card>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    <Card>
                        <CardHeader>
                            <div className="text-4xl font-bold text-primary mb-4">X5</div>
                            <CardTitle className="text-2xl font-semibold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">LOWER COST</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground">It operates 24/7 without breaks, providing superior performance immediately and maintaining high energy levels consistently. With self-learning and autonomous improvement, it requires no management. It eliminates the need for human resources and related costs, reducing expenses over time. Zero attrition and no turnover costs ensure continuous and efficient operation.</p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <div className="text-4xl font-bold text-primary mb-4">X2</div>
                            <CardTitle className="text-2xl font-semibold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">BETTER PERFORMANCE</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground">To illustrate these figures, consider that out of every 100 calls, an average industry representative completes 7.5, a top-tier sales team member completes 12, while Nexvoz agents complete 16. This demonstrates that Nexvoz agents are 200% more efficient than the typical sales representative.</p>
                        </CardContent>
                    </Card>
                </div>

                <Card>
                    <CardHeader>
                        <CardTitle className="text-xl font-semibold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">Deep Learning Capabilities</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-sm text-muted-foreground">Our AI continuously analyzes your sales data, learning from each interaction to enhance performance by identifying customer patterns and behaviors for increasingly precise responses. Nexvoz's self-adapting technology evolves with every customer interaction, ensuring your sales and service strategies remain current and effective.</p>
                    </CardContent>
                </Card>

                <div className="mt-12 text-center">
                    <Button variant="link" className="text-primary hover:text-primary/80">
                        <span className="text-base font-semibold">Learn more about our performance</span>
                        <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                </div>
            </div>
        </section>
    );
}

'use client'

import HeroSection from "./this/components/ui/hero-section";
import Header from "./this/components/ui/header";
import AboutAgents from "./this/components/ui/about-agents";
import Footer from "./this/components/ui/footer";

export default function Home() {
    return (
        <div className="min-h-screen">
            <Header />

            <main className="flex-1">
                {/* Hero Section */}
                <HeroSection />

                {/* Agents Section */}
                <AboutAgents />

            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
}

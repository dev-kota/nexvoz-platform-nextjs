'use client'

import HeroSection from "./this/components/ui/hero-section";
import Header from "./this/components/ui/header";
import AboutAgents from "./this/components/ui/about-agents";
import Footer from "./this/components/ui/footer";
import AboutCRM from "./this/components/ui/about-crm";
import AboutLanguages from "./this/components/ui/about-languages";
import Performance from "./this/components/ui/performance";
export default function Home() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-background to-background/95">
            <Header />

            <main className="flex-1">
                {/* Hero Section */}
                <HeroSection />

                {/* Agents Section */}
                <AboutAgents />

                {/* CRM Section */}
                <AboutCRM />

                {/* Languages Section */}
                <AboutLanguages />

                {/* Performance Section */}
                <Performance />
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
}

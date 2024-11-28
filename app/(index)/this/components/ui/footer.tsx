import { Twitter, Github, Linkedin, Info, Mail, Briefcase, FileText, Shield, Cookie } from 'lucide-react';

export default function Footer() {
    const footerSections = [
        {
            title: "Company",
            links: [
                { text: "About Us", href: "#", icon: Info },
                { text: "Contact", href: "#", icon: Mail },
                { text: "Careers", href: "#", icon: Briefcase },
            ]
        },
        {
            title: "Legal",
            links: [
                { text: "Privacy Policy", href: "#", icon: Shield },
                { text: "Terms of Service", href: "#", icon: FileText },
                { text: "Cookie Policy", href: "#", icon: Cookie },
            ]
        },
        {
            title: "Connect",
            links: [
                { text: "Twitter", href: "#", icon: Twitter },
                { text: "GitHub", href: "#", icon: Github },
                { text: "LinkedIn", href: "#", icon: Linkedin },
            ]
        }
    ];

    const LAUNCHED_YEAR = 2023; // Replace with your actual launch year

    return (
        <footer className="border-t bg-background">
            <div className="container py-12">
                <div className="flex flex-col md:flex-row justify-between items-start mb-8">
                    <div className="mb-8 md:mb-0">
                        <h1 className="font-bold text-2xl mb-4">Nexvoz Logo</h1>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {footerSections.map((section, index) => (
                            <div key={index}>
                                <h3 className="font-semibold mb-4 text-lg">{section.title}</h3>
                                <ul className="space-y-3">
                                    {section.links.map((link, linkIndex) => (
                                        <li key={linkIndex}>
                                            <a 
                                                href={link.href} 
                                                className="text-muted-foreground hover:text-primary transition-colors duration-200 flex items-center"
                                            >
                                                {link.icon && <link.icon className="mr-2 h-4 w-4" />}
                                                {link.text}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="mt-12 text-center text-sm text-muted-foreground">
                    © {LAUNCHED_YEAR}-{new Date().getFullYear()} <span className="font-bold">Nexvoz</span>. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
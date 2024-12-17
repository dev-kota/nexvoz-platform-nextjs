// Garbage contact data for dialer testing purposes
export const contacts = [
    { name: "Sarah Johnson", phone: "+1 (212) 555-8901" },
    { name: "Michael Chen", phone: "+1 (415) 555-3456" },
    { name: "Emma Wilson", phone: "+44 20 7123 4567" }, // UK
    { name: "James Smith", phone: "+1 (404) 555-2345" },
    { name: "Yuki Tanaka", phone: "+81 3 1234 5678" }, // Japan 
    { name: "Aisha Patel", phone: "+91 22 1234 5678" }, // India
    { name: "Lisa Brown", phone: "+1 (312) 555-9876" },
    { name: "Robert Taylor", phone: "+61 2 8765 4321" }, // Australia
    { name: "Jennifer Lee", phone: "+1 (702) 555-8765" },
    { name: "William Davis", phone: "+1 (303) 555-1234" },
    { name: "Sofia Rodriguez", phone: "+52 55 1234 5678" }, // Mexico
    { name: "Thomas Anderson", phone: "+49 30 1234 5678" }, // Germany
    { name: "Michelle Wong", phone: "+86 10 1234 5678" }, // China
    { name: "Daniel Martinez", phone: "+33 1 2345 6789" }, // France
    { name: "Rachel Cohen", phone: "+972 3 123 4567" } // Israel
];

// Garbage agent data for dialer testing purposes
export const agents = [
    {
        id: 1,
        name: "Sarah Johnson",
        avatar: "/images/agents/agent-female-1.jpg",
        language: "Spanish",
        phone: "+1 (212) 555-8901",
        type: "Sales",
        totalCallTime: 156,
        completedLeads: 45,
        incomingCalls: 78,
        outgoingCalls: 92
    },
    {
        id: 2,
        name: "Michael Chen",
        avatar: "/images/agents/agent-male-2.jpg",
        language: "Mandarin",
        phone: "+1 (415) 555-3456",
        type: "Customer Service",
        totalCallTime: 142,
        completedLeads: 38,
        incomingCalls: 65,
        outgoingCalls: 85
    },
    {
        id: 3,
        name: "Emma Wilson",
        avatar: "/images/agents/agent-female-2.jpg",
        language: "French",
        phone: "+1 (305) 555-7890",
        type: "Secretary",
        totalCallTime: 168,
        completedLeads: 52,
        incomingCalls: 89,
        outgoingCalls: 104
    },
    {
        id: 4,
        name: "James Miller",
        avatar: "/images/agents/agent-male-1.jpg",
        language: "German",
        phone: "+1 (617) 555-2345",
        type: "Feedback Collection",
        totalCallTime: 149,
        completedLeads: 41,
        incomingCalls: 72,
        outgoingCalls: 88
    },
    {
        id: 5,
        name: "Sofia Garcia",
        avatar: "/images/agents/agent-female.jpg",
        language: "Portuguese",
        phone: "+1 (713) 555-9012",
        type: "Institutional",
        totalCallTime: 138,
        completedLeads: 35,
        incomingCalls: 61,
        outgoingCalls: 82
    },
    {
        id: 6,
        name: "Luca Romano",
        avatar: "/images/agents/agent-male.jpg",
        language: "Italian",
        phone: "+39 02 555-4567",
        type: "Sales",
        totalCallTime: 162,
        completedLeads: 48,
        incomingCalls: 84,
        outgoingCalls: 98
    },
    {
        id: 7,
        name: "John Doe",
        avatar: "/images/agents/agent-male-2.jpg",
        language: "Italian",
        phone: "+1 (312) 555-6789",
        type: "Customer Service",
        totalCallTime: 162,
        completedLeads: 48,
        incomingCalls: 84,
        outgoingCalls: 98
    },
    {
        id: 8,
        name: "John Doe",
        avatar: "/images/agents/agent-male-1.jpg",
        language: "Russian",
        phone: "+1 (404) 555-1234",
        type: "Custom",
        totalCallTime: 162,
        completedLeads: 48,
        incomingCalls: 84,
        outgoingCalls: 98
    },
    {
        id: 9,
        name: "John Doe",
        avatar: "/images/agents/agent-male.jpg",
        language: "Arabic",
        phone: "+1 (702) 555-5678",
        type: "Institutional",
        totalCallTime: 162,
        completedLeads: 48,
        incomingCalls: 84,
        outgoingCalls: 98
    },
    {
        id: 10,
        name: "Sofia Chen",
        avatar: "/images/agents/agent-female-2.jpg",
        language: "Mandarin",
        phone: "+86 10 5555-1234",
        type: "Sales",
        totalCallTime: 189,
        completedLeads: 52,
        incomingCalls: 91,
        outgoingCalls: 103
    },
    {
        id: 11,
        name: "Hans Mueller",
        avatar: "/images/agents/agent-male-1.jpg", 
        language: "German",
        phone: "+49 30 5555-6789",
        type: "Customer Service",
        totalCallTime: 145,
        completedLeads: 39,
        incomingCalls: 72,
        outgoingCalls: 88
    },
    {
        id: 12,
        name: "Maria Garcia",
        avatar: "/images/agents/agent-female-1.jpg",
        language: "Spanish",
        phone: "+34 91 555-9876",
        type: "Sales",
        totalCallTime: 178,
        completedLeads: 45,
        incomingCalls: 82,
        outgoingCalls: 96
    },
    {
        id: 13,
        name: "Yuki Tanaka",
        avatar: "/images/agents/agent-female.jpg",
        language: "Japanese",
        phone: "+81 3 5555-1111",
        type: "Institutional",
        totalCallTime: 156,
        completedLeads: 41,
        incomingCalls: 75,
        outgoingCalls: 89
    },
    {
        id: 14,
        name: "Pierre Dubois",
        avatar: "/images/agents/agent-male-2.jpg",
        language: "French",
        phone: "+33 1 5555-2222",
        type: "Custom",
        totalCallTime: 167,
        completedLeads: 44,
        incomingCalls: 79,
        outgoingCalls: 93
    }
]

export const leadGroups = [
    { id: "sales-2023", name: "Sales Pipeline Q4", description: "Active sales opportunities for Q4 2023" },
    { id: "real-estate", name: "Property Listings", description: "Current real estate leads from website inquiries" },
    { id: "support-tickets", name: "Customer Support", description: "Open support tickets requiring follow-up" },
    { id: "event-registrants", name: "Trade Show 2023", description: "Leads collected from annual trade show" },
    { id: "newsletter", name: "Newsletter Subscribers", description: "Email subscribers awaiting first contact" },
    { id: "referral-program", name: "Partner Referrals", description: "Leads from partner referral program" },
    { id: "website-demo", name: "Demo Requests", description: "Product demonstration requests from website" }
]


export const leads = Array.from({ length: 1000 }, (_, i) => {
    const statuses = [
        "Marketing Qualified Lead (MQL)",
        "Sales Qualified Lead (SQL)", 
        "Product Qualified Lead (PQL)",
        "Service Qualified Lead",
        "Cold Lead",
        "Warm Lead",
        "Hot Lead", 
        "Referral Lead",
        "Inbound Lead",
        "Outbound Lead",
        "Churned Lead"
    ] as const;

    const groupIds = [
        "sales-2023",
        "real-estate", 
        "support-tickets",
        "event-registrants",
        "newsletter",
        "referral-program",
        "website-demo"
    ];

    const firstNames = ["James", "Mary", "John", "Patricia", "Robert", "Jennifer", "Michael", "Linda", "William", "Elizabeth", "David", "Barbara", "Richard", "Susan", "Joseph", "Jessica", "Thomas", "Sarah", "Charles", "Karen"];
    const lastNames = ["Smith", "Johnson", "Williams", "Brown", "Jones", "Garcia", "Miller", "Davis", "Rodriguez", "Martinez", "Hernandez", "Lopez", "Gonzalez", "Wilson", "Anderson", "Thomas", "Taylor", "Moore", "Jackson", "Martin"];

    const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    const name = `${firstName} ${lastName}`;

    // Generate realistic looking phone numbers for different regions
    const areaCode = Math.floor(Math.random() * 800) + 200; // 200-999
    const prefix = Math.floor(Math.random() * 900) + 100; // 100-999
    const lineNum = Math.floor(Math.random() * 9000) + 1000; // 1000-9999
    const phone = `+1 (${areaCode}) ${prefix}-${lineNum}`;

    const email = `${firstName.toLowerCase()}.${lastName.toLowerCase()}${Math.floor(Math.random() * 1000)}@example.com`;

    return {
        id: (i + 1).toString(),
        name,
        phone,
        email,
        status: statuses[Math.floor(Math.random() * statuses.length)],
        groupId: groupIds[Math.floor(Math.random() * groupIds.length)],
        metadata: {
            lastContact: new Date(Date.now() - Math.random() * 90 * 24 * 60 * 60 * 1000).toISOString(),
            source: ["Website", "Referral", "Trade Show", "Cold Call", "Social Media"][Math.floor(Math.random() * 5)],
            priority: ["High", "Medium", "Low"][Math.floor(Math.random() * 3)]
        }
    };
})


export const teamMembers = [
    { id: 1, name: "John Doe", email: "john.doe@example.com", role: "Admin", status: "Active", avatar: "/images/agents/agent-male-1.jpg" },
    { id: 2, name: "Jane Smith", email: "jane.smith@example.com", role: "Agent", status: "Active", avatar: "/images/agents/agent-female-1.jpg" },
    { id: 3, name: "Alice Johnson", email: "alice.johnson@example.com", role: "Agent", status: "Active", avatar: "/images/agents/agent-female-2.jpg" },
    { id: 4, name: "Bob Brown", email: "bob.brown@example.com", role: "Agent", status: "Pending", avatar: "/images/agents/agent-male-2.jpg" }
]

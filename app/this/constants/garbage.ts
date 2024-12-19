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


export const calls = [
    {
        id: "1",
        time: "2024-11-15T14:30:00.000Z",
        duration: 251,
        callType: "Inbound",
        cost: 45,
        agent: agents[0],
        lead: leads[0], 
        from: "+14155552671",
        to: "+14155557890",
        callResult: "Success",
        callStatus: "Completed",
        callNotes: "Customer inquired about premium features",
        transcription: "Hi, I'm interested in learning more about your premium plan features..."
    },
    {
        id: "2", 
        time: "2024-11-15T15:45:00.000Z",
        duration: 180,
        callType: "Outbound",
        cost: 35,
        agent: agents[1],
        lead: leads[1],
        from: "+14155553456", 
        to: "+14155559012",
        callResult: "Success",
        callStatus: "Completed", 
        callNotes: "Follow up on previous inquiry",
        transcription: "Following up regarding your interest in our services..."
    },
    {
        id: "3",
        time: "2024-11-15T16:15:00.000Z", 
        duration: 120,
        callType: "Internal",
        cost: 25,
        agent: agents[2],
        lead: leads[2],
        from: "+14155554567",
        to: "+14155558901",
        callResult: "Success",
        callStatus: "Completed",
        callNotes: "Internal team sync",
        transcription: "Team discussion about new feature rollout..."
    },
    {
        id: "4",
        time: "2024-11-15T17:00:00.000Z",
        duration: 300,
        callType: "Inbound",
        cost: 55,
        agent: agents[0],
        lead: leads[3],
        from: "+14155555678",
        to: "+14155557123",
        callResult: "Success", 
        callStatus: "Completed",
        callNotes: "Technical support call",
        transcription: "Customer needed help with account settings..."
    },
    {
        id: "5",
        time: "2024-11-16T09:30:00.000Z",
        duration: 150,
        callType: "Outbound",
        cost: 30,
        agent: agents[1],
        lead: leads[4],
        from: "+14155556789",
        to: "+14155556234",
        callResult: "No Answer",
        callStatus: "Missed",
        callNotes: "No response from customer",
        transcription: "No transcription available"
    },
    {
        id: "6",
        time: "2024-11-16T10:45:00.000Z",
        duration: 240,
        callType: "Inbound",
        cost: 48,
        agent: agents[2],
        lead: leads[5],
        from: "+14155557890",
        to: "+14155555345",
        callResult: "Success",
        callStatus: "Completed",
        callNotes: "Product demo request",
        transcription: "Customer requested a detailed demo of the platform..."
    },
    {
        id: "7",
        time: "2024-11-16T11:30:00.000Z",
        duration: 180,
        callType: "Outbound",
        cost: 36,
        agent: agents[0],
        lead: leads[6],
        from: "+14155558901",
        to: "+14155554456",
        callResult: "Voicemail",
        callStatus: "Voicemail",
        callNotes: "Left voicemail for callback",
        transcription: "Hi, this is regarding your recent inquiry..."
    },
    {
        id: "8",
        time: "2024-11-16T13:15:00.000Z",
        duration: 360,
        callType: "Inbound",
        cost: 65,
        agent: agents[1],
        lead: leads[7],
        from: "+14155559012",
        to: "+14155553567",
        callResult: "Success",
        callStatus: "Completed",
        callNotes: "Complex technical issue resolved",
        transcription: "Customer reported issues with integration..."
    },
    {
        id: "9",
        time: "2024-11-16T14:45:00.000Z",
        duration: 420,
        callType: "Internal",
        cost: 75,
        agent: agents[2],
        lead: leads[8],
        from: "+14155551234",
        to: "+14155552678",
        callResult: "Success",
        callStatus: "Completed",
        callNotes: "Team training session",
        transcription: "Training session on new product features..."
    },
    {
        id: "10",
        time: "2024-11-16T16:00:00.000Z",
        duration: 195,
        callType: "Outbound",
        cost: 39,
        agent: agents[0],
        lead: leads[9],
        from: "+14155552345",
        to: "+14155551789",
        callResult: "Success",
        callStatus: "Completed",
        callNotes: "Sales follow-up",
        transcription: "Discussion about pricing options..."
    },
    {
        id: "11",
        time: "2024-11-17T09:00:00.000Z",
        duration: 275,
        callType: "Inbound",
        cost: 52,
        agent: agents[1],
        lead: leads[10],
        from: "+14155553456",
        to: "+14155550890",
        callResult: "Success",
        callStatus: "Completed",
        callNotes: "New customer onboarding",
        transcription: "Walked through initial setup process..."
    },
    {
        id: "12",
        time: "2024-11-17T10:30:00.000Z",
        duration: 165,
        callType: "Outbound",
        cost: 33,
        agent: agents[2],
        lead: leads[11],
        from: "+14155554567",
        to: "+14155559901",
        callResult: "Busy",
        callStatus: "Busy",
        callNotes: "Customer unavailable",
        transcription: "No transcription available"
    },
    {
        id: "13",
        time: "2024-11-17T11:45:00.000Z",
        duration: 330,
        callType: "Inbound",
        cost: 60,
        agent: agents[0],
        lead: leads[12],
        from: "+14155555678",
        to: "+14155558012",
        callResult: "Success",
        callStatus: "Completed",
        callNotes: "Feature consultation",
        transcription: "Detailed discussion about advanced features..."
    },
    {
        id: "14",
        time: "2024-11-17T13:30:00.000Z",
        duration: 225,
        callType: "Internal",
        cost: 42,
        agent: agents[1],
        lead: leads[13],
        from: "+14155556789",
        to: "+14155557123",
        callResult: "Success",
        callStatus: "Completed",
        callNotes: "Weekly team sync",
        transcription: "Team updates and project planning..."
    },
    {
        id: "15",
        time: "2024-11-17T15:00:00.000Z",
        duration: 285,
        callType: "Outbound",
        cost: 54,
        agent: agents[2],
        lead: leads[14],
        from: "+14155557890",
        to: "+14155556234",
        callResult: "Success",
        callStatus: "Completed",
        callNotes: "Contract renewal discussion",
        transcription: "Reviewed renewal terms and options..."
    },
    {
        id: "16",
        time: "2024-11-18T09:15:00.000Z",
        duration: 210,
        callType: "Inbound",
        cost: 40,
        agent: agents[0],
        lead: leads[15],
        from: "+14155558901",
        to: "+14155555345",
        callResult: "Success",
        callStatus: "Completed",
        callNotes: "Billing inquiry resolved",
        transcription: "Addressed questions about recent charges..."
    },
    {
        id: "17",
        time: "2024-11-18T10:45:00.000Z",
        duration: 345,
        callType: "Outbound",
        cost: 63,
        agent: agents[1],
        lead: leads[16],
        from: "+14155559012",
        to: "+14155554456",
        callResult: "Success",
        callStatus: "Completed",
        callNotes: "Product demo",
        transcription: "Comprehensive product demonstration..."
    },
    {
        id: "18",
        time: "2024-11-18T12:15:00.000Z",
        duration: 195,
        callType: "Internal",
        cost: 38,
        agent: agents[2],
        lead: leads[17],
        from: "+14155551234",
        to: "+14155553567",
        callResult: "Success",
        callStatus: "Completed",
        callNotes: "Strategy meeting",
        transcription: "Discussion about market expansion..."
    },
    {
        id: "19",
        time: "2024-11-18T14:00:00.000Z",
        duration: 270,
        callType: "Inbound",
        cost: 51,
        agent: agents[0],
        lead: leads[18],
        from: "+14155552345",
        to: "+14155552678",
        callResult: "Success",
        callStatus: "Completed",
        callNotes: "Support ticket resolution",
        transcription: "Troubleshooting technical issues..."
    },
    {
        id: "20",
        time: "2024-11-18T15:30:00.000Z",
        duration: 180,
        callType: "Outbound",
        cost: 35,
        agent: agents[1],
        lead: leads[19],
        from: "+14155553456",
        to: "+14155551789",
        callResult: "No Answer",
        callStatus: "No Answer",
        callNotes: "Follow-up attempted",
        transcription: "No transcription available"
    },
    {
        id: "21",
        time: "2024-11-19T09:45:00.000Z",
        duration: 315,
        callType: "Inbound",
        cost: 58,
        agent: agents[2],
        lead: leads[20],
        from: "+14155554567",
        to: "+14155550890",
        callResult: "Success",
        callStatus: "Completed",
        callNotes: "Integration support",
        transcription: "Assisted with API integration setup..."
    },
    {
        id: "22",
        time: "2024-11-19T11:15:00.000Z",
        duration: 240,
        callType: "Internal",
        cost: 45,
        agent: agents[0],
        lead: leads[21],
        from: "+14155555678",
        to: "+14155559901",
        callResult: "Success",
        callStatus: "Completed",
        callNotes: "Product roadmap review",
        transcription: "Team discussion about upcoming features..."
    },
    {
        id: "23",
        time: "2024-11-19T13:00:00.000Z",
        duration: 225,
        callType: "Outbound",
        cost: 43,
        agent: agents[1],
        lead: leads[22],
        from: "+14155556789",
        to: "+14155558012",
        callResult: "Success",
        callStatus: "Completed",
        callNotes: "Quarterly review",
        transcription: "Review of account performance..."
    },
    {
        id: "24",
        time: "2024-11-19T14:30:00.000Z",
        duration: 390,
        callType: "Inbound",
        cost: 70,
        agent: agents[2],
        lead: leads[23],
        from: "+14155557890",
        to: "+14155557123",
        callResult: "Success",
        callStatus: "Completed",
        callNotes: "Complex issue resolution",
        transcription: "Detailed troubleshooting session..."
    },
    {
        id: "25",
        time: "2024-11-19T16:15:00.000Z",
        duration: 165,
        callType: "Outbound",
        cost: 32,
        agent: agents[0],
        lead: leads[24],
        from: "+14155558901",
        to: "+14155556234",
        callResult: "Voicemail",
        callStatus: "Voicemail",
        callNotes: "Left detailed message",
        transcription: "Voicemail regarding account updates..."
    },
    {
        id: "26",
        time: "2024-11-20T09:30:00.000Z",
        duration: 300,
        callType: "Inbound",
        cost: 56,
        agent: agents[1],
        lead: leads[25],
        from: "+14155559012",
        to: "+14155555345",
        callResult: "Success",
        callStatus: "Completed",
        callNotes: "New feature training",
        transcription: "Walkthrough of new platform features..."
    },
    {
        id: "27",
        time: "2024-11-20T11:00:00.000Z",
        duration: 255,
        callType: "Internal",
        cost: 48,
        agent: agents[2],
        lead: leads[26],
        from: "+14155551234",
        to: "+14155554456",
        callResult: "Success",
        callStatus: "Completed",
        callNotes: "Team performance review",
        transcription: "Discussion about team metrics..."
    },
    {
        id: "28",
        time: "2024-11-20T13:15:00.000Z",
        duration: 210,
        callType: "Outbound",
        cost: 41,
        agent: agents[0],
        lead: leads[27],
        from: "+14155552345",
        to: "+14155553567",
        callResult: "Success",
        callStatus: "Completed",
        callNotes: "Follow-up call",
        transcription: "Discussion about implementation timeline..."
    },
    {
        id: "29",
        time: "2024-11-20T14:45:00.000Z",
        duration: 345,
        callType: "Inbound",
        cost: 62,
        agent: agents[1],
        lead: leads[28],
        from: "+14155553456",
        to: "+14155552678",
        callResult: "Success",
        callStatus: "Completed",
        callNotes: "Enterprise solution discussion",
        transcription: "Detailed review of enterprise features..."
    },
    {
        id: "30",
        time: "2024-11-20T16:30:00.000Z",
        duration: 270,
        callType: "Outbound",
        cost: 50,
        agent: agents[2],
        lead: leads[29],
        from: "+14155554567",
        to: "+14155551789",
        callResult: "Success",
        callStatus: "Completed",
        callNotes: "Contract finalization",
        transcription: "Final review of contract terms..."
    }
]

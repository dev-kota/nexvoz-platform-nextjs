export type Response = {
    status: number;
    message: string;
    data: any;
}

export type Agent = {
    id: number;
    name: string;
    avatar: string;
    language: string;
    phone: string;
    type: AgentType;
    totalCallTime: number;
    completedLeads: number;
    incomingCalls: number;
    outgoingCalls: number;
}

export type AgentType =
  | 'Sales'
  | 'Secretary'
  | 'Customer Service'
  | 'Institutional'
  | 'Real Estate'
  | 'Feedback Collection'
  | 'Custom'

export type Lead = {
    id: string;
    groupId: string;
    name: string;
    phone: string;
    email: string;
    status: LeadStatus;
    metadata: any;
}

export type LeadGroup = {
    id: string;
    name: string;
    description: string;
}

export type LeadStatus =
  | 'Marketing Qualified Lead (MQL)'
  | 'Sales Qualified Lead (SQL)'
  | 'Product Qualified Lead (PQL)'
  | 'Service Qualified Lead'
  | 'Cold Lead'
  | 'Warm Lead'
  | 'Hot Lead'
  | 'Referral Lead'
  | 'Inbound Lead'
  | 'Outbound Lead'
  | 'Churned Lead'


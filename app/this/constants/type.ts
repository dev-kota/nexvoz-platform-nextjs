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
  | 'Custom';

export type Response = {
    status: number;
    message: string;
    data: any;
}

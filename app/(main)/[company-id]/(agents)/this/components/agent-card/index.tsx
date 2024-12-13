import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Clock, CalendarClock, PencilRuler, Trash, PhoneCall, Phone, PhoneIncoming, PhoneOutgoing, Globe, Layers2 } from "lucide-react";

export default function AgentCard({
  agent,
  handleClickAgent,
  handleOpenDialer,
}: {
  agent: Agent;
  handleClickAgent: () => void;
  handleOpenDialer: (e: React.MouseEvent<HTMLButtonElement>) => void;
}) {

    const { id, name, avatar, language, phone, type, totalCallTime, completedLeads, incomingCalls, outgoingCalls } = agent;

    return (
        <Card id={id} className="p-4 min-w-[400px] hover:shadow-muted-foreground/80 transition-all duration-300" onClick={handleClickAgent}>
            <div className="flex justify-between items-start mb-4">
                <Avatar className="h-40 w-40 border-4 border-gray-600 dark:border-gray-400 rounded-lg">
                    <AvatarImage src={avatar || "/images/agent.jpg"} alt={name} />
                    <AvatarFallback className="text-6xl">{name?.slice(0, 1)?.toUpperCase() || "🤖"}</AvatarFallback>
                </Avatar>

                <div className="text-left">
                    <div className="flex items-center gap-2 text-lg text-muted-foreground mb-2">
                        <Layers2 className="h-5 w-5" />
                        <span>{type}</span>
                    </div>
                    <div className="flex items-center gap-2 text-lg text-muted-foreground mb-2">
                        <Globe className="h-5 w-5" />
                        <span>{language}</span>
                    </div>
                    <div className="flex items-center gap-2 text-lg text-muted-foreground">
                        <Phone className="h-5 w-5" />
                        <span>{phone}</span>
                    </div>
                </div>
            </div>

            <div className="space-y-4">
                <div className="flex justify-between items-center">
                    <h3 className="font-semibold text-2xl">{name}</h3>
                    <div className="flex gap-2">
                        <Button variant="secondary" size="icon" onClick={handleOpenDialer}>
                            <Phone className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="icon">
                            <CalendarClock className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="icon">
                            <PencilRuler className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" className="text-destructive hover:text-destructive" size="icon">
                            <Trash className="h-4 w-4" />
                        </Button>
                    </div>
                </div>

                <div className="space-y-2">
                    <div className="flex items-center gap-2 text-lg text-muted-foreground">
                        <Clock className="h-5 w-5 text-orange-500" />
                        <span>Total Call Time: {totalCallTime} mins</span>
                    </div>
                    <div className="flex items-center gap-2 text-lg text-muted-foreground">
                        <PhoneCall className="h-5 w-5 text-green-500" />
                        <span>Completed Leads: {completedLeads}</span>
                    </div>
                    <div className="flex items-center gap-2 text-lg text-muted-foreground">
                        <PhoneIncoming className="h-5 w-5 text-blue-500" />
                        <span>Incoming Calls: {incomingCalls}</span>
                    </div>
                    <div className="flex items-center gap-2 text-lg text-muted-foreground">
                        <PhoneOutgoing className="h-5 w-5 text-purple-500" />
                        <span>Outgoing Calls: {outgoingCalls}</span>
                    </div>
                </div>
            </div>
        </Card>
    );
}
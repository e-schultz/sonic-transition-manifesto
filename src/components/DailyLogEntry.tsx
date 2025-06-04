
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin, ExternalLink, Phone, Mail } from "lucide-react";

interface LogEntry {
  date: string;
  title: string;
  week: string;
  quarter: string;
  mood: string;
  soundtrack: string;
  status: string;
}

interface DailyLogEntryProps {
  log: LogEntry;
}

const DailyLogEntry = ({ log }: DailyLogEntryProps) => {
  const timeline = [
    {
      time: "3:04 PM",
      event: "Jane Clinical Forms - Final Decision Call",
      mood: "disappointed but not defeated",
      details: "They decided to proceed with two other candidates. Differentiating factor was 'cross-team collaboration and felt they were a better fit'. Jason mentioned multiple roles open and will keep sending opportunities my way."
    },
    {
      time: "2:45 PM", 
      event: "Post Jane Call Wait",
      details: "Synced up with Jane and Catherine. Catherine realized I'm partnering with clinical team. Sent follow-up email to Jason. Waiting for Jason's call."
    },
    {
      time: "2:00 PM",
      event: "Jane Demo & Sign ups Call - Katharine",
      details: "Brief coordination call (~5 minutes). Katharine acknowledged I'm already in Clinical Forms process. Professional handoff back to Jason Hughes."
    },
    {
      time: "12:30 PM",
      event: "Brain Boot - Jane Prep",
      details: "Alignment check between Staff Software Developer Demo & Signups role vs Clinical Forms. Created interview briefing hub note. Dual opportunity positioning with Jane."
    }
  ];

  const chatLinks = [
    {
      title: "Bridge Restoration Protocol",
      url: "https://claude.ai/chat/46e3a767-ec26-4d9a-a0bf-9cc9ef133686",
      type: "claude"
    },
    {
      title: "Jane Software Developer Recruitment",
      url: "https://claude.ai/chat/82dacd9f-8e84-47c5-bfa8-f96198368486", 
      type: "claude"
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header Section */}
      <Card className="bg-gradient-to-r from-purple-900/50 to-cyan-900/50 border-purple-500/30 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-2xl text-purple-200">Daily Chronicle</CardTitle>
          <div className="flex items-center gap-4 text-sm text-cyan-300">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {log.date.split('T')[0]}
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {log.week}
            </div>
            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              {log.quarter}
            </div>
          </div>
        </CardHeader>
      </Card>

      {/* Timeline */}
      <Card className="bg-black/40 border-cyan-500/30 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-xl text-cyan-300 flex items-center gap-2">
            <Clock className="w-5 h-5" />
            Timeline
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {timeline.map((entry, index) => (
            <div key={index} className="relative">
              {index !== timeline.length - 1 && (
                <div className="absolute left-6 top-12 w-0.5 h-16 bg-gradient-to-b from-purple-500 to-cyan-500"></div>
              )}
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-cyan-600 flex items-center justify-center text-sm font-mono">
                  {entry.time.split(':')[0]}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-purple-200">{entry.event}</h3>
                  {entry.mood && (
                    <Badge variant="outline" className="border-cyan-400/50 text-cyan-300 mb-2">
                      {entry.mood}
                    </Badge>
                  )}
                  <p className="text-gray-300 text-sm leading-relaxed">{entry.details}</p>
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Chat Links */}
      <Card className="bg-black/40 border-purple-500/30 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-xl text-purple-300 flex items-center gap-2">
            <ExternalLink className="w-5 h-5" />
            Chat Links & Bridges
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-3">
            {chatLinks.map((link, index) => (
              <Button
                key={index}
                variant="outline"
                className="justify-start border-white/20 text-white/80 hover:bg-white/10 h-auto p-4"
                onClick={() => window.open(link.url, '_blank')}
              >
                <div className="text-left">
                  <div className="font-medium">{link.title}</div>
                  <div className="text-xs text-gray-400">{link.type} • claude.ai</div>
                </div>
              </Button>
            ))}
          </div>
          <Separator className="bg-white/10" />
          <div className="text-sm text-cyan-300">
            <strong>Bridges:</strong> bridge::restore CB-20250604-1244-JANE<br />
            <strong>Chroma updates:</strong> Successfully added 1 documents to [collection::jane_application_context]
          </div>
        </CardContent>
      </Card>

      {/* Reflection */}
      <Card className="bg-gradient-to-r from-red-900/30 to-orange-900/30 border-orange-500/30 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-xl text-orange-300">Reflection</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-300 leading-relaxed">
            <strong>Mood:</strong> Sad - like, it sucks - but I will live. I am getting more stuff under my belt to demo, 
            I really did my best going into it - and the process isn't over, other opportunities within Jane exist. 
            Going to go process for a bit, and then enjoy the afternoon.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default DailyLogEntry;


import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Calendar, Brain, Music, Briefcase, GitBranch, Zap } from "lucide-react";
import DailyLogEntry from "@/components/DailyLogEntry";
import InterviewBriefing from "@/components/InterviewBriefing";
import SonicMetaphor from "@/components/SonicMetaphor";
import TransitionFramework from "@/components/TransitionFramework";

const Index = () => {
  const [activeView, setActiveView] = useState("log");

  const currentLog = {
    date: "2025-06-04T12:33:25",
    title: "2025-06-04 - Daily Log",
    week: "2025-W23",
    quarter: "2025-Q2",
    mood: "disappointed but not defeated",
    soundtrack: "DE9: Transitions - Richie Hawtin",
    status: "active"
  };

  const navigationItems = [
    { id: "log", label: "Daily Log", icon: Calendar, active: true },
    { id: "interview", label: "Interview Briefing", icon: Briefcase },
    { id: "sonic", label: "Sonic Metaphors", icon: Music },
    { id: "transition", label: "Transition Framework", icon: GitBranch }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Header with gradient overlay */}
      <div className="relative overflow-hidden bg-gradient-to-r from-purple-600/20 to-cyan-600/20 backdrop-blur-sm border-b border-white/10">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-cyan-600/10 animate-pulse"></div>
        <div className="relative z-10 container mx-auto px-6 py-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                FLOAT.sys
              </h1>
              <p className="text-cyan-300/80 mt-2">Transition Tracking & Creative Process Management</p>
            </div>
            <div className="text-right">
              <div className="text-2xl font-mono text-purple-300">{currentLog.date.split('T')[0]}</div>
              <div className="text-sm text-cyan-400">{currentLog.week} • {currentLog.quarter}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="container mx-auto px-6 py-6">
        <div className="flex flex-wrap gap-3 mb-8">
          {navigationItems.map((item) => (
            <Button
              key={item.id}
              variant={activeView === item.id ? "default" : "outline"}
              onClick={() => setActiveView(item.id)}
              className={`flex items-center gap-2 transition-all duration-300 ${
                activeView === item.id 
                  ? "bg-gradient-to-r from-purple-600 to-cyan-600 text-white shadow-lg border-transparent" 
                  : "border-white/40 text-white bg-white/5 hover:bg-white/15 hover:border-white/60 hover:text-white"
              }`}
            >
              <item.icon className="w-4 h-4" />
              {item.label}
            </Button>
          ))}
        </div>

        {/* Status Bar */}
        <Card className="mb-8 bg-black/40 border-purple-500/30 backdrop-blur-sm">
          <CardContent className="p-6">
            <div className="flex flex-wrap items-center gap-4 text-sm">
              <Badge variant="outline" className="border-cyan-400/50 text-cyan-300">
                <Brain className="w-3 h-3 mr-1" />
                {currentLog.mood}
              </Badge>
              <Badge variant="outline" className="border-purple-400/50 text-purple-300">
                <Music className="w-3 h-3 mr-1" />
                DE9: Transitions
              </Badge>
              <Badge variant="outline" className="border-green-400/50 text-green-300">
                <Zap className="w-3 h-3 mr-1" />
                {currentLog.status}
              </Badge>
            </div>
          </CardContent>
        </Card>

        {/* Main Content */}
        <div className="space-y-8">
          {activeView === "log" && <DailyLogEntry log={currentLog} />}
          {activeView === "interview" && <InterviewBriefing />}
          {activeView === "sonic" && <SonicMetaphor />}
          {activeView === "transition" && <TransitionFramework />}
        </div>
      </div>

      {/* Floating Action Button */}
      <div className="fixed bottom-8 right-8">
        <Button className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-600 to-cyan-600 hover:scale-105 transition-transform duration-300 shadow-xl">
          <Zap className="w-6 h-6" />
        </Button>
      </div>
    </div>
  );
};

export default Index;

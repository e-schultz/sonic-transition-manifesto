
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Briefcase, Github, Mail, Clock, Target, Zap } from "lucide-react";

const InterviewBriefing = () => {
  const briefingData = {
    role: "Staff Software Developer - Clinical Forms",
    company: "Jane App",
    interviewer: "Jason Hughes + Tavis Dowling",
    timeline: "12 days since last communication",
    github: "https://github.com/e-schultz",
    focus: "Post-signup clinical workflows vs pre-signup conversion"
  };

  const technicalOverlap = [
    "Ruby/Rails expertise",
    "Schema-driven approaches", 
    "Cross-functional collaboration",
    "Healthcare domain knowledge",
    "Conversion optimization"
  ];

  const metaSystemFeatures = [
    {
      name: "Dynamic Prompt Generation System",
      description: "Dataview query system using inline attributes for automated prompt generation",
      status: "Ready for testing post-interview"
    },
    {
      name: "Templater Interview Briefings",
      description: "Interactive interview briefing creation with context awareness",
      status: "Deferred until after Jane interview"
    },
    {
      name: "Meta-Prompt Templates",
      description: "Base meta-prompt template for interview briefings with inline metadata",
      status: "Innovation: role::, company::, context:: drives automated generation"
    }
  ];

  return (
    <div className="space-y-6">
      {/* Interview Status */}
      <Card className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 border-blue-500/30 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-2xl text-blue-200 flex items-center gap-2">
            <Briefcase className="w-6 h-6" />
            Interview Briefing Hub
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h3 className="text-lg font-semibold text-purple-200 mb-2">Role Details</h3>
              <div className="space-y-2 text-sm">
                <div><strong>Position:</strong> {briefingData.role}</div>
                <div><strong>Company:</strong> {briefingData.company}</div>
                <div><strong>Interviewers:</strong> {briefingData.interviewer}</div>
                <div><strong>Timeline:</strong> {briefingData.timeline}</div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-cyan-200 mb-2">Technical Focus</h3>
              <div className="text-sm text-gray-300">
                {briefingData.focus}
              </div>
              <Button 
                variant="outline" 
                size="sm" 
                className="mt-2 border-white/20 text-white/80 hover:bg-white/10"
                onClick={() => window.open(briefingData.github, '_blank')}
              >
                <Github className="w-4 h-4 mr-1" />
                GitHub Portfolio
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Technical Overlap */}
      <Card className="bg-black/40 border-green-500/30 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-xl text-green-300 flex items-center gap-2">
            <Target className="w-5 h-5" />
            Technical Overlap Analysis
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {technicalOverlap.map((skill, index) => (
              <Badge key={index} variant="outline" className="border-green-400/50 text-green-300">
                {skill}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Meta-System Development */}
      <Card className="bg-black/40 border-purple-500/30 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-xl text-purple-300 flex items-center gap-2">
            <Zap className="w-5 h-5" />
            Meta-System Development (Deferred)
          </CardTitle>
          <p className="text-sm text-gray-400">
            Created but deferred until after Jane interview
          </p>
        </CardHeader>
        <CardContent className="space-y-4">
          {metaSystemFeatures.map((feature, index) => (
            <div key={index} className="border border-white/10 rounded-lg p-4">
              <h4 className="font-semibold text-purple-200 mb-2">{feature.name}</h4>
              <p className="text-sm text-gray-300 mb-2">{feature.description}</p>
              <Badge variant="outline" className="border-purple-400/50 text-purple-300 text-xs">
                {feature.status}
              </Badge>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Innovation Highlight */}
      <Card className="bg-gradient-to-r from-yellow-900/30 to-orange-900/30 border-yellow-500/30 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-xl text-yellow-300">Innovation Highlight</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-300 leading-relaxed">
            <strong>Dynamic Prompt Generation:</strong> Inline metadata (role::, company::, context::) drives 
            automated meta-prompt generation via Dataview queries. Transforms static templates into dynamic, 
            context-aware systems. Represents significant evolution from manual template management to 
            data-driven prompt automation.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default InterviewBriefing;

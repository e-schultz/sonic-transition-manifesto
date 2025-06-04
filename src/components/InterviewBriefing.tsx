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
          <CardTitle className="text-2xl text-blue-accessible flex items-center gap-2">
            <Briefcase className="w-6 h-6" aria-hidden="true" />
            Interview Briefing Hub
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h3 className="text-lg font-semibold text-purple-accessible mb-2">Role Details</h3>
              <div className="space-y-2 text-sm text-accessible-medium">
                <div><strong className="text-accessible-high">Position:</strong> {briefingData.role}</div>
                <div><strong className="text-accessible-high">Company:</strong> {briefingData.company}</div>
                <div><strong className="text-accessible-high">Interviewers:</strong> {briefingData.interviewer}</div>
                <div><strong className="text-accessible-high">Timeline:</strong> {briefingData.timeline}</div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-cyan-accessible mb-2">Technical Focus</h3>
              <div className="text-sm text-accessible-medium mb-3">
                {briefingData.focus}
              </div>
              <Button 
                variant="outline" 
                size="sm" 
                className="border-accessible-medium text-accessible-medium hover:bg-white/15 hover:text-accessible-high interactive-element"
                onClick={() => window.open(briefingData.github, '_blank')}
                aria-label="Open GitHub portfolio in new tab"
              >
                <Github className="w-4 h-4 mr-1" aria-hidden="true" />
                GitHub Portfolio
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Technical Overlap */}
      <Card className="bg-black/40 border-green-500/30 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-xl text-green-accessible flex items-center gap-2">
            <Target className="w-5 h-5" aria-hidden="true" />
            Technical Overlap Analysis
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2" role="list" aria-label="Technical skills overlap">
            {technicalOverlap.map((skill, index) => (
              <Badge key={index} variant="outline" className="border-green-400/60 text-green-accessible" role="listitem">
                {skill}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Meta-System Development */}
      <Card className="bg-black/40 border-purple-500/30 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-xl text-purple-accessible flex items-center gap-2">
            <Zap className="w-5 h-5" aria-hidden="true" />
            Meta-System Development (Deferred)
          </CardTitle>
          <p className="text-sm text-accessible-medium">
            Created but deferred until after Jane interview
          </p>
        </CardHeader>
        <CardContent className="space-y-4">
          {metaSystemFeatures.map((feature, index) => (
            <article key={index} className="border border-white/10 rounded-lg p-4">
              <h4 className="font-semibold text-purple-accessible mb-2">{feature.name}</h4>
              <p className="text-sm text-accessible-medium mb-2">{feature.description}</p>
              <Badge variant="outline" className="border-purple-400/60 text-purple-accessible text-xs">
                {feature.status}
              </Badge>
            </article>
          ))}
        </CardContent>
      </Card>

      {/* Innovation Highlight */}
      <Card className="bg-gradient-to-r from-yellow-900/30 to-orange-900/30 border-yellow-500/30 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-xl text-yellow-accessible">Innovation Highlight</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-accessible-medium leading-relaxed">
            <strong className="text-yellow-accessible">Dynamic Prompt Generation:</strong> Inline metadata (role::, company::, context::) drives 
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

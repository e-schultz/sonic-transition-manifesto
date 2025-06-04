
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GitBranch, Zap, ArrowRight, Circle } from "lucide-react";

const TransitionFramework = () => {
  const transitionPhases = [
    {
      phase: "Recognition",
      description: "Identifying the need for transition",
      status: "complete",
      details: "Jane rejection as catalyst for deeper career reflection"
    },
    {
      phase: "Processing", 
      description: "Emotional and analytical integration",
      status: "active",
      details: "Moving through disappointment while maintaining momentum"
    },
    {
      phase: "Recalibration",
      description: "Adjusting approach and strategy",
      status: "pending", 
      details: "Leveraging Jane feedback for future opportunities"
    },
    {
      phase: "Re-emergence",
      description: "Acting from updated understanding",
      status: "future",
      details: "Applying insights to next career transition phase"
    }
  ];

  const floatMethodology = [
    {
      component: "Documentation",
      description: "Comprehensive logging of transition states",
      implementation: "Daily logs with mood, context, and timeline tracking"
    },
    {
      component: "Integration", 
      description: "Connecting experiences across domains",
      implementation: "Linking professional setbacks to personal growth frameworks"
    },
    {
      component: "Reflection",
      description: "Processing experiences through multiple lenses",
      implementation: "Sonic metaphors, philosophical frameworks, practical analysis"
    },
    {
      component: "Action",
      description: "Converting insights into forward momentum", 
      implementation: "Preparing for next opportunities while processing current ones"
    }
  ];

  const getStatusColor = (status: string) => {
    switch(status) {
      case "complete": return "border-green-400/60 text-green-accessible";
      case "active": return "border-yellow-400/60 text-yellow-accessible";
      case "pending": return "border-blue-400/60 text-blue-accessible";
      case "future": return "border-purple-400/60 text-purple-accessible";
      default: return "border-gray-400/60 text-accessible-medium";
    }
  };

  return (
    <div className="space-y-6">
      {/* Framework Overview */}
      <Card className="bg-gradient-to-r from-green-900/50 to-blue-900/50 border-green-500/30 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-2xl text-green-accessible flex items-center gap-2">
            <GitBranch className="w-6 h-6" aria-hidden="true" />
            FLOAT Transition Framework
          </CardTitle>
          <p className="text-blue-accessible">Systematic approach to navigating career and personal transitions</p>
        </CardHeader>
        <CardContent>
          <p className="text-accessible-medium leading-relaxed">
            The FLOAT methodology provides a structured approach to processing setbacks, 
            integrating learnings, and maintaining forward momentum during transition periods. 
            Current application: Jane Clinical Forms rejection → next opportunity preparation.
          </p>
        </CardContent>
      </Card>

      {/* Transition Phases */}
      <Card className="bg-black/40 border-blue-500/30 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-xl text-blue-accessible flex items-center gap-2">
            <ArrowRight className="w-5 h-5" aria-hidden="true" />
            Transition Phases
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {transitionPhases.map((phase, index) => (
            <div key={index} className="relative">
              {index !== transitionPhases.length - 1 && (
                <div className="absolute left-6 top-12 w-0.5 h-16 bg-gradient-to-b from-blue-500 to-purple-500" aria-hidden="true"></div>
              )}
              <div className="flex gap-4">
                <div className={`w-12 h-12 rounded-full border-2 flex items-center justify-center ${getStatusColor(phase.status)}`} role="img" aria-label={`Phase ${phase.phase} status: ${phase.status}`}>
                  <Circle className={`w-4 h-4 ${phase.status === 'complete' ? 'fill-current' : ''}`} aria-hidden="true" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-lg font-semibold text-blue-accessible">{phase.phase}</h3>
                    <Badge variant="outline" className={getStatusColor(phase.status)}>
                      {phase.status}
                    </Badge>
                  </div>
                  <p className="text-accessible-medium text-sm mb-1">{phase.description}</p>
                  <p className="text-accessible-low text-xs">{phase.details}</p>
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* FLOAT Methodology Components */}
      <Card className="bg-black/40 border-purple-500/30 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-xl text-purple-accessible flex items-center gap-2">
            <Zap className="w-5 h-5" aria-hidden="true" />
            FLOAT Methodology Components
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4">
            {floatMethodology.map((component, index) => (
              <div key={index} className="border border-white/10 rounded-lg p-4 bg-white/5">
                <h4 className="font-semibold text-purple-accessible mb-2">{component.component}</h4>
                <p className="text-sm text-accessible-medium mb-2">{component.description}</p>
                <div className="text-xs text-cyan-accessible bg-black/30 rounded p-2 font-mono">
                  {component.implementation}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Current Application */}
      <Card className="bg-gradient-to-r from-orange-900/40 to-red-900/40 border-orange-500/40 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-xl text-orange-accessible">Current Transition Application</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-black/40 rounded-lg p-4 border border-orange-500/30">
            <h4 className="font-semibold text-orange-accessible mb-2">Jane Clinical Forms Rejection</h4>
            <p className="text-sm text-accessible-medium mb-3">
              "Cross-team collaboration" cited as differentiating factor. Multiple roles still open at Jane.
              Emotional processing: disappointed but not defeated.
            </p>
            <div className="space-y-2 text-xs text-accessible-medium">
              <div><strong className="text-orange-accessible">Learning:</strong> Cross-team collaboration emphasis for future interviews</div>
              <div><strong className="text-orange-accessible">Opportunity:</strong> Additional Jane roles + broader market positioning</div>
              <div><strong className="text-orange-accessible">Process:</strong> Professional resilience + continued momentum</div>
            </div>
          </div>
          
          <Button 
            variant="outline" 
            className="border-orange-300/60 text-orange-accessible hover:bg-orange-500/20 hover:border-orange-300/80 hover:text-accessible-high interactive-element"
            aria-label="Continue processing transition and planning next steps"
          >
            Continue Processing & Planning
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default TransitionFramework;

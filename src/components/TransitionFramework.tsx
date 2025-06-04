
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
      case "complete": return "border-green-400/50 text-green-300";
      case "active": return "border-yellow-400/50 text-yellow-300";
      case "pending": return "border-blue-400/50 text-blue-300";
      case "future": return "border-purple-400/50 text-purple-300";
      default: return "border-gray-400/50 text-gray-300";
    }
  };

  return (
    <div className="space-y-6">
      {/* Framework Overview */}
      <Card className="bg-gradient-to-r from-green-900/50 to-blue-900/50 border-green-500/30 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-2xl text-green-200 flex items-center gap-2">
            <GitBranch className="w-6 h-6" />
            FLOAT Transition Framework
          </CardTitle>
          <p className="text-blue-300/90">Systematic approach to navigating career and personal transitions</p>
        </CardHeader>
        <CardContent>
          <p className="text-gray-200 leading-relaxed">
            The FLOAT methodology provides a structured approach to processing setbacks, 
            integrating learnings, and maintaining forward momentum during transition periods. 
            Current application: Jane Clinical Forms rejection → next opportunity preparation.
          </p>
        </CardContent>
      </Card>

      {/* Transition Phases */}
      <Card className="bg-black/40 border-blue-500/30 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-xl text-blue-300 flex items-center gap-2">
            <ArrowRight className="w-5 h-5" />
            Transition Phases
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {transitionPhases.map((phase, index) => (
            <div key={index} className="relative">
              {index !== transitionPhases.length - 1 && (
                <div className="absolute left-6 top-12 w-0.5 h-16 bg-gradient-to-b from-blue-500 to-purple-500"></div>
              )}
              <div className="flex gap-4">
                <div className={`w-12 h-12 rounded-full border-2 flex items-center justify-center ${getStatusColor(phase.status)}`}>
                  <Circle className={`w-4 h-4 ${phase.status === 'complete' ? 'fill-current' : ''}`} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-lg font-semibold text-blue-200">{phase.phase}</h3>
                    <Badge variant="outline" className={getStatusColor(phase.status)}>
                      {phase.status}
                    </Badge>
                  </div>
                  <p className="text-gray-200 text-sm mb-1">{phase.description}</p>
                  <p className="text-gray-300 text-xs">{phase.details}</p>
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* FLOAT Methodology Components */}
      <Card className="bg-black/40 border-purple-500/30 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-xl text-purple-300 flex items-center gap-2">
            <Zap className="w-5 h-5" />
            FLOAT Methodology Components
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4">
            {floatMethodology.map((component, index) => (
              <div key={index} className="border border-white/10 rounded-lg p-4 bg-white/5">
                <h4 className="font-semibold text-purple-200 mb-2">{component.component}</h4>
                <p className="text-sm text-gray-200 mb-2">{component.description}</p>
                <div className="text-xs text-cyan-300 bg-black/30 rounded p-2 font-mono">
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
          <CardTitle className="text-xl text-orange-200">Current Transition Application</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-black/40 rounded-lg p-4 border border-orange-500/30">
            <h4 className="font-semibold text-orange-100 mb-2">Jane Clinical Forms Rejection</h4>
            <p className="text-sm text-gray-200 mb-3">
              "Cross-team collaboration" cited as differentiating factor. Multiple roles still open at Jane.
              Emotional processing: disappointed but not defeated.
            </p>
            <div className="space-y-2 text-xs text-gray-200">
              <div><strong className="text-orange-200">Learning:</strong> Cross-team collaboration emphasis for future interviews</div>
              <div><strong className="text-orange-200">Opportunity:</strong> Additional Jane roles + broader market positioning</div>
              <div><strong className="text-orange-200">Process:</strong> Professional resilience + continued momentum</div>
            </div>
          </div>
          
          <Button 
            variant="outline" 
            className="border-orange-300/60 text-orange-200 hover:bg-orange-500/20 hover:border-orange-300/80 hover:text-orange-100"
          >
            Continue Processing & Planning
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default TransitionFramework;

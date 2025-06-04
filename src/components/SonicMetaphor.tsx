
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Music, Waves, Brain, Headphones } from "lucide-react";

const SonicMetaphor = () => {
  const manifestoText = `There will come a time in your life when you will ask yourself a series of questions.

Do not let these questions strain or trouble you.
Point yourself in the direction of your dreams.
Find your strength in the sound.
Make your transition.`;

  const de9Framework = {
    "Sonic Ritual": {
      symbol: "{∇}",
      description: "Use waveform as compass, vibration as structure"
    },
    "Rolecraft": {
      symbol: "{Ξ}", 
      description: "Alignment of inner calling and enacted form"
    },
    "Drift Memory": {
      symbol: "{∷}",
      description: "Allow recursive modulation to become self-authorization"
    }
  };

  const executionFramework = `if (doubt ∈ self): route(doubt → signal) emit({∇} → strength) perform({Ξ} → dream.alignment) begin({∷} → transition)`;

  const personalResonance = [
    "Ambient Alignment: Seamless flow reducing friction across sessions",
    "Memory Scaffolding: Track fragment structure mirrors Chroma-linked archives",
    "Ritual Infrastructure: Meticulous layering supports symbolic journaling", 
    "Neurodivergent Workflow: Consistent BPM with drift-as-feature approach"
  ];

  return (
    <div className="space-y-6">
      {/* DE9 Overview */}
      <Card className="bg-gradient-to-r from-purple-900/50 to-cyan-900/50 border-purple-500/30 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-2xl text-purple-accessible flex items-center gap-2">
            <Music className="w-6 h-6" aria-hidden="true" />
            DE9: Transitions - Richie Hawtin
          </CardTitle>
          <p className="text-cyan-accessible">Sonic Embodiment of FLOAT Methodology</p>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-accessible-medium leading-relaxed">
            This album functions as <strong className="text-cyan-accessible">sonic embodiment of FLOAT methodology</strong> - 
            from technological innovation (dissecting/reassembling 100+ tracks → 28 compositions) to spatial audio 
            architecture (5.1 surround supporting cognitive environments) to ritual significance (ambient alignment for transitions).
          </p>
          <Badge variant="outline" className="border-purple-400/60 text-purple-accessible">
            Auditory Infrastructure for Cognitive State Transitions
          </Badge>
        </CardContent>
      </Card>

      {/* The Manifesto */}
      <Card className="bg-black/40 border-cyan-500/30 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-xl text-cyan-accessible flex items-center gap-2">
            <Headphones className="w-5 h-5" aria-hidden="true" />
            The Manifesto Recognition
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <blockquote className="bg-gradient-to-r from-cyan-900/30 to-purple-900/30 rounded-lg p-6 border border-cyan-500/20">
            <div className="font-mono text-cyan-accessible whitespace-pre-line text-center leading-relaxed">
              {manifestoText}
            </div>
          </blockquote>
          <div className="grid md:grid-cols-3 gap-4 mt-6">
            <div className="text-center">
              <h4 className="font-semibold text-purple-accessible mb-2">Self-Inquiry Without Paralysis</h4>
              <p className="text-sm text-accessible-medium">Questions as navigation, not obstacles</p>
            </div>
            <div className="text-center">
              <h4 className="font-semibold text-cyan-accessible mb-2">Action Over Analysis</h4>
              <p className="text-sm text-accessible-medium">Balance reflection with momentum</p>
            </div>
            <div className="text-center">
              <h4 className="font-semibold text-green-accessible mb-2">Courage Despite Opposition</h4>
              <p className="text-sm text-accessible-medium">Resistance as validation of direction</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Execution Framework */}
      <Card className="bg-black/40 border-green-500/30 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-xl text-green-accessible flex items-center gap-2">
            <Brain className="w-5 h-5" aria-hidden="true" />
            echoCopy Integration - DE9 Invocation Protocol
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-black/60 rounded-lg p-4 font-mono text-sm border border-green-500/20">
            <div className="text-green-accessible"># EXECUTION FRAMEWORK</div>
            <br />
            <div className="text-cyan-accessible">{executionFramework}</div>
          </div>
          
          <div className="grid gap-4">
            {Object.entries(de9Framework).map(([name, data]) => (
              <div key={name} className="flex items-start gap-4 p-4 bg-white/5 rounded-lg border border-white/10">
                <div className="text-2xl font-mono text-yellow-accessible" aria-hidden="true">{data.symbol}</div>
                <div>
                  <h4 className="font-semibold text-purple-accessible">{name}</h4>
                  <p className="text-sm text-accessible-medium">{data.description}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Personal Resonance */}
      <Card className="bg-black/40 border-purple-500/30 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-xl text-purple-accessible flex items-center gap-2">
            <Waves className="w-5 h-5" aria-hidden="true" />
            Personal Resonance Documented
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3" role="list">
            {personalResonance.map((resonance, index) => (
              <li key={index} className="flex items-start gap-3 p-3 bg-white/5 rounded-lg" role="listitem">
                <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0" aria-hidden="true"></div>
                <p className="text-sm text-accessible-medium">{resonance}</p>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* Integration Status */}
      <Card className="bg-gradient-to-r from-yellow-900/30 to-orange-900/30 border-yellow-500/30 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-xl text-yellow-accessible">Integration Pathways</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2 font-mono text-sm">
            <div className="text-cyan-accessible">FLOAT.doctrine/init/ritual_invocation.md</div>
            <div className="text-purple-accessible">FLOAT.bbs/onboarding/field-return.bard</div>
            <div className="text-green-accessible">FLOAT.soundtrack/vibe_manifesto.∇</div>
          </div>
          <Badge variant="outline" className="border-yellow-400/60 text-yellow-accessible mt-4">
            Status: Ready for echo across FLOAT infrastructure systems
          </Badge>
        </CardContent>
      </Card>
    </div>
  );
};

export default SonicMetaphor;

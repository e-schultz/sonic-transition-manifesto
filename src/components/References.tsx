
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Users, Calendar, Building, Star } from "lucide-react";
import { useState } from "react";

const References = () => {
  const [selectedTheme, setSelectedTheme] = useState<string | null>(null);

  const referencesData = [
    {
      "name": "Matt Cave",
      "role": "Vice President of Engineering",
      "date": "2020-04-22",
      "relationship": "Manager",
      "themes": [
        "technical expertise",
        "inclusive leadership",
        "teaching",
        "collaboration"
      ],
      "summary": "Evan is a dedicated and experienced engineer, a thoughtful teacher, and a strong advocate for inclusivity. Effective at bringing out the best in teams. Suited for technical leadership."
    },
    {
      "name": "Catherine Marchand",
      "role": "Talent Program Designer",
      "date": "2020-04-15",
      "relationship": "Cross-team peer",
      "themes": [
        "advocacy",
        "mental health",
        "community leadership",
        "teaching",
        "technical savvy"
      ],
      "summary": "Evan is a humble and collaborative leader who influences culture, advocates for D&I and mental health, and contributes through workshops, writing, and support. Highly respected for technical insight."
    },
    {
      "name": "Douglas Eggleton",
      "role": "Engineering @ Gr4vy",
      "date": "2020-04-11",
      "relationship": "Direct report",
      "themes": [
        "leadership",
        "technical excellence",
        "culture impact",
        "mentorship"
      ],
      "summary": "Combines leadership with technical excellence. Made a huge positive impact on team culture and individual growth. Supportive and empowering."
    },
    {
      "name": "Igor Kamenetsky",
      "role": "VP Engineering, Infrastructure",
      "date": "2020-04-09",
      "relationship": "Peer on same team",
      "themes": [
        "consulting",
        "technical problem-solving",
        "architecture",
        "mentorship"
      ],
      "summary": "Highly knowledgeable consultant with strong communication skills and mentorship in architecture. Trusted for clean code advice."
    },
    {
      "name": "Evelyn Cheung",
      "role": "Senior Software Developer",
      "date": "2020-04-06",
      "relationship": "Direct report",
      "themes": [
        "mentorship",
        "learning & growth",
        "technical leadership",
        "wellbeing"
      ],
      "summary": "Evan is a mentor passionate about growth and wellbeing, deeply technical, and a considerate contributor to discussions and projects."
    },
    {
      "name": "Jason Santos",
      "role": "Principal Technical Director",
      "date": "2020-04-06",
      "relationship": "Direct report",
      "themes": [
        "relationship building",
        "inspiration",
        "technical & human leadership"
      ],
      "summary": "Built trust from day one by prioritizing human connection. Inspiring leader with high impact on people and technical outcomes."
    },
    {
      "name": "Stephanie Zeng",
      "role": "Senior Software Engineer",
      "date": "2020-04-05",
      "relationship": "Direct report",
      "themes": [
        "technical advising",
        "mentorship",
        "growth support"
      ],
      "summary": "Supportive manager focused on learning. Advised on technical solutions and helped tackle blockers. Strong technical leader."
    },
    {
      "name": "Amy Statham",
      "role": "Content and Social",
      "date": "2020-04-05",
      "relationship": "Senior peer",
      "themes": [
        "community building",
        "technical communication",
        "mentorship"
      ],
      "summary": "Built inclusive technical community. Patient mentor for non-technical collaborators. Creative and genuinely invested in others' success."
    },
    {
      "name": "Lidia Tavassoli",
      "role": "Agile Coach",
      "date": "2020-04-05",
      "relationship": "Peer on same team",
      "themes": [
        "training development",
        "agile mindset",
        "professionalism"
      ],
      "summary": "Valued for training and agile implementation. Professional, feedback-oriented, and proactive in team development."
    },
    {
      "name": "Seth Davenport",
      "role": "Principal Software Developer",
      "date": "2020-04-03",
      "relationship": "Peer on same team",
      "themes": [
        "technical expertise",
        "mentorship",
        "agile leadership"
      ],
      "summary": "Top-notch JS developer and experienced mentor. Led with architectural insight and agile decision-making."
    },
    {
      "name": "Jennifer Visser",
      "role": "Leadership Coach",
      "date": "2020-04-02",
      "relationship": "Cross-functional peer",
      "themes": [
        "learning & development",
        "integrity",
        "collaboration"
      ],
      "summary": "Respected tech leader known for integrity, transparency, and devotion to learning & development."
    },
    {
      "name": "Charles Wells",
      "role": "CRM Analyst, UN",
      "date": "2013-08-22",
      "relationship": "Academic peer",
      "themes": [
        "team leadership",
        "organization",
        "project delivery"
      ],
      "summary": "Led final project team to success with strong leadership and commitment. Highly productive contributor."
    }
  ];

  // Get all unique themes for filtering
  const allThemes = Array.from(new Set(referencesData.flatMap(ref => ref.themes)));

  // Filter references based on selected theme
  const filteredReferences = selectedTheme 
    ? referencesData.filter(ref => ref.themes.includes(selectedTheme))
    : referencesData;

  return (
    <div className="space-y-6">
      {/* Header */}
      <Card className="bg-gradient-to-r from-emerald-900/50 to-teal-900/50 border-emerald-500/30 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-2xl text-green-accessible flex items-center gap-2">
            <Users className="w-6 h-6" aria-hidden="true" />
            Professional References
          </CardTitle>
          <p className="text-accessible-medium">
            Testimonials and endorsements from colleagues, managers, and direct reports
          </p>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div>
              <strong className="text-accessible-high">Total References:</strong> {referencesData.length}
            </div>
            <div>
              <strong className="text-accessible-high">Date Range:</strong> 2013-2020
            </div>
            <div>
              <strong className="text-accessible-high">Unique Themes:</strong> {allThemes.length}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Theme Filters */}
      <Card className="bg-black/40 border-cyan-500/30 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-lg text-cyan-accessible">Filter by Theme</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2 mb-4">
            <Button
              variant={selectedTheme === null ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedTheme(null)}
              className={selectedTheme === null 
                ? "bg-gradient-to-r from-purple-600 to-cyan-600" 
                : "border-accessible-medium text-accessible-medium hover:bg-white/15"
              }
            >
              All ({referencesData.length})
            </Button>
            {allThemes.map((theme) => {
              const count = referencesData.filter(ref => ref.themes.includes(theme)).length;
              return (
                <Button
                  key={theme}
                  variant={selectedTheme === theme ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedTheme(theme)}
                  className={selectedTheme === theme 
                    ? "bg-gradient-to-r from-purple-600 to-cyan-600" 
                    : "border-accessible-medium text-accessible-medium hover:bg-white/15"
                  }
                >
                  {theme} ({count})
                </Button>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* References Grid */}
      <div className="grid gap-6">
        {filteredReferences.map((reference, index) => (
          <Card key={index} className="bg-black/40 border-white/10 backdrop-blur-sm">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-xl text-accessible-high">{reference.name}</CardTitle>
                  <p className="text-purple-accessible font-medium">{reference.role}</p>
                </div>
                <div className="text-right text-sm text-accessible-medium">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {reference.date}
                  </div>
                  <div className="flex items-center gap-1 mt-1">
                    <Building className="w-3 h-3" />
                    {reference.relationship}
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Themes */}
              <div>
                <h4 className="text-sm font-semibold text-accessible-high mb-2">Key Themes:</h4>
                <div className="flex flex-wrap gap-1">
                  {reference.themes.map((theme, themeIndex) => (
                    <Badge 
                      key={themeIndex} 
                      variant="outline" 
                      className="border-cyan-400/60 text-cyan-accessible text-xs"
                    >
                      {theme}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Summary */}
              <div>
                <h4 className="text-sm font-semibold text-accessible-high mb-2 flex items-center gap-1">
                  <Star className="w-3 h-3" />
                  Summary:
                </h4>
                <blockquote className="text-accessible-medium italic border-l-2 border-green-400/60 pl-4">
                  "{reference.summary}"
                </blockquote>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Summary Stats */}
      {filteredReferences.length !== referencesData.length && (
        <Card className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 border-purple-500/30 backdrop-blur-sm">
          <CardContent className="p-4">
            <p className="text-purple-accessible">
              Showing {filteredReferences.length} of {referencesData.length} references 
              {selectedTheme && ` for "${selectedTheme}"`}
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default References;

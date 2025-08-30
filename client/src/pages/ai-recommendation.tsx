import { useState } from "react";
import { Link } from "wouter";
import { Search, Brain, UserCheck, Heart, Shield, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { LocalStorage, mockSchemes } from "@/lib/storage";

export default function AiRecommendation() {
  const [healthIdInput, setHealthIdInput] = useState("");
  const [showProfile, setShowProfile] = useState(false);
  const [showRecommendations, setShowRecommendations] = useState(false);
  const [patientProfile, setPatientProfile] = useState<any>(null);
  const { toast } = useToast();

  const handleAnalyze = () => {
    if (!healthIdInput.trim()) {
      toast({
        title: "Error",
        description: "Please enter a valid HealthID",
        variant: "destructive",
      });
      return;
    }

    // Try to get the stored health ID or use mock data
    let profile = LocalStorage.getHealthId();
    
    if (!profile) {
      // Create mock profile for demo
      profile = {
        id: healthIdInput,
        patientName: "John Doe",
        dateOfBirth: "1988-05-15",
        bloodGroup: "A+",
        medicalConditions: "Diabetes Type 2",
        emergencyContact: "+1-555-0123",
      };
    }

    setPatientProfile(profile);
    setShowProfile(true);

    // Show recommendations after a delay
    setTimeout(() => {
      setShowRecommendations(true);
      toast({
        title: "AI Analysis Completed",
        description: "Your personalized recommendations are ready!",
      });
    }, 1500);
  };

  const getMatchColor = (percentage: number) => {
    if (percentage >= 90) return "text-medilinkx-green border-medilinkx-green";
    if (percentage >= 80) return "text-medilinkx-blue border-medilinkx-blue";
    return "text-medilinkx-orange border-medilinkx-orange";
  };

  const getMatchBadgeColor = (percentage: number) => {
    if (percentage >= 90) return "bg-medilinkx-green";
    if (percentage >= 80) return "bg-medilinkx-blue";
    return "bg-medilinkx-orange";
  };

  return (
    <div className="pt-16">
      <section className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 fade-in">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">AI-Powered Health Recommendations</h1>
            <p className="text-xl text-gray-600">Get personalized scheme recommendations based on your health profile</p>
          </div>

          {/* HealthID Input Section */}
          <Card className="glassmorphism rounded-2xl max-w-2xl mx-auto mb-8 slide-up">
            <CardContent className="p-8 text-center">
              <Search className="text-medilinkx-blue h-12 w-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Enter Your HealthID</h3>
              <div className="flex gap-3">
                <Input
                  placeholder="Enter your HealthID"
                  value={healthIdInput}
                  onChange={(e) => setHealthIdInput(e.target.value)}
                  className="flex-1"
                  data-testid="input-healthid"
                />
                <Button 
                  onClick={handleAnalyze}
                  className="bg-medilinkx-blue hover:bg-blue-700 px-6 font-semibold"
                  data-testid="button-analyze"
                >
                  <Brain className="mr-2 h-5 w-5" />
                  Analyze
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Patient Profile Section */}
          {showProfile && patientProfile && (
            <Card className="glassmorphism rounded-2xl mb-8 slide-up">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
                  <UserCheck className="text-medilinkx-blue mr-3 h-8 w-8" />
                  Patient Profile
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white rounded-lg p-4">
                    <h4 className="font-semibold text-gray-700 mb-2">Basic Information</h4>
                    <p className="text-gray-600"><strong>Name:</strong> {patientProfile.patientName}</p>
                    <p className="text-gray-600"><strong>Age:</strong> {new Date().getFullYear() - new Date(patientProfile.dateOfBirth).getFullYear()} years</p>
                    <p className="text-gray-600"><strong>Blood Group:</strong> {patientProfile.bloodGroup || "A+"}</p>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <h4 className="font-semibold text-gray-700 mb-2">Health Status</h4>
                    <p className="text-gray-600"><strong>Conditions:</strong> {patientProfile.medicalConditions || "Diabetes Type 2"}</p>
                    <p className="text-gray-600"><strong>Risk Level:</strong> <span className="text-medilinkx-orange font-semibold">Medium</span></p>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <h4 className="font-semibold text-gray-700 mb-2">Eligibility Score</h4>
                    <div className="flex items-center">
                      <div className="bg-medilinkx-green text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mr-3">85</div>
                      <span className="text-medilinkx-green font-semibold">Highly Eligible</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* AI Recommendations Section */}
          {showRecommendations && (
            <Card className="glassmorphism rounded-2xl slide-up">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
                  <Brain className="text-medilinkx-green mr-3 h-8 w-8" />
                  AI-Generated Recommendations
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {mockSchemes.map((scheme) => {
                    const matchColor = getMatchColor(scheme.matchPercentage);
                    const badgeColor = getMatchBadgeColor(scheme.matchPercentage);
                    const SchemeIcon = scheme.type === 'diabetes-care' ? Heart : 
                                     scheme.type === 'general-health' ? Shield : Users;

                    return (
                      <div 
                        key={scheme.id}
                        className={`bg-white rounded-xl p-6 border-l-4 ${matchColor} hover:shadow-lg transition-shadow`}
                        data-testid={`recommendation-${scheme.type}`}
                      >
                        <div className="flex items-center justify-between mb-4">
                          <span className={`${badgeColor} text-white px-3 py-1 rounded-full text-sm font-semibold`}>
                            {scheme.matchPercentage}% Match
                          </span>
                          <SchemeIcon className={`h-6 w-6 ${matchColor.split(' ')[0]}`} />
                        </div>
                        <h4 className="text-lg font-semibold text-gray-800 mb-2">{scheme.name}</h4>
                        <p className="text-gray-600 mb-3 text-sm">{scheme.description}</p>
                        <div className="space-y-2 text-sm text-gray-500">
                          <p>💰 Coverage: ${scheme.coverage.toLocaleString()}/year</p>
                          <p>⏱️ Processing: {scheme.processingTime}</p>
                          <p>🏥 Network: {scheme.networkHospitals}+ hospitals</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
                
                <div className="text-center mt-8">
                  <Link href="/schemes">
                    <Button 
                      className="bg-medilinkx-green hover:bg-green-700 px-8 py-3 font-semibold"
                      data-testid="button-apply-schemes"
                    >
                      Apply to Recommended Schemes
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </section>
    </div>
  );
}

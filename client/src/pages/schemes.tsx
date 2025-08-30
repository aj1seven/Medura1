import { useState } from "react";
import { Link } from "wouter";
import { Heart, Shield, Users, Zap, CheckCircle, ArrowRight, DollarSign, Clock, Building } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { mockSchemes } from "@/lib/storage";

export default function Schemes() {
  const [appliedSchemes, setAppliedSchemes] = useState<Set<string>>(new Set());
  const [showSuccess, setShowSuccess] = useState(false);
  const { toast } = useToast();

  const handleAutoApply = (schemeId: string, schemeName: string) => {
    // Simulate application process
    toast({
      title: "Processing Application",
      description: `Submitting application for ${schemeName}...`,
    });

    setTimeout(() => {
      setAppliedSchemes(prev => new Set([...prev, schemeId]));
      setShowSuccess(true);
      
      toast({
        title: "Application Approved!",
        description: `Your application for ${schemeName} has been successfully processed and approved.`,
      });
    }, 2000);
  };

  const getSchemeIcon = (type: string) => {
    switch (type) {
      case 'diabetes-care':
        return Heart;
      case 'general-health':
        return Shield;
      case 'family-care':
        return Users;
      default:
        return Shield;
    }
  };

  const getMatchColor = (percentage: number) => {
    if (percentage >= 90) return {
      bg: "bg-medilinkx-green",
      text: "text-medilinkx-green",
      border: "border-medilinkx-green"
    };
    if (percentage >= 80) return {
      bg: "bg-medilinkx-blue",
      text: "text-medilinkx-blue", 
      border: "border-medilinkx-blue"
    };
    return {
      bg: "bg-medilinkx-orange",
      text: "text-medilinkx-orange",
      border: "border-medilinkx-orange"
    };
  };

  const getMatchLabel = (percentage: number) => {
    if (percentage >= 90) return "Highly Recommended";
    if (percentage >= 80) return "Recommended";
    return "Good Option";
  };

  return (
    <div className="pt-16">
      <section className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 fade-in">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Health Scheme Applications</h1>
            <p className="text-xl text-gray-600">Apply to eligible health schemes with our smart auto-apply feature</p>
          </div>

          <div className="space-y-6">
            {mockSchemes.map((scheme) => {
              const SchemeIcon = getSchemeIcon(scheme.type);
              const colors = getMatchColor(scheme.matchPercentage);
              const isApplied = appliedSchemes.has(scheme.id);

              return (
                <Card key={scheme.id} className="glassmorphism rounded-2xl slide-up">
                  <CardContent className="p-8">
                    <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
                      <div className="flex-1">
                        <div className="flex items-center mb-4">
                          <div className={`${colors.text} bg-opacity-10 rounded-full w-16 h-16 flex items-center justify-center mr-4`} style={{backgroundColor: `${colors.bg.replace('bg-', '')}1A`}}>
                            <SchemeIcon className={`${colors.text} h-8 w-8`} />
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-gray-800">{scheme.name}</h3>
                            <span className={`${colors.bg} text-white px-3 py-1 rounded-full text-sm font-semibold`}>
                              {scheme.matchPercentage}% Match - {getMatchLabel(scheme.matchPercentage)}
                            </span>
                          </div>
                        </div>
                        <p className="text-gray-600 mb-4">{scheme.description}</p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                          <div className="bg-white rounded-lg p-3 flex items-center">
                            <DollarSign className="text-medilinkx-green mr-2 h-4 w-4" />
                            <div>
                              <strong>Coverage:</strong> ${scheme.coverage.toLocaleString()}/year
                            </div>
                          </div>
                          <div className="bg-white rounded-lg p-3 flex items-center">
                            <Clock className="text-medilinkx-orange mr-2 h-4 w-4" />
                            <div>
                              <strong>Processing:</strong> {scheme.processingTime}
                            </div>
                          </div>
                          <div className="bg-white rounded-lg p-3 flex items-center">
                            <Building className="text-medilinkx-blue mr-2 h-4 w-4" />
                            <div>
                              <strong>Network:</strong> {scheme.networkHospitals}+ hospitals
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="lg:w-auto w-full">
                        {isApplied ? (
                          <div className="text-center">
                            <CheckCircle className="h-8 w-8 text-medilinkx-green mx-auto mb-2" />
                            <span className="text-medilinkx-green font-semibold">Applied Successfully</span>
                          </div>
                        ) : (
                          <Button
                            onClick={() => handleAutoApply(scheme.id, scheme.name)}
                            className={`w-full lg:w-auto ${colors.bg} hover:opacity-90 text-white px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105`}
                            data-testid={`button-auto-apply-${scheme.type}`}
                          >
                            <Zap className="mr-2 h-5 w-5" />
                            Auto-Apply Now
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Application Status */}
          {showSuccess && (
            <Card className="glassmorphism rounded-2xl mt-8 slide-up">
              <CardContent className="p-8 text-center">
                <div className="bg-medilinkx-green bg-opacity-10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="text-medilinkx-green h-12 w-12" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Applications Submitted Successfully!</h3>
                <p className="text-gray-600 mb-6">
                  Your applications have been processed and approved. Proceed to your wallet to claim your health vouchers.
                </p>
                <Link href="/wallet">
                  <Button 
                    className="bg-medilinkx-blue hover:bg-blue-700 px-8 py-3 font-semibold"
                    data-testid="button-go-to-wallet"
                  >
                    Go to Wallet & Claim Vouchers
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          )}
        </div>
      </section>
    </div>
  );
}

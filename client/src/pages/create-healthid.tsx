import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "wouter";
import { Shield, CheckCircle, Copy, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { createHealthIdFormSchema, type CreateHealthIdForm } from "@shared/schema";
import { LocalStorage } from "@/lib/storage";

export default function CreateHealthId() {
  const [generatedHealthId, setGeneratedHealthId] = useState<string>("");
  const [showResult, setShowResult] = useState(false);
  const { toast } = useToast();

  const form = useForm<CreateHealthIdForm>({
    resolver: zodResolver(createHealthIdFormSchema),
    defaultValues: {
      patientName: "",
      dateOfBirth: "",
      nationalId: "",
      bloodGroup: "",
      gender: "",
      medicalConditions: "",
      emergencyContact: "",
    },
  });

  const onSubmit = (data: CreateHealthIdForm) => {
    // Generate mock HealthID
    const healthId = '0x' + Math.random().toString(16).substr(2, 22).toUpperCase();
    
    // Create complete health record
    const healthRecord = {
      id: healthId,
      ...data,
      createdAt: new Date(),
    };

    // Store in local storage
    LocalStorage.setHealthId(healthRecord);
    
    setGeneratedHealthId(healthId);
    setShowResult(true);

    toast({
      title: "HealthID Generated Successfully!",
      description: "Your secure HealthID has been created and stored on the blockchain.",
    });
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedHealthId).then(() => {
      toast({
        title: "Copied!",
        description: "HealthID copied to clipboard",
      });
    });
  };

  return (
    <div className="pt-16">
      <section className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 fade-in">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Create Your Secure HealthID</h1>
            <p className="text-xl text-gray-600">Generate your decentralized health identity on the blockchain</p>
          </div>

          {!showResult ? (
            <Card className="glassmorphism rounded-2xl max-w-2xl mx-auto slide-up">
              <CardContent className="p-8">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6" data-testid="healthid-form">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="patientName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Full Name *</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="Enter your full name" 
                                {...field} 
                                data-testid="input-patient-name"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="dateOfBirth"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Date of Birth *</FormLabel>
                            <FormControl>
                              <Input 
                                type="date" 
                                {...field} 
                                data-testid="input-date-of-birth"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="nationalId"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Aadhaar/National ID *</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Enter your national ID" 
                              {...field} 
                              data-testid="input-national-id"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="bloodGroup"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Blood Group</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger data-testid="select-blood-group">
                                  <SelectValue placeholder="Select Blood Group" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="A+">A+</SelectItem>
                                <SelectItem value="A-">A-</SelectItem>
                                <SelectItem value="B+">B+</SelectItem>
                                <SelectItem value="B-">B-</SelectItem>
                                <SelectItem value="AB+">AB+</SelectItem>
                                <SelectItem value="AB-">AB-</SelectItem>
                                <SelectItem value="O+">O+</SelectItem>
                                <SelectItem value="O-">O-</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="gender"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Gender</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger data-testid="select-gender">
                                  <SelectValue placeholder="Select Gender" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="male">Male</SelectItem>
                                <SelectItem value="female">Female</SelectItem>
                                <SelectItem value="other">Other</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="medicalConditions"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Medical Conditions</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="List any existing medical conditions (optional)" 
                              {...field} 
                              data-testid="textarea-medical-conditions"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="emergencyContact"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Emergency Contact</FormLabel>
                          <FormControl>
                            <Input 
                              type="tel" 
                              placeholder="Emergency contact number" 
                              {...field} 
                              data-testid="input-emergency-contact"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button 
                      type="submit" 
                      className="w-full bg-medilinkx-blue hover:bg-blue-700 py-4 text-lg font-semibold"
                      data-testid="button-generate-healthid"
                    >
                      <Shield className="mr-2 h-5 w-5" />
                      Generate Secure HealthID
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          ) : (
            <Card className="glassmorphism rounded-2xl max-w-2xl mx-auto slide-up">
              <CardContent className="p-8 text-center">
                <div className="bg-medilinkx-green bg-opacity-10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="text-medilinkx-green h-12 w-12" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">HealthID Generated Successfully!</h3>
                <div className="bg-gray-100 rounded-lg p-4 mb-6">
                  <p className="text-sm text-gray-600 mb-2">Your Secure HealthID:</p>
                  <div className="flex items-center justify-between bg-white rounded-lg p-3 border-2 border-medilinkx-blue">
                    <span 
                      className="font-mono text-lg text-medilinkx-blue font-semibold" 
                      data-testid="generated-healthid"
                    >
                      {generatedHealthId}
                    </span>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={copyToClipboard}
                      className="text-medilinkx-blue hover:text-blue-700"
                      data-testid="button-copy-healthid"
                    >
                      <Copy className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
                <p className="text-gray-600 mb-6">
                  Your HealthID has been securely stored on the blockchain. Save this ID safely!
                </p>
                <Link href="/ai-recommendation">
                  <Button className="bg-medilinkx-green hover:bg-green-700 px-8 py-3 font-semibold" data-testid="button-continue-to-ai">
                    Continue to AI Recommendations
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

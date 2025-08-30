import { Eye, Lock, Brain, Zap, Globe, ShieldQuestion, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  return (
    <div className="pt-16">
      <section className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">About MediLinkX</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Revolutionizing healthcare through blockchain technology, artificial intelligence, and decentralized identity management
            </p>
          </div>

          {/* Vision Section */}
          <Card className="glassmorphism rounded-2xl mb-8 slide-up">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Vision</h2>
                  <p className="text-gray-600 mb-4">
                    MediLinkX envisions a world where healthcare is truly patient-centric, transparent, and accessible to everyone. 
                    By leveraging the power of Web3 technology and artificial intelligence, we're building a decentralized healthcare 
                    ecosystem that puts control back in the hands of patients.
                  </p>
                  <p className="text-gray-600 mb-6">
                    Our platform eliminates traditional barriers, reduces fraud, and ensures that health benefits reach those who 
                    need them most, when they need them most.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <div className="bg-medilinkx-blue bg-opacity-10 text-medilinkx-blue px-4 py-2 rounded-full text-sm font-semibold">
                      <Lock className="inline mr-2 h-4 w-4" />
                      Security First
                    </div>
                    <div className="bg-medilinkx-green bg-opacity-10 text-medilinkx-green px-4 py-2 rounded-full text-sm font-semibold">
                      <Heart className="inline mr-2 h-4 w-4" />
                      Patient-Centric
                    </div>
                    <div className="bg-medilinkx-orange bg-opacity-10 text-medilinkx-orange px-4 py-2 rounded-full text-sm font-semibold">
                      <Brain className="inline mr-2 h-4 w-4" />
                      AI-Powered
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <img 
                    src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                    alt="Modern healthcare technology and digital transformation" 
                    className="rounded-xl shadow-lg w-full h-auto"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Key Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* Transparency */}
            <Card className="glassmorphism rounded-xl slide-up">
              <CardContent className="p-6 text-center">
                <div className="bg-medilinkx-blue bg-opacity-10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Eye className="text-medilinkx-blue h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Complete Transparency</h3>
                <p className="text-gray-600">
                  Every transaction is recorded on the blockchain, ensuring complete transparency and traceability of health benefits and payments.
                </p>
              </CardContent>
            </Card>

            {/* Fraud Prevention */}
            <Card className="glassmorphism rounded-xl slide-up">
              <CardContent className="p-6 text-center">
                <div className="bg-medilinkx-red bg-opacity-10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Lock className="text-medilinkx-red h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Fraud-Proof System</h3>
                <p className="text-gray-600">
                  Blockchain technology and smart contracts eliminate the possibility of fraud, ensuring benefits reach genuine patients only.
                </p>
              </CardContent>
            </Card>

            {/* AI Automation */}
            <Card className="glassmorphism rounded-xl slide-up">
              <CardContent className="p-6 text-center">
                <div className="bg-medilinkx-green bg-opacity-10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Brain className="text-medilinkx-green h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">AI-Powered Automation</h3>
                <p className="text-gray-600">
                  Intelligent algorithms automatically match patients with eligible schemes and streamline the entire application process.
                </p>
              </CardContent>
            </Card>

            {/* Instant Payments */}
            <Card className="glassmorphism rounded-xl slide-up">
              <CardContent className="p-6 text-center">
                <div className="bg-medilinkx-orange bg-opacity-10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Zap className="text-medilinkx-orange h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Instant Payments</h3>
                <p className="text-gray-600">
                  Crypto-based vouchers enable instant payments to healthcare providers, eliminating paperwork and processing delays.
                </p>
              </CardContent>
            </Card>

            {/* Global Access */}
            <Card className="glassmorphism rounded-xl slide-up">
              <CardContent className="p-6 text-center">
                <div className="bg-medilinkx-blue bg-opacity-10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Globe className="text-medilinkx-blue h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Global Accessibility</h3>
                <p className="text-gray-600">
                  Decentralized platform ensures healthcare benefits are accessible from anywhere in the world, breaking geographical barriers.
                </p>
              </CardContent>
            </Card>

            {/* Data Privacy */}
            <Card className="glassmorphism rounded-xl slide-up">
              <CardContent className="p-6 text-center">
                <div className="bg-medilinkx-green bg-opacity-10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <ShieldQuestion className="text-medilinkx-green h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Privacy Protection</h3>
                <p className="text-gray-600">
                  Your health data remains encrypted and under your complete control, with selective sharing based on your permissions.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Technology Stack */}
          <Card className="glassmorphism rounded-2xl mb-8 slide-up">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Powered by Cutting-Edge Technology</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white rounded-lg p-6 text-center">
                  <div className="text-4xl text-medilinkx-blue mb-3">⟠</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Ethereum Blockchain</h4>
                  <p className="text-gray-600 text-sm">Secure, decentralized infrastructure</p>
                </div>
                <div className="bg-white rounded-lg p-6 text-center">
                  <Brain className="text-4xl text-medilinkx-green mb-3 mx-auto h-10 w-10" />
                  <h4 className="font-semibold text-gray-800 mb-2">Machine Learning</h4>
                  <p className="text-gray-600 text-sm">Intelligent recommendation engine</p>
                </div>
                <div className="bg-white rounded-lg p-6 text-center">
                  <div className="text-4xl text-medilinkx-orange mb-3">📄</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Smart Contracts</h4>
                  <p className="text-gray-600 text-sm">Automated, trustless execution</p>
                </div>
                <div className="bg-white rounded-lg p-6 text-center">
                  <div className="text-4xl text-medilinkx-red mb-3">📱</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Progressive Web App</h4>
                  <p className="text-gray-600 text-sm">Accessible across all devices</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Team Section */}
          <Card className="glassmorphism rounded-2xl slide-up">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Meet Our Team</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white rounded-xl p-6 text-center" data-testid="team-member-sarah">
                  <img 
                    src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400&q=80" 
                    alt="Dr. Sarah Johnson - Chief Medical Officer" 
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h4 className="font-semibold text-gray-800 mb-2">Dr. Sarah Johnson</h4>
                  <p className="text-medilinkx-blue font-medium mb-2">Chief Medical Officer</p>
                  <p className="text-gray-600 text-sm">20+ years in healthcare innovation and digital health transformation</p>
                </div>
                <div className="bg-white rounded-xl p-6 text-center" data-testid="team-member-alex">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400&q=80" 
                    alt="Alex Chen - Lead Blockchain Developer" 
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h4 className="font-semibold text-gray-800 mb-2">Alex Chen</h4>
                  <p className="text-medilinkx-green font-medium mb-2">Lead Blockchain Developer</p>
                  <p className="text-gray-600 text-sm">Expert in Web3 technologies and decentralized application development</p>
                </div>
                <div className="bg-white rounded-xl p-6 text-center" data-testid="team-member-maria">
                  <img 
                    src="https://images.unsplash.com/photo-1494790108755-2616b626452e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400&q=80" 
                    alt="Maria Rodriguez - AI/ML Engineer" 
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h4 className="font-semibold text-gray-800 mb-2">Maria Rodriguez</h4>
                  <p className="text-medilinkx-orange font-medium mb-2">AI/ML Engineer</p>
                  <p className="text-gray-600 text-sm">Specialist in healthcare AI and predictive analytics systems</p>
                </div>
              </div>
              
              <div className="text-center mt-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Get in Touch</h3>
                <div className="flex flex-wrap justify-center gap-6">
                  <a 
                    href="mailto:team@medilinkx.com" 
                    className="flex items-center text-gray-600 hover:text-medilinkx-blue transition-colors"
                    data-testid="contact-email"
                  >
                    📧 team@medilinkx.com
                  </a>
                  <a 
                    href="#" 
                    className="flex items-center text-gray-600 hover:text-medilinkx-blue transition-colors"
                    data-testid="contact-linkedin"
                  >
                    💼 LinkedIn
                  </a>
                  <a 
                    href="#" 
                    className="flex items-center text-gray-600 hover:text-medilinkx-blue transition-colors"
                    data-testid="contact-github"
                  >
                    👨‍💻 GitHub
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}

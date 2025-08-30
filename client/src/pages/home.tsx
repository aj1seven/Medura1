import { Link } from "wouter";
import { Shield, Heart, Brain, Zap, Wallet, Eye, Lock, Globe, ShieldQuestion } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="gradient-bg min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 text-white">
          <div className="fade-in">
            <Shield className="h-24 w-24 mx-auto mb-6" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">MediLinkX</h1>
            <p className="text-xl md:text-2xl mb-4 opacity-90">
              Decentralized Health Identity & Smart Benefits Platform
            </p>
            <p className="text-lg mb-8 opacity-80">
              Secure, AI-powered healthcare management on the blockchain
            </p>
            <Link href="/create-healthid">
              <Button 
                size="lg" 
                className="bg-white text-medilinkx-blue px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
                data-testid="create-healthid-cta"
              >
                Create Your HealthID
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Info Cards Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 slide-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Revolutionary Healthcare Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the future of healthcare with blockchain security, AI intelligence, and seamless benefit management
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* HealthID Card */}
            <div className="glassmorphism rounded-xl p-6 text-center hover:transform hover:scale-105 transition-all slide-up">
              <div className="bg-medilinkx-blue bg-opacity-10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Heart className="text-medilinkx-blue h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Decentralized HealthID</h3>
              <p className="text-gray-600">
                Secure, blockchain-based health identity that you own and control completely
              </p>
            </div>

            {/* AI Recommendations Card */}
            <div className="glassmorphism rounded-xl p-6 text-center hover:transform hover:scale-105 transition-all slide-up">
              <div className="bg-medilinkx-green bg-opacity-10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Brain className="text-medilinkx-green h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">AI Health Insights</h3>
              <p className="text-gray-600">
                Personalized scheme recommendations powered by advanced AI algorithms
              </p>
            </div>

            {/* Auto-Apply Card */}
            <div className="glassmorphism rounded-xl p-6 text-center hover:transform hover:scale-105 transition-all slide-up">
              <div className="bg-medilinkx-orange bg-opacity-10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Zap className="text-medilinkx-orange h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Smart Auto-Apply</h3>
              <p className="text-gray-600">
                Automatically apply to eligible health schemes with one-click automation
              </p>
            </div>

            {/* Secure Vouchers Card */}
            <div className="glassmorphism rounded-xl p-6 text-center hover:transform hover:scale-105 transition-all slide-up">
              <div className="bg-medilinkx-blue bg-opacity-10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Wallet className="text-medilinkx-blue h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Crypto Vouchers</h3>
              <p className="text-gray-600">
                Secure digital vouchers stored in your crypto wallet for instant payments
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Why Choose MediLinkX?
            </h2>
            <p className="text-xl text-gray-600">
              Built with cutting-edge technology for maximum security and efficiency
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="glassmorphism rounded-xl p-6 text-center slide-up">
              <div className="bg-medilinkx-blue bg-opacity-10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Eye className="text-medilinkx-blue h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Complete Transparency</h3>
              <p className="text-gray-600">
                Every transaction is recorded on the blockchain, ensuring complete transparency and traceability
              </p>
            </div>

            <div className="glassmorphism rounded-xl p-6 text-center slide-up">
              <div className="bg-medilinkx-red bg-opacity-10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Lock className="text-medilinkx-red h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Fraud-Proof System</h3>
              <p className="text-gray-600">
                Blockchain technology eliminates fraud, ensuring benefits reach genuine patients only
              </p>
            </div>

            <div className="glassmorphism rounded-xl p-6 text-center slide-up">
              <div className="bg-medilinkx-green bg-opacity-10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Brain className="text-medilinkx-green h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">AI-Powered Automation</h3>
              <p className="text-gray-600">
                Intelligent algorithms automatically match patients with eligible schemes
              </p>
            </div>

            <div className="glassmorphism rounded-xl p-6 text-center slide-up">
              <div className="bg-medilinkx-orange bg-opacity-10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Zap className="text-medilinkx-orange h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Instant Payments</h3>
              <p className="text-gray-600">
                Crypto-based vouchers enable instant payments, eliminating paperwork delays
              </p>
            </div>

            <div className="glassmorphism rounded-xl p-6 text-center slide-up">
              <div className="bg-medilinkx-blue bg-opacity-10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Globe className="text-medilinkx-blue h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Global Accessibility</h3>
              <p className="text-gray-600">
                Access healthcare benefits from anywhere in the world, breaking geographical barriers
              </p>
            </div>

            <div className="glassmorphism rounded-xl p-6 text-center slide-up">
              <div className="bg-medilinkx-green bg-opacity-10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <ShieldQuestion className="text-medilinkx-green h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Privacy Protection</h3>
              <p className="text-gray-600">
                Your health data remains encrypted and under your complete control
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Heart className="text-medilinkx-blue h-8 w-8 mr-3" />
                <span className="text-xl font-bold">MediLinkX</span>
              </div>
              <p className="text-gray-400">
                Revolutionizing healthcare through blockchain technology and AI-powered solutions.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/create-healthid" className="text-gray-400 hover:text-white transition-colors">
                    Create HealthID
                  </Link>
                </li>
                <li>
                  <Link href="/ai-recommendation" className="text-gray-400 hover:text-white transition-colors">
                    AI Recommendations
                  </Link>
                </li>
                <li>
                  <Link href="/wallet" className="text-gray-400 hover:text-white transition-colors">
                    Wallet
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>📧 support@medilinkx.com</li>
                <li>📞 +1 (555) 123-4567</li>
                <li>📍 Healthcare District, Tech City</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 MediLinkX. All rights reserved. | Powered by Blockchain & AI Technology</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

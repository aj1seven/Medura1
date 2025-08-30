import { Link } from "wouter";
import { Shield, Heart, Brain, Zap, Wallet, Eye, Lock, Globe, ShieldQuestion } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="gradient-bg min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-72 h-72 bg-green-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
        </div>
        <div className="relative z-10 max-w-5xl mx-auto text-center px-4 text-white">
          <div className="fade-in">
            <div className="floating mb-8">
              <div className="relative inline-block">
                <Shield className="h-28 w-28 mx-auto mb-6 text-white drop-shadow-2xl" />
                <div className="absolute inset-0 h-28 w-28 mx-auto bg-white rounded-full blur-xl opacity-20 pulse-glow"></div>
              </div>
            </div>
            <h1 className="font-display text-6xl md:text-8xl font-black mb-8 hero-text tracking-tight">
              <span className="bg-gradient-to-r from-white via-blue-100 to-green-100 bg-clip-text text-transparent">
                MediLinkX
              </span>
            </h1>
            <div className="glassmorphism-strong rounded-2xl p-6 mb-8 max-w-3xl mx-auto">
              <p className="text-2xl md:text-3xl mb-4 font-semibold hero-text">
                Decentralized Health Identity & Smart Benefits Platform
              </p>
              <p className="text-lg md:text-xl opacity-90 hero-text">
                Secure, AI-powered healthcare management on the blockchain
              </p>
            </div>
            <div className="space-y-4 md:space-y-0 md:space-x-6 md:flex md:justify-center md:items-center">
              <Link href="/create-healthid">
                <Button 
                  size="lg" 
                  className="glassmorphism-strong hover:glassmorphism border-2 border-white/30 text-white px-10 py-5 rounded-2xl text-xl font-bold hover:bg-white/20 transition-all duration-300 transform hover:scale-110 shadow-2xl backdrop-blur-sm"
                  data-testid="create-healthid-cta"
                >
                  <Shield className="mr-3 h-6 w-6" />
                  Create Your HealthID
                </Button>
              </Link>
              <Link href="/about">
                <Button 
                  variant="ghost"
                  size="lg" 
                  className="border-2 border-white/50 text-white px-8 py-5 rounded-2xl text-lg font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
                >
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Info Cards Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="animated-bg absolute inset-0 opacity-5"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-50/50 to-green-50/30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 slide-up">
            <h2 className="font-display text-4xl md:text-6xl font-bold text-gray-800 mb-6">
              Revolutionary Healthcare Solutions
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Experience the future of healthcare with blockchain security, AI intelligence, and seamless benefit management
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* HealthID Card */}
            <div className="feature-card rounded-2xl p-8 text-center group">
              <div className="bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-xl">
                <Heart className="text-white h-10 w-10" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Decentralized HealthID</h3>
              <p className="text-gray-600 leading-relaxed">
                Secure, blockchain-based health identity that you own and control completely
              </p>
            </div>

            {/* AI Recommendations Card */}
            <div className="feature-card rounded-2xl p-8 text-center group">
              <div className="bg-gradient-to-br from-green-400 to-green-600 rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-xl">
                <Brain className="text-white h-10 w-10" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">AI Health Insights</h3>
              <p className="text-gray-600 leading-relaxed">
                Personalized scheme recommendations powered by advanced AI algorithms
              </p>
            </div>

            {/* Auto-Apply Card */}
            <div className="feature-card rounded-2xl p-8 text-center group">
              <div className="bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-xl">
                <Zap className="text-white h-10 w-10" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Smart Auto-Apply</h3>
              <p className="text-gray-600 leading-relaxed">
                Automatically apply to eligible health schemes with one-click automation
              </p>
            </div>

            {/* Secure Vouchers Card */}
            <div className="feature-card rounded-2xl p-8 text-center group">
              <div className="bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-xl">
                <Wallet className="text-white h-10 w-10" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Crypto Vouchers</h3>
              <p className="text-gray-600 leading-relaxed">
                Secure digital vouchers stored in your crypto wallet for instant payments
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-24 relative bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23007BFF" fill-opacity="0.03"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="font-display text-4xl md:text-6xl font-bold text-gray-800 mb-6">
              Why Choose MediLinkX?
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
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

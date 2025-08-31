import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Hospital, Wallet, CheckCircle, ArrowRight, DollarSign, Calendar, Building, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

interface Voucher {
  id: string;
  schemeId: string;
  schemeName: string;
  amount: number;
  status: string;
  createdAt: string;
  provider: string;
  estimatedBenefit: string;
}

interface Hospital {
  id: string;
  name: string;
  location: string;
  specializations: string[];
  rating: number;
  distance: string;
  availableServices: string[];
}

export default function PayHospital() {
  const [vouchers, setVouchers] = useState<Voucher[]>([]);
  const [hospitals, setHospitals] = useState<Hospital[]>([]);
  const [selectedHospital, setSelectedHospital] = useState<Hospital | null>(null);
  const [selectedVouchers, setSelectedVouchers] = useState<Set<string>>(new Set());
  const [isProcessing, setIsProcessing] = useState(false);
  const [walletBalance, setWalletBalance] = useState(0);
  const { toast } = useToast();

  useEffect(() => {
    // Load vouchers and hospitals from localStorage
    const loadData = () => {
      try {
        // Load created vouchers from localStorage
        const createdVouchers = localStorage.getItem('created_vouchers');
        if (createdVouchers) {
          setVouchers(JSON.parse(createdVouchers));
        } else {
          // Fallback to mock vouchers
          const mockVouchers: Voucher[] = [
            {
              id: 'voucher-diabetes-care',
              schemeId: 'diabetes-care',
              schemeName: 'Diabetes Care Plus',
              amount: 50,
              status: 'active',
              createdAt: new Date().toISOString(),
              provider: 'Government Health Scheme',
              estimatedBenefit: '$5,000'
            },
            {
              id: 'voucher-general-health',
              schemeId: 'general-health',
              schemeName: 'General Health Shield',
              amount: 30,
              status: 'active',
              createdAt: new Date().toISOString(),
              provider: 'Government Health Scheme',
              estimatedBenefit: '$3,000'
            }
          ];
          setVouchers(mockVouchers);
        }

        // Load mock hospitals
        const mockHospitals: Hospital[] = [
          {
            id: 'apollo-001',
            name: 'Apollo Hospital',
            location: 'Sector 26, Delhi',
            specializations: ['Cardiology', 'Diabetes Care', 'General Surgery'],
            rating: 4.8,
            distance: '2.5 km',
            availableServices: ['Emergency Care', 'OPD', 'Inpatient', 'Diagnostics']
          },
          {
            id: 'max-002',
            name: 'Max Healthcare',
            location: 'Saket, Delhi',
            specializations: ['Oncology', 'Neurology', 'Orthopedics'],
            rating: 4.6,
            distance: '5.2 km',
            availableServices: ['Specialized Care', 'OPD', 'Inpatient', 'Research']
          },
          {
            id: 'fortis-003',
            name: 'Fortis Hospital',
            location: 'Gurgaon, Haryana',
            specializations: ['Emergency Medicine', 'Trauma Care', 'General Medicine'],
            rating: 4.4,
            distance: '12.8 km',
            availableServices: ['Emergency Care', 'Trauma Center', 'OPD', 'ICU']
          }
        ];
        setHospitals(mockHospitals);

        // Load wallet balance
        const balance = localStorage.getItem('walletBalance');
        setWalletBalance(balance ? parseFloat(balance) : 0);
      } catch (error) {
        console.error('Error loading data:', error);
        // Fallback to mock data
        const mockVouchers: Voucher[] = [
          {
            id: 'voucher-pmjay',
            schemeId: 'pmjay-001',
            schemeName: 'Ayushman Bharat - PM-JAY',
            amount: 5000,
            status: 'active',
            createdAt: new Date().toISOString(),
            provider: 'Government of India',
            estimatedBenefit: '$6,250'
          }
        ];
        setVouchers(mockVouchers);
      }
    };

    loadData();
  }, []);

  const handleVoucherSelection = (voucherId: string) => {
    setSelectedVouchers(prev => {
      const newSet = new Set(prev);
      if (newSet.has(voucherId)) {
        newSet.delete(voucherId);
      } else {
        newSet.add(voucherId);
      }
      return newSet;
    });
  };

  const handleHospitalSelection = (hospital: Hospital) => {
    setSelectedHospital(hospital);
  };

  const handlePayHospital = async () => {
    if (!selectedHospital || selectedVouchers.size === 0) {
      toast({
        title: "Selection Required",
        description: "Please select a hospital and at least one voucher.",
        variant: "destructive",
      });
      return;
    }

    setIsProcessing(true);
    
    try {
      // Simulate payment processing
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Calculate total amount
      const totalAmount = Array.from(selectedVouchers).reduce((sum, voucherId) => {
        const voucher = vouchers.find(v => v.id === voucherId);
        return sum + (voucher?.amount || 0);
      }, 0);
      
      // Update wallet balance
      const newBalance = walletBalance - totalAmount;
      localStorage.setItem('walletBalance', newBalance.toString());
      setWalletBalance(newBalance);
      
      // Mark vouchers as used
      const updatedVouchers = vouchers.map(voucher => 
        selectedVouchers.has(voucher.id) 
          ? { ...voucher, status: 'used' }
          : voucher
      );
      setVouchers(updatedVouchers);
      localStorage.setItem('created_vouchers', JSON.stringify(updatedVouchers));
      
      // Clear selections
      setSelectedVouchers(new Set());
      setSelectedHospital(null);
      
      toast({
        title: "Payment Successful!",
        description: `Successfully paid ${selectedHospital.name} using ${selectedVouchers.size} vouchers ($${totalAmount} USDC)`,
      });
    } catch (error) {
      console.error('Payment error:', error);
      toast({
        title: "Payment Failed",
        description: "Failed to process payment. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsProcessing(false);
    }
  };

  const getTotalSelectedAmount = () => {
    return Array.from(selectedVouchers).reduce((sum, voucherId) => {
      const voucher = vouchers.find(v => v.id === voucherId);
      return sum + (voucher?.amount || 0);
    }, 0);
  };

  return (
    <div className="pt-16">
      <section className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 fade-in">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Hospital Payment</h1>
            <p className="text-xl text-gray-600">Use your USDC vouchers to pay for hospital services</p>
          </div>

          {/* Wallet Balance */}
          <Card className="glassmorphism rounded-2xl mb-8 slide-up">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Wallet className="h-8 w-8 text-medilinkx-blue mr-3" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">Wallet Balance</h3>
                    <p className="text-sm text-gray-600">Available USDC for payments</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-medilinkx-blue">${walletBalance.toLocaleString()}</div>
                  <div className="text-sm text-gray-600">USDC</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Available Vouchers */}
            <Card className="glassmorphism rounded-2xl slide-up">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-800">Available Vouchers</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {vouchers.filter(v => v.status === 'active').map((voucher) => {
                    const isSelected = selectedVouchers.has(voucher.id);
                    
                    return (
                      <div 
                        key={voucher.id}
                        className={`bg-white rounded-lg p-4 border-2 cursor-pointer transition-all ${
                          isSelected ? 'border-medilinkx-blue bg-blue-50' : 'border-gray-200 hover:border-gray-300'
                        }`}
                        onClick={() => handleVoucherSelection(voucher.id)}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex-1">
                            <h4 className="font-semibold text-gray-800">{voucher.schemeName}</h4>
                            <p className="text-sm text-gray-600">{voucher.provider}</p>
                            <div className="flex items-center mt-2 space-x-4 text-sm text-gray-500">
                              <span className="flex items-center">
                                <DollarSign className="h-4 w-4 mr-1" />
                                {voucher.amount} USDC
                              </span>
                              <span className="flex items-center">
                                <Calendar className="h-4 w-4 mr-1" />
                                {new Date(voucher.createdAt).toLocaleDateString()}
                              </span>
                            </div>
                          </div>
                          <div className="text-right">
                            {isSelected && (
                              <CheckCircle className="h-6 w-6 text-medilinkx-blue" />
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
                
                {vouchers.filter(v => v.status === 'active').length === 0 && (
                  <div className="text-center py-8 text-gray-500">
                    <Wallet className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                    <p>No active vouchers available</p>
                    <p className="text-sm">Create vouchers in the Voucher Wallet first</p>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Hospital Selection */}
            <Card className="glassmorphism rounded-2xl slide-up">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-800">Select Hospital</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {hospitals.map((hospital) => {
                    const isSelected = selectedHospital?.id === hospital.id;
                    
                    return (
                      <div 
                        key={hospital.id}
                        className={`bg-white rounded-lg p-4 border-2 cursor-pointer transition-all ${
                          isSelected ? 'border-medilinkx-green bg-green-50' : 'border-gray-200 hover:border-gray-300'
                        }`}
                        onClick={() => handleHospitalSelection(hospital)}
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <h4 className="font-semibold text-gray-800">{hospital.name}</h4>
                            <p className="text-sm text-gray-600 flex items-center">
                              <MapPin className="h-4 w-4 mr-1" />
                              {hospital.location} • {hospital.distance}
                            </p>
                            <div className="flex items-center mt-2">
                              <span className="text-yellow-600 font-semibold mr-2">★ {hospital.rating}</span>
                              <span className="text-sm text-gray-500">Rating</span>
                            </div>
                            <div className="mt-2">
                              <p className="text-sm text-gray-600">
                                <strong>Specializations:</strong> {hospital.specializations.join(', ')}
                              </p>
                            </div>
                          </div>
                          <div className="text-right">
                            {isSelected && (
                              <CheckCircle className="h-6 w-6 text-medilinkx-green" />
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Payment Summary and Action */}
          {(selectedHospital || selectedVouchers.size > 0) && (
            <Card className="glassmorphism rounded-2xl mt-8 slide-up">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-800">Payment Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-medilinkx-blue">{selectedVouchers.size}</div>
                    <div className="text-sm text-gray-600">Vouchers Selected</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">
                      {selectedHospital ? selectedHospital.name : 'Not Selected'}
                    </div>
                    <div className="text-sm text-gray-600">Hospital</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">${getTotalSelectedAmount()}</div>
                    <div className="text-sm text-gray-600">Total Amount</div>
                  </div>
                </div>
                
                <div className="text-center space-y-4">
                  <Button 
                    onClick={handlePayHospital}
                    disabled={!selectedHospital || selectedVouchers.size === 0 || isProcessing}
                    className="bg-medilinkx-green hover:bg-green-700 px-8 py-3 font-semibold"
                  >
                    {isProcessing ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Processing Payment...
                      </>
                    ) : (
                      <>
                        <Hospital className="mr-2 h-5 w-5" />
                        Pay Hospital (${getTotalSelectedAmount()} USDC)
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </Button>
                  
                  <p className="text-sm text-gray-600">
                    Payment will be processed using your selected vouchers
                  </p>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Navigation */}
          <div className="text-center mt-8">
            <Link href="/receipt">
              <Button 
                variant="outline"
                className="px-8 py-3 font-semibold"
              >
                View Receipt
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

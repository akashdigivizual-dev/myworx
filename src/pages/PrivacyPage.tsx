import React, { useState } from 'react';
import { ChevronRight, Mail, FileDown, ChevronUp } from 'lucide-react';

const PrivacyPage: React.FC = () => {
  const [expandedSection, setExpandedSection] = useState<number | null>(null);
  const [downloadMessage, setDownloadMessage] = useState('');

  const toggleSection = (section: number) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const handleDownload = () => {
    setDownloadMessage('Privacy Policy downloaded successfully!');
    setTimeout(() => setDownloadMessage(''), 3000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb Section */}
      <div className="breadcrumb-wrap bg-gradient-to-r from-slate-800 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=600&fit=crop"
            alt="Privacy Policy Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-slate-800/80"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 py-[300px] sm:py-[250px] text-center text-white">
          {/* Breadcrumb Navigation */}
          {/* <div className="flex items-center gap-2 text-sm mb-6 text-center">
            <a href="/" className="text-blue-400 hover:text-blue-300 transition ">
              Home
            </a>
            <ChevronRight size={16} className="text-gray-400" />
            <span className="text-gray-300">Privacy Policy</span>
          </div> */}
          
          <div style={{padding: "20px", marginBottom: "10px"}}>
            <a href="/" className="hover:text-white transition-colors"  >Home</a>
            <span style={{padding: "10px"}}>&gt;</span>
            <span className="text-primary">Privacy</span>
          </div>


          {/* Page Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
            Privacy Policy
          </h1>
          <p className="text-gray-300 text-lg">
            Your privacy and trust matter to us
          </p>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        {/* Introduction Box */}
        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-12">
          <p className="text-gray-700 leading-relaxed mb-4">
            Myworx (referred to as "we", "us" or "our") is highly concerned about privacy. We strive to keep your trust by protecting your information. This policy details how we collect, use, disclose, and process your personal information in relation to your use of our website, applications and other services linked to this policy (referred to as 'services').
          </p>
          <p className="text-gray-600 text-sm leading-relaxed">
            This policy is not applicable to information provided by you to or collected by third party agents like brokers, payment platforms and others that you may use for availing Myworx services. Kindly consult with third party agents about their privacy policy.
          </p>
        </div>

        {/* Policy Sections */}
        <div className="space-y-6">
          {/* Section 1 */}
          <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition">
            <button
              onClick={() => toggleSection(1)}
              className="w-full px-6 py-4 bg-white hover:bg-gray-50 flex items-center justify-between transition"
            >
              <span className="font-bold text-gray-900 text-lg">1. INTRODUCTION</span>
              {expandedSection === 1 ? (
                <ChevronUp size={20} className="text-blue-600" />
              ) : (
                <ChevronRight size={20} className="text-gray-400" />
              )}
            </button>
            {expandedSection === 1 && (
              <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 text-gray-700 space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Personal Information</h3>
                  <p>
                    Personal information is the data that pertains to you and can – either individually or when combined with other data - helps identify you as an individual. It does not include data that has been anonymized so that you are no longer identifiable via means available to us.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Our Services</h3>
                  <p>Services include all the services provided by Myworx Zone Pvt Ltd.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">References to You</h3>
                  <p>'You' refers to any individual availing our website services.</p>
                </div>
              </div>
            )}
          </div>

          {/* Section 2 */}
          <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition">
            <button
              onClick={() => toggleSection(2)}
              className="w-full px-6 py-4 bg-white hover:bg-gray-50 flex items-center justify-between transition"
            >
              <span className="font-bold text-gray-900 text-lg">2. INFORMATION WE COLLECT</span>
              {expandedSection === 2 ? (
                <ChevronUp size={20} className="text-blue-600" />
              ) : (
                <ChevronRight size={20} className="text-gray-400" />
              )}
            </button>
            {expandedSection === 2 && (
              <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 text-gray-700">
                <p className="mb-4">
                  The use of any personal information collected by us depends on your relationship with us and the requirements of applicable law which have been detailed as follows. We collect information:
                </p>
                <ul className="space-y-2 list-disc list-inside">
                  <li>provided directly by you</li>
                  <li>provided by employer, authorized representatives, partner, company</li>
                  <li>about your device location and the services you avail through pixels, logs, cookies, web beacons and other internet technologies</li>
                  <li>about your geolocation and contacts depending on settings of your device</li>
                  <li>from landlords, managers of buildings, licensees and property brokers</li>
                  <li>information service providers or data brokers</li>
                </ul>
              </div>
            )}
          </div>

          {/* Section 3 */}
          <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition">
            <button
              onClick={() => toggleSection(3)}
              className="w-full px-6 py-4 bg-white hover:bg-gray-50 flex items-center justify-between transition"
            >
              <span className="font-bold text-gray-900 text-lg">3. INFORMATION COLLECTED FROM YOU</span>
              {expandedSection === 3 ? (
                <ChevronUp size={20} className="text-blue-600" />
              ) : (
                <ChevronRight size={20} className="text-gray-400" />
              )}
            </button>
            {expandedSection === 3 && (
              <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 text-gray-700">
                <p className="mb-4">Depending on services you use, we obtain personal information from you and your company. Based on the services availed by you, we can collect following information from you:</p>
                <ul className="space-y-2 list-disc list-inside">
                  <li>Name, address, email address, phone number and other contact details</li>
                  <li>KYC verification information like photograph, photo ID, and government ID</li>
                  <li>Professional and Employment-Related Information</li>
                  <li>Payment details like credit/debit card information</li>
                  <li>Information regarding utilization of resources at our locations</li>
                  <li>Information shared intentionally by you like emails, requests, feedback</li>
                  <li>Device and usage information including IP address and geolocation</li>
                  <li>Information about your online and offline activity</li>
                  <li>Social media information and uploaded documents</li>
                </ul>
              </div>
            )}
          </div>

          {/* Section 5 */}
          <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition">
            <button
              onClick={() => toggleSection(5)}
              className="w-full px-6 py-4 bg-white hover:bg-gray-50 flex items-center justify-between transition"
            >
              <span className="font-bold text-gray-900 text-lg">5. USE OF PERSONAL INFORMATION</span>
              {expandedSection === 5 ? (
                <ChevronUp size={20} className="text-blue-600" />
              ) : (
                <ChevronRight size={20} className="text-gray-400" />
              )}
            </button>
            {expandedSection === 5 && (
              <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 text-gray-700">
                <p className="mb-4">We may use your personal information to:</p>
                <ul className="space-y-2 list-disc list-inside">
                  <li>Provide services to you like events and materials you request</li>
                  <li>Provide secure environments and protect against fraud</li>
                  <li>Fulfill customer service requests</li>
                  <li>Customize, analyze and improve our services</li>
                  <li>Connect with you regarding promotions and tailored services</li>
                  <li>Be in compliance with legal obligations and enforce legal rights</li>
                </ul>
              </div>
            )}
          </div>

          {/* Section 8 */}
          <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition">
            <button
              onClick={() => toggleSection(8)}
              className="w-full px-6 py-4 bg-white hover:bg-gray-50 flex items-center justify-between transition"
            >
              <span className="font-bold text-gray-900 text-lg">8. YOUR RIGHTS IN YOUR PERSONAL INFORMATION</span>
              {expandedSection === 8 ? (
                <ChevronUp size={20} className="text-blue-600" />
              ) : (
                <ChevronRight size={20} className="text-gray-400" />
              )}
            </button>
            {expandedSection === 8 && (
              <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 text-gray-700">
                <p className="mb-4">You have a say in your personal information. You have the right to:</p>
                <ul className="space-y-2 list-disc list-inside">
                  <li>Know about the third parties with whom we share your information</li>
                  <li>Ask for a copy of your personal information</li>
                  <li>Obtain a copy in electronic form</li>
                  <li>Raise objection about the use of your personal information</li>
                  <li>Revise and correct inaccurate information</li>
                  <li>Request anonymity and erasure of personal details</li>
                  <li>Request a review of decisions that affect your rights</li>
                </ul>
              </div>
            )}
          </div>

          {/* Section 13 */}
          <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition">
            <button
              onClick={() => toggleSection(13)}
              className="w-full px-6 py-4 bg-white hover:bg-gray-50 flex items-center justify-between transition"
            >
              <span className="font-bold text-gray-900 text-lg">13. SECURITY OF INFORMATION</span>
              {expandedSection === 13 ? (
                <ChevronUp size={20} className="text-blue-600" />
              ) : (
                <ChevronRight size={20} className="text-gray-400" />
              )}
            </button>
            {expandedSection === 13 && (
              <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 text-gray-700">
                <p>
                  We store your personal information in strict security. We undertake measures to use appropriate technical steps to protect your personal details against unauthorized or unlawful processing and accidental loss, damage or destruction. No transmission or storage is completely secure. We strive to protect your data; we cannot guarantee security of any information you transmit. You can put your own security controls in place by using strong passwords and keeping your credentials confidential.
                </p>
              </div>
            )}
          </div>

          {/* Section 17 */}
          <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition">
            <button
              onClick={() => toggleSection(17)}
              className="w-full px-6 py-4 bg-white hover:bg-gray-50 flex items-center justify-between transition"
            >
              <span className="font-bold text-gray-900 text-lg">17. GRIEVANCES, COMPLAINTS AND QUERIES</span>
              {expandedSection === 17 ? (
                <ChevronUp size={20} className="text-blue-600" />
              ) : (
                <ChevronRight size={20} className="text-gray-400" />
              )}
            </button>
            {expandedSection === 17 && (
              <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 text-gray-700">
                <p className="mb-4">
                  In case of any grievances, complaints, or queries kindly reach out to us:
                </p>
                <div className="bg-white p-4 rounded border border-gray-300 flex items-center gap-3">
                  <Mail size={20} className="text-blue-600 flex-shrink-0" />
                  <a href="mailto:contact@myworx.in" className="text-blue-600 hover:text-blue-800 font-medium">
                    contact@myworx.in
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Last Updated */}
        <div className="mt-12 p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded-r">
          <p className="text-sm text-gray-700">
            <span className="font-semibold">Last Updated:</span> December 2024
          </p>
        </div>
      </div>

      {/* Footer Section with Button */}
      <footer className="bg-gradient-to-r from-slate-800 to-slate-900 text-white mt-16">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-bold mb-4">About Myworx</h3>
              <p className="text-gray-300 text-sm">
                We are committed to providing professional workspace solutions with a strong emphasis on privacy and security.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="/" className="hover:text-blue-400 transition">Home</a></li>
                <li><a href="/locations" className="hover:text-blue-400 transition">Locations</a></li>
                <li><a href="/contact" className="hover:text-blue-400 transition">Contact</a></li>
                <li><a href="/privacy" className="hover:text-blue-400 transition">Privacy Policy</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Contact Us</h3>
              <p className="text-gray-300 text-sm">
                Email: <a href="mailto:contact@myworx.in" className="text-blue-400 hover:text-blue-300">contact@myworx.in</a>
              </p>
              <p className="text-gray-300 text-sm mt-2">
                Myworx Zone Pvt Ltd
              </p>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-gray-400 text-sm text-center md:text-left">
                © 2024 Myworx Zone Pvt Ltd. All rights reserved.
              </p>
              <button
                onClick={handleDownload}
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition font-medium"
              >
                <FileDown size={18} />
                Download Privacy Policy
              </button>
            </div>
            {downloadMessage && (
              <div className="mt-4 p-3 bg-green-500 text-white rounded-lg text-center text-sm">
                {downloadMessage}
              </div>
            )}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PrivacyPage;

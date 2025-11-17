
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Mail, Phone, MapPin, User, MessageCircle, Send,
  Linkedin, Twitter, Facebook,
  Globe, Clock, Award, Briefcase, GraduationCap, Building2,
  CheckCircle2, ArrowRight, Sparkles, Target, Users, DownloadCloud
} from 'lucide-react';
import ContactForm from '@/components/ContactForm';

const Contact = () => {
  const references = [
    {
      name: "Mr. Garry James",
      title: "Head of Secondary",
      organization: "Yew Chung International School, Chongqing China",
      email: "garry.james@ycis.com",
      icon: <GraduationCap className="h-5 w-5" />
    },
    {
      name: "Ms. Prachi Gupta",
      title: "Deputy Head of Secondary",
      organization: "Yew Chung International School Chongqing, China",
      email: "prachi.gupta@ycis.com",
      phone: "+86 136 7129 8529",
      icon: <Users className="h-5 w-5" />
    },
    {
      name: "Mr. Richard Cogley",
      title: "Head of School",
      organization: "Sandford International School, Addis Ababa, Ethiopia",
      email: "richard.cogley@sandfordschool.org",
      phone: "+251 944 074 144",
      icon: <Building2 className="h-5 w-5" />
    },
    {
      name: "Mr. Ted Asfaw",
      title: "Head of Secondary",
      organization: "British International School Addis Ababa, Ethiopia",
      email: "bisheadups@gmail.com",
      phone: "+251 962 598 500",
      icon: <Award className="h-5 w-5" />
    },
    {
      name: "Mrs. Rose Kiema",
      title: "Lecturer",
      organization: "Technical University of Kenya, Nairobi, Kenya",
      email: "rosekiema@yahoo.com",
      phone: "+254 722 357 010",
      icon: <GraduationCap className="h-5 w-5" />
    }
  ];

  const socialLinks = [
    { name: 'LinkedIn', icon: <Linkedin className="h-6 w-6" />, url: '#', color: '#0077B5', bgColor: '#E7F3F8' },
    { name: 'Twitter', icon: <Twitter className="h-6 w-6" />, url: '#', color: '#1DA1F2', bgColor: '#E8F5FD' },
    { name: 'Facebook', icon: <Facebook className="h-6 w-6" />, url: '#', color: '#4267B2', bgColor: '#E9F0FB' },
  ];

  const quickStats = [
    { icon: <Globe className="h-8 w-8" />, label: 'Countries', value: '3+', color: '#A37B5C' },
    { icon: <Users className="h-8 w-8" />, label: 'Networks', value: '1000+', color: '#5E4A35' },
    { icon: <Award className="h-8 w-8" />, label: 'Experience', value: '10+ Yrs', color: '#A37B5C' },
    { icon: <Clock className="h-8 w-8" />, label: 'Response', value: '24h', color: '#5E4A35' },
  ];

  const contactMethods = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Call Me",
      description: "Available Mon-Fri, 9AM-5PM",
      action: "Call Now",
      color: '#A37B5C',
      bgColor: '#f5f1ed',
      onClick: () => window.open('tel:+8613038303477', '_blank')
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email Me",
      description: "Quick response guaranteed",
      action: "Send Email",
      color: '#5E4A35',
      bgColor: '#f5f1ed',
      onClick: () => window.open('mailto:mautiaeliud@gmail.com', '_blank')
    },
    {
      icon: <MessageCircle className="h-6 w-6" />,
      title: "Live Chat",
      description: "Instant messaging available",
      action: "Start Chat",
      color: '#A37B5C',
      bgColor: '#f5f1ed',
      onClick: () => window.open('https://wa.me/254720059892', '_blank')
    },
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#d1ac92' }}>
      {/* Hero Section with decorative elements */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 sm:top-20 left-10 sm:left-20 w-24 h-24 sm:w-40 sm:h-40 rounded-full" style={{ backgroundColor: '#5E4A35' }}></div>
          <div className="absolute bottom-10 sm:bottom-20 right-10 sm:right-20 w-32 h-32 sm:w-48 sm:h-48 rounded-full" style={{ backgroundColor: '#A37B5C' }}></div>
          <div className="absolute top-1/3 right-1/4 w-20 h-20 sm:w-32 sm:h-32 rounded-full" style={{ backgroundColor: '#5E4A35' }}></div>
        </div>

        <div className="container mx-auto px-2 xs:px-3 sm:px-4 md:px-6 lg:px-8 py-6 xs:py-8 sm:py-12 md:py-16 relative z-10">
          <div className="max-w-6xl mx-auto">

            {/* Header with Icon */}
            <div className="text-center mb-6 xs:mb-8 sm:mb-12 px-2 xs:px-4">
              <div className="inline-flex items-center justify-center w-12 h-12 xs:w-16 xs:h-16 sm:w-20 sm:h-20 rounded-full mb-3 xs:mb-4 sm:mb-6 shadow-lg bg-white">
                <Sparkles className="h-6 w-6 xs:h-8 xs:w-8 sm:h-10 sm:w-10" style={{ color: '#A37B5C' }} />
              </div>
              <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold mb-2 xs:mb-3 sm:mb-4 flex flex-col sm:flex-row items-center justify-center gap-1 xs:gap-2 sm:gap-3" style={{ color: '#5E4A35' }}>
                <Mail className="h-6 w-6 xs:h-8 xs:w-8 sm:h-10 sm:w-10" style={{ color: '#A37B5C' }} />
                <span>Contact Information</span>
              </h1>
              <p className="text-sm xs:text-base sm:text-lg md:text-xl mb-4 xs:mb-6 sm:mb-8 px-2 xs:px-4" style={{ color: '#5E4A35' }}>Let's connect and create something amazing together</p>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 xs:gap-3 sm:gap-4 max-w-4xl mx-auto mb-4 xs:mb-6 sm:mb-8">
                {quickStats.map((stat, index) => (
                  <Card key={index} className="bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-2">
                    <CardContent className="p-3 xs:p-4 sm:p-6 text-center">
                      <div className="flex justify-center mb-2" style={{ color: stat.color }}>
                        {stat.icon}
                      </div>
                      <div className="text-lg xs:text-xl sm:text-2xl font-bold mb-1" style={{ color: '#5E4A35' }}>{stat.value}</div>
                      <div className="text-xs sm:text-sm" style={{ color: '#A37B5C' }}>{stat.label}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Contact Methods Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 xs:gap-4 sm:gap-6 mb-6 xs:mb-8 sm:mb-12">
              {contactMethods.map((method, index) => (
                <Card key={index} className="bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-2 cursor-pointer group">
                  <CardContent className="p-3 xs:p-4 sm:p-6 text-center">
                    <div
                      className="inline-flex items-center justify-center w-10 h-10 xs:w-12 xs:h-12 sm:w-16 sm:h-16 rounded-full mb-2 xs:mb-3 sm:mb-4 group-hover:scale-110 transition-transform"
                      style={{ backgroundColor: method.bgColor }}
                    >
                      <div style={{ color: method.color }}>
                        {method.icon}
                      </div>
                    </div>
                    <h3 className="text-base xs:text-lg sm:text-xl font-semibold mb-1 xs:mb-2" style={{ color: '#5E4A35' }}>{method.title}</h3>
                    <p className="text-xs sm:text-sm mb-2 xs:mb-3 sm:mb-4" style={{ color: '#A37B5C' }}>{method.description}</p>
                    <Button
                      variant="outline"
                      className="group-hover:bg-opacity-100 transition-all text-xs xs:text-sm sm:text-base py-2 xs:py-2 sm:py-2"
                      style={{ borderColor: method.color, color: method.color }}
                      onClick={method.onClick}
                    >
                      {method.action}
                      <ArrowRight className="ml-1 xs:ml-2 h-3 w-3 xs:h-3 xs:w-3 sm:h-4 sm:w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Main Content Grid */}
            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              
              {/* Contact Details Card - Enhanced */}
              <Card className="h-fit bg-white hover:shadow-2xl transition-all duration-300">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center text-2xl" style={{ color: '#5E4A35' }}>
                    <div className="p-2 rounded-lg mr-3" style={{ backgroundColor: '#f5f1ed' }}>
                      <Target className="h-6 w-6" style={{ color: '#A37B5C' }} />
                    </div>
                    Direct Contact
                  </CardTitle>
                  <p className="text-sm mt-2" style={{ color: '#A37B5C' }}>
                    Feel free to reach out through any of these channels
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    
                    {/* Phone 1 */}
                    <div className="flex items-center p-4 rounded-xl hover:shadow-md transition-all cursor-pointer group border-l-4" 
                         style={{ backgroundColor: '#f5f1ed', borderLeftColor: '#A37B5C' }}>
                      <div className="p-3 rounded-full mr-4 group-hover:scale-110 transition-transform" style={{ backgroundColor: 'white' }}>
                        <Phone className="h-5 w-5" style={{ color: '#A37B5C' }} />
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-sm mb-1" style={{ color: '#5E4A35' }}>
                          <CheckCircle2 className="inline h-4 w-4 mr-1" style={{ color: '#A37B5C' }} />
                          Primary Phone
                        </p>
                        <a 
                          href="tel:+8613038303477" 
                          className="text-lg hover:underline cursor-pointer transition-colors font-medium"
                          style={{ color: '#A37B5C' }}
                        >
                          +86 130 3830 3477
                        </a>
                      </div>
                    </div>
                    
                    {/* Phone 2 */}
                    <div className="flex items-center p-4 rounded-xl hover:shadow-md transition-all cursor-pointer group border-l-4" 
                         style={{ backgroundColor: '#f5f1ed', borderLeftColor: '#5E4A35' }}>
                      <div className="p-3 rounded-full mr-4 group-hover:scale-110 transition-transform" style={{ backgroundColor: 'white' }}>
                        <Phone className="h-5 w-5" style={{ color: '#5E4A35' }} />
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-sm mb-1" style={{ color: '#5E4A35' }}>
                          <CheckCircle2 className="inline h-4 w-4 mr-1" style={{ color: '#5E4A35' }} />
                          Secondary Phone
                        </p>
                        <a 
                          href="tel:+254720059892" 
                          className="text-lg hover:underline cursor-pointer transition-colors font-medium"
                          style={{ color: '#A37B5C' }}
                        >
                          +254 720 059 892
                        </a>
                      </div>
                    </div>
                    
                    {/* Email */}
                    <div className="flex items-center p-4 rounded-xl hover:shadow-md transition-all cursor-pointer group border-l-4" 
                         style={{ backgroundColor: '#f5f1ed', borderLeftColor: '#A37B5C' }}>
                      <div className="p-3 rounded-full mr-4 group-hover:scale-110 transition-transform" style={{ backgroundColor: 'white' }}>
                        <Mail className="h-5 w-5" style={{ color: '#A37B5C' }} />
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-sm mb-1" style={{ color: '#5E4A35' }}>
                          <CheckCircle2 className="inline h-4 w-4 mr-1" style={{ color: '#A37B5C' }} />
                          Email Address
                        </p>
                        <a 
                          href="mailto:mautiaeliud@gmail.com" 
                          className="text-lg hover:underline cursor-pointer transition-colors font-medium break-all"
                          style={{ color: '#A37B5C' }}
                        >
                          mautiaeliud@gmail.com
                        </a>
                      </div>
                    </div>

                    {/* Location */}
                    <div className="flex items-center p-3 sm:p-4 rounded-xl hover:shadow-md transition-all cursor-pointer group border-l-4"
                         style={{ backgroundColor: '#f5f1ed', borderLeftColor: '#5E4A35' }}>
                      <div className="p-2 sm:p-3 rounded-full mr-3 sm:mr-4 group-hover:scale-110 transition-transform" style={{ backgroundColor: 'white' }}>
                        <MapPin className="h-4 w-4 sm:h-5 sm:w-5" style={{ color: '#5E4A35' }} />
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-xs sm:text-sm mb-1" style={{ color: '#5E4A35' }}>
                          <CheckCircle2 className="inline h-3 w-3 sm:h-4 sm:w-4 mr-1" style={{ color: '#5E4A35' }} />
                          Current Location
                        </p>
                        <p className="text-base sm:text-lg font-medium text-gray-700">401122, Chongqing, China</p>
                        <p className="text-xs mt-1" style={{ color: '#A37B5C' }}>
                          <Globe className="inline h-3 w-3 mr-1" />
                          Open to global opportunities
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Social Media Section - Enhanced */}
                  <div className="pt-4 sm:pt-6 border-t-2" style={{ borderColor: '#A37B5C' }}>
                    <div className="flex items-center mb-3 sm:mb-4">
                      <div className="p-2 rounded-lg mr-3" style={{ backgroundColor: '#f5f1ed' }}>
                        <Sparkles className="h-4 w-4 sm:h-5 sm:w-5" style={{ color: '#A37B5C' }} />
                      </div>
                      <h3 className="text-lg sm:text-xl font-semibold" style={{ color: '#5E4A35' }}>
                        Connect on Social Media
                      </h3>
                    </div>
                    <div className="grid grid-cols-3 gap-2 sm:gap-3">
                      {socialLinks.map((social, index) => (
                        <a
                          key={index}
                          href={social.url}
                          className="flex flex-col items-center p-3 sm:p-4 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white border-2 group"
                          style={{ borderColor: '#f5f1ed' }}
                        >
                          <div
                            className="p-2 sm:p-3 rounded-full mb-2 group-hover:scale-110 transition-transform"
                            style={{ backgroundColor: social.bgColor }}
                          >
                            <div style={{ color: social.color }}>
                              {social.icon}
                            </div>
                          </div>
                          <span className="text-xs font-medium" style={{ color: '#5E4A35' }}>
                            {social.name}
                          </span>
                        </a>
                      ))}
                    </div>
                  </div>

                  {/* Availability Badge */}
                  <div className="flex items-center justify-center p-3 sm:p-4 rounded-xl" style={{ backgroundColor: '#e8f5e9' }}>
                    <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 mr-2" style={{ color: '#4caf50' }} />
                    <span className="font-medium text-sm sm:text-base" style={{ color: '#2e7d32' }}>
                      Currently Available for Opportunities
                    </span>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Form */}
              <ContactForm />
            </div>

            {/* Professional Background Section */}
            <Card className="mb-6 sm:mb-8 bg-white hover:shadow-2xl transition-all duration-300">
              <CardContent className="p-6 sm:p-8 text-center">
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4" style={{ color: '#5E4A35' }}>
                  Interested in My Professional Background?
                </h3>
                <p className="text-base sm:text-lg mb-4 sm:mb-6" style={{ color: '#A37B5C' }}>
                  Explore my complete work history, achievements, and educational philosophy. Download my comprehensive CV or connect with my professional references.
                </p>
                <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4">
                  <a
                    href="/MAUTIA%20ELIUD%20RESUME.pdf"
                    download
                    className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-green-200 text-green-800 rounded-lg hover:bg-green-300 transition-colors text-sm sm:text-base"
                  >
                    <DownloadCloud className="h-4 w-4 sm:h-5 sm:w-5" />
                    Download Full CV
                  </a>
                  <a
                    href="#resources"
                    className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-green-200 text-green-800 rounded-lg hover:bg-green-300 transition-colors text-sm sm:text-base"
                  >
                    <Users className="h-4 w-4 sm:h-5 sm:w-5" />
                    View Resources
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Resources Section - Enhanced */}
            <Card id="resources" className="mb-8 bg-white hover:shadow-2xl transition-all duration-300">
              <CardHeader className="border-b" style={{ borderColor: '#f5f1ed' }}>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center text-2xl" style={{ color: '#5E4A35' }}>
                    <div className="p-2 rounded-lg mr-3" style={{ backgroundColor: '#f5f1ed' }}>
                      <Award className="h-6 w-6" style={{ color: '#A37B5C' }} />
                    </div>
                    Professional References
                  </CardTitle>
                  <span className="px-4 py-2 rounded-full text-sm font-medium" style={{ backgroundColor: '#f5f1ed', color: '#5E4A35' }}>
                    {references.length} References
                  </span>
                </div>
                <p className="text-sm mt-2 ml-14" style={{ color: '#A37B5C' }}>
                  Trusted professionals who can vouch for my experience and expertise
                </p>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {references.map((ref, index) => (
                    <div 
                      key={index} 
                      className="p-5 border-2 rounded-xl hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-white to-gray-50 cursor-pointer group relative overflow-hidden"
                      style={{ borderColor: '#A37B5C' }}
                    >
                      {/* Decorative corner */}
                      <div className="absolute top-0 right-0 w-20 h-20 opacity-10 group-hover:opacity-20 transition-opacity" 
                           style={{ background: `linear-gradient(135deg, transparent 50%, #A37B5C 50%)` }}>
                      </div>
                      
                      {/* Icon Badge */}
                      <div className="inline-flex p-3 rounded-full mb-3 group-hover:scale-110 transition-transform" 
                           style={{ backgroundColor: '#f5f1ed' }}>
                        <div style={{ color: '#A37B5C' }}>
                          {ref.icon}
                        </div>
                      </div>
                      
                      <h3 className="font-bold text-lg mb-1 flex items-center" style={{ color: '#5E4A35' }}>
                        <User className="mr-2 h-4 w-4" style={{ color: '#A37B5C' }} />
                        {ref.name}
                      </h3>
                      
                      <div className="flex items-start mb-2">
                        <Briefcase className="mr-2 h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#A37B5C' }} />
                        <p className="text-sm font-medium" style={{ color: '#A37B5C' }}>{ref.title}</p>
                      </div>
                      
                      <div className="flex items-start mb-4">
                        <Building2 className="mr-2 h-4 w-4 mt-0.5 flex-shrink-0 text-gray-400" />
                        <p className="text-xs text-gray-600 leading-relaxed">{ref.organization}</p>
                      </div>
                      
                      <div className="space-y-2 pt-3 border-t" style={{ borderColor: '#f5f1ed' }}>
                        <div className="flex items-center p-2 rounded-lg hover:bg-white transition-colors">
                          <Mail className="mr-2 h-4 w-4 flex-shrink-0" style={{ color: '#A37B5C' }} />
                          <a 
                            href={`mailto:${ref.email}`} 
                            className="hover:underline cursor-pointer text-xs transition-colors truncate"
                            style={{ color: '#5E4A35' }}
                          >
                            {ref.email}
                          </a>
                        </div>
                        {ref.phone && (
                          <div className="flex items-center p-2 rounded-lg hover:bg-white transition-colors">
                            <Phone className="mr-2 h-4 w-4 flex-shrink-0" style={{ color: '#A37B5C' }} />
                            <a 
                              href={`tel:${ref.phone.replace(/\s+/g, '')}`} 
                              className="hover:underline cursor-pointer text-sm transition-colors font-medium"
                              style={{ color: '#5E4A35' }}
                            >
                              {ref.phone}
                            </a>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* CTA Section - Enhanced */}
            <Card className="bg-gradient-to-br from-white to-gray-50 hover:shadow-2xl transition-all duration-300 border-2" style={{ borderColor: '#A37B5C' }}>
              <CardContent className="p-12 text-center relative overflow-hidden">
                {/* Decorative background elements */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute top-0 left-0 w-40 h-40 rounded-full" style={{ backgroundColor: '#5E4A35' }}></div>
                  <div className="absolute bottom-0 right-0 w-40 h-40 rounded-full" style={{ backgroundColor: '#A37B5C' }}></div>
                </div>
                
                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-6" style={{ backgroundColor: '#f5f1ed' }}>
                    <MessageCircle className="h-8 w-8" style={{ color: '#A37B5C' }} />
                  </div>
                  
                  <h3 className="text-3xl font-bold mb-4 flex items-center justify-center gap-3" style={{ color: '#5E4A35' }}>
                    <Sparkles className="h-8 w-8" style={{ color: '#A37B5C' }} />
                    Ready to Start a Conversation?
                  </h3>
                  
                  <p className="text-lg mb-8 max-w-2xl mx-auto" style={{ color: '#A37B5C' }}>
                    Whether you're looking for collaboration, consultation, or just want to connect, 
                    I'd love to hear from you and explore how we can work together.
                  </p>
                  
                  <div className="flex flex-wrap justify-center gap-4">
                    <Button 
                      size="lg"
                      className="text-white hover:opacity-90 transition-all hover:scale-105 shadow-lg flex items-center gap-2 px-8 py-6 text-lg"
                      style={{ backgroundColor: '#A37B5C' }}
                    >
                      <MessageCircle className="h-5 w-5" />
                      Start a Conversation
                      <ArrowRight className="h-5 w-5" />
                    </Button>
                    <Button 
                      size="lg"
                      variant="outline" 
                      className="flex items-center gap-2 border-2 hover:bg-opacity-10 transition-all hover:scale-105 px-8 py-6 text-lg"
                      style={{ borderColor: '#5E4A35', color: '#5E4A35' }}
                    >
                      <Send className="h-5 w-5" />
                      Schedule a Meeting
                      <Clock className="h-5 w-5" />
                    </Button>
                  </div>

                  {/* Trust indicators */}
                  <div className="flex flex-wrap justify-center gap-8 mt-10 pt-8 border-t" style={{ borderColor: '#f5f1ed' }}>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5" style={{ color: '#4caf50' }} />
                      <span className="text-sm font-medium" style={{ color: '#5E4A35' }}>Quick Response</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5" style={{ color: '#4caf50' }} />
                      <span className="text-sm font-medium" style={{ color: '#5E4A35' }}>Professional Service</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5" style={{ color: '#4caf50' }} />
                      <span className="text-sm font-medium" style={{ color: '#5E4A35' }}>Global Reach</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

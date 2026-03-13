import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, Linkedin, User } from 'lucide-react';

const Contact = () => {
  const references = [
    {
      name: 'Mr. Garry James',
      title: 'Head of Secondary',
      organization: 'Yew Chung International School, Chongqing China',
      email: 'garry.james@ycis.com'
    },
    {
      name: 'Ms. Prachi Gupta',
      title: 'Deputy Head of Secondary',
      organization: 'Yew Chung International School Chongqing, China',
      email: 'prachi.gupta@ycis.com',
      phone: '+86 136 7129 8529'
    },
    {
      name: 'Mr. Richard Cogley',
      title: 'Head of School',
      organization: 'Sandford International School, Addis Ababa, Ethiopia',
      email: 'richard.cogley@sandfordschool.org',
      phone: '+251 944 074 144'
    },
    {
      name: 'Mr. Ted Asfaw',
      title: 'Head of Secondary',
      organization: 'British International School Addis Ababa, Ethiopia',
      email: 'bisheadups@gmail.com',
      phone: '+251 962 598 500'
    },
    {
      name: 'Mrs. Rose Kiema',
      title: 'Lecturer',
      organization: 'Technical University of Kenya, Nairobi, Kenya',
      email: 'rosekiema@yahoo.com',
      phone: '+254 722 357 010'
    }
  ];

  return (
    <section id="contact" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Ready to collaborate on educational excellence? Let's connect and discuss opportunities.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Contact Information</h3>
            <Card className="p-6 mb-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Phone className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-gray-900 font-medium">Phone Numbers</p>
                    <p className="text-gray-600">+86 130 3830 3477</p>
                    <p className="text-gray-600">+254 720 059 892</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Mail className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-gray-900 font-medium">Email</p>
                    <p className="text-gray-600">mautiaeliud@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <MapPin className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-gray-900 font-medium">Location</p>
                    <p className="text-gray-600">401122, Chongqing, China</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Linkedin className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-gray-900 font-medium">LinkedIn</p>
                    <a 
                      href="https://www.linkedin.com/in/eliudmautia-5245274b" 
                      className="text-blue-600 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Profile
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex gap-4">
                  <Button className="flex-1 bg-blue-600 hover:bg-blue-700">
                    <Mail className="h-4 w-4 mr-2" />
                    Send Email
                  </Button>
                  <Button variant="outline" className="flex-1 border-blue-600 text-blue-600 hover:bg-blue-50">
                    <Linkedin className="h-4 w-4 mr-2" />
                    LinkedIn
                  </Button>
                </div>
              </div>
            </Card>
          </div>
+          {/* Conversation Section */}
+          <div className="bg-gray-50 p-8 rounded-lg shadow-md">
+            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Ready to start a conversation?</h3>
+            <p className="text-gray-700 mb-6">
+              Whether you're looking for collaboration, consultation, or just want to connect, I'd love to hear from you.
+            </p>
+            <div className="flex flex-wrap gap-4">
+              <a
+                href="https://wa.me/254720059892"
+                target="_blank"
+                rel="noopener noreferrer"
+                className="inline-block bg-green-500 text-white px-6 py-3 rounded hover:bg-green-600 transition-colors"
+              >
+                Start a Conversation
+              </a>
+              <a
+                href="mailto:mautiaeliud@gmail.com"
+                className="inline-block bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition-colors"
+              >
+                Schedule a Meeting
+              </a>
+            </div>
+          </div>
        </div>
      </div>
    </section>
  );
};
         {/* Conversation Section */}
+          <div className="bg-gray-50 p-8 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">Ready to start a conversation?</h3>
+            <p className="text-gray-700 mb-6">
+              Whether you're looking for collaboration, consultation, or just want to connect, I'd love to hear from you.
+            </p>
+            <div className="flex flex-wrap gap-4">
+              <a
+                href="https://wa.me/254720059892"
+                target="_blank"
+                rel="noopener noreferrer"
+                className="inline-block bg-green-500 text-white px-6 py-3 rounded hover:bg-green-600 transition-colors"
+              >
+                Start a Conversation
+              </a>
+              <a
+                href="mailto:mautiaeliud@gmail.com"
+                className="inline-block bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition-colors"
+              >
+                Schedule a Meeting
+              </a>
+            </div>
+          </div>
        </div>
      </div>
    </section>
  );
};

          {/* References */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Professional References</h3>
            <div className="space-y-4">
              {references.map((ref, index) => (
                <Card key={index} className="p-4 hover:shadow-md transition-shadow duration-200">
                  <div className="flex items-start space-x-3">
                    <div className="p-2 bg-gray-100 rounded-lg">
                      <User className="h-4 w-4 text-gray-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900">{ref.name}</h4>
                      <p className="text-blue-600 text-sm font-medium">{ref.title}</p>
                      <p className="text-gray-600 text-sm mb-2">{ref.organization}</p>
                      <div className="space-y-1">
                        <p className="text-gray-700 text-sm">
                          <Mail className="h-3 w-3 inline mr-1" />
                          {ref.email}
                        </p>
                        {ref.phone && (
                          <p className="text-gray-700 text-sm">
                            <Phone className="h-3 w-3 inline mr-1" />
                            {ref.phone}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
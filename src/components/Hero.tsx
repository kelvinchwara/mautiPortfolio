import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const Hero = () => {
  return (
    <section id="about" className="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Eliud Mautia
              </h1>
              <p className="text-xl text-blue-600 font-semibold mt-2">
                IGCSE | IBDP | A-LEVEL MATH TEACHER | IBDP MAA EXAMINER
              </p>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed">
              I am a highly motivated and innovative professional with a flexible mindset, 
              adept at embracing new ideas and changes, and driven by a commitment to 
              achieving results through teamwork. I excel in leadership, organization, and 
              interpersonal communication, bringing extensive experience in Secondary 
              Mathematics education across IGCSE, A Level, IB Diploma, and 8.4.4. systems.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button className="bg-blue-600 hover:bg-blue-700">
                <Mail className="h-4 w-4 mr-2" />
                Contact Me
              </Button>
              <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                <Linkedin className="h-4 w-4 mr-2" />
                LinkedIn Profile
              </Button>
            </div>
          </div>

          <div className="space-y-6">
            <Card className="p-6 bg-white/80 backdrop-blur-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Information</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-700">
                  <Phone className="h-5 w-5 text-blue-600" />
                  <div>
                    <p>+86 130 3830 3477</p>
                    <p>+254 720 059 892</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 text-gray-700">
                  <Mail className="h-5 w-5 text-blue-600" />
                  <p>mautiaeliud@gmail.com</p>
                </div>
                <div className="flex items-center space-x-3 text-gray-700">
                  <MapPin className="h-5 w-5 text-blue-600" />
                  <p>401122, Chongqing, China</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-white/80 backdrop-blur-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Languages</h3>
              <div className="flex flex-wrap gap-2">
                {['English', 'Kiswahili', 'Mandarin'].map((lang) => (
                  <span
                    key={lang}
                    className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
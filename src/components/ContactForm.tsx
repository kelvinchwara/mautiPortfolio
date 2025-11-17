import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { MessageSquare, Send } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const whatsappMessage = `Hello Eliud,\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nSubject: ${formData.subject}\n\nMessage:\n${formData.message}`;
    
    const whatsappUrl = `https://wa.me/254720059892?text=${encodeURIComponent(whatsappMessage)}`;
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <Card className="w-full bg-white hover:shadow-lg transition-shadow duration-300">
      <CardHeader>
        <CardTitle className="flex items-center" style={{ color: '#5E4A35' }}>
          <MessageSquare className="mr-3 h-6 w-6" style={{ color: '#A37B5C' }} />
          Send Message via WhatsApp
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="name" style={{ color: '#5E4A35' }}>Full Name *</Label>
              <Input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Your full name"
                className="border-2 focus:border-opacity-70"
                style={{ borderColor: '#A37B5C' }}
              />
            </div>
            <div>
              <Label htmlFor="email" style={{ color: '#5E4A35' }}>Email *</Label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
                className="border-2 focus:border-opacity-70"
                style={{ borderColor: '#A37B5C' }}
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="phone" style={{ color: '#5E4A35' }}>Phone Number</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+1234567890"
                className="border-2 focus:border-opacity-70"
                style={{ borderColor: '#A37B5C' }}
              />
            </div>
            <div>
              <Label htmlFor="subject" style={{ color: '#5E4A35' }}>Subject *</Label>
              <Input
                id="subject"
                name="subject"
                type="text"
                required
                value={formData.subject}
                onChange={handleChange}
                placeholder="Message subject"
                className="border-2 focus:border-opacity-70"
                style={{ borderColor: '#A37B5C' }}
              />
            </div>
          </div>
          
          <div>
            <Label htmlFor="message" style={{ color: '#5E4A35' }}>Message *</Label>
            <Textarea
              id="message"
              name="message"
              required
              rows={5}
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message here..."
              className="border-2 focus:border-opacity-70"
              style={{ borderColor: '#A37B5C' }}
            />
          </div>
          
          <Button 
            type="submit" 
            className="w-full text-white hover:opacity-90 transition-opacity"
            style={{ backgroundColor: '#A37B5C' }}
          >
            <Send className="mr-2 h-4 w-4" />
            Send via WhatsApp
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default ContactForm;
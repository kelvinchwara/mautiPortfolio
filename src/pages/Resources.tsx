import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  MessageCircle, 
  BarChart3,
  Lightbulb, 
  Users, 
  Brain, 
  Globe, 
  Zap, 
  BookOpen, 
  Target, 
  Puzzle, 
  PenTool, 
  Shield,
  Search,
  Filter,
  Download,
  Clock,
  Star,
  Award,
  TrendingUp,
  FileText,
  Video,
  Link as LinkIcon,
  Heart
} from 'lucide-react';


// --- COLOR PALETTE ---
const COLORS = {
  BRONZE_LIGHT: '#A37B5C',
  BRONZE_DARK: '#5E4A35',
  BEIGE: '#d1ac92',
  FOREST_GREEN: '#6AA84F',
  CREAM: '#F5F1E8',
  GOLD: '#D4AF37',
};

// --- DATA STRUCTURES ---
const certificateData = [
  {
    title: "Child Protection Refresher 2025",
    issuer: "Tes Safeguarding",
    date: "September 2, 2025",
    icon: "Shield",
    accent: COLORS.FOREST_GREEN,
    category: "Safeguarding",
    link: "/mautiPortfolio/public/media/img/Mautia_Eliud_Child_Protection_Refresher_2025.pdf",
    description: "Comprehensive refresher on child protection policies and procedures",
  },
  {
    title: "Differentiation in Practice",
    issuer: "The School Training Company",
    date: "October 7, 2025",
    icon: "BookOpen",
    accent: COLORS.BRONZE_LIGHT,
    category: "Teaching Methods",
    link: "/public/media/img/Eliud_Mautia_Differentiation_in_Practice.pdf", 
    description: "Practical strategies for differentiated instruction in the classroom",
  },
  {
    title: "Supporting Children & Young People on the Autistic Spectrum",
    issuer: "The School Training Company",
    date: "October 7, 2025",
    icon: "Brain",
    accent: COLORS.BEIGE,
    category: "Special Education",
    link: "/media/img/Eliud_Mautia_Autistic_Spectrum_Support.pdf",
    description: "Best practices for supporting students on the autism spectrum",
  },
  {
    title: "Child-on-Child Abuse for International Schools",
    issuer: "Tes Safeguarding",
    date: "October 3, 2023",
    icon: "Users",
    accent: COLORS.BRONZE_DARK,
    category: "Safeguarding",
    link: "img/Mautia_Eliud_Child_on_Child_Abuse.pdf",
    description: "Understanding and preventing peer-on-peer abuse in international schools",
  },
  {
    title: "Staff Wellbeing for International Schools",
    issuer: "Tes Duty of Care",
    date: "December 18, 2023",
    icon: "Heart",
    accent: COLORS.GOLD,
    category: "Professional Development",
    link: "/mautiPortfolio/public/media/img/Mautia_Eliud_Staff_Wellbeing.pdf",
    description: "Promoting mental health and wellbeing for international school staff",
  },
];

const videoTutorials = [
  { title: "Introduction to Classroom Management", duration: "12:45", category: "Management" },
  { title: "Effective Lesson Planning Techniques", duration: "8:30", category: "Planning" },
  { title: "Using Digital Tools for Assessment", duration: "15:00", category: "Technology" },
  { title: "Fostering Student Creativity", duration: "10:50", category: "Teaching Methods" },
  { title: "Differentiated Instruction Strategies", duration: "14:20", category: "Teaching Methods" },
  { title: "Assessment for Learning", duration: "11:30", category: "Assessment" },
];

const skillEndorsements = [
  { skill: "Differentiated Instruction", level: "Expert", icon: "Lightbulb", color: COLORS.FOREST_GREEN },
  { skill: "Safeguarding & Ethics", level: "Certified", icon: "Shield", color: COLORS.BRONZE_DARK },
  { skill: "Curriculum Development", level: "Proficient", icon: "BookOpen", color: COLORS.BRONZE_LIGHT },
  { skill: "Behavior Management", level: "Expert", icon: "Users", color: COLORS.GOLD },
  { skill: "SEN/Autism Support", level: "Certified", icon: "Brain", color: COLORS.BEIGE },
];

const categories = ["All", "Safeguarding", "Teaching Methods", "Special Education", "Professional Development", "Management", "Planning", "Technology", "Assessment"];

const statsData = [
  { icon: Award, value: "5+", label: "Certifications" },
  { icon: BookOpen, value: "20+", label: "Resources" },
  { icon: Video, value: "6", label: "Tutorials" },
  { icon: TrendingUp, value: "98%", label: "Completion Rate" },
];

// --- ICON COMPONENTS ---
const IconComponent = ({ name, color, size = 24, className = "", style = {} }) => {
  const iconProps = { size, className, style: { ...style, color } };

  switch (name) {
    case 'Shield': return <Shield {...iconProps} />;
    case 'BookOpen': return <BookOpen {...iconProps} />;
    case 'Brain': return <Brain {...iconProps} />;
    case 'Users': return <Users {...iconProps} />;
    case 'Heart': return <Heart {...iconProps} />;
    case 'Video': return <MessageCircle {...iconProps} />;
    case 'LinkIcon': return <Globe {...iconProps} />;
    case 'Lightbulb': return <Lightbulb {...iconProps} />;
    case 'BarChart3': return <BarChart3 {...iconProps} />;
    case 'Target': return <Target {...iconProps} />;
    case 'Puzzle': return <Puzzle {...iconProps} />;
    case 'PenTool': return <PenTool {...iconProps} />;
    default: return <div {...iconProps}>?</div>;
  }
};

const HeartIcon = ({ size = 24, className = "", style = {} }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    className={className}
    style={style}
  >
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
  </svg>
);

const createDownloadFilename = (title) => {
  return title.replace(/[^a-zA-Z0-9\s]/g, '').trim().replace(/\s+/g, '_') + '.pdf';
};

// --- MAIN COMPONENT ---
const Resources = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("certificates");

  const filteredCertificates = certificateData.filter(cert => {
    const matchesCategory = selectedCategory === "All" || cert.category === selectedCategory;
    const matchesSearch = cert.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         cert.issuer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const filteredVideos = videoTutorials.filter(video => {
    const matchesCategory = selectedCategory === "All" || video.category === selectedCategory;
    const matchesSearch = video.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen font-['Inter']" style={{ backgroundColor: COLORS.CREAM }}>
      {/* HEADER SECTION */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 right-10 w-64 h-64 rounded-full" style={{ backgroundColor: COLORS.GOLD }}></div>
          <div className="absolute bottom-10 left-10 w-48 h-48 rounded-full" style={{ backgroundColor: COLORS.FOREST_GREEN }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 relative z-10">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4" style={{ backgroundColor: `${COLORS.BRONZE_LIGHT}20` }}>
              <Award className="h-5 w-5" style={{ color: COLORS.GOLD }} />
              <span className="text-sm font-medium" style={{ color: COLORS.BRONZE_DARK }}>Professional Development Hub</span>
            </div>
            
            <h1 
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4"
              style={{ color: COLORS.BRONZE_DARK }}
            >
              My Professional Resources
            </h1>
            <p 
              className="text-lg sm:text-xl font-medium max-w-3xl mx-auto"
              style={{ color: COLORS.BRONZE_LIGHT }}
            >
              A curated collection of my achievements, certifications, teaching resources, and professional development materials.
            </p>
            <div className="h-1 w-24 mx-auto mt-6 rounded-full" style={{ backgroundColor: COLORS.GOLD }}></div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12">
            {statsData.map((stat, index) => (
              <div 
                key={index} 
                className="text-center p-4 rounded-xl bg-white shadow-lg border-2 transition-all hover:scale-105"
                style={{ borderColor: COLORS.BEIGE }}
              >
                <div className="flex justify-center mb-2">
                  <div className="p-2 rounded-full" style={{ backgroundColor: `${COLORS.FOREST_GREEN}20` }}>
                    <stat.icon className="h-5 w-5" style={{ color: COLORS.FOREST_GREEN }} />
                  </div>
                </div>
                <p className="text-2xl font-bold mb-1" style={{ color: COLORS.BRONZE_DARK }}>
                  {stat.value}
                </p>
                <p className="text-xs font-medium" style={{ color: COLORS.BRONZE_LIGHT }}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        {/* Search and Filter Section */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-12 border-2" style={{ borderColor: COLORS.BEIGE }}>
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            {/* Search Input */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5" style={{ color: COLORS.BRONZE_LIGHT }} />
              <input
                type="text"
                placeholder="Search resources..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-lg border-2 focus:outline-none focus:border-opacity-100 transition-colors"
                style={{ borderColor: COLORS.BEIGE, backgroundColor: COLORS.CREAM }}
              />
            </div>
            
            {/* Filter Button */}
            <div className="flex items-center gap-2 px-4 py-3 rounded-lg border-2" style={{ borderColor: COLORS.BEIGE, backgroundColor: COLORS.CREAM }}>
              <Filter className="h-5 w-5" style={{ color: COLORS.BRONZE_LIGHT }} />
              <span className="text-sm font-medium" style={{ color: COLORS.BRONZE_DARK }}>Filter by Category</span>
            </div>
          </div>

          {/* Category Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all hover:scale-105 ${
                  selectedCategory === category
                    ? 'text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                style={{
                  backgroundColor: selectedCategory === category ? COLORS.BRONZE_DARK : undefined,
                  border: selectedCategory === category ? 'none' : `2px solid ${COLORS.BEIGE}`
                }}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex gap-2 mb-8 border-b-2 pb-4" style={{ borderColor: COLORS.BEIGE }}>
          <button
            onClick={() => setActiveTab('certificates')}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${
              activeTab === 'certificates'
                ? 'text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
            style={{
              backgroundColor: activeTab === 'certificates' ? COLORS.FOREST_GREEN : undefined,
              border: activeTab !== 'certificates' ? `2px solid ${COLORS.BEIGE}` : 'none'
            }}
          >
            <Award className="h-4 w-4" />
            Certificates
          </button>
          <button
            onClick={() => setActiveTab('videos')}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${
              activeTab === 'videos'
                ? 'text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
            style={{
              backgroundColor: activeTab === 'videos' ? COLORS.BRONZE_LIGHT : undefined,
              border: activeTab !== 'videos' ? `2px solid ${COLORS.BEIGE}` : 'none'
            }}
          >
            <Video className="h-4 w-4" />
            Video Tutorials
          </button>
          <button
            onClick={() => setActiveTab('skills')}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${
              activeTab === 'skills'
                ? 'text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
            style={{
              backgroundColor: activeTab === 'skills' ? COLORS.GOLD : undefined,
              border: activeTab !== 'skills' ? `2px solid ${COLORS.BEIGE}` : 'none'
            }}
          >
            <Star className="h-4 w-4" />
            Skill Endorsements
          </button>
        </div>

        {/* KEY SKILL ENDORSEMENTS */}
        {activeTab === 'skills' && (
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg" style={{ backgroundColor: `${COLORS.GOLD}30` }}>
                <Star className="h-5 w-5" style={{ color: COLORS.GOLD }} />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold" style={{ color: COLORS.BRONZE_DARK }}>
                Key Skill Endorsements
              </h2>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {skillEndorsements.map((skillItem, index) => (
                <div 
                  key={index} 
                  className="p-6 rounded-xl shadow-xl transition duration-300 transform hover:scale-[1.05] bg-white border-2 flex flex-col items-center text-center"
                  style={{ 
                    borderColor: skillItem.color,
                    boxShadow: `0 4px 6px -1px ${COLORS.BRONZE_LIGHT}40, 0 2px 4px -2px ${COLORS.BRONZE_LIGHT}40`,
                  }}
                >
                  <div 
                    className="p-4 mb-4 rounded-full shadow-lg" 
                    style={{ backgroundColor: skillItem.color }}
                  >
                    <IconComponent name={skillItem.icon} color="white" size={28} />
                  </div>
                  <h3 className="text-lg font-bold mb-2" style={{ color: COLORS.BRONZE_DARK }}>
                    {skillItem.skill}
                  </h3>
                  <span 
                    className="text-sm font-semibold py-2 px-4 rounded-full"
                    style={{ backgroundColor: skillItem.color, color: 'white', opacity: 0.9 }}
                  >
                    {skillItem.level}
                  </span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* CERTIFICATES SECTION */}
        {activeTab === 'certificates' && (
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg" style={{ backgroundColor: `${COLORS.FOREST_GREEN}30` }}>
                <Award className="h-5 w-5" style={{ color: COLORS.FOREST_GREEN }} />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold" style={{ color: COLORS.BRONZE_DARK }}>
                Certificates of Completion
              </h2>
              <Badge className="ml-auto" style={{ backgroundColor: `${COLORS.FOREST_GREEN}20`, color: COLORS.FOREST_GREEN }}>
                {filteredCertificates.length} certificates
              </Badge>
            </div>
            
            {filteredCertificates.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredCertificates.map((cert, index) => {
                  const isLinkAvailable = !!cert.link;
                  const statusText = isLinkAvailable ? "Available" : "Coming Soon";
                  const statusColor = isLinkAvailable ? COLORS.FOREST_GREEN : COLORS.BRONZE_LIGHT;

                  return (
                    <div 
                      key={index} 
                      className="p-5 rounded-xl shadow-xl transition duration-300 transform hover:scale-[1.02] flex flex-col bg-white relative border-2"
                      style={{ 
                        borderColor: cert.accent,
                        boxShadow: `0 4px 6px -1px ${COLORS.BRONZE_LIGHT}40, 0 2px 4px -2px ${COLORS.BRONZE_LIGHT}40`,
                      }}
                    >
                      {/* Category Badge */}
                      <span 
                        className="absolute top-0 right-0 m-4 text-xs font-semibold py-1 px-3 rounded-full uppercase tracking-wider shadow-md"
                        style={{ backgroundColor: cert.accent, color: 'white', opacity: 0.9 }}
                      >
                        {cert.category}
                      </span>

                      {/* Status Badge */}
                      <span 
                        className="absolute bottom-0 right-0 m-4 text-xs font-semibold py-1 px-3 rounded-full shadow-md"
                        style={{ backgroundColor: statusColor, color: 'white', opacity: 0.9 }}
                      >
                        {statusText}
                      </span>

                      <div className="flex items-start mb-4 pr-20">
                        <div 
                          className="p-3 rounded-full mr-4 shadow-md flex-shrink-0" 
                          style={{ backgroundColor: cert.accent }}
                        >
                          <IconComponent name={cert.icon} color="white" size={24} />
                        </div>
                        <div>
                          <h3 
                            className="text-lg font-bold leading-tight mb-1" 
                            style={{ color: COLORS.BRONZE_DARK }}
                          >
                            {cert.title}
                          </h3>
                          <p className="text-sm mb-2" style={{ color: COLORS.BRONZE_LIGHT }}>
                            {cert.description}
                          </p>
                        </div>
                      </div>
                      
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center gap-2 text-sm" style={{ color: COLORS.BRONZE_DARK }}>
                          <BookOpen className="h-4 w-4" style={{ color: COLORS.BRONZE_LIGHT }} />
                          <span className="font-semibold">Issuer:</span>
                          <span>{cert.issuer}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm" style={{ color: COLORS.BRONZE_DARK }}>
                          <Clock className="h-4 w-4" style={{ color: COLORS.BRONZE_LIGHT }} />
                          <span className="font-semibold">Date:</span>
                          <span>{cert.date}</span>
                        </div>
                      </div>
                      
                      {cert.link ? (
                        <a
                          href={cert.link}
                          download={createDownloadFilename(cert.title)}
                          rel="noopener noreferrer"
                          className="mt-auto px-4 py-3 text-sm rounded-lg text-white font-semibold self-start transition duration-200 hover:bg-opacity-80 active:scale-[0.98] shadow-md flex items-center justify-center"
                          style={{ backgroundColor: COLORS.FOREST_GREEN, minWidth: '150px' }}
                        >
                          <Download className="h-4 w-4 mr-2" />
                          Download Certificate
                        </a>
                      ) : (
                        <button
                          disabled
                          className="mt-auto px-4 py-3 text-sm rounded-lg text-white font-semibold self-start opacity-50 cursor-not-allowed flex items-center justify-center"
                          style={{ backgroundColor: COLORS.BRONZE_LIGHT, minWidth: '150px' }}
                        >
                          Coming Soon
                        </button>
                      )}
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="text-center py-12 bg-white rounded-xl border-2" style={{ borderColor: COLORS.BEIGE }}>
                <Search className="h-16 w-16 mx-auto mb-4" style={{ color: COLORS.BRONZE_LIGHT }} />
                <h3 className="text-xl font-bold mb-2" style={{ color: COLORS.BRONZE_DARK }}>
                  No certificates found
                </h3>
                <p className="text-gray-600">Try adjusting your search or filter criteria</p>
              </div>
            )}
          </section>
        )}

        {/* VIDEO TUTORIALS SECTION */}
        {activeTab === 'videos' && (
          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg" style={{ backgroundColor: `${COLORS.BRONZE_LIGHT}30` }}>
                <Video className="h-5 w-5" style={{ color: COLORS.BRONZE_LIGHT }} />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold" style={{ color: COLORS.BRONZE_DARK }}>
                Video Tutorials
              </h2>
              <Badge className="ml-auto" style={{ backgroundColor: `${COLORS.BRONZE_LIGHT}20`, color: COLORS.BRONZE_LIGHT }}>
                {filteredVideos.length} tutorials
              </Badge>
            </div>

            {filteredVideos.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredVideos.map((video, index) => (
                  <div 
                    key={index} 
                    className="rounded-xl overflow-hidden shadow-xl bg-white border-2 transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl"
                    style={{ 
                      borderColor: COLORS.BEIGE,
                      boxShadow: `0 4px 6px -1px ${COLORS.BRONZE_LIGHT}40, 0 2px 4px -2px ${COLORS.BRONZE_LIGHT}40`,
                    }}
                  >
                    {/* Video Thumbnail */}
                    <div 
                      className="h-40 w-full flex items-center justify-center relative"
                      style={{ backgroundColor: COLORS.BRONZE_DARK }}
                    >
                      <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-4 left-4 w-8 h-8 rounded-full bg-white"></div>
                        <div className="absolute bottom-4 right-4 w-12 h-12 rounded-full bg-white"></div>
                      </div>
                      <MessageCircle className="h-12 w-12" style={{ color: COLORS.GOLD }} />
                      <div className="absolute bottom-2 right-2 px-2 py-1 rounded text-xs font-semibold bg-black/50 text-white">
                        {video.duration}
                      </div>
                    </div>
                    
                    <div className="p-4">
                      <div className="mb-2">
                        <Badge 
                          className="text-xs"
                          style={{ backgroundColor: `${COLORS.FOREST_GREEN}20`, color: COLORS.FOREST_GREEN }}
                        >
                          {video.category}
                        </Badge>
                      </div>
                      <h3 className="text-base font-semibold mb-3 line-clamp-2" style={{ color: COLORS.BRONZE_DARK }}>
                        {video.title}
                      </h3>
                      <button
                        className="w-full px-4 py-2.5 text-sm rounded-lg text-white font-medium transition duration-200 hover:bg-opacity-90 active:scale-[0.98] shadow-md flex items-center justify-center gap-2"
                        style={{ backgroundColor: COLORS.BRONZE_LIGHT }}
                        onClick={() => console.log(`Placeholder: Starting tutorial for ${video.title}`)} 
                      >
                        <Video className="h-4 w-4" />
                        Watch Now
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-white rounded-xl border-2" style={{ borderColor: COLORS.BEIGE }}>
                <Search className="h-16 w-16 mx-auto mb-4" style={{ color: COLORS.BRONZE_LIGHT }} />
                <h3 className="text-xl font-bold mb-2" style={{ color: COLORS.BRONZE_DARK }}>
                  No videos found
                </h3>
                <p className="text-gray-600">Try adjusting your search or filter criteria</p>
              </div>
            )}
          </section>
        )}
      </div>
    </div>
  );
};

export default Resources;
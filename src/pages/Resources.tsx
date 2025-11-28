import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  MessageCircle, 
  BarChart3, // Removed from use, kept import
  Lightbulb, // Used for Skills
  Users, // Used for Skills
  Brain, // Used for Skills
  Globe, 
  Zap, 
  BookOpen, // Used for Skills
  Target, // Removed from use, kept import
  Puzzle, // Removed from use, kept import
  PenTool, // Removed from use, kept import
  Shield // Used for Skills
} from 'lucide-react';


// --- COLOR PALETTE ---
// Defined here for easy reference and use in inline styles.
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
    icon: "Shield", // Lucide Icon Name
    accent: COLORS.FOREST_GREEN,
    //
    // Mapped from C:\Users\sagin\Desktop\New folder (5)\mautiPortfolio\static\certificates\Mautia Eliud_Child Protection Refresher 2025_Download.pdf
    link: "static/certificates/Mautia_Eliud_Child_Protection_Refresher_2025.pdf",
  },
  {
    title: "Differentiation in Practice",
    issuer: "The School Training Company",
    date: "October 7, 2025",
    icon: "BookOpen",
    accent: COLORS.BRONZE_LIGHT,
    // C:\Users\sagin\Desktop\New folder (5)\mautiPortfolio\static\certificates\Eliud Mautia - Differentiation in Practice - 2025-10-07 052252.pdf
    link: "static/certificates/Eliud_Mautia_Differentiation_in_Practice.pdf", 
  },
  {
    title: "Supporting Children & Young People on the Autistic Spectrum",
    issuer: "The School Training Company",
    date: "October 7, 2025",
    icon: "Brain",
    accent: COLORS.BEIGE,
    // Mapped from C:\Users\sagin\Desktop\New folder (5)\mautiPortfolio\static\certificates\Eliud Mautia - Supporting Children and Young People on the Autistic Spectrum - 2025-10-07 052254.pdf
    link: "static/certificates/Eliud_Mautia_Autistic_Spectrum_Support.pdf",
  },
  {
    title: "Child-on-Child Abuse for International Schools",
    issuer: "Tes Safeguarding",
    date: "October 3, 2023",
    icon: "Users",
    accent: COLORS.BRONZE_DARK,
    // Mapped from C:\Users\sagin\Desktop\New folder (5)\mautiPortfolio\static\certificates\Mautia Eliud_Child-on-Child Abuse for International Schools_Download.pdf
    link: "static/certificates/Mautia_Eliud_Child_on_Child_Abuse.pdf",
  },
  {
    title: "Staff Wellbeing for International Schools",
    issuer: "Tes Duty of Care",
    date: "December 18, 2023",
    icon: "Heart",
    accent: COLORS.GOLD,
    //
    // Mapped from C:\Users\sagin\Desktop\New folder (5)\mautiPortfolio\static\certificates\Mautia Eliud_Staff Wellbeing for International Schools_Download.pdf
    link: "static/certificates/Mautia_Eliud_Staff_Wellbeing.pdf",
  },
];

const videoTutorials = [
  { title: "Introduction to Classroom Management", duration: "12:45" },
  { title: "Effective Lesson Planning Techniques", duration: "8:30" },
  { title: "Using Digital Tools for Assessment", duration: "15:00" },
  { title: "Fostering Student Creativity", duration: "10:50" },
];

// NEW DATA STRUCTURE: Key Skill Endorsements
const skillEndorsements = [
  { skill: "Differentiated Instruction", level: "Expert", icon: "Lightbulb", color: COLORS.FOREST_GREEN },
  { skill: "Safeguarding & Ethics", level: "Certified", icon: "Shield", color: COLORS.BRONZE_DARK },
  { skill: "Curriculum Development", level: "Proficient", icon: "BookOpen", color: COLORS.BRONZE_LIGHT },
  { skill: "Behavior Management", level: "Expert", icon: "Users", color: COLORS.GOLD },
  { skill: "SEN/Autism Support", level: "Certified", icon: "Brain", color: COLORS.BEIGE },
];


// --- ICON COMPONENTS (Using Lucide icons directly) ---
// Simplified to use the actual Lucide icons imported at the top
const IconComponent = ({ name, color, size = 24, className = "", style = {} }) => {
  const iconProps = {
    size,
    className,
    style: { ...style, color }
  };

  switch (name) {
    case 'Shield':
      return <Shield {...iconProps} />;
    case 'BookOpen':
      return <BookOpen {...iconProps} />;
    case 'Brain':
      return <Brain {...iconProps} />;
    case 'Users':
      return <Users {...iconProps} />;
    case 'Heart':
      return <Heart {...iconProps} />;
    case 'Video':
      return <MessageCircle {...iconProps} />;
    case 'LinkIcon':
      return <Globe {...iconProps} />;
    case 'Lightbulb':
      return <Lightbulb {...iconProps} />;
    case 'BarChart3':
      return <BarChart3 {...iconProps} />;
    case 'Target':
      return <Target {...iconProps} />;
    case 'Puzzle':
      return <Puzzle {...iconProps} />;
    case 'PenTool':
      return <PenTool {...iconProps} />;
    default:
      return <div {...iconProps}>?</div>;
  }
};

// --- Heart icon component (since it wasn't imported) ---
const Heart = ({ size = 24, className = "", style = {} }) => (
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

// --- MAIN COMPONENT (Renamed to Resources) ---
const Resources = () => {
  return (
    <div className="min-h-screen p-4 md:p-8 font-['Inter']" style={{ backgroundColor: COLORS.CREAM }}>
      {/* HEADER SECTION */}
      <header className="text-center mb-12">
        <h1 
          className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-2"
          style={{ color: COLORS.BRONZE_DARK }}
        >
          My Professional Resources
        </h1>
        <p 
          className="text-lg sm:text-xl font-medium"
          style={{ color: COLORS.BRONZE_LIGHT }}
        >
          A collection of my achievements, certifications, and development resources.
        </p>
        <div className="h-1 w-20 mx-auto mt-3 rounded-full" style={{ backgroundColor: COLORS.GOLD }}></div>
      </header>

      {/* NEW SECTION: KEY SKILL ENDORSEMENTS (Replaces Growth Metrics) */}
      <section className="mb-12">
        <h2 
          className="text-2xl sm:text-3xl font-bold mb-6 text-center sm:text-left border-b pb-2"
          style={{ color: COLORS.BRONZE_DARK, borderColor: COLORS.BEIGE }}
        >
          Key Skill Endorsements
        </h2>
        
        {/* Skill Card Grid (Responsive) */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {skillEndorsements.map((skillItem, index) => (
            <div 
              key={index} 
              className="p-4 rounded-xl shadow-xl transition duration-300 transform hover:scale-[1.03] bg-white border-2 flex flex-col items-center text-center"
              style={{ 
                borderColor: skillItem.color,
                boxShadow: `0 4px 6px -1px ${COLORS.BRONZE_LIGHT}80, 0 2px 4px -2px ${COLORS.BRONZE_LIGHT}80`,
              }}
            >
              <div 
                className="p-3 mb-3 rounded-full shadow-md" 
                style={{ backgroundColor: skillItem.color }}
              >
                <IconComponent name={skillItem.icon} color="white" size={24} />
              </div>
              <h3 className="text-base font-bold mb-1" style={{ color: COLORS.BRONZE_DARK }}>
                {skillItem.skill}
              </h3>
              <span 
                className="text-xs font-semibold py-1 px-3 rounded-full"
                style={{ backgroundColor: skillItem.color, color: 'white', opacity: 0.9 }}
              >
                {skillItem.level}
              </span>
            </div>
          ))}
        </div>
      </section>


      {/* CERTIFICATES SECTION - MODIFIED WITH DYNAMIC BADGE */}
      <section className="mb-12">
        <h2 
          className="text-2xl sm:text-3xl font-bold mb-6 text-center sm:text-left border-b pb-2"
          style={{ color: COLORS.BRONZE_DARK, borderColor: COLORS.BEIGE }}
        >
          Certificates of Completion
        </h2>
        
        {/* Certificate Grid (Responsive) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {certificateData.map((cert, index) => {
            const isLinkAvailable = !!cert.link;
            const statusText = isLinkAvailable ? "Link Available" : "Link Missing";
            const statusColor = isLinkAvailable ? COLORS.FOREST_GREEN : COLORS.BRONZE_DARK;

            return (
              <div 
                key={index} 
                className="p-4 sm:p-5 rounded-xl shadow-xl transition duration-300 transform hover:scale-[1.02] flex flex-col bg-white relative" // Added relative for badge positioning
                style={{ 
                  border: `3px solid ${cert.accent}`,
                  boxShadow: `0 4px 6px -1px ${COLORS.BRONZE_LIGHT}80, 0 2px 4px -2px ${COLORS.BRONZE_LIGHT}80`,
                }}
              >
                {/* NEW FEATURE: Status Badge */}
                <span 
                    className="absolute top-0 right-0 m-3 text-xs font-semibold py-1 px-3 rounded-full uppercase tracking-wider shadow-md"
                    style={{ backgroundColor: statusColor, color: 'white', opacity: 0.9 }}
                >
                    {statusText}
                </span>

                <div className="flex items-start mb-3">
                  <div 
                    className="p-2 rounded-full mr-3 shadow-md flex-shrink-0" 
                    style={{ backgroundColor: cert.accent }}
                  >
                    <IconComponent name={cert.icon} color="white" size={20} />
                  </div>
                  <h3 
                    className="text-base sm:text-lg font-bold leading-tight pt-1" 
                    style={{ color: COLORS.BRONZE_DARK }}
                  >
                    {cert.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm" style={{ color: COLORS.BRONZE_LIGHT }}>
                  <span className="font-semibold">Issued By:</span> {cert.issuer}
                </p>
                <p className="text-xs sm:text-sm mt-1 mb-4" style={{ color: COLORS.BRONZE_LIGHT }}>
                  <span className="font-semibold">Date:</span> {cert.date}
                </p>
                
                {/* LINK/BUTTON FOR VIEWING */}
                {cert.link ? (
                  <a
                    href={cert.link}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="mt-auto px-4 py-2 text-sm rounded-lg text-white font-semibold self-start transition duration-200 hover:bg-opacity-80 active:scale-[0.98] shadow-md flex items-center justify-center"
                    style={{ backgroundColor: COLORS.FOREST_GREEN, minWidth: '130px' }}
                  >
                    <IconComponent name="LinkIcon" color="white" size={16} className="mr-1" />
                    View Certificate
                  </a>
                ) : (
                  <button
                    disabled
                    className="mt-auto px-4 py-2 text-sm rounded-lg text-white font-semibold self-start opacity-50 cursor-not-allowed flex items-center justify-center"
                    style={{ backgroundColor: COLORS.BRONZE_LIGHT, minWidth: '130px' }}
                  >
                    Link Unavailable
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* VIDEO TUTORIALS SECTION */}
      <section>
        <h2 
          className="text-2xl sm:text-3xl font-bold mb-6 text-center sm:text-left border-b pb-2"
          style={{ color: COLORS.BRONZE_DARK, borderColor: COLORS.BEIGE }}
        >
          Video Tutorials (Coming Soon)
        </h2>

        {/* Video Card Grid (Responsive) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {videoTutorials.map((video, index) => (
            <div 
              key={index} 
              className="rounded-xl overflow-hidden shadow-xl border-2 bg-white"
              style={{ 
                borderColor: COLORS.BEIGE,
                transition: 'box-shadow 0.3s',
                boxShadow: `0 4px 6px -1px ${COLORS.BRONZE_LIGHT}80, 0 2px 4px -2px ${COLORS.BRONZE_LIGHT}80`,
              }}
              // Enhanced hover effect for visual flair
              onMouseEnter={(e) => e.currentTarget.style.boxShadow = `0 15px 20px -5px ${COLORS.BRONZE_LIGHT}b0`}
              onMouseLeave={(e) => e.currentTarget.style.boxShadow = `0 4px 6px -1px ${COLORS.BRONZE_LIGHT}80, 0 2px 4px -2px ${COLORS.BRONZE_LIGHT}80`}
            >
              {/* Mock Video Placeholder */}
              <div 
                className="h-28 w-full flex items-center justify-center"
                style={{ backgroundColor: COLORS.BRONZE_DARK }}
              >
                <IconComponent name="Video" color={COLORS.GOLD} size={40} />
              </div>
              <div className="p-4">
                <h3 className="text-base font-semibold mb-1" style={{ color: COLORS.BRONZE_DARK }}>
                  {video.title}
                </h3>
                <p className="text-xs" style={{ color: COLORS.BRONZE_LIGHT }}>
                  Duration: {video.duration}
                </p>
                <button
                  className="mt-3 w-full px-4 py-2 text-sm rounded-lg text-white font-medium transition duration-200 bg-opacity-90 hover:bg-opacity-100 active:scale-[0.99] shadow-md"
                  style={{ backgroundColor: COLORS.BRONZE_LIGHT }}
                  onClick={() => console.log(`Placeholder: Starting tutorial for ${video.title}`)} 
                >
                  Watch Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Resources;
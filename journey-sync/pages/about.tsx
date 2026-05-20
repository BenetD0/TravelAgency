"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, Users, Heart, Sparkles, Code2, Zap, Rocket } from "lucide-react";

const teamMembers = [
  {
    id: 1,
    name: "Erti Hoxha",
    role: "Team Lead & Full Stack Developer",
    icon: Rocket,
    bio: "Visionary leader and driving force behind JourneySync. His passion for travel and technology inspired the creation of this platform.",
    skills: ["Next.js", "TypeScript", "MongoDB", "UI/UX"],
  },
  {
    id: 2,
    name: "Anita Maloku",
    role: "Full Stack Developer",
    icon: Sparkles,
    bio: "Expert in creating elegant and intuitive visual experiences. Obsessed with details that make all the difference in user satisfaction.",
    skills: ["React", "Tailwind", "Framer Motion", "Design"],
  },
  {
    id: 3,
    name: "Getuar Gashi",
    role: "Full Stack Developer",
    icon: Code2,
    bio: "Ensures high performance, security, and clean architecture in the backend. Builds the foundation that everything else relies on.",
    skills: ["Node.js", "MongoDB", "API", "Authentication"],
  },
  {
    id: 4,
    name: "Anes Sheremeti",
    role: "Full Stack Developer",
    icon: Zap,
    bio: "Specialist in user experience and complex functionalities. Ensures everything feels effortless and intuitive for users.",
    skills: ["Frontend", "Real-time", "Testing", "Optimization"],
  },
  {
    id: 5,
    name: "Ensar Zeqiri",
    role: "Full Stack Developer",
    icon: Users,
    bio: "Expert in real-time synchronization and collaboration. Makes sure trips stay perfectly synced across all participants.",
    skills: ["WebSocket", "Live Sync", "Database", "Deployment"],
  },
];

const accent = {
  bg: "bg-[#22C55E]/10",
  text: "text-[#22C55E]",
  gradient: "from-[#14532D] to-[#22C55E]",
  badge: "bg-[#22C55E]/10 text-[#14532D] border border-[#22C55E]/20",
};

export default function About() {
  const [selectedMember, setSelectedMember] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FAF3E0] via-[#FAF3E0]/60 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-white/80 border border-[#7C5E3C]/20 text-[#14532D] text-sm font-medium px-4 py-2 rounded-full mb-6 shadow-sm"
          >
            <Globe className="w-4 h-4 text-[#22C55E]" />
            OUR STORY • OUR TEAM • 2026
          </motion.div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#14532D] tracking-tight mb-6">
            Meet the Team Behind
            <br />
            <span className="text-[#22C55E]">JourneySync</span>
          </h1>

          <p className="text-lg text-[#7C5E3C] max-w-3xl mx-auto leading-relaxed">
            A passionate team of computer science students from UBT, united by our love for technology
            and travel. What started as a university project has evolved into a platform that brings
            travelers together in meaningful ways.
          </p>
        </div>

        {/* Story Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-20"
        >
          <div className="bg-white rounded-2xl shadow-lg border border-[#7C5E3C]/15 p-8 md:p-12 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#22C55E]/10 rounded-xl mb-6">
              <Heart className="w-8 h-8 text-[#22C55E]" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#14532D] mb-6">Our Journey</h2>
            <div className="text-[#7C5E3C] leading-relaxed space-y-4 max-w-3xl mx-auto text-left">
              <p>
                In 2026, during our{" "}
                <span className="font-semibold text-[#14532D]">
                  &ldquo;Client-Side Web Development&rdquo;
                </span>{" "}
                course at UBT, our team decided not to create just another academic project.
              </p>
              <p>
                We built something we'd actually use: a modern platform where friends can plan trips
                together in real-time, eliminating the chaos of endless messaging and messy spreadsheets.
              </p>
              <p>
                What began as a student project has grown into a community-driven travel planning solution,
                connecting adventurers and making trip coordination effortless.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Team Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#14532D] mb-3">Meet Our Team</h2>
            <p className="text-[#7C5E3C] text-lg max-w-2xl mx-auto">
              Five talented computer science students from UBT, each bringing unique skills
              and perspectives to create something extraordinary.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {teamMembers.map((member, index) => {
              return (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.4 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  onClick={() => setSelectedMember(member.id)}
                  className="group cursor-pointer"
                >
                  <div className="bg-white rounded-xl shadow-sm border border-[#7C5E3C]/15 hover:shadow-md transition-all overflow-hidden h-full">
                    <div className="p-6 flex flex-col items-center text-center">
                      <div
                        className={`w-16 h-16 rounded-xl ${accent.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                      >
                        <member.icon className={`w-8 h-8 ${accent.text}`} />
                      </div>
                      <h3 className="text-lg font-bold text-[#14532D] mb-1">{member.name}</h3>
                      <p className="text-sm text-[#7C5E3C] mb-4">{member.role}</p>
                      <p className="text-[#7C5E3C] text-sm leading-relaxed line-clamp-3">{member.bio}</p>
                      <div className="mt-4 flex flex-wrap gap-1.5 justify-center">
                        {member.skills.slice(0, 2).map((skill, i) => (
                          <span
                            key={i}
                            className={`text-xs px-2 py-0.5 ${accent.badge} rounded-full`}
                          >
                            {skill}
                          </span>
                        ))}
                        {member.skills.length > 2 && (
                          <span className="text-xs px-2 py-0.5 bg-[#FAF3E0] text-[#7C5E3C] border border-[#7C5E3C]/15 rounded-full">
                            +{member.skills.length - 2}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className={`h-1 w-full ${accent.bg}`} />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Footer note */}
        <div className="text-center pt-8 border-t border-[#7C5E3C]/10">
          <p className="text-[#7C5E3C] text-sm">
            We&apos;re all computer science students at UBT — and we&apos;ve created something we hope will grow and help travelers worldwide.
          </p>
        </div>
      </div>

      {/* Member Detail Modal */}
      <AnimatePresence>
        {selectedMember && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white rounded-2xl shadow-xl max-w-md w-full overflow-hidden"
            >
              {teamMembers.find((m) => m.id === selectedMember) && (() => {
                const member = teamMembers.find((m) => m.id === selectedMember)!;
                return (
                  <>
                    <div className="relative">
                      <button
                        onClick={() => setSelectedMember(null)}
                        className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200 flex items-center justify-center transition z-10"
                      >
                        ✕
                      </button>
                      <div className={`bg-gradient-to-r ${accent.gradient} p-8 text-center`}>
                        <div className="w-20 h-20 rounded-xl bg-white/20 flex items-center justify-center mx-auto mb-4">
                          <member.icon className="w-10 h-10 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-1">{member.name}</h3>
                        <p className="text-white/80">{member.role}</p>
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="text-[#7C5E3C] leading-relaxed mb-6">{member.bio}</p>
                      <div className="flex flex-wrap gap-2">
                        {member.skills.map((skill, i) => (
                          <span key={i} className={`text-sm px-3 py-1 ${accent.badge} rounded-full`}>
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </>
                );
              })()}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

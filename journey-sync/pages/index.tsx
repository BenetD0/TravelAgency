"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, useInView, AnimatePresence } from "framer-motion";
import cs from "classnames";
import {
  Plane,
  Map,
  Users,
  Compass,
  ArrowRight,
  Globe,
  Sparkles,
  Calendar,
  Clock,
  Star,
  ChevronLeft,
  ChevronRight,
  TrendingUp,
  Play,
  Pause,
  X,
  CreditCard,
  Lock,
  MessageCircle,
  Send,
  CheckCircle,
  Zap,
} from "lucide-react";

// Të dhënat për carousel
const destinations = [
  {
    id: 1,
    name: "Zermatt, Zvicër",
    country: "Zvicër",
    image: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800&h=600&fit=crop",
    liveTrips: 24,
    rating: 4.9,
  },
  {
    id: 2,
    name: "Santorini, Greqi",
    country: "Greqi",
    image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&h=600&fit=crop",
    liveTrips: 42,
    rating: 4.95,
  },
  {
    id: 3,
    name: "Kyoto, Japoni",
    country: "Japoni",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&h=600&fit=crop",
    liveTrips: 38,
    rating: 4.88,
  },
  {
    id: 4,
    name: "Machu Picchu, Peru",
    country: "Peru",
    image: "https://images.unsplash.com/photo-1587595431973-160d0d94add1?w=800&h=600&fit=crop",
    liveTrips: 17,
    rating: 4.92,
  },
  {
    id: 5,
    name: "Dolomites, Itali",
    country: "Itali",
    image: "https://images.unsplash.com/photo-1570913149827-d2ac84ab3f9a?w=800&h=600&fit=crop",
    liveTrips: 31,
    rating: 4.87,
  },
];

const roadmapSteps = [
  {
    step: 1,
    title: "Create your trip",
    description: "Choose destination, dates, and invite your travel companions.",
    icon: Calendar,
  },
  {
    step: 2,
    title: "Plan together",
    description: "Add attractions, hotels, and restaurants in real-time.",
    icon: Users,
  },
  {
    step: 3,
    title: "Live sync",
    description: "All changes appear instantly for everyone.",
    icon: Globe,
  },
  {
    step: 4,
    title: "Explore & share",
    description: "Upload photos, write comments, and keep memories alive.",
    icon: Sparkles,
  },
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatMessage, setChatMessage] = useState("");
  const [chatReplies, setChatReplies] = useState<{ text: string; isBot: boolean }[]>([
    { text: "Hello! How can I help you with your journey?", isBot: true },
  ]);

  const autoplayRef = useRef<NodeJS.Timeout | null>(null);
  const statsRef = useRef(null);
  const roadmapRef = useRef(null);
  const isStatsInView = useInView(statsRef, { once: true, amount: 0.3 });
  const isRoadmapInView = useInView(roadmapRef, { once: true, amount: 0.2 });

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % destinations.length);
    resetAutoplay();
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + destinations.length) % destinations.length);
    resetAutoplay();
  };

  const resetAutoplay = () => {
    if (autoplayRef.current) clearInterval(autoplayRef.current);
    if (autoplay) {
      autoplayRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % destinations.length);
      }, 5000);
    }
  };

  useEffect(() => {
    if (autoplay) {
      autoplayRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % destinations.length);
      }, 5000);
    }
    return () => {
      if (autoplayRef.current) clearInterval(autoplayRef.current);
    };
  }, [autoplay]);

  const [counts, setCounts] = useState({ trips: 0, users: 0, countries: 0 });
  useEffect(() => {
    if (isStatsInView) {
      const duration = 2000;
      const interval = 20;
      const steps = duration / interval;
      const targetTrips = 124000;
      const targetUsers = 43000;
      const targetCountries = 98;
      let step = 0;
      const timer = setInterval(() => {
        step++;
        setCounts({
          trips: Math.min(targetTrips, Math.floor((step / steps) * targetTrips)),
          users: Math.min(targetUsers, Math.floor((step / steps) * targetUsers)),
          countries: Math.min(targetCountries, Math.floor((step / steps) * targetCountries)),
        });
        if (step >= steps) clearInterval(timer);
      }, interval);
      return () => clearInterval(timer);
    }
  }, [isStatsInView]);

  const sendChatMessage = () => {
    if (!chatMessage.trim()) return;
    setChatReplies((prev) => [...prev, { text: chatMessage, isBot: false }]);
    setTimeout(() => {
      const botReplies = [
        "Of course! Have you already chosen a destination?",
        "You can create a new trip by clicking the 'Create New Trip' button.",
        "For private trips, simply enable the private option during creation.",
        "What kind of help do you need? I'm here to support your journey!",
      ];
      const randomReply = botReplies[Math.floor(Math.random() * botReplies.length)];
      setChatReplies((prev) => [...prev, { text: randomReply, isBot: true }]);
    }, 800);
    setChatMessage("");
  };

  return (
    <>
      {/* HERO SECTION – Forest Green background */}
      <section className="relative min-h-screen flex items-center bg-[#14532D] overflow-hidden">
        {/* Abstract natural shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#22C55E] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#22C55E] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse delay-1000" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 w-full py-20 z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left content */}
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 bg-[#22C55E]/10 text-[#22C55E] text-sm font-medium px-4 py-2 rounded-full border border-[#22C55E]/20"
              >
                <Zap className="w-4 h-4" />
                Real-time journey sync
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-5xl md:text-7xl font-bold text-white leading-tight tracking-tight"
              >
                Your journey.
                <br />
                <span className="text-[#22C55E]">Synchronized.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-lg md:text-xl text-[#FAF3E0]/80 max-w-lg"
              >
                The simplest platform to plan, collaborate, and share trips with friends and family.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-wrap gap-4"
              >
                <Link
                  href="/trips"
                  className="inline-flex items-center gap-2 bg-[#22C55E] hover:bg-[#16A34A] text-white font-semibold px-8 py-3 rounded-lg transition shadow-lg hover:shadow-xl"
                >
                  Create new trip
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <a
                  href="/explore"
                  className="inline-flex items-center gap-2 border border-[#FAF3E0] text-[#FAF3E0] hover:bg-white/10 font-medium px-8 py-3 rounded-lg transition"
                >
                  Explore destinations
                </a>
              </motion.div>

              {/* Trust badge */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="flex items-center gap-4 pt-4"
              >
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full bg-[#FAF3E0]/20 border-2 border-[#14532D] flex items-center justify-center text-xs font-bold text-[#FAF3E0]"
                    >
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                </div>
                <div className="text-sm text-[#FAF3E0]">
                  <span className="font-semibold text-white">10,000+</span> travelers already using
                </div>
              </motion.div>
            </div>

            {/* Right content – modern card with features */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="relative w-full max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-[#22C55E] to-[#16A34A] rounded-2xl blur-2xl opacity-20" />
                <div className="relative bg-[#FAF3E0] rounded-2xl border border-[#7C5E3C]/20 p-8 shadow-2xl">
                  <div className="grid grid-cols-2 gap-6">
                    {[
                      { icon: Plane, label: "Flights", color: "text-[#14532D]" },
                      { icon: Users, label: "Groups", color: "text-[#14532D]" },
                      { icon: Calendar, label: "Plan", color: "text-[#14532D]" },
                      { icon: CreditCard, label: "Expenses", color: "text-[#14532D]" },
                    ].map((item, idx) => (
                      <div
                        key={idx}
                        className="bg-white rounded-xl p-4 text-center hover:bg-[#22C55E]/10 transition group cursor-pointer"
                      >
                        <item.icon className={`w-8 h-8 mx-auto mb-2 ${item.color} group-hover:scale-110 transition`} />
                        <span className="text-xs text-[#7C5E3C]">{item.label}</span>
                      </div>
                    ))}
                  </div>
                  <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-[#22C55E] text-white text-xs font-semibold px-4 py-1 rounded-full shadow-lg flex items-center gap-1">
                    <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
                    Live Sync
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* STATS SECTION – Cream background */}
      <section ref={statsRef} className="py-16 bg-[#FAF3E0] border-b border-[#7C5E3C]/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-6">
            {[
              { value: counts.trips.toLocaleString() + "+", label: "Trips created", icon: Calendar },
              { value: counts.users.toLocaleString() + "+", label: "Active users", icon: Users },
              { value: counts.countries + "+", label: "Countries", icon: Globe },
              { value: "4.98", label: "Average rating", icon: Star },
              { value: "24/7", label: "Real-time sync", icon: Zap },
              { value: "Free", label: "To create", icon: CheckCircle, highlight: true },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={isStatsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: idx * 0.05, duration: 0.4 }}
                className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition border border-[#7C5E3C]/10"
              >
                <stat.icon className={`w-6 h-6 mx-auto mb-3 ${stat.highlight ? "text-[#22C55E]" : "text-[#7C5E3C]"}`} />
                <p className={`text-2xl font-bold ${stat.highlight ? "text-[#22C55E]" : "text-[#14532D]"}`}>
                  {stat.value}
                </p>
                <p className="text-xs text-[#7C5E3C] mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS – 3 steps with better design */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 bg-[#22C55E]/10 text-[#22C55E] px-4 py-1 rounded-full text-sm font-medium mb-4"
            >
              <Sparkles className="w-4 h-4" />
              Simple process
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#14532D] mb-4">How it works</h2>
            <p className="text-[#7C5E3C] max-w-2xl mx-auto">
              In three simple steps, organize the perfect trip with your friends.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "Create for free",
                desc: "Any user can create a trip at no cost. Add destination, dates, and invite friends.",
                step: "01",
              },
              {
                icon: CreditCard,
                title: "Split expenses",
                desc: "Record shared expenses and see who paid what – transparent and easy.",
                step: "02",
              },
              {
                icon: Lock,
                title: "Public or private",
                desc: "Choose if the trip is open to everyone or invite-only via a code.",
                step: "03",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="group relative bg-[#FAF3E0] rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-[#7C5E3C]/20"
              >
                <div className="absolute -top-3 -right-3 w-12 h-12 bg-[#22C55E] rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  {item.step}
                </div>
                <div className="w-16 h-16 rounded-full bg-[#22C55E]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition">
                  <item.icon className="w-8 h-8 text-[#22C55E]" />
                </div>
                <h3 className="text-xl font-bold text-[#14532D] mb-3">{item.title}</h3>
                <p className="text-[#7C5E3C] leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CAROUSEL – Trending destinations with modern design */}
      <section className="py-24 bg-[#FAF3E0]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 bg-[#22C55E]/10 text-[#22C55E] px-4 py-1 rounded-full text-sm font-medium mb-4"
            >
              <TrendingUp className="w-4 h-4" />
              Trending now
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#14532D] mb-4">
              Most popular destinations
            </h2>
            <p className="text-[#7C5E3C] max-w-2xl mx-auto">
              See where others are traveling and get inspired for your next adventure.
            </p>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-2xl">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {destinations.map((dest) => (
                  <div key={dest.id} className="w-full flex-shrink-0 px-4">
                    <div className="relative rounded-2xl overflow-hidden shadow-xl group">
                      <img
                        src={dest.image}
                        alt={dest.name}
                        className="w-full h-96 object-cover group-hover:scale-110 transition duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                      <div className="absolute bottom-0 left-0 p-6 text-white">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full text-xs flex items-center gap-1">
                            <Clock className="w-3 h-3" /> {dest.liveTrips} live trips
                          </span>
                          <span className="bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full text-xs flex items-center gap-1">
                            <Star className="w-3 h-3 fill-yellow-400" /> {dest.rating}
                          </span>
                        </div>
                        <h3 className="text-2xl font-bold">{dest.name}</h3>
                        <p className="text-white/80">{dest.country}</p>
                      </div>
                      <div className="absolute top-4 right-4 bg-[#22C55E] text-white text-xs px-3 py-1 rounded-full flex items-center gap-1 animate-pulse">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
                        </span>
                        LIVE
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={prevSlide}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-white transition"
            >
              <ChevronLeft className="w-6 h-6 text-[#14532D]" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-white transition"
            >
              <ChevronRight className="w-6 h-6 text-[#14532D]" />
            </button>

            <button
              onClick={() => setAutoplay(!autoplay)}
              className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-white transition"
            >
              {autoplay ? <Pause className="w-4 h-4 text-[#14532D]" /> : <Play className="w-4 h-4 text-[#14532D]" />}
            </button>

            <div className="flex justify-center gap-2 mt-6">
              {destinations.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={cs(
                    "h-2 rounded-full transition-all duration-300",
                    currentSlide === idx ? "w-8 bg-[#22C55E]" : "w-2 bg-[#7C5E3C]/30 hover:bg-[#7C5E3C]/50"
                  )}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ROADMAP – Vertical timeline with modern design */}
      <section ref={roadmapRef} className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 bg-[#22C55E]/10 text-[#22C55E] px-4 py-1 rounded-full text-sm font-medium mb-4"
            >
              <Compass className="w-4 h-4" />
              Your journey blueprint
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#14532D] mb-4">
              Your guide to the perfect trip
            </h2>
            <p className="text-[#7C5E3C] max-w-2xl mx-auto">
              Follow these steps and you will have a stress-free organized trip.
            </p>
          </div>

          <div className="relative">
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#22C55E] via-[#7C5E3C]/30 to-transparent transform -translate-x-1/2" />

            {roadmapSteps.map((step, idx) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className={`flex flex-col md:flex-row items-center gap-8 mb-12 ${
                  idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="flex-1">
                  <div className="bg-[#FAF3E0] p-6 rounded-2xl shadow-sm hover:shadow-md transition border border-[#7C5E3C]/20 group">
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#22C55E] text-white font-bold text-lg mb-4 group-hover:scale-110 transition">
                      {step.step}
                    </div>
                    <h3 className="text-xl font-bold text-[#14532D] mb-2">{step.title}</h3>
                    <p className="text-[#7C5E3C]">{step.description}</p>
                  </div>
                </div>

                <div className="relative flex items-center justify-center w-12 h-12">
                  <div className="absolute inset-0 rounded-full bg-[#22C55E]/20 animate-pulse" />
                  <div className="relative w-10 h-10 rounded-full bg-[#22C55E] flex items-center justify-center text-white shadow-md">
                    <step.icon className="w-5 h-5" />
                  </div>
                </div>

                <div className="flex-1" />
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Link
                href="/trips"
                className="inline-flex items-center gap-2 bg-[#22C55E] hover:bg-[#16A34A] text-white font-semibold px-8 py-3 rounded-lg transition shadow-md hover:shadow-lg"
              >
                Start now
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA – Forest Green with natural accent */}
      <section className="relative bg-[#14532D] py-24 text-white text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#22C55E]/20 to-transparent" />
        <div className="relative max-w-3xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            Ready to start your journey?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-xl text-[#FAF3E0] mb-8"
          >
            Join thousands of travelers already using JourneySync.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Link
              href="/trips"
              className="inline-flex items-center gap-2 bg-[#22C55E] hover:bg-[#16A34A] text-white font-semibold text-lg px-10 py-4 rounded-lg transition shadow-lg hover:shadow-xl"
            >
              Create free trip
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CHATBOT BUTTON */}
      <button
        onClick={() => setIsChatOpen(!isChatOpen)}
        className="fixed bottom-6 right-6 z-50 bg-[#22C55E] hover:bg-[#16A34A] text-white p-3 rounded-full shadow-lg transition hover:scale-105"
      >
        <MessageCircle className="w-6 h-6" />
      </button>

      {/* CHATBOT MODAL */}
      <AnimatePresence>
        {isChatOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-end md:items-center justify-center p-4"
            onClick={() => setIsChatOpen(false)}
          >
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 100, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl w-full max-w-md h-[500px] flex flex-col shadow-2xl overflow-hidden"
            >
              <div className="bg-[#14532D] p-4 text-white flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <MessageCircle className="w-5 h-5" />
                  <span className="font-semibold">Journey assistant</span>
                </div>
                <button onClick={() => setIsChatOpen(false)} className="p-1 hover:bg-white/20 rounded-full transition">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex-1 p-4 overflow-y-auto bg-[#FAF3E0] space-y-3">
                {chatReplies.map((msg, index) => (
                  <div key={index} className={`flex ${msg.isBot ? "justify-start" : "justify-end"}`}>
                    <div
                      className={`max-w-[75%] px-4 py-2 rounded-2xl ${
                        msg.isBot
                          ? "bg-white shadow-sm text-[#14532D] border border-[#7C5E3C]/20"
                          : "bg-[#22C55E] text-white"
                      }`}
                    >
                      {msg.text}
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-4 border-t border-[#7C5E3C]/20 bg-white">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={chatMessage}
                    onChange={(e) => setChatMessage(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && sendChatMessage()}
                    placeholder="Type your question..."
                    className="flex-1 border border-[#7C5E3C]/30 rounded-lg px-4 py-2 focus:outline-none focus:border-[#22C55E] focus:ring-1 focus:ring-[#22C55E]"
                  />
                  <button
                    onClick={sendChatMessage}
                    className="bg-[#22C55E] text-white p-2 rounded-lg hover:bg-[#16A34A] transition"
                  >
                    <Send className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

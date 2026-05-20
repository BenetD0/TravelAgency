"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { motion, AnimatePresence } from "framer-motion";
import { Bell, Heart, LogOut, Menu, MessageSquare, User, X, Globe } from "lucide-react";
import { useNotifications } from "@/hooks/useNotifications";

export default function Header() {
  const { data: session } = useSession();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [notificationOpen, setNotificationOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { notifications, unreadCount, markAllNotificationsRead } = useNotifications();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMobileMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/trips", label: "Trips" },
    { href: "/communitypage", label: "Community" },
    { href: "/contact", label: "Contact" },
    { href: "/about", label: "About" },
  ];

  const role = (session?.user as { role?: string } | undefined)?.role;

  function getNotificationHref(item: (typeof notifications)[number]) {
    if (item.data?.tripId) {
      return `/dashboard/client/trips/${item.data.tripId}`;
    }
    if (item.data?.friendEmail) {
      return `/dashboard/client/messages?friend=${encodeURIComponent(item.data.friendEmail)}`;
    }
    return "/dashboard/client";
  }

  return (
    <>
      <header
        className={`fixed left-0 right-0 top-0 z-50 bg-white transition-all duration-300 ${
          scrolled ? "border-b border-[#7C5E3C]/20 shadow-md" : "border-b border-[#7C5E3C]/10"
        }`}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:h-20 lg:px-8">
          <Link href="/" className="group flex items-center gap-2">
            <Globe className="h-6 w-6 text-[#22C55E] transition-transform duration-300 group-hover:rotate-12 md:h-7 md:w-7" />
            <span className="text-xl font-bold tracking-tight text-[#14532D] md:text-2xl">
              Journey<span className="text-[#22C55E]">Sync</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="group relative py-2 text-[#7C5E3C] transition-colors hover:text-[#22C55E]">
                {link.label}
                <span className="absolute left-0 -bottom-0 h-0.5 w-0 bg-[#22C55E] transition-all group-hover:w-full" />
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3 md:gap-5">
            <Link href="/favorites" className="rounded-full p-2 transition-colors hover:bg-[#FAF3E0]" aria-label="Favorites">
              <Heart className="h-5 w-5 text-[#7C5E3C] transition-colors hover:text-red-500" />
            </Link>

            {session && (
              <div className="relative">
                <button
                  onClick={() => setNotificationOpen((prev) => !prev)}
                  className="relative rounded-full p-2 transition-colors hover:bg-[#FAF3E0]"
                  aria-label="Notifications"
                >
                  <Bell className="h-5 w-5 text-[#7C5E3C]" />
                  {unreadCount > 0 && (
                    <span className="absolute -right-0.5 -top-0.5 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-[#22C55E] px-1 text-[10px] font-bold text-white">
                      {unreadCount}
                    </span>
                  )}
                </button>

                <AnimatePresence>
                  {notificationOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute right-0 top-12 z-50 w-80 rounded-2xl border border-[#7C5E3C]/10 bg-white p-4 shadow-xl"
                    >
                      <div className="mb-3 flex items-center justify-between">
                        <p className="text-sm font-semibold text-[#14532D]">Notifications</p>
                        <button onClick={markAllNotificationsRead} className="text-xs text-[#22C55E] hover:underline">
                          Mark all read
                        </button>
                      </div>
                      <div className="max-h-80 space-y-2 overflow-y-auto">
                        {notifications.length === 0 ? (
                          <p className="text-sm text-[#7C5E3C]">No notifications yet.</p>
                        ) : (
                          notifications.map((item) => (
                            <Link
                              key={item._id}
                              href={getNotificationHref(item)}
                              onClick={() => setNotificationOpen(false)}
                              className={`block rounded-xl border px-3 py-3 text-sm ${
                                item.read ? "border-[#7C5E3C]/10 bg-[#FAF3E0]/35" : "border-[#22C55E]/20 bg-[#22C55E]/5"
                              }`}
                            >
                              <p className="font-medium text-[#14532D]">{item.title}</p>
                              <p className="mt-1 text-[#7C5E3C]">{item.body}</p>
                            </Link>
                          ))
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )}

            {session ? (
              <div className="flex items-center gap-3 md:gap-5">
                <Link
                  href={role === "admin" ? "/admin/dashboard" : "/dashboard/client"}
                  className="hidden text-sm font-medium text-[#7C5E3C] transition-colors hover:text-[#22C55E] md:block"
                >
                  Dashboard
                </Link>

                <Link href="/dashboard/client/messages" className="hidden rounded-full p-2 transition-colors hover:bg-[#FAF3E0] md:block" aria-label="Messages">
                  <MessageSquare className="h-5 w-5 text-[#7C5E3C]" />
                </Link>

                <Link href="/dashboard/client/profile" className="flex items-center gap-2 transition-opacity hover:opacity-80">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#22C55E]/10">
                    <User className="h-4 w-4 text-[#22C55E]" />
                  </div>
                  <span className="hidden text-sm font-medium text-[#14532D] md:block">{session.user?.name?.split(" ")[0] || "User"}</span>
                </Link>

                <button
                  onClick={() => signOut({ callbackUrl: "/", redirect: true })}
                  className="flex items-center gap-2 text-sm text-[#7C5E3C] transition-colors hover:text-red-600"
                  aria-label="Logout"
                >
                  <LogOut className="h-4 w-4" />
                  <span className="hidden md:inline">Logout</span>
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-2 md:gap-3">
                <Link href="/signup" className="rounded-full border border-[#7C5E3C]/30 px-4 py-2 text-sm font-medium text-[#7C5E3C] transition hover:bg-[#FAF3E0]">
                  Register
                </Link>
                <Link href="/login" className="rounded-full bg-[#22C55E] px-5 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-[#16A34A]">
                  Login
                </Link>
              </div>
            )}

            <button onClick={() => setMobileMenuOpen(true)} className="rounded-full p-2 transition-colors hover:bg-[#FAF3E0] md:hidden" aria-label="Menu">
              <Menu className="h-5 w-5 text-[#14532D]" />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-50 bg-black/50"
              onClick={() => setMobileMenuOpen(false)}
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed bottom-0 right-0 top-0 z-50 flex w-80 flex-col bg-white shadow-xl"
            >
              <div className="flex items-center justify-between border-b border-[#7C5E3C]/10 p-5">
                <div className="flex items-center gap-2">
                  <Globe className="h-6 w-6 text-[#22C55E]" />
                  <span className="text-xl font-bold text-[#14532D]">
                    Journey<span className="text-[#22C55E]">Sync</span>
                  </span>
                </div>
                <button onClick={() => setMobileMenuOpen(false)} className="rounded-full p-2 transition hover:bg-[#FAF3E0]" aria-label="Close menu">
                  <X className="h-5 w-5 text-[#7C5E3C]" />
                </button>
              </div>

              <div className="flex-1 px-5 py-6">
                <nav className="flex flex-col gap-3">
                  {navLinks.map((link) => (
                    <Link key={link.href} href={link.href} onClick={() => setMobileMenuOpen(false)} className="py-2 text-base font-medium text-[#7C5E3C] transition hover:text-[#22C55E]">
                      {link.label}
                    </Link>
                  ))}
                  {session && (
                    <>
                      <Link href="/dashboard/client/messages" onClick={() => setMobileMenuOpen(false)} className="py-2 text-base font-medium text-[#7C5E3C] transition hover:text-[#22C55E]">
                        Private Messages
                      </Link>
                      <Link href="/dashboard/client/joinedTrips" onClick={() => setMobileMenuOpen(false)} className="py-2 text-base font-medium text-[#7C5E3C] transition hover:text-[#22C55E]">
                        Joined Trips
                      </Link>
                    </>
                  )}
                </nav>

                {!session && (
                  <div className="mt-6 flex flex-col gap-3 border-t border-[#7C5E3C]/10 pt-6">
                    <Link href="/register" onClick={() => setMobileMenuOpen(false)} className="rounded-full border border-[#7C5E3C]/30 py-2.5 text-center font-medium text-[#7C5E3C] transition hover:bg-[#FAF3E0]">
                      Register
                    </Link>
                    <Link href="/login" onClick={() => setMobileMenuOpen(false)} className="rounded-full bg-[#22C55E] py-2.5 text-center font-medium text-white transition hover:bg-[#16A34A]">
                      Login
                    </Link>
                  </div>
                )}
              </div>

              {session && (
                <div className="border-t border-[#7C5E3C]/10 p-5">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#22C55E]/10">
                      <User className="h-5 w-5 text-[#22C55E]" />
                    </div>
                    <div>
                      <p className="font-semibold text-[#14532D]">{session.user?.name}</p>
                      <p className="max-w-[180px] truncate text-xs text-[#7C5E3C]">{session.user?.email}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      signOut({ callbackUrl: "/", redirect: true });
                      setMobileMenuOpen(false);
                    }}
                    className="flex w-full items-center justify-center gap-2 rounded-full border border-red-200 py-2.5 text-red-600 transition hover:bg-red-50"
                  >
                    <LogOut className="h-4 w-4" />
                    Logout
                  </button>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

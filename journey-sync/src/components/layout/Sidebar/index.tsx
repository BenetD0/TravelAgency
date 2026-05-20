import Link from "next/link";
import { CirclePlus, Heart, LayoutDashboard, MessageSquare, Plane, User, Users } from "lucide-react";
import { useJoinedTrips } from "@/hooks/useJoinedTrips";

type Role = "admin" | "user";

type SidebarLink = {
  label: string;
  href: string;
  icon?: React.ReactNode;
};

type SidebarProps = {
  role: Role;
};

export default function Sidebar({ role }: SidebarProps) {
  const { joinedTrips } = useJoinedTrips();

  const links: SidebarLink[] =
    role === "admin"
      ? [
          { label: "Admin Dashboard", href: "/admin/dashboard", icon: <LayoutDashboard className="h-5 w-5" /> },
          { label: "Users", href: "/admin/dashboard", icon: <Users className="h-5 w-5" /> },
        ]
      : [
          { label: "Dashboard", href: "/dashboard/client", icon: <LayoutDashboard className="h-5 w-5" /> },
          { label: "My Trips", href: "/dashboard/client/myTrips", icon: <Plane className="h-5 w-5" /> },
          { label: "Add Trip", href: "/dashboard/client/addTrip", icon: <CirclePlus className="h-5 w-5" /> },
          { label: "Joined Trips", href: "/dashboard/client/joinedTrips", icon: <Users className="h-5 w-5" /> },
          { label: "Private Messages", href: "/dashboard/client/messages", icon: <MessageSquare className="h-5 w-5" /> },
          { label: "Favorite Trips", href: "/favorites", icon: <Heart className="h-5 w-5" /> },
          { label: "Profile", href: "/dashboard/client/profile", icon: <User className="h-5 w-5" /> },
        ];

  return (
    <aside className="min-h-full w-72 border-r border-[#7C5E3C]/15 bg-white p-4">
      <h2 className="mb-6 text-lg font-semibold text-[#14532D]">{role === "admin" ? "Admin Dashboard" : "User Dashboard"}</h2>

      <nav className="space-y-2">
        {links.map((link) => (
          <Link
            key={link.href + link.label}
            href={link.href}
            className="flex items-center gap-3 rounded px-3 py-2 text-sm text-[#7C5E3C] transition-colors hover:bg-[#FAF3E0] hover:text-[#14532D]"
          >
            {link.icon && <span className="text-[#7C5E3C]">{link.icon}</span>}
            {link.label}
          </Link>
        ))}
      </nav>

      {role === "user" && joinedTrips.length > 0 && (
        <div className="mt-8 rounded-2xl border border-[#7C5E3C]/10 bg-[#FAF3E0]/45 p-4">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#7C5E3C]">Joined trips</p>
          <div className="space-y-2">
            {joinedTrips.slice(0, 5).map((trip) => (
              <Link
                key={trip._id}
                href={`/dashboard/client/trips/${trip._id}`}
                className="block rounded-xl bg-white px-3 py-2 text-sm text-[#14532D] shadow-sm transition hover:bg-[#22C55E]/5"
              >
                <p className="font-medium">{trip.name}</p>
                <p className="text-xs text-[#7C5E3C]">{trip.destination}</p>
              </Link>
            ))}
          </div>
        </div>
      )}
    </aside>
  );
}

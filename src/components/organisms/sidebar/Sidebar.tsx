"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Session } from "next-auth";
import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
} from "@/components/ui/sidebar";
import {
  LayoutDashboard,
  Search,
  Book,
  History,
  BookOpen,
  ClipboardPen,
  User,
  ClipboardList,
  NotebookText,
  SearchCheck,
  Settings2,
  Users,
  CircleHelp,
  UserRoundSearch,
  Camera,
  Flame,
  Beef,
  BookText,
  CalendarFold,
  Dumbbell,
} from "lucide-react";
import { NavUser } from "./NavUser";

interface AppSidebarProps {
  session: Session;
}

export function AppSidebar({ session }: AppSidebarProps) {
  const pathname = usePathname();

  const buttonClass = (href: string) =>
    `hover:bg-primary/10 hover:text-primary dark:hover:bg-slate-900 ${
      pathname.startsWith(href)
        ? "bg-primary/10 text-primary dark:bg-slate-800"
        : ""
    }`;

  return (
    <Sidebar>
      {/* Header */}
      <SidebarHeader className="h-14 cursor-default justify-center border-b bg-white dark:bg-slate-950">
        <SidebarMenu>
          <SidebarMenuItem>
            <div className="ml-2 flex items-center gap-x-3">
              <Link href="/dashboard" className="flex items-center gap-2">
                <Image
                  src={"/images/logo/logo.png"}
                  alt="Fitbite"
                  width={25}
                  height={25}
                />
                <h1 className="font-semibold tracking-tight">Fitbite</h1>
              </Link>
            </div>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent className="bg-white dark:bg-slate-950">
        <SidebarGroup>
          <SidebarGroupLabel>Dashboard</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  className={`hover:bg-primary/10 hover:text-primary dark:hover:bg-slate-900 ${
                    pathname ===
                    (session?.user.role === "admin"
                      ? "/dashboard/admin"
                      : "/dashboard")
                      ? "bg-primary/10 text-primary dark:bg-slate-800"
                      : ""
                  }`}
                >
                  <Link
                    href={
                      session?.user.role === "admin"
                        ? "/dashboard/admin"
                        : "/dashboard"
                    }
                  >
                    <LayoutDashboard />
                    <span>
                      {session?.user.role === "admin"
                        ? "Dashboard Admin"
                        : "Dashboard"}
                    </span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {session?.user.role === "user" && (
          <>
            {/* Menu utama */}
            <SidebarGroup>
              <SidebarGroupLabel>Menu Utama</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {session?.user.role === "user" && (
                    <>
                      <SidebarMenuItem>
                        <SidebarMenuButton
                          asChild
                          className={buttonClass("/dashboard/scan")}
                        >
                          <Link href="/dashboard/scan">
                            <Camera />
                            <span>Scan Makanan</span>
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                      <SidebarMenuItem>
                        <SidebarMenuButton
                          asChild
                          className={buttonClass("/dashboard/calories")}
                        >
                          <Link href="/dashboard/calories">
                            <Flame />
                            <span>Kalori Harian</span>
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                      <SidebarMenuItem>
                        <SidebarMenuButton
                          asChild
                          className={buttonClass("/dashboard/plan")}
                        >
                          <Link href="/dashboard/plan">
                            <CalendarFold />
                            <span>Meal Plan</span>
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                      <SidebarMenuItem>
                        <SidebarMenuButton
                          asChild
                          className={buttonClass("/dashboard/progress")}
                        >
                          <Link href="/dashboard/progress">
                            <Dumbbell />
                            <span>Progress Mingguan</span>
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    </>
                  )}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </>
        )}

        {/* Admin-only groups */}
        {session?.user.role === "admin" && (
          <>
            {/* Konten */}
            <SidebarGroup>
              <SidebarGroupLabel>Manajemen Konten</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton
                      asChild
                      className={buttonClass("/dashboard/admin/question-banks")}
                    >
                      <Link href="/dashboard/admin/question-banks">
                        <BookOpen />
                        <span>Bank Soal</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton
                      asChild
                      className={buttonClass("/dashboard/admin/modules")}
                    >
                      <Link href="/dashboard/admin/modules">
                        <Book />
                        <span>Modul</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton
                      asChild
                      className={buttonClass("/dashboard/admin/sub-modules")}
                    >
                      <Link href="/dashboard/admin/sub-modules">
                        <NotebookText />
                        <span>Materi</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton
                      asChild
                      className={buttonClass("/dashboard/admin/screening")}
                    >
                      <Link href="/dashboard/admin/screening">
                        <SearchCheck />
                        <span>Screening</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton
                      asChild
                      className={buttonClass("/dashboard/admin/tests")}
                    >
                      <Link href="/dashboard/admin/tests">
                        <ClipboardPen />
                        <span>Pre & Post Test</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton
                      asChild
                      className={buttonClass("/dashboard/admin/discussions")}
                    >
                      <Link href="/dashboard/admin/discussions">
                        <Users />
                        <span>Forum Komunitas</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton
                      asChild
                      className={buttonClass("/dashboard/admin/faqs")}
                    >
                      <Link href="/dashboard/admin/faqs">
                        <CircleHelp />
                        <span>FAQ</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>

            {/* Laporan */}
            <SidebarGroup>
              <SidebarGroupLabel>Laporan</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton
                      asChild
                      className={buttonClass("/dashboard/admin/reports")}
                    >
                      <Link href="/dashboard/admin/reports">
                        <ClipboardList />
                        <span>Laporan Keseluruhan</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>

            {/* Pengguna */}
            <SidebarGroup>
              <SidebarGroupLabel>Manajemen Pengguna</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton
                      asChild
                      className={buttonClass("/dashboard/admin/users")}
                    >
                      <Link href="/dashboard/admin/users">
                        <User />
                        <span>Pengguna</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </>
        )}

        {/* Untuk role user */}
        {session?.user.role === "user" && (
          <SidebarGroup>
            <SidebarGroupLabel>Informasi</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton
                    asChild
                    className={buttonClass("/dashboard/food-menu")}
                  >
                    <Link href="/dashboard/food-menu">
                      <Beef />
                      <span>Menu Makanan</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton
                    asChild
                    className={buttonClass("/dashboard/blogs")}
                  >
                    <Link href="/dashboard/blogs">
                      <BookText />
                      <span>Artikel</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        )}

        {session?.user.role === "user" && (
          <SidebarGroup>
            <SidebarGroupLabel>Komunitas</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton
                    asChild
                    className={buttonClass("/dashboard/community")}
                  >
                    <Link href="/dashboard/community">
                      <Users />
                      <span>Forum Komunitas</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        )}

        <SidebarGroup>
          <SidebarGroupLabel>Pengaturan Akun</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  className={`hover:bg-primary/10 hover:text-primary dark:hover:bg-slate-900 ${
                    pathname === "/dashboard/settings"
                      ? "bg-primary/10 text-primary dark:bg-slate-800"
                      : ""
                  }`}
                >
                  <Link href="/dashboard/settings">
                    <Settings2 />
                    <span>Pengaturan</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      {/* Footer */}
      <SidebarFooter className="bg-white">
        <NavUser session={session} />
      </SidebarFooter>
    </Sidebar>
  );
}

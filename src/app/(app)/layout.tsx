'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarInset,
  SidebarTrigger,
} from '@/components/ui/sidebar';
import {
  CheckSquare,
  FlaskConical,
  Globe,
  HeartPulse,
  LayoutDashboard,
  Rss,
} from 'lucide-react';
import { Logo } from '@/components/logo';

const navItems = [
  { href: '/dashboard', label: 'Visual Inspector', icon: LayoutDashboard },
  { href: '/checklist', label: 'Risk Checklist', icon: CheckSquare },
  { href: '/protocol', label: 'Action Protocol', icon: HeartPulse },
  { href: '/toxicology', label: 'Toxicology', icon: FlaskConical },
  { href: '/travel', label: 'Travel Tips', icon: Globe },
  { href: '/alerts', label: 'Alerts', icon: Rss },
];

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader>
          <Logo />
        </SidebarHeader>
        <SidebarContent>
          <SidebarMenu>
            {navItems.map((item) => (
              <SidebarMenuItem key={item.href}>
                <Link href={item.href}>
                  <SidebarMenuButton
                    isActive={pathname === item.href}
                    tooltip={item.label}
                  >
                    <item.icon />
                    <span>{item.label}</span>
                  </SidebarMenuButton>
                </Link>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarContent>
      </Sidebar>
      <SidebarInset>
        <header className="flex h-14 items-center gap-4 border-b bg-card px-4 lg:h-[60px] lg:px-6">
          <SidebarTrigger className="md:hidden" />
          <h1 className="text-lg font-semibold md:text-2xl">
            {navItems.find((item) => item.href === pathname)?.label ||
              'Dashboard'}
          </h1>
        </header>
        <main className="flex-1 p-4 sm:p-6">{children}</main>
      </SidebarInset>
    </SidebarProvider>
  );
}

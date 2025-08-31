// src/components/ui/layout/TopNavbar.tsx
"use client";

import { siteConfig } from "@/config/site";
import { usePathname } from "next/navigation";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@heroui/react";
import BackButton from "@/components/ui/button/BackButton";
import { useWindowScroll } from "@mantine/hooks";
import ThemeSwitchDropdown from "../input/ThemeSwitchDropdown";
import FullscreenToggleButton from "../button/FullscreenToggleButton";
import Link from "next/link";
import { cn } from "@/utils/helpers";
import Brand from "../other/Brand";
import { Search } from "lucide-react";

const TopNavbar = () => {
  const pathName = usePathname();
  const [{ y }] = useWindowScroll();
  const opacity = Math.min((y / 1000) * 5, 1);

  const hrefs = siteConfig.navItems.map((item) => item.href);
  const show = hrefs.includes(pathName);
  const tv = pathName.includes("/tv/");
  const player = pathName.includes("/player");

  if (player) return null;

  return (
    <Navbar
      disableScrollHandler
      isBlurred={false}
      position="sticky"
      maxWidth="full"
      // ✅ Do NOT use "inset-0" on iOS; just stick to the top
      className={cn("top-0 h-20 md:h-24 bg-transparent transition-colors", {
        "bg-background": show,
      })}
      classNames={{
        // ✅ Mobile: remove outer margins (prevents clipping under iOS chrome)
        // add safe-area side padding so icons don't go under curved corners
        // ✅ Desktop: keep your original mx-10 exactly the same
        wrapper:
          "px-3 md:px-6 mx-0 md:mx-10 pl-[max(env(safe-area-inset-left),0px)] pr-[max(env(safe-area-inset-right),0px)]",
      }}
    >
      {/* Keep your scroll fade, but only visually (no layout shift). */}
      {!show && (
        <div
          className="absolute inset-0 h-full w-full border-b border-background bg-background"
          style={{ opacity }}
        />
      )}

      {/* Left: Brand + text-only nav links */}
      <NavbarBrand className="gap-5">
        {show ? (
          <>
            <Brand />
            <nav className="hidden items-center gap-5 md:flex">
              {siteConfig.navItems.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className={cn(
                    "text-base font-semibold tracking-wide hover:text-primary transition-colors",
                    pathName === href ? "text-primary" : "text-foreground/85"
                  )}
                >
                  {label}
                </Link>
              ))}
            </nav>
          </>
        ) : (
          <BackButton href={tv ? "/?content=tv" : "/"} />
        )}
      </NavbarBrand>

      {/* Right: search icon, theme switch, fullscreen */}
      <NavbarContent justify="end" className="items-center gap-3 md:gap-4">
        <NavbarItem>
          <Link
            href="/search"
            aria-label="Search"
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-transparent bg-white/10 backdrop-blur transition hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-primary/50"
          >
            <Search className="h-5 w-5" />
          </Link>
        </NavbarItem>
        <NavbarItem>
          <ThemeSwitchDropdown />
        </NavbarItem>
        <NavbarItem className="hidden md:block">
          <FullscreenToggleButton />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default TopNavbar;

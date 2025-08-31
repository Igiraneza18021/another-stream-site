// src/components/ui/layout/BottomNavbar.tsx
"use client";

import { siteConfig } from "@/config/site";
import clsx from "clsx";
import { Link } from "@heroui/link";
import { usePathname } from "next/navigation";
import { Chip } from "@heroui/chip";

const BAR_HEIGHT_PX = 56; // visual height of the bar (approx)

const BottomNavbar = () => {
  const pathName = usePathname();
  const hrefs = siteConfig.navItems.map((item) => item.href);
  const show = hrefs.includes(pathName);

  if (!show) return null;

  return (
    <>
      {/* Spacer so page content doesn't sit behind the bottom nav (mobile only). */}
      <div
        aria-hidden
        className="md:hidden"
        style={{
          // Bar height + iOS home-indicator safe area
          height: `calc(${BAR_HEIGHT_PX}px + env(safe-area-inset-bottom, 0px))`,
        }}
      />

      {/* Bottom navigation */}
      <nav
        className={clsx(
          "fixed bottom-0 left-0 right-0 z-[60] md:hidden",
          "border-t border-secondary-background",
          // Subtle translucency + blur so it reads over content but stays airy
          "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80"
        )}
        style={{
          // Ensure the bar clears the iOS home indicator area in Safari & PWA
          paddingBottom: "env(safe-area-inset-bottom, 0px)",
        }}
      >
        <div
          className="mx-auto grid max-w-lg grid-cols-5"
          style={{ minHeight: `${BAR_HEIGHT_PX}px` }}
        >
          {siteConfig.navItems.map((item) => {
            const isActive = pathName === item.href;
            return (
              <Link
                href={item.href}
                key={item.href}
                className="flex items-center justify-center text-foreground"
              >
                <div className="flex h-full w-full flex-col items-center justify-center gap-1 py-2">
                  <Chip
                    size="lg"
                    variant={isActive ? "solid" : "light"}
                    classNames={{
                      base: "py-[2px] transition-all",
                      content: "size-full",
                    }}
                  >
                    {isActive ? item.activeIcon : item.icon}
                  </Chip>
                  <p
                    className={clsx(
                      "text-[10px] leading-none",
                      { "font-bold": isActive }
                    )}
                  >
                    {item.label}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
};

export default BottomNavbar;

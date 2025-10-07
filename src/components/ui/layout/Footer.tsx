// src/components/ui/layout/Footer.tsx
"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-5 mt-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/discover?type=movie" className="hover:text-white">
                Discover Movies
              </Link>
            </li>
            <li>
              <Link href="/discover?type=tv" className="hover:text-white">
                Discover TV Shows
              </Link>
            </li>
            <li>
              <Link href="/watchlist" className="hover:text-white">
                Library
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-white">
                About Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Piular Categories */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Piular Categories</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/#today-trending-movies-list" className="hover:text-white">
                Today Trending Movies
              </Link>
            </li>
            <li>
              <Link href="/#this-week-trending-movies-list" className="hover:text-white">
                This Week Trending Movies
              </Link>
            </li>
            <li>
              <Link href="/#Piular-movies-list" className="hover:text-white">
                Piular Movies
              </Link>
            </li>
            <li>
              <Link href="/#now-playing-movies-list" className="hover:text-white">
                Now Playing Movies
              </Link>
            </li>
            <li>
              <Link href="/#upcoming-movies-list" className="hover:text-white">
                Upcoming Movies
              </Link>
            </li>
            <li>
              <Link href="/#top-rated-movies-list" className="hover:text-white">
                Top Rated Movies
              </Link>
            </li>
          </ul>
        </div>

        {/* Branding */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">About Pi Stream</h3>
          <p className="text-sm text-gray-400">
            PiP Stream brings you the latest trending, Piular, and upcoming movies and TV shows. 
            Stream, discover, and enjoy entertainment anytime.
          </p>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-700 mt-10 pt-5 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} PiP Stream. All rights reserved.
      </div>
    </footer>
  );
}

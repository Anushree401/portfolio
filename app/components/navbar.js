"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-gray-100 bg-white/80 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold text-gray-900">
              Brand<span className="text-blue-600">.</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="/projects" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">Projects</Link>
            <Link href="/internships" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">Internships</Link>
            <Link href="/skills" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">Skills</Link>
            <Link href="/leadership" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">Leadership</Link>
            <Link href="/contact" className="rounded-xl bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-800 transition-colors">
              Contact
            </Link>
          </div>

          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden border-b border-gray-100 bg-white px-4 pt-2 pb-4 space-y-1 shadow-lg animate-fadeIn">
          <Link href="/projects" onClick={() => setIsOpen(false)} className="block rounded-lg px-3 py-2 text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900">Projects</Link>
          <Link href="/internships" onClick={() => setIsOpen(false)} className="block rounded-lg px-3 py-2 text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900">Internships</Link>
          <Link href="/skills" onClick={() => setIsOpen(false)} className="block rounded-lg px-3 py-2 text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900">Skills</Link>
          <Link href="/leadership" onClick={() => setIsOpen(false)} className="block rounded-lg px-3 py-2 text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900">Leadership</Link>
          <div className="pt-2">
            <Link href="/contact" onClick={() => setIsOpen(false)} className="block w-full text-center rounded-xl bg-gray-900 px-4 py-2.5 text-base font-medium text-white hover:bg-gray-800">
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
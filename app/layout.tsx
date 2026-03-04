import "./globals.css";
import Link from "next/link";
import type { ReactNode } from "react";

export const metadata = {
  title: "SCIOS",
  description: "AI monitoring and automation infrastructure platform",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white">

        {/* NAVBAR */}
        <header className="flex justify-between items-center px-8 py-6 border-b border-gray-900">

          <Link href="/" className="text-xl font-bold">
            SCIOS
          </Link>

          <nav className="flex gap-6 text-sm text-gray-400">

            <Link href="/">Home</Link>

            <Link href="/pricing">Pricing</Link>

            <Link href="/manage">Billing</Link>

            <Link href="/contact">Contact</Link>

          </nav>

        </header>

        {/* PAGE CONTENT */}
        {children}

        {/* FOOTER */}
        <footer className="border-t border-gray-900 px-8 py-10 text-sm text-gray-500 mt-20">

          <div className="flex justify-between flex-wrap gap-6">

            <div>
              <p className="font-semibold text-white mb-2">SCIOS</p>
              <p>AI Monitoring & Automation Infrastructure</p>
            </div>

            <div className="flex flex-col gap-2">

              <Link href="/privacy">Privacy Policy</Link>

              <Link href="/terms">Terms of Service</Link>

            </div>

          </div>

          <div className="mt-6 text-center text-xs text-gray-600">
            SCIOS by Willis Hartin © {new Date().getFullYear()}
          </div>

        </footer>

      </body>
    </html>
  );
}

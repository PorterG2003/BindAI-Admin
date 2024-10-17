import type { Metadata } from "next";
import React from 'react';

// Import Amplify Backend
import { Amplify } from 'aws-amplify';
import outputs from '@/amplify_outputs.json';
Amplify.configure(outputs);

// Import and Load the Inter font from Google Fonts
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

// Import Components
import Header from "@/components/header";
import SidebarNavbar from "@/components/navbar";
import { AuthGuard } from '@/components/auth_guard';
import "./globals.css";

// Define metadata for the application
export const metadata: Metadata = {
  title: "Stitch | Create a Connector",
  description: "Stitch, the universal data transfer connector",
};

// Override console.warn to filter out specific warnings
const originalWarn = console.warn;

console.warn = (message, ...args) => {
  if (
    message.includes("Extra attributes from the server") &&
    (message.includes("data-new-gr-c-s-check-loaded") ||
      message.includes("data-gr-ext-installed"))
  ) {
    return; // Ignore the warning
  }
  originalWarn(message, ...args); // Otherwise, keep the default behavior
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* You can add any global head elements here */}
        <title>Stitch | Create a Connector</title>
      </head>
      <body className={`flex flex-col h-screen ${inter.className}`}>
        <AuthGuard>
          <Header />
        </AuthGuard>
        <div className="flex flex-grow min-h-0">
          <AuthGuard>
            <SidebarNavbar />
          </AuthGuard>

          <AuthGuard excludeRoutes={['/auth']}>
            <div className="flex-grow h-full overflow-y-auto">
              {children}
            </div>
          </AuthGuard>
        </div>
      </body>
    </html>
  );
}
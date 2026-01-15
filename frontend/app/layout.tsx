'use client';

import { AuthProvider } from '@/lib/auth';
import { ToastProvider } from '@/components/ToastProvider';
import { ReactNode } from 'react';
import '@/app/globals.css';

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <ToastProvider>
            <div className="min-h-screen bg-gray-50">
              {children}
            </div>
          </ToastProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
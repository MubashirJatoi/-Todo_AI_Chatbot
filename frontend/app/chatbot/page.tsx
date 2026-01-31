'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import Chatbot from '@/components/Chatbot';
import Navigation from '@/components/Navigation';

export default function ChatbotPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/auth');
    }
  }, [status, router]);

  if (status === 'loading') {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (status === 'unauthenticated') {
    return null; // Redirect effect handled by useEffect
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">AI Todo Assistant</h1>
          <p className="text-lg text-gray-600">
            Manage your tasks using natural language commands
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <Chatbot />
        </div>
      </div>
    </div>
  );
}
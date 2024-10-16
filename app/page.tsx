"use client";

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import Head from 'next/head';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Since auth is handled in layout, you can directly redirect here if needed
    router.push('/dashboard');
  }, [router]);

  return (
    <>
      <Head>
        <title>Stitch</title>
      </Head>
      <main className="flex flex-col items-center justify-center bg-white dark:bg-gray-800 text-black dark:text-gray-200 min-h-screen">
        <h1 className="text-2xl font-bold mb-4">Welcome to Stitch</h1>
        <h1 className="mt-4">Redirecting to Dashboard...</h1>
      </main>
    </>
  );
}
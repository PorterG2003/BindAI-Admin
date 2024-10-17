"use client";

import { getCurrentUser } from 'aws-amplify/auth';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { SignIn } from '@/components/sign_in';
import { SignUp } from '@/components/sign_up';
import { Amplify } from 'aws-amplify';
import outputs from '@/amplify_outputs.json';
Amplify.configure(outputs);

export default function AuthPage() {
  const router = useRouter();
  const [authState, setAuthState] = useState('loading');

  useEffect(() => {
    const checkUser = async () => {
      try {
        const userId = await getCurrentUser();
        if (userId) {
          setAuthState('signedIn');
        } else {
          setAuthState('signIn');
        }
      } catch {
        setAuthState('signIn');
      }
    };
    checkUser();
  }, []);

  useEffect(() => {
    if (authState === 'signedIn') {
      router.push('/dashboard');
    }
  }, [authState, router]);

  if (authState === 'loading') {
    return <div>Loading...</div>;
  }

  return (
    <>
      {authState === 'signIn' && <SignIn setAuthState={setAuthState} />}
      {authState === 'signUp' && <SignUp setAuthState={setAuthState} />}
    </>
  );
}
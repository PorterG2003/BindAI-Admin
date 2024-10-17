import { signIn, confirmSignIn } from 'aws-amplify/auth';
import { useState } from 'react';

export function SignIn({ authState, setAuthState }: { authState: string, setAuthState: (state: string) => void }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const handleSignIn = async () => {
    try {
      const { isSignedIn, nextStep} = await signIn({
        username: username,
        password: password,
      });
      if (isSignedIn) {
        setAuthState('signedIn');
      } else if (nextStep.signInStep === 'CONFIRM_SIGN_IN_WITH_NEW_PASSWORD_REQUIRED') {
        setAuthState('confirmSignInWithNewPasswordRequired');
      }
    } catch (err: unknown) {  // Ensure that TypeScript recognizes 'err' as an error object
      console.error('Sign-in error:', err); // Log the full error object for debugging
  
      // Set a user-friendly error message
      setError('Failed to sign in. Please check your credentials.');
    }
  };

  const handleConfirmSignIn = async () => {
    try {
      const { isSignedIn } = await confirmSignIn({ challengeResponse: newPassword });
      if (isSignedIn) {
        setAuthState('signedIn');
      }
    } catch (err) {
      console.error('Confirm sign-in error:', err);
      setError('Failed to confirm sign-in. Please try again.');
    }
  };

  if (authState === 'confirmSignInWithNewPasswordRequired') {
    return (
      <div className="flex flex-col w-full items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
        <h1 className="text-3xl font-semibold mb-6">Set New Password</h1>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md border border-gray-300 dark:border-gray-700">
          <input
            className="mb-4 p-3 w-full rounded bg-gray-200 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="New Password"
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <button
            className="w-full mt-4 bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition duration-200"
            onClick={handleConfirmSignIn}
          >
            Set New Password
          </button>
          {error && <p className="text-red-500 dark:text-red-400 mt-4">{error}</p>}
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col w-full items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <h1 className="text-3xl font-semibold mb-6">BindAI Admin</h1>
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md border border-gray-300 dark:border-gray-700">
        <input
          className="mb-4 p-3 w-full rounded bg-gray-200 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Email"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className="mb-4 p-3 w-full rounded bg-gray-200 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="w-full mt-4 bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition duration-200"
          onClick={handleSignIn}
        >
          Sign In
        </button>
        {error && <p className="text-red-500 dark:text-red-400 mt-4">{error}</p>}
      </div>
      <p className="mt-4 text-gray-500">
        Need an account? Talk to Porter.
      </p>
      <p className="mt-4 text-gray-500">
        If you don't know who Porter is, you probably don't need an account.
      </p>
    </div>
  );
}

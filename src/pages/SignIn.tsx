import { useState } from 'react';
import { Mail, Lock, ArrowRight } from 'lucide-react';
import { ParticleBackground } from '../components/ParticleBackground';

export function SignIn() {
  const [isSignIn, setIsSignIn] = useState(true);

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <ParticleBackground />
      <div className="w-full max-w-md p-8 space-y-8 bg-gray-800 rounded-lg border border-gray-700">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-cyan-400">
            {isSignIn ? 'Welcome Back' : 'Join CapsulCode'}
          </h2>
          <p className="mt-2 text-gray-400">
            {isSignIn
              ? 'Sign in to continue to your account'
              : 'Create an account to get started'}
          </p>
        </div>

        <form className="space-y-6">
          <div className="space-y-4">
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="email"
                placeholder="Email address"
                className="w-full pl-10 pr-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors text-white placeholder-gray-400"
              />
            </div>

            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="password"
                placeholder="Password"
                className="w-full pl-10 pr-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors text-white placeholder-gray-400"
              />
            </div>

            {!isSignIn && (
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="w-full pl-10 pr-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors text-white placeholder-gray-400"
                />
              </div>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-3 px-4 bg-cyan-600 hover:bg-cyan-500 text-white font-medium rounded-lg flex items-center justify-center space-x-2 transition-colors duration-200"
          >
            <span>{isSignIn ? 'Sign In' : 'Create Account'}</span>
            <ArrowRight className="h-5 w-5" />
          </button>
        </form>

        <div className="text-center">
          <button
            onClick={() => setIsSignIn(!isSignIn)}
            className="text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            {isSignIn
              ? "Don't have an account? Sign up"
              : 'Already have an account? Sign in'}
          </button>
        </div>
      </div>
    </div>
  );
}
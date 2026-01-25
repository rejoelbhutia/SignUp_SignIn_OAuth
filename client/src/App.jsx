import React, { useState, useEffect } from 'react';
import AnimatedCharacter from './components/AnimatedCharacter';
import SignInForm from './components/SignInForm';
import SignUpForm from './components/SignUpForm';

function App() {
  const [activeTab, setActiveTab] = useState('signin');
  const [characterState, setCharacterState] = useState('normal');
  const [activeReaction, setActiveReaction] = useState(null);

  const handleInputChange = (fieldName, value) => {
    // Update character state based on input
    if (fieldName === 'email' || fieldName === 'name') {
      if (value.length > 0) {
        setCharacterState('typing');
        setActiveReaction('typing');
      } else {
        setCharacterState('normal');
        setActiveReaction(null);
      }
    } else if (fieldName === 'password' || fieldName === 'confirmPassword') {
      if (value.length > 0) {
        setCharacterState('covering');
        setActiveReaction('secure');
      } else {
        setCharacterState('normal');
        setActiveReaction(null);
      }
    }
  };

  const handleFormSubmit = (formData) => {
    console.log('Form submitted:', formData);
    setCharacterState('happy');
    setActiveReaction('happy');

    // Reset after animation
    setTimeout(() => {
      setCharacterState('normal');
      setActiveReaction(null);
    }, 2000);
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setCharacterState('thinking');
    setActiveReaction('thinking');

    // Reset after animation
    setTimeout(() => {
      setCharacterState('normal');
      setActiveReaction(null);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      {/* Container with improved mobile structure */}
      <div className="min-h-screen flex flex-col lg:grid lg:grid-cols-2">

        {/* Left Side - Animated Character (Hidden on small mobile, visible on tablet+) */}
        <div className="hidden sm:flex relative bg-gradient-to-br from-purple-100 via-white to-pink-100 flex-col items-center justify-center p-6 sm:p-8 lg:p-12 overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0 -z-10 opacity-30">
            <div className="absolute w-full h-full animate-gradient-shift"
              style={{
                background: `
                  radial-gradient(circle at 20% 50%, rgba(139, 92, 246, 0.15) 0%, transparent 50%),
                  radial-gradient(circle at 80% 80%, rgba(236, 72, 153, 0.15) 0%, transparent 50%),
                  radial-gradient(circle at 40% 20%, rgba(59, 130, 246, 0.15) 0%, transparent 50%)
                `
              }}
            />
          </div>

          <AnimatedCharacter
            characterState={characterState}
            activeReaction={activeReaction}
          />

          <div className="mt-8 sm:mt-12 text-center z-10">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold gradient-text mb-3 sm:mb-4 animate-[fadeInUp_0.8s_ease]">
              Welcome {activeTab === 'signup' ? 'Aboard' : 'Back'}!
            </h1>
            <p className="text-gray-600 text-base sm:text-lg animate-[fadeInUp_0.8s_ease_0.2s_backwards] px-4">
              {activeTab === 'signup'
                ? 'Join us and start your journey today'
                : 'Please enter your details to continue'}
            </p>
          </div>
        </div>

        {/* Right Side - Forms (Full width on mobile) */}
        <div className="flex-1 flex items-center justify-center p-4 sm:p-6 lg:p-12">
          <div className="w-full max-w-md">

            {/* Mobile-only branding */}
            <div className="sm:hidden text-center mb-6">
              <h2 className="text-2xl font-bold gradient-text mb-2">
                {activeTab === 'signup' ? 'Create Account' : 'Welcome Back'}
              </h2>
              <p className="text-gray-600 text-sm">
                {activeTab === 'signup' ? 'Join us today' : 'Sign in to continue'}
              </p>
            </div>

            {/* Form Card */}
            <div className="glass rounded-2xl p-6 sm:p-8 lg:p-10 shadow-2xl">
              {/* Tabs */}
              <div className="relative flex gap-2 mb-6 sm:mb-8 bg-gray-100 rounded-xl p-1">
                <button
                  onClick={() => handleTabChange('signin')}
                  className={`flex-1 py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 relative z-10 ${activeTab === 'signin'
                      ? 'text-white'
                      : 'text-gray-600 hover:text-gray-800'
                    }`}
                >
                  Sign In
                </button>
                <button
                  onClick={() => handleTabChange('signup')}
                  className={`flex-1 py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 relative z-10 ${activeTab === 'signup'
                      ? 'text-white'
                      : 'text-gray-600 hover:text-gray-800'
                    }`}
                >
                  Sign Up
                </button>
                {/* Tab Indicator */}
                <div
                  className={`absolute top-1 bottom-1 w-[calc(50%-0.25rem)] gradient-primary rounded-lg transition-transform duration-300 ${activeTab === 'signup' ? 'translate-x-[calc(100%+0.5rem)]' : 'translate-x-0'
                    }`}
                  style={{ left: '0.25rem' }}
                />
              </div>

              {/* Forms */}
              {activeTab === 'signin' ? (
                <SignInForm
                  onInputChange={handleInputChange}
                  onSubmit={handleFormSubmit}
                />
              ) : (
                <SignUpForm
                  onInputChange={handleInputChange}
                  onSubmit={handleFormSubmit}
                />
              )}
            </div>

            {/* Mobile Footer */}
            <div className="sm:hidden text-center mt-6 text-xs text-gray-500">
              <p>By continuing, you agree to our Terms & Privacy Policy</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

import {
  ArrowLeftOnRectangleIcon,
  ArrowRightIcon,
  Bars3Icon,
} from '@heroicons/react/24/outline';

import { VideoCameraIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import React from 'react';

const LandingPage = () => {
  return (
    <div className="flex min-h-screen flex-col bg-[#F9FAFB]">
      <div className="grow">
        <div className="flex items-center justify-between border-b border-b-[#E5E7EB] bg-white px-4 py-3.5">
          <div className="flex items-center gap-0.5 sm:gap-4 lg:gap-0.5">
            <Image src="/dumbbell.png" width={32} height={32} alt="Dumbbell" />
            <span className="text-lg font-semibold">atletio</span>
          </div>

          <nav className="hidden lg:flex lg:gap-4">
            <span className="text-sm font-medium text-light hover:text-primary">
              Dashboard
            </span>
            <span className="text-sm font-medium text-light hover:text-primary">
              Workout
            </span>
            <span className="text-sm font-medium text-light hover:text-primary">
              Diet Plan
            </span>
            <span className="text-sm font-medium text-light hover:text-primary">
              Schedule
            </span>
          </nav>
          <Bars3Icon className="h-8 w-8 text-main lg:hidden" />
          <div className="hidden items-center gap-1.5 lg:flex">
            <ArrowLeftOnRectangleIcon className="h-8 w-8 text-main" />
            <span className="text-sm text-main">Register</span>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-6 bg-white p-4 md:px-4 md:py-16 lg:px-20 lg:py-24">
          <h1 className="text-center text-4xl font-extrabold text-main md:text-5xl lg:text-6xl">
            Get fit, stay motivated, and crush your goals with{' '}
            <span className="text-primary">atletio</span>!
          </h1>
          <span className="text-center text-xl text-light">
            No matter your goals, consistency and determination are key to
            achieving them
          </span>
          <div className="flex w-full flex-col  justify-center gap-4 md:flex-row">
            <button className="flex items-center justify-center gap-1 rounded-lg bg-primary px-6 py-3.5 text-white">
              Learn more <ArrowRightIcon className="h-4 w-4" />
            </button>
            <button className="flex items-center justify-center gap-1 rounded-lg border border-dark px-6 py-3.5 text-main">
              <VideoCameraIcon className="h-4 w-4" /> Watch Video
            </button>
          </div>
        </div>
      </div>

      <footer className="pt-8">
        <div className="border-t border-t-[#E5E7EB] bg-white p-6 sm:p-12 sm:py-8 lg:px-20">
          <span className="block text-center text-light">
            © 2021 atletio. All rights reserved.
          </span>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;

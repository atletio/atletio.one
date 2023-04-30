import {
  Bars3Icon,
  ArrowLeftOnRectangleIcon,
} from '@heroicons/react/24/outline';
import Image from 'next/image';

const LoginPage = () => {
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

        <div className="px-4 pt-8 sm:px-24 sm:pt-16 lg:flex lg:items-center lg:gap-24 lg:px-20">
          <div className="grow rounded-lg border border-[#E5E7EB] bg-white px-4 py-8 sm:p-8">
            <h1 className="text-2xl font-bold text-primary">Welcome back</h1>
            <div className="pt-2.5">
              <span className="text-sm font-medium text-light">
                Don&apos;t have an account?{' '}
                <span className="text-primary">Sign up</span>
              </span>
            </div>

            <form className="pt-6" method="POST">
              <div className="flex flex-col gap-5 sm:flex-row">
                <label className="flex w-full flex-col items-start">
                  <span className="pb-2 text-sm font-medium">Email</span>
                  <input
                    placeholder="Enter your email"
                    className="h-[2.625rem] w-full rounded-lg border border-[#D1D5DB] bg-[#F9FAFB] px-4 py-3 text-sm text-main"
                    type="email"
                  />
                </label>
                <label className="flex w-full flex-col items-start">
                  <span className="pb-2 text-sm font-medium">Password</span>
                  <input
                    placeholder="Enter your password"
                    className="h-[2.625rem] w-full rounded-lg border border-[#D1D5DB] bg-[#F9FAFB] px-4 py-3 text-sm text-main"
                    type="password"
                  />
                </label>
              </div>

              <div className="flex justify-between pt-6">
                <label className="flex gap-2">
                  <input type="checkbox" className="bg-red-400 text-red-400" />
                  <span className="flex text-xs font-medium text-light">
                    Remember me
                  </span>
                </label>

                <span className="text-xs font-medium text-primary">
                  Forgot password?
                </span>
              </div>

              <div className="pt-6">
                <button
                  type="submit"
                  className="w-full rounded-lg bg-primary px-4 py-3 text-base font-medium text-white"
                >
                  Sign in
                </button>
              </div>

              <div className="pt-5">
                <div className="relative">
                  <div
                    className="absolute inset-0 flex items-center"
                    aria-hidden="true"
                  >
                    <div className="w-full border-t border-[#E5E7EB]"></div>
                  </div>
                  <div className="relative flex justify-center">
                    <span className="bg-white px-2 text-base font-medium text-light">
                      or
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-3 pt-5">
                <button
                  type="button"
                  className="flex w-full justify-center gap-2 rounded-lg border border-[#E5E7EB] px-4 py-2.5 text-sm font-medium text-main"
                >
                  <Image
                    src="/google.png"
                    alt="google"
                    width={20}
                    height={20}
                  />
                  Log in with Google
                </button>
                <button
                  type="button"
                  className="flex w-full justify-center gap-2 rounded-lg border border-[#E5E7EB] px-4 py-2.5 text-sm font-medium text-main"
                >
                  <Image
                    src="/facebook.png"
                    alt="facebook"
                    width={20}
                    height={20}
                  />
                  Log in with Facebook
                </button>
              </div>
            </form>
          </div>

          <div className="hidden grow justify-center lg:flex">
            <Image
              src="/personal-trainer.svg"
              width={608}
              height={543}
              alt="personal-trainer"
            />
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

export default LoginPage;

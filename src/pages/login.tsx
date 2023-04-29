import {
  Bars3Icon,
  ArrowLeftOnRectangleIcon,
} from '@heroicons/react/24/outline';
import Image from 'next/image';

const LoginPage = () => {
  return (
    <div className="bg-[#F9FAFB] min-h-screen flex flex-col">
      <div className="grow">
        <div className="flex items-center justify-between px-4 py-3.5 bg-white border-b border-b-[#E5E7EB]">
          <div className="flex items-center gap-0.5 sm:gap-4 lg:gap-0.5">
            <Bars3Icon className="h-8 w-8 text-main lg:hidden" />
            <Image src="/dumbbell.png" width={32} height={32} alt="Dumbbell" />
            <span className="hidden lg:inline font-semibold text-lg">
              atletio
            </span>
          </div>

          <nav className="hidden lg:flex lg:gap-4">
            <span className="font-medium text-sm text-light hover:text-primary">
              Dashboard
            </span>
            <span className="font-medium text-sm text-light hover:text-primary">
              Workout
            </span>
            <span className="font-medium text-sm text-light hover:text-primary">
              Diet Plan
            </span>
            <span className="font-medium text-sm text-light hover:text-primary">
              Schedule
            </span>
          </nav>
          <div className="flex items-center gap-1.5">
            <ArrowLeftOnRectangleIcon className="h-8 w-8 text-main" />
            <span className="text-sm text-main">Register</span>
          </div>
        </div>

        <div className="pt-8 px-4 sm:pt-16 sm:px-24 lg:px-20 lg:flex lg:gap-24 lg:items-center">
          <div className="bg-white rounded-lg p-4 sm:p-8 border border-[#E5E7EB] grow">
            <div className="flex gap-2 items-center">
              <Image
                src="/dumbbell.png"
                width={32}
                height={32}
                alt="Dumbbell"
              />
              <span className="text-lg font-semibold">atletio</span>
            </div>

            <div className="pt-6">
              <h1 className="text-primary text-2xl font-bold">Welcome back</h1>
              <div className="pt-2.5">
                <span className="text-light text-sm font-medium">
                  Don&apos;t have an account?{' '}
                  <span className="text-primary">Sign up</span>
                </span>
              </div>

              <form className="pt-6" method="POST">
                <div className="flex flex-col sm:flex-row gap-5">
                  <label className="flex flex-col items-start w-full">
                    <span className="font-medium text-sm pb-2">Email</span>
                    <input
                      placeholder="Enter your email"
                      className="py-3 px-4 w-full bg-[#F9FAFB] rounded-lg border border-[#D1D5DB] text-main text-sm h-[2.625rem]"
                      type="email"
                    />
                  </label>
                  <label className="flex flex-col items-start w-full">
                    <span className="font-medium text-sm pb-2">Password</span>
                    <input
                      placeholder="Enter your password"
                      className="py-3 px-4 w-full bg-[#F9FAFB] rounded-lg border border-[#D1D5DB] text-main text-sm h-[2.625rem]"
                      type="password"
                    />
                  </label>
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
                      <span className="px-2 bg-white text-light font-medium text-base">
                        or
                      </span>
                    </div>
                  </div>
                </div>

                <div className="pt-5 flex flex-col gap-3">
                  <button className="text-sm font-medium text-main border border-[#E5E7EB] py-2.5 px-4 rounded-lg w-full flex gap-2 justify-center">
                    <Image
                      src="/google.png"
                      alt="google"
                      width={20}
                      height={20}
                    />
                    Log in with Google
                  </button>
                  <button className="text-sm font-medium text-main border border-[#E5E7EB] py-2.5 px-4 rounded-lg w-full flex gap-2 justify-center">
                    <Image
                      src="/facebook.png"
                      alt="facebook"
                      width={20}
                      height={20}
                    />
                    Log in with Facebook
                  </button>
                </div>

                <div className="pt-6 flex justify-between">
                  <label className="flex gap-2">
                    <input
                      type="checkbox"
                      className="bg-red-400 text-red-400"
                    />
                    <span className="flex text-light text-xs font-medium">
                      Remember me
                    </span>
                  </label>

                  <span className="text-primary text-xs font-medium">
                    Forgot password?
                  </span>
                </div>

                <div className="pt-6">
                  <button className="text-base font-medium text-white py-3 px-4 rounded-lg w-full bg-primary">
                    Sign in
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="hidden lg:flex justify-center grow">
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
        <div className="bg-white p-6 sm:p-12 sm:py-8 lg:px-20">
          <span className="text-light text-center sm:text-left block">
            © 2021 atletio. All rights reserved.
          </span>
        </div>
      </footer>
    </div>
  );
};

export default LoginPage;

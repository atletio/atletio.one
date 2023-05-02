import React from 'react';
import Image from 'next/image';

import {
  ArrowLeftOnRectangleIcon,
  ArrowRightIcon,
  Bars3Icon,
} from '@heroicons/react/24/outline';

import { VideoCameraIcon, CalendarIcon } from '@heroicons/react/24/solid';

const LandingPage = () => {
  return (
    <div className="flex min-h-screen flex-col bg-white">
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

        <div className="container mx-auto ">
          <div className="flex flex-col items-center justify-center gap-6 bg-white px-4 py-8  md:px-4 md:py-16 lg:px-20 lg:py-24">
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

          <div className="bg-white px-4 py-8 md:px-4 md:py-12 lg:px-20 lg:py-12">
            <div className="gap4 mx-auto flex max-w-4xl flex-col gap-4">
              <h1 className="text-4xl font-extrabold md:text-center">
                Popular Exercise
              </h1>
              <span className="text-base font-normal text-light md:text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
                esse quibusdam impedit explicabo, tempora corrupti iusto aliquam
                expedita, ab quisquam sequi nobis quos amet perspiciatis.
              </span>
            </div>

            <div className="grid grid-cols-1 place-items-center gap-y-4 pt-12 md:grid-cols-4 md:grid-rows-2 md:gap-4  lg:px-10 ">
              <Image
                src="/sport-1.png"
                alt="sport-1"
                height={400}
                width={400}
                style={{
                  height: '100%',
                  width: '100%',
                  objectFit: 'cover',
                }}
                className="rounded-lg"
              />
              <Image
                src="/sport-2.png"
                alt="sport-2"
                height={400}
                width={400}
                style={{ height: '100%', width: '100%', objectFit: 'cover' }}
                className="col-span-2 rounded-lg  "
              />
              <Image
                src="/sport-3.png"
                alt="sport-3"
                height={400}
                width={400}
                style={{ height: '100%', width: '100%', objectFit: 'cover' }}
                className="rounded-lg"
              />
              <Image
                src="/sport-4.png"
                alt="sport-4"
                height={400}
                width={400}
                style={{ height: '100%', width: '100%', objectFit: 'cover' }}
                className="col-span-2 rounded-lg"
              />
              <Image
                src="/sport-5.png"
                alt="sport-5"
                height={400}
                width={400}
                style={{ height: '100%', width: '100%', objectFit: 'cover' }}
                className="col-span-2 rounded-lg"
              />
            </div>
          </div>

          <div className="bg-white px-4 py-8 md:px-4 md:py-12 lg:px-20 lg:py-12">
            <div className="gap4 mx-auto flex max-w-4xl flex-col gap-4">
              <h1 className="text-center text-4xl font-extrabold">
                Why Choose Us ?
              </h1>
              <span className="text-center text-base font-normal text-light">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
                esse quibusdam impedit explicabo, tempora corrupti iusto aliquam
                expedita, ab quisquam sequi nobis quos amet perspiciatis.
              </span>

              <div className="flex flex-col items-center justify-around gap-12 pt-12 md:flex-row lg:justify-evenly">
                <div className="flex flex-col items-center justify-center p-2.5">
                  <span className="text-4xl font-extrabold">73K+</span>
                  <span className="text-base font-normal text-light">
                    Member
                  </span>
                </div>
                <div className="flex flex-col items-center justify-center p-2.5">
                  <span className="text-4xl font-extrabold">50+</span>
                  <span className="text-base font-normal text-light">
                    Programs
                  </span>
                </div>
                <div className="flex flex-col items-center justify-center p-2.5">
                  <span className="text-4xl font-extrabold">100+</span>
                  <span className="text-base font-normal text-light">
                    Trainers
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white px-4 py-8 md:px-4 md:py-12 lg:flex-col  lg:px-20 lg:py-12">
            <div className="lg:flex lg:items-center lg:justify-between lg:gap-12">
              <div className="flex flex-col gap-4 lg:max-w-xl">
                <h1 className="text-center text-4xl font-extrabold md:text-5xl lg:text-start lg:text-6xl">
                  <span className="text-primary">atletio</span> adapts to your
                  preferences, goals & progress.
                </h1>
                <span className="text-center text-base font-normal text-light lg:text-start">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
                  esse quibusdam impedit explicabo, tempora corrupti iusto
                  aliquam expedita, ab quisquam sequi nobis quos amet
                  perspiciatis.
                </span>
              </div>
              <div className="grid grid-cols-1 place-items-center gap-4 gap-x-9 pt-12 md:grid-cols-2 md:gap-y-5">
                <Image
                  src="/Banner-3.svg"
                  alt="Banner-1"
                  width={500}
                  height={130}
                />
                <Image
                  src="/Banner-4.svg"
                  alt="Banner-1"
                  width={500}
                  height={130}
                />
                <Image
                  src="/Banner-5.svg"
                  alt="Banner-1"
                  width={500}
                  height={130}
                />
                <Image
                  src="/Banner-2.svg"
                  alt="Banner-1"
                  width={500}
                  height={130}
                />
                <Image
                  src="/Banner-3.svg"
                  alt="Banner-1"
                  width={500}
                  height={130}
                />
                <Image
                  src="/Banner-4.svg"
                  alt="Banner-1"
                  width={500}
                  height={130}
                />
              </div>
            </div>
            <div className="flex flex-col gap-4 pt-12 md:flex-row md:justify-between">
              <div className="flex items-start gap-2.5">
                <CalendarIcon
                  width={24}
                  height={24}
                  className="mt-1 shrink-0 text-primary"
                />
                <div>
                  <h3 className="text-xl font-bold">Customizable Categories</h3>
                  <span className="pt-1.5 text-light">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Amet, dolores.
                  </span>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <CalendarIcon
                  width={24}
                  height={24}
                  className="mt-1 shrink-0 text-primary"
                />
                <div className="flex-1">
                  <h3 className="text-xl font-bold">Customizable Categories</h3>
                  <span className="pt-1.5 text-light">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Amet, dolores.
                  </span>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <CalendarIcon
                  width={24}
                  height={24}
                  className="mt-1 shrink-0 text-primary"
                />
                <div>
                  <h3 className="text-xl font-bold">Customizable Categories</h3>
                  <span className="pt-1.5 text-light">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Amet, dolores.
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white px-4 py-8 md:px-4 md:py-12 lg:px-20 lg:py-12">
            <div className="flex flex-col items-center justify-center gap-4">
              <div className="flex max-w-2xl flex-col gap-4 md:max-w-4xl ">
                <h1 className="text-start text-4xl font-extrabold md:text-center">
                  Testimonials
                </h1>
                <span className="text-start text-base font-normal text-light md:text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
                  esse quibusdam impedit explicabo, tempora corrupti iusto
                  aliquam expedita, ab quisquam sequi nobis quos amet
                  perspiciatis.
                </span>
              </div>

              <div className="flex flex-col">
                <div className="grid grid-cols-1 items-start gap-8 py-9  md:grid-cols-2 md:grid-rows-2 md:py-12 lg:grid-flow-row lg:grid-cols-3 lg:py-16">
                  {Array(6)
                    .fill('')
                    .map((_, index) => (
                      <div className="rounded-lg bg-[#F9FAFB] p-6" key={index}>
                        <div className="flex flex-col gap-5">
                          <span className="text-lg font-semibold text-main">
                            Solid foundation for any project
                          </span>
                          <span className="text-base font-normal text-light">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Vero, esse quibusdam impedit explicabo,
                            tempora corrupti iusto aliquam expedita, ab quisquam
                            sequi nobis quos amet perspiciatis.
                          </span>

                          <div className="flex gap-4">
                            <Image
                              src="/Avatar.png"
                              alt="Avatar"
                              width={32}
                              height={32}
                              style={{ objectFit: 'contain' }}
                            />
                            <div className="flex flex-col">
                              <span className="text-xl font-semibold text-main">
                                Roberta Casas
                              </span>
                              <span className="text-normal text-lg font-light text-light">
                                Web developer @themesberg
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
                <button className="w-full gap-1 rounded-lg border border-[#D1D5DB] px-5 py-2.5 text-main md:max-w-fit md:self-center">
                  View More
                </button>
              </div>
            </div>
          </div>

          <div className="bg-white px-4 py-8 md:px-4 md:py-12 lg:px-20 lg:py-12">
            <div className="gap4 flex flex-col gap-4 ">
              <h1 className="text-center text-4xl font-extrabold">
                Contact Us
              </h1>
              <span className="text-center text-base font-normal text-light">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
                esse quibusdam impedit explicabo
              </span>
            </div>

            <form className="mx-auto flex max-w-2xl flex-col gap-8 pt-8">
              <label className="flex flex-col gap-2 text-base font-medium">
                Your Email
                <input
                  className="rounded-lg border border-[#D1D5DB] bg-[#F9FAFB] px-5 py-3.5 text-sm font-normal text-main"
                  placeholder="name@atletio.com"
                  type="email"
                  required
                />
              </label>
              <label className="flex flex-col gap-2 text-base font-medium">
                Subject
                <input
                  className="rounded-lg border border-[#D1D5DB] bg-[#F9FAFB] px-5 py-3.5 text-sm font-normal text-main"
                  placeholder="Let us know how we can help you"
                />
              </label>
              <label className="flex flex-col gap-2 text-base font-medium">
                Message
                <textarea
                  className="min-h-[186px] rounded-lg border border-[#D1D5DB] bg-[#F9FAFB] px-5 py-3.5 text-sm font-normal text-main"
                  placeholder="Your message"
                />
              </label>

              <button
                type="submit"
                className="rounded-lg bg-primary px-5 py-3 text-white md:max-w-fit"
              >
                Send Message
              </button>
            </form>
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

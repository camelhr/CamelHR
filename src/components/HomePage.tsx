import { useState } from 'react'
import { Link } from 'react-router-dom'

import camelHRLogo from '../assets/camelhr-logo.svg'
import integrationSvg from '../assets/integration.svg'
import performanceSvg from '../assets/performance.svg'
import recruitmentSvg from '../assets/recruitment.svg'
import reportsSvg from '../assets/reports.svg'
import selfServiceSvg from '../assets/self-service.svg'
import teamSvg from '../assets/team.svg'
import timeTrackingSvg from '../assets/time-sheet.svg'
import trainingSvg from '../assets/training.svg'
import LoginModal from './LoginModal'

const HomePage = () => {
  const [toggleMenu, setToggleMenu] = useState<boolean>(false)
  const [loginModalOpen, setLoginModalOpen] = useState(false)

  return (
    <>
      <LoginModal open={loginModalOpen} setLoginModalOpen={setLoginModalOpen} />
      {/* nav section */}
      <nav className=" border-b-2 border-gray-200 bg-white dark:bg-gray-900">
        <div className="mx-auto flex max-w-screen-2xl flex-wrap items-center justify-between p-4">
          <a
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src={camelHRLogo} className="h-5 text-black" alt="CamelHR" />
          </a>
          <div className="flex space-x-3 md:order-2 md:space-x-0 rtl:space-x-reverse">
            <button
              type="button"
              className="mr-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
              onClick={() => setLoginModalOpen(true)}
            >
              Login
            </button>
            <Link
              to="/register"
              type="button"
              className="rounded-lg bg-indigo-500 px-4 py-2 text-center text-sm font-medium text-white hover:bg-indigo-800 focus:outline-none focus:ring-4 focus:ring-blue-100 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Register
            </Link>
            <button
              onClick={() => setToggleMenu(!toggleMenu)}
              data-collapse-toggle="navbar-default"
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 md:hidden dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-default"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-5 w-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className={`${toggleMenu ? '' : 'hidden'} w-full md:block md:w-auto`}
            id="navbar-default"
          >
            <ul className="mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 font-medium md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:p-0 rtl:space-x-reverse dark:border-gray-700 dark:bg-gray-800 md:dark:bg-gray-900">
              <li>
                <a
                  href="#main-pricing-plans"
                  className="block rounded px-3 py-2 text-gray-900 hover:bg-gray-100 md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
                >
                  Pricing
                </a>
              </li>
              <li>
                <Link
                  to="#"
                  className="block rounded px-3 py-2 text-gray-900 hover:bg-gray-100 md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
                >
                  Documentation
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="block rounded px-3 py-2 text-gray-900 hover:bg-gray-100 md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="block rounded px-3 py-2 text-gray-900 hover:bg-gray-100 md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
                >
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* hero section */}
      <div className="relative isolate px-6 pt-8 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        ></div>
        <div className="mx-auto max-w-screen-xl">
          <div className="hidden sm:flex sm:justify-center">
            <div className="relative">
              <img className="rounded-2xl" src="/hero.jpg" alt="" />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black to-[percentage:120%] opacity-50"></div>
              <div className="absolute bottom-0 left-0 p-12">
                <h1 className="text-5xl font-bold text-white">
                  Manage your team with CamelHR
                </h1>
                <p className="my-4 text-lg text-white">
                  A cloud based human resource management system
                </p>
                <Link
                  to="/register"
                  className="mb-12 mt-6 rounded-lg bg-indigo-500 px-4 py-2 text-center text-sm font-medium text-white shadow-sm shadow-indigo-950/10 hover:bg-indigo-600 focus:outline-none focus:ring-4 focus:ring-blue-100 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Get started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* features section */}
      <div className="relative isolate px-6 pt-8 lg:px-8">
        <div className="mx-auto max-w-screen-xl">
          <h2 className="mb-6 text-3xl font-bold text-gray-800 dark:text-gray-300">
            People management made simple
          </h2>
          <p className="mb-8 text-gray-600 dark:text-gray-400">
            Experience the simplicity and efficiency of our platform designed
            with user-friendly features that makes managing your HR processes a
            breeze. CamelHR is the perfect solution for small and medium
            businesses. Our platform is designed to help you manage your team
            efficiently by providing you with the necessary tools.
            <br /> Below is an overview of some of the core features of our
            platform.
          </p>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
            <div className="rounded-lg bg-white p-6 shadow-lg dark:bg-gray-800">
              <div className="flex items-center justify-center p-10">
                <img
                  src={selfServiceSvg}
                  className="w-full max-w-72"
                  alt="Employee Self-Service"
                />
              </div>
              <h3 className="mb-2 text-xl font-bold text-gray-800 dark:text-gray-300">
                Employee Self-Service
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Simplify HR processes and empower employees with a user-friendly
                self-service portal. Allow them to update personal information,
                submit time off requests, access important documents, and view
                their benefits in one convenient location.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-lg dark:bg-gray-800">
              <div className="flex items-center justify-center p-10">
                <img
                  src={teamSvg}
                  className="w-full max-w-72"
                  alt="Team Management"
                />
              </div>
              <h3 className="mb-2 text-xl font-bold text-gray-800 dark:text-gray-300">
                Team Management
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Effortlessly manage your team with our team management feature.
                Invite employees to join a team, assign roles and permissions,
                and manage team members with ease. Keep your team organized and
                productive with our intuitive tools.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-lg dark:bg-gray-800">
              <div className="flex items-center justify-center p-10">
                <img
                  src={timeTrackingSvg}
                  className="w-full max-w-72"
                  alt="Time Tracking"
                />
              </div>
              <h3 className="mb-2 text-xl font-bold text-gray-800 dark:text-gray-300">
                Time Tracking
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Effortlessly manage employee work hours with our intuitive time
                tracking module. Track time on tasks and projects to ensure
                accurate payroll processing and real-time visibility into
                employee productivity.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-lg dark:bg-gray-800">
              <div className="flex items-center justify-center p-10">
                <img
                  src={performanceSvg}
                  className="w-full max-w-72"
                  alt="Performance Management"
                />
              </div>
              <h3 className="mb-2 text-xl font-bold text-gray-800 dark:text-gray-300">
                Performance Management
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Foster a culture of continuous improvement and growth with our
                performance management feature. Set goals, conduct evaluations,
                provide feedback, and identify development opportunities to
                maximize employee potential and drive performance.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-lg dark:bg-gray-800">
              <div className="flex items-center justify-center p-10">
                <img
                  src={trainingSvg}
                  className="w-full max-w-72"
                  alt="Training and Development"
                />
              </div>
              <h3 className="mb-2 text-xl font-bold text-gray-800 dark:text-gray-300">
                Training and Development
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Invest in your employees professional growth and skill
                development with our training and development module. Schedule,
                track, and evaluate training programs to enhance employee
                capabilities, boost engagement, and support career advancement.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-lg dark:bg-gray-800">
              <div className="flex items-center justify-center p-10">
                <img
                  src={recruitmentSvg}
                  className="w-full max-w-72"
                  alt="Recruitment and Onboarding"
                />
              </div>
              <h3 className="mb-2 text-xl font-bold text-gray-800 dark:text-gray-300">
                Recruitment and Onboarding
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Simplify your recruitment process and streamline onboarding for
                new hires. Post job openings, receive applications, schedule
                interviews, and seamlessly onboard new employees with our
                all-in-one recruitment and onboarding solution.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-lg dark:bg-gray-800">
              <div className="flex items-center justify-center p-10">
                <img
                  src={reportsSvg}
                  className="w-full max-w-72"
                  alt="Advanced Reporting"
                />
              </div>
              <h3 className="mb-2 text-xl font-bold text-gray-800 dark:text-gray-300">
                Advanced Reporting
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Gain valuable insights and make data-driven decisions with our
                advanced reporting tools. Access customizable reports,
                analytics, and key HR metrics to track performance, monitor
                trends, and optimize HR strategies for organizational success.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-lg dark:bg-gray-800">
              <div className="flex items-center justify-center p-10">
                <img
                  src={integrationSvg}
                  className="w-full max-w-72"
                  alt="App Integration"
                />
              </div>
              <h3 className="mb-2 text-xl font-bold text-gray-800 dark:text-gray-300">
                App Integration
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Integrate with your favorite apps and tools to streamline your
                HR processes and enhance productivity. Use our API to connect
                with other platforms and create a seamless workflow that meets
                your unique business needs.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* pricing plans section */}
      <div
        id="main-pricing-plans"
        className="relative isolate px-6 pt-8 lg:px-8"
      >
        <div className="mx-auto max-w-screen-xl">
          <h2 className="mb-6 text-3xl font-bold text-gray-800 dark:text-gray-300">
            Choose the plan that works for you
          </h2>
          <PricingTable />
        </div>
      </div>

      {/* footer section */}
      <footer className="relative z-10 mt-12 overflow-hidden border-t-2 bg-gray-100 px-4 dark:bg-gray-900">
        <div className="container mx-auto py-12">
          <div className="flex w-full flex-row items-center justify-between">
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">
                Company
              </h2>
              <ul className="font-medium text-gray-500 dark:text-gray-400">
                <li className="mb-4">
                  <a href="#" className=" hover:underline">
                    About
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Careers
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">
                Help center
              </h2>
              <ul className="font-medium text-gray-500 dark:text-gray-400">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Twitter
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Youtube
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">
                Legal
              </h2>
              <ul className="font-medium text-gray-500 dark:text-gray-400">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Licensing
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Terms &amp; Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 text-sm text-gray-500 dark:text-gray-300">
            © 2024 <a href="/">CamelHR™</a>. All Rights Reserved.
          </div>
        </div>
      </footer>
    </>
  )
}

export default HomePage

interface PricingTabProps {
  annual: boolean
  popular?: boolean
  planName: string
  price: {
    monthly: number
    annual: number
  }
  planDescription: string
  features: string[]
}

function PricingTab(props: PricingTabProps) {
  return (
    <div className={`h-full ${props.popular ? 'dark' : ''}`}>
      <div className="relative flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow shadow-slate-950/5 dark:border-slate-900 dark:bg-slate-900">
        {props.popular && (
          <div className="absolute right-0 top-0 -mt-4 mr-6">
            <div className="inline-flex items-center rounded-full bg-orange-300 px-3 py-1.5 text-xs font-semibold text-white shadow-sm shadow-slate-950/5">
              Most Popular
            </div>
          </div>
        )}
        <div className="mb-5">
          <h2 className="mb-1 text-2xl font-bold text-slate-900 dark:text-slate-200">
            {props.planName}
          </h2>
          <div className="mb-2 inline-flex items-baseline">
            <span className="text-3xl font-bold text-slate-900 dark:text-slate-200">
              $
            </span>
            <span className="text-4xl font-bold text-slate-900 dark:text-slate-200">
              {props.annual ? props.price.annual : props.price.monthly}
            </span>
            <span className="font-medium text-slate-500">
              per user per month
            </span>
          </div>
          <div className="mb-5 text-sm text-slate-500">
            {props.planDescription}
          </div>
          <Link
            to="/register"
            className="inline-flex w-full justify-center whitespace-nowrap rounded-lg bg-indigo-500 px-3.5 py-2.5 text-center text-sm font-medium text-white shadow-sm shadow-indigo-950/10 hover:bg-indigo-600 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600"
          >
            Get Started
          </Link>
        </div>
        <div className="mb-3 font-medium text-slate-900 dark:text-slate-200">
          Includes:
        </div>
        <ul className="grow space-y-3 text-sm text-slate-600 dark:text-slate-400">
          {props.features.map((feature, index) => {
            return (
              <li key={index} className="flex items-center">
                <svg
                  className="mr-3 h-3 w-3 shrink-0 fill-emerald-500"
                  viewBox="0 0 12 12"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                </svg>
                <span>{feature}</span>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

function PricingTable() {
  const [annual, setAnnual] = useState<boolean>(true)

  return (
    <div>
      {/* Pricing toggle */}
      <div className="m-auto my-8 flex max-w-[14rem] justify-center">
        <div className="relative flex w-full rounded-full bg-gray-100 p-1 dark:bg-slate-900">
          <span
            className="pointer-events-none absolute inset-0 m-1"
            aria-hidden="true"
          >
            <span
              className={`absolute inset-0 w-1/2 transform rounded-full bg-indigo-500 shadow-sm shadow-indigo-950/10 transition-transform duration-150 ease-in-out ${annual ? 'translate-x-0' : 'translate-x-full'}`}
            ></span>
          </span>
          <button
            className={`relative h-8 flex-1 rounded-full text-sm font-medium transition-colors duration-150 ease-in-out focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 ${annual ? 'text-white' : 'text-slate-500 dark:text-slate-400'}`}
            onClick={() => setAnnual(true)}
            aria-pressed={annual}
          >
            Annual{' '}
            <span
              className={`${annual ? 'text-indigo-200' : 'text-slate-400 dark:text-slate-500'}`}
            >
              -20%
            </span>
          </button>
          <button
            className={`relative h-8 flex-1 rounded-full text-sm font-medium transition-colors duration-150 ease-in-out focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 ${annual ? 'text-slate-500 dark:text-slate-400' : 'text-white'}`}
            onClick={() => setAnnual(false)}
            aria-pressed={annual}
          >
            Monthly
          </button>
        </div>
      </div>

      <div className="mx-auto grid max-w-sm items-start gap-6 lg:max-w-none lg:grid-cols-3">
        {/* Pricing tab 1 */}
        <PricingTab
          annual={annual}
          planName="Free"
          price={{ annual: 0, monthly: 0 }}
          planDescription="Designed for small teams getting started with HR management. Limited to 5 employees."
          features={[
            'Upto 5 employees',
            'Timesheet',
            'Leave management',
            'Team management',
            'User roles & permissions',
          ]}
        />

        {/* Pricing tab 2 */}
        <PricingTab
          annual={annual}
          planName="Starter"
          price={{ annual: 4, monthly: 5 }}
          planDescription="Built for growing teams that need more advanced HR features."
          features={[
            'Unlimited employees',
            'Timesheet',
            'Leave management',
            'Team management',
            'User roles & permissions',
            'Benefits administration',
            'Performance management',
          ]}
        />

        {/* Pricing tab 3 */}
        <PricingTab
          annual={annual}
          popular={true}
          planName="Premium"
          price={{ annual: 8, monthly: 10 }}
          planDescription="Ideal for established businesses looking for comprehensive HR solutions with advanced features."
          features={[
            'Unlimited employees',
            'Timesheet',
            'Leave management',
            'Team management',
            'User roles & permissions',
            'Benefits administration',
            'Performance management',
            'Employee training and development',
            'Advanced reporting',
            'Priority support',
          ]}
        />
      </div>
    </div>
  )
}

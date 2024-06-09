import { FC } from 'react'
import { useState } from 'react'

const LoginPage: FC = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="mx-auto flex flex-col items-center justify-center px-6 py-8 md:h-screen lg:py-0">
        <div className="w-full rounded-lg bg-white shadow sm:max-w-md md:mt-0 xl:p-0 dark:border dark:border-gray-700 dark:bg-gray-800">
          <div className="space-y-4 p-6 sm:p-8 md:space-y-6">
            <form className="space-y-4 md:space-y-6" action="#" method="POST">
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >
                  Email address
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={email}
                    autoComplete="email"
                    className="focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 sm:text-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    placeholder="name@company.com"
                    required
                    onChange={handleEmailChange}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <div className="mt-1">
                  <input
                    id="password"
                    type="password"
                    name="password"
                    value={password}
                    autoComplete="current-password"
                    className="focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 sm:text-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    placeholder="••••••••"
                    required
                    onChange={handlePasswordChange}
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="mr-4 flex h-5 items-center">
                  <input
                    id="remember-me"
                    name="remember_me"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="remember-me"
                      className="font-light text-gray-500 dark:text-gray-300"
                    >
                      Remember me
                    </label>
                  </div>
                </div>

                <div className="ml-4 text-sm">
                  <a
                    href="#"
                    className="text-primary-600 dark:text-primary-500 font-medium hover:underline"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Sign in
                </button>
              </div>
            </form>
            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300 dark:border-gray-400"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="rounded-sm bg-gray-100 px-2 text-gray-500 dark:bg-gray-300">
                    Or continue with
                  </span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-12">
                <div>
                  <a
                    href="/login/google"
                    className="group relative flex items-center justify-center rounded-md border border-gray-400 bg-white px-4 py-2 text-sm font-medium text-black hover:bg-gray-200 focus:outline-none focus:ring-2  focus:ring-offset-2 dark:bg-gray-700 dark:text-gray-400"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height={20}
                      width={20}
                      viewBox="-0.5 0 48 48"
                    >
                      <g fill="none" fillRule="evenodd">
                        <path
                          fill="#FBBC05"
                          d="M9.8 24c0-1.5.3-3 .7-4.4l-7.9-6a23.5 23.5 0 0 0 0 20.8l8-6c-.5-1.4-.8-2.9-.8-4.4"
                        />
                        <path
                          fill="#EB4335"
                          d="M23.7 10.1c3.3 0 6.3 1.2 8.7 3.1l6.8-6.8a23.4 23.4 0 0 0-36.6 7.2l8 6c1.8-5.5 7-9.5 13.1-9.5"
                        />
                        <path
                          fill="#34A853"
                          d="M23.7 37.9c-6.2 0-11.3-4-13.2-9.5l-7.9 6A23.4 23.4 0 0 0 39 41.6l-7.5-5.8c-2.1 1.3-4.8 2-7.8 2"
                        />
                        <path
                          fill="#4285F4"
                          d="M46.1 24c0-1.4-.2-2.9-.5-4.3H23.7v9.1h12.6c-.6 3-2.3 5.5-4.8 7l7.5 5.8c4.3-4 7.1-10 7.1-17.6"
                        />
                      </g>
                    </svg>
                    <span className="ml-2">Google</span>
                  </a>
                </div>
                <div>
                  <a
                    href="/login/linkedin"
                    className="group relative flex items-center justify-center rounded-md border border-gray-400 bg-white px-4 py-2 text-sm font-medium text-black hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 dark:bg-gray-700 dark:text-gray-400"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height={20}
                      width={20}
                      viewBox="0 -2 44 44"
                    >
                      <path
                        fill="#007EBB"
                        fillRule="evenodd"
                        d="M44 40h-9.7V26c0-3.7-1.5-6.3-4.9-6.3-2.5 0-4 1.7-4.6 3.4-.3.6-.2 1.4-.2 2.2V40h-9.7V12.8h9.7v4.3c.5-1.9 3.6-4.5 8.5-4.5 6.1 0 10.9 3.9 10.9 12.3V40ZM5.2 9.4C2 9.4 0 7.4 0 4.7S2 0 5.2 0s5.1 2 5.2 4.7c0 2.6-2 4.7-5.2 4.7Zm-4 3.4h8.5V40H1V12.8Z"
                      />
                    </svg>
                    <span className="ml-2">Linkedin</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LoginPage

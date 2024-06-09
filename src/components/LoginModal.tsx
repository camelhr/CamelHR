import { FC, useState } from 'react'

import infoIcon from '../assets/icon-info.svg'

interface LoginModalProps {
  open: boolean
  setLoginModalOpen: (open: boolean) => void
}

const LoginModal: FC<LoginModalProps> = ({ open, setLoginModalOpen }) => {
  const [subdomain, setSubdomain] = useState('')

  const handleOrgSubdomainChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.setCustomValidity('')
    setSubdomain(e.target.value)
  }

  const handleInvalidOrgSubdomain = (
    e: React.InvalidEvent<HTMLInputElement>,
  ) => {
    if (e.target.validity.patternMismatch) {
      e.target.setCustomValidity(
        'Subdomain should only contain alphanumeric characters',
      )
    }
  }

  const redirectToSubdomain = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const host = window.location.host
    const protocol = window.location.protocol
    const subdomainURL = `${protocol}//${subdomain}.${host}/login`
    window.location.href = subdomainURL
  }

  return (
    open && (
      <div
        tabIndex={-1}
        aria-hidden="true"
        className="fixed left-0 right-0 top-0 z-50 flex max-h-full w-full items-center justify-center overflow-y-auto overflow-x-hidden backdrop-brightness-50 backdrop-contrast-50 md:inset-0"
      >
        <div className="relative max-h-full w-full max-w-md p-4">
          <div className="relative rounded-lg bg-white shadow dark:bg-gray-700">
            <div className="flex items-center justify-between rounded-t border-b p-4 md:p-5 dark:border-gray-600">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Sign in to your organization's account
              </h3>
              <button
                type="button"
                className="end-2.5 ms-auto inline-flex h-8 w-8 items-center justify-center rounded-lg bg-transparent text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
                onClick={() => setLoginModalOpen(false)}
              >
                <svg
                  className="h-3 w-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            <div className="p-4 md:p-5">
              <form className="space-y-4" onSubmit={redirectToSubdomain}>
                <div>
                  <label
                    htmlFor="organization-subdomain"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    <span className="flex items-center">
                      Organization subdomain
                      <span
                        data-tip="Subdomain is used to access your organization's account. e.g., https://<subdomain>.camelhr.com"
                        className="tooltip ml-1 text-gray-500 dark:text-gray-400"
                      >
                        <img src={infoIcon} alt="Info" className="h-5" />
                      </span>
                    </span>
                  </label>
                  <input
                    type="text"
                    name="organization_subdomain"
                    id="organization-subdomain"
                    value={subdomain}
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400"
                    placeholder="Enter your organization's subdomain. e.g. org123"
                    required
                    minLength={3}
                    maxLength={30}
                    pattern="^[a-zA-Z0-9]+$"
                    onChange={handleOrgSubdomainChange}
                    onInvalid={handleInvalidOrgSubdomain}
                  />
                  {subdomain && (
                    <p className="mt-2 text-sm text-green-600 dark:text-green-500">
                      {`${window.location.protocol}//${subdomain}.${window.location.host}/login`}
                    </p>
                  )}
                </div>
                <button
                  type="submit"
                  className="w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Go to organization's login page
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  )
}

export default LoginModal

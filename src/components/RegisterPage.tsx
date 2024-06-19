import { FC, useState } from 'react'

import infoIcon from '../assets/icon-info.svg'
import LoginModal from './LoginModal'
import { useAppDispatch, useAppSelector } from '../state/hooks'
import { registerAsync } from '../state/authSlice'
import { APIStatusType } from '../state/common'
import tadaSVG from '../assets/tada.svg'

const RegisterPage: FC = () => {
  const dispatch = useAppDispatch()
  const [loginModalOpen, setLoginModalOpen] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [orgName, setOrgName] = useState('')
  const [orgSubdomain, setOrgSubdomain] = useState('')
  const [registrationSuccess, setRegistrationSuccess] = useState(false)
  const apiStatus = useAppSelector((state) => state.auth.status)
  const apiErrorMsg = useAppSelector((state) => state.auth.errorMessage)
  const passwordValidationMessage =
    'Password must contain at least one uppercase, one lowercase, one number, and one special character'

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.setCustomValidity('')
    setPassword(e.target.value)
  }

  const handleInvalidPassword = (e: React.InvalidEvent<HTMLInputElement>) => {
    if (e.target.validity.patternMismatch) {
      e.target.setCustomValidity(passwordValidationMessage)
    }
  }

  const handleConfirmPasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    if (e.target.value !== password) {
      e.target.setCustomValidity('Passwords do not match')
    } else {
      e.target.setCustomValidity('')
    }
  }

  const handleOrgNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.setCustomValidity('')
    setOrgName(e.target.value)
  }

  const handleInvalidOrgName = (e: React.InvalidEvent<HTMLInputElement>) => {
    if (e.target.validity.patternMismatch) {
      e.target.setCustomValidity(
        'Organization name should only contain ASCII characters',
      )
    }
  }

  const handleOrgSubdomainChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.setCustomValidity('')
    setOrgSubdomain(e.target.value)
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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch(
      registerAsync({
        email,
        password,
        orgSubdomain,
        orgName,
      }),
    ).then(() => {
      setRegistrationSuccess(true)
    })
  }

  return (
    <>
      <LoginModal open={loginModalOpen} setLoginModalOpen={setLoginModalOpen} />
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="mx-auto flex flex-col items-center justify-center px-6 py-8 md:h-screen lg:py-0">
          <div className="w-full rounded-lg bg-white shadow sm:max-w-md md:mt-0 xl:p-0 dark:border dark:border-gray-700 dark:bg-gray-800">
            <div className="space-y-4 p-6 sm:p-8 md:space-y-6">
              {registrationSuccess ? (
                <div className="flex flex-col items-center justify-center">
                  <img
                    src={tadaSVG}
                    alt="Registration Successful"
                    className="h-24 w-24 sm:h-32 sm:w-32 md:h-40 md:w-40"
                  />
                  <h1 className="text-center text-xl font-bold text-gray-700 md:text-xl dark:text-white">
                    Registration is successful!
                  </h1>
                  <h4>
                    Your organization '{orgName}' is currently in review. We
                    will reach out to you shortly. Thank you for your patience.
                  </h4>
                </div>
              ) : (
                <>
                  <h1 className="text-xl font-bold text-gray-700 md:text-xl dark:text-white">
                    Create organization's account
                  </h1>
                  {apiStatus['registerAsync'] == APIStatusType.FAIL &&
                    apiErrorMsg && (
                      <div className="text-red-500">{apiErrorMsg}</div>
                    )}
                  <form
                    className="space-y-4 md:space-y-6"
                    onSubmit={handleSubmit}
                  >
                    <div className="relative mt-2 w-full">
                      <label
                        htmlFor="email"
                        className="absolute left-1 top-1 z-10 -translate-y-4 scale-95 transform cursor-text select-none rounded-md bg-white px-2 text-sm font-medium text-gray-600 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600 dark:bg-gray-800 dark:text-white"
                      >
                        Email address
                      </label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        value={email}
                        className="focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 sm:text-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                        placeholder="name@company.com"
                        required
                        onChange={handleEmailChange}
                      />
                    </div>
                    <div className="relative mt-2 w-full">
                      <input
                        id="password"
                        type="password"
                        name="password"
                        placeholder="••••••••"
                        value={password}
                        className="focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 sm:text-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                        required
                        minLength={8}
                        maxLength={32}
                        pattern="(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z0-9]).*"
                        onChange={handlePasswordChange}
                        onInvalid={handleInvalidPassword}
                      />
                      <label
                        htmlFor="password"
                        className="absolute left-1 top-1 z-10 -translate-y-4 scale-95 transform cursor-text select-none rounded-md bg-white px-2 text-sm font-medium text-gray-600 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600 dark:bg-gray-800 dark:text-white"
                      >
                        <span className="flex items-center">
                          Password
                          <span
                            data-tip={passwordValidationMessage}
                            className="tooltip ml-1 text-gray-500 dark:text-gray-400"
                          >
                            <img src={infoIcon} alt="Info" className="h-5" />
                          </span>
                        </span>
                      </label>
                    </div>
                    <div className="relative mt-2 w-full">
                      <input
                        id="confirm-password"
                        type="password"
                        name="confirm-password"
                        placeholder="••••••••"
                        className="focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 sm:text-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                        required
                        onChange={handleConfirmPasswordChange}
                      />
                      <label
                        htmlFor="confirm-password"
                        className="absolute left-1 top-1 z-10 -translate-y-4 scale-95 transform cursor-text select-none rounded-md bg-white px-2 text-sm font-medium text-gray-600 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600 dark:bg-gray-800 dark:text-white"
                      >
                        Confirm password
                      </label>
                    </div>
                    <div className="relative mt-2 w-full">
                      <input
                        id="organization-name"
                        type="text"
                        name="organization_name"
                        value={orgName}
                        className="focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 sm:text-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                        placeholder="XYZ Inc."
                        required
                        maxLength={60}
                        pattern="^[\x00-\x7F]+$"
                        onChange={handleOrgNameChange}
                        onInvalid={handleInvalidOrgName}
                      />
                      <label
                        htmlFor="organization-name"
                        className="absolute left-1 top-1 z-10 -translate-y-4 scale-95 transform cursor-text select-none rounded-md bg-white px-2 text-sm font-medium text-gray-600 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600 dark:bg-gray-800 dark:text-white"
                      >
                        Organization name
                      </label>
                    </div>
                    <div className="relative mt-2 w-full">
                      <input
                        id="organization-subdomain"
                        type="text"
                        name="organization_subdomain"
                        value={orgSubdomain}
                        className="focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 sm:text-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                        placeholder="org123"
                        required
                        minLength={3}
                        maxLength={30}
                        pattern="^[a-zA-Z0-9]+$"
                        onChange={handleOrgSubdomainChange}
                        onInvalid={handleInvalidOrgSubdomain}
                      />

                      <label
                        htmlFor="organization-subdomain"
                        className="absolute left-1 top-1 z-10 -translate-y-4 scale-95 transform cursor-text select-none rounded-md bg-white px-2 text-sm font-medium text-gray-600 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600 dark:bg-gray-800 dark:text-white"
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
                    </div>
                    <div className="flex items-start">
                      <div className="flex h-5 items-center">
                        <input
                          id="terms"
                          type="checkbox"
                          aria-describedby="terms"
                          className="focus:ring-3 focus:ring-primary-300 dark:focus:ring-primary-600 h-4 w-4 rounded border border-gray-300 bg-gray-50 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800"
                          required
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label
                          htmlFor="terms"
                          className="font-light text-gray-500 dark:text-gray-300"
                        >
                          I accept the{' '}
                          <a
                            className="text-primary-600 dark:text-primary-500 font-medium hover:underline"
                            href="#"
                          >
                            Terms and Conditions
                          </a>
                        </label>
                      </div>
                    </div>
                    <button
                      type="submit"
                      disabled={
                        apiStatus['registerAsync'] === APIStatusType.LOADING
                      }
                      className="bg-primary-600 hover:bg-primary-700 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 w-full rounded-lg bg-indigo-500 px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4"
                    >
                      Register
                    </button>
                    <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                      Already registered?{' '}
                      <button
                        type="button"
                        className="text-primary-600 dark:text-primary-500 font-medium hover:underline"
                        onClick={() => setLoginModalOpen(true)}
                      >
                        Login here
                      </button>
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default RegisterPage

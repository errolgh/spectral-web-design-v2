import * as React from 'react'
import Layout from '../components/Layout'
import { IoLogoFacebook } from 'react-icons/io5'
import { IoLogoTwitter } from 'react-icons/io5'
import { IoLogoLinkedin } from 'react-icons/io5'
import { IoLogoInstagram } from 'react-icons/io5'
import { IoCall } from 'react-icons/io5'
import { IoMailSharp } from 'react-icons/io5'
import { IoLocationSharp } from 'react-icons/io5'
import { Link } from 'gatsby'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import FeatherOpen from '../images/svg/feather-open.svg'

// @TODO: once netlify is connected, check gatsby docs for anything else

// const onSubmit = (data) => netlify.handleSubmit(null, data)

// const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i
const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const schema = yup.object().shape({
  name: yup.string().required('Your Name is required'),
  business: yup.string().required('Your Business is required'),
  email: yup.string().email().required('Email Address is required'),
  number: yup.string().matches(phoneRegExp, 'Phone number is not valid'),
  message: yup.string(),
})

const ContactPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  // handleSubmit & netlify-forms both provide a "data" object
  const onSubmit = (data) => {
    console.log('first', data)
  }
  return (
    <Layout>
      <section className="flex mt-24 md:mt-32 min-h-full mb-2 md:mb-24 justify-center items-center">
        <div className="flex flex-col space-y-6 w-full max-w-6xl p-8 md:flex-row md:space-x-6 md:space-y-0">
          <div className="relative flex flex-col justify-between space-y-8 md:p-12 lg:p-6">
            <div>
              <h1 id="contact" className="font-bold tracking-wide text-4xl">
                {' '}
                Contact Us
              </h1>
              <p className="pt-2 text-sm">
                Filling out this form will notify our someone from our team. Let
                us know what your needs are so we can provide what we do best!
              </p>
            </div>
            <div className="flex flex-col space-y-6">
              <div className="inline-flex space-x-2 items-center">
                <IoCall className="text-teal-500 text-xl" />
                <span>(908) 472-1977</span>
              </div>
              <div className="inline-flex space-x-2 items-center">
                <IoMailSharp className="text-teal-500 text-xl" />
                <span>errolwatsondev@gmail.com</span>
              </div>
              <div className="inline-flex space-x-2 items-center">
                <IoLocationSharp className="text-teal-500 text-xl" />
                <span>Remote</span>
              </div>
            </div>
            <div className="flex text-lg space-x-4 text-teal-500">
              <Link to="/">
                <IoLogoFacebook />
              </Link>
              <Link to="/">
                <IoLogoTwitter />
              </Link>
              <Link to="/">
                <IoLogoLinkedin />
              </Link>
              <Link to="/">
                <IoLogoInstagram />
              </Link>
            </div>
          </div>
          <div>
            <div className="relative bg-white shadow-lg rounded-xl p-8 text-gray-600 h-full">
              <FeatherOpen className="absolute scale-150 -z-10 rotate-6 -left-20 top-48" />
              <form
                className="flex flex-col space-y-2 text-sm md:w-80"
                onSubmit={handleSubmit(onSubmit)}
                onSubmitt="submit"
                name="contact v1"
                method="POST"
                netlify
              >
                {/* name input */}
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-1 focus:ring-efferBlue"
                    {...register('name')}
                  ></input>
                  <span className="pl-3 text-red-500">
                    {errors.name?.message}
                  </span>
                </div>
                {/* business input */}
                <div>
                  <input
                    type="text"
                    name="business"
                    placeholder="Your Business"
                    className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-1 focus:ring-efferBlue"
                    {...register('business')}
                  ></input>
                  <span className="pl-3 text-red-500">
                    {errors.business?.message}
                  </span>
                </div>
                {/* email input */}
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-1 focus:ring-efferBlue"
                    {...register('email')}
                  ></input>
                  <span className="pl-3 text-red-500">
                    {errors.email?.message}
                  </span>
                </div>
                {/* phone input */}
                <div>
                  <input
                    type="text"
                    name="phone"
                    placeholder="Phone Number"
                    className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-1 focus:ring-efferBlue"
                    {...register('phone')}
                  ></input>
                  <span className="pl-3 text-red-500">
                    {errors.phone?.message}
                  </span>
                </div>
                {/* message input */}
                <div>
                  <textarea
                    rows="4"
                    name="message"
                    placeholder="Type your message here."
                    className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-1 focus:ring-efferBlue"
                    {...register('message')}
                  ></textarea>
                  <span className="pl-3 text-red-500">
                    {errors.message?.message}
                  </span>
                </div>

                <button
                  type="submit"
                  className="inline-block w-full md:w-auto self-end bg-efferBlue font-bold text-white rounded-lg px-6 py-2 uppercase"
                >
                  Send
                </button>
                {/* as per netlify forms: */}
                <input
                  type="hidden"
                  value="contact v1"
                  className="hidden"
                  name="contact"
                />
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

// Step 3: Export your component
export default ContactPage

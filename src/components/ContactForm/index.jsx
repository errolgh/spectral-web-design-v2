import React, { useState, useRef } from 'react';
import {
  // IoLogoFacebook,
  // IoLogoInstagram,
  // IoLogoTwitter,
  // IoLogoLinkedin,
  IoCall,
  IoMailSharp,
  IoLocationSharp,
} from 'react-icons/io5';
import emailjs from '@emailjs/browser';
// import { Link } from 'gatsby';
import * as yup from 'yup';
import FeatherOpen from '../../images/svg/feather-open.svg';
import { useFormik } from 'formik';

const phoneRegExp = /^(\+\d{1,4}[\s-]?)?(\(\d{2,3}\)[\s-]?)?[\d\s-]{3,15}$/;

const ContactForm = () => {
  const form = useRef();
  const [buttonText, setButtonText] = useState('Send');
  const [disableSubmit, setDisableSubmit] = useState(false);

  const sendEmail = () => {
    setButtonText('Sending...');
    emailjs
      .sendForm(
        process.env.SERVICE_ID,
        process.env.TEMPLATE_ID,
        form.current,
        process.env.PUBLIC_KEY
      )
      .then(
        () => {
          console.log('SUCCESS!');
          formik.handleReset();
          setButtonText('Sent!');
          setDisableSubmit(true);
        },
        (error) => {
          console.log('FAILED...', error);
          setButtonText('Error :(');
          setDisableSubmit(false);
        }
      );
  };

  const formik = useFormik({
    initialValues: {
      name: '',
      business: '',
      email: '',
      phone: '',
      message: '',
    },
    onSubmit: sendEmail,
    validationSchema: yup.object({
      name: yup
        .string()
        .max(40, 'Name must be 40 characters or less.')
        .required('Your name is required.'),
      business: yup
        .string()
        .max(60, 'Business Name must be 60 characters or less.'),
      email: yup
        .string()
        .email()
        .max(60, 'Your email must be 60 characters or less.')
        .required('Your email address is required.'),
      phone: yup
        .string()
        .matches(phoneRegExp, 'Phone number is not valid')
        .required('Phone number is required'),
      message: yup
        .string()
        .max(700, 'Your message must be 700 characters or less.'),
    }),
  });

  return (
    <section className="flex mb-20 md:mt-6 min-h-full md:mb-24 justify-center items-center">
      <div className="flex flex-col space-y-6 w-full max-w-5xl p-8 md:flex-row md:space-x-6 md:space-y-0">
        <div className="relative flex flex-col justify-between space-y-8 md:p-12 lg:p-6">
          <div>
            <h1 id="contact"> Contact Us</h1>
            <p className="pt-4">
              Filling out this form will notify our someone from our team. Let
              us know what your needs are so we can provide what we do best!
            </p>
          </div>
          <div className="flex flex-col space-y-6">
            <a href="sms:+14432652555">
              <div className="inline-flex space-x-2 items-center">
                <IoCall className="text-teal-500 text-xl" />
                <span className="text-gray-600">(443) 265-2555</span>
              </div>
            </a>
            <a href="mailto:info@gratefulwebdesigns.com">
              <div className="inline-flex space-x-2 items-center">
                <IoMailSharp className="text-teal-500 text-xl" />
                <span className="text-gray-600">info@GratefulWebDesigns</span>
              </div>
            </a>
            <div className="inline-flex space-x-2 items-center">
              <IoLocationSharp className="text-teal-500 text-xl" />
              <span className="text-gray-600">Remote</span>
            </div>
          </div>
          {/* <div className="flex text-lg space-x-4 text-teal-500">
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
          </div> */}
        </div>
        <div>
          <div className="relative bg-white shadow-lg rounded-xl p-8 text-gray-600 h-full">
            <FeatherOpen className="absolute scale-150 -z-10 rotate-6 -left-20 top-48" />
            <form
              className="flex flex-col space-y-2 text-sm md:w-80"
              onSubmit={formik.handleSubmit}
              ref={form}
            >
              {/* name input */}
              <div>
                <input
                  type="text"
                  name="name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="Your first & last name"
                  className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-1 focus:ring-efferBlue"
                ></input>
                <label className="pl-3 text-red-500">
                  {formik.errors.name &&
                    formik.touched.name &&
                    formik.errors.name}
                </label>
              </div>
              {/* business input */}
              <div>
                <input
                  type="text"
                  name="business"
                  value={formik.values.business}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="Your business (optional)"
                  className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-1 focus:ring-efferBlue"
                ></input>
                <label className="pl-3 text-red-500">
                  {formik.errors.business &&
                    formik.touched.business &&
                    formik.errors.business}
                </label>
              </div>
              {/* email input */}
              <div>
                <input
                  type="email"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="Email address"
                  className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-1 focus:ring-efferBlue"
                ></input>
                <label className="pl-3 text-red-500">
                  {formik.errors.email &&
                    formik.touched.email &&
                    formik.errors.email}
                </label>
              </div>
              {/* phone input */}
              <div>
                <input
                  type="text"
                  name="phone"
                  value={formik.values.phone}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="Phone number"
                  className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-1 focus:ring-efferBlue"
                ></input>
                <label className="pl-3 text-red-500">
                  {formik.errors.phone &&
                    formik.touched.phone &&
                    formik.errors.phone}
                </label>
              </div>
              {/* message input */}
              <div>
                <textarea
                  rows="4"
                  name="message"
                  value={formik.values.message}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="Type your message here."
                  className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-1 focus:ring-efferBlue"
                ></textarea>
                <label className="text-red-500">
                  {formik.errors.message &&
                    formik.touched.message &&
                    formik.errors.message}
                </label>
                <div className="mt-1 text-right">
                  <span
                    className={`text-xs ${
                      formik.values.message.length > 700
                        ? 'text-red-500'
                        : 'text-gray-400'
                    }`}
                  >
                    {`${formik.values.message.length}/700`}
                  </span>
                </div>
              </div>
              {/* Submission Elements */}
              <button
                disabled={disableSubmit}
                type="submit"
                className="inline-block w-full md:w-auto self-end bg-efferBlue font-bold text-white rounded-lg px-6 py-2 uppercase"
              >
                {buttonText}
              </button>
              {/* as per netlify forms: */}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;

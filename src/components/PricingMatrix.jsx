import React from 'react';
import { Link } from 'gatsby';
import Button from './Button';
import FeatherOpen from '../images/svg/feather-open.svg';

export default function PricingMatrix() {
  return (
    <section id="pricing" className="relative">
      <FeatherOpen className="absolute -z-10 rotate-90 -top-44 scale-150" />
      <div className=" container max-w-6xl mx-auto">
        <div className="flex flex-col items-center mt-32">
          <h2 className="text-4xl font-bold text-gray-700">Our Pricing</h2>
          <cite className="text-xl text-gray-700">(per month)</cite>
        </div>
        <div className="text-gray-700 price-boxes">
          <div className="price-box">
            <h3 className='text-center'>Standard</h3>
            <span>Up to 5 Pages</span>
            <p>$149</p>
            <ul>
              <li>Unlimited Edits</li>
              <li>Includes Hosting</li>
              <li>24/7 Customer Service</li>
              <li>Lifetime Updates</li>
            </ul>
            <Link to="/services">
              <Button order="primary">Learn More</Button>
            </Link>
          </div>

          <div className="price-box price-box-premium">
            <h3 className='text-center'>Standard + GBP Management</h3>
            <span>Starting At</span>
            <p>$199</p>
            <ul>
              <li>Everything Included in Standard</li>
              <li>Google Analytics</li>
              <li>Ongoing Google Business Profile Optimization</li>
              <li>Google Maps & Listing Management</li>
            </ul>
            <Link to="/services">
              <Button order="primary">Learn More</Button>
            </Link>
          </div>

          <div className="price-box">
            <h3 className='text-center'>Google Business Profile Audit</h3>
            <span>Right Now it's</span>
            <p>FREE</p>
            <ul>
              <li>Keyword Optimization</li>
              <li>Audience Targeting</li>
              <li>Profile Creation & Writing</li>
              <li>Error Identification</li>
            </ul>
            <Link to="/services">
              <Button order="primary">Learn More</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

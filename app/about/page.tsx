// pages/about.tsx

import { getUser } from "@/actions/user/getUser";
import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const AboutPage =async () => {
    const data=await getUser()
  return (
   <div>
    <Header activeItem={2} user={data?.user } isSellerExist={data?.shop?true:false}/>
        <div className="min-h-screen flex flex-col text-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20 px-5">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-5">
            About Our Marketplace
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            Welcome to our AI-driven prompt marketplace, the ultimate destination
            for creators, entrepreneurs, and visionaries to explore and sell
            cutting-edge AI prompts.
          </p>
        </div>
      </section>


      <section className="py-16 px-5">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            Why Choose Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6  rounded-lg shadow-lg text-center">
              <h3 className="text-2xl font-semibold mb-4">Innovative Prompts</h3>
              <p>
                Discover unique, high-quality AI prompts crafted by talented
                sellers to supercharge your creativity.
              </p>
            </div>
            <div className="p-6  rounded-lg shadow-lg text-center">
              <h3 className="text-2xl font-semibold mb-4">Secure Transactions</h3>
              <p>
                Buy and sell with confidence through our secure platform and
                reliable payment systems.
              </p>
            </div>
            <div className="p-6  rounded-lg shadow-lg text-center">
              <h3 className="text-2xl font-semibold mb-4">Global Community</h3>
              <p>
                Connect with a vibrant global community of AI enthusiasts,
                entrepreneurs, and innovators.
              </p>
            </div>
          </div>
        </div>
      </section>


      <section className="py-16  px-5">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Sirazul monir", role: "Founder", image: "https://res.cloudinary.com/dfng3w9jm/image/upload/v1737220719/profile/315100994_10209906491094779_654405519663392346_n_axklsy.jpg" },
              { name: "Muhammad RAJA", role: "Product Manager", image: "https://res.cloudinary.com/dfng3w9jm/image/upload/v1737221207/profile/d2a54a36-0025-4332-8339-c1eef1b5eb70.png" },
              { name: "Muhammad Badhon", role: "Tech Lead", image: "https://res.cloudinary.com/dfng3w9jm/image/upload/v1737220875/profile/471258664_2255659494814304_2573653259977591654_n_ror3sz.jpg" },
            ].map((teamMember, index) => (
              <div key={index} className="p-6  rounded-lg shadow-lg text-center">
                <Image
                  src={teamMember.image}
                  alt={teamMember.name}
                  height={500}
                  width={500}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-2xl font-semibold">{teamMember.name}</h3>
                <p className="text-gray-600">{teamMember.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-500 text-white text-center">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-5">
            Ready to Join the Marketplace?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Start buying or selling prompts today and unleash the full potential
            of AI. Whether you&apos;re a creator or a customer, we&apos;ve got you
            covered.
          </p>
          <Link
            href="/"
            className="inline-block  text-lime-500  px-8 py-4 rounded-lg text-[25px] font-semibold hover:bg-gray-100"
          >
            Get Started
          </Link>
        </div>
      </section>
    </div>
   </div>
  );
};

export default AboutPage;

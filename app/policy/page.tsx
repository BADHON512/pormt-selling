import { getUser } from "@/actions/user/getUser";
import Header from "@/components/Header";

import React from "react";

const PolicyPage = async() => {
    const data=await getUser()
  return (
<div>
<Header activeItem={4} user={data?.user } isSellerExist={data?.shop?true:false}/>
<div className="min-h-screen bg-[#030015] text-white flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-purple-700 to-indigo-800 text-white py-20 px-5">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-5">Our Policies</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            Explore our commitments to transparency, fairness, and customer satisfaction.
          </p>
        </div>
      </section>

      {/* Policy Details Section */}
      <section className="py-16 px-5">
        <div className="container mx-auto max-w-5xl">
          <div className="mb-12">
            <h2 className="text-3xl font-semibold mb-4">Terms of Service</h2>
            <p className="text-gray-300 leading-relaxed">
              By using our platform, you agree to comply with our terms and conditions. These include but are not limited to responsible use, respecting intellectual property rights, and adhering to our policies for prompt transactions.
            </p>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-semibold mb-4">Privacy Policy</h2>
            <p className="text-gray-300 leading-relaxed">
              We value your privacy. All user data is securely stored and used only to improve your experience on our platform. We do not share your personal information with third parties without consent.
            </p>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-semibold mb-4">Refund Policy</h2>
            <p className="text-gray-300 leading-relaxed">
              Refunds are available under specific circumstances, such as non-delivery of services or violation of our terms by a seller. Please contact support for assistance.
            </p>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-semibold mb-4">Community Guidelines</h2>
            <p className="text-gray-300 leading-relaxed">
              We promote a positive and collaborative community. Harassment, discrimination, or misuse of the platform is strictly prohibited and may result in account suspension.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-indigo-800 to-purple-700 text-center">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-5">Need Assistance?</h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto text-gray-200">
            If you have questions or concerns about our policies, feel free to reach out to our support team.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-indigo-800 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-200 transition duration-300"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
</div>
  );
};

export default PolicyPage;

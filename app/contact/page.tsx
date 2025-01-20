// pages/contact.tsx
import { getUser } from "@/actions/user/getUser";
import Header from "@/components/Header";
import { Input, Textarea } from "@nextui-org/react";
import React from "react";

const ContactPage =async() => {
        const data=await getUser()
  return (
   <div className="">
    <Header activeItem={3} user={data?.user } isSellerExist={data?.shop?true:false}/>
<div className="min-h-screen  flex flex-col">

      <section className="relative bg-gradient-to-r from-green-500 to-blue-600 text-white py-20 px-5">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-5">
            Get in Touch
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            Have questions, feedback, or need help? We’re here for you! Reach out to us using the form below or through our contact details.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 px-5">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            Contact Us
          </h2>
          <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
            <form action="#" method="POST">
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Your Name
                </label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  required
               
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Your Email
                </label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  required
           
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Your Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
          
                ></Textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-16  px-5">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            Our Contact Information
          </h2>
          <div className="flex flex-wrap justify-around">
            <div className="text-center mb-8">
              <h3 className="text-xl font-semibold mb-2">Email Us</h3>
              <p className="text-gray-600">badhon2020year@gmail.com</p>
            </div>
            <div className="text-center mb-8">
              <h3 className="text-xl font-semibold mb-2">Call Us</h3>
              <p className="text-gray-600"> (+088) 01712124128</p>
            </div>
            <div className="text-center mb-8">
              <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
              <p className="text-gray-600">
                123 Prompt Street, Tangail city, AI World
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-500 text-white text-center">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-5">
            We’re Here to Help!
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Feel free to reach out with any questions or feedback. We’re excited to connect with you!
          </p>
        </div>
      </section>
    </div>
   </div>
  );
};

export default ContactPage;

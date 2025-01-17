"use client"
import Ratings from '@/Utils/Ratings'
import { Styles } from '@/Utils/style'
import { Button, Chip } from '@nextui-org/react'
import Image from 'next/image'
import React, { useState } from 'react'
import Marquee from 'react-fast-marquee'
import { IoCloseOutline } from 'react-icons/io5'
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from './CheckoutForm'

type Props = {
  promptData: any
  stripePromise:any
  clientSecret:string
}

const PromptDetailsCard = ({ promptData,stripePromise,clientSecret }: Props) => {
  const [open, setOpen]=useState(false)
  const [activeImage, setActiveImage] = useState(promptData?.images[0]?.url)
  const tags = promptData?.tags;

  const tagsList = tags.split(",").map((tag: string) => tag.trim());

  return (
    <div className="bg-[#1211023] p-3 w-full min-h-[50vh] shadow rounded-xl mt-8">
      <div className="w-full flex flex-wrap">
        <div className="md:w-[48%] w-full m-2">
          <div>
            <Image
              src={promptData?.images[0]?.url}
              width={500}
              height={500}
              className="rounded-xl w-[400px] object-contain "
              alt=""
            />
          </div>
          <br />
          <div className="w-full flex">
            <Marquee>
              {promptData.images.map((image: any) => (
                <Image
                  src={image.url}
                  key={image.url}
                  onClick={() => setActiveImage(image.url)}
                  width={250}
                  height={250}
                  alt=""
                  className="m-2 cursor-pointer rounded-md"
                />
              ))}
            </Marquee>
          </div>
        </div>
        <div className="md:w-[48%] w-full m-2 p-2">
          <h1 className={`${Styles.label} !text-2xl font-montserrat`}>
            {promptData?.name}
          </h1>
          <br />
          <Chip className="bg-[#1f2d2b] rounded-md p-3 h-[35px]">
            <span
              className={`${Styles.label} !text-2xl !text-[#64ff4b] font-montserrat`}
            >
              {'15'}%
            </span>
          </Chip>
          <span
            className={`${Styles.label} !text-2xl pl-2 text-white font-montserrat`}
          >
            Off
          </span>
          <div className="w-full flex items-center my-2 justify-between">
            <div>
              <span
                className={`${Styles.label} inline-block pt-4 !text-xl line-through`}
              >
                ${promptData?.estimatedPrice}
              </span>
              <span
                className={`${Styles.label} inline-block pt-4 !text-xl text-white pl-3`}
              >
                ${promptData?.price}
              </span>
            </div>
            <Ratings rating={promptData?.rating} />
          </div>
          <br />
          <p className={`${Styles.paragraph}`}>
            {promptData?.shortDescription}
          </p>
          <br />
          <div className="w-full">
            <span
              className={`${Styles.label} !text-2xl pl-2 text-white font-montserrat`}
            >
              Tags
            </span>
            <br />
            <div className="w-full flex items-center flex-wrap gap-x-2 my-2">
              {tagsList.map((tag: string) => (
                <Chip
                  className="bg-[#1e1c2f] rounded-full h-[35px] mr-2 my-2 2xl:mr-4 cursor-pointer"
                  key={tag}
                >
                  <span
                    className={`${Styles.label} !text-xl text-white font-montserrat `}
                  >
                    {tag}
                  </span>
                </Chip>
              ))}
            </div>
            <br />
            <Button
              onClick={() => setOpen(!open)}
              radius="full"
              className={`${Styles.button} h-[45px] font-[400] bg-[#64ff4b] !text-indigo-900 md:ml-2`}
            >
              Buy now ${promptData?.price}
            </Button>
          </div>
        </div>
      </div>

      {open && (
        <div className="w-full h-screen bg-[#00000036] fixed top-0 left-0 z-50 flex items-center justify-center">
          <div className="w-[500px] min-h-[500px] bg-white rounded-xl shadow p-3">
            <div className="w-full flex justify-end">
              <IoCloseOutline
                size={40}
                className="text-black cursor-pointer"
                onClick={() => setOpen(!open)}
              />
            </div>
            <div className="w-full">
              {stripePromise && clientSecret && (
                <Elements stripe={stripePromise} options={{ clientSecret }}>
                  <CheckoutForm
                    setOpen={setOpen}
                    open={open}
                    promptData={promptData}
                  />
                </Elements>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default PromptDetailsCard
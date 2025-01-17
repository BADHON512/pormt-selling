import { Styles } from '@/Utils/style'
import Link from 'next/link'
import React from 'react'

type Props = {}

function Footer({}: Props) {
  return (
<div className="mt-8">
      <div className="w-full mb-5 flex justify-between items-center">
        <div>
          <Link href={"/"}>
            <h1 className="font-Inter text-3xl cursor-pointer">
              <span className="text-[#64ff4c]">Code</span>Horizon
            </h1>
          </Link>
        </div>
        <div>
          <ul className="flex items-center flex-wrap">
            <li>
              <Link
                href="/"
                className={`${Styles.label} hover:text-[#64ff4b] duration-200 transition px-4`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/marketplace"
                className={`${Styles.label} hover:text-[#64ff4b] duration-200 transition px-4`}
              >
                MarketPlace
              </Link>
            </li>
            <li>
              <Link
                href="/contact-us"
                className={`${Styles.label} hover:text-[#64ff4b] duration-200 transition px-4`}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <p className={`${Styles.paragraph} text-center`}>
        Copyright © 2023 CodeHorizon . All Rights Reserved
      </p>
      <br />
      <br />
    </div>
  )
}

export default Footer
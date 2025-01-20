"use client"
import Header from '@/components/Header'
import Footer from '@/components/Layout/Footer'
import ShopBanner from '@/components/Shop/ShopBanner'
import { User } from '@clerk/nextjs/server'
import { Divider } from '@nextui-org/react'
import React, { useEffect, useState } from 'react'
import PromptDetails from '@/components/Prompts/PromptDetails'
import { stripePaymentIntent } from '@/actions/payment/paymentAction'
import {loadStripe} from '@stripe/stripe-js';


type Props = {
    user: User | undefined,
    promptData: any,
    isSellerExist: boolean
    relatedPrompts: any
    publishableKey: any
}

const PromptDetailsPage = ({ user, isSellerExist, promptData, relatedPrompts,
    publishableKey }: Props) => {

    const [stripePromise, setStripePromise] = useState<any>()
    const [clientSecret, setClientSecret] = useState("")
    const [mount, setMount] = useState(false)


    useEffect(() => {
        if (!mount) {
            setMount(true)
        }


    }, [mount])

    useEffect(() => {
        if (publishableKey) {
            const amount = Math.round(10) * 100
            newPaymentIntent({ amount })
            setStripePromise(loadStripe(publishableKey))
        }
    }, [publishableKey, promptData])
    const newPaymentIntent = async ({ amount }: { amount: Number }) => {
        const paymentIntent = await stripePaymentIntent({ amount })
        setClientSecret(paymentIntent?.client_secret)

    }

    if (!mount) {
        return null
    }
    return (
        <div>
            <div className="shop-banner">
                <Header activeItem={2}
                    user={user}
                    isSellerExist={isSellerExist}
                />
                <ShopBanner title='badhon' />
            </div>
            <div>
                <div className="w-[95%] md:w-[80%] xl:w-[85%] 2xl:w-[80%] m-auto">
                    <PromptDetails
                        promptData={promptData}
                        relatedPrompts={relatedPrompts}
                    stripePromise={stripePromise}
                    clientSecret={clientSecret}
                    />
                    <Divider className="bg-[#ffffff14] mt-5" />
                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default PromptDetailsPage
"use client"
import Header from '@/components/Header'
import Hero from '@/components/Route/Hero'
import React, { useEffect, useState } from 'react'
import Image from "next/image";
import star from "@/public/Assets/shape-two.png";
import About from '@/components/Route/About';
import { Styles } from '@/Utils/style';
import PromptsCard from '@/components/Prompts/PromptsCard';
import BestSeller from '@/components/Shop/BestSeller';
import Future from '@/components/Route/Future';
import Partners from '@/components/Route/Partners';
import SellerBanner from '@/components/Shop/SellerBanner';
import Footer from '@/components/Layout/Footer';

import Loader from '@/Utils/Loader';

import { User } from '@clerk/nextjs/server';
import toast from 'react-hot-toast';
type Props = {
  user:User|undefined
  isSellerExist:boolean |undefined
  TopSeller:any
  allPrompts:any
}

const RoutePage = ({user,isSellerExist,TopSeller,allPrompts}: Props) => {
  const [prompts, setPrompts] = useState<any>();
  const [loading, setLoading] = useState(false)
  const [isMounted, setIsMounted] = useState(false)


  const fetchPromptsData = async () => {
    
    setLoading(true);
    try {
  
      setPrompts(allPrompts);

    } catch (error) {
      toast.error(error)
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPromptsData();
  }, []);

  useEffect(() => {
    if (!isMounted) {
      setIsMounted(true);
    }
  }, [isMounted]);

  if (!isMounted) {
    return null;
  }
  return (
    <>
       {
        loading ? (<Loader />) : (<div>

          <div className="banner">
            <Header activeItem={0} user={user} isSellerExist={isSellerExist} />
            <Hero />
          </div>
          <Image src={star} alt='img not found' width={120} height={120}
            className='absolute right-[-30px]' />
          <br />
          <div className="w-[95%] md:w-[90%] xl:w-[80%] 2xl:w-[75%] m-auto ">
            <About />
            <div className="">
              <h1 className={`${Styles.heading} p-2 font-montserrat`}>
                Latest Prompts
              </h1>
              <br />
              <br />
              <div className="flex flex-wrap">

                {prompts&& prompts.map((item:any)=>(
                     <PromptsCard prompt={item} key={item.id}/>
                ))}
             
          

              </div>
              <br />
              <br />
              <BestSeller  TopSeller={TopSeller}/>
              <br />
              <br />
              <Future />
              <br />
              <br />
              <Partners />
              <br />
              <br />
              < SellerBanner />
              <br />
              <br />
              <br />
              <Footer />
            </div>
          </div>



        </div>)
      }
    </>
  )
}

export default RoutePage
import Image from 'next/image'
import React from 'react'
import line from '@/public/Assets/line.png'
import MarQuee from "react-fast-marquee";

type Props = {}

const rowOneImages = [
    { url: '/Assets/marquee/1. Mascote Dragão - Representando História e Fogo_.webp' },
    { url: '/Assets/marquee/1.webp' },
    { url: '/Assets/marquee/_Illuminated Thought Process_.webp' },
    { url: '/Assets/marquee/A dazzlingly shimmering sonic symbiote radiates bi (1).webp' },
    { url: '/Assets/marquee/A dazzlingly shimmering sonic symbiote radiates bi.webp' },
    { url: '/Assets/marquee/A Jean Giraud style of drawing presenting a landsc.webp' },
    { url: '/Assets/marquee/a new universe emerging from the big bang.webp' },
    { url: '/Assets/marquee/A scary black dog with the wings of a griffon.webp' },
    { url: '/Assets/marquee/An abandoned playground in the early foggy morning.webp' },
    { url: '/Assets/marquee/Cyril Ramaphosa scary hairy humanoid smoking a tob.webp' },
    { url: '/Assets/marquee/demon falling from sky (1).webp' },
    { url: '/Assets/marquee/demon falling from sky.webp' },
    { url: '/Assets/marquee/distant view of a large round indigo temple in the.webp' },
    { url: '/Assets/marquee/Loathsome Humanoids in the style of Bernie Wrights.webp' },
    { url: '/Assets/marquee/Old man standing next to a giant monster.webp' },
    { url: '/Assets/marquee/Sauron from LOTR in his elven form in flames and s (1).webp' },
    { url: '/Assets/marquee/Sauron from LOTR in his elven form in flames and s.webp' },
];

const rowTwoImages = [
    { url: '/Assets/marquee/A dazzlingly shimmering sonic symbiote radiates bi (1).webp' },
    { url: '/Assets/marquee/demon falling from sky.webp' },
    { url: '/Assets/marquee/A dazzlingly shimmering sonic symbiote radiates bi.webp' },
    { url: '/Assets/marquee/An abandoned playground in the early foggy morning.webp' },
    { url: '/Assets/marquee/Old man standing next to a giant monster.webp' },
    { url: '/Assets/marquee/1.webp' },
    { url: '/Assets/marquee/demon falling from sky (1).webp' },
    { url: '/Assets/marquee/distant view of a large round indigo temple in the.webp' },
    { url: '/Assets/marquee/1. Mascote Dragão - Representando História e Fogo_.webp' },
    { url: '/Assets/marquee/a new universe emerging from the big bang.webp' },
    { url: '/Assets/marquee/A Jean Giraud style of drawing presenting a landsc.webp' },
    { url: '/Assets/marquee/Sauron from LOTR in his elven form in flames and s (1).webp' },
    { url: '/Assets/marquee/Sauron from LOTR in his elven form in flames and s.webp' },
    { url: '/Assets/marquee/Cyril Ramaphosa scary hairy humanoid smoking a tob.webp' },
    { url: '/Assets/marquee/Loathsome Humanoids in the style of Bernie Wrights.webp' },
    { url: '/Assets/marquee/A scary black dog with the wings of a griffon.webp' },
    { url: '/Assets/marquee/_Illuminated Thought Process_.webp' }
];


const Hero = (props: Props) => {
    return (
        <div className="w-full md:min-h-screen flex items-center justify-center">

        <div>    <h1 className='font-montserrat text-4xl py-5 xl:text-7xl 2xl:text-8xl font-[700] text-center xl:leading-[80px] 2xl:leading-[100px] sm:mt-20'>
                Make <span className='text-[#64ff4c]'>Ai Image</span><br />with your <br /> Imagination
            </h1>

            <div className="md:mt-5">
                <Image src={line} alt='img not found' className='absolute hidden md:block' width={2000} height={2} />
            </div>
            <div className="w-[100vw] mb-5 md:mb-20 relative">
                <div className="rotate-[4deg] mt-10 md:mt-[6.5rem]">
                    <MarQuee>
                        {
                            rowOneImages.map((item,index)=>(
                                 <Image src={item.url} key={index}
                                 alt='img not found'
                                 className='md:m-4 w-[100px] m-2 md:w-[200px] rounded-[20px]'
                                  width={500} height={100}/>
                            ))
                        }
                    </MarQuee>
                    <MarQuee>
                        {
                            rowTwoImages.map((item,index)=>(
                                 <Image src={item.url} key={index}
                                 alt='img not found'
                                 className='md:m-4 w-[100px] m-2 md:w-[200px] rounded-[20px]' width={500} height={300}/>
                            ))
                        }
                    </MarQuee>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Hero
"use client";

import { Avatar, Divider, Tab, Tabs } from "@nextui-org/react";
import React, { useEffect, useState } from "react";

import { Styles } from "@/Utils/style";
import { getShopById } from "@/actions/shop/getShopById";
import ReviewCard from "./ReviewCard";

type Props = {
    promptData: any;
};

let tabs = [
    {
        title: "Description",
    },
    {
        title: "Reviews",
    },
    {
        title: "Author",
    },
];

const PromptInformation = ({ promptData }: Props) => {
    const [shopData, setShopData] = useState<any>()

    useEffect(() => {

        if (promptData) {
            getShopInfo()
        }

    }, [promptData])

    const getShopInfo = async () => {
        const shopData = await getShopById({ shopId: promptData?.sellerId })

        setShopData(shopData)
    }
    
 
    return (
        <div>
            <div className="flex w-full min-h-[25vh] flex-col bg-slate-900 p-3 rounded-md mb-5">
                <Tabs items={tabs} color="primary" variant="light">
                    {(item) => (
                        <Tab key={item.title} title={item.title} className="text-[18px]">
                            <Divider className="bg-[#ffffff18]" />
                            <div className="py-2">
                                {item.title === "Description" && (
                                    <p
                                        className={`${Styles.paragraph} whitespace-pre-line w-full overflow-hidden`}
                                    >
                                        {promptData.description}
                                    </p>
                                )}
                                {item.title === "Author" && (
                                    <>
                                        <div className="flex w-full my-2">
                                            <Avatar size="lg" src={shopData?.avatar} />
                                            <div>
                                                <span
                                                    className={`${Styles.label} pl-3 !text-xl text-white`}
                                                >
                                                    @ {shopData?.name}
                                                </span>
                                                <br />
                                                <span className={`${Styles.label} pl-3`}>
                                                    Prompts: {shopData?.allProducts}
                                                </span>
                                                <br />
                                                <span className={`${Styles.label} pl-3`}>
                                                    Reviews: {shopData?.ratings} / 5
                                                </span>
                                            </div>
                                        </div>
                                    </>
                                )}

                                {item.title === "Reviews" && (
                                          <div className="">
                                          {/* {promptData &&
                                              promptData.reviews.map((item: any, index: number) => (
                                                  <ReviewCard item={item} key={index} />
                                              ))}
  
                                          {
                                              promptData?.reviews?.length === 0 && (
                                                  <h5 className={`${Styles.paragraph} text-center py-5`}>
                                                      No Reviews have to show!
                                                  </h5>
                                              )
                                          } */}
                                           <ReviewCard/>
                                           <ReviewCard/>
                                           <ReviewCard/>
                                           <ReviewCard/>
                                      </div>
                                )}
                            </div>
                        </Tab>
                    )}
                </Tabs>
            </div>
        </div>
    );
};

export default PromptInformation;

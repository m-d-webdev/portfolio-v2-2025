"use client";
import moment from 'moment';
import React from 'react'
import { useTranslation } from 'react-i18next';
const myImage = "/media/iderkaoui-mustapha.jpg";

const MyMessage = ({ message }) => {
    const { i18n } = useTranslation();
    return (
        <div className='w-full  flex items-end justify-end'>
            <div className="flex gap-2 max-w-[50%] justify-end items-start">
                <div className="flex items-start justify-start flex-col gap-1">

                    <p className={`p-2 mt-[10px]  font-medium  text-white px-3  ${i18n.language == "ar" ? "rounded-tl-[0px]" : "rounded-tr-[0px]"} rounded-xl   bg-[#072667]`}>
                        {
                            message?.content
                        }
                    </p>
                    <span className='text-sm font-semibold opacity-60'>
                        {message?.createdAt &&
                            moment(message.createdAt).format("HH:mm")
                        }
                    </span>
                </div>
                <img src={myImage} className='!w-[40px] min-w-[40px] h-[40px] min-h-[40px] object-top rounded-full object-cover' alt="" />


            </div>
        </div>
    )
}

export default MyMessage

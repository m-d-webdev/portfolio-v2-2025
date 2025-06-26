import moment from 'moment'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
const MateMessage = ({ message, MateImage, setMateImage }) => {
    const { i18n } = useTranslation()
    return (
        <div className='w-full  flex items-start justify-start'>
            <div className="flex gap-2 max-w-[50%] justify-end items-start">

                <label htmlFor="img">
                    <img src={MateImage} className='!w-[40px] min-w-[40px] h-[40px] min-h-[40px] object-top rounded-full object-cover' alt="" />
                </label>
                <input type="file" onChange={e => {
                    if (e.target.files[0]) {
                        setMateImage(
                            URL.createObjectURL(e.target.files[0])
                        )
                    }
                }} id='img' className='hidden' />
                <div className="flex items-end justify-end flex-col gap-1">
                    <p className={`p-2 mt-[10px]  font-medium  text-s px-3 rounded-xl text-black ${i18n.language == "ar" ? "rounded-tr-[0px]" : "rounded-tl-[0px]"}  bg-[#d8e3fd]`}>
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


            </div>
        </div>
    )
}

export default MateMessage

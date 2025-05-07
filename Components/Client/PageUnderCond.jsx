"use client"
import React from 'react'
import { useTranslation } from 'react-i18next'

const PageUnderCond = () => {
    const { t } = useTranslation()
    return (
        <div className='w-full h-full items-center justify-center flex flex-col'>
            <img className='h-[300] rounded-2xl' src="/media/pageUnderCondtrunctio.png" alt="" />
            <h1 className='text-2xl mt-8 font-semibold '>{t("ERRORS.PAGE_UNDER_CONSTRUCTURE")}</h1>
            <p className='text-lg opacity-70 font-semibold '>{t("ERRORS.PAGE_UNDER_CONSTRUCTURE2")}</p>
        </div>
    )
}

export default PageUnderCond

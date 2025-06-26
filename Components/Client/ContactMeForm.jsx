"use client";
import React, { useState } from 'react'
import { Input } from '../ui/input';
import { useTranslation } from 'react-i18next';
import { Textarea } from '../ui/textarea';
import { Button } from '../ui/button';
import Spinner from './loaders/Spinner';
import { pa9 } from '../Global/MyToas';

const ContactMeForm = () => {
    const { t, i18n } = useTranslation();
    const [data, setData] = useState({
        name: "",
        email: "",
        text: ""
    });
    const [emailsent, setemailsent] = useState(false)

    const [isLoading, setLoading] = useState(false)

    const handleSubmitEmailText = async () => {
        setemailsent(false)
        try {

            const url = "http://localhost:3000/api/contact";

            setLoading(true)

            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    ...data,
                    lang: i18n.language,

                }),
            });
            const res = await response.json();
            if (res.done) {
                setemailsent(true);
                setData(pv => ({ ...pv, text: "" }));
                pa9.success(t("CONTACT.success"), "", {
                    withSound: true
                })
            } else {
                pa9.error(t("CONTACT.error"))
            }
            setLoading(false)

        } catch (error) {
            console.log(error);
            setLoading(false)
        }
    }
    return (
        <div className='border w-full max-w-[1000px] xl:w-[550px] mt-8 border-border rounded-2xl flex flex-col items-start justify-start '>
            <div className="p-4 w-full flex flex-col gap-6 items-start justify-start ">

                <Input
                    id='Name'
                    onChange={e => setData(pv => ({ ...pv, name: e.target.value }))}
                    label={t("COMMON.NAME")}
                    parentClassName='!w-full'

                />
                <Input
                    id='InpEmail'
                    onChange={e => setData(pv => ({ ...pv, email: e.target.value }))}
                    parentClassName='!w-full'
                    label={t("COMMON.EMAIL")}
                />
                <Textarea
                    onChange={e => setData(pv => ({ ...pv, text: e.target.value }))}
                    label={t("COMMON.MESSAGE")}
                    parentClassName='!w-full '

                />
                <div className="w-full px-10">

                    <Button
                        onClick={handleSubmitEmailText}
                        disabled={(
                            data.email == "" ||
                            data.name == ""
                        )}
                        variant={"default"} className={"w-full "}>
                        {
                            isLoading
                                ? <Spinner />
                                : t("COMMON.SUBMIT")
                        }

                    </Button>

                </div>
            </div>
            {
                emailsent &&
                <div className="w-full text-center p-2 font-medium text-[#0bb44f]   bg-[#c6fbd1]">{t("CONTACT.success")}</div>
            }
        </div >
    )
}

export default ContactMeForm

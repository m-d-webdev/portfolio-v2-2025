"use client";
import { useChat } from '@/Contexts/ChatProvider'
import Link from 'next/link';
import React from 'react'
const NEXT_PUBLIC_CHATCODE = process.env.NEXT_PUBLIC_CHATCODE;
console.log({ NEXT_PUBLIC_CHATCODE });

const ListFriends = ({ chatId }) => {
  const { data } = useChat();
  console.log({ data });

  return (
    <div className='flex flex-col p-3  items-start justify-start gap-2'>
      {data &&
        Object.entries(data)?.map(([key, val], i) =>
          <Link href={`/contact-me/chat/${chatId}/${NEXT_PUBLIC_CHATCODE}/${key}`} key={i} className="">
            <h1>{val.fullName}</h1>
          </Link>
        )

      }
    </div>
  )
}

export default ListFriends

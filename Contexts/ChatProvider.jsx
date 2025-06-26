"use client";
import Cookies from 'js-cookie';
import React, { useContext, createContext, useState, useEffect } from 'react'
import io from 'socket.io-client';

const ChatngProvider = createContext();


const SOCKET_PATH = process.env.NEXT_PUBLIC_SOCKET_PATH;

const ChatProvider = ({ children, userName }) => {
    const [data, setData] = useState({});
    const [isChatStarted, setChatStarted] = useState(false)
    const [socket, setSocket] = useState();
    const [isMustaphaConnected, setMustaphaConnected] = useState(false)
    const hanleConnectToSocker = async () => {

        const ioC =
            await io(SOCKET_PATH
                , {
                    auth: {
                        userName
                    }
                });

        if (ioC) {
            ioC.on("MessageFROMMutapha", m => {
                setData(pv => ({
                    ...pv,
                    [m.to]:
                        pv[m.to]
                            ? {
                                fullName: pv[m.to].fullName,
                                messages: [
                                    ...pv[m.to].messages,
                                    { ...m, mine: true }
                                ]
                            }
                            : {
                                fullName: "Rocrutor --",
                                messages: [
                                    { ...m, mine: true }
                                ]
                            }
                }
                ));
            });

            ioC.on("MessageToMutapha", m => {

                setData(pv => ({
                    ...pv,
                    [m.from]:
                        pv[m.from]
                            ?
                            {
                                fullName: pv[m.from].fullName,
                                messages: [
                                    ...pv[m.from].messages,
                                    {
                                        ...m,
                                        min: false
                                    }
                                ]
                            }
                            :
                            {
                                fullName: "Rocrutor --",
                                messages: [
                                    {
                                        ...m,
                                        min: false
                                    }
                                ]
                            }


                }
                ));

            });


            ioC.on("MustaphaConnected", () => {
                console.log("Mess");
                setMustaphaConnected(true);
            })
            ioC.on("MustaphaDisonnected", () => {
                setMustaphaConnected(false);
            })

        } else {
            console.log("not connected => ");

        }

        setSocket(ioC)


        socket && socket.on("connect", m => {
            console.log("Connnected with id =>", m.id);
        });
    }
    useEffect(() => {
        if (Object.keys(data).length > 0) {
            const JsonData = JSON.stringify(data);
            Cookies.set("ChatData", JsonData)
        }
    }, [data]);
    useEffect(() => {
        hanleConnectToSocker();
        if (Cookies.get("ChatData")) {
            setData(JSON.parse(Cookies.get("ChatData")))
        }
        return () => {
            if (Object.keys(data).length > 0) {
                const JsonData = JSON.stringify(data);
                Cookies.set("ChatData", JsonData)
            };

            socket && socket.disconnect();
        }
    }, [])




    return (
        <ChatngProvider value={{ data, setData, isMustaphaConnected, socket, isChatStarted, setChatStarted }}>
            {children}
        </ChatngProvider>
    )
};



export const useChat = () => {
    const { data, setData, socket, isChatStarted, isMustaphaConnected, setChatStarted } = useContext(ChatngProvider);
    return {
        data,
        setData,
        io: socket,
        isChatStarted,
        setChatStarted,
        isMustaphaConnected
    }
}
export default ChatProvider



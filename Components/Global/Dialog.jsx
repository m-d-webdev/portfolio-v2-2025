'use client';
import { useEffect, useRef } from 'react'
import ReactDOM from 'react-dom'
const Dialog = ({ children, className, onClose = () => { } }) => {
    const PageRef = useRef();
    const handleClickOutside = (e) => {
        if (!PageRef.current?.contains(e.target)) {
            onClose()
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return ReactDOM.createPortal(
        <div
            className={` bg-[#010000c4] fixed left-0 top-0 !z-50 w-full h-full flex items-center justify-center`}
        >
            <div ref={PageRef} className={className}>
                {
                    children
                }
            </div>
        </div>,
        document.body
    )
}

export default Dialog

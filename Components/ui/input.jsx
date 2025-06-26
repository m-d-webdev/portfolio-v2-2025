import * as React from "react"

import { cn } from "@/lib/utils"

function Input({
  label = "",
  id = "input",
  className,
  parentClassName = "",
  type,
  placeholder=" ",
  ...props
}) {
  return (
    <div className={`${parentClassName}  md:w-[400px]  relative flex items-center justify-start   rounded-md   `}>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        data-slot="input"
        className={cn(
          `file:text-foreground  rounded
           capitalize pt-4 border    border-border font-semibold tracking-tighter     peer placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 flex  w-full min-w-0 bg-transparent px-3   text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 `,
          "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40",
          className
        )}

        {...props} />
      <label htmlFor={id} className="px-3  capitalize absolute duration-150 font-medium tracking-tight peer-focus:text-sm peer-focus:text-ring peer-focus:-translate-y-[10px] peer-placeholder-shown:-translate-y-[0px] peer-placeholder-shown:text-foreground text-ring   text-sm peer-placeholder-shown:text-base    -translate-y-[10px] ">{label}</label>

    </div>

  );
}

export { Input }

import * as React from "react"

import { cn } from "@/lib/utils"

function Textarea({
  label = "",
  id = "input",
  parentClassName = "",
  type,
  placeholder = " ",
  className,
  ...props
}) {
  return (


    <div className={`${parentClassName} bg-background md:w-[400px]  relative flex items-start justify-start   rounded-md  border  border-border `}>
      <textarea
        data-slot="textarea"
        id={id}
        placeholder={placeholder}
        className={cn(
          "file:text-foreground resize-none min-h-[200px] pt-6 font-semibold tracking-tighter  border-none  focus: peer placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 flex  w-full min-w-0 bg-transparent px-3   text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 ",
          "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40",
          className
        )}
        {...props} />
      <label htmlFor={id} className="px-2  absolute duration-150 top-1 font-medium tracking-tight peer-focus:text-ring  peer-placeholder-shown:text-foreground text-ring        ">{label}</label>

    </div>
  );
}

export { Textarea }

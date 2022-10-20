import { ButtonHTMLAttributes, ReactNode } from "react";
import { clsx } from 'clsx';
import { Slot } from '@radix-ui/react-slot';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children:  ReactNode,
    asChild?: boolean,
    className?: string
    
}


export function Button({ asChild, children, className,  ...props} : ButtonProps){
    const Comp = asChild ? Slot : 'button';

    return(
        <Comp 
            className={clsx(
                "py-3 px-4 bg-blue-500 rounded font-semibold text-white hover:bg-blue-300 transition-colors text-sm w-full focus:ring-2 ring-gray-100 outline-none",                     
                 className )}
                {...props}
        >
            {children}            
        </Comp>
    )
}
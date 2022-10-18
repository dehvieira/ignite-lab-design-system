import { ReactNode } from "react";
import { clsx } from 'clsx';
import { Slot } from '@radix-ui/react-slot';

export interface ButtonProps {
    children:  ReactNode,
    asChild?: boolean,
}


export function Button({ asChild, children} : ButtonProps){
    const Comp = asChild ? Slot : 'button';

    return(
        <Comp 
            className={clsx(
                "py-4 px-3 bg-blue-500 rounded font-semibold text-white hover:bg-blue-300 transition-colors text-sm w-full focus:ring-2 ring-gray-100 outline-none" ,{                    
                })}
        >
            {children}            
        </Comp>
    )
}
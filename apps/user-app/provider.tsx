"use client"

import {RecoilRoot} from "Recoil";
import {SessionProvider} from "next-auth/react";

export const Providers = ({children}:{children:React.ReactNode}) => {
    return (
    <RecoilRoot>
        <SessionProvider>
            {children}
        </SessionProvider>
    </RecoilRoot>)
}
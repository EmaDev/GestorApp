import React from 'react'
import { IonContent } from '@ionic/react';
import { NavBar } from '../Layout/NavBar/NavBar';


interface LayoutProps {
    children: React.ReactNode
}


export const Layout = ({ children }: LayoutProps) => {
    return (
        <>
            <IonContent>
                <div className='mb-[70px]'>
                    {children}
                </div>
            </IonContent>
            <NavBar />
        </>
    )
}

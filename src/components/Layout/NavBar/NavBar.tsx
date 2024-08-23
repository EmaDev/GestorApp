

import { NavLink } from 'react-router-dom';
import { alertCircle, home, personCircle } from 'ionicons/icons';
import { IonIcon } from '@ionic/react';




export const NavBar = () => {



    return (
        <>
            <div className='block fixed bottom-0 inset-x-0 bg-[#f7f7f7]'>
                <div className='flex justify-around items-center h-16'>
                    <NavLink to={'/inicio'} activeClassName='orange' className={"text-[#8E8E8E] flex flex-col justify-center items-center"}><IonIcon size='large' slot="start" icon={home}></IonIcon><p className='text-xs'>Inicio</p></NavLink>
                    <NavLink to={'/misdatos'} activeClassName='orange' className={"text-[#8E8E8E] flex flex-col justify-center items-center"} ><IonIcon size='large' slot="start" icon={personCircle}></IonIcon><p className='text-xs'>Mis Datos</p></NavLink>
                    <NavLink to={'/siniestros'} activeClassName='orange' className={"text-[#8E8E8E] flex flex-col justify-center items-center"}><IonIcon size='large' slot="start" icon={alertCircle}></IonIcon><p className='text-xs'>Siniestros</p></NavLink>
                </div>
            </div>
        </>
    )
}

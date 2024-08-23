import { useContext, useEffect, useRef, useState } from 'react'
import { App as CapacitorApp } from '@capacitor/app';
import { InicioTitle } from '../../components/Inicio/InicioTitle/InicioTitle'
import { Layout } from '../../components/Layout/Layout';
import { IonItem, IonLabel, IonList, IonListHeader, IonRefresher, IonRefresherContent, IonSkeletonText, RefresherEventDetail } from '@ionic/react';
import { toast, ToastContainer } from 'react-toastify';


export const Inicio = () => {

    const [actualizando, setActualizando] = useState(false);
    const lastBackPress = useRef<number>(0);
    const timePeriodToExit = 2000;

   useEffect(() => {
        const handleBackButton = () => {
            console.log("dnidndindi 2626");
          const currentTime = new Date().getTime();
          if (currentTime - lastBackPress.current < timePeriodToExit) {
            CapacitorApp.exitApp();
          } else {
            lastBackPress.current = currentTime;
            toast.info("Presioná nuevamente para salir", {
                position: "bottom-center",
                autoClose: 1500,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "light",
            });
          }
        };
    
        CapacitorApp.addListener('backButton', handleBackButton);
    
        return () => {
          CapacitorApp.removeAllListeners();
        };

    }, []);

    return (
        <>
        <ToastContainer />
        <Layout>
            <IonRefresher slot="fixed" onIonRefresh={() => {}}>
                <IonRefresherContent></IonRefresherContent>
            </IonRefresher>
            <div className='animate__animated animate__fadeIn'>
                <InicioTitle nombre="Emanuel" page={"inicio"} texto={""} />
                
            </div>
        </Layout>
        </>
    )
}

import { useState } from 'react'
import { IonContent, IonHeader, IonTitle } from '@ionic/react';
import siniestroImg from "../../assets/imgs/siniestro.png";
import { IoArrowBack } from 'react-icons/io5';
import { useHistory } from 'react-router-dom';

export const NuevoSinietrov2 = () => {

  const [comenzar, setComenzar] = useState<boolean>(true);
  const history = useHistory();


  if (comenzar) {
    return (
      <IonContent>
        <IonHeader className='h-10'>
          <div className='mt-1 flex items-center justify-center px-2'>
            <button className='py-2' onClick={() => { history.goBack() }}><IoArrowBack size={25} /></button>
            <IonTitle>Nuevo Siniestro</IonTitle>
          </div>
        </IonHeader>
        <div className='min-h-full px-4 m-auto mb-4 flex flex-col justify-center items-center'>
          <div className='text-center'>
            <h2 className='text-center text-md font-[400]'>Estás por informar un nuevo siniestro sobre</h2>
            <h4 className='font-[600] text-lg'>{"Ferrari Portofino"}</h4>
            <img src={siniestroImg} alt="Nuevo Siniestro" className='w-3/4 p-2 m-auto my-6' />

            <p className='text-center text-sm'>
              Hola, Antes que nada, espero que todo esté bien.
              Necesitamos que completes el siguiente formulario y nos cuentes qué pasó.<br /><br />
              <b>Quedamos a disposición para asesorarte en todo el proceso a través de nuestros canales de contacto.</b>
            </p>

          </div>
          <button
            type='button'
            className='w-[90%] p-2 mt-8 rounded-lg
           text-white font-semibold bg-[#3F84FF]
           transition-all duration-150 hover:scale-110 hover:bg-[#3066c2b8]'
            onClick={() => { setComenzar(false);}}>
            Comenzar
          </button>
        </div>
      </IonContent>
    )
  }

  return (
    <IonContent>
      <div className='text-center bg-white mb-10'>
        <h1>Principal</h1>        
      </div>
    </IonContent>
  )
}

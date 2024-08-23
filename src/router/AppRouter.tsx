import { IonRouterOutlet } from '@ionic/react'
import { Route } from 'react-router-dom'
import { MisDatos } from '../pages/MisDatos/MisDatos'
import { NuevoSinietrov2 } from '../pages/NuevoSiniestro/NuevoSiniestrov2'
import { Siniestrosv2 } from '../pages/Siniestros/Siniestrosv2'
import { Inicio } from '../pages/Inicio/Inicio'


export const AppRouter = () => {

    return (
        <IonRouterOutlet className='bg-neutral-100'>
            <Route path={"/"} component={Inicio}/>
            <Route path="/misdatos" component={MisDatos} />
            <Route path="/siniestros" component={Siniestrosv2} />
            <Route path="/nuevosiniestro" component={NuevoSinietrov2} />
        </IonRouterOutlet>
    )
}

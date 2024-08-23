import { useIonAlert } from '@ionic/react';
import { useEffect, useState } from 'react';
import { RiQuestionnaireFill } from "react-icons/ri";

interface Props {
    pais: string;
}
export const Entorno = ({ pais }: Props) => {

    const [dataEntorno, setDataEntorno] = useState<{ entorno: "Desarrollo"|"Producción"|"Error"; data: string }>({ entorno: "Error", data: "" });
    const [present] = useIonAlert()

    const renderData = async () => {
        const configuracion = {
            Entorno: "Desarrollo",
            API: "Dato",
            OS: "Dato",
            OSVersion: "Dato",
            Lenguaje: "Dato",
            Version: "Dato",
        }
        setDataEntorno({
            entorno: "Desarrollo",
            data: `<div>
                <p>Entorno: <b>${configuracion.Entorno}</b></p>
                <p>API: <b>${configuracion.API}</b></p>
                <p>OS: <b>${configuracion.OS}</b></p>
                <p>OS version: <b>${configuracion.OSVersion}</b></p>
                <p>Lenguaje: <b>${configuracion.Lenguaje}</b></p>
                <p>Version: <b>${configuracion.Version}</b></p>
            </div>`
        })
    }

    useEffect(() => {
        renderData();
    }, [])

    return (
        <div className={dataEntorno.entorno === "Producción" ? "hidden" : ""}>
            <div onClick={() => {
                present({
                    header: "",
                    message: dataEntorno.data,
                    buttons: [{
                        text: "Cerrar",
                        role: 'cancel',
                    }]

                })
            }}>
                <div className='bg-red -300 rounded-xl  
                absolute bottom-1 right-2 py-1 px-2 flex gap-1 items-center justify-center
                 text-red-400'>
                    <RiQuestionnaireFill size={"18px"} />
                    <span className='text-sm font-[600]'>{dataEntorno.entorno}</span>
                </div>
            </div>
        </div>
    )
}

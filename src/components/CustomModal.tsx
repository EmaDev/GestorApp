import { useEffect, useState } from 'react';
import {IonContent, IonModal } from '@ionic/react';
import { MdCancel } from 'react-icons/md';
import { Keyboard } from '@capacitor/keyboard';

interface Props {
    children: any;
    title: string;
    isOpen: boolean;
    setIsOpen: (value: boolean) => void;
    height?: "90%"|"80%"|"70%"|"60%"|"50%"|"40%";
    textCenter?: boolean;

}
export const CustomModal = ({ title, children, isOpen, setIsOpen, height = "80%", textCenter = false }: Props) => {

    const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);

    useEffect(() => {
        const showListener = Keyboard.addListener('keyboardWillShow', () => {
            setIsKeyboardOpen(true);
        });
        const hideListener = Keyboard.addListener('keyboardWillHide', () => {
            setIsKeyboardOpen(false);
        });
        return () => {
            showListener.remove();
            hideListener.remove();
        };
    }, []);

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <>
            <IonModal
                id='custom-modal'
                isOpen={isOpen}
                onDidDismiss={closeModal}
                style={{
                    "--height": isKeyboardOpen ? "90%" : height,
                    "--width": "90%",
                    "--border-radius": "10px",
                    "--box-shadow": "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
                }}
            >
                <div className='border-b flex justify-center py-2 px-4 text-gray-600 mb-2'>
                    <p className={`font-[600] text-lg w-full ${textCenter && "text-center ml-[28px]"}`}>{title}</p>
                    <MdCancel size={"28px"} onClick={closeModal} />
                </div>
                <IonContent style={{
                    "margin-bottom": "20px"
                }}>
                    {children}
                </IonContent>
            </IonModal>
        </>
    )
}

import { useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import styles from './weatherModal.module.scss'

interface IPost {
    onClose?: () => void;
    children?: React.ReactNode;
    name?: any
}

export function WeatherModal(props: IPost) {

    const ref = useRef<HTMLDivElement>(null)
    const refClose = useRef<HTMLDivElement>(null)

    useEffect(() => {
        function handleClikc(event: MouseEvent) {
            if(event.target instanceof Node && refClose.current?.contains(event.target)) {
                props.onClose?.()
            }

            if(event.target instanceof Node && !ref.current?.contains(event.target)) {
                props.onClose?.()
            }
        }
        document.addEventListener('click', handleClikc)
        return () => {
            document.removeEventListener('click', handleClikc)
        }

    }, [props])


    const node = document.querySelector('#weather_modal');
    if (!node) return null

  return ReactDOM.createPortal(
    (
     <div className={styles.modalScreen}>
         <div className={styles.modal} ref={ref}>
            <div className={styles.modal__close} ref={refClose}>Закрыть</div>
            {props.children}
        </div>
     </div>
    ), node
  )
}

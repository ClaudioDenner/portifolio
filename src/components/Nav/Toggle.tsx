import styles from './ToggleMenu.module.css'
import togglePT from './assets/togglePT.svg'
import toggleUS from './assets/toggleUS.svg'

type Props = {
    active:boolean
}

export default function ToggleMenu({active}:Props){
    return(
        <>
            <div className={styles.container}>
                <img src={active ? togglePT : toggleUS} />
                <div>
                    PT - US
                </div>
            </div>
        </>
    )
}                                                                                                             
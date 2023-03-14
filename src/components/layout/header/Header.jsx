import {useAuth} from '../../../hooks/useAuth'
import Hamburger from '../hamburger/Hamburger'
import styles from './Header.module.scss'
import {IoMdArrowBack, TfiUser} from "react-icons/all";
import {useLocation, useNavigate} from "react-router-dom";

const Header = ({backLink = ''}) => {

    const {isAuth} = useAuth()
    const {pathname} = useLocation()
    const navigate = useNavigate()
    return (
        <header className={styles.header}>
            {pathname !== '/' ? (
                <button onClick={() => {
                    navigate(backLink)
                }}>
                    <IoMdArrowBack fill='#fff' fontSize={29}/>
                </button>

            ) : <button onClick={() => {
                navigate(isAuth ? '/profile' : '/auth')
            }}>
                <TfiUser fill='#fff' fontSize={29}/>

            </button>}

            {/* User profile */}
            <Hamburger/>
        </header>
    )
}

export default Header

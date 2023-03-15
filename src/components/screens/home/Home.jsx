import {useNavigate} from 'react-router-dom'

import Button from '../../ui/button/Button'

import {useAuth} from '../../../hooks/useAuth'

import Layout from '../../layout/Layout'

import styles from './Home.module.scss'
import Statistics from "../profile/statistics/Statistics.jsx";

function Home() {
    const {isAuth} = useAuth()

    const navigate = useNavigate()
    return (
        <Layout bgImage='/images/home-bg.jpeg'>
            <Button clickHandler={() => navigate(!isAuth ? '/new-workout' : '/auth')}>
                {isAuth ? 'New' : 'Sign in'}
            </Button>
            <h1 className={styles.heading}>EXERCISES FOR THE SHOULDERS</h1>
            <Statistics/>
        </Layout>
    )
}

export default Home

/* eslint-disable indent */
/* eslint-disable react/self-closing-comp */
/* eslint-disable semi */
/* eslint-disable object-curly-spacing */
import {h} from 'preact'
import {Link} from 'preact-router/match'
import style from './style.css'

const Header = () => (

    <header class={style.header}>
        <nav>
            <Link activeClassName={style.active} href="/">Movie</Link>
            <Link activeClassName={style.active} href="/picture">Pictures</Link>
        </nav>
    </header>
)

export default Header;
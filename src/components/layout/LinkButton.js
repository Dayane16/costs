import styles from './LinkButton.module.css'
import {Link} from 'react-router-dom'

function LinkButton(){
    return(
        <Link className={styles.btn} to='./newproject'>
            Criar Projeto
        </Link>
    )
}

export default LinkButton
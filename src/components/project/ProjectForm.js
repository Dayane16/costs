import styles from './ProjectForm.module.css'
import Input from '../form/Input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'
import {useState, useEffect} from 'react'


function ProjectForm({btntext}){

    const [categories, setCategories] = useState([])

  useEffect(() => {
    fetch('http://localhost:5000/categories', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setCategories(data)
      })
  }, [])
  

    return(
        <form className={styles.form}>
            <Input type='text' text='Nome do projeto' name='name' placeholder='Insira o Nome do projeto'/>
            <Input type='number' text='Orçamento do projeto' name='budgt' placeholder='Insira o orçamento total' />        
            <Select name='category_id' text='Selecione a categoria' options={categories}   /> 
            <SubmitButton text={btntext} />
        </form>
    )
}

export default ProjectForm
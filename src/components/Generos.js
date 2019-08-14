import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

const Generos = () => {
    const [data, setData] = useState([])
    useEffect(() => {
      axios
        .get('/api/genres')
        .then(res => {
          setData(res.data.data)
        })
    }, [])

    const deleteGenero = id => {
      axios.delete('/api/genres/' + id)
      .then(res => {
        const filtrado = data.filter(item => item.id !== id)
        setData(filtrado)
      })
    }

    if(data.length === 0) {
      return(
        <div className='container'>
          <h1>Gêneros</h1>
          <Link className='btn btn-primary' to='/generos/novo'>Novo Gênero</Link>
          <div className='alert alert-warning' role='alert'>
            Você não possui nenhum gênero criado
          </div>
        </div>
      )
    }

    const renderizaLinha = record => {
      return (
        <tr key={record.id}>
          <th scope='row'>{record.id}</th>
          <td>{record.name}</td>
          <td>
            <button className='btn btn-danger' onClick={() => deleteGenero(record.id)}>Remover</button>
            <Link className='btn btn-success' to={'/generos/' + record.id}>Editar</Link>
          </td>
        </tr>
      )
    }

    return (
      <div className='container'>
        <h1>Generos</h1>
        <Link className='btn btn-primary' to='/generos/novo'>Novo Gênero</Link>
        <table className='table table-dark'>
          <thead>
            <tr>
              <th scope='col'>Id</th>
              <th scope='col'>Nome</th>
              <th scope='col'>Ações</th>
            </tr>
          </thead>
          <tbody>
            {data.map(renderizaLinha)}
          </tbody>
        </table>
      </div>
    )
  }

export default Generos  
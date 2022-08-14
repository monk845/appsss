import React from 'react'
import Posts from '../../componentes/themes/post'

export const Post = () => {


  const data = [
    {
      imagenid: `themes/nord/nord.svg`,
      nombre: 'Nord',
      descripcion: 'lorem inpso creation theme for visual code',
    }
  ]

  return (

    <>

      {
        data.map((item, i) => (

          <>
            <Posts 
              key={item.id}
              imagenid={item.imagenid}
              nombre={item.nombre}
              descripcion={item.descripcion}
            />
          </>

        ))
      }

    </>

  )
}
export default Post
const peticion = async () => {

    try {

        const repuesta = await fetch('https://jsonplaceholder.typicode.com/posts')
        const datos = await repuesta.json()

        console.log(datos)

    } catch (error) {

        console.log(error)
    }

}
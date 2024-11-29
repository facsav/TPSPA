const Home = () => {


    return(
        <>
            <section id="home">
                <div className="info">
                    <h1>Bienvenidos!</h1>
                    <p>Este es un juego de adivinar un número de 4 cifras.</p>
                    <h2>Instrucciones: </h2>
                    <p>Ingrese un numero de 4 digitos. El programa ira diciendo cuantos dígitos están correctos 
                    (el digito está en la posición correcta), cuantos regular (el digito está en otra posición) 
                    y cuantos mal (no existe en el número)</p>
                    <br />
                    <p>Buen juego!</p>
                    <button>
                        <a href="/juego">Iniciar</a>
                    </button>
                </div>
            </section>
        </>
    ); 
}

export default Home;
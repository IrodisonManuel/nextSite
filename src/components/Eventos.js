function Eventos({numero}){

    function meuEvento(){
        console.log(`opá fui activado ${numero}`)
    }

    return (
        <>
            <p>Click para disparar um evento</p>
            <button onClick={meuEvento}>Active!</button>
        
        </>
    )
}
export default Eventos
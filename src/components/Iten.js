import PropTypes from 'prop-types'
function Iten({marca,ano_lancamento}){
    return (
        <>
        <li>{marca} - {ano_lancamento}</li>
        </>
    )
    
}
// este elemento serve para validar as props 
Iten.propTypes={
    marca:PropTypes.string.isRequired,
    ano_lancamento:PropTypes.number.isRequired,
}
Iten.defaultProps ={
    marca:"Faltou a marca",
    ano_lancamento:0,
}
export default Iten
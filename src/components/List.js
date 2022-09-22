import Iten from "./Iten"
function List(){
    return (
        <div>
            <h1>MINHA LISTA</h1>
            <ul className="listas">
            <Iten marca="Suzuki"/>
            </ul>
            <ul className="listas" >
               <Iten marca="Ferrare" ano_lancamento={19198}/>
               <Iten marca="lamborquine" ano_lancamento={2000}/>
               <Iten marca="getor" ano_lancamento={2018}/>
               <Iten marca="Chervo" ano_lancamento={1999}/>
               <Iten  ano_lancamento={1999}/>
            </ul>
        
        </div>
    )
}
export default List 
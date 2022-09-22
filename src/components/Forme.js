import emailjs from "emailjs-com";
import React from 'react';
import saiba from "./saiba";
function Forme() {
// const express = require('express')
// const app = express()


   function cadastrar(e){
    e.preventDefault();
    
   

    emailjs.sendForm('servicoMensagem', 'template_fykdgd5', e.target, 'kXslcMWIn_TzoC6tt')
      .then((result) => {
          alert('mensagem enviada com sucesso');
      }, (error) => {
        alert(error.message);
      });
      e.target.reset()
   }
   const url="undraw_Join_re_w1lh.png"
    return(
        <div className="formulario">
             <h2>Cadastro do aluno</h2>
            <img src={url} />
        <form onSubmit={cadastrar} >
            
        {/* <input type="hidden" name="accessKey" value="1387c9ec-d59f-4346-b521-df56d4330cda"/>
            <input type="hidden" name="redirectTo" value="index.html" class="d-md actualise"/>
                            <input type="hidden" name="replyTo" value="@"></input> */}
            <div>
               
                <input className="inpt" type="text" for="firtname" name="nome" placeholder="Nome: Tatiana casaca" required />

            </div>
            <div>
               
                <input className="inpt"  type="email" for="email" name="email" placeholder="E-mai: estudante@gmail.com" />

            </div>
            <div>
            
                <input className="inpt"  type="tel" for="telefone" name="telefone"  placeholder="(+244) xxx xxx xxx" required/>
                
            </div>
            <div>
                <input className="inpt"  type="textr" for="curso" name="curso" placeholder=" Digite seu curso da lista" required/>
                
            </div>
            <div>
               
                 <input className="inpt"  id="btn" type="submit" value="Enviar cadastro"   />
             
                 
            </div>

        </form>
        <div >
                <saiba />
        </div>

        

















        
        
        </div>

    )

}
export default Forme
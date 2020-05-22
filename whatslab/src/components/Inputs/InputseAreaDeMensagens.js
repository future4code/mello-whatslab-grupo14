import React from 'react';
import { ContainerGeral,
         ContainerMensagensPostadas,
         ContainerMensagemEnviada,
         ContainerInputs,
         Negrito } from './Style'

export default class InputseAreaDeMensagens extends React.Component {
    
 // estado para os inputs
  state = { 
   // array vazio pois o inicio não deve conter nada na tela
   arrayDadosDoInput: [],

  // variaveis para os dados digitados nos inputs
   valorInputUsuario: "",
   valorInputMensagem: ""
  }

  onClickadicionaPost = (event) => {
    // O comportamento padrão do Form é atualizar a pagina depois do envio dos dados. O preventDefault previne essa atualização padrão.
    event.preventDefault()

    // variavel para representar os dados digitados no input
    const novoPost = { 
      nome: this.state.valorInputUsuario,
      mensagem: this.state.valorInputMensagem
    }

    // Um novo array é criado para poder adicionar os novos posts usando como copia o principal
    const novoArrayDeDados = [...this.state.arrayDadosDoInput, novoPost] 

    // Agora o array do estado é o novoArrayDeDados criado acima
    this.setState({ arrayDadosDoInput: novoArrayDeDados }) 

    // para apagar os dados dos inputs pega-se as variaveis dos inputs e coloca-se uma string vazia
    this.setState({ valorInputMensagem: "", valorInputUsuario: ""})
  }

  // É ativado quando o usuario digita algo no input (event.target) e guarda o value do que foi digitado dentro no estado
  onChangeUsuario = (event) => { 
    this.setState({ valorInputUsuario: event.target.value })
  }

  // É ativado quando o usuario digita algo no input (event.target) e guarda o value do que foi digitado dentro no estado.
  onChangeMensagem = (event) => {
    this.setState({ valorInputMensagem: event.target.value })
  }

  render(){
    
    const postar = this.state.arrayDadosDoInput.map((dado) => {
      return(
      <ContainerMensagemEnviada>
        <Negrito>{dado.nome}:</Negrito>{dado.mensagem}
      </ContainerMensagemEnviada>
      )
    })

    return (
     <ContainerGeral>
       <ContainerMensagensPostadas>
         {postar}
       </ContainerMensagensPostadas>
       
       <ContainerInputs>
        <form>
         <input
           // chama o valor do estado de nomeUsuario
           value={this.state.valorInputUsuario} 
           // invoca onChangeUsuario para que o input possa ser alterado pelo usuário
           onChange={this.onChangeUsuario}
           placeholder="Usuário"
           size="12"
         />

         <input
           // chama o valor do estado de mensagemDigitada
           value={this.state.valorInputMensagem} 
           // invoca onChangeMensagem para que o input possa ser alterado pelo usuário
           onChange={this.onChangeMensagem}
           placeholder="Mensagem"
           size="30"
         />

         <button
           onClick={this.onClickadicionaPost}
           >Enviar
         </button>
        </form>
       </ContainerInputs>
     </ContainerGeral>
    );
  }
}
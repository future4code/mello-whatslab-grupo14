import styled from 'styled-components';

export const ContainerGeral = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const ContainerMensagensPostadas = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 600px;
  width: 400px;
  background-color: rgb(229,221,213);
`

export const ContainerMensagemEnviada = styled.div`
  display: flex;
  border-radius: 4px;
  width: 200px;
  height: 25px;
  margin: 10px;
  background-color:white;
`

export const ContainerInputs = styled.div`
  display: flex;
  justify-content: center;
  height: 30px;
  width: 400px;
`

export const Negrito = styled.p`
  font-weight: bold;
  background-color:white;
  padding-right: 10px;
  margin-left: 5px;
`
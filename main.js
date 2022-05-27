const character = document.getElementsByClassName("character")[0]; //declaração da variável personagem
const containerCharacter = document.getElementsByClassName("container-character")[0]; //declaração da variável "containerCharacter"


const VELOCITY = 10; //declaração da distância que o personagem se move por click

const SCREEN_WIDTH = screen.width; //declaração do comprimento da tela
const SCREEN_HEIGHT = screen.height; //declaração da altura da tela

let xPosition = 500; //declaração da posição horizontal do personagem(inicialmente em 500)
let yPosition = 300; //declaração da posição vertical do personagem(inicialmente em 300)

const keysAvaiable = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"] //declaração das opções de movimento do personagem
const directions = ["turnUp", "turnLeft", "turnRight", "turnDown"]; //declaração das ações que o personagem vai realizar

window.addEventListener("keydown", (event) => { //elemento que vai "prestar atenção" na ação do usuário
    const key  = event.key; //declaração do "key" que vai ser computar o evento ocorrido

    const keyPressedAvaiable =  keysAvaiable.some((currentKey) => { //função para colocar o evento ocorrido para a variável "KeyPressedAvaiable"
        return currentKey === key; //retorna o evento que ocorreu
    })

    if(!keyPressedAvaiable) return; //ativa a função

    directions.forEach((direction) => { //função para fazer o personagem andar
        if(character.classList.contains(direction)) character.classList.remove(direction); //faz o personagem dar um passo a cada click
    })


    if(key === "ArrowUp"){ //caso for identificado o uso da seta para cima esse código será executado
        character.classList.add("turnUp"); //adiciona "turnUp" à lista de movimentos do personagem
        yPosition -= VELOCITY; //muda a posição do personagem 10 posições acima
        if(yPosition === 0){ //caso o personagem chegue à posição limite de cima(0) esse código será executado
            yPosition = 650; //o personagem aparece à margem de baixo(650)
        }
    }

    if(key === "ArrowDown"){ //caso for identificado o uso da seta para baixo esse código será executado
        character.classList.add("turnDown"); //adiciona "turnDown" à lista de movimentos do personagem
        yPosition += VELOCITY; //muda a posição do personagem 10 posições abaixo
        if(yPosition === 650){ //caso o personagem chegue à posição limite de baixo(650) esse código será executado
            yPosition = 0; //o personagem aparece à margem de cima(0)
        }
    }

    if(key === "ArrowLeft"){ //caso for identificado o uso da seta para esquerda esse código será executado
        character.classList.add("turnLeft"); //adiciona "turnLeft" à lista de movimentos do personagem
        xPosition -= VELOCITY; //muda a posição do personagem 10 posições a esquerda
        if(xPosition === -20){ //caso o personagem chegue à posição limite da esquerda(-20) esse código será executado
            xPosition = 1450; //o personagem aparece à margem da direita(1450)
        }
    }

    if(key === "ArrowRight"){ //caso for identificado o uso da seta para direita esse código será executado
        character.classList.add("turnRight"); //adiciona "turnRight" à lista de movimentos do personagem
        xPosition += VELOCITY; //muda a posição do personagem 10 posições a direita
        if(xPosition === 1450){ //caso o personagem chegue à posição limite da direita(1450) esse código será executado
            xPosition = -20; //o personagem aparece à margem da esquerda(-20)
        }
    }

    containerCharacter.style.top = `${yPosition}px`; //move o container para a posição em que o personagem está verticalmente
    containerCharacter.style.left = `${xPosition}px`; //move o container para a posição em que o personagem está horizontalmente
});

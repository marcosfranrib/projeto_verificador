function verificarPessoa(){
    
    var container_ano = new Date()
    var ano_atual = container_ano.getFullYear()
    var input_ano = document.getElementById('input_ano_nascimento')
    var exibir = document.getElementById('paragrafo')
    var imagem = document.getElementById('imagem')
    var genero = document.getElementsByName('sexo')
    var sexo = ''
    var idade = ano_atual - Number(input_ano.value)
    

    if(input_ano.value.length == 0){
       
        window.alert('[ERRO] insira uma data')
        exibir.innerHTML = 'Preencha os dados acima <br> para ver o resultado.'
        imagem.style.display = 'none'
        

    } else if(input_ano.value > ano_atual || input_ano.value < 1923 ||  input_ano.value == ano_atual){
            window.alert(`[Erro] ${input_ano.value} não é um ano válido`)
            exibir.innerHTML = 'Preencha os dados acima <br> para ver o resultado.'
            imagem.style.display = 'none'
        }
    
        else if(genero[0].checked && idade <= 4){
            imagem.src = 'imagens/bmo.png'
            imagem.style.display = 'block'

            if(idade == 1){
                exibir.innerHTML = `é um bêbê de ${idade} ano`
            }else{
                exibir.innerHTML = `é um bêbê de ${idade} anos`
            }
            
        }
    
        else if(genero[0].checked && idade >= 5 && idade <= 11){
            imagem.src = 'imagens/cm.png'
            imagem.style.display = 'block'
            exibir.innerHTML = `é um menino de ${idade} anos`
        
        }

        else if(genero[0].checked && idade >= 12 && idade <= 17){
            imagem.src = 'imagens/adh.png'
            imagem.style.display = 'block'
            exibir.innerHTML = `é um rapaz de ${idade} anos`
        
        }

        else if(genero[0].checked && idade >= 18 && idade < 60){
            imagem.src = 'imagens/ah.png'
            imagem.style.display = 'block'
            exibir.innerHTML = `é um homem de ${idade} anos`          
        }

        else if(genero[0].checked && idade >= 60){
            imagem.src = 'imagens/ih.png'
            imagem.style.display = 'block'
            exibir.innerHTML = `é um homem idoso de ${idade} anos`
        }

        else if(genero[1].checked && idade <= 4){
            imagem.src = 'imagens/bma.png'
            imagem.style.display = 'block'
           
            if(idade == 1){
                exibir.innerHTML = `é uma bêbê de ${idade} ano`
            }else{
                exibir.innerHTML = `é uma bêbê de ${idade} anos`
            }
        }

        else if(genero[1].checked && idade >= 5 && idade <= 11){
            imagem.src = 'imagens/cg.png'
            imagem.style.display = 'block'
            exibir.innerHTML = `é um menina de ${idade} anos`
            
        }

        else if(genero[1].checked && idade >= 12 && idade <= 17){
            imagem.src = 'imagens/adm.png'
            imagem.style.display = 'block'
            exibir.innerHTML = `é uma moça de ${idade} anos`
        
        }

        else if(genero[1].checked && idade >= 18 && idade < 60){
            imagem.src = 'imagens/am.png'
            imagem.style.display = 'block'
            exibir.innerHTML = `é uma mulher de ${idade} anos`
        }

        else if(genero[1].checked && idade >= 60){
            imagem.src = 'imagens/im.png'
            imagem.style.display = 'block'
            exibir.innerHTML = `é um mulher idosa de ${idade} anos`
        }

        input_ano.value = '';

    }

    function mudarCor(){

        var botao = document.getElementById('botao')
        botao.style.background = '#3b5bb3'
        botao.style.color = 'white'
       
    }

    function voltarCor(){
        var botao = document.getElementById('botao')
        botao.style.background = '#F0F0F0'
        botao.style.color = 'black'

    }

   
        



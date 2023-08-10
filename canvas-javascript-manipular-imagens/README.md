# Mini App para Cortar imagem com HTML5 Canvas e Javascript

Com o uso de HTML5 Canvas `<canvas>` + JS, nós iremos criar um pequeno app que irá cortar uma imagem.

## Antes de começar 

O assunto não é complexo, mas precisamos ter uma boa base de HTML, CSS e especialmente JavaScript, pois iremos fazer bastante manipulação da DOM, de objetos além de um pouquinho de cálculos matemáticos.

## Bora codar

### Ajustes iniciais (molezinha) ~ 3 minutos
* [x] Ajustar os arquivos base da aplicação (link na descrição)
* [x] Criar o elemento button#select-image>input#photo-file[type=file] para Selecionar Imagem
* [x] Estilizar botão de upload para esconder o campo de arquivo

### Select & Preview image (tranquilidade) ~ 12 minutos
* [x] Criar o arquivo scripts.js
* [x] Adicionar evento 'click' no elemento #select-image, que irá executar a funcionalidade de clicar no elemento #photo-file
* [x] Ao terminar o evento de carregar a DOM
* [x] Adicionar evento 'change' no elemento #photo-file
* [x] Criar um novo FileReader()
* [x] Usar a funcionalidade .readAsDataURL() para leitura do arquivo
* [x] Ao terminar de ler o arquivo, adicionar ao src do elemento img#photo-preview (criar no HTML)

### Selection tool (começando a brincadeira) ~ 30 minutos
* [x] Criar elemento #selection-tool no html
* [x] Estilizar o elemento
* [x] No JS, criar evento do mouse
    * [x] mouseover, mousedown, mousemove, mouseup
* [x] Registrar eventos
* [x] Adicionar funcionalidade aos eventos
    * [x] mouseover: crosshair no cursor
    * [x] mousedown:
        * [x] Registrar posicionamentos iniciais de X e Y (absolutos e relativos)
        * [x] Adicionar flag de início de seleção 
    * [x] mousemove:
        * [x] Registrar posicionamentos finais de X e Y
        * [x] Atualizar estilos visuais da seleção
    * [x] mouseup:
        * [x] Registrar posicionamento final (relativo do X e Y)
        * [x] Remover flag de início de seleção 

## HTML5 Canvas API
* [x] Interface para desenhar gráficos via JS e HTML.
* [x] Animações, gráficos de games, visualizador de dados, `manipulação de photos` e até processamento de vídeo em tempo real.
* [x] Possui um foco em gráficos 2D.

*Para 3D poderíamos usar o WebGL API, que também usará a tag `<canvas>`*

Para nós, será de extrema importância utilizar o canvas, pois iremos manipular a imagem (crop), e só conseguimos fazer esse corte via canvas.

## Continuar a codar

### Utilizar o canvas ao invés da imagem (não é tão complexo vai) ~ 10 minutos
* [x] Criar o elemento canvas
* [x] Criar o contexto do elemento
* [x] Ao terminar de carregar a imagem
    * [x] Ajustar a largura e altura do canvas
    * [x] Limpar o contexto
    * [x] Desenhar a imagem no contexto
    * [x] Atualizar o preview da imagem, agora, com o contúdo do canvas ao invés da imagem

### Cortar a imagem (agora a brincadeira ficou séria) ~ 25 minutos
* [x] Adicionar elemento button#crop-image
* [x] Mostrar somente quando finalizar a seleção
* [x] Adicionar evento 'click' para quando clicar no botão
* [x] Calcular o corte proporcional ao tamanho da imagem na tela
    * [x] Calcular e armazenar a fator proporcional da imagem
        * [x] FatorWidth: divida a largura da foto pela largura do preview
        * [x] FatorHeight: divida a altura ada foto pela altura do preview
    * [x] Multiplicar a largura da seleção pelo fator de largura
    * [x] Fazer o mesmo acima para altura
* [x] Pegar do contexto do canvas, a região selecionada
    * [x] Calcular e guardar a posição X e Y verdadeiras, para utilizar no ctx
        * [x] Para pegar o X: Multiplicar a posição relativa do X pelo FatorWidth
        * [x] Para pegar o Y: Multiplicar a posição relativa do Y pelo FatorHeight
* [x] Limpar o canvas
* [x] Ajustar a largura e altura do canvas e da imagem
* [x] Esconder a ferramenta de seleção
* [x] Atualizar o preview da imagem

### Download da imagem (pegando leve nesse finalzinho) ~ 8 minutos
* [x] Criar elemento button#download
* [x] Mostrar elemento após o corte da imagem
* [x] Adicionar evento de 'click' ao botão
* [x] Criar a funcionalidade de download
    * [x] Criar um elemento a
    * [x] Adicionar o nome da foto (modificado) à propriedade download
    * [x] Adicionar canvas.toDataURL() ao atributo href
    * [x] Clicar no elemento

### Found bug
* [x] Atualizar o canvas sempre que carregar uma nova imagem

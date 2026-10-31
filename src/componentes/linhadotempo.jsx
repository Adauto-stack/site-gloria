import Layout from './layout.jsx'
import '../estilos/linhadotempo.css'
import './PlayerMusica6.jsx'
import PlayerCard6 from './PlayerMusica6.jsx'
/*
  ============================================================
  COMO EDITAR A LINHA DO TEMPO
  ============================================================
  Cada objeto abaixo é um momento. Campos:

  - data:      texto que aparece em cima (ex: '14/02/2021')
  - titulo:    texto em negrito
  - descricao: (OPCIONAL) um texto curtinho embaixo do título
  - imagem:    (OPCIONAL) caminho da foto. Se não quiser foto, apague
               a linha ou deixe imagem: null

  ONDE COLOCAR AS FOTOS:
  Crie a pasta  public/fotos-timeline/  na raiz do projeto
  e coloque as imagens lá. Depois use o caminho começando com "/":
      imagem: '/fotos-timeline/primeiro-beijo.jpg'

  A ORDEM do array = a ordem na tela (de cima para baixo).
  Os lados (direita/esquerda) alternam sozinhos.
*/
const momentos = [
  {
    data: '25/12/2025',
    titulo: 'O Dia que começamos a nos seguir no instagram',
    descricao: 'Raramente eu sigo outras mulheres, eu apertei com muita dúvida de você não aceitar, mas você aceitou, e o resto é história.',
    imagem: null, // exemplo sem foto
  },
  {
    data: '20/02/2026',
    titulo: 'Nossa primeira conversa',
    imagem: './fotos/print.jpeg', // exemplo com foto
  },
  {
    data: '25/02/2026',
    titulo: 'Nosso primeiro encontro pessoalmente.',
    descricao: 'Era uma quarta feira hora do intervalo do almoço na escola, dia de futsal, mas tinha outra coisa que estava em jogo',
    imagem: null,
  },
  {
    data: '12/03/2026',
    titulo: 'O Dia que você disse que me amava',
    descricao: 'O dia que eu dormi feliz em saber que você me amava, e eu também te amava.',
    imagem: './fotos/print.jpeg',
  },
  {
    data: '04/04/2026',
    titulo: 'Nosso primeiro beijo',
    descricao: 'Minha primeira vez que eu beijei uma mulher, e foi com você, e foi maravilhoso.',
    imagem: null,
  },
    {
    data: '08/05/2026',
    titulo: 'Quando eu conheci sua mãe',
    descricao: 'Era reunião dos pais, e eu tava distraido quando do nada você chegou com a sua mãe.',
    imagem: null,
  },
    {
    data: '12/06/2023',
    titulo: 'Sua primeira vez aqui em casa',
    descricao: 'Era logo no dia dos namoraddos',
    imagem: './dist/fotos/agente5.jpg'
  },
    {
    data: '27/07/2023',
    titulo: 'Conheci seu pai',
    descricao: 'Foi no dia das suas fotos internas, tava meio nervoso por conhecer seu pai pela a primeira vez ',
    imagem: null,
  },
    {
    data: '16/08/2026',
    titulo: 'Sua primeira vez no meu interior',
    descricao: 'Era aniversário do meu primo, e foi sua primeira vez conhecendo minha vó(parte de mãe) ',
    imagem: null
  },
      {
    data: '13/09/2026',
    titulo: 'Sua primeira vez visitando os meus avós(parte de pai)',
    descricao: 'Dia do meu aniversário do meu vô, até então você era quase uma lenda urbana mas nesse dia eu te apresentei pra minha família ',
    imagem: null
  },
      {
    data: '11/10/2026',
    titulo: 'Primeiro Derby juntos',
    descricao: 'O corinthians perdeu,  mas foi um momento marcante por ser o primeiro de muitos',
    imagem: null
  },
      {
    data: '23/10/2026',
    titulo: 'Nova etapa',
    descricao: 'O dia em que oficializamos o nosso namoro',
    imagem: './fotos/nosDois.jpg'
  },
        {
    data: '∞',
    titulo: 'Pra sempre nós',
    descricao: 'Não importa o momento, nunca deixaremos de nos amar.',
    imagem: './dist/fotos/agente2.jpg'
  },

  
  // 👇 Para adicionar um momento novo, copie um bloco acima e cole aqui
]

function LinhaDoTempo() {
  return (
    <div>
      {/* Menu/título/corações que já ficam no seu layout.jsx */}
      <Layout />

      <PlayerCard6/>
      <main className="timeline-pagina">
        <ol className="timeline">
          {momentos.map((momento, index) => (
            <li
              key={index}
              /* index par = direita | index ímpar = esquerda */
              className={`timeline-item ${index % 2 === 0 ? 'direita' : 'esquerda'}`}
            >
              {/* Coraçãozinho em cima da linha vertical */}
              <span className="timeline-marcador" aria-hidden="true">
                💚
              </span>

              <div className="timeline-conteudo">
                <span className="timeline-data">{momento.data}</span>
                <h3 className="timeline-titulo">{momento.titulo}</h3>

                {/* Só aparece se você preencher "descricao" */}
                {momento.descricao && (
                  <p className="timeline-descricao">{momento.descricao}</p>
                )}

                {/* Só aparece se você preencher "imagem".
                    Para mudar o tamanho da foto, edite .timeline-foto no CSS */}
                {momento.imagem && (
                  <img
                    className="timeline-foto"
                    src={momento.imagem}
                    alt={momento.titulo}
                    loading="lazy"
                  />
                )}
              </div>
            </li>
          ))}
        </ol>
      </main>
    </div>
  )
}

export default LinhaDoTempo
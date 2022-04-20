var cardObject = [
    {
        title: "Ada Lovalace",
        image: "https://s2.glbimg.com/paF5KTEVGzMU-ZcZa2mjYicNDjM=/e.glbimg.com/og/ed/f/original/2015/03/09/ada.jpg",
        describe: "Possui reconhecimento histórico e significativo na tecnologia por ter escrito o primeiro algoritmo para ser processado por uma máquina.",
        site: "https://kids.nationalgeographic.com/history/article/ada-lovelace " //artigo do national geographic que ocnta ahistória dela
    },
    {
        title: "Carol Shaw",
        image: "https://raparigasdocodigo.pt/wp-content/uploads/2020/09/shaw.png",
        describe: "Foi uma desenvolvedora de jogos, mais especificamente a primeira mulher na indústria dos games, sendo contratada pela Atari em que desenvolveu 2 jogos e posteriormente foi para a Activision em que programou o River Raid - que é considerado um dos clássicos até a atualidade. ",
        site: "https://projetolua.ifce.edu.br/revista/carol-shaw-a-primeira-mulher-desenvolvedora-de-jogos-eletronicos/ " //artigo com a bibliografia de Shaw
    },
    {
        title: "Jean Sammet",
        image: "https://cacm.acm.org/system/assets/0002/7459/052317_Promo_Sammet.large.jpg?1495570658&1495570658",
        describe: "Ela foi PhD em Ciência da Computação, criadora de uma das primeiras linguagens computadorizadas, o FORMAC,  que era utilizado para manipular fórmulas matemáticas e auxiliar nos cálculo complexos que entrou em vigor nos anos de 1960, através da corporação IBM. Também, foi uma das criadoras do COBOL.",
        site: "https://projetolua.ifce.edu.br/encyclopedia/jean-e-sammet/ "
    },
    {
        title: "Grace Hopper",
        image: "https://www.institutodeengenharia.org.br/site/wp-content/uploads/2018/12/grace-hopper-blog-da-engenharia-2.jpg",
        describe: "Analista de Sistemas da marinha dos EUA nas décadas de 40 e 50, desenvolveu uma linguagem de programação que foi base da criação do COBOL, que até hoje é utilizado em bancos de dados comerciais, e também foi autora do termo \"bug\". Hopper foi nomeada a primeira diretora de programação automática da companhia onde trabalhava em 1954, e foi nomeada capitã da marinha norte-americana em 1973.",
        site: "https://www.womenshistory.org/education-resources/biographies/grace-hopper"
    },
    {
        title: "Frances Allen",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Allen_mg_2528-3750K-b.jpg/200px-Allen_mg_2528-3750K-b.jpg",
        describe: "A primeira mulher a ganhar um Prêmio Turing (O nobel da informática). Frances, já trabalhou em otimização de compiladores e também se tornou mentora de suas colegas para aumentar a participação feminina na computação. Em 1989, se tornou IBM Fellow, com a maior honraria da empresa para cientistas, engenheiros e programadores.",
        site: "https://projetolua.ifce.edu.br/encyclopedia/frances-allen/"
    }
]

var card = document.getElementById("mImportantes");

// CARDS
for (var i = 0; i <= cardObject.length; i++) {
    card.innerHTML += 
    `<div class="card mx-auto mt-5 cardStyle" style="width: 18rem; ">
    <img src="${cardObject[i].image}" class="mt-3 card-img-top" alt="..." />
        <div class="card-body">
        <h3 class="card-title text-center"> ${cardObject[i].title} </h3>
        <p class="card-text text-center mt-1"> ${cardObject[i].describe}</p>
        <button style="width: 100%;" type="button" class="btn btn-dark mx-auto mt-1"> <a href="${cardObject[i].site}" target="_blank" style="text-decoration: none; color: white;"> Saiba mais + </a>  </button>
        </div>
    </div>
`};

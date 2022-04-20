var cardObject = [
    {
        title: 'WoMakersCode',
        image: "https://womakerscode.org/assets/images/cover-front.jpg",
        describe: "Impulsiona o protagonismo feminino na tecnologia, através de capacitação, mentoria e empregabilidade",
        site: "https://womakerscode.org/"
    },
    {
        title: 'RePrograma',
        image: "https://t.ctcdn.com.br/s6P5G9z8A9DofK4cEFI6ZDzO8YU=/1211x681/smart/filters:format(webp)/i422105.png",
        describe: "Reduzindo o gap de gênero no setor de tecnologia por meio da educação.",
        site: "https://reprograma.com.br/"
    },
    {
        title: 'PrograMaria',
        image: "https://www.projetodraft.com/wp-content/uploads/2020/02/01-face-ianachan.jpg",
        describe: "Empodera Mulheres através da tecnologia diminuindo o gap de gênero no mercado de trabalho.",
        site: "https://www.programaria.org/"
    },
    {
        title: 'PyLadies Brasil',
        image: "https://staging-brasil-pyladies.herokuapp.com/images/locais/location.png",
        describe: "Comunidade mundial que foi trazida ao Brasil com o propósito de instigar mais mulheres a entrarem na área tecnológica.",
        site: "https://brasil.pyladies.com/"

    },
    {
        title: 'Django Girls',
        image: "https://raw.githubusercontent.com/olasitarska/djangogirls/gh-pages/resources/graphics/logo_square.png",
        describe: "Django Girls é uma organização sem fins lucrativos e uma comunidade que capacita e ajuda as mulheres a organizar oficinas de programação gratuitas.",
        site: "https://djangogirls.org/pt-br/"
    },
    {
        title: 'Digital Innovation One',
        image: "https://www.projetodraft.com/wp-content/uploads/2019/12/digital-innovation-one.jpg",
        describe: "É uma plataforma gratuita de cursos online que disponiliza diversos bootcamps - muitos inclusivos - com possibilidades de contratação por grandes empresas.",
        site: "https://www.dio.me/"
    }
]

var card = document.getElementById("cardProgramas");

// CARDS
for (var i = 0; i <= cardObject.length; i++) {
    card.innerHTML += 
    `<div class="card mx-auto mt-5 cardStyle" style="width: 18rem; ">
    <img src=${cardObject[i].image} class="mt-3 card-img-top" alt="..." />
        <div class="card-body">
        <h3 class="card-title text-center"> ${cardObject[i].title} </h3>
        <p class="card-text text-center mt-1"> ${cardObject[i].describe}</p>
        <button style="width: 100%;" type="button" class="btn btn-dark mx-auto mt-1"> <a href="${cardObject[i].site}" target="_blank" style="text-decoration: none; color: white;"> Abrir site </a>  </button>
        </div>
    </div>
`};

var nav = document.getElementById("nav");

nav.innerHTML = `
<div class="container-fluid ">
<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"> </span>
</button>
    <div class="collapse navbar-collapse d-flex justify-content-center" id="navbarNavDropdown" >
    <ul class="navbar-nav">
        <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#"> Programas inclusivos </a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#influenciadoras"> Mulheres incríveis para seguir </a>
        </li>
        <li class="nav-item">
        <a class="nav-link" href="#mImportantes"> Mulheres históricas </a>
    </li>
    </ul>
    </div>
</div>`
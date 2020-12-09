document.querySelector('body').insertAdjacentHTML('afterbegin', `

<nav class="nav">
    <img src="img/logo 2x.png" alt="" class="logo">
    <a href="index.html" class="nav__text">Home</a>
    <a href="#projects" class="nav__text">Projects</a>
    <a href="about" class="nav__text">About Us</a>
    <a href="#contact" class="nav__text">Contact</a>
</nav>


<div class="navigation">

        <input type="checkbox" class="navigation__checkbox" id="navi-toggle">
        <label for="navi-toggle" class="navigation__button">
            <div class="navigation__icon">&nbsp;</div>
        </label>

        <div class="navigation__background"></div>

        <nav class="navigation__nav">
            <video class="navigation__video " autoplay muted loop><source src="./img/video1.mp4" type="video/mp4"></video>

            <ul class="navigation__list">
                <li class="navigation__item"><a href="index.html" class="navigation__link">Home</a></li>
                <li class="navigation__item"><a href="projects.html" class="navigation__link">Projects</a></li>
                <li class="navigation__item"><a href="Media.html" class="navigation__link">About Us</a></li>
                <li class="navigation__item"><a href="#contact" class="navigation__link">Contact</a></li>

            </ul>
        </nav>

</div>`);

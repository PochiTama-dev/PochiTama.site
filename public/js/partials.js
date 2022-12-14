const home = `
<div id="navbar">
    <a class="active" href="#home">Home</a>
    <a href="#nuestro-equipo">Nuestro Equipo</a>
    <a href="#servicios">Servicios</a>
    <a href="#form">Contacto</a>
</div>
<div class="container">
    <div class="row">
    <div class="col-xs-12">
</div>`;

const about = `
<div class="container">
	<div>
		<div>
			<div class="section-header">
				Nosotros
			</div>
		</div><!-- /.col -->
	</div><!-- /.row -->	
	<div>
		<div>
			<p><highlight>PochiTama.dev</highlight> permite a sus clientes dar vida a proyectos ambiciosos. Partiendo del Análisis de Datos damos forma a Estrategias de Marketing y Productos Digitales, enriquecidos por nuestros Medios de Contenidos. Hablamos de números y resultados, nuestros servicios son sólo la punta del iceberg. La proactividad de nuestro enfoque facilita el trabajo en equipo con nuestros clientes, lo que nos hace estar orgullosos de lo que hacemos.</p>					
		</div><!-- /.col -->
	</div><!-- /.row -->
</div><!-- /.container -->
<!-- /#about -->`;


const nuestroEquipo = `
<div class="section-header">
				Conoce Nuestro Equipo
			</div>
	<section class="slider">
        <div class="slider__container container">
            <i class="fa-solid fa-chevron-left" id="before"></i>

            <section class="slider__body slider__body--show" data-id="1">
                <div class="slider__texts">
                    <h2 class="subtitle">Hola soy Gonzalo Enrique</h2>
                    <h4 class="subtitle2">Tech Leader</h4>
                    <h3 class="subtitle2">Fullstack Developer</h3>
                    <p class="slider__review">ReactJS || NodeJS || NativeScript || PHP || Worpress || JavaScript || MySQL || AngularJS</p>
                        <div class="hability">
                          
                            <div class="sub-hability"><a href="https://github.com/GonzaEnrique27"><i class="fa-brands fa-github"></i></a></div>
                            <div class="sub-hability"><a href="https://www.linkedin.com/feed/?trk=homepage-basic_signin-form_submit"><i class="fa-brands fa-linkedin"></i></a></div>
                            <div class="sub-hability"><a href="https://gonzaenrique27.github.io/Portfolio-ge/"><i class="fa-solid fa-folder-open"></i></a></div>
                          </div>
                </div>
                <a class="slider__picture">
                    <img src="./public/img/tech-team/Gonza.png" alt="Gonzalo" class="slider__img">
                </a>
            </section>

            <section class="slider__body" data-id="2">
                <div class="slider__texts">
                    <h2 class="subtitle">Hola soy Ulises Armolla</h2>
                    <h4 class="subtitle2">Stakeholder</h4>
                    <h3 class="subtitle2">Back-end Developer</h3>
                    <p class="slider__review">HTML || CSS || JavaScript || ReactJS || NodeJS || ExpressJS || MySQL || Sequelize || PHP</p>
                        <div class="hability">
                          
                            <div class="sub-hability"><a href="https://github.com/armolla"><i class="fa-brands fa-github"></i></a></div>
                            <div class="sub-hability"><a href="https://www.linkedin.com/in/ulisesarmolla/"><i class="fa-brands fa-linkedin"></i></a></div>
                            <div class="sub-hability"><a href="https://armolla.github.io/"><i class="fa-solid fa-folder-open"></i></a></div>
                          </div>
                </div>

                <a class="slider__picture">
                    <img src="./public/img/tech-team/Ulises.jpeg" alt="Ulises" class="slider__img">
                </a>
            </section>

            <section class="slider__body" data-id="3">
                <div class="slider__texts">
                    <h2 class="subtitle">Hola soy Jonathan Ibarrola</h2>
                    <h4 class="subtitle2">Diseño UX/UI</h4>
                    <h3 class="subtitle2">Fullstack Developer</h3>
                    <p class="slider__review">HTML || CSS || JavaScript || ReactJS || NodeJS || ExpressJS || MySQL || Sequelize</p>
                        <div class="hability">
                          
                            <div class="sub-hability"><a href="https://github.com/joni2000"><i class="fa-brands fa-github"></i></a></div>
                            <div class="sub-hability"><a href="https://www.linkedin.com/in/ibarrola-jonathan/"><i class="fa-brands fa-linkedin"></i></a></div>
                            <div class="sub-hability"><a href="https://j-i-portfolio.herokuapp.com/"><i class="fa-solid fa-folder-open"></i></a></div>
                          </div>
                </div>

                <a class="slider__picture">
                    <img src="./public/img/tech-team/Jonathan1.jpeg" alt="Jonathan" class="slider__img">
                </a>
            </section>

            <section class="slider__body" data-id="4">
                <div class="slider__texts">
                    <h2 class="subtitle">Hola soy Braian Gomez</h2>
                    <h4 class="subtitle2">Diseño Grafico</h4>
                    <h3 class="subtitle2">Front-end Developer</h3>
                    <p class="slider__review">ReactJS || NodeJS || HTML5 || CSS3 || Worpress || Adobe Illustrator || Adobe Photoshop</p>
                    
                        <div class="hability">
                          
                            <div class="sub-hability"><a href="https://github.com/BraianGomez9"><i class="fa-brands fa-github"></i></a></div>
                            <div class="sub-hability"><a href="https://www.linkedin.com/in/braian-nahuel-gomez-9b8730223/"><i class="fa-brands fa-linkedin"></i></a></div>
                            <div class="sub-hability"><a href="https://github.com/BraianGomez9"><i class="fa-solid fa-folder-open"></i></a></div>
                          </div>
                </div>

                <a class="slider__picture">
                    <img src="./public/img/tech-team/Braian1.jpeg" alt="" class="slider__img">
                </a>
            </section>

            <i class="fa-solid fa-chevron-right" id="next"></i>
        </div>
    </section>
  <div role="tablist" class="dots"></div>
	</div>
</div>

<!-- /.col -->
	<!-- /.row -->
</div><!-- /.container -->
`;

const servicios = `
<div class="container">
	<div class="row">
		<div class="col-xs-12">
			<div class="section-header">
				Servicios
			</div>
		</div><!-- /.col -->
	</div><!-- /.row -->
	<div class="row">
		<div class="feature-container col-xs-12">
			<div class="row">
				<div class="feature col-xs-8 col-xs-offset-2 col-sm-4 col-sm-offset-0 text-center">
					<svg class="lnr lnr-laptop-phone"><use xlink:href="#lnr-laptop-phone"></use></svg>
					<h4>Digital Natives</h4>
					<p>Los datos, la experiencia y la innovación inspiran nuestro enfoque. Nos centramos en la innovación, investigando nuevas tecnologías digitales para ofrecer nuevas soluciones y servicios.</p>
				</div><!-- /.feature -->
                <div class="feature col-xs-10 col-xs-offset-1 col-sm-4 col-sm-offset-0 text-center">
					<svg class="lnr lnr-users"><use xlink:href="#lnr-users"></use></svg>
					<h4>Company Network</h4>
					<p>Contamos con una sólida red de actores digitales que, como nosotros, creen en la innovación y contribuyen al éxito de nuestros proyectos.</p>
				</div><!-- /.feature -->
                <div class="feature col-xs-10 col-xs-offset-1 col-sm-4 col-sm-offset-0 text-center">
					<svg class="lnr lnr-rocket"><use xlink:href="#lnr-rocket"></use></svg>
					<h4>Multipotencial</h4>
					<p>Cada miembro del equipo participa en el proyecto <highlight>PochiTama.dev</highlight> con sus propias habilidades. Nos gustan los grupos de personas altamente competentes. Nuestra cultura empresarial nos convierte en una máquina de mover con decisiones centradas y estratégicas. Pedimos a nuestros clientes que conozcan personalmente a los equipos que trabajan en el proyecto, para dar un rostro y una voz a cada miembro del equipo que trabaja en el proyecto y sus objetivos.</p>
				</div><!-- /.feature -->
		    </div><!-- /.row -->
		</div><!-- /.feature-container -->
    </div>
</div><!-- /#features -->`;

const contact = `
<form class="contactForm" autocomplete="off" action="https://getform.io/f/566cb1ba-bdff-4158-93b7-0ed82642b0e7" method="POST">
    <legend class="section-header">Formulario de contacto</legend>
    <div class="input-group">
	<label for="name" class="input-label">Nombre</label>
        <input class="contactInput" type="text" name="name" id="name">
        <span class="errorsMsg"></span>
    </div>
    <div class="input-group">
	    <label for="email" class="input-label">Email</label>
        <input class="contactInput" type="text" name="email" id="email">
        <span class="errorsMsg"></span>
    </div>
    <div class="input-group">
	    <label for="phone" class="input-label">Telefono</label>
        <input class="contactInput" type="text" name="phone" id="phone">
        <span class="errorsMsg"></span>
    </div>
    <div class="input-group">
        <textarea class="contactInput" name="msg" cols="30" rows="10" id="mensaje" placeholder= "Mensaje"></textarea>
        <span class="errorsMsg"></span>
    </div>
    <input type="hidden" id="captchaResponse" name="g-recaptcha-response">
    <button class="contactBtn" type="submit">Enviar</button>
</form>`;

const footer = `
<div class="gatito"><a href="#home"><img src="./public/img/LogoFinal.svg" alt=""></a></div>
<div class="footer-icons">
   <a href=""><i class="fa-brands fa-instagram"></i></a>
   <a href=""><i class="fa-brands fa-facebook"></i></a>
   <a href=""><i class="fa-brands fa-twitter"></i></a>
   <a href=""><i class="fa-brands fa-linkedin"></i></a>
   <a href=""><i class="fa-brands fa-github"></i></a>
</div>
<div class="footer-copyright">
   <span>Copyright © 2020 - 2022 PochiTamaDevs | Todos los derechos reservados</span>
</div>`;

const partials = [home, about, nuestroEquipo, servicios, contact, footer];
document.addEventListener("DOMContentLoaded", () => {
    const mainContainer = document.getElementById("main-container");
    const playBtn = document.getElementById("play");

    const canciones = {
        "- Milo J -" : "Estaba vivo pero con vos comencé a vivir. \n\n Fuiste una bendición, me queda agradecer.",
        "- Babasonicos -" : "Pasa que sos tan hermosa y yo estoy hechizado. \n\n Y esto no tiene remedio.",
        "- El Mato a un policia motorizado -" : "Y no sabes lo feliz que sos en mis sueños.",
        "- Milo J & Yami Safdie -" : "Con vos nunca hubo nada que dudar. \n\n Si mil miedos pesan menos que mi amor.",
        "- Latin Mafia -" : "¿Molestar en abrazarme? \n\n Créeme, no es molestia, va a sanarme."
    };

    const htmlInicio = `<div class='container'>
                <h3 id='letra'>La posibilidad de un amor es más fuerte que nosotros dos.
                    <br><br>No puedo evitarlo, corre por mis venas como adicción.</h3>
                <p id='autor'>- Silvestre y la naranja -</p>
            </div>
            <div class='container-grass'>
                <button class='anterior' id="prev-btn">Anterior</button>
                <button class='siguiente' id="next-btn">Siguiente</button>
            </div>
            <div class='container-ground'></div>`;

    let contador = 0;
    let prevBtn, nextBtn;

    function mostrarCancion(contador) {
        if (contador === 0) {
            prevBtn.disabled = true;
        } else {
            prevBtn.disabled = false;
        }
        if (contador === Object.keys(canciones).length - 1) {
            nextBtn.disabled = true;
        } else {
            nextBtn.disabled = false;
        }

        const autores = Object.keys(canciones);
        const letras = Object.values(canciones);
        const letraCancion = document.getElementById("letra");
        const autorCancion = document.getElementById("autor");
        
        letraCancion.innerText = letras[contador];
        autorCancion.innerText = autores[contador];

        // Aquí puedes agregar el código para manejar el audio
        switch(contador){
            case 0:
                nextBtn.disabled = true;
                sonido = new Audio("/audios/MILO J - M.A.I final.wav")
                sonido.play()
                sonido.volume = 0.1;
                sonido.onended = () =>{
                   nextBtn.disabled = false;
                }
                break;
            case 1:
               nextBtn.disabled = true
               prevBtn.disabled = true
                sonido = new Audio("/audios/En Privado final.wav")
                sonido.play()
                sonido.volume = 0.1;
                sonido.onended =function(){
                   nextBtn.disabled = false;
                   prevBtn.disabled = false;
                }
                
                break;
            case 2:
                nextBtn.disabled = true
                prevBtn.disabled = true
                sonido = new Audio("/audios/El Mató a un Policía Motorizado - Diamante Roto final.wav")
                sonido.play()
                sonido.volume = 0.1;
                sonido.onended =function(){
                   nextBtn.disabled = false;
                   prevBtn.disabled = false;
                }
                break;
            case 3:
                nextBtn.disabled = true
                prevBtn.disabled = true
                sonido = new Audio("/audios/Milo j Yami Safdie - CARENCIAS DE CORDURA final.wav")
                sonido.play()
                sonido.volume = 0.1;
                sonido.onended =function(){
                   nextBtn.disabled = false;
                   prevBtn.disabled = false;
                }
                break;
            case 4:
                nextBtn.disabled = true;
                prevBtn.disabled = true;
                sonido = new Audio("/audios/LATIN MAFIA - No digas nada final.wav")
                sonido.play()
                sonido.volume = 0.1;
                sonido.onended =function(){
                   prevBtn.disabled = false;
                   alert("Feliz primavera bonita! Ojala sigamos sonando muchas mas! Te quiero <3")
                }
               
                break;
        }    
    }

    function siguienteCancion() {
        contador = (contador + 1) % Object.keys(canciones).length;
        mostrarCancion(contador);
    }

    function anteriorCancion() {
        contador = (contador - 1 + Object.keys(canciones).length) % Object.keys(canciones).length;
        mostrarCancion(contador);
    }

    playBtn.addEventListener("click", () => {
        mainContainer.innerHTML = htmlInicio;
        mainContainer.classList.remove("inicio");

        prevBtn = document.getElementById("prev-btn");
        nextBtn = document.getElementById("next-btn");

        nextBtn.addEventListener("click", siguienteCancion);
        prevBtn.addEventListener("click", anteriorCancion);

        mostrarCancion(contador); // Aquí puedes llamar a la función
    });
});

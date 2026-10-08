// script.js

// 1. Configuración de Listas de Retos
// Aquí debes agregar el resto de tus preguntas
const retosVerdes = [
    "NADA te salvaste de un shot.",
    "Pregunta: ¿Qué idioma te gustaría aprender mágicamente?",
    "Pregunta: ¿Cuál es tu recuerdo más feliz de la infancia?",
    "Pregunta: ¿Qué libro o película te ha hecho llorar?",
    "Pregunta: ¿Cuál es tu comida reconfortante por excelencia?",
    "Pregunta: Si pudieras teletransportarte a cualquier lugar ahora mismo, ¿a dónde irías?",
    "Pregunta: ¿Cuál es tu festividad favorita del año?",
    "Pregunta: ¿Qué deporte te gusta más ver o practicar?",
    "Pregunta: ¿Cuál es tu banda o cantante favorito actual?",
    "Pregunta: ¿Qué es lo más espontáneo que has hecho?",
    "Pregunta: Si tuvieras tres deseos, ¿cuáles serían?",
    "Pregunta: ¿Cuál es tu postre favorito absoluto?",
    "Pregunta: ¿Qué asignatura del colegio odiabas más?",
    "Pregunta: ¿Cuál es el mejor regalo que has recibido?",
    "Pregunta: ¿Qué instrumento musical te gustaría saber tocar?",
    "Pregunta: ¿Cuál es tu cita o frase famosa favorita?",
    "Pregunta: Si pudieras cambiar tu nombre, ¿cuál elegirías?",
    "Pregunta: ¿Qué es lo primero que haces al despertar?",
    "Pregunta: ¿Cuál es tu pasatiempo favorito para los fines de semana?",
    "Pregunta: ¿Qué película puedes ver una y otra vez sin aburrirte?",
    "Pregunta: ¿Cuál es tu emoji más usado?",
    "Pregunta: ¿A qué celebridad te dicen que te pareces?",
    "Pregunta: ¿Cuál es tu estación del año preferida?",
    "Pregunta: ¿Qué es lo más valiente que has hecho?",
    "Pregunta: ¿Cuál es el peor corte de pelo que has tenido?",
    "Pregunta: ¿Qué prefieres, playa o montaña?",
    "Pregunta: ¿Cuál es tu recuerdo de fiesta más divertido?",
    "Reto: toma un shot.",
    "Reto: no hables hasta que termine la vuelta.",
    "Reto: Di el abecedario al revés lo más rápido que puedas (tienes un intento).",
    "Reto: Canta el coro de tu canción favorita con la boca cerrada.",
    "Reto: Cuenta un chiste malo.",
    "Reto: Haz una pose de estatua y mantente así por 15 segundos sin reírte.",
    "Reto: Habla con voz de robot hasta que vuelva a ser tu turno.",
    "Reto: Equilíbrate en un solo pie durante 30 segundos sin caerte.",
    "Reto: Inventa un saludo secreto con el jugador a tu izquierda y muéstrenlo a todos.",
    "Reto: Dale un cumplido sincero a cada persona del grupo.",
    "Reto: Toca tu nariz con la lengua (o haz tu mejor esfuerzo).",
    "Reto: Haz 5 sentadillas lo más rápido que puedas.",
    "Reto: Actua como si fueras retrasado hasta que termine la vuelta.",
    "Reto: Deja que el grupo te cambie el peinado temporalmente (sin cortar ni ensuciar).",
    "Reto: Menciona 5 cosas redondas en la habitación en menos de 10 segundos.",
    "Reto: cada vez que alguien tome por la ruleta te vas a cagar de risa hasta que termine la vuelta.",
    "Reto: desde ahora si quieres hablar susurrale al de tu izquierda y el será tu voz hasta que termine la vuelta.",
    "Reto: Baila la macarena (o cualquier coreografía clásica) sin música.",
    "Reto: Intenta hacer malabares con tres objetos pequeños y seguros (como limones o calcetines).",
    "Reto: Pronuncia tres veces seguidas el trabalenguas: 'Tres tristes tigres tragaban trigo en un trigal'.",
    "Reto: Finge que estás caminando en cámara lenta durante un minuto completo.",
    "Reto: Haz una mímica de tu deporte favorito hasta que alguien del grupo lo adivine.",
    "Reto: Parpadea lo más rápido que puedas durante 15 segundos seguidos.",
    "Reto: Escribe tu nombre en el aire utilizando solo tu nariz.",
    "Reto: cuenta 2 verdades y una mentira si el de tu derecha no acierta la mentira toma un shot.",
    "Reto: Haz el sixseven sacando la lengua.",
    "Reto: ponte el polo o chaqueta al revés hasta que termine la vuelta.",
    "Reto: cada vez que hables debes terminar con un insulto hasta que termine la vuelta.",
    "Reto: juega a no parpadear con la persona de tu derecha el que pierde toma un shot.",
    "Reto: Imagina que el piso es lava; súbete a un asiento o levanta los pies hasta que termine la vuelta.",
    "Reto: Da una vuelta completa en tu lugar caminando sobre tus rodillas.",
    "Reto: Canta la canción de 'Feliz Cumpleaños' utilizando tu mejor voz de cantante de ópera.",
    "Reto: Gira sobre tu propio eje 5 veces y luego intenta caminar en línea recta.",
    "Reto: Nombra 3 países que empiecen con la misma letra del nombre de la persona a tu derecha.",
    "Reto: Muestra tu mejor cara de asombro absoluto y manténla durante 10 segundos.",
    "Reto: Saluda al grupo diciendo 'Hola' en 3 idiomas diferentes.",
    "Reto: Haz una imitación exagerada de cómo corre un superhéroe.",
    "Reto: Deja que la persona a tu izquierda te dibuje un bigote imaginario en la cara.",
    "Reto: Actúa y celebra como si te acabaran de avisar que ganaste la lotería.",
    "Reto: Intenta lamerte el codo (aunque sea casi imposible, debes intentarlo seriamente).",
    "Reto: Pide perdón muy sentidamente a un objeto inanimado de la habitación.",
    "Reto: adivina el color del calzocillo de la persona de tu derecha.",
    "Reto: Enumera 5 marcas de zapatos antes de que pasen 6 segundos.",
    "Reto: habla como ñaja ñaja hasta que termine la vuelta.",
    "Reto: si la persona de tu derecha su nombre empieza con J toma un shot.",
    "Reto: Cuenta del 1 al 20 saltando en tu lugar como si fueras un canguro.",
    "Reto: juega cara o sello con la persona de tu izquierda o derecha (tu eliges) el que pierde toma un shot.",
    "Reto: desde ahora solo tu puedes servir los tragos durante 3 vueltas.",
    "Reto: Si eres jordan paz cueva toma un shot."
];

const retosNaranjas = [
    "TOMAN un shot los que usaron tinder",
    "Reto: abraza a la persona de tu izquierda",
    "TOMAN un shot los que tienen pareja",
    "Reto: Intenta hacer reir a la persona de izquierda por 1 minuto si hace una minima sonrisa el toma un shot y si no se rie tomas tu",
    "TOMAN los que tienen 2 o mas Ex parejas",
    "Reto: Toma 2 shots",
    "TOMAN los que se limpian el poto sentados",
    "Reto: Haz 5 flexiones",
    "TOMAN los que tienen menos del 50% de bateria en su celular",
    "Reto: frotale la pancita a la persona de tu derecha por 10 segundos",
    "TOMAN los que tienen zapatos de color rojo",
    "Reto: Quedate sin zapatos hasta que termine la vuelta",
    "TOMAN los que tienen tatuajes",
    "Reto: Haz un dab sixseven sacando la lengua",
    "TOMAN los que tienen deudas",
    "Reto: andate al baño y lavate las manos",
    "TOMAN los que tienen polo verde",
    "Reto: Quedate en Tpose hasta que termine la vuelta",
    "TOMAN los se hayan mechado alguna vez",
    "Reto: besa la mano de la persona de tu derecha",
    "TOMAN los que tienen un gato",
    "Reto: Ponte tus medias como guantes hasta que termine la vuelta",
    "TOMAN los que les gusta por atras",
    "Reto: Tomate una selfie y mandaselo a tu pareja si no tienes a tu madre o padre",
    "TOMAN los que tienen lentes",
    "Reto: Habla como paul hasta que termine la vuelta",
    "TOMAN los que han comprado un jueguete sexual alguna vez en su vida",
    "Reto: Habla con rimas hasta que termine la vuelta",
    "TOMAN los que han hecho un video de sexo",
    "Reto: Ten los brazos cruzados hasta que termine la vuelta",
    "TOMAN los que han salido con 2 personas a la vez",
    "Reto: Haz el mini mini",
    "Nada, te salvaste viejo",
    "Si eres witi todos te yapean un sol el que no le yapea toma un shot",
    "si a tu derecha o izquierda esta rodrigo puruguay toma 2 shots",
    "Ahora todos se referiran a ti como 'imbecil' durante 2 vueltas"   
]; // Aquí irían tus 50 retos

const retosRojos = [
    "La persona de tu derecha tiene 2 minutos para subir un estado(whattsap,facebook o instagram) gracioso en tu celular que debe permanecer por 20 minutos o tomas 5 SHOTS",
    "Quitate una prenda permanentemente",
    "Verdugo: elige quien toma un shot",
    "Reto: Tienes 5 minutos para hacer reir a alguien de la sala si nadie se rie o hace una minima sonrisa toma 3 shots",
    "Manda un audio a tu pareja gritandole el sixseven si no tienes pareja a tus padres o toma 2 shots",
    "TOMAS 3 SHOTS",
    "Sube un edit que tiene vera preparado en su celular en tu estado por 20 minutos o toma 5 shots"
]; // Aquí irían tus 10 retos

// ... (Aquí arriba mantienes tus arreglos de retosVerdes, retosNaranjas y retosRojos) ...

// Variables de control y referencias al HTML
const rouletteElement = document.getElementById('roulette');
const spinBtn = document.getElementById('spinBtn');
const modal = document.getElementById('challengeModal');
const modalLevel = document.getElementById('modalLevel');
const modalText = document.getElementById('modalText');
const closeModalBtn = document.getElementById('closeModalBtn');

let currentRotation = 0;
let isSpinning = false;

// Función principal para Girar la Ruleta
spinBtn.addEventListener('click', () => {
    if (isSpinning) return; // Evita que giren mientras ya está girando
    
    isSpinning = true;
    spinBtn.disabled = true;

    // Generar número aleatorio del 0.00 al 1.00 para la probabilidad
    const prob = Math.random(); 
    
    let ganadorNivel = "";
    let colorTexto = "";
    let retoSeleccionado = "";
    
    let anguloObjetivo = 0; 
    let rangoMin = 0;
    let rangoMax = 0;

    if (prob <= 0.70) {
        // 70% VERDE (Suave)
        ganadorNivel = "Nivel Suave";
        colorTexto = "#2ecc71";
        rangoMin = 10;
        rangoMax = 240; 
        
        // Verificar si quedan retos verdes
        if (retosVerdes.length > 0) {
            const indiceAleatorio = Math.floor(Math.random() * retosVerdes.length);
            retoSeleccionado = retosVerdes[indiceAleatorio];
            retosVerdes.splice(indiceAleatorio, 1); // Extrae y elimina el reto de la lista
        } else {
            retoSeleccionado = "¡Ya completaron todos los retos de nivel Suave!";
        }

    } else if (prob > 0.70 && prob <= 0.95) {
        // 25% NARANJA (Intermedio)
        ganadorNivel = "Nivel Medio";
        colorTexto = "#f39c12";
        rangoMin = 260;
        rangoMax = 330;

        // Verificar si quedan retos naranjas
        if (retosNaranjas.length > 0) {
            const indiceAleatorio = Math.floor(Math.random() * retosNaranjas.length);
            retoSeleccionado = retosNaranjas[indiceAleatorio];
            retosNaranjas.splice(indiceAleatorio, 1); // Extrae y elimina el reto de la lista
        } else {
            retoSeleccionado = "¡Ya completaron todos los retos de nivel Medio!";
        }

    } else {
        // 5% ROJO (Extremo)
        ganadorNivel = "¡NIVEL EXTREMO!";
        colorTexto = "#e74c3c";
        rangoMin = 345;
        rangoMax = 355;

        // Verificar si quedan retos rojos
        if (retosRojos.length > 0) {
            const indiceAleatorio = Math.floor(Math.random() * retosRojos.length);
            retoSeleccionado = retosRojos[indiceAleatorio];
            retosRojos.splice(indiceAleatorio, 1); // Extrae y elimina el reto de la lista
        } else {
            retoSeleccionado = "¡Ya completaron todos los retos Extremos!";
        }
    }

    // Calcula el grado exacto dentro de la porción ganadora
    anguloObjetivo = Math.floor(Math.random() * (rangoMax - rangoMin + 1)) + rangoMin;

    // Calculamos las vueltas extra
    const vueltasExtra = 1800;
    currentRotation = currentRotation + vueltasExtra + (360 - anguloObjetivo) - (currentRotation % 360);

    // Aplicar la rotación visual vía CSS
    rouletteElement.style.transform = `rotate(${currentRotation}deg)`;

    // Mostrar el reto después de que termine la animación
    setTimeout(() => {
        modalLevel.innerText = ganadorNivel;
        modalLevel.style.color = colorTexto;
        modalText.innerText = retoSeleccionado;
        
        modal.classList.remove('hidden');
        
        isSpinning = false;
        spinBtn.disabled = false;
    }, 4200); 
});

// Cerrar la ventana modal
closeModalBtn.addEventListener('click', () => {
    modal.classList.add('hidden');
});

// 5. Cerrar la ventana modal
closeModalBtn.addEventListener('click', () => {
    modal.classList.add('hidden');
});

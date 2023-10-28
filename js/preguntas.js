//preguntas deportes
const deportes = [
    ["¿Quién es el máximo goleador de la historia de la Copa del Mundo de la FIFA?", [
        "Cristiano Ronaldo", 
        "Lionel Messi", 
        "Pelé", 
        "Diego Maradona"],"Pelé"], //Pelé
    ["¿En qué año se celebraron los primeros Juegos Olímpicos modernos?", [
        "1800", 
        "1896", 
        "1924", 
        "2000"],"1896"], //1896
    ["¿En qué deporte se utiliza una pista de hielo y se compite en las disciplinas de patinaje individual, parejas y danza?", [
        "Patinaje artístico", 
        "Hockey sobre hielo", 
        "Esquí alpino", 
        "Bobsleigh"], "Patinaje artístico"], //Patinaje artístico
    ["¿Quién es el único jugador en la historia de la NBA en promediar un triple-doble durante una temporada completa?", [
        "Michael Jordan", 
        "Kobe Bryant", 
        "LeBron James", 
        "Oscar Robertson"], "Oscar Robertson"], //Oscar Robertson
    ["¿Cuál es el deporte que se juega en un campo de hierba, y los equipos compiten para golpear una pelota de cuero hacia la portería del oponente?", [
        "Cricket", 
        "Hockey sobre césped", 
        "Fútbol australiano", 
        "Rugby"], "Hockey sobre césped"], //Hockey sobre césped
    ["¿En qué deporte se compite en una pista ovalada en una carrera a alta velocidad, y los competidores usan patines con ruedas?", [
        "Patinaje de velocidad", 
        "Ciclismo en pista", 
        "Patinaje artístico sobre ruedas", 
        "Bobsleigh"], "Patinaje de velocidad"], //Patinaje de velocidad
    [" ¿Cuál es el único país que ha ganado la Copa Mundial de Rugby más de tres veces?", [
        "Nueva Zelanda", 
        "Sudáfrica", 
        "Australia", 
        "Inglaterra"], "Nueva Zelanda"], //Nueva Zelanda 
    [" ¿Quién es el piloto de Fórmula 1 con el récord de más campeonatos mundiales ganados?", [
        "Ayrton Senna", 
        "Lewis Hamilton", 
        "Michael Schumacher", 
        "Alain Prost"], "Lewis Hamilton"], //Lewis Hamilton
    [" ¿En qué deporte se utiliza una pelota pequeña llamada 'pelota de jai alai' y se juega en un frontón?", [
        "Pelota vasca", 
        "Squash", 
        "Tenis de mesa", 
        "Pelota al cesto"], "Pelota vasca"], //Pelota vasca
    ["¿Cuál es el único país que ha ganado la Copa Mundial de Cricket más de tres veces?", [
        "India", 
        "Australia", 
        "Inglaterra", 
        "Sudáfrica"], "Australia"] //Australia
]
//preguntas ciencia
const ciencia = [
    ["¿Cuál es el proceso mediante el cual las plantas convierten la luz solar en energía química?",[
        "Fotosíntesis",
        "Respiración",
        "Fermentación",
        "Digestión"], "Fotosíntesis"], //Fotosíntesis 
    [" ¿Cuál es el elemento químico más abundante en la corteza terrestre?",[
        "Hierro",
        "Oxígeno",
        "Carbono",
        "Silicio"], "Hierro"], //Oxígeno  
    [" ¿Cuál es la unidad básica de la materia?",[
        "Átomo",
        "Molécula",
        "Célula",
        "Electrón"], "Átomo"], //Átomo
    [" ¿Cuál es la fuerza que mantiene a los planetas en órbita alrededor del Sol?",[
        "Gravedad",
        "Magnetismo",
        "Fuerza centrífuga",
        "Electromagnetismo"], "Gravedad"], //Gravedad 
    ["¿Cuál es la enzima responsable de descomponer el peróxido de hidrógeno en el cuerpo?",[
        "Lipasa",
        "Catalasa",
        "Amilasa",
        "Pepsina"], "Catalasa"], //Catalasa 
    ["¿Qué gas representa la mayor parte de la atmósfera de la Tierra?",[
        "Oxígeno",
        "Nitrógeno",
        "Dióxido de carbono",
        "Hidrógeno"], "Nitrógeno"], //Nitrógeno 
    ["¿Cuál es el proceso de transferencia de calor a través de un medio sólido sin movimiento aparente de ese medio?",[
        "Conducción",
        "Convección",
        "Radiación",
        "Evaporación"], "Conducción"], //Conducción 
    ["¿Cuál es la unidad de medida de la corriente eléctrica?",[
        "Voltio",
        "Amperio",
        "Vatio",
        "Ohmio"], "Amperio"], //Amperio 
    ["¿Quién desarrolló la teoría de la relatividad?",[
        "Isaac Newton",
        "Albert Einstein",
        "Galileo Galilei",
        "Stephen Hawking"], "Albert Einstein"], //Albert Einstein
    ["¿Cuál es el proceso mediante el cual el núcleo de un átomo se divide en dos o más núcleos más pequeños?",[
        "Fusión nuclear",
        "Fisión nuclear",
        "Radiación nuclear",
        "Desintegración nuclear"], "Fisión nuclear"] //Fisión nuclear
]
//preguntas entretenimiento
const entretenimiento = [
    ["¿Cuál es la película ganadora del Oscar a la Mejor Película en 1994?",[
        "Forrest Gump",
        "Pulp Fiction",
        "El Rey León",
        "Titanic"], "Forrest Gump"], //Forrest Gump
    ["¿Quién es conocido como el 'Rey del Pop'?",[
        "Elvis Presley",
        "Michael Jackson",
        "Madonna",
        "Prince"], "Michael Jackson"], //Michael Jackson
    ["En la serie 'Friends', ¿cuál es el trabajo de Chandler Bing?",[
        "Médico",
        "Actor",
        "Contador",
        "Publicista"], "Contador"], //Contador
    ["¿Qué empresa es conocida por desarrollar el sistema operativo Windows?",[
        "Apple",
        "Microsoft",
        "Google",
        "Amazon"], "Microsoft"], //Microsoft
    ["¿Quién es la artista pop conocida como 'Queen of Pop'?",[
        "Britney Spears",
        "Lady Gaga",
        "Madonna",
        "Beyoncé"], "Madonna"], //Madonna
    ["¿Cuál es la película animada de Disney en la que un león joven se convierte en rey de la sabana?",[
        "Aladdin",
        "Tarzan",
        "El Rey León",
        "La Sirenita"], "El Rey León"], //El Rey León
    ["En la serie 'Stranger Things', ¿cuál es el nombre del mundo paralelo habitado por criaturas monstruosas?",[
        "Upside Down",
        "The Netherworld",
        "The Abyss",
        "Dark Dimension"], "Upside Down"], //Upside Down
    ["¿Cuál de estos álbumes icónicos de The Beatles fue lanzado en 1967?",[
        "'Please Please Me'",
        "'Rubber Soul'",
        "'Abbey Road'",
        "'Sgt. Pepper's Lonely Hearts Club Band'"], "'Sgt. Pepper's Lonely Hearts Club Band'"], //"Sgt. Pepper's Lonely Hearts Club Band"
    ["¿Cuál de estos influencers españoles es un conocido gamer y streamer que ha participado en torneos de eSports?",[
        "Alex Tienda",
        "Kiko Rivera",
        "Ibai Llanos",
        "Logan G"], "Ibai Llanos"], //Ibai Llanos
    ["¿Quién es un popular comediante y presentador español conocido por sus programas de televisión y stand-up comedy?",[
        "David Suárezr",
        "David Broncano",
        "Ter",
        "Jordi Wild"], "David Broncano"] //David Broncano
]
//preguntas historia
const historia = [
    ["¿Quién fue el primer presidente de Estados Unidos?",[
        "Thomas Jefferson",
        "Benjamin Franklin",
        "George Washington",
        "John Adams"], "George Washington"], //George Washington
    ["¿En qué año comenzó la Primera Guerra Mundial?",[
        "1914",
        "1917",
        "1920",
        "1939"], "1914"], //1914 
    ["¿Cuál de los siguientes imperios existió en América antes de la llegada de Cristóbal Colón?",[
        "Imperio Romano",
        "Imperio Persa",
        "Imperio Azteca",
        "Imperio Mongol"], "Imperio Azteca"], //Imperio Azteca
    ["¿Quién fue el líder de la Revolución Rusa de 1917?",[
        "Joseph Stalin",
        "Leon Trotsky",
        "Vladimir Lenin",
        "Mikhail Gorbachev"], "Vladimir Lenin"], //Vladimir Lenin
    ["¿En qué año se firmó la Declaración de Independencia de los Estados Unidos?",[
        "1776",
        "1789",
        "1801",
        "1865"], "1776"], //1776 
    ["¿Cuál fue el primer imperio chino?",[
        "Imperio Qing",
        "Imperio Han",
        "Imperio Ming",
        "Imperio Tang"], "Imperio Han"], //Imperio Han
    ["¿Qué líder político fue conocido como 'El Canciller de Hierro' en la Alemania del siglo XIX",[
        "Otto von Bismarck",
        "Friedrich Nietzsche",
        "Karl Marx",
        "Johann Wolfgang von Goethe"], "Otto von Bismarck"], //Otto von Bismarck 
    ["¿En qué año se firmó el Tratado de Versalles que puso fin a la Primera Guerra Mundial?",[
        "1919",
        "1921",
        "1935",
        "1945"], "1919"], //1919 
    ["¿Quién fue el faraón más famoso del Antiguo Egipto que construyó las pirámides de Giza?",[
        "Ramsés II",
        "Tutankamón",
        "Cleopatra",
        "Keops"], "Keops"], //Keops 
    ["¿En qué año se llevó a cabo la Revolución Francesa?",[
        "1776",
        "1789",
        "1804",
        "1820"], "1789"]//1789 
]
//preguntas geografia
const geografia = [
    ["¿Cuál es el río más largo del mundo?",[
        "Amazonas",
        "Nilo",
        "Misisipi",
        "Danubio"], "Nilo"],//Nilo 
    ["¿Cuál es el país más grande del mundo en términos de superficie?",[
        "Estados Unidos",
        "China",
        "Rusia",
        "Canadá"], "Rusia"],//Rusia 
    ["¿En qué continente se encuentra el desierto del Sahara?",[
        "África",
        "Asia",
        "América del Norte",
        "Europa"], "África"],//África
    [" ¿Cuál es la capital de Australia?",[
        "Sídney",
        "Melbourne",
        "Canberra",
        "Brisbane"], "Canberra"],//Canberra 
    ["¿Qué cordillera de montañas se extiende a lo largo de la costa oeste de Sudamérica?",[
        "Montañas Rocosas",
        "Montañas de los Andes",
        "Montañas de los Apeninos",
        "Montañas de los Cárpatos"], "Montañas de los Andes"],//Montañas de los Andes 
    [" ¿Cuál es el país más pequeño del mundo por superficie?",[
        "Rusia",
        "Estados Unidos",
        "Mónaco",
        "Vaticano"], "Vaticano"],//Vaticano
    ["¿Qué país se encuentra en la península de los Balcanes?",[
        "Italia",
        "Grecia",
        "Noruega",
        "Irlanda"], "Grecia"],//Grecia 
    ["¿Cuál es el punto más alto de la Tierra, ubicado en la cordillera del Himalaya?",[
        "Mont Blanc",
        "Kilimanjaro",
        "Monte Everest",
        "Montaña Denali"], "Monte Everest"],//Monte Everest 
    [" ¿Cuál es el lago más grande de África?",[
        "Lago Victoria",
        "Lago Tanganica",
        "Lago Malawi",
        "Lago Chad"], "Lago Victoria"],//Lago Victoria 
    ["¿En qué país se encuentra el famoso monumento Stonehenge?",[
        "Francia",
        "Inglaterra",
        "Escocia",
        "Irlanda"], "Inglaterra"]//Inglaterra 
]
//preguntas arte
const arte = [
    ["¿Quién pintó la 'Mona Lisa'?",[
        "Pablo Picasso",
        "Vincent van Gogh",
        "Leonardo da Vinci",
        "Michelangelo Buonarroti"], "Michelangelo Buonarroti"],//Michelangelo Buonarroti
    ["¿Qué famoso escultor creó la estatua 'El Pensador'?",[
        "Auguste Rodin",
        "Pablo Picasso",
        "Salvador Dalí",
        "Vincent van Gogh"], "Auguste Rodin"],//Auguste Rodin
    ["¿Qué movimiento artístico se caracteriza por la representación de la realidad en un estilo detallado y preciso?",[
        "Impresionismo",
        "Realismo",
        "Cubismo",
        "Surrealismo"], "Realismo"],//Realismo 
    ["¿Cuál de estos artistas es conocido por sus 'pinturas del sueño'?",[
        "Vincent van Gogh",
        "Salvador Dalí",
        "Pablo Picasso",
        "Claude Monet"], "Salvador Dalí"],//Salvador Dalí 
    ["¿Quién pintó la famosa obra 'Noche estrellada'?",[
        "Pablo Picasso",
        "Leonardo da Vinci",
        "Vincent van Gogh",
        "Michelangelo Buonarroti"], "Vincent van Gogh"],//Vincent van Gogh
    ["¿Qué movimiento artístico se caracteriza por el uso de formas geométricas y colores vivos?",[
        "Barroco",
        "Cubismo",
        "Renacimiento",
        "Romanticismo"], "Cubismo"],//Cubismo 
    ["¿Cuál de los siguientes artistas es conocido por sus pinturas de lirios y nenúfares?",[
        "Claude Monet",
        "Jackson Pollock",
        "Andy Warhol",
        " Pablo Picasso"], "Claude Monet"],//Claude Monet
    ["¿Qué famoso muralista mexicano pintó el ciclo de murales en el Palacio de Bellas Artes?",[
        "Diego Rivera",
        "Frida Kahlo",
        "David Alfaro Siqueiros",
        "Rufino Tamayo"], "Diego Rivera"],//Diego Rivera
    ["¿Qué famoso pintor neerlandés es conocido por sus autorretratos?",[
        "Rembrandt van Rijn",
        "Johannes Vermeer",
        "Hieronymus Bosch",
        "Jan van Eyck"], "Rembrandt van Rijn"],//Rembrandt van Rijn
    ["¿Cuál de estos movimientos artísticos se centró en la representación de la vida cotidiana y escenas de la clase trabajadora?",[
        "Rococó",
        "Romántico",
        "Realismo socialista",
        "Impresionismo"], "Impresionismo"]//Impresionismo 
]
const text__question = document.getElementById("text__question")
const button__answers0 = document.getElementById("button__answers0")
const button__answers1 = document.getElementById("button__answers1")
const button__answers2 = document.getElementById("button__answers2")
const button__answers3 = document.getElementById("button__answers3")
const button__comprobar = document.getElementById("button__comprobar")
const article__preguntas = document.getElementById("article__preguntas")

const question__cont = document.getElementById("question__cont")


let contador = 1;
question__cont.textContent = contador

//declaramos un array con todas las categorias para sacarlas de manera aleatoria
const categorias = [deportes, ciencia, entretenimiento, historia, geografia, arte];
const preguntasAle = Math.floor(Math.random() * categorias.length);
const preguntasCategoria = categorias[preguntasAle];
//mostramos por consola el las preguntas de la categoria sacada de manera aleatoria
console.log(preguntasCategoria)


//escogemos una pregunta de manera aleatoria sacada de esa categoria
let preguntaAleatoria = Math.floor(Math.random()*preguntasCategoria.length)
console.log(preguntasCategoria[preguntaAleatoria])

//ponemos la pregunta por pantalla
text__question.textContent = preguntasCategoria[preguntaAleatoria][0]
console.log( preguntasCategoria[preguntaAleatoria][0])

//ponemos las respuestas por pantalla
button__answers0.textContent = preguntasCategoria[preguntaAleatoria][1][0]
button__answers1.textContent = preguntasCategoria[preguntaAleatoria][1][1]
button__answers2.textContent = preguntasCategoria[preguntaAleatoria][1][2]
button__answers3.textContent = preguntasCategoria[preguntaAleatoria][1][3] 



//evento donde seleccionamos la respuesta que creemos ser correcta
let optionSelect = null
let optionComprobar
const selectOption = (event) =>{
    let element = event.target;
    if(element.nodeName === "BUTTON"){
        optionComprobar = element
        if(optionSelect){
            optionSelect.classList.remove("comprobar")
        }
        element.classList.add("comprobar")
        optionSelect = element;
    }
}

article__preguntas.addEventListener("click", selectOption)

//evento para comprobar la respuesta seleccionada
const findOut = (event) =>{

    if(optionComprobar.textContent === preguntasCategoria[preguntaAleatoria][2]){
        optionComprobar.classList.remove("comprobar")
        optionComprobar.classList.add("acierto")
        contador++;
        question__cont.textContent = contador

    }else{
        optionComprobar.classList.add("error")
    }

}

button__comprobar.addEventListener("click", findOut)  
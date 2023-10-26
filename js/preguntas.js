//preguntas deportes
const preguntas = [
    ["deportes", [
        ["¿Quién es el máximo goleador de la historia de la Copa del Mundo de la FIFA?", [
            "Cristiano Ronaldo", 
            "Lionel Messi", 
            "Pelé", 
            "Diego Maradona"],2], //Pelé
        ["¿En qué año se celebraron los primeros Juegos Olímpicos modernos?", [
            "1800", 
            "1896", 
            "1924", 
            "2000"],1], //1896
        ["¿En qué deporte se utiliza una pista de hielo y se compite en las disciplinas de patinaje individual, parejas y danza?", [
            "Patinaje artístico", 
            "Hockey sobre hielo", 
            "Esquí alpino", 
            "Bobsleigh"], 0], //Patinaje artístico
        ["¿Quién es el único jugador en la historia de la NBA en promediar un triple-doble durante una temporada completa?", [
            "Michael Jordan", 
            "Kobe Bryant", 
            "LeBron James", 
            "Oscar Robertson"], 3], //Oscar Robertson
        ["¿Cuál es el deporte que se juega en un campo de hierba, y los equipos compiten para golpear una pelota de cuero hacia la portería del oponente?", [
            "Cricket", 
            "Hockey sobre césped", 
            "Fútbol australiano", 
            "Rugby"], 1], //Hockey sobre césped
        ["¿En qué deporte se compite en una pista ovalada en una carrera a alta velocidad, y los competidores usan patines con ruedas?", [
            "Patinaje de velocidad", 
            "Ciclismo en pista", 
            "Patinaje artístico sobre ruedas", 
            "Bobsleigh"], 0], //Patinaje de velocidad
        [" ¿Cuál es el único país que ha ganado la Copa Mundial de Rugby más de tres veces?", [
            "Nueva Zelanda", 
            "Sudáfrica", 
            "Australia", 
            "Inglaterra"], 0], //Nueva Zelanda 
        [" ¿Quién es el piloto de Fórmula 1 con el récord de más campeonatos mundiales ganados?", [
            "Ayrton Senna", 
            "Lewis Hamilton", 
            "Michael Schumacher", 
            "Alain Prost"], 1], //Lewis Hamilton
        [" ¿En qué deporte se utiliza una pelota pequeña llamada 'pelota de jai alai' y se juega en un frontón?", [
            "Pelota vasca", 
            "Squash", 
            "Tenis de mesa", 
            "Pelota al cesto"], 0], //Pelota vasca
        ["¿Cuál es el único país que ha ganado la Copa Mundial de Cricket más de tres veces?", [
            "India", 
            "Australia", 
            "Inglaterra", 
            "Sudáfrica"], 1] //Australia
    ]],
    ["ciencia", [
        ["¿Cuál es el proceso mediante el cual las plantas convierten la luz solar en energía química?"[
            "Fotosíntesis",
            "Respiración",
            "Fermentación",
            "Digestión"], 0], //Fotosíntesis 
        [" ¿Cuál es el elemento químico más abundante en la corteza terrestre?"[
            "Hierro",
            "Oxígeno",
            "Carbono",
            "Silicio"], 1], //Oxígeno  
        [" ¿Cuál es la unidad básica de la materia?"[
            "Átomo",
            "Molécula",
            "Célula",
            "Electrón"], 0], //Átomo
        [" ¿Cuál es la fuerza que mantiene a los planetas en órbita alrededor del Sol?"[
            "Gravedad",
            "Magnetismo",
            "Fuerza centrífuga",
            "Electromagnetismo"], 0], //Gravedad 
        ["¿Cuál es la enzima responsable de descomponer el peróxido de hidrógeno en el cuerpo?"[
            "Lipasa",
            "Catalasa",
            "Amilasa",
            "Pepsina"], 1], //Catalasa 
        ["¿Qué gas representa la mayor parte de la atmósfera de la Tierra?"[
            "Oxígeno",
            "Nitrógeno ",
            "Dióxido de carbono",
            "Hidrógeno"], 1], //Nitrógeno 
        ["¿Cuál es el proceso de transferencia de calor a través de un medio sólido sin movimiento aparente de ese medio?"[
            "Conducción",
            "Convección",
            "Radiación",
            "Evaporación"], 0], //Conducción 
        ["¿Cuál es la unidad de medida de la corriente eléctrica?"[
            "Voltio",
            "Amperio ",
            "Vatio",
            "Ohmio"], 1], //Amperio 
        ["¿Quién desarrolló la teoría de la relatividad?"[
            "Isaac Newton",
            "Albert Einstein",
            "Galileo Galilei",
            "Stephen Hawking"], 1], //Albert Einstein
        ["¿Cuál es el proceso mediante el cual el núcleo de un átomo se divide en dos o más núcleos más pequeños?"[
            "Fusión nuclear",
            "Fisión nuclear",
            "Radiación nuclear",
            "Desintegración nuclear"], 1] //Fisión nuclear
    ]],
    ["entretenimiento", [
        ["¿Cuál es la película ganadora del Oscar a la Mejor Película en 1994?"[
            "Forrest Gump",
            "Pulp Fiction",
            "El Rey León",
            "Titanic"], 0], //Forrest Gump
        ["¿Quién es conocido como el 'Rey del Pop'?"[
            "Elvis Presley",
            "Michael Jackson",
            "Madonna",
            "Prince"], 1], //Michael Jackson
        ["En la serie 'Friends', ¿cuál es el trabajo de Chandler Bing?"[
            "Médico",
            "Actor",
            "Contador",
            "Publicista"], 2], //Contador
        ["¿Qué empresa es conocida por desarrollar el sistema operativo Windows?"[
            "Apple",
            "Microsoft",
            "Google",
            "Amazon"], 1], //Microsoft
        ["¿Quién es la artista pop conocida como 'Queen of Pop'?"[
            "Britney Spears",
            "Lady Gaga",
            "Madonna",
            "Beyoncé"], 2], //Madonna
        ["¿Cuál es la película animada de Disney en la que un león joven se convierte en rey de la sabana?"[
            "Aladdin",
            "Tarzan",
            "El Rey León",
            "La Sirenita"], 2], //El Rey León
        ["En la serie 'Stranger Things', ¿cuál es el nombre del mundo paralelo habitado por criaturas monstruosas?"[
            "Upside Down",
            "The Netherworld",
            "The Abyss",
            "Dark Dimension"], 0], //Upside Down
        ["¿Cuál de estos álbumes icónicos de The Beatles fue lanzado en 1967?"[
            "'Please Please Me'",
            "'Rubber Soul'",
            "'Abbey Road'",
            "'Sgt. Pepper's Lonely Hearts Club Band'"], 3], //"Sgt. Pepper's Lonely Hearts Club Band"
        ["¿Cuál de estos influencers españoles es un conocido gamer y streamer que ha participado en torneos de eSports?"[
            "Alex Tienda",
            "Kiko Rivera",
            "Ibai Llanos",
            "Logan G"], 2], //Ibai Llanos
        ["¿Quién es un popular comediante y presentador español conocido por sus programas de televisión y stand-up comedy?"[
            "David Suárezr",
            "David Broncano",
            "Ter",
            "Jordi Wild"], 1] //David Broncano
    ]],
    ["historia", [
        ["¿Cuál es el río más largo del mundo?"[
            "Amazonas",
            "Nilo",
            "Misisipi",
            "Danubio"], 1],//Nilo 
        ["¿Cuál es el país más grande del mundo en términos de superficie?"[
            "Estados Unidos",
            "China",
            "Rusia",
            "Canadá"], 2],//Rusia 
        ["¿En qué continente se encuentra el desierto del Sahara?"[
            "África",
            "Asia",
            "América del Norte",
            "Europa"], 0],//África
        [" ¿Cuál es la capital de Australia?"[
            "Sídney",
            "Melbourne",
            "Canberra",
            "Brisbane"], 2],//Canberra 
        ["¿Qué cordillera de montañas se extiende a lo largo de la costa oeste de Sudamérica?"[
            "Montañas Rocosas",
            "Montañas de los Andes",
            "Montañas de los Apeninos",
            "Montañas de los Cárpatos"], 1],//Montañas de los Andes 
        [" ¿Cuál es el país más pequeño del mundo por superficie?"[
            "Rusia",
            "Estados Unidos",
            "Mónaco",
            "Vaticano"], 3],//Vaticano
        ["¿Qué país se encuentra en la península de los Balcanes?"[
            "Italia",
            "Grecia",
            "Noruega",
            "Irlanda"], 1],//Grecia 
        ["¿Cuál es el punto más alto de la Tierra, ubicado en la cordillera del Himalaya?"[
            "Mont Blanc",
            "Kilimanjaro",
            "Monte Everest",
            "Montaña Denali"], 2],//Monte Everest 
        [" ¿Cuál es el lago más grande de África?"[
            "Lago Victoria",
            "Lago Tanganica",
            "Lago Malawi",
            "Lago Chad"], 0],//Lago Victoria 
        ["¿En qué país se encuentra el famoso monumento Stonehenge?"[
            "Francia",
            "Inglaterra",
            "Escocia",
            "Irlanda"], 1]//Inglaterra 
    ]],
    ["geografia", [
        ["¿Cuál es el río más largo del mundo?"[
            "Amazonas",
            "Nilo",
            "Misisipi",
            "Danubio"], 1],//Nilo 
        ["¿Cuál es el país más grande del mundo en términos de superficie?"[
            "Estados Unidos",
            "China",
            "Rusia",
            "Canadá"], 2],//Rusia 
        ["¿En qué continente se encuentra el desierto del Sahara?"[
            "África",
            "Asia",
            "América del Norte",
            "Europa"], 0],//África
        [" ¿Cuál es la capital de Australia?"[
            "Sídney",
            "Melbourne",
            "Canberra",
            "Brisbane"], 2],//Canberra 
        ["¿Qué cordillera de montañas se extiende a lo largo de la costa oeste de Sudamérica?"[
            "Montañas Rocosas",
            "Montañas de los Andes",
            "Montañas de los Apeninos",
            "Montañas de los Cárpatos"], 1],//Montañas de los Andes 
        [" ¿Cuál es el país más pequeño del mundo por superficie?"[
            "Rusia",
            "Estados Unidos",
            "Mónaco",
            "Vaticano"], 3],//Vaticano
        ["¿Qué país se encuentra en la península de los Balcanes?"[
            "Italia",
            "Grecia",
            "Noruega",
            "Irlanda"], 1],//Grecia 
        ["¿Cuál es el punto más alto de la Tierra, ubicado en la cordillera del Himalaya?"[
            "Mont Blanc",
            "Kilimanjaro",
            "Monte Everest",
            "Montaña Denali"], 2],//Monte Everest 
        [" ¿Cuál es el lago más grande de África?"[
            "Lago Victoria",
            "Lago Tanganica",
            "Lago Malawi",
            "Lago Chad"], 0],//Lago Victoria 
        ["¿En qué país se encuentra el famoso monumento Stonehenge?"[
            "Francia",
            "Inglaterra",
            "Escocia",
            "Irlanda"], 1]//Inglaterra 
    ]],
    ["arte", [
        ["¿Quién pintó la 'Mona Lisa'?"[
            "Pablo Picasso",
            "Vincent van Gogh",
            "Leonardo da Vinci",
            "Michelangelo Buonarroti"], 3],//Michelangelo Buonarroti
        ["¿Qué famoso escultor creó la estatua 'El Pensador'?"[
            "Auguste Rodin",
            "Pablo Picasso",
            "Salvador Dalí",
            "Vincent van Gogh"], 0],//Auguste Rodin
        ["¿Qué movimiento artístico se caracteriza por la representación de la realidad en un estilo detallado y preciso?"[
            "Impresionismo",
            "Realismo",
            "Cubismo",
            "Surrealismo"], 1],//Realismo 
        [" ¿Cuál de estos artistas es conocido por sus 'pinturas del sueño'?"[
            "Vincent van Gogh",
            "Salvador Dalí",
            "Pablo Picasso",
            "Claude Monet"], 1],//Salvador Dalí 
        ["¿Quién pintó la famosa obra 'Noche estrellada'?"[
            "Pablo Picasso",
            "Leonardo da Vinci",
            "Vincent van Gogh",
            "Michelangelo Buonarroti"], 2],//Vincent van Gogh
        ["¿Qué movimiento artístico se caracteriza por el uso de formas geométricas y colores vivos?"[
            "Barroco",
            "Cubismo ",
            "Renacimiento",
            "Romanticismo"], 1],//Cubismo 
        ["¿Cuál de los siguientes artistas es conocido por sus pinturas de lirios y nenúfares?"[
            "Claude Monet",
            "Jackson Pollock",
            "Andy Warhol",
            " Pablo Picasso"], 0],//Claude Monet
        ["¿Qué famoso muralista mexicano pintó el ciclo de murales en el Palacio de Bellas Artes?"[
            "Diego Rivera",
            "Frida Kahlo",
            "David Alfaro Siqueiros",
            "Rufino Tamayo"], 0],//Diego Rivera
        ["¿Qué famoso pintor neerlandés es conocido por sus autorretratos?"[
            "Rembrandt van Rijn",
            "Johannes Vermeer",
            "Hieronymus Bosch",
            "Jan van Eyck"], 0],//Rembrandt van Rijn
        ["¿Cuál de estos movimientos artísticos se centró en la representación de la vida cotidiana y escenas de la clase trabajadora?"[
            "Rococó",
            "Romántico",
            "Realismo socialista",
            "Impresionismo "], 3]//Impresionismo 
    ]]
]


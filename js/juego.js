//preguntas deportes
const deportes = [
    ["¿Quién es el máximo goleador de la historia de la Copa del Mundo de la FIFA?", [
        "Cristiano Ronaldo", 
        "Lionel Messi", 
        "Pelé", 
        "Diego Maradona"],"Pelé", 
        "deportes/goleador_mundial"], //Pelé
    ["¿En qué año se celebraron los primeros Juegos Olímpicos modernos?", [
        "1800", 
        "1896", 
        "1924", 
        "2000"],"1896",
    "deportes/juegos_olimpicos"], //1896
    ["¿En qué deporte se utiliza una pista de hielo y se compite en las disciplinas de patinaje individual, parejas y danza?", [
        "Patinaje artístico", 
        "Hockey sobre hielo", 
        "Esquí alpino", 
        "Bobsleigh"], "Patinaje artístico",
    "deportes/patinaje_artistico"], //Patinaje artístico
    ["¿Quién es el único jugador en la historia de la NBA en promediar un triple-doble durante una temporada completa?", [
        "Michael Jordan", 
        "Kobe Bryant", 
        "LeBron James", 
        "Oscar Robertson"], "Oscar Robertson",
    "deportes/nba"], //Oscar Robertson
    ["¿Cuál es el deporte que se juega en un campo de hierba, y los equipos compiten para golpear una pelota de cuero hacia la portería del oponente?", [
        "Cricket", 
        "Hockey sobre césped", 
        "Fútbol australiano", 
        "Rugby"], "Hockey sobre césped",
        "deportes/hockey_cesped"], //Hockey sobre césped
    ["¿En qué deporte se compite en una pista ovalada en una carrera a alta velocidad, y los competidores usan patines con ruedas?", [
        "Patinaje de velocidad", 
        "Ciclismo en pista", 
        "Patinaje artístico sobre ruedas", 
        "Bobsleigh"], "Patinaje de velocidad",
    "deportes/pista_velocidad"], //Patinaje de velocidad
    [" ¿Cuál es el único país que ha ganado la Copa Mundial de Rugby más de tres veces?", [
        "Nueva Zelanda", 
        "Sudáfrica", 
        "Australia", 
        "Inglaterra"], "Nueva Zelanda",
    "deportes/mundial_rugby"], //Nueva Zelanda 
    [" ¿Quién es el piloto de Fórmula 1 con el récord de más campeonatos mundiales ganados?", [
        "Ayrton Senna", 
        "Lewis Hamilton", 
        "Michael Schumacher", 
        "Alain Prost"], "Lewis Hamilton",
    "deportes/f1_trofeo"], //Lewis Hamilton
    [" ¿En qué deporte se utiliza una pelota pequeña llamada 'pelota de jai alai' y se juega en un frontón?", [
        "Pelota vasca", 
        "Squash", 
        "Tenis de mesa", 
        "Pelota al cesto"], "Pelota vasca",
    "deportes/pelota_vasca"], //Pelota vasca
    ["¿Cuál es el único país que ha ganado la Copa Mundial de Cricket más de tres veces?", [
        "India", 
        "Australia", 
        "Inglaterra", 
        "Sudáfrica"], "Australia",
    "deportes/mundial_cricket"], //Australia

    ["¿En qué deporte se utiliza el término 'birdie' para describir un golpe en el que la pelota se coloca en el hoyo en un golpe menos de lo esperado?", [
        "Golf", 
        "Tenis", 
        "Fútbol", 
        "Natación"],"Golf", 
        "deportes/golf"], //Golf
    ["¿Cuál de las siguientes ciudades ha sido sede de los Juegos Olímpicos de Verano en dos ocasiones?", [
        "Río de Janeiro", 
        "Los Ángeles", 
        "Atenas", 
        "Londres"],"Los Ángeles",
    "deportes/jjoo"], //Los Ángeles
    ["¿En qué deporte se utiliza una red baja y se golpea la pelota sobre la red con la mano o el antebrazo?", [
        "Voleibol", 
        "Baloncesto", 
        "Tenis de mesa", 
        "Rugby"], "Voleibol",
    "deportes/voleibol"], //Voleibol
    ["¿Cuál es el deporte que se juega con un guante y una pelota, y se disputa en un diamante con cuatro bases?", [
        "Boxeo", 
        "Béisbol", 
        "Ciclismo", 
        "Esquí"], "Béisbol",
    "deportes/beisbol"], //Béisbol
    ["¿En qué deporte se utiliza una tabla larga con ruedas para descender cuestas a gran velocidad?", [
        "Patinaje artístico", 
        "Esnórquel", 
        "Ciclismo BMX", 
        "Skateboarding"], "Skateboarding",
        "deportes/skate"], //Skateboarding
    ["¿Cuál es el deporte en el que los jugadores compiten para lanzar una flecha hacia un objetivo en forma de diana?", [
        "Tiro con arco", 
        "Tiro al blanco", 
        "Dardos", 
        "Esgrima"], "Tiro con arco",
    "deportes/diana"], //Tiro con arco
    ["¿En qué deporte los equipos compiten para llevar un disco de caucho hacia la portería del oponente utilizando palos de hockey?", [
        "Béisbol", 
        "Hockey sobre césped", 
        "Hockey sobre hielo", 
        "Polo"], "Hockey sobre hielo",
    "deportes/hockey_hielo"], //Hockey sobre hielo 
    ["¿Cuál es el circuito de Fórmula 1 conocido como 'La Meca de la Velocidad' y alberga el Gran Premio de Italia?", [
        "Circuit de Barcelona-Catalunya", 
        "Silverstone Circuit", 
        "Circuit of the Americas", 
        "Autodromo Nazionale Monza"], "Autodromo Nazionale Monza",
    "deportes/monza"], //Autodromo Nazionale Monza
    ["¿Cuál de los siguientes países ha ganado la Copa del Mundo de la FIFA en cinco ocasiones, más que cualquier otro país?", [
        "Alemania", 
        "Italia", 
        "Argentina", 
        "Brasil"], "Brasil",
    "deportes/brasil"], //Brasil
    ["¿Cuál es el equipo de baloncesto de la NBA con más campeonatos ganados en la historia de la liga?", [
        "Boston Celtics", 
        "Los Angeles Lakers", 
        "Chicago Bulls", 
        "Golden State Warriors"], "Los Angeles Lakers",
    "deportes/nba_trofeo"] //Los Angeles Lakers
]
//preguntas ciencia
const ciencia = [
    ["¿Cuál es el proceso mediante el cual las plantas convierten la luz solar en energía química?",[
        "Fotosíntesis",
        "Respiración",
        "Fermentación",
        "Digestión"], "Fotosíntesis",
    "ciencia/fotosintesis"], //Fotosíntesis 
    [" ¿Cuál es el elemento químico más abundante en la corteza terrestre?",[
        "Hierro",
        "Oxígeno",
        "Carbono",
        "Silicio"], "Oxígeno",
    "ciencia/quimico"], //Oxígeno  
    [" ¿Cuál es la unidad básica de la materia?",[
        "Átomo",
        "Molécula",
        "Célula",
        "Electrón"], "Átomo",
        "ciencia/atomo"], //Átomo
    [" ¿Cuál es la fuerza que mantiene a los planetas en órbita alrededor del Sol?",[
        "Gravedad",
        "Magnetismo",
        "Fuerza centrífuga",
        "Electromagnetismo"], "Gravedad",
    "ciencia/gravedad"], //Gravedad 
    ["¿Cuál es la enzima responsable de descomponer el peróxido de hidrógeno en el cuerpo?",[
        "Lipasa",
        "Catalasa",
        "Amilasa",
        "Pepsina"], "Catalasa",
    "ciencia/enzima"], //Catalasa 
    ["¿Qué gas representa la mayor parte de la atmósfera de la Tierra?",[
        "Oxígeno",
        "Nitrógeno",
        "Dióxido de carbono",
        "Hidrógeno"], "Nitrógeno",
    "ciencia/atmosfera"], //Nitrógeno 
    ["¿Cuál es el proceso de transferencia de calor a través de un medio sólido sin movimiento aparente de ese medio?",[
        "Conducción",
        "Convección",
        "Radiación",
        "Evaporación"], "Conducción",
    "ciencia/conduccion"], //Conducción 
    ["¿Cuál es la unidad de medida de la corriente eléctrica?",[
        "Voltio",
        "Amperio",
        "Vatio",
        "Ohmio"], "Amperio",
    "ciencia/electricidad"], //Amperio 
    ["¿Quién desarrolló la teoría de la relatividad?",[
        "Isaac Newton",
        "Albert Einstein",
        "Galileo Galilei",
        "Stephen Hawking"], "Albert Einstein",
    "ciencia/einstein"], //Albert Einstein
    ["¿Cuál es el proceso mediante el cual el núcleo de un átomo se divide en dos o más núcleos más pequeños?",[
        "Fusión nuclear",
        "Fisión nuclear",
        "Radiación nuclear",
        "Desintegración nuclear"], "Fisión nuclear",
    "ciencia/fision_nuclear"], //Fisión nuclear
    ["¿Cuál es el proceso de conversión de glucosa en energía en ausencia de oxígeno?",[
        "Fermentación",
        "Fotosíntesis",
        "Respiración celular",
        "Gluconeogénesis"], "Fermentación",
    "ciencia/glucosa"], //Fermentación 
    ["¿Cuál es el hueso más largo del cuerpo humano?",[
        "Fémur",
        "Tibia",
        "Radio",
        "Húmero"], "Fémur",
    "ciencia/femur"], //Fémur   
    ["¿Cuál es la capa más externa de la Tierra?",[
        "Núcleo",
        "Manto",
        "Corteza terrestre",
        "Núcleo externo"], "Corteza terrestre",
        "ciencia/capas"], //Corteza terrestre
    ["¿Cuál es la hormona responsable de regular el nivel de glucosa en sangre?",[
        "Insulina",
        "Adrenalina",
        "Testosterona",
        "Progesterona"], "Insulina",
    "ciencia/insulina"], //Insulina  
    ["¿Cuál es la partícula subatómica con carga negativa que orbita alrededor del núcleo de un átomo?",[
        "Protón",
        "Electrón ",
        "Neutrón",
        "Positrón"], "Electrón ",
    "ciencia/electron"], //Electrón  
    ["¿Cuál es la molécula de almacenamiento de energía en las células de los seres vivos?",[
        "ATP (Adenosina trifosfato)",
        "ADN (Ácido desoxirribonucleico)",
        "ARN (Ácido ribonucleico)",
        "Glucosa"], "ATP (Adenosina trifosfato)",
    "ciencia/adesina"], //ATP (Adenosina trifosfato) 
    ["¿Cuál es la enfermedad que afecta el sistema nervioso central y se caracteriza por la pérdida de mielina en las fibras nerviosas?",[
        "Diabetes",
        "Esclerosis múltiple",
        "Alzheimer",
        "Parkinson"], "Esclerosis múltiple",
    "ciencia/snc"], //Esclerosis múltiple 
    ["¿Cuál es el proceso de unión de núcleos ligeros para formar un núcleo más pesado, liberando una gran cantidad de energía?",[
        "Fisión nuclear",
        "Fusión nuclear",
        "Desintegración nuclear",
        "Radiación nuclear"], "Fusión nuclear",
    "ciencia/fusion_nuclear"], //Fusión nuclear 
    ["¿Cuál es el planeta más grande del sistema solar?",[
        "Marte",
        "Venus",
        "Júpiter",
        "Saturno"], "Júpiter",
    "ciencia/sistema_solar"], //Júpiter
    ["¿Cuál es el proceso mediante el cual las plantas liberan agua en forma de vapor a través de sus hojas?",[
        "Fotosíntesis",
        "Transpiración",
        "Respiración",
        "Evaporación"], "Transpiración",
    "ciencia/plantas_vapor"] //Transpiración 
]
//preguntas entretenimiento
const entretenimiento = [
    ["¿Cuál es la película ganadora del Oscar a la Mejor Película en 1994?",[
        "Forrest Gump",
        "Pulp Fiction",
        "El Rey León",
        "Titanic"], "Forrest Gump",
    "entretenimiento/oscar"], //Forrest Gump
    ["¿Quién es conocido como el 'Rey del Pop'?",[
        "Elvis Presley",
        "Michael Jackson",
        "Madonna",
        "Prince"], "Michael Jackson",
    "entretenimiento/michael"], //Michael Jackson
    ["En la serie 'Friends', ¿cuál es el trabajo de Chandler Bing?",[
        "Médico",
        "Actor",
        "Contador",
        "Publicista"], "Contador",
    "entretenimiento/friends"], //Contador
    ["¿Qué empresa es conocida por desarrollar el sistema operativo Windows?",[
        "Apple",
        "Microsoft",
        "Google",
        "Amazon"], "Microsoft",
    "entretenimiento/win"], //Microsoft
    ["¿Quién es la artista pop conocida como 'Queen of Pop'?",[
        "Britney Spears",
        "Lady Gaga",
        "Madonna",
        "Beyoncé"], "Madonna",
    "entretenimiento/madonna"], //Madonna
    ["¿Cuál es la película animada de Disney en la que un león joven se convierte en rey de la sabana?",[
        "Aladdin",
        "Tarzan",
        "El Rey León",
        "La Sirenita"], "El Rey León",
    "entretenimiento/disney"], //El Rey León
    ["En la serie 'Stranger Things', ¿cuál es el nombre del mundo paralelo habitado por criaturas monstruosas?",[
        "Upside Down",
        "The Netherworld",
        "The Abyss",
        "Dark Dimension"], "Upside Down",
    "entretenimiento/stranger"], //Upside Down
    ["¿Cuál de estos álbumes icónicos de The Beatles fue lanzado en 1967?",[
        "'Please Please Me'",
        "'Rubber Soul'",
        "'Abbey Road'",
        "'Sgt. Pepper's Lonely Hearts Club Band'"], "'Sgt. Pepper's Lonely Hearts Club Band'",
    "entretenimiento/the_beatles"], //"Sgt. Pepper's Lonely Hearts Club Band"
    ["¿Cuál de estos influencers españoles es un conocido gamer y streamer que ha participado en torneos de eSports?",[
        "Alex Tienda",
        "Kiko Rivera",
        "Ibai Llanos",
        "Logan G"], "Ibai Llanos",
    "entretenimiento/twitch"], //Ibai Llanos
    ["¿Quién es un popular comediante y presentador español conocido por sus programas de televisión y stand-up comedy?",[
        "David Suárez",
        "David Broncano",
        "Ter",
        "Jordi Wild"], "David Broncano",
    "entretenimiento/la_resistencia"], //David Broncano
    ["¿Qué banda británica es conocida por su álbum 'The Dark Side of the Moon'?",[
        "The Rolling Stones",
        "The Beatles",
        "Pink Floyd",
        "Queen"], "Pink Floyd",
    "entretenimiento/pink"], //Pink Floyd
    ["¿Cuál de los siguientes músicos es conocido por su apodo 'The Boss'?",[
        "Elvis Presley",
        "Bob Dylan",
        "Bruce Springsteen",
        "David Bowie"], "Bruce Springsteen",
    "entretenimiento/bruce"], //Bruce Springsteen
    ["¿En qué serie de televisión se encuentra el personaje de Tony Stark, también conocido como Iron Man?",[
        "The Walking Dead",
        "Daredevil",
        "The Avengers: Earth's Mightiest Heroes",
        "Arrow"], "The Avengers: Earth's Mightiest Heroes",
    "entretenimiento/marvel"], //The Avengers: Earth's Mightiest Heroes
    ["¿En qué serie de televisión se encuentra el personaje de Sheldon Cooper?",[
        "The Big Bang Theory",
        "Modern Family",
        "How I Met Your Mother",
        "Friends"], "The Big Bang Theory",
    "entretenimiento/sheldon"], //The Big Bang Theory
    ["¿Quién es conocido como 'The King of YouTube' y ha acumulado millones de seguidores con su contenido de video?",[
        "Elon Musk",
        "PewDiePie",
        "Kylie Jenner",
        "Dwayne 'The Rock' Johnson"], "PewDiePie",
    "entretenimiento/pew"], //PewDiePie
    ["¿Cuál de las siguientes redes sociales es conocida por sus videos cortos y virales?",[
        "Facebook",
        "Instagram",
        "TikTok",
        "LinkedIn"], "TikTok",
    "entretenimiento/tiktok"], //TikTok
    ["¿Quién interpretó el papel de Lara Croft en la película 'Tomb Raider'?",[
        "Angelina Jolie",
        "Jennifer Lawrence",
        "Scarlett Johansson",
        "Gal Gadot"], "Angelina Jolie",
    "entretenimiento/raider"], //Angelina Jolie
    ["¿Cuál de las siguientes series de televisión sigue las vidas de los sobrevivientes de un apocalipsis zombie?",[
        "The Walking Dead",
        "Game of Thrones",
        "Stranger Things",
        "Breaking Bad"], "The Walking Dead",
    "entretenimiento/walking"], //The Walking Dead
    ["¿Cuál de los siguientes CEOs es el fundador de SpaceX y Tesla, Inc.?",[
        "Jeff Bezos",
        "Mark Zuckerberg",
        "Elon Musk",
        "Tim Cook"], "Elon Musk",
    "entretenimiento/space"], //Elon Musk
    ["¿Quién es conocido como 'El Rey del Reggaetón' y es famoso por canciones como 'Diles' y 'Sin Contrato'?",[
        "Wisin",
        "J Balvin",
        "Maluma",
        "Daddy Yankee"], "Daddy Yankee",
    "entretenimiento/daddy"] //Daddy Yankee
]
//preguntas historia
const historia = [
    ["¿Quién fue el primer presidente de Estados Unidos?",[
        "Thomas Jefferson",
        "Benjamin Franklin",
        "George Washington",
        "John Adams"], "George Washington",
    "historia/eeuu"], //George Washington
    ["¿En qué año comenzó la Primera Guerra Mundial?",[
        "1914",
        "1917",
        "1920",
        "1939"], "1914",
    "historia/guerra_mundial"], //1914 
    ["¿Cuál de los siguientes imperios existió en América antes de la llegada de Cristóbal Colón?",[
        "Imperio Romano",
        "Imperio Persa",
        "Imperio Azteca",
        "Imperio Mongol"], "Imperio Azteca",
    "historia/azteca"], //Imperio Azteca
    ["¿Quién fue el líder de la Revolución Rusa de 1917?",[
        "Joseph Stalin",
        "Leon Trotsky",
        "Vladimir Lenin",
        "Mikhail Gorbachev"], "Vladimir Lenin",
    "historia/lenin"], //Vladimir Lenin
    ["¿En qué año se firmó la Declaración de Independencia de los Estados Unidos?",[
        "1776",
        "1789",
        "1801",
        "1865"], "1776",
    "historia/independencia_eeuu"], //1776 
    ["¿Cuál fue el primer imperio chino?",[
        "Imperio Qing",
        "Imperio Han",
        "Imperio Ming",
        "Imperio Tang"], "Imperio Han",
    "historia/chino"], //Imperio Han
    ["¿Qué líder político fue conocido como 'El Canciller de Hierro' en la Alemania del siglo XIX?",[
        "Otto von Bismarck",
        "Friedrich Nietzsche",
        "Karl Marx",
        "Johann Wolfgang von Goethe"], "Otto von Bismarck",
    "historia/otto"], //Otto von Bismarck 
    ["¿En qué año se firmó el Tratado de Versalles que puso fin a la Primera Guerra Mundial?",[
        "1919",
        "1921",
        "1935",
        "1945"], "1919",
    "historia/versalles"], //1919 
    ["¿Quién fue el faraón más famoso del Antiguo Egipto que construyó las pirámides de Giza?",[
        "Ramsés II",
        "Tutankamón",
        "Cleopatra",
        "Keops"], "Keops",
    "historia/piramides"], //Keops 
    ["¿En qué año se llevó a cabo la Revolución Francesa?",[
        "1776",
        "1789",
        "1804",
        "1820"], "1789",
    "historia/francesa"],//1789 

    ["¿Quién fue el líder de la Revolución Cubana que derrocó a Fulgencio Batista en 1959?",[
        "Ernesto 'Che' Guevara",
        "Fidel Castro",
        "Raúl Castro",
        "Camilo Cienfuegos"], "Fidel Castro",
    "historia/revolucion_cuba"], //Fidel Castro
    ["¿Qué evento histórico marcó el inicio de la Segunda Guerra Mundial en Europa?",[
        "Ataque a Pearl Harbor",
        "Invasión de Polonia",
        "Bombardeo de Londres",
        "Batalla de Stalingrado"], "Invasión de Polonia",
    "historia/polonia"], //Invasión de Polonia 
    ["¿Quién fue el emperador romano que supervisó la construcción del Coliseo en Roma?",[
        "Julio César",
        "Augusto",
        "Nerón",
        "Marco Aurelio"], "Nerón",
    "historia/coliseo_roma"], //Nerón 
    ["¿Cuál fue la primera civilización en la historia de la humanidad que se desarrolló en Mesopotamia?",[
        "Civilización Egipcia",
        "Civilización China",
        "Civilización Inca",
        "Civilización Sumeria"], "Civilización Sumeria",
    "historia/mesopotamia"], //Civilización Sumeria
    ["¿Qué líder militar y político lideró el Movimiento de los Derechos Civiles en los Estados Unidos en la década de 1960?",[
        "Malcolm X",
        "Martin Luther King Jr.",
        "Rosa Parks",
        "Nelson Mandela"], "Martin Luther King Jr.",
    "historia/luther"], // Martin Luther King Jr. 
    ["¿Quién fue el rey de Inglaterra que se casó con seis esposas y provocó la separación de la Iglesia de Inglaterra de la Iglesia Católica?",[
        "Enrique VIII",
        "Eduardo VI",
        "María I",
        "Isabel I"], "Enrique VIII",
    "historia/enrique"], //Enrique VIII
    ["¿Cuál fue el nombre del barco en el que Cristóbal Colón zarpó en su primer viaje hacia el Nuevo Mundo en 1492?",[
        "Santa María",
        "Pinta",
        "Niña",
        "Victoria"], "Santa María",
    "historia/colon"], //Santa María 
    ["¿En qué año terminó la Guerra de Secesión en los Estados Unidos?",[
        "1888",
        "1871",
        "1863",
        "1865"], "1865",
    "historia/secesion"], //1865 
    ["¿Cuál de las siguientes civilizaciones antiguas se desarrolló a lo largo del río Nilo?",[
        "Civilización Maya",
        "Civilización Inca",
        "Civilización Egipcia",
        "Civilización China"], "Civilización Egipcia",
    "historia/egipcio"], //Civilización Egipcia 
    ["¿Qué líder militar francés se convirtió en emperador de Francia y gobernó durante el período conocido como el Primer Imperio Francés?",[
        "Luis XVI",
        "Napoleón Bonaparte",
        "Robespierre",
        "Luis XVIII"], "Napoleón Bonaparte",
    "historia/napoleon"]//Napoleón Bonaparte 
]
//preguntas geografia
const geografia = [
    ["¿Cuál es el río más largo del mundo?",[
        "Amazonas",
        "Nilo",
        "Misisipi",
        "Danubio"], "Nilo",
    "geografia/rio"],//Nilo 
    ["¿Cuál es el país más grande del mundo en términos de superficie?",[
        "Estados Unidos",
        "China",
        "Rusia",
        "Canadá"], "Rusia",
    "geografia/rusia"],//Rusia 
    ["¿En qué continente se encuentra el desierto del Sahara?",[
        "África",
        "Asia",
        "América del Norte",
        "Europa"], "África",
    "geografia/sahara"],//África
    [" ¿Cuál es la capital de Australia?",[
        "Sídney",
        "Melbourne",
        "Canberra",
        "Brisbane"], "Canberra",
    "geografia/australia"],//Canberra 
    ["¿Qué cordillera de montañas se extiende a lo largo de la costa oeste de Sudamérica?",[
        "Montañas Rocosas",
        "Montañas de los Andes",
        "Montañas de los Apeninos",
        "Montañas de los Cárpatos"], "Montañas de los Andes",
    "geografia/andes"],//Montañas de los Andes 
    [" ¿Cuál es el país más pequeño del mundo por superficie?",[
        "Rusia",
        "Estados Unidos",
        "Mónaco",
        "Vaticano"], "Vaticano",
    "geografia/vaticano"],//Vaticano
    ["¿Qué país se encuentra en la península de los Balcanes?",[
        "Italia",
        "Grecia",
        "Noruega",
        "Irlanda"], "Grecia",
    "geografia/balcanes"],//Grecia 
    ["¿Cuál es el punto más alto de la Tierra, ubicado en la cordillera del Himalaya?",[
        "Mont Blanc",
        "Kilimanjaro",
        "Monte Everest",
        "Montaña Denali"], "Monte Everest",
    "geografia/everest"],//Monte Everest 
    [" ¿Cuál es el lago más grande de África?",[
        "Lago Victoria",
        "Lago Tanganica",
        "Lago Malawi",
        "Lago Chad"], "Lago Victoria",
    "geografia/victoria"],//Lago Victoria 
    ["¿En qué país se encuentra el famoso monumento Stonehenge?",[
        "Francia",
        "Inglaterra",
        "Escocia",
        "Irlanda"], "Inglaterra",
    "geografia/Stonehenge"],//Inglaterra 
    ["¿Cuál es la capital de Japón?",[
        "Pekín",
        "Tokio",
        "Seúl",
        "Bangkok"], "Tokio",
    "geografia/japon"],//Tokio 
    ["¿En qué país se encuentra la Gran Barrera de Coral?",[
        "Filipinas",
        "Indonesia",
        "Tailandia",
        "Australia"], "Australia",
    "geografia/barrera_coral"],//Australia 
    ["¿Cuál es el océano más grande del mundo?",[
        "Atlántico",
        "Índico",
        "Pacífico",
        "Ártico"], "Pacífico",
    "geografia/oceanos"],//Pacífico
    ["¿Cuál es el río que cruza la ciudad de París?",[
        "Támesis",
        "Sena",
        "Danubio",
        "Rin"], "Sena",
    "geografia/sena"],//Sena 
    ["¿Cuál es el río más largo de América del Sur?",[
        "Río Amazonas",
        "Río Paraná",
        "Río Orinoco",
        "Río Magdalena"], "Río Amazonas",
    "geografia/amazonas"],//Río Amazonas
    [" ¿Cuál es el nombre del canal que separa la isla de Gran Bretaña de la isla de Irlanda?",[
        "Canal de la Mancha",
        "Canal de Irlanda",
        "Canal de Bristol",
        "Canal de Escocia"], "Canal de la Mancha",
    "geografia/mancha"],//Canal de la Mancha
    ["¿En qué país se encuentra el río Misisipi?",[
        "Canadá",
        "México",
        "Cuba",
        "Estados Unidos"], "Estados Unidos",
    "geografia/misisipi"],//Estados Unidos 
    ["¿Cuál es la capital de Letonia?",[
        "Vilna",
        "Tallin",
        "Riga",
        "Jurmala"], "Riga",
    "geografia/riga"],//Riga 
    ["¿Cuál es la isla más grande del mundo por superficie?",[
        "Groenlandia",
        "Madagascar",
        "Islandia",
        "Borneo"], "Groenlandia",
    "geografia/groenlandia"],//Groenlandia 
    ["¿Qué país europeo es conocido como 'la tierra de los tulipanes'?",[
        "Francia",
        "Países Bajos (Holanda)",
        "Italia",
        "España"], "Países Bajos (Holanda)",
    "geografia/holanda"]//Países Bajos (Holanda) 
]
//preguntas arte
const arte = [
    ["¿Quién pintó la 'Mona Lisa'?",[
        "Pablo Picasso",
        "Vincent van Gogh",
        "Leonardo da Vinci",
        "Michelangelo Buonarroti"], "Michelangelo Buonarroti",
    "arte/mona_lisa"],//Michelangelo Buonarroti
    ["¿Qué famoso escultor creó la estatua 'El Pensador'?",[
        "Auguste Rodin",
        "Pablo Picasso",
        "Salvador Dalí",
        "Vincent van Gogh"], "Auguste Rodin",
    "arte/pensador"],//Auguste Rodin
    ["¿Qué movimiento artístico se caracteriza por la representación de la realidad en un estilo detallado y preciso?",[
        "Impresionismo",
        "Realismo",
        "Cubismo",
        "Surrealismo"], "Realismo",
    "arte/realismo"],//Realismo 
    ["¿Cuál de estos artistas es conocido por sus 'pinturas del sueño'?",[
        "Vincent van Gogh",
        "Salvador Dalí",
        "Pablo Picasso",
        "Claude Monet"], "Salvador Dalí",
    "arte/pintura_del_sueño"],//Salvador Dalí 
    ["¿Quién pintó la famosa obra 'Noche estrellada'?",[
        "Pablo Picasso",
        "Leonardo da Vinci",
        "Vincent van Gogh",
        "Michelangelo Buonarroti"], "Vincent van Gogh",
        "arte/la_noche_estrellada"],//Vincent van Gogh
    ["¿Qué movimiento artístico se caracteriza por el uso de formas geométricas y colores vivos?",[
        "Barroco",
        "Cubismo",
        "Renacimiento",
        "Romanticismo"], "Cubismo",
    "arte/cubismo"],//Cubismo 
    ["¿Cuál de los siguientes artistas es conocido por sus pinturas de lirios y nenúfares?",[
        "Claude Monet",
        "Jackson Pollock",
        "Andy Warhol",
        " Pablo Picasso"], "Claude Monet",
    "arte/monet"],//Claude Monet
    ["¿Qué famoso muralista mexicano pintó el ciclo de murales en el Palacio de Bellas Artes?",[
        "Diego Rivera",
        "Frida Kahlo",
        "David Alfaro Siqueiros",
        "Rufino Tamayo"], "Diego Rivera",
    "arte/palacio"],//Diego Rivera
    ["¿Qué famoso pintor neerlandés es conocido por sus autorretratos?",[
        "Rembrandt van Rijn",
        "Johannes Vermeer",
        "Hieronymus Bosch",
        "Jan van Eyck"], "Rembrandt van Rijn",
    "arte/van"],//Rembrandt van Rijn
    ["¿Cuál de estos movimientos artísticos se centró en la representación de la vida cotidiana y escenas de la clase trabajadora?",[
        "Rococó",
        "Romántico",
        "Realismo socialista",
        "Impresionismo"], "Realismo socialista",
    "arte/social"],//Realismo socialista 
    ["¿Qué escultor italiano es conocido por su escultura 'El David' y su pintura de la Capilla Sixtina?",[
        "Miguel Ángel",
        "Leonardo da Vinci",
        "Rafael",
        "Sandro Botticelli"], "Miguel Ángel",
    "arte/david"],//Miguel Ángel
    ["¿Qué movimiento artístico se caracteriza por la representación de escenas cotidianas y la belleza en lo simple?",[
        "Impresionismo",
        "Realismo",
        "Barroco",
        "Rococó"], "Rococó",
    "arte/rococo"],//Rococó 
    ["¿Quién pintó la famosa obra 'El nacimiento de Venus'?",[
        "Vincent van Gogh",
        "Leonardo da Vinci",
        "Sandro Botticelli",
        "Pablo Picasso"], "Sandro Botticelli",
    "arte/nacimiento_venus"],//Sandro Botticelli 
    ["¿Cuál de los siguientes artistas es conocido por sus obras de arte cinético y op art?",[
        "Jackson Pollock",
        "Victor Vasarely",
        "Frida Kahlo",
        "Marc Chagall"], "Victor Vasarely",
    "arte/victor"],//Victor Vasarely 
    ["¿Qué famoso artista estadounidense es conocido por su serie de latas de sopa Campbell?",[
        "Andy Warhol",
        "Mark Rothko",
        "Jackson Pollock",
        "Keith Haring"], "Andy Warhol",
        "arte/latas"],//Andy Warhol
    ["¿Quién es el autor de la famosa pintura 'La última cena'?",[
        "Rafael",
        "Miguel Ángel",
        "Sandro Botticelli",
        "Leonardo da Vinci"], "Leonardo da Vinci",
    "arte/ultima_cena"],//Leonardo da Vinci 
    ["¿Qué artista español es conocido por su estilo abstracto y sus obras como 'Guernica'?",[
        "Salvador Dalí",
        "Joan Miró",
        "Pablo Picasso",
        "Francisco Goya"], "Pablo Picasso",
    "arte/guernica"],//Claude Monet
    ["¿Quién pintó la famosa obra 'El jardín de las delicias'?",[
        "Vincent van Gogh",
        "Hieronymus Bosch",
        "Salvador Dalí",
        "Pablo Picasso"], "Hieronymus Bosch",
    "arte/jardin_delicias"],//Hieronymus Bosch
    ["¿Qué famoso pintor español es conocido por su estilo abstracto y su uso de formas geométricas?",[
        "Salvador Dalí",
        "Joan Miró",
        "Pablo Picasso",
        "Francisco Goya"], "Joan Miró",
    "arte/joan_miro"],//Joan Miró
    ["¿Qué movimiento artístico se caracteriza por el uso de colores vivos, formas geométricas y la representación de la cultura popular?",[
        "Surrealismo",
        "Pop Art",
        "Impresionismo",
        "Barroco"], "Pop Art",
    "arte/pop_art"]//Pop Art
]

//lugar donde se ponen las preguntas, respuestas e imagenes
const text__question = document.getElementById("text__question")
const button__answers0 = document.getElementById("button__answers0")
const button__answers1 = document.getElementById("button__answers1")
const button__answers2 = document.getElementById("button__answers2")
const button__answers3 = document.getElementById("button__answers3")
const button__comprobar = document.getElementById("button__comprobar")
const article__preguntas = document.getElementById("article__preguntas")
const img__pregunta = document.getElementById("img__pregunta")

//vidas que tenemos
const heart__vidas1 = document.getElementById("heart__vidas1")
const heart__vidas2 = document.getElementById("heart__vidas2")
const heart__vidas3 = document.getElementById("heart__vidas3")

//lugar donde se coloca el contador de las preguntas que lleva
const question__cont = document.getElementById("question__cont")

//botones para cmbiar de pregunta
const button__siguientepre = document.getElementById("button__siguientepre")
const button__next = document.getElementById("button__next")

//pagina del resultado
const ganador = document.getElementById("ganador")
const perdedor = document.getElementById("perdedor")
const empezar__nuevo = document.getElementById("empezar__nuevo")
const span__resultado = document.getElementById("span__resultado")
const img__ganador = document.getElementById("img__ganador");
const img__perdedor = document.getElementById("img__perdedor");

//boton para reiniciar el juego
const button__reiniciar = document.getElementById("button__reiniciar")

//contador de preguntas
let contador = 1;
question__cont.textContent = contador

//contador para saber los errores
let errores = 0;


let preguntasCategoria;
let preguntaAleatoria;
let respCorrect

//declaramos un array con todas las categorias para sacarlas de manera aleatoria
const categorias = [deportes, ciencia, entretenimiento, historia, geografia, arte];
let categoriasUtilizadas = [];

function cargarPregunta(){
    if (categoriasUtilizadas.length === categorias.length) {
        console.log('Todas las categorías se han utilizado.');
        return;
    }
    //comprobamos que se elije una categoria aleatoria que no se haya utilizado
    let categoriaAleatoria;
    do {
        categoriaAleatoria = categorias[Math.floor(Math.random() * categorias.length)];
    } while (categoriasUtilizadas.includes(categoriaAleatoria));

    categoriasUtilizadas.push(categoriaAleatoria);

    const preguntasCategoria = categoriaAleatoria;
    const preguntaAleatoria = Math.floor(Math.random() * preguntasCategoria.length);

    // cargo la pregunta, imagen y opciones
    const pregunta = preguntasCategoria[preguntaAleatoria][0];
    const imagenes = preguntasCategoria[preguntaAleatoria][3];
    respCorrect = preguntasCategoria[preguntaAleatoria][2]
    const opciones = preguntasCategoria[preguntaAleatoria][1];

    // coloco la pregunta 
    text__question.textContent = pregunta;
    // coloco la imagen 
    img__pregunta.src = "./assets/images/"+imagenes+".png"

    // coloco las opciones en tus botones
    button__answers0.textContent = opciones[0];
    button__answers1.textContent = opciones[1];
    button__answers2.textContent = opciones[2];
    button__answers3.textContent = opciones[3];

    // restablezco la opción seleccionada
    optionSelect = null;
    question__cont.textContent = contador;
 
}


//evento donde seleccionamos la respuesta que creemos ser correcta
let optionSelect = null;
let optionComprobar
const selectOption = (event) =>{
    let element = event.target;
    if(element.nodeName === "BUTTON"){
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
    if (optionSelect.textContent == respCorrect) {
        optionSelect.classList.remove("comprobar");
        optionSelect.classList.add("acierto");
    } else {
        optionSelect.classList.remove("comprobar");
        optionSelect.classList.add("errorpre");
        errores++
        switch (errores) {
            case 1:
                heart__vidas3.style.color = "black"
                break;
            case 2:
                heart__vidas2.style.color = "black"
                break;
            case 3:
                heart__vidas1.style.color = "black"
                break;
        }
    }
    // Permitir al usuario pasar a la siguiente pregunta
    button__siguientepre.classList.remove("displaynone");
    button__compruebo.classList.add("displaynone"); 
    if(errores===3){
        juego.classList.add("displaynone")
        button__compruebo.classList.add("displaynone")
        button__siguientepre.classList.add("displaynone")
        perdedor.classList.remove("displaynone")
        empezar__nuevo.classList.remove("displaynone")
    }
    
}

button__comprobar.addEventListener("click", findOut)


//evento para cambiar la pregunta
const changeQuestion = (event) =>{
    // Restablecer la opción seleccionada
    optionSelect = null;

    contador++;
    // restablecemos los botones
  button__siguientepre.classList.add("displaynone");
  button__compruebo.classList.remove("displaynone");

  //llamamos a la funcion de cargar preguntas para no repetir código
  cargarPregunta();

  // eliminar cualquier estilo 
  button__answers0.classList.remove("acierto", "errorpre");
  button__answers1.classList.remove("acierto", "errorpre");
  button__answers2.classList.remove("acierto", "errorpre");
  button__answers3.classList.remove("acierto", "errorpre");

    question__cont.textContent = contador

    //cuando llegaamos a 6 preguntas acertadas hace lo siguiente
    if(question__cont.textContent === "7"){
        juego.classList.add("displaynone")
        button__compruebo.classList.add("displaynone")
        button__siguientepre.classList.add("displaynone")
        ganador.classList.remove("displaynone")
        empezar__nuevo.classList.remove("displaynone")
    }
      
}

button__next.addEventListener("click", changeQuestion);

//llamamos a la funcion cargar preguntas
cargarPregunta(); 

//evento para reiniciar el juego
button__reiniciar.addEventListener("click", ()=>{

    window.location.reload()

})

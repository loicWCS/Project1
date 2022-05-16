/*Boutton scroll to the top*/
const myButton = document.querySelector("#topButton");
function topFunction() {
  document.documentElement.scrollTop = 0; // renvoie l'Element qui est l'élément racine du document (html)
}
// création de chevalier
const myKnights = document.querySelector('.chevalier')
const knight = [
  {
    picture: "images/story_portrait_belier.jpg",
    name: "Mû",
    age: "20",
    height: "172cm",
    weight: "75kg",
    origin: "Tibet",
    spell: "Cristal Wall" ,
    text:"Il a la faculté de réparer les armures et a des dons de télékinésie. C'est en voulant faire réparer leurs armures que les chevaliers de Bronze font sa connaissance. Ils apprennent, lors de la bataille du Sanctuaire, qu'il est le gardien de la première maison. Mû est un des premiers à s'allier aux chevaliers de bronze. Il fut le disciple de Shion, le grand pope tué par Saga, et a pour disciple Kiki.",
  }
  {
    picture: "images/story_portrait_taureau.jpg",
    name: "Aldeberan",
    age: "20",
    height: "210cm",
    weight:"130kg",
    origin: "Brésil",
    spell: "Great Horn",
    text:"Protecteur de la seconde maison du Sanctuaire, Aldebaran est d'une personnalité franche et aimable, et c'est un bon ami de Mû, le Chevalier d'or du Bélier. Ce n'est qu'après avoir découvert le point faible de la Corne du Taureau et atteint le 7e sens que Seiya - le Chevalier de bronze Pégase- arrivera à franchir la seconde maison.",
  }
  {
    picture: "images/story_portrait_gemeaux.jpg",
    name: "Saga",
    age:"28",
    height: "188cm",
    weight:"87kg",
    origin: "Grèce",
    spell: "Galaxian Explosion",
    text:"Considéré comme le plus puissant des Chevaliers d’or, Saga a longtemps été absent du Sanctuaire, et c’est pourquoi sa Maison était vide quand les Chevaliers de Bronze l’ont traversée. Ces derniers découvrent finalement qu’il a assassiné puis usurpé la place du Grand Pope, après avoir sombré dans la folie quand son esprit s'est divisé en deux personnalités distinctes.",
  }
  {
    picture: "images/story_portrait_cancer.jpg",
    name: "Deathmask",
    age:"30",
    height: "184cm",
    weight:"82kg",
    origin: "Italie",
    spell: "Hades Circles",
    text:"Affronté par le Chevalier du Dragon Shiryû, Masque de mort est le gardien de la 4e Maison du Sanctuaire. Adorant les combats et le meurtre, cruel, gardant les visages de ses victimes innocentes incrustées dans sa maison, il envoie même par deux fois l'âme de Shiryû à la frontière entre le monde des vivants et celui des morts. Il s’y rend lui-même pour s’assurer que Shiryû ne reviendra pas à nouveau. Il sera finalement vaincu et jeté dans le puits des Enfers.",
  }
  {
    picture: "images/story_portrait_lion.jpg",
    name: "Aiolia",
    age:"20",
    height: "185cm",
    weight:"85kg",
    origin: "Grèce",
    spell: "Lightning Plasma",
    text: "Ayant à cœur de laver l’honneur de sa famille après que son frère Aiolos, le Chevalier d’or du Sagittaire, ait trahi le Sanctuaire, Aiolia se retrouve sous l’emprise du Grand Pope. Il parvient néanmoins à briser le sort lorsqu’il tue accidentellement Cassios, et décide alors de combattre aux côtés de Seiya et des autres Chevaliers de Bronze.",
  }
  {
    picture: "images/story_portrait_vierge.jpg",
    name: "Shaka",
    age:"20",
    height: "182cm",
    weight:"68kg",
    origin: "Inde",
    spell: "Heaven's treasure",
    text: "Considéré comme la réincarnation de Bouddha, gardien de la 6e Maison du Zodiaque, surnommé l'homme le plus proche des dieux, c'est l'un des plus puissant Chevalier d'or, possèdant en outre des dons télékinétiques rivalisant avec ceux du Chevalier d'or Mû du Bélier. Afin de conserver et accroître son cosmos, il garde toujours les yeux fermés. Quand il les ouvre, c'est généralement pour utiliser sa technique ultime du Trésor du Ciel, dont Ikki, le Chevalier du Phoenix, fera les frais. Malgré sa clairvoyance absolue, il n'échappe pas au machiavélisme du Grand Pope et se laisse abuser comme la plupart des autres Chevaliers d'or, mais ne le comprend qu'au moment de mourir.",
  }
  {
    picture: "images/story_portrait_balance.jpg",
    name: "Dôko",
    age:"261",
    height: "170cm",
    weight:"Inconnu",
    origin: "Chine",
    spell: "Dragon's wrath",
    text:"Il s’agit du Chevalier d’or le plus âgé. Absent du Sanctuaire à l’arrivée des Chevaliers de Bronze, Dôko s’est retiré du monde après avoir mené de nombreux combats, prenant alors la forme d’un vieil ermite vivant dans la région des Cinq Pics de Rozan. C’est là qu’il a pu notamment former Shiryû, le Chevalier du Dragon.",
  }
  {
    picture: "images/story_portrait_scorpion.jpg",
    name: "Milo",
    age:"20",
    height: "185cm",
    weight:"84kg",
    origin: "Grèce",
    spell: "Scarlet needle",
    text:"Grand ami de Camus, chevalier d'or du Verseau, Milo est le gardien de la 8e maison du Zodiaque. Orgueilleux, mais personnage noble de caractère, capable de reconnaître les qualités de ses adversaires bien qu'il puisse être impitoyable, Milo est impressionné par la ténacité et le courage de Hyôga - disciple du Chevalier d'or du Verseau - au point qu'au lieu de l'achever, il lui sauvera la vie.",
  }
  {
    picture: "images/story_portrait_sagittaire.jpg",
    name: "Aiolos",
    age:"14 à sa mort",
    height: "187cm",
    weight:"85kg",
    origin: "Grèce",
    spell: "Atomic Thunder Bolt",
    text:"Gardien de la 9e maison du Zodiaque, frère aîné du Chevalier du Lion dont il prend en charge l'entraînement jusqu'à sa mort, Aiolos est un personnage clé dans l'histoire puisque c'est par lui qu'arrive toute l'intrigue. Il est en effet le sauveur de la réincarnation de la déesse Athéna, qu'il réussit à arracher des griffes du Pope alors que celui-ci s'apprêtait à la tuer. Déclaré traître par le Pope, il est attaqué et grièvement blessé par le Chevalier du Capricorne. On n'a jamais retrouvé son corps. Lors de la bataille du Sanctuaire, son armure veille sur Athéna blessée, tandis qu'elle sauvera plusieurs fois la vie du Chevalier Pégase.",
  }
  {
    picture: "images/story_portrait_capricorne.jpg",
    name: "Shura",
    age:"23",
    height: "186cm",
    weight:"83kg",
    origin: "Espagne",
    spell: "Excalibur",
    text:"Dans le manga, Shura est un serviteur dévoué au Grand Pope, bien qu'il connaisse sa vraie identité. Dans l'animé en revanche, le Chevalier d'or du Capricorne est dépeint comme sous influence par les mensonges de Saga, qui l'ont convaincu de se retourner contre la déesse Ahténa et d'affronter les Chevaliers de Bronze. Mais au cours de son combat face à Shiryû, Shura finit par retrouver ses esprits, et il lui transmet même les secrets de sa technique de prédilection avant de succomber à ses blessures.",
  }
  {
    picture: "images/story_portrait_verseau.jpg",
    name: "Camus",
    age:"20",
    height: "184cm",
    weight:"76kg",
    origin: "France",
    spell: "Aurora Execution",
    text:"Maître de Hyôga qu'il a formé dans les plaines de Sibérie, Camus affronte son ancien élève dans la Maison du Verseau. Il sort vainqueur de ce premier duel, mais finit terrassé quand son disciple parvient à exécuter à la perfection sa propre technique : l'Exécution de l'Aurore. Dans les derniers instants de sa vie, il reconnaît la supériorité de Hyôga et la justesse de son combat pour la déesse Athéna.",
  }
  {
    picture: "images/story_portrait_poissons.jpg",
    name: "Aphrodite",
    age:"22",
    height: "183cm",
    weight:"72kg",
    origin: "Suède",
    spell: "Bloody Rose",
    text:"Défenseur du dernier des douze Maisons du Sanctuaire, d'une loyauté sans faille au Grand Pope, Aphrodite, guerrier androgyne et narcissique, vénère par-dessus tout la force. Combattant féroce, il est opposé à Shun, le Chevalier de Bronze de la constellation d'Andromède. Celui-ci devra utiliser son attaque ultime qu'il n'avait jamais utilisé auparavant, la Tempête Nébulaire, pour venir à bout de ce guerrier intelligent et redoutable.",
  }
];


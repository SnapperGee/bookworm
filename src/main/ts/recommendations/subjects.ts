/**
 * @module subjects
 */

/** The different book subjects organized into their various topics. */
export const subjects: Readonly<{
    arts: readonly string[],
    animals: readonly string[],
    fiction: readonly string[],
    scienceAndMathematics: readonly string[],
    businessAndFinances: readonly string[],
    childrens: readonly string[],
    history: readonly string[],
    healthAndWellness: readonly string[],
    biography: readonly string[],
    socialSciences: readonly string[],
    places: readonly string[],
    textbooks: readonly string[],
    booksByLanguage: readonly string[]
}> = {
    arts: Object.freeze(["architecture", "art instruction", "art history", "dance",
        "design", "fashion", "film", "graphic design", "music", "music theory",
        "painting", "photography"]),

    animals: Object.freeze(["bears", "cats", "kittens", "dogs", "puppies"]),

    fiction: Object.freeze(["fantasy", "historical fiction", "horror", "humor",
        "literature", "magic", "mystery and detective stories", "plays", "poetry",
        "romance", "science fiction", "short stories", "thriller", "young adult"]),

    scienceAndMathematics: Object.freeze(["biology", "chemistry", "mathematics", "physics", "programming"]),

    businessAndFinances: Object.freeze(["management", "entrepreneurship", "business economics", "business success", "finance"]),

    childrens: Object.freeze(["kids books", "stories in rhyme", "baby books", "bedtime books", "picture books"]),

    history: Object.freeze(["ancient civilization", "archaeology", "anthropology", "world war ii", "social life and customs"]),

    healthAndWellness: Object.freeze(["cooking", "cookbooks", "mental health", "exercise", "nutrition", "self-help"]),

    biography: Object.freeze(["autobiographies", "history", "politics and government",
        "world war ii", "women", "kings and rulers", "composers", "artists"]),

    socialSciences: Object.freeze(["anthropology", "religion", "political science", "psychology"]),

    places: Object.freeze(["brazil", "india", "indonesia", "united states"]),

    textbooks: Object.freeze(["history", "mathematics", "geography", "psychology",
        "algebra", "education", "business & economics", "science", "chemistry",
        "english language", "physics", "computer science"]),

    booksByLanguage: Object.freeze(["english", "german", "french", "spanish", "russian", "chinese", "italian", "japanese",
        "portuguese", "arabic", "korean", "polish", "hebrew", "dutch", "latin", "indonesian", "undetermined", "swedish",
        "turkish", "hindi", "mandarin", "urdu", "danish", "hungarian", "czech", "ukrainian", "persian", "modern greek",
        "romanian", "bulgarian", "vietnamese", "catalan", "bengali", "thai", "norwegian", "multiple languages", "finnish",
        "tamil", "croatian", "gujarati", "welsh", "marathi", "yiddish", "tibetan", "punjabi", "armenian", "serbian", "telugu",
        "malay", "kannada", "slovak", "serbian", "sanskrit", "slovene", "malayalam", "albanian", "burmese", "lithuanian",
        "latvian", "nepali", "mongolian", "afrikaans", "estonian", "georgian", "macedonian", "odia", "germanic (other)",
        "croatian", "ancient greek", "irish", "belarusian", "icelandic", "kurdish", "sindhi", "azerbaijani", "uzbek", "turkish, ottoman",
        "bosnian", "pashto", "kazakh", "sinhalese", "sinhala", "amharic", "assamese", "swahili", "tajik", "galician", "galician",
        "irish", "kyrgyz", "basque", "scottish gaelix", "tagalog", "khmer", "javanese", "rajasthani", "tatar", "lao", "romansh",
        "english, middle (1100-1500)", "bashkir", "hausa", "maithili", "konkani", "turkmen", "newari", "sino-tibetan (other)",
        "french, middle (ca. 1300-1600)", "chuvash", "niger-kordofanian (other)", "pali", "romance (other)", "austronesian (other)",
        "indic (other)", "moldavian", "bokmål", "finno-ugrian (other)", "esperanto", "french, old (ca. 842-1300)", "tagalog",
        "altaic (other)", "sorbian (other)", "syriac, modern", "sundanese", "yoruba", "church slavonic", "scottish gaelic",
        "baluchi", "tigrinya", "somali", "manipuri", "balinese", "dravidian (other)", "papuan (other)", "bhojpuri",
        "caucasian (other)", "german, middle high (ca. 1050-1500)", "braj", "prakrit languages", "lahndā", "yakut", "zulu",
        "kashmiri", "breton", "english, old (ca. 450-1100)", "maltese", "faroese", "xhosa", "dogri", "malagasy", "tatar",
        "kinyarwanda", "slavic (other)", "creoles and pidgins, french-based (other)", "egyptian", "frisian", "bantu (other)",
        "mayan languages", "romani", "provençal (to 1500)", "uyghur", "scots", "south american indian (other)", "judeo-arabic",
        "lushai", "maldivian", "malagasy", "esperanto", "west frisian", "faroese", "ossetian", "northern sotho", "ladino",
        "luxembourgish", "shona", "fula", "akkadian", "serbo-croatian", "occitan (post 1500)", "khasi", "corsican", "sotho",
        "shona", "wolof", "berber (other)", "luganda", "eskimo languages", "papiamento", "aramaic", "cree", "haitian creole",
        "chechen", "mari", "quechua", "adygei", "tswana", "coptic", "igbo", "occitan", "hawaiian", "miscellaneous languages",
        "north american indian (other)", "northern ndebele", "tswana", "ojibwe", "buriat", "dzongkha", "chewa", "sesotho",
        "cornish", "venda", "udmurt", "philippine (other)", "tsonga", "mohawk", "creoles and pidgins (other)", "magahi",
        "marwari", "awadhi", "nahuatl", "central american indian (other)", "māori", "ethiopic", "nilo-saharan (other)",
        "nynorsk", "komi", "tetum", "kabardian", "algonquian (other)", "swazi", "twi", "afroasiatic (other)", "mon-khmer (other)",
        "karen languages", "ethiopic", "oromo", "syriac", "sardinian", "friulian", "batak", "mandingo", "bemba", "pahlavi",
        "minangkabau", "avaric", "khmer", "inuktitut", "kara-kalpak", "achinese", "bambara", "creoles and pidgins, english-based (other)",
        "filipino", "samoan", "oromo", "abkhaz", "ewe", "cebuano", "dutch, middle (ca. 1050-1350)", "old high german",
        "himachali", "kumyk", "kawi", "gothic", "sumerian", "ndonga", "cherokee", "iban", "shan", "guarani", "guarani",
        "kachin", "micmac", "low german", "greenlandic", "kongo", "karachay-balkar", "mooré", "tajik", "creoles and pidgins, portuguese-based (other)",
        "gã", "dakota", "kirundi", "swazi", "gikuyu", "australian languages", "sami", "iloko", "iranian (other)", "pampanga",
        "bikol", "gsw", "hmong", "kurukh", "serer", "zaza", "tuvinian", "oirat", "indo-european (other)", "munda (other)",
        "erzya", "cantonese", "iroquoian (other)", "lezgian", "southern ndebele", "songhai", "kabyle", "aymara", "dargwa",
        "judeo-persian", "chagatai", "kwanyama", "makasar", "bugis", "soninke", "celtic (other)", "dyula", "creek", "choctaw",
        "lingala", "manobo languages", "samaritan aramaic", "tamashek", "kpelle", "athapascan (other)", "herero", "hiligaynon",
        "khoisan (other)", "kru (other)", "tahitian", "tai", "asturian", "basa", "madurese", "santali", "northern sami",
        "zapotec", "crimean tatar", "interlingua (international auxiliary language association)", "moksha", "sami", "akan",
        "nogai", "nyankole", "tigré", "afar", "fanti", "east frisian", "manx", "vai", "ingush", "lozi", "mapuche", "artificial (other)",
        "avestan", "chinook jargon", "luo (kenya and tanzania)", "palauan", "aromanian", "gayo", "sango", "salishan languages",
        "klingon", "marshallese", "tsimshian", "acoli", "adangme", "cushitic (other)", "interlingua", "ponape", "yupik languages",
        "apache languages", "dayak", "fon", "semitic (other)", "altai", "delaware", "mende", "manchu", "navajo", "tongan",
        "bamileke languages", "efik", "elamite", "old norse", "otomian languages", "old persian (ca. 600-400 b.c.)", "waray",
        "kamba", "nzima", "gondi", "ido", "pangasinan", "yao (africa)", "aragonese", "fijian", "luba-katanga", "samoan",
        "tonga (nyasa)", "edo", "fang", "gilbertese", "mongo-nkundu", "siksika", "chamorro", "cheyenne", "rarotongan",
        "flemish", "dinka", "grebo", "karelian", "nyoro", "ugaritic", "duala", "ewondo", "kanuri", "khotanese", "mirandese",
        "sasak", "temne", "tumbuka", "arawak", "bislama", "chuukese", "chamic languages", "ijo", "masai", "sandawe", "selkup",
        "tok pisin", "aleut", "lunda", "tokelauan", "arapaho", "baltic (other)", "carib", "kusaie", "niuean", "nubian languages",
        "siouan (other)", "sranan", "susu", "tlingit", "umbundu", "zande languages", "zuni", "american sign language", "gorontalo",
        "hiri motu", "inupiaq", "lamba (zambia and congo)", "luba-lulua", "tiv", "wolayta", "upper sorbian", "kimbundu",
        "sidamo", "sogdian", "sukuma", "terena", "wakashan languages", "ekajuk", "gbaya", "gullah", "nauruan", "osage",
        "tuvaluan", "yapese"])
}

/** Array of the topics derrived from the {@link subjects} keys, */
const topics: ReadonlyArray<keyof typeof subjects> = Object.freeze(Object.keys(subjects)) as ReadonlyArray<keyof typeof subjects>;

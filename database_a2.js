// ==========================================
// 1. ESTRUCTURA DE LA BASE DE DATOS
// ==========================================
const UNITS_META = UNITS_META || [];
const EXERCISES_DATA = EXERCISES_DATA || [];

// ==========================================
// 2. MOTOR ADAPTADOR
// (Convierte tu formato 'ex()' al formato de la plataforma)
// ==========================================
const exercises = {
    push: function(obj) {
        EXERCISES_DATA.push(obj);
    }
};

function ex(idGlobal, unitName, title, question, opts, correctLabel, feedback) {
    const unitId = Math.ceil(idGlobal / 5);
    let levelAssigned = "A1";
    if (unitId > 40 && unitId <= 80) levelAssigned = "A2";
    if (unitId > 80) levelAssigned = "B1";

    if (!UNITS_META.find(u => u.id === unitId)) {
        UNITS_META.push({
            id: unitId,
            level: levelAssigned,
            title: `Unidad ${unitId}: ${unitName}`,
            desc: title
        });
    }

    const letters = ['a', 'b', 'c', 'd'];
    const options = opts.map((t, i) => ({
        id: letters[i],
        text: t.replace(/^[a-d][\.\)]\s*/, '').trim(),
        isCorrect: letters[i] === correctLabel
    }));

    return {
        globalId: idGlobal,
        unitId: unitId,
        question: question,
        options: options,
        feedbackCorrect: feedback,
        feedbackWrong: `❌ Incorrecto. La respuesta era la ${correctLabel.toUpperCase()}. ${feedback.replace('✅ ', '')}`
    };
}

// ==========================================
// 3. TUS EJERCICIOS (NIVEL A2: 201 - 400)
// ==========================================
const EXERCISES_A2_RAW = [
    [201, "Saludos", "Basic Greetings", "¿Qué significa '¡Chaan!'?", ["a. Goodbye", "b. How are you?", "c. Hello/Hi"], "c", "¡Chaan! = Hello/Hi"],
    [202, "Saludos", "Introductions", "Completa: Naꞌh _____ Jwahn. (My name is John)", ["a. naa", "b. xpwiinn", "c. gacanee"], "a", "naa = name/is"],
    [203, "Saludos", "Questions", "¿Chyu naa lu'h?", ["a. Naꞌh naan Jesuhs", "b. Bwen duxa", "c. Zuxchiilli lu'h"], "a", "Chyu naa lu'h = Who are you?"],
    [204, "Saludos", "Expressions", "Good morning! (God is good)", ["a. Bwen duxa!", "b. Nuuꞌhuhn riiꞌ", "c. Bwen"], "a", "Bwen duxa = Good morning/Goodbye"],
    [205, "Saludos", "Basic Questions", "_____ naa lu'h? (Who are you?)", ["a. Chyu", "b. Xixnaa", "c. Cuun"], "a", "Chyu = Who"],
    
    [206, "Familia", "Family Members", "Xtaada", ["a. Mother", "b. Father", "c. Son"], "b", "Xtaada = Father"],
    [207, "Familia", "Family Sentences", "Joseh guhca _____ Jesuhs.", ["a. xmaah", "b. xtaada", "c. llii'n"], "b", "xtaada = father"],
    [208, "Familia", "Possessives", "Xtaa'da'hn (My father) laa _____.", ["a. My father", "b. Your mother", "c. His sibling"], "a", "Xtaa'da'hn = My father"],
    [209, "Familia", "Descriptions", "John is the son of Zebedee.", ["a. Jwahn naa llii'n Zebedeu.", "b. María naa xmaah Jesuhs.", "c. Joseh naa che'hla María."], "a", "llii'n = son"],
    [210, "Familia", "Relationships", "Llii'n means 'son' or 'child'.", ["a. True", "b. False", "c. I don't know"], "a", "True. Llii'n = son/child"],
    
    [211, "Números", "Numbers 1-10", "Tuhbi", ["a. Two", "b. One", "c. Three"], "b", "Tuhbi = One"],
    [212, "Números", "Numbers 6-10", "Xo'pa =", ["a. Six", "b. Seven", "c. Eight"], "a", "Xo'pa = Six"],
    [213, "Números", "Counting", "Three men", ["a. Chohnna ndxi'hw", "b. Ga'yu gunna'h", "c. Chiohpa biñi'n"], "a", "Chohnna = 3, ndxi'hw = men"],
    [214, "Números", "Sentences", "Guyuu' _____ bwiinn. (3 people)", ["a. chiohpa", "b. chohnna", "c. tahpa"], "b", "chohnna = 3"],
    [215, "Números", "Ordinals", "_____ dxyih (First day)", ["a. Mwer", "b. Raroopa", "c. Riohnna"], "a", "Mwer = First"],

    [216, "Verbos Presente", "Basic Verbs", "Gwah", ["a. To speak", "b. To go", "c. To eat"], "b", "Gwah = To go"],
    [217, "Verbos Presente", "I form", "Naꞌh _____ (I go)", ["a. gwah", "b. rahw", "c. guñiꞌ"], "a", "gwah = go"],
    [218, "Verbos Presente", "You form", "Lu'h _____ (you eat) xi?", ["a. gwah", "b. rahw", "c. guñiꞌ"], "b", "rahw = eat"],
    [219, "Verbos Presente", "He/She form", "Ba _____ (he speaks)", ["a. gwah", "b. rahw", "c. guñiꞌ"], "c", "guñi' = speak"],
    [220, "Verbos Presente", "We form", "Nu'h _____ (we do)", ["a. guñiꞌ", "b. guiñiꞌ", "c. ruhnn"], "c", "ruhnn = do/make"],

    [221, "Verbos Pasado", "I form", "Naꞌh _____ (I went)", ["a. guyaaꞌhahn", "b. gudahw", "c. guñiꞌ"], "a", "guyaa'hahn = went"],
    [222, "Verbos Pasado", "Common Verbs", "Past of Gwah (ir)", ["a. Guhca", "b. Guyaꞌloh", "c. Bwa'ha"], "b", "Guya'loh = Past of go (contextual)"],
    [223, "Verbos Pasado", "Sentences", "He went to Jerusalem.", ["a. Gwah ba loh guihdxyi Jerusalehn.", "b. Gudahw bi pahn.", "c. Bwiꞌhnn nuꞌh xtsiꞌn."], "a", "Gwah ba = He went (in this context)"],
    [224, "Verbos Pasado", "Irregular", "Ba _____ (he came)", ["a. gwah", "b. badzihn", "c. guhca"], "b", "badzihn = came/arrived"],
    [225, "Verbos Pasado", "Questions", "¿Canehza _____ lu'h? (Where did you go?)", ["a. gwah", "b. gudahw", "c. guñiꞌ"], "a", "gwah = went/go"],

    [226, "Verbos Futuro", "I will", "Naꞌh _____ (I will go)", ["a. ziaꞌhahn", "b. ziraawuhn", "c. zuiñiꞌn"], "a", "zia'hahn = will go"],
    [227, "Verbos Futuro", "Sentences", "I will go tomorrow.", ["a. Ziaꞌhahn guillii.", "b. Ziraawuhn bi chiꞌchi.", "c. Zuiñiꞌn nuꞌh dxyi'dxyi nanchii."], "a", "Zia'hahn = I will go, guillii = tomorrow"],
    [228, "Verbos Futuro", "Questions", "Will you go to the city?", ["a. ¿Ziaꞌha lu'h loh guihdxyi?", "b. ¿Xi ziraawuhn bi?", "c. ¿Cuuca zeꞌ raꞌ ba?"], "a", "Zia'ha = will go"],
    [229, "Verbos Futuro", "Different Subjects", "Future of 'to go' for Naꞌh (I)", ["a. Ziaꞌha tu", "b. Ziaꞌha ba", "c. Ziaꞌhahn"], "c", "Zia'hahn = I will go"],
    [230, "Verbos Futuro", "Negation", "Make negative: Ziaꞌhahn guihdxyi.", ["a. Ayi ziaꞌhahn guihdxyi.", "b. Ayi ziraawuhn pahn.", "c. Ayi zuiñiꞌn dxyi'dxyi."], "a", "Ayi negates the future verb."],

    [231, "Verbos Compuestos", "To Say", "_____ loh ba: 'Naꞌh naan Jwahn.'", ["a. Guñiꞌ", "b. Guñiꞌn", "c. Guñiꞌnee"], "a", "Guñi' = Speak/Say"],
    [232, "Verbos Compuestos", "To Go", "_____ loh guihdxyi Jerusalehn.", ["a. Gwah", "b. Gwahguihtsi", "c. Gwazah"], "a", "Gwah = Go"],
    [233, "Verbos Compuestos", "To Do", "Xi _____ lu'h?", ["a. Ruhnn", "b. Ruhnnee", "c. Ruhnnan"], "a", "Ruhnn = Do"],
    [234, "Verbos Compuestos", "Phrases", "To teach the word", ["a. Guluuꞌyi xchi'dxyi", "b. Gacanee laꞌh raꞌ bwiinn", "c. Chechii stoꞌ laꞌh Dxiohs"], "a", "Guluu'yi = teach, xchi'dxyi = word"],
    [235, "Verbos Compuestos", "Tenses Review", "Naꞌh _____ (I go) loh guihdxyi guillii.", ["a. gwah", "b. ziaꞌhahn", "c. guyaaꞌhahn"], "b", "zia'hahn = I will go (future with tomorrow)"],

    [236, "Sustantivos", "Common Nouns", "Guihdxyi", ["a. Word/speech", "b. Food", "c. City"], "c", "Guihdxyi = City"],
    [237, "Sustantivos", "Articles", "_____ ndxiꞌhw (a man)", ["a. Tuhbi", "b. Gahca", "c. Ra'"], "a", "Tuhbi = A/One"],
    [238, "Sustantivos", "Plurals", "Plural of Tuhbi bwiinn", ["a. Raꞌ bwiinn", "b. Raꞌ xmaah", "c. Raꞌ lliiꞌn"], "a", "Ra' makes the noun plural"],
    [239, "Sustantivos", "Usage", "Gwah ba loh _____ (city).", ["a. guihdxyi", "b. bwiinn", "c. guelwahw"], "a", "guihdxyi = city"],
    [240, "Sustantivos", "Identification", "A person who speaks the word", ["a. Bwiinn nin guñiꞌ xchi'dxyi", "b. Bwiinn nin rahw guelwahw", "c. Xpwiinn Dxiohs"], "a", "Bwiinn = person, guñi' = speaks, xchi'dxyi = word"],

    [241, "Adjetivos", "Common Adjectives", "Zaꞌca", ["a. Bad", "b. Good", "c. Holy/sacred"], "b", "Za'ca = Good"],
    [242, "Adjetivos", "Agreement", "Bwiinn _____ (good person)", ["a. dxaaba", "b. bwen", "c. rooꞌ"], "b", "bwen = good"],
    [243, "Adjetivos", "Describing", "A wise man", ["a. Tuhbi ndxiꞌhw nasiin", "b. Tuhbi gunnaꞌh saantu", "c. Tuhbi biñiꞌn bwen"], "a", "ndxi'hw = man, nasiin = wise"],
    [244, "Adjetivos", "Comparison", "He is greater than I.", ["a. Lasahca ru ba loh naꞌh.", "b. Bwen ru riiꞌ loh riꞌca.", "c. Saantu ru bi loh ba."], "a", "Lasahca ru = greater, loh na'h = than me"],
    [245, "Adjetivos", "Review", "Dxiohs naa _____ (holy).", ["a. bwen", "b. saantu", "c. rooꞌ"], "b", "saantu = holy"],

    [246, "Posesivos", "Pronouns", "-hn", ["a. Our", "b. Their", "c. My"], "c", "-hn = my"],
    [247, "Posesivos", "Sentences", "Xtaa'da'hn =", ["a. My father", "b. Your mother", "c. His/her child"], "a", "Xtaada = father, -hn = my"],
    [248, "Posesivos", "Construction", "My brother", ["a. Bwiꞌtsihn", "b. Bizaaꞌn lu'h", "c. Xtaada ba"], "a", "Bwihtsi = brother, -hn = my"],
    [249, "Posesivos", "Of Construction", "Xtaada _____ (father of) Jesuhs.", ["a. xteenn", "b. loh", "c. cun"], "a", "xteenn = of/belonging to"],
    [250, "Posesivos", "Review", "_____ (My) xmaah laa María.", ["a. -hn", "b. -lu'h", "c. -ba"], "a", "-hn = my"],

    [251, "Preposiciones", "Common Prepositions", "Loh", ["a. For", "b. In/at", "c. With"], "b", "Loh = in/at/to"],
    [252, "Preposiciones", "Using Loh", "Nuuꞌhuhn _____ (in) guihdxyi.", ["a. loh", "b. nez", "c. cun"], "a", "loh = in"],
    [253, "Preposiciones", "Using Nez", "_____ (from) guihdxyi Nazaret.", ["a. loh", "b. nez", "c. para"], "b", "nez = from/direction"],
    [254, "Preposiciones", "Using Cun", "Gwah ba _____ (with) xpwiinn ba.", ["a. loh", "b. nez", "c. cun"], "c", "cun = with"],
    [255, "Preposiciones", "Review", "Gwah ba _____ guihdxyi Jerusalehn.", ["a. nez", "b. loh", "c. cun"], "b", "loh = to (direction)"],

    [256, "Conjunciones", "Common Conjunctions", "Cun", ["a. And", "b. But", "c. Or"], "a", "Cun = and/with"],
    [257, "Conjunciones", "Using Cun", "Combine: Gwah ba loh guihdxyi. Gwah ba cun xpwiinn ba.", ["a. Gwah ba loh guihdxyi per cun xpwiinn ba.", "b. Gwah ba loh guihdxyi cun xpwiinn ba.", "c. Gwah ba loh guihdxyi laasii xpwiinn ba."], "b", "cun joins the phrases"],
    [258, "Conjunciones", "Using Per", "Xclaaꞌdzi ba gwah, _____ (but) ayi gwah.", ["a. cun", "b. per", "c. laasii"], "b", "per = but"],
    [259, "Conjunciones", "Using Laasii", "Gwah ba, _____ (because) xclaaꞌdzi ba.", ["a. cun", "b. per", "c. laasii"], "c", "laasii = because"],
    [260, "Conjunciones", "Review", "Gwah ba, _____ ayi gwah. (but)", ["a. cun", "b. per", "c. laasii"], "b", "per = but"],

    [261, "Negación", "Basic Negation", "Make negative: Gwah ba loh guihdxyi.", ["a. Ayi gwah ba loh guihdxyi.", "b. Gwah ba ayi loh guihdxyi.", "c. Gwah ayi ba loh guihdxyi."], "a", "Ayi is placed before the verb"],
    [262, "Negación", "No as Response", "Answer negatively: ¿Ta gwah lu'h loh guihdxyi?", ["a. Uhn, gwah.", "b. Coh, ayi gwah.", "c. Ziꞌchi, gwah."], "b", "Coh = No, ayi = not"],
    [263, "Negación", "Ayi with Verbs", "_____ gwah ba. (He does not go)", ["a. Ayi", "b. Coh", "c. Nagahdxi"], "a", "Ayi negates the verb"],
    [264, "Negación", "Not Yet", "Not yet gone.", ["a. Ayi gwah.", "b. Nagahdxi gwah.", "c. Coh gwah."], "b", "Nagahdxi = Not yet"],
    [265, "Negación", "Review", "_____ gwah ba riꞌca. (He has not gone here)", ["a. Ayi", "b. Nagahdxi", "c. Nin tuhbi"], "b", "Nagahdxi = not yet / has not"],

    [266, "Preguntas", "Question Words", "Chyu", ["a. What", "b. Who", "c. Where"], "b", "Chyu = Who"],
    [267, "Preguntas", "Who", "Who are you?", ["a. ¿Chyu naa lu'h?", "b. ¿Chyu naa ba?", "c. ¿Chyu guñiꞌ riꞌca?"], "a", "Chyu naa lu'h = Who are you?"],
    [268, "Preguntas", "What", "What is this?", ["a. ¿Xi niꞌca?", "b. ¿Xi guñiꞌ lu'h?", "c. ¿Xi zuruꞌnnahn lu'h?"], "a", "Xi ni'ca = What is this?"],
    [269, "Preguntas", "Where", "Where are you?", ["a. ¿Cannehza nuu lu'h?", "b. ¿Cannehza nuu guihdxyi?", "c. ¿Cannehza gwah ba?"], "a", "Cannehza nuu lu'h = Where are you?"],
    [270, "Preguntas", "Review", "_____ naa lu'h? (Who)", ["a. Xi", "b. Chyu", "c. Cannehza"], "b", "Chyu = Who"],

    [271, "Tiempo", "Days & Times", "Nnadxyih", ["a. Today", "b. Tomorrow", "c. Yesterday"], "a", "Nnadxyih = Today"],
    [272, "Tiempo", "References", "_____ (Today) gwah nuꞌh.", ["a. Nnadxyih", "b. Guillii", "c. Nnaꞌyi"], "a", "Nnadxyih = Today"],
    [273, "Tiempo", "Phrases", "In the morning", ["a. Loh rsiiyidoꞌ", "b. Loh xcagaꞌ", "c. Loh gueꞌla"], "a", "Loh rsiiyido' = In the morning"],
    [274, "Tiempo", "Duration", "Guyuuꞌ ba _____ (for) chohnna dxyih.", ["a. para", "b. loh", "c. gaduhbi"], "a", "para = for (duration)"],
    [275, "Tiempo", "Review", "_____ (Today) gwah nuꞌh.", ["a. Nnaꞌyi", "b. Nnadxyih", "c. Guillii"], "b", "Nnadxyih = Today"],

    [276, "Imperativos", "Basic Commands", "Come here!", ["a. Gultaa' riiꞌ!", "b. Gwah ri'chi!", "c. Gulgahw!"], "a", "Gultaa' rii' = Come here"],
    [277, "Imperativos", "Negative Commands", "Don't go!", ["a. Ayi gwah!", "b. Ayi gahw niꞌca!", "c. Ayi guiñiꞌ!"], "a", "Ayi gwah = Don't go"],
    [278, "Imperativos", "Polite Requests", "Please help me.", ["a. Balahsastoꞌ lu'h naꞌh.", "b. Guiñiꞌnee loh naꞌh.", "c. Gulgadiꞌhi."], "a", "Balahsasto' = Please"],
    [279, "Imperativos", "Plural Commands", "Come here (all of you)!", ["a. Gultaaꞌbi riiꞌ!", "b. Gulgwee!", "c. Gulgahw!"], "a", "Gultaa'bi rii' = Come here (plural)"],
    [280, "Imperativos", "Review", "_____ (Come) riiꞌ!", ["a. Gwah", "b. Gultaaꞌ", "c. Gulgahw"], "b", "Gultaa' = Come"],

    [281, "Descripciones", "Describing People", "He is a good man.", ["a. Ba naa tuhbi ndxiꞌhw bwen.", "b. Bi naa tuhbi gunnaꞌh saantu.", "c. Raꞌ ba naa raꞌ bwiinn nasiin."], "a", "ndxi'hw bwen = good man"],
    [282, "Descripciones", "Describing Places", "The city is great.", ["a. Guihdxyi naa rooꞌ.", "b. Xquidoꞌ naa saantu.", "c. Yuuꞌ naa bwen."], "a", "Guihdxyi = city, roo' = great/big"],
    [283, "Descripciones", "Describing Actions", "He works hard.", ["a. Ruhnn ba xtsiꞌn cun jweersi.", "b. Guñiꞌ bi bwen.", "c. Rahw raꞌ ba carrih."], "a", "Ruhnn xtsi'n cun jweersi = works hard"],
    [284, "Descripciones", "Physical", "He is tall.", ["a. Ba naa rooꞌ.", "b. Bi naa biꞌtuꞌhn.", "c. Raꞌ ba naa raꞌ biiꞌhin."], "a", "roo' = tall/big"],
    [285, "Descripciones", "Review", "Ba naa _____ (great).", ["a. biꞌtuꞌhn", "b. rooꞌ", "c. biiꞌhin"], "b", "roo' = great/big"],

    [286, "Colores", "Basic Colors", "Labweh", ["a. Black", "b. Red", "c. White"], "c", "Labweh = White"],
    [287, "Colores", "Sentences", "Xahba naa _____ (white).", ["a. labweh", "b. naxñaa", "c. guhtsi"], "a", "labweh = white"],
    [288, "Colores", "Objects", "The white house", ["a. Yuuꞌ labweh", "b. Dxiah naxñaa", "c. Gubihdxyi guiiꞌga"], "a", "Yuu' = house, labweh = white"],
    [289, "Colores", "Questions", "What color is this?", ["a. ¿Xi culohr niꞌca?", "b. ¿Ta labweh yuuꞌ?", "c. ¿Ta naxñaa dxiah?"], "a", "Xi culohr = What color"],
    [290, "Colores", "Review", "Xahba naa _____ (white).", ["a. naxñaa", "b. labweh", "c. guhtsi"], "b", "labweh = white"],

    [291, "Direcciones", "Direction Words", "Lahdu derehchu", ["a. Left", "b. Right", "c. In front"], "b", "Lahdu derehchu = Right"],
    [292, "Direcciones", "Giving Directions", "Go straight ahead.", ["a. Gwah delaanta.", "b. Gwah lahdu derehchu.", "c. Gwah lahdu rrabwehsa."], "a", "delaanta = straight ahead"],
    [293, "Direcciones", "Location Phrases", "Nuu yuuꞌ _____ (in front).", ["a. delaanta", "b. derehchu", "c. dihtsi"], "a", "delaanta = in front"],
    [294, "Direcciones", "Questions", "Where is the temple?", ["a. ¿Cannehza nuu xquidoꞌ?", "b. ¿Ta nuu lahdu derehchu?", "c. ¿Ta nuu delaanta yuuꞌ?"], "a", "Cannehza = where"],
    [295, "Direcciones", "Review", "Gwah _____ (straight).", ["a. lahdu derehchu", "b. delaanta", "c. dihtsi"], "b", "delaanta = straight"],

    [296, "Clima", "Weather Words", "Gubihdxyi", ["a. Wind", "b. Sun", "c. Rain"], "b", "Gubihdxyi = Sun"],
    [297, "Clima", "Sentences", "The sun is shining.", ["a. Gubihdxyi ruziaꞌñih.", "b. Bwih naa jweersi.", "c. Bwehla riaaba."], "a", "Gubihdxyi = Sun, ruzia'ñih = shining"],
    [298, "Clima", "Nature Words", "_____ (Mountain) naa rooꞌ.", ["a. Dahan", "b. Guiꞌw", "c. Yahga"], "a", "Dahan = Mountain"],
    [299, "Clima", "Describing", "It is a good day.", ["a. Naa tuhbi dxyih bwen.", "b. Gue'l biahca dxaaba.", "c. Gubihdxyi rziaꞌñih duxa."], "a", "dxyih bwen = good day"],
    [300, "Clima", "Review", "_____ (Sun) ruziaꞌñih.", ["a. Gubihdxyi", "b. Bwehla", "c. Bwih"], "a", "Gubihdxyi = Sun"],

    [301, "Cuerpo", "Basic Parts", "Bizloh", ["a. Hand", "b. Foot", "c. Head"], "a", "Bizloh = Hand"],
    [302, "Cuerpo", "Describing", "His head is large.", ["a. Yihca ba naa rooꞌ.", "b. Ñaaꞌ bi naa chuhla.", "c. Naa ba naa jweersi."], "a", "Yihca = Head, roo' = large"],
    [303, "Cuerpo", "Actions", "Gunaꞌzu ba _____ (hands).", ["a. naa", "b. yihca", "c. bizloh"], "a", "naa = hands"],
    [304, "Cuerpo", "Questions", "What is this body part?", ["a. ¿Xi niꞌca naa lahta tihxi?", "b. ¿Ta rooꞌ naa ba?", "c. ¿Ta chuhla ñaaꞌ bi?"], "a", "tihxi = body"],
    [305, "Cuerpo", "Review", "_____ (hand) ba naa jweersi.", ["a. Yihca", "b. Naa", "c. Bizloh"], "b", "Naa = hand/foot"],

    [306, "Objetos", "Common Objects", "Yuuꞌ", ["a. Book", "b. Paper", "c. House"], "c", "Yuu' = House"],
    [307, "Objetos", "Sentences", "The house is large.", ["a. Yuuꞌ naa rooꞌ.", "b. Dxihtsi nuu yihca mweella.", "c. Xahba ba naa labweh."], "a", "Yuu' = house, roo' = large"],
    [308, "Objetos", "Questions", "What is that?", ["a. ¿Xi niꞌca?", "b. ¿Ta rooꞌ yuuꞌ lu'h?", "c. ¿Cannehza nuu dxihtsi?"], "a", "Xi ni'ca = What is that?"],
    [309, "Objetos", "Describing", "_____ (House) naa rooꞌ.", ["a. Yuuꞌ", "b. Dxihtsi", "c. Guhn"], "a", "Yuu' = House"],
    [310, "Objetos", "Review", "_____ naa rooꞌ. (The house is large)", ["a. Dxihtsi", "b. Yuuꞌ", "c. Xahba"], "b", "Yuu' = House"],

    [311, "Actividades", "Routine Words", "Gwastii", ["a. To wake up", "b. To eat", "c. To work"], "a", "Gwastii = Wake up"],
    [312, "Actividades", "Sentences", "I wake up early.", ["a. Gwastihn rsiiyidoꞌ.", "b. Rahw bi xchih rsiiyidoꞌ.", "c. Gwah ba loh xtsiꞌn."], "a", "Gwastihn = I wake up"],
    [313, "Actividades", "Questions", "When do you wake up?", ["a. ¿Cuuca gwastii lu'h?", "b. ¿Xi rahw lu'h?", "c. ¿Cannehza ruhnn lu'h xtsiꞌn?"], "a", "Cuuca = When"],
    [314, "Actividades", "Time", "Gwastihn _____ (in the morning).", ["a. rsiiyidoꞌ", "b. xcagaꞌ", "c. laꞌyidxyih"], "a", "rsiiyido' = morning"],
    [315, "Actividades", "Review", "_____ rsiiyidoꞌ. (Wake up early)", ["a. Gahw", "b. Gwastii", "c. Ruhnn"], "b", "Gwastii = Wake up"],

    [316, "Comida", "Basic Food Words", "Pahn", ["a. Water", "b. Bread", "c. Fruit"], "b", "Pahn = Bread"],
    [317, "Comida", "Sentences", "Bread is good.", ["a. Pahn naa bwen.", "b. Naꞌh reeꞌ ñihsa.", "c. Rahw bi bwehlda."], "a", "Pahn = bread, bwen = good"],
    [318, "Comida", "Meal Words", "_____ (Breakfast) naa bwen.", ["a. Xchih rsiiyidoꞌ", "b. Xchih laꞌyidxyih", "c. Xchih gueꞌla"], "a", "Xchih rsiiyido' = Breakfast"],
    [319, "Comida", "Questions", "What are you eating?", ["a. ¿Xi rahw lu'h?", "b. ¿Ta reeꞌ lu'h ñihsa?", "c. ¿Ta bwen pahn?"], "a", "Xi rahw = What eat"],
    [320, "Comida", "Review", "_____ naa bwen. (Bread is good)", ["a. Pahn", "b. Bwehlda", "c. Ñihsa"], "a", "Pahn = bread"],

    [321, "Interacciones", "Social Verbs", "BagahpaDxiohs", ["a. To thank", "b. To help", "c. To greet"], "c", "BagahpaDxiohs = To greet"],
    [322, "Interacciones", "Sentences", "I greet you.", ["a. BagahpaDxiohs naꞌh loh lu'h.", "b. Zuxchiilli lu'h duxa.", "c. Gacanee ba laꞌh raꞌ bwiinn."], "a", "BagahpaDxiohs = Greet"],
    [323, "Interacciones", "Questions", "How are you?", ["a. ¿Xixnaa nuu lu'h?", "b. ¿Chyu naa lu'h?", "c. ¿Cannehza zeꞌ lu'h?"], "a", "Xixnaa nuu lu'h = How are you"],
    [324, "Interacciones", "Polite Phrases", "_____ (Hello) mihgu.", ["a. Chaan", "b. Bwen duxa", "c. Balahsastoꞌ"], "a", "Chaan = Hello"],
    [325, "Interacciones", "Review", "_____ (Hello) loh lu'h.", ["a. Bwen duxa", "b. Chaan", "c. Zuxchiilli"], "b", "Chaan = Hello"],

    [326, "Cantidades", "Quantity Words", "Ziahan", ["a. A little", "b. Many/much", "c. Some"], "c", "Ziahan = Some"],
    [327, "Cantidades", "Sentences", "There are many people.", ["a. Nuu ziahan duxa raꞌ bwiinn.", "b. Xclaaꞌdzihn gulla biꞌtuꞌhn guelwahw.", "c. Nahpa nuꞌh guriin dxihtsi."], "a", "ziahan duxa = many"],
    [328, "Cantidades", "Questions", "How many people are there?", ["a. ¿Paaldaa bwiinn nuu?", "b. ¿Paaldaa ñihsa nahpa lu'h?", "c. ¿Ta nahpa lu'h nuhn pahn?"], "a", "Paaldaa = How many"],
    [329, "Cantidades", "Phrases", "_____ (Many) bwiinn zeꞌ raꞌ ba.", ["a. Ziahan", "b. Gulla", "c. Biꞌtuꞌhn"], "a", "Ziahan = Many"],
    [330, "Cantidades", "Review", "_____ (Many) bwiinn.", ["a. Gahdzi", "b. Ziahan", "c. Biꞌtuꞌhn"], "b", "Ziahan = Many"],

    [331, "Adverbios", "Manner", "Bwen", ["a. Badly", "b. Well", "c. Quickly"], "b", "Bwen = Well/Good"],
    [332, "Adverbios", "Sentences", "He speaks well.", ["a. Guñiꞌ ba bwen.", "b. Rahw bi carrih.", "c. Zezah raꞌ ba liiꞌn-llahn."], "a", "bwen = well"],
    [333, "Adverbios", "Placement", "Guñiꞌ ba _____ (well).", ["a. bwen", "b. carrih", "c. liiꞌn-llahn"], "a", "bwen = well"],
    [334, "Adverbios", "Questions", "How does he speak?", ["a. ¿Xa rñah guñiꞌ ba?", "b. ¿Xa rñah rahw bi?", "c. ¿Xa rñah zezah raꞌ ba?"], "a", "Xa rñah = How"],
    [335, "Adverbios", "Review", "Guñiꞌ ba _____ (well).", ["a. dxaaba", "b. bwen", "c. carrih"], "b", "bwen = well"],

    [336, "Emociones", "Words", "Biahxi", ["a. Sad", "b. Happy", "c. Angry"], "b", "Biahxi = Happy"],
    [337, "Emociones", "Sentences", "I am happy.", ["a. Biahxi duxaꞌhn.", "b. Nuu biin lastoꞌ bi.", "c. Nuu bidxyihbi stoꞌ ba."], "a", "Biahxi = Happy"],
    [338, "Emociones", "Questions", "How are you feeling?", ["a. ¿Xixnaa nuu stoꞌ lu'h?", "b. ¿Ta biahxi duxa lu'h?", "c. ¿Xixnaa ruꞌn lu'h?"], "a", "sto' = heart/feelings"],
    [339, "Emociones", "Causes", "Biahxi duxaꞌhn _____ (because) bwen.", ["a. laasii", "b. cun", "c. per"], "a", "laasii = because"],
    [340, "Emociones", "Review", "Ba naa _____ (happy).", ["a. biin", "b. biahxi", "c. bidxyihbi"], "b", "biahxi = happy"],

    [341, "Cultura", "Cultural Terms", "Dxiohs", ["a. Prayer", "b. Temple", "c. God"], "c", "Dxiohs = God"],
    [342, "Cultura", "Sentences", "God is good.", ["a. Dxiohs naa bwen.", "b. Xquidoꞌ naa saantu.", "c. Guñiꞌ xaanjla."], "a", "Dxiohs = God, bwen = good"],
    [343, "Cultura", "Questions", "Where is the temple?", ["a. ¿Cannehza nuu xquidoꞌ?", "b. ¿Ta riachiistoꞌ lu'h laꞌh Dxiohs?", "c. ¿Xi naa xaanjla?"], "a", "xquido' = temple"],
    [344, "Cultura", "Vocabulary", "_____ (God) naa zaꞌca.", ["a. Dxiohs", "b. Xaanjla", "c. Xquidoꞌ"], "a", "Dxiohs = God"],
    [345, "Cultura", "Review", "_____ (God) naa zaꞌca.", ["a. Xaanjla", "b. Dxiohs", "c. Xquidoꞌ"], "b", "Dxiohs = God"],

    [346, "Oraciones", "Using Sidela", "If you go, I will go.", ["a. Sidela gwah lu'h, ziaꞌhahn za.", "b. Sidela rahw bi, ziahxi duxa bi.", "c. Sidela guñiꞌ ba, zuchuu raꞌ bwiinn."], "a", "Sidela = If"],
    [347, "Oraciones", "Using O", "I will go or stay.", ["a. Ziaꞌhahn o zibiaꞌhan.", "b. Ziraawuhn bi o zireeꞌ bi.", "c. ¿Ta xclaaꞌdzi lu'h pahn o bwehlda?"], "a", "o = or"],
    [348, "Oraciones", "Complex", "Combine: Gwah ba loh guihdxyi. Xclaaꞌdzi ba gwah.", ["a. Gwah ba loh guihdxyi laasii xclaaꞌdzi ba.", "b. Rahw bi pahn laasii bichiaꞌhan bi.", "c. Guñiꞌn dxyiꞌdxyi laasii xclaaꞌdzihn."], "a", "laasii = because"],
    [349, "Oraciones", "Using Hasta", "I will wait until you come.", ["a. Zicweezaꞌhn hasta chin dxiꞌ lu'h.", "b. Zibiaꞌhan bi hasta guillii.", "c. Zuruꞌnnahn nuꞌh hasta xcagaꞌ."], "a", "hasta = until"],
    [350, "Oraciones", "Review", "Ziaꞌhahn _____ (if) gwah lu'h.", ["a. sidela", "b. per", "c. cun"], "a", "sidela = if"],

    [351, "Ubicación", "Location Words", "Yihca", ["a. On top", "b. Under", "c. Inside"], "a", "Yihca = On top"],
    [352, "Ubicación", "Sentences", "The book is on the table.", ["a. Dxihtsi nuu yihca mweella.", "b. Guhn nuu laꞌn yuuꞌ.", "c. Raꞌ biñiꞌn nuu dihtsi."], "a", "yihca = on top"],
    [353, "Ubicación", "Questions", "Where is the book?", ["a. ¿Cannehza nuu dxihtsi?", "b. ¿Ta guhn nuu laꞌn yuuꞌ?", "c. ¿Ta raꞌ biñiꞌn nuu dihtsi?"], "a", "Cannehza = where"],
    [354, "Ubicación", "Phrases", "Nuu _____ (on) yuuꞌ.", ["a. yihca", "b. laꞌn", "c. dihtsi"], "a", "yihca = on top"],
    [355, "Ubicación", "Review", "Nuu _____ (on) yuuꞌ.", ["a. laꞌn", "b. yihca", "c. dihtsi"], "b", "yihca = on top"],

    [356, "Comparativos", "Forms", "-ru", ["a. Less than", "b. More than", "c. Comparatively"], "c", "-ru = comparatively / more"],
    [357, "Comparativos", "Sentences", "He is greater than me.", ["a. Lasahca ru ba loh naꞌh.", "b. Bwen ru bi loh ba.", "c. Guihdxyi rooꞌ ru loh rraandxu."], "a", "ru = more, loh = than"],
    [358, "Comparativos", "Superlatives", "He is the greatest.", ["a. Ba naa nin lasahca ru.", "b. Bi naa gunnaꞌh saantu ru.", "c. Pahn riiꞌ naa bwen ru."], "a", "nin lasahca ru = the greatest"],
    [359, "Comparativos", "Questions", "Who is greater?", ["a. ¿Chyu naa nin lasahca ru?", "b. ¿Ta bwen ru bi loh ba?", "c. ¿Cuun guihdxyi rooꞌ ru?"], "a", "Chyu = Who"],
    [360, "Comparativos", "Review", "Ba lasahca ru _____ (than) naꞌh.", ["a. cun", "b. loh", "c. per"], "b", "loh = than"],

    [361, "Diálogos", "Basic", "A: ¡Chaan! ¿Xixnaa _____ (are you)?", ["a. nuu lu'h", "b. lu'h", "c. naa"], "a", "nuu lu'h = are you"],
    [362, "Diálogos", "Conversation", "Where are you going?", ["a. ¿Cannehza gwah lu'h?", "b. Gwah naꞌh loh guihdxyi.", "c. ¿Xi zuruꞌnnahn lu'h riꞌchi?"], "a", "Cannehza gwah = Where go"],
    [363, "Diálogos", "Shopping", "¿Xi xclaaꞌdzi lu'h _____ (to buy)?", ["a. siꞌ", "b. pahn", "c. stuhbi"], "a", "si' = buy"],
    [364, "Diálogos", "Travel", "Excuse me, where is the temple?", ["a. Balahsastoꞌ, ¿cannehza nuu xquidoꞌ?", "b. Gwah delaanta, chiꞌchi gwah lahdu derehchu.", "c. ¿Ta zihtu?"], "a", "Balahsasto' = Excuse me"],
    [365, "Diálogos", "Review", "¿Cannehza gwah lu'h?", ["a. Gwah naꞌh loh guihdxyi.", "b. Nuuꞌhuhn bwen.", "c. Zuxchiilli lu'h."], "a", "Gwah = I go"],

    [366, "Expresión", "About Yourself", "¿Cómo dices 'Mi nombre es...'?", ["a. Naꞌh naan...", "b. Nuuꞌhuhn...", "c. Zeꞌ naꞌh..."], "a", "Na'h naan = My name is"],
    [367, "Expresión", "About Family", "¿Cómo dices 'Tengo una familia'?", ["a. Nuuꞌhuhn xfamihyihn.", "b. Xtaadaꞌhn laa...", "c. Biahxi duxa nuꞌh."], "a", "Nuu'huhn = I have/am with"],
    [368, "Expresión", "About Your Day", "¿Cómo dices 'Todos los días'?", ["a. Gaduhbi dxyih", "b. Rsiiyido'", "c. Xcaga'"], "a", "Gaduhbi dxyih = Every day"],
    [369, "Expresión", "About School", "¿Cómo dices 'Mi escuela'?", ["a. Xcuwehlaꞌhn", "b. Xquido'", "c. Yuu'"], "a", "Xcuwehla'hn = My school"],
    [370, "Expresión", "Review", "¿Cómo dices 'La ciudad es grande'?", ["a. Guihdxyi naa rooꞌ.", "b. Dahan naa roo'.", "c. Gui'w naa roo'."], "a", "Guihdxyi = City"],

    [371, "Lectura", "Basic Text", "¿Cannehza gwah Jesuhs?", ["a. Gwah ba loh guihdxyi Galilea.", "b. Baluuꞌyi ba xchiꞌdxyi Dxiohs.", "c. Basiaca ba laꞌh raꞌ bwiinn."], "a", "Galilea"],
    [372, "Lectura", "Family Text", "¿Chyu naa ndxiꞌhw?", ["a. Joseh.", "b. María.", "c. Jesuhs."], "a", "Joseh es el hombre en la historia."],
    [373, "Lectura", "City Text", "¿Xa naa guihdxyi Jerusalehn?", ["a. Rooꞌ.", "b. Xquidoꞌ.", "c. Ziahan."], "a", "Roo' = Grande"],
    [374, "Lectura", "Food Text", "¿Xi rahw raꞌ bwiinn?", ["a. Pahn cun bwehlda.", "b. Ñihsa cun vihnnu.", "c. Bwen duxa."], "a", "Pahn = pan, bwehlda = pez"],
    [375, "Lectura", "Review", "¿Paaldaa bwiinn nuu?", ["a. Ziahan duxa.", "b. Pahn.", "c. Jesuhs."], "a", "Ziahan = muchos"],

    [376, "Escucha", "Sound to Meaning", "Gwah", ["a. Good", "b. Go", "c. Speak"], "b", "Gwah = Go"],
    [377, "Escucha", "Minimal Pairs", "____ (to go)", ["a. Gwah", "b. Guhca", "c. Guñi'"], "a", "Gwah = Go"],
    [378, "Escucha", "Common Phrases", "Zuxchiilli lu'h", ["a. Thank you", "b. Goodbye", "c. Hello"], "a", "Zuxchiilli lu'h = Thank you"],
    [379, "Escucha", "Questions", "¿Chyu naa lu'h?", ["a. Who", "b. Where", "c. When"], "a", "Chyu = Who"],
    [380, "Escucha", "Review", "What", ["a. Xi", "b. Chyu", "c. Cuuca"], "a", "Xi = What"],

    [381, "Conversación", "Greeting", "¡Chaan! _____ (How are you?)", ["a. ¿Xixnaa nuu lu'h?", "b. Nuuꞌhuhn bwen.", "c. ¿Chyu naa lu'h?"], "a", "Xixnaa = How"],
    [382, "Conversación", "Introduction", "Zeꞌ naꞌh nez _____ (from).", ["a. Oaxaca", "b. Naan", "c. Estudiante"], "a", "nez = from/direction"],
    [383, "Conversación", "Questions", "¿Chyu naa lu'h?", ["a. What is your name?", "b. Where are you from?", "c. What do you do?"], "a", "Chyu = Who/Name"],
    [384, "Conversación", "Response", "¿Cannehza zeꞌ lu'h? →", ["a. Zeꞌ naꞌh nez Oaxaca.", "b. Naꞌh naan Joseh.", "c. Gusiꞌdxihn."], "a", "Ze' na'h nez = I am from"],
    [385, "Conversación", "Review", "¿Xixnaa nuu lu'h?", ["a. Nuuꞌhuhn bwen.", "b. Naꞌh naan María.", "c. Bwen duxa."], "a", "Nuu'huhn bwen = I am fine"],

    [386, "Vocabulario", "People", "Ndxiꞌhw", ["a. Woman", "b. Man", "c. Child"], "b", "Ndxi'hw = Man"],
    [387, "Vocabulario", "Places", "Guihdxyi", ["a. Temple", "b. House", "c. City"], "c", "Guihdxyi = City"],
    [388, "Vocabulario", "Actions", "Gwah", ["a. To eat", "b. To speak", "c. To go"], "c", "Gwah = Go"],
    [389, "Vocabulario", "Common Words", "Bwen", ["a. Good", "b. Bad", "c. Holy"], "a", "Bwen = Good"],
    [390, "Vocabulario", "Review", "_____ (Man) naa bwen.", ["a. Gunnaꞌh", "b. Ndxiꞌhw", "c. Biñiꞌn"], "b", "Ndxi'hw = Man"],

    [391, "Gramática", "Tenses", "Gwah ba loh guihdxyi. (Tense?)", ["a. Present", "b. Past", "c. Future"], "a", "Gwah = present"],
    [392, "Gramática", "Agreement", "_____ (He) naa bwen.", ["a. Ba", "b. Bi", "c. Nuꞌh"], "a", "Ba = He"],
    [393, "Gramática", "Negation", "Gwah ba. → Negative:", ["a. Ayi gwah ba.", "b. Gwah ayi ba.", "c. Ba ayi gwah."], "a", "Ayi goes before the verb"],
    [394, "Gramática", "Questions", "Gwah ba loh guihdxyi. → Question:", ["a. ¿Cannehza gwah ba?", "b. ¿Xi rahw bi?", "c. ¿Chyu naa lu'h?"], "a", "Cannehza = where"],
    [395, "Gramática", "Review", "Choose correct:", ["a. Ba gwah loh guihdxyi.", "b. Gwah ba guihdxyi loh.", "c. Both"], "a", "Subject can go before verb or after depending on context, 'Ba gwah' is fine."],

    [396, "Práctica Final", "Mixed", "I am going to the city tomorrow.", ["a. Ziaꞌhahn loh guihdxyi guillii.", "b. Rahw bi pahn.", "c. Guñiꞌ raꞌ ba."], "a", "Zia'hahn = I will go"],
    [397, "Práctica Final", "Translation", "Dxiohs naa zaꞌca.", ["a. God is great/good.", "b. He goes to the temple.", "c. So be it."], "a", "za'ca = good/great"],
    [398, "Práctica Final", "Dialogue", "¿Xixnaa _____ (are you)?", ["a. nuu lu'h", "b. Ta", "c. gwah"], "a", "nuu lu'h = are you"],
    [399, "Práctica Final", "Composition", "¿Cómo dices 'Todos los días'?", ["a. Gaduhbi dxyih", "b. Rsiiyido'", "c. Xcaga'"], "a", "Gaduhbi dxyih = Every day"],
    [400, "Práctica Final", "Final", "¿Chyu naa lu'h?", ["a. Naꞌh naan Jwahn.", "b. Zeꞌ naꞌh nez Oaxaca.", "c. Nuuꞌhuhn loh guihdxyi."], "a", "Chyu = Who/Name"]
];

// Procesamiento de datos y activación
EXERCISES_A2_RAW.forEach(d => exercises.push(ex(d[0], d[1], d[2], d[3], d[4], d[5], d[6])));
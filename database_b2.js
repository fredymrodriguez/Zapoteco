// ==========================================
// 1. ESTRUCTURA DE LA BASE DE DATOS B2
// ==========================================
if (typeof UNITS_META === 'undefined') window.UNITS_META = [];
if (typeof EXERCISES_DATA === 'undefined') window.EXERCISES_DATA = [];

// ==========================================
// 2. MOTOR ADAPTADOR
// ==========================================
const exercises = {
    push: function(obj) {
        EXERCISES_DATA.push(obj);
    }
};

function ex(idGlobal, unitName, title, question, opts, correctLabel, feedback) {
    const unitId = Math.ceil(idGlobal / 5);
    
    // Asignación de nivel basada en la estructura: A1(1-40), A2(41-80), B1(81-120), B2(121-160)
    let levelAssigned = "B2"; 

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
// 3. TUS EJERCICIOS (NIVEL B2: 601 - 800)
// ==========================================
const EXERCISES_B2_RAW = [
    // 1-10: Greetings
    [601, "Saludos", "Basic Greetings", "Match the greeting: Chaan", ["a. Goodbye", "b. Hello/Hi", "c. Thank you"], "b", "Chaan = Hello/Hi"],
    [602, "Saludos", "Basic Greetings", "Fill in the blank: _____ (Thank you)", ["a. Chaan", "b. Zuxchiilli lu'h", "c. Bwa'ha"], "b", "Zuxchiilli lu'h = Thank you"],
    [603, "Saludos", "Basic Greetings", "'Guldxiahxi' means:", ["a. Goodbye", "b. Rejoice/Be happy", "c. Please"], "b", "Guldxiahxi = Rejoice/Be happy"],
    [604, "Saludos", "Basic Greetings", "Translate: Hello, my friend", ["a. Chaan, xamihgu ra'n", "b. Bwa'ha, xamihgu", "c. Zuxchiilli lu'h"], "a", "Chaan = Hello, xamihgu = friend"],
    [605, "Saludos", "Basic Greetings", "'Bwa'ha' is used for both hello and goodbye.", ["a. True", "b. False", "c. Not sure"], "b", "False. Chaan is hello, Bwa'ha is goodbye."],
    [606, "Saludos", "Basic Greetings", "Match the term: Xpaah", ["a. Father", "b. Mother", "c. Brother"], "a", "Xpaah = Father"],
    [607, "Saludos", "Basic Greetings", "Fill in the blank: Chaan, _____ (Hello, my mother)", ["a. bwen", "b. bwa'ha", "c. xnaan"], "c", "xnaan = my mother"],
    [608, "Saludos", "Basic Greetings", "Translate: Goodbye, my friend", ["a. Babii, xamihgu ra'n", "b. Chaan, xamihgu", "c. Zuxchiilli"], "a", "Babii = Goodbye"],
    [609, "Saludos", "Basic Greetings", "'Bwihtsi' means:", ["a. Sister", "b. Brother", "c. Child"], "b", "Bwihtsi = Brother"],
    [610, "Saludos", "Basic Greetings", "Translate: Hello, how are you?", ["a. Chaan, ¿xinaa nabahan lu'h?", "b. Bwa'ha, ¿cuca ze' lu'h?", "c. ¿Chyu laa lu'h?"], "a", "Chaan = Hello, xinaa nabahan lu'h = how are you"],

    // 11-20: Family
    [611, "Familia", "Family & Relationships", "Match: Xmaah", ["a. Uncle", "b. Father", "c. Mother"], "c", "Xmaah = Mother"],
    [612, "Familia", "Family & Relationships", "Translate: My father is kind.", ["a. Xpaa'hn naa bwiinn za'ca.", "b. Xmaah ba naa bwen.", "c. Llii'n naa roo'."], "a", "Xpaa'hn = My father"],
    [613, "Familia", "Family & Relationships", "Fill in: María naa _____ (mother) Jwahn", ["a. xpaah", "b. xmaah", "c. llii'n"], "b", "xmaah = mother"],
    [614, "Familia", "Family & Relationships", "'Che'hla' means:", ["a. Friend", "b. Spouse/Partner", "c. Brother"], "b", "Che'hla = Spouse/Partner"],
    [615, "Familia", "Family & Relationships", "Translate: My brother is here", ["a. Bwihtsi na'a'n la'aaa", "b. Xmaah ba ze'nez", "c. Llii'n naa rii'"], "a", "Bwihtsi = Brother"],
    [616, "Familia", "Family & Relationships", "Match possessive: Xi'hyira'n", ["a. His/her", "b. Mine", "c. Yours"], "a", "Xi'hyira'n = His/her"],
    [617, "Familia", "Family & Relationships", "Fill in: Bwihtsi _____ (my brother)", ["a. ra'n", "b. lu'h", "c. ba"], "a", "ra'n = my"],
    [618, "Familia", "Family & Relationships", "Translate: Her mother is from here.", ["a. Xmaah ba ze'nez rii'.", "b. Xpaah ba ze'nez.", "c. Bwihtsi ba rii'."], "a", "Xmaah ba = Her mother"],
    [619, "Familia", "Family & Relationships", "'Daada' means 'child'.", ["a. True", "b. False", "c. Not sure"], "b", "False. Daada = father/teacher"],
    [620, "Familia", "Family & Relationships", "If Pedro says 'bwihtsi ra'n' about Juan, what is their relationship?", ["a. Brothers", "b. Friends", "c. Father/Son"], "a", "Bwihtsi = Brother"],

    // 21-30: Numbers
    [621, "Números", "Numbers & Counting", "Write the number: 1", ["a. Tuhbi", "b. Chiohpa", "c. Chohnna"], "a", "Tuhbi = 1"],
    [622, "Números", "Numbers & Counting", "Match: Chiohpa", ["a. 2", "b. 3", "c. 4"], "a", "Chiohpa = 2"],
    [623, "Números", "Numbers & Counting", "Fill in: _____ bwiinn (three people)", ["a. Chiohpa", "b. Chohnna", "c. Tahpa"], "b", "Chohnna = 3"],
    [624, "Números", "Numbers & Counting", "Translate: seven days", ["a. gahdzi dxyih", "b. xo'pa dxyih", "c. tsi'ñu dxyih"], "a", "gahdzi = 7"],
    [625, "Números", "Numbers & Counting", "'Tsi'h bichiohpa' means:", ["a. Twelve", "b. Twenty", "c. Seven"], "a", "Tsi'h = 10, bichiohpa = 2 -> 12"],
    [626, "Números", "Numbers & Counting", "Write the number: 50", ["a. Galda bitsi'h", "b. Tsi'ñu", "c. Chiohpa"], "a", "Galda bitsi'h = 50"],
    [627, "Números", "Numbers & Counting", "Fill in: _____ mihyi ra' ba (one thousand)", ["a. tuhbi mihyi", "b. chiohpa mihyi", "c. ga'yu mihyi"], "a", "tuhbi mihyi = 1000"],
    [628, "Números", "Numbers & Counting", "Translate: Seven brothers", ["a. Gahdzi bwihtsi", "b. Tuhbi bwihtsi", "c. Xo'pa bwihtsi"], "a", "Gahdzi = Seven"],
    [629, "Números", "Numbers & Counting", "Match: Mweer", ["a. First", "b. Second", "c. Last"], "a", "Mweer = First"],
    [630, "Números", "Numbers & Counting", "Order 1 to 3", ["a. Mweer, Raroopa, Riohnna", "b. Raroopa, Mweer, Riohnna", "c. Riohnna, Raroopa, Mweer"], "a", "Mweer=1, Raroopa=2, Riohnna=3"],

    // 31-40: Introductions
    [631, "Introducciones", "Basic Conversation", "Complete: Na'h naan _____ (I am...)", ["a. [Name]", "b. bwen", "c. riahxi"], "a", "Na'h naan = I am [name]"],
    [632, "Introducciones", "Basic Conversation", "Translate: What is your name?", ["a. ¿Chyu laa lu'h?", "b. ¿Xinaa nuu lu'h?", "c. ¿Cannehza ze' lu'h?"], "a", "Chyu laa lu'h = What is your name"],
    [633, "Introducciones", "Basic Conversation", "Response to ¿Chyu laa lu'h?", ["a. Biahxi", "b. Na'h naan Pedro", "c. Zuxchiilli"], "b", "Na'h naan = I am"],
    [634, "Introducciones", "Basic Conversation", "Fill in: Na'h naan tuhbi bwiinn _____ (from here)", ["a. nez rii'", "b. nez zihtu", "c. guihdxyi"], "a", "nez rii' = from here"],
    [635, "Introducciones", "Basic Conversation", "Translate: ¿Canehza ze' lu'h?", ["a. Where are you from?", "b. What is your name?", "c. How are you?"], "a", "Canehza ze' lu'h = Where are you from"],
    [636, "Introducciones", "Basic Conversation", "Write response: Na'h naan bwiinn _____ (Mexico)", ["a. Mexico", "b. Bwen", "c. Yuu'"], "a", "bwiinn Mexico = person from Mexico"],
    [637, "Introducciones", "Basic Conversation", "Match: ¿Chyu laa lu'h?", ["a. Na'h naan Juan", "b. Nez Oaxaca", "c. Bwen duxa"], "a", "Chyu laa = Name"],
    [638, "Introducciones", "Basic Conversation", "Translate: Nice to meet you.", ["a. Bwen gahca bwa'han loh lu'h.", "b. Zuxchiilli duxa.", "c. Chaan xamihgu."], "a", "Bwen gahca bwa'han = Nice to meet you"],
    [639, "Introducciones", "Basic Conversation", "Fill in: _____ nin naa xamihgu na'a'n (This is my friend)", ["a. Dee'", "b. Ri'ca", "c. Ba"], "a", "Dee' = This is"],
    [640, "Introducciones", "Basic Conversation", "Write a 3-sentence intro", ["a. Na'h naan... Ze' nez...", "b. Bwen duxa", "c. Ayi nuu ba rii'"], "a", "Na'h naan = I am... Ze' nez = I am from..."],

    // 41-50: Questions
    [641, "Preguntas", "Basic Questions", "Translate: What is this?", ["a. ¿Xi ni'ca dee'?", "b. ¿Chyu naa ba?", "c. ¿Cuuca ze'?"], "a", "Xi = What, dee' = this"],
    [642, "Preguntas", "Basic Questions", "Match: Chyu", ["a. Who", "b. What", "c. Where"], "a", "Chyu = Who"],
    [643, "Preguntas", "Basic Questions", "Fill in: _____ ni'ca? (Who is this?)", ["a. Chyu", "b. Xi", "c. Cuuca"], "a", "Chyu = Who"],
    [644, "Preguntas", "Basic Questions", "To ask 'How are you?', you say:", ["a. ¿Xinaa nabahan lu'h?", "b. ¿Canehza ze' lu'h?", "c. ¿Chyu laa lu'h?"], "a", "Xinaa nabahan = How are you"],
    [645, "Preguntas", "Basic Questions", "Translate: ¿Xi ni'ca xclaa'dzi lu'h guunn?", ["a. What do you want to do?", "b. Where do you want to go?", "c. Who are you?"], "a", "Xi = What, xclaa'dzi = want, guunn = do"],
    [646, "Preguntas", "Basic Questions", "Ask: Where is the house?", ["a. ¿Canehza nuu yuu'?", "b. ¿Chyu nuu yuu'?", "c. ¿Xi naa yuu'?"], "a", "Canehza = Where, yuu' = house"],
    [647, "Preguntas", "Basic Questions", "Match answer to ¿Xi ni'ca?", ["a. Naa tuhbi yuu'", "b. Na'h naan Pedro", "c. Nez Oaxaca"], "a", "Xi ni'ca asks what something is"],
    [648, "Preguntas", "Basic Questions", "Fill in: ¿_____ guhca? (How did it happen?)", ["a. Xinaa", "b. Chyu", "c. Cuuca"], "a", "Xinaa = How"],
    [649, "Preguntas", "Basic Questions", "Translate: Why are you here?", ["a. ¿Xixnaa ze' lu'h rii'?", "b. ¿Canehza ze' lu'h?", "c. ¿Chyu naa lu'h rii'?"], "a", "Xixnaa = Why"],
    [650, "Preguntas", "Basic Questions", "Match: Canehza", ["a. Where", "b. When", "c. What"], "a", "Canehza = Where"],

    // 51-60: Verbs (Present)
    [651, "Verbos", "Present Tense", "Match: Guunn", ["a. To do", "b. To go", "c. To eat"], "a", "Guunn = To do"],
    [652, "Verbos", "Present Tense", "Fill in: Na'h _____ pahn (I eat bread)", ["a. gahw", "b. gwah", "c. guunn"], "a", "gahw = eat"],
    [653, "Verbos", "Present Tense", "Translate: La'h ba guunn xtsi'n ba", ["a. He/She does his/her work", "b. He goes to work", "c. She eats bread"], "a", "guunn = does, xtsi'n = work"],
    [654, "Verbos", "Present Tense", "'Guee' means:", ["a. To eat", "b. To drink", "c. To sleep"], "b", "Guee = To drink"],
    [655, "Verbos", "Present Tense", "Fill in: _____ ñihsa (to drink water)", ["a. Guee", "b. Gahw", "c. Gwah"], "a", "Guee = drink"],
    [656, "Verbos", "Present Tense", "Translate: Where are you going?", ["a. ¿Canehza guzee lu'h?", "b. ¿Xi guunn lu'h?", "c. ¿Chyu laa lu'h?"], "a", "guzee = going"],
    [657, "Verbos", "Present Tense", "Match: I go", ["a. Na'h guzee", "b. Lu'h guzee", "c. Ba guzee"], "a", "Na'h = I"],
    [658, "Verbos", "Present Tense", "Fill in: La'h tu _____ (We go)", ["a. guzee", "b. gahw", "c. guee"], "a", "guzee = go"],
    [659, "Verbos", "Present Tense", "Translate: Gudahw ra' ba", ["a. They ate", "b. They went", "c. They drank"], "a", "gudahw = ate"],
    [660, "Verbos", "Present Tense", "Use 'gahw' in a sentence", ["a. Na'h gahw pahn", "b. Na'h gwah pahn", "c. Na'h guunn pahn"], "a", "gahw = eat"],

    // 61-70: Action Verbs
    [661, "Acciones", "Action Verbs", "Match: Cagaluu'yi", ["a. To speak", "b. To read", "c. To write"], "a", "Cagaluu'yi = To speak/teach"],
    [662, "Acciones", "Action Verbs", "Fill in: Na'h _____ xchi'dxyi (I speak the word)", ["a. cagaluu'yi", "b. rusi'dxi", "c. baca'h"], "a", "cagaluu'yi = speak"],
    [663, "Acciones", "Action Verbs", "Translate: Read the book.", ["a. Gusi'dxi loh chihbru.", "b. Baca'h loh dxihtsi.", "c. Cagaluu'yi xchi'dxyi."], "a", "Gusi'dxi = Read"],
    [664, "Acciones", "Action Verbs", "'Rusi'dxi' means:", ["a. To speak", "b. To read", "c. To write"], "b", "Rusi'dxi = To read"],
    [665, "Acciones", "Action Verbs", "Match: Baca'h", ["a. To write", "b. To speak", "c. To read"], "a", "Baca'h = To write"],
    [666, "Acciones", "Action Verbs", "Fill in: _____ loh dxihtsi (Write on the paper)", ["a. Baca'h", "b. Rusi'dxi", "c. Cagaluu'yi"], "a", "Baca'h = Write"],
    [667, "Acciones", "Action Verbs", "Translate: Cagaluu'yi la'h ra' ba xchi'dxyi", ["a. They speak the language", "b. They read the book", "c. They write the letter"], "a", "cagaluu'yi = speak/teach"],
    [668, "Acciones", "Action Verbs", "Form a sentence with baca'h", ["a. Na'h baca'hn", "b. Na'h gwah", "c. Na'h rahw"], "a", "baca'hn = I write"],
    [669, "Acciones", "Action Verbs", "'I am speaking' in Zapotec:", ["a. Na'h baca'hn", "b. Na'h cagaluu'yi'hn", "c. Na'h rusi'dxihn"], "b", "cagaluu'yi'hn = I am speaking"],
    [670, "Acciones", "Action Verbs", "Fill in: _____ loh tu (I write to you)", ["a. Baca'hn", "b. Rusi'dxihn", "c. Cagaluu'yihn"], "a", "Baca'hn = I write"],

    // 71-80: Past & Future
    [671, "Tiempos", "Past & Future", "Match: Baca'hn", ["a. I wrote", "b. Did", "c. Made/Did"], "a", "Baca'hn = I wrote (past)"],
    [672, "Tiempos", "Past & Future", "Fill in: _____ ba (He/she did)", ["a. Bwi'hnn", "b. Baca'hn", "c. Gucah"], "a", "Bwi'hnn = Did/Made"],
    [673, "Tiempos", "Past & Future", "Translate: Yesterday I went.", ["a. Nna'yi guyaa'hn.", "b. Guillii guzaa'hn.", "c. Nnah guzaa'hn."], "a", "Nna'yi = yesterday, guyaa'hn = I went"],
    [674, "Tiempos", "Past & Future", "'Guzohbaloh' means:", ["a. Began", "b. Finished", "c. Continued"], "a", "Guzohbaloh = Began"],
    [675, "Tiempos", "Past & Future", "Match: Nnah", ["a. Now", "b. Before", "c. Yesterday"], "a", "Nnah = Now"],
    [676, "Tiempos", "Past & Future", "Fill in: _____ guyaa'hn (I went before)", ["a. Galoh", "b. Nnah", "c. Despwes"], "a", "Galoh = Before"],
    [677, "Tiempos", "Past & Future", "Translate: Nnah guzaa'hn", ["a. Now I go", "b. Yesterday I went", "c. Tomorrow I will go"], "a", "Nnah = Now, guzaa'hn = I go"],
    [678, "Tiempos", "Past & Future", "I will go tomorrow:", ["a. Guillii guzaa'hn", "b. Nna'yi guyaa'hn", "c. Galoh guzaa'hn"], "a", "Guillii = tomorrow, guzaa'hn = I will go"],
    [679, "Tiempos", "Past & Future", "'Despwes gahca' means:", ["a. After it was", "b. Before it was", "c. Now it is"], "a", "Despwes = After"],
    [680, "Tiempos", "Past & Future", "Match: Nna'yi", ["a. Yesterday", "b. Tomorrow", "c. Now"], "a", "Nna'yi = Yesterday"],

    // 81-90: Negation & Questions
    [681, "Negación", "Neg/Quest B2", "Fill in: Na'h _____ nuu gahw (I do not eat)", ["a. ayi", "b. aaca", "c. coh"], "a", "Ayi negates verbs"],
    [682, "Negación", "Neg/Quest B2", "Match: Aaca", ["a. No (disagreement)", "b. No/Not", "c. Yes"], "a", "Aaca is a strong disagreement 'no'"],
    [683, "Negación", "Neg/Quest B2", "Translate: He is not here.", ["a. Ayi nuu ba rii'.", "b. Aaca nuu ba rii'.", "c. Ayi gwah ba rii'."], "a", "Ayi nuu = Not here"],
    [684, "Negación", "Neg/Quest B2", "_____ chyu = There is none", ["a. Ayi", "b. Aaca", "c. Nican"], "a", "Ayi chyu = There is no one/none"],
    [685, "Negación", "Neg/Quest B2", "Form negative: Na'h ayi _____ (I do not speak)", ["a. cagaluu'yi'hn", "b. gwah", "c. rahw"], "a", "cagaluu'yi'hn = I speak"],
    [686, "Negación", "Neg/Quest B2", "Translate: Ayi gwachiisto' ra' ba", ["a. They did not believe", "b. They did not go", "c. They did not eat"], "a", "gwachiisto' = believe"],
    [687, "Preguntas", "Neg/Quest B2", "Match: ¿Ta?", ["a. Is it? / Does it?", "b. Question marker", "c. Where?"], "a", "Ta is a yes/no question marker"],
    [688, "Preguntas", "Neg/Quest B2", "Fill in: ¿_____ guchii? (Is it true?)", ["a. Ta", "b. Gu", "c. Xi"], "a", "Ta guchii = Is it true"],
    [689, "Preguntas", "Neg/Quest B2", "Translate: Don't you speak?", ["a. ¿Ayi cagaluu'yi lu'h?", "b. ¿Ayi gwah lu'h?", "c. ¿Ayi rahw lu'h?"], "a", "cagaluu'yi = speak"],
    [690, "Preguntas", "Neg/Quest B2", "Match: ¿Gu?", ["a. Question marker", "b. Where", "c. Who"], "a", "Gu = general question marker"],

    // 91-100: Prepositions & Locations
    [691, "Preposiciones", "Locations B2", "Match: Lahda", ["a. Next to", "b. Between", "c. Behind"], "a", "Lahda = Next to"],
    [692, "Preposiciones", "Locations B2", "Fill in: Zohba _____ yuu' (Inside the house)", ["a. la'nan", "b. dihtsi", "c. xihyi"], "a", "la'nan = inside"],
    [693, "Preposiciones", "Locations B2", "Translate: The book is on the table.", ["a. Chihbru zohba yihca mweella.", "b. Chihbru zohba la'nan mweella.", "c. Chihbru zohba dihtsi mweella."], "a", "yihca = on top"],
    [694, "Preposiciones", "Locations B2", "'Rwaa'' means:", ["a. At/On/Edge", "b. Under", "c. Behind"], "a", "Rwaa' = At/On the edge"],
    [695, "Preposiciones", "Locations B2", "Match: Nez loh", ["a. To/toward", "b. Near", "c. Far"], "a", "Nez loh = To/toward"],
    [696, "Preposiciones", "Locations B2", "Fill in: Gwah ba _____ guihdxyi (He goes to the city)", ["a. nez loh", "b. gahxu", "c. dihtsi"], "a", "nez loh = to/toward"],
    [697, "Preposiciones", "Locations B2", "Translate: Zohba ri'chi nuu yuu'", ["a. There is a house here/there", "b. The house is big", "c. I go to the house"], "a", "Zohba ri'chi = located there"],
    [698, "Preposiciones", "Locations B2", "The book is next to the table", ["a. Chihbru zohba lahda mweella.", "b. Chihbru zohba yihca mweella.", "c. Chihbru zohba dihtsi mweella."], "a", "lahda = next to"],
    [699, "Preposiciones", "Locations B2", "'Zohba galaayi' means 'under'.", ["a. False", "b. True", "c. Not sure"], "a", "False. Galaayi means between/middle."],
    [700, "Preposiciones", "Locations B2", "Match: Xihyi", ["a. Behind/outside", "b. In front", "c. Inside"], "a", "Xihyi = Behind/Outside"],

    // 101-110: Colors & Physical Descriptions
    [701, "Descripciones", "Colors B2", "Match: Labweh", ["a. White", "b. Red", "c. Black"], "a", "Labweh = White"],
    [702, "Descripciones", "Colors B2", "Fill in: Lahdxi _____ (White clothing)", ["a. labweh", "b. naxñaa", "c. nagaasa"], "a", "labweh = white"],
    [703, "Descripciones", "Colors B2", "Translate: The black dog", ["a. Xquii' nagaasa", "b. Xquii' labweh", "c. Xquii' guhtsi"], "a", "nagaasa = black. Xquii'/Bwehcu = dog"],
    [704, "Descripciones", "Colors B2", "'Naxñaa' means:", ["a. Red", "b. White", "c. Blue"], "a", "Naxñaa = Red"],
    [705, "Descripciones", "Physical", "Ba naa tuhbi bwiinn _____ (He is a tall man)", ["a. roo'", "b. bi'tu'hn", "c. nadaa"], "a", "roo' = tall/big"],
    [706, "Descripciones", "Physical", "Match: Nadaa", ["a. Medium", "b. Big", "c. Small"], "a", "Nadaa = Medium"],
    [707, "Descripciones", "Physical", "Yuu' roo' means:", ["a. Big house", "b. Small house", "c. White house"], "a", "Yuu' = house, roo' = big"],
    [708, "Descripciones", "Physical", "Translate: Bwiinn bi'tu'hn", ["a. Small person", "b. Big person", "c. Good person"], "a", "bi'tu'hn = small"],
    [709, "Descripciones", "Physical", "Tihxi labweh means:", ["a. White body", "b. Black body", "c. Red body"], "a", "labweh = white"],
    [710, "Descripciones", "Colors Review", "Name 5 objects with colors", ["a. Yuu' labweh, etc.", "b. Bwen duxa", "c. Ayi gwah"], "a", "Yuu' labweh = White house"],

    // 111-120: Feelings
    [711, "Emociones", "Feelings B2", "Match: Riahxi", ["a. Happy", "b. Sad", "c. Angry"], "a", "Riahxi = Happy"],
    [712, "Emociones", "Feelings B2", "Fill in: Na'h _____ duxa (I am very happy)", ["a. riahxi", "b. ru'n", "c. nalaasa"], "a", "riahxi = happy"],
    [713, "Emociones", "Feelings B2", "Translate: She is sad.", ["a. Ba ru'n.", "b. Ba riahxi.", "c. Ba dxyihbi."], "a", "ru'n = sad/crying"],
    [714, "Emociones", "Feelings B2", "'Guelnalaasa' means:", ["a. Anger/Sadness", "b. Happiness", "c. Fear"], "a", "Guelnalaasa = Sadness/Anger"],
    [715, "Emociones", "Feelings B2", "Match: Dxyihbi", ["a. Afraid", "b. Happy", "c. Finished"], "a", "Dxyihbi = Afraid"],
    [716, "Emociones", "Feelings B2", "Fill in: _____ duxa sto' ba (He is very angry)", ["a. Nalaasa", "b. Riahxi", "c. Bati'dxi"], "a", "Nalaasa = angry/sad"],
    [717, "Emociones", "Feelings B2", "Translate: Biahxi duxa ba", ["a. He is very happy", "b. He is very sad", "c. He is very afraid"], "a", "Biahxi = happy"],
    [718, "Emociones", "Feelings B2", "Na'h riahxi'hn means:", ["a. I am happy", "b. I am sad", "c. I am angry"], "a", "riahxi'hn = I am happy"],
    [719, "Emociones", "Feelings B2", "'Dxyihbi' means 'happy'.", ["a. False", "b. True", "c. Not sure"], "a", "False. Dxyihbi = afraid."],
    [720, "Emociones", "Feelings B2", "Write 3 sentences about feelings.", ["a. Na'h riahxi'hn", "b. Gwah ba", "c. Ayi nuu"], "a", "Na'h riahxi'hn = I am happy"],

    // 121-130: Time Expressions
    [721, "Tiempo", "Time B2", "Match: Guillii", ["a. Tomorrow", "b. Yesterday", "c. Now"], "a", "Guillii = Tomorrow"],
    [722, "Tiempo", "Time B2", "Fill in: _____ guyaa'hn (I went yesterday)", ["a. Nna'yi", "b. Guillii", "c. Nnah"], "a", "Nna'yi = Yesterday"],
    [723, "Tiempo", "Time B2", "Translate: See you tomorrow.", ["a. Chi'chiyi guillii.", "b. Chi'chiyi nna'yi.", "c. Chi'chiyi nnah."], "a", "Chi'chiyi = See you later, guillii = tomorrow"],
    [724, "Tiempo", "Time B2", "'Nnah' means:", ["a. Now", "b. Yesterday", "c. Tomorrow"], "a", "Nnah = Now"],
    [725, "Tiempo", "Time B2", "Match: Garaa dxyih", ["a. Every day", "b. Today", "c. Tomorrow"], "a", "Garaa = every, dxyih = day"],
    [726, "Tiempo", "Time B2", "Fill in: _____ gwa'han (See you later)", ["a. Chi'chiyi", "b. Nna'yi", "c. Guillii"], "a", "Chi'chiyi = See you later"],
    [727, "Tiempo", "Time B2", "Translate: Garaa dxyih guzaa'hn", ["a. I go every day", "b. I went yesterday", "c. I will go tomorrow"], "a", "Garaa dxyih = Every day, guzaa'hn = I go"],
    [728, "Tiempo", "Time B2", "Tomorrow I will eat:", ["a. Guillii gahw za'hn", "b. Nna'yi gudahw'hn", "c. Nnah gahw'hn"], "a", "Guillii = Tomorrow, gahw = eat"],
    [729, "Tiempo", "Time B2", "'Nna'yi' is:", ["a. Yesterday", "b. Today", "c. Tomorrow"], "a", "Nna'yi = Yesterday"],
    [730, "Tiempo", "Time B2", "Match: Dxyih gahca", ["a. Today", "b. Every day", "c. Tomorrow"], "a", "Dxyih gahca = Today"],

    // 131-140: Commands
    [731, "Imperativos", "Commands B2", "Match: Gudaa'!", ["a. Come!", "b. Go!", "c. Stop!"], "a", "Gudaa' = Come"],
    [732, "Imperativos", "Commands B2", "Fill in: _____ rii'! (Come here!)", ["a. Gudaa'", "b. Gwah", "c. Bwaa"], "a", "Gudaa' = Come"],
    [733, "Imperativos", "Commands B2", "Translate: Please sit down.", ["a. Gulsohba chihpa.", "b. Gulgahw.", "c. Gudaa'."], "a", "Gulsohba = Sit down"],
    [734, "Imperativos", "Commands B2", "'Gulgahw' means:", ["a. Eat!", "b. Sleep!", "c. Drink!"], "a", "Gulgahw = Eat (plural)"],
    [735, "Imperativos", "Commands B2", "Match: Gulgadi'hi", ["a. Please give", "b. Please look", "c. Please go"], "a", "Gulgadi'hi = Please give"],
    [736, "Imperativos", "Commands B2", "Fill in: _____ loon (Look at me)", ["a. Gulguia'ha", "b. Gulgadi'hi", "c. Gulgahw"], "a", "Gulguia'ha = Look"],
    [737, "Imperativos", "Commands B2", "Translate: Gudaa' tin bwa'ha", ["a. Come and see", "b. Go and eat", "c. Stop and listen"], "a", "Gudaa' = Come, bwa'ha = see"],
    [738, "Imperativos", "Commands B2", "Please help me:", ["a. Gulgahcanee na'h", "b. Gulguia'ha na'h", "c. Gulgadi'hi na'h"], "a", "Gulgahcanee = Please help"],
    [739, "Imperativos", "Commands B2", "'Gwah' is a polite form of 'go'.", ["a. False", "b. True", "c. Not sure"], "a", "False. Gwah is a direct command."],
    [740, "Imperativos", "Commands B2", "Match: Bwaa!", ["a. Stop/Wait!", "b. Go!", "c. Come!"], "a", "Bwaa = Stop/Wait"],

    // 141-150: Comparisons
    [741, "Comparativos", "Comps B2", "Match: Gulliaa'", ["a. Less", "b. More", "c. Better"], "a", "Gulliaa' = Less"],
    [742, "Comparativos", "Comps B2", "Fill in: Ba naa _____ ru (He is taller)", ["a. mahzi roo'", "b. gulliaa' roo'", "c. bwen ru"], "a", "mahzi roo' = more tall/bigger"],
    [743, "Comparativos", "Comps B2", "Translate: She is more beautiful.", ["a. Bi mahzi chuhla.", "b. Bi gulliaa' chuhla.", "c. Bi bwen ru."], "a", "mahzi = more, chuhla = beautiful"],
    [744, "Comparativos", "Comps B2", "'Gulliaa' ru' means:", ["a. Less", "b. More", "c. Equal"], "a", "Gulliaa' = Less"],
    [745, "Comparativos", "Comps B2", "Match: Nadxaaba ru", ["a. Worse", "b. Better", "c. More"], "a", "Nadxaaba = bad, ru = more -> worse"],
    [746, "Comparativos", "Comps B2", "Fill in: Dee' naa _____ (This is better)", ["a. lasahca ru", "b. nadxaaba ru", "c. gulliaa' ru"], "a", "lasahca ru = better/more valuable"],
    [747, "Comparativos", "Comps B2", "Translate: Ba mahzi bi'tu'hn", ["a. It is smaller", "b. It is bigger", "c. It is worse"], "a", "mahzi = more, bi'tu'hn = small"],
    [748, "Comparativos", "Comps B2", "Juan is taller than Pedro:", ["a. Juan mahzi roo' loh Pedro", "b. Juan gulliaa' roo' loh Pedro", "c. Juan lasahca ru loh Pedro"], "a", "mahzi roo' loh = taller than"],
    [749, "Comparativos", "Comps B2", "'Lasahca ru' means:", ["a. Better / More valuable", "b. Worse", "c. Bigger"], "a", "Lasahca ru = Better/More valuable"],
    [750, "Comparativos", "Comps B2", "Match: Mahzi", ["a. More", "b. Less", "c. Better"], "a", "Mahzi = More"],

    // 151-160: Reading 1
    [751, "Lectura 1", "Reading B2", "Who is the text about? (Juan from Mexico)", ["a. Juan", "b. Pedro", "c. María"], "a", "The text is about Juan."],
    [752, "Lectura 1", "Reading B2", "Where is Juan from?", ["a. Mexico", "b. Oaxaca", "c. Nazaret"], "a", "Juan is from Mexico."],
    [753, "Lectura 1", "Reading B2", "What is Juan's profession?", ["a. Mwehsu", "b. Bixohza", "c. Xpwiinn"], "a", "Mwehsu = Teacher."],
    [754, "Lectura 1", "Reading B2", "Juan is a woman.", ["a. False", "b. True", "c. Not sure"], "a", "False. Juan is a man."],
    [755, "Lectura 1", "Reading B2", "Translate: Ri'chi nuu tuhbi bwiinn.", ["a. Here there is a person.", "b. He is a teacher.", "c. Juan is from Mexico."], "a", "Ri'chi nuu = Here there is, bwiinn = person."],
    [756, "Lectura 1", "Reading B2", "Where did 'I' go yesterday? (Nna'yi guyaa'hn guihdxyi)", ["a. To the city", "b. To the mountain", "c. To the temple"], "a", "guihdxyi = city"],
    [757, "Lectura 1", "Reading B2", "Who did 'I' see? (Ri'chi bwa'hn xamihgu ra'n)", ["a. My friend", "b. My brother", "c. My father"], "a", "xamihgu = friend"],
    [758, "Lectura 1", "Reading B2", "What did they do? (Guda'wnu pahn tuhsi)", ["a. Ate bread", "b. Drank water", "c. Talked"], "a", "Guda'wnu pahn = Ate bread"],
    [759, "Lectura 1", "Reading B2", "They ate meat.", ["a. False", "b. True", "c. Not sure"], "a", "False. They ate bread (pahn)."],
    [760, "Lectura 1", "Reading B2", "Translate: Ri'chi bwa'hn xamihgu ra'n.", ["a. There I saw my friend.", "b. There I ate bread.", "c. Yesterday I went to the city."], "a", "Ri'chi = There, bwa'hn = I saw, xamihgu = friend."],

    // 161-170: Reading 2
    [761, "Lectura 2", "Reading B2", "What time of day is '¡Chaan!' used?", ["a. Any time (greeting)", "b. Only morning", "c. Only night"], "a", "Chaan is a general greeting."],
    [762, "Lectura 2", "Reading B2", "What is the relationship between A and B?", ["a. Friends/acquaintances", "b. Enemies", "c. Strangers"], "a", "They greet each other casually."],
    [763, "Lectura 2", "Reading B2", "Translate: ¡Chaan! ¿Xinaa nabahan lu'h?", ["a. Hello! How are you?", "b. Goodbye! See you tomorrow.", "c. Who are you?"], "a", "Chaan = Hello, Xinaa nabahan = How are you"],
    [764, "Lectura 2", "Reading B2", "Translate: Bwa'ha. Na'h nabahan za'ca. ¿Ya yi'h?", ["a. Hello. I am fine. And you?", "b. I am sad. And you?", "c. I am going to the city."], "a", "Bwa'ha = Hello/Greeting, nabahan za'ca = living well / fine"],
    [765, "Lectura 2", "Reading B2", "A is not well.", ["a. False", "b. True", "c. Not sure"], "a", "False. A says 'Na'h za'ca' (I am fine)."],
    [766, "Lectura 2", "Reading B2", "What greeting does A use?", ["a. Chaan", "b. Bwa'ha", "c. Zuxchiilli"], "a", "A says Chaan."],
    [767, "Lectura 2", "Reading B2", "How does B respond to the greeting?", ["a. Bwa'ha", "b. Chaan", "c. Bwen duxa"], "a", "B says Bwa'ha."],
    [768, "Lectura 2", "Reading B2", "What question is asked?", ["a. How are you?", "b. Where are you going?", "c. What is your name?"], "a", "Xinaa nabahan lu'h = How are you"],
    [769, "Lectura 2", "Reading B2", "Na'h za'ca means:", ["a. I am fine", "b. I am sad", "c. I am leaving"], "a", "za'ca = good/fine"],
    [770, "Lectura 2", "Reading B2", "Match: ¿Ya yi'h?", ["a. And you?", "b. And him?", "c. And them?"], "a", "yi'h = you"],

    // 171-180: Instructions
    [771, "Instrucciones", "Instructions B2", "Match: Gulgahca nasiin", ["a. Be careful", "b. Do it", "c. Go"], "a", "Gulgahca nasiin = Be careful"],
    [772, "Instrucciones", "Instructions B2", "Fill in: _____ tin ayi dxiaaba lu'h (Be careful not to fall)", ["a. Gulgahca nasiin", "b. Gulgui'hnn", "c. Gulcho'ho"], "a", "Gulgahca nasiin = Be careful"],
    [773, "Instrucciones", "Instructions B2", "Translate: Gulgui'hnn tin ayi gusaa'n", ["a. Do it without stopping", "b. Be careful not to fall", "c. Go quickly"], "a", "Gulgui'hnn = Do it, ayi gusaa'n = don't stop"],
    [774, "Instrucciones", "Instructions B2", "'Gulgahca nasiin' means:", ["a. Be careful", "b. Do it", "c. Come here"], "a", "Gulgahca nasiin = Be careful"],
    [775, "Instrucciones", "Instructions B2", "Match: Gulgui'hnn za'ca", ["a. Do it well", "b. Be careful", "c. Listen well"], "a", "Gulgui'hnn = Do it, za'ca = well"],
    [776, "Instrucciones", "Instructions B2", "Fill in: _____ tin ayi xi guidxeela (Be careful not to lose it)", ["a. Gulgahca nasiin", "b. Gulgui'hnn", "c. Gulcheh"], "a", "Gulgahca nasiin = Be careful"],
    [777, "Instrucciones", "Instructions B2", "Translate: Follow these steps.", ["a. Gulchenee xneziuh ra' rii'.", "b. Gulgahca nasiin chihpa.", "c. Gulgui'hnn za'ca."], "a", "Gulchenee xneziuh = Follow the paths/steps"],
    [778, "Instrucciones", "Instructions B2", "Choose the best translation: Gulgui'hnn", ["a. Do it", "b. Be careful", "c. Wait"], "a", "Gulgui'hnn = Do it (imperative)"],
    [779, "Instrucciones", "Instructions B2", "'Gulgahca nasiin' is a command to hurry.", ["a. False", "b. True", "c. Not sure"], "a", "False. It means 'be careful'."],
    [780, "Instrucciones", "Instructions B2", "Translate: Please be careful", ["a. Gulgahca nasiin chihpa", "b. Gulgui'hnn za'ca", "c. Gulchenee xneziuh"], "a", "Gulgahca nasiin = Be careful"],

    // 181-190: Combining Skills
    [781, "Combinación", "Combining Skills B2", "I want to see my friend tomorrow.", ["a. Na'h xclaa'dzihn gwa'han xamihgu ra'n guillii", "b. Nna'yi guyaa'hn guihdxyi", "c. Na'h riahxi'hn laasii bwa'hn"], "a", "xclaa'dzihn = want, guillii = tomorrow"],
    [782, "Combinación", "Combining Skills B2", "Fill in: _____ guyaa'hn guihdxyi (Yesterday I went...)", ["a. Nna'yi", "b. Guillii", "c. Nnah"], "a", "Nna'yi = Yesterday"],
    [783, "Combinación", "Combining Skills B2", "I am happy. I saw my friend. ->", ["a. Na'h riahxi'hn laasii bwa'hn xamihgu ra'n.", "b. Bwiinn roo' chi naa xpaa'hn.", "c. Ri'chi gwa'hn guillii."], "a", "riahxi'hn = happy, laasii = because"],
    [784, "Combinación", "Combining Skills B2", "The tall man is my father.", ["a. Bwiinn roo' chi naa xpaa'hn.", "b. Na'h xclaa'dzihn gwa'han.", "c. Guillii gahw ra' ba."], "a", "Bwiinn roo' = tall/big man, xpaa'hn = my father"],
    [785, "Combinación", "Combining Skills B2", "Location + Action + Time: Ri'chi gwa'hn guillii", ["a. I will go there tomorrow", "b. I went there yesterday", "c. I am here now"], "a", "Ri'chi = there, gwa'hn = go, guillii = tomorrow"],
    [786, "Combinación", "Combining Skills B2", "Fill in: _____ gahw ra' ba (They will eat tomorrow)", ["a. Guillii", "b. Nna'yi", "c. Nnah"], "a", "Guillii = Tomorrow"],
    [787, "Combinación", "Combining Skills B2", "Translate: Nna'yi ayi guyaa'hn", ["a. Yesterday I didn't go", "b. Tomorrow I won't go", "c. Now I am not going"], "a", "Nna'yi = Yesterday, ayi guyaa'hn = didn't go"],
    [788, "Combinación", "Combining Skills B2", "Identify tense: Guzohbaloh cagaluu'yi", ["a. Past", "b. Present", "c. Future"], "a", "Guzohbaloh = Began (Past)"],
    [789, "Combinación", "Combining Skills B2", "Translate: I will go to the city tomorrow.", ["a. Zia'hahn loh guihdxyi guillii.", "b. Guyaa'hahn loh guihdxyi nna'yi.", "c. Gwah na'h loh guihdxyi nnah."], "a", "Zia'hahn = will go, guillii = tomorrow"],
    [790, "Combinación", "Combining Skills B2", "Translate: She is eating bread with her family.", ["a. Rahw bi pahn cun xfamihyi ba.", "b. Gudahw bi pahn cun xfamihyi ba.", "c. Ziraawuhn bi pahn."], "a", "Rahw = eating (present)"],

    // 191-200: Advanced
    [791, "Avanzado", "Advanced B2", "I would like to learn Zapotec.", ["a. Xclaa'dzihn basi'dxi xchi'dxyi Zapoteco.", "b. Na'h rusi'dxihn xchi'dxyi Zapoteco.", "c. Ayi rahcabwa' xchi'dxyi lu'h."], "a", "Xclaa'dzihn = I want/would like"],
    [792, "Avanzado", "Advanced B2", "Fill in: _____ xchi'dxyi Zapoteco (I am learning Zapotec)", ["a. Na'h rusi'dxihn", "b. Na'h xclaa'dzihn", "c. Na'h guñi'n"], "a", "rusi'dxihn = I am learning/reading"],
    [793, "Avanzado", "Advanced B2", "Can you help me?", ["a. ¿Ta guunn lu'h gahn?", "b. ¿Ta gahw lu'h?", "c. ¿Ta gwah lu'h?"], "a", "guunn lu'h gahn = can you do it / help"],
    [794, "Avanzado", "Advanced B2", "Can you speak slower?", ["a. ¿Ta cagaluu'yi lu'h ca nee?", "b. ¿Ta guunn lu'h gahn?", "c. ¿Xi zee loh dxyi'dxyi rii'?"], "a", "cagaluu'yi = speak, ca nee = slower/like this"],
    [795, "Avanzado", "Advanced B2", "I don't understand your language.", ["a. Ayi rahcabwa' xchi'dxyi lu'h", "b. Na'h rusi'dxihn xchi'dxyi Zapoteco", "c. Gulchixtee' guluu'yi loh tu"], "a", "Ayi rahcabwa' = I don't understand"],
    [796, "Avanzado", "Advanced B2", "Fill in: _____ guluu'yi loh tu (Please explain to me)", ["a. Gulchixtee'", "b. Balahsasto'", "c. Zuxchiilli"], "a", "Gulchixtee' = Explain/Show"],
    [797, "Avanzado", "Advanced B2", "What does this word mean?", ["a. ¿Xi zee loh dxyi'dxyi rii'?", "b. ¿Ta cagaluu'yi lu'h ca nee?", "c. ¿Xi rahw lu'h?"], "a", "Xi zee loh = What does it mean"],
    [798, "Avanzado", "Advanced B2", "How do you say 'water' in Zapotec?", ["a. ñihsa", "b. pahn", "c. yuu'"], "a", "ñihsa = water"],
    [799, "Avanzado", "Advanced B2", "Thank you for your help. Goodbye.", ["a. Zuxchiilli lu'h nin gacanee lu'h loon. Babii.", "b. Chaan. ¿Xixnaa nuu lu'h?", "c. Balahsasto' lu'h na'h."], "a", "Zuxchiilli = Thank you, Babii = Goodbye"],
    [800, "Avanzado", "Advanced B2", "Translate: I will do good work.", ["a. Zuruhnnahn ra' nu'h xtsi'n za'ca.", "b. Guñi' ra' ba xchi'dxyi Dxiohs.", "c. Rahw bi pahn cun xfamihyi ba."], "a", "Zuruhnnahn = I will do, xtsi'n za'ca = good work"]
];

// ==========================================
// 4. INTEGRACIÓN DIRECTA AL SISTEMA
// ==========================================
EXERCISES_B2_RAW.forEach((d) => {
    exercises.push(ex(d[0], d[1], d[2], d[3], d[4], d[5], d[6]));
});
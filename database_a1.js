// ==========================================
// 1. ESTRUCTURA DE LA BASE DE DATOS
// ==========================================
const UNITS_META = [];
const EXERCISES_DATA = [];

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
        unitId: unitId,
        question: question,
        options: options,
        feedbackCorrect: feedback,
        feedbackWrong: `❌ Incorrecto. La respuesta era la ${correctLabel.toUpperCase()}. ${feedback.replace('✅ ', '')}`
    };
}

// ==========================================
// 3. TUS EJERCICIOS (NIVEL A1: 1 - 200)
// ==========================================

// ─── UNIDAD 1: SALUDOS Y PRESENTACIONES ───
exercises.push(ex(1, 'Saludos', 'Saludos básicos',
    'Relaciona el saludo en zapoteco con su significado en español:', [
        'a. Adiós (Bwen duxa)',
        'b. Hola (Chaan)',
        'c. Gracias (Zuxchiilli lu\'h)',
        'd. ¿Cómo estás? (¿Xixnaa nuu lu\'h?)'
    ], 'b',
    '✅ "Chaan" es el saludo informal, equivalente a "Hola".'
));

exercises.push(ex(2, 'Saludos', 'Responder saludos',
    'Completa: A: ¡Chaan! ¿Xixnaa nuu _____?  B: Nuuꞌhuhn _____.',
    ['a. lu\'h / bwen', 'b. bwen / lu\'h', 'c. lu\'h / lu\'h', 'd. bwen / bwen'],
    'a',
    '✅ "lu\'h" = tú (pregunta "¿cómo estás TÚ?"). "bwen" = bien (responde "estoy bien").'
));

exercises.push(ex(3, 'Saludos', 'Preguntar el nombre',
    'Traduce al zapoteco: ¿Cómo te llamas?',
    ['a. ¿Chyu naa lu\'h?', 'b. ¿Chyu naa ba?', 'c. ¿Xixnaa nuu lu\'h?'],
    'a',
    '✅ "Chyu" = quién, "naa" = es/nombre, "lu\'h" = tú. La opción b pregunta "¿quién es él/ella?".'
));

exercises.push(ex(4, 'Saludos', 'Presentarse',
    'Completa: Naꞌh naan _____.',
    ['a. María (nombre)', 'b. bwen', 'c. lu\'h'],
    'a',
    '✅ "Naꞌh" = yo, "naan" = soy/me llamo. Se completa con un nombre propio.'
));

exercises.push(ex(5, 'Saludos', 'Despedidas',
    'Relaciona la despedida correcta: 1. Adiós  2. Hasta luego',
    ['a. Bwen duxa / Ziꞌchi gaca pwihsi', 'b. Ziꞌchi gaca pwihsi / Bwen duxa'],
    'a',
    '✅ "Bwen duxa" es la despedida más común. "Ziꞌchi gaca pwihsi" se usa en contextos más formales.'
));

// ─── UNIDAD 2: NÚMEROS ───
exercises.push(ex(6, 'Números', 'Números 1-5',
    'Relaciona el número con su palabra en zapoteco: 1,2,3,4,5',
    ['a. Chiohpa (2), Chohnna (3), Tuhbi (1), Tahpa (4), Ga\'yu (5)',
        'b. Tuhbi (1), Chiohpa (2), Chohnna (3), Tahpa (4), Ga\'yu (5)'
    ], 'b',
    '✅ Tuhbi=1, Chiohpa=2, Chohnna=3, Tahpa=4, Ga\'yu=5.'
));

exercises.push(ex(7, 'Números', 'Números 6-10',
    'Escribe el número en zapoteco: 6,7,8,9,10',
    ['a. Xo\'pa, Gahdzi, Xuhnna, Gahdzi, Tsi\'ñu',
        'b. Xo\'pa, Gahdzi, Chwa\'ha, Gahdzi, Tsi\'ñu'
    ], 'a',
    '✅ Xo\'pa=6, Gahdzi=7, Xuhnna=8, Gahdzi=9, Tsi\'ñu=10.'
));

exercises.push(ex(8, 'Números', 'Contar personas',
    'Completa: Guyuuꞌ _____ bwiinn. (Hay tres personas)',
    ['a. chiohpa', 'b. chohnna', 'c. tuhbi'],
    'b',
    '✅ "chohnna" = 3. "chiohpa" = 2, "tuhbi" = 1. "Guyuuꞌ" = hay.'
));

exercises.push(ex(9, 'Números', 'Contar objetos',
    'Relaciona: 4 panes, 2 peces, 5 casas',
    ['a. Tahpa pahn / Chiohpa bwehlda / Ga\'yu yuuꞌ',
        'b. Ga\'yu pahn / Chiohpa bwehlda / Tahpa yuuꞌ'
    ], 'a',
    '✅ El número va antes del sustantivo. pahn=pan, bwehlda=pez, yuuꞌ=casa.'
));

exercises.push(ex(10, 'Números', 'Preguntar edad',
    'Traduce: ¿Cuántos años tienes?',
    ['a. ¿Paaldaa yihza?', 'b. ¿Chyu naa lu\'h?', 'c. ¿Cannehza nuu?'],
    'a',
    '✅ "Paaldaa" = cuántos, "yihza" = años. La opción b pregunta "¿cómo te llamas?".'
));

// ─── UNIDAD 3: FAMILIA ───
exercises.push(ex(11, 'Familia', 'Miembros de la familia',
    'Relaciona: Xtaada, Xmaah, Llii\'n, Bwihtsi',
    ['a. Padre / Madre / Hijo/a / Hermano',
        'b. Hermano / Madre / Padre / Hijo/a',
        'c. Padre / Hermano / Madre / Hijo/a'
    ], 'a',
    '✅ Xtaada=padre, Xmaah=madre, Llii\'n=hijo/a, Bwihtsi=hermano.'
));

exercises.push(ex(12, 'Familia', 'Mi padre',
    'Completa: _____ naa Joseh. (Mi padre es José)',
    ['a. Xtaa\'da\'hn', 'b. Xmaa\'hn', 'c. Llii\'n'],
    'a',
    '✅ "-ꞌhn" al final = "mi". "Xtaada"+"ꞌhn" = mi padre. "Xmaah"+"ꞌhn" = mi madre.'
));

exercises.push(ex(13, 'Familia', 'Mi madre',
    'Traduce: María es mi madre.',
    ['a. María naa xmaah ba.', 'b. María naa xmaa\'hn.', 'c. María naa xmaah lu\'h.'],
    'b',
    '✅ "-ꞌhn" = mi. "ba" = su, "lu\'h" = tu. La opción a dice "su madre", la c "tu madre".'
));

exercises.push(ex(14, 'Familia', 'Hermano',
    'Completa: Pehdru cun Andrehs naa raꞌ _____. (Pedro y Andrés son hermanos)',
    ['a. xmaah', 'b. xtaada', 'c. bwihtsi'],
    'c',
    '✅ "raꞌ" indica plural. "bwihtsi" = hermano/hermanos. "xmaah"=madre, "xtaada"=padre.'
));

exercises.push(ex(15, 'Familia', 'Posesivos',
    'Relaciona: -hn, -lu\'h, -ba',
    ['a. Mi / Tu / Su (de él/ella)', 'b. Tu / Su / Mi', 'c. Su / Mi / Tu'],
    'a',
    '✅ "-hn"=mi, "-lu\'h"=tu, "-ba"=su. Ejemplo: xtaada+hn = xtaada\'hn (mi padre).'
));

// ─── UNIDAD 4: VERBOS BÁSICOS ───
exercises.push(ex(16, 'Verbos', 'Verbo "ir"',
    'Completa: Naꞌh _____ loh guihdxyi. (Yo voy a la ciudad)',
    ['a. gwah', 'b. rahw', 'c. guñiꞌ'],
    'a',
    '✅ "gwah" = voy/ir. "rahw" = comer, "guñiꞌ" = hablar/decir. "loh" = a/en.'
));

exercises.push(ex(17, 'Verbos', 'Verbo "comer"',
    'Completa: Bi _____ pahn. (Ella come pan)',
    ['a. gwah', 'b. rahw', 'c. guñiꞌ'],
    'b',
    '✅ "Bi" = ella, "rahw" = come/comer, "pahn" = pan. "gwah"=va, "guñiꞌ"=habla.'
));

exercises.push(ex(18, 'Verbos', 'Verbo "hablar"',
    'Completa: Ba _____ xchiꞌdxyi Dxiohs. (Él habla la palabra de Dios)',
    ['a. rahw', 'b. gwah', 'c. guñiꞌ'],
    'c',
    '✅ "Ba"=él, "guñiꞌ"=habla, "xchiꞌdxyi"=palabra. "rahw"=come, "gwah"=va.'
));

exercises.push(ex(19, 'Verbos', 'Verbo "hacer"',
    'Completa: Ruhnn naꞌh _____ zaꞌca. (Hago buen trabajo)',
    ['a. xtsiꞌn', 'b. pahn', 'c. guihdxyi'],
    'a',
    '✅ "Ruhnn" = hago/hacer, "xtsiꞌn" = trabajo. "pahn"=pan, "guihdxyi"=ciudad.'
));

exercises.push(ex(20, 'Verbos', 'Verbos en oraciones',
    'Completa: 1. Naꞌh _____ xchiꞌdxyi. 2. Lu\'h _____ loh guihdxyi. 3. Bi _____ pahn.',
    ['a. guñiꞌ / gwah / rahw', 'b. gwah / rahw / guñiꞌ', 'c. rahw / guñiꞌ / gwah'],
    'a',
    '✅ Naꞌh (yo) → guñiꞌ, Lu\'h (tú) → gwah, Bi (ella) → rahw.'
));

// ─── UNIDAD 5: PREGUNTAS BÁSICAS ───
exercises.push(ex(21, 'Preguntas', '¿Dónde?',
    'Traduce: ¿Dónde está la ciudad?',
    ['a. ¿Chyu naa guihdxyi?', 'b. ¿Cannehza nuu guihdxyi?', 'c. ¿Xi nuu guihdxyi?'],
    'b',
    '✅ "Cannehza"=dónde, "nuu"=está, "guihdxyi"=ciudad. "Chyu"=quién, "Xi"=qué.'
));

exercises.push(ex(22, 'Preguntas', '¿Qué?',
    'Traduce: ¿Qué es esto?',
    ['a. ¿Chyu niꞌca?', 'b. ¿Xi niꞌca?', 'c. ¿Cannehza niꞌca?'],
    'b',
    '✅ "Xi"=qué, "niꞌca"=esto. "Chyu"=quién, "Cannehza"=dónde.'
));

exercises.push(ex(23, 'Preguntas', '¿Quién?',
    'Traduce: ¿Quién es él?',
    ['a. ¿Xi naa ba?', 'b. ¿Chyu naa ba?', 'c. ¿Cannehza naa ba?'],
    'b',
    '✅ "Chyu"=quién, "naa"=es, "ba"=él. "Xi"=qué, "Cannehza"=dónde.'
));

exercises.push(ex(24, 'Preguntas', '¿Cómo?',
    'Traduce: ¿Cómo estás?',
    ['a. ¿Chyu naa lu\'h?', 'b. ¿Xixnaa nuu lu\'h?', 'c. ¿Cannehza nuu lu\'h?'],
    'b',
    '✅ "Xixnaa"=cómo, "nuu"=estás, "lu\'h"=tú. "Chyu"=quién, "Cannehza"=dónde.'
));

exercises.push(ex(25, 'Preguntas', 'Respuestas a preguntas',
    'Relaciona: ¿Chyu naa lu\'h? / ¿Xixnaa nuu lu\'h? / ¿Cannehza nuu guihdxyi?',
    ['a. Naꞌh naan María / Nuuꞌhuhn bwen / Nuu loh dahan',
        'b. Nuu loh dahan / Naꞌh naan María / Nuuꞌhuhn bwen'
    ], 'a',
    '✅ ¿Nombre? → respuesta con nombre. ¿Estado? → respuesta "bwen" (bien). ¿Ubicación? → respuesta con lugar.'
));

// ─── UNIDAD 6: NEGACIÓN ───
exercises.push(ex(26, 'Negación', 'Negar con "ayi"',
    'Completa: Ba _____ gwah loh guihdxyi. (Él no va a la ciudad)',
    ['a. ayi', 'b. bwen', 'c. ziꞌchi'],
    'a',
    '✅ "ayi" es la negación "no". Va antes del verbo. "bwen"=bien, "ziꞌchi"=sí/ciertamente.'
));

exercises.push(ex(27, 'Negación', 'Negar acciones',
    'Haz negativa: Rahw bi pahn. → _____',
    ['a. Rahw bi ayi pahn.', 'b. Ayi rahw bi pahn.', 'c. Pahn ayi rahw bi.'],
    'b',
    '✅ Se añade "ayi" antes del verbo. El orden no cambia.'
));

exercises.push(ex(28, 'Negación', 'Responder "no"',
    'Responde negativamente: ¿Ta gwah lu\'h loh guihdxyi?',
    ['a. Uhn, gwah.', 'b. Coh, ayi gwah.', 'c. Ziꞌchi, gwah.'],
    'b',
    '✅ "Coh"=no, "Uhn"=sí, "Ziꞌchi"=sí/ciertamente. La negación usa "Coh, ayi..."'
));

exercises.push(ex(29, 'Negación', '"No" con sustantivos',
    'Completa: Ayi _____ bwiinn. (No hay personas)',
    ['a. nuu', 'b. gwah', 'c. rahw'],
    'a',
    '✅ "nuu"=hay/está, "ayi nuu"=no hay. "gwah"=va, "rahw"=come.'
));

exercises.push(ex(30, 'Negación', 'Repaso de negación',
    'Elige la oración negativa correcta:',
    ['a. Ayi rahw ba pahn.', 'b. Rahw ba ayi pahn.', 'c. Pahn ayi rahw ba.'],
    'a',
    '✅ "ayi" siempre va antes del verbo. Orden: ayi + verbo + sujeto + objeto.'
));

// ─── UNIDAD 7: ADJETIVOS BÁSICOS ───
exercises.push(ex(31, 'Adjetivos', 'Adjetivos comunes',
    'Relaciona: Bwen, Dxaaba, Saantu, Rooꞌ, Cuubi',
    ['a. Bueno / Malo / Santo / Grande / Nuevo',
        'b. Malo / Bueno / Santo / Nuevo / Grande',
        'c. Bueno / Santo / Malo / Grande / Nuevo'
    ], 'a',
    '✅ Bwen=bueno, Dxaaba=malo, Saantu=santo/sagrado, Rooꞌ=grande, Cuubi=nuevo.'
));

exercises.push(ex(32, 'Adjetivos', 'Describir personas',
    'Completa: Ba naa tuhbi ndxiꞌhw _____. (Él es un hombre bueno)',
    ['a. dxaaba', 'b. bwen', 'c. rooꞌ'],
    'b',
    '✅ "bwen"=bueno, "dxaaba"=malo, "rooꞌ"=grande. Se usa "tuhbi" antes del sustantivo.'
));

exercises.push(ex(33, 'Adjetivos', 'Describir lugares',
    'Completa: Guihdxyi naa _____. (La ciudad es grande)',
    ['a. rooꞌ', 'b. biꞌtuꞌhn', 'c. bwen'],
    'a',
    '✅ "rooꞌ"=grande, "biꞌtuꞌhn"=pequeño, "bwen"=bueno. "naa"=es.'
));

exercises.push(ex(34, 'Adjetivos', 'Adjetivos opuestos',
    'Relaciona los opuestos: Bwen, Biꞌtuꞌhn',
    ['a. Rooꞌ / Dxaaba', 'b. Dxaaba / Rooꞌ', 'c. Rooꞌ / Bwen'],
    'b',
    '✅ Bwen (bueno) ↔ Dxaaba (malo). Biꞌtuꞌhn (pequeño) ↔ Rooꞌ (grande).'
));

exercises.push(ex(35, 'Adjetivos', 'Adjetivos en oraciones',
    'Traduce: La casa es blanca.',
    ['a. Yuuꞌ naa labweh.', 'b. Yuuꞌ naa nagaasa.', 'c. Yuuꞌ naa naxñaa.'],
    'a',
    '✅ "yuuꞌ"=casa, "labweh"=blanco, "nagaasa"=negro, "naxñaa"=rojo.'
));

// ─── UNIDAD 8: POSESIVOS ───
exercises.push(ex(36, 'Posesivos', 'Posesivos básicos',
    'Relaciona: -hn, -lu\'h, -ba',
    ['a. Mi / Tu / Su', 'b. Tu / Su / Mi', 'c. Su / Mi / Tu'],
    'a',
    '✅ "-hn"=mi, "-lu\'h"=tu, "-ba"=su. Ejemplo: xmaah+hn = xmaa\'hn (mi madre).'
));

exercises.push(ex(37, 'Posesivos', 'Mi casa',
    'Completa: Nuuꞌhuhn loh _____. (Estoy en mi casa)',
    ['a. yuu\'lu\'h', 'b. yuu\'hn', 'c. yuu\'ba'],
    'b',
    '✅ "yuu\'hn"=mi casa. "yuu\'lu\'h"=tu casa, "yuu\'ba"=su casa. "loh"=en.'
));

exercises.push(ex(38, 'Posesivos', 'Tu padre',
    'Traduce: ¿Dónde está tu padre?',
    ['a. ¿Cannehza nuu xtaada lu\'h?', 'b. ¿Cannehza nuu xtaada hn?', 'c. ¿Cannehza nuu xtaada ba?'],
    'a',
    '✅ "xtaada lu\'h"=tu padre. "hn"=mi, "ba"=su. "lu\'h" es posesivo de segunda persona.'
));

exercises.push(ex(39, 'Posesivos', 'Su madre',
    'Completa: María naa _____. (María es su madre - de él)',
    ['a. xmaa\'hn', 'b. xmaah lu\'h', 'c. xmaah ba'],
    'c',
    '✅ "ba"=su (de él/ella). "xmaa\'hn"=mi madre, "xmaah lu\'h"=tu madre.'
));

exercises.push(ex(40, 'Posesivos', 'Repaso de posesivos',
    'Elige: _____ (Mi) xtaada naa Joseh.',
    ['a. -hn', 'b. -lu\'h', 'c. -ba'],
    'a',
    '✅ "-hn" siempre indica posesión de primera persona. Se añade al final: xtaada+hn = xtaada\'hn.'
));

// ─── UNIDAD 9: PREPOSICIONES ───
exercises.push(ex(41, 'Preposiciones', 'Preposiciones de lugar',
    'Relaciona: Loh, Nez, Cun, Hasta',
    ['a. En/a / De/desde / Con / Hasta',
        'b. De/desde / En/a / Con / Hasta',
        'c. Con / En/a / De/desde / Hasta'
    ], 'a',
    '✅ "loh"=en/a (lugar), "nez"=de/desde (origen), "cun"=con (compañía), "hasta"=hasta (límite).'
));

exercises.push(ex(42, 'Preposiciones', 'Usar "loh"',
    'Completa: Nuuꞌhuhn _____ guihdxyi. (Estoy en la ciudad)',
    ['a. nez', 'b. loh', 'c. cun'],
    'b',
    '✅ "loh"=en (ubicación). "nez"=desde, "cun"=con. "loh guihdxyi"=en la ciudad.'
));

exercises.push(ex(43, 'Preposiciones', 'Usar "nez"',
    'Completa: Zeꞌ naꞌh _____ guihdxyi Nazaret. (Soy de Nazaret)',
    ['a. loh', 'b. nez', 'c. cun'],
    'b',
    '✅ "nez"=de (procedencia). "loh"=en, "cun"=con. Para decir "soy de..." se usa "nez".'
));

exercises.push(ex(44, 'Preposiciones', 'Usar "cun"',
    'Completa: Gwah ba _____ xpwiinn ba. (Él va con sus seguidores)',
    ['a. loh', 'b. nez', 'c. cun'],
    'c',
    '✅ "cun"=con (acompañamiento). "loh"=en/a, "nez"=de.'
));

exercises.push(ex(45, 'Preposiciones', 'Repaso de preposiciones',
    'Elige la preposición correcta: Gwah ba loh guihdxyi _____ xpwiinn ba.',
    ['a. loh', 'b. nez', 'c. cun'],
    'c',
    '✅ Se necesitan dos: "loh" para el destino (ciudad) y "cun" para la compañía (seguidores).'
));

// ─── UNIDAD 10: CONJUNCIONES ───
exercises.push(ex(46, 'Conjunciones', 'Conjunciones básicas',
    'Relaciona: Cun, Per, Laasii',
    ['a. Y / Pero / Porque', 'b. Pero / Y / Porque', 'c. Porque / Y / Pero'],
    'a',
    '✅ "cun"=y, "per"=pero, "laasii"=porque.'
));

exercises.push(ex(47, 'Conjunciones', 'Usar "cun" (y)',
    'Combina: Gwah ba loh guihdxyi. Gwah ba cun xpwiinn ba.',
    ['a. Gwah ba loh guihdxyi per cun xpwiinn ba.',
        'b. Gwah ba loh guihdxyi cun xpwiinn ba.',
        'c. Gwah ba loh guihdxyi laasii xpwiinn ba.'
    ], 'b',
    '✅ "cun" une dos elementos similares. "per" indica contraste, "laasii" indica causa.'
));

exercises.push(ex(48, 'Conjunciones', 'Usar "per" (pero)',
    'Completa: Xclaaꞌdzi ba gwah, _____ ayi gwah. (Él quiere ir, pero no va)',
    ['a. cun', 'b. per', 'c. laasii'],
    'b',
    '✅ "per" indica contraste. "cun"=y, "laasii"=porque. La oración muestra contradicción.'
));

exercises.push(ex(49, 'Conjunciones', 'Usar "laasii" (porque)',
    'Completa: Gwah ba, _____ xclaaꞌdzi ba. (Él va porque quiere)',
    ['a. cun', 'b. per', 'c. laasii'],
    'c',
    '✅ "laasii"=porque (da la razón). "cun"=y, "per"=pero.'
));

exercises.push(ex(50, 'Conjunciones', 'Repaso de conjunciones',
    'Elige: Rahw bi pahn _____ bwehlda. (Ella come pan y pescado)',
    ['a. per', 'b. cun', 'c. laasii'],
    'b',
    '✅ "cun" une dos elementos (pan y pescado). "per"=pero, "laasii"=porque.'
));

// ─── UNIDAD 11: VERBOS PASADO ───
exercises.push(ex(51, 'Pasado', 'Pasado de "ir"',
    'Completa: Ba _____ loh guihdxyi nnaꞌyi. (Él fue a la ciudad ayer)',
    ['a. gwah', 'b. guyaaꞌhahn', 'c. ziaꞌha'],
    'b',
    '✅ "guyaaꞌhahn"=fue (pasado). "gwah"=va (presente), "ziaꞌha"=irá (futuro). "nnaꞌyi"=ayer.'
));

exercises.push(ex(52, 'Pasado', 'Pasado de "comer"',
    'Completa: Bi _____ pahn. (Ella comió pan)',
    ['a. rahw', 'b. gudahw', 'c. ziraawuhn'],
    'b',
    '✅ "gudahw"=comió (pasado). "rahw"=come (presente), "ziraawuhn"=comerá (futuro).'
));

exercises.push(ex(53, 'Pasado', 'Pasado de "hablar"',
    'Completa: Ba _____ xchiꞌdxyi. (Él habló la palabra)',
    ['a. guñiꞌ', 'b. guñiꞌnee', 'c. guiñiꞌ'],
    'c',
    '✅ "guiñiꞌ"=habló (pasado). "guñiꞌ"=habla (presente), "guñiꞌnee"=hablará (futuro).'
));

exercises.push(ex(54, 'Pasado', 'Pasado de "hacer"',
    'Completa: Raꞌ ba _____ xtsiꞌn. (Ellos hicieron el trabajo)',
    ['a. ruhnn', 'b. bwiꞌhnn', 'c. zuruꞌnnahn'],
    'b',
    '✅ "bwiꞌhnn"=hicieron (pasado). "ruhnn"=hacen (presente), "zuruꞌnnahn"=harán (futuro).'
));

exercises.push(ex(55, 'Pasado', 'Repaso de pasado',
    'Elige la forma correcta del pasado: Naꞌh _____ (vi) laꞌh ba.',
    ['a. bwaꞌha', 'b. bwaꞌhahn', 'c. zwaꞌhahn'],
    'b',
    '✅ "bwaꞌhahn"=vi (pasado, yo). "bwaꞌha"=vio (él/ella), "zwaꞌhahn"=veré (futuro).'
));

// ─── UNIDAD 12: FUTURO ───
exercises.push(ex(56, 'Futuro', 'Futuro de "ir"',
    'Completa: Naꞌh _____ loh guihdxyi guillii. (Yo iré a la ciudad mañana)',
    ['a. gwah', 'b. guyaaꞌhahn', 'c. ziaꞌhahn'],
    'c',
    '✅ "ziaꞌhahn"=iré (futuro). "gwah"=voy, "guyaaꞌhahn"=fui. "guillii"=mañana.'
));

exercises.push(ex(57, 'Futuro', 'Futuro de "comer"',
    'Completa: Bi _____ pahn. (Ella comerá pan)',
    ['a. rahw', 'b. gudahw', 'c. ziraawuhn'],
    'c',
    '✅ "ziraawuhn"=comerá (futuro). "rahw"=come, "gudahw"=comió. El futuro se forma con "zi-".'
));

exercises.push(ex(58, 'Futuro', 'Futuro de "hablar"',
    'Completa: Ba _____ xchiꞌdxyi. (Él hablará la palabra)',
    ['a. guñiꞌ', 'b. guiñiꞌ', 'c. zuiñiꞌ'],
    'c',
    '✅ "zuiñiꞌ"=hablará (futuro). "guñiꞌ"=habla, "guiñiꞌ"=habló. El futuro cambia la primera vocal.'
));

exercises.push(ex(59, 'Futuro', 'Futuro de "hacer"',
    'Completa: Raꞌ ba _____ xtsiꞌn. (Ellos harán el trabajo)',
    ['a. ruhnn', 'b. bwiꞌhnn', 'c. zuruꞌnnahn'],
    'c',
    '✅ "zuruꞌnnahn"=harán (futuro). "ruhnn"=hacen, "bwiꞌhnn"=hicieron.'
));

exercises.push(ex(60, 'Futuro', 'Repaso de futuro',
    'Elige la forma correcta del futuro: Lu\'h _____ (irás) loh guihdxyi?',
    ['a. gwah', 'b. guyaaꞌhahn', 'c. ziaꞌha'],
    'c',
    '✅ "ziaꞌha"=irás (futuro, tú). "gwah"=vas, "guyaaꞌhahn"=fui. La terminación "-a" indica segunda persona.'
));

// ─── UNIDAD 13: ADVERBIOS ───
exercises.push(ex(61, 'Adverbios', 'Adverbios de manera',
    'Relaciona: Bwen, Dxaaba, Carrih, Duuxa',
    ['a. Bien / Mal / Rápidamente / Fuertemente',
        'b. Mal / Bien / Rápidamente / Fuertemente',
        'c. Bien / Mal / Fuertemente / Rápidamente'
    ], 'a',
    '✅ "bwen"=bien, "dxaaba"=mal, "carrih"=rápido, "duuxa"=fuerte/mucho.'
));

exercises.push(ex(62, 'Adverbios', 'Usar "bwen"',
    'Completa: Guñiꞌ ba _____. (Él habla bien)',
    ['a. dxaaba', 'b. bwen', 'c. carrih'],
    'b',
    '✅ "bwen"=bien (calidad). "dxaaba"=mal, "carrih"=rápido. El adverbio va después del verbo.'
));

exercises.push(ex(63, 'Adverbios', 'Usar "carrih"',
    'Completa: Gwah ba _____. (Él va rápido)',
    ['a. bwen', 'b. dxaaba', 'c. carrih'],
    'c',
    '✅ "carrih"=rápidamente (velocidad). "bwen"=bien, "dxaaba"=mal.'
));

exercises.push(ex(64, 'Adverbios', 'Adverbios de tiempo',
    'Relaciona: Nnadxyih, Guillii, Nnaꞌyi',
    ['a. Hoy / Mañana / Ayer', 'b. Mañana / Hoy / Ayer', 'c. Ayer / Hoy / Mañana'],
    'a',
    '✅ "nnadxyih"=hoy, "guillii"=mañana, "nnaꞌyi"=ayer.'
));

exercises.push(ex(65, 'Adverbios', 'Repaso de adverbios',
    'Elige: Ruhnn raꞌ ba xtsiꞌn _____. (Ellos trabajan bien)',
    ['a. dxaaba', 'b. bwen', 'c. carrih'],
    'b',
    '✅ "bwen"=bien (calidad del trabajo). "dxaaba"=mal, "carrih"=rápido.'
));

// ─── UNIDAD 14: COLORES ───
exercises.push(ex(66, 'Colores', 'Colores básicos',
    'Relaciona: Labweh, Nagaasa, Naxñaa, Guhtsi, Guiiꞌga',
    ['a. Blanco / Negro / Rojo / Azul / Amarillo',
        'b. Negro / Blanco / Rojo / Amarillo / Azul',
        'c. Blanco / Rojo / Negro / Azul / Amarillo'
    ], 'a',
    '✅ Labweh=blanco, Nagaasa=negro, Naxñaa=rojo, Guhtsi=azul, Guiiꞌga=amarillo.'
));

exercises.push(ex(67, 'Colores', 'Describir con colores',
    'Completa: Xahba naa _____. (La ropa es blanca)',
    ['a. labweh', 'b. nagaasa', 'c. naxñaa'],
    'a',
    '✅ "labweh"=blanco, "nagaasa"=negro, "naxñaa"=rojo. "xahba"=ropa.'
));

exercises.push(ex(68, 'Colores', 'Color de objetos',
    'Traduce: La flor es roja.',
    ['a. Dxiah naa naxñaa.', 'b. Dxiah naa labweh.', 'c. Dxiah naa guhtsi.'],
    'a',
    '✅ "dxiah"=flor, "naxñaa"=rojo, "labweh"=blanco, "guhtsi"=azul.'
));

exercises.push(ex(69, 'Colores', 'Preguntas de color',
    'Traduce: ¿De qué color es la casa?',
    ['a. ¿Chyu naa yuuꞌ?', 'b. ¿Xi culohr yuuꞌ?', 'c. ¿Cannehza nuu yuuꞌ?'],
    'b',
    '✅ "Xi culohr"=qué color, "yuuꞌ"=casa. La opción a pregunta "¿quién es la casa?".'
));

exercises.push(ex(70, 'Colores', 'Repaso de colores',
    'Elige: Bweꞌhla naa _____. (El fuego es rojo)',
    ['a. labweh', 'b. naxñaa', 'c. guiiꞌga'],
    'b',
    '✅ "naxñaa"=rojo (color del fuego). "labweh"=blanco, "guiiꞌga"=amarillo.'
));

// ─── UNIDAD 15: DIRECCIONES ───
exercises.push(ex(71, 'Direcciones', 'Direcciones básicas',
    'Relaciona: Delaanta, Lahdu derehchu, Lahdu rrabwehsa, Dihtsi',
    ['a. Recto/adelante / Derecha / Izquierda / Detrás/fuera',
        'b. Derecha / Recto/adelante / Izquierda / Detrás/fuera',
        'c. Recto/adelante / Izquierda / Derecha / Detrás/fuera'
    ], 'a',
    '✅ Delaanta=recto/adelante, Lahdu derehchu=derecha, Lahdu rrabwehsa=izquierda, Dihtsi=detrás/fuera.'
));

exercises.push(ex(72, 'Direcciones', 'Indicar dirección',
    'Completa: Gwah _____ loh neziuh. (Ve recto por el camino)',
    ['a. delaanta', 'b. derehchu', 'c. rrabwehsa'],
    'a',
    '✅ "delaanta"=recto, "derehchu"=derecha, "rrabwehsa"=izquierda.'
));

exercises.push(ex(73, 'Direcciones', 'Girar a la derecha',
    'Traduce: Gira a la derecha.',
    ['a. Gwah lahdu rrabwehsa.', 'b. Gwah lahdu derehchu.', 'c. Gwah delaanta.'],
    'b',
    '✅ "lahdu derehchu"=a la derecha. La opción a sería "gira a la izquierda".'
));

exercises.push(ex(74, 'Direcciones', 'Ubicación',
    'Completa: Nuu xquidoꞌ _____ yuuꞌ. (El templo está detrás de la casa)',
    ['a. delaanta', 'b. dihtsi', 'c. galaayi'],
    'b',
    '✅ "dihtsi"=detrás, "delaanta"=delante, "galaayi"=entre.'
));

exercises.push(ex(75, 'Direcciones', 'Repaso de direcciones',
    'Elige: Nuu _____ yuuꞌ. (Está detrás de la casa)',
    ['a. delaanta', 'b. dihtsi', 'c. derehchu'],
    'b',
    '✅ "dihtsi"=detrás, "delaanta"=delante, "derehchu"=derecha.'
));

// ─── UNIDAD 16: COMIDA ───
exercises.push(ex(76, 'Comida', 'Comida básica',
    'Relaciona: Pahn, Bwehlda, Ñihsa, Vihnnu',
    ['a. Pan / Pescado / Agua / Vino',
        'b. Pescado / Pan / Agua / Vino',
        'c. Pan / Agua / Pescado / Vino'
    ], 'a',
    '✅ Pahn=pan, Bwehlda=pescado, Ñihsa=agua, Vihnnu=vino.'
));

exercises.push(ex(77, 'Comida', 'Comer y beber',
    'Completa: Rahw bi pahn cun reeꞌ bi _____. (Ella come pan y bebe agua)',
    ['a. pahn', 'b. ñihsa', 'c. bwehlda'],
    'b',
    '✅ "ñihsa"=agua, "reeꞌ"=bebe. "pahn"=pan, "bwehlda"=pescado.'
));

exercises.push(ex(78, 'Comida', 'Preguntar por comida',
    'Traduce: ¿Qué comes?',
    ['a. ¿Xi rahw lu\'h?', 'b. ¿Xi reeꞌ lu\'h?', 'c. ¿Xi gwah lu\'h?'],
    'a',
    '✅ "rahw"=comes/comer (comida sólida). "reeꞌ"=bebes (líquidos), "gwah"=vas.'
));

exercises.push(ex(79, 'Comida', 'Describir comida',
    'Completa: Pahn naa _____. (El pan es bueno)',
    ['a. dxaaba', 'b. bwen', 'c. rooꞌ'],
    'b',
    '✅ "bwen"=bueno, "dxaaba"=malo, "rooꞌ"=grande.'
));

exercises.push(ex(80, 'Comida', 'Repaso de comida',
    'Elige: Naꞌh xclaaꞌdzihn gahw _____. (Yo quiero comer pan)',
    ['a. pahn', 'b. ñihsa', 'c. vihnnu'],
    'a',
    '✅ "pahn"=pan (comida sólida). "ñihsa"=agua, "vihnnu"=vino (bebidas).'
));

// ─── UNIDAD 17: CLIMA ───
exercises.push(ex(81, 'Clima', 'Clima básico',
    'Relaciona: Gubihdxyi, Bwih, Bwehla, Nhisa',
    ['a. Sol / Viento / Lluvia / Agua',
        'b. Viento / Sol / Lluvia / Agua',
        'c. Sol / Lluvia / Viento / Agua'
    ], 'a',
    '✅ Gubihdxyi=sol, Bwih=viento, Bwehla=lluvia, Nhisa=agua.'
));

exercises.push(ex(82, 'Clima', 'Describir el clima',
    'Completa: _____ riaaba. (Está lloviendo)',
    ['a. Gubihdxyi', 'b. Bwehla', 'c. Bwih'],
    'b',
    '✅ "bwehla"=lluvia, "riaaba"=está cayendo. "gubihdxyi"=sol, "bwih"=viento.'
));

exercises.push(ex(83, 'Clima', 'El sol',
    'Traduce: El sol brilla.',
    ['a. Bwih ruziaꞌñih.', 'b. Bwehla riaaba.', 'c. Gubihdxyi ruziaꞌñih.'],
    'c',
    '✅ "gubihdxyi"=sol, "ruziaꞌñih"=brilla. "bwih"=viento, "bwehla"=lluvia.'
));

exercises.push(ex(84, 'Clima', 'Preguntar por el clima',
    'Traduce: ¿Cómo está el clima?',
    ['a. ¿Xixnaa nuu gueꞌl?', 'b. ¿Xi ruhnn lu\'h?', 'c. ¿Cannehza nuu?'],
    'a',
    '✅ "Xixnaa"=cómo, "nuu"=está, "gueꞌl"=clima/tiempo.'
));

exercises.push(ex(85, 'Clima', 'Repaso de clima',
    'Elige: _____ naa rooꞌ. (El viento es fuerte)',
    ['a. Gubihdxyi', 'b. Bwih', 'c. Bwehla'],
    'b',
    '✅ "bwih"=viento, "rooꞌ"=fuerte/grande. "gubihdxyi"=sol, "bwehla"=lluvia.'
));

// ─── UNIDAD 18: PARTES DEL CUERPO ───
exercises.push(ex(86, 'Cuerpo', 'Partes del cuerpo',
    'Relaciona: Bizloh, Naa, Yihca, Tihxi',
    ['a. Mano / Pie / Cabeza / Cuerpo',
        'b. Pie / Mano / Cabeza / Cuerpo',
        'c. Mano / Cabeza / Pie / Cuerpo'
    ], 'a',
    '✅ Bizloh=mano, Naa=pie, Yihca=cabeza, Tihxi=cuerpo.'
));

exercises.push(ex(87, 'Cuerpo', 'Mi cabeza',
    'Completa: _____ naa rooꞌ. (Mi cabeza es grande)',
    ['a. Bizloh', 'b. Yihca', 'c. Naa'],
    'b',
    '✅ "yihca"=cabeza, "bizloh"=mano, "naa"=pie. "rooꞌ"=grande.'
));

exercises.push(ex(88, 'Cuerpo', 'Mi mano',
    'Traduce: Mi mano está aquí.',
    ['a. Bizloh nuu riiꞌ.', 'b. Yihca nuu riiꞌ.', 'c. Naa nuu riiꞌ.'],
    'a',
    '✅ "bizloh"=mano, "nuu"=está, "riiꞌ"=aquí. "yihca"=cabeza, "naa"=pie.'
));

exercises.push(ex(89, 'Cuerpo', 'Partes en oraciones',
    'Completa: Tihxi ba naa _____. (Su cuerpo está cansado)',
    ['a. chuhla', 'b. badxahga', 'c. rooꞌ'],
    'b',
    '✅ "badxahga"=cansado. "chuhla"=bonito, "rooꞌ"=grande. "ba"=su (de él).'
));

exercises.push(ex(90, 'Cuerpo', 'Repaso de cuerpo',
    'Elige: _____ (Mano) naa jweersi. (Mi mano es fuerte)',
    ['a. Bizloh', 'b. Yihca', 'c. Ñaaꞌ'],
    'a',
    '✅ "bizloh"=mano, "jweersi"=fuerte. "yihca"=cabeza, "ñaaꞌ"=cara.'
));

// ─── UNIDAD 19: OBJETOS ───
exercises.push(ex(91, 'Objetos', 'Objetos comunes',
    'Relaciona: Yuuꞌ, Dxihtsi, Xahba, Mweeyi',
    ['a. Casa / Libro / Ropa / Dinero',
        'b. Libro / Casa / Ropa / Dinero',
        'c. Casa / Ropa / Libro / Dinero'
    ], 'a',
    '✅ Yuuꞌ=casa, Dxihtsi=libro, Xahba=ropa, Mweeyi=dinero.'
));

exercises.push(ex(92, 'Objetos', 'Mi casa',
    'Completa: Nuuꞌhuhn loh _____. (Estoy en mi casa)',
    ['a. yuu\'hn', 'b. dxihtsi', 'c. xahba'],
    'a',
    '✅ "yuu\'hn"=mi casa. "-hn"=mi (posesivo). "dxihtsi"=libro, "xahba"=ropa.'
));

exercises.push(ex(93, 'Objetos', 'El libro',
    'Traduce: El libro está sobre la mesa.',
    ['a. Dxihtsi nuu yihca mweella.', 'b. Yuuꞌ nuu yihca mweella.', 'c. Xahba nuu yihca mweella.'],
    'a',
    '✅ "dxihtsi"=libro, "yihca"=sobre/en (arriba), "mweella"=mesa.'
));

exercises.push(ex(94, 'Objetos', 'La ropa',
    'Completa: _____ naa labweh. (La ropa es blanca)',
    ['a. Yuuꞌ', 'b. Dxihtsi', 'c. Xahba'],
    'c',
    '✅ "xahba"=ropa, "labweh"=blanca. "yuuꞌ"=casa, "dxihtsi"=libro.'
));

exercises.push(ex(95, 'Objetos', 'Repaso de objetos',
    'Elige: _____ (Dinero) naa biꞌtuꞌhn.',
    ['a. Yuuꞌ', 'b. Mweeyi', 'c. Xahba'],
    'b',
    '✅ "mweeyi"=dinero, "biꞌtuꞌhn"=pequeño.'
));

// ─── UNIDAD 20: EMOCIONES ───
exercises.push(ex(96, 'Emociones', 'Emociones básicas',
    'Relaciona: Biahxi, Biin, Bidxyihbi, Bidxyiꞌchi',
    ['a. Feliz / Asustado / Triste / Enojado',
        'b. Triste / Feliz / Asustado / Enojado',
        'c. Feliz / Triste / Asustado / Enojado'
    ], 'a',
    '✅ Biahxi=feliz, Biin=asustado, Bidxyihbi=triste, Bidxyiꞌchi=enojado.'
));

exercises.push(ex(97, 'Emociones', 'Estoy feliz',
    'Completa: Biahxi _____. (Estoy feliz)',
    ['a. duxa ba', 'b. duxaꞌhn', 'c. duxa bi'],
    'b',
    '✅ "-ꞌhn"=yo (primera persona). "duxa"=feliz/alegre. "ba"=él, "bi"=ella.'
));

exercises.push(ex(98, 'Emociones', '¿Cómo estás?',
    'Responde: ¿Xixnaa nuu stoꞌ lu\'h? (¿Cómo te sientes?)',
    ['a. Biahxi duxaꞌhn.', 'b. Nuuꞌhuhn loh guihdxyi.', 'c. Rahw naꞌh pahn.'],
    'a',
    '✅ La pregunta es sobre emociones, la respuesta debe describir un estado emocional.'
));

exercises.push(ex(99, 'Emociones', 'Emociones en oraciones',
    'Completa: Ba naa _____. (Él está triste)',
    ['a. biahxi', 'b. bidxyihbi', 'c. biin'],
    'b',
    '✅ "bidxyihbi"=triste, "biahxi"=feliz, "biin"=asustado.'
));

exercises.push(ex(100, 'Emociones', 'Repaso de emociones',
    'Elige: Bi naa _____. (Ella está feliz)',
    ['a. bidxyiꞌchi', 'b. biahxi', 'c. bidxyihbi'],
    'b',
    '✅ "biahxi"=feliz. "bidxyiꞌchi"=enojado, "bidxyihbi"=triste.'
));

// ─── UNIDAD 21: NATURALEZA ───
exercises.push(ex(101, 'Naturaleza', 'Elementos de la naturaleza',
    'Relaciona: Dahan, Guiꞌw, Yahga, Dxiah, Yuh',
    ['a. Montaña / Río / Árbol / Flor / Tierra',
        'b. Río / Montaña / Árbol / Flor / Tierra',
        'c. Montaña / Árbol / Río / Flor / Tierra'
    ], 'a',
    '✅ Dahan=montaña, Guiꞌw=río, Yahga=árbol, Dxiah=flor, Yuh=tierra.'
));

exercises.push(ex(102, 'Naturaleza', 'La montaña',
    'Completa: Dahan naa _____. (La montaña es grande)',
    ['a. rooꞌ', 'b. biꞌtuꞌhn', 'c. bwen'],
    'a',
    '✅ "rooꞌ"=grande, "biꞌtuꞌhn"=pequeño, "bwen"=bueno.'
));

exercises.push(ex(103, 'Naturaleza', 'El río',
    'Traduce: El río es largo.',
    ['a. Guiꞌw naa rooꞌ.', 'b. Guiꞌw naa nahxin.', 'c. Guiꞌw naa bwen.'],
    'a',
    '✅ "guiꞌw"=río, "rooꞌ"=largo/grande. "nahxin"=dulce, "bwen"=bueno.'
));

exercises.push(ex(104, 'Naturaleza', 'El árbol',
    'Completa: _____ naa rooꞌ. (El árbol es grande)',
    ['a. Dahan', 'b. Yahga', 'c. Dxiah'],
    'b',
    '✅ "yahga"=árbol, "dahan"=montaña, "dxiah"=flor.'
));

exercises.push(ex(105, 'Naturaleza', 'Repaso de naturaleza',
    'Elige: _____ (Flor) naa chuhla.',
    ['a. Dahan', 'b. Dxiah', 'c. Guiꞌw'],
    'b',
    '✅ "dxiah"=flor, "chuhla"=bonita. "dahan"=montaña, "guiꞌw"=río.'
));

// ─── UNIDAD 22: TIEMPO ───
exercises.push(ex(106, 'Tiempo', 'Tiempo y días',
    'Relaciona: Nnadxyih, Guillii, Nnaꞌyi',
    ['a. Hoy / Mañana / Ayer', 'b. Mañana / Hoy / Ayer', 'c. Ayer / Hoy / Mañana'],
    'a',
    '✅ Nnadxyih=hoy, Guillii=mañana, Nnaꞌyi=ayer.'
));

exercises.push(ex(107, 'Tiempo', 'Hoy',
    'Completa: _____ gwah naꞌh loh guihdxyi. (Hoy voy a la ciudad)',
    ['a. Guillii', 'b. Nnaꞌyi', 'c. Nnadxyih'],
    'c',
    '✅ "nnadxyih"=hoy, "guillii"=mañana, "nnaꞌyi"=ayer.'
));

exercises.push(ex(108, 'Tiempo', 'Mañana',
    'Traduce: Iré mañana.',
    ['a. Ziaꞌhahn nnaꞌyi.', 'b. Ziaꞌhahn guillii.', 'c. Ziaꞌhahn nnadxyih.'],
    'b',
    '✅ "guillii"=mañana, "ziaꞌhahn"=iré. "nnaꞌyi"=ayer, "nnadxyih"=hoy.'
));

exercises.push(ex(109, 'Tiempo', 'Ayer',
    'Completa: Naꞌh _____ (fui) loh guihdxyi nnaꞌyi.',
    ['a. ziaꞌhahn', 'b. guyaaꞌhahn', 'c. gwah'],
    'b',
    '✅ "guyaaꞌhahn"=fui (pasado). "nnaꞌyi"=ayer.'
));

exercises.push(ex(110, 'Tiempo', 'Repaso de tiempo',
    'Elige: _____ (Ayer) gudahw bi pahn.',
    ['a. Nnadxyih', 'b. Guillii', 'c. Nnaꞌyi'],
    'c',
    '✅ "nnaꞌyi"=ayer, "gudahw"=comió (pasado).'
));

// ─── UNIDAD 23: ACCIONES COTIDIANAS ───
exercises.push(ex(111, 'Rutina', 'Verbros de rutina',
    'Relaciona: Gwastii, Gahw, Gusiꞌdxi, Gwah loh xtsiꞌn',
    ['a. Despertarse / Comer / Aprender / Ir a trabajar',
        'b. Comer / Despertarse / Aprender / Ir a trabajar',
        'c. Aprender / Despertarse / Comer / Ir a trabajar'
    ], 'a',
    '✅ Gwastii=despertarse, Gahw=comer, Gusiꞌdxi=aprender/estudiar, Gwah loh xtsiꞌn=ir a trabajar.'
));

exercises.push(ex(112, 'Rutina', 'Despertarse',
    'Completa: Naꞌh _____ rsiiyidoꞌ. (Yo me despierto temprano)',
    ['a. gahw', 'b. gwastihn', 'c. gusiꞌdxihn'],
    'b',
    '✅ "gwastihn"=me despierto, "rsiiyidoꞌ"=temprano.'
));

exercises.push(ex(113, 'Rutina', 'Comer',
    'Traduce: Ella come pan.',
    ['a. Rahw bi pahn.', 'b. Gwah bi loh xtsiꞌn.', 'c. Gusiꞌdxi bi xchiꞌdxyi.'],
    'a',
    '✅ "rahw"=come, "pahn"=pan, "bi"=ella.'
));

exercises.push(ex(114, 'Rutina', 'Aprender',
    'Completa: Gusiꞌdxihn _____. (Aprendo la palabra)',
    ['a. pahn', 'b. xtsiꞌn', 'c. xchiꞌdxyi'],
    'c',
    '✅ "xchiꞌdxyi"=palabra. Se aprende la palabra/idioma.'
));

exercises.push(ex(115, 'Rutina', 'Repaso de rutina',
    'Elige: _____ (Despertarse) rsiiyidoꞌ.',
    ['a. Gahw', 'b. Gwastii', 'c. Gusiꞌdxi'],
    'b',
    '✅ "gwastii"=despertarse, "rsiiyidoꞌ"=temprano.'
));

// ─── UNIDAD 24: PRONUNCIACIÓN ───
exercises.push(ex(116, 'Pronunciación', 'Vocales',
    'Las vocales del zapoteco suenan como:',
    ['a. Las del español', 'b. Las del inglés', 'c. Son todas nasales'],
    'a',
    '✅ Las vocales del zapoteco son similares al español: a, e, i, o, u.'
));

exercises.push(ex(117, 'Pronunciación', 'Sonido "ch"',
    'Selecciona la palabra con el sonido "ch":',
    ['a. Gwah', 'b. Chaan', 'c. Bwen'],
    'b',
    '✅ "ch" se pronuncia como en español. "Chaan"=hola (empieza con ch).'
));

exercises.push(ex(118, 'Pronunciación', 'Sonido "xh"',
    'Selecciona la palabra con el sonido "xh":',
    ['a. Xahba', 'b. Gwah', 'c. Pahn'],
    'a',
    '✅ "xh" es un sonido único, se pronuncia como una "sh" suave. "Xahba"=ropa.'
));

exercises.push(ex(119, 'Pronunciación', 'Símbolo ꞌ',
    '¿Qué representa el símbolo ꞌ?',
    ['a. Una pausa corta (glotal)', 'b. Una vocal larga', 'c. Una consonante fuerte'],
    'a',
    '✅ El símbolo ꞌ representa una oclusión glotal, una pausa corta en la pronunciación.'
));

exercises.push(ex(120, 'Pronunciación', 'Repaso',
    'Elige la palabra con pronunciación correcta:',
    ['a. Chaan (hola)', 'b. Xaan (no existe)'],
    'a',
    '✅ "Chaan" tiene el sonido "ch" inicial. La pronunciación correcta es "chaan".'
));

// ─── UNIDAD 25: CORTESÍA ───
exercises.push(ex(121, 'Cortesía', 'Expresiones de cortesía',
    'Relaciona: Zuxchiilli lu\'h, Balahsastoꞌ, Bwen duxa',
    ['a. Gracias / Por favor / Adiós',
        'b. Por favor / Gracias / Adiós',
        'c. Adiós / Gracias / Por favor'
    ], 'a',
    '✅ Zuxchiilli lu\'h=gracias, Balahsastoꞌ=por favor/disculpa, Bwen duxa=adiós.'
));

exercises.push(ex(122, 'Cortesía', 'Decir gracias',
    'Completa: _____ (Gracias) lu\'h.',
    ['a. Bwen duxa', 'b. Zuxchiilli', 'c. Balahsastoꞌ'],
    'b',
    '✅ "Zuxchiilli"=gracias. "Bwen duxa"=adiós, "Balahsastoꞌ"=por favor/disculpa.'
));

exercises.push(ex(123, 'Cortesía', 'Pedir por favor',
    'Traduce: Por favor, ayúdame.',
    ['a. Zuxchiilli lu\'h.', 'b. Balahsastoꞌ, gacanee naꞌh.', 'c. Bwen duxa.'],
    'b',
    '✅ "Balahsastoꞌ"=por favor, "gacanee"=ayuda, "naꞌh"=me.'
));

exercises.push(ex(124, 'Cortesía', 'Despedirse',
    'Completa: _____ (Adiós) loh tu.',
    ['a. Zuxchiilli', 'b. Bwen duxa', 'c. Balahsastoꞌ'],
    'b',
    '✅ "Bwen duxa"=adiós. "Zuxchiilli"=gracias, "Balahsastoꞌ"=por favor/disculpa.'
));

exercises.push(ex(125, 'Cortesía', 'Repaso de cortesía',
    'Elige: Alguien te ayuda → _____, pides algo → _____, te despides → _____.',
    ['a. Zuxchiilli lu\'h / Balahsastoꞌ / Bwen duxa',
        'b. Balahsastoꞌ / Zuxchiilli lu\'h / Bwen duxa',
        'c. Bwen duxa / Balahsastoꞌ / Zuxchiilli lu\'h'
    ], 'a',
    '✅ Gracias → "Zuxchiilli lu\'h", Por favor → "Balahsastoꞌ", Adiós → "Bwen duxa".'
));

// ─── UNIDAD 26: HORA Y FECHA ───
exercises.push(ex(126, 'Hora', 'Preguntar la hora',
    'Traduce: ¿Qué hora es?',
    ['a. ¿Xi hohra?', 'b. ¿Chyu naa lu\'h?', 'c. ¿Cannehza nuu?'],
    'a',
    '✅ "Xi"=qué, "hohra"=hora. La opción b pregunta "¿cómo te llamas?".'
));

exercises.push(ex(127, 'Hora', 'Decir la hora',
    'Completa: Hohra naa _____. (Son las tres)',
    ['a. tuhbi', 'b. chiohpa', 'c. chohnna'],
    'c',
    '✅ "chohnna"=tres, "hohra"=hora. "tuhbi"=uno, "chiohpa"=dos.'
));

exercises.push(ex(128, 'Hora', 'Mañana vs tarde',
    'Relaciona: Rsiiyidoꞌ, Xcagaꞌ, Gueꞌla',
    ['a. Mañana / Tarde / Noche', 'b. Tarde / Mañana / Noche', 'c. Noche / Tarde / Mañana'],
    'a',
    '✅ Rsiiyidoꞌ=mañana (temprano), Xcagaꞌ=tarde, Gueꞌla=noche.'
));

exercises.push(ex(129, 'Hora', 'Preguntar el día',
    'Traduce: ¿Qué día es hoy?',
    ['a. ¿Xi dxyih nnadxyih?', 'b. ¿Xi hohra?', 'c. ¿Cannehza nuu?'],
    'a',
    '✅ "Xi dxyih"=qué día, "nnadxyih"=hoy. La opción b pregunta "¿qué hora es?".'
));

exercises.push(ex(130, 'Hora', 'Repaso de hora',
    'Elige: ¿Xi hohra? → Hohra naa _____. (Son las dos)',
    ['a. tuhbi', 'b. chiohpa', 'c. chohnna'],
    'b',
    '✅ "chiohpa"=dos, "hohra"=hora. "tuhbi"=uno, "chohnna"=tres.'
));

// ─── UNIDAD 27: ANIMALES ───
exercises.push(ex(131, 'Animales', 'Animales básicos',
    'Relaciona: Ma, Guun, Bwe\'lda, Bwecu',
    ['a. Caballo / Oveja / Perro / Pájaro',
        'b. Oveja / Caballo / Perro / Pájaro',
        'c. Caballo / Perro / Oveja / Pájaro'
    ], 'a',
    '✅ Ma=caballo, Guun=oveja, Bwe\'lda=perro, Bwecu=pájaro.'
));

exercises.push(ex(132, 'Animales', 'El caballo',
    'Completa: Ma naa _____. (El caballo es grande)',
    ['a. rooꞌ', 'b. biꞌtuꞌhn', 'c. bwen'],
    'a',
    '✅ "rooꞌ"=grande. "biꞌtuꞌhn"=pequeño, "bwen"=bueno.'
));

exercises.push(ex(133, 'Animales', 'La oveja',
    'Traduce: La oveja es blanca.',
    ['a. Guun naa labweh.', 'b. Ma naa labweh.', 'c. Bwecu naa labweh.'],
    'a',
    '✅ "guun"=oveja, "labweh"=blanca. "ma"=caballo, "bwecu"=pájaro.'
));

exercises.push(ex(134, 'Animales', 'El perro',
    'Completa: _____ naa xamihgu. (El perro es amigo)',
    ['a. Bwecu', 'b. Bwe\'lda', 'c. Guun'],
    'b',
    '✅ "bwe\'lda"=perro, "xamihgu"=amigo. "bwecu"=pájaro, "guun"=oveja.'
));

exercises.push(ex(135, 'Animales', 'Repaso de animales',
    'Elige: _____ (Pájaro) naa rzah.',
    ['a. Ma', 'b. Bwecu', 'c. Guun'],
    'b',
    '✅ "bwecu"=pájaro, "rzah"=vuela. "ma"=caballo, "guun"=oveja.'
));

// ─── UNIDAD 28: PROFESIONES ───
exercises.push(ex(136, 'Profesiones', 'Profesiones básicos',
    'Relaciona: Mwehsu, Estudiante, Bixohza, Xpwiinn',
    ['a. Maestro / Estudiante / Sacerdote / Seguidor',
        'b. Estudiante / Maestro / Sacerdote / Seguidor',
        'c. Maestro / Estudiante / Seguidor / Sacerdote'
    ], 'a',
    '✅ Mwehsu=maestro, Estudiante=estudiante, Bixohza=sacerdote, Xpwiinn=seguidor/discípulo.'
));

exercises.push(ex(137, 'Profesiones', 'El maestro',
    'Completa: Ba naa tuhbi _____. (Él es un maestro)',
    ['a. estudiante', 'b. mwehsu', 'c. bixohza'],
    'b',
    '✅ "mwehsu"=maestro, "estudiante"=estudiante, "bixohza"=sacerdote.'
));

exercises.push(ex(138, 'Profesiones', 'El estudiante',
    'Traduce: Soy estudiante.',
    ['a. Naꞌh naan tuhbi mwehsu.', 'b. Naꞌh naan tuhbi estudiante.', 'c. Naꞌh naan tuhbi bixohza.'],
    'b',
    '✅ "naan"=soy, "estudiante"=estudiante. "mwehsu"=maestro, "bixohza"=sacerdote.'
));

exercises.push(ex(139, 'Profesiones', 'El sacerdote',
    'Completa: Ba naa tuhbi _____. (Él es un sacerdote)',
    ['a. mwehsu', 'b. estudiante', 'c. bixohza'],
    'c',
    '✅ "bixohza"=sacerdote. "mwehsu"=maestro, "estudiante"=estudiante.'
));

exercises.push(ex(140, 'Profesiones', 'Repaso de profesiones',
    'Elige: Gusiꞌdxi ba xchiꞌdxyi. Ba naa _____. (Él enseña, es maestro)',
    ['a. estudiante', 'b. mwehsu', 'c. bixohza'],
    'b',
    '✅ "mwehsu" enseña. "estudiante" aprende, "bixohza" realiza servicios religiosos.'
));

// ─── UNIDAD 29: COMPARACIONES ───
exercises.push(ex(141, 'Comparaciones', 'Comparativos básicos',
    'Relaciona: -ru, Bwen-ru, Loh',
    ['a. Más que / Mejor que / Que (en comparación)',
        'b. Mejor que / Más que / Que (en comparación)',
        'c. Que / Más que / Mejor que'
    ], 'a',
    '✅ "-ru"=más que, "bwen-ru"=mejor que, "loh"=que (en comparación).'
));

exercises.push(ex(142, 'Comparaciones', 'Comparar personas',
    'Completa: Ba lasahca ru _____ naꞌh. (Él es más grande que yo)',
    ['a. cun', 'b. loh', 'c. per'],
    'b',
    '✅ "loh"=que (en comparación). Estructura: sujeto + adjetivo + ru + loh + objeto.'
));

exercises.push(ex(143, 'Comparaciones', 'Mejor que',
    'Traduce: El pan es mejor que el pescado.',
    ['a. Pahn bwen ru loh bwehlda.', 'b. Pahn dxaaba ru loh bwehlda.', 'c. Pahn bwen cun bwehlda.'],
    'a',
    '✅ "bwen ru"=mejor que, "loh"=que. La opción b dice "pan es peor que pescado".'
));

exercises.push(ex(144, 'Comparaciones', 'Más que',
    'Completa: Guihdxyi rooꞌ ru _____ rraandxu. (La ciudad es más grande que el pueblo)',
    ['a. loh', 'b. cun', 'c. per'],
    'a',
    '✅ "loh"=que, "rooꞌ ru"=más grande. Estructura: sujeto + adjetivo + ru + loh + comparado.'
));

exercises.push(ex(145, 'Comparaciones', 'Repaso de comparaciones',
    'Elige: María bwen ru loh Joseh. →',
    ['a. María es mejor que José', 'b. María es peor que José', 'c. María y José son buenos'],
    'a',
    '✅ "bwen ru"=mejor que, "loh"=que. La opción b sería "María dxaaba ru loh Joseh".'
));

// ─── UNIDAD 30: DIÁLOGOS ───
exercises.push(ex(146, 'Diálogos', 'Diálogo de presentación',
    'Completa: A: ¡Chaan! ¿Xixnaa nuu _____? B: Nuuꞌhuhn bwen. ¿Chyu naa _____?',
    ['a. lu\'h / lu\'h', 'b. bwen / lu\'h', 'c. lu\'h / bwen'],
    'a',
    '✅ "lu\'h"=tú (en preguntas). "naa lu\'h"=te llamas. "Bwen duxa"=adiós al final.'
));

exercises.push(ex(147, 'Diálogos', 'Diálogo de ubicación',
    'Traduce: A: ¿Dónde está la ciudad? B: La ciudad está allí. A: ¿Está lejos? B: No, está cerca.',
    ['a. ¿Cannehza nuu guihdxyi? / Guihdxyi nuu riꞌchi. / ¿Ta zihtu? / Coh, nahxu.',
        'b. ¿Cannehza nuu guihdxyi? / Guihdxyi nuu riiꞌ. / ¿Ta zihtu? / Uhn, zihtu.'
    ], 'a',
    '✅ "riꞌchi"=allí, "zihtu"=lejos, "nahxu"=cerca, "Coh"=no.'
));

exercises.push(ex(148, 'Diálogos', 'Diálogo de comida',
    'Completa: A: ¿Xi _____ lu\'h? B: Rahw naꞌh pahn cun bwehlda.',
    ['a. rahw', 'b. reeꞌ', 'c. naa'],
    'a',
    '✅ "rahw"=comes (comida sólida). "reeꞌ"=bebes, "naa"=es.'
));

exercises.push(ex(149, 'Diálogos', 'Diálogo de familia',
    'Traduce: A: ¿Quién es ella? B: Ella es mi madre. A: ¿Cómo se llama? B: Se llama María.',
    ['a. ¿Chyu naa bi? / Bi naa xmaa\'hn. / ¿Chyu naa bi? / Lah bi naa María.',
        'b. ¿Chyu naa ba? / Ba naa xmaa\'hn. / ¿Chyu naa bi? / Lah bi naa María.'
    ], 'a',
    '✅ "bi"=ella, "xmaa\'hn"=mi madre, "Lah bi"=su nombre.'
));

exercises.push(ex(150, 'Diálogos', 'Repaso de diálogos',
    'Elige: ¿Cannehza nuu guihdxyi? → _____ (Allí)',
    ['a. Nuu riiꞌ.', 'b. Nuu riꞌchi.', 'c. Nuu loh.'],
    'b',
    '✅ "riꞌchi"=allí. "riiꞌ"=aquí, "loh"=en (preposición).'
));

// ─── UNIDAD 31: NEGACIÓN EN CONTEXTOS ───
exercises.push(ex(151, 'Negación contexto', 'Negar con "ayi"',
    'Completa: Ayi _____ bwiinn. (No hay personas)',
    ['a. nuu', 'b. gwah', 'c. rahw'],
    'a',
    '✅ "ayi nuu"=no hay. "gwah"=va, "rahw"=come.'
));

exercises.push(ex(152, 'Negación contexto', 'Negar acciones diarias',
    'Haz negativa: Rahw bi pahn. → _____',
    ['a. Ayi rahw bi pahn.', 'b. Rahw bi ayi pahn.', 'c. Pahn ayi rahw bi.'],
    'a',
    '✅ Se añade "ayi" antes del verbo. La estructura se mantiene igual.'
));

exercises.push(ex(153, 'Negación contexto', '"No" como respuesta',
    'Responde negativamente: ¿Ta gwah lu\'h loh guihdxyi?',
    ['a. Uhn, gwah.', 'b. Coh, ayi gwah.', 'c. Ziꞌchi, gwah.'],
    'b',
    '✅ "Coh"=no, "Uhn"=sí, "Ziꞌchi"=sí/ciertamente. La negación usa "Coh, ayi..."'
));

exercises.push(ex(154, 'Negación contexto', 'Negar en pasado',
    'Traduce: No fui a la ciudad.',
    ['a. Ayi gwah naꞌh loh guihdxyi.', 'b. Ayi guyaaꞌhahn loh guihdxyi.', 'c. Gwah naꞌh loh guihdxyi.'],
    'b',
    '✅ "guyaaꞌhahn"=fui (pasado). "ayi" + verbo en pasado = no + acción pasada.'
));

exercises.push(ex(155, 'Negación contexto', 'Repaso de negación',
    'Elige la oración negativa correcta:',
    ['a. Ayi rahw bi pahn.', 'b. Rahw bi ayi pahn.', 'c. Pahn ayi rahw bi.'],
    'a',
    '✅ "ayi" siempre va antes del verbo. Orden: ayi + verbo + sujeto + objeto.'
));

// ─── UNIDAD 32: PREGUNTAS CON "¿POR QUÉ?" ───
exercises.push(ex(156, 'Por qué', 'Preguntar por qué',
    'Traduce: ¿Por qué vas?',
    ['a. ¿Xixnaa gwah lu\'h?', 'b. ¿Chyu gwah lu\'h?', 'c. ¿Cannehza gwah lu\'h?'],
    'a',
    '✅ "Xixnaa"=por qué, "gwah"=vas. "Chyu"=quién, "Cannehza"=dónde.'
));

exercises.push(ex(157, 'Por qué', 'Responder a "por qué"',
    'Completa: Gwah naꞌh _____ (porque) xclaaꞌdzi naꞌh.',
    ['a. cun', 'b. per', 'c. laasii'],
    'c',
    '✅ "laasii"=porque. "cun"=y, "per"=pero. Se usa "laasii" para dar la razón.'
));

exercises.push(ex(158, 'Por qué', 'Preguntas sobre acciones',
    'Traduce: ¿Por qué comes pan?',
    ['a. ¿Xi rahw lu\'h pahn?', 'b. ¿Xixnaa rahw lu\'h pahn?', 'c. ¿Cannehza rahw lu\'h pahn?'],
    'b',
    '✅ "Xixnaa"=por qué, "rahw"=comes. "Xi"=qué, "Cannehza"=dónde.'
));

exercises.push(ex(159, 'Por qué', 'Dar razones',
    'Completa: Rahw naꞌh pahn _____ (porque) bichiaꞌhan naꞌh.',
    ['a. laasii', 'b. cun', 'c. per'],
    'a',
    '✅ "laasii" introduce una razón. "cun"=y, "per"=pero.'
));

exercises.push(ex(160, 'Por qué', 'Repaso de "por qué"',
    'Elige la pregunta: _____ (¿Por qué?) → Laasii xclaaꞌdzi naꞌh.',
    ['a. ¿Chyu?', 'b. ¿Xixnaa?', 'c. ¿Cannehza?'],
    'b',
    '✅ "Xixnaa"=por qué. La respuesta da una razón, la pregunta debe ser "por qué".'
));

// ─── UNIDAD 33: CANTIDADES ───
exercises.push(ex(161, 'Cantidades', 'Cantidades básicas',
    'Relaciona: Ziahan, Guriin, Gulla, Gahdzi',
    ['a. Algunos / Pocos / Muchos / Cuántos',
        'b. Muchos / Pocos / Algunos / Cuántos',
        'c. Algunos / Muchos / Pocos / Cuántos'
    ], 'a',
    '✅ Ziahan=algunos, Guriin=pocos, Gulla=muchos, Gahdzi=cuántos (pregunta).'
));

exercises.push(ex(162, 'Cantidades', 'Preguntar cantidades',
    'Traduce: ¿Cuántos panes hay?',
    ['a. ¿Paaldaa pahn nuu?', 'b. ¿Xi pahn nuu?', 'c. ¿Cannehza pahn nuu?'],
    'a',
    '✅ "Paaldaa"=cuántos, "nuu"=hay. "Xi"=qué, "Cannehza"=dónde.'
));

exercises.push(ex(163, 'Cantidades', 'Muchos',
    'Completa: Nuu _____ bwiinn. (Hay muchas personas)',
    ['a. guriin', 'b. gulla', 'c. gahdzi'],
    'b',
    '✅ "gulla"=muchos. "guriin"=pocos, "gahdzi"=cuántos (pregunta).'
));

exercises.push(ex(164, 'Cantidades', 'Pocos',
    'Traduce: Hay pocos niños.',
    ['a. Nuu gahdzi biñiꞌn.', 'b. Nuu guriin biñiꞌn.', 'c. Nuu gulla biñiꞌn.'],
    'b',
    '✅ "guriin"=pocos, "biñiꞌn"=niños. "gulla"=muchos, "gahdzi"=cuántos.'
));

exercises.push(ex(165, 'Cantidades', 'Repaso de cantidades',
    'Elige: Nuu _____ (algunos) dxihtsi.',
    ['a. guriin', 'b. ziahan', 'c. gulla'],
    'b',
    '✅ "ziahan"=algunos. "guriin"=pocos, "gulla"=muchos.'
));

// ─── UNIDAD 34: ESTAR Y HABER ───
exercises.push(ex(166, 'Estar', 'Usar "nuu" (estar/haber)',
    'Completa: Nuuꞌhuhn _____ loh guihdxyi. (Estoy en la ciudad)',
    ['a. nuu', 'b. gwah', 'c. rahw'],
    'a',
    '✅ "nuu"=estar (ubicación). "gwah"=ir, "rahw"=comer.'
));

exercises.push(ex(167, 'Estar', 'Preguntar ubicación',
    'Traduce: ¿Dónde estás?',
    ['a. ¿Cannehza nuu lu\'h?', 'b. ¿Chyu naa lu\'h?', 'c. ¿Xi ruhnn lu\'h?'],
    'a',
    '✅ "Cannehza"=dónde, "nuu"=estás, "lu\'h"=tú.'
));

exercises.push(ex(168, 'Estar', 'Hay en zapoteco',
    'Completa: _____ bwiinn. (Hay personas)',
    ['a. Nuu', 'b. Gwah', 'c. Rahw'],
    'a',
    '✅ "nuu"=hay (existencia). "bwiinn"=personas.'
));

exercises.push(ex(169, 'Estar', 'Negar existencia',
    'Traduce: No hay agua.',
    ['a. Ayi nuu ñihsa.', 'b. Nuu ñihsa.', 'c. Ayi gwah ñihsa.'],
    'a',
    '✅ "ayi nuu"=no hay, "ñihsa"=agua. La opción b es afirmativa ("hay agua").'
));

exercises.push(ex(170, 'Estar', 'Repaso de "estar" y "haber"',
    'Elige: ¿Cannehza _____ (está) xquidoꞌ?',
    ['a. nuu', 'b. gwah', 'c. rahw'],
    'a',
    '✅ "nuu"=está (ubicación). La pregunta es sobre ubicación.'
));

// ─── UNIDAD 35: FRASES ÚTILES ───
exercises.push(ex(171, 'Frases', 'Frases de cortesía',
    'Relaciona: Zuxchiilli lu\'h, Balahsastoꞌ, Ayi xi',
    ['a. Gracias / Disculpa / De nada', 'b. Disculpa / Gracias / De nada', 'c. Gracias / De nada / Disculpa'],
    'a',
    '✅ Zuxchiilli lu\'h=gracias, Balahsastoꞌ=disculpa/por favor, Ayi xi=de nada.'
));

exercises.push(ex(172, 'Frases', 'De nada',
    'Completa: A: Zuxchiilli lu\'h. B: _____ (De nada)',
    ['a. Bwen duxa', 'b. Ayi xi', 'c. Chaan'],
    'b',
    '✅ "Ayi xi"=de nada. "Bwen duxa"=adiós, "Chaan"=hola.'
));

exercises.push(ex(173, 'Frases', 'Disculparse',
    'Traduce: Disculpa, ¿dónde está la casa?',
    ['a. Balahsastoꞌ, ¿cannehza nuu yuuꞌ?', 'b. Zuxchiilli lu\'h, ¿cannehza nuu yuuꞌ?', 'c. Bwen duxa, ¿cannehza nuu yuuꞌ?'],
    'a',
    '✅ "Balahsastoꞌ"=disculpa. "Zuxchiilli"=gracias, "Bwen duxa"=adiós.'
));

exercises.push(ex(174, 'Frases', 'Entender',
    'Completa: Ayi _____. (No entiendo)',
    ['a. rahcabwaꞌn', 'b. gwah', 'c. rahw'],
    'a',
    '✅ "rahcabwaꞌn"=entiendo. "Ayi rahcabwaꞌn"=no entiendo.'
));

exercises.push(ex(175, 'Frases', 'Repaso de frases útiles',
    'Elige: Alguien te da algo → _____ , no entiendes → _____ , te disculpas → _____.',
    ['a. Zuxchiilli lu\'h / Ayi rahcabwaꞌn / Balahsastoꞌ',
        'b. Balahsastoꞌ / Zuxchiilli lu\'h / Ayi rahcabwaꞌn',
        'c. Ayi rahcabwaꞌn / Balahsastoꞌ / Zuxchiilli lu\'h'
    ], 'a',
    '✅ Gracias → "Zuxchiilli lu\'h", No entiendo → "Ayi rahcabwaꞌn", Disculpa → "Balahsastoꞌ".'
));

// ─── UNIDAD 36: DESCRIBIR PERSONAS ───
exercises.push(ex(176, 'Descripción', 'Descripción física',
    'Relaciona: Rooꞌ, Biꞌtuꞌhn, Bwen, Chuhla',
    ['a. Grande / Pequeño / Bueno / Bonito', 'b. Pequeño / Grande / Bueno / Bonito', 'c. Grande / Pequeño / Bonito / Bueno'],
    'a',
    '✅ Rooꞌ=grande, Biꞌtuꞌhn=pequeño, Bwen=bueno, Chuhla=bonito.'
));

exercises.push(ex(177, 'Descripción', 'Describir a una persona',
    'Completa: Ba naa tuhbi ndxiꞌhw _____. (Él es un hombre bueno)',
    ['a. chuhla', 'b. rooꞌ', 'c. bwen'],
    'c',
    '✅ "bwen"=bueno (cualidad). "chuhla"=bonito, "rooꞌ"=grande.'
));

exercises.push(ex(178, 'Descripción', 'Preguntar por apariencia',
    'Traduce: ¿Cómo es ella?',
    ['a. ¿Xixnaa naa bi?', 'b. ¿Chyu naa bi?', 'c. ¿Cannehza nuu bi?'],
    'a',
    '✅ "Xixnaa"=cómo, "naa"=es, "bi"=ella. La opción b pregunta "¿quién es ella?".'
));

exercises.push(ex(179, 'Descripción', 'Descripción de altura',
    'Completa: Ba naa _____. (Él es alto)',
    ['a. rooꞌ', 'b. biꞌtuꞌhn', 'c. bwen'],
    'a',
    '✅ "rooꞌ"=alto/grande, "biꞌtuꞌhn"=bajo/pequeño.'
));

exercises.push(ex(180, 'Descripción', 'Repaso de descripciones',
    'Elige: Bi naa tuhbi gunnaꞌh _____. (Ella es una mujer bonita)',
    ['a. chuhla', 'b. bwen', 'c. rooꞌ'],
    'a',
    '✅ "chuhla"=bonita/guapa (apariencia física). "bwen"=buena (cualidad).'
));

// ─── UNIDAD 37: ACTIVIDADES ───
exercises.push(ex(181, 'Actividades', 'Actividades diarias',
    'Relaciona: Estudiar, Trabajar, Comer, Ir',
    ['a. Gusiꞌdxi / Gwah loh xtsiꞌn / Gahw / Gwah',
        'b. Gwah loh xtsiꞌn / Gusiꞌdxi / Gahw / Gwah',
        'c. Gusiꞌdxi / Gahw / Gwah loh xtsiꞌn / Gwah'
    ], 'a',
    '✅ Gusiꞌdxi=estudiar, Gwah loh xtsiꞌn=trabajar, Gahw=comer, Gwah=ir.'
));

exercises.push(ex(182, 'Actividades', 'Preguntar qué haces',
    'Traduce: ¿Qué haces?',
    ['a. ¿Xi ruhnn lu\'h?', 'b. ¿Xi gwah lu\'h?', 'c. ¿Xi rahw lu\'h?'],
    'a',
    '✅ "ruhnn"=haces. "gwah"=vas, "rahw"=comes. La pregunta general es sobre la actividad.'
));

exercises.push(ex(183, 'Actividades', 'Estudiar',
    'Completa: Gusiꞌdxihn _____. (Estudio la palabra)',
    ['a. pahn', 'b. xtsiꞌn', 'c. xchiꞌdxyi'],
    'c',
    '✅ "xchiꞌdxyi"=palabra/idioma. Se estudia la palabra/idioma.'
));

exercises.push(ex(184, 'Actividades', 'Trabajar',
    'Traduce: Él trabaja.',
    ['a. Ruhnn ba xtsiꞌn.', 'b. Gwah ba loh xtsiꞌn.', 'c. Gusiꞌdxi ba.'],
    'a',
    '✅ "ruhnn"=hace/realiza, "xtsiꞌn"=trabajo. La opción b es "va a trabajar".'
));

exercises.push(ex(185, 'Actividades', 'Repaso de actividades',
    'Elige: _____ (Estudio) xchiꞌdxyi Dxiohs.',
    ['a. Gwah', 'b. Gusiꞌdxihn', 'c. Ruhnn'],
    'b',
    '✅ "Gusiꞌdxihn"=estudio. "Gwah"=voy, "Ruhnn"=hago.'
));

// ─── UNIDAD 38: LUGARES ───
exercises.push(ex(186, 'Lugares', 'Lugares comunes',
    'Relaciona: Guihdxyi, Xquidoꞌ, Yuuꞌ, Dahan',
    ['a. Ciudad / Templo / Casa / Montaña', 'b. Templo / Ciudad / Casa / Montaña', 'c. Ciudad / Casa / Templo / Montaña'],
    'a',
    '✅ Guihdxyi=ciudad, Xquidoꞌ=templo, Yuuꞌ=casa, Dahan=montaña.'
));

exercises.push(ex(187, 'Lugares', 'Ir a lugares',
    'Completa: Gwah naꞌh loh _____. (Voy a la ciudad)',
    ['a. xquidoꞌ', 'b. guihdxyi', 'c. yuuꞌ'],
    'b',
    '✅ "guihdxyi"=ciudad. "xquidoꞌ"=templo, "yuuꞌ"=casa.'
));

exercises.push(ex(188, 'Lugares', 'Preguntar por lugares',
    'Traduce: ¿Dónde está el templo?',
    ['a. ¿Cannehza nuu xquidoꞌ?', 'b. ¿Cannehza nuu guihdxyi?', 'c. ¿Cannehza nuu yuuꞌ?'],
    'a',
    '✅ "xquidoꞌ"=templo. "guihdxyi"=ciudad, "yuuꞌ"=casa.'
));

exercises.push(ex(189, 'Lugares', 'Casa',
    'Completa: Nuuꞌhuhn loh _____. (Estoy en casa)',
    ['a. guihdxyi', 'b. yuu\'hn', 'c. xquidoꞌ'],
    'b',
    '✅ "yuu\'hn"=mi casa. "-hn"=mi (posesivo).'
));

exercises.push(ex(190, 'Lugares', 'Repaso de lugares',
    'Elige: Gwah naꞌh loh _____ (al templo).',
    ['a. guihdxyi', 'b. xquidoꞌ', 'c. yuuꞌ'],
    'b',
    '✅ "xquidoꞌ"=templo. "guihdxyi"=ciudad, "yuuꞌ"=casa.'
));

// ─── UNIDAD 39: VERBOS IRREGULARES ───
exercises.push(ex(191, 'Verbos irregulares', 'Verbo "ir" presente',
    'Completa: Naꞌh _____ loh guihdxyi. (Yo voy a la ciudad)',
    ['a. gwah', 'b. guyaaꞌhahn', 'c. ziaꞌhahn'],
    'a',
    '✅ "gwah"=voy (presente). "guyaaꞌhahn"=fui (pasado), "ziaꞌhahn"=iré (futuro).'
));

exercises.push(ex(192, 'Verbos irregulares', 'Verbo "ser" presente',
    'Completa: Naꞌh _____ tuhbi estudiante. (Yo soy un estudiante)',
    ['a. naa', 'b. naan', 'c. naaꞌ'],
    'b',
    '✅ "naan"=soy (yo). "naa"=es (él/ella). La primera persona usa "naan".'
));

exercises.push(ex(193, 'Verbos irregulares', 'Verbo "estar"',
    'Completa: Nuuꞌhuhn _____ loh guihdxyi. (Estoy en la ciudad)',
    ['a. nuu', 'b. gwah', 'c. naan'],
    'a',
    '✅ "nuu"=estar (ubicación). "gwah"=ir, "naan"=ser.'
));

exercises.push(ex(194, 'Verbos irregulares', 'Repaso de verbos irregulares',
    'Elige: Ba _____ (es) tuhbi mwehsu.',
    ['a. naa', 'b. nuu', 'c. gwah'],
    'a',
    '✅ "naa"=es (él/ella). "nuu"=está (ubicación), "gwah"=va.'
));

exercises.push(ex(195, 'Verbos irregulares', 'Repaso final de verbos',
    'Elige: 1. Naꞌh _____ (soy) estudiante. 2. Ba _____ (está) loh xquidoꞌ. 3. Bi _____ (va) loh guihdxyi.',
    ['a. naan / nuu / gwah', 'b. naa / nuu / gwah', 'c. naan / gwah / nuu'],
    'a',
    '✅ naan=soy (1ª persona "ser"), nuu=está (3ª persona "estar"), gwah=va (3ª persona "ir").'
));

// ─── UNIDAD 40: REPASO FINAL ───
exercises.push(ex(196, 'Repaso final', 'Saludos y presentaciones',
    'Completa: A: ¡Chaan! ¿Xixnaa nuu _____? B: Nuuꞌhuhn _____. A: ¿Chyu _____ lu\'h?',
    ['a. lu\'h / bwen / naa', 'b. bwen / lu\'h / naa', 'c. lu\'h / naa / bwen'],
    'a',
    '✅ "lu\'h"=tú (en preguntas), "bwen"=bien (respuesta), "naa"=es (preguntar nombre).'
));

exercises.push(ex(197, 'Repaso final', 'Preguntas y respuestas',
    'Relaciona: ¿Cannehza nuu guihdxyi? / ¿Chyu naa lu\'h? / ¿Xixnaa nuu lu\'h?',
    ['a. Nuu loh dahan / Naꞌh naan Joseh / Nuuꞌhuhn bwen',
        'b. Naꞌh naan Joseh / Nuu loh dahan / Nuuꞌhuhn bwen'
    ], 'a',
    '✅ ¿Dónde? → ubicación, ¿Quién? → nombre, ¿Cómo? → estado.'
));

exercises.push(ex(198, 'Repaso final', 'Familia',
    'Completa: 1. Xtaadaꞌhn naa _____. 2. Xmaa\'hn naa _____. 3. Bwihtsi ba naa _____.',
    ['a. Joseh / María / Pehdru', 'b. María / Joseh / Pehdru', 'c. Pehdru / María / Joseh'],
    'a',
    '✅ Xtaadaꞌhn=mi padre, Xmaa\'hn=mi madre, Bwihtsi=hermano.'
));

exercises.push(ex(199, 'Repaso final', 'Verbos en contexto',
    'Completa: 1. Naꞌh _____ (voy) loh guihdxyi. 2. Ba _____ (come) pahn. 3. Bi _____ (habla) xchiꞌdxyi.',
    ['a. gwah / rahw / guñiꞌ', 'b. rahw / gwah / guñiꞌ', 'c. guñiꞌ / gwah / rahw'],
    'a',
    '✅ gwah=ir, rahw=comer, guñiꞌ=hablar. Cada verbo describe una acción diferente.'
));

exercises.push(ex(200, 'Repaso final', 'Frases completas',
    'Traduce: 1. Buenas tardes, ¿cómo estás? 2. Mi padre es un hombre bueno.',
    ['a. Bwen duxa xcagaꞌ, ¿Xixnaa nuu lu\'h? / Xtaa\'da\'hn naa tuhbi ndxiꞌhw bwen.',
        'b. Bwen duxa, ¿Xixnaa nuu lu\'h? / Xtaa\'da\'hn naa tuhbi ndxiꞌhw bwen.'
    ], 'a',
    '✅ "xcagaꞌ"=tarde. Se combinan los elementos aprendidos. "Bwen duxa"=adiós, usado también como "buenas".'
));
// ==========================================
// TUS EJERCICIOS (NIVEL A1: 1 - 200) REFACTORIZADOS
// ==========================================

const EXERCISES_A1_RAW = [
    [1, "Saludos", "Saludos básicos", "¿Qué significa el saludo 'Chaan'?", ["a. Adiós", "b. Hola", "c. Gracias"], "b", "Chaan es el saludo informal (Hola)."],
    [2, "Saludos", "Responder saludos", "Completa: Nuuꞌhuhn _____ (Estoy bien).", ["a. bwen", "b. lu'h", "c. chaan"], "a", "bwen = bien"],
    [3, "Saludos", "Preguntar el nombre", "¿Cómo te llamas?", ["a. ¿Chyu naa lu'h?", "b. ¿Xixnaa nuu lu'h?", "c. ¿Cannehza ze' lu'h?"], "a", "Chyu = quién, naa = es/nombre"],
    [4, "Saludos", "Presentarse", "Completa: Naꞌh naan _____ (Yo me llamo María).", ["a. María", "b. Bwen", "c. Lu'h"], "a", "Naꞌh naan = yo me llamo"],
    [5, "Saludos", "Despedidas", "¿Cómo se dice 'Adiós'?", ["a. Bwen duxa", "b. Ziꞌchi gaca pwihsi", "c. Chaan"], "a", "Bwen duxa es la despedida más común."],
    
    [6, "Números", "Números 1-5", "¿Cómo se dice el número 'Tres' en zapoteco?", ["a. Chohnna", "b. Chiohpa", "c. Tahpa"], "a", "Chohnna = 3"],
    [7, "Números", "Números 6-10", "¿Cómo se dice el número 'Siete' en zapoteco?", ["a. Gahdzi", "b. Xo'pa", "c. Tsi'ñu"], "a", "Gahdzi = 7"],
    [8, "Números", "Contar personas", "Completa: Guyuuꞌ _____ bwiinn. (Hay tres personas)", ["a. chiohpa", "b. chohnna", "c. tuhbi"], "b", "chohnna = 3"],
    [9, "Números", "Contar objetos", "¿Cómo dirías 'Cuatro panes'?", ["a. Tahpa pahn", "b. Chiohpa pahn", "c. Ga'yu pahn"], "a", "Tahpa = 4, pahn = pan"],
    [10, "Números", "Preguntar edad", "Traduce: ¿Cuántos años tienes?", ["a. ¿Paaldaa yihza?", "b. ¿Chyu naa lu'h?", "c. ¿Cannehza nuu?"], "a", "Paaldaa = cuántos, yihza = años."],
    
    [11, "Familia", "Miembros", "¿Qué significa 'Xtaada'?", ["a. Padre", "b. Madre", "c. Hermano"], "a", "Xtaada = padre"],
    [12, "Familia", "Mi padre", "Completa: _____ naa Joseh. (Mi padre es José)", ["a. Xtaa'da'hn", "b. Xmaa'hn", "c. Llii'n"], "a", "Xtaada + hn = mi padre"],
    [13, "Familia", "Mi madre", "Traduce: Ella es mi madre.", ["a. Bi naa xmaa'hn.", "b. Bi naa xmaah ba.", "c. Bi naa xmaah lu'h."], "a", "xmaa'hn = mi madre"],
    [14, "Familia", "Hermano", "Pedro y Andrés son hermanos:", ["a. Pehdru cun Andrehs naa raꞌ bwihtsi.", "b. Pehdru cun Andrehs naa ra' xtaada.", "c. Pehdru cun Andrehs naa ra' xmaah."], "a", "bwihtsi = hermano"],
    [15, "Familia", "Posesivos", "¿Qué sufijo indica posesión 'mi' (1ª persona)?", ["a. -hn", "b. -lu'h", "c. -ba"], "a", "-hn = mi (Ej. xtaada'hn)"],

    [16, "Verbos", "Verbo 'ir'", "Completa: Naꞌh _____ loh guihdxyi. (Yo voy a la ciudad)", ["a. gwah", "b. rahw", "c. guñiꞌ"], "a", "gwah = voy/ir"],
    [17, "Verbos", "Verbo 'comer'", "Completa: Bi _____ pahn. (Ella come pan)", ["a. rahw", "b. gwah", "c. guñiꞌ"], "a", "rahw = come/comer"],
    [18, "Verbos", "Verbo 'hablar'", "Completa: Ba _____ xchiꞌdxyi. (Él habla la palabra)", ["a. guñiꞌ", "b. rahw", "c. gwah"], "a", "guñiꞌ = habla"],
    [19, "Verbos", "Verbo 'hacer'", "Completa: Ruhnn naꞌh _____ zaꞌca. (Hago buen trabajo)", ["a. xtsiꞌn", "b. pahn", "c. guihdxyi"], "a", "xtsiꞌn = trabajo"],
    [20, "Verbos", "En contexto", "Completa: Naꞌh _____ xchiꞌdxyi. (Yo hablo la palabra)", ["a. guñiꞌ", "b. gwah", "c. rahw"], "a", "guñi' = hablar"],

    [21, "Preguntas", "¿Dónde?", "Traduce: ¿Dónde está la ciudad?", ["a. ¿Cannehza nuu guihdxyi?", "b. ¿Chyu naa guihdxyi?", "c. ¿Xi nuu guihdxyi?"], "a", "Cannehza = dónde"],
    [22, "Preguntas", "¿Qué?", "Traduce: ¿Qué es esto?", ["a. ¿Xi niꞌca?", "b. ¿Chyu niꞌca?", "c. ¿Cannehza niꞌca?"], "a", "Xi = qué"],
    [23, "Preguntas", "¿Quién?", "Traduce: ¿Quién es él?", ["a. ¿Chyu naa ba?", "b. ¿Xi naa ba?", "c. ¿Cannehza naa ba?"], "a", "Chyu = quién"],
    [24, "Preguntas", "¿Cómo?", "Traduce: ¿Cómo estás?", ["a. ¿Xixnaa nuu lu\'h?", "b. ¿Chyu naa lu\'h?", "c. ¿Cannehza nuu lu\'h?"], "a", "Xixnaa = cómo"],
    [25, "Preguntas", "Respuestas", "¿Qué respondes a '¿Chyu naa lu'h?' (¿Quién eres?)", ["a. Na'h naan María", "b. Nuu'huhn bwen", "c. Nuu loh dahan"], "a", "Na'h naan = Yo soy"],

    [26, "Negación", "Ayi", "Completa: Ba _____ gwah. (Él no va)", ["a. ayi", "b. bwen", "c. ziꞌchi"], "a", "ayi = no (negación)"],
    [27, "Negación", "Acciones", "Haz negativa: Rahw bi pahn.", ["a. Ayi rahw bi pahn.", "b. Rahw bi ayi pahn.", "c. Pahn ayi rahw bi."], "a", "Se añade 'ayi' antes del verbo."],
    [28, "Negación", "Responder no", "Responde negativamente: ¿Ta gwah lu\'h?", ["a. Coh, ayi gwah.", "b. Uhn, gwah.", "c. Ziꞌchi, gwah."], "a", "Coh = no, ayi = no"],
    [29, "Negación", "Sustantivos", "Completa: Ayi _____ bwiinn. (No hay personas)", ["a. nuu", "b. gwah", "c. rahw"], "a", "nuu = hay/está"],
    [30, "Negación", "Repaso", "Selecciona la oración correcta para 'Él no come pan':", ["a. Ayi rahw ba pahn.", "b. Rahw ba ayi pahn.", "c. Pahn ayi rahw ba."], "a", "ayi va antes del verbo."],

    [31, "Adjetivos", "Adjetivos comunes", "¿Qué significa el adjetivo 'Cuubi'?", ["a. Nuevo", "b. Bueno", "c. Grande"], "a", "Cuubi = nuevo"],
    [32, "Adjetivos", "Describir", "Completa: Ba naa tuhbi ndxiꞌhw _____. (Él es un hombre bueno)", ["a. bwen", "b. dxaaba", "c. rooꞌ"], "a", "bwen = bueno"],
    [33, "Adjetivos", "Lugares", "Completa: Guihdxyi naa _____. (La ciudad es grande)", ["a. rooꞌ", "b. biꞌtuꞌhn", "c. bwen"], "a", "roo' = grande"],
    [34, "Adjetivos", "Opuestos", "¿Cuál es el opuesto de 'Roo'' (Grande)?", ["a. Bi'tu'hn", "b. Dxaaba", "c. Saantu"], "a", "Bi'tu'hn = pequeño"],
    [35, "Adjetivos", "Colores", "Traduce: La casa es blanca.", ["a. Yuuꞌ naa labweh.", "b. Yuuꞌ naa nagaasa.", "c. Yuuꞌ naa naxñaa."], "a", "labweh = blanco"],

    [36, "Posesivos", "Pronombres", "¿Qué sufijo indica 'tu' (2ª persona)?", ["a. -lu'h", "b. -hn", "c. -ba"], "a", "-lu'h = tu"],
    [37, "Posesivos", "Casa", "¿Cómo se dice 'Su casa' (de él)?", ["a. Yuu'ba", "b. Yuu'hn", "c. Yuu'lu'h"], "a", "yuu' = casa, -ba = su"],
    [38, "Posesivos", "Tu padre", "Traduce: ¿Dónde está tu padre?", ["a. ¿Cannehza nuu xtaada lu\'h?", "b. ¿Cannehza nuu xtaada hn?", "c. ¿Cannehza nuu xtaada ba?"], "a", "xtaada lu'h = tu padre"],
    [39, "Posesivos", "Su madre", "Completa: María naa _____. (María es su madre - de él)", ["a. xmaah ba", "b. xmaa\'hn", "c. xmaah lu\'h"], "a", "xmaah ba = su madre"],
    [40, "Posesivos", "Repaso", "Completa: _____ naa Joseh. (Mi padre es José)", ["a. Xtaa'da'hn", "b. Xtaada lu'h", "c. Xtaada ba"], "a", "-hn = mi"],

    [41, "Preposiciones", "Lugar", "¿Qué preposición significa 'con'?", ["a. Cun", "b. Loh", "c. Nez"], "a", "Cun = con"],
    [42, "Preposiciones", "Usar loh", "Completa: Nuuꞌhuhn _____ guihdxyi. (Estoy en la ciudad)", ["a. loh", "b. nez", "c. cun"], "a", "loh = en/a"],
    [43, "Preposiciones", "Usar nez", "Completa: Zeꞌ naꞌh _____ Nazaret. (Soy de Nazaret)", ["a. nez", "b. loh", "c. cun"], "a", "nez = de/desde"],
    [44, "Preposiciones", "Usar cun", "Completa: Gwah ba _____ xpwiinn ba. (Él va con sus seguidores)", ["a. cun", "b. nez", "c. loh"], "a", "cun = con"],
    [45, "Preposiciones", "Repaso", "Elige: Gwah ba loh guihdxyi _____ xpwiinn ba.", ["a. cun", "b. nez", "c. loh"], "a", "cun = con"],

    [46, "Conjunciones", "Básicas", "¿Qué conjunción significa 'porque'?", ["a. Laasii", "b. Per", "c. Cun"], "a", "Laasii = porque"],
    [47, "Conjunciones", "Usar cun", "Une: Gwah ba loh guihdxyi. Gwah ba cun xpwiinn ba.", ["a. Gwah ba loh guihdxyi cun xpwiinn ba.", "b. Gwah ba loh guihdxyi per xpwiinn ba.", "c. Gwah ba loh guihdxyi laasii xpwiinn ba."], "a", "cun = y/con"],
    [48, "Conjunciones", "Usar per", "Completa: Xclaaꞌdzi ba gwah, _____ ayi gwah. (Él quiere ir, pero no va)", ["a. per", "b. cun", "c. laasii"], "a", "per = pero"],
    [49, "Conjunciones", "Usar laasii", "Completa: Gwah ba, _____ xclaaꞌdzi ba. (Él va porque quiere)", ["a. laasii", "b. per", "c. cun"], "a", "laasii = porque"],
    [50, "Conjunciones", "Repaso", "Completa: Rahw bi pahn _____ bwehlda. (Ella come pan y pescado)", ["a. cun", "b. per", "c. laasii"], "a", "cun = y"],

    [51, "Pasado", "Ir", "Completa: Ba _____ loh guihdxyi nnaꞌyi. (Él fue a la ciudad ayer)", ["a. guyaaꞌhahn", "b. gwah", "c. ziaꞌha"], "a", "guyaa'hahn = fue"],
    [52, "Pasado", "Comer", "Completa: Bi _____ pahn. (Ella comió pan)", ["a. gudahw", "b. rahw", "c. ziraawuhn"], "a", "gudahw = comió"],
    [53, "Pasado", "Hablar", "Completa: Ba _____ xchiꞌdxyi. (Él habló la palabra)", ["a. guiñiꞌ", "b. guñiꞌ", "c. zuiñiꞌ"], "a", "guiñi' = habló"],
    [54, "Pasado", "Hacer", "Completa: Raꞌ ba _____ xtsiꞌn. (Ellos hicieron el trabajo)", ["a. bwiꞌhnn", "b. ruhnn", "c. zuruꞌnnahn"], "a", "bwi'hnn = hicieron"],
    [55, "Pasado", "Repaso", "Traduce: Yo vi", ["a. Bwa'hahn", "b. Bwa'ha", "c. Zwa'hahn"], "a", "Bwa'hahn = vi (pasado)"],

    [56, "Futuro", "Ir", "Completa: Naꞌh _____ loh guihdxyi guillii. (Yo iré a la ciudad mañana)", ["a. ziaꞌhahn", "b. gwah", "c. guyaaꞌhahn"], "a", "zia'hahn = iré"],
    [57, "Futuro", "Comer", "Completa: Bi _____ pahn. (Ella comerá pan)", ["a. ziraawuhn", "b. rahw", "c. gudahw"], "a", "ziraawuhn = comerá"],
    [58, "Futuro", "Hablar", "Completa: Ba _____ xchiꞌdxyi. (Él hablará la palabra)", ["a. zuiñiꞌ", "b. guñiꞌ", "c. guiñiꞌ"], "a", "zuiñi' = hablará"],
    [59, "Futuro", "Hacer", "Completa: Raꞌ ba _____ xtsiꞌn. (Ellos harán el trabajo)", ["a. zuruꞌnnahn", "b. ruhnn", "c. bwiꞌhnn"], "a", "zuru'nnahn = harán"],
    [60, "Futuro", "Repaso", "Traduce: Tú irás", ["a. Zia'ha", "b. Gwah", "c. Guyaa'hahn"], "a", "Zia'ha = irás"],

    [61, "Adverbios", "Manera", "¿Qué significa el adverbio 'Carrih'?", ["a. Rápidamente", "b. Bien", "c. Fuertemente"], "a", "Carrih = rápidamente"],
    [62, "Adverbios", "Bwen", "Completa: Guñiꞌ ba _____. (Él habla bien)", ["a. bwen", "b. dxaaba", "c. carrih"], "a", "bwen = bien"],
    [63, "Adverbios", "Carrih", "Completa: Gwah ba _____. (Él va rápido)", ["a. carrih", "b. bwen", "c. dxaaba"], "a", "carrih = rápido"],
    [64, "Adverbios", "Tiempo", "¿Cómo se dice 'Hoy'?", ["a. Nnadxyih", "b. Guillii", "c. Nna'yi"], "a", "Nnadxyih = Hoy"],
    [65, "Adverbios", "Repaso", "Elige: Ruhnn raꞌ ba xtsiꞌn _____. (Ellos trabajan bien)", ["a. bwen", "b. dxaaba", "c. carrih"], "a", "bwen = bien"],

    [66, "Colores", "Básicos", "¿Qué color es 'Nagaasa'?", ["a. Negro", "b. Blanco", "c. Rojo"], "a", "Nagaasa = negro"],
    [67, "Colores", "Describir", "Completa: Xahba naa _____. (La ropa es blanca)", ["a. labweh", "b. nagaasa", "c. naxñaa"], "a", "labweh = blanco"],
    [68, "Colores", "Objetos", "Traduce: La flor es roja.", ["a. Dxiah naa naxñaa.", "b. Dxiah naa labweh.", "c. Dxiah naa guhtsi."], "a", "naxñaa = rojo"],
    [69, "Colores", "Preguntas", "Traduce: ¿De qué color es la casa?", ["a. ¿Xi culohr yuuꞌ?", "b. ¿Chyu naa yuuꞌ?", "c. ¿Cannehza nuu yuuꞌ?"], "a", "Xi culohr = qué color"],
    [70, "Colores", "Repaso", "Elige: Bweꞌhla naa _____. (El fuego es rojo)", ["a. naxñaa", "b. labweh", "c. guiiꞌga"], "a", "naxñaa = rojo"],

    [71, "Direcciones", "Básicas", "¿Qué significa 'Delaanta'?", ["a. Recto / Adelante", "b. Derecha", "c. Detrás"], "a", "Delaanta = adelante"],
    [72, "Direcciones", "Indicar", "Completa: Gwah _____ loh neziuh. (Ve recto por el camino)", ["a. delaanta", "b. derehchu", "c. rrabwehsa"], "a", "delaanta = recto"],
    [73, "Direcciones", "Girar", "Traduce: Gira a la derecha.", ["a. Gwah lahdu derehchu.", "b. Gwah lahdu rrabwehsa.", "c. Gwah delaanta."], "a", "lahdu derehchu = a la derecha"],
    [74, "Direcciones", "Ubicación", "Completa: Nuu xquidoꞌ _____ yuuꞌ. (El templo está detrás de la casa)", ["a. dihtsi", "b. delaanta", "c. galaayi"], "a", "dihtsi = detrás"],
    [75, "Direcciones", "Repaso", "Elige: Nuu _____ yuuꞌ. (Está detrás de la casa)", ["a. dihtsi", "b. delaanta", "c. derehchu"], "a", "dihtsi = detrás"],

    [76, "Comida", "Básica", "¿Cómo se dice 'Agua'?", ["a. Ñihsa", "b. Pahn", "c. Bwehlda"], "a", "Ñihsa = agua"],
    [77, "Comida", "Comer", "Completa: Rahw bi pahn cun reeꞌ bi _____. (Ella come pan y bebe agua)", ["a. ñihsa", "b. pahn", "c. bwehlda"], "a", "ñihsa = agua"],
    [78, "Comida", "Preguntar", "Traduce: ¿Qué comes?", ["a. ¿Xi rahw lu\'h?", "b. ¿Xi reeꞌ lu\'h?", "c. ¿Xi gwah lu\'h?"], "a", "rahw = comes"],
    [79, "Comida", "Describir", "Completa: Pahn naa _____. (El pan es bueno)", ["a. bwen", "b. dxaaba", "c. rooꞌ"], "a", "bwen = bueno"],
    [80, "Comida", "Repaso", "Elige: Naꞌh xclaaꞌdzihn gahw _____. (Yo quiero comer pan)", ["a. pahn", "b. ñihsa", "c. vihnnu"], "a", "pahn = pan"],

    [81, "Clima", "Básico", "¿Qué significa 'Bwih'?", ["a. Viento", "b. Sol", "c. Lluvia"], "a", "Bwih = viento"],
    [82, "Clima", "Describir", "Completa: _____ riaaba. (Está lloviendo)", ["a. Bwehla", "b. Gubihdxyi", "c. Bwih"], "a", "Bwehla = lluvia"],
    [83, "Clima", "Sol", "Traduce: El sol brilla.", ["a. Gubihdxyi ruziaꞌñih.", "b. Bwehla riaaba.", "c. Bwih ruziaꞌñih."], "a", "Gubihdxyi = sol"],
    [84, "Clima", "Preguntar", "Traduce: ¿Cómo está el clima?", ["a. ¿Xixnaa nuu gueꞌl?", "b. ¿Xi ruhnn lu\'h?", "c. ¿Cannehza nuu?"], "a", "gue'l = clima"],
    [85, "Clima", "Repaso", "Elige: _____ naa rooꞌ. (El viento es fuerte)", ["a. Bwih", "b. Gubihdxyi", "c. Bwehla"], "a", "Bwih = viento"],

    [86, "Cuerpo", "Partes", "¿Cómo se dice 'Mano'?", ["a. Bizloh", "b. Naa", "c. Yihca"], "a", "Bizloh = mano (o Naa dependiendo del contexto, Bizloh es mano)"],
    [87, "Cuerpo", "Cabeza", "Completa: _____ naa rooꞌ. (Mi cabeza es grande)", ["a. Yihca", "b. Bizloh", "c. Naa"], "a", "Yihca = cabeza"],
    [88, "Cuerpo", "Mano", "Traduce: Mi mano está aquí.", ["a. Bizloh nuu riiꞌ.", "b. Yihca nuu riiꞌ.", "c. Naa nuu riiꞌ."], "a", "Bizloh = mano"],
    [89, "Cuerpo", "Oraciones", "Completa: Tihxi ba naa _____. (Su cuerpo está cansado)", ["a. badxahga", "b. chuhla", "c. rooꞌ"], "a", "badxahga = cansado"],
    [90, "Cuerpo", "Repaso", "Elige: _____ (Mano) naa jweersi. (Mi mano es fuerte)", ["a. Bizloh", "b. Yihca", "c. Ñaaꞌ"], "a", "Bizloh = mano"],

    [91, "Objetos", "Comunes", "¿Qué significa 'Mweeyi'?", ["a. Dinero", "b. Ropa", "c. Libro"], "a", "Mweeyi = dinero"],
    [92, "Objetos", "Casa", "Completa: Nuuꞌhuhn loh _____. (Estoy en mi casa)", ["a. yuu\'hn", "b. dxihtsi", "c. xahba"], "a", "yuu'hn = mi casa"],
    [93, "Objetos", "Libro", "Traduce: El libro está sobre la mesa.", ["a. Dxihtsi nuu yihca mweella.", "b. Yuuꞌ nuu yihca mweella.", "c. Xahba nuu yihca mweella."], "a", "Dxihtsi = libro"],
    [94, "Objetos", "Ropa", "Completa: _____ naa labweh. (La ropa es blanca)", ["a. Xahba", "b. Dxihtsi", "c. Yuuꞌ"], "a", "Xahba = ropa"],
    [95, "Objetos", "Repaso", "Elige: _____ (Dinero) naa biꞌtuꞌhn.", ["a. Mweeyi", "b. Yuuꞌ", "c. Xahba"], "a", "Mweeyi = dinero"],

    [96, "Emociones", "Básicas", "¿Cómo se dice 'Feliz'?", ["a. Biahxi", "b. Bidxyihbi", "c. Biin"], "a", "Biahxi = feliz"],
    [97, "Emociones", "Estoy feliz", "Completa: Biahxi _____. (Estoy feliz)", ["a. duxaꞌhn", "b. duxa ba", "c. duxa bi"], "a", "duxa'hn = mucho (yo)"],
    [98, "Emociones", "¿Cómo estás?", "Responde: ¿Xixnaa nuu stoꞌ lu\'h? (¿Cómo te sientes?)", ["a. Biahxi duxaꞌhn.", "b. Nuuꞌhuhn loh guihdxyi.", "c. Rahw naꞌh pahn."], "a", "La respuesta es un estado emocional."],
    [99, "Emociones", "Oraciones", "Completa: Ba naa _____. (Él está triste)", ["a. bidxyihbi", "b. biahxi", "c. biin"], "a", "bidxyihbi = triste"],
    [100, "Emociones", "Repaso", "Elige: Bi naa _____. (Ella está feliz)", ["a. biahxi", "b. bidxyiꞌchi", "c. bidxyihbi"], "a", "biahxi = feliz"],

    [101, "Naturaleza", "Elementos", "¿Qué es 'Dahan'?", ["a. Montaña / Campo", "b. Río", "c. Árbol"], "a", "Dahan = Montaña"],
    [102, "Naturaleza", "Montaña", "Completa: Dahan naa _____. (La montaña es grande)", ["a. rooꞌ", "b. biꞌtuꞌhn", "c. bwen"], "a", "roo' = grande"],
    [103, "Naturaleza", "Río", "Traduce: El río es largo.", ["a. Guiꞌw naa rooꞌ.", "b. Guiꞌw naa nahxin.", "c. Guiꞌw naa bwen."], "a", "Gui'w = río"],
    [104, "Naturaleza", "Árbol", "Completa: _____ naa rooꞌ. (El árbol es grande)", ["a. Yahga", "b. Dahan", "c. Dxiah"], "a", "Yahga = árbol"],
    [105, "Naturaleza", "Repaso", "Elige: _____ (Flor) naa chuhla.", ["a. Dxiah", "b. Dahan", "c. Guiꞌw"], "a", "Dxiah = flor"],

    [106, "Tiempo", "Días", "¿Cómo se dice 'Mañana' (día siguiente)?", ["a. Guillii", "b. Nnadxyih", "c. Nna'yi"], "a", "Guillii = mañana"],
    [107, "Tiempo", "Hoy", "Completa: _____ gwah naꞌh loh guihdxyi. (Hoy voy a la ciudad)", ["a. Nnadxyih", "b. Nnaꞌyi", "c. Guillii"], "a", "Nnadxyih = hoy"],
    [108, "Tiempo", "Mañana", "Traduce: Iré mañana.", ["a. Ziaꞌhahn guillii.", "b. Ziaꞌhahn nnaꞌyi.", "c. Ziaꞌhahn nnadxyih."], "a", "guillii = mañana"],
    [109, "Tiempo", "Ayer", "Completa: Naꞌh _____ (fui) loh guihdxyi nnaꞌyi.", ["a. guyaaꞌhahn", "b. ziaꞌhahn", "c. gwah"], "a", "guyaa'hahn = fui"],
    [110, "Tiempo", "Repaso", "Elige: _____ (Ayer) gudahw bi pahn.", ["a. Nnaꞌyi", "b. Guillii", "c. Nnadxyih"], "a", "Nna'yi = ayer"],

    [111, "Rutina", "Verbos", "¿Qué verbo es 'Aprender'?", ["a. Gusi'dxi", "b. Gwastii", "c. Gahw"], "a", "Gusi'dxi = aprender"],
    [112, "Rutina", "Despertarse", "Completa: Naꞌh _____ rsiiyidoꞌ. (Yo me despierto temprano)", ["a. gwastihn", "b. gahw", "c. gusiꞌdxihn"], "a", "gwastihn = despierto"],
    [113, "Rutina", "Comer", "Traduce: Ella come pan.", ["a. Rahw bi pahn.", "b. Gwah bi loh xtsiꞌn.", "c. Gusiꞌdxi bi xchiꞌdxyi."], "a", "Rahw = come"],
    [114, "Rutina", "Aprender", "Completa: Gusiꞌdxihn _____. (Aprendo la palabra)", ["a. xchiꞌdxyi", "b. xtsiꞌn", "c. pahn"], "a", "xchi'dxyi = palabra"],
    [115, "Rutina", "Repaso", "Elige: _____ (Despertarse) rsiiyidoꞌ.", ["a. Gwastii", "b. Gahw", "c. Gusiꞌdxi"], "a", "Gwastii = despertarse"],

    [116, "Pronunciación", "Vocales", "Las vocales del zapoteco suenan similares a:", ["a. Las del español", "b. Las del inglés", "c. Son todas nasales"], "a", "Son similares al español."],
    [117, "Pronunciación", "Sonido 'ch'", "Selecciona la palabra con el sonido 'ch':", ["a. Chaan", "b. Gwah", "c. Bwen"], "a", "Chaan = hola"],
    [118, "Pronunciación", "Sonido 'xh'", "Selecciona la palabra con el sonido 'xh':", ["a. Xahba", "b. Gwah", "c. Pahn"], "a", "Xahba = ropa"],
    [119, "Pronunciación", "Símbolo ꞌ", "¿Qué representa el símbolo ꞌ en zapoteco?", ["a. Una oclusión glotal (pausa corta)", "b. Una vocal larga", "c. Una consonante fuerte"], "a", "Es un corte o salto glotal."],
    [120, "Pronunciación", "Repaso", "Elige la palabra escrita correctamente:", ["a. Chaan", "b. Xaan"], "a", "Chaan es hola."],

    [121, "Cortesía", "Expresiones", "¿Cómo se dice 'Por favor / Disculpa'?", ["a. Balahsasto'", "b. Zuxchiilli lu'h", "c. Bwen duxa"], "a", "Balahsasto' = por favor/disculpa"],
    [122, "Cortesía", "Gracias", "Completa: _____ (Gracias) lu\'h.", ["a. Zuxchiilli", "b. Bwen duxa", "c. Balahsastoꞌ"], "a", "Zuxchiilli = gracias"],
    [123, "Cortesía", "Por favor", "Traduce: Por favor, ayúdame.", ["a. Balahsastoꞌ, gacanee naꞌh.", "b. Zuxchiilli lu\'h.", "c. Bwen duxa."], "a", "Balahsasto' = por favor"],
    [124, "Cortesía", "Despedirse", "Completa: _____ (Adiós) loh tu.", ["a. Bwen duxa", "b. Zuxchiilli", "c. Balahsastoꞌ"], "a", "Bwen duxa = adiós"],
    [125, "Cortesía", "Repaso", "Elige: Alguien te ayuda → _____", ["a. Zuxchiilli lu\'h", "b. Balahsastoꞌ", "c. Bwen duxa"], "a", "Debes decir gracias."],

    [126, "Hora", "Preguntar", "Traduce: ¿Qué hora es?", ["a. ¿Xi hohra?", "b. ¿Chyu naa lu\'h?", "c. ¿Cannehza nuu?"], "a", "Xi = qué, hohra = hora"],
    [127, "Hora", "Decir hora", "Completa: Hohra naa _____. (Son las tres)", ["a. chohnna", "b. chiohpa", "c. tuhbi"], "a", "chohnna = tres"],
    [128, "Hora", "Momentos", "¿Qué significa 'Gue'la'?", ["a. Noche", "b. Mañana", "c. Tarde"], "a", "Gue'la = noche"],
    [129, "Hora", "Día", "Traduce: ¿Qué día es hoy?", ["a. ¿Xi dxyih nnadxyih?", "b. ¿Xi hohra?", "c. ¿Cannehza nuu?"], "a", "dxyih = día"],
    [130, "Hora", "Repaso", "Elige: Hohra naa _____. (Son las dos)", ["a. chiohpa", "b. tuhbi", "c. chohnna"], "a", "chiohpa = dos"],

    [131, "Animales", "Básicos", "¿Qué animal es 'Bwecu'?", ["a. Perro", "b. Caballo", "c. Oveja"], "a", "Bwecu = perro"],
    [132, "Animales", "Caballo", "Completa: Ma naa _____. (El caballo es grande)", ["a. rooꞌ", "b. biꞌtuꞌhn", "c. bwen"], "a", "roo' = grande"],
    [133, "Animales", "Oveja", "Traduce: La oveja es blanca.", ["a. Guun naa labweh.", "b. Ma naa labweh.", "c. Bwecu naa labweh."], "a", "Guun = oveja"],
    [134, "Animales", "Perro", "Completa: _____ naa xamihgu. (El perro es amigo)", ["a. Bwecu", "b. Bwe\'lda", "c. Guun"], "a", "Bwecu = perro"],
    [135, "Animales", "Repaso", "Elige: _____ (Pájaro) naa rzah.", ["a. Bwecu", "b. Ma", "c. Guun"], "a", "Bwecu = pájaro (en algunos dialectos; aquí usamos Bwecu)"],

    [136, "Profesiones", "Básicas", "¿Qué significa 'Mwehsu'?", ["a. Maestro", "b. Seguidor", "c. Sacerdote"], "a", "Mwehsu = maestro"],
    [137, "Profesiones", "Maestro", "Completa: Ba naa tuhbi _____. (Él es un maestro)", ["a. mwehsu", "b. estudiante", "c. bixohza"], "a", "mwehsu = maestro"],
    [138, "Profesiones", "Estudiante", "Traduce: Soy estudiante.", ["a. Naꞌh naan tuhbi estudiante.", "b. Naꞌh naan tuhbi mwehsu.", "c. Naꞌh naan tuhbi bixohza."], "a", "estudiante = estudiante"],
    [139, "Profesiones", "Sacerdote", "Completa: Ba naa tuhbi _____. (Él es un sacerdote)", ["a. bixohza", "b. estudiante", "c. mwehsu"], "a", "bixohza = sacerdote"],
    [140, "Profesiones", "Repaso", "Elige: Ba naa _____. (Él enseña, es maestro)", ["a. mwehsu", "b. estudiante", "c. bixohza"], "a", "mwehsu = maestro"],

    [141, "Comparaciones", "Básicas", "¿Qué sufijo se usa para decir 'más que'?", ["a. -ru", "b. -ba", "c. -hn"], "a", "-ru = comparativo"],
    [142, "Comparaciones", "Personas", "Completa: Ba lasahca ru _____ naꞌh. (Él es más grande que yo)", ["a. loh", "b. cun", "c. per"], "a", "loh = que (comparación)"],
    [143, "Comparaciones", "Mejor que", "Traduce: El pan es mejor que el pescado.", ["a. Pahn bwen ru loh bwehlda.", "b. Pahn dxaaba ru loh bwehlda.", "c. Pahn bwen cun bwehlda."], "a", "bwen ru = mejor"],
    [144, "Comparaciones", "Más que", "Completa: Guihdxyi rooꞌ ru _____ rraandxu. (La ciudad es más grande que el pueblo)", ["a. loh", "b. cun", "c. per"], "a", "loh = que"],
    [145, "Comparaciones", "Repaso", "Elige: María bwen ru loh Joseh. →", ["a. María es mejor que José", "b. María es peor que José", "c. María y José son buenos"], "a", "bwen ru = mejor"],

    [146, "Diálogos", "Presentación", "Completa: A: ¡Chaan! ¿Xixnaa nuu _____? B: Nuuꞌhuhn bwen.", ["a. lu\'h", "b. bwen", "c. naa"], "a", "lu'h = tú"],
    [147, "Diálogos", "Ubicación", "Traduce: La ciudad está allí.", ["a. Guihdxyi nuu riꞌchi.", "b. ¿Cannehza nuu guihdxyi?", "c. Coh, nahxu."], "a", "ri'chi = allí"],
    [148, "Diálogos", "Comida", "Completa: A: ¿Xi _____ lu\'h? B: Rahw naꞌh pahn.", ["a. rahw", "b. reeꞌ", "c. naa"], "a", "rahw = comes"],
    [149, "Diálogos", "Familia", "Traduce: Ella es mi madre.", ["a. Bi naa xmaa\'hn.", "b. ¿Chyu naa bi?", "c. Lah bi naa María."], "a", "xmaa'hn = mi madre"],
    [150, "Diálogos", "Repaso", "Elige: ¿Cannehza nuu guihdxyi? → _____ (Allí)", ["a. Nuu riꞌchi.", "b. Nuu riiꞌ.", "c. Nuu loh."], "a", "ri'chi = allí"],

    [151, "Negación", "Ayi", "Completa: Ayi _____ bwiinn. (No hay personas)", ["a. nuu", "b. gwah", "c. rahw"], "a", "nuu = hay"],
    [152, "Negación", "Acciones", "Haz negativa: Rahw bi pahn. →", ["a. Ayi rahw bi pahn.", "b. Rahw bi ayi pahn.", "c. Pahn ayi rahw bi."], "a", "ayi va antes del verbo"],
    [153, "Negación", "Respuesta", "Responde negativamente: ¿Ta gwah lu\'h?", ["a. Coh, ayi gwah.", "b. Uhn, gwah.", "c. Ziꞌchi, gwah."], "a", "Coh = no"],
    [154, "Negación", "Pasado", "Traduce: No fui a la ciudad.", ["a. Ayi guyaaꞌhahn loh guihdxyi.", "b. Ayi gwah naꞌh loh guihdxyi.", "c. Gwah naꞌh loh guihdxyi."], "a", "guyaa'hahn = fui"],
    [155, "Negación", "Repaso", "Elige la oración negativa correcta:", ["a. Ayi rahw bi pahn.", "b. Rahw bi ayi pahn.", "c. Pahn ayi rahw bi."], "a", "ayi + verbo"],

    [156, "Por qué", "Preguntar", "Traduce: ¿Por qué vas?", ["a. ¿Xixnaa gwah lu\'h?", "b. ¿Chyu gwah lu\'h?", "c. ¿Cannehza gwah lu\'h?"], "a", "Xixnaa = por qué"],
    [157, "Por qué", "Responder", "Completa: Gwah naꞌh _____ (porque) xclaaꞌdzi naꞌh.", ["a. laasii", "b. cun", "c. per"], "a", "laasii = porque"],
    [158, "Por qué", "Acciones", "Traduce: ¿Por qué comes pan?", ["a. ¿Xixnaa rahw lu\'h pahn?", "b. ¿Xi rahw lu\'h pahn?", "c. ¿Cannehza rahw lu\'h pahn?"], "a", "Xixnaa = por qué"],
    [159, "Por qué", "Razones", "Completa: Rahw naꞌh pahn _____ (porque) bichiaꞌhan naꞌh.", ["a. laasii", "b. cun", "c. per"], "a", "laasii = porque"],
    [160, "Por qué", "Repaso", "Elige la pregunta para responder con 'Laasii...':", ["a. ¿Xixnaa?", "b. ¿Chyu?", "c. ¿Cannehza?"], "a", "Xixnaa pregunta por qué"],

    [161, "Cantidades", "Básicas", "¿Qué significa 'Ziahan'?", ["a. Algunos / Varios", "b. Pocos", "c. Muchos"], "a", "Ziahan = algunos/varios"],
    [162, "Cantidades", "Preguntar", "Traduce: ¿Cuántos panes hay?", ["a. ¿Paaldaa pahn nuu?", "b. ¿Xi pahn nuu?", "c. ¿Cannehza pahn nuu?"], "a", "Paaldaa = cuántos"],
    [163, "Cantidades", "Muchos", "Completa: Nuu _____ bwiinn. (Hay muchas personas)", ["a. gulla", "b. guriin", "c. gahdzi"], "a", "gulla = muchos"],
    [164, "Cantidades", "Pocos", "Traduce: Hay pocos niños.", ["a. Nuu guriin biñiꞌn.", "b. Nuu gahdzi biñiꞌn.", "c. Nuu gulla biñiꞌn."], "a", "guriin = pocos"],
    [165, "Cantidades", "Repaso", "Elige: Nuu _____ (algunos) dxihtsi.", ["a. ziahan", "b. guriin", "c. gulla"], "a", "ziahan = algunos"],

    [166, "Estar", "Usar nuu", "Completa: Nuuꞌhuhn _____ loh guihdxyi. (Estoy en la ciudad)", ["a. nuu", "b. gwah", "c. rahw"], "a", "nuu = estar"],
    [167, "Estar", "Preguntar", "Traduce: ¿Dónde estás?", ["a. ¿Cannehza nuu lu\'h?", "b. ¿Chyu naa lu\'h?", "c. ¿Xi ruhnn lu\'h?"], "a", "nuu = estás"],
    [168, "Estar", "Haber", "Completa: _____ bwiinn. (Hay personas)", ["a. Nuu", "b. Gwah", "c. Rahw"], "a", "Nuu = hay"],
    [169, "Estar", "Negar", "Traduce: No hay agua.", ["a. Ayi nuu ñihsa.", "b. Nuu ñihsa.", "c. Ayi gwah ñihsa."], "a", "Ayi nuu = no hay"],
    [170, "Estar", "Repaso", "Elige: ¿Cannehza _____ (está) xquidoꞌ?", ["a. nuu", "b. gwah", "c. rahw"], "a", "nuu = está"],

    [171, "Frases útiles", "De nada", "¿Cómo se dice 'De nada'?", ["a. Ayi xi", "b. Balahsasto'", "c. Zuxchiilli lu'h"], "a", "Ayi xi = de nada"],
    [172, "Frases útiles", "Respuesta", "Completa: A: Zuxchiilli lu\'h. B: _____ (De nada)", ["a. Ayi xi", "b. Bwen duxa", "c. Chaan"], "a", "Ayi xi = de nada"],
    [173, "Frases útiles", "Disculparse", "Traduce: Disculpa, ¿dónde está la casa?", ["a. Balahsastoꞌ, ¿cannehza nuu yuuꞌ?", "b. Zuxchiilli lu\'h, ¿cannehza nuu yuuꞌ?", "c. Bwen duxa, ¿cannehza nuu yuuꞌ?"], "a", "Balahsasto' = disculpa"],
    [174, "Frases útiles", "Entender", "Completa: Ayi _____. (No entiendo)", ["a. rahcabwaꞌn", "b. gwah", "c. rahw"], "a", "rahcabwa'n = entiendo"],
    [175, "Frases útiles", "Repaso", "¿Qué dices si no entiendes?", ["a. Ayi rahcabwa'n", "b. Balahsasto'", "c. Zuxchiilli lu'h"], "a", "Ayi rahcabwa'n = no entiendo"],

    [176, "Descripciones", "Física", "¿Qué significa 'Roo''?", ["a. Grande", "b. Pequeño", "c. Bonito"], "a", "Roo' = grande"],
    [177, "Descripciones", "Persona", "Completa: Ba naa tuhbi ndxiꞌhw _____. (Él es un hombre bueno)", ["a. bwen", "b. chuhla", "c. rooꞌ"], "a", "bwen = bueno"],
    [178, "Descripciones", "Preguntar", "Traduce: ¿Cómo es ella?", ["a. ¿Xixnaa naa bi?", "b. ¿Chyu naa bi?", "c. ¿Cannehza nuu bi?"], "a", "Xixnaa = cómo"],
    [179, "Descripciones", "Altura", "Completa: Ba naa _____. (Él es alto)", ["a. rooꞌ", "b. biꞌtuꞌhn", "c. bwen"], "a", "roo' = alto/grande"],
    [180, "Descripciones", "Repaso", "Elige: Bi naa tuhbi gunnaꞌh _____. (Ella es bonita)", ["a. chuhla", "b. bwen", "c. rooꞌ"], "a", "chuhla = bonita"],

    [181, "Actividades", "Diarias", "¿Cómo se dice 'Trabajar'?", ["a. Gwah loh xtsi'n", "b. Gusi'dxi", "c. Gahw"], "a", "xtsi'n = trabajo"],
    [182, "Actividades", "Preguntar", "Traduce: ¿Qué haces?", ["a. ¿Xi ruhnn lu\'h?", "b. ¿Xi gwah lu\'h?", "c. ¿Xi rahw lu\'h?"], "a", "ruhnn = haces"],
    [183, "Actividades", "Estudiar", "Completa: Gusiꞌdxihn _____. (Estudio la palabra)", ["a. xchiꞌdxyi", "b. pahn", "c. xtsiꞌn"], "a", "xchi'dxyi = palabra"],
    [184, "Actividades", "Trabajar", "Traduce: Él trabaja.", ["a. Ruhnn ba xtsiꞌn.", "b. Gwah ba loh xtsiꞌn.", "c. Gusiꞌdxi ba."], "a", "ruhnn xtsi'n = trabaja"],
    [185, "Actividades", "Repaso", "Elige: _____ (Estudio) xchiꞌdxyi Dxiohs.", ["a. Gusiꞌdxihn", "b. Gwah", "c. Ruhnn"], "a", "Gusi'dxihn = estudio"],

    [186, "Lugares", "Comunes", "¿Qué es 'Xquido''?", ["a. Templo / Iglesia", "b. Casa", "c. Ciudad"], "a", "Xquido' = templo"],
    [187, "Lugares", "Ir", "Completa: Gwah naꞌh loh _____. (Voy a la ciudad)", ["a. guihdxyi", "b. xquidoꞌ", "c. yuuꞌ"], "a", "guihdxyi = ciudad"],
    [188, "Lugares", "Preguntar", "Traduce: ¿Dónde está el templo?", ["a. ¿Cannehza nuu xquidoꞌ?", "b. ¿Cannehza nuu guihdxyi?", "c. ¿Cannehza nuu yuuꞌ?"], "a", "xquido' = templo"],
    [189, "Lugares", "Casa", "Completa: Nuuꞌhuhn loh _____. (Estoy en casa)", ["a. yuu\'hn", "b. guihdxyi", "c. xquidoꞌ"], "a", "yuu'hn = mi casa"],
    [190, "Lugares", "Repaso", "Elige: Gwah naꞌh loh _____ (al templo).", ["a. xquidoꞌ", "b. guihdxyi", "c. yuuꞌ"], "a", "xquido' = templo"],

    [191, "Irregulares", "Presente", "Completa: Naꞌh _____ loh guihdxyi. (Yo voy)", ["a. gwah", "b. guyaaꞌhahn", "c. ziaꞌhahn"], "a", "gwah = voy"],
    [192, "Irregulares", "Ser", "Completa: Naꞌh _____ tuhbi estudiante. (Yo soy)", ["a. naan", "b. naa", "c. naaꞌ"], "a", "naan = soy"],
    [193, "Irregulares", "Estar", "Completa: Nuuꞌhuhn _____ loh guihdxyi. (Estoy)", ["a. nuu", "b. gwah", "c. naan"], "a", "nuu = estoy"],
    [194, "Irregulares", "Repaso", "Elige: Ba _____ (es) tuhbi mwehsu.", ["a. naa", "b. nuu", "c. gwah"], "a", "naa = es"],
    [195, "Irregulares", "Final", "Elige: Naꞌh _____ (soy) estudiante.", ["a. naan", "b. naa", "c. gwah"], "a", "naan = soy"],

    [196, "Repaso final", "Saludos", "Completa: ¿Xixnaa nuu _____? (¿Cómo estás tú?)", ["a. lu'h", "b. bwen", "c. naa"], "a", "lu'h = tú"],
    [197, "Repaso final", "Respuestas", "¿Qué respondes a '¿Cannehza nuu guihdxyi?'", ["a. Nuu ri'chi", "b. Na'h naan Joseh", "c. Nuu'huhn bwen"], "a", "Nuu ri'chi = Está allí"],
    [198, "Repaso final", "Familia", "Traduce: Mi padre", ["a. Xtaada'hn", "b. Xmaa'hn", "c. Bwihtsi ba"], "a", "Xtaada'hn = mi padre"],
    [199, "Repaso final", "Verbos", "Traduce: Yo voy", ["a. Na'h gwah", "b. Ba rahw", "c. Bi guñi'"], "a", "gwah = voy"],
    [200, "Repaso final", "Frases", "Traduce: Mi padre es un hombre bueno.", ["a. Xtaa\'da\'hn naa tuhbi ndxiꞌhw bwen.", "b. Bwen duxa xcagaꞌ", "c. ¿Xixnaa nuu lu\'h?"], "a", "xtaada'hn = mi padre, bwen = bueno"]
];

EXERCISES_A1_RAW.forEach((d) => {
    exercises.push(ex(d[0], d[1], d[2], d[3], d[4], d[5], d[6]));
});
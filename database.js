// 1. DICCIONARIO BASE SECULAR (Zapoteco de Chichicapan)
const vocabulario = [
    { zapoteco: "Ñihsa", espanol: "Agua" },
    { zapoteco: "Yuh", espanol: "Tierra" },
    { zapoteco: "Bwiinn", espanol: "Persona / Gente" },
    { zapoteco: "Ndxi'hw", espanol: "Hombre" },
    { zapoteco: "Gunna'h", espanol: "Mujer" },
    { zapoteco: "Llii'n", espanol: "Hijo / Niño" },
    { zapoteco: "Guihdxyi", espanol: "Pueblo / Ciudad" },
    { zapoteco: "Dahan", espanol: "Cerro / Montaña" },
    { zapoteco: "Gubihdxyi", espanol: "Sol" },
    { zapoteco: "Maani'hn", espanol: "Animal" },
    { zapoteco: "Bwehlda", espanol: "Pez / Pescado" },
    { zapoteco: "Yahga", espanol: "Árbol / Madera" },
    { zapoteco: "Dxiah", espanol: "Piedra" },
    { zapoteco: "Bwehcu", espanol: "Perro" },
    { zapoteco: "Guehta", espanol: "Comida" },
    { zapoteco: "Neziuh", espanol: "Camino" },
    { zapoteco: "Dxyih", espanol: "Día" },
    { zapoteco: "Gue'la", espanol: "Noche" }
];

// 2. GENERADOR AUTOMÁTICO DE LAS 60 UNIDADES
const UNITS_META = [];
for (let i = 1; i <= 60; i++) {
    let nivel = i <= 20 ? "A1" : (i <= 40 ? "A2" : "B1");
    let nivelNombre = i <= 20 ? "Fundamentos" : (i <= 40 ? "Elemental" : "Intermedio");
    
    UNITS_META.push({
        id: i,
        level: nivel,
        title: `Unidad ${i}: Práctica ${nivelNombre}`,
        desc: `Ejercicios de asimilación lingüística para el nivel ${nivel}.`
    });
}

// 3. GENERADOR AUTOMÁTICO DE LOS 600 EJERCICIOS (10 por unidad)
const EXERCISES_DATA = [];
let vocabIndex = 0;

for (let unitId = 1; unitId <= 60; unitId++) {
    for (let ex = 1; ex <= 10; ex++) { // 10 ejercicios exactos por cada una de las 60 unidades
        
        // Seleccionar la palabra correcta y dos distractores
        let correctWord = vocabulario[vocabIndex % vocabulario.length];
        let wrong1 = vocabulario[(vocabIndex + 1) % vocabulario.length];
        let wrong2 = vocabulario[(vocabIndex + 2) % vocabulario.length];
        
        // Crear las opciones (A, B, C)
        let options = [
            { id: "a", text: correctWord.zapoteco, isCorrect: true },
            { id: "b", text: wrong1.zapoteco, isCorrect: false },
            { id: "c", text: wrong2.zapoteco, isCorrect: false }
        ];
        
        // Mezclar las opciones aleatoriamente para que la correcta no sea siempre la "A"
        options.sort(() => Math.random() - 0.5);
        
        // Reasignar los IDs después de mezclar
        options[0].id = "a"; 
        options[1].id = "b"; 
        options[2].id = "c";

        // Insertar el ejercicio en la base de datos general
        EXERCISES_DATA.push({
            unitId: unitId,
            question: `¿Cómo se dice '${correctWord.espanol}'?`,
            options: options,
            feedbackCorrect: `¡Correcto! '${correctWord.zapoteco}' significa ${correctWord.espanol}.`,
            feedbackWrong: `Incorrecto. La palabra correcta para ${correctWord.espanol} es '${correctWord.zapoteco}'.`
        });
        
        vocabIndex++;
    }
}
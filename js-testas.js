/*
1. Sukurkite funkciją, kuri paverstų eurus į dolerius.
Sugeneruokite atsitiktinį skaičių (eurų sumą) nuo 1 iki 1000.
Pritaikykite savo sukurtą funkciją ir išspausdinkite atitikmenį
doleriais.
*/

console.log("--- 1 UZDUOTIS ---")

eurousdkursas = 1.07

eurorandom = (Math.random() * 1000).toFixed(2)

console.log(eurorandom + ' Eur')

function euroconversiontousd() {
   return (eurorandom * eurousdkursas).toFixed(2)
}

console.log(euroconversiontousd() + ' USD')

console.log(" ")
/*
2. Sukurkite funkciją, kuri paverstų dolerius į eurus.
Sugeneruokite atsitiktinį skaičių (dolerių sumą) nuo 1 iki 1000.
Pritaikykite savo sukurtą funkciją ir išspausdinkite atitikmenį
eurais.
*/
console.log("--- 2 UZDUOTIS ---")

eurousdkursas = 1.07

usdrandom = (Math.random() * 1000).toFixed(2)

console.log(usdrandom + ' USD')

function usdconversiontoeur() {
   return (usdrandom / eurousdkursas).toFixed(2)
}

console.log(usdconversiontoeur() + ' Eur')

console.log(" ")

/*
3. Parašykite programą, kuri suskaičiuotų žmogaus BMI (body
mass index), kai yra žinomas žmogaus ūgis ir svoris. 
BMI formulė: žmogaus svoris (kg) padalintas iš ūgio metrais kvadratu. 
Pvz. svoris = 80kg, ūgis = 1.8 m. 
BMI = 80 / 1.8**2 = 24.69
Viršsvoris = BMI > 25
Normalu = 18.5 <= BMI < 25
Per mažas svoris = BMI < 18.5
*/
console.log("--- 3 UZDUOTIS ---")

function bmicalculator(ugis, svoris) {

   let bmi = svoris / (ugis ** 2)

   if (bmi < 18.5) { console.log(`Jūsų svoris yra per mazas, kadangi Jūsų BMI yra ${bmi}.`) }
   else if (bmi >= 25) { console.log(`Jūs turite viršsvorį, kadangi Jūsų BMI yra ${bmi}.`) }
   else { console.log(`Jūsų svoris yra normalus, kadangi Jūsų BMI yra ${bmi}.`) }
}

bmicalculator(1.8, 78)

console.log(" ")

/*
4. Parašykite programą, kuri iš duoto žmogaus amžiaus metais
pasakytų kiek tai yra sekundėmis, minutėmis, valandomis,
dienomis.
*/

console.log("--- 4 UZDUOTIS ---")

const dienosmetuose = 365.25
const valandosdienoje = 24
const minutesvalandoje = 60
const sekundesminuteje = 60

function amziauskonvertavimas(metai) {
   console.log(`Jūsų amžius sekundėmis - ${metai * dienosmetuose * valandosdienoje * minutesvalandoje * sekundesminuteje} sekundės(-žių).`)
   console.log(`Jūsų amžius minutėmis - ${metai * dienosmetuose * valandosdienoje * minutesvalandoje} minutės(-čių).`)
   console.log(`Jūsų amžius valandomis - ${metai * dienosmetuose * valandosdienoje} valandos(-ų).`)
   console.log(`Jūsų amžius dienomis - ${Math.round(metai * dienosmetuose)} dienos(-ų).`)
}

amziauskonvertavimas(40)

console.log(" ")

/*
5. Parašykite programą, kuri konvertuos termometro
duomenis iš Farenheito į Celsijų, ir atvirkščiai.
*/
console.log("--- 5 UZDUOTIS ---")

function fahrenheittocelsius(fahrenheit) {
   console.log(`${fahrenheit} °F yra ${((fahrenheit - 32) * (5 / 9)).toFixed(1)} °C.`)
}

function celsiustofahrenheit(celsius) {
   console.log(`${celsius} °C yra ${(celsius * 1.8 + 32).toFixed(1)} °F.`)
}

fahrenheittocelsius(86)
celsiustofahrenheit(-30)

console.log(" ")
/*
6. Sukurkite kodą, kuris išspausdins į konsolę
1-2-3-4-5-6-7-8-9-10 vienoje eilutėje. Prieš vienetą ir po
dešimties neturėtų būti brūkšniuko.
*/
console.log("--- 6 UZDUOTIS ---")

let skaiciusmasyvas6uzd = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log(skaiciusmasyvas6uzd.join('-'))

console.log(" ")
/*
7. Panaudokite for ciklus, kad sukurtumėte tokį vaizdą konsolėje.
*
**
***
****
*****
*/
console.log("--- 7 UZDUOTIS ---")

let uzd7linija = ''
let star7 = '*'

for (i = 0; i < 5; i++) {
   uzd7linija += star7
   console.log(uzd7linija)
}


console.log(" ")
/*
8. Parašykite kodą, kuris apskaičiuos kiek liko dienų iki Kalėdų.
*/
console.log("--- 8 UZDUOTIS ---")

const dabartinedata = new Date()

const kaledudata = new Date(dabartinedata.getFullYear(), 11, 25)

// console.log(dabartinedata)
// console.log(kaledudata)

const likodienu = (Math.ceil((kaledudata - dabartinedata) / (24 * 60 * 60 * 1000)))

console.log(`Iki Kalėdų liko ${likodienu} dienos(-ų).`)

console.log(" ")
/*
9. Parašykite kodą, kuris apjungia masyvo duomenis į vieną
tekstinę eilutę. Turėtumėte gauti tokį rezultatą:
Tomas,Dainius,Paulius,Jonas
Tomas+Dainius+Paulius+Jonas
*/
console.log("--- 9 UZDUOTIS ---")

const vardai9uzd = ["Tomas", "Dainius", "Paulius", "Jonas"]

console.log(vardai9uzd.join(','))
console.log(vardai9uzd.join('+'))


console.log(" ")
/*
10. Parašykite kodą, kuris sugeneruos dvylikos simbolių
slaptažodį. Slaptažodyje privalo būti bent po vieną: didžioji raidė,
mažoji raidė, skaičius, specialusis simbolis. Visi slaptažodžio
simboliai privalo būti atsitiktiniai ir atsitiktine tvarka.
*/
console.log("--- 10 UZDUOTIS ---")

const skaiciai = '0123456789'
const specialussimbol = '!@#$%^&*()_+[]{}|;:,.<>?'
const mazosraides = 'abcdefghijklmnopqrstuvwxyz'
const didelesraides = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

const visisimboliai = skaiciai.concat(specialussimbol, mazosraides, didelesraides)

// console.log(visisimboliai)

let slaptazodis = ''


for (let i = 1; i < 9; i++) {
   slaptazodis += visisimboliai[Math.floor(Math.random() * visisimboliai.length)]
}

slaptazodis += skaiciai[Math.floor(Math.random() * skaiciai.length)]
slaptazodis += specialussimbol[Math.floor(Math.random() * specialussimbol.length)]
slaptazodis += mazosraides[Math.floor(Math.random() * mazosraides.length)]
slaptazodis += didelesraides[Math.floor(Math.random() * didelesraides.length)]

console.log(slaptazodis);

const slaptazodziomasyvas = slaptazodis.split('')


// NAUDOJAMAS The Fisher-Yates algoritmas

function shuffleArray(array) {
   for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
   }
   return array;
}


shuffleArray(slaptazodziomasyvas)

let galutinisslaptazodis = slaptazodziomasyvas.join('')

console.log(galutinisslaptazodis)



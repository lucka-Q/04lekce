const jmeno = "     Michal   "
const heslo = "AWKH3912qidakjeqw"
//             0123456789
const rodneCislo = "980514/3366"

console.log(jmeno)
console.log(jmeno.trim())

console.log(heslo.length)
console.log(jmeno.length)

const castHesla = heslo.slice(0, 4)

console.log(castHesla)

console.log(heslo.indexOf("KH"))

const poziceLomitka = rodneCislo.indexOf("/")

console.log(rodneCislo.slice(poziceLomitka + 1, poziceLomitka + 5))

console.log(jmeno.toLowerCase())
console.log(jmeno.toUpperCase())

const telCislo = "724005013"

console.log(telCislo.padStart(13, "+420"))
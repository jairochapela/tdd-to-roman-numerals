

/**
 * Conversión a números romanos.
 * @param {number} n - Un número entre 1 y 3999.
 * @returns {string} El equivalente en números romanos.
 */
export function toRoman(n) {

  let resultado = "";

  while (n>=1000) {
    resultado += "M";
    n -= 1000;
  }
  if (n>=900) {
    resultado += "CM";
    n -= 900;
  }
  if (n>=500) {
    resultado += "D";
    n -= 500;
  }  
  if (n>=400) {
    resultado += "CD";
    n -= 400;
  }
  while (n>=100) {
    resultado += "C";
    n -= 100;
  }
  if (n>=90) {
    resultado += "XC";
    n -= 90;
  }
  if (n>=50) {
    resultado += "L";
    n -= 50;
  }
  if (n>=40) {
    resultado += "XL";
    n -= 40;
  }
  while (n>=10) {
    resultado += "X";
    n -= 10;
  }
  if (n==9) {
    resultado += "IX";
    n -= 9;
  }
  if (n==4) {
    resultado += "IV";
    n -= 4;
  }
  if (n>=5) {
    resultado += "V";
    n -= 5;
  }

  for (let i = 0; i < n; i++) {
    resultado += "I"; 
  }


  return resultado;
}





/**
 * Conversión a números romanos.
 * @param {number} n - Un número entre 1 y 3999.
 * @returns {string} El equivalente en números romanos.
 */
export function toRoman(n) {

  let resultado = "";

  if (n==9) {
    resultado = "IX";
    n -= 9;
  }
  else if (n==4) {
    resultado = "IV";
    n -= 4;
  }
  else if (n>=5) {
    resultado += "V";
    n -= 5;
  }

  for (let i = 0; i < n; i++) {
    resultado += "I"; 
  }


  return resultado;
}



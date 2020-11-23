

/**
 * Conversión a números romanos.
 * @param {number} n - Un número entre 1 y 3999.
 * @returns {string} El equivalente en números romanos.
 */
export function toRoman(n) {

  const cantidades = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const letras = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
  let resultado = "";

  for (let i = 0; i < cantidades.length; i++) {
    while (n>=cantidades[i]) {
      resultado += letras[i];
      n -= cantidades[i];
    }    
  }

  return resultado;
}



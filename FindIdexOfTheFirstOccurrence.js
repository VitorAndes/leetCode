function indexOf(haystack, needle) {
  if (needle === "") return 0;

  const haystackLength = haystack.length; // 8
  const needleLength = needle.length; // 2

  // 0 <= 8 - 2;
  for (let i = 0; i <= haystackLength - needleLength; i++) {
    // Verifica se a substring começando em i corresponde à needle
    let j = 0;
    // 0 < 2 && haystack[0 + 0] === needle[0] / haystack[s] === needle[s]
    while (j < needleLength && haystack[i + j] === needle[j]) {
      j++; // 0 + 1
    }
    // se j for igual o tamanho do needle, então todas as letras passaram na validação de de haystack[i + j] === needle[j], fazendo com que a iteração continue até o fim de todas as letras em needleLength
    if (j === needleLength) {
      return i;
    }
  }
  return -1;
}

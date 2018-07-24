function min(a, b) {
    if (a < b) return a;
    else return b;
  }



  function isEven(n) {
    if (n == 0) return true;
    else if (n == 1) return false;
    else return isEven(n - 2);
  }



  function countChar(string, ch) {
    let counted = 0;
    for (let i = 0; i < string.length; i++) {
      if (string[i] == ch) {
        counted += 1;
      }
    }
    return counted;
  }
  
  function countBs(string) {
    return countChar(string, "B");
  }






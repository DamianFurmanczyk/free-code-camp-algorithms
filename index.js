/*
............................................................................................
...............Intermediate Algorithm Scripting..................
............................................................................................
*/

// https://www.freecodecamp.org/challenges/sum-all-numbers-in-a-range

(function challage1() {
  const sumAll = nums => {
    let result = 0;

    for (let i = Math.min(...nums); i <= Math.max(...nums); i++) {
      result += i;
    }

    return result;
  };

  const result = sumAll([1, 4]);
  console.log(result);
});

// https://www.freecodecamp.org/challenges/diff-two-arrays
(function challenge2() {
  const diff = (arr1, arr2) => {
    // .includes polyfill? lets go

    const diff1 = arr1.filter(record => arr2.indexOf(record) === -1);
    const diff2 = arr2.filter(record => arr1.indexOf(record) === -1);

    return [...diff1, ...diff2];
  };

  const result = diff([1, 2, 4, 3], [1, 3, 6]);
  console.log(result);
});

// https://www.freecodecamp.org/challenges/wherefore-art-thou
(function() {
  const whatIsInAName = (arrOfObjs, obj) => {
    const keys = Object.keys(obj);

    return arrOfObjs.filter(checkKeys);

    function checkKeys(objOfArray, i) {
      let doesItPass = true;
      keys.forEach(key => {
        if (!(objOfArray[key] === obj[key])) doesItPass = false;
      });

      return doesItPass;
    }
  };

  const result = whatIsInAName(
    [{ a: 1, b: 2 }, { a: 1 }, { a: 1, b: 2, c: 2 }],
    { a: 1, c: 2 }
  );
  console.log(result);
});

// https://www.freecodecamp.org/challenges/search-and-replace
(function() {
  function myReplace(str, before, after) {
    if (before[0].toUpperCase() === before[0]) {
      after = after.split("");
      after[0] = after[0].toUpperCase();
      after = after.join("");
    }
    return str.replace(before, after);
  }

  const result = myReplace("His name is Tom", "Tom", "john");
  console.log(result);
});

// https://www.freecodecamp.org/challenges/pig-latin
(function() {
  function translatePigLatin(str) {
    const vowelPattern = /[aeiou]/gi;
    const b_addWay = vowelPattern.test(str[0]);

    if (b_addWay) return str + "way";

    const sampleOfLeadingLetter = str.slice(0, 1);
    const theRestOfStr = str.substr(1);
    return theRestOfStr + sampleOfLeadingLetter + "ay";
  }

  const result = translatePigLatin("eight");
  console.log(result);
});

(function() {
  function pairElement(str) {
    return [...str].map(char => {
      switch (char.toUpperCase()) {
        case "A":
          return ["A", "T"];
        case "T":
          return ["T", "A"];
        case "G":
          return ["G", "C"];
        case "C":
          return ["C", "G"];
        default:
          return "Invalid pairing element";
      }
    });
  }

  const result = pairElement("GCG");
  console.log(result);
});

// https://www.freecodecamp.org/challenges/missing-letters
(function() {
  function fearNotLetter(str) {
    let lastCharCode, actualCharCode, result;

    [...str].forEach((char, i) => {
      actualCharCode = str.charCodeAt(i);
      if (!(lastCharCode && str.charCodeAt(i) === ++lastCharCode)) {
        result = String.fromCharCode(lastCharCode);
      }
      lastCharCode = actualCharCode;
    });

    return result;
  }

  const result = fearNotLetter("abcdefghjklmno");
  console.log(result);
})();

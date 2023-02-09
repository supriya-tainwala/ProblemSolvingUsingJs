
let longestDistinctSubstring = function (input) {
  try {
    let chars = input.split("");
    for (i = 0; i < chars.length; i++) {
      crurrentChar = chars[i];
      if (!obj[chars[i]]) {
        str += crurrentChar;
        obj[chars[i]] = { index: i };
      } else {
        if (longestSubString.length <= str.length) {
          longestSubString = str;
        }
        let lastIndex = obj[crurrentChar].index;
        let strP = input.substring(lastIndex + 1, i);
        str = strP + crurrentChar;
        obj = {};
        for (j = lastIndex + 1; j <= i; j++) {
          obj[input.charAt(j)] = { index: j };
        }
      }
    }
    return longestSubString.length > str.length ? longestSubString : str;
  } catch (exception) {
    console.log("Exception is caught by catch:" + exception);
  }
};
let crurrentChar;
let str = "";
let longestSubString = "";
let obj = {};
let input = "supriya";
console.log(longestDistinctSubstring(input));

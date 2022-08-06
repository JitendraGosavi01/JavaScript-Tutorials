let text = "Test String";
let text2 = "Test string2";
let contact = "12344567890";
//examples                                       // s
console.log(text.charAt(5)); // S
console.log(text.charCodeAt(5)); // 83
console.log(text.concat(text2)); // Test StringTest string2
console.log(text.constructor); // [λ: String]
console.log(text.endsWith("g")); // true
console.log(String.fromCharCode(65)); // A
console.log(text.includes("-")); // false
console.log(text.indexOf("s")); // 2
console.log(text.lastIndexOf("S")); // 5
console.log("b".localeCompare("a", "en")); // 1
console.log(text.match(/string/gi)); // ['String'] g = global, i = case sensitivity
console.log(text.padStart(text.length + 2, "=")); // ==Test String
console.log(text.padEnd(text2.length + 3, "|")); // Test String|||
console.log(text.repeat(2)); // Test StringTest String
console.log(text.replace("T", "B")); // Best String
console.log(text.search("S")); // 5
console.log(text.slice(2)); // st String
console.log(text.split("")); // [ 'T', 'e', 's', 't', ' ', 'S', 't', 'r', 'i', 'n', 'g' ]
console.log(text.startsWith("T")); // true
console.log(text.substr(5, 3)); // Str
console.log(text.substring(3, 6)); // t s
console.log(text.toLocaleLowerCase("en")); // test string
console.log(text.toLocaleUpperCase("en")); // TEST STRING
console.log(text.toLowerCase()); // test string
console.log(text.toUpperCase()); // TEST STRING

let str = "  test  ";
console.log(str.length); // 8
console.log(str.trim()); // test
console.log(str.trim().length); // 4

let newStr = new String("foo");
console.log(newStr.valueOf()); // foo

String.prototype.camelCase = function () {
  let str = Object.values(this).join("").replace(" ", "");
  let newStr = str.slice(0, 1);
  return newStr.toLowerCase() + str.slice(1);
};
console.log(text.camelCase()); // testString

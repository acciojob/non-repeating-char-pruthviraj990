function firstNonRepeatedChar(str) {
  const charCount = {};

  // Count each character
  for (let char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  // Find the first character with count 1
  for (let char of str) {
    if (charCount[char] === 1) {
      return char;
    }
  }

  return null;
}

function findFirstNonRepeated() {
  const input = document.getElementById("inputString").value.trim();
  const result = firstNonRepeatedChar(input);

  const output = document.getElementById("result");
  if (result !== null) {
    output.textContent = First non-repeating character is: '${result}';
    output.style.color = "green";
  } else {
    output.textContent = "No non-repeating character found.";
    output.style.color = "red";
  }
}
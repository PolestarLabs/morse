import MorseLetters from "./MorseCharacters";

export default function encode(input: string) {
  return input.toUpperCase().split('').map((t) => {
    // @ts-ignore: We handle non enum members so we don't need type checking
    const morse = MorseLetters[t] || MorseLetters[`num_${t}`] || MorseLetters[`punc_${t}`];
    if (morse === undefined) throw new RangeError(`Invalid character: ${t}`);
    return morse;
  }).join(' ');
}

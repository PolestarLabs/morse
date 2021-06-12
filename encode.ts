import MorseLetters from "./MorseCharacters";
import { inspect } from 'util';

export default function encode(input: string) {
  return input.toUpperCase().split('').map((t) => {
    // @ts-ignore: We handle non enum members so we don't need type checking
    const morse = MorseLetters[t] || MorseLetters[`num_${t}`] || MorseLetters[`punc_${t}`];
    if (morse === undefined) throw new RangeError(`Invalid character: ${inspect(t)}`);
    return morse;
  }).join(' ');
}

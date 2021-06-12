import MorseLetters from "./MorseCharacters";
import { inspect } from 'util';

const INVALID_CHARACTERS = /[^ \/\.-]/
const PREFIXED = /(?:num_)|(?:punc_)/g;

export default function decode(input: string) {
  if (INVALID_CHARACTERS.test(input)) throw new RangeError('Invalid character(s)');
  input.split(' ').map((t) => {
    // @ts-ignore: We handle non enum members so we don't need type checking
    const char = MorseLetters[MorseLetters[t]];
    if (char === undefined) throw new RangeError(`Unknown morse: ${inspect(t)}`);
    return char;
  }).join('').replace(PREFIXED, '');
}

import dictionary from "../../resource/json/dictionary.json";

export type Word = {wordString: string, definition: string};

export const words: readonly Readonly<[string, string]>[] = Object.freeze(Object.entries(dictionary)) as readonly Readonly<[string, string]>[];


const NUM_OF_WORDS: number = words.length;

const randomWordIndex = ():number => Math.floor(Math.random() * NUM_OF_WORDS);

export const getRandomWord = (): Word =>
{
    const randomWord = words[randomWordIndex()];
    return {wordString: randomWord[0], definition: randomWord[1]};
};

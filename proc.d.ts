/*
 * @format
 */
import {API} from './API';
import {POS} from './types';
import {Sentence, Word} from './data';
declare module 'koalanlp/proc';
declare class CanAnalyzeProperty extends Function {
  constructor(
    api: API,
    options?: {
      apiKey: string;
      etriKey: string;
      isAsyncDefault?: boolean;
    },
  );
  analyze(...text: string[]): Promise<Sentence[]>;
  analyzeSync(...text: string[]): Sentence[];
}

export class SentenceSplitter extends Function {
  constructor(
    api: API,
    options?: {
      isAsyncDefault?: boolean;
    },
  );
  sentences(...text: string[]): Promise<string[]>;
  sentencesSync(...text: string[]): string[];
  static sentences(paragraph: Word[]): Promise<Sentence>;
  static sentencesSync(paragraph: Word[]): Sentence;
}

export class Tagger extends Function {
  constructor(
    api: API,
    options?: {
      apiKey?: string;
      etriKey?: string;
      useLightTagger?: boolean;
      kmrLight?: boolean;
      khaResource?: string;
      khaPreanal?: string;
      khaErrorpatch?: string;
      khaRestore?: string;
      isAsyncDefault?: boolean;
    },
  );
  tag(...text: string[]): Promise<Array<Sentence>>;
  tagSync(...text: string[]): Array<Sentence>;
  tagSentence(...text: string[]): Promise<Array<Sentence>>;
  tagSentenceSync(...text: string[]): Array<Sentence>;
}

export class Parser extends CanAnalyzeProperty {}
export class EntityRecognizer extends CanAnalyzeProperty {}
export class RoleLabeler extends CanAnalyzeProperty {}

interface IDicEntry {
  surface: string;
  tag: POS;
}

export class Dictionary {
  constructor(api: API);
  addUserDictionary(...pairs: IDicEntry[]): void;
  contains(word: string, ...posTags: POS[]): boolean;
  importFrom(
    other: Dictionary,
    fastAppendopt: boolean,
    filteropt: (x: any) => boolean,
  ): Promise<void>;
  getBaseEntries(filteropt: (x: any) => boolean): Promise<IDicEntry[]>;
  getItems(): Promise<IDicEntry[]>;
  getNotExists(
    onlySystemDic: boolean,
    ...word: IDicEntry[]
  ): Promise<IDicEntry[]>;
}

export class UTagger {
  static setPath(libPath: string, confPath: string): void;
}

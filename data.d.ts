/*
 * @format
 */

import {
  CoarseEntityType,
  DependencyTag,
  PhraseTag,
  POS,
  RoleType,
} from './types';

declare module 'koalanlp/data';
declare class JavaWrappable {}
declare class ImmutableArray<T> extends JavaWrappable {
  constructor(items: T[]);
}

export class Entity extends ImmutableArray<Morpheme> {
  constructor(value: {
    surface: string;
    label: string;
    fineLabel: string;
    morphemes: Morpheme[];
    originalLabel?: string;
  });
  corefGroup: CoreferenceGroup;
  get surface(): string;
  get label(): CoarseEntityType;
  get fineLabel(): string;
  get originalLabel(): string;
  getCorefGroup(): CoreferenceGroup;
  getSurface(): string;
  getLabel(): string;
  getFineLabel(): string;
  getOriginalLabel(): string;
  equals(other: Entity): boolean;
  toString(): string;
}

export class CoreferenceGroup extends ImmutableArray<Entity> {}

export class Tree extends ImmutableArray<Tree> {
  constructor(value: {label: string; terminal: Word; children: Tree[]});
  parent: Tree | null;
  terminal: Word | null;
  getLabel(): any;
  getTerminal(): Word | null;
  isRoot(): boolean;
  hasNonTerminals: boolean;
  getTerminals(): Word[];
  getTreeString(depth?: number, buffer?: string): string;
  getParent(): Tree | null;
  getNonTerminals(): Tree[];
  toString(): string;
  equals(other: Tree): boolean;
}

export class SyntaxTree extends Tree {
  constructor(value: {
    label: string | PhraseTag;
    terminal: Word;
    children: Tree[];
  });
  originalLabel: string;
  label: PhraseTag;
  getOriginalLabel(): string;
}

export class DAGEdge extends JavaWrappable {
  constructor(value: {src: Word; dest: Word; label: string});
  src: Word;
  dest: Word;
  label: any;
  getSrc(): Word;
  getDest(): Word;
  getLabel(): any;
  toString(): string;
  equals(other: DAGEdge): boolean;
}

export class DepEdge extends DAGEdge {
  constructor(value: {
    governor: Word;
    dependent: Word;
    type: string | PhraseTag;
    depType?: string | DependencyTag;
    originalLabel?: string;
  });
  governor: Word;
  dependent: Word;
  label: DependencyTag;
  depType: DependencyTag;
  type: PhraseTag;
  originalLabel: string;
  getGovernor(): Word;
  getDependent(): Word;
  getDepType(): DependencyTag;
  getType(): PhraseTag;
  getOriginalLabel(): string;
  equals(other: DepEdge): boolean;
  toString(): string;
}

export class RoleEdge extends DAGEdge {
  constructor(value: {
    predicate: Word;
    argument: Word;
    label: string | RoleType;
    modifiers?: Word[];
    originalLabel?: string;
  });
  predicate: Word;
  argument: Word;
  label: RoleType;
  modifiers: Word[];
  originalLabel: string;
  getPredicate(): Word;
  getArgument(): Word;
  getModifiers(): Word[];
  getOriginalLabel(): string;
  toString(): string;
}

export class Morpheme extends JavaWrappable {
  constructor(value: {
    surface: string;
    tag: string | POS;
    originalTag?: string;
    reference?: Object;
  });
  id: number;
  word: Word;
  wordSense: number;
  entities: Entity[];
  surface: string;
  tag: POS;
  originalTag: string;
  getSurface(): string;
  getTag(): POS;
  getOriginalTag(): string;
  getId(): number;
  getWordSense(): number;
  getEntities(): Entity[];
  getWord(): Word;
  isNoun(): boolean;
  isPredicate(): boolean;
  isModifier(): boolean;
  isJosa(): boolean;
  hasTag(partialTag: string): boolean;
  hasTagOneOf(tags: string[]): boolean;
  hasOriginalTag(partialTag: string): boolean;
  equals(other: Morpheme): boolean;
  toString(): string;
}

export class Word extends ImmutableArray<Morpheme> {
  constructor(value: {surface: string; morphemes: Morpheme[]; reference?: any});
  id: number;
  phrase: SyntaxTree;
  dependentEdges: DepEdge[];
  governorEdge: DepEdge;
  argumentRoles: RoleEdge[];
  predicateRoles: RoleEdge[];
  surface: string;
  entities: Entity[];
  getSurface(): string;
  getId(): number;
  getEntities(): Entity[];
  getPhrase(): SyntaxTree;
  getDependentEdges(): DepEdge[];
  getGovernorEdge(): DepEdge;
  getArgumentRoles(): RoleEdge[];
  getPredicateRoles(): RoleEdge[];
  singleLineString(): string;
  toString(): string;
  equals(other: Word): boolean;
}

export class Sentence extends ImmutableArray<Word> {
  syntaxTree: SyntaxTree;
  dependencies: Array<DepEdge>;
  roles: Array<RoleEdge>;
  entities: Array<Entity>;
  corefGroups: Array<CoreferenceGroup>;
  nouns: Array<Word>;
  verbs: Array<Word>;
  modifiers: Array<Word>;
  getSyntaxTree(): SyntaxTree;
  getDependencies(): Array<DepEdge>;
  getRoles(): Array<RoleEdge>;
  getEntities(): Array<Entity>;
  getCorefGroups(): Array<CoreferenceGroup>;
  getNouns(): Array<Word>;
  getVerbs(): Array<Word>;
  getModifiers(): Array<Word>;
  surfaceString(delimiteropt?: string): string;
  singleLineString(): string;
  toString(): string;
}

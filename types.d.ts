/*
 * @format
 */

declare module 'koalanlp/types';

declare class JavaEnum {
  tagname: string;
  ordinal: number;
  classType: string;
  constructor(reference: any);
  toString(): string;
  equals(other: any): boolean;
  static getAllOf(clsName: string[]): any[];
}

export class POS extends JavaEnum {
  static values(): POS[];
  static withName(name: string): POS;
  isNoun(): boolean;
  isPredicate(): boolean;
  isModifier(): boolean;
  isPostPosition(): boolean;
  isEnding(): boolean;
  isAffix(): boolean;
  isSuffix(): boolean;
  isSymbol(): boolean;
  isUnknown(): boolean;
  startsWith(tag: string): boolean;
}

export class PhraseTag extends JavaEnum {
  static values(): PhraseTag[];
  static withName(name: string): PhraseTag;
}
export class DependencyTag extends JavaEnum {
  static values(): DependencyTag[];
  static withName(name: string): DependencyTag;
}
export class RoleType extends JavaEnum {
  static values(): RoleType[];
  static withName(name: string): RoleType;
}
export class CoarseEntityType extends JavaEnum {
  static values(): CoarseEntityType[];
  static withName(name: string): CoarseEntityType;
}

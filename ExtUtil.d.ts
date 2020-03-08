/*
 * @format
 */

declare module 'koalanlp/ExtUtil';
export const HanFirstList: string[];
export const HanSecondList: string[];
export const HanLastList: string[];
export const ChoToJong: Map<string, string>[];
export function alphaToHangul(text: string): string;
export function hangulToAlpha(text: string): string;
export function isAlphaPronounced(text: string): boolean;
export function isHanja(text: string): boolean[];
export function isCJKHanja(text: string): boolean[];
export function hanjaToHangul(text: string, headCorrection?: boolean): string;
export function isCompleteHangul(text: string): boolean[];
export function isIncompleteHangul(text: string): boolean[];
export function isHangul(text: string): boolean[];
export function isHangulEnding(text: string): boolean;
export function isChosungJamo(text: string): boolean[];
export function isJungsungJamo(text: string): boolean[];
export function isJongsungJamo(text: string): boolean[];
export function isJongsungEnding(text: string): boolean;
export function getChosung(text: string): string[];
export function getJungsung(text: string): string[];
export function getJongsung(text: string): string[];
export function dissembleHangul(text: string): string;
export function assembleHangulTriple(
  cho?: string,
  jung?: string,
  jong?: string,
);
export function assembleHangul(text: string): string;
export function correctVerbApply(
  verb: string,
  isVerb: boolean,
  rest: string,
): string;

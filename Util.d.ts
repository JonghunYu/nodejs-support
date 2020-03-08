/*
 * @format
 */

declare module 'koalanlp/Util';

import {
  POS,
  PhraseTag,
  DependencyTag,
  CoarseEntityType,
  RoleType,
} from './types';

interface IInitializeParams {
  packages: {[name: string]: string};
  javaOptions?: string[];
  verbose?: boolean;
  tempJsonName?: string;
}
type TagType = POS | PhraseTag | DependencyTag | CoarseEntityType | RoleType;

export function initialize(options: IInitializeParams): Promise<void>;
export function contains(stringList: string[], tag: TagType): boolean;

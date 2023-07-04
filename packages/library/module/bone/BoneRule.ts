import { ProxyNotice } from "@vis-three/middleware";
import { ObjectRule } from "@vis-three/module-object";
import { Bone } from "three";

import { BoneCompiler } from "./BoneCompiler";
import { BoneConfig } from "./BoneConfig";

export type BoneRule = ObjectRule<BoneCompiler, BoneConfig, Bone>;

export const BoneRule: BoneRule = function (
  notice: ProxyNotice,
  compiler: BoneCompiler
) {
  ObjectRule(notice, compiler);
};

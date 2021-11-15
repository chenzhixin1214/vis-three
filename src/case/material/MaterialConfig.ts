import { FrontSide, RGBAFormat, TangentSpaceNormalMap } from "three";
import { SymbolConfig } from "../common/CommonConfig";

export interface MaterialConfig extends SymbolConfig {
  alphaTest: number
  colorWrite: boolean
  depthTest: boolean
  depthWrite: boolean
  format: number
  fog: boolean
  name: string
  needsUpdate: boolean
  opacity: number
  dithering: boolean
  shadowSide: number | null
  side: number
  toneMapped: boolean
  transparent: boolean
  visible: boolean
}

export interface MeshStandardMaterialConfig extends MaterialConfig {
  aoMapIntensity: number
  bumpScale: number
  color: string
  displacementScale: number
  displacementBias: number
  emissive: string
  emissiveIntensity: number
  envMapIntensity: number
  flatShading: boolean
  lightMapIntensity: number
  metalness: number
  normalMapType: number
  refractionRatio: number
  roughness: number
  wireframe: boolean
  wireframeLinecap: string
  wireframeLinejoin: string

  roughnessMap: string
  normalMap: string
  metalnessMap: string
  map: string
  lightMap: string
  envMap: string
  emissiveMap: string
  displacementMap: string
  bumpMap: string
  alphaMap: string
  aoMap: string
}

export type MaterialAllType = MeshStandardMaterialConfig

export const getMaterialConfig = function(): MaterialConfig {
  return {
    vid: '',
    type: 'Material',
    alphaTest: 0,
    colorWrite: true,
    depthTest: true,
    depthWrite: true,
    format: RGBAFormat,
    fog: true,
    name: '',
    needsUpdate: false,
    opacity: 1,
    dithering: false,
    shadowSide: null,
    side: FrontSide,
    toneMapped: true,
    transparent: false,
    visible: true
  }
}

export const getMeshStandardMaterialConfig = function(): MeshStandardMaterialConfig {
  return Object.assign(getMaterialConfig(), {
    type: 'MeshStantardMaterial',
    aoMapIntensity: 1,
    bumpScale: 1,
    color: 'rgb(255, 255, 255)',
    displacementScale: 1,
    displacementBias: 0,
    emissive: 'rgb(0, 0, 0)',
    emissiveIntensity: 1,
    envMapIntensity: 1,
    flatShading: false,
    lightMapIntensity: 1,
    metalness: 0,
    normalMapType: TangentSpaceNormalMap,
    refractionRatio: 0.98,
    roughness: 1,
    wireframe: false,
    wireframeLinecap: 'round',
    wireframeLinejoin: 'round',
  
    roughnessMap: '',
    normalMap: '',
    metalnessMap: '',
    map: '',
    lightMap: '',
    envMap: '',
    emissiveMap: '',
    displacementMap: '',
    bumpMap: '',
    alphaMap: '',
    aoMap: ''
  
  })
}
import { FrontSide, MultiplyOperation, RGBAFormat, TangentSpaceNormalMap } from "three";
export const getMaterialConfig = function () {
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
    };
};
export const getMeshStandardMaterialConfig = function () {
    return Object.assign(getMaterialConfig(), {
        type: 'MeshStandardMaterial',
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
    });
};
export const getMeshPhongMaterialConfig = function () {
    return Object.assign(getMaterialConfig(), {
        type: 'MeshPhongMateria',
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
        normalMapType: TangentSpaceNormalMap,
        refractionRatio: 0.98,
        wireframe: false,
        wireframeLinecap: 'round',
        wireframeLinejoin: 'round',
        specular: 'rgb(17, 17, 17)',
        shininess: 30,
        combine: MultiplyOperation,
        normalMap: '',
        map: '',
        lightMap: '',
        envMap: '',
        emissiveMap: '',
        displacementMap: '',
        bumpMap: '',
        alphaMap: '',
        aoMap: '',
        specularMap: ''
    });
};
export const getSpriteMaterialConfig = function () {
    return Object.assign(getMaterialConfig(), {
        color: 'rgb(255, 255, 255)',
        rotation: 0,
        map: '',
        alphaMap: '',
        sizeAttenuation: true
    });
};
//# sourceMappingURL=MaterialConfig.js.map
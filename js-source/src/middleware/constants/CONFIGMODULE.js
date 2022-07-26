import { CONFIGTYPE } from "./configType";
import { MODULETYPE } from "./MODULETYPE";
/**
 * @deprecated - use getModule
 */
export const CONFIGMODULE = {
    [CONFIGTYPE.IMAGETEXTURE]: MODULETYPE.TEXTURE,
    [CONFIGTYPE.CUBETEXTURE]: MODULETYPE.TEXTURE,
    [CONFIGTYPE.CANVASTEXTURE]: MODULETYPE.TEXTURE,
    [CONFIGTYPE.VIDEOTEXTURE]: MODULETYPE.TEXTURE,
    [CONFIGTYPE.MESHBASICMATERIAL]: MODULETYPE.MATERIAL,
    [CONFIGTYPE.MESHSTANDARDMATERIAL]: MODULETYPE.MATERIAL,
    [CONFIGTYPE.MESHPHONGMATERIAL]: MODULETYPE.MATERIAL,
    [CONFIGTYPE.SPRITEMATERIAL]: MODULETYPE.MATERIAL,
    [CONFIGTYPE.LINEBASICMATERIAL]: MODULETYPE.MATERIAL,
    [CONFIGTYPE.POINTSMATERIAL]: MODULETYPE.MATERIAL,
    [CONFIGTYPE.SHADERMATERIAL]: MODULETYPE.MATERIAL,
    [CONFIGTYPE.AMBIENTLIGHT]: MODULETYPE.LIGHT,
    [CONFIGTYPE.SPOTLIGHT]: MODULETYPE.LIGHT,
    [CONFIGTYPE.POINTLIGHT]: MODULETYPE.LIGHT,
    [CONFIGTYPE.DIRECTIONALLIGHT]: MODULETYPE.LIGHT,
    [CONFIGTYPE.BOXGEOMETRY]: MODULETYPE.GEOMETRY,
    [CONFIGTYPE.SPHEREGEOMETRY]: MODULETYPE.GEOMETRY,
    [CONFIGTYPE.LOADGEOMETRY]: MODULETYPE.GEOMETRY,
    [CONFIGTYPE.CUSTOMGEOMETRY]: MODULETYPE.GEOMETRY,
    [CONFIGTYPE.PLANEGEOMETRY]: MODULETYPE.GEOMETRY,
    [CONFIGTYPE.CIRCLEGEOMETRY]: MODULETYPE.GEOMETRY,
    [CONFIGTYPE.CONEGEOMETRY]: MODULETYPE.GEOMETRY,
    [CONFIGTYPE.CIRCLEGEOMETRY]: MODULETYPE.GEOMETRY,
    [CONFIGTYPE.EDGESGEOMETRY]: MODULETYPE.GEOMETRY,
    [CONFIGTYPE.CYLINDERGEOMETRY]: MODULETYPE.GEOMETRY,
    [CONFIGTYPE.LINECURVEGEOMETRY]: MODULETYPE.GEOMETRY,
    [CONFIGTYPE.SPLINECURVEGEOMETRY]: MODULETYPE.GEOMETRY,
    [CONFIGTYPE.CUBICBEZIERCURVEGEOMETRY]: MODULETYPE.GEOMETRY,
    [CONFIGTYPE.QUADRATICBEZIERCURVEGEOMETRY]: MODULETYPE.GEOMETRY,
    [CONFIGTYPE.LINETUBEGEOMETRY]: MODULETYPE.GEOMETRY,
    [CONFIGTYPE.SPLINETUBEGEOMETRY]: MODULETYPE.GEOMETRY,
    [CONFIGTYPE.TORUSGEOMETRY]: MODULETYPE.GEOMETRY,
    [CONFIGTYPE.RINGGEOMETRY]: MODULETYPE.GEOMETRY,
    [CONFIGTYPE.LINESHAPEGEOMETRY]: MODULETYPE.GEOMETRY,
    [CONFIGTYPE.SPRITE]: MODULETYPE.SPRITE,
    [CONFIGTYPE.LINE]: MODULETYPE.LINE,
    [CONFIGTYPE.MESH]: MODULETYPE.MESH,
    [CONFIGTYPE.POINTS]: MODULETYPE.POINTS,
    [CONFIGTYPE.GROUP]: MODULETYPE.GROUP,
    [CONFIGTYPE.CSS3DOBJECT]: MODULETYPE.CSS3D,
    [CONFIGTYPE.CSS3DSPRITE]: MODULETYPE.CSS3D,
    [CONFIGTYPE.CSS3DPLANE]: MODULETYPE.CSS3D,
    [CONFIGTYPE.PERSPECTIVECAMERA]: MODULETYPE.CAMERA,
    [CONFIGTYPE.ORTHOGRAPHICCAMERA]: MODULETYPE.CAMERA,
    [CONFIGTYPE.WEBGLRENDERER]: MODULETYPE.RENDERER,
    [CONFIGTYPE.SCENE]: MODULETYPE.SCENE,
    [CONFIGTYPE.TRNASFORMCONTROLS]: MODULETYPE.CONTROLS,
    [CONFIGTYPE.ORBITCONTROLS]: MODULETYPE.CONTROLS,
    [CONFIGTYPE.SMAAPASS]: MODULETYPE.PASS,
    [CONFIGTYPE.UNREALBLOOMPASS]: MODULETYPE.PASS,
    [CONFIGTYPE.SCRIPTANIMATION]: MODULETYPE.ANIMATION,
    [CONFIGTYPE.KEYFRAMEANIMATION]: MODULETYPE.ANIMATION,
};
export const getModule = (type) => {
    const matchModule = (module) => {
        return type.toLocaleLowerCase().includes(module.toLocaleLowerCase());
    };
    for (const module of Object.values(MODULETYPE)) {
        if (matchModule(module)) {
            return module;
        }
    }
    return null;
};
//# sourceMappingURL=CONFIGMODULE.js.map
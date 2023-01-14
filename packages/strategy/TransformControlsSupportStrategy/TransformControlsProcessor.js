import { CONFIGTYPE, defineProcessor, } from "@vis-three/middleware";
export default defineProcessor({
    configType: CONFIGTYPE.TRNASFORMCONTROLS,
    commands: {
        set: {
            snapAllow({ target, config, value }) {
                if (value) {
                    target.translationSnap = config.translationSnap;
                    target.rotationSnap = config.rotationSnap;
                    // @ts-ignore types 没写 源码有这个属性
                    target.scaleSnap = config.scaleSnap;
                }
                else {
                    target.translationSnap = null;
                    target.rotationSnap = null;
                    // @ts-ignore types 没写 源码有这个属性
                    target.scaleSnap = null;
                }
            },
            translationSnap({ target, config, value }) {
                if (config.snapAllow) {
                    target.translationSnap = value;
                }
            },
            rotationSnap({ target, config, value }) {
                if (config.snapAllow) {
                    target.rotationSnap = value;
                }
            },
            scaleSnap({ target, config, value }) {
                if (config.snapAllow) {
                    // @ts-ignore types 没写 源码有这个属性
                    target.scaleSnap = value;
                }
            },
        },
    },
    create(config, engine) {
        let control = engine.transformControls;
        if (config.snapAllow) {
            control.translationSnap = config.translationSnap;
            control.rotationSnap = config.rotationSnap;
            // @ts-ignore types 没写 源码有这个属性
            control.scaleSnap = config.scaleSnap;
        }
        return control;
    },
    dispose(target) {
        target.dispose();
    },
});

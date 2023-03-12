import { defineProcessor, uniqueSymbol, } from "@vis-three/middleware";
import { getRendererConfig } from "@vis-three/middleware/renderer/RendererConfig";
import { syncObject } from "@vis-three/utils";
export const getCSS3DRenderereConfig = function () {
    return Object.assign(getRendererConfig(), {
        vid: uniqueSymbol('CSS3DRENDERER'), // WebGLRenderer or vid
    });
};
export default defineProcessor({
    type: 'CSS3DRenderer',
    config: getCSS3DRenderereConfig,
    commands: {
        set: {
            size({ target, config }) {
                if (!config.size) {
                    target.setSize(target.domElement.offsetWidth, target.domElement.offsetHeight);
                }
                else {
                    target.setSize(config.size.x, config.size.y);
                }
            },
        },
    },
    create(config, engine) {
        let renderer = engine.css3DRenderer;
        if (config.size) {
            renderer.setSize(config.size.x, config.size.y);
        }
        syncObject(config, renderer, {
            size: true,
        });
        return renderer;
    },
    dispose(target) { },
});

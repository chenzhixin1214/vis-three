import { AxesHelper, Camera, Event, GridHelper, Object3D, Scene, WebGLRenderer } from "three";
import Stats from "three/examples/jsm/libs/stats.module";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer";
import { Engine, VisOrbitControls } from "@vis-three/core";
import { CSS2DRenderer } from "three/examples/jsm/renderers/CSS2DRenderer";
import { CSS3DRenderer } from "three/examples/jsm/renderers/CSS3DRenderer";
import { RenderManager, RenderManagerEngine } from "@vis-three/render-manager-plugin";
import { Screenshot, WebGLRendererEngine } from "@vis-three/webgl-renderer-plugin";
import { PointerManager, PointerManagerEngine } from "@vis-three/pointer-manager-plugin";
import { EventManager, EventManagerEngine } from "@vis-three/event-manager-plugin";
import { EffectComposerEngine } from "@vis-three/effect-composer-plugin";
import { OrbitControlsEngine } from "@vis-three/orbit-controls-plugin";
import { SelectionEngine } from "@vis-three/selection-plugin";
import { AxesHelperEngine } from "@vis-three/axes-helper-plugin";
import { GridHelperEngine } from "@vis-three/grid-helper-plugin";
import { VIEWPOINT, ViewpointEngine } from "@vis-three/viewpoint-plugin";
import { TransformControlsEngine, VisTransformControls } from "@vis-three/transform-controls-plugin";
import { StatsEngine } from "@vis-three/stats-plugin";
import { KeyboardManager, KeyboardManagerEngine } from "@vis-three/keyboard-manager-plugin";
import { ObjectHelperEngine, ObjectHelperManager } from "@vis-three/object-helper-plugin";
import { CSS2DRendererEngine } from "@vis-three/css2d-renderer-plugin";
import { CSS3DRendererEngine } from "@vis-three/css3d-renderer-plugin";
export declare class ModelingEngine extends Engine implements WebGLRendererEngine, EffectComposerEngine, OrbitControlsEngine, RenderManagerEngine, PointerManagerEngine, EventManagerEngine, KeyboardManagerEngine, StatsEngine, TransformControlsEngine, ViewpointEngine, GridHelperEngine, AxesHelperEngine, SelectionEngine, ObjectHelperEngine, CSS2DRendererEngine, CSS3DRendererEngine {
    dom: HTMLElement;
    webGLRenderer: WebGLRenderer;
    camera: Camera;
    scene: Scene;
    orbitControls: VisOrbitControls;
    transformControls: VisTransformControls;
    effectComposer: EffectComposer;
    renderManager: RenderManager;
    pointerManager: PointerManager;
    eventManager: EventManager;
    keyboardManager: KeyboardManager;
    stats: Stats;
    selectionBox: Set<Object3D>;
    axesHelper: AxesHelper;
    gridHelper: GridHelper;
    transing: boolean;
    objectHelperManager: ObjectHelperManager;
    css3DRenderer: CSS3DRenderer;
    css2DRenderer: CSS2DRenderer;
    setStats: (show: boolean) => this;
    setTransformControls: (show: boolean) => this;
    setViewpoint: (viewpoint: VIEWPOINT) => this;
    setAxesHelper: (params: {
        show: boolean;
    }) => this;
    setGridHelper: (show: boolean) => this;
    setObjectHelper: (show: boolean) => this;
    play: () => this;
    stop: () => this;
    render: () => this;
    getScreenshot: (params?: Screenshot | undefined) => Promise<string>;
    setSelectionBox: (objects: Object3D<Event>[]) => this;
    constructor();
}

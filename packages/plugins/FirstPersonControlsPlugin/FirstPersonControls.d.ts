import { Camera, Object3D, Vector3 } from "three";
declare class FirstPersonControls {
    object: Object3D;
    domElement: HTMLElement;
    enabled: boolean;
    movementSpeed: number;
    lookSpeed: number;
    lookVertical: boolean;
    autoForward: boolean;
    activeLook: boolean;
    heightSpeed: boolean;
    heightCoef: number;
    heightMin: number;
    heightMax: number;
    constrainVertical: boolean;
    verticalMin: number;
    verticalMax: number;
    mouseDragOn: boolean;
    autoSpeedFactor: number;
    mouseX: number;
    mouseY: number;
    moveForward: boolean;
    moveBackward: boolean;
    moveLeft: boolean;
    moveRight: boolean;
    moveUp: boolean;
    moveDown: boolean;
    viewHalfX: number;
    viewHalfY: number;
    private targetPosition;
    private lat;
    private lon;
    private _onMouseMove;
    private _onMouseDown;
    private _onMouseUp;
    private _onKeyDown;
    private _onKeyUp;
    private contextmenu;
    constructor(object: Object3D, domElement: HTMLElement);
    setCamera(camera: Camera): void;
    setDom(dom: HTMLElement): void;
    setSize(width: number, height: number): void;
    setOrientation(): void;
    handleResize(): void;
    onMouseDown(event: MouseEvent): void;
    onMouseUp(event: MouseEvent): void;
    onMouseMove(event: MouseEvent): void;
    onKeyDown(event: KeyboardEvent): void;
    onKeyUp(event: KeyboardEvent): void;
    lookAt(x: number | Vector3, y: number, z: number): this;
    update(delta: number): void;
    dispose(): void;
}
export { FirstPersonControls };

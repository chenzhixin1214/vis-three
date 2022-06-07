import { CanvasTexture, Points, PointsMaterial, } from "three";
import { CanvasGenerator } from "../../../convenient/CanvasGenerator";
export class LineHelper extends Points {
    static alphaTexture = new CanvasTexture(new CanvasGenerator({ width: 512, height: 512, bgColor: "rgb(0, 0, 0)" })
        .draw((ctx) => {
        ctx.beginPath();
        ctx.fillStyle = "rgb(255, 255, 255)";
        ctx.arc(256, 256, 200, 0, Math.PI * 2);
        ctx.fill();
        ctx.closePath();
    })
        // .preview({
        //   left: "50%",
        // })
        .get());
    target;
    // @ts-ignore
    type = "VisLineHelper";
    constructor(line) {
        super();
        this.target = line;
        this.geometry.dispose();
        this.geometry.copy(line.geometry);
        this.material = new PointsMaterial({
            color: "rgb(255, 255, 255)",
            alphaMap: LineHelper.alphaTexture,
            transparent: true,
            size: 5,
            sizeAttenuation: false,
        });
        this.matrixAutoUpdate = false;
        this.matrixWorldNeedsUpdate = false;
        this.matrix = line.matrix;
        this.matrixWorld = line.matrixWorld;
        this.renderOrder = -1;
        // TODO:update
        this.raycast = () => { };
    }
}
//# sourceMappingURL=LineHelper.js.map
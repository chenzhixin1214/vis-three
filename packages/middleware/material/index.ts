import { defineModule } from "../module";
import LineBasicMaterialProcessor from "./LineBasicMaterialProcessor";
import { MaterialCompiler } from "./MaterialCompiler";
import { MaterialRule } from "./MaterialRule";
import MeshBasicMaterialProcessor from "./MeshBasicMaterialProcessor";
import MeshPhongMaterialProcessor from "./MeshPhongMaterialProcessor";
import MeshPhysicalMaterialProcessor from "./MeshPhysicalMaterialProcessor";
import MeshStandardMaterialProcessor from "./MeshStandardMaterialProcessor";
import PointsMaterialProcessor from "./PointsMaterialProcessor";
import ShaderMaterialProcessor from "./ShaderMaterialProcessor";
import SpriteMaterialProcessor from "./SpriteMaterialProcessor";

export default defineModule({
  type: "material",
  compiler: MaterialCompiler,
  rule: MaterialRule,
  processors: [
    LineBasicMaterialProcessor,
    MeshBasicMaterialProcessor,
    MeshPhongMaterialProcessor,
    MeshPhysicalMaterialProcessor,
    MeshStandardMaterialProcessor,
    PointsMaterialProcessor,
    ShaderMaterialProcessor,
    SpriteMaterialProcessor,
  ],
});

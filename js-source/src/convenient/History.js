export class Action {
    next() {
        console.warn(`this action can not set next function: ${this.constructor.name}`);
    }
    prev() {
        console.warn(`this action can not set prev function: ${this.constructor.name}`);
    }
}
export class History {
    actionList = [];
    index = -1;
    step = 50;
    constructor(step) {
        this.step = step || 50;
    }
    do(command) {
        this.actionList[this.index][command]();
    }
    /**
     * 注册动作
     * @param action new class extends BasicAction
     * @param exec 是否立即执行动作的next
     */
    apply(action, exec = false) {
        const actionList = this.actionList;
        // 动作超过step情空前面缓存
        if (this.index === actionList.length - 1 &&
            actionList.length >= this.step) {
            actionList.shift();
            this.index = this.actionList.length - 1;
            // 如果是在中途添加动作的，后面的全部取消
        }
        else if (this.index !== -1) {
            // 手动清除动作中的缓存
            actionList.splice(this.index + 1, actionList.length - 1);
        }
        else if (this.index === -1) {
            this.actionList = [];
        }
        this.actionList.push(action);
        if (exec) {
            this.redo();
        }
        else {
            this.index += 1;
        }
    }
    redo() {
        this.index += 1;
        if (this.index > this.actionList.length - 1) {
            this.index = this.actionList.length - 1;
            return;
        }
        this.do("next");
    }
    undo() {
        if (this.index < 0) {
            return;
        }
        this.do("prev");
        this.index -= 1;
    }
    clear() {
        this.actionList = [];
    }
}
//# sourceMappingURL=History.js.map
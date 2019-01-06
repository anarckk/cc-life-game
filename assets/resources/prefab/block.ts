import Color = cc.Color;
import { Observable } from 'rxjs';

const {ccclass, property} = cc._decorator;

@ccclass
export default class Block extends cc.Component {
    @property(cc.Node) private content: cc.Node = null;
    @property(Color) private borderColor = new Color().fromHEX('#9f9f9f');
    @property(Color) private liveColor = new Color().fromHEX('#000000');
    @property(Color) private dieColor = new Color().fromHEX('#FFFFFF');
    // 边长
    @property private sideWidth = 12;
    @property private borderWidth = 2;
    // 0 死 ： 1 活
    private _status: 0 | 1 = 0;

    get SideWidth(): number {
        return this.sideWidth;
    }

    protected onLoad(): void {
        const side = this.sideWidth;
        this.node.width = side;
        this.node.height = side;
        const b = this.sideWidth - this.borderWidth;
        this.content.width = b;
        this.content.height = b;
    }

    private flash() {
        if (this._status === 0) {
            this.content.color = this.dieColor;
        } else if (this._status === 1) {
            this.content.color = this.liveColor;
        }
    }

    /**
     * 从节点中把脚本找出来
     * @param node
     */
    static get(node: cc.Node): Block {
        return node.getComponent(Block);
    }
}

export function loadBlockPrefab(): Observable<cc.Prefab> {
    return new Observable(observable => {
        cc.loader.loadRes('./prefab/block', cc.Prefab, (err, prefab) => {
            if (err) {
                observable.error(err);
            } else {
                observable.next(prefab);
                observable.complete();
            }
        });
    });
}
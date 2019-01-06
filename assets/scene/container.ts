import Block, { loadBlockPrefab } from '../resources/prefab/block';
import { prefabToNode }           from '../script/prefab-to-node.rxop';
import instantiate = cc.instantiate;

const {ccclass, property} = cc._decorator;

@ccclass
export default class Container extends cc.Component {
    private nodeArray: Array<Array<cc.Node>> = [];

    start() {
        loadBlockPrefab().pipe(prefabToNode()).subscribe(node => {
            this.node.addChild(node);
            const sideWidth = Block.get(node).SideWidth;
            const col = Math.floor(this.node.width / sideWidth);
            const row = Math.floor(this.node.height / sideWidth);
            console.log('width', this.node.width);
            console.log('height', this.node.height);
            console.log('col', col);
            console.log('row', row);
            this.node.removeAllChildren();
            for (let i = 0; i < row; i++) {
                const array = [];
                for (let j = 0; j < col; j++) {
                    const n = instantiate(node);
                    array.push(n);
                    this.node.addChild(n);
                }
                this.nodeArray.push(array);
            }
            console.log(this.nodeArray);
            console.log(this.nodeArray.reduce((first, second) => first.concat(second)).length);
        });
    }

    // update (dt) {}
}

/**
 * Created by kkcra on 2019/1/6
 */
import { copyNode } from '../script/node-creator.util';

const {ccclass, property} = cc._decorator;

@ccclass
export default class Container extends cc.Component {
    @property(cc.Node) container: cc.Node = null;
    @property(cc.Node) block: cc.Node = null;

    protected start(): void {
        this.container.addChild(copyNode(this.block));
    }
}
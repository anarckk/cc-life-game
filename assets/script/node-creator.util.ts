/**
 * Created by kkcra on 2019/1/6
 */

export function copyNode(node: cc.Node): cc.Node {
    const newNode = cc.instantiate(node);
    if(newNode.uuid === node.uuid) {
        console.warn('cc.instantiate 没有重设uuid', newNode.uuid);
    }
    return newNode;
}

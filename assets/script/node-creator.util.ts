/**
 * Created by kkcra on 2019/1/6
 */

export function copyNode(node: cc.Node): cc.Node {
    const newNode = cc.instantiate(node);
    console.log('新的uuid', newNode.uuid);
    console.log('原来的Uuid', node.uuid);
    return newNode;
}

/**
 * Created by kkcra on 2019/1/6
 */
import { Observable, OperatorFunction } from 'rxjs';
import Prefab = cc.Prefab;
import Node = cc.Node;
import { map }                          from 'rxjs/operators';
import instantiate = cc.instantiate;

/**
 * rxjs 操作符
 * 将prefab转成node
 */
export function prefabToNode(): OperatorFunction<Prefab, Node> {
    return (source: Observable<Prefab>) => {
        return source.pipe(
            map(prefab => instantiate(prefab.data))
        );
    };
}
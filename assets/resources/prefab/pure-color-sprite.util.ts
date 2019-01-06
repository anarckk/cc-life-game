/**
 * Created by kkcra on 2019/1/6
 */
import { Observable } from 'rxjs';
import { map }        from 'rxjs/operators';
import Prefab = cc.Prefab;
import instantiate = cc.instantiate;

export function loadPureColorSpritePrefab(): Observable<Prefab> {
    return new Observable(observable => {
        cc.loader.loadRes('./prefab/pure-color-sprite', cc.Prefab, function (error, prefab: cc.Prefab) {
            observable.next(prefab);
            observable.complete();
        });
    });
}

export function loadLifeGameBlock(): Observable<cc.Node> {
    return loadPureColorSpritePrefab().pipe(
        map(prefab => {
            const node = new cc.Node();
            const pNo = prefab.data;
            const content = instantiate(prefab.data);
            return node;
        })
    );
}

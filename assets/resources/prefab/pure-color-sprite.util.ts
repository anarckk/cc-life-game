/**
 * Created by kkcra on 2019/1/6
 */
import { Observable } from 'rxjs';
import Prefab = cc.Prefab;

export function loadPureColorSpritePrefab(): Observable<Prefab> {
    return new Observable(observable => {
        cc.loader.loadRes('./prefab/pure-color-sprite', cc.Prefab, function (error, prefab: cc.Prefab) {
            observable.next(prefab);
            observable.complete();
        });
    });
}

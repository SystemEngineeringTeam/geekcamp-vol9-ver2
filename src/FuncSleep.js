export const Sleep = (waitSec, callbackFunc) =>{
    var spanedSec = 0;
    var waitFunc = function () {
        spanedSec++;
        if (spanedSec >= waitSec) {
            if (callbackFunc) callbackFunc();
            return;
        }
        clearTimeout(id);
        id = setTimeout(waitFunc, 1000);
    };
    var id = setTimeout(waitFunc, 1000);

}

export default Sleep;
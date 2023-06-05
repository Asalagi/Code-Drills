// Day One
+(async function executor() {
    try {
        await asyncFunc1();
        console.log('Async1 success');
    } catch {
        console.log('Async1 failure');
    }
    try {
        await asyncFunc2();
        console.log('Async2 success');
    } catch {
        console.log('Async failure');
    }
     try {
        await asyncFunc3();
        console.log('Async3 success');
     } catch {
        console.log('Async3 failure');
     }
     console.log('All succeeded');
})();

//

+(async function executor() {
    try {
        await asyncFunc1();
        console.log('Async1 success');
    } catch {
        console.log('Async1 failure');
    } 
    try {
        await asyncFunc2();
        console.log('Async2 success');
    } catch {
        console.log('Async2 failure');
    }
    try {
        await asyncFunc3();
        console.log('Async3 success');
    } catch {
        console.log('Aynce3 failure');
    }
    console.log('All succeeded');
})();


+(async function executor() {
    try {
        await asyncFunc1();
        console.log('Async1 success');
    } catch {
        console.log('Async1 failure');
    } 
    try {
        await asyncFunc2();
        console.log('Async2 success');
    } catch {
        console.log('Async2 failure')
    }
    try {
        await asyncFunc3();
        console.log('Async3 success');
    } catch {
        console.log('Async3 failure');
    }
    console.log('All succeeded');
})();

+(async function executor() {
    try {
        await asyncFun1();
        console.log('Async1 success');
    } catch { 
        console.loh('Async1 failure');
    }
    try {
        await asyncFunc2();
        console.log('Async2 success');
    } catch {
        console.log('Async2 failure');
    }
    try {
        await asyncFunc3();
        console.log('Async3 successs');
    } catch { 
        console.log('Async3 failure');
    }
    console.log('All succeeded');
})():
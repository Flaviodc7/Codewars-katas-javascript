// Kata finalizado el 13/12/2021

function sumIntervals(intervals){
    let interval = []
    //Putting all numbers into the array
    intervals.map(a => {
        for (let i = a[0]; i < a[1]; i++){
            interval.push(i);
        }
    })
    // cleaning interval to eliminate duplicate entries
    let result = [...new Set (interval)];
    // returning number of entries
    return result.length;
}
let inputString = 'Осуществить невозможно, задача слишком сложная.';
let words = inputString.split(/[ ,.]+/);

//words.forEach(w => console.log(w.slice(-2)));

var ver = 0, adver= 0, adj = 0;

for (w of words) {
    let lastLet = w.slice(-1);

    if (lastLet == 'о')
        adver++;
    else if (lastLet == 'ь')
        ver++;
    else if (w.slice(-2) =='ая')
        adj++;
}

$('#out').text('Наречий ' + adver + ', глаголов ' + ver + ', прилагательных ' + adj + '.');
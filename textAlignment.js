

function textAlign(words, maxLength, justified) {
    let lines = [];
    let singleLine = [];
    let i = 0;

    lines[i] = [];

    // Add words to lines
    words.map( word => {
        singleLine.push(word);
        let newLine = singleLine.join(" ");

        if (newLine.length < maxLength) {
            lines[i].push(word);
        } else {
            lines[i++].push(word);
            singleLine = [];
        }
    });

    // Add spaces
    lines.map( line => {
        if ( justified ) {
            const lineLength = line.join("").length;
            const spacesToAdd = lineLength - maxLength;

            const wordCount = line.split(" ");

            const [ spaces, extraSpaces ] = [ 
                spacesToAdd / (wordCount -1),
                spacesToAdd % (wordCount -1)
            ];

            if ( wordCount == 1 ) {

            }
        }
    });

    return lines;
}

// Cases
let words = "This could be a little bit hard".split(" ");
let expected = [
    "This could  ",
    "be a little ",
    "bit hard    "
];
let results = textAlign(words, 12, false)
console.log(results === expected,`Should accept words with 12 maxLength`, results);



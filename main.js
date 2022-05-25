
class CharPattern {
    // this is added to create space of given length
    addSpace(n) {
        for (var i = 0; i < n; ++i) {
            process.stdout.write(" ");
        }
    }
    printPattern(n, startAscii) {
        console.log("\nGiven n : " + n);
        // Top half 
        for (var i = 1; i <= n; ++i) {
            this.addSpace(n - i);
            for (var j = i; j >= 1; --j) {
                j == i ? process.stdout.write("" + String.fromCharCode(startAscii + j)) : process.stdout.write(" ");
            }
            for (var k = 2; k <= i; ++k) {
                k == i ? process.stdout.write("" + String.fromCharCode(startAscii + k)) : process.stdout.write(" ");
            }
            process.stdout.write("\n");
        }
        
    }
}

function main(char) {
    var startAscii = char.charCodeAt(0);
    const asciiA = 65; //ascii of Char A
    var pattern = new CharPattern();
    const length = startAscii - asciiA + 1;  //calculating the lenght
    pattern.printPattern(length, asciiA - 1);
}
const myArgs = process.argv.slice(2)
main(myArgs[0]);
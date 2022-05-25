
class CharPattern {
    // this is added to create space of given length
    addSpace(n) {
        for (var i = 0; i < n; ++i) {
            process.stdout.write(" ");
        }
    }
    printPattern(n, startAscii) {
    
        // this is to print upper side of patterm
        for (var i = 1; i <= n; ++i) {
            this.addSpace(n - i);
            // this is to print upper left middle side of pattern
            for (var j = i; j >= 1; --j) {
                j == i ? process.stdout.write("" + String.fromCharCode(startAscii + j)) : process.stdout.write(" ");
            } 
            // this is to print upper right side of pattern 
            for (var k = 2; k <= i; ++k) {
                k == i ? process.stdout.write("" + String.fromCharCode(startAscii + k)) : process.stdout.write(" ");
            }
            process.stdout.write("\n");
        }
        //this is to print lower side of pattern
        for (var i = n - 1; i >= 1; --i) {
            this.addSpace(n - i);
            // this is to print lower left middle side of pattern
            for (var j = i; j >= 1; --j) {
                j == i ? process.stdout.write("" + String.fromCharCode(startAscii + j)) : process.stdout.write(" ");
            }
            // this is to print lower right side of pattrn
            for (var k = 2; k <= i; ++k) {
                k == i ? process.stdout.write("" + String.fromCharCode(startAscii + k)) : process.stdout.write(" ");
            }
            process.stdout.write("\n");
        }
    }
}

function main(char) {
    if(!char ){
        console.error("please provide valid character A-Z ");
        return;
    }
    var startAscii = char.charCodeAt(0);
    if(startAscii<65 || startAscii> 90 ){
        console.error("invalid character ::"+char);
        return;
    } 
    const asciiA = 65; //ascii of Char A
    var pattern = new CharPattern();

    const length = startAscii - asciiA + 1;  //calculating the lenght
    pattern.printPattern(length, asciiA - 1);
}
const myArgs = process.argv.slice(2)
main(myArgs[0]);
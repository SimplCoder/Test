
class CharPattern
{
	// this is added to create space of given length
	addSpace(n)
	{
		for (var i = 0; i < n; ++i)
		{
			process.stdout.write(" ");
		}
	}
	
}

function main(char)
{ 
    var startAscii= char.charCodeAt(0);
    const asciiA= 65;   //ascii of Char A
    var pattern = new CharPattern();
    const length= startAscii-asciiA+1;  //calculating the legth
		
}
const myArgs = process.argv.slice(2)
main(myArgs[0]);
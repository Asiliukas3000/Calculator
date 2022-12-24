let firstNumber=0;
let secondNumber=0;
let answer=0;

function multiply(a, b)
{
	return a*b;
}
function divide(a, b)
{
	return a/b;
}
function findRemainder(a, b)
{
	return a%b;
}
function add(a, b)
{
	return a+b;
}
function take(a, b)
{
	return a-b;
}
let calculation = document.querySelector("#calculation");
let answerField = document.querySelector("#answer")
function addCharacter(a)
{
	calculation.textContent+=a;
}
function reset()
{
	firstNumber=0;
	secondNumber=0;
	answer=0;
	answerField.textContent="";
	calculation.textContent="";
	
}
function deleteNumber(){calculation.textContent=calculation.textContent.slice(0,-1)}

document.querySelector("#one").addEventListener("click",function(){addCharacter(1)});
document.querySelector("#two").addEventListener("click",function(){addCharacter(2)});
document.querySelector("#three").addEventListener("click",function(){addCharacter(3)});
document.querySelector("#four").addEventListener("click",function(){addCharacter(4)});
document.querySelector("#five").addEventListener("click",function(){addCharacter(5)});
document.querySelector("#six").addEventListener("click",function(){addCharacter(6)});
document.querySelector("#seven").addEventListener("click",function(){addCharacter(7)});
document.querySelector("#eight").addEventListener("click",function(){addCharacter(8)});
document.querySelector("#nine").addEventListener("click",function(){addCharacter(9)});
document.querySelector("#zero").addEventListener("click",function(){addCharacter(0)});
document.querySelector("#remainder").addEventListener("click",function(){addCharacter('%')});
document.querySelector("#division").addEventListener("click",function(){addCharacter('÷')});
document.querySelector("#multiplication").addEventListener("click",function(){addCharacter('×')});
document.querySelector("#addition").addEventListener("click",function(){addCharacter('+')});
document.querySelector("#subtraction").addEventListener("click",function(){addCharacter('-')});
document.querySelector("#dot").addEventListener("click",function(){addCharacter('.')});
document.querySelector("#reset").addEventListener("click",function(){reset()});
document.querySelector("#delete").addEventListener("click",function(){deleteNumber()});
document.querySelector("#equals").addEventListener("click",function(){calculate()});

function calculate()
{
	let pattern = new RegExp('([0-9]+.*[0-9]*)([\-×%÷+])([0-9]+.*[0-9]*)');
	data = calculation.textContent.match(pattern);
	let answer = ":(";
	if(data!=null)
		switch(data[2])
		{
			case '-':
				answer=take(data[1],data[3]);
				break;
			case '×':
				answer=multiply(data[1],data[3]);
				break;
			case '%':
				answer=findRemainder(data[1],data[3]);
				break;
			case '÷':
				answer=divide(data[1],data[3]);
				break;
			case '+':
				answer=add(parseFloat(data[1]),parseFloat(data[3]));
				break;
			default:
				answer=":(";
				break;
	}
	answerField.textContent=Math.round(answer*1000)/1000;

}




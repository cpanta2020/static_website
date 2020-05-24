
var myWorker = new Worker("http://localhost:1313/static_website/post/worker.js");

function myFunc()
{
	var first1 = parseInt(document.querySelector('#number1').value);
	var first2 = parseInt(document.querySelector('#number2').value);
	var first3 = parseInt(document.querySelector('#number3').value);
	var first4 = parseInt(document.querySelector('#number4').value);
	var first5 = parseInt(document.querySelector('#number5').value);
	var first6 = parseInt(document.querySelector('#number6').value);
	var first7 = parseInt(document.querySelector('#number7').value);
	var first8 = parseInt(document.querySelector('#number8').value);
	var first9 = parseInt(document.querySelector('#number9').value);
	var first10 = parseInt(document.querySelector('#number10').value);
	var first11 = parseInt(document.querySelector('#number11').value);
	var first12 = parseInt(document.querySelector('#number12').value);
	var second1 = parseInt(document.getElementById('lbl1').innerHTML);
	var second2 = parseInt(document.getElementById('lbl2').innerHTML.replace('+ ',''));
	var sum1=second1+second2;
	var second3 = parseInt(document.getElementById('lbl3').innerHTML);
	var second4 = parseInt(document.getElementById('lbl4').innerHTML.replace('+ ',''));
	var sum2=second3+second4;
	var second5 = parseInt(document.getElementById('lbl5').innerHTML);
	var second6 = parseInt(document.getElementById('lbl6').innerHTML.replace('+ ',''));
	var sum3=second5+second6;
	var second7 = parseInt(document.getElementById('lbl7').innerHTML);
	var second8 = parseInt(document.getElementById('lbl8').innerHTML.replace('+ ',''));
	var sum4=second7+second8;
	var second9 = parseInt(document.getElementById('lbl9').innerHTML);
	var second10 = parseInt(document.getElementById('lbl10').innerHTML.replace('+ ',''));
	var sum5=second9+second10;
	var second11 = parseInt(document.getElementById('lbl11').innerHTML);
	var second12 = parseInt(document.getElementById('lbl12').innerHTML.replace('+ ',''));
	var sum6=second11+second12;
	var second13 = parseInt(document.getElementById('lbl13').innerHTML);
	var second14 = parseInt(document.getElementById('lbl14').innerHTML.replace('+ ',''));
	var sum7=second13+second14;
	var second15 = parseInt(document.getElementById('lbl15').innerHTML);
	var second16 = parseInt(document.getElementById('lbl16').innerHTML.replace('+ ',''));
	var sum8=second15+second16;
	var second17 = parseInt(document.getElementById('lbl17').innerHTML);
	var second18 = parseInt(document.getElementById('lbl18').innerHTML.replace('+ ',''));
	var sum9=second17+second18;
	var second19 = parseInt(document.getElementById('lbl19').innerHTML);
	var second20 = parseInt(document.getElementById('lbl20').innerHTML.replace('+ ',''));
	var sum10=second19+second20;
	var second21 = parseInt(document.getElementById('lbl21').innerHTML);
	var second22 = parseInt(document.getElementById('lbl22').innerHTML.replace('+ ',''));
	var sum11=second21+second22;
	var second23 = parseInt(document.getElementById('lbl23').innerHTML);
	var second24 = parseInt(document.getElementById('lbl24').innerHTML.replace('+ ',''));
	var sum12=second23+second24;
	const result = document.querySelector('.result');
	const result1 = document.querySelector('.resp1');
	const result2 = document.querySelector('.resp2');
	const result3 = document.querySelector('.resp3');
	const result4 = document.querySelector('.resp4');
	const result5 = document.querySelector('.resp5');
	const result6 = document.querySelector('.resp6');
	const result7 = document.querySelector('.resp7');
	const result8 = document.querySelector('.resp8');
	const result9 = document.querySelector('.resp9');
	const result10 = document.querySelector('.resp10');
	const result11 = document.querySelector('.resp11');
	const result12 = document.querySelector('.resp12');
	var band=0;
	if(first1!=sum1)
	{
		result1.textContent = "Incorrecto";band=1;
	}else
	{
		result1.textContent = "Correcto";
	}
	if(first2!=sum2)
	{
		result2.textContent = "Incorrecto";band=1;
	}else
	{
		result2.textContent = "Correcto";
	} 
	if(first3!=sum3)
	{
		result3.textContent = "Incorrecto";band=1;
	}else
	{
		result3.textContent = "Correcto";
	} 
	if(first4!=sum4)
	{
		result4.textContent = "Incorrecto";band=1;
	}else
	{
		result4.textContent = "Correcto";
	}
	if(first5!=sum5)
	{
		result5.textContent = "Incorrecto";band=1;
	}else
	{
		result5.textContent = "Correcto";
	}
	if(first6!=sum6)
	{
		result6.textContent = "Incorrecto";band=1;
	}else
	{
		result6.textContent = "Correcto";
	}
	if(first7!=sum7)
	{
		result7.textContent = "Incorrecto";band=1;
	}else
	{
		result7.textContent = "Correcto";
	}
	if(first8!=sum8)
	{
		result8.textContent = "Incorrecto";band=1;
	}else
	{
		result8.textContent = "Correcto";
	}
	if(first9!=sum9)
	{
		result9.textContent = "Incorrecto";band=1;
	}else
	{
		result9.textContent = "Correcto";
	}
	if(first10!=sum10)
	{
		result10.textContent = "Incorrecto";band=1;
	}else
	{
		result10.textContent = "Correcto";
	}
	if(first11!=sum11)
	{
		result11.textContent = "Incorrecto";band=1;
	}else
	{
		result11.textContent = "Correcto";
	}
	if(first12!=sum12)
	{
		result12.textContent = "Incorrecto";band=1;
	}else
	{
		result12.textContent = "Correcto";
	}
	var menu2 = document.getElementById('menuContac');
	if(band==0)
	{
		result.textContent = "Resultado: Correcto, puede continuar con el nivel 2";
		menu2.style.pointerEvents="all";
		menu2.style.cursor="pointer";
		alert("Resultado: Correcto, puede continuar con el nivel 2");
	}
	else
	{		
		result.textContent = "Resultado: Incorrecto";
		menu2.style.pointerEvents="none";
		menu2.style.cursor="default";
	}
}

function myFunc1()
{
	var first1 = parseInt(document.querySelector('#nnumber1').value);
	var first2 = parseInt(document.querySelector('#nnumber2').value);
	var first3 = parseInt(document.querySelector('#nnumber3').value);
	var first4 = parseInt(document.querySelector('#nnumber4').value);
	var first5 = parseInt(document.querySelector('#nnumber5').value);
	var first6 = parseInt(document.querySelector('#nnumber6').value);
	var first7 = parseInt(document.querySelector('#nnumber7').value);
	var first8 = parseInt(document.querySelector('#nnumber8').value);
	var first9 = parseInt(document.querySelector('#nnumber9').value);
	var first10 = parseInt(document.querySelector('#nnumber10').value);
	var first11 = parseInt(document.querySelector('#nnumber11').value);
	var first12 = parseInt(document.querySelector('#nnumber12').value);
	var second1 = parseInt(document.getElementById('llbl1').innerHTML);
	var second2 = parseInt(document.getElementById('llbl2').innerHTML.replace('+ ',''));
	var sum1=second1+second2;
	var second3 = parseInt(document.getElementById('llbl3').innerHTML);
	var second4 = parseInt(document.getElementById('llbl4').innerHTML.replace('+ ',''));
	var sum2=second3+second4;
	var second5 = parseInt(document.getElementById('llbl5').innerHTML);
	var second6 = parseInt(document.getElementById('llbl6').innerHTML.replace('+ ',''));
	var sum3=second5+second6;
	var second7 = parseInt(document.getElementById('llbl7').innerHTML);
	var second8 = parseInt(document.getElementById('llbl8').innerHTML.replace('+ ',''));
	var sum4=second7+second8;
	var second9 = parseInt(document.getElementById('llbl9').innerHTML);
	var second10 = parseInt(document.getElementById('llbl10').innerHTML.replace('+ ',''));
	var sum5=second9+second10;
	var second11 = parseInt(document.getElementById('llbl11').innerHTML);
	var second12 = parseInt(document.getElementById('llbl12').innerHTML.replace('+ ',''));
	var sum6=second11+second12;
	var second13 = parseInt(document.getElementById('llbl13').innerHTML);
	var second14 = parseInt(document.getElementById('llbl14').innerHTML.replace('+ ',''));
	var sum7=second13+second14;
	var second15 = parseInt(document.getElementById('llbl15').innerHTML);
	var second16 = parseInt(document.getElementById('llbl16').innerHTML.replace('+ ',''));
	var sum8=second15+second16;
	var second17 = parseInt(document.getElementById('llbl17').innerHTML);
	var second18 = parseInt(document.getElementById('llbl18').innerHTML.replace('+ ',''));
	var sum9=second17+second18;
	var second19 = parseInt(document.getElementById('llbl19').innerHTML);
	var second20 = parseInt(document.getElementById('llbl20').innerHTML.replace('+ ',''));
	var sum10=second19+second20;
	var second21 = parseInt(document.getElementById('llbl21').innerHTML);
	var second22 = parseInt(document.getElementById('llbl22').innerHTML.replace('+ ',''));
	var sum11=second21+second22;
	var second23 = parseInt(document.getElementById('llbl23').innerHTML);
	var second24 = parseInt(document.getElementById('llbl24').innerHTML.replace('+ ',''));
	var sum12=second23+second24;
	const result = document.querySelector('.rresult');
	const result1 = document.querySelector('.rresp1');
	const result2 = document.querySelector('.rresp2');
	const result3 = document.querySelector('.rresp3');
	const result4 = document.querySelector('.rresp4');
	const result5 = document.querySelector('.rresp5');
	const result6 = document.querySelector('.rresp6');
	const result7 = document.querySelector('.rresp7');
	const result8 = document.querySelector('.rresp8');
	const result9 = document.querySelector('.rresp9');
	const result10 = document.querySelector('.rresp10');
	const result11 = document.querySelector('.rresp11');
	const result12 = document.querySelector('.rresp12');
	var band=0;
	if(first1!=sum1)
	{
		result1.textContent = "Incorrecto";band=1;
	}else
	{
		result1.textContent = "Correcto";
	}
	if(first2!=sum2)
	{
		result2.textContent = "Incorrecto";band=1;
	}else
	{
		result2.textContent = "Correcto";
	} 
	if(first3!=sum3)
	{
		result3.textContent = "Incorrecto";band=1;
	}else
	{
		result3.textContent = "Correcto";
	} 
	if(first4!=sum4)
	{
		result4.textContent = "Incorrecto";band=1;
	}else
	{
		result4.textContent = "Correcto";
	}
	if(first5!=sum5)
	{
		result5.textContent = "Incorrecto";band=1;
	}else
	{
		result5.textContent = "Correcto";
	}
	if(first6!=sum6)
	{
		result6.textContent = "Incorrecto";band=1;
	}else
	{
		result6.textContent = "Correcto";
	}
	if(first7!=sum7)
	{
		result7.textContent = "Incorrecto";band=1;
	}else
	{
		result7.textContent = "Correcto";
	}
	if(first8!=sum8)
	{
		result8.textContent = "Incorrecto";band=1;
	}else
	{
		result8.textContent = "Correcto";
	}
	if(first9!=sum9)
	{
		result9.textContent = "Incorrecto";band=1;
	}else
	{
		result9.textContent = "Correcto";
	}
	if(first10!=sum10)
	{
		result10.textContent = "Incorrecto";band=1;
	}else
	{
		result10.textContent = "Correcto";
	}
	if(first11!=sum11)
	{
		result11.textContent = "Incorrecto";band=1;
	}else
	{
		result11.textContent = "Correcto";
	}
	if(first12!=sum12)
	{
		result12.textContent = "Incorrecto";band=1;
	}else
	{
		result12.textContent = "Correcto";
	}
	var menu2 = document.getElementById('menuContac');
	if(band==0)
	{
		result.textContent = "Resultado: Correcto, FELICIDADES HA PASADO EL CURSO INTENSIVO.";
		alert("Resultado: Correcto, FELICIDADES HA PASADO EL CURSO INTENSIVO.");
	}
	else
	{		
		result.textContent = "Resultado: Incorrecto";
	}
}

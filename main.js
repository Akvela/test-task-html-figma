(()=>{"use strict";var e=document.getElementById("car-cost"),t=document.getElementById("car-cost-range"),n=document.getElementById("an-initial-fee"),a=document.getElementById("an-initial-fee-range"),l=document.getElementById("rental-period"),u=document.getElementById("rental-period-range"),r=document.getElementById("percent"),E=document.getElementById("leasing-sum"),i=document.getElementById("monthly-payment"),c=document.querySelector(".calculator__button");function o(e){return e.toString().replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g,"$1 ")}function d(){var e=Number(l.value)*Number(i.textContent.split(" ").join("").split("₽").join(""))+Number(n.value);E.textContent=o(e)+"₽"}function v(){var t=(Number(e.value)-Number(n.value))*(.05*Math.pow(1.05,Number(l.value))/(Math.pow(1.05,Number(l.value))-1));i.textContent=o(parseInt(t))+"₽"}t.addEventListener("input",(function(){var n=t.value;t.style.background="-webkit-linear-gradient(left, #FF9514 0%, #FF9514 ".concat(n,"%, #E1E1E1 ").concat(n,"%, #E1E1E1 100%)"),n<=15?(e.value=15e5,function(e){throw new TypeError('"value" is read-only')}(),t.style.background="-webkit-linear-gradient(left, #FF9514 0%, #FF9514 0%, #E1E1E1 0%, #E1E1E1 100%)"):e.value=1e5*n,d(),v()})),e.addEventListener("change",(function(){if(e.value<15e5)e.value=15e5,t.value=0,t.style.background="-webkit-linear-gradient(left, #FF9514 0%, #FF9514 0%, #E1E1E1 0%, #E1E1E1 100%)";else if(e.value>1e7)e.value=1e7,t.value=100,t.style.background="-webkit-linear-gradient(left, #FF9514 0%, #FF9514 100%, #E1E1E1 100%, #E1E1E1 100%)";else{var n=e.value/1e5;t.value=n,t.style.background="-webkit-linear-gradient(left, #FF9514 0%, #FF9514 ".concat(n,"%, #E1E1E1 ").concat(n,"%, #E1E1E1 100%)")}d(),v()})),a.addEventListener("input",(function(){var t=2*(a.value-10);a.style.background="-webkit-linear-gradient(left, #FF9514 0%, #FF9514 ".concat(t,"%, #E1E1E1 ").concat(t,"%, #E1E1E1 100%)"),a.value>9&&a.value<61&&(n.value=e.value/100*a.value,r.textContent=a.value+"%"),d(),v()})),n.addEventListener("change",(function(){var t=parseInt(100*Number(n.value)/Number(e.value));t<=10?(a.value=0,r.textContent="10%",a.style.background="-webkit-linear-gradient(left, #FF9514 0%, #FF9514 0%, #E1E1E1 0%, #E1E1E1 100%)",n.value=e.value/100*10):t>=60?(a.value=60,r.textContent="60%",a.style.background="-webkit-linear-gradient(left, #FF9514 0%, #FF9514 100%, #E1E1E1 100%, #E1E1E1 100%)",n.value=e.value/100*60):(r.textContent=t+"%",a.value=t,a.style.background="-webkit-linear-gradient(left, #FF9514 0%, #FF9514 ".concat(2*(t-10),"%, #E1E1E1 ").concat(2*(t-10),"%, #E1E1E1 100%)")),d(),v()})),u.addEventListener("input",(function(){var e=100*u.value/120;u.style.background="-webkit-linear-gradient(left, #FF9514 0%, #FF9514 ".concat(e,"%, #E1E1E1 ").concat(e,"%, #E1E1E1 100%)"),u.value>5&&u.value<121&&(l.value=parseInt(u.value)),d(),v()})),l.addEventListener("change",(function(){if(l.value<6)l.value=6,u.value=0,u.style.background="-webkit-linear-gradient(left, #FF9514 0%, #FF9514 0%, #E1E1E1 0%, #E1E1E1 100%)";else if(l.value>120)l.value=120,u.value=120,u.style.background="-webkit-linear-gradient(left, #FF9514 0%, #FF9514 100%, #E1E1E1 100%, #E1E1E1 100%)";else{var e=parseInt(l.value/114*100);u.value=e,u.style.background="-webkit-linear-gradient(left, #FF9514 0%, #FF9514 ".concat(100*e/120,"%, #E1E1E1 ").concat(100*e/120,"%, #E1E1E1 100%)")}d(),v()})),d(),v(),c.addEventListener("click",(function(t){t.preventDefault(),c.disabled=!0;var a={"Стоимость автомобиля":e.value,"Первоначальный взнос":n.value,"Срок лизинга":l.value,"Сумма договора лизинга":E.textContent,"Ежемесячный платеж от":i.textContent};alert(JSON.stringify(a))}))})();
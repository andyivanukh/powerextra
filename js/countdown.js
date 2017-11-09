"use strict";var countdown=document.getElementsByClassName('js-countdown');if(countdown.length!==0){var countLength=countdown.length;var number=20;var order=2;var numberStr=String(number);var minProdCount=1;var maxProdCount=1;var minTimer=10000,maxTimer=30000;if(!isNaN(parseInt(countdown[0].innerText))&&parseInt(countdown[0].innerText)>5){number=countdown[0].innerText.trim();}if(isStorage()){var lastNumber=parseInt(localStorage.getItem("lastNumber"));if(!isNaN(lastNumber)){number=lastNumber;}}function prettyNumber(num,order){var numStr=num.toString();while(numStr.length<order){numStr='0'+numStr;}return numStr;}function updateCounters(){while(countLength){var countDigits=countdown[countLength-1].querySelectorAll('.js-count-digit');var countDigitsLength=countDigits.length;if(countDigitsLength===0){numberStr=prettyNumber(number,2)
countdown[countLength-1].innerText=numberStr;}else{numberStr=prettyNumber(number,countDigitsLength);for(var i=0;i<countDigitsLength;i++){countDigits[i].innerText=numberStr[i];}}countLength--;}if(isStorage()){localStorage.setItem("lastNumber",numberStr)};}updateCounters();function doCountdown(){countLength=countdown.length;if(number>5){number-=getRandomInt(minProdCount,maxProdCount);}else{clearInterval(timer);return 5;}updateCounters();}function getRandomInt(min,max){return Math.floor(Math.random()*(max-min+1))+min;}function isStorage(){if(window.localStorage!=undefined){return true;}else{return false;}}var timer=setInterval(doCountdown,getRandomInt(minTimer,maxTimer))}else{console.warn("You have to add \"js-countdown\" class for any DOM element");}
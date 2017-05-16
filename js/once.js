function once() {
	//pumps&treatpla
	gEBI("Spump").innerHTML = abbrNum(pumps[0].toFixed(0),0);
	gEBI("Mpump").innerHTML = abbrNum(pumps[1].toFixed(0),0);
	gEBI("Bpump").innerHTML = abbrNum(pumps[2].toFixed(0),0);
	gEBI("VBpump").innerHTML = abbrNum(pumps[3].toFixed(0),0);
	gEBI("STpump").innerHTML = abbrNum(treatPla[0].toFixed(0),0);
	gEBI("MTpump").innerHTML = abbrNum(treatPla[1].toFixed(0),0);
	gEBI("BTpump").innerHTML = abbrNum(treatPla[2].toFixed(0),0);
	gEBI("VBTpump").innerHTML = abbrNum(treatPla[3].toFixed(0),0);
	
	//treatment production, total production abd price
	gEBI("STpumpProd").innerHTML = s(treatProd[0]) + " m<sup>3</sup>";
	gEBI("MTpumpProd").innerHTML = s(treatProd[1]) + " m<sup>3</sup>";
	gEBI("BTpumpProd").innerHTML = s(treatProd[2]) + " m<sup>3</sup>";
	gEBI("VBTpumpProd").innerHTML = s(treatProd[3]) + " m<sup>3</sup>";
	gEBI("STpumpTotProd").innerHTML = s(treatProd[0]*treatPla[0]) + " m<sup>3</sup>";
	gEBI("MTpumpTotProd").innerHTML = s(treatProd[1]*treatPla[1]) + " m<sup>3</sup>";
	gEBI("BTpumpTotProd").innerHTML = s(treatProd[2]*treatPla[2]) + " m<sup>3</sup>";
	gEBI("VBTpumpTotProd").innerHTML = s(treatProd[3]*treatPla[3]) + " m<sup>3</sup>";
	gEBI("STpumpPrice").innerHTML = s(treatPrice[0]);
	gEBI("MTpumpPrice").innerHTML = s(treatPrice[1]);
	gEBI("BTpumpPrice").innerHTML = s(treatPrice[2]);
	gEBI("VBTpumpPrice").innerHTML = s(treatPrice[3]);
	//pump production, total production abd price
	gEBI("SpumpPrice").innerHTML = s(pumpPrice[0]);
	gEBI("MpumpPrice").innerHTML = s(pumpPrice[1]);
	gEBI("BpumpPrice").innerHTML = s(pumpPrice[2]);
	gEBI("VBpumpPrice").innerHTML = s(pumpPrice[3]);
	gEBI("SpumpTotProd").innerHTML = s(pumpProd[0]*pumps[0]) + " m<sup>3</sup>";
	gEBI("MpumpTotProd").innerHTML = s(pumpProd[1]*pumps[1]) + " m<sup>3</sup>";
	gEBI("BpumpTotProd").innerHTML = s(pumpProd[2]*pumps[2]) + " m<sup>3</sup>";
	gEBI("VBpumpTotProd").innerHTML = s(pumpProd[3]*pumps[3]) + " m<sup>3</sup>";
	gEBI("SpumpProd").innerHTML = s(pumpProd[0]) + " m<sup>3</sup>";
	gEBI("MpumpProd").innerHTML = s(pumpProd[1]) + " m<sup>3</sup>";
	gEBI("BpumpProd").innerHTML = s(pumpProd[2]) + " m<sup>3</sup>";
	gEBI("VBpumpProd").innerHTML = s(pumpProd[3]) + " m<sup>3</sup>";
	gEBI("SS").innerHTML = s(stWC[0]);
	gEBI("MS").innerHTML = s(stWC[1]);
	gEBI("BS").innerHTML = s(stWC[2]);
	gEBI("VBS").innerHTML = s(stWC[3]);
	gEBI("SSTotProd").innerHTML = s(stWC[0]*stWProd[0]) + " m<sup>3</sup>";
	gEBI("MSTotProd").innerHTML = s(stWC[1]*stWProd[1]) + " m<sup>3</sup>";
	gEBI("BSTotProd").innerHTML = s(stWC[2]*stWProd[2]) + " m<sup>3</sup>";
	gEBI("VBSTotProd").innerHTML = s(stWC[3]*stWProd[3]) + " m<sup>3</sup>";
	gEBI("SSProd").innerHTML = s(stWProd[0]) + " m<sup>3</sup>";
	gEBI("MSProd").innerHTML = s(stWProd[1]) + " m<sup>3</sup>";
	gEBI("BSProd").innerHTML = s(stWProd[2]) + " m<sup>3</sup>";
	gEBI("VBSProd").innerHTML = s(stWProd[3]) + " m<sup>3</sup>";
	gEBI("SSOpC").innerHTML = "$" + s(stWCost[0]);
	gEBI("MSOpC").innerHTML = "$" + s(stWCost[1]);
	gEBI("BSOpC").innerHTML = "$" + s(stWCost[2]);
	gEBI("VBSOpC").innerHTML = "$" + s(stWCost[3]);
	gEBI("SSTotOpC").innerHTML = "$" + s(stWCost[0]*stWC[0]);
	gEBI("MSTotOpC").innerHTML = "$" + s(stWCost[1]*stWC[1]);
	gEBI("BSTotOpC").innerHTML = "$" + s(stWCost[2]*stWC[2]);
	gEBI("VBSTotOpC").innerHTML = "$" + s(stWCost[3]*stWC[3]);
	gEBI("STpumpTotOpCost").innerHTML = "$" + s(treatCost[0]*treatPla[0]);
	gEBI("MTpumpTotOpCost").innerHTML = "$" + s(treatCost[1]*treatPla[1]);
	gEBI("BTpumpTotOpCost").innerHTML = "$" + s(treatCost[2]*treatPla[2]);
	gEBI("VBTpumpTotOpCost").innerHTML = "$" + s(treatCost[3]*treatPla[3]);
	gEBI("STpumpOpCost").innerHTML = "$" + s(treatCost[0]);
	gEBI("MTpumpOpCost").innerHTML = "$" + s(treatCost[1]);
	gEBI("BTpumpOpCost").innerHTML = "$" + s(treatCost[2]);
	gEBI("VBTpumpOpCost").innerHTML = "$" + s(treatCost[3]);
	gEBI("SpumpTotOpC").innerHTML = "$" + s(pumpCost[0]*pumps[0]);
	gEBI("MpumpTotOpC").innerHTML = "$" + s(pumpCost[1]*pumps[1]);
	gEBI("BpumpTotOpC").innerHTML = "$" + s(pumpCost[2]*pumps[2]);
	gEBI("VBpumpTotOpC").innerHTML = "$" + s(pumpCost[3]*pumps[3]);
	gEBI("SpumpOpC").innerHTML = "$" + s(pumpCost[0]);
	gEBI("MpumpOpC").innerHTML = "$" + s(pumpCost[1]);
	gEBI("BpumpOpC").innerHTML = "$" + s(pumpCost[2]);
	gEBI("VBpumpOpC").innerHTML = "$" + s(pumpCost[3]);
	gEBI("year").innerHTML = year;
	//...
	chP(1);
	chTr(1);
	chPiO(1);
	chPiP(1);
	chTrS(1);
	chPS(1);
	chSS(1);
	chBS(1);
	//abbrnum
	gEBI("priceBefore").innerHTML = abbrNum(price.toFixed(2),2);
	gEBI("priceAfter").innerHTML = abbrNum(((price/100)*105).toFixed(2),2);
	gEBI("houses").innerHTML = abbrNum(houses,2);
	gEBI("pricem3").innerHTML =  "$" + abbrNum((price.toFixed(2)),2);
	gEBI("bpb").innerHTML = pricePPM.toFixed(2);
	gEBI("bpa").innerHTML = ((pricePPM/100)*99).toFixed(2);
	gEBI("IncPP").innerHTML = abbrNum(priceIncP.toFixed(2),2);
	PW = pumps[0] * pumpProd[0] + pumps[1] * pumpProd[1] + pumps[2] * pumpProd[2] + pumps[3] * pumpProd[3];
	TW = treatPla[0] * treatProd[0] + treatPla[1] * treatProd[1] + treatPla[2] * treatProd[2] + treatPla[3] * treatProd[3];
	UW = HPP * WPH * PP;
//other
	gEBI("sup").innerHTML = s(HPP*PP);
	gEBI("PPM").innerHTML = abbrNum(pricePPM.toFixed(2),2);
	gEBI("PPP").innerHTML = abbrNum(pricePPP.toFixed(2),2);
	gEBI("PM").innerHTML = PO;
	gEBI("PP").innerHTML = PP;
	gEBI("PPH").innerHTML = HPP;
	gEBI("WPH").innerHTML = WPH.toFixed(2);
	gEBI("date").innerHTML = day;
	gEBI("prd").innerHTML = PW;
	gEBI("trt").innerHTML = TW;
	gEBI("NW").innerHTML = UW;
	gEBI("waterUB").innerHTML = WPH.toFixed(2);
	gEBI("priceIncWater").innerHTML = abbrNum(priceIncWaterU,2);
	gEBI("waterUA").innerHTML = ((WPH/100)*102.5).toFixed(2);
	
	gEBI("priceIncRateHouses").innerHTML = abbrNum((priceIncRateHouses.toFixed(2)),2);
	gEBI("rateHB").innerHTML = incRateHouses.toFixed(2);
	gEBI("rateHA").innerHTML = (incRateHouses + 0.1).toFixed(2);
	gEBI("priceDecPlP").innerHTML = abbrNum(priceDecPP.toFixed(2),2);
	gEBI("ppb").innerHTML = abbrNum(pricePPP.toFixed(2));
	gEBI("ppa").innerHTML = abbrNum(((pricePPP/100)*99).toFixed(2));
	gEBI("dcbpp").innerHTML = abbrNum(priceDecBP.toFixed(2),2);
	
	gEBI("priceIncWaterProd").innerHTML = s(priceIncWaterProd.toFixed(2),2);
	gEBI("pumpProdB1").innerHTML = s(pumpProd[0]);
	gEBI("pumpProdB2").innerHTML = s(pumpProd[1]);
	gEBI("pumpProdB3").innerHTML = s(pumpProd[2]);
	gEBI("pumpProdB4").innerHTML = s(pumpProd[3]);
	gEBI("pumpProdA1").innerHTML = s(pumpProd[0]*1.1);
	gEBI("pumpProdA2").innerHTML = s(pumpProd[1]*1.1);
	gEBI("pumpProdA3").innerHTML = s(pumpProd[2]*1.1);
	gEBI("pumpProdA4").innerHTML = s(pumpProd[3]*1.1);
	gEBI("priceIncTreatProd").innerHTML = s(priceIncTreatProd);
	gEBI("treatProdB1").innerHTML = s(treatProd[0]);
	gEBI("treatProdB2").innerHTML = s(treatProd[1]);
	gEBI("treatProdB3").innerHTML = s(treatProd[2]);
	gEBI("treatProdB4").innerHTML = s(treatProd[3]);
	gEBI("treatProdA1").innerHTML = s((treatProd[0]*1.1));
	gEBI("treatProdA2").innerHTML = s((treatProd[1]*1.1));
	gEBI("treatProdA3").innerHTML = s((treatProd[2]*1.1));
	gEBI("treatProdA4").innerHTML = s((treatProd[3]*1.1));
	gEBI("curBalance").innerHTML = s(curBalance);
	gEBI("interestRate").innerHTML = s(interest);
	gEBI("intNow").innerHTML = s(interest);
	gEBI("intAft").innerHTML = s(interest+0.5);
	gEBI("priceIncInt").innerHTML = s(priceIncInt);
	gEBI("curLoan").innerHTML = s(loan);
	gEBI("lInt").innerHTML = s(loanInterest);
	gEBI("curTaxL").innerHTML = s(loan/100);
	gEBI("fLoanTax").innerHTML = s(loan/100);
	gEBI("fIntInc").innerHTML = s((curBalance/100)*(100+interest)-curBalance);
	gEBI("capacitystW").innerHTML = s(stWC[0]*stWProd[0] + stWC[1]*stWProd[1] + stWC[2]*stWProd[2] + stWC[3]*stWProd[3]);
	gEBI("inv").value = 0;
	gEBI("wd").value = 0;
	document.getElementsByClassName("city").item(0).innerHTML = selectedCity;
	document.getElementsByTagName("title").item(0).innerHTML = "Water Company - " + selectedCity;
	changeweat();
	start();
}
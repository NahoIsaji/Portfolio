let greet;
let contents;
let m_txt;
let a_txt;
let e_txt;
let w_txt;
let c_txt;	

window.onload = function(){
	getElem();
	msg();
	slide();
}

//get elements into global variables
function getElem(){
	greet = document.getElementById("greet");
	contents = document.querySelector(".map_wrapper");
	m_txt = document.querySelector(".site_map");
	a_txt = document.querySelector(".about_text");
	e_txt = document.querySelector(".experience_text");
	w_txt = document.querySelector(".work_text");
	c_txt = document.querySelector(".contact_text");	
}

//nav menu
function showNav(){
	const nav = document.querySelector(".nav");
	if(nav.style.visibility == 'hidden'){
		nav.style.visibility = "visible";
		nav.style.opacity ='1';
	}else{
		nav.style.visibility = "hidden";
		nav.style.opacity = '0';
	}
}

//greeting message
function msg(){
	let hr = new Date();
	let time = hr.getHours();
	const greet = document.getElementById("greet");
	
	if (time >=0 && time <6){
		greet.innerHTML = "Hello.";
	}else if(time>=6 && time<12){
		greet.innerHTML = "Good morning.";
	}else if(time>=12 && time<18){
		greet.innerHTML = "Good afternoon.";
	}else if(time>=18 && time<24){
		greet.innerHTML = "Good evening.";
	}	
}

//display text
/*map*/
function m_text(){
	if(m_txt.style.display == "none"){
		greet.style.display = "none";
		m_txt.style.display = "block";
		a_txt.style.display = "none";
		e_txt.style.display = "none";
		w_txt.style.display = "none";
		c_txt.style.display = "none";
		contents.style.display = "none";
	}else{
		greet.style.display = "block";
		m_txt.style.display = "none";
		contents.style.display = "";
	}	
}
/*about*/
function a_text(){
	if(a_txt.style.display == "none"){
		greet.style.display = "none";
		m_txt.style.display = "none";
		a_txt.style.display = "block";
		e_txt.style.display = "none";
		w_txt.style.display = "none";
		c_txt.style.display = "none";
		contents.style.display = "none";
	}else{
		greet.style.display = "block";
		a_txt.style.display = "none";
		contents.style.display = "";
	}	
}
/*experience*/
function e_text(){
	if(e_txt.style.display == "none"){
		greet.style.display = "none";
		m_txt.style.display = "none";
		e_txt.style.display = "block";
		a_txt.style.display = "none";
		w_txt.style.display = "none";
		c_txt.style.display = "none";
		contents.style.display = "none";
	}else{
		greet.style.display = "block";
		e_txt.style.display = "none";
		contents.style.display = "";
	}	
}
/*work*/
function w_text(){
	if(w_txt.style.display == "none"){
		greet.style.display = "none";
		m_txt.style.display = "none";
		w_txt.style.display = "block";
		a_txt.style.display = "none";
		e_txt.style.display = "none";
		c_txt.style.display = "none";
		contents.style.display = "none";
	}else{
		greet.style.display = "block";
		w_txt.style.display = "none";
		contents.style.display = "";
	}	
}	
/*contact*/
function c_text(){
	if(c_txt.style.display == "none"){
		greet.style.display = "none";
		m_txt.style.display = "none";
		c_txt.style.display = "block";
		a_txt.style.display = "none";
		e_txt.style.display = "none";
		w_txt.style.display = "none";
		contents.style.display = "none";
	}else{
		greet.style.display = "block";
		c_txt.style.display = "none";
		contents.style.display = "";
	}	
}		



//image map resizer
/*! Image Map Resizer (imageMapResizer.min.js ) - v1.0.10 - 2019-04-10
 *  Desc: Resize HTML imageMap to scaled image.
 *  Copyright: (c) 2019 David J. Bradshaw - dave@bradshaw.net
 *  License: MIT
 */
!function(){"use strict";function r(){function e(){var r={width:u.width/u.naturalWidth,height:u.height/u.naturalHeight},a={width:parseInt(window.getComputedStyle(u,null).getPropertyValue("padding-left"),10),height:parseInt(window.getComputedStyle(u,null).getPropertyValue("padding-top"),10)};i.forEach(function(e,t){var n=0;o[t].coords=e.split(",").map(function(e){var t=1==(n=1-n)?"width":"height";return a[t]+Math.floor(Number(e)*r[t])}).join(",")})}function t(e){return e.coords.replace(/ *, */g,",").replace(/ +/g,",")}function n(){clearTimeout(d),d=setTimeout(e,250)}function r(e){return document.querySelector('img[usemap="'+e+'"]')}var a=this,o=null,i=null,u=null,d=null;"function"!=typeof a._resize?(o=a.getElementsByTagName("area"),i=Array.prototype.map.call(o,t),u=r("#"+a.name)||r(a.name),a._resize=e,u.addEventListener("load",e,!1),window.addEventListener("focus",e,!1),window.addEventListener("resize",n,!1),window.addEventListener("readystatechange",e,!1),document.addEventListener("fullscreenchange",e,!1),u.width===u.naturalWidth&&u.height===u.naturalHeight||e()):a._resize()}function e(){function t(e){e&&(!function(e){if(!e.tagName)throw new TypeError("Object is not a valid DOM element");if("MAP"!==e.tagName.toUpperCase())throw new TypeError("Expected <MAP> tag, found <"+e.tagName+">.")}(e),r.call(e),n.push(e))}var n;return function(e){switch(n=[],typeof e){case"undefined":case"string":Array.prototype.forEach.call(document.querySelectorAll(e||"map"),t);break;case"object":t(e);break;default:throw new TypeError("Unexpected data type ("+typeof e+").")}return n}}"function"==typeof define&&define.amd?define([],e):"object"==typeof module&&"object"==typeof module.exports?module.exports=e():window.imageMapResize=e(),"jQuery"in window&&(window.jQuery.fn.imageMapResize=function(){return this.filter("map").each(r).end()})}();
//# sourceMappingURL=imageMapResizer.map
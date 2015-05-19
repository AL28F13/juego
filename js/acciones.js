// JavaScript Document
$(document).ready(function(e) {
document.addEventListener("deviceready",function(){
{
		$('#azul').on('tap', function(){
			$('#jugado').append('1')
		});
		$('#verde').on('tap', function(){
			$('#jugado').append('2')
		});
		$('#amarillo').on('tap', function(){
			$('#jugado').append('3')
		});
		$('#rojo').on('tap', function(){
			$('#jugado').append('4')
		});
	}	
}); 
});


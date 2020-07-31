/*preload*/ 
function preload(){
	var 
		images 				= document.images,
		images_total_count  = images.length,
		images_loaded_count = 0,
		pers_display 		= document.getElementById('load_pers')
		preloader 			= document.getElementById('preloader_background');
		strip_elemnt		= document.getElementsByClassName('strip_elemnt');
		
	if(images_total_count === 0){
		setTimeout(function(){
			pers_display.innerHTML = '100%';
			for(var j = 1; j <= 10; j++){
				var delay = j * .05;
				$(`._elemnt_${j}`).css({
					'height': '40px',
					'transition-delay': delay +'s'
				});

			}

		}, 500);
		
		setTimeout(function(){
				if( !preloader.classList.contains('done')){
					preloader.classList.add('done');
				}
				
				
				
		}, 2500);
	}


	for(var i = 0; i< images_total_count; i++){
		image_clone = new Image();
		image_clone.onload = image_load;
		image_clone.onerror = image_load;
		image_clone.src = images[i].src; 
	}
	function image_load() {
		images_loaded_count++;

		pers_display.innerHTML = ((images_loaded_count/images_total_count * 100)<<0) + '%';
		
		var counter = (images_loaded_count/images_total_count * 10)<<0;
		

		for(var j = 0; j < counter; j++){
		
			$(`._elemnt_${j+1}`).css({
				'height': '40px',
				'transition-delay': '.1s' * j
			});

		}

		if(images_loaded_count >= images_total_count){
			setTimeout(function(){
				if( !preloader.classList.contains('done')){
					preloader.classList.add('done');
				}
			}, 2500);
			
		}
	}
}
preload();

function round_gall(argument) {

	var current_round = -1;
	$('.circle').mousedown(function(){
		$(`.circle[num=${current_round}]`).css({
			'z-index':'0'
		});
		$(this).addClass('_active');
		$(this).css({
			'z-index':'20'
		});
		current_round = $(this).attr('num');
		
	});
	$('.circle').mouseup(function(){
		$(this).removeClass('_active');
		$(this).css({
			'z-index':'0'
		});
	});


}

round_gall();
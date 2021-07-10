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


function rising () {
	$('.gallery_item').on('click', function(){
		$('.gallery_item').removeClass('_active');
		$(this).addClass('_active');
	});
}
rising();

function effect_1 () {
	$('.column').mouseover(function(){
		$(this).addClass('_active').siblings().removeClass('_active');
	});
}

effect_1();

function effect_3 () {
	$('.effect_3').mousemove(function(e){
		var pos = $(this).offset();
		var elem_left = pos.left;
		var elem_top = pos.top;
		// положение курсора внутри элемента
		var X = e.pageX - elem_left;
		var Y = e.pageY - elem_top;
		$('.focus').css({
			'background':'radial-gradient(circle at ' + X + 'px ' + Y + 'px, transparent, #000 20%)'
		});
	});
	
	$('.trigger_zone_1').mouseenter(function(){
		$('.focus').addClass('_active');
	});
	$('.trigger_zone_1').mouseenter(function(){
		$('.effect_3').addClass('_active_1');
	});
	$('.trigger_zone_1').mouseleave(function(){
		$('.effect_3').removeClass('_active_1');
	});
	$('.trigger_zone_2').mouseenter(function(){
		$('.effect_3').addClass('_active_1');
	});
	$('.trigger_zone_2').mouseleave(function(){
		$('.effect_3').removeClass('_active_1');
	});
	$('.trigger_zone_3').mouseenter(function(){
		$('.effect_3').addClass('_active_2');
	});
	$('.trigger_zone_3').mouseleave(function(){
		$('.effect_3').removeClass('_active_2');
	});
	
}
effect_3();


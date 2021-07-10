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


function rotate_anim(){

	setTimeout( function(){
		$('.content_box').css({
			'transform' : `rotateX(${360}deg) rotateY(30deg)`,
			'transition':'all 20s linear'
		});	
	}, 1000);	
	
	
}




function image_click(){
	var opened = false;
    var current_img;
	$('.rotate_img').on('click', function(){
		if(opened == false){
	//		console.log($(this).attr('numver_pic'));
			var number_pic = $(this).attr('numver_pic');
			$(this).next().toggle(300);
			$(this).toggleClass('active_pic');
			$('body').toggleClass('active_body');
			$('.text').toggleClass('active_text');

			$('.content_box').css({
				'transform':`perspective(1000px) rotateX(${number_pic * 51}deg)`
			});

			$('.content_box').toggleClass('active');
			current_img = $(this);
			opened = true;
		} else {
			//*console.log('closed');
			var number_pic = $(current_img).attr('numver_pic');
			$(current_img).next().toggle(300);
			$(current_img).toggleClass('active_pic');
			$('body').toggleClass('active_body');
			$('.text').toggleClass('active_text');

			$('.content_box').css({
				'transform':`perspective(1000px) rotateX(${number_pic * 51}deg)`
			});

			$('.content_box').toggleClass('active');
			opened = false;
		}
		
	});

}


image_click();
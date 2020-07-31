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



function box_foller(argument) {
	var box_w = $("body").width()/50; 
	var	box_h = box_w;
	var box_in = box_h/2.5;
	var n = 51 * $("body").height()/box_h;

	
	for (var i = 0; i<=n; i++) {
		$('.container').append('<div class = "box"><div class = "box_in"></div></div>');
	}
	$('.box').css({
		'width': box_w +'px',
		'height': box_h + 'px'
	});
	$('.box_in').css({
		'width': box_in +'px',
		'height': box_in + 'px'
	});


	$('.box').click(function(){
		$('.box').css({
			'background-color': '#1118'
		});
		var curr    = $(this);
		var next    = $(`.box:eq(${$(this).index()+1})`);
			prev    = $(`.box:eq(${$(this).index()-1})`);
			up      = $(`.box:eq(${$(this).index()-50})`);
			down    = $(`.box:eq(${$(this).index()+50})`);
			exit_up = false;
		
		for(var o = 0; o<1; o++){
			if(down.index() < 0){
				o = 10;
			}
			var cur_col = curr.children('.box_in').css('background-color');
			down.css({
				'background': $(this).children('.box_in').css('background-color'),
				'transition':'.2s ease',
				'transition-delay': o/10 +'s'
			});
			
			
			down = $(`.box:eq(${down.index() + 50})`);

			//if(down.index() )
		}

		for(var k = 0; k<1; k++){
			
			if(up.index() / 50 <= 1){
				continue;
			}
			if(curr.index() / 50 <= 1){
				continue;
			}
			var cur_col = curr.children('.box_in').css('background-color');
			up.css({
				'background': $(this).children('.box_in').css('background-color'),
				'transition':'.2s ease',
				'transition-delay': k/10 +'s'
			});
			
			if(exit_up){
				k = 10;
			}
			up = $(`.box:eq(${up.index() - 50})`);
		
		}	
		for(var i = 0; i<1; i++){
			if((next.index())%50===0){
				continue;
			}
			var cur_col = curr.children('.box_in').css('background-color');
			next.css({
				'background': $(this).children('.box_in').css('background-color'),
				'transition':'.2s ease',
				'transition-delay': i/10 +'s'
			});
			next = $(`.box:eq(${next.index() + 1})`);
		
		}
		for(var j = 0; j<1;j++){
			if((prev.index())%50===49){
				continue;
			}
			prev.css({
				'background': $(this).children('.box_in').css('background-color'),
				'transition':'.2s ease',
				'transition-delay': j/10 +'s'
			});			
			prev = $(`.box:eq(${prev.index() - 1})`);
		}


		curr = $(this)
		next = $(`.box:eq(${$(this).index() + 1})`);
		prev = $(`.box:eq(${$(this).index() - 1})`);
		up   = $(`.box:eq(${$(this).index()-50})`);
		down = $(`.box:eq(${$(this).index()+50})`);
		setTimeout(function(){
			for(var i = 0; i<1; i++){	
				next.css({
					'background-color': '#1119',
					'transition':`1.5s`,
					'transition-delay': i/10 +'s'
				});
				prev.css({
					'background-color': '#1119',
					'transition':`1.5s`,
					'transition-delay': i/10 +'s'
				});
				up.css({
					'background-color': '#1119',
					'transition':`1.5s`,
					'transition-delay': i/10 +'s'
				});
				down.css({
					'background-color': '#1119',
					'transition':`1.5s`,
					'transition-delay': i/10 +'s'
				});

				next = $(`.box:eq(${next.index() + 1})`);
				prev = $(`.box:eq(${prev.index() - 1})`);
				up   = $(`.box:eq(${up.index() - 50})`);
				down   = $(`.box:eq(${down.index() + 50})`);
			}
		}, 1000);
		
	});


	

}
box_foller();

$('.box').dblclick(function () {
	var curr = $(this);
	//console.log($(`.box:eq(${$(this).index()+1})`));
	$(`.box:nth-child(11n + ${($(this).index()+1)%11})`).css({
		'background': $(this).children('.box_in').css('background-color'),
		'transition':'.2s ease'
		
	});
	setTimeout(function(){
		$(`.box:nth-child(11n + ${(curr.index()+1)%11})`).css({
		'transition':'1.5s',
		'background': '#111'
		
	});
	},1000);
	
});

$('.hint').on('click', function(){
	$('.hint').css({
		'top':'0',
		'transform':'translate(-50%,-100%)',
		'transition':'.2s'
	});
});
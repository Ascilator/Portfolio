const VIEW_WIDTH = window.innerWidth;
const VIEW_HEIGHT = window.innerHeight;



/*preload*/
function preload() {
	var
		images = document.images,
		images_total_count = images.length,
		images_loaded_count = 0,
		pers_display = document.getElementById('load_pers')
	preloader = document.getElementById('preloader_background');
	strip_elemnt = document.getElementsByClassName('strip_elemnt');

	if (images_total_count === 0) {
		setTimeout(function () {
			pers_display.innerHTML = '100%';
			for (var j = 1; j <= 10; j++) {
				var delay = j * .05;
				$(`._elemnt_${j}`).css({
					'height': '40px',
					'transition-delay': delay + 's'
				});

			}

		}, 500);

		setTimeout(function () {
			if (!preloader.classList.contains('done')) {
				preloader.classList.add('done');
			}



		}, 1500);
	}


	for (var i = 0; i < images_total_count; i++) {
		image_clone = new Image();
		image_clone.onload = image_load;
		image_clone.onerror = image_load;
		image_clone.src = images[i].src;
	}
	function image_load() {
		images_loaded_count++;

		pers_display.innerHTML = ((images_loaded_count / images_total_count * 100) << 0) + '%';

		var counter = (images_loaded_count / images_total_count * 10) << 0;


		for (var j = 0; j < counter; j++) {
			console.log(`._elemnt_${j + 1}`);
			$(`._elemnt_${j + 1}`).css({
				'height': '40px',
				'transition-delay': '.1s' * j
			});

		}

		if (images_loaded_count >= images_total_count) {
			setTimeout(function () {
				if (!preloader.classList.contains('done')) {
					preloader.classList.add('done');
				}
			}, 1000);


		}
	}
}
//preload();

function parallax() {
	const parallax_item_array = document.querySelectorAll('.paralax_item');


	const amplitude = 40;


	document.addEventListener('mousemove', (e) => {
		const mouse_pos = {
			x: e.pageX / VIEW_WIDTH - 1,
			y: e.pageY / VIEW_HEIGHT - 1
		}
		parallax_item_array.forEach(elem => {
			if (elem.classList.contains('_reverse')) {
				elem.style.transform = `translate(${-amplitude * mouse_pos.x}px,${amplitude * mouse_pos.y}px)`

			} else {
				elem.style.transform = `translate(${amplitude * mouse_pos.x}px,${-amplitude * mouse_pos.y}px)`

			}
		})
	})
}
function go_to_projects() {
	const clicker = document.querySelector('.go_to_works');
	clicker.addEventListener('click', () => {
		window.scrollTo({
			top: VIEW_HEIGHT,
			behavior: "smooth"
		})
	})
}
preload();
go_to_projects()
parallax()
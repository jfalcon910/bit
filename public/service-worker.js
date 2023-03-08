const STATIC_FILES = [
    '/',
    '/login',
    '/panel',
    '/not-found',
    '/logo.ico',
    '/logo.svg',
    '/logo16x16.png',
    '/logo24x24.png',
    '/logo32x32.png',
    '/logo64x64.png',
    '/logo128x128.png',
    '/logo192x192.png',
    '/logo256x256.png',
    '/logo512x512.png',
    '/assets/audio/animals/en/cat.mp3',
    '/assets/audio/animals/en/dog.mp3',
    '/assets/audio/animals/en/duck.mp3',
    '/assets/audio/animals/en/hen.mp3',
    '/assets/audio/animals/en/parrot.mp3',
    '/assets/audio/animals/en/pig.mp3',
    '/assets/audio/animals/en/rabbit.mp3',
    '/assets/audio/animals/en/sheep.mp3',
    '/assets/audio/animals/es/cerdo.mp3',
    '/assets/audio/animals/es/conejo.mp3',
    '/assets/audio/animals/es/gallina.mp3',
    '/assets/audio/animals/es/gato.mp3',
    '/assets/audio/animals/es/loro.mp3',
    '/assets/audio/animals/es/oveja.mp3',
    '/assets/audio/animals/es/pato.mp3',
    '/assets/audio/animals/es/perro.mp3',
    '/assets/audio/colors/en/black.mp3',
    '/assets/audio/colors/en/blue.mp3',
    '/assets/audio/colors/en/brown.mp3',
    '/assets/audio/colors/en/gray.mp3',
    '/assets/audio/colors/en/green.mp3',
    '/assets/audio/colors/en/lightblue.mp3',
    '/assets/audio/colors/en/orange.mp3',
    '/assets/audio/colors/en/pink.mp3',
    '/assets/audio/colors/en/purple.mp3',
    '/assets/audio/colors/en/red.mp3',
    '/assets/audio/colors/en/white.mp3',
    '/assets/audio/colors/en/yellow.mp3',
    '/assets/audio/colors/es/amarillo.mp3',
    '/assets/audio/colors/es/azul.mp3',
    '/assets/audio/colors/es/blanco.mp3',
    '/assets/audio/colors/es/celeste.mp3',
    '/assets/audio/colors/es/gris.mp3',
    '/assets/audio/colors/es/marron.mp3',
    '/assets/audio/colors/es/morado.mp3',
    '/assets/audio/colors/es/naranja.mp3',
    '/assets/audio/colors/es/negro.mp3',
    '/assets/audio/colors/es/rojo.mp3',
    '/assets/audio/colors/es/rosado.mp3',
    '/assets/audio/colors/es/verde.mp3',
    '/assets/audio/numbers/en/0.mp3',
    '/assets/audio/numbers/en/1.mp3',
    '/assets/audio/numbers/en/2.mp3',
    '/assets/audio/numbers/en/3.mp3',
    '/assets/audio/numbers/en/4.mp3',
    '/assets/audio/numbers/en/5.mp3',
    '/assets/audio/numbers/en/6.mp3',
    '/assets/audio/numbers/en/7.mp3',
    '/assets/audio/numbers/en/8.mp3',
    '/assets/audio/numbers/en/9.mp3',
    '/assets/audio/numbers/en/10.mp3',
    '/assets/audio/numbers/es/cero.mp3',
    '/assets/audio/numbers/es/uno.mp3',
    '/assets/audio/numbers/es/dos.mp3',
    '/assets/audio/numbers/es/tres.mp3',
    '/assets/audio/numbers/es/cuatro.mp3',
    '/assets/audio/numbers/es/cinco.mp3',
    '/assets/audio/numbers/es/seis.mp3',
    '/assets/audio/numbers/es/siete.mp3',
    '/assets/audio/numbers/es/ocho.mp3',
    '/assets/audio/numbers/es/nueve.mp3',
    '/assets/audio/numbers/es/diez.mp3',
    '/assets/audio/vowels/en/a.mp3',
    '/assets/audio/vowels/en/e.mp3',
    '/assets/audio/vowels/en/i.mp3',
    '/assets/audio/vowels/en/o.mp3',
    '/assets/audio/vowels/en/u.mp3',
    '/assets/audio/vowels/es/a.mp3',
    '/assets/audio/vowels/es/e.mp3',
    '/assets/audio/vowels/es/i.mp3',
    '/assets/audio/vowels/es/o.mp3',
    '/assets/audio/vowels/es/u.mp3',
    '/assets/audio/fruits/en/apple.mp3',
    '/assets/audio/fruits/en/banana.mp3',
    '/assets/audio/fruits/en/coconut.mp3',
    '/assets/audio/fruits/en/grape.mp3',
    '/assets/audio/fruits/en/orange.mp3',
    '/assets/audio/fruits/en/peach.mp3',
    '/assets/audio/fruits/en/pear.mp3',
    '/assets/audio/fruits/en/pineapple.mp3',
    '/assets/audio/fruits/en/strawberry.mp3',
    '/assets/audio/fruits/en/watermelon.mp3',
    '/assets/audio/fruits/es/coco.mp3',
    '/assets/audio/fruits/es/fresa.mp3',
    '/assets/audio/fruits/es/manzana.mp3',
    '/assets/audio/fruits/es/melocoton.mp3',
    '/assets/audio/fruits/es/naranja.mp3',
    '/assets/audio/fruits/es/pera.mp3',
    '/assets/audio/fruits/es/pina.mp3',
    '/assets/audio/fruits/es/platano.mp3',
    '/assets/audio/fruits/es/sandia.mp3',
    '/assets/audio/fruits/es/uva.mp3',
    '/assets/icons/categories/animals.svg',
    '/assets/icons/categories/colors.svg',
    '/assets/icons/categories/fruits.svg',
    '/assets/icons/categories/numbers.svg',
    '/assets/icons/categories/vowels.svg',
    '/assets/icons/animals/cat.svg',
    '/assets/icons/animals/dog.svg',
    '/assets/icons/animals/duck.svg',
    '/assets/icons/animals/hen.svg',
    '/assets/icons/animals/parrot.svg',
    '/assets/icons/animals/pig.svg',
    '/assets/icons/animals/rabbit.svg',
    '/assets/icons/animals/sheep.svg',
    '/assets/icons/colors/black.svg',
    '/assets/icons/colors/blue.svg',
    '/assets/icons/colors/brown.svg',
    '/assets/icons/colors/gray.svg',
    '/assets/icons/colors/green.svg',
    '/assets/icons/colors/lightblue.svg',
    '/assets/icons/colors/orange.svg',
    '/assets/icons/colors/pink.svg',
    '/assets/icons/colors/purple.svg',
    '/assets/icons/colors/red.svg',
    '/assets/icons/colors/white.svg',
    '/assets/icons/colors/yellow.svg',
    '/assets/icons/numbers/0.svg',
    '/assets/icons/numbers/1.svg',
    '/assets/icons/numbers/2.svg',
    '/assets/icons/numbers/3.svg',
    '/assets/icons/numbers/4.svg',
    '/assets/icons/numbers/5.svg',
    '/assets/icons/numbers/6.svg',
    '/assets/icons/numbers/7.svg',
    '/assets/icons/numbers/8.svg',
    '/assets/icons/numbers/9.svg',
    '/assets/icons/numbers/10.svg',
    '/assets/icons/vowels/a.svg',
    '/assets/icons/vowels/e.svg',
    '/assets/icons/vowels/i.svg',
    '/assets/icons/vowels/o.svg',
    '/assets/icons/vowels/u.svg',
    '/assets/icons/fruits/apple.svg',
    '/assets/icons/fruits/banana.svg',
    '/assets/icons/fruits/coconut.svg',
    '/assets/icons/fruits/grape.svg',
    '/assets/icons/fruits/orange.svg',
    '/assets/icons/fruits/peach.svg',
    '/assets/icons/fruits/pear.svg',
    '/assets/icons/fruits/pineapple.svg',
    '/assets/icons/fruits/strawberry.svg',
    '/assets/icons/fruits/watermelon.svg',
    '/manifest.json',
]

const INMUTABLE_FILES = [
	'https://fonts.gstatic.com/s/poppins/v20/pxiEyp8kv8JHgFVrJJfecnFHGPc.woff2',
    'https://fonts.gstatic.com/s/poppins/v20/pxiByp8kv8JHgFVrLGT9Z1xlFd2JQEk.woff2',
    'https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap',
    'https://fonts.googleapis.com/css2?family=Noto+Serif:ital,wght@0,400;0,700;1,400;1,700&display=swap',
]

const cache_static_name = 'cache-bits-static-v2';
const cache_dynamic_name = 'cache-bits-dynamic-v2';
const cache_inmutable_name = 'cache-bitsb-inmutable-v2';

const cacheDynamicLimit = 50;

function limpiarCache(cacheName,nroItems){
	caches.open(cacheName)
		.then(cache =>{
			return cache.keys()
				.then(keys =>{
					if(keys.length > nroItems){
						cache.delete(keys[0])
							.then(limpiarCache(cacheName,nroItems))
					}
				})
		})
}

self.addEventListener('install', e =>{
	const cacheStatic = caches.open(cache_static_name)
		.then(cache =>{
			return cache.addAll(STATIC_FILES);
		})
	const cacheInmutable = caches.open(cache_inmutable_name)
		.then(cache =>{
			return cache.addAll(INMUTABLE_FILES);
		})
	e.waitUntil(Promise.all([cacheStatic,cacheInmutable]));
})

self.addEventListener('activate', e =>{

	const activate = caches.keys(keys =>{
		keys.forEach(key => {
			if(key !== cache_static_name && key.includes('static')){
				return caches.delete(key);
			}
		});
	})
	e.waitUntil(activate);

});

function manejoApi(dynamicCache,req){
	if(req.clone().method === 'POST'){
		//console.log('Acá hay un post')
		return fetch(req)
	}else{
		return fetch(req).then(res =>{
			if(res.ok){
				actualizaCacheDinamico(dynamicCache,req,res.clone());
				return res.clone();
			}else{
				return caches.match(req);
			}
		}).catch(err => {
			return caches.match(req);
		})
	}
}

function actualizaCacheDinamico( dynamicCache, req, res ){
    if ( res.ok ) {
        return caches.open( dynamicCache ).then( cache => {
            cache.put( req, res.clone() );
            return res.clone();
        });
    } else {
        return res;
    }
}

self.addEventListener('fetch', e =>{
	let respCache;
	if(e.request.method==='POST'){
		respCache =  manejoApi(cache_dynamic_name,e.request);
	}else{
		respCache = caches.match(e.request)
		.then(res=>{
			if(res) return res;
			return fetch(e.request)
				.then(newResponse=>{
					caches.open(cache_dynamic_name)
						.then(cache =>{
							cache.put(e.request,newResponse);
							limpiarCache(cache_dynamic_name,cacheDynamicLimit)
						})
					return newResponse.clone(cache_dynamic_name);
				})
				.catch(err => {
					console.log(err)
					if(e.request.headers.get('accept').includes('text/html')){
						return caches.match('/offline.html')
					}
				})
		}).catch(err =>{
			console.log(`Hubo un error ${err}`)
		})
	}
	e.respondWith(respCache);
})
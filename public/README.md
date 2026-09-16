Drop the six product photos in this folder, named exactly:

image1.jpg  -> Classic Sobolo
image2.jpg  -> Ginger Fire
image3.jpg  -> Tigernut Cream
image4.jpg  -> Baobab Sunrise
image5.jpg  -> Zobo Rose
image6.jpg  -> Pineapple Mint Cooler

Vite serves everything in `public/` from the site root, so `public/image1.jpg`
becomes `/image1.jpg` — which is exactly what `src/data/products.js` expects.
Until a file is present, that product's card shows a hibiscus placeholder
instead of a broken image.

.jpg, .png, or .webp all work — just update the extension in
src/data/products.js if you don't use .jpg.

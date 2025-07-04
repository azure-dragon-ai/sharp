---
# This file was auto-generated from JSDoc in lib/constructor.js
title: Constructor
---

## Sharp
> Sharp


**Emits**: <code>Sharp#event:info</code>, <code>Sharp#event:warning</code>  
<a name="new_Sharp_new"></a>

### new
> new Sharp([input], [options])

Constructor factory to create an instance of `sharp`, to which further methods are chained.

JPEG, PNG, WebP, GIF, AVIF or TIFF format image data can be streamed out from this object.
When using Stream based output, derived attributes are available from the `info` event.

Non-critical problems encountered during processing are emitted as `warning` events.

Implements the [stream.Duplex](http://nodejs.org/api/stream.html#stream_class_stream_duplex) class.

When loading more than one page/frame of an animated image,
these are combined as a vertically-stacked "toilet roll" image
where the overall height is the `pageHeight` multiplied by the number of `pages`.

**Throws**:

- <code>Error</code> Invalid parameters


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [input] | <code>Buffer</code> \| <code>ArrayBuffer</code> \| <code>Uint8Array</code> \| <code>Uint8ClampedArray</code> \| <code>Int8Array</code> \| <code>Uint16Array</code> \| <code>Int16Array</code> \| <code>Uint32Array</code> \| <code>Int32Array</code> \| <code>Float32Array</code> \| <code>Float64Array</code> \| <code>string</code> \| <code>Array</code> |  | if present, can be  a Buffer / ArrayBuffer / Uint8Array / Uint8ClampedArray containing JPEG, PNG, WebP, AVIF, GIF, SVG or TIFF image data, or  a TypedArray containing raw pixel image data, or  a String containing the filesystem path to an JPEG, PNG, WebP, AVIF, GIF, SVG or TIFF image file.  An array of inputs can be provided, and these will be joined together.  JPEG, PNG, WebP, AVIF, GIF, SVG, TIFF or raw pixel image data can be streamed into the object when not present. |
| [options] | <code>Object</code> |  | if present, is an Object with optional attributes. |
| [options.failOn] | <code>string</code> | <code>&quot;&#x27;warning&#x27;&quot;</code> | When to abort processing of invalid pixel data, one of (in order of sensitivity, least to most): 'none', 'truncated', 'error', 'warning'. Higher levels imply lower levels. Invalid metadata will always abort. |
| [options.limitInputPixels] | <code>number</code> \| <code>boolean</code> | <code>268402689</code> | Do not process input images where the number of pixels  (width x height) exceeds this limit. Assumes image dimensions contained in the input metadata can be trusted.  An integral Number of pixels, zero or false to remove limit, true to use default limit of 268402689 (0x3FFF x 0x3FFF). |
| [options.unlimited] | <code>boolean</code> | <code>false</code> | Set this to `true` to remove safety features that help prevent memory exhaustion (JPEG, PNG, SVG, HEIF). |
| [options.autoOrient] | <code>boolean</code> | <code>false</code> | Set this to `true` to rotate/flip the image to match EXIF `Orientation`, if any. |
| [options.sequentialRead] | <code>boolean</code> | <code>true</code> | Set this to `false` to use random access rather than sequential read. Some operations will do this automatically. |
| [options.density] | <code>number</code> | <code>72</code> | number representing the DPI for vector images in the range 1 to 100000. |
| [options.ignoreIcc] | <code>number</code> | <code>false</code> | should the embedded ICC profile, if any, be ignored. |
| [options.pages] | <code>number</code> | <code>1</code> | Number of pages to extract for multi-page input (GIF, WebP, TIFF), use -1 for all pages. |
| [options.page] | <code>number</code> | <code>0</code> | Page number to start extracting from for multi-page input (GIF, WebP, TIFF), zero based. |
| [options.animated] | <code>boolean</code> | <code>false</code> | Set to `true` to read all frames/pages of an animated image (GIF, WebP, TIFF), equivalent of setting `pages` to `-1`. |
| [options.raw] | <code>Object</code> |  | describes raw pixel input image data. See `raw()` for pixel ordering. |
| [options.raw.width] | <code>number</code> |  | integral number of pixels wide. |
| [options.raw.height] | <code>number</code> |  | integral number of pixels high. |
| [options.raw.channels] | <code>number</code> |  | integral number of channels, between 1 and 4. |
| [options.raw.premultiplied] | <code>boolean</code> |  | specifies that the raw input has already been premultiplied, set to `true`  to avoid sharp premultiplying the image. (optional, default `false`) |
| [options.create] | <code>Object</code> |  | describes a new image to be created. |
| [options.create.width] | <code>number</code> |  | integral number of pixels wide. |
| [options.create.height] | <code>number</code> |  | integral number of pixels high. |
| [options.create.channels] | <code>number</code> |  | integral number of channels, either 3 (RGB) or 4 (RGBA). |
| [options.create.background] | <code>string</code> \| <code>Object</code> |  | parsed by the [color](https://www.npmjs.org/package/color) module to extract values for red, green, blue and alpha. |
| [options.create.noise] | <code>Object</code> |  | describes a noise to be created. |
| [options.create.noise.type] | <code>string</code> |  | type of generated noise, currently only `gaussian` is supported. |
| [options.create.noise.mean] | <code>number</code> |  | mean of pixels in generated noise. |
| [options.create.noise.sigma] | <code>number</code> |  | standard deviation of pixels in generated noise. |
| [options.text] | <code>Object</code> |  | describes a new text image to be created. |
| [options.text.text] | <code>string</code> |  | text to render as a UTF-8 string. It can contain Pango markup, for example `<i>Le</i>Monde`. |
| [options.text.font] | <code>string</code> |  | font name to render with. |
| [options.text.fontfile] | <code>string</code> |  | absolute filesystem path to a font file that can be used by `font`. |
| [options.text.width] | <code>number</code> | <code>0</code> | Integral number of pixels to word-wrap at. Lines of text wider than this will be broken at word boundaries. |
| [options.text.height] | <code>number</code> | <code>0</code> | Maximum integral number of pixels high. When defined, `dpi` will be ignored and the text will automatically fit the pixel resolution defined by `width` and `height`. Will be ignored if `width` is not specified or set to 0. |
| [options.text.align] | <code>string</code> | <code>&quot;&#x27;left&#x27;&quot;</code> | Alignment style for multi-line text (`'left'`, `'centre'`, `'center'`, `'right'`). |
| [options.text.justify] | <code>boolean</code> | <code>false</code> | set this to true to apply justification to the text. |
| [options.text.dpi] | <code>number</code> | <code>72</code> | the resolution (size) at which to render the text. Does not take effect if `height` is specified. |
| [options.text.rgba] | <code>boolean</code> | <code>false</code> | set this to true to enable RGBA output. This is useful for colour emoji rendering, or support for pango markup features like `<span foreground="red">Red!</span>`. |
| [options.text.spacing] | <code>number</code> | <code>0</code> | text line height in points. Will use the font line height if none is specified. |
| [options.text.wrap] | <code>string</code> | <code>&quot;&#x27;word&#x27;&quot;</code> | word wrapping style when width is provided, one of: 'word', 'char', 'word-char' (prefer word, fallback to char) or 'none'. |
| [options.join] | <code>Object</code> |  | describes how an array of input images should be joined. |
| [options.join.across] | <code>number</code> | <code>1</code> | number of images to join horizontally. |
| [options.join.animated] | <code>boolean</code> | <code>false</code> | set this to `true` to join the images as an animated image. |
| [options.join.shim] | <code>number</code> | <code>0</code> | number of pixels to insert between joined images. |
| [options.join.background] | <code>string</code> \| <code>Object</code> |  | parsed by the [color](https://www.npmjs.org/package/color) module to extract values for red, green, blue and alpha. |
| [options.join.halign] | <code>string</code> | <code>&quot;&#x27;left&#x27;&quot;</code> | horizontal alignment style for images joined horizontally (`'left'`, `'centre'`, `'center'`, `'right'`). |
| [options.join.valign] | <code>string</code> | <code>&quot;&#x27;top&#x27;&quot;</code> | vertical alignment style for images joined vertically (`'top'`, `'centre'`, `'center'`, `'bottom'`). |
| [options.tiff] | <code>Object</code> |  | Describes TIFF specific options. |
| [options.tiff.subifd] | <code>number</code> | <code>-1</code> | Sub Image File Directory to extract for OME-TIFF, defaults to main image. |
| [options.svg] | <code>Object</code> |  | Describes SVG specific options. |
| [options.svg.stylesheet] | <code>string</code> |  | Custom CSS for SVG input, applied with a User Origin during the CSS cascade. |
| [options.svg.highBitdepth] | <code>boolean</code> | <code>false</code> | Set to `true` to render SVG input at 32-bits per channel (128-bit) instead of 8-bits per channel (32-bit) RGBA. |
| [options.pdf] | <code>Object</code> |  | Describes PDF specific options. Requires the use of a globally-installed libvips compiled with support for PDFium, Poppler, ImageMagick or GraphicsMagick. |
| [options.pdf.background] | <code>string</code> \| <code>Object</code> |  | Background colour to use when PDF is partially transparent. Parsed by the [color](https://www.npmjs.org/package/color) module to extract values for red, green, blue and alpha. |
| [options.openSlide] | <code>Object</code> |  | Describes OpenSlide specific options. Requires the use of a globally-installed libvips compiled with support for OpenSlide. |
| [options.openSlide.level] | <code>number</code> | <code>0</code> | Level to extract from a multi-level input, zero based. |
| [options.jp2] | <code>Object</code> |  | Describes JPEG 2000 specific options. Requires the use of a globally-installed libvips compiled with support for OpenJPEG. |
| [options.jp2.oneshot] | <code>boolean</code> | <code>false</code> | Set to `true` to decode tiled JPEG 2000 images in a single operation, improving compatibility. |

**Example**  
```js
sharp('input.jpg')
  .resize(300, 200)
  .toFile('output.jpg', function(err) {
    // output.jpg is a 300 pixels wide and 200 pixels high image
    // containing a scaled and cropped version of input.jpg
  });
```
**Example**  
```js
// Read image data from remote URL,
// resize to 300 pixels wide,
// emit an 'info' event with calculated dimensions
// and finally write image data to writableStream
const { body } = fetch('https://...');
const readableStream = Readable.fromWeb(body);
const transformer = sharp()
  .resize(300)
  .on('info', ({ height }) => {
    console.log(`Image height is ${height}`);
  });
readableStream.pipe(transformer).pipe(writableStream);
```
**Example**  
```js
// Create a blank 300x200 PNG image of semi-translucent red pixels
sharp({
  create: {
    width: 300,
    height: 200,
    channels: 4,
    background: { r: 255, g: 0, b: 0, alpha: 0.5 }
  }
})
.png()
.toBuffer()
.then( ... );
```
**Example**  
```js
// Convert an animated GIF to an animated WebP
await sharp('in.gif', { animated: true }).toFile('out.webp');
```
**Example**  
```js
// Read a raw array of pixels and save it to a png
const input = Uint8Array.from([255, 255, 255, 0, 0, 0]); // or Uint8ClampedArray
const image = sharp(input, {
  // because the input does not contain its dimensions or how many channels it has
  // we need to specify it in the constructor options
  raw: {
    width: 2,
    height: 1,
    channels: 3
  }
});
await image.toFile('my-two-pixels.png');
```
**Example**  
```js
// Generate RGB Gaussian noise
await sharp({
  create: {
    width: 300,
    height: 200,
    channels: 3,
    noise: {
      type: 'gaussian',
      mean: 128,
      sigma: 30
    }
 }
}).toFile('noise.png');
```
**Example**  
```js
// Generate an image from text
await sharp({
  text: {
    text: 'Hello, world!',
    width: 400, // max width
    height: 300 // max height
  }
}).toFile('text_bw.png');
```
**Example**  
```js
// Generate an rgba image from text using pango markup and font
await sharp({
  text: {
    text: '<span foreground="red">Red!</span><span background="cyan">blue</span>',
    font: 'sans',
    rgba: true,
    dpi: 300
  }
}).toFile('text_rgba.png');
```
**Example**  
```js
// Join four input images as a 2x2 grid with a 4 pixel gutter
const data = await sharp(
 [image1, image2, image3, image4],
 { join: { across: 2, shim: 4 } }
).toBuffer();
```
**Example**  
```js
// Generate a two-frame animated image from emoji
const images = ['😀', '😛'].map(text => ({
  text: { text, width: 64, height: 64, channels: 4, rgba: true }
}));
await sharp(images, { join: { animated: true } }).toFile('out.gif');
```


## clone
> clone() ⇒ [<code>Sharp</code>](#Sharp)

Take a "snapshot" of the Sharp instance, returning a new instance.
Cloned instances inherit the input of their parent instance.
This allows multiple output Streams and therefore multiple processing pipelines to share a single input Stream.


**Example**  
```js
const pipeline = sharp().rotate();
pipeline.clone().resize(800, 600).pipe(firstWritableStream);
pipeline.clone().extract({ left: 20, top: 20, width: 100, height: 100 }).pipe(secondWritableStream);
readableStream.pipe(pipeline);
// firstWritableStream receives auto-rotated, resized readableStream
// secondWritableStream receives auto-rotated, extracted region of readableStream
```
**Example**  
```js
// Create a pipeline that will download an image, resize it and format it to different files
// Using Promises to know when the pipeline is complete
const fs = require("fs");
const got = require("got");
const sharpStream = sharp({ failOn: 'none' });

const promises = [];

promises.push(
  sharpStream
    .clone()
    .jpeg({ quality: 100 })
    .toFile("originalFile.jpg")
);

promises.push(
  sharpStream
    .clone()
    .resize({ width: 500 })
    .jpeg({ quality: 80 })
    .toFile("optimized-500.jpg")
);

promises.push(
  sharpStream
    .clone()
    .resize({ width: 500 })
    .webp({ quality: 80 })
    .toFile("optimized-500.webp")
);

// https://github.com/sindresorhus/got/blob/main/documentation/3-streams.md
got.stream("https://www.example.com/some-file.jpg").pipe(sharpStream);

Promise.all(promises)
  .then(res => { console.log("Done!", res); })
  .catch(err => {
    console.error("Error processing files, let's clean it up", err);
    try {
      fs.unlinkSync("originalFile.jpg");
      fs.unlinkSync("optimized-500.jpg");
      fs.unlinkSync("optimized-500.webp");
    } catch (e) {}
  });
```



# [TwicPics React Native Components](https://www.npmjs.com/package/@twicpics/components-react-native)

[![NPM Version][npm-image]][npm-url]
[![License][license-image]][license-url]


<div id='what-is-twicpics'/>

## What is [TwicPics](https://www.twicpics.com/?utm_source=github&utm_medium=organic&utm_campaign=components)? 

[TwicPics](https://www.twicpics.com/?utm_source=github&utm_medium=organic&utm_campaign=components) is a __Responsive Image Service Solution__ (SaaS) that enables __on-demand responsive image generation__.

With [TwicPics](https://www.twicpics.com/?utm_source=github&utm_medium=organic&utm_campaign=components), developers only deal with high-resolution versions of their media while end-users receive __optimized, perfectly sized, device-adapted__ versions __delivered from a server close to them__.

[TwicPics](https://www.twicpics.com/?utm_source=github&utm_medium=organic&utm_campaign=components) acts as an __image proxy__. It requests your master image, be it on your own web server, cloud storage or DAM, then generates a __device-adapted__ version with __best-in-class compression__, delivered directly to the end-user from the __closest delivery point__ available.

<div id='what-is-twicpics-components'/>

## What is [TwicPics Component for React Native](https://www.npmjs.com/package/@twicpics/components-react-native)?

[TwicPics Component for React Native](https://www.npmjs.com/package/@twicpics/components-react-native) will make it dead easy to unleash the power of [TwicPics](https://www.twicpics.com/?utm_source=github&utm_medium=organic&utm_campaign=components) in your own [React Native](https://reactnative.dev/) projects.

Basically, TwicPics component replace `<Image/>` component.

```jsx
  // a classical Image usage
  <Image
    source={{
        uri: 'https://reactnative.dev/img/tiny_logo.png',
    }}
   />
```

```html
  // a TwicPics img component usage
  <TwicImg src="https://assets.twicpics.com/examples/football.jpg" />
```

## Installing `@twicpics/components-react-native` into your project

You just need to add the [@twicpics/components-react-native](https://www.npmjs.com/package/@twicpics/components-react-native) npm package to your project.

Simply type one of:

```bash
npm install @twicpics/components-react-native
```

or

```bash
yarn add @twicpics/components-react-native
```

depending on which package manager you fancy.

## Setup

### App.js

```jsx
// import TwicPics react components
import {installTwicPics} from '@twicpics/components-react-native';
...

...
installTwicPics( {
  // domain is mandatory
  "domain": "https://<your-domain>.twic.pics"
} );
...
```

## Usage 

### your-page-or-component.js

```jsx
// this component will be used in place of an img element.
import { TwicImg } from '@twicpics/components-react-native';
...

return (
    <TwicImg
        src="path/to/your/image"
        alt="..."
        anchor="..."
        focus="auto..."
        preTransform="..."
        mode="your-mode" // cover by default
        ratio="your-ratio" // 1 by default. Can be 
        step="custom-step" // if set, this value will override config value
        style={styles.customImage}
    />
)

```
## Setup Options

| Option | Description | Type | Default |
|:-|:-|:-|:-|
| `domain` | This is your very own [TwicPics domain](https://www.twicpics.com/documentation/subdomain/). Providing it is __mandatory__. | `String` | |
| `debug` | Can be `true` or `false` | `boolean` | `false` |
| `path` | Path to prepend to all src attributes. For instance, if path is `"some/folder"` then a src attribute set to `"image.jpg"` will be expanded into `"some/folder/image.jpg"` | `String` | |
| `step` | To avoid requesting too may variants of the same image, [TwicPics](https://www.twicpics.com/) will round the width of images to the closest multiple of step. The height will then be computed in order to respect the original aspect ratio. | `Integer` | `20` |

## Component Properties

This component can be used in place of an `<Image/>` element.

```html
<TwicImg
  src="<path>" (mandatory)
  alt="<String>"
  anchor="<String>"
  focus="<auto|coordinates>"
  mode="<contain|cover>"
  preTransform="<String>"
  ratio="<ratio>"
  step="<integer>"
/>
```

| Attribute | Description | Type | Default |
|:-|:-|:-|:-|
| `alt` | `alt` attribute content | `String` | based on `src` |
| `anchor` | Positions the image in both `contain` and `cover` mode. Accepted values are `top`, `bottom`, `left`, `right`, `top-left`, `top-right`, `bottom-left` and `bottom-right`. `position` and `focus` take precedence in `contain` and `cover` mode respectively. Please note that `anchor` is applied __after__ an eventual `preTransform`. | `String` |
| `focus` | Sets the focus point in `cover` mode. `focus` takes precedence over `anchor` when both are provided. See the [TwicPics focus attribute documentation](https://www.twicpics.com/docs/script/attributes#data-twic-focus) for more information. Only use this attribute if you need a specific focus point or if you want to leverage smart cropping with `focus="auto"`: if you only need border-based positionning (`top`, `bottom`, `left`, `right`, etc), use `anchor` instead. | `String` | |
| `mode` | Can be `contain` or `cover` and determines if the image fills the area and is cropped accordingly (`cover`) or if the image will sit inside the area with no cropping (`contain`). | `String` | `cover` |
| `preTransform` | A slash-separated list of [TwicPics API transformations](https://www.twicpics.com/docs/api/transformations) to be performed before resizing the image (see the [TwicPics Manipulation documentation](https://www.twicpics.com/docs/api/manipulations)). Note that `anchor` and `focus` are applied __after__ `preTransform`: if you need to specify a specific focus point for your `preTransform` then it needs to be part of the expression (like `preTransform="focus=auto/crop=50px50p"` for instance). Be aware that using this option can lead to unexpected results so use with caution! | `String` | |
| `ratio` | A unitless `width/height` or `width:height` value pair (as in `4/3` or `4:3`) that defines the aspect ratio of the display area. If `height` is not specified, it is assumed to be `1`. A square area will be created by default. When set to `none`, ratio is determined based on width and height as computed by the browser following your `CSS` definitions. The `--twic-ratio` CSS variable is ignored in this instance. You are responsible for properly sizing the component when `ratio="none"`. | `String` | `1` |
| `src` | Path to the image. When not provided, a red lightweight `svg` [placeholder](https://www.twicpics.com/docs/api/placeholders) that displays its intrinsic dimensions is displayed in place of the absent image. When [env](#setup-options) is set to `offline`, that red lightweight `svg` is replaced by a simple red placeholder. | `String` | |
| `step` | See the [TwicPics step attribute documentation](https://www.twicpics.com/docs/script/attributes#data-twic-step) for more information. | `Integer` | `10` |

## Other Supported frameworks

- [Angular](https://github.com/TwicPics/components/blob/0.10.0/documentation/angular.md) (version 11+)
- [React](https://github.com/TwicPics/components/blob/0.10.0/documentation/react.md), [Gatsby](https://github.com/TwicPics/components/blob/0.10.0/documentation/gatsby.md) and [Next.js](https://github.com/TwicPics/components/blob/0.10.0/documentation/next.md)
- [Svelte](https://github.com/TwicPics/components/blob/0.10.0/documentation/svelte3.md) (version 3)
- [Vue.js (version 2)](https://github.com/TwicPics/components/blob/0.10.0/documentation/vue2.md), [Vue.js (version 3)](https://github.com/TwicPics/components/blob/0.10.0/documentation/vue3.md) , [Nuxt.js (version 2)](https://github.com/TwicPics/components/blob/0.10.0/documentation/nuxt2.md) and [Nuxt.js (version 3)](https://github.com/TwicPics/components/blob/0.10.0/documentation/nuxt3.md)
- [Web Components](https://github.com/TwicPics/components/blob/0.10.0/documentation/webComponents.md)

## Online demonstrations

Regardless of the framework you work with, [TwicPics](https://www.twicpics.com/?utm_source=github&utm_medium=organic&utm_campaign=components) is the most efficient solution to deliver your images and your videos and make them as responsive as desired.

Explore our demos and integration examples for :

- [Angular](https://twicpics-angular-demo.netlify.app/?utm_source=sendinblue&utm_campaign=github&utm_medium=github)
- [React](https://twicpics-react-demo.netlify.app/?utm_source=sendinblue&utm_campaign=github&utm_medium=github), [Next.js](https://twicpics-next-demo.netlify.app/?utm_source=sendinblue&utm_campaign=github&utm_medium=github) and [Gatsby.js](https://twicpics-gatsby-demo.netlify.app/?utm_source=sendinblue&utm_campaign=github&utm_medium=github)
- [Vue.js (version 2)](https://twicpics-vue-demo.netlify.app/?utm_source=sendinblue&utm_campaign=github&utm_medium=github) and [Nuxt.js (version 2)](https://twicpics-nuxt-demo.netlify.app/?utm_source=sendinblue&utm_campaign=github&utm_medium=github)
- [Svelte (version 3)](https://twicpics-svelte-demo.netlify.app/?utm_source=sendinblue&utm_campaign=github&utm_medium=github)

<div id='getting-help'/>

## Questions and feedback

Fell free to submit an [issue](https://github.com/TwicPics/components-react-native/issues) or to ask us anything by dropping an email at [support@twic.pics](mailto:support@twic.pics).


[license-image]: https://img.shields.io/npm/l/@twicpics/components-react-native.svg?style=flat-square
[license-url]: https://raw.githubusercontent.com/twicpics/components-react-native/master/LICENSE
[npm-image]: https://img.shields.io/badge/npm-v0.0.1--alpha.1-orange.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/@twicpics/components-react-native/v/0.0.1-alpha.1

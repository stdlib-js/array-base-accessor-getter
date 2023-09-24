<!--

@license Apache-2.0

Copyright (c) 2022 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# accessorGetter

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Return an accessor function for retrieving an element from an array-like object supporting the get/set protocol.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

To use in Observable,

```javascript
accessorGetter = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/array-base-accessor-getter@v0.1.0-umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var accessorGetter = require( 'path/to/vendor/umd/array-base-accessor-getter/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/array-base-accessor-getter@v0.1.0-umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.accessorGetter;
})();
</script>
```

#### accessorGetter( dtype )

Returns an accessor function for retrieving an element from an array-like object supporting the get/set protocol.

```javascript
var Complex64Array = require( '@stdlib/array-complex64' );
var realf = require( '@stdlib/complex-realf' );
var imagf = require( '@stdlib/complex-imagf' );

var arr = new Complex64Array( [ 1, 2, 3, 4 ] );

var get = accessorGetter( 'complex64' );
var v = get( arr, 1 );
// returns <Complex64>

var re = realf( v );
// returns 3.0

var im = imagf( v );
// returns 4.0
```

The returned accessor function accepts the following arguments:

-   **arr**: input array.
-   **idx**: element index.

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   If provided an unsupported [`dtype`][@stdlib/array/dtypes], the function returns a default accessor function for accessing elements from any indexed array-like object supporting the get/set protocol; otherwise, the function returns an accessor function which should **only** be provided an array instance corresponding to `dtype` (e.g., if `dtype` is `'complex64'`, the returned accessor function should only be provided instances of `Complex64Array`).
-   Accessor functions do **not** verify that provided input arrays are array instances corresponding to `dtype`, as doing so would introduce performance overhead. If array instances corresponding to other data types are provided to an accessor function, JavaScript runtimes will consider the function polymorphic, potentially triggering de-optimization. In order to ensure maximum performance, **always** ensure that an accessor function is monomorphic.
-   Accessor functions do **not** perform bounds checking.
-   Accessor functions do **not** verify that provided input arrays actually implement the get/set protocol.
-   An array-like object supporting the get/set protocol is a data structure in which one accesses elements using explicit `get` and `set` methods (e.g., `Complex64Array` and `Complex128Array`).

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/array-complex128@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/array-complex64@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/array-base-zero-to@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/array-dtype@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/array-base-accessor-getter@v0.1.0-umd/browser.js"></script>
<script type="text/javascript">
(function () {

var arr = new Complex128Array( zeroTo( 10 ) );
var v = accessorGetter( dtype( arr ) )( arr, 2 );
// returns <Complex128>

console.log( v.toString() );
// => '4 + 5i'

arr = new Complex64Array( zeroTo( 10 ) );
v = accessorGetter( dtype( arr ) )( arr, 4 );
// returns <Complex64>

console.log( v.toString() );
// => '8 + 9i'

})();
</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/array-base-accessor-getter.svg
[npm-url]: https://npmjs.org/package/@stdlib/array-base-accessor-getter

[test-image]: https://github.com/stdlib-js/array-base-accessor-getter/actions/workflows/test.yml/badge.svg?branch=v0.1.0
[test-url]: https://github.com/stdlib-js/array-base-accessor-getter/actions/workflows/test.yml?query=branch:v0.1.0

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/array-base-accessor-getter/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/array-base-accessor-getter?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/array-base-accessor-getter.svg
[dependencies-url]: https://david-dm.org/stdlib-js/array-base-accessor-getter/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/array-base-accessor-getter/tree/deno
[umd-url]: https://github.com/stdlib-js/array-base-accessor-getter/tree/umd
[esm-url]: https://github.com/stdlib-js/array-base-accessor-getter/tree/esm
[branches-url]: https://github.com/stdlib-js/array-base-accessor-getter/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/array-base-accessor-getter/main/LICENSE

[@stdlib/array/dtypes]: https://github.com/stdlib-js/stdlib/tree/umd

</section>

<!-- /.links -->

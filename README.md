<!--

@license Apache-2.0

Copyright (c) 2026 The Stdlib Authors.

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

# zdiff

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Calculate the k-th discrete forward difference of a one-dimensional double-precision complex floating-point ndarray.

<section class="intro">

</section>

<!-- /.intro -->



<section class="usage">

## Usage

```javascript
import zdiff from 'https://cdn.jsdelivr.net/gh/stdlib-js/blas-ext-base-ndarray-zdiff@deno/mod.js';
```

#### zdiff( arrays )

Calculates the k-th discrete forward difference of a one-dimensional double-precision complex floating-point ndarray.

<!-- eslint-disable max-len -->

```javascript
import Complex128Vector from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-vector-complex128@deno/mod.js';
import scalar2ndarray from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-from-scalar@deno/mod.js';

var x = new Complex128Vector( [ 2.0, 2.0, 4.0, 4.0 ] );
var prepend = new Complex128Vector( [ 1.0, 1.0 ] );
var append = new Complex128Vector( [ 7.0, 7.0 ] );
var out = new Complex128Vector( 3 );
var workspace = new Complex128Vector( 3 );
var k = scalar2ndarray( 1, {
    'dtype': 'generic'
});

var y = zdiff( [ x, prepend, append, out, workspace, k ] );
// returns <ndarray>[ <Complex128>[ 1.0, 1.0 ], <Complex128>[ 2.0, 2.0 ], <Complex128>[ 3.0, 3.0 ] ]
```

The function has the following parameters:

-   **arrays**: array-like object containing the following ndarrays:

    -   a one-dimensional input ndarray.
    -   a one-dimensional ndarray containing values to prepend prior to computing differences.
    -   a one-dimensional ndarray containing values to append prior to computing differences.
    -   a one-dimensional output ndarray. Must have `N + N1 + N2 - k` elements, where `N` is the number of elements in the input ndarray, `N1` is the number of elements to prepend, `N2` is the number of elements to append, and `k` is the number of times to recursively compute differences.
    -   a one-dimensional workspace ndarray. Must have `N + N1 + N2 - 1` elements.
    -   a zero-dimensional ndarray specifying the number of times to recursively compute differences.

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   When `k <= 1`, the workspace ndarray is unused.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
import discreteUniform from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-array-discrete-uniform@deno/mod.js';
import Complex128Vector from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-vector-complex128@deno/mod.js';
import zeros from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-zeros@deno/mod.js';
import scalar2ndarray from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-from-scalar@deno/mod.js';
import ndarray2array from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-to-array@deno/mod.js';
import zdiff from 'https://cdn.jsdelivr.net/gh/stdlib-js/blas-ext-base-ndarray-zdiff@deno/mod.js';

var N = 10;
var N1 = 2;
var N2 = 2;
var k = 4;
var opts = {
    'dtype': 'float64'
};

var x = new Complex128Vector( discreteUniform( N*2, -100, 100, opts ) );
var p = new Complex128Vector( discreteUniform( N1*2, -100, 100, opts ) );
var a = new Complex128Vector( discreteUniform( N2*2, -100, 100, opts ) );

opts = {
    'dtype': 'complex128'
};
var out = zeros( [ N + N1 + N2 - k ], opts );
var w = zeros( [ N + N1 + N2 - 1 ], opts );
var knd = scalar2ndarray( k, {
    'dtype': 'generic'
});

console.log( 'x: ', ndarray2array( x ) );
console.log( 'prepend: ', ndarray2array( p ) );
console.log( 'append: ', ndarray2array( a ) );

zdiff( [ x, p, a, out, w, knd ] );
console.log( 'out: ', ndarray2array( out ) );
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

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2026. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/blas-ext-base-ndarray-zdiff.svg
[npm-url]: https://npmjs.org/package/@stdlib/blas-ext-base-ndarray-zdiff

[test-image]: https://github.com/stdlib-js/blas-ext-base-ndarray-zdiff/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/blas-ext-base-ndarray-zdiff/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/blas-ext-base-ndarray-zdiff/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/blas-ext-base-ndarray-zdiff?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/blas-ext-base-ndarray-zdiff.svg
[dependencies-url]: https://david-dm.org/stdlib-js/blas-ext-base-ndarray-zdiff/main

-->

[chat-image]: https://img.shields.io/badge/zulip-join_chat-brightgreen.svg
[chat-url]: https://stdlib.zulipchat.com

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/blas-ext-base-ndarray-zdiff/tree/deno
[deno-readme]: https://github.com/stdlib-js/blas-ext-base-ndarray-zdiff/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/blas-ext-base-ndarray-zdiff/tree/umd
[umd-readme]: https://github.com/stdlib-js/blas-ext-base-ndarray-zdiff/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/blas-ext-base-ndarray-zdiff/tree/esm
[esm-readme]: https://github.com/stdlib-js/blas-ext-base-ndarray-zdiff/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/blas-ext-base-ndarray-zdiff/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/blas-ext-base-ndarray-zdiff/main/LICENSE

</section>

<!-- /.links -->

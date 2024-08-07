/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

/**
* Return an accessor function for retrieving an element from an array-like object supporting the get/set protocol.
*
* @module @stdlib/array-base-accessor-getter
*
* @example
* var Complex64Array = require( '@stdlib/array-complex64' );
* var realf = require( '@stdlib/complex-float32-real' );
* var imagf = require( '@stdlib/complex-float32-imag' );
* var dtype = require( '@stdlib/array-dtype' );
* var getter = require( '@stdlib/array-base-accessor-getter' );
*
* var arr = new Complex64Array( [ 1, 2, 3, 4 ] );
*
* var get = getter( dtype( arr ) );
* var v = get( arr, 1 );
* // returns <Complex64>
*
* var re = realf( v );
* // returns 3.0
*
* var im = imagf( v );
* // returns 4.0
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;

/*
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

/// <reference types="@stdlib/types"/>

import { AccessorArrayLike } from '@stdlib/types/array';
import Complex128Array = require( '@stdlib/array-complex128' );
import Complex64Array = require( '@stdlib/array-complex64' );
import getter = require( './index' );

/**
* Returns an array-like object supporting the get/set protocol.
*
* @returns array-like object
*/
function accessorArray(): AccessorArrayLike<number> {
	const arr: AccessorArrayLike<number> = {
		'0': 1,
		'1': 2,
		'2': 3,
		'3': 4,
		'length': 4,
		'get': ( idx: number ): number => {
			return arr[ idx ];
		},
		'set': ( value: number, idx: number ): void => {
			arr[ idx ] = value;
		}
	};
	return arr;
}


// TESTS //

// The function returns a function...
{
	getter( 'complex128' ); // $ExpectType GetComplex128
	getter( 'complex64' ); // $ExpectType GetComplex64
	getter( 'foo' ); // $ExpectType GetArrayLike<unknown>
}

// The compiler throws an error if the function is provided a first argument which is not a string...
{
	getter( 5 ); // $ExpectError
	getter( true ); // $ExpectError
	getter( false ); // $ExpectError
	getter( null ); // $ExpectError
	getter( {} ); // $ExpectError
	getter( [] ); // $ExpectError
	getter( ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	getter(); // $ExpectError
	getter( 'complex128', {} ); // $ExpectError
}

// The function returns a function which returns an array element...
{
	const get1 = getter<number>( 'foo' );
	const x1 = accessorArray();
	get1( x1, 2 ); // $ExpectType number

	const get2 = getter( 'complex128' );
	const x2 = new Complex128Array( [ 1, 2, 3, 4 ] );
	get2( x2, 1 ); // $ExpectType void | Complex128

	const get3 = getter( 'complex64' );
	const x3 = new Complex64Array( [ 1, 2, 3, 4 ] );
	get3( x3, 1 ); // $ExpectType void | Complex64
}

// The compiler throws an error if the returned function is provided a first argument which is not a accessor array...
{
	const get1 = getter( 'foo' );
	get1( 5, 1 ); // $ExpectError
	get1( true, 1 ); // $ExpectError
	get1( false, 1 ); // $ExpectError
	get1( null, 1 ); // $ExpectError
	get1( {}, 1 ); // $ExpectError

	const get2 = getter( 'complex128' );
	get2( 5, 1 ); // $ExpectError
	get2( true, 1 ); // $ExpectError
	get2( false, 1 ); // $ExpectError
	get2( null, 1 ); // $ExpectError
	get2( {}, 1 ); // $ExpectError

	const get3 = getter( 'complex64' );
	get3( 5, 1 ); // $ExpectError
	get3( true, 1 ); // $ExpectError
	get3( false, 1 ); // $ExpectError
	get3( null, 1 ); // $ExpectError
	get3( {}, 1 ); // $ExpectError
}

// The compiler throws an error if the returned function is provided a second argument which is not a number...
{
	const get1 = getter( 'foo' );
	get1( accessorArray(), '5' ); // $ExpectError
	get1( accessorArray(), true ); // $ExpectError
	get1( accessorArray(), false ); // $ExpectError
	get1( accessorArray(), null ); // $ExpectError
	get1( accessorArray(), {} ); // $ExpectError

	const get2 = getter( 'complex128' );
	get2( new Complex128Array( [ 1, 2, 3, 4 ] ), '5' ); // $ExpectError
	get2( new Complex128Array( [ 1, 2, 3, 4 ] ), true ); // $ExpectError
	get2( new Complex128Array( [ 1, 2, 3, 4 ] ), false ); // $ExpectError
	get2( new Complex128Array( [ 1, 2, 3, 4 ] ), null ); // $ExpectError
	get2( new Complex128Array( [ 1, 2, 3, 4 ] ), {} ); // $ExpectError

	const get3 = getter( 'complex64' );
	get3( new Complex64Array( [ 1, 2, 3, 4 ] ), '5' ); // $ExpectError
	get3( new Complex64Array( [ 1, 2, 3, 4 ] ), true ); // $ExpectError
	get3( new Complex64Array( [ 1, 2, 3, 4 ] ), false ); // $ExpectError
	get3( new Complex64Array( [ 1, 2, 3, 4 ] ), null ); // $ExpectError
	get3( new Complex64Array( [ 1, 2, 3, 4 ] ), {} ); // $ExpectError
}

// The compiler throws an error if the returned function is provided an unsupported number of arguments...
{
	const get1 = getter( 'foo' );
	get1(); // $ExpectError
	get1( [] ); // $ExpectError
	get1( [], 1, 2 ); // $ExpectError

	const get2 = getter( 'complex128' );
	get2(); // $ExpectError
	get2( new Complex128Array( [] ) ); // $ExpectError
	get2( new Complex128Array( [] ), 1, 2 ); // $ExpectError

	const get3 = getter( 'complex64' );
	get3(); // $ExpectError
	get3( new Complex64Array( [] ) ); // $ExpectError
	get3( new Complex64Array( [] ), 1, 2 ); // $ExpectError
}

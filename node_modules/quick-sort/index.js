/*

index.js - quick sort

The MIT License (MIT)

Copyright (c) 2013 Tristan Slominski

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

*/

"use strict";

var quickSort = module.exports = function quickSort (array, p, r, ascending, randomized) {
    ascending = (typeof ascending === "undefined") ? true : ascending;
    randomized = (typeof randomized === "undefined") ? false : randomized;
    p = (typeof p === "undefined") ? 0 : p;
    r = (typeof r === "undefined") ? array.length - 1 : r;
    var q;
    if (p < r) {
        if (randomized) {
            q = randomizedPartition(array, p, r, ascending);            
        } else {
            q = partition(array, p, r, ascending);
        }
        quickSort(array, p, q - 1, ascending, randomized);
        quickSort(array, q + 1, r, ascending, randomized);
    }
    return array;
};

var partition = function partition (array, p, r, ascending) {
    var x = array[r];
    var i = p - 1;
    var temp;
    for (var j = p; j < r; j++) {
        if (ascending ? array[j] < x : array[j] > x) {
            i++;
            temp = array[j];
            array[j] = array[i];
            array[i] = temp;
        }
    }
    temp = array[i + 1];
    array[i + 1] = array[r];
    array[r] = temp;
    return i + 1;
};

var randomizedPartition = function randomizedPartition (array, p, r, ascending) {
    var i = Math.floor((Math.random() * (r - p)) + 1) + p;
    var temp = array[r];
    array[r] = array[i];
    array[i] = temp;
    return partition(array, p, r, ascending);
};
# quick-sort

_Stability: 1 - [Experimental](https://github.com/tristanls/stability-index#stability-1---experimental)_

Quick sort.

## Usage

```javascript
var quickSort = require('quick-sort');
...
var ascending  = quickSort(array);                              // sort ascending
var descending = quickSort(array, undefined, undefined, false); // sort descending
// sort ascending using randomized partitioning
var ascending  = quickSort(array, undefined, undefined, true, true);  
// sort descending using randomized partitioning
var descending = quickSort(array, undefined, undefined, false, true); 
```

_yes, the descending case is sort of crappy usage, I doubt anyone will use this code though :)_
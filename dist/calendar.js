(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
/**
 * ██████╗   ██████╗   ██████╗  ██████╗   █████╗  ██╗   ██╗ ██╗
 * ██╔══██╗ ██╔═══██╗ ██╔═══██╗ ██╔══██╗ ██╔══██╗ ╚██╗ ██╔╝ ██║
 * ██║  ██║ ██║   ██║ ██║   ██║ ██████╔╝ ███████║  ╚████╔╝  ██║
 * ██║  ██║ ██║   ██║ ██║   ██║ ██╔══██╗ ██╔══██║   ╚██╔╝   ╚═╝
 * ██████╔╝ ╚██████╔╝ ╚██████╔╝ ██║  ██║ ██║  ██║    ██║    ██╗
 * ╚═════╝   ╚═════╝   ╚═════╝  ╚═╝  ╚═╝ ╚═╝  ╚═╝    ╚═╝    ╚═╝
 *
 *  ██████╗  █████╗  ██╗      ███████╗ ███╗   ██╗ ██████╗   █████╗  ██████╗
 * ██╔════╝ ██╔══██╗ ██║      ██╔════╝ ████╗  ██║ ██╔══██╗ ██╔══██╗ ██╔══██╗
 * ██║      ███████║ ██║      █████╗   ██╔██╗ ██║ ██║  ██║ ███████║ ██████╔╝
 * ██║      ██╔══██║ ██║      ██╔══╝   ██║╚██╗██║ ██║  ██║ ██╔══██║ ██╔══██╗
 * ╚██████╗ ██║  ██║ ███████╗ ███████╗ ██║ ╚████║ ██████╔╝ ██║  ██║ ██║  ██║
 *  ╚═════╝ ╚═╝  ╚═╝ ╚══════╝ ╚══════╝ ╚═╝  ╚═══╝ ╚═════╝  ╚═╝  ╚═╝ ╚═╝  ╚═╝
 * @version 0.1.2
 */
/* eslint vars-on-top:0, strict:0 */

/**********
 * Common
 **********/
require('code-snippet');
require('./src/js/view/template/registerHelpers');
var dirty = require('./src/js/common/dirty');
var datetime = require('./src/js/datetime');
var array = require('./src/js/common/array');
var domevent = require('./src/js/common/domevent');
var domutil = require('./src/js/common/domutil');
var Colleciton = require('./src/js/common/collection');
var model = require('./src/js/common/model');
var common = require('./src/js/common/common');
var reqAnimFrame = require('./src/js/common/reqAnimFrame');
var AJAX = require('./src/js/common/ajax');

/**********
 * Models
 **********/
var Point = require('./src/js/common/point');
var Event = require('./src/js/model/event');

/**********
 * Views
 **********/
var View = require('./src/js/view/view');
var MonthWeek = require('./src/js/view/monthweek');

var Week = require('./src/js/view/week/week');
var DayName = require('./src/js/view/week/dayname');
var TimeGrid = require('./src/js/view/week/timeGrid');
var Time = require('./src/js/view/week/time');


/**********
 * View Models
 **********/
var EventViewModel = require('./src/js/model/viewModel/event');

/**********
 * Handlers
 **********/
var Drag = require('./src/js/handler/drag');
var TimeCore = require('./src/js/handler/time/core');
var TimeCreation = require('./src/js/handler/time/creation');
var TimeCreationGuide = require('./src/js/handler/time/creationGuide');
var TimeMove = require('./src/js/handler/time/move');
var TimeMoveGuide = require('./src/js/handler/time/moveGuide');
var TimeResize = require('./src/js/handler/time/resize');
var TimeResizeGuide = require('./src/js/handler/time/resizeGuide');

var AlldayCore = require('./src/js/handler/allday/core');
var AlldayCreation = require('./src/js/handler/allday/creation');
var AlldayCreationGuide = require('./src/js/handler/allday/creationGuide');
var AlldayMove = require('./src/js/handler/allday/move');
var AlldayMoveGuide = require('./src/js/handler/allday/moveGuide');
var AlldayResize = require('./src/js/handler/allday/resize');
var AlldayResizeGuide = require('./src/js/handler/allday/resizeGuide');

/**********
 * Factory
 **********/
var controllerFactory = require('./src/js/factory/controller');

/** @namespace ne.dooray.calendar */

global.ne.util.defineNamespace('ne.dooray.calendar', {
    // common
    dirty: dirty,
    datetime: datetime,
    array: array,
    domevent: domevent,
    domutil: domutil,
    Collection: Colleciton,
    model: model,
    common: common,
    reqAnimFrame: reqAnimFrame,
    AJAX: AJAX,
    Point: Point, 

    // model
    Event: Event,
    EventViewModel: EventViewModel,

    // view
    View: View,
    Week: Week,
    DayName: DayName,
    TimeGrid: TimeGrid,
    Time: Time,
    MonthWeek: MonthWeek,

    // handler, guide
    Drag: Drag,

    TimeCore: TimeCore,
    TimeCreation: TimeCreation,
    TimeCreationGuide: TimeCreationGuide,
    TimeMove: TimeMove,
    TimeMoveGuide: TimeMoveGuide,
    TimeResize: TimeResize,
    TimeResizeGuide: TimeResizeGuide,

    AlldayCore: AlldayCore,
    AlldayCreation: AlldayCreation,
    AlldayCreationGuide: AlldayCreationGuide,
    AlldayMove: AlldayMove,
    AlldayMoveGuide: AlldayMoveGuide,
    AlldayResize: AlldayResize,
    AlldayResizeGuide: AlldayResizeGuide,

    // only for test
    ControllerFactory: controllerFactory
});

/**********
 * SERVICE MODULE
 **********/
var calendarAPI = require('./src/js/dooray/calendarAPI');
var MiniCalendar = require('./src/js/dooray/view/minicalendar');
var DoorayEvent = require('./src/js/dooray/model/event');

/** @namespace ne.dooray.calendar.service */

global.ne.util.defineNamespace('ne.dooray.calendar.service', {
    DoorayEvent: DoorayEvent,
    MiniCalendar: MiniCalendar,
    calendarAPI: calendarAPI
});

/**********
 * Calendar Factory
 **********/

var Calendar = require('./src/js/factory/calendar');
var ServiceCalendar = require('./src/js/dooray/factory/calendar');

global.ne.dooray.calendar.OriginCalendar = function (options, container) {
    return new Calendar(options, container);
};

global.ne.dooray.calendar.Calendar = function(options, container) {
    return new ServiceCalendar(options, container);
};


}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./src/js/common/ajax":23,"./src/js/common/array":24,"./src/js/common/collection":26,"./src/js/common/common":27,"./src/js/common/dirty":28,"./src/js/common/domevent":29,"./src/js/common/domutil":30,"./src/js/common/model":31,"./src/js/common/point":32,"./src/js/common/reqAnimFrame":33,"./src/js/datetime":37,"./src/js/dooray/calendarAPI":38,"./src/js/dooray/factory/calendar":40,"./src/js/dooray/model/event":42,"./src/js/dooray/view/minicalendar":44,"./src/js/factory/calendar":46,"./src/js/factory/controller":47,"./src/js/handler/allday/core":49,"./src/js/handler/allday/creation":50,"./src/js/handler/allday/creationGuide":51,"./src/js/handler/allday/move":52,"./src/js/handler/allday/moveGuide":53,"./src/js/handler/allday/resize":54,"./src/js/handler/allday/resizeGuide":55,"./src/js/handler/drag":56,"./src/js/handler/time/core":57,"./src/js/handler/time/creation":58,"./src/js/handler/time/creationGuide":59,"./src/js/handler/time/move":60,"./src/js/handler/time/moveGuide":61,"./src/js/handler/time/resize":62,"./src/js/handler/time/resizeGuide":63,"./src/js/model/event":64,"./src/js/model/viewModel/event":65,"./src/js/view/monthweek":67,"./src/js/view/template/registerHelpers":71,"./src/js/view/view":76,"./src/js/view/week/dayname":78,"./src/js/view/week/time":79,"./src/js/view/week/timeGrid":80,"./src/js/view/week/week":81,"code-snippet":2}],2:[function(require,module,exports){
/*!code-snippet v1.0.4 | NHN Entertainment*/
/**********
 * array.js
 **********/

/**
 * @fileoverview This module has some functions for handling array.
 * @author NHN Ent.
 *         FE Development Team <jiung.kang@nhnent.com>
 * @dependency type.js
 */

(function(ne) {
    'use strict';
    if (!ne) {
        ne = window.ne = {};
    }
    if (!ne.util) {
        ne.util = window.ne.util = {};
    }

    var aps = Array.prototype.slice;

    /**
     * Generate an integer Array containing an arithmetic progression.
     * @param {number} start
     * @param {number} stop
     * @param {number} step
     * @memberof ne.util
     * @returns {Array}
     * @example
     *
     *   var arr = ne.util.range(5);
     *   console.log(arr); // [0,1,2,3,4]
     *
     *   arr = ne.util.range(1, 5);
     *   console.log(arr); // [1,2,3,4]
     *
     *   arr = ne.util.range(2, 10, 2);
     *   console.log(arr); // [2,4,6,8]
     *
     *   arr = ne.util.range(10, 2, -2);
     *   console.log(arr); // [10,8,6,4]
     */
    var range = function(start, stop, step) {
        var arr = [],
            flag;

        if (ne.util.isUndefined(stop)) {
            stop = start || 0;
            start = 0;
        }

        step = step || 1;
        flag = step < 0 ? -1 : 1;
        stop *= flag;

        for(; start * flag < stop; start += step) {
            arr.push(start);
        }

        return arr;
    };

    /**
     * Zip together multiple lists into a single array
     * @param {...Array}
     * @memberof ne.util
     * @returns {Array}
     * @example
     *
     *   var result = ne.util.zip([1, 2, 3], ['a', 'b','c'], [true, false, true]);
     *
     *   console.log(result[0]); // [1, 'a', true]
     *   console.log(result[1]); // [2, 'b', false]
     *   console.log(result[2]); // [3, 'c', true]
     */
    var zip = function() {
        var arr2d = aps.call(arguments),
            result = [];

        ne.util.forEach(arr2d, function(arr) {
            ne.util.forEach(arr, function(value, index) {
                if (!result[index]) {
                    result[index] = [];
                }
                result[index].push(value);
            });
        });

        return result;
    };

    ne.util.range = range;
    ne.util.zip = zip;
})(window.ne);
/**********
 * browser.js
 **********/

/**
 * @fileoverview This module detects the kind of well-known browser and version.
 * @author NHN Ent.
 *         FE Development Team <e0242@nhnent.com>
 * @namespace ne.util
 */

(function(ne) {
    'use strict';
    /* istanbul ignore if */
    if (!ne) {
        ne = window.ne = {};
    }
    /* istanbul ignore if */
    if (!ne.util) {
        ne.util = window.ne.util = {};
    }

    /**
     * This object has an information that indicate the kind of browser.<br>
     * The list below is a detectable browser list.
     *  - ie7 ~ ie11
     *  - chrome
     *  - firefox
     *  - safari
     * @memberof ne.util
     * @example
     *  ne.util.browser.chrome === true;    // chrome
     *  ne.util.browser.firefox === true;    // firefox
     *  ne.util.browser.safari === true;    // safari
     *  ne.util.browser.msie === true;    // IE
     *  ne.util.browser.other === true;    // other browser
     *  ne.util.browser.version;    // browser version
     */
    var browser = {
        chrome: false,
        firefox: false,
        safari: false,
        msie: false,
        others: false,
        version: 0
    };

    var nav = window.navigator,
        appName = nav.appName.replace(/\s/g, '_'),
        userAgent = nav.userAgent;

    var rIE = /MSIE\s([0-9]+[.0-9]*)/,
        rIE11 = /Trident.*rv:11\./,
        versionRegex = {
            'firefox': /Firefox\/(\d+)\./,
            'chrome': /Chrome\/(\d+)\./,
            'safari': /Version\/([\d\.]+)\sSafari\/(\d+)/
        };

    var key, tmp;

    var detector = {
        'Microsoft_Internet_Explorer': function() {
            // ie8 ~ ie10
            browser.msie = true;
            browser.version = parseFloat(userAgent.match(rIE)[1]);
        },
        'Netscape': function() {
            var detected = false;

            if (rIE11.exec(userAgent)) {
                browser.msie = true;
                browser.version = 11;
            } else {
                for (key in versionRegex) {
                    if (versionRegex.hasOwnProperty(key)) {
                        tmp = userAgent.match(versionRegex[key]);
                        if (tmp && tmp.length > 1) {
                            browser[key] = detected = true;
                            browser.version = parseFloat(tmp[1] || 0);
                            break;
                        }
                    }
                }
            }
            if (!detected) {
                browser.others = true;
            }
        }
    };

    detector[appName]();
    ne.util.browser = browser;
})(window.ne);

/**********
 * collection.js
 **********/

/**
 * @fileoverview This module has some functions for handling object as collection.
 * @author NHN Ent.
 *         FE Development Team <e0242@nhnent.com>
 * @dependency type.js, object.js
 */

(function(ne) {
    'use strict';
    if (!ne) {
        ne = window.ne = {};
    }
    if (!ne.util) {
        ne.util = window.ne.util = {};
    }

    /**
     * This variable saves whether the 'indexOf' method is in Array.prototype or not.<br>
     * And it will be checked only once when the page is loaded.
     * @type {boolean}
     */
    var hasIndexOf = !!Array.prototype.indexOf;

    /**
     * Execute the provided callback once for each element present in the array(or Array-like object) in ascending order.<br>
     * If the callback function returns false, the loop will be stopped.<br>
     * Callback function(iteratee) is invoked with three arguments:
     *  - The value of the element
     *  - The index of the element
     *  - The array(or Array-like object) being traversed
     * @param {Array} arr The array(or Array-like object) that will be traversed
     * @param {function} iteratee Callback function
     * @param {Object} [context] Context(this) of callback function
     * @memberof ne.util
     * @example
     *  var sum = 0;
     *
     *  forEachArray([1,2,3], function(value){
     *      sum += value;
     *   });
     *  alert(sum); // 6
     */
    function forEachArray(arr, iteratee, context) {
        var index = 0,
            len = arr.length;

        context = context || null;

        for (; index < len; index++) {
            if (iteratee.call(context, arr[index], index, arr) === false) {
                break;
            }
        }
    }


    /**
     * Execute the provided callback once for each property of object which actually exist.<br>
     * If the callback function returns false, the loop will be stopped.<br>
     * Callback function(iteratee) is invoked with three arguments:
     *  - The value of the property
     *  - The name of the property
     *  - The object being traversed
     * @param {Object} obj The object that will be traversed
     * @param {function} iteratee  Callback function
     * @param {Object} [context] Context(this) of callback function
     * @memberof ne.util
     * @example
     *  var sum = 0;
     *
     *  forEachOwnProperties({a:1,b:2,c:3}, function(value){
     *      sum += value;
     *  });
     *  alert(sum); // 6
     **/
    function forEachOwnProperties(obj, iteratee, context) {
        var key;

        context = context || null;

        for (key in obj) {
            if (obj.hasOwnProperty(key)) {
                if (iteratee.call(context, obj[key], key, obj) === false) {
                    break;
                }
            }
        }
    }

    /**
     * Execute the provided callback once for each property of object(or element of array) which actually exist.<br>
     * If the object is Array-like object(ex-arguments object), It needs to transform to Array.(see 'ex2' of example).<br>
     * If the callback function returns false, the loop will be stopped.<br>
     * Callback function(iteratee) is invoked with three arguments:
     *  - The value of the property(or The value of the element)
     *  - The name of the property(or The index of the element)
     *  - The object being traversed
     * @param {Object} obj The object that will be traversed
     * @param {function} iteratee Callback function
     * @param {Object} [context] Context(this) of callback function
     * @memberof ne.util
     * @example
     *  //ex1
     *  var sum = 0;
     *
     *  forEach([1,2,3], function(value){
     *      sum += value;
     *  });
     *  alert(sum); // 6
     *
     *  //ex2 - In case of Array-like object
     *  function sum(){
     *      var factors = Array.prototype.slice.call(arguments);
     *      forEach(factors, function(value){
     *           //......
     *      });
     *  }
     */
    function forEach(obj, iteratee, context) {
        if (ne.util.isArray(obj)) {
            ne.util.forEachArray(obj, iteratee, context);
        } else {
            ne.util.forEachOwnProperties(obj, iteratee, context);
        }
    }

    /**
     * Execute the provided callback function once for each element in an array, in order, and constructs a new array from the results.<br>
     * If the object is Array-like object(ex-arguments object), It needs to transform to Array.(see 'ex2' of forEach example)<br>
     * Callback function(iteratee) is invoked with three arguments:
     *  - The value of the property(or The value of the element)
     *  - The name of the property(or The index of the element)
     *  - The object being traversed
     * @param {Object} obj The object that will be traversed
     * @param {function} iteratee Callback function
     * @param {Object} [context] Context(this) of callback function
     * @returns {Array} A new array composed of returned values from callback function
     * @memberof ne.util
     * @example
     *  var result = map([0,1,2,3], function(value) {
     *      return value + 1;
     *  });
     *
     *  alert(result);  // 1,2,3,4
     */
    function map(obj, iteratee, context) {
        var resultArray = [];

        context = context || null;

        ne.util.forEach(obj, function() {
            resultArray.push(iteratee.apply(context, arguments));
        });

        return resultArray;
    }

    /**
     * Execute the callback function once for each element present in the array(or Array-like object or plain object).<br>
     * If the object is Array-like object(ex-arguments object), It needs to transform to Array.(see 'ex2' of forEach example)<br>
     * Callback function(iteratee) is invoked with four arguments:
     *  - The previousValue
     *  - The currentValue
     *  - The index
     *  - The object being traversed
     * @param {Object} obj The object that will be traversed
     * @param {function} iteratee Callback function
     * @param {Object} [context] Context(this) of callback function
     * @returns {*} The result value
     * @memberof ne.util
     * @example
     *  var result = reduce([0,1,2,3], function(stored, value) {
     *      return stored + value;
     *  });
     *
     *  alert(result); // 6
     */
    function reduce(obj, iteratee, context) {
        var keys,
            index = 0,
            length,
            store;

        context = context || null;

        if (!ne.util.isArray(obj)) {
            keys = ne.util.keys(obj);
        }

        length = keys ? keys.length : obj.length;

        store = obj[keys ? keys[index++] : index++];

        for (; index < length; index++) {
            store = iteratee.call(context, store, obj[keys ? keys[index] : index]);
        }

        return store;
    }
    /**
     * Transform the Array-like object to Array.<br>
     * In low IE (below 8), Array.prototype.slice.call is not perfect. So, try-catch statement is used.
     * @param {*} arrayLike Array-like object
     * @return {Array} Array
     * @memberof ne.util
     * @example
     *  var arrayLike = {
     *      0: 'one',
     *      1: 'two',
     *      2: 'three',
     *      3: 'four',
     *      length: 4
     *  };
     *  var result = toArray(arrayLike);
     *
     *  alert(result instanceof Array); // true
     *  alert(result); // one,two,three,four
     */
    function toArray(arrayLike) {
        var arr;
        try {
            arr = Array.prototype.slice.call(arrayLike);
        } catch (e) {
            arr = [];
            forEachArray(arrayLike, function(value) {
                arr.push(value);
            });
        }
        return arr;
    }

    /**
     * Create a new array or plain object with all elements(or properties) that pass the test implemented by the provided function.<br>
     * Callback function(iteratee) is invoked with three arguments:
     *  - The value of the property(or The value of the element)
     *  - The name of the property(or The index of the element)
     *  - The object being traversed
     * @param {Object} obj Object(plain object or Array) that will be traversed
     * @param {function} iteratee Callback function
     * @param {Object} [context] Context(this) of callback function
     * @returns {Object} plain object or Array
     * @memberof ne.util
     * @example
     *  var result1 = filter([0,1,2,3], function(value) {
     *      return (value % 2 === 0);
     *  });
     *  alert(result1); // 0,2
     *
     *  var result2 = filter({a : 1, b: 2, c: 3}, function(value) {
     *      return (value % 2 !== 0);
     *  });
     *  alert(result2.a); // 1
     *  alert(result2.b); // undefined
     *  alert(result2.c); // 3
     */
    var filter = function(obj, iteratee, context) {
        var result,
            add;

        context = context || null;

        if (!ne.util.isObject(obj) || !ne.util.isFunction(iteratee)) {
            throw new Error('wrong parameter');
        }

        if (ne.util.isArray(obj)) {
            result = [];
            add = function(result, args) {
                result.push(args[0]);
            };
        } else {
            result = {};
            add = function(result, args) {
                result[args[1]] = args[0];
            };
        }

        ne.util.forEach(obj, function() {
            if (iteratee.apply(context, arguments)) {
                add(result, arguments);
            }
        }, context);

        return result;
    };

    /**
     * Returns the first index at which a given element can be found in the array from start index(default 0), or -1 if it is not present.<br>
     * It compares searchElement to elements of the Array using strict equality (the same method used by the ===, or triple-equals, operator).
     * @param {*} searchElement Element to locate in the array
     * @param {Array} array Array that will be traversed.
     * @param {number} startIndex Start index in array for searching (default 0)
     * @memberof ne.util
     * @return {number} the First index at which a given element, or -1 if it is not present
     * @example
     *
     *   var arr = ['one', 'two', 'three', 'four'],
     *       idx1,
     *       idx2;
     *
     *   idx1 = ne.util.inArray('one', arr, 3);
     *   alert(idx1); // -1
     *
     *   idx2 = ne.util.inArray('one', arr);
     *   alert(idx2); // 0
     */
    var inArray = function(searchElement, array, startIndex) {
        if (!ne.util.isArray(array)) {
            return -1;
        }

        if (hasIndexOf) {
            return Array.prototype.indexOf.call(array, searchElement, startIndex);
        }

        var i,
            length = array.length;

        // set startIndex
        if (ne.util.isUndefined(startIndex)) {
            startIndex = 0;
        } else if (startIndex >= length || startIndex < 0) {
            return -1;
        }

        // search
        for (i = startIndex; i < length; i++) {
            if (array[i] === searchElement) {
                return i;
            }
        }

        return -1;
    };

    /**
     * fetching a property
     * @param {Array} arr target collection
     * @param {String|Number} property property name
     * @memberof ne.util
     * @returns {Array}
     * @example
     *   var objArr = [
     *         {'abc': 1, 'def': 2, 'ghi': 3},
     *         {'abc': 4, 'def': 5, 'ghi': 6},
     *         {'abc': 7, 'def': 8, 'ghi': 9}
     *       ],
     *       arr2d = [
     *         [1, 2, 3],
     *         [4, 5, 6],
     *         [7, 8, 9]
     *       ],
     *       result;
     *
     *   result = ne.util.pluck(objArr, 'abc');
     *   console.log(result) // [1, 4, 7]
     *
     *   result = ne.util.pluck(arr2d, 2);
     *   console.log(result) // [3, 6, 9]
     */
    var pluck = function(arr, property) {
        var result = ne.util.map(arr, function(item) {
            return item[property];
        });
        return result;
    };

    ne.util.forEachOwnProperties = forEachOwnProperties;
    ne.util.forEachArray = forEachArray;
    ne.util.forEach = forEach;
    ne.util.toArray = toArray;
    ne.util.map = map;
    ne.util.reduce = reduce;
    ne.util.filter = filter;
    ne.util.inArray = inArray;
    ne.util.pluck = pluck;

})(window.ne);

/**********
 * customEvent.js
 **********/

/**
 * @fileoverview
 *  This module provides some functions for custom events.<br>
 *  And it is implemented in the observer design pattern.
 * @author NHN Ent.
 *         FE Development Team <e0242@nhnent.com>
 * @dependency type.js, collection.js object.js
 */

(function(ne) {
    'use strict';
    /* istanbul ignore if */
    if (!ne) {
        ne = window.ne = {};
    }

    /* istanbul ignore if */
    if (!ne.util) {
        ne.util = window.ne.util = {};
    }

    /**
     * A unit of event handler item.
     * @ignore
     * @typedef {Object} handlerItem
     * @property {function} fn - event handler
     * @property {*} ctx - context of event handler
     */

    /**
     * A data structure for storing handlerItems bound with a specific context
     *  and is a unit item of ctxEvents.<br>
     * Handlers in this item, will be executed with same event.
     * @ignore
     * @typedef {Object.<string, handlerItem>} ctxEventsItem
     * @example
     *  ctxEventsItem = {
     *      1_1: {
     *          fn: function(){...},
     *          ctx: context1
     *      },
     *      2_1: {
     *          fn: function(){...},
     *          ctx: context1
     *      }
     *  }
     */

    /**
     * A data structure for storing ctxEventsItem and length for each event(or event name).
     * @ignore
     * @typedef {Object.<string, (ctxEventsItem|number)>} ctxEvents
     * @example
     *  ctxEvents = {
     *      eventName1_idx: {
     *          1_1: {
     *              fn: function(){...},
     *              ctx: context1
     *          },
     *          2_1: {
     *              fn: function(){...},
     *              ctx: context1
     *          }
     *      },
     *      eventName1_len: 2,
     *      eventName2_idx: {
     *          3_2: {
     *              fn: function(){...},
     *              ctx: context2
     *          },
     *          4_2: {
     *              fn: function(){...},
     *              ctx: context2
     *          }
     *      },
     *      eventName2_len: 2
     *  };
     */


    /**
     * @constructor
     * @memberof ne.util
     */
    function CustomEvents() {
        /**
         * Caching a data structure that has normal event handlers which are not bound with a specific context.
         * @type {object.<string, handlerItem[]>}
         * @private
         */
        this._events = null;

        /**
         * Caching a {ctxEvents}
         * @type {ctxEvents}
         * @private
         */
        this._ctxEvents = null;
    }


    /**********
     * static
     **********/

    /**
     * Use for making a constructor to be able to do CustomEvent's functions.
     * @param {function} func - Constructor
     * @example
     *  function Model() {
     *      this.name = '';
     *  }
     *  ne.util.CustomEvents.mixin(Model);
     *
     *  var model = new Model();
     *  model.on('change', function() { this.name = 'model'; }, this);
     *  model.fire('change');
     *  alert(model.name); // 'model';
     */
    CustomEvents.mixin = function(func) {
        ne.util.extend(func.prototype, CustomEvents.prototype);
    };

    /**********
     * private
     **********/

    /**
     * Work similarly to Array.prototype.forEach(),
     *  however does Array.prototype.splice() additionally.<br>
     * Callback(iteratee) function is invoked with four arguments:
     *  - The value of the element
     *  - The index of the element
     *  - The array being traversed
     *  - A special callback function that decreases the length of array
     * @param {Array} arr - Array that will be traversed
     * @param {function} iteratee - Callback function
     */
    CustomEvents.prototype._forEachArraySplice = function(arr, iteratee) {
        var i,
            len,
            item,
            decrease = function() {
                arr.splice(i, 1);
                len -= 1;
                i -= 1;
            };

        if (!ne.util.isExisty(arr) || !ne.util.isArray(arr)) {
            return;
        }

        for (i = 0, len = arr.length; i < len; i++) {
            item = arr[i];

            if (iteratee(item, i, arr, decrease) === false) {
                return;
            }
        }
    };

    /**********
     * context event handler
     **********/

    /**
     * Execute the callback once for each ctxEventsItem.<br>
     * Callback function(iteratee) is invoked with three arguments:
     *  - {ctxEventsItem} A unit item of ctxEvents
     *  - {string} A key (ex - 'eventName_idx' or 'eventName_len')
     *  - {ctxEvents} A ctxEvents being traversed
     * @param {function} iteratee - Callback function
     * @private
     */
    CustomEvents.prototype._eachCtxEvents = function(iteratee) {
        var events = this._ctxEvents;
        ne.util.forEachOwnProperties(events, iteratee);
    };

    /**
     * Execute the callback once
     *  for each handler item that is value of the key including a specific string(=id, arguments[1]).<br>
     * Callback function(iteratee) is invoked with two arguments:
     *  - handlerItem
     *  - handlerItemId
     * @param {ctxEventsItem} ctxEventsItem - A data structure storing handlerItems.
     * @param {string} id - An id of handler for searching
     * @param {function} iteratee - Callback function
     * @private
     */
    CustomEvents.prototype._eachCtxHandlerItemByContainId = function(ctxEventsItem, id, iteratee) {
        ne.util.forEachOwnProperties(ctxEventsItem, function(handlerItem, handlerItemId) {
            if (handlerItemId.indexOf(id) > -1) {
                iteratee(handlerItem, handlerItemId);
            }
        });
    };

    /**
     * Execute the callback once
     *  for each case of when the provided handler(arguments[0]) is equal to a handler in ctxEventsItem.<br>
     * Callback function(iteratee) is invoked with four arguments:
     *  - handlerItem
     *  - handlerItemId
     *  - ctxEventsItem
     *  - eventKey, A Name of custom event (ex - 'eventName_idx')
     * @param {function} handler - Event handler
     * @param {function} iteratee - Callback function
     * @private
     */
    CustomEvents.prototype._eachCtxEventByHandler = function(handler, iteratee) {
        var handlerId = ne.util.stamp(handler),
            eachById = this._eachCtxHandlerItemByContainId;

        this._eachCtxEvents(function(ctxEventsItem, eventKey) {
            eachById(ctxEventsItem, handlerId, function(handlerItem, handlerItemId) {
                iteratee(handlerItem, handlerItemId, ctxEventsItem, eventKey);
            });
        });
    };

    /**
     * Execute the callback once
     *  for each case of when the provided context(arguments[0]) is equal to a context in ctxEventsItem.<br>
     * Callback function(iteratee) is invoked with four arguments:
     *  - handlerItem
     *  - handlerItemId
     *  - ctxEventsItem
     *  - eventKey, A Name of custom event with postfix (ex - 'eventName_idx')
     * @param {*} context - Context for searching
     * @param {function} iteratee - Callback function
     * @private
     */
    CustomEvents.prototype._eachCtxEventByContext = function(context, iteratee) {
        var contextId = ne.util.stamp(context),
            eachById = this._eachCtxHandlerItemByContainId;

        this._eachCtxEvents(function(ctxEventsItem, eventKey) {
            eachById(ctxEventsItem, contextId, function(handlerItem, handlerItemId) {
                iteratee(handlerItem, handlerItemId, ctxEventsItem, eventKey);
            });
        });
    };

    /**
     * Execute the callback once for each handler of ctxEventsItem of the provided eventName(arguments[0]).<br>
     * Callback function(iteratee) is invoked with four arguments:
     *  - handlerItem
     *  - handlerItemId
     *  - ctxEventsItem
     *  - eventKey, A Name of custom event with postfix (ex - 'eventName_idx')
     * @param {string} eventName - Custom event name
     * @param {function} iteratee - Callback function
     * @private
     */
    CustomEvents.prototype._eachCtxEventByEventName = function(eventName, iteratee) {
        if (!this._ctxEvents) {
            return;
        }

        var key = this._getCtxKey(eventName),
            ctxEventsItem = this._ctxEvents[key],
            args;

        ne.util.forEachOwnProperties(ctxEventsItem, function() {
            args = Array.prototype.slice.call(arguments);
            args.push(key);
            iteratee.apply(null, args);
        });
    };

    /**********
     * normal event handler
     **********/

    /**
     * Execute the callback once
     *  for each handler in instance equal to the provided handler(arguments[0]).<br>
     * Callback function(iteratee) is invoked with five arguments:
     *  - handlerItem
     *  - index of handlerItem array
     *  - eventList by handler
     *  - eventKey, A Name of custom event with postfix (ex - 'eventName_idx')
     *  - decrease, A special callback function that decreases the length of array.
     * @param {function} handler - A handler for searching
     * @param {function} iteratee - Callback function
     * @private
     */
    CustomEvents.prototype._eachEventByHandler = function(handler, iteratee) {
        var events = this._events,
            forEachArrayDecrease = this._forEachArraySplice,
            idx = 0;

        ne.util.forEachOwnProperties(events, function(eventList, eventKey) {
            forEachArrayDecrease(eventList, function(handlerItem, index, eventList, decrease) {
                if (handlerItem.fn === handler) {
                    iteratee(handlerItem, idx, eventList, eventKey, decrease);
                    idx += 1;
                }
            });
        });
    };

    /**
     * Execute the callback once for each handler of normal events of the provided eventName.<br>
     * Callback function(iteratee) is invoked with four arguments:
     *  - handler
     *  - index of handler-list
     *  - handler-list
     *  - decrease, A special callback function that decreases the length of array
     * @param {string} eventName - Custom event name
     * @param {function} iteratee - Callback function
     * @private
     */
    CustomEvents.prototype._eachEventByEventName = function(eventName, iteratee) {
        var events;

        if (!this._events) {
            return;
        }

        events = this._events[eventName];
        if (!ne.util.isExisty(events)) {
            return;
        }

        this._forEachArraySplice(events, iteratee);
    };

    /**
     * Return a new key for saving a handler with a context in event name.
     * @param {string} eventName A event name
     * @returns {string} Key
     * @private
     */
    CustomEvents.prototype._getCtxKey = function(eventName) {
        return eventName + '_idx';
    };

    /**
     * Return a new key for saving length of handlers in event name.
     * @param {string} eventName A event name
     * @returns {string} Key
     * @private
     */
    CustomEvents.prototype._getCtxLenKey = function(eventName) {
        return eventName + '_len';
    };

    /**
     * Return a new key for storing to ctxEventsItem.
     * @param {function} func A event handler
     * @param {*} ctx A context in handler
     * @returns {string} Key
     * @private
     */
    CustomEvents.prototype._getHandlerKey = function(func, ctx) {
        return ne.util.stamp(func) + '_' + ne.util.stamp(ctx);
    };


    /**
     * Set the length of handlers in ctxEventsItem.
     * @param {string} lenKey - A key for saving the length of handlers in `this._ctxEvents`
     * @param {number} change - A variation value of length
     * @private
     */
    CustomEvents.prototype._setCtxLen = function(lenKey, change) {
        var events = this._ctxEvents;

        if (!ne.util.isExisty(events[lenKey])) {
            events[lenKey] = 0;
        }

        events[lenKey] += change;
    };


    /**
     * Store a {handlerItem} to instance.
     * @param {string} eventName - Custom event name
     * @param {*} context - Context for binding
     * @param {function} handler - Handler function
     * @private
     */
    CustomEvents.prototype._addCtxEvent = function(eventName, context, handler) {
        var events = this._ctxEvents,
            key = this._getCtxKey(eventName),
            event;

        if (!ne.util.isExisty(events)) {
            events = this._ctxEvents = {};
        }

        event = events[key];
        if (!ne.util.isExisty(event)) {
            event = events[key] = {};
        }

        var lenKey = this._getCtxLenKey(eventName),
            handlerItemId = this._getHandlerKey(handler, context);

        event[handlerItemId] = {
            fn: handler,
            ctx: context
        };

        this._setCtxLen(lenKey, +1);
    };

    /**
     * Store a event handler without context to instance.
     * @param {string} eventName - Custom event name
     * @param {function} handler - Handler function
     * @private
     */
    CustomEvents.prototype._addNormalEvent = function(eventName, handler) {
        var events = this._events,
            event;

        if (!ne.util.isExisty(events)) {
            events = this._events = {};
        }

        event = events[eventName];
        if (!ne.util.isExisty(event)) {
            event = events[eventName] = [];
        }

        event.push({ fn: handler });
    };


    /**
     * Take the event handler off by handler(arguments[0])
     * @param {function} handler - Handler for offing
     * @private
     */
    CustomEvents.prototype._offByHandler = function(handler) {
        var ctxEvents = this._ctxEvents,
            lenKey;

        this._eachCtxEventByHandler(handler, function(handlerItem, hanId, ctxItems, eventKey) {
            lenKey = eventKey.replace('_idx', '_len');
            delete ctxItems[hanId];
            ctxEvents[lenKey] -= 1;
        });

        this._eachEventByHandler(handler, function(handlerItem, index, items, eventKey, decrease) {
            items.splice(index, 1);
            decrease();
        });
    };

    /**
     * Take the event handler off by context with event name
     * @param {*} context - Context
     * @param {(string|function)} [eventName] - Custom event name
     * @private
     */
    CustomEvents.prototype._offByContext = function(context, eventName) {
        var ctxEvents = this._ctxEvents,
            hasArgs = ne.util.isExisty(eventName),
            matchEventName,
            matchHandler,
            lenKey;

        this._eachCtxEventByContext(context, function(handlerItem, hanId, ctxItems, eventKey) {
            lenKey = eventKey.replace('_idx', '_len');

            matchEventName = hasArgs && ne.util.isString(eventName) && eventKey.indexOf(eventName) > -1;
            matchHandler = hasArgs && ne.util.isFunction(eventName) && handlerItem.fn === eventName;

            if (!hasArgs || (matchEventName || matchHandler)) {
                delete ctxItems[hanId];
                ctxEvents[lenKey] -= 1;
            }
        });
    };

    /**
     * Take the event handler off by event name with handler
     * @param {string} eventName - Custom event name
     * @param {function} [handler] - Event handler
     * @private
     */
    CustomEvents.prototype._offByEventName = function(eventName, handler) {
        var ctxEvents = this._ctxEvents,
            hasHandler = ne.util.isExisty(handler),
            lenKey;

        this._eachCtxEventByEventName(eventName, function(handlerItem, hanId, ctxItems, eventKey) {
            lenKey = eventKey.replace('_idx', '_len');
            if (!hasHandler || (hasHandler && handlerItem.fn === handler)) {
                delete ctxItems[hanId];
                ctxEvents[lenKey] -= 1;
            }
        });

        this._eachEventByEventName(eventName, function(handlerItem, index, items, decrease) {
            if (!hasHandler || (hasHandler && handlerItem.fn === handler)) {
                items.splice(index, 1);
                decrease();
            }
        });

    };

    /**********
     * public
     **********/

    /**
     * Attach the event handler with event name and context.
     * @param {(string|{name:string, handler:function})} eventName - Custom event name or an object {eventName: handler}
     * @param {(function|*)} [handler] - Handler function or context
     * @param {*} [context] - Context for binding
     * @example
     *  // 1. Basic
     *  customEvent.on('onload', handler);
     *
     *  // 2. With context
     *  customEvent.on('onload', handler, myObj);
     *
     *  // 3. Attach with an object
     *  customEvent.on({
     *    'play': handler,
     *    'pause': handler2
     *  });
     *
     *  // 4. Attach with an object with context
     *  customEvent.on({
     *    'play': handler
     *  }, myObj);
     */
    CustomEvents.prototype.on = function(eventName, handler, context) {
        var eventNameList;

        if (ne.util.isObject(eventName)) {
            // {eventName: handler}
            context = handler;
            ne.util.forEachOwnProperties(eventName, function(handler, name) {
                 this.on(name, handler, context);
            }, this);
            return;
        } else if (ne.util.isString(eventName) && eventName.indexOf(' ') > -1) {
            // processing of multiple events by split event name
            eventNameList = eventName.split(' ');
            ne.util.forEachArray(eventNameList, function(name) {
                this.on(name, handler, context);
            }, this);
            return;
        }

        var ctxId;

        if (ne.util.isExisty(context)) {
            ctxId = ne.util.stamp(context);
        }

        if (ne.util.isExisty(ctxId)) {
            this._addCtxEvent(eventName, context, handler);
        } else {
            this._addNormalEvent(eventName, handler);
        }
    };

    /**
     * Detach the event handler.
     * @param {(string|{name:string, handler:function})} eventName - Custom event name or an object {eventName: handler}
     * @param {function} [handler] Handler function
     * @example
     * // 1. off by context
     * customEvent.off(myObj);
     *
     * // 2. off by event name
     * customEvent.off('onload');
     *
     * // 3. off by handler
     * customEvent.off(handler);
     *
     * // 4. off by event name and handler
     * customEvent.off('play', handler);
     *
     * // 5. off by context and handler
     * customEvent.off(myObj, handler);
     *
     * // 6. off by context and event name
     * customEvent.off(myObj, 'onload');
     *
     * // 7. off by an Object.<string, function> that is {eventName: handler}
     * customEvent.off({
     *   'play': handler,
     *   'pause': handler2
     * });
     *
     * // 8. off the all events
     * customEvent.off();
     */
    CustomEvents.prototype.off = function(eventName, handler) {
        if (!arguments.length) {
            // 8. off the all events
            this._events = null;
            this._ctxEvents = null;
            return;
        }

        if (ne.util.isFunction(eventName)) {
            // 3. off by handler
            this._offByHandler(eventName);

        } else if (ne.util.isObject(eventName)) {
            if (ne.util.hasStamp(eventName)) {
                // 1, 5, 6 off by context
                this._offByContext(eventName, handler);
            } else {
                // 4. off by an Object.<string, function>
                ne.util.forEachOwnProperties(eventName, function(handler, name) {
                    this.off(name, handler);
                }, this);
            }

        } else {
            // 2, 4 off by event name
            this._offByEventName(eventName, handler);

        }
    };

    /**
     * Return a count of events registered.
     * @param {string} eventName - Custom event name
     * @returns {*}
     */
    CustomEvents.prototype.getListenerLength = function(eventName) {
        var ctxEvents = this._ctxEvents,
            events = this._events,
            existy = ne.util.isExisty,
            lenKey = this._getCtxLenKey(eventName);

        var normal = (existy(events) && ne.util.isArray(events[eventName])) ? events[eventName].length : 0,
            ctx = (existy(ctxEvents) && existy(ctxEvents[lenKey])) ? ctxEvents[lenKey] : 0;

        return normal + ctx;
    };

    /**
     * Return whether at least one of the handlers is registered in the given event name.
     * @param {string} eventName - Custom event name
     * @returns {boolean} Is there at least one handler in event name?
     */
    CustomEvents.prototype.hasListener = function(eventName) {
        return this.getListenerLength(eventName) > 0;
    };



    /**
     * Fire a event and returns the result of operation 'boolean AND' with all listener's results.<br>
     * So, It is different from {@link CustomEvents#fire}.<br>
     * In service code,
     *  use this as a before event in component level usually for notifying that the event is cancelable.
     * @param {string} eventName - Custom event name
     * @param {...*} data - Data for event
     * @returns {boolean} The result of operation 'boolean AND'
     * @example
     *  if (this.invoke('beforeZoom')) {    // check the result of 'beforeZoom'
     *      // if true,
     *      // doSomething
     *  }
     *
     *  // In service code,
     *  map.on({
     *      'beforeZoom': function() {
     *          if (that.disabled && this.getState()) {    // It should cancel the 'zoom' event by some conditions.
     *              return false;
     *          }
     *          return true;
     *      }
     *  });
     */
    CustomEvents.prototype.invoke = function(eventName, data) {
        if (!this.hasListener(eventName)) {
            return true;
        }

        var args = Array.prototype.slice.call(arguments, 1),
            self = this,
            result = true,
            existy = ne.util.isExisty;

        this._eachEventByEventName(eventName, function(item) {
            if (existy(item) && item.fn.apply(self, args) === false) {
                result = false;
            }
        });

        this._eachCtxEventByEventName(eventName, function(item) {
            if (existy(item) && item.fn.apply(item.ctx, args) === false) {
                result = false;
            }
        });

        return result;
    };

    /**
     * Fire a event by event name with data.
     * @param {string} eventName - Custom event name
     * @param {...*} data - Data for event
     * @return {Object} this
     * @example
     *  instance.on('move', function(direction) {
     *      var direction = direction;
     *  });
     *  instance.fire('move', 'left');
     */
    CustomEvents.prototype.fire = function(eventName, data) {
        this.invoke.apply(this, arguments);
        return this;
    };

    /**
     * Attach a one-shot event.
     * @param {(object|string)} eventName - Custom event name or an object {eventName: handler}
     * @param {function} fn - Handler function
     * @param {*} [context] - Context for binding
     */
    CustomEvents.prototype.once = function(eventName, fn, context) {
        var that = this;

        if (ne.util.isObject(eventName)) {
            ne.util.forEachOwnProperties(eventName, function(handler, eventName) {
                this.once(eventName, handler, fn);
            }, this);

            return;
        }

        function onceHandler() {
            fn.apply(context, arguments);
            that.off(eventName, onceHandler, context);
        }

        this.on(eventName, onceHandler, context);
    };

    ne.util.CustomEvents = CustomEvents;

})(window.ne);

/**********
 * defineClass.js
 **********/

/**
 * @fileoverview
 *  This module provides a function to make a constructor that can inherit from the other constructors like the CLASS easily.
 * @author NHN Ent.
 *         FE Development Team <e0242@nhnent.com>
 * @dependency inheritance.js, object.js
 */

(function(ne) {
    'use strict';
    /* istanbul ignore if */
    if (!ne) {
        ne = window.ne = {};
    }
    /* istanbul ignore if */
    if (!ne.util) {
        ne.util = window.ne.util = {};
    }

    /**
     * Help a constructor to be defined and to inherit from the other constructors
     * @param {*} [parent] Parent constructor
     * @param {Object} props Members of constructor
     *  @param {Function} props.init Initialization method
     *  @param {Object} [props.static] Static members of constructor
     * @returns {*} Constructor
     * @memberof ne.util
     * @example
     *  var Parent = defineClass({
     *      init: function() {
     *          this.name = 'made by def';
     *      },
     *      method: function() {
     *          //..can do something with this
     *      },
     *      static: {
     *          staticMethod: function() {
     *               //..do something
     *          }
     *      }
     *  });
     *
     *  var Child = defineClass(Parent, {
     *      method2: function() {}
     *  });
     *
     *  Parent.staticMethod();
     *
     *  var parentInstance = new Parent();
     *  console.log(parentInstance.name); //made by def
     *  parentInstance.staticMethod(); // Error
     *
     *  var childInstance = new Child();
     *  childInstance.method();
     *  childInstance.method2();
     */
    ne.util.defineClass = function(parent, props) {
        var obj;

        if (!props) {
            props = parent;
            parent = null;
        }

        obj = props.init || function(){};

        if(parent) {
            ne.util.inherit(obj, parent);
        }

        if (props.hasOwnProperty('static')) {
            ne.util.extend(obj, props.static);
            delete props.static;
        }

        ne.util.extend(obj.prototype, props);

        return obj;
    };

})(window.ne);

/**********
 * defineModule.js
 **********/

/**
 * @fileoverview Define module
 * @author NHN Ent.
 *         FE Development Team <e0242@nhnent.com>
 * @dependency type.js, defineNamespace.js
 */
(function(ne) {
    'use strict';
    /* istanbul ignore if */
    if (!ne) {
        ne = window.ne = {};
    }
    /* istanbul ignore if */
    if (!ne.util) {
        ne.util = window.ne.util = {};
    }

    var util = ne.util,
        INITIALIZATION_METHOD_NAME = 'initialize';

    /**
     * Define module
     * @param {string} namespace - Namespace of module
     * @param {Object} moduleDefinition - Object literal for module
     * @returns {Object} Defined module
     * @memberof ne.util
     * @example
     *     var myModule = ne.util.defineModule('modules.myModule', {
     *          name: 'john',
     *          message: '',
     *          initialize: function() {
     *              this.message = 'hello world';
     *          },
     *          getMessage: function() {
     *              return this.name + ': ' + this.message
     *          }
     *     });
     *
     *     console.log(myModule.getMessage());  // 'john: hello world';
     *     console.log(window.modules.myModule.getMessage());   // 'john: hello world';
     */
    function defineModule(namespace, moduleDefinition) {
        var base = moduleDefinition || {};

        if (util.isFunction(base[INITIALIZATION_METHOD_NAME])) {
            base[INITIALIZATION_METHOD_NAME]();
            delete base[INITIALIZATION_METHOD_NAME];
        }

        return util.defineNamespace(namespace, base, true);
    }
    ne.util.defineModule = defineModule;
})(window.ne);

/**********
 * defineNamespace.js
 **********/

/**
 * @fileoverview Define namespace
 * @author NHN Ent.
 *         FE Development Team <e0242@nhnent.com>
 * @dependency inheritance.js, object.js, collection.js
 */
(function(ne) {

    'use strict';
    /* istanbul ignore if */
    if (!ne) {
        ne = window.ne = {};
    }
    /* istanbul ignore if */
    if (!ne.util) {
        ne.util = window.ne.util = {};
    }

    /**
     * Define namespace
     * @param {string} name - Module name
     * @param {(object|function)} props - A set of modules or one module
     * @param {boolean} isOverride flag - What if module already define, override or not
     * @returns {(object|function)} Defined namespace
     * @memberof ne.util
     * @example
     * var neComp = defineNamespace('ne.component');
     * neComp.listMenu = ne.util.defineClass({
     *      init: function() {
     *          // code
     *      }
     * });
     */
    var defineNamespace = function(name, props, isOverride) {
        var namespace,
            lastspace,
            result,
            module = getNamespace(name);

        if (!isOverride && isValidType(module)) {
            return module;
        }

        namespace = name.split('.');
        lastspace = namespace.pop();
        namespace.unshift(window);

        result = ne.util.reduce(namespace, function(obj, name) {
            obj[name] = obj[name] || {};
            return obj[name];
        });

        result[lastspace] = isValidType(props) ? props : {};

        return result[lastspace];

    };

    /**
     * Get namespace
     * @param {string} name - namespace
     * @returns {*}
     */
    var getNamespace = function(name) {
        var namespace,
            result;

        namespace = name.split('.');
        namespace.unshift(window);

        result = ne.util.reduce(namespace, function(obj, name) {
            return obj && obj[name];
        });
        return result;
    };

    /**
     * Check valid type
     * @param {*} module
     * @returns {boolean}
     */
    var isValidType = function(module) {
        return (ne.util.isObject(module) || ne.util.isFunction(module));
    };

    ne.util.defineNamespace = defineNamespace;

})(window.ne);
/**********
 * enum.js
 **********/

/**
 * @fileoverview This module provides a Enum Constructor.
 * @author NHN Ent.
 *         FE Development Team <e0242@nhnent.com>
 * @dependency type, collection.js
 */

(function(ne) {

'use strict';

/* istanbul ignore if */
if (!ne) {
    ne = window.ne = {};
}
if (!ne.util) {
    ne.util = window.ne.util = {};
}

/**
 * Check whether the defineProperty() method is supported.
 * @type {boolean}
 */
var isSupportDefinedProperty = (function () {
    try {
        Object.defineProperty({}, 'x', {});
        return true;
    } catch (e) {
        return false;
    }
}());

/**
 * A unique value of a constant.
 * @type {number}
 */
var enumValue = 0;

/**
 * Make a constant-list that has unique values.<br>
 * In modern browsers (except IE8 and lower),<br>
 *  a value defined once can not be changed.
 *
 * @param {...string | string[]} itemList Constant-list (An array of string is available)
 * @exports Enum
 * @constructor
 * @class
 * @memberof ne.util
 * @examples
 *  //create
 *  var MYENUM = new Enum('TYPE1', 'TYPE2');
 *  var MYENUM2 = new Enum(['TYPE1', 'TYPE2']);
 *
 *  //usage
 *  if (value === MYENUM.TYPE1) {
 *       ....
 *  }
 *
 *  //add (If a duplicate name is inputted, will be disregarded.)
 *  MYENUM.set('TYPE3', 'TYPE4');
 *
 *  //get name of a constant by a value
 *  MYENUM.getName(MYENUM.TYPE1); // 'TYPE1'이 리턴된다.
 *
 *  // In modern browsers (except IE8 and lower), a value can not be changed in constants.
 *  var originalValue = MYENUM.TYPE1;
 *  MYENUM.TYPE1 = 1234; // maybe TypeError
 *  MYENUM.TYPE1 === originalValue; // true
 *
 **/
function Enum(itemList) {
    if (itemList) {
        this.set.apply(this, arguments);
    }
}

/**
 * Define a constants-list
 * @param {...string| string[]} itemList Constant-list (An array of string is available)
 */
Enum.prototype.set = function(itemList) {
    var self = this;

    if (!ne.util.isArray(itemList)) {
        itemList = ne.util.toArray(arguments);
    }

    ne.util.forEach(itemList, function itemListIteratee(item) {
        self._addItem(item);
    });
};

/**
 * Return a key of the constant.
 * @param {number} value A value of the constant.
 * @returns {string|undefined} Key of the constant.
 */
Enum.prototype.getName = function(value) {
    var foundedKey,
        self = this;

    ne.util.forEach(this, function(itemValue, key) {
        if (self._isEnumItem(key) && value === itemValue) {
            foundedKey = key;
            return false;
        }
    });

    return foundedKey;
};

/**
 * Create a constant.
 * @private
 * @param {string} name Constant name. (It will be a key of a constant)
 */
Enum.prototype._addItem = function(name) {
    var value;

    if (!this.hasOwnProperty(name)) {
        value = this._makeEnumValue();

        if (isSupportDefinedProperty) {
            Object.defineProperty(this, name, {
                enumerable: true,
                configurable: false,
                writable: false,
                value: value
            });
        } else {
            this[name] = value;
        }
    }
};

/**
 * Return a unique value for assigning to a constant.
 * @private
 * @returns {number} A unique value
 */
Enum.prototype._makeEnumValue = function() {
    var value;

    value = enumValue;
    enumValue += 1;

    return value;
};

/**
 * Return whether a constant from the given key is in instance or not.
 * @param {string} key - A constant key
 * @returns {boolean} Result
 * @private
 */
Enum.prototype._isEnumItem = function(key) {
    return ne.util.isNumber(this[key]);
};

ne.util.Enum = Enum;

})(window.ne);

/**********
 * exMap.js
 **********/

/**
 * @fileoverview
 *  Implements the ExMap (Extended Map) object.
 * @author NHN Ent.
 *         FE Development Team <e0242@nhnent.com>
 * @dependency Map.js, collection.js
 */

(function(ne) {
    'use strict';

    /* istanbul ignore if */
    if (!ne) {
        ne = window.ne = {};
    }
    if (!ne.util) {
        ne.util = window.ne.util = {};
    }

    // Caching ne.util for performance enhancing
    var util = ne.util,
        mapAPIsForRead = ['get', 'has', 'forEach', 'keys', 'values', 'entries'],
        mapAPIsForDelete = ['delete', 'clear'];

    /**
     * The ExMap object is Extended Version of the ne.util.Map object.<br>
     * and added some useful feature to make it easy to manage the Map object.
     * @constructor
     * @param {Array} initData - Array of key-value pairs (2-element Arrays).
     *      Each key-value pair will be added to the new Map
     * @memberof ne.util
     */
    function ExMap(initData) {
        this._map = new util.Map(initData);
        this.size = this._map.size;
    }

    util.forEachArray(mapAPIsForRead, function(name) {
        ExMap.prototype[name] = function() {
            return this._map[name].apply(this._map, arguments);
        };
    });

    util.forEachArray(mapAPIsForDelete, function(name) {
        ExMap.prototype[name] = function() {
            var result = this._map[name].apply(this._map, arguments);
            this.size = this._map.size;
            return result;
        };
    });

    ExMap.prototype.set = function() {
        this._map.set.apply(this._map, arguments);
        this.size = this._map.size;
        return this;
    };

    /**
     * Sets all of the key-value pairs in the specified object to the Map object.
     * @param  {Object} object - Plain object that has a key-value pair
     */
    ExMap.prototype.setObject = function(object) {
        util.forEachOwnProperties(object, function(value, key) {
            this.set(key, value);
        }, this);
    };

    /**
     * Removes the elements associated with keys in the specified array.
     * @param  {Array} keys - Array that contains keys of the element to remove
     */
    ExMap.prototype.deleteByKeys = function(keys) {
        util.forEachArray(keys, function(key) {
            this['delete'](key);
        }, this);
    };

    /**
     * Sets all of the key-value pairs in the specified Map object to this Map object.
     * @param  {Map} map - Map object to be merged into this Map object
     */
    ExMap.prototype.merge = function(map) {
        map.forEach(function(value, key) {
            this.set(key, value);
        }, this);
    };

    /**
     * Looks through each key-value pair in the map and returns the new ExMap object of
     * all key-value pairs that pass a truth test implemented by the provided function.
     * @param  {function} predicate - Function to test each key-value pair of the Map object.<br>
     *      Invoked with arguments (value, key). Return true to keep the element, false otherwise.
     * @return {ExMap} A new ExMap object
     */
    ExMap.prototype.filter = function(predicate) {
        var filtered = new ExMap();

        this.forEach(function(value, key) {
            if (predicate(value, key)) {
                filtered.set(key, value);
            }
        });

        return filtered;
    };

    util.ExMap = ExMap;
})(window.ne);

/**********
 * formatDate.js
 **********/

/**
 * @fileoverview This module has a function for date format.
 * @author NHN Ent.
 *         FE Development Team <e0242@nhnent.com>
 * @dependency type.js
 */

(function(ne) {
    'use strict';

    var tokens = /[\\]*YYYY|[\\]*YY|[\\]*MMMM|[\\]*MMM|[\\]*MM|[\\]*M|[\\]*DD|[\\]*D|[\\]*HH|[\\]*H|[\\]*A/gi,
        MONTH_STR = ["Invalid month", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        MONTH_DAYS = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
        replaceMap = {
            M: function(date) {
                return Number(date.month);
            },
            MM: function(date) {
                var month = date.month;
                return (Number(month) < 10) ? '0' + month : month;
            },
            MMM: function(date) {
                return MONTH_STR[Number(date.month)].substr(0, 3);
            },
            MMMM: function(date) {
                return MONTH_STR[Number(date.month)];
            },
            D: function(date) {
                return Number(date.date);
            },
            d: function(date) {
                return replaceMap.D(date);
            },
            DD: function(date) {
                var dayInMonth = date.date;
                return (Number(dayInMonth) < 10) ? '0' + dayInMonth : dayInMonth;
            },
            dd: function(date) {
                return replaceMap.DD(date);
            },
            YY: function(date) {
                return Number(date.year) % 100;
            },
            yy: function(date) {
                return replaceMap.YY(date);
            },
            YYYY: function(date) {
                var prefix = '20',
                    year = date.year;
                if (year > 69 && year < 100) {
                    prefix = '19';
                }
                return (Number(year) < 100) ? prefix + String(year) : year;
            },
            yyyy: function(date) {
                return replaceMap.YYYY(date);
            },
            A: function(date) {
                return date.meridian;
            },
            a: function(date) {
                return date.meridian.toLowerCase();
            },
            hh: function(date) {
                var hour = date.hour;
                return (Number(hour) < 10) ? '0' + hour : hour;
            },
            HH: function(date) {
                return replaceMap.hh(date);
            },
            h: function(date) {
                return String(Number(date.hour));
            },
            H: function(date) {
                return replaceMap.h(date);
            },
            m: function(date) {
                return String(Number(date.minute));
            },
            mm: function(date) {
                var minute = date.minute;
                return (Number(minute) < 10) ? '0' + minute : minute;
            }
        };

    /* istanbul ignore if */
    if (!ne) {
        ne = window.ne = {};
    }
    /* istanbul ignore if */
    if (!ne.util) {
        ne.util = window.ne.util = {};
    }

    /**
     * Check whether the given variables are valid date or not.
     * @param {number} year - Year
     * @param {number} month - Month
     * @param {number} date - Day in month.
     * @returns {boolean} Is valid?
     */
    function isValidDate(year, month, date) {
        var isValidYear,
            isValidMonth,
            isValid,
            lastDayInMonth;

        year = Number(year);
        month = Number(month);
        date = Number(date);

        isValidYear = (year > -1 && year < 100) || (year > 1969) && (year < 2070);
        isValidMonth = (month > 0) && (month < 13);

        if (!isValidYear || !isValidMonth) {
            return false;
        }

        lastDayInMonth = MONTH_DAYS[month];
        if (month === 2 && year % 4 === 0) {
            if (year % 100 !== 0 || year % 400 === 0) {
                lastDayInMonth = 29;
            }
        }

        isValid = (date > 0) && (date <= lastDayInMonth);
        return isValid;
    }

    /**
     * Return a string that transformed from the given form and date.
     * @param {string} form - Date form
     * @param {Date|Object} date - Date object
     * @returns {boolean|string} A transformed string or false.
     * @memberOf ne.util
     * @example
     *  // key         | Shorthand
     *  // ------------|-----------------------
     *  // years       | YY / YYYY / yy / yyyy
     *  // months(n)   | M / MM
     *  // months(str) | MMM / MMMM
     *  // days        | D / DD / d / dd
     *  // hours       | H / HH / h / hh
     *  // minutes     | m / mm
     *  // AM/PM       | A / a
     *
     *  var dateStr1 = formatDate('yyyy-MM-dd', {
     *      year: 2014,
     *      month: 12,
     *      date: 12
     *  });
     *  alert(dateStr1); // '2014-12-12'
     *
     *  var dateStr2 = formatDate('MMM DD YYYY HH:mm', {
     *      year: 1999,
     *      month: 9,
     *      date: 9,
     *      hour: 0,
     *      minute: 2
     *  })
     *  alert(dateStr2); // 'Sep 09 1999 00:02'
     *
     *  var dt = new Date(2010, 2, 13),
     *      dateStr3 = formatDate('yyyy년 M월 dd일', dt);
     *
     *  alert(dateStr3); // '2010년 3월 13일'
     */
    function formatDate(form, date) {
        var meridian,
            nDate,
            resultStr;

        if (ne.util.isDate(date)) {
            nDate = {
                year: date.getFullYear(),
                month: date.getMonth() + 1,
                date: date.getDate(),
                hour: date.getHours(),
                minute: date.getMinutes()
            };
        } else {
            nDate = {
                year: date.year,
                month: date.month,
                date: date.date,
                hour: date.hour,
                minute: date.minute
            };
        }

        if (!isValidDate(nDate.year, nDate.month, nDate.date)) {
            return false;
        }

        nDate.meridian = '';
        if (/[^\\][aA]\b/g.test(form)) {
            meridian = (nDate.hour > 12) ? 'PM' : 'AM';
            nDate.hour %= 12;
            nDate.meridian = meridian;
        }

        resultStr = form.replace(tokens, function(key) {
            if (key.indexOf('\\') > -1) {
                return key.replace(/\\/g, '');
            } else {
                return replaceMap[key](nDate) || '';
            }
        });
        return resultStr;
    }

    ne.util.formatDate = formatDate;
})(window.ne);


/**********
 * func.js
 **********/

/**
 * @fileoverview This module provides a bind() function for context binding.
 * @author NHN Ent.
 *         FE Development Team <e0242@nhnent.com>
 */

(function(ne) {
    'use strict';

    /* istanbul ignore if */
    if (!ne) {
        ne = window.ne = {};
    }
    if (!ne.util) {
        ne.util = window.ne.util = {};
    }

    /**
     * Create a new function that, when called, has its this keyword set to the provided value.
     * @param {function} fn A original function before binding
     * @param {*} obj context of function in arguments[0]
     * @return {function()} A new bound function with context that is in arguments[1]
     * @memberof ne.util
     */
    function bind(fn, obj) {
        var slice = Array.prototype.slice;

        if (fn.bind) {
            return fn.bind.apply(fn, slice.call(arguments, 1));
        }

        /* istanbul ignore next */
        var args = slice.call(arguments, 2);

        /* istanbul ignore next */
        return function() {
            /* istanbul ignore next */
            return fn.apply(obj, args.length ? args.concat(slice.call(arguments)) : arguments);
        };
    }

    ne.util.bind = bind;

})(window.ne);

/**********
 * hashMap.js
 **********/

/**
 * @fileoverview This module provides the HashMap constructor.
 * @author NHN Ent.
 *         FE Development Team <e0242@nhnent.com>
 * @dependency type, collection.js
 */

(function(ne) {
    'use strict';

    /* istanbul ignore if */
    if (!ne) {
        ne = window.ne = {};
    }
    if (!ne.util) {
        ne.util = window.ne.util = {};
    }

    /**
     * All the data in hashMap begin with _MAPDATAPREFIX;
     * @type {string}
     * @private
     */
    var _MAPDATAPREFIX = 'å';

    /**
     * HashMap can handle the key-value pairs.<br>
     * Caution:<br>
     *  HashMap instance has a length property but is not an instance of Array.
     * @param {Object} [obj] A initial data for creation.
     * @constructor
     * @memberof ne.util
     * @example
     *  var hm = new ne.util.HashMap({
     *      'mydata': {
     *           'hello': 'imfine'
     *       },
     *      'what': 'time'
     *  });
     */
    function HashMap(obj) {
        /**
         * size
         * @type {number}
         */
        this.length = 0;

        if (obj) {
            this.setObject(obj);
        }
    }

    /**
     * Set a data from the given key with value or the given object.
     * @param {string|Object} key A string or object for key
     * @param {*} [value] A data
     * @example
     *  var hm = new HashMap();
     *
     *  hm.set('key', 'value');
     *  hm.set({
     *      'key1': 'data1',
     *      'key2': 'data2'
     *  });
     */
    HashMap.prototype.set = function(key, value) {
        if(arguments.length === 2) {
            this.setKeyValue(key, value);
        } else {
            this.setObject(key);
        }
    };

    /**
     * Set a data from the given key with value.
     * @param {string} key A string for key
     * @param {*} value A data
     * @example
     *  var hm = new HashMap();
     *  hm.setKeyValue('key', 'value');
     */
    HashMap.prototype.setKeyValue = function(key, value) {
        if (!this.has(key)) {
            this.length += 1;
        }
        this[this.encodeKey(key)] = value;
    };

    /**
     * Set a data from the given object.
     * @param {Object} obj A object for data
     * @example
     *  var hm = new HashMap();
     *
     *  hm.setObject({
     *      'key1': 'data1',
     *      'key2': 'data2'
     *  });
     */
    HashMap.prototype.setObject = function(obj) {
        var self = this;

        ne.util.forEachOwnProperties(obj, function(value, key) {
            self.setKeyValue(key, value);
        });
    };

    /**
     * Merge with the given another hashMap.
     * @param {HashMap} hashMap Another hashMap instance
     */
    HashMap.prototype.merge = function(hashMap) {
        var self = this;

        hashMap.each(function(value, key) {
            self.setKeyValue(key, value);
        });
    };

    /**
     * Encode the given key for hashMap.
     * @param {string} key A string for key
     * @returns {string} A encoded key
     * @private
     */
    HashMap.prototype.encodeKey = function(key) {
        return _MAPDATAPREFIX + key;
    };

    /**
     * Decode the given key in hashMap.
     * @param {string} key A string for key
     * @returns {string} A decoded key
     * @private
     */
    HashMap.prototype.decodeKey = function(key) {
        var decodedKey = key.split(_MAPDATAPREFIX);
        return decodedKey[decodedKey.length-1];
    };

    /**
     * Return the value from the given key.
     * @param {string} key A string for key
     * @returns {*} The value from a key
     * @example
     *  var hm = new HashMap();
     *  hm.set('key', 'value');
     *
     *  hm.get('key') // value
     */
    HashMap.prototype.get = function(key) {
        return this[this.encodeKey(key)];
    };

    /**
     * Check the existence of a value from the key.
     * @param {string} key A string for key
     * @returns {boolean} Indicating whether a value exists or not.
     * @example
     *  var hm = new HashMap();
     *  hm.set('key', 'value');
     *
     *  hm.has('key') // true
     */
    HashMap.prototype.has = function(key) {
        return this.hasOwnProperty(this.encodeKey(key));
    };

    /**
     * Remove a data(key-value pairs) from the given key or the given key-list.
     * @param {...string|string[]} key A string for key
     * @returns {string|string[]} A removed data
     * @example
     *  var hm = new HashMap();
     *  hm.set('key', 'value');
     *  hm.set('key2', 'value');
     *
     *  //ex1
     *  hm.remove('key');
     *
     *  //ex2
     *  hm.remove('key', 'key2');
     *
     *  //ex3
     *  hm.remove(['key', 'key2']);
     */
    HashMap.prototype.remove = function(key) {
        if (arguments.length > 1) {
            key = ne.util.toArray(arguments);
        }

        return ne.util.isArray(key) ? this.removeByKeyArray(key) : this.removeByKey(key);
    };

    /**
     * Remove data(key-value pair) from the given key.
     * @param {string} key A string for key
     * @returns {*|null} A removed data
     * @example
     *  var hm = new HashMap();
     *  hm.set('key', 'value');
     *
     *  hm.removeByKey('key')
     */
    HashMap.prototype.removeByKey = function(key) {
        var data = this.has(key) ? this.get(key) : null;

        if (data !== null) {
            delete this[this.encodeKey(key)];
            this.length -= 1;
        }

        return data;
    };

    /**
     * Remove a data(key-value pairs) from the given key-list.
     * @param {string[]} keyArray An array of keys
     * @returns {string[]} A removed data
     * @example
     *  var hm = new HashMap();
     *  hm.set('key', 'value');
     *  hm.set('key2', 'value');
     *
     *  hm.removeByKeyArray(['key', 'key2']);
     */
    HashMap.prototype.removeByKeyArray = function(keyArray) {
        var data = [],
            self = this;

        ne.util.forEach(keyArray, function(key) {
            data.push(self.removeByKey(key));
        });

        return data;
    };

    /**
     * Remove all the data
     */
    HashMap.prototype.removeAll = function() {
        var self = this;

        this.each(function(value, key) {
            self.remove(key);
        });
    };

    /**
     * Execute the provided callback once for each all the data.
     * @param {Function} iteratee Callback function
     * @example
     *  var hm = new HashMap();
     *  hm.set('key', 'value');
     *  hm.set('key2', 'value');
     *
     *  hm.each(function(value, key) {
     *      //do something...
     *  });
     */
    HashMap.prototype.each = function(iteratee) {
        var self = this,
            flag;

        ne.util.forEachOwnProperties(this, function(value, key) {
            if (key.charAt(0) === _MAPDATAPREFIX) {
                flag = iteratee(value, self.decodeKey(key));
            }

            if (flag === false) {
                return flag;
            }
        });
    };

    /**
     * Return the key-list stored.
     * @returns {Array} A key-list
     * @example
     *  var hm = new HashMap();
     *  hm.set('key', 'value');
     *  hm.set('key2', 'value');
     *
     *  hm.keys();  //['key', 'key2');
     */
    HashMap.prototype.keys = function() {
        var keys = [],
            self = this;

        this.each(function(value, key) {
            keys.push(self.decodeKey(key));
        });

        return keys;
    };

    /**
     * Work similarly to Array.prototype.map().<br>
     * It executes the provided callback that checks conditions once for each element of hashMap,<br>
     *  and returns a new array having elements satisfying the conditions
     * @param {Function} condition A function that checks conditions
     * @returns {Array} A new array having elements satisfying the conditions
     * @example
     *  //ex1
     *  var hm = new HashMap();
     *  hm.set('key', 'value');
     *  hm.set('key2', 'value');
     *
     *  hm.find(function(value, key) {
     *      return key === 'key2';
     *  }); // ['value']
     *
     *  //ex2
     *  var hm = new HashMap({
     *      'myobj1': {
     *           visible: true
     *       },
     *      'mybobj2': {
     *           visible: false
     *       }
     *  });
     *
     *  hm.find(function(obj, key) {
     *      return obj.visible === true;
     *  }); // [{visible: true}];
     */
    HashMap.prototype.find = function(condition) {
        var founds = [];

        this.each(function(value, key) {
            if (condition(value, key)) {
                founds.push(value);
            }
        });

        return founds;
    };

    /**
     * Return a new Array having all values.
     * @returns {Array} A new array having all values
     */
    HashMap.prototype.toArray = function() {
        var result = [];

        this.each(function(v) {
            result.push(v);
        });

        return result;
    };

    ne.util.HashMap = HashMap;

})(window.ne);

/**********
 * inheritance.js
 **********/

/**
 * @fileoverview This module provides some simple function for inheritance.
 * @author NHN Ent.
 *         FE Development Team <e0242@nhnent.com>
 */

(function(ne) {
    'use strict';
    /* istanbul ignore if */
    if (!ne) {
        ne = window.ne = {};
    }
    /* istanbul ignore if */
    if (!ne.util) {
        ne.util = window.ne.util = {};
    }



    /**
     * Create a new object with the specified prototype object and properties.
     * @param {Object} obj This object will be a prototype of the newly-created object.
     * @return {Object}
     * @memberof ne.util
     */
    function createObject() {
        function F() {}

        return function(obj) {
            F.prototype = obj;
            return new F();
        };
    }

    /**
     * Provide a simple inheritance in prototype-oriented.
     * Caution :
     *  Don't overwrite the prototype of child constructor.
     *
     * @param {function} subType Child constructor
     * @param {function} superType Parent constructor
     * @memberof ne.util
     * @example
     *  // Parent constructor
     *  function Animal(leg) {
     *      this.leg = leg;
     *  }
     *
     *  Animal.prototype.growl = function() {
     *      // ...
     *  };
     *
     *  // Child constructor
     *  function Person(name) {
     *      this.name = name;
     *  }
     *
     *  // Inheritance
     *  core.inherit(Person, Animal);
     *
     *  // After this inheritance, please use only the extending of property.
     *  // Do not overwrite prototype.
     *  Person.prototype.walk = function(direction) {
     *      // ...
     *  };
     */
    function inherit(subType, superType) {
        var prototype = ne.util.createObject(superType.prototype);
        prototype.constructor = subType;
        subType.prototype = prototype;
    }

    ne.util.createObject = createObject();
    ne.util.inherit = inherit;

})(window.ne);

/**********
 * map.js
 **********/

/**
 * @fileoverview
 *  Implements the Map object.
 * @author NHN Ent.
 *         FE Development Team <e0242@nhnent.com>
 * @dependency type.js, collection.js
 */

(function(ne) {
    'use strict';

    /* istanbul ignore if */
    if (!ne) {
        ne = window.ne = {};
    }
    if (!ne.util) {
        ne.util = window.ne.util = {};
    }


    // Caching ne.util for performance enhancing
    var util = ne.util,

    /**
     * Using undefined for a key can be ambiguous if there's deleted item in the array,<br>
     * which is also undefined when accessed by index.<br>
     * So use this unique object as an undefined key to distinguish it from deleted keys.
     * @private
     * @constant
     */
    _KEY_FOR_UNDEFINED = {},

    /**
     * For using NaN as a key, use this unique object as a NaN key.<br>
     * This makes it easier and faster to compare an object with each keys in the array<br>
     * through no exceptional comapring for NaN.
     */
    _KEY_FOR_NAN = {};

    /**
     * Constructor of MapIterator<br>
     * Creates iterator object with new keyword.
     * @constructor
     * @param  {Array} keys - The array of keys in the map
     * @param  {function} valueGetter - Function that returns certain value,
     *      taking key and keyIndex as arguments.
     */
    function MapIterator(keys, valueGetter) {
        this._keys = keys;
        this._valueGetter = valueGetter;
        this._length = this._keys.length;
        this._index = -1;
        this._done = false;
    }

    /**
     * Implementation of Iterator protocol.
     * @return {{done: boolean, value: *}} Object that contains done(boolean) and value.
     */
    MapIterator.prototype.next = function() {
        var data = {};
        do {
           this._index += 1;
       } while (util.isUndefined(this._keys[this._index]) && this._index < this._length);

        if (this._index >= this._length) {
            data.done = true;
        } else {
            data.done = false;
            data.value = this._valueGetter(this._keys[this._index], this._index);
        }
        return data;
    };

    /**
     * The Map object implements the ES6 Map specification as closely as possible.<br>
     * For using objects and primitive values as keys, this object uses array internally.<br>
     * So if the key is not a string, get(), set(), has(), delete() will operates in O(n),<br>
     * and it can cause performance issues with a large dataset.
     *
     * Features listed below are not supported. (can't be implented without native support)
     * - Map object is iterable<br>
     * - Iterable object can be used as an argument of constructor
     *
     * If the browser supports full implementation of ES6 Map specification, native Map obejct
     * will be used internally.
     * @constructor
     * @param  {Array} initData - Array of key-value pairs (2-element Arrays).
     *      Each key-value pair will be added to the new Map
     * @memberof ne.util
     */
    function Map(initData) {
        this._valuesForString = {};
        this._valuesForIndex = {};
        this._keys = [];

        if (initData) {
            this._setInitData(initData);
        }

        this.size = 0;
    }

    /**
     * Add all elements in the initData to the Map object.
     * @private
     * @param  {Array} initData - Array of key-value pairs to add to the Map object
     */
    Map.prototype._setInitData = function(initData) {
        if (!util.isArray(initData)) {
            throw new Error('Only Array is supported.');
        }
        util.forEachArray(initData, function(pair) {
            this.set(pair[0], pair[1]);
        }, this);
    };

    /**
     * Returns true if the specified value is NaN.<br>
     * For unsing NaN as a key, use this method to test equality of NaN<br>
     * because === operator doesn't work for NaN.
     * @private
     * @param {*} value - Any object to be tested
     * @return {boolean} True if value is NaN, false otherwise.
     */
    Map.prototype._isNaN = function(value) {
        return typeof value === 'number' && value !== value;
    };

    /**
     * Returns the index of the specified key.
     * @private
     * @param  {*} key - The key object to search for.
     * @return {number} The index of the specified key
     */
    Map.prototype._getKeyIndex = function(key) {
        var result = -1,
            value;

        if (util.isString(key)) {
            value = this._valuesForString[key];
            if (value) {
                result = value.keyIndex;
            }
        } else {
            result = util.inArray(key, this._keys);
        }
        return result;
    };

    /**
     * Returns the original key of the specified key.
     * @private
     * @param  {*} key - key
     * @return {*} Original key
     */
    Map.prototype._getOriginKey = function(key) {
        var originKey = key;
        if (key === _KEY_FOR_UNDEFINED) {
            originKey = undefined;
        } else if (key === _KEY_FOR_NAN) {
            originKey = NaN;
        }
        return originKey;
    };

    /**
     * Returns the unique key of the specified key.
     * @private
     * @param  {*} key - key
     * @return {*} Unique key
     */
    Map.prototype._getUniqueKey = function(key) {
        var uniqueKey = key;
        if (util.isUndefined(key)) {
            uniqueKey = _KEY_FOR_UNDEFINED;
        } else if (this._isNaN(key)) {
            uniqueKey = _KEY_FOR_NAN;
        }
        return uniqueKey;
    };

    /**
     * Returns the value object of the specified key.
     * @private
     * @param  {*} key - The key of the value object to be returned
     * @param  {number} keyIndex - The index of the key
     * @return {{keyIndex: number, origin: *}} Value object
     */
    Map.prototype._getValueObject = function(key, keyIndex) {
        if (util.isString(key)) {
            return this._valuesForString[key];
        } else {
            if (util.isUndefined(keyIndex)) {
                keyIndex = this._getKeyIndex(key);
            }
            if (keyIndex >= 0) {
                return this._valuesForIndex[keyIndex];
            }
        }
    };

    /**
     * Returns the original value of the specified key.
     * @private
     * @param  {*} key - The key of the value object to be returned
     * @param  {number} keyIndex - The index of the key
     * @return {*} Original value
     */
    Map.prototype._getOriginValue = function(key, keyIndex) {
        return this._getValueObject(key, keyIndex).origin;
    };

    /**
     * Returns key-value pair of the specified key.
     * @private
     * @param  {*} key - The key of the value object to be returned
     * @param  {number} keyIndex - The index of the key
     * @return {Array} Key-value Pair
     */
    Map.prototype._getKeyValuePair = function(key, keyIndex) {
        return [this._getOriginKey(key), this._getOriginValue(key, keyIndex)];
    };

    /**
     * Creates the wrapper object of original value that contains a key index
     * and returns it.
     * @private
     * @param  {type} origin - Original value
     * @param  {type} keyIndex - Index of the key
     * @return {{keyIndex: number, origin: *}} Value object
     */
    Map.prototype._createValueObject = function(origin, keyIndex) {
        return {
            keyIndex: keyIndex,
            origin: origin
        };
    };

    /**
     * Sets the value for the key in the Map object.
     * @param  {*} key - The key of the element to add to the Map object
     * @param  {*} value - The value of the element to add to the Map object
     * @return {Map} The Map object
     */
    Map.prototype.set = function(key, value) {
        var uniqueKey = this._getUniqueKey(key),
            keyIndex = this._getKeyIndex(uniqueKey),
            valueObject;

        if (keyIndex < 0) {
            keyIndex = this._keys.push(uniqueKey) - 1;
            this.size += 1;
        }
        valueObject = this._createValueObject(value, keyIndex);

        if (util.isString(key)) {
            this._valuesForString[key] = valueObject;
        } else {
            this._valuesForIndex[keyIndex] = valueObject;
        }
        return this;
    };

    /**
     * Returns the value associated to the key, or undefined if there is none.
     * @param  {*} key - The key of the element to return
     * @return {*} Element associated with the specified key
     */
    Map.prototype.get = function(key) {
        var uniqueKey = this._getUniqueKey(key),
            value = this._getValueObject(uniqueKey);

        return value && value.origin;
    };

    /**
     * Returns a new Iterator object that contains the keys for each element
     * in the Map object in insertion order.
     * @return {Iterator} A new Iterator object
     */
    Map.prototype.keys = function() {
        return new MapIterator(this._keys, util.bind(this._getOriginKey, this));
    };

    /**
     * Returns a new Iterator object that contains the values for each element
     * in the Map object in insertion order.
     * @return {Iterator} A new Iterator object
     */
    Map.prototype.values = function() {
        return new MapIterator(this._keys, util.bind(this._getOriginValue, this));
    };

    /**
     * Returns a new Iterator object that contains the [key, value] pairs
     * for each element in the Map object in insertion order.
     * @return {Iterator} A new Iterator object
     */
    Map.prototype.entries = function() {
        return new MapIterator(this._keys, util.bind(this._getKeyValuePair, this));
    };

    /**
     * Returns a boolean asserting whether a value has been associated to the key
     * in the Map object or not.
     * @param  {*} key - The key of the element to test for presence
     * @return {boolean} True if an element with the specified key exists;
     *          Otherwise false
     */
    Map.prototype.has = function(key) {
        return !!this._getValueObject(key);
    };

    /**
     * Removes the specified element from a Map object.
     * @param {*} key - The key of the element to remove
     */
     // cannot use reserved keyword as a property name in IE8 and under.
    Map.prototype['delete'] = function(key) {
        var keyIndex;

        if (util.isString(key)) {
            if (this._valuesForString[key]) {
                keyIndex = this._valuesForString[key].keyIndex;
                delete this._valuesForString[key];
            }
        } else {
            keyIndex = this._getKeyIndex(key);
            if (keyIndex >= 0) {
                delete this._valuesForIndex[keyIndex];
            }
        }

        if (keyIndex >= 0) {
            delete this._keys[keyIndex];
            this.size -= 1;
        }
    };

    /**
     * Executes a provided function once per each key/value pair in the Map object,
     * in insertion order.
     * @param  {function} callback - Function to execute for each element
     * @param  {thisArg} thisArg - Value to use as this when executing callback
     */
    Map.prototype.forEach = function(callback, thisArg) {
        thisArg = thisArg || this;
        util.forEachArray(this._keys, function(key) {
            if (!util.isUndefined(key)) {
                callback.call(thisArg, this._getValueObject(key).origin, key, this);
            }
        }, this);
    };

    /**
     * Removes all elements from a Map object.
     */
    Map.prototype.clear = function() {
        Map.call(this);
    };

    // Use native Map object if exists.
    // But only latest versions of Chrome and Firefox support full implementation.
    (function() {
        var browser = util.browser;
        if (window.Map && (
            (browser.firefox && browser.version >= 37) ||
            (browser.chrome && browser.version >= 42) )) {
            Map = window.Map;
        }
    })();

    util.Map = Map;
})(window.ne);

/**********
 * object.js
 **********/

/**
 * @fileoverview This module has some functions for handling a plain object, json.
 * @author NHN Ent.
 *         FE Development Team <e0242@nhnent.com>
 * @dependency type.js, collection.js
 */

(function(ne) {
    'use strict';
    /* istanbul ignore if */
    if (!ne) {
        ne = window.ne = {};
    }
    if (!ne.util) {
        ne.util = window.ne.util = {};
    }

    /**
     * Extend the target object from other objects.
     * @param {object} target - Object that will be extended
     * @param {...object} objects - Objects as sources
     * @return {object} Extended object
     * @memberOf ne.util
     */
    function extend(target, objects) {
        var source,
            prop,
            hasOwnProp = Object.prototype.hasOwnProperty,
            i,
            len;

        for (i = 1, len = arguments.length; i < len; i++) {
            source = arguments[i];
            for (prop in source) {
                if (hasOwnProp.call(source, prop)) {
                    target[prop] = source[prop];
                }
            }
        }
        return target;
    }

    /**
     * The last id of stamp
     * @type {number}
     */
    var lastId = 0;

    /**
     * Assign a unique id to an object
     * @param {object} obj - Object that will be assigned id.
     * @return {number} Stamped id
     * @memberOf ne.util
     */
    function stamp(obj) {
        obj.__fe_id = obj.__fe_id || ++lastId;
        return obj.__fe_id;
    }

    /**
     * Verify whether an object has a stamped id or not.
     * @param {object} obj
     * @returns {boolean}
     * @memberOf ne.util
     */
    function hasStamp(obj) {
        return ne.util.isExisty(ne.util.pick(obj, '__fe_id'));
    }

    /**
     * Reset the last id of stamp
     */
    function resetLastId() {
        lastId = 0;
    }

    /**
     * Return a key-list(array) of a given object
     * @param {object} obj - Object from which a key-list will be extracted
     * @returns {Array} A key-list(array)
     * @memberOf ne.util
     */
    function keys(obj) {
        var keys = [],
            key;

        for (key in obj) {
            if (obj.hasOwnProperty(key)) {
                keys.push(key);
            }
        }

        return keys;
    }

    /**
     * Return the equality for multiple objects(jsonObjects).<br>
     *  See {@link http://stackoverflow.com/questions/1068834/object-comparison-in-javascript}
     * @param {...object} object - Multiple objects for comparing.
     * @return {boolean} Equality
     * @example
     *
     *  var jsonObj1 = {name:'milk', price: 1000},
     *      jsonObj2 = {name:'milk', price: 1000},
     *      jsonObj3 = {name:'milk', price: 1000};
     *
     *  ne.util.compareJSON(jsonObj1, jsonObj2, jsonObj3);   // true
     *
     *
     *  var jsonObj4 = {name:'milk', price: 1000},
     *      jsonObj5 = {name:'beer', price: 3000};
     *
     *      ne.util.compareJSON(jsonObj4, jsonObj5); // false

     * @memberOf ne.util
     */
    function compareJSON(object) {
        var leftChain,
            rightChain,
            argsLen = arguments.length,
            i;

        function isSameObject(x, y) {
            var p;

            // remember that NaN === NaN returns false
            // and isNaN(undefined) returns true
            if (isNaN(x) &&
                isNaN(y) &&
                ne.util.isNumber(x) &&
                ne.util.isNumber(y)) {
                return true;
            }

            // Compare primitives and functions.
            // Check if both arguments link to the same object.
            // Especially useful on step when comparing prototypes
            if (x === y) {
                return true;
            }

            // Works in case when functions are created in constructor.
            // Comparing dates is a common scenario. Another built-ins?
            // We can even handle functions passed across iframes
            if ((ne.util.isFunction(x) && ne.util.isFunction(y)) ||
                (x instanceof Date && y instanceof Date) ||
                (x instanceof RegExp && y instanceof RegExp) ||
                (x instanceof String && y instanceof String) ||
                (x instanceof Number && y instanceof Number)) {
                return x.toString() === y.toString();
            }

            // At last checking prototypes as good a we can
            if (!(x instanceof Object && y instanceof Object)) {
                return false;
            }

            if (x.isPrototypeOf(y) ||
                y.isPrototypeOf(x) ||
                x.constructor !== y.constructor ||
                x.prototype !== y.prototype) {
                return false;
            }

            // check for infinitive linking loops
            if (ne.util.inArray(x, leftChain) > -1 ||
                ne.util.inArray(y, rightChain) > -1) {
                return false;
            }

            // Quick checking of one object beeing a subset of another.
            for (p in y) {
                if (y.hasOwnProperty(p) !== x.hasOwnProperty(p)) {
                    return false;
                }
                else if (typeof y[p] !== typeof x[p]) {
                    return false;
                }
            }

            //This for loop executes comparing with hasOwnProperty() and typeof for each property in 'x' object,
            //and verifying equality for x[property] and y[property].
            for (p in x) {
                if (y.hasOwnProperty(p) !== x.hasOwnProperty(p)) {
                    return false;
                }
                else if (typeof y[p] !== typeof x[p]) {
                    return false;
                }

                if (typeof(x[p]) === 'object' || typeof(x[p]) === 'function') {
                    leftChain.push(x);
                    rightChain.push(y);

                    if (!isSameObject(x[p], y[p])) {
                        return false;
                    }

                    leftChain.pop();
                    rightChain.pop();
                } else if (x[p] !== y[p]) {
                    return false;
                }
            }

            return true;
        }

        if (argsLen < 1) {
            return true;
        }

        for (i = 1; i < argsLen; i++) {
            leftChain = [];
            rightChain = [];

            if (!isSameObject(arguments[0], arguments[i])) {
                return false;
            }
        }

        return true;
    }

    /**
     * Retrieve a nested item from the given object/array
     * @param {object|Array} obj - Object for retrieving
     * @param {...string|number} paths - Paths of property
     * @returns {*} Value
     * @example
     *  var obj = {
     *      'key1': 1,
     *      'nested' : {
     *          'key1': 11,
     *          'nested': {
     *              'key1': 21
     *          }
     *      }
     *  };
     *  ne.util.pick(obj, 'nested', 'nested', 'key1'); // 21
     *  ne.util.pick(obj, 'nested', 'nested', 'key2'); // undefined
     *
     *  var arr = ['a', 'b', 'c'];
     *  ne.util.pick(arr, 1); // 'b'
     */
    function pick(obj, paths) {
        var args = arguments,
            target = args[0],
            length = args.length,
            i;
        try {
            for (i = 1; i < length; i++) {
                target = target[args[i]];
            }
            return target;
        } catch(e) {
            return;
        }
    }

    ne.util.extend = extend;
    ne.util.stamp = stamp;
    ne.util.hasStamp = hasStamp;
    ne.util._resetLastId = resetLastId;
    ne.util.keys = Object.keys || keys;
    ne.util.compareJSON = compareJSON;
    ne.util.pick = pick;
})(window.ne);

/**********
 * string.js
 **********/

/**
 * @fileoverview This module has some functions for handling the string.
 * @author NHN Ent.
 *         FE Development Team <e0242@nhnent.com>
 */

(function(ne) {
    'use strict';

    if (!ne) {
        ne = window.ne = {};
    }
    if (!ne.util) {
        ne.util = window.ne.util = {};
    }

    /**
     * Transform the given HTML Entity string into plain string
     * @param {String} htmlEntity - HTML Entity type string
     * @return {String} Plain string
     * @memberof ne.util
     * @example
     *  var htmlEntityString = "A &#39;quote&#39; is &lt;b&gt;bold&lt;/b&gt;"
     *  var result = decodeHTMLEntity(htmlEntityString); //"A 'quote' is <b>bold</b>"
     */
    function decodeHTMLEntity(htmlEntity) {
        var entities = {'&quot;' : '"', '&amp;' : '&', '&lt;' : '<', '&gt;' : '>', '&#39;' : '\'', '&nbsp;' : ' '};
        return htmlEntity.replace(/&amp;|&lt;|&gt;|&quot;|&#39;|&nbsp;/g, function(m0) {
            return entities[m0] ? entities[m0] : m0;
        });
    }

    /**
     * Transform the given string into HTML Entity string
     * @param {String} html - String for encoding
     * @return {String} HTML Entity
     * @memberof ne.util
     * @example
     *  var htmlEntityString = "<script> alert('test');</script><a href='test'>";
     *  var result = encodeHTMLEntity(htmlEntityString); //"&lt;script&gt; alert(&#39;test&#39;);&lt;/script&gt;&lt;a href=&#39;test&#39;&gt;"
     */
    function encodeHTMLEntity(html) {
        var entities = {'"': 'quot', '&': 'amp', '<': 'lt', '>': 'gt', '\'': '#39'};
        return html.replace(/[<>&"']/g, function(m0) {
            return entities[m0] ? '&' + entities[m0] + ';' : m0;
        });
    }

    /**
     * Return whether the string capable to transform into plain string is in the given string or not.
     * @param {String} string
     * @memberof ne.util
     * @return {boolean}
     */
    function hasEncodableString(string) {
        return /[<>&"']/.test(string);
    }

    /**
     * Return duplicate charters
     * @param {string} operandStr1 The operand string
     * @param {string} operandStr2 The operand string
     * @private
     * @memberof ne.util
     * @returns {string}
     * @example
     * ne.util.getDuplicatedChar('fe dev', 'nhn entertainment');
     * => 'e'
     * ne.util.getDuplicatedChar('fdsa', 'asdf');
     * => 'asdf'
     */
    function getDuplicatedChar(operandStr1, operandStr2) {
        var dupl,
            key,
            i = 0,
            len = operandStr1.length,
            pool = {};

        for (; i < len; i += 1) {
            key = operandStr1.charAt(i);
            pool[key] = 1;
        }

        for (i = 0, len = operandStr2.length; i < len; i += 1) {
            key = operandStr2.charAt(i);
            if(pool[key]) {
                pool[key] += 1;
            }
        }

        pool = ne.util.filter(pool, function(item) {
            return item > 1;
        });

        pool = ne.util.keys(pool).sort();
        dupl = pool.join('');

        return dupl;
    }

    ne.util.decodeHTMLEntity = decodeHTMLEntity;
    ne.util.encodeHTMLEntity = encodeHTMLEntity;
    ne.util.hasEncodableString = hasEncodableString;
    ne.util.getDuplicatedChar = getDuplicatedChar;

})(window.ne);

/**********
 * tricks.js
 **********/

/**
 * @fileoverview collections of some technic methods.
 * @author NHN Ent. FE Development Team <e0242.nhnent.com>
 */

/** @namespace ne */
/** @namespace ne.util */

(function(ne) {
    'use strict';
    var aps = Array.prototype.slice;

    /* istanbul ignore if */
    if (!ne) {
        ne = window.ne = {};
    }
    /* istanbul ignore if */
    if (!ne.util) {
        ne.util = window.ne.util = {};
    }

    /**
     * Creates a debounced function that delays invoking fn until after delay milliseconds has elapsed
     * since the last time the debouced function was invoked.
     * @param {function} fn The function to debounce.
     * @param {number} [delay=0] The number of milliseconds to delay
     * @memberof ne.util
     * @returns {function} debounced function.
     * @example
     *
     * function someMethodToInvokeDebounced() {}
     *
     * var debounced = ne.util.debounce(someMethodToInvokeDebounced, 300);
     *
     * // invoke repeatedly
     * debounced();
     * debounced();
     * debounced();
     * debounced();
     * debounced();
     * debounced();    // last invoke of debounced()
     *
     * // invoke someMethodToInvokeDebounced() after 300 milliseconds.
     */
    function debounce(fn, delay) {
        var timer,
            args;

        /* istanbul ignore next */
        delay = delay || 0;

        function debounced() {
            args = arguments;

            window.clearTimeout(timer);
            timer = window.setTimeout(function() {
                fn.apply(null, args);
            }, delay);
        }

        return debounced;
    }

    /**
     * return timestamp
     * @memberof ne.util
     * @returns {number} The number of milliseconds from Jan. 1970 00:00:00 (GMT)
     */
    function timestamp() {
        return +(new Date());
    }

    /**
     * Creates a throttled function that only invokes fn at most once per every interval milliseconds.
     *
     * You can use this throttle short time repeatedly invoking functions. (e.g MouseMove, Resize ...)
     *
     * if you need reuse throttled method. you must remove slugs (e.g. flag variable) related with throttling.
     * @param {function} fn function to throttle
     * @param {number} [interval=0] the number of milliseconds to throttle invocations to.
     * @memberof ne.util
     * @returns {function} throttled function
     * @example
     *
     * function someMethodToInvokeThrottled() {}
     *
     * var throttled = ne.util.throttle(someMethodToInvokeThrottled, 300);
     *
     * // invoke repeatedly
     * throttled();    // invoke (leading)
     * throttled();
     * throttled();    // invoke (near 300 milliseconds)
     * throttled();
     * throttled();
     * throttled();    // invoke (near 600 milliseconds)
     * // ...
     * // invoke (trailing)
     *
     * // if you need reuse throttled method. then invoke reset()
     * throttled.reset();
     */
    function throttle(fn, interval) {
        var base,
            _timestamp = ne.util.timestamp,
            debounced,
            isLeading = true,
            stamp,
            args,
            tick = function(_args) {
                fn.apply(null, _args);
                base = null;
            };

        /* istanbul ignore next */
        interval = interval || 0;

        debounced = ne.util.debounce(tick, interval);

        function throttled() {
            args = aps.call(arguments);

            if (isLeading) {
                tick(args);
                isLeading = false;
                return;
            }

            stamp = _timestamp();

            base = base || stamp;

            debounced();

            if ((stamp - base) >= interval) {
                tick(args);
            }
        }

        function reset() {
            isLeading = true;
            base = null;
        }

        throttled.reset = reset;
        return throttled;
    }

    ne.util.timestamp = timestamp;
    ne.util.debounce = debounce;
    ne.util.throttle = throttle;
})(window.ne);


/**********
 * type.js
 **********/

/**
 * @fileoverview This module provides some functions to check the type of variable
 * @author NHN Ent.
 *         FE Development Team <e0242@nhnent.com>
 * @dependency collection.js
 */

(function(ne) {
    'use strict';
    /* istanbul ignore if */
    if (!ne) {
        ne = window.ne = {};
    }
    if (!ne.util) {
        ne.util = window.ne.util = {};
    }

    /**
     * Check whether the given variable is existing or not.<br>
     *  If the given variable is not null and not undefined, returns true.
     * @param {*} param - Target for checking
     * @returns {boolean} Is existy?
     * @memberOf ne.util
     * @example
     *  ne.util.isExisty(''); //true
     *  ne.util.isExisty(0); //true
     *  ne.util.isExisty([]); //true
     *  ne.util.isExisty({}); //true
     *  ne.util.isExisty(null); //false
     *  ne.util.isExisty(undefined); //false
    */
    function isExisty(param) {
        return param != null;
    }

    /**
     * Check whether the given variable is undefined or not.<br>
     *  If the given variable is undefined, returns true.
     * @param {*} obj - Target for checking
     * @returns {boolean} Is undefined?
     * @memberOf ne.util
     */
    function isUndefined(obj) {
        return obj === undefined;
    }

    /**
     * Check whether the given variable is null or not.<br>
     *  If the given variable(arguments[0]) is null, returns true.
     * @param {*} obj - Target for checking
     * @returns {boolean} Is null?
     * @memberOf ne.util
     */
    function isNull(obj) {
        return obj === null;
    }

    /**
     * Check whether the given variable is truthy or not.<br>
     *  If the given variable is not null or not undefined or not false, returns true.<br>
     *  (It regards 0 as true)
     * @param {*} obj - Target for checking
     * @return {boolean} Is truthy?
     * @memberOf ne.util
     */
    function isTruthy(obj) {
        return isExisty(obj) && obj !== false;
    }

    /**
     * Check whether the given variable is falsy or not.<br>
     *  If the given variable is null or undefined or false, returns true.
     * @param {*} obj - Target for checking
     * @return {boolean} Is falsy?
     * @memberOf ne.util
     */
    function isFalsy(obj) {
        return !isTruthy(obj);
    }


    var toString = Object.prototype.toString;

    /**
     * Check whether the given variable is an arguments object or not.<br>
     *  If the given variable is an arguments object, return true.
     * @param {*} obj - Target for checking
     * @return {boolean} Is arguments?
     * @memberOf ne.util
     */
    function isArguments(obj) {
        var result = isExisty(obj) &&
            ((toString.call(obj) === '[object Arguments]') || !!obj.callee);

        return result;
    }

    /**
     * Check whether the given variable is an instance of Array or not.<br>
     *  If the given variable is an instance of Array, return true.
     * @param {*} obj - Target for checking
     * @return {boolean} Is array instance?
     * @memberOf ne.util
     */
    function isArray(obj) {
        return obj instanceof Array;
    }

    /**
     * Check whether the given variable is an object or not.<br>
     *  If the given variable is an object, return true.
     * @param {*} obj - Target for checking
     * @return {boolean} Is object?
     * @memberOf ne.util
     */
    function isObject(obj) {
        return obj === Object(obj);
    }

    /**
     * Check whether the given variable is a function or not.<br>
     *  If the given variable is a function, return true.
     * @param {*} obj - Target for checking
     * @return {boolean} Is function?
     * @memberOf ne.util
     */
    function isFunction(obj) {
        return obj instanceof Function;
    }

    /**
     * Check whether the given variable is a number or not.<br>
     *  If the given variable is a number, return true.
     * @param {*} obj - Target for checking
     * @return {boolean} Is number?
     * @memberOf ne.util
     */
    function isNumber(obj) {
        return typeof obj === 'number' || obj instanceof Number;
    }

    /**
     * Check whether the given variable is a string or not.<br>
     *  If the given variable is a string, return true.
     * @param {*} obj - Target for checking
     * @return {boolean} Is string?
     * @memberOf ne.util
     */
    function isString(obj) {
        return typeof obj === 'string' || obj instanceof String;
    }

    /**
     * Check whether the given variable is a boolean or not.<br>
     *  If the given variable is a boolean, return true.
     * @param {*} obj - Target for checking
     * @return {boolean} Is boolean?
     * @memberOf ne.util
     */
    function isBoolean(obj) {
        return typeof obj === 'boolean' || obj instanceof Boolean;
    }


    /**
     * Check whether the given variable is an instance of Array or not.<br>
     *  If the given variable is an instance of Array, return true.<br>
     *  (It is used for multiple frame environments)
     * @param {*} obj - Target for checking
     * @return {boolean} Is an instance of array?
     * @memberOf ne.util
     */
    function isArraySafe(obj) {
        return toString.call(obj) === '[object Array]';
    }

    /**
     * Check whether the given variable is a function or not.<br>
     *  If the given variable is a function, return true.<br>
     *  (It is used for multiple frame environments)
     * @param {*} obj - Target for checking
     * @return {boolean} Is a function?
     * @memberOf ne.util
     */
    function isFunctionSafe(obj) {
        return toString.call(obj) === '[object Function]';
    }

    /**
     * Check whether the given variable is a number or not.<br>
     *  If the given variable is a number, return true.<br>
     *  (It is used for multiple frame environments)
     * @param {*} obj - Target for checking
     * @return {boolean} Is a number?
     * @memberOf ne.util
     */
    function isNumberSafe(obj) {
        return toString.call(obj) === '[object Number]';
    }

    /**
     * Check whether the given variable is a string or not.<br>
     *  If the given variable is a string, return true.<br>
     *  (It is used for multiple frame environments)
     * @param {*} obj - Target for checking
     * @return {boolean} Is a string?
     * @memberOf ne.util
     */
    function isStringSafe(obj) {
        return toString.call(obj) === '[object String]';
    }

    /**
     * Check whether the given variable is a boolean or not.<br>
     *  If the given variable is a boolean, return true.<br>
     *  (It is used for multiple frame environments)
     * @param {*} obj - Target for checking
     * @return {boolean} Is a boolean?
     * @memberOf ne.util
     */
    function isBooleanSafe(obj) {
        return toString.call(obj) === '[object Boolean]';
    }

    /**
     * Check whether the given variable is a instance of HTMLNode or not.<br>
     *  If the given variables is a instance of HTMLNode, return true.
     * @param {*} html - Target for checking
     * @return {boolean} Is HTMLNode ?
     * @memberOf ne.util
     */
    function isHTMLNode(html) {
        if (typeof(HTMLElement) === 'object') {
            return (html && (html instanceof HTMLElement || !!html.nodeType));
        }
        return !!(html && html.nodeType);
    }

    /**
     * Check whether the given variable is a HTML tag or not.<br>
     *  If the given variables is a HTML tag, return true.
     * @param {*} html - Target for checking
     * @return {Boolean} Is HTML tag?
     * @memberOf ne.util
     */
    function isHTMLTag(html) {
        if (typeof(HTMLElement) === 'object') {
            return (html && (html instanceof HTMLElement));
        }
        return !!(html && html.nodeType && html.nodeType === 1);
    }

    /**
     * Check whether the given variable is empty(null, undefined, or empty array, empty object) or not.<br>
     *  If the given variables is empty, return true.
     * @param {*} obj - Target for checking
     * @return {boolean} Is empty?
     * @memberOf ne.util
     */
    function isEmpty(obj) {
        var hasKey = false;

        if (!isExisty(obj)) {
            return true;
        }

        if (isString(obj) && obj === '') {
            return true;
        }

        if (isArray(obj) || isArguments(obj)) {
            return obj.length === 0;
        }

        if (isObject(obj) && !isFunction(obj)) {
            ne.util.forEachOwnProperties(obj, function() {
                hasKey = true;
                return false;
            });

            return !hasKey;
        }

        return true;

    }

    /**
     * Check whether the given variable is not empty(not null, not undefined, or not empty array, not empty object) or not.<br>
     *  If the given variables is not empty, return true.
     * @param {*} obj - Target for checking
     * @return {boolean} Is not empty?
     * @memberOf ne.util
     */
    function isNotEmpty(obj) {
        return !isEmpty(obj);
    }

    /**
     * Check whether the given variable is an instance of Date or not.<br>
     *  If the given variables is an instance of Date, return true.
     * @param {*} obj - Target for checking
     * @returns {boolean} Is an instance of Date?
     * @memberOf ne.util
     */
    function isDate(obj) {
        return obj instanceof Date;
    }

    /**
     * Check whether the given variable is an instance of Date or not.<br>
     *  If the given variables is an instance of Date, return true.<br>
     *  (It is used for multiple frame environments)
     * @param {*} obj - Target for checking
     * @returns {boolean} Is an instance of Date?
     * @memberOf ne.util
     */
    function isDateSafe(obj) {
        return toString.call(obj) === '[object Date]';
    }


    ne.util.isExisty = isExisty;
    ne.util.isUndefined = isUndefined;
    ne.util.isNull = isNull;
    ne.util.isTruthy = isTruthy;
    ne.util.isFalsy = isFalsy;
    ne.util.isArguments = isArguments;
    ne.util.isArray = Array.isArray || isArray;
    ne.util.isArraySafe = Array.isArray || isArraySafe;
    ne.util.isObject = isObject;
    ne.util.isFunction = isFunction;
    ne.util.isFunctionSafe = isFunctionSafe;
    ne.util.isNumber = isNumber;
    ne.util.isNumberSafe = isNumberSafe;
    ne.util.isDate = isDate;
    ne.util.isDateSafe = isDateSafe;
    ne.util.isString = isString;
    ne.util.isStringSafe = isStringSafe;
    ne.util.isBoolean = isBoolean;
    ne.util.isBooleanSafe = isBooleanSafe;
    ne.util.isHTMLNode = isHTMLNode;
    ne.util.isHTMLTag = isHTMLTag;
    ne.util.isEmpty = isEmpty;
    ne.util.isNotEmpty = isNotEmpty;

})(window.ne);

/**********
 * window.js
 **********/

/**
 * @fileoverview This module has some methods for handling popup-window
 * @author NHN Ent.
 *         FE Development Team <e0242@nhnent.com>
 * @dependency browser.js, type.js, object.js, collection.js, func.js, window.js
 */

(function(ne) {
    'use strict';
    if (!ne) {
        ne = window.ne = {};
    }
    if (!ne.util) {
        ne.util = window.ne.util = {};
    }

    var popup_id = 0;

    /**
     * Popup management class
     * @constructor
     * @memberof ne.util
     */
    function Popup() {

        /**
         * Caching the window-contexts of opened popups
         * @type {Object}
         */
        this.openedPopup = {};

        /**
         * In IE7, an error occurs when the closeWithParent property attaches to window object.<br>
         * So, It is for saving the value of closeWithParent instead of attaching to window object.
         * @type {Object}
         */
        this.closeWithParentPopup = {};

        /**
         * Post data bridge for IE11 popup
         * @type {string}
         */
        this.postDataBridgeUrl = '';
    }

    /**********
     * public methods
     **********/

    /**
     * Returns a popup-list administered by current window.
     * @param {string} [key] The key of popup.
     * @returns {Object} popup window list object
     */
    Popup.prototype.getPopupList = function(key) {
        var target;
        if (ne.util.isExisty(key)) {
            target = this.openedPopup[key];
        } else {
            target = this.openedPopup;
        }
        return target;
    };

    /**
     * Open popup
     * Caution:
     *  In IE11, when transfer data to popup by POST, must set the postDataBridgeUrl.
     *
     * @param {string} url - popup url
     * @param {Object} options
     *     @param {string} [options.popupName] - Key of popup window.<br>
     *      If the key is set, when you try to open by this key, the popup of this key is focused.<br>
     *      Or else a new popup window having this key is opened.
     *
     *     @param {string} [options.popupOptionStr=""] - Option string of popup window<br>
     *      It is same with the third parameter of window.open() method.<br>
     *      See {@link http://www.w3schools.com/jsref/met_win_open.asp}
     *
     *     @param {boolean} [options.closeWithParent=true] - Is closed when parent window closed?
     *
     *     @param {boolean} [options.useReload=false] - This property indicates whether reload the popup or not.<br>
     *      If true, the popup will be reloaded when you try to re-open the popup that has been opened.<br>
     *      When transmit the POST-data, some browsers alert a message for confirming whether retransmit or not.
     *
     *     @param {string} [options.postDataBridgeUrl=''] - Use this url to avoid a certain bug occuring when transmitting POST data to the popup in IE11.<br>
     *      This specific buggy situation is known to happen because IE11 tries to open the requested url not in a new popup window as intended, but in a new tab.<br>
     *      See {@link http://wiki.nhnent.com/pages/viewpage.action?pageId=240562844}
     *
     *     @param {string} [options.method=get] - The method of transmission when the form-data is transmitted to popup-window.
     *
     *     @param {Object} [options.param=null] - Using as parameters for transmission when the form-data is transmitted to popup-window.
     */
    Popup.prototype.openPopup = function(url, options) {
        options = ne.util.extend({
            popupName: 'popup_' + popup_id + '_' + (+new Date()),
            popupOptionStr: '',
            useReload: true,
            closeWithParent: true,
            method: 'get',
            param: {}
        }, options || {});

        options.method = options.method.toUpperCase();

        this.postDataBridgeUrl = options.postDataBridgeUrl || this.postDataBridgeUrl;

        var popup,
            formElement,
            useIEPostBridge = options.method === 'POST' && options.param &&
                ne.util.browser.msie && ne.util.browser.version === 11;

        if (!ne.util.isExisty(url)) {
            throw new Error('Popup#open() 팝업 URL이 입력되지 않았습니다');
        }

        popup_id += 1;

        /*
         * In form-data transmission
         * 1. Create a form before opening a popup.
         * 2. Transmit the form-data.
         * 3. Remove the form after transmission.
         */
        if (options.param) {
            if (options.method === 'GET') {
                url = url + (/\?/.test(url) ? '&' : '?') + this._parameterize(options.param);
            } else if (options.method === 'POST') {
                if (!useIEPostBridge) {
                    formElement = this.createForm(url, options.param, options.method, options.popupName);
                    url = 'about:blank';
                }
            }
        }

        popup = this.openedPopup[options.popupName];

        if (!ne.util.isExisty(popup)) {
            this.openedPopup[options.popupName] = popup = this._open(useIEPostBridge, options.param,
                url, options.popupName, options.popupOptionStr);

        } else {
            if (popup.closed) {
                this.openedPopup[options.popupName] = popup = this._open(useIEPostBridge, options.param,
                    url, options.popupName, options.popupOptionStr);

            } else {
                if (options.useReload) {
                    popup.location.replace(url);
                }
                popup.focus();
            }
        }

        this.closeWithParentPopup[options.popupName] = options.closeWithParent;

        if (!popup || popup.closed || ne.util.isUndefined(popup.closed)) {
            alert('브라우저에 팝업을 막는 기능이 활성화 상태이기 때문에 서비스 이용에 문제가 있을 수 있습니다. 해당 기능을 비활성화 해 주세요');
        }

        if (options.param && options.method === 'POST' && !useIEPostBridge) {
            if (popup) {
                formElement.submit();
            }
            if (formElement.parentNode) {
                formElement.parentNode.removeChild(formElement);
            }
        }

        window.onunload = ne.util.bind(this.closeAllPopup, this);
    };

    /**
     * Close the popup
     * @param {boolean} [skipBeforeUnload] - If true, the 'window.onunload' will be null and skip unload event.
     * @param {Window} [popup] - Window-context of popup for closing. If omit this, current window-context will be closed.
     */
    Popup.prototype.close = function(skipBeforeUnload, popup) {
        skipBeforeUnload = ne.util.isExisty(skipBeforeUnload) ? skipBeforeUnload : false;

        var target = popup || window;

        if (skipBeforeUnload) {
            window.onunload = null;
        }

        if (!target.closed) {
            target.opener = window.location.href;
            target.close();
        }
    };

    /**
     * Close all the popups in current window.
     * @param {boolean} closeWithParent - If true, popups having the closeWithParentPopup property as true will be closed.
     */
    Popup.prototype.closeAllPopup = function(closeWithParent) {
        var hasArg = ne.util.isExisty(closeWithParent);

        ne.util.forEachOwnProperties(this.openedPopup, function(popup, key) {
            if ((hasArg && this.closeWithParentPopup[key]) || !hasArg) {
                this.close(false, popup);
            }
        }, this);
    };

    /**
     * Activate(or focus) the popup of the given name.
     * @param {string} popupName - Name of popup for activation
     */
    Popup.prototype.focus = function(popupName) {
        this.getPopupList(popupName).focus();
    };

    /**
     * Return an object made of parsing the query string.
     * @return {Object} An object having some information of the query string.
     * @private
     */
    Popup.prototype.parseQuery = function() {
        var search,
            pair,
            param = {};

        search = window.location.search.substr(1);
        ne.util.forEachArray(search.split('&'), function(part) {
            pair = part.split('=');
            param[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
        });

        return param;
    };

    /**
     * Create a hidden form from the given arguments and return this form.
     * @param {string} action - URL for form transmission
     * @param {Object} [data] - Data for form transmission
     * @param {string} [method] - Method of transmission
     * @param {string} [target] - Target of transmission
     * @param {HTMLElement} [container] - Container element of form.
     * @returns {HTMLElement} Form element
     */
    Popup.prototype.createForm = function(action, data, method, target, container) {
        var form = document.createElement('form'),
            input;

        container = container || document.body;

        form.method = method || 'POST';
        form.action = action || '';
        form.target = target || '';
        form.style.display = 'none';

        ne.util.forEachOwnProperties(data, function(value, key) {
            input = document.createElement('input');
            input.name = key;
            input.type = 'hidden';
            input.value = value;
            form.appendChild(input);
        });

        container.appendChild(form);

        return form;
    };

    /**********
     * private methods
     **********/

    /**
     * Return an query string made by parsing the given object
     * @param {Object} object - An object that has information for query string
     * @returns {string} - Query string
     * @private
     */
    Popup.prototype._parameterize = function(object) {
        var query = [];

        ne.util.forEachOwnProperties(object, function(value, key) {
            query.push(encodeURIComponent(key) + '=' + encodeURIComponent(value));
        });

        return query.join('&');
    };

    /**
     * Open popup
     * @param {boolean} useIEPostBridge - A switch option whether to use alternative of tossing POST data to the popup window in IE11
     * @param {Object} param - A data for tossing to popup
     * @param {string} url - Popup url
     * @param {string} popupName - Popup name
     * @param {string} optionStr - Setting for popup, ex) 'width=640,height=320,scrollbars=yes'
     * @returns {Window} Window context of popup
     * @private
     */
    Popup.prototype._open = function(useIEPostBridge, param, url, popupName, optionStr) {
        var popup;

        if (useIEPostBridge) {
            url = this.postDataBridgeUrl + '?storageKey=' + encodeURIComponent(popupName) +
            '&redirectUrl=' + encodeURIComponent(url);
            if (!window.localStorage) {
                alert('IE11브라우저의 문제로 인해 이 기능은 브라우저의 LocalStorage 기능을 활성화 하셔야 이용하실 수 있습니다');
            } else {
                localStorage.removeItem(popupName);
                localStorage.setItem(popupName, JSON.stringify(param));

                popup = window.open(url, popupName, optionStr);
            }
        } else {
            popup = window.open(url, popupName, optionStr);
        }

        return popup;
    };

    ne.util.popup = new Popup();

})(window.ne);

},{}],3:[function(require,module,exports){
'use strict';

exports.__esModule = true;
// istanbul ignore next

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

// istanbul ignore next

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

var _handlebarsBase = require('./handlebars/base');

// Each of these augment the Handlebars object. No need to setup here.
// (This is done to easily share code between commonjs and browse envs)

var base = _interopRequireWildcard(_handlebarsBase);

var _handlebarsSafeString = require('./handlebars/safe-string');

var _handlebarsSafeString2 = _interopRequireDefault(_handlebarsSafeString);

var _handlebarsException = require('./handlebars/exception');

var _handlebarsException2 = _interopRequireDefault(_handlebarsException);

var _handlebarsUtils = require('./handlebars/utils');

var Utils = _interopRequireWildcard(_handlebarsUtils);

var _handlebarsRuntime = require('./handlebars/runtime');

var runtime = _interopRequireWildcard(_handlebarsRuntime);

var _handlebarsNoConflict = require('./handlebars/no-conflict');

// For compatibility and usage outside of module systems, make the Handlebars object a namespace

var _handlebarsNoConflict2 = _interopRequireDefault(_handlebarsNoConflict);

function create() {
  var hb = new base.HandlebarsEnvironment();

  Utils.extend(hb, base);
  hb.SafeString = _handlebarsSafeString2['default'];
  hb.Exception = _handlebarsException2['default'];
  hb.Utils = Utils;
  hb.escapeExpression = Utils.escapeExpression;

  hb.VM = runtime;
  hb.template = function (spec) {
    return runtime.template(spec, hb);
  };

  return hb;
}

var inst = create();
inst.create = create;

_handlebarsNoConflict2['default'](inst);

inst['default'] = inst;

exports['default'] = inst;
module.exports = exports['default'];


},{"./handlebars/base":4,"./handlebars/exception":7,"./handlebars/no-conflict":17,"./handlebars/runtime":18,"./handlebars/safe-string":19,"./handlebars/utils":20}],4:[function(require,module,exports){
'use strict';

exports.__esModule = true;
exports.HandlebarsEnvironment = HandlebarsEnvironment;
// istanbul ignore next

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _utils = require('./utils');

var _exception = require('./exception');

var _exception2 = _interopRequireDefault(_exception);

var _helpers = require('./helpers');

var _decorators = require('./decorators');

var _logger = require('./logger');

var _logger2 = _interopRequireDefault(_logger);

var VERSION = '4.0.3';
exports.VERSION = VERSION;
var COMPILER_REVISION = 7;

exports.COMPILER_REVISION = COMPILER_REVISION;
var REVISION_CHANGES = {
  1: '<= 1.0.rc.2', // 1.0.rc.2 is actually rev2 but doesn't report it
  2: '== 1.0.0-rc.3',
  3: '== 1.0.0-rc.4',
  4: '== 1.x.x',
  5: '== 2.0.0-alpha.x',
  6: '>= 2.0.0-beta.1',
  7: '>= 4.0.0'
};

exports.REVISION_CHANGES = REVISION_CHANGES;
var objectType = '[object Object]';

function HandlebarsEnvironment(helpers, partials, decorators) {
  this.helpers = helpers || {};
  this.partials = partials || {};
  this.decorators = decorators || {};

  _helpers.registerDefaultHelpers(this);
  _decorators.registerDefaultDecorators(this);
}

HandlebarsEnvironment.prototype = {
  constructor: HandlebarsEnvironment,

  logger: _logger2['default'],
  log: _logger2['default'].log,

  registerHelper: function registerHelper(name, fn) {
    if (_utils.toString.call(name) === objectType) {
      if (fn) {
        throw new _exception2['default']('Arg not supported with multiple helpers');
      }
      _utils.extend(this.helpers, name);
    } else {
      this.helpers[name] = fn;
    }
  },
  unregisterHelper: function unregisterHelper(name) {
    delete this.helpers[name];
  },

  registerPartial: function registerPartial(name, partial) {
    if (_utils.toString.call(name) === objectType) {
      _utils.extend(this.partials, name);
    } else {
      if (typeof partial === 'undefined') {
        throw new _exception2['default']('Attempting to register a partial as undefined');
      }
      this.partials[name] = partial;
    }
  },
  unregisterPartial: function unregisterPartial(name) {
    delete this.partials[name];
  },

  registerDecorator: function registerDecorator(name, fn) {
    if (_utils.toString.call(name) === objectType) {
      if (fn) {
        throw new _exception2['default']('Arg not supported with multiple decorators');
      }
      _utils.extend(this.decorators, name);
    } else {
      this.decorators[name] = fn;
    }
  },
  unregisterDecorator: function unregisterDecorator(name) {
    delete this.decorators[name];
  }
};

var log = _logger2['default'].log;

exports.log = log;
exports.createFrame = _utils.createFrame;
exports.logger = _logger2['default'];


},{"./decorators":5,"./exception":7,"./helpers":8,"./logger":16,"./utils":20}],5:[function(require,module,exports){
'use strict';

exports.__esModule = true;
exports.registerDefaultDecorators = registerDefaultDecorators;
// istanbul ignore next

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _decoratorsInline = require('./decorators/inline');

var _decoratorsInline2 = _interopRequireDefault(_decoratorsInline);

function registerDefaultDecorators(instance) {
  _decoratorsInline2['default'](instance);
}


},{"./decorators/inline":6}],6:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _utils = require('../utils');

exports['default'] = function (instance) {
  instance.registerDecorator('inline', function (fn, props, container, options) {
    var ret = fn;
    if (!props.partials) {
      props.partials = {};
      ret = function (context, options) {
        // Create a new partials stack frame prior to exec.
        var original = container.partials;
        container.partials = _utils.extend({}, original, props.partials);
        var ret = fn(context, options);
        container.partials = original;
        return ret;
      };
    }

    props.partials[options.args[0]] = options.fn;

    return ret;
  });
};

module.exports = exports['default'];


},{"../utils":20}],7:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var errorProps = ['description', 'fileName', 'lineNumber', 'message', 'name', 'number', 'stack'];

function Exception(message, node) {
  var loc = node && node.loc,
      line = undefined,
      column = undefined;
  if (loc) {
    line = loc.start.line;
    column = loc.start.column;

    message += ' - ' + line + ':' + column;
  }

  var tmp = Error.prototype.constructor.call(this, message);

  // Unfortunately errors are not enumerable in Chrome (at least), so `for prop in tmp` doesn't work.
  for (var idx = 0; idx < errorProps.length; idx++) {
    this[errorProps[idx]] = tmp[errorProps[idx]];
  }

  /* istanbul ignore else */
  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, Exception);
  }

  if (loc) {
    this.lineNumber = line;
    this.column = column;
  }
}

Exception.prototype = new Error();

exports['default'] = Exception;
module.exports = exports['default'];


},{}],8:[function(require,module,exports){
'use strict';

exports.__esModule = true;
exports.registerDefaultHelpers = registerDefaultHelpers;
// istanbul ignore next

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _helpersBlockHelperMissing = require('./helpers/block-helper-missing');

var _helpersBlockHelperMissing2 = _interopRequireDefault(_helpersBlockHelperMissing);

var _helpersEach = require('./helpers/each');

var _helpersEach2 = _interopRequireDefault(_helpersEach);

var _helpersHelperMissing = require('./helpers/helper-missing');

var _helpersHelperMissing2 = _interopRequireDefault(_helpersHelperMissing);

var _helpersIf = require('./helpers/if');

var _helpersIf2 = _interopRequireDefault(_helpersIf);

var _helpersLog = require('./helpers/log');

var _helpersLog2 = _interopRequireDefault(_helpersLog);

var _helpersLookup = require('./helpers/lookup');

var _helpersLookup2 = _interopRequireDefault(_helpersLookup);

var _helpersWith = require('./helpers/with');

var _helpersWith2 = _interopRequireDefault(_helpersWith);

function registerDefaultHelpers(instance) {
  _helpersBlockHelperMissing2['default'](instance);
  _helpersEach2['default'](instance);
  _helpersHelperMissing2['default'](instance);
  _helpersIf2['default'](instance);
  _helpersLog2['default'](instance);
  _helpersLookup2['default'](instance);
  _helpersWith2['default'](instance);
}


},{"./helpers/block-helper-missing":9,"./helpers/each":10,"./helpers/helper-missing":11,"./helpers/if":12,"./helpers/log":13,"./helpers/lookup":14,"./helpers/with":15}],9:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _utils = require('../utils');

exports['default'] = function (instance) {
  instance.registerHelper('blockHelperMissing', function (context, options) {
    var inverse = options.inverse,
        fn = options.fn;

    if (context === true) {
      return fn(this);
    } else if (context === false || context == null) {
      return inverse(this);
    } else if (_utils.isArray(context)) {
      if (context.length > 0) {
        if (options.ids) {
          options.ids = [options.name];
        }

        return instance.helpers.each(context, options);
      } else {
        return inverse(this);
      }
    } else {
      if (options.data && options.ids) {
        var data = _utils.createFrame(options.data);
        data.contextPath = _utils.appendContextPath(options.data.contextPath, options.name);
        options = { data: data };
      }

      return fn(context, options);
    }
  });
};

module.exports = exports['default'];


},{"../utils":20}],10:[function(require,module,exports){
'use strict';

exports.__esModule = true;
// istanbul ignore next

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _utils = require('../utils');

var _exception = require('../exception');

var _exception2 = _interopRequireDefault(_exception);

exports['default'] = function (instance) {
  instance.registerHelper('each', function (context, options) {
    if (!options) {
      throw new _exception2['default']('Must pass iterator to #each');
    }

    var fn = options.fn,
        inverse = options.inverse,
        i = 0,
        ret = '',
        data = undefined,
        contextPath = undefined;

    if (options.data && options.ids) {
      contextPath = _utils.appendContextPath(options.data.contextPath, options.ids[0]) + '.';
    }

    if (_utils.isFunction(context)) {
      context = context.call(this);
    }

    if (options.data) {
      data = _utils.createFrame(options.data);
    }

    function execIteration(field, index, last) {
      if (data) {
        data.key = field;
        data.index = index;
        data.first = index === 0;
        data.last = !!last;

        if (contextPath) {
          data.contextPath = contextPath + field;
        }
      }

      ret = ret + fn(context[field], {
        data: data,
        blockParams: _utils.blockParams([context[field], field], [contextPath + field, null])
      });
    }

    if (context && typeof context === 'object') {
      if (_utils.isArray(context)) {
        for (var j = context.length; i < j; i++) {
          if (i in context) {
            execIteration(i, i, i === context.length - 1);
          }
        }
      } else {
        var priorKey = undefined;

        for (var key in context) {
          if (context.hasOwnProperty(key)) {
            // We're running the iterations one step out of sync so we can detect
            // the last iteration without have to scan the object twice and create
            // an itermediate keys array.
            if (priorKey !== undefined) {
              execIteration(priorKey, i - 1);
            }
            priorKey = key;
            i++;
          }
        }
        if (priorKey !== undefined) {
          execIteration(priorKey, i - 1, true);
        }
      }
    }

    if (i === 0) {
      ret = inverse(this);
    }

    return ret;
  });
};

module.exports = exports['default'];


},{"../exception":7,"../utils":20}],11:[function(require,module,exports){
'use strict';

exports.__esModule = true;
// istanbul ignore next

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _exception = require('../exception');

var _exception2 = _interopRequireDefault(_exception);

exports['default'] = function (instance) {
  instance.registerHelper('helperMissing', function () /* [args, ]options */{
    if (arguments.length === 1) {
      // A missing field in a {{foo}} construct.
      return undefined;
    } else {
      // Someone is actually trying to call something, blow up.
      throw new _exception2['default']('Missing helper: "' + arguments[arguments.length - 1].name + '"');
    }
  });
};

module.exports = exports['default'];


},{"../exception":7}],12:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _utils = require('../utils');

exports['default'] = function (instance) {
  instance.registerHelper('if', function (conditional, options) {
    if (_utils.isFunction(conditional)) {
      conditional = conditional.call(this);
    }

    // Default behavior is to render the positive path if the value is truthy and not empty.
    // The `includeZero` option may be set to treat the condtional as purely not empty based on the
    // behavior of isEmpty. Effectively this determines if 0 is handled by the positive path or negative.
    if (!options.hash.includeZero && !conditional || _utils.isEmpty(conditional)) {
      return options.inverse(this);
    } else {
      return options.fn(this);
    }
  });

  instance.registerHelper('unless', function (conditional, options) {
    return instance.helpers['if'].call(this, conditional, { fn: options.inverse, inverse: options.fn, hash: options.hash });
  });
};

module.exports = exports['default'];


},{"../utils":20}],13:[function(require,module,exports){
'use strict';

exports.__esModule = true;

exports['default'] = function (instance) {
  instance.registerHelper('log', function () /* message, options */{
    var args = [undefined],
        options = arguments[arguments.length - 1];
    for (var i = 0; i < arguments.length - 1; i++) {
      args.push(arguments[i]);
    }

    var level = 1;
    if (options.hash.level != null) {
      level = options.hash.level;
    } else if (options.data && options.data.level != null) {
      level = options.data.level;
    }
    args[0] = level;

    instance.log.apply(instance, args);
  });
};

module.exports = exports['default'];


},{}],14:[function(require,module,exports){
'use strict';

exports.__esModule = true;

exports['default'] = function (instance) {
  instance.registerHelper('lookup', function (obj, field) {
    return obj && obj[field];
  });
};

module.exports = exports['default'];


},{}],15:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _utils = require('../utils');

exports['default'] = function (instance) {
  instance.registerHelper('with', function (context, options) {
    if (_utils.isFunction(context)) {
      context = context.call(this);
    }

    var fn = options.fn;

    if (!_utils.isEmpty(context)) {
      var data = options.data;
      if (options.data && options.ids) {
        data = _utils.createFrame(options.data);
        data.contextPath = _utils.appendContextPath(options.data.contextPath, options.ids[0]);
      }

      return fn(context, {
        data: data,
        blockParams: _utils.blockParams([context], [data && data.contextPath])
      });
    } else {
      return options.inverse(this);
    }
  });
};

module.exports = exports['default'];


},{"../utils":20}],16:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _utils = require('./utils');

var logger = {
  methodMap: ['debug', 'info', 'warn', 'error'],
  level: 'info',

  // Maps a given level value to the `methodMap` indexes above.
  lookupLevel: function lookupLevel(level) {
    if (typeof level === 'string') {
      var levelMap = _utils.indexOf(logger.methodMap, level.toLowerCase());
      if (levelMap >= 0) {
        level = levelMap;
      } else {
        level = parseInt(level, 10);
      }
    }

    return level;
  },

  // Can be overridden in the host environment
  log: function log(level) {
    level = logger.lookupLevel(level);

    if (typeof console !== 'undefined' && logger.lookupLevel(logger.level) <= level) {
      var method = logger.methodMap[level];
      if (!console[method]) {
        // eslint-disable-line no-console
        method = 'log';
      }

      for (var _len = arguments.length, message = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        message[_key - 1] = arguments[_key];
      }

      console[method].apply(console, message); // eslint-disable-line no-console
    }
  }
};

exports['default'] = logger;
module.exports = exports['default'];


},{"./utils":20}],17:[function(require,module,exports){
(function (global){
/* global window */
'use strict';

exports.__esModule = true;

exports['default'] = function (Handlebars) {
  /* istanbul ignore next */
  var root = typeof global !== 'undefined' ? global : window,
      $Handlebars = root.Handlebars;
  /* istanbul ignore next */
  Handlebars.noConflict = function () {
    if (root.Handlebars === Handlebars) {
      root.Handlebars = $Handlebars;
    }
  };
};

module.exports = exports['default'];


}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],18:[function(require,module,exports){
'use strict';

exports.__esModule = true;
exports.checkRevision = checkRevision;
exports.template = template;
exports.wrapProgram = wrapProgram;
exports.resolvePartial = resolvePartial;
exports.invokePartial = invokePartial;
exports.noop = noop;
// istanbul ignore next

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

// istanbul ignore next

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

var _utils = require('./utils');

var Utils = _interopRequireWildcard(_utils);

var _exception = require('./exception');

var _exception2 = _interopRequireDefault(_exception);

var _base = require('./base');

function checkRevision(compilerInfo) {
  var compilerRevision = compilerInfo && compilerInfo[0] || 1,
      currentRevision = _base.COMPILER_REVISION;

  if (compilerRevision !== currentRevision) {
    if (compilerRevision < currentRevision) {
      var runtimeVersions = _base.REVISION_CHANGES[currentRevision],
          compilerVersions = _base.REVISION_CHANGES[compilerRevision];
      throw new _exception2['default']('Template was precompiled with an older version of Handlebars than the current runtime. ' + 'Please update your precompiler to a newer version (' + runtimeVersions + ') or downgrade your runtime to an older version (' + compilerVersions + ').');
    } else {
      // Use the embedded version info since the runtime doesn't know about this revision yet
      throw new _exception2['default']('Template was precompiled with a newer version of Handlebars than the current runtime. ' + 'Please update your runtime to a newer version (' + compilerInfo[1] + ').');
    }
  }
}

function template(templateSpec, env) {
  /* istanbul ignore next */
  if (!env) {
    throw new _exception2['default']('No environment passed to template');
  }
  if (!templateSpec || !templateSpec.main) {
    throw new _exception2['default']('Unknown template object: ' + typeof templateSpec);
  }

  templateSpec.main.decorator = templateSpec.main_d;

  // Note: Using env.VM references rather than local var references throughout this section to allow
  // for external users to override these as psuedo-supported APIs.
  env.VM.checkRevision(templateSpec.compiler);

  function invokePartialWrapper(partial, context, options) {
    if (options.hash) {
      context = Utils.extend({}, context, options.hash);
      if (options.ids) {
        options.ids[0] = true;
      }
    }

    partial = env.VM.resolvePartial.call(this, partial, context, options);
    var result = env.VM.invokePartial.call(this, partial, context, options);

    if (result == null && env.compile) {
      options.partials[options.name] = env.compile(partial, templateSpec.compilerOptions, env);
      result = options.partials[options.name](context, options);
    }
    if (result != null) {
      if (options.indent) {
        var lines = result.split('\n');
        for (var i = 0, l = lines.length; i < l; i++) {
          if (!lines[i] && i + 1 === l) {
            break;
          }

          lines[i] = options.indent + lines[i];
        }
        result = lines.join('\n');
      }
      return result;
    } else {
      throw new _exception2['default']('The partial ' + options.name + ' could not be compiled when running in runtime-only mode');
    }
  }

  // Just add water
  var container = {
    strict: function strict(obj, name) {
      if (!(name in obj)) {
        throw new _exception2['default']('"' + name + '" not defined in ' + obj);
      }
      return obj[name];
    },
    lookup: function lookup(depths, name) {
      var len = depths.length;
      for (var i = 0; i < len; i++) {
        if (depths[i] && depths[i][name] != null) {
          return depths[i][name];
        }
      }
    },
    lambda: function lambda(current, context) {
      return typeof current === 'function' ? current.call(context) : current;
    },

    escapeExpression: Utils.escapeExpression,
    invokePartial: invokePartialWrapper,

    fn: function fn(i) {
      var ret = templateSpec[i];
      ret.decorator = templateSpec[i + '_d'];
      return ret;
    },

    programs: [],
    program: function program(i, data, declaredBlockParams, blockParams, depths) {
      var programWrapper = this.programs[i],
          fn = this.fn(i);
      if (data || depths || blockParams || declaredBlockParams) {
        programWrapper = wrapProgram(this, i, fn, data, declaredBlockParams, blockParams, depths);
      } else if (!programWrapper) {
        programWrapper = this.programs[i] = wrapProgram(this, i, fn);
      }
      return programWrapper;
    },

    data: function data(value, depth) {
      while (value && depth--) {
        value = value._parent;
      }
      return value;
    },
    merge: function merge(param, common) {
      var obj = param || common;

      if (param && common && param !== common) {
        obj = Utils.extend({}, common, param);
      }

      return obj;
    },

    noop: env.VM.noop,
    compilerInfo: templateSpec.compiler
  };

  function ret(context) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    var data = options.data;

    ret._setup(options);
    if (!options.partial && templateSpec.useData) {
      data = initData(context, data);
    }
    var depths = undefined,
        blockParams = templateSpec.useBlockParams ? [] : undefined;
    if (templateSpec.useDepths) {
      if (options.depths) {
        depths = context !== options.depths[0] ? [context].concat(options.depths) : options.depths;
      } else {
        depths = [context];
      }
    }

    function main(context /*, options*/) {
      return '' + templateSpec.main(container, context, container.helpers, container.partials, data, blockParams, depths);
    }
    main = executeDecorators(templateSpec.main, main, container, options.depths || [], data, blockParams);
    return main(context, options);
  }
  ret.isTop = true;

  ret._setup = function (options) {
    if (!options.partial) {
      container.helpers = container.merge(options.helpers, env.helpers);

      if (templateSpec.usePartial) {
        container.partials = container.merge(options.partials, env.partials);
      }
      if (templateSpec.usePartial || templateSpec.useDecorators) {
        container.decorators = container.merge(options.decorators, env.decorators);
      }
    } else {
      container.helpers = options.helpers;
      container.partials = options.partials;
      container.decorators = options.decorators;
    }
  };

  ret._child = function (i, data, blockParams, depths) {
    if (templateSpec.useBlockParams && !blockParams) {
      throw new _exception2['default']('must pass block params');
    }
    if (templateSpec.useDepths && !depths) {
      throw new _exception2['default']('must pass parent depths');
    }

    return wrapProgram(container, i, templateSpec[i], data, 0, blockParams, depths);
  };
  return ret;
}

function wrapProgram(container, i, fn, data, declaredBlockParams, blockParams, depths) {
  function prog(context) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    var currentDepths = depths;
    if (depths && context !== depths[0]) {
      currentDepths = [context].concat(depths);
    }

    return fn(container, context, container.helpers, container.partials, options.data || data, blockParams && [options.blockParams].concat(blockParams), currentDepths);
  }

  prog = executeDecorators(fn, prog, container, depths, data, blockParams);

  prog.program = i;
  prog.depth = depths ? depths.length : 0;
  prog.blockParams = declaredBlockParams || 0;
  return prog;
}

function resolvePartial(partial, context, options) {
  if (!partial) {
    if (options.name === '@partial-block') {
      partial = options.data['partial-block'];
    } else {
      partial = options.partials[options.name];
    }
  } else if (!partial.call && !options.name) {
    // This is a dynamic partial that returned a string
    options.name = partial;
    partial = options.partials[partial];
  }
  return partial;
}

function invokePartial(partial, context, options) {
  options.partial = true;
  if (options.ids) {
    options.data.contextPath = options.ids[0] || options.data.contextPath;
  }

  var partialBlock = undefined;
  if (options.fn && options.fn !== noop) {
    options.data = _base.createFrame(options.data);
    partialBlock = options.data['partial-block'] = options.fn;

    if (partialBlock.partials) {
      options.partials = Utils.extend({}, options.partials, partialBlock.partials);
    }
  }

  if (partial === undefined && partialBlock) {
    partial = partialBlock;
  }

  if (partial === undefined) {
    throw new _exception2['default']('The partial ' + options.name + ' could not be found');
  } else if (partial instanceof Function) {
    return partial(context, options);
  }
}

function noop() {
  return '';
}

function initData(context, data) {
  if (!data || !('root' in data)) {
    data = data ? _base.createFrame(data) : {};
    data.root = context;
  }
  return data;
}

function executeDecorators(fn, prog, container, depths, data, blockParams) {
  if (fn.decorator) {
    var props = {};
    prog = fn.decorator(prog, props, container, depths && depths[0], data, blockParams, depths);
    Utils.extend(prog, props);
  }
  return prog;
}


},{"./base":4,"./exception":7,"./utils":20}],19:[function(require,module,exports){
// Build out our basic SafeString type
'use strict';

exports.__esModule = true;
function SafeString(string) {
  this.string = string;
}

SafeString.prototype.toString = SafeString.prototype.toHTML = function () {
  return '' + this.string;
};

exports['default'] = SafeString;
module.exports = exports['default'];


},{}],20:[function(require,module,exports){
'use strict';

exports.__esModule = true;
exports.extend = extend;
exports.indexOf = indexOf;
exports.escapeExpression = escapeExpression;
exports.isEmpty = isEmpty;
exports.createFrame = createFrame;
exports.blockParams = blockParams;
exports.appendContextPath = appendContextPath;
var escape = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#x27;',
  '`': '&#x60;',
  '=': '&#x3D;'
};

var badChars = /[&<>"'`=]/g,
    possible = /[&<>"'`=]/;

function escapeChar(chr) {
  return escape[chr];
}

function extend(obj /* , ...source */) {
  for (var i = 1; i < arguments.length; i++) {
    for (var key in arguments[i]) {
      if (Object.prototype.hasOwnProperty.call(arguments[i], key)) {
        obj[key] = arguments[i][key];
      }
    }
  }

  return obj;
}

var toString = Object.prototype.toString;

// Sourced from lodash
// https://github.com/bestiejs/lodash/blob/master/LICENSE.txt
/* eslint-disable func-style */
exports.toString = toString;
var isFunction = function isFunction(value) {
  return typeof value === 'function';
};
// fallback for older versions of Chrome and Safari
/* istanbul ignore next */
if (isFunction(/x/)) {
  exports.isFunction = isFunction = function (value) {
    return typeof value === 'function' && toString.call(value) === '[object Function]';
  };
}
exports.isFunction = isFunction;

/* eslint-enable func-style */

/* istanbul ignore next */
var isArray = Array.isArray || function (value) {
  return value && typeof value === 'object' ? toString.call(value) === '[object Array]' : false;
};

// Older IE versions do not directly support indexOf so we must implement our own, sadly.
exports.isArray = isArray;

function indexOf(array, value) {
  for (var i = 0, len = array.length; i < len; i++) {
    if (array[i] === value) {
      return i;
    }
  }
  return -1;
}

function escapeExpression(string) {
  if (typeof string !== 'string') {
    // don't escape SafeStrings, since they're already safe
    if (string && string.toHTML) {
      return string.toHTML();
    } else if (string == null) {
      return '';
    } else if (!string) {
      return string + '';
    }

    // Force a string conversion as this will be done by the append regardless and
    // the regex test will do this transparently behind the scenes, causing issues if
    // an object's to string has escaped characters in it.
    string = '' + string;
  }

  if (!possible.test(string)) {
    return string;
  }
  return string.replace(badChars, escapeChar);
}

function isEmpty(value) {
  if (!value && value !== 0) {
    return true;
  } else if (isArray(value) && value.length === 0) {
    return true;
  } else {
    return false;
  }
}

function createFrame(object) {
  var frame = extend({}, object);
  frame._parent = object;
  return frame;
}

function blockParams(params, ids) {
  params.path = ids;
  return params;
}

function appendContextPath(contextPath, id) {
  return (contextPath ? contextPath + '.' : '') + id;
}


},{}],21:[function(require,module,exports){
// Create a simple path alias to allow browserify to resolve
// the runtime on a supported path.
module.exports = require('./dist/cjs/handlebars.runtime')['default'];

},{"./dist/cjs/handlebars.runtime":3}],22:[function(require,module,exports){
module.exports = require("handlebars/runtime")["default"];

},{"handlebars/runtime":21}],23:[function(require,module,exports){
(function (global){
/**
 * @fileoverview Module for full management of requesting AJAX from server.
 * @author NHN Ent. FE Development Team <dl_javascript@nhnent.com>
 */
'use strict';

var util = global.ne.util;

/**
 * @constructor
 */
function AJAX() {}

AJAX.ERROR = {
    NOT_SUPPORT: '사용하시는 브라우저가 서비스 이용에 필요한 필수 기능을 지원하지 않습니다. 최신 버전의 브라우저를 사용해 주세요.'
};

/**********
 * ajax
 **********/

/**
 * 비동기 요청을 위한 객체를 만들어 반환한다
 * @return {(XMLHttpRequest|ActiveXObject)} 비동기 통신 지원 객체
 */
AJAX.prototype._createXHR = function() {
    if (util.isExisty(util.pick(window, 'XMLHttpRequest'))) {
        return new XMLHttpRequest();
    } else if (util.isExisty(util.pick(window, 'ActiveXObject'))) {
        return new ActiveXObject('Microsoft.XMLHTTP'); // jshint ignore:line
    }

    window.alert(AJAX.ERROR.NOT_SUPPORT);
};

/**
 * 타입에 따라 데이터를 추가 가공한다
 *
 * TODO: 현재는 JSON데이터만 처리중이고 필요에 따라 늘어나야 한다
 * @param {string} dataType 데이터 타입
 * @param {*} data 가공할 데이터
 * @return {*} 가공된 데이터
 */
AJAX.prototype._processRawData = function(dataType, data) {
    var result = data;
    if (dataType === 'json') {
        try {
            result = JSON.parse(data);
        } catch (e) {
            result = data;
        }
    }

    return result;
};

/**
 * XHR의 응답 데이터를 처리한다
 * @param {object} options - ajax옵션 객체
 * @param {(XMLHttpRequest|ActiveXObject)} xhr - 비동기 요청 객체
 */
AJAX.prototype._onReadyStateChange = function(options, xhr) {
    var status,
        response,
        responseHeader;

    if (xhr.readyState !== 4) {
        return;
    }

    status = xhr.status;

    if ((status >= 200 && status < 300) || status === 304) {
        response = this._processRawData(options.dataType, xhr.responseText);
        responseHeader = util.pick(response, 'header');

        if (!responseHeader) {
            options.error();
        } else if (responseHeader.isSuccessful) {
            options.success(response);
        } else {
            options.fail(response);
        }
    } else if (status !== 0) {
        options.error();
    }

    options.complete();
};


/**
 * ajax 요청을 수행한다.
 * 
 * 요청 타입에 따른 추가 데이터 처리는 따로 하지 않으므로 사전에 미리 준비해야 한다
 * 예를 들어, get요청은 QueryString으로 url을 설정해야 하고, post등의 data를 사용하
 * 는 요청은 미리 stringfy된 값을 data옵션으로 전달해야 한다.
 *
 * @param {string} url ajax요청 할 url
 * @param {Object} options 옵션
 * @param {string} [options.method='POST'] 요청 시 사용할 http methods
 * @param {boolean} [options.async=true] 비동기 요청 사용 여부
 * @param {string} [options.type='application/json; charset=utf-8'] type 헤더 값
 * @param {string} [options.contentType='application/json'] Content-Type 헤더 값
 * @param {string} [options.dataType='json'] 서버에서 응답받기 바라는 결과의 타입
 * @param {function} [optoins.success] - isSuccessful true에 대한 콜백
 * @param {function} [options.fail] - isSuccessful false 에 대한 콜백
 * @param {function} [options.error] 요청에 대한 에러 발생 시 수행할 콜백
 * @param {function} [options.complete] 요청이 끝났을 때 (성공, 실패 여부와 무관) 수행하는 콜백
 * @param {bollean} [options.cache=true] - false 일 경우 timestamp 파라미터를 url에 붙여 캐시를 무시
 */
AJAX.prototype.ajax = function(url, options) {
    var xhr,
        data,
        separator,
        defaultOptions = {
            method: 'GET',
            async: true,
            type: 'application/json; charset=utf-8',
            contentType: 'application/json',
            dataType: 'json',
            success: function() {},
            fail: function() {},
            error: function() {},
            complete: function() {},
            cache: true
        };

    options = util.extend(defaultOptions, options);
    data = util.pick(options, 'data');
    if (!options.cache) {
        separator = ~url.indexOf('?') ? '&' : '?';
        url = url + separator + '_=' + +(new Date());
    }

    xhr = this._createXHR();
    xhr.open(options.method, url, options.async);
    xhr.setRequestHeader('type', options.type);
    xhr.setRequestHeader('content-type', options.contentType);
    xhr.onreadystatechange = util.bind(this._onReadyStateChange, this, options, xhr);
    xhr.send(data ? data : null);
};

module.exports = AJAX;


}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],24:[function(require,module,exports){
(function (global){
/**
 * @fileoverview Utility module for array sort, binary search.
 * @author NHN Ent. FE Development Team <dl_javascript@nhnent.com>
 */
'use strict';

var util = global.ne.util;
var datetime = require('../datetime');

/**
 * A module for sorting array.
 * @module array
 */

/**********
 * Search
 **********/

/**
 * search item index using binary search algorithm.
 *
 * the array must be sorted.
 * @param {array} arr array to search.
 * @param {(string|number|boolean)} search value to search.
 * @param {function} [fn] iteratee for retrieve each element's value to search.
 * @param {function} [compare] compare function for specific sort status. default is string ascending.
 * @returns {number} The number of item index searched. return negative number when no exist that item.
 * It can use insert index after Math.abs()
 * @example
 *
 * var arr = [1, 3, 7, 11, 15, 23];
 *
 * function sortNumber(a, b) {
 *     return a - b;
 * }
 *
 * bsearch(arr, 15, null, sortNumber);    // 4
 * bsearch(arr, 21, null, sortNumber);    // -5
 *
 * arr.splice(Math.abs(bsearch(arr, 21, null, sortNumber)), 0, 21);
 * // [1, 2, 7, 11, 15, 21, 23]
 */
function bsearch(arr, search, fn, compare) {
    var minIndex = 0,
        maxIndex = arr.length - 1,
        currentIndex,
        value,
        comp;

    compare = compare || stringASC;

    while (minIndex <= maxIndex) {
        currentIndex = (minIndex + maxIndex) / 2 | 0;    // Math.floor
        value = fn ? fn(arr[currentIndex]) : arr[currentIndex];
        comp = compare(value, search);

        if (comp < 0) {
            minIndex = currentIndex + 1;
        } else if (comp > 0) {
            maxIndex = currentIndex - 1;
        } else {
            return currentIndex;
        }
    }

    return ~maxIndex;
}

/**********
 * Compare Functions
 **********/

/**
 * compare function for array sort.
 *
 * sort array by ascending.
 * @param {boolean} a The boolean to compare
 * @param {boolean} b The boolean to compare.
 * @returns {number} Result of comparison.
 */
function booleanASC(a, b) {
    if (a !== b) {
        return a ? -1 : 1;
    }
    return 0;
}

/**
 * compare function for array sort.
 *
 * sort array by descending.
 * @param {boolean} a The boolean to compare
 * @param {boolean} b The boolean to compare.
 * @returns {number} Result of comparison.
 */
function booleanDESC(a, b) {
    if (a !== b) {
        return a ? 1 : -1;
    }
    return 0;
}

/**
 * compare function for array sort.
 *
 * sort array by number ascending.
 * @param {number} _a The number to compare.
 * @param {number} _b The number to compare.
 * @returns {number} Result of comparison.
 */
function numberASC(_a, _b) {
    var a = +_a,
        b = +_b;

    return a - b;
}

/**
 * compare function for array sort.
 *
 * sort array by number descending.
 * @param {number} _a The number to compare.
 * @param {number} _b The number to compare.
 * @returns {number} Result of comparison.
 */
function numberDESC(_a, _b) {
    var a = +_a,
        b = +_b;

    return b - a;
}

/**
 * compare function for array sort.
 *
 * sort array by string ascending
 * @param {string} _a The string to compare.
 * @param {string} _b The string to compare.
 * @returns {number} Result of comparison.
 */
function stringASC(_a, _b) {
    var a = _a + '',
        b = _b + '';

    if (a > b) {
        return 1;
    } else if (a < b) {
        return -1;
    }

    return 0;
}

/**
 * compare function for array sort.
 *
 * sort array by string descending
 * @param {string} _a The string to compare.
 * @param {string} _b The string to compare.
 * @returns {number} Result of comparison.
 */
function stringDESC(_a, _b) {
    var a = _a + '',
        b = _b + '';

    if (a > b) {
        return -1;
    } else if (a < b) {
        return 1;
    }

    return 0;
}

/**
 * compare function for array sort.
 *
 * sort array by string ascending with ignore case.
 * @param {string} _a The string to compare.
 * @param {string} _b The string to compare.
 * @returns {number} Result of comparison.
 */
function stringASCIgnoreCase(_a, _b) {
    var a = (_a + '').toLowerCase(),
        b = (_b + '').toLowerCase();

    if (a > b) {
        return 1;
    } else if (a < b) {
        return -1;
    }

    return 0;
}

/**
 * compare function for array sort.
 *
 * sort array by string descending with ignore case.
 * @param {string} _a The string to compare.
 * @param {string} _b The string to compare.
 * @returns {number} Result of comparison.
 */
function stringDESCIgnoreCase(_a, _b) {
    var a = (_a + '').toLowerCase(),
        b = (_b + '').toLowerCase();

    if (a > b) {
        return -1;
    } else if (a < b) {
        return 1;
    }

    return 0;
}

/**
 * Compare event models for sort.
 *
 * 1. all day event first.
 * 2. early starts.
 * 3. longest duration.
 * 4. early created.
 * @param {(Event|EventViewModel)} a The object event instance.
 * @param {(Event|EventViewModel)} b The object event instance.
 * @returns {number} Result of comparison.
 */
function eventASC(a, b) {
    var durationA,
        durationB,
        allDayCompare,
        startsCompare;

    a = a.valueOf();
    b = b.valueOf();

    allDayCompare = booleanASC(a.isAllDay, b.isAllDay);

    if (allDayCompare) {
        return allDayCompare;
    }

    startsCompare = datetime.compare(a.getStarts(), b.getStarts());

    if (startsCompare) {
        return startsCompare;
    }

    durationA = a.duration().getTime();
    durationB = b.duration().getTime();

    if (durationA < durationB) {
        return 1;
    } else if (durationA > durationB) {
        return -1;
    }

    return util.stamp(a) - util.stamp(b);
}


module.exports = {
    bsearch: bsearch,
    compare: {
        event: {
            asc: eventASC
        },
        bool: {
            asc: booleanASC,
            desc: booleanDESC
        },
        num: {
            asc: numberASC,
            desc: numberDESC
        },
        str: {
            asc: stringASC,
            desc: stringDESC,
            ascIgnoreCase: stringASCIgnoreCase,
            descIgnoreCase: stringDESCIgnoreCase
        }
    }
};


}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"../datetime":37}],25:[function(require,module,exports){
(function (global){
/**
 * @fileoverview Add autoscroll feature to elements that prevented text selection.
 * @author NHN Ent. FE Development Team <dl_javascript@nhnent.com>
 */
'use strict';

var util = global.ne.util;
var domevent = require('../common/domevent');
var domutil = require('../common/domutil');
var Point = require('../common/point');

var SCROLL_INTERVAL = 30;
var SCROLL_MAX = 15;
var SCROLL_CLICK_INCREASED = 2;    // IE에서 스크롤 바 클릭 시 실제 UI pixel 보다 넓게 잡히는 현상 offset.

/**
 * Add autoscroll feature to elements that prevented text selection.
 * @constructor
 * @param {HTMLElement} container - HTMLElement to add autoscroll features.
 */
function AutoScroll(container) {
    /**
     * @type {HTMLElement}
     */
    this.container = container;

    /**
     * @type {AutoScroll.DIRECTION}
     */
    this._direction = AutoScroll.DIRECTION.INSIDE;

    /**
     * @type {number}
     */
    this._offset = 0;

    /**
     * interval to scrolling
     * @type {number}
     */
    this._intervalID = 0;

    domevent.on(container, {
        'mousedown': this._onMouseDown
    }, this);
}

/**
 * @enum
 */
AutoScroll.DIRECTION = {
    INSIDE: 0,
    TOP: 1,
    RIGHT: 2,
    BOTTOM: 3,
    LEFT: 4
};

/**
 * Instance destroy method.
 */
AutoScroll.prototype.destroy = function() {
    domevent.off(this.container, {
        'mousedown': this._onMouseDown,
        'mousemove': this._onMouseMove,
        'mouseup': this._onMouseUp
    }, this);

    window.clearInterval(this._intervalID);
    this._intervalID = this._direction = this.container = null;
};

/**
 * Normalize ClientRect and calculate each position of edges.
 * @param {ClientRect} clientRect - ClientRect object of element.
 * @returns {object} edges.
 */
AutoScroll.prototype._getEdgePositions = function(clientRect) {
    return {
        top: clientRect.top,
        right: clientRect.left + clientRect.width,
        bottom: clientRect.bottom,
        left: clientRect.left
    };
};

/**
 * Get element real size ("real size" -> size without scrollbar)
 * @param {HTMLElement} el - element want to know real size ("real size" -> size without scrollbar)
 * @returns {number[]} real size [width, height]
 */
AutoScroll.prototype.getRealSize = function(el) {
    var computed = domutil.getComputedStyle(el),
        border,
        padding;

    border = parseFloat(computed.getPropertyValue('border-top-width')) +
        parseFloat(computed.getPropertyValue('border-bottom-width'));
    padding = parseFloat(computed.getPropertyValue('padding-top')) +
        parseFloat(computed.getPropertyValue('padding-bottom'));

    return [el.clientWidth + border + padding, el.clientHeight + border + padding];
};

/**
 * Check supplied element has scrollbar.
 * @param {HTMLElement} el - element want to know has scrollbar.
 * @returns {boolean[]} has scrollbar? [horizontal, vertical]
 */
AutoScroll.prototype.hasScrollbar = function(el) {
    var realSize = this.getRealSize(el);

    return [
        el.offsetWidth > Math.ceil(realSize[0]),
        el.offsetHeight > Math.ceil(realSize[1])
    ];
};

/**
 * @param {HTMLElement} el - element want to know.
 * @param {MouseEvent} mouseEvent - mouse event object.
 * @returns {boolean} mouse pointer is on the scrollbar?
 */
AutoScroll.prototype.isOnScrollbar = function(el, mouseEvent) {
    var realSize = this.getRealSize(el),
        pos = domevent.getMousePosition(mouseEvent, el),
        mouseInScrollbar = false;

    mouseInScrollbar = (realSize[0] - SCROLL_CLICK_INCREASED < pos[0] ||
                        realSize[1] - SCROLL_CLICK_INCREASED < pos[1]);

    return mouseInScrollbar;
};

/**
 * MouseDown event handler
 * @param {MouseEvent} mouseDownEvent - mouse down event
 */
AutoScroll.prototype._onMouseDown = function(mouseDownEvent) {
    // only primary button can start drag.
    if (domevent.getMouseButton(mouseDownEvent) !== 0) {
        return;
    }

    // deactivate autoscroll feature when mouse is on the scrollbar. (IE)
    if (util.browser.msie && this.isOnScrollbar(this.container, mouseDownEvent)) {
        return;
    }

    window.clearInterval(this._intervalID);
    this._intervalID = window.setInterval(util.bind(this._onTick, this), SCROLL_INTERVAL);

    domevent.on(global, {
        'mousemove': this._onMouseMove,
        'mouseup': this._onMouseUp
    }, this);
};

/**
 * MouseMove event handler
 * @param {MouseEvent} mouseEvent - mouse move event object.
 */
AutoScroll.prototype._onMouseMove = function(mouseEvent) {
    var edge = this._getEdgePositions(this.container.getBoundingClientRect()),
        pos = Point.n(domevent.getMousePosition(mouseEvent));

    if (pos.y >= edge.top && pos.y <= edge.bottom &&
        pos.x >= edge.left && pos.x <= edge.right) {
        this._direction = AutoScroll.DIRECTION.INSIDE;
        return;
    }

    if (pos.y < edge.top) {
        this._direction = AutoScroll.DIRECTION.TOP;
        this._offset = edge.top - pos.y;
        return;
    }

    if (pos.y > edge.bottom) {
        this._direction = AutoScroll.DIRECTION.BOTTOM;
        this._offset = pos.y - edge.bottom;
        return;
    }

    if (pos.x < edge.left) {
        this._direction = AutoScroll.DIRECTION.LEFT;
        this._offset = edge.left - pos.x;
        return;
    }

    this._direction = AutoScroll.DIRECTION.RIGHT;
    this._offset = pos.x - edge.right;
    return;
};

/**
 * MouseUp event handler.
 */
AutoScroll.prototype._onMouseUp = function() {
    window.clearInterval(this._intervalID);
    this._intervalID = 0;
    this._direction = AutoScroll.DIRECTION.INSIDE;
    this._offset = 0;

    domevent.off(global, {
        'mousemove': this._onMouseMove,
        'mouseup': this._onMouseUp
    }, this);
};

/**
 * Interval tick event handler
 */
AutoScroll.prototype._onTick = function() {
    var direction = this._direction,
        container,
        factor;

    if (!direction) {
        return;
    }

    container = this.container;
    factor = Math.min(this._offset, SCROLL_MAX);

    switch (direction) {
        case AutoScroll.DIRECTION.TOP:
            container.scrollTop -= factor;
            break;
        case AutoScroll.DIRECTION.RIGHT:
            container.scrollLeft += factor;
            break;
        case AutoScroll.DIRECTION.BOTTOM:
            container.scrollTop += factor;
            break;
        default:
            container.scrollLeft -= factor;
            break;
    }
};

module.exports = AutoScroll;


}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"../common/domevent":29,"../common/domutil":30,"../common/point":32}],26:[function(require,module,exports){
(function (global){
/**
 * @fileoverview Common collections.
 * @author NHN Ent. FE Development Team <dl_javascript@nhnent.com>
 */
'use strict';

var util = global.ne.util,
    forEachProp = util.forEachOwnProperties,
    forEachArr = util.forEachArray,
    isFunc = util.isFunction,
    isObj = util.isObject;

var aps = Array.prototype.slice;

/**
 * Common collection.
 *
 * It need function for get model's unique id.
 *
 * if the function is not supplied then it use default function {@link Collection#getItemID}
 * @constructor
 * @param {function} [getItemIDFn] function for get model's id.
 */
function Collection(getItemIDFn) {
    /**
     * @type {object.<string, *>}
     */
    this.items = {};

    /**
     * @type {number}
     */
    this.length = 0;

    if (isFunc(getItemIDFn)) {
        /**
         * @type {function}
         */
        this.getItemID = getItemIDFn;
    }
}

/**********
 * static props
 **********/

Collection.filter = {
    /**
     * return AND operate all of function's return value
     * @param {array} arr filters
     * @param {...*} [params] support filter parameters
     * @return {boolean} AND operated value
     */
    and: function(arr, params) {    // eslint-disable-line
        var args = aps.call(arguments, 1),
            i = 0,
            cnt = arr.length;

        for (; i < cnt; i += 1) {
            if (!arr[i].apply(null, args)) {
                return false;
            }
        }

        return true;
    },

    /**
     * return OR operate all of function's return value
     * @param {array} arr filters
     * @param {...*} [params] support filter parameters
     * @return {boolean} OR operated value
     */
    or: function(arr, params) {    // eslint-disable-line
        var args = aps.call(arguments, 1),
            tmp,
            result;

        forEachArr(arr, function(filter) {
            tmp = filter.apply(null, args);

            if (util.isUndefined(result)) {
                result = tmp;
            }

            result = (result || tmp);
        });

        return result;
    }
};

/**
 * Merge several collections.
 *
 * You can\'t merge collections different _getEventID functions. Take case of use.
 * @param {...Collection} collections collection arguments to merge
 * @returns {Collection} merged collection.
 */
Collection.merge = function(collections) {    // eslint-disable-line
    var cols = aps.call(arguments),
        newItems = {},
        length = 0,
        merged = new Collection(cols[0].getItemID),
        extend = util.extend;

    forEachArr(cols, function(col) {
        extend(newItems, col.items);
        length += col.length;
    });

    merged.items = newItems;
    merged.length = length;

    return merged;
};

/**********
 * prototype props
 **********/

/**
 * get model's unique id.
 * @param {object} item model instance.
 * @returns {number} model unique id.
 */
Collection.prototype.getItemID = function(item) {
    return item._id + '';
};

/**
 * add models.
 * @param {...*} item models to add this collection.
 */
Collection.prototype.add = function(item) {
    var id,
        ownItems;

    if (arguments.length > 1) {
        forEachArr(aps.call(arguments), function(o) {
            this.add(o);
        }, this);

        return;
    }

    id = this.getItemID(item);
    ownItems = this.items;

    if (!ownItems[id]) {
        this.length += 1;
    }
    ownItems[id] = item;
};

/**
 * remove models.
 * @param {...(object|string|number)} id model instance or unique id to delete.
 * @returns {array} deleted model list.
 */
Collection.prototype.remove = function(id) {
    var removed = [],
        ownItems,
        itemToRemove;

    if (!this.length) {
        return removed;
    }

    if (arguments.length > 1) {
        removed = util.map(aps.call(arguments), function(id) {
            return this.remove(id);
        }, this);

        return removed;
    }

    ownItems = this.items;

    if (isObj(id)) {
        id = this.getItemID(id);
    }

    if (!ownItems[id]) {
        return removed;
    }

    this.length -= 1;
    itemToRemove = ownItems[id];
    delete ownItems[id];

    return itemToRemove;
};

/**
 * remove all models in collection.
 */
Collection.prototype.clear = function() {
    this.items = {};
    this.length = 0;
};

/**
 * check collection has specific model.
 * @param {(object|string|number|function)} id model instance or id or filter function to check
 * @returns {boolean} is has model?
 */
Collection.prototype.has = function(id) {
    var isFilter,
        has;

    if (!this.length) {
        return false;
    }

    isFilter = isFunc(id);
    has = false;

    if (isFilter) {
        this.each(function(item) {
            if (id(item) === true) {
                has = true;
                return false;
            }
        });
    } else {
        id = isObj(id) ? this.getItemID(id) : id;
        has = util.isExisty(this.items[id]);
    }

    return has;
};

/**
 * invoke callback when model exist in collection.
 * @param {(string|number)} id model unique id.
 * @param {function} fn the callback.
 * @param {*} [context] callback context.
 */
Collection.prototype.doWhenHas = function(id, fn, context) {
    var item = this.items[id];

    if (!util.isExisty(item)) {
        return;
    }

    fn.call(context || this, item);
};

/**
 * Search model. and return new collection.
 * @param {function} filter filter function.
 * @returns {Collection} new collection with filtered models.
 * @example
 * collection.find(function(item) {
 *     return item.edited === true;
 * });
 *
 * function filter1(item) {
 *     return item.edited === false;
 * }
 *
 * function filter2(item) {
 *     return item.disabled === false;
 * }
 *
 * collection.find(function(item) {
 *     return Collection.filter.and([filter1, filter2], item);
 * });
 *
 * collection.find(function(item) {
 *     return Collection.filter.or([filter1, filter2], item);
 * });
 */
Collection.prototype.find = function(filter) {
    var result = new Collection();

    if (this.hasOwnProperty('getItemID')) {
        result.getItemID = this.getItemID;
    }

    this.each(function(item) {
        if (filter(item) === true) {
            result.add(item);
        }
    });

    return result;
};

/**
 * Group element by specific key values.
 *
 * if key parameter is function then invoke it and use returned value.
 * @param {(string|number|boolean|function)} key key property or getter function.
 * @returns {object.<string, Collection>} grouped object
 * @example
 * collection.groupBy(function(person) {
 *     if (person.age > 19) {
 *         return 'adult';
 *     }
 *
 *     return 'youth';
 * });
 *
 * // result {'adult': Collection, 'youth': Collection}
 *
 *
 * // Assume this list in collection.
 * [{
 *     age: 21,
 *     getAge: function() {return this.age;}
 *  }, {
 *     age: 15,
 *     getAge: function() {return this.age;}
 * }]
 *
 * collection.groupBy('getAge');
 *
 * // result {'21': Collection, '15': Collection}
 */
Collection.prototype.groupBy = function(key) {
    var result = {},
        collection,
        baseValue,
        isFunc = util.isFunction,
        keyIsFunc = isFunc(key);

    this.each(function(item) {
        if (keyIsFunc) {
            baseValue = key(item);
        } else {
            baseValue = item[key];

            if (isFunc(baseValue)) {
                baseValue = baseValue.apply(item);
            }
        }

        collection = result[baseValue];

        if (!collection) {
            collection = result[baseValue] = new Collection(this.getItemID);
        }

        collection.add(item);
    }, this);

    return result;
};

/**
 * Return single item in collection.
 *
 * Returned item is inserted in this collection firstly.
 * @returns {object} item.
 */
Collection.prototype.single = function() {
    var result;

    this.each(function(item) {
        result = item;
        return false;
    }, this);

    return result;
};

/**
 * sort a basis of supplied compare function.
 * @param {function} compareFunction compareFunction
 * @returns {array} sorted array.
 */
Collection.prototype.sort = function(compareFunction) {
    var arr = [];

    this.each(function(item) {
        arr.push(item);
    });

    if (isFunc(compareFunction)) {
        arr = arr.sort(compareFunction);
    }

    return arr;
};

/**
 * iterate each model element.
 *
 * when iteratee return false then break the loop.
 * @param {function} iteratee iteratee(item, index, items)
 * @param {*} [context] context
 */
Collection.prototype.each = function(iteratee, context) {
    forEachProp(this.items, iteratee, context || this);
};

/**
 * return new array with collection items.
 * @returns {array} new array.
 */
Collection.prototype.toArray = function() {
    if (!this.length) {
        return [];
    }

    return util.map(this.items, function(item) {
        return item;
    });
};

module.exports = Collection;


}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],27:[function(require,module,exports){
(function (global){
/**
 * @fileoverview common/general utilities.
 * @author NHN Ent. FE Development Team <dl_javascript@nhnent.com>
 */
'use strict';

var util = global.ne.util;
var Collection = require('../common/collection');
var aps = Array.prototype.slice;

function eventIDGetter(event) {
    return event.id();
}

module.exports = {
    /**
     * @param {...*} initItems - items to add newly created collection.
     * @returns {Collection} new collection for event models.
     */
    createEventCollection: function(initItems) {    // eslint-disable-line
        var collection = new Collection(eventIDGetter);

        if (arguments.length) {
            collection.add.apply(collection, arguments);
        }

        return collection;
    },

    /**
     * Get ratio value.
     *
     * a : b = y : X;
     *
     * =
     *
     * X = (b * y) / a;
     * @param {number} a - a
     * @param {number} b - b
     * @param {number} y - y
     * @returns {number} ratio value
     */
    ratio: function(a, b, y) {
        // a : b = y : x;
        return (b * y) / a;
    },

    /**
     * Find nearest value from supplied params.
     * @param {number} value - value to find.
     * @param {array} nearest - nearest array.
     * @returns {number} nearest value
     */
    nearest: function(value, nearest) {
        var diff = util.map(nearest, function(v) {
                return Math.abs(value - v);
            }),
            nearestIndex = util.inArray(Math.min.apply(null, diff), diff);

        return nearest[nearestIndex];
    },

    /**
     * pick value from object then return utility object to treat it.
     * @param {object} obj - object to search supplied path property.
     * @param {...string} paths - rest parameter that string value to search property in object.
     * @returns {object} pick object.
     */
    pick2: function(obj, paths) {    // eslint-disable-line
        var result = util.pick.apply(null, arguments),
            pick;

        pick = {
            /**
             * @returns {*} picked value.
             */
            val: function() {
                return result;
            },

            /**
             * invoke supplied function in picked object.
             *
             * the callback context is set picked object.
             * @param {string|function} fn - function to invoke in picked object.
             * @returns {*} result of invoke.
             */
            then: function(fn) {
                var args;

                if (!result) {
                    return undefined;    //eslint-disable-line
                }

                args = aps.call(arguments, 1);

                if (util.isString(fn)) {
                    return (util.pick(result, fn) || function() {}).apply(result, args);
                }

                return fn.call(result, result);
            }
        };

        return pick;
    },

    /**
     * Mixin method.
     *
     * (extend methods except property name 'mixin')
     * @param {object} from - mixin object.
     * @param {object} to - object to mixin.
     */
    mixin: function(from, to) {
        util.extend(to.prototype, from);
    }
};


}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"../common/collection":26}],28:[function(require,module,exports){
/**
 * @fileoverview Dirty flagging module for objects.
 * @author NHN Ent. FE Development Team <dl_javascript@nhnent.com>
 */
'use strict';

var common = ne.util,
    existy = common.isExisty,
    pick = common.pick,
    isFunc = common.isFunction;

/**
 * Mixin module for dirty flagging on specific objects.
 * @mixin
 * @example
 * var obj = { hello: 'good', test: '123' };
 * dirty.mixin(obj);
 *
 * obj.set('hello', 'world');
 * obj.isDirty();    // true
 * obj.isPropChanged('hello');    // true
 * obj.isPropChanged('test');    // false
 * obj.dirty(false);
 *
 * obj.isDirty();    // false
 * obj.isPropChanged('hello');    // false
 */
var dirty = {
    /**
     * Set property value with dirty flagging.
     * @param {string} propName Property name.
     * @param {*} value Proprty value.
     */
    set: function(propName, value) {
        var originValue = this[propName];

        if (originValue === value) {
            return;
        }

        this[propName] = value;

        if (!this._changed) {
            /**
             * Save changed properties.
             * @memberof dirty
             * @name _changed
             * @type {Object}
             */
            this._changed = {};
        }

        this._changed[propName] = true;

        /**
         * Dirty flag
         * @type {Boolean}
         * @name _dirty
         * @memberof dirty
         */
        this._dirty = true;
    },

    /**
     * Check dirty flag.
     * @returns {boolean} Property is changed.
     */
    isDirty: function() {
        return !!this._dirty;
    },

    /**
     * Set dirty flag manually.
     * @param {Boolean} [toDirty=true] This will set dirty flag directly.
     */
    dirty: function(toDirty) {
        toDirty = existy(toDirty) ? toDirty : true;

        /* istanbul ignore else */
        if (!toDirty) {
            this._changed = {};
        }

        this._dirty = toDirty;
    },

    /**
     * Delete property safety.
     * @param {String} propName The name of property.
     */
    deleteProp: function(propName) {
        delete this[propName];

        if (this._changed) {
            delete this._changed[propName];
        }
    },

    /**
     * Check the changes with specific property.
     * @param {String} propName The name of property you want.
     * @returns {boolean} Is property changed?
     */
    isPropChanged: function(propName) {
        if (!this._changed) {
            return false;
        }

        return this._changed[propName] === true;
    },

    /**
     * Mixin to specific objects.
     * @param {Object} target The object to mix this module.
     * @memberof module:util/dirty
     * @example
     * function Animal() {}
     * dirty.mixin(Animal.prototype);
     */
    mixin: function(target) {
        var methodFilterR = /(^_|mixin|wrap)/;

        common.forEachOwnProperties(dirty, function(o, k) {
            if (!methodFilterR.test(k)) {
                target[k] = dirty[k];
            }
        });
    },

    /**
     * Wrapper method for dirty flagging.
     *
     * This method invoke after invoked specific method that added by you.
     *
     * The method want to add are must exist before add.
     * @param {object} target Target object to method wrap.
     * @param {(string|object)} methodName
     *  Method name to wrap or methodName: flag objects.
     * @param {boolean} [flag=true]
     *  this will used to flagging by dirty flagger after invoke the methods added by you.
     * @memberof module:util/dirty
     * @example
     * function Animal(name) {
     *     this.name = name;
     * }
     * Animal.prototype.growl = jasmine.createSpy('growl');
     * Animal.prototype.test = function() {
     *     return this.name;
     * };
     *
     * dirty.mixin(Animal.prototype);
     * // single
     * dirty.wrap(Animal.prototype, 'growl', true);
     * // multiple
     * dirty.wrap(Animap.prototype, {
     *     growl: true,
     *     test: false
     * });
     *
     */
    wrap: function(target, methodName, flag) {
        var wrap = dirty.wrap,
            fn;

        if (common.isObject(methodName)) {
            common.forEachOwnProperties(methodName, function(flag, methodName) {
                wrap(target, methodName, flag);
            });
            return;
        }

        flag = existy(flag) ? flag : true;

        if (!target._wrapper) {
            /**
             * @param {function} fn Original method to wrap.
             * @param {boolean} flagToSet The boolean value to using dirty flagging.
             * @returns {*} The result value of original method.
             * @name _wrapper
             * @memberof dirty
             */
            target._wrapper = function(fn, flagToSet) {
                return function() {
                    var args = Array.prototype.slice.call(arguments);
                    var result = fn.apply(this, args);
                    this._dirty = flagToSet;
                    return result;
                };
            };
        }

        if (existy(pick(target, methodName)) &&
            isFunc(target[methodName]) &&
            !existy(pick(target, methodName, '_wrapped'))) {
            fn = target[methodName];
            target[methodName] = target._wrapper(fn, flag);
            target[methodName]._wrapped = true;
        }
    }
};

module.exports = dirty;


},{}],29:[function(require,module,exports){
(function (global){
/**
 * @fileoverview Utility module for handling DOM events.
 * @author NHN Ent. FE Development Team <dl_javascript@nhnent.com>
 */
'use strict';

var util = global.ne.util,
    browser = util.browser,
    eventKey = '_evt',
    DRAG = {
        START: ['touchstart', 'mousedown'],
        END: {
            mousedown: 'mouseup',
            touchstart: 'touchend',
            pointerdown: 'touchend',
            MSPointerDown: 'touchend'
        },
        MOVE: {
            mousedown: 'mousemove',
            touchstart: 'touchmove',
            pointerdown: 'touchmove',
            MSPointerDown: 'touchmove'
        }
    };

var domevent = {
    /**
     * Bind dom events.
     * @param {HTMLElement} obj HTMLElement to bind events.
     * @param {(string|object)} types Space splitted events names or eventName:handler object.
     * @param {*} fn handler function or context for handler method.
     * @param {*} [context] context object for handler method.
     */
    on: function(obj, types, fn, context) {
        if (util.isString(types)) {
            util.forEach(types.split(' '), function(type) {
                domevent._on(obj, type, fn, context);
            });

            return;
        }

        util.forEachOwnProperties(types, function(handler, type) {
            domevent._on(obj, type, handler, fn);
        });
    },

    /**
     * DOM event binding.
     * @param {HTMLElement} obj HTMLElement to bind events.
     * @param {String} type The name of events.
     * @param {*} fn handler function
     * @param {*} [context] context object for handler method.
     * @private
     */
    _on: function(obj, type, fn, context) {
        var id,
            handler,
            originHandler;

        id = type + util.stamp(fn) + (context ? '_' + util.stamp(context) : '');

        if (obj[eventKey] && obj[eventKey][id]) {
            return;
        }

        handler = function(e) {
            fn.call(context || obj, e || window.event);
        };

        originHandler = handler;

        if ('addEventListener' in obj) {
            if (type === 'mouseenter' || type === 'mouseleave') {
                handler = function(e) {
                    e = e || window.event;
                    if (!domevent._checkMouse(obj, e)) {
                        return;
                    }
                    originHandler(e);
                };
                obj.addEventListener((type === 'mouseenter') ?
                    'mouseover' : 'mouseout', handler, false);
            } else {
                if (type === 'mousewheel') {
                    obj.addEventListener('DOMMouseScroll', handler, false);
                }

                obj.addEventListener(type, handler, false);
            }
        } else if ('attachEvent' in obj) {
            obj.attachEvent('on' + type, handler);
        }

        obj[eventKey] = obj[eventKey] || {};
        obj[eventKey][id] = handler;
    },

    /**
     * Unbind DOM Event handler.
     * @param {HTMLElement} obj HTMLElement to unbind.
     * @param {(string|object)} types Space splitted events names or eventName:handler object.
     * @param {*} fn handler function or context for handler method.
     * @param {*} [context] context object for handler method.
     */
    off: function(obj, types, fn, context) {
        if (util.isString(types)) {
            util.forEach(types.split(' '), function(type) {
                domevent._off(obj, type, fn, context);
            });

            return;
        }

        util.forEachOwnProperties(types, function(handler, type) {
            domevent._off(obj, type, handler, fn);
        });
    },

    /**
     * Unbind DOM event handler.
     * @param {HTMLElement} obj HTMLElement to unbind.
     * @param {String} type The name of event to unbind.
     * @param {function()} fn Event handler that supplied when binding.
     * @param {*} context context object that supplied when binding.
     * @private
     */
    _off: function(obj, type, fn, context) {
        var id = type + util.stamp(fn) + (context ? '_' + util.stamp(context) : ''),
            handler = obj[eventKey] && obj[eventKey][id];

        if (!handler) {
            return;
        }

        if ('removeEventListener' in obj) {
            if (type === 'mouseenter' || type === 'mouseleave') {
                obj.removeEventListener((type === 'mouseenter') ?
                    'mouseover' : 'mouseout', handler, false);
            } else {
                if (type === 'mousewheel') {
                    obj.removeEventListener('DOMMouseScroll', handler, false);
                }

                obj.removeEventListener(type, handler, false);
            }
        } else if ('detachEvent' in obj) {
            try {
                obj.detachEvent('on' + type, handler);
            } catch (e) {}    //eslint-disable-line
        }

        delete obj[eventKey][id];

        if (util.keys(obj[eventKey]).length) {
            return;
        }

        delete obj[eventKey];
    },

    /**
     * Bind DOM event. this event will unbind after invokes.
     * @param {HTMLElement} obj HTMLElement to bind events.
     * @param {(string|object)} types Space splitted events names or eventName:handler object.
     * @param {*} fn handler function or context for handler method.
     * @param {*} [context] context object for handler method.
     */
    once: function(obj, types, fn, context) {
        var that = this;

        if (util.isObject(types)) {
            util.forEachOwnProperties(types, function(handler, type) {
                domevent.once(obj, type, handler, fn);
            });
            return;
        }

        function onceHandler() {
            fn.apply(context || obj, arguments);
            that._off(obj, types, onceHandler, context);
        }

        domevent.on(obj, types, onceHandler, context);
    },

    /**
     * Cancel event bubbling.
     * @param {Event} e Event object.
     */
    stopPropagation: function(e) {
        if (e.stopPropagation) {
            e.stopPropagation();
        } else {
            e.cancelBubble = true;
        }
    },

    /**
     * Cancel browser default actions.
     * @param {Event} e Event object.
     */
    preventDefault: function(e) {
        if (e.preventDefault) {
            e.preventDefault();
        } else {
            e.returnValue = false;
        }
    },

    /**
     * Syntatic sugar of stopPropagation and preventDefault
     * @param {Event} e Event object.
     */
    stop: function(e) {
        domevent.preventDefault(e);
        domevent.stopPropagation(e);
    },

    /**
     * Stop scroll events.
     * @param {HTMLElement} el HTML element to prevent scroll.
     */
    disableScrollPropagation: function(el) {
        domevent.on(el, 'mousewheel MozMousePixelScroll', domevent.stopPropagation);
    },

    /**
     * Stop all events related with click.
     * @param {HTMLElement} el HTML element to prevent all event related with click.
     */
    disableClickPropagation: function(el) {
        domevent.on(el, DRAG.START.join(' ') + ' click dblclick', domevent.stopPropagation);
    },

    /**
     * Get mouse position from mouse event.
     *
     * If supplied relatveElement parameter then return relative position based on element.
     * @param {Event} mouseEvent Mouse event object
     * @param {HTMLElement} relativeElement HTML element that calculate relative position.
     * @returns {number[]} mouse position.
     */
    getMousePosition: function(mouseEvent, relativeElement) {
        var rect;

        if (!relativeElement) {
            return [mouseEvent.clientX, mouseEvent.clientY];
        }

        rect = relativeElement.getBoundingClientRect();

        return [
            mouseEvent.clientX - rect.left - relativeElement.clientLeft,
            mouseEvent.clientY - rect.top - relativeElement.clientTop
        ];
    },

    /**
     * Normalize mouse wheel event that different each browsers.
     * @param {MouseEvent} e Mouse wheel event.
     * @returns {Number} delta
     */
    getWheelDelta: function(e) {
        var delta = 0;

        if (e.wheelDelta) {
            delta = e.wheelDelta / 120;
        }

        if (e.detail) {
            delta = -e.detail / 3;
        }

        return delta;
    },

    /**
     * prevent firing mouseleave event when mouse entered child elements.
     * @param {HTMLElement} el HTML element
     * @param {MouseEvent} e Mouse event
     * @returns {Boolean} leave?
     * @private
     */
    _checkMouse: function(el, e) {
        var related = e.relatedTarget;

        if (!related) {
            return true;
        }

        try {
            while (related && (related !== el)) {
                related = related.parentNode;
            }
        } catch (err) {
            return false;
        }

        return (related !== el);
    },

    /**
     * Trigger specific events to html element.
     * @param {HTMLElement} obj HTMLElement
     * @param {string} type Event type name
     * @param {object} [eventData] Event data
     */
    trigger: function(obj, type, eventData) {
        var rMouseEvent = /(mouse|click)/;
        if (util.isUndefined(eventData) && rMouseEvent.exec(type)) {
            eventData = domevent.mouseEvent(type);
        }

        if (obj.dispatchEvent) {
            obj.dispatchEvent(eventData);
        } else if (obj.fireEvent) {
            obj.fireEvent('on' + type, eventData);
        }
    },

    /**
     * Create virtual mouse event.
     *
     * Tested at
     *
     * - IE7 ~ IE11
     * - Chrome
     * - Firefox
     * - Safari
     * @param {string} type Event type
     * @param {object} [eventObj] Event data
     * @returns {MouseEvent} Virtual mouse event.
     */
    mouseEvent: function(type, eventObj) {
        var evt,
            e;

        e = util.extend({
            bubbles: true,
            cancelable: (type !== 'mousemove'),
            view: window,
            wheelDelta: 0,
            detail: 0,
            screenX: 0,
            screenY: 0,
            clientX: 0,
            clientY: 0,
            ctrlKey: false,
            altKey: false,
            shiftKey: false,
            metaKey: false,
            button: 0,
            relatedTarget: undefined  // eslint-disable-line
        }, eventObj);

        // prevent throw error when inserting wheelDelta property to mouse event on below IE8
        if (browser.msie && browser.version < 9) {
            delete e.wheelDelta;
        }

        if (typeof document.createEvent === 'function') {
            evt = document.createEvent('MouseEvents');
            evt.initMouseEvent(type,
                e.bubbles, e.cancelable, e.view, e.detail,
                e.screenX, e.screenY, e.clientX, e.clientY,
                e.ctrlKey, e.altKey, e.shiftKey, e.metaKey,
                e.button, document.body.parentNode
            );
        } else if (document.createEventObject) {
            evt = document.createEventObject();

            util.forEach(e, function(value, propName) {
                evt[propName] = value;
            }, this);
            evt.button = {0: 1, 1: 4, 2: 2}[evt.button] || evt.button;
        }
        return evt;
    },

    /**
     * Normalize mouse event's button attributes.
     *
     * Can detect which button is clicked by this method.
     *
     * Meaning of return numbers
     *
     * - 0: primary mouse button
     * - 1: wheel button or center button
     * - 2: secondary mouse button
     * @param {MouseEvent} mouseEvent - The mouse event object want to know.
     * @returns {number} - The value of meaning which button is clicked?
     */
    getMouseButton: function(mouseEvent) {
        var button,
            primary = '0,1,3,5,7',
            secondary = '2,6',
            wheel = '4';

        /* istanbul ignore else */
        if (document.implementation.hasFeature('MouseEvents', '2.0')) {
            return mouseEvent.button;
        }

        button = mouseEvent.button + '';
        if (~primary.indexOf(button)) {
            return 0;
        } else if (~secondary.indexOf(button)) {
            return 2;
        } else if (~wheel.indexOf(button)) {
            return 1;
        }
    }
};

module.exports = domevent;


}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],30:[function(require,module,exports){
(function (global){
/**
 * @fileoverview Utility modules for manipulate DOM elements.
 * @author NHN Ent. FE Development Team <dl_javascript@nhnent.com>
 */
'use strict';

var domevent = require('./domevent');

var util = global.ne.util,
    posKey = '_pos',
    domutil;

var CSS_AUTO_REGEX = /^auto$|^$|%/;

function trim(str) {
    return str.replace(/^\s\s*/, '').replace(/\s\s*$/, '');
}

domutil = {
    /**
     * Create DOM element and return it.
     * @param {string} tagName Tag name to append.
     * @param {HTMLElement} [container] HTML element will be parent to created element.
     * if not supplied, will use **document.body**
     * @param {string} [className] Design class names to appling created element.
     * @returns {HTMLElement} HTML element created.
     */
    appendHTMLElement: function(tagName, container, className) {
        var el;

        className = className || '';

        el = document.createElement(tagName);
        el.className = className;

        if (container) {
            container.appendChild(el);
        } else {
            document.body.appendChild(el);
        }

        return el;
    },

    /**
     * Remove element from parent node.
     * @param {HTMLElement} el - element to remove.
     */
    remove: function(el) {
        if (el && el.parentNode) {
            el.parentNode.removeChild(el);
        }
    },

    /**
     * Get element by id
     * @param {string} id element id attribute
     * @returns {HTMLElement} element
     */
    get: function(id) {
        return document.getElementById(id);
    },

    /**
     * Check supplied element is matched selector.
     * @param {HTMLElement} el - element to check
     * @param {string} selector - selector string to check
     * @return {boolean} match?
     */
    _matcher: function(el, selector) {
        var cssClassSelector = /^\./,
            idSelector = /^#/;

        if (cssClassSelector.test(selector)) {
            return domutil.hasClass(el, selector.replace('.', ''));
        } else if (idSelector.test(selector)) {
            return el.id === selector.replace('#', '');
        }

        return el.nodeName.toLowerCase() === selector.toLowerCase();
    },

    /**
     * Find DOM element by specific selectors.
     * below three selector only supported.
     *
     * 1. css selector
     * 2. id selector
     * 3. nodeName selector
     * @param {string} selector selector
     * @param {(HTMLElement|string)} [root] You can assign root element to find. if not supplied, document.body will use.
     * @returns {HTMLElement} HTML element finded.
     */
    find: function(selector, root) {
        var target = null;

        if (typeof root === 'string') {
            root = domutil.get(root);
        }

        if (!root) {
            root = window.document.body;
        }

        /**
         * Find element recursively
         * @param {HTMLElement} el root element
         * @param {string} selector selector
         */
        function findRecursive(el, selector) {
            var childNodes = el.childNodes,
                i,
                len,
                child;

            for (i = 0, len = childNodes.length; i < len; i += 1) {
                child = childNodes[i];

                if (child.nodeName === '#text') {
                    continue;
                }

                if (domutil._matcher(child, selector)) {
                    target = child;
                    return;
                } else if (child.childNodes.length > 0) {
                    findRecursive(child, selector);
                }
            }
        }

        findRecursive(root, selector);

        return target;
    },

    /**
     * Find parent element recursively.
     * @param {HTMLElement} el - base element to start find.
     * @param {string} selector - selector string for find
     * @returns {HTMLElement} - element finded or undefined.
     */
    closest: function(el, selector) {
        var parent = el.parentNode;

        if (domutil._matcher(el, selector)) {
            return el;
        }

        while (parent && parent !== window.document.body) {
            if (domutil._matcher(parent, selector)) {
                return parent;
            }

            parent = parent.parentNode;
        }
    },

    /**
     * Return texts inside element.
     * @param {HTMLElement} el target element
     * @return {string} text inside node
     */
    text: function(el) {
        var ret = '',
            i = 0,
            nodeType = el.nodeType;

        if (nodeType) {
            if (nodeType === 1 || nodeType === 9 || nodeType === 11) {
                // nodes that available contain other nodes
                if (typeof el.textContent === 'string') {
                    return el.textContent;
                }

                for (el = el.firstChild; el; el = el.nextSibling) {
                    ret += domutil.text(el);
                }
            } else if (nodeType === 3 || nodeType === 4) {
                // TEXT, CDATA SECTION
                return el.nodeValue;
            }
        } else {
            for (; el[i]; i += 1) {
                ret += domutil.text(el[i]);
            }
        }
        return ret;
    },

    setData: function(el, key, data) {
        if ('dataset' in el) {
            el.dataset[key] = data;
            return;
        }

        el.setAttribute('data-' + key, data);
    },

    getData: function(el, key) {
        if ('dataset' in el) {
            return el.dataset[key];
        }

        return el.getAttribute('data-' + key);
    },

    /**
     * Check element has specific design class name.
     * @param {HTMLElement} el target element
     * @param {string} name css class
     * @returns {boolean} return true when element has that css class name
     */
    hasClass: function(el, name) {
        var className;

        if (!util.isUndefined(el.classList)) {
            return el.classList.contains(name);
        }

        className = domutil.getClass(el);

        return className.length > 0 && new RegExp('(^|\\s)' + name + '(\\s|$)').test(className);
    },

    /**
     * Add design class to HTML element.
     * @param {HTMLElement} el target element
     * @param {string} name css class name
     */
    addClass: function(el, name) {
        var className;

        if (!util.isUndefined(el.classList)) {
            util.forEachArray(name.split(' '), function(value) {
                el.classList.add(value);
            });
        } else if (!domutil.hasClass(el, name)) {
            className = domutil.getClass(el);
            domutil.setClass(el, (className ? className + ' ' : '') + name);
        }
    },

    /**
     *
     * Overwrite design class to HTML element.
     * @param {HTMLElement} el target element
     * @param {string} name css class name
     */
    setClass: function(el, name) {
        if (util.isUndefined(el.className.baseVal)) {
            el.className = name;
        } else {
            el.className.baseVal = name;
        }
    },

    /**
     * Element에 cssClass속성을 제거하는 메서드
     * Remove specific design class from HTML element.
     * @param {HTMLElement} el target element
     * @param {string} name class name to remove
     */
    removeClass: function(el, name) {
        var removed = '';

        if (!util.isUndefined(el.classList)) {
            el.classList.remove(name);
        } else {
            removed = (' ' + domutil.getClass(el) + ' ').replace(' ' + name + ' ', ' ');
            domutil.setClass(el, trim(removed));
        }
    },

    /**
     * Get HTML element's design classes.
     * @param {HTMLElement} el target element
     * @returns {string} element css class name
     */
    getClass: function(el) {
        if (!el || !el.className) {
            return '';
        }

        return util.isUndefined(el.className.baseVal) ? el.className : el.className.baseVal;
    },

    /**
     * Get specific CSS style value from HTML element.
     * @param {HTMLElement} el target element
     * @param {string} style css attribute name
     * @returns {(string|null)} css style value
     */
    getStyle: function(el, style) {
        var value = el.style[style] || (el.currentStyle && el.currentStyle[style]),
            css;

        if ((!value || value === 'auto') && document.defaultView) {
            css = document.defaultView.getComputedStyle(el, null);
            value = css ? css[style] : null;
        }

        return value === 'auto' ? null : value;
    },

    /**
     * get element's computed style values.
     *
     * in lower IE8. use polyfill function that return object. it has only one function 'getPropertyValue'
     * @param {HTMLElement} el - element want to get style.
     * @returns {object} virtual CSSStyleDeclaration object.
     */
    getComputedStyle: function(el) {
        var defaultView = document.defaultView;

        if (!defaultView || !defaultView.getComputedStyle) {
            return {
                getPropertyValue: function(prop) {
                    var re = /(\-([a-z]){1})/g;
                    if (prop === 'float') {
                        prop = 'styleFloat';
                    }

                    if (re.test(prop)) {
                        prop = prop.replace(re, function () {
                            return arguments[2].toUpperCase();
                        });
                    }

                    return el.currentStyle[prop] ? el.currentStyle[prop] : null;
                }
            };
        }

        return document.defaultView.getComputedStyle(el);
    },

    /**
     * Set position CSS style.
     * @param {HTMLElement} el target element
     * @param {number} [x=0] left pixel value.
     * @param {number} [y=0] top pixel value.
     */
    setPosition: function(el, x, y) {
        x = util.isUndefined(x) ? 0 : x;
        y = util.isUndefined(y) ? 0 : y;

        el[posKey] = [x, y];

        el.style.left = x + 'px';
        el.style.top = y + 'px';
    },

    /**
     * Get position from HTML element.
     * @param {HTMLElement} el target element
     * @param {boolean} [clear=false] clear cache before calculating position.
     * @returns {number[]} point
     */
    getPosition: function(el, clear) {
        var left,
            top,
            bound;

        if (clear) {
            el[posKey] = null;
        }

        if (el[posKey]) {
            return el[posKey];
        }

        left = 0;
        top = 0;

        if ((CSS_AUTO_REGEX.test(el.style.left) || CSS_AUTO_REGEX.test(el.style.top)) &&
            'getBoundingClientRect' in el) {
            // 엘리먼트의 left또는 top이 'auto'일 때 수단
            bound = el.getBoundingClientRect();

            left = bound.left;
            top = bound.top;
        } else {
            left = parseFloat(el.style.left || 0);
            top = parseFloat(el.style.top || 0);
        }

        return [left, top];
    },

    /**
     * Return element's size
     * @param {HTMLElement} el target element
     * @return {number[]} width, height
     */
    getSize: function(el) {
        var bound,
            width = domutil.getStyle(el, 'width'),
            height = domutil.getStyle(el, 'height');

        if ((CSS_AUTO_REGEX.test(width) || CSS_AUTO_REGEX.test(height)) &&
            'getBoundingClientRect' in el) {
            bound = el.getBoundingClientRect();
            width = bound.width;
            height = bound.height;
        } else {
            width = parseFloat(width || 0);
            height = parseFloat(height || 0);
        }

        return [width, height];
    },

    /**
     * Check specific CSS style is available.
     * @param {array} props property name to testing
     * @return {(string|boolean)} return true when property is available
     * @example
     * var props = ['transform', '-webkit-transform'];
     * domutil.testProp(props);    // 'transform'
     */
    testProp: function(props) {
        var style = document.documentElement.style,
            i = 0,
            len = props.length;

        for (; i < len; i += 1) {
            if (props[i] in style) {
                return props[i];
            }
        }
        return false;
    }
};

/*eslint-disable*/
var userSelectProperty = domutil.testProp([
    'userSelect', 
    'WebkitUserSelect', 
    'OUserSelect', 
    'MozUserSelect', 
    'msUserSelect'
]);
var supportSelectStart = 'onselectstart' in document;
var prevSelectStyle = '';
/*eslint-enable*/

/**
 * Disable browser's text selection behaviors.
 * @method
 */
domutil.disableTextSelection = (function() {
    if (supportSelectStart) {
        return function() {
            domevent.on(window, 'selectstart', domevent.preventDefault);
        };
    }

    return function() {
        var style = document.documentElement.style;
        prevSelectStyle = style[userSelectProperty];
        style[userSelectProperty] = 'none';
    };
})();

/**
 * Enable browser's text selection behaviors.
 * @method
 */
domutil.enableTextSelection = (function() {
    if (supportSelectStart) {
        return function() {
            domevent.off(window, 'selectstart', domevent.preventDefault);
        };
    }

    return function() {
        document.documentElement.style[userSelectProperty] = prevSelectStyle;
    };
})();

/**
 * Disable browser's image drag behaviors.
 */
domutil.disableImageDrag = function() {
    domevent.on(window, 'dragstart', domevent.preventDefault);
};

/**
 * Enable browser's image drag behaviors.
 */
domutil.enableImageDrag = function() {
    domevent.off(window, 'dragstart', domevent.preventDefault);
};

module.exports = domutil;


}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./domevent":29}],31:[function(require,module,exports){
(function (global){
/**
 * @fileoverview Mixin module for models.
 * @author NHN Ent. FE Development Team <dl_javascript@nhnent.com>
 */
'use strict';

var util = global.ne.util,
    spaceRx = /^\s*|\s*$/g,
    model;

var datetime = require('../datetime');

/**
 * Mixin module for models.
 * @mixin
 */
model = {
    /**
     * string trim
     * @param {string} str string to trim
     * @returns {string} trimed string
     */
    trim: function(str) {
        return str.replace(spaceRx, '');
    },
    /**
     * The collections of validator functions.
     */
    validators: {
        /**
         * check all of supplied fields(property) is not undefined or empty string.
         * @param {object} instance model instance.
         * @param {string[]} fields property names to check.
         * @returns {boolean} return true when supplied fields are not undefined or empty string.
         */
        required: function(instance, fields) {
            var valid = true,
                isValid = function(obj) {
                    return !util.isUndefined(obj) && model.trim(obj) !== '';
                };

            util.forEach(fields, function(fieldName) {
                valid = isValid(instance[fieldName]);
                return valid;
            });

            return valid;
        },

        /**
         * check supplied fields are valid dates and valid date ranges.
         * @param {object} instance model instance.
         * @param {Date[]} fields array of date range (starts, ends)
         * @returns {boolean} is valid date range?
         */
        dateRange: function(instance, fields) {
            var starts,
                ends;

            if (!util.isExisty(instance) || fields.length !== 2) {
                return true;
            }

            starts = new Date(instance[fields[0]]);
            ends = new Date(instance[fields[1]]);

            if (!datetime.isValid(starts) || !datetime.isValid(ends)) {
                return false;
            }

            if (datetime.compare(starts, ends) === 1) {
                return false;
            }

            return true;
        }
    },

    /**
     * Check validate for model instance.
     *
     * The validate are works on a basis of constructor's "schema" property.
     *
     * You can customize validators add some method to model#validators.
     * @returns {Boolean} model is valid?
     */
    isValid: function() {
        var that = this,
            schema = this.constructor.schema,
            validators = model.validators,
            validator,
            valid = true;

        if (!schema) {
            return true;
        }

        util.forEach(schema, function(values, validatorName) {
            validator = validators[validatorName];

            if (validator) {
                valid = validator(that, values);
                return valid;
            }
        });

        return valid;
    },

    /**
     * Make data object form instance.
     *
     * It return object fill with all owned properties but exclude functions.
     * @returns {object} Data object
     */
    parameterize: function() {
        var param = {},
            isFunc = util.isFunction;

        util.forEach(this, function(value, propName) {
            if (!isFunc(value)) {
                param[propName] = value;
            }
        });

        return param;
    },

    /**
     * Mixin model module to supplied target.
     * @param {Object} target The object of want to mixed.
     * @example
     * function Man() {
     *     this.name = 'john';
     * }
     * model.mixin(Man.prototype);
     */
    mixin: function(target) {
        util.forEach(model, function(method, name) {
            if (name !== 'mixin') {
                target[name] = method;
            }
        });
    }
};

module.exports = model;


}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"../datetime":37}],32:[function(require,module,exports){
(function (global){
/**
 * @fileoverview
 * Class for represent two dimensional x, y coordinates.
 *
 * It suppliy a group of functions for manipulate coordinates.
 * @author NHN Ent. FE Development Team <dl_javascript@nhnent.com>
 * @example
 * var p = point(10, 10);
 * var r1 = p.add(Point(5, 5));
 * console.log(p.toString())    // "Point(10, 10)"
 * console.log(r1.toString())    // "Point(15, 15)"
 *
 * var p2 = new Point(10, 10);
 * p2._add(point(5, 5));
 * console.log(p2.toString())   // "Point(15, 15)"
 */
'use strict';

var util = global.ne.util;

/**
 * Class for represent two dimentional x, y coordinates.
 * @constructor
 * @param {number} x The number of X coordinates.
 * @param {number} y The number of Y coordinates.
 * @param {boolean} [useRound=false] set true when each coordinates are rounded before initialize.
 * @example
 * var t = new Point(13, 5);
 */
function Point(x, y, useRound) {
    /**
     * @type {number}
     */
    this.x = (useRound ? Math.round(x) : x);

    /**
     * @type {number}
     */
    this.y = (useRound ? Math.round(y) : y);
}

/**********
 * static props
 **********/

/**
 * Calculate point ratio.
 * @param {Point} point The instance of point.
 * @param {number} factor From factor
 * @param {number} toFactor To factor
 * @returns {Point} Point instance calculated.
 */
Point.getRatio = function(point, factor, toFactor) {
    if (factor === toFactor) {
        return point.clone();
    }

    return point.multiplyBy(toFactor)._divideBy(factor);
};

/**
 * Syntatic sugar of new Point()
 * @param {(Point|number|number[])} x X coordinate value.
 * @param {(number|boolean)} [y] Y coordinate value or boolean value for coordinates round.
 * @param {boolean} [useRound] Set true then round initial coordinate values.
 * @returns {Point} The instance of point.
 * @example
 * var p1 = point(10, 15);
 * var p2 = point([10, 15]);
 */
Point.n = function(x, y, useRound) {
    if (x instanceof Point) {
        return x;
    }

    if (util.isArray(x)) {
        return new Point(x[0], x[1], y);
    }

    return new Point(x, y, useRound);
};

/**********
 * prototype props
 **********/

/**
 * Clone points
 * @returns {Point} The point instance cloned.
 */
Point.prototype.clone = function() {
    return new Point(this.x, this.y);
};

/**
 * Add points.
 * @param {Point} point The point instance to add.
 * @return {Point} Point calculated.
 */
Point.prototype.add = function(point) {
    return this.clone()._add(Point.n(point));
};

/**
 * Add self points.
 * @param {Point} point The point instance to add.
 * @return {Point} Point calculated.
 */
Point.prototype._add = function(point) {
    this.x += point.x;
    this.y += point.y;
    return this;
};

/**
 * Subtract points.
 * @param {Point} point The point instance to subtract.
 * @return {Point} Point calculated.
 */
Point.prototype.subtract = function(point) {
    return this.clone()._subtract(Point.n(point));
};

/**
 * Subtract points. (manipulate self)
 * @param {Point} point The point instance to subtract.
 * @returns {Point} Point calculated.
 */
Point.prototype._subtract = function(point) {
    this.x -= point.x;
    this.y -= point.y;
    return this;
};

/**
 * Divide points.
 * @param {number} num The number to divide.
 * @returns {Point} Point calculated.
 */
Point.prototype.divideBy = function(num) {
    return this.clone()._divideBy(num);
};

/**
 * Divide points. (manipulate self)
 * @param {number} num The number to divide.
 * @returns {Point} Point calculated.
 */
Point.prototype._divideBy = function(num) {
    this.x /= num;
    this.y /= num;
    return this;
};

/**
 * Multiply coordinates.
 * @param {number} num Thyen number to multiply
 * @return {Point} Point calculated.
 */
Point.prototype.multiplyBy = function(num) {
    return this.clone()._multiplyBy(num);
};

/**
 * Multiply self coordinates.
 * @param {number} num The number to multiply.
 * @returns {Point} Point calculated.
 */
Point.prototype._multiplyBy = function(num) {
    this.x *= num;
    this.y *= num;
    return this;
};

/**
 * Round coordinates.
 * @returns {Point} Point calculated.
 */
Point.prototype.round = function() {
    return this.clone()._round();
};

/**
 * Round self coordinates.
 * @returns {Point} Point calculated.
 */
Point.prototype._round = function() {
    this.x = Math.round(this.x);
    this.y = Math.round(this.y);
    return this;
};

/**
 * Reverse values between positive and negative.
 * @returns {Point} Point calculated.
 */
Point.prototype.reverse = function() {
    return this.clone()._reverse();
};

/**
 * Reverse self values between positive and negative.
 * @returns {Point} Point calculated.
 */
Point.prototype._reverse = function() {
    this.x *= -1;
    this.y *= -1;
    return this;
};

/**
 * Floor coordinates.
 * @returns {Point} Point calculated.
 */
Point.prototype.floor = function() {
    return this.clone()._floor();
};

/**
 * Floor self coordinates.
 * @returns {Point} Point calculated.
 */
Point.prototype._floor = function() {
    this.x = Math.floor(this.x);
    this.y = Math.floor(this.y);
    return this;
};

/**
 * Ceil coordinates.
 * @returns {Point} Point calculated.
 */
Point.prototype.ceil = function() {
    return this.clone()._ceil();
};

/**
 * Ceil self coodinates.
 * @returns {Point} Point calculated.
 */
Point.prototype._ceil = function() {
    this.x = Math.ceil(this.x);
    this.y = Math.ceil(this.y);
    return this;
};

/**
 * Rotate point.
 * @param {number} deg The number of rotate degree.
 * @param {Point} [center=this] Center point instance to use rotate center. use own when not supplied.
 * @param {number} [cos] Cosine values for rotate. it useful when multi point rotate.
 * @param {number} [sin] Sine values for rotate. it useful when multi point rotate.
 * @returns {Point} The point instance rotated.
 */
Point.prototype.rotate = function(deg, center, cos, sin) {
    return this.clone()._rotate(deg, center, cos, sin);
};

/**
 * Rotate self.
 * @param {number} deg The number of rotate degree.
 * @param {Point} [center=this] Center point instance to use rotate center. use own when not supplied.
 * @param {number} [cos] Cosine values for rotate. it useful when multi point rotate.
 * @param {number} [sin] Sine values for rotate. it useful when multi point rotate.
 * @returns {Point} The point instance rotated.
 */
Point.prototype._rotate = function(deg, center, cos, sin) {
    var rad = deg * (Math.PI / 180),
        x,
        y;

    cos = cos || parseFloat(Math.cos(rad).toFixed(8));
    sin = sin || parseFloat(Math.sin(rad).toFixed(8));

    this._subtract(center);

    x = this.x;
    y = this.y;

    this.x = x * cos - y * sin;
    this.y = x * sin + y * cos;

    this._add(center);

    return this;
};

/**
 * Calculate distance between two points.
 * @param {Point} point Point instance.
 * @returns {number} The number of distance between two points.
 */
Point.prototype.distanceTo = function(point) {
    var x,
        y;

    point = Point.n(point);

    x = point.x - this.x;
    y = point.y - this.y;

    return Math.sqrt(x * x + y * y);
};

/**
 * Check point equals.
 * @param {Point} point Point instance to compare
 * @returns {boolean} equality
 */
Point.prototype.equals = function(point) {
    point = Point.n(point);
    return point.x === this.x && point.y === this.y;
};

/**
 * Return formatted string. 'Point(x, y)'
 * @returns {string} string
 */
Point.prototype.toString = function() {
    return 'Point(' + this.x + ', ' + this.y + ')';
};

/**
 * Return coodinates to array. [x, y]
 * @returns {number[]} coordinate array.
 */
Point.prototype.toArray = function() {
    return [this.x, this.y];
};

module.exports = Point;


}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],33:[function(require,module,exports){
(function (global){
/**
 * @fileoverview RequestAnimFrame
 * @author NHN Ent. FE Development Team <dl_javascript@nhnent.com>
 */
'use strict';

var util = global.ne.util;
var requestFn,
    cancelFn;

function getPrefixed(name) {
    return global['webkit' + name] || global['moz' + name] || global['ms' + name];
}

requestFn = global.requestAnimationFrame ||
    getPrefixed('RequestAnimationFrame') ||
    function(fn, context) {
        fn.call(context);
    };

cancelFn = global.cancelAnimationFrame ||
    getPrefixed('CancelAnimationFrame') ||
    getPrefixed('CancelRequestAnimationFrame') ||
    function() {};

/**
 * @module module:reqAnimFrame
 */

module.exports = {
    /**
     * Shim of requestAnimationFrame
     * @param {function} fn callback function
     * @param {*} context context for callback
     * @returns {number} Unique id
     */
    requestAnimFrame: function(fn, context) {
        return requestFn.call(global, util.bind(fn, context));
    },

    /**
     * Shim of cancelAnimationFrame
     * @param {number} id requestAnimationFrame id
     */
    cancelAnimFrame: function(id) {
        if (!id) {
            return;
        }

        cancelFn.call(global, id);
    }
};


}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],34:[function(require,module,exports){
(function (global){
/**
 * @fileoverview Object to save global variables.
 * @author NHN Ent. FE Development Team <dl_javascript@nhnent.com>
 */
'use strict';

var label = {
    DAY_NAME: {
        kor: ['일', '월', '화', '수', '목', '금', '토']
    },
    NEW_EVENT: {
        kor: '새 일정'
    }
}

var config = {
    label: label,
    monthweek: {    // 종일일정
        view: {
            CONTAINER_PADDING_LEFT: 60,    // 이벤트 컨테이너 엘리먼트의 left padding.
            EVENT_TOP_MARGIN: 2,    // 이벤트 블록 상단 여백 높이
            FREE_HEIGHT_TO_CREATION: 8    // 생성 액션을 편하게 하기 위해 하단에 추가하는 여백 높이
        },
        handler: {
            guide: {
                TEXT_FOR_NEW_EVENT: label.NEW_EVENT.kor    // 종일일정 생성 효과 엘리먼트 텍스트
            }
        }
    },
    dayname: {    // dayname
        view: {
            DAY_NAME: {    // Date.day 인덱스에 해당하는 일자 레이블 텍스트
                kor: label.DAY_NAME.kor
            }
        }
    },
    timeGrid: {
        view: {
            TICK_INTERVAL: 1000 * 10,    // hourmarker refresh interval.
            PIXEL_RENDER_ERROR: 0.5,    // browser pixel rendering error value.
            SET_SCROLL_DELAY: global.ne.util.browser.msie ? 100 : 50
        }
    }
}

module.exports = config;


}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],35:[function(require,module,exports){
(function (global){
/**
 * @fileoverview Base calendar controller
 * @author NHN Ent. FE Development Team <dl_javascript@nhnent.com>
 */
'use strict';

var util = global.ne.util;
var Event = require('../model/event');
var EventViewModel = require('../model/viewModel/event');
var datetime = require('../datetime');
var common = require('../common/common');

/**
 * @constructor
 * @mixes util.CustomEvents
 */
function Base() {
    /**
     * events collection.
     * @type {Collection}
     */
    this.events = common.createEventCollection();

    /**
     * Matrix for multidate events.
     * @type {object.<string, array>}
     */
    this.dateMatrix = {};
}

/**
 * Calculate contain dates in event.
 * @private
 * @param {Event} event The instance of event.
 * @returns {array} contain dates.
 */
Base.prototype._getContainDatesInEvent = function(event) {
    var range = datetime.range(
        datetime.start(event.getStarts()),
        datetime.start(event.getEnds()),
        datetime.MILLISECONDS_PER_DAY
    );

    return range;
};

/**********
 * CRUD
 **********/

/**
 * Create an event instance from raw data.
 * @emits Base#createdEvent
 * @param {object} options Data object to create event.
 * @param {boolean} silent - set true then don't fire events.
 * @returns {Event} The instance of Event that created.
 */
Base.prototype.createEvent = function(options, silent) {
    var event = this.addEvent(Event.create(options));

    if (!silent) {
        /**
         * @event Base#createdEvent
         * @type {Event}
         */
        this.fire('createdEvent', event);
    }

    return event;
};

/**
 * Set date matrix to supplied event instance.
 * @param {Event} event - instance of event.
 */
Base.prototype._addToMatrix = function(event) {
    var ownMatrix = this.dateMatrix,
        containDates = this._getContainDatesInEvent(event);

    util.forEach(containDates, function(date) {
        var ymd = datetime.format(date, 'YYYYMMDD'),
            matrix = ownMatrix[ymd] = ownMatrix[ymd] || [];

        matrix.push(util.stamp(event));
    });
};

/**
 * Remove event's id from matrix.
 * @param {Event} event - instance of event
 */
Base.prototype._removeFromMatrix = function(event) {
    var modelID = util.stamp(event);

    util.forEach(this.dateMatrix, function(matrix) {
        var index = util.inArray(modelID, matrix);

        if (~index) {
            matrix.splice(index, 1);
        }
    }, this);
};

/**
 * Add an event instance.
 * @emits Base#addedEvent
 * @param {Event} event The instance of Event.
 * @param {boolean} silent - set true then don't fire events.
 * @returns {Event} The instance of Event that added.
 */
Base.prototype.addEvent = function(event, silent) {
    this.events.add(event);
    this._addToMatrix(event);

    if (!silent) {
        /**
         * @event Base#addedEvent
         * @type {object}
         */
        this.fire('addedEvent', event);
    }

    return event;
};

/**
 * split event model by ymd.
 * @param {Date} starts - start date
 * @param {Date} ends - end date
 * @param {Collection} eventCollection - collection of event model.
 * @returns {object.<string, Collection>} splitted event model collections.
 */
Base.prototype.splitEventByDateRange = function(starts, ends, eventCollection) {
    var range = datetime.range(
            datetime.start(starts),
            datetime.start(ends),
            datetime.MILLISECONDS_PER_DAY
        ),
        ownMatrix = this.dateMatrix,
        result = {};

    util.forEachArray(range, function(date) {
        var ymd = datetime.format(date, 'YYYYMMDD'),
            matrix = ownMatrix[ymd],
            collection;

        collection = result[ymd] = common.createEventCollection();

        if (matrix && matrix.length) {
            util.forEachArray(matrix, function(id) {
                eventCollection.doWhenHas(id, function(event) {
                    collection.add(event);
                });
            });
        }
    });

    return result;
};

/**
 * Return events in supplied date range.
 *
 * available only YMD.
 * @param {Date} starts start date.
 * @param {Date} ends end date.
 * @returns {object.<string, Collection>} event collection grouped by dates.
 */
Base.prototype.findByDateRange = function(starts, ends) {
    var range = datetime.range(
            datetime.start(starts),
            datetime.start(ends),
            datetime.MILLISECONDS_PER_DAY
        ),
        ownEvents = this.events.items,
        ownMatrix = this.dateMatrix,
        dformat = datetime.format,
        result = {},
        matrix,
        ymd,
        viewModels;

    util.forEachArray(range, function(date) {
        ymd = dformat(date, 'YYYYMMDD');
        matrix = ownMatrix[ymd];
        viewModels = result[ymd] = common.createEventCollection();

        if (matrix && matrix.length) {
            viewModels.add.apply(viewModels, util.map(matrix, function(id) {
                return EventViewModel.create(ownEvents[id]);
            }));
        }
    });

    return result;
};

// Update
/**
 * Update an event.
 * @emits Base#updateEvent
 * @param {number} id The unique id of Event instance.
 * @param {object} options updated object data.
 * @returns {Event|boolean} updated event instance, when it fail then return false.
 */
Base.prototype.updateEvent = function(id, options) {
    var result = false;

    this.events.doWhenHas(id, function(event) {
        options = options || {};

        if (options.title) {
            event.set('title', options.title);
        }

        if (options.isAllDay) {
            event.set('isAllDay', options.isAllDay);
        }

        if (options.starts) {
            event.set('starts', new Date(options.starts));
        }

        if (options.ends) {
            event.set('ends', new Date(options.ends));
        }

        this._removeFromMatrix(event);
        this._addToMatrix(event);

        result = event;
    }, this);

    /**
     * @event Base#updateEvent
     */
    this.fire('updateEvent');

    return result;
};

// Delete
/**
 * Delete event instance from controller.
 * @param {number} id - unique id of model instance.
 * @returns {Event} deleted model instance.
 */
Base.prototype.deleteEvent = function(id) {
    var result = false;

    this.events.doWhenHas(id, function(event) {
        result = event;
        this._removeFromMatrix(event);
        this.events.remove(event);
    }, this);

    return result;
};

/**********
 * API
 **********/

Base.prototype.sync = function() {};
Base.prototype.fetch = function(query) {};

// mixin
util.CustomEvents.mixin(Base);

module.exports = Base;


}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"../common/common":27,"../datetime":37,"../model/event":64,"../model/viewModel/event":65}],36:[function(require,module,exports){
(function (global){
/**
 * @fileoverview Controller mixin modules for day views.
 * @author NHN Ent. FE Development Team <dl_javascript@nhnent.com>
 */
'use strict';

var util = global.ne.util;
var datetime = require('../../datetime');
var common = require('../../common/common');
var array = require('../../common/array');
var EventViewModel = require('../../model/viewModel/event');
var aps = Array.prototype.slice;

/**
 * @mixin Base.Week
 */
var Week = {
    /**********
     * COMMON
     **********/

    /**
     * Calculate collision group.
     * @this Base.Week
     * @param {array} viewModels List of viewmodels.
     * @returns {array} Collision Group.
     */
    getCollisionGroup: function(viewModels) {
        var collisionGroups = [],
            foundPrevCollisionEvent = false,
            previousEventList;

        if (!viewModels.length) {
            return collisionGroups;
        }

        collisionGroups[0] = [util.stamp(viewModels[0].valueOf())];
        util.forEachArray(viewModels.slice(1), function(event, index) {
            foundPrevCollisionEvent = false;
            previousEventList = aps.apply(viewModels, [0, index + 1]).reverse();

            util.forEachArray(previousEventList, function(previous) {
                if (event.collidesWith(previous)) {
                    // 이전 일정들과 겹치는 경우 겹치는 일정의 Collision Group을
                    // 찾아 이 일정을 추가한다
                    foundPrevCollisionEvent = true;

                    util.forEachArray(collisionGroups.slice(0).reverse(), function(group) {
                        if (~util.inArray(util.stamp(previous.valueOf()), group)) {
                            // 겹치는 이전 일정을 찾은 경우 그 일정이 속한
                            // Collision Group에 이 일정을 포함시킨다.
                            group.push(util.stamp(event.valueOf()));
                            return false;
                        }
                    });

                    return false;
                }
            });

            if (!foundPrevCollisionEvent) {
                // 이 일정은 이전일정과 겹치지 않는 일정이므로
                // 새 Collision Group을 구성한다.
                collisionGroups.push([util.stamp(event.valueOf())]);
            }
        });

        return collisionGroups;
    },

    /**
     * Get row length by column index in 2d matrix.
     * @this Base.Week
     * @param {array[]} arr2d Matrix
     * @param {number} col Column index.
     * @return {number} Last row number in column.
     */
    getLastRowInColumn: function(arr2d, col) {
        var row = arr2d.length;

        while (row > 0) {
            row -= 1;
            if (!util.isUndefined(arr2d[row][col])) {
                return row;
            }
        }

        return false;
    },

    /**
     * Calculate matrix for appointment block element placing.
     * @this Base.Week
     * @param {Collection} collection model collection.
     * @param {array[]} collisionGroups Collision groups for event set.
     * @returns {array} matrices
     */
    getMatrices: function(collection, collisionGroups) {
        var result = [],
            getLastRowInColumn = Week.getLastRowInColumn;

        util.forEachArray(collisionGroups, function(group) {
            var matrix = [[]];

            util.forEachArray(group, function(eventID) {
                var event = collection.items[eventID],
                    col = 0,
                    found = false,
                    nextRow,
                    lastRowInColumn;

                while (!found) {
                    lastRowInColumn = getLastRowInColumn(matrix, col);

                    if (lastRowInColumn === false) {
                        matrix[0].push(event);
                        found = true;
                    } else if (!event.collidesWith(matrix[lastRowInColumn][col])) {
                        nextRow = lastRowInColumn + 1;
                        if (util.isUndefined(matrix[nextRow])) {
                            matrix[nextRow] = [];
                        }
                        matrix[nextRow][col] = event;
                        found = true;
                    }

                    col += 1;
                }
            });

            result.push(matrix);
        });

        return result;
    },

    /**********
     * TIME GRID VIEW
     **********/

    /**
     * Make array with start and end times on events.
     * @this Base.Week
     * @param {array[]} matrix - matrix from controller.
     * @returns {array[]} starttime, endtime array (exclude first row's events)
     */
    generateTimeArrayInRow: function(matrix) {
        var row,
            col,
            event,
            map = [],
            cursor = [],
            maxColLen = Math.max.apply(null, util.map(matrix, function(col) {
                return col.length;
            }));

        for (col = 1; col < maxColLen; col += 1) {
            row = 0;
            event = util.pick(matrix, row, col);

            while (event) {
                cursor.push([event.getStarts().getTime(), event.getEnds().getTime()]);

                row += 1;
                event = util.pick(matrix, row, col);
            }

            map.push(cursor);
            cursor = [];
        }

        return map;
    },

    /**
     * Get collision information from list
     * @this Base.Week
     * @param {array.<number[]>} arr - list to detecting collision. [[start, end], [start, end]]
     * @param {number} start - event start time that want to detect collisions.
     * @param {number} end - event end time that want to detect collisions.
     * @returns {boolean} target has collide in supplied array?
     */
    hasCollide: function(arr, start, end) {
        var startStart,
            startEnd,
            endStart,
            endEnd,
            getFunc = function(index) {
                return function(block) {
                    return block[index];
                };
            },
            abs = Math.abs,
            compare = array.compare.num.asc,
            hasCollide;

        if (!arr.length) {
            return false;
        }

        startStart = abs(array.bsearch(arr, start, getFunc(0), compare));
        startEnd = abs(array.bsearch(arr, start, getFunc(1), compare));
        endStart = abs(array.bsearch(arr, end, getFunc(0), compare));
        endEnd = abs(array.bsearch(arr, end, getFunc(1), compare));
        hasCollide = !(startStart === startEnd && startEnd === endStart && endStart === endEnd);

        return hasCollide;
    },

    /**
     * Initialize values to viewmodels for detect real collision at rendering phase.
     * @this Base.Week
     * @param {array[]} matrices - Matrix data.
     */
    getCollides: function(matrices) {
        util.forEachArray(matrices, function(matrix) {
            var binaryMap,
                maxRowLength;

            binaryMap = Week.generateTimeArrayInRow(matrix);
            maxRowLength = Math.max.apply(null, util.map(matrix, function(row) {
                return row.length;
            }));

            util.forEachArray(matrix, function(row) {
                util.forEachArray(row, function(viewModel, col) {
                    var startTime,
                        endTime,
                        hasCollide,
                        i;

                    if (!viewModel) {
                        return;
                    }

                    startTime = viewModel.getStarts().getTime() + 1;
                    endTime = viewModel.getEnds().getTime() - 1;

                    for (i = (col + 1); i < maxRowLength; i += 1) {
                        hasCollide = Week.hasCollide(binaryMap[i - 1], startTime, endTime);

                        if (hasCollide) {
                            viewModel.hasCollide = true;
                            break;
                        }

                        viewModel.extraSpace += 1;
                    }
                });
            });
        });
    },

    /**
     * @this Base
     * @param {Date} starts - start date.
     * @param {Date} ends - end date.
     * @param {Collection} time - view model collection.
     * @returns {object} view model for time part.
     */
    getViewModelForTimeView: function(starts, ends, time) {
        var ymdSplitted = this.splitEventByDateRange(starts, ends, time),
            result = {};

        util.forEach(ymdSplitted, function(collection, ymd) {
            var viewModels = collection.sort(array.compare.event.asc),
                collisionGroups,
                matrices;

            collisionGroups = this.getCollisionGroup(viewModels);
            matrices = this.getMatrices(collection, collisionGroups);
            this.getCollides(matrices);

            result[ymd] = matrices;
        }, Week);

        return result;
    },

    /**********
     * ALLDAY VIEW
     **********/

    /**
     * create view model for allday view part.
     * @param {Date} starts start date.
     * @param {Date} ends end date.
     * @param {Collection} viewModels - allday event viewModel viewModels.
     * @returns {object} allday viewModel.
     */
    getViewModelForAlldayView: function(starts, ends, viewModels) {
        var list,
            ymdsToRender,
            collisionGroups,
            matrices;

        if (!viewModels || !viewModels.length) {
            return [];
        }

        ymdsToRender = util.map(
            datetime.range(starts, ends, datetime.MILLISECONDS_PER_DAY),
            function(date) {
                return datetime.format(date, 'YYYYMMDD');
            }
        );

        list = viewModels.sort(array.compare.event.asc);
        collisionGroups = Week.getCollisionGroup(list);
        matrices = Week.getMatrices(viewModels, collisionGroups);

        util.forEachArray(matrices, function(matrix) {
            util.forEachArray(matrix, function(column) {
                util.forEachArray(column, function(viewModel, index) {
                    var ymd, dateLength;

                    if (!viewModel) {
                        return;
                    }

                    ymd = datetime.format(viewModel.getStarts(), 'YYYYMMDD');
                    dateLength = datetime.range(
                        viewModel.getStarts(),
                        viewModel.getEnds(),
                        datetime.MILLISECONDS_PER_DAY
                    ).length;

                    viewModel.top = index;
                    viewModel.left = util.inArray(ymd, ymdsToRender);
                    viewModel.width = dateLength;
                });
            });
        });

        return matrices;
    },

    /**********
     * READ
     **********/

    /**
     * Populate events in date range.
     * @this Base
     * @param {Date} starts start date.
     * @param {Date} ends end date.
     * @returns {object} events grouped by dates.
     * TODO: task
     */
    findByDateRange: function(starts, ends) {
        var that = this,
            events,
            viewModels,
            result = {};

        events = this.events.find(function(model) {
            var ownStarts = model.getStarts(),
                ownEnds = model.getEnds();

            return (ownStarts >= starts && ownEnds <= ends) ||
                (ownStarts < starts && ownEnds >= starts) ||
                (ownEnds > ends && ownStarts <= ends);
        });

        // CONVERT TO VIEWMODEL.
        viewModels = common.createEventCollection.apply(
            null,
            util.map(events.items, function(event) {
                return EventViewModel.create(event);
            })
        ).groupBy(function(viewModel) {
            if (viewModel.model.isAllDay) {
                return 'allday';
            }
            return 'time';
        });
        viewModels.allday = viewModels.allday || common.createEventCollection();
        viewModels.time = viewModels.time || common.createEventCollection();

        // view model for allday
        result.allday = common.pick2(viewModels, 'allday').then(function(allday) {
            // set render limitation of event starts, ends.
            allday.each(function(viewModel) {
                var ownStarts = viewModel.getStarts(),
                    ownEnds = viewModel.getEnds();

                if (ownStarts < starts) {
                    viewModel.renderStarts = new Date(starts.getTime());
                }

                if (ownEnds > ends) {
                    viewModel.renderEnds = new Date(ends.getTime());
                }
            });

            return util.bind(Week.getViewModelForAlldayView, that)(starts, ends, allday);
        });

        // view model for Time.
        result.time = common.pick2(viewModels, 'time').then(function(time) {
            return util.bind(Week.getViewModelForTimeView, that)(starts, ends, time);
        });

        return result;
    }
};

module.exports = Week;


}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"../../common/array":24,"../../common/common":27,"../../datetime":37,"../../model/viewModel/event":65}],37:[function(require,module,exports){
(function (global){
/**
 * @fileoverview datetime utility module
 * @author NHN Ent. FE Development Team <dl_javascript@nhnent.com>
 */
'use strict';

var util = global.ne.util,
    opt = Object.prototype.toString;

var dateFormatRx = /^(\d{4}[-|\/]*\d{2}[-|\/]*\d{2})\s?(\d{2}:\d{2}:\d{2})?$/;

var datetime,
    tokenFunc;

var memo = {
    millisecondsTo: {},
    millisecondsFrom: {}
};

tokenFunc = {
    /**
     * @param {Date} date date object.
     * @returns {string} YYYYMMDD
     */
    'YYYYMMDD': function(date) {
        return [
            date.getFullYear(),
            datetime.leadingZero(date.getMonth() + 1, 2),
            datetime.leadingZero(date.getDate(), 2)
        ].join('');
    },
    /**
     * @param {Date} date date object
     * @returns {string} four digit year number
     */
    'YYYY': function(date) {
        return date.getFullYear() + '';
    },

    /**
     * @param {Date} date date object
     * @returns {string} two digit month number
     */
    'MM': function(date) {
        return datetime.leadingZero(date.getMonth() + 1, 2);
    },

    /**
     * @param {Date} date date object
     * @returns {string} two digit date number
     */
    'DD': function(date) {
        return datetime.leadingZero(date.getDate(), 2);
    },

    /**
     * @param {Date} date date object
     * @returns {string} HH:mm
     */
    'HH:mm': function(date) {
        var hour = date.getHours(),
            minutes = date.getMinutes();

        return datetime.leadingZero(hour, 2) + ':' +
            datetime.leadingZero(minutes, 2);
    }
};

datetime = {
    /**
     * The number of milliseconds one day.
     * @type {number}
     */
    MILLISECONDS_PER_DAY: 86400000,

    /**
     * The number of milliseconds one hour.
     * @type {number}
     */
    MILLISECONDS_PER_HOUR: 3600000,

    /**
     * convert milliseconds
     * @param {string} type - type of value.
     * @param {number} value - value to convert.
     * @param {function} iteratee - iteratee function to use reduce.
     * @returns {number} converted value.
     */
    _convMilliseconds: function(type, value, iteratee) {
        var conv = [60, 60, 1000],
            index = {
                hour: 0,
                minutes: 1,
                seconds: 2
            };

        if (!(type in index) || global.isNaN(value)) {
            return false;
        }

        return util.reduce([value].concat(conv.slice(index[type])), iteratee);
    },

    /**
     * Convert milliseconds value to other type
     * @param {type} type convert to type want to. support "hour", "minutes", "seconds" only.
     * @param {value} value - value to convert.
     * @returns {number} converted value.
     */
    millisecondsTo: function(type, value) {
        var cache = memo.millisecondsTo,
            key = type + value;

        if (cache[key]) {
            return cache[key];
        }

        cache[key] = datetime._convMilliseconds(type, value, function(memo, v) {
            return memo / v;
        });

        return cache[key];
    },

    /**
     * Convert value to milliseconds
     * @param {type} type - type of supplied value. support "hour", "minutes", "seconds" only.
     * @param {value} value - value to convert.
     * @returns {number} converted value.
     */
    millisecondsFrom: function(type, value) {
        var cache = memo.millisecondsFrom,
            key = type + value;

        if (cache[key]) {
            return cache[key];
        }

        cache[key] = datetime._convMilliseconds(type, value, function(memo, v) {
            return memo * v;
        });

        return cache[key];
    },

    /**
     * Make date array from supplied paramters.
     * @param {Date} start Start date.
     * @param {Date} end End date.
     * @param {number} step The number of milliseconds to use increment.
     * @returns {array} Date array.
     */
    range: function(start, end, step) {
        var cursor = new Date(start.getTime()),
            result = [];

        while (cursor <= end) {
            result.push(cursor);
            cursor = new Date(cursor.getTime() + step);
        }

        return result;
    },

    /**
     * Clone supplied date.
     * @param {Date} date date object to clone.
     * @returns {Date} Cloned date object
     */
    clone: function(date) {
        return new Date(date.getTime());
    },

    /**
     * Compare two dates.
     *
     * when first date is latest then seconds then return -1.
     *
     * return +1 reverse, and return 0 is same.
     * @param {Date} d1 Date object to compare.
     * @param {Date} d2 Date object to compare.
     * @returns {number} result of compare
     */
    compare: function(d1, d2) {
        var _d1 = d1.getTime(),
            _d2 = d2.getTime();

        if (_d1 < _d2) {
            return -1;
        } else if (_d1 > _d2) {
            return 1;
        }
        return 0;
    },

    /**
     * Check supplied parameter is valid date object.
     * @param {*} d Object to validate.
     * @returns {boolean} return true when parameter is valid date object.
     */
    isValid: function(d) {
        if (opt.call(d) === '[object Date]') {
            return !window.isNaN(d.getTime());
        }
        return false;
    },

    /**
     * convert non local date to UTC date.
     * @param {Date} d Date to convert UTC.
     * @returns {Date} The UTC Date.
     */
    toUTC: function(d) {
        var l = d.getTime(),
            offset = datetime.millisecondsFrom('minutes', new Date().getTimezoneOffset());

        return new Date(l + offset);
    },

    /**
     * pad left zero characters.
     * @param {number} number number value to pad zero.
     * @param {number} length pad length to want.
     * @returns {string} padded string.
     */
    leadingZero: function(number, length) {
        var zero = '',
            i = 0;

        if ((number + '').length > length) {
            return number + '';
        }

        for (; i < (length - 1); i += 1) {
            zero += '0';
        }

        return (zero + number).slice(length * -1);
    },

    /**
     * Convert date string to date object.
     *
     * Only listed below formats avaliable.
     *
     * - YYYYMMDD
     * - YYYY/MM/DD
     * - YYYY-MM-DD
     * - YYYY/MM/DD HH:mm:SS
     * - YYYY-MM-DD HH:mm:SS
     *
     * @param {string} str Formatted string.
     * @param {number} [fixMonth=-1] - number for fix month calculating.
     * @returns {(Date|boolean)} Converted Date object. when supplied str is not available then return false.
     */
    parse: function(str, fixMonth) {
        var separator,
            matches = str.match(dateFormatRx),
            ymd,
            hms;

        if (util.isUndefined(fixMonth)) {
            fixMonth = -1;
        }

        if (!matches) {
            return false;
        }

        if (str.length > 8) {
            // YYYY/MM/DD
            // YYYY-MM-DD
            // YYYY/MM/DD HH:mm:SS
            // YYYY-MM-DD HH:mm:SS
            separator = ~str.indexOf('/') ? '/' : '-';
            matches = matches.splice(1);

            ymd = matches[0].split(separator);
            hms = matches[1] ? matches[1].split(':') : [0, 0, 0];
        } else {
            // YYYYMMDD
            matches = matches[0];
            ymd = [matches.substr(0, 4), matches.substr(4, 2), matches.substr(6, 2)];
            hms = [0, 0, 0];
        }

        return new Date(+ymd[0], +ymd[1] + fixMonth, +ymd[2], +hms[0], +hms[1], +hms[2]);
    },

    /**
     * Return date object from Date.
     * @param {Date} date date
     * @returns {object} Date object.
     */
    raw: function(date) {
        return {
            y: date.getFullYear(),
            M: date.getMonth(),
            d: date.getDate(),
            h: date.getHours(),
            m: date.getMinutes(),
            s: date.getSeconds(),
            ms: date.getMilliseconds()
        };
    },

    /**
     * Return 00:00:00 supplied date.
     * @param {Date} date date.
     * @returns {Date} start date.
     */
    start: function(date) {
        var d = new Date(date.getTime());
        d.setHours(0, 0, 0, 0);

        return d;
    },

    /**
     * Return 23:59:59 supplied date.
     * @param {Date} date date.
     * @returns {Date} end date.
     */
    end: function(date) {
        var d = new Date(date.getTime());
        d.setHours(23, 59, 59, 0);

        return d;
    },

    /**
     * Return formatted string as basis of supplied string.
     *
     * Supported Token Lists.
     *
     * - YYYY => 1988
     * - MM => 01 ~ 12
     * - DD => 01 ~ 31
     * - YYYYMMDD => 19880925
     * @param {Date} date String want to formatted.
     * @param {string} format format str.
     * @returns {string}  Formatted date string.
     */
    format: function(date, format) {
        var result = format;
        util.forEachOwnProperties(tokenFunc, function(converter, token) {
            result = result.replace(token, converter(date));
        });

        return result;
    },

    /**
     * Return 2-dimensional array month calendar
     *
     * dates that different month with given date are negative values
     * @param {Date} month - date want to calculate month calendar
     * @param {number} [startDayOfWeek=0] - start day of week
     * @param {function} [iteratee] - iteratee for customizing calendar object
     * @returns {Array.<string[]>} calendar 2d array
     */
    arr2dCalendar: function(month, startDayOfWeek, iteratee) {
        var weekArr,
            starts, ends,
            startIndex, endIndex,
            afterDates,
            cursor, week,
            calendar = [];

        starts = new Date(new Date(+month).setDate(1));
        ends = new Date(new Date(+starts).setMonth(starts.getMonth() + 1));
        ends = new Date(new Date(+ends).setDate(ends.getDate() - 1));

        // create day number array by startDayOfWeek number
        // 4 -> [4, 5, 6, 0, 1, 2, 3]
        // 2 -> [2, 3, 4, 5, 6, 0, 1]
        weekArr = util.range(startDayOfWeek, 7).concat(util.range(7)).slice(0, 7);
        startIndex = util.inArray(starts.getDay(), weekArr);
        endIndex = util.inArray(ends.getDay(), weekArr);
        // free dates after last date of this month
        afterDates = 7 - (endIndex + 1);

        cursor = new Date(new Date(+starts).setDate(starts.getDate() - startIndex));
        // iteratee all dates to render
        util.forEachArray(util.range(startIndex + ends.getDate() + afterDates), function(i) {
            var date;

            if (!(i % 7)) {
                // group each date by week
                week = calendar[i / 7] = [];
            }

            date = new Date(+cursor);
            date = iteratee ? iteratee(date) : date;
            week.push(date);

            // add date
            cursor = new Date(cursor.setDate(cursor.getDate() + 1));
        });

        return calendar;
    }
};

module.exports = datetime;


}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],38:[function(require,module,exports){
(function (global){
/**
 * @fileoverview Module for manage calendar REST API requests.
 * @author NHN Ent. FE Development Team <dl_javascript@nhnent.com>
 */
'use strict';

var util = global.ne.util;
var Ajax = require('../common/ajax');

// 캘린더 API 기본 PATH
var ROOT_PATH = '/task-tracker';

/**********
 * CALENDAR
 **********/

/**
 * 해당 프로젝트의 캘린더 목록 확인
 * @memberof CalendarAPI
 * @param {string} [projectCode='*'] - 프로젝트 코드 '*' 사용가능
 * @param {object} ajaxOptions - ajax 모듈에 사용할 옵션 객체
 */ 
function getCalendars(projectCode, ajaxOptions) {
    var url = 'projects/{{ projectCode }}/calendars';
    projectCode = projectCode || '*';
    url = ROOT_PATH + '/' + url.replace('{{ projectCode }}', projectCode);

    ajaxOptions = ajaxOptions || {};

    new Ajax().ajax(url, ajaxOptions);
}

/**
 * 캘린더 만들기
 * @memberof CalendarAPI
 * @param {string} projectCode - 프로젝트 코드
 * @param {service/model/calendar} data - 캘린더 생성 관련 데이터
 * @param {object} ajaxOptions - ajax 모듈에 사용할 옵션 객체
 */
function postCalendars(projectCode, data, ajaxOptions) {
    var url = 'projects/{{ projectCode }}/calendars';
    projectCode = projectCode || '*';
    url = ROOT_PATH + '/' + url.replace('{{ projectCode }}', projectCode);

    ajaxOptions = ajaxOptions || {};

    util.extend(ajaxOptions, {
        method: 'POST'
    });

    new Ajax().ajax(url, data, ajaxOptions);
}

/**********
 * TASK
 **********/

/**
 * 일정 목록 조회
 * @memberof CalendarAPI
 * @param {string} [projectCode='*'] - 프로젝트 코드
 * @param {string} [calendarId='*'] - 캘린더 ID
 * @param {string} [timeMin] - 조회시작일자
 * @param {string} [timeMax] - 조회 종료일자
 * @param {object} [ajaxOptions] - ajax 모듈에 사용할 옵션 객체
 */
function getCalendarTasks(projectCode, calendarId, timeMin, timeMax, ajaxOptions) {
    var url = 'projects/{{ projectCode }}/calendars/{{ calendarId }}/tasks' +
        '?calendars={{ calendars }}&timeMin={{ timeMin }}&timeMax={{ timeMax }}';

    calendarId = calendarId.replace(/\s/g, '');

    url = ROOT_PATH + '/' + url.replace('{{ projectCode }}', projectCode || '*')
        .replace('{{ calendarId }}', ~calendarId.indexOf(',') ? '*' : calendarId)
        .replace('{{ calendars }}', ~calendarId.indexOf(',') ? calendarId : '')
        .replace('{{ timeMin }}', timeMin || '')
        .replace('{{ timeMax }}', timeMax || '');

    new Ajax().ajax(url, ajaxOptions || {});
}

/**
 * 캘린더에 관련된 API호출 기능을 모아둔 믹스인 모듈. service/calendar 모듈에서 사용한다.
 * @mixin CalendarAPI
 */
module.exports = /** @lends CalendarAPI */ {
    getCalendars: getCalendars,
    postCalendars: postCalendars,
    getCalendarTasks: getCalendarTasks
};

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"../common/ajax":23}],39:[function(require,module,exports){
/**
 * @fileoverview Configuration module for dooray project.
 * @author NHN Ent. FE Development Team <dl_javascript@nhnent.com>
 */
'use strict';

/**
 * 일정 카테고리
 * @readonly
 * @enum {string}
 */
var EVENT_CATEGORY = {
    GENERAL: 'general',
    TASK: 'task',
    MILESTONE: 'milestone'
};

/**
 * 태스크 마감시간 분류
 * @readonly
 * @enum {string}
 */
var DUE_DATE_CLASS = {
    MORNING: 'morning',
    LUNCH: 'lunch',
    EVENING: 'evening'
};


module.exports = {
    model: {
        EVENT_CATEGORY: EVENT_CATEGORY,
        DUE_DATE_CLASS: DUE_DATE_CLASS
    }
};

},{}],40:[function(require,module,exports){
(function (global){
/**
 * @fileoverview Calendar for service.
 * @author NHN Ent. FE Development Team <dl_javascript@nhnent.com>
 */
'use strict';

var util = global.ne.util;
var Calendar = require('../../factory/calendar');
var serviceWeekViewFactory = require('./weekView');
var calendarAPI = require('../calendarAPI');

/**
 * Calendar factor module for service (dooray)
 * @constructor
 * @extends {Calendar}
 * @mixed {CalendarAPI}
 */
function ServiceCalendar() {
    Calendar.apply(this, arguments);

    this.api = calendarAPI;
}

util.inherit(ServiceCalendar, Calendar);

/**
 * @override
 */
ServiceCalendar.prototype.toggleView = function(viewName, force) {
    var view = this.view,
        controller = this.controller,
        dragHandler = this.dragHandler,
        options = this.options;

    if (!force && this.currentViewName === viewName) {
        return;
    }

    this.currentViewName = viewName;
    view.clear();

    if (viewName === 'week') {
        view.addChild(function() {
            return serviceWeekViewFactory(controller, view.container, dragHandler, options);
        });
    }
};

module.exports = ServiceCalendar;


}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"../../factory/calendar":46,"../calendarAPI":38,"./weekView":41}],41:[function(require,module,exports){
(function (global){
/**
 * @fileoverview Factory module for WeekView (customized for service)
 * @author NHN Ent. FE Development Team <dl_javascript@nhnent.com>
 */
'use strict';

var util = global.ne.util;
var domutil = require('../../common/domutil');

// Parent views
var Week = require('../../view/week/week');

// Sub views
var DayName = require('../../view/week/dayname');
var TimeGrid = require('../../view/week/timeGrid');
var Allday = require('../../view/week/allday');

// Handlers
var AlldayCreation = require('../../handler/allday/creation');
var AlldayMove = require('../../handler/allday/move');
var AlldayResize = require('../../handler/allday/resize');
var TimeCreation = require('../../handler/time/creation');
var TimeMove = require('../../handler/time/move');
var TimeResize = require('../../handler/time/resize');

// Base Templates
var weekViewTmpl = require('../../dooray/view/template/factory/weekView.hbs');

module.exports = function(baseController, layoutContainer, dragHandler, options) {
    var weekView,
        dayNameView,
        alldayView,
        timeGridView,
        alldayOptions,
        alldayCreationHandler,
        alldayMoveHandler,
        alldayResizeHandler,
        timeCreationHandler,
        timeMoveHandler,
        timeResizeHandler;

    weekView = new Week(null, options.week, layoutContainer);

    weekView.container.innerHTML = weekViewTmpl();

    // Dayname
    dayNameView = new DayName(domutil.find('.schedule-view-dayname-layout', weekView.container));
    weekView.addChild(dayNameView);

    /**********
     * AllDay View
     **********/
    alldayOptions = util.extend({
        title: null,
        height: 20
    }, options.week);

    // Allday - milestone
    alldayOptions.title = '마일스톤';
    alldayView = new Allday(alldayOptions, domutil.find('.schedule-view-milestone-layout'));
    weekView.addChild(alldayView);
    // Allday - morning
    alldayOptions.title = '출근전';
    alldayView = new Allday(alldayOptions, domutil.find('.schedule-view-milestone-layout'));
    weekView.addChild(alldayView);
    // Allday - lunch
    alldayOptions.title = '점심전';
    alldayView = new Allday(alldayOptions, domutil.find('.schedule-view-milestone-layout'));
    weekView.addChild(alldayView);
    // Allday - evening
    alldayOptions.title = '퇴근전';
    alldayView = new Allday(alldayOptions, domutil.find('.schedule-view-milestone-layout'));
    weekView.addChild(alldayView);
    // Allday - wholeDay
    alldayOptions.title = '종일일정';
    alldayView = new Allday(options.week, domutil.find('.schedule-view-allday-layout', weekView.container));
    alldayCreationHandler = new AlldayCreation(dragHandler, alldayView, baseController);
    alldayMoveHandler = new AlldayMove(dragHandler, alldayView, baseController);
    alldayResizeHandler = new AlldayResize(dragHandler, alldayView, baseController);
    weekView.addChild(alldayView);

    /**********
     * TimeGrid View
     **********/
    timeGridView = new TimeGrid(options.week, domutil.find('.schedule-view-timegrid-layout', weekView.container));
    timeCreationHandler = new TimeCreation(dragHandler, timeGridView, baseController);
    timeMoveHandler = new TimeMove(dragHandler, timeGridView, baseController);
    timeResizeHandler = new TimeResize(dragHandler, timeGridView, baseController);

    weekView.handlers = {
        allday: {
            creation: alldayCreationHandler,
            move: alldayMoveHandler,
            resize: alldayResizeHandler
        },
        time: {
            creation: timeCreationHandler,
            move: timeMoveHandler,
            resize: timeResizeHandler
        }
    };

    weekView.addChild(timeGridView);

    // add controller
    weekView.controller = baseController.Week;

    // add destroy
    weekView._beforeDestroy = function() {
        timeCreationHandler.off();
        timeMoveHandler.off();
        timeResizeHandler.off();
        timeCreationHandler.destroy();
        timeMoveHandler.destroy();
        timeResizeHandler.destroy();

        alldayCreationHandler.off();
        alldayMoveHandler.off();
        alldayResizeHandler.off();
        alldayCreationHandler.destroy();
        alldayMoveHandler.destroy();
        alldayResizeHandler.destroy();

        delete weekView.handlers.time;
        delete weekView.handlers.allday;

        timeCreationHandler = timeMoveHandler = timeResizeHandler = null;
    };

    return weekView;
};

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"../../common/domutil":30,"../../dooray/view/template/factory/weekView.hbs":45,"../../handler/allday/creation":50,"../../handler/allday/move":52,"../../handler/allday/resize":54,"../../handler/time/creation":58,"../../handler/time/move":60,"../../handler/time/resize":62,"../../view/week/allday":77,"../../view/week/dayname":78,"../../view/week/timeGrid":80,"../../view/week/week":81}],42:[function(require,module,exports){
(function (global){
/**
 * @fileoverview Extend model class for Dooray Calendar project.
 * @author NHN Ent. FE Development Team <dl_javascript@nhnent.com>
 */
'use strict';

var util = global.ne.util;
var Event = require('../../model/event');
var doorayConfig = require('../config');

/**
 * Event class for dooray project
 * @constructor
 * @extends {Event}
 */
function DoorayEvent() {
    Event.apply(this);

    /**
     * 일정 카테고리
     * @type {EVENT_CATEGORY}
     */
    this.category = doorayConfig.model.EVENT_CATEGORY.GENERAL;

    /**
     * 일정 마감 분류
     * @type {string}
     */
    this.dueDateClass = '';

    /**
     * 일정 내용 본문 정보
     * @type {object}
     */
    this.body = {
        mimeType: '',
        content: ''
    }; 

    /**
     * 상세정보 url
     * @type {string}
     */
    this.detailUrl = '';

    /**
     * 기타정보
     * @type {object}
     */
    this.raw = null;
}

util.inherit(DoorayEvent, Event);

/**
 * create event model from json(object) data.
 * @override
 * @param {object} data object for model.
 * @returns {Event} DoorayEvent model instance.
 */
DoorayEvent.createEvent = function(data) {
    var event = new DoorayEvent();

    event.init(data);

    return event;
};

/**
 * Initialize event instance.
 * @override
 * @param {object} options options.
 */
DoorayEvent.prototype.init = function(options) {
    var starts,
        ends,
        body;

    options = options || {};

    this.title = options.subject;
    this.category = optinos.category;
    this.dueDateClass = options.dueDateClass;
    this.isAllDay = util.isExisty(options.wholeDayFlag) ? options.wholeDayFlag : false;
    this.detailUrl = options.detailUrl || '';

    if (category === doorayConfig.model.EVENT_CATEGORY.GENERAL) {
        starts = new Date(options.createdAt);
        ends = new Date(options.endedAt);
    } else {
        // 마일스톤, 업무 일정은 종료일 기준으로 계산
        starts = new Date(options.dueDate);
        ends = new Date(+starts)

        // 일정 시작시간을 종료시간 30분 전으로 지정
        starts.setMinutes(starts.getMinutes() - 30);
    }

    this.starts = starts;
    this.ends = ends;

    body = util.pick(options, 'body');
    if (body) {
        this.body.mimeType = body.mimeType;
        this.body.content = body.content;
    }

    this.raw = options;
};

module.export = DoorayEvent;


}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"../../model/event":64,"../config":39}],43:[function(require,module,exports){
// hbsfy compiled Handlebars template
var HandlebarsCompiler = require('hbsfy/runtime');
module.exports = HandlebarsCompiler.template({"1":function(container,depth0,helpers,partials,data) {
    return "<th>"
    + container.escapeExpression(container.lambda(depth0, depth0))
    + "</th>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<tr>\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},depth0,{"name":"each","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</tr>\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<td class=\""
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.isOtherDate : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.focused : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.today : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\" data-y=\""
    + alias4(((helper = (helper = helpers.y || (depth0 != null ? depth0.y : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"y","hash":{},"data":data}) : helper)))
    + "\" data-m=\""
    + alias4(((helper = (helper = helpers.m || (depth0 != null ? depth0.m : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"m","hash":{},"data":data}) : helper)))
    + "\" data-d=\""
    + alias4(((helper = (helper = helpers.d || (depth0 != null ? depth0.d : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"d","hash":{},"data":data}) : helper)))
    + "\">\n<button type=\"button\" tabindex=\"-1\" class=\"schedule-view-minicalendar-date\">\n    <div class=\"schedule-view-minicalendar-label\"><span>"
    + alias4(((helper = (helper = helpers.d || (depth0 != null ? depth0.d : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"d","hash":{},"data":data}) : helper)))
    + "</span></div>\n    <div class=\"schedule-view-minicalendar-dots\">"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.events : depth0),{"name":"each","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</span>\n</button>\n</td>\n";
},"5":function(container,depth0,helpers,partials,data) {
    return "schedule-view-minicalendar-other";
},"7":function(container,depth0,helpers,partials,data) {
    return "schedule-view-minicalendar-focused";
},"9":function(container,depth0,helpers,partials,data) {
    return "schedule-view-minicalendar-today";
},"11":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<span style=\"background-color:#"
    + container.escapeExpression(((helper = (helper = helpers.color || (depth0 != null ? depth0.color : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"color","hash":{},"data":data}) : helper)))
    + "\">&bull;</span>";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {};

  return "<table>\n<caption>\n    <button type=\"button\" class=\"schedule-view-minicalendar-nav schedule-view-minicalendar-prev\"><span>&lt;</span></button>\n    <span class=\"schedule-view-minicalendar-title\">"
    + container.escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</span>\n    <button type=\"button\" class=\"schedule-view-minicalendar-nav schedule-view-minicalendar-next\"><span>&gt;</span></button>\n</caption>\n<thead><tr>\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.dayname : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</tr></thead>\n<tbody>\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.calendar : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</tbody>\n</table>\n";
},"useData":true});

},{"hbsfy/runtime":22}],44:[function(require,module,exports){
(function (global){
/**
 * @fileoverview Minicalendar view.
 * @author NHN Ent. FE Development Team <dl_javascript@nhnent.com>
 */
'use strict';

var util = global.ne.util;
var config = require('../../config');
var View = require('../../view/view');
var domutil = require('../../common/domutil');
var domevent = require('../../common/domevent');
var datetime = require('../../datetime');
var tmpl = require('./minicalendar.hbs');

/**
 * @constructor
 * @extends {View}
 * @param {object} options - options for minicalendar view
 * @param {number} [options.startDayOfWeek=0] - start day of week. default 0 (sunday)
 * @param {string} [options.renderMonth] - YYYY-MM formatted date to render. 
 * if not supplied use current month
 * @param {HTMLDivElement} container - element to use container
 */
function MiniCalendar(options, container) {
    var defaultMonth;

    View.call(this, options, container);

    domutil.addClass(container, 'schedule-view-minicalendar');

    defaultMonth = util.pick(options, 'renderMonth');
    if (defaultMonth) {
        defaultMonth = datetime.parse(defaultMonth + '-01');
    } else {
        defaultMonth = new Date();
    }
    defaultMonth.setHours(0, 0, 0);

    domevent.on(this.container, 'click', this._onClick, this);

    /**
     * @type {object}
     */
    this.options = util.extend({
        startDayOfWeek: 0
    }, options);

    this.options.renderMonth = defaultMonth;
}

util.inherit(MiniCalendar, View);

/**
 * Next, Prev button event handler
 * @param {HTMLButtonElement} buttonElement - next, prev button from _onClick event handler
 */
MiniCalendar.prototype.nav = function(buttonElement) {
    var isNext = domutil.hasClass(buttonElement, 'schedule-view-minicalendar-next'),
        options = this.options,
        offset = isNext ? 1 : -1;

    options.renderMonth.setMonth(options.renderMonth.getMonth() + offset);

    this.render();
};

/**
 * Date button event handler
 * @param {HTMLButtonElement} buttonElement - date button from _onClick event handler
 */
MiniCalendar.prototype.date = function(buttonElement) {
    var td = domutil.closest(buttonElement, 'td'),
        previous;

    if (td) {
        previous = domutil.find('.schedule-view-minicalendar-focused', this.container);

        if (previous) {
            domutil.removeClass(previous, 'schedule-view-minicalendar-focused');
        }

        domutil.addClass(td, 'schedule-view-minicalendar-focused');
    }
};

/**
 * Click event handler
 * @param {MouseEvent} clickEvent - click mouse event object
 */
MiniCalendar.prototype._onClick = function(clickEvent) {
    var target = clickEvent.srcElement || clickEvent.target,
        button = domutil.closest(target, 'button');

    if (!button) {
        return;
    }

    if (domutil.hasClass(button, 'schedule-view-minicalendar-date')) {
        this.date(button);
        return;
    }

    if (domutil.hasClass(button, 'schedule-view-minicalendar-nav')) {
        this.nav(button);
        return;
    }
};

/**
 * Get selected data
 * @returns {Date} selected date
 */
MiniCalendar.prototype.getSelectedDate = function() {
    var selected = domutil.find('.schedule-view-minicalendar-focused', this.container),
        y, m, d;

    if (!selected) {
        return null;
    }

    y = domutil.getData(selected, 'y');
    m = domutil.getData(selected, 'm');
    d = domutil.getData(selected, 'd');

    return new Date(y, m, d);
};

/**
 * Get minicalendar view model
 * @param {Date} renderDate - Date to render minicalendar
 * @param {number} startDayOfWeek - number of start of week (0:sun ...)
 * @param {Date} today - today Date object
 * @param {Object.<string, array>} eventsInMonth - events array to represent dots in minicalendar
 * @returns {object} viewmodel
 */
MiniCalendar.prototype._getViewModel = function(renderDate, startDayOfWeek, today, eventsInMonth) {
    var viewModel = {
            title: datetime.format(renderDate, 'YYYY.MM'),
            startDayOfWeek: startDayOfWeek,
            dayname: null,
            calendar: null
        },
        dayname = config.label.DAY_NAME.kor,
        renderMonth = renderDate.getMonth(),
        renderYear = renderDate.getFullYear(),
        todayDate = today.getDate(),
        todayMonth = today.getMonth(),
        todayYear = today.getFullYear(),
        todayIsRenderedMonth = (renderYear === todayYear && renderMonth === todayMonth);

    viewModel.dayname = util.map(
        util.range(startDayOfWeek, 7).concat(util.range(7)).slice(0, 7), 
        function(i) { return dayname[i]; }
    );

    viewModel.calendar = datetime.arr2dCalendar(renderDate, startDayOfWeek, function(d) {
        var month = d.getMonth(),
            year = d.getFullYear(),
            date = d.getDate(),
            isOtherDate = year !== renderYear || month !== renderMonth,
            eventsInDate,
            result = {
                y: year,
                m: month,
                d: d.getDate(),
                isOtherDate: isOtherDate
            };

        if (!isOtherDate) {
            // dates in rendered month
            if (todayIsRenderedMonth && date === todayDate) {
                result.today = true;

                // today is include in rendered month then autoselect today date
                result.focused = true;
            }
            
            if (!todayIsRenderedMonth && date === 1) {
                // today is not include in rendered month then autoselect first date of month
                result.focused = true;
            }
        }

        if (eventsInMonth) {
            eventsInDate = eventsInMonth[[year, month + 1, date].join('-')];

            if (eventsInDate) {
                // if has events in date then add.
                result.events = eventsInDate;
            }
        }

        return result;
    });

    return viewModel;
};

/**
 * Render view
 */
MiniCalendar.prototype.render = function() {
    var container = this.container,
        options = this.options,
        renderDate = options.renderMonth,
        startDayOfWeek = options.startDayOfWeek,
        //TODO: this will provide by controller
        events = {
            '2015-10-2': [{color:'dc9656'}, {color:'a1b56c'}],
            '2015-10-18': [{color:'a1b56c'}]
        },
        viewModel;

    viewModel = this._getViewModel(renderDate, startDayOfWeek, new Date(), events);

    container.innerHTML = tmpl(viewModel);
};

util.CustomEvents.mixin(MiniCalendar);

module.exports = MiniCalendar;


}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"../../common/domevent":29,"../../common/domutil":30,"../../config":34,"../../datetime":37,"../../view/view":76,"./minicalendar.hbs":43}],45:[function(require,module,exports){
// hbsfy compiled Handlebars template
var HandlebarsCompiler = require('hbsfy/runtime');
module.exports = HandlebarsCompiler.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"schedule-view-display-table\">\n    <div class=\"schedule-view-display-table-row\">\n        <div class=\"schedule-view-display-table-cell\">\n            <div class=\"schedule-view-scroll-y schedule-view-dayname-layout\"></div>\n        </div>\n    </div>\n\n    <div class=\"schedule-view-display-table-row\">\n        <div class=\"schedule-view-display-table-cell\">\n            <div class=\"schedule-view-scroll-y schedule-view-milestone-layout\" style=\"min-height:112px;max-height:195px\"></div>\n        </div>\n    </div>\n\n    <div class=\"schedule-view-display-table-row\">\n        <div class=\"schedule-view-display-table-cell\">\n            <div class=\"schedule-view-scroll-y schedule-view-allday-layout\" style=\"min-height:68px\"></div>\n        </div>\n    </div>\n    <div class=\"schedule-view-display-table-row\">\n        <div class=\"schedule-view-display-table-cell schedule-view-timegrid-layout\"></div>\n    </div>\n</div>\n";
},"useData":true});

},{"hbsfy/runtime":22}],46:[function(require,module,exports){
(function (global){
/**
 * @fileoverview Factory module for control all other factory.
 * @author NHN Ent. FE Development Team <dl_javascript@nhnent.com>
 */
'use strict';

var util = global.ne.util;
var datetime = require('../datetime');
var Layout = require('../view/layout');
var Drag = require('../handler/drag');
var controllerFactory = require('./controller');
var weekViewFactory = require('./weekView');

/**
 * Calendar class
 * @constructor
 * @param {object} options - options for calendar
 * @param {string} [options.defaultView='week'] - default view of calendar
 * @param {object} [options.week] - options for week view
 * @param {string} options.week.renderStartDate - YYYY-MM-DD render start date
 * @param {string} options.week.renderEndDate - YYYY-MM-DD render end date
 * @param {object} [options.month] - options for month view
 * @param {string} options.month.renderMonth - YYYY-MM render month
 * @param {HTMLDivElement} container = container element for calendar
 */
function Calendar(options, container) {
    /**
     * base date of view (today() will use this property)
     * @type {Date}
     */
    this.baseDate = datetime.start(new Date());

    /**
     * default option from service page
     * @type {object}
     */
    this.options = this.setOptions(options);

    /**
     * original options for reference when ui reset
     * @type {object}
     */
    this.originOptions = JSON.parse(JSON.stringify(this.options));

    /**
     * base controller
     * @type {Base}
     */
    this.controller = controllerFactory();

    /**
     * layout view (layout manager)
     * @type {Layout}
     */
    this.view = new Layout(container);

    /**
     * global drag handler
     * @type {Drag}
     */
    this.dragHandler = new Drag(this.view);

    /**
     * current rendered view name.
     * @type {string}
     */
    this.currentViewName = options.defaultView || 'week';

    /**********
     * SETTING
     **********/
    this.view.controller = this.controller;

    function refresh() {
        this.refreshChildView();
    }

    this.controller.on({
        updateEvent: refresh,
        createdEvent: refresh
    }, this);

    this.toggleView(options.defaultView, true);
}

/**
 * Move next.
 */
Calendar.prototype.next = function() {
    this.move(1);
};

/**
 * Move previous.
 */
Calendar.prototype.prev = function() {
    this.move(-1);
};

/**
 * Move to today.
 */
Calendar.prototype.today = function() {
    var currentView = this.getCurrentView(),
        originOptions = this.originOptions;

    if (currentView.viewName === 'week') {
        originOptions = originOptions.week;
        this.options.week = {
            renderStartDate: originOptions.renderStartDate,
            renderEndDate: originOptions.renderEndDate 
        };
        currentView.recursive(function(view) {
            if (!view.options) {
                return;
            }

            view.options.renderStartDate = originOptions.renderStartDate;
            view.options.renderEndDate = originOptions.renderEndDate;
        });
    }

    this.refreshChildView(currentView.viewName);
};

/**
 * Move calendar by direction
 * @param {number} direction - the number that want to move (+1, -1)
 */
Calendar.prototype.move = function(direction) {
    var currentView = this.getCurrentView(),
        options = this.options,

        dateOffset,
        newStart,
        newEnd;

    if (currentView.viewName === 'week') {
        newStart = datetime.start(datetime.parse(options.week.renderStartDate));
        newEnd = datetime.end(datetime.parse(options.week.renderEndDate));
        dateOffset = datetime.range(newStart, newEnd, datetime.MILLISECONDS_PER_DAY).length * direction;
        newStart = datetime.format(new Date(newStart.setDate(newStart.getDate() + dateOffset)), 'YYYY-MM-DD');
        newEnd = datetime.format(new Date(newEnd.setDate(newEnd.getDate() + dateOffset)), 'YYYY-MM-DD');

        options.week = {
            renderStartDate: newStart,
            renderEndDate: newEnd
        };
        currentView.recursive(function(view) {
            if (!view.options) {
                return;
            }

            view.options.renderStartDate = newStart;
            view.options.renderEndDate = newEnd;
        });
    }

    this.refreshChildView(currentView.viewName);
}

/**
 * Return current rendered view.
 * @returns {View} current view instance
 */
Calendar.prototype.getCurrentView = function() {
    return util.pick(this.view.childs.items, this.currentViewName);
}

/**
 * Toggle current view
 * @param {string} viewName - the name of view.
 * @param {boolean} force - force render despite of current view and new view are equal
 */
Calendar.prototype.toggleView = function(viewName, force) {
    var view = this.view,
        controller = this.controller,
        dragHandler = this.dragHandler,
        options = this.options;

    if (!force && this.currentViewName === viewName) {
        return;
    }

    this.currentViewName = viewName;
    view.clear();

    if (viewName === 'week') {
        view.addChild(function() {
            return weekViewFactory(controller, view.container, dragHandler, options);
        });
    }
}

/**
 * Destroy calendar instance.
 */
Calendar.prototype.destory = function() {
    this.dragHandler.destroy();
    this.controller.off();
    this.view.clear();

    this.options = this.baseDate = this.controller =
        this.view = this.dragHandler = null;
}

/**
 * Refresh child views
 * @param {string} [viewName] - the name of view to render. if not supplied then refresh all.
 */
Calendar.prototype.refreshChildView = function(viewName) {
    if (!viewName) {
        this.view.render();
        return;
    }

    this.view.childs.items[viewName].render();
};

/**
 * Create default option
 * @param {object} options - option from service page
 * @returns {object} default option. 
 */
Calendar.prototype.setOptions = function(options) {
    var today = this.baseDate,
        dateRange;

    options = util.extend({
        defaultView: 'week',    // 기본 주간 뷰 설정
        week: null,
        month: null 
    }, options);

    if (!options.week) {
        dateRange = datetime.range(
            datetime.start(new Date(new Date(today).setDate(today.getDate() - 3))),
            datetime.end(new Date(new Date(today).setDate(today.getDate() + 3))),
            datetime.MILLISECONDS_PER_DAY
        );

        options.week = {
            renderStartDate: datetime.format(dateRange[0], 'YYYY-MM-DD'),
            renderEndDate: datetime.format(dateRange[6], 'YYYY-MM-DD')
        };
    }

    if (!options.month) {
        options.month = {
            renderMonth: datetime.format(today, 'YYYY-MM')
        };
    }

    return options;
};

module.exports = Calendar;


}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"../datetime":37,"../handler/drag":56,"../view/layout":66,"./controller":47,"./weekView":48}],47:[function(require,module,exports){
(function (global){
/**
 * @fileoverview Controller factory module.
 * @author NHN Ent. FE Development Team <dl_javascript@nhnent.com>
 */
'use strict';

var util = global.ne.util;
var Base = require('../controller/base');
var Week = require('../controller/viewMixin/week');

/**
 * @returns {Base} The controller instance.
 */
module.exports = function() {
    var controller = new Base();

    controller.Week = {};
    util.forEach(Week, function(method, methodName) {
        controller.Week[methodName] = util.bind(method, controller);
    });

    return controller;
};


}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"../controller/base":35,"../controller/viewMixin/week":36}],48:[function(require,module,exports){
/**
 * @fileoverview Factory module for WeekView
 * @author NHN Ent. FE Development Team <dl_javascript@nhnent.com>
 */
'use strict';

var domutil = require('../common/domutil');

// Parent views
var Week = require('../view/week/week');

// Sub views
var DayName = require('../view/week/dayname');
var TimeGrid = require('../view/week/timeGrid');
var Allday = require('../view/week/allday');

// Handlers
var AlldayCreation = require('../handler/allday/creation');
var AlldayMove = require('../handler/allday/move');
var AlldayResize = require('../handler/allday/resize');
var TimeCreation = require('../handler/time/creation');
var TimeMove = require('../handler/time/move');
var TimeResize = require('../handler/time/resize');

// Base Templates
var weekViewTmpl = require('../view/template/factory/weekView.hbs');

module.exports = function(baseController, layoutContainer, dragHandler, options) {
    var weekView,
        dayNameView,
        alldayView,
        timeGridView,
        alldayCreationHandler,
        alldayMoveHandler,
        alldayResizeHandler,
        timeCreationHandler,
        timeMoveHandler,
        timeResizeHandler;

    weekView = new Week(null, options.week, layoutContainer);

    weekView.container.innerHTML = weekViewTmpl();

    // Dayname
    dayNameView = new DayName(domutil.find('.schedule-view-dayname-layout', weekView.container));
    weekView.addChild(dayNameView);

    // Allday
    alldayView = new Allday(options.week, domutil.find('.schedule-view-allday-layout', weekView.container));
    alldayCreationHandler = new AlldayCreation(dragHandler, alldayView, baseController);
    alldayMoveHandler = new AlldayMove(dragHandler, alldayView, baseController);
    alldayResizeHandler = new AlldayResize(dragHandler, alldayView, baseController);

    weekView.addChild(alldayView);

    // TimeGrid
    timeGridView = new TimeGrid(options.week, domutil.find('.schedule-view-timegrid-layout', weekView.container));
    timeCreationHandler = new TimeCreation(dragHandler, timeGridView, baseController);
    timeMoveHandler = new TimeMove(dragHandler, timeGridView, baseController);
    timeResizeHandler = new TimeResize(dragHandler, timeGridView, baseController);

    weekView.handlers = {
        allday: {
            creation: alldayCreationHandler,
            move: alldayMoveHandler,
            resize: alldayResizeHandler
        },
        time: {
            creation: timeCreationHandler,
            move: timeMoveHandler,
            resize: timeResizeHandler
        }
    };

    weekView.addChild(timeGridView);

    // add controller
    weekView.controller = baseController.Week;

    // add destroy
    weekView._beforeDestroy = function() {
        timeCreationHandler.off();
        timeMoveHandler.off();
        timeResizeHandler.off();
        timeCreationHandler.destroy();
        timeMoveHandler.destroy();
        timeResizeHandler.destroy();

        alldayCreationHandler.off();
        alldayMoveHandler.off();
        alldayResizeHandler.off();
        alldayCreationHandler.destroy();
        alldayMoveHandler.destroy();
        alldayResizeHandler.destroy();

        delete weekView.handlers.time;
        delete weekView.handlers.allday;

        timeCreationHandler = timeMoveHandler = timeResizeHandler = null;
    };

    return weekView;
};

},{"../common/domutil":30,"../handler/allday/creation":50,"../handler/allday/move":52,"../handler/allday/resize":54,"../handler/time/creation":58,"../handler/time/move":60,"../handler/time/resize":62,"../view/template/factory/weekView.hbs":68,"../view/week/allday":77,"../view/week/dayname":78,"../view/week/timeGrid":80,"../view/week/week":81}],49:[function(require,module,exports){
/**
 * @fileoverview Base mixin object for handler/allday
 * @author NHN Ent. FE Development Team <dl_javascript@nhnent.com>
 */
'use strict';
var domutil = require('../../common/domutil');
var domevent = require('../../common/domevent');
var datetime = require('../../datetime');
var common = require('../../common/common');

var config = require('../../config');
var CONTAINER_PADDING_LEFT = config.monthweek.view.CONTAINER_PADDING_LEFT;

var mmax = Math.max,
    mmin = Math.min;

/**
 * @mixin Allday.Core
 */
var alldayCore = {
    /**
     * @param {Allday} alldayView - view instance of allday.
     * @param {MouseEvent} mouseEvent - mouse event object.
     * @returns {function} function that return event data by mouse events.
     */
    _retriveEventData: function(alldayView, mouseEvent) {
        var container = alldayView.container,
            renderStartDate,
            renderEndDate,
            datesInRange,
            containerWidth,
            mousePos,
            dragStartXIndex;

        renderStartDate = datetime.parse(alldayView.options.renderStartDate);
        renderEndDate = datetime.end(datetime.parse(alldayView.options.renderEndDate));
        datesInRange = datetime.range(renderStartDate, renderEndDate, datetime.MILLISECONDS_PER_DAY).length;
        containerWidth = domutil.getSize(container)[0] - CONTAINER_PADDING_LEFT;    // subtract container left padding.

        mousePos = domevent.getMousePosition(mouseEvent, container);
        dragStartXIndex = common.ratio(containerWidth, datesInRange, mousePos[0] - CONTAINER_PADDING_LEFT) | 0;

        /**
         * @param {MouseEvent} mouseEvent - mouse event in drag actions.
         * @returns {object} event data.
         */
        return function(mouseEvent) {
            var pos = domevent.getMousePosition(mouseEvent, container),
                mouseX = pos[0] - CONTAINER_PADDING_LEFT,
                xIndex = common.ratio(containerWidth, datesInRange, mouseX) | 0;

            // apply limitation of creation event X index.
            xIndex = mmax(xIndex, 0);
            xIndex = mmin(xIndex, datesInRange - 1);

            return {
                relatedView: alldayView,
                dragStartXIndex: dragStartXIndex,
                datesInRange: datesInRange,
                xIndex: xIndex
            };
        };
    }
};

module.exports = alldayCore;


},{"../../common/common":27,"../../common/domevent":29,"../../common/domutil":30,"../../config":34,"../../datetime":37}],50:[function(require,module,exports){
(function (global){
/**
 * @fileoverview Handler module for MonthWeek view's creation actions.
 * @author NHN Ent. FE Development Team <dl_javascript@nhnent.com>
 */
'use strict';
var util = global.ne.util;
var datetime = require('../../datetime');
var common = require('../../common/common');
var domutil = require('../../common/domutil');
var alldayCore = require('./core');
var AlldayCreationGuide = require('./creationGuide');

var parseViewIDRx = /^schedule-view-allday-monthweek[\s]schedule-view-(\d+)/;

/**
 * @constructor
 * @implements {Handler}
 * @mixes AlldayCore
 * @mixes CutomEvents
 * @param {Drag} [dragHandler] - Drag handler instance.
 * @param {Allday} [alldayView] - MonthWeek view instance.
 * @param {Base} [baseController] - Base controller instance.
 */
function AlldayCreation(dragHandler, alldayView, baseController) {    // eslint-disable-line
    /**
     * Drag handler instance.
     * @type {Drag}
     */
    this.dragHandler = null;

    /**
     * allday view instance.
     * @type {Allday}
     */
    this.alldayView = null;

    /**
     * Base controller instance.
     * @type {Base}
     */
    this.baseController = null;

    /**
     * @type {function}
     */
    this.getEventDataFunc = null;

    if (arguments.length) {
        this.connect.apply(this, arguments);
    }

    /**
     * @type {AlldayCreationGuide}
     */
    this.guide = new AlldayCreationGuide(this);
}

/**
 * Destroy method
 */
AlldayCreation.prototype.destroy = function() {
    this.guide.destroy();
    this.dragHandler.off(this);
    this.dragHandler = this.alldayView = this.baseController =
        this.getEventDataFunc = null;
};

/**
 * Check dragstart target is expected conditions for this handler.
 * @param {HTMLElement} target - dragstart event handler's target element.
 * @returns {boolean|MonthWeek} return MonthWeek view instance when satiate condition.
 */
AlldayCreation.prototype.checkExpectedCondition = function(target) {
    var cssClass = domutil.getClass(target),
        matches;

    if (cssClass !== 'schedule-view-monthweek-events') {
        return false;
    }

    target = target.parentNode;
    cssClass = domutil.getClass(target);
    matches = cssClass.match(parseViewIDRx);

    if (!matches || matches.length < 2) {
        return false;
    }

    return util.pick(this.alldayView.childs.items, matches[1]);
};

/**
 * Connect handler, view, controller.
 * @param {Drag} [dragHandler] - Drag handler instance.
 * @param {Allday} [alldayView] - MonthWeek view instance.
 * @param {Base} [baseController] - Base controller instance.
 */
AlldayCreation.prototype.connect = function(dragHandler, alldayView, baseController) {
    this.dragHandler = dragHandler;
    this.alldayView = alldayView;
    this.baseController = baseController;

    dragHandler.on({
        dragStart: this._onDragStart
    }, this);
};

/**
 * Request event model creation to controller by custom events.
 * @param {object} eventData - event data from AlldayCreation module.
 */
AlldayCreation.prototype._createEvent = function(eventData) {
    var title = window.prompt('Name of event to create:'),
        ctrl = this.baseController,
        viewOptions = eventData.relatedView.options,
        dateRange = datetime.range(
            datetime.start(datetime.parse(viewOptions.renderStartDate)),
            datetime.end(datetime.parse(viewOptions.renderEndDate)),
            datetime.MILLISECONDS_PER_DAY
        ),
        startXIndex = eventData.dragStartXIndex,
        xIndex = eventData.xIndex,
        newStarts,
        newEnds;

    this.guide.clearGuideElement();

    if (!title) {
        return;
    }

    // when inverse start, end then change it.
    if (xIndex < startXIndex) {
        startXIndex = xIndex + startXIndex;
        xIndex = startXIndex - xIndex;
        startXIndex = startXIndex - xIndex;
    }

    newStarts = new Date(dateRange[startXIndex].getTime());
    newEnds = datetime.end(dateRange[xIndex]);

    // request event creation to "base" controller.
    ctrl.createEvent({
        title: title,
        isAllDay: true,
        starts: newStarts,
        ends: newEnds
    });
};

/**
 * DragStart event handler method.
 * @emits AlldayCreation#allday_creation_dragstart
 * @param {object} dragStartEventData - Drag#dragStart event handler event data.
 */
AlldayCreation.prototype._onDragStart = function(dragStartEventData) {
    var target = dragStartEventData.target,
        result = this.checkExpectedCondition(target),
        getEventDataFunc,
        eventData;

    if (!result) {
        return;
    }

    this.dragHandler.on({
        drag: this._onDrag,
        dragEnd: this._onDragEnd,
        click: this._onClick
    }, this);

    getEventDataFunc = this.getEventDataFunc = this._retriveEventData(this.alldayView, dragStartEventData.originEvent);
    eventData = getEventDataFunc(dragStartEventData.originEvent);

    /**
     * @event AlldayCreation#allday_creation_dragstart
     * @type {object}
     * @property {AlldayView} relatedView - allday view instance.
     * @property {number} datesInRange - date count of this view.
     * @property {number} dragStartXIndex - index number of dragstart grid index.
     * @property {number} xIndex - index number of mouse positions.
     */
    this.fire('allday_creation_dragstart', eventData);
};

/**
 * Drag event handler method.
 * @emits AlldayCreation#allday_creation_drag
 * @param {object} dragEventData - Drag#drag event handler eventdata.
 */
AlldayCreation.prototype._onDrag = function(dragEventData) {
    var getEventDataFunc = this.getEventDataFunc,
        eventData;

    if (!getEventDataFunc) {
        return;
    }

    eventData = getEventDataFunc(dragEventData.originEvent);

    /**
     * @event AlldayCreation#allday_creation_drag
     * @type {object}
     * @property {AlldayView} relatedView - allday view instance.
     * @property {number} datesInRange - date count of this view.
     * @property {number} dragStartXIndex - index number of dragstart grid index.
     * @property {number} xIndex - index number of mouse positions.
     */
    this.fire('allday_creation_drag', eventData);
};

/**
 * DragEnd event hander method.
 * @emits AlldayCreation#allday_creation_dragend
 * @param {object} dragEndEventData - Drag#DragEnd event handler data.
 * @param {string} [overrideEventName] - override emitted event name when supplied.
 */
AlldayCreation.prototype._onDragEnd = function(dragEndEventData, overrideEventName) {
    var getEventDataFunc = this.getEventDataFunc,
        eventData;

    if (!getEventDataFunc) {
        return;
    }

    this.dragHandler.off({
        drag: this._onDrag,
        dragEnd: this._onDragEnd,
        click: this._onClick
    }, this);

    eventData = getEventDataFunc(dragEndEventData.originEvent);

    this._createEvent(eventData);

    /**
     * @event AlldayCreation#allday_creation_dragend
     * @type {object}
     * @property {AlldayView} relatedView - allday view instance.
     * @property {number} datesInRange - date count of this view.
     * @property {number} dragStartXIndex - index number of dragstart grid index.
     * @property {number} xIndex - index number of mouse positions.
     */
    this.fire(overrideEventName || 'allday_creation_dragend', eventData);

    this.getEventDataFunc = null;
};

/**
 * Click event handler method.
 * @emits AlldayCreation#allday_creation_click
 * @param {object} clickEventData - Drag#Click event handler data.
 */
AlldayCreation.prototype._onClick = function(clickEventData) {
    /**
     * @event AlldayCreation#allday_creation_click
     * @type {object}
     * @property {AlldayView} relatedView - allday view instance.
     * @property {number} datesInRange - date count of this view.
     * @property {number} dragStartXIndex - index number of dragstart grid index.
     * @property {number} xIndex - index number of mouse positions.
     */
    this._onDragEnd(clickEventData, 'allday_creation_click');
};

common.mixin(alldayCore, AlldayCreation);
util.CustomEvents.mixin(AlldayCreation);

module.exports = AlldayCreation;


}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"../../common/common":27,"../../common/domutil":30,"../../datetime":37,"./core":49,"./creationGuide":51}],51:[function(require,module,exports){
/**
 * @fileoverview Guide element for Allday.Creation
 * @author NHN Ent. FE Development Team <dl_javascript@nhnent.com>
 */
'use strict';
var domutil = require('../../common/domutil');
var reqAnimFrame = require('../../common/reqAnimFrame');
var config = require('../../config');
var EVENT_TOP_MARGIN = config.monthweek.view.EVENT_TOP_MARGIN;
var TEXT_FOR_NEW_EVENT = config.monthweek.handler.guide.TEXT_FOR_NEW_EVENT;

/**
 * Class for Allday.Creation dragging effect.
 * @constructor
 * @param {AlldayCreation} alldayCreation - instance of AlldayCreation.
 */
function AlldayCreationGuide(alldayCreation) {
    /**
     * @type {AlldayCreation}
     */
    this.alldayCreation = alldayCreation;

    /**
     * @type {HTMLDIVElement}
     */
    this.eventContainer = null;

    /**
     * @type {HTMLDIVElement}
     */
    this.guideElement = document.createElement('div');

    this.initializeGuideElement();

    alldayCreation.on({
        'allday_creation_dragstart': this._onDragStart,
        'allday_creation_drag': this._onDrag,
        // 'allday_creation_dragend': this.clearGuideElement,
        'allday_creation_click': this.clearGuideElement
    }, this);
}

/**
 * Destroy method
 */
AlldayCreationGuide.prototype.destroy = function() {
    this.clearGuideElement();
    this.alldayCreation.off(this);
    this.alldayCreation = this.eventContainer =
        this.guideElement = null;
};

/**
 * initialize guide element's default style.
 */
AlldayCreationGuide.prototype.initializeGuideElement = function() {
    var guideElement = this.guideElement,
        alldayView = this.alldayCreation.alldayView,
        eventBlockHeight = alldayView.options.eventBlockHeight,
        spanElement;

    domutil.addClass(guideElement, 'schedule-view-allday-creation-guide-block');
    domutil.appendHTMLElement('div', guideElement, 'schedule-view-allday-creation-guide');
    spanElement = domutil.appendHTMLElement('span', guideElement);
    spanElement.innerHTML = TEXT_FOR_NEW_EVENT;

    guideElement.style.height = (eventBlockHeight - EVENT_TOP_MARGIN) + 'px';
};

/**
 * Refresh guide element.
 * @param {object} eventData - event data from Allday.Creation handler.
 */
AlldayCreationGuide.prototype._refreshGuideElement = function(eventData) {
    var guideElement = this.guideElement,
        baseWidthPercent = (100 / eventData.datesInRange),
        dragStartXIndex = eventData.dragStartXIndex,
        xIndex = eventData.xIndex,
        length = xIndex - dragStartXIndex,
        leftPercent,
        widthPercent;

    // when revert dragging.
    if (length < 0) {
        dragStartXIndex = xIndex;
        length = Math.abs(length);
    }

    leftPercent = baseWidthPercent * dragStartXIndex;
    widthPercent = baseWidthPercent * (length + 1);

    reqAnimFrame.requestAnimFrame(function() {
        guideElement.style.display = 'block';
        guideElement.style.left = leftPercent + '%';
        guideElement.style.width = widthPercent + '%';
    });
};

/**
 * Clear guide element.
 */
AlldayCreationGuide.prototype.clearGuideElement = function() {
    var guideElement = this.guideElement;

    domutil.remove(guideElement);

    guideElement.style.display = 'none';
    guideElement.style.left = '';
    guideElement.style.width = '';
};

/**
 * DragStart event handler.
 * @param {object} dragStartEventData - event data object of Allday.Creation.
 */
AlldayCreationGuide.prototype._onDragStart = function(dragStartEventData) {
    var alldayCreation = this.alldayCreation,
        alldayView = alldayCreation.alldayView,
        alldayContainerElement = alldayView.container,
        eventContainer = domutil.find('.schedule-view-monthweek-events', alldayContainerElement);

    eventContainer.appendChild(this.guideElement);
    this._refreshGuideElement(dragStartEventData);
};

/**
 * Drag event handler.
 * @param {object} dragEventData - event data object of Allday.Creation.
 */
AlldayCreationGuide.prototype._onDrag = function(dragEventData) {
    this._refreshGuideElement(dragEventData);
};

module.exports = AlldayCreationGuide;


},{"../../common/domutil":30,"../../common/reqAnimFrame":33,"../../config":34}],52:[function(require,module,exports){
(function (global){
/**
 * @fileoverview Move handler for Allday view.
 * @author NHN Ent. FE Development Team <dl_javascript@nhnent.com>
 */
'use strict';
var util = global.ne.util;
var common = require('../../common/common');
var domutil = require('../../common/domutil');
var AlldayCore = require('./core');
var AlldayMoveGuide = require('./moveGuide');

var checkExpectedConditionIDRx = /^schedule-view-allday-event(-title)?$/;
var parseViewIDRx = /^schedule-view-allday-monthweek[\s]schedule-view-(\d+)/;

/**
 * @constructor
 * @implements {Handler}
 * @mixes AlldayCore
 * @mixes CustomEvents
 * @param {Drag} [dragHandler] - Drag handler instance.
 * @param {Allday} [alldayView] - MonthWeek view instance.
 * @param {Base} [baseController] - Base controller instance.
 */
function AlldayMove(dragHandler, alldayView, baseController) {
    /**
     * Drag handler instance.
     * @type {Drag}
     */
    this.dragHandler = dragHandler;

    /**
     * allday view instance.
     * @type {Allday}
     */
    this.alldayView = alldayView;

    /**
     * Base controller instance.
     * @type {Base}
     */
    this.baseController = baseController;

    /**
     * Temporary variable for dragstart event data.
     * @type {object}
     */
    this._dragStart = null;

    dragHandler.on({
        dragStart: this._onDragStart
    }, this);

    /**
     * @type {AlldayMoveGuide}
     */
    this.guide = new AlldayMoveGuide(this);
}

AlldayMove.prototype.destroy = function() {
    this.guide.destroy();
    this.dragHandler.off(this);
    this.dragHandler = this.alldayView = this.baseController =
        this.guide = this._dragStart = null;
};

/**
 * Check dragstart target is expected conditions for this handler.
 * @param {HTMLElement} target - dragstart event handler's target element.
 * @returns {boolean|MonthWeek} return MonthWeek view instance when satiate condition.
 */
AlldayMove.prototype.checkExpectedCondition = function(target) {
    var cssClass = domutil.getClass(target),
        parentView,
        matches;

    if (!checkExpectedConditionIDRx.test(cssClass)) {
        return false;
    }

    parentView = domutil.closest(target, '.schedule-view-allday-monthweek');

    if (!parentView) {
        return false;
    }

    cssClass = domutil.getClass(parentView);
    matches = cssClass.match(parseViewIDRx);

    if (!matches || matches.length < 2) {
        return false;
    }

    return util.pick(this.alldayView.childs.items, matches[1]);
};

/**
 * DragStart event handler method.
 * @emits AlldayMove#allday_move_dragstart
 * @param {object} dragStartEventData - Drag#dragStart event handler event data.
 */
AlldayMove.prototype._onDragStart = function(dragStartEventData) {
    var target = dragStartEventData.target,
        result = this.checkExpectedCondition(target),
        controller = this.baseController,
        eventBlockElement,
        modelID,
        targetModel,
        getEventDataFunc,
        eventData;

    if (!result) {
        return;
    }

    eventBlockElement = domutil.closest(target, '.schedule-view-allday-event-block');
    modelID = domutil.getData(eventBlockElement, 'id');
    targetModel = controller.events.items[modelID];

    if (!targetModel) {
        return;
    }

    getEventDataFunc = this.getEventDataFunc = this._retriveEventData(this.alldayView, dragStartEventData.originEvent);
    eventData = this._dragStart = getEventDataFunc(dragStartEventData.originEvent);

    util.extend(eventData, {
        eventBlockElement: eventBlockElement,
        model: targetModel
    });

    this.dragHandler.on({
        drag: this._onDrag,
        dragEnd: this._onDragEnd,
        click: this._onClick
    }, this);

    /**
     * @event AlldayMove#allday_move_dragstart
     * @type {object}
     * @property {AlldayView} relatedView - allday view instance.
     * @property {number} datesInRange - date count of this view.
     * @property {number} dragStartXIndex - index number of dragstart grid index.
     * @property {number} xIndex - index number of mouse positions.
     * @property {Event} model - data object of model isntance.
     * @property {HTMLDivElement} eventBlockElement - target event block element.
     */
    this.fire('allday_move_dragstart', eventData);
};


/**
 * Drag event handler method.
 * @emits AlldayMove#allday_move_drag
 * @param {object} dragEventData - Drag#drag event handler eventdata.
 */
AlldayMove.prototype._onDrag = function(dragEventData) {
    var getEventDataFunc = this.getEventDataFunc;

    if (!getEventDataFunc) {
        return;
    }

    /**
     * @event AlldayMove#allday_move_drag
     * @type {object}
     * @property {AlldayView} relatedView - allday view instance.
     * @property {number} datesInRange - date count of this view.
     * @property {number} dragStartXIndex - index number of dragstart grid index.
     * @property {number} xIndex - index number of mouse positions.
     */
    this.fire('allday_move_drag', getEventDataFunc(dragEventData.originEvent));
};

/**
 * Request update event model to base controller.
 * @param {object} eventData - event data from AlldayMove handler module.
 */
AlldayMove.prototype._updateEvent = function(eventData) {
    var ctrl = this.baseController,
        model = eventData.targetModel,
        dateOffset = eventData.xIndex - eventData.dragStartXIndex,
        newStarts = new Date(model.starts.getTime()),
        newEnds = new Date(model.ends.getTime());

    newStarts = new Date(newStarts.setDate(newStarts.getDate() + dateOffset));
    newEnds = new Date(newEnds.setDate(newEnds.getDate() + dateOffset));

    ctrl.updateEvent(model.id(), {
        starts: newStarts,
        ends: newEnds
    });
};

/**
 * DragEnd event hander method.
 * @emits AlldayMove#allday_move_dragend
 * @param {object} dragEndEventData - Drag#DragEnd event handler data.
 * @param {string} [overrideEventName] - override emitted event name when supplied.
 * @param {?boolean} skipUpdate - true then skip update event model.
 */
AlldayMove.prototype._onDragEnd = function(dragEndEventData, overrideEventName, skipUpdate) {
    var getEventDataFunc = this.getEventDataFunc,
        dragStart = this._dragStart,
        eventData;

    if (!getEventDataFunc || !dragStart) {
        return;
    }

    this.dragHandler.off({
        drag: this._onDrag,
        dragEnd: this._onDragEnd,
        click: this._onClick
    }, this);

    eventData = getEventDataFunc(dragEndEventData.originEvent);
    util.extend(eventData, {
        targetModel: dragStart.model
    });
    
    if (!skipUpdate) {
        this._updateEvent(eventData);
    }

    /**
     * @event AlldayMove#allday_move_dragend
     * @type {object}
     * @property {AlldayView} relatedView - allday view instance.
     * @property {number} datesInRange - date count of this view.
     * @property {number} dragStartXIndex - index number of dragstart grid index.
     * @property {number} xIndex - index number of mouse positions.
     */
    this.fire(overrideEventName || 'allday_move_dragend', eventData);

    this.getEventDataFunc = this._dragStart = null;
};

/**
 * Click event handler method.
 * @emits AlldayMove#allday_move_click
 * @param {object} clickEventData - Drag#Click event handler data.
 */
AlldayMove.prototype._onClick = function(clickEventData) {
    /**
     * @event AlldayMove#allday_move_click
     * @type {object}
     * @property {AlldayView} relatedView - allday view instance.
     * @property {number} datesInRange - date count of this view.
     * @property {number} dragStartXIndex - index number of dragstart grid index.
     * @property {number} xIndex - index number of mouse positions.
     */
    this._onDragEnd(clickEventData, 'allday_move_click', true);
};

common.mixin(AlldayCore, AlldayMove);
util.CustomEvents.mixin(AlldayMove);

module.exports = AlldayMove;


}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"../../common/common":27,"../../common/domutil":30,"./core":49,"./moveGuide":53}],53:[function(require,module,exports){
(function (global){
/**
 * @fileoverview Effect module for Allday.Move
 * @author NHN Ent. FE Development Team <dl_javascript@nhnent.com>
 */
'use strict';
var util = global.ne.util;
var datetime = require('../../datetime');
var domutil = require('../../common/domutil');
var reqAnimFrame = require('../../common/reqAnimFrame');

/**
 * Class for Allday.Move dragging effect.
 * @constructor
 * @param {AlldayMove} alldayMove - instance of AlldayMove.
 */
function AlldayMoveGuide(alldayMove) {
    /**
     * @type {AlldayMove}
     */
    this.alldayMove = alldayMove;

    /**
     * 실제로 이벤트 엘리먼트를 담는 엘리먼트
     * @type {HTMLDIVElement}
     */
    this.eventContainer = null;

    /**
     * @type {number}
     */
    this._dragStartXIndex = null;

    /**
     * @type {HTMLDIVElement}
     */
    this.guideElement = null;

    alldayMove.on({
        'allday_move_dragstart': this._onDragStart,
        'allday_move_drag': this._onDrag,
        'allday_move_dragend': this._clearGuideElement,
        'allday_move_click': this._clearGuideElement
    }, this);
}

/**
 * Destroy method
 */
AlldayMoveGuide.prototype.destroy = function() {
    this._clearGuideElement();
    this.alldayMove.off(this);
    this.alldayMove = this.eventContainer = this._dragStartXIndex =
        this.guideElement = null;
};

/**
 * Clear guide element.
 */
AlldayMoveGuide.prototype._clearGuideElement = function() {
    domutil.remove(this.guideElement);

    if (!util.browser.msie) {
        domutil.removeClass(global.document.body, 'schedule-view-dragging');
    }

    this._dragStartXIndex = this.getEventDataFunc = this.guideElement = null;
};

/**
 * Refresh guide element.
 * @param {number} leftPercent - left percent of guide element.
 * @param {number} widthPercent - width percent of guide element.
 * @param {boolean} isExceededLeft - event starts is faster then render start date?
 * @param {boolean} isExceededRight - event ends is later then render end date?
 */
AlldayMoveGuide.prototype.refreshGuideElement = function(leftPercent, widthPercent, isExceededLeft, isExceededRight) {
    var guideElement = this.guideElement;

    reqAnimFrame.requestAnimFrame(function() {
        guideElement.style.left = leftPercent + '%';
        guideElement.style.width = widthPercent + '%';

        if (isExceededLeft) {
            domutil.addClass(guideElement, 'schedule-view-allday-exceed-left');
        } else {
            domutil.removeClass(guideElement, 'schedule-view-allday-exceed-left');
        }

        if (isExceededRight) {
            domutil.addClass(guideElement, 'schedule-view-allday-exceed-right');
        } else {
            domutil.removeClass(guideElement, 'schedule-view-allday-exceed-right');
        }
    });
};

/**
 * Get event block information from event data.
 *
 * For example, there is single event has 10 length. but render range in view is 5 then
 * rendered block must be cut out to render properly. in this case, this method return
 * how many block are cut before rendering.
 * 
 * 이벤트 데이터에서 이벤트 블록 엘리먼트 렌더링에 대한 필요 정보를 추출한다.
 *
 * ex) 렌더링 된 블록의 길이는 5지만 실제 이 이벤트는 10의 길이를 가지고 있을 때
 * 좌 우로 몇 만큼 잘려있는지에 관한 정보를 반환함.
 * @param {object} dragStartEventData - event data from Allday.Move handler.
 * @returns {function} function that return event block information.
 */
AlldayMoveGuide.prototype._getEventBlockDataFunc = function(dragStartEventData) {
    var model = dragStartEventData.model,
        datesInRange = dragStartEventData.datesInRange,
        baseWidthPercent = (100 / datesInRange),
        originEventStarts = datetime.start(model.starts),
        originEventEnds = datetime.end(model.ends),
        viewOptions = this.alldayMove.alldayView.options,
        renderStartDate = datetime.start(datetime.parse(viewOptions.renderStartDate)),
        renderEndDate = datetime.end(datetime.parse(viewOptions.renderEndDate)),
        fromLeft = (new Date(originEventStarts.getTime() - renderStartDate.getTime())) / datetime.MILLISECONDS_PER_DAY | 0,
        fromRight = (new Date(originEventEnds.getTime() - renderEndDate.getTime())) / datetime.MILLISECONDS_PER_DAY | 0;

    return function(indexOffset) {
        return {
            baseWidthPercent: baseWidthPercent,
            fromLeft: fromLeft + indexOffset,
            fromRight: fromRight + indexOffset
        };
    };
};

/**
 * DragStart event handler.
 * @param {object} dragStartEventData - event data.
 */
AlldayMoveGuide.prototype._onDragStart = function(dragStartEventData) {
    var alldayViewContainer = this.alldayMove.alldayView.container,
        guideElement = this.guideElement = dragStartEventData.eventBlockElement.cloneNode(true),
        eventContainer;

    if (!util.browser.msie) {
        domutil.addClass(global.document.body, 'schedule-view-dragging');
    }

    eventContainer = domutil.find('.schedule-view-monthweek-events', alldayViewContainer);
    domutil.addClass(guideElement, 'schedule-view-allday-move-guide');
    eventContainer.appendChild(guideElement);

    this._dragStartXIndex = dragStartEventData.xIndex;
    this.getEventDataFunc = this._getEventBlockDataFunc(dragStartEventData);
};

/**
 * Drag event handler.
 * @param {object} dragEventData - event data.
 */
AlldayMoveGuide.prototype._onDrag = function(dragEventData) {
    var getEventDataFunc = this.getEventDataFunc,
        dragStartXIndex = this._dragStartXIndex,
        datesInRange = dragEventData.datesInRange,
        eventData,
        isExceededLeft,
        isExceededRight,
        originLength,
        newLeft,
        newWidth;

    if (!getEventDataFunc) {
        return;
    }

    eventData = getEventDataFunc(dragEventData.xIndex - dragStartXIndex);
    isExceededLeft = eventData.fromLeft < 0;
    isExceededRight = eventData.fromRight > 0;

    newLeft = Math.max(0, eventData.fromLeft);
    originLength = (eventData.fromLeft * -1) + (datesInRange + eventData.fromRight);
    newWidth = isExceededLeft ? (originLength + eventData.fromLeft) : originLength;
    newWidth = isExceededRight ? (newWidth - eventData.fromRight) : newWidth;

    newLeft *= eventData.baseWidthPercent;
    newWidth *= eventData.baseWidthPercent;

    this.refreshGuideElement(newLeft, newWidth, isExceededLeft, isExceededRight);
};

module.exports = AlldayMoveGuide;


}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"../../common/domutil":30,"../../common/reqAnimFrame":33,"../../datetime":37}],54:[function(require,module,exports){
(function (global){
/**
 * @fileoverview Resize handler module for Allday view.
 * @author NHN Ent. FE Development Team <dl_javascript@nhnent.com>
 */
'use strict';
var util = global.ne.util;
var datetime = require('../../datetime');
var domutil = require('../../common/domutil');
var common = require('../../common/common');
var AlldayCore = require('./core');
var AlldayResizeGuide = require('./resizeGuide');

var parseViewIDRx = /^schedule-view-allday-monthweek[\s]schedule-view-(\d+)/;

/**
 * @constructor
 * @implements {Handler}
 * @mixes AlldayCore
 * @mixes CustomEvents
 * @param {Drag} [dragHandler] - Drag handler instance.
 * @param {Allday} [alldayView] - MonthWeek view instance.
 * @param {Base} [baseController] - Base controller instance.
 */
function AlldayResize(dragHandler, alldayView, baseController) {
    /**
     * Drag handler instance.
     * @type {Drag}
     */
    this.dragHandler = dragHandler;

    /**
     * allday view instance.
     * @type {Allday}
     */
    this.alldayView = alldayView;

    /**
     * Base controller instance.
     * @type {Base}
     */
    this.baseController = baseController;

    /**
     * Temporary variable for dragStart event data.
     * @type {object}
     */
    this._dragStart = null;

    dragHandler.on({
        dragStart: this._onDragStart
    }, this);

    /**
     * @type {AlldayResizeGuide}
     */
    this.guide = new AlldayResizeGuide(this);
}

/**
 * Destroy method
 */
AlldayResize.prototype.destroy = function() {
    this.guide.destroy();
    this.dragHandler.off(this);
    this.dragHandler = this.alldayView = this.baseController =
        this.guide = this._dragStart = null;
};

/**
 * Check dragstart target is expected conditions for this handler.
 * @param {HTMLElement} target - dragstart event handler's target element.
 * @returns {boolean|MonthWeek} return MonthWeek view instance when satiate condition.
 */
AlldayResize.prototype.checkExpectedCondition = function(target) {
    var cssClass = domutil.getClass(target),
        matches;

    if (!~cssClass.indexOf('schedule-view-allday-resize-handle')) {
        return false;
    }

    target = domutil.closest(target, '.schedule-view-allday-monthweek');

    if (!target) {
        return false;
    }

    cssClass = domutil.getClass(target);
    matches = cssClass.match(parseViewIDRx);

    if (!matches || matches.length < 2) {
        return false;
    }

    return util.pick(this.alldayView.childs.items, matches[1]);
};

/**
 * DragStart event handler.
 * @emits AlldayResize#allday_resize_dragstart
 * @param {object} dragStartEventData - event data.
 */
AlldayResize.prototype._onDragStart = function(dragStartEventData) {
    var target = dragStartEventData.target,
        result = this.checkExpectedCondition(target),
        controller = this.baseController,
        eventBlockElement,
        modelID,
        targetModel,
        getEventDataFunc,
        eventData;

    if (!result) {
        return;
    }

    eventBlockElement = domutil.closest(target, '.schedule-view-allday-event-block');
    modelID = domutil.getData(eventBlockElement, 'id');
    targetModel = controller.events.items[modelID];

    if (!targetModel) {
        return;
    }

    getEventDataFunc = this.getEventDataFunc = this._retriveEventData(this.alldayView, dragStartEventData.originEvent);
    eventData = this._dragStart = getEventDataFunc(dragStartEventData.originEvent);

    util.extend(eventData, {
        eventBlockElement: eventBlockElement,
        model: targetModel
    });

    this.dragHandler.on({
        drag: this._onDrag,
        dragEnd: this._onDragEnd,
        click: this._onClick
    }, this);

    /**
     * @event AlldayResize#allday_resize_dragstart
     * @type {object}
     * @property {AlldayView} relatedView - allday view instance.
     * @property {number} datesInRange - date count of this view.
     * @property {number} dragStartXIndex - index number of dragstart grid index.
     * @property {number} xIndex - index number of mouse positions.
     * @property {Event} model - data object of model isntance.
     * @property {HTMLDivElement} eventBlockElement - target event block element.
     */
    this.fire('allday_resize_dragstart', eventData);
};

/**
 * Drag event handler method.
 * @emits AlldayResize#allday_resize_drag
 * @param {object} dragEventData - Drag#drag event handler eventdata.
 */
AlldayResize.prototype._onDrag = function(dragEventData) {
    var getEventDataFunc = this.getEventDataFunc;

    if (!getEventDataFunc) {
        return;
    }

    /**
     * @event AlldayResize#allday_resize_drag
     * @type {object}
     * @property {AlldayView} relatedView - allday view instance.
     * @property {number} datesInRange - date count of this view.
     * @property {number} dragStartXIndex - index number of dragstart grid index.
     * @property {number} xIndex - index number of mouse positions.
     */
    this.fire('allday_resize_drag', getEventDataFunc(dragEventData.originEvent));
};

/**
 * Request update event instance to base controller.
 * @param {object} eventData - event data from AlldayResize handler.
 */
AlldayResize.prototype._updateEvent = function(eventData) {
    var ctrl = this.baseController,
        model = eventData.targetModel,
        dateOffset = eventData.xIndex - eventData.dragStartXIndex,
        newEnds = new Date(model.ends.getTime());

    newEnds = new Date(newEnds.setDate(newEnds.getDate() + dateOffset));
    newEnds = new Date(Math.max(datetime.end(model.starts).getTime(), newEnds.getTime()));

    ctrl.updateEvent(model.id(), {
        ends: newEnds
    });
};

/**
 * DragEnd event hander method.
 * @emits AlldayResize#allday_resize_dragend
 * @param {object} dragEndEventData - Drag#DragEnd event handler data.
 * @param {string} [overrideEventName] - override emitted event name when supplied.
 * @param {?boolean} skipUpdate - true then skip update event model.
 */
AlldayResize.prototype._onDragEnd = function(dragEndEventData, overrideEventName, skipUpdate) {
    var getEventDataFunc = this.getEventDataFunc,
        dragStart = this._dragStart,
        eventData;

    if (!getEventDataFunc || !dragStart) {
        return;
    }

    this.dragHandler.off({
        drag: this._onDrag,
        dragEnd: this._onDragEnd,
        click: this._onClick
    }, this);

    eventData = getEventDataFunc(dragEndEventData.originEvent);
    util.extend(eventData, {
        targetModel: dragStart.model
    });

    if (!skipUpdate) {
        this._updateEvent(eventData);
    }

    /**
     * @event AlldayResize#allday_resize_dragend
     * @type {object}
     * @property {AlldayView} relatedView - allday view instance.
     * @property {number} datesInRange - date count of this view.
     * @property {number} dragStartXIndex - index number of dragstart grid index.
     * @property {number} xIndex - index number of mouse positions.
     */
    this.fire(overrideEventName || 'allday_resize_dragend', eventData);

    this.getEventDataFunc = this._dragStart = null;
};

/**
 * Click event handler method.
 * @emits AlldayResize#allday_resize_click
 * @param {object} clickEventData - Drag#Click event handler data.
 */
AlldayResize.prototype._onClick = function(clickEventData) {
    /**
     * @event AlldayResize#allday_resize_click
     * @type {object}
     * @property {AlldayView} relatedView - allday view instance.
     * @property {number} datesInRange - date count of this view.
     * @property {number} dragStartXIndex - index number of dragstart grid index.
     * @property {number} xIndex - index number of mouse positions.
     */
    this._onDragEnd(clickEventData, 'allday_resize_click', true);
};

common.mixin(AlldayCore, AlldayResize);
util.CustomEvents.mixin(AlldayResize);

module.exports = AlldayResize;


}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"../../common/common":27,"../../common/domutil":30,"../../datetime":37,"./core":49,"./resizeGuide":55}],55:[function(require,module,exports){
(function (global){
/**
 * @fileoverview Resize Guide module.
 * @author NHN Ent. FE Development Team <dl_javascript@nhnent.com>
 */
'use strict';
var util = window.ne.util;
var domutil = require('../../common/domutil');
var datetime = require('../../datetime');
var reqAnimFrame = require('../../common/reqAnimFrame');


/**
 * @constructor
 * @param {AlldayResize} alldayResize - instance of AlldayResize
 */
function AlldayResizeGuide(alldayResize) {
    /**
     * @type {AlldayResize}
     */
    this.alldayResize = alldayResize;

    /**
     * 실제로 이벤트 엘리먼트를 담는 엘리먼트
     * @type {HTMLDIVElement}
     */
    this.eventContainer = null;

    /**
     * @type {function}
     */
    this.getEventDataFunc = null;

    /**
     * @type {HTMLDIVElement}
     */
    this.guideElement = null;

    alldayResize.on({
        'allday_resize_dragstart': this._onDragStart,
        'allday_resize_drag': this._onDrag,
        'allday_resize_dragend': this._clearGuideElement,
        'allday_resize_click': this._clearGuideElement
    }, this);
}

/**
 * Destroy method
 */
AlldayResizeGuide.prototype.destroy = function() {
    this._clearGuideElement();
    this.alldayResize.off(this);
    this.alldayResize = this.eventContainer = this.getEventDataFunc =
        this.guideElement = null;
};

/**
 * Clear guide element.
 */
AlldayResizeGuide.prototype._clearGuideElement = function() {
    domutil.remove(this.guideElement);

    if (!util.browser.msie) {
        domutil.removeClass(global.document.body, 'schedule-view-resizing-x');
    }

    this.getEventDataFunc = null;
};

/**
 * Refresh guide element
 * @param {number} newWidth - new width percentage value to resize guide element.
 */
AlldayResizeGuide.prototype.refreshGuideElement = function(newWidth) {
    var guideElement = this.guideElement;

    reqAnimFrame.requestAnimFrame(function() {
        guideElement.style.width = newWidth + '%';
    });
};

/**
 * Return function that calculate guide element's new width percentage value.
 * @param {object} dragStartEventData - dragstart event data.
 * @returns {function} return function that calculate guide element new width percentage.
 */
AlldayResizeGuide.prototype.getGuideElementWidthFunc = function(dragStartEventData) {
    var model = dragStartEventData.model,
        viewOptions = this.alldayResize.alldayView.options,
        startDate = datetime.start(new Date(Math.max(model.starts.getTime(), datetime.parse(viewOptions.renderStartDate).getTime()))),
        endDate = datetime.end(new Date(Math.min(model.ends.getTime(), datetime.parse(viewOptions.renderEndDate).getTime()))),
        originLength = datetime.range(startDate, endDate, datetime.MILLISECONDS_PER_DAY).length,
        baseWidthPercent = 100 / dragStartEventData.datesInRange,
        dragStartIndex = dragStartEventData.xIndex;

    return function(xIndex) {
        var offset = xIndex - dragStartIndex,
            newLength = originLength + offset;

        newLength = Math.max(1, newLength);

        return newLength * baseWidthPercent;
    }
};

/**
 * DragStart event handler.
 * @param {object} dragStartEventData - event data.
 */
AlldayResizeGuide.prototype._onDragStart = function(dragStartEventData) {
    var alldayViewContainer = this.alldayResize.alldayView.container,
        guideElement = this.guideElement = dragStartEventData.eventBlockElement.cloneNode(true),
        eventContainer;

    if (!util.browser.msie) {
        domutil.addClass(global.document.body, 'schedule-view-resizing-x');
    }

    eventContainer = domutil.find('.schedule-view-monthweek-events', alldayViewContainer);
    domutil.addClass(guideElement, 'schedule-view-allday-move-guide');
    eventContainer.appendChild(guideElement);

    this.getEventDataFunc = this.getGuideElementWidthFunc(dragStartEventData);
};

/**
 * Drag event handler.
 * @param {object} dragEventData - event data.
 */
AlldayResizeGuide.prototype._onDrag = function(dragEventData) {
    var func = this.getEventDataFunc;

    if (!func) {
        return;
    }

    this.refreshGuideElement(func(dragEventData.xIndex));
};

module.exports = AlldayResizeGuide;


}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"../../common/domutil":30,"../../common/reqAnimFrame":33,"../../datetime":37}],56:[function(require,module,exports){
(function (global){
/**
 * @fileoverview Drag handler for calendar.
 * @author NHN Ent. FE Development Team <dl_javascript@nhnent.com>
 */
'use strict';

var util = global.ne.util;
var domutil = require('../common/domutil');
var domevent = require('../common/domevent');

/**
 * @constructor
 * @mixes CustomEvents
 * @param {LayoutView} layoutView Layout view instance.
 */
function Drag(layoutView) {
    var container = layoutView.container;

    domevent.on(container, 'mousedown', this._onMouseDown, this);

    /**
     * @type {HTMLElement}
     */
    this.container = container;

    /**
     * @type {boolean}
     */
    this._isMoved = false;
}

/**
 * Destroy method.
 */
Drag.prototype.destroy = function() {
    domevent.off(this.container, 'mousedown', this._onMouseDown, this);
    this._isMoved = null;
    this.container = null;
};

/**
 * Toggle events for mouse dragging.
 * @param {boolean} toBind - bind events related with dragging when supplied "true"
 */
Drag.prototype._toggleDragEvent = function(toBind) {
    var container = this.container,
        domMethod,
        method;

    if (toBind) {
        domMethod = 'on';
        method = 'disable';
    } else {
        domMethod = 'off';
        method = 'enable';
    }

    domutil[method + 'TextSelection'](container);
    domutil[method + 'ImageDrag'](container);
    domevent[domMethod](global, {
        mousemove: this._onMouseMove,
        mouseup: this._onMouseUp
    }, this);
};

/**
 * Normalize mouse event object.
 * @param {MouseEvent} mouseEvent - mouse event object.
 * @returns {object} normalized mouse event data.
 */
Drag.prototype._getEventData = function(mouseEvent) {
    return {
        target: mouseEvent.target || mouseEvent.srcElement,
        originEvent: mouseEvent
    };
};

/**
 * MouseDown DOM event handler.
 * @param {MouseEvent} mouseDownEvent MouseDown event object.
 * @emits Drag#dragStart
 */
Drag.prototype._onMouseDown = function(mouseDownEvent) {
    // only primary button can start drag.
    if (domevent.getMouseButton(mouseDownEvent) !== 0) {
        return;
    }

    /**
     * Drag starts events. cancelable.
     * @event Drag#dragStart
     * @type {object}
     * @property {HTMLElement} target - target element in this event.
     * @property {MouseEvent} originEvent - original mouse event object.
     */
    if (!this.invoke('dragStart', this._getEventData(mouseDownEvent))) {
        return;
    }

    this._toggleDragEvent(true);
};

/**
 * MouseMove DOM event handler.
 * @param {MouseEvent} mouseMoveEvent MouseMove event object.
 * @emits Drag#drag
 */
Drag.prototype._onMouseMove = function(mouseMoveEvent) {
    // prevent automatic scrolling.
    domevent.preventDefault(mouseMoveEvent);

    this._isMoved = true;

    /**
     * Events while dragging.
     * @event Drag#drag
     * @type {object}
     * @property {HTMLElement} target - target element in this event.
     * @property {MouseEvent} originEvent - original mouse event object.
     */
    this.fire('drag', this._getEventData(mouseMoveEvent));
};

/**
 * MouseUp DOM event handler.
 * @param {MouseEvent} mouseUpEvent MouseUp event object.
 * @emits Drag#dragEnd
 * @emits Drag#click
 */
Drag.prototype._onMouseUp = function(mouseUpEvent) {
    this._toggleDragEvent(false);

    // emit "click" event when not emitted drag event between mousedown and mouseup.
    if (this._isMoved) {
        this._isMoved = false;

        /**
         * Drag end events.
         * @event Drag#dragEnd
         * @type {MouseEvent}
         * @property {HTMLElement} target - target element in this event.
         * @property {MouseEvent} originEvent - original mouse event object.
         */
        this.fire('dragEnd', this._getEventData(mouseUpEvent));
        return;
    }

    /**
     * Click events.
     * @event Drag#click
     * @type {MouseEvent}
     * @property {HTMLElement} target - target element in this event.
     * @property {MouseEvent} originEvent - original mouse event object.
     */
    this.fire('click', this._getEventData(mouseUpEvent));
};

util.CustomEvents.mixin(Drag);

module.exports = Drag;


}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"../common/domevent":29,"../common/domutil":30}],57:[function(require,module,exports){
(function (global){
/**
 * @fileoverview Core methods for dragging actions
 * @author NHN Ent. FE Development Team <dl_javascript@nhnent.com>
 */
'use strict';

var util = global.ne.util;
var common = require('../../common/common');
var datetime = require('../../datetime');
var domevent = require('../../common/domevent');
var Point = require('../../common/point');

/**
 * @mixin Time.Core
 */
var timeCore = {
    /**
     * Get Y index ratio(hour) in time grids by supplied parameters.
     * @param {number} baseMil - base milliseconds number for supplied height.
     * @param {number} height - container element height.
     * @param {number} y - Y coordinate to calculate hour ratio.
     * @returns {number} hour index ratio value.
     */
    _calcGridYIndex: function(baseMil, height, y) {
        // get ratio from right expression > point.y : x = session.height : baseMil
        // and convert milliseconds value to hours.
        var result = datetime.millisecondsTo('hour', (y * baseMil) / height),
            floored = result | 0,
            nearest = common.nearest(result - floored, [0, 1]);

        return floored + (nearest ? 0.5 : 0);
    },

    /**
     * Get function to makes event data from Time and mouseEvent
     * @param {Time} timeView - Instance of time view.
     * @returns {function} - Function that return event data from mouse event.
     */
    _retriveEventData: function(timeView) {
        var container = timeView.container,
            options = timeView.options,
            viewHeight = timeView.getViewBound().height,
            viewTime = +timeView.getDate(),
            hourLength = options.hourEnd - options.hourStart,
            baseMil = datetime.millisecondsFrom('hour', hourLength);

        /**
         * @param {MouseEvent} mouseEvent - mouse event object to get common event data.
         * @param {object} [extend] - object to extend event data before return.
         * @returns {object} - common event data for time.*
         */
        return util.bind(function(mouseEvent, extend) {
            var mouseY = Point.n(domevent.getMousePosition(mouseEvent, container)).y,
                gridY = common.ratio(viewHeight, hourLength, mouseY),
                timeY = viewTime + datetime.millisecondsFrom('hour', gridY),
                nearestGridY = this._calcGridYIndex(baseMil, viewHeight, mouseY),
                nearestGridTimeY = viewTime + datetime.millisecondsFrom('hour', nearestGridY + options.hourStart);

            return util.extend({
                target: mouseEvent.target || mouseEvent.srcElement,
                relatedView: timeView,
                originEvent: mouseEvent,
                mouseY: mouseY,
                gridY: gridY,
                timeY: timeY,
                nearestGridY: nearestGridY,
                nearestGridTimeY: nearestGridTimeY
            }, extend);
        }, this);
    },

    /**
     * Mixin method.
     * @param {(TimeCreation|TimeMove)} obj - Constructor functions
     */
    mixin: function(obj) {
        var proto = obj.prototype;
        util.forEach(timeCore, function(method, methodName) {
            if (methodName === 'mixin') {
                return;
            }

            proto[methodName] = method;
        });
    }
};

module.exports = timeCore;


}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"../../common/common":27,"../../common/domevent":29,"../../common/point":32,"../../datetime":37}],58:[function(require,module,exports){
(function (global){
/**
 * @fileoverview Handling creation events from drag handler and time grid view
 * @author NHN Ent. FE Development Team <dl_javascript@nhnent.com>
 */
'use strict';

var util = global.ne.util;
var array = require('../../common/array');
var datetime = require('../../datetime');
var domutil = require('../../common/domutil');
var TimeCreationGuide = require('./creationGuide');
var timeCore = require('./core');

var parseViewIDRx = /^schedule-view-time-date[\s]schedule-view-(\d+)/;

/**
 * @constructor
 * @implements {Handler}
 * @mixes timeCore
 * @mixes CustomEvents
 * @param {Drag} [dragHandler] - Drag handler instance.
 * @param {TimeGrid} [timeGridView] - TimeGrid view instance.
 * @param {Base} [baseController] - Base controller instance.
 */
function TimeCreation(dragHandler, timeGridView, baseController) {
    /**
     * Drag handler instance.
     * @type {Drag}
     */
    this.dragHandler = null;

    /**
     * TimeGrid view instance.
     * @type {TimeGrid}
     */
    this.timeGridView = null;

    /**
     * Base controller instance.
     * @type {Base}
     */
    this.baseController = null;

    /**
     * @type {TimeCreationGuide}
     */
    this.guide = new TimeCreationGuide(this);

    /**
     * Temporary function for single drag session's calc.
     * @type {function}
     */
    this._getEventDataFunc = null;

    /**
     * Temporary function for drag start data cache.
     * @type {object}
     */
    this._dragStart = null;

    if (arguments.length) {
        this.connect.apply(this, arguments);
    }
}

/**
 * Destroy method
 */
TimeCreation.prototype.destroy = function() {
    this.guide.destroy();
    this.dragHandler.off(this);
    this.dragHandler = this.timeGridView = this.baseController =
        this._getEventDataFunc = this._dragStart = this.guide = null;
};

/**
 * Connect handler, view, controllers for event creations.
 * @param {Drag} [dragHandler] - Drag handler instance.
 * @param {TimeGrid} [timeGridView] - TimeGrid view instance.
 * @param {Base} [baseController] - Base controller instance.
 */
TimeCreation.prototype.connect = function(dragHandler, timeGridView, baseController) {
    this.dragHandler = dragHandler;
    this.timeGridView = timeGridView;
    this.baseController = baseController;

    dragHandler.on({
        dragStart: this._onDragStart
    }, this);
};

/**
 * Check target element is expected condition for activate this plugins.
 * @param {HTMLElement} target - The element to check
 * @returns {(boolean|Time)} - return Time view instance when satiate condition.
 */
TimeCreation.prototype.checkExpectedCondition = function(target) {
    var cssClass = domutil.getClass(target),
        matches;

    if (cssClass === 'schedule-view-time-date-event-block') {
        target = target.parentNode;
        cssClass = domutil.getClass(target);
    }

    matches = cssClass.match(parseViewIDRx);

    if (!matches || matches.length < 2) {
        return false;
    }

    return util.pick(this.timeGridView.childs.items, matches[1]);
};

/**
 * Drag#dragStart event handler.
 * @emits TimeCreation#time_creation_dragstart
 * @param {object} dragStartEventData - Drag#dragStart event data.
 * @param {string} [overrideEventName] - override emitted event name when supplied.
 * @param {function} [revise] - supply function for revise event data before emit.
 */
TimeCreation.prototype._onDragStart = function(dragStartEventData, overrideEventName, revise) {
    var target = dragStartEventData.target,
        result = this.checkExpectedCondition(target),
        getEventDataFunc,
        eventData;

    if (!result) {
        return;
    }

    getEventDataFunc = this._getEventDataFunc = this._retriveEventData(result);
    eventData = this._dragStart = getEventDataFunc(dragStartEventData.originEvent);

    if (revise) {
        revise(eventData);
    }

    this.dragHandler.on({
        drag: this._onDrag,
        dragEnd: this._onDragEnd,
        click: this._onClick
    }, this);

    /**
     * @event TimeCreation#time_creation_dragstart
     * @type {object}
     * @property {Time} relatedView - time view instance related with mouse position.
     * @property {MouseEvent} originEvent - mouse event object.
     * @property {number} mouseY - mouse Y px mouse event.
     * @property {number} gridY - grid Y index value related with mouseY value.
     * @property {number} timeY - milliseconds value of mouseY points.
     * @property {number} nearestGridY - nearest grid index related with mouseY value.
     * @property {number} nearestGridTimeY - time value for nearestGridY.
     */
    this.fire(overrideEventName || 'time_creation_dragstart', eventData);
};

/**
 * Drag#drag event handler
 * @emits TimeCreation#time_creation_drag
 * @param {object} dragEventData - event data from Drag#drag.
 * @param {string} [overrideEventName] - override emitted event name when supplied.
 * @param {function} [revise] - supply function for revise event data before emit.
 */
TimeCreation.prototype._onDrag = function(dragEventData, overrideEventName, revise) {
    var getEventDataFunc = this._getEventDataFunc,
        eventData;

    if (!getEventDataFunc) {
        return;
    }

    eventData = getEventDataFunc(dragEventData.originEvent);

    if (revise) {
        revise(eventData);
    }

    /**
     * @event TimeCreation#time_creation_drag
     * @type {object}
     * @property {Time} relatedView - time view instance related with mouse position.
     * @property {MouseEvent} originEvent - mouse event object.
     * @property {number} mouseY - mouse Y px mouse event.
     * @property {number} gridY - grid Y index value related with mouseY value.
     * @property {number} timeY - milliseconds value of mouseY points.
     * @property {number} nearestGridY - nearest grid index related with mouseY value.
     * @property {number} nearestGridTimeY - time value for nearestGridY.
     */
    this.fire(overrideEventName || 'time_creation_drag', eventData);
};

/**
 * @param {object} eventData - event data object from TimeCreation#time_creation_dragend
 * or TimeCreation#time_creation_click
 */
TimeCreation.prototype._createEvent = function(eventData) {
    var title = window.prompt('Name of event to create:'),
        ctrl = this.baseController,
        relatedView = eventData.relatedView,
        createRange = eventData.createRange,
        nearestGridTimeY = eventData.nearestGridTimeY,
        baseDate,
        dateStart,
        dateEnd,
        newStarts,
        newEnds;

    this.guide.clearGuideElement();

    if (!title) {
        return;
    }

    if (!createRange) {
        createRange = [
            nearestGridTimeY,
            nearestGridTimeY + datetime.millisecondsFrom('minutes', 30)
        ];
    }

    baseDate = new Date(relatedView.getDate());
    dateStart = datetime.start(baseDate);
    dateEnd = datetime.end(baseDate);
    newStarts = Math.max(dateStart.getTime(), createRange[0]);
    newEnds = Math.min(dateEnd.getTime(), createRange[1]);

    ctrl.createEvent({
        title: title,
        isAllDay: false,
        starts: new Date(newStarts),
        ends: new Date(newEnds)
    });
};

/**
 * Drag#dragEnd event handler
 * @emits TimeCreation#time_creation_dragend
 * @param {object} dragEndEventData - event data from Drag#dragend
 */
TimeCreation.prototype._onDragEnd = function(dragEndEventData) {
    var dragStart = this._dragStart;

    this.dragHandler.off({
        drag: this._onDrag,
        dragEnd: this._onDragEnd,
        click: this._onClick
    }, this);

    function reviseFunc(eventData) {
        var range = [
            dragStart.nearestGridTimeY,
            eventData.nearestGridTimeY
        ].sort(array.compare.num.asc);
        range[1] += datetime.millisecondsFrom('hour', 0.5);

        eventData.createRange = range;

        this._createEvent(eventData);
    }

    /**
     * @event TimeCreation#time_creation_dragend
     * @type {object}
     * @property {Time} relatedView - time view instance related with mouse position.
     * @property {MouseEvent} originEvent - mouse event object.
     * @property {number} mouseY - mouse Y px mouse event.
     * @property {number} gridY - grid Y index value related with mouseY value.
     * @property {number} timeY - milliseconds value of mouseY points.
     * @property {number} nearestGridY - nearest grid index related with mouseY value.
     * @property {number} nearestGridTimeY - time value for nearestGridY.
     * @property {number[]} createRange - milliseconds range between drag start and end to create.
     */
    this._onDrag(dragEndEventData, 'time_creation_dragend', util.bind(reviseFunc, this));

    this._dragStart = this._getEventDataFunc = null;
};

/**
 * Drag#click event handler
 * @emits TimeCreation#time_creation_click
 * @param {object} clickEventData - event data from Drag#click.
 */
TimeCreation.prototype._onClick = function(clickEventData) {
    this.dragHandler.off({
        drag: this._onDrag,
        dragEnd: this._onDragEnd,
        click: this._onClick
    }, this);

    function reviseFunc(eventData) {
        this._createEvent(eventData);
    }

    /**
     * @event TimeCreation#time_creation_click
     * @type {object}
     * @property {Time} relatedView - time view instance related with mouse position.
     * @property {MouseEvent} originEvent - mouse event object.
     * @property {number} mouseY - mouse Y px mouse event.
     * @property {number} gridY - grid Y index value related with mouseY value.
     * @property {number} timeY - milliseconds value of mouseY points.
     * @property {number} nearestGridY - nearest grid index related with mouseY value.
     * @property {number} nearestGridTimeY - time value for nearestGridY.
     */
    this._onDrag(clickEventData, 'time_creation_click', util.bind(reviseFunc, this));

    this._dragStart = this._getEventDataFunc = null;
};

timeCore.mixin(TimeCreation);
util.CustomEvents.mixin(TimeCreation);

module.exports = TimeCreation;


}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"../../common/array":24,"../../common/domutil":30,"../../datetime":37,"./core":57,"./creationGuide":59}],59:[function(require,module,exports){
(function (global){
/**
 * @fileoverview Module for Time.Creation effect while dragging.
 * @author NHN Ent. FE Development Team <dl_javascript@nhnent.com>
 */
'use strict';

var util = global.ne.util;
var domutil = require('../../common/domutil');
var reqAnimFrame = require('../../common/reqAnimFrame');

var ratio = require('../../common/common').ratio;

/**
 * Class for Time.Creation dragging effect.
 * @constructor
 * @param {TimeCreation} timeCreation - instance of TimeCreation.
 */
function TimeCreationGuide(timeCreation) {
    /**
     * Guide element for creation effect.
     * @type {HTMLElement}
     */
    this.guideElement = global.document.createElement('div');

    /**
     * @type {TimeCreation}
     */
    this.timeCreation = timeCreation;

    /**
     * @type {number}
     */
    this._startGridY = 0;

    /**
     * @type {function}
     */
    this._getTopFunc = null;

    domutil.addClass(this.guideElement, 'schedule-view-time-creation-guide');

    timeCreation.on({
        'time_creation_dragstart': this._onDragStart,
        'time_creation_drag': this._onDrag,
        // 'time_creation_dragend': this.clearGuideElement,
        'time_creation_click': this.clearGuideElement
    }, this);
}

/**
 * Destroy method.
 */
TimeCreationGuide.prototype.destroy = function() {
    this.clearGuideElement();
    this.timeCreation.off(this);
    this.guideElement = this.timeCreation = this._startGridY =
        this._getTopFunc = null;
};

/**
 * Clear guide element.
 */
TimeCreationGuide.prototype.clearGuideElement = function() {
    var guideElement = this.guideElement;

    domutil.remove(guideElement);

    reqAnimFrame.requestAnimFrame(function() {
        guideElement.style.display = 'none';
        guideElement.style.top = '';
        guideElement.style.height = '';
    });
};

/**
 * Refresh guide element
 * @param {number} top - The number of guide element's style top.
 * @param {number} height - The number of guide element's style height.
 */
TimeCreationGuide.prototype._refreshGuideElement = function(top, height) {
    var guideElement = this.guideElement;

    reqAnimFrame.requestAnimFrame(function() {
        guideElement.style.top = top + 'px';
        guideElement.style.height = height + 'px';
        guideElement.style.display = 'block';
    });
};

/**
 * DragStart event handler
 * @param {object} dragStartEventData - dragStart event data.
 */
TimeCreationGuide.prototype._onDragStart = function(dragStartEventData) {
    var timeView = dragStartEventData.relatedView,
        viewOptions = timeView.options,
        viewHeight = timeView.getViewBound().height,
        hourLength = viewOptions.hourEnd - viewOptions.hourStart,
        getTopFunc;

    getTopFunc = this._getTopFunc = util.bind(function(indexY) {
        // memo
        if (getTopFunc[indexY]) {
            return getTopFunc[indexY];
        }

        getTopFunc[indexY] = ratio(hourLength, viewHeight, indexY);

        return getTopFunc[indexY];
    }, this);

    this._startGridY = getTopFunc(dragStartEventData.nearestGridY);

    this._refreshGuideElement(
        this._startGridY,
        getTopFunc(0.5)
    );

    timeView.container.appendChild(this.guideElement);
};

/**
 * Drag event handler
 * @param {object} dragEventData - drag event data.
 */
TimeCreationGuide.prototype._onDrag = function(dragEventData) {
    var getTopFunc = this._getTopFunc,
        startGridY = this._startGridY,
        endGridY;

    if (!getTopFunc) {
        return;
    }

    // drawing guide from start point to at least 30min points.
    endGridY = getTopFunc(dragEventData.nearestGridY) + getTopFunc(0.5);

    if (endGridY > startGridY) {
        this._refreshGuideElement(startGridY, endGridY - startGridY);
        return;
    }

    this._refreshGuideElement(
        endGridY - getTopFunc(0.5),
        (startGridY + getTopFunc(1)) - endGridY
    );
};

module.exports = TimeCreationGuide;


}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"../../common/common":27,"../../common/domutil":30,"../../common/reqAnimFrame":33}],60:[function(require,module,exports){
(function (global){
/**
 * @fileoverview Handling move events from drag handler and time grid view
 * @author NHN Ent. FE Development Team <dl_javascript@nhnent.com>
 */
'use strict';

var util = global.ne.util;
var datetime = require('../../datetime');
var domutil = require('../../common/domutil');
var timeCore = require('./core');
var TimeMoveGuide = require('./moveGuide');

var parseTimeViewIDRx = /^schedule-view-time-date[\s]schedule-view-(\d+)/;

/**
 * @constructor
 * @implements {Handler}
 * @mixes timeCore
 * @mixes util.CustomEvents
 * @param {Drag} [dragHandler] - Drag handler instance.
 * @param {TimeGrid} [timeGridView] - TimeGrid view instance.
 * @param {Base} [baseController] - Base controller instance.
 */
function TimeMove(dragHandler, timeGridView, baseController) {
    /**
     * @type {Drag}
     */
    this.dragHandler = null;

    /**
     * @type {TimeGrid}
     */
    this.timeGridView = null;

    /**
     * @type {Base}
     */
    this.baseController = null;

    /**
     * @type {function}
     */
    this._getEventDataFunc = null;

    /**
     * @type {object}
     */
    this._dragStart = null;

    /**
     * @type {TimeMoveGuide}
     */
    this._guide = new TimeMoveGuide(this);

    if (arguments.length) {
        this.connect.apply(this, arguments);
    }
}

/**
 * Destroy method.
 */
TimeMove.prototype.destroy = function() {
    this._guide.destroy();
    this.dragHandler.off(this);
    this.dragHandler = this.timeGridView = this.baseController =
        this._getEventDataFunc = this._dragStart = this._guide = null;
};

/**
 * Connect handler, view, controllers for event creations.
 * @param {Drag} [dragHandler] - Drag handler instance.
 * @param {TimeGrid} [timeGridView] - TimeGrid view instance.
 * @param {Base} [baseController] - Base controller instance.
 */
TimeMove.prototype.connect = function(dragHandler, timeGridView, baseController) {
    this.dragHandler = dragHandler;
    this.timeGridView = timeGridView;
    this.baseController = baseController;

    dragHandler.on({
        dragStart: this._onDragStart
    }, this);
};

/**
 * Check target element is expected condition for activate this plugins.
 * @param {HTMLElement} target - The element to check
 * @returns {boolean|object} - return object when satiate condition.
 */
TimeMove.prototype.checkExpectCondition = function(target) {
    if (domutil.getClass(target) !== 'schedule-view-time-event') {
        return false;
    }

    return this._getTimeView(target);
};

/**
 * Get Time view container from supplied element.
 * @param {HTMLElement} target - element to find time view container.
 * @returns {object|boolean} - return time view instance when finded.
 */
TimeMove.prototype._getTimeView = function(target) {
    var container = domutil.closest(target, '.schedule-view-time-date'),
        matches;

    if (!container) {
        return false;
    }

    matches = domutil.getClass(container).match(parseTimeViewIDRx);

    if (!matches || matches.length < 2) {
        return false;
    }

    return util.pick(this.timeGridView.childs.items, +matches[1]);
};

/**
 * @emits TimeMove#time_move_dragstart
 * @param {object} dragStartEventData - Drag#dragStart event data.
 */
TimeMove.prototype._onDragStart = function(dragStartEventData) {
    var target = dragStartEventData.target,
        timeView = this.checkExpectCondition(target),
        blockElement = domutil.closest(target, '.schedule-view-time-date-event-block'),
        getEventDataFunc,
        eventData;

    if (!timeView || !blockElement) {
        return;
    }

    getEventDataFunc = this._getEventDataFunc = this._retriveEventData(timeView);
    eventData = this._dragStart = getEventDataFunc(
        dragStartEventData.originEvent, {
            targetModelID: domutil.getData(blockElement, 'id')
        }
    );

    this.dragHandler.on({
        drag: this._onDrag,
        dragEnd: this._onDragEnd,
        click: this._onClick
    }, this);

    /**
     * @event TimeMove#time_move_dragstart
     * @type {object}
     * @property {HTMLElement} target - current target in mouse event object.
     * @property {Time} relatedView - time view instance related with mouse position.
     * @property {MouseEvent} originEvent - mouse event object.
     * @property {number} mouseY - mouse Y px mouse event.
     * @property {number} gridY - grid Y index value related with mouseY value.
     * @property {number} timeY - milliseconds value of mouseY points.
     * @property {number} nearestGridY - nearest grid index related with mouseY value.
     * @property {number} nearestGridTimeY - time value for nearestGridY.
     * @property {string} targetModelID - The model unique id emitted move event.
     */
    this.fire('time_move_dragstart', eventData);
};

/**
 * @emits TimeMove#time_move_drag
 * @param {MouseEvent} dragEventData - mousemove event object
 * @param {string} [overrideEventName] - name of emitting event to override.
 * @param {function} [revise] - supply function for revise event data before emit.
 */
TimeMove.prototype._onDrag = function(dragEventData, overrideEventName, revise) {
    var getEventDataFunc = this._getEventDataFunc,
        timeView = this._getTimeView(dragEventData.target),
        dragStart = this._dragStart,
        eventData;

    if (!timeView || !getEventDataFunc || !dragStart) {
        return;
    }

    eventData = getEventDataFunc(dragEventData.originEvent, {
        currentView: timeView,
        targetModelID: dragStart.targetModelID
    });

    if (revise) {
        revise(eventData);
    }

    /**
     * @event TimeMove#time_move_drag
     * @type {object}
     * @property {HTMLElement} target - current target in mouse event object.
     * @property {Time} relatedView - time view instance related with drag start position.
     * @property {MouseEvent} originEvent - mouse event object.
     * @property {number} mouseY - mouse Y px mouse event.
     * @property {number} gridY - grid Y index value related with mouseY value.
     * @property {number} timeY - milliseconds value of mouseY points.
     * @property {number} nearestGridY - nearest grid index related with mouseY value.
     * @property {number} nearestGridTimeY - time value for nearestGridY.
     * @property {Time} currentView - time view instance related with current mouse position.
     * @property {string} targetModelID - The model unique id emitted move event.
     */
    this.fire(overrideEventName || 'time_move_drag', eventData);
};

/**
 * Update model instance by dragend event results.
 * @param {object} eventData - event data from TimeMove#time_move_dragend
 */
TimeMove.prototype._updateEvent = function(eventData) {
    var ctrl = this.baseController,
        modelID = eventData.targetModelID,
        range = eventData.nearestRange,
        timeDiff = range[1] - range[0],
        dateDiff = 0,
        model = ctrl.events.items[modelID],
        relatedView = eventData.relatedView,
        currentView = eventData.currentView,
        eventDuration,
        dateStart,
        dateEnd,
        newStarts,
        newEnds,
        baseDate;

    if (!model || !currentView) {
        return;
    }

    timeDiff -= datetime.millisecondsFrom('minutes', 30);
    baseDate = new Date(relatedView.getDate());
    dateStart = datetime.start(baseDate);
    dateEnd = datetime.end(baseDate);
    newStarts = new Date(model.getStarts().getTime() + timeDiff);
    newEnds = new Date(model.getEnds().getTime() + timeDiff);
    eventDuration = model.duration();

    if (currentView) {
        dateDiff = currentView.getDate() - relatedView.getDate();
    }

    if (newStarts < dateStart) {
        newStarts = new Date(dateStart.getTime());
        newEnds = new Date(newStarts.getTime() + eventDuration.getTime());
    } else if (newEnds > dateEnd) {
        newEnds = new Date(dateEnd.getTime());
        newStarts = new Date(newEnds.getTime() - eventDuration.getTime());
    }

    newStarts = new Date(newStarts.getTime() + dateDiff);
    newEnds = new Date(newEnds.getTime() + dateDiff);

    ctrl.updateEvent(modelID, {
        starts: newStarts,
        ends: newEnds
    });
};

/**
 * @emits TimeMove#time_move_dragend
 * @param {MouseEvent} dragEndEventData - mouseup mouse event object.
 */
TimeMove.prototype._onDragEnd = function(dragEndEventData) {
    var getEventDataFunc = this._getEventDataFunc,
        currentView = this._getTimeView(dragEndEventData.target),
        dragStart = this._dragStart,
        eventData;

    this.dragHandler.off({
        drag: this._onDrag,
        dragEnd: this._onDragEnd,
        click: this._onClick
    }, this);

    if (!getEventDataFunc || !dragStart) {
        return;
    }

    eventData = getEventDataFunc(dragEndEventData.originEvent, {
        currentView: currentView,
        targetModelID: dragStart.targetModelID
    });

    eventData.range = [
        dragStart.timeY,
        eventData.timeY + datetime.millisecondsFrom('hour', 0.5)
    ];

    eventData.nearestRange = [
        dragStart.nearestGridTimeY,
        eventData.nearestGridTimeY + datetime.millisecondsFrom('hour', 0.5)
    ];

    this._updateEvent(eventData);

    /**
     * @event TimeMove#time_move_dragend
     * @type {object}
     * @property {HTMLElement} target - current target in mouse event object.
     * @property {Time} relatedView - time view instance related with drag start position.
     * @property {Time} currentView - time view instance related with current mouse position.
     * @property {MouseEvent} originEvent - mouse event object.
     * @property {number} mouseY - mouse Y px mouse event.
     * @property {number} gridY - grid Y index value related with mouseY value.
     * @property {number} timeY - milliseconds value of mouseY points.
     * @property {number} nearestGridY - nearest grid index related with mouseY value.
     * @property {number} nearestGridTimeY - time value for nearestGridY.
     * @property {string} targetModelID - The model unique id emitted move event.
     * @property {number[]} range - milliseconds range between drag start and end.
     * @property {number[]} nearestRange - milliseconds range related with nearestGridY between start and end.
     */
    this.fire('time_move_dragend', eventData);
};

/**
 * @emits TimeMove#time_move_click
 * @param {MouseEvent} clickEventData - click mouse event object.
 */
TimeMove.prototype._onClick = function(clickEventData) {
    var getEventDataFunc = this._getEventDataFunc,
        dragStart = this._dragStart,
        eventData;

    this.dragHandler.off({
        drag: this._onDrag,
        dragEnd: this._onDragEnd,
        click: this._onClick
    }, this);

    if (!getEventDataFunc || !dragStart) {
        return;
    }

    eventData = getEventDataFunc(clickEventData.originEvent, {
        targetModelID: dragStart.targetModelID
    });

    /**
     * @event TimeMove#time_move_click
     * @type {object}
     * @property {HTMLElement} target - current target in mouse event object.
     * @property {Time} relatedView - time view instance related with drag start position.
     * @property {MouseEvent} originEvent - mouse event object.
     * @property {number} mouseY - mouse Y px mouse event.
     * @property {number} gridY - grid Y index value related with mouseY value.
     * @property {number} timeY - milliseconds value of mouseY points.
     * @property {number} nearestGridY - nearest grid index related with mouseY value.
     * @property {number} nearestGridTimeY - time value for nearestGridY.
     * @property {string} targetModelID - The model unique id emitted move event.
     */
    this.fire('time_move_click', eventData);
};

timeCore.mixin(TimeMove);
util.CustomEvents.mixin(TimeMove);

module.exports = TimeMove;


}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"../../common/domutil":30,"../../datetime":37,"./core":57,"./moveGuide":61}],61:[function(require,module,exports){
(function (global){
/**
 * @fileoverview Module for Time.Move effect while dragging.
 * @author NHN Ent. FE Development Team <dl_javascript@nhnent.com>
 */
'use strict';

var util = global.ne.util;
var domutil = require('../../common/domutil');
var reqAnimFrame = require('../../common/reqAnimFrame');

var ratio = require('../../common/common').ratio;

/**
 * Class for Time.Move effect.
 * @constructor
 * @param {TimeMove} timeMove - The instance of TimeMove.
 */
function TimeMoveGuide(timeMove) {
    /**
     * @type {HTMLElement}
     */
    this.guideElement = null;

    /**
     * @type {TimeMove}
     */
    this.timeMove = timeMove;

    /**
     * @type {HTMLElement}
     */
    this._container = null;

    /**
     * @type {function}
     */
    this._getTopFunc = null;

    /**
     * @type {number}
     */
    this._startGridY = 0;

    /**
     * @type {number}
     */
    this._startTopPixel = 0;

    timeMove.on({
        'time_move_dragstart': this._onDragStart,
        'time_move_drag': this._onDrag,
        'time_move_dragend': this._clearGuideElement,
        'time_move_click': this._clearGuideElement
    }, this);
}

/**
 * Destroy method
 */
TimeMoveGuide.prototype.destroy = function() {
    this._clearGuideElement();
    this.timeMove.off(this);
    this.guideElement = this.timeMove = this._container =
        this._getTopFunc = this._startGridY = this._startTopPixel = null;
};

/**
 * Clear guide element.
 */
TimeMoveGuide.prototype._clearGuideElement = function() {
    var guideElement = this.guideElement;

    if (!util.browser.msie) {
        domutil.removeClass(global.document.body, 'schedule-view-dragging');
    }

    domutil.remove(guideElement);

    this.guideElement = this._getTopFunc =
        this._startGridY = this._startTopPixel = null;
};

/**
 * Refresh guide element
 * @param {string} top - guide element's style top.
 */
TimeMoveGuide.prototype._refreshGuideElement = function(top) {
    var guideElement = this.guideElement;

    if (!guideElement) {
        return;
    }

    reqAnimFrame.requestAnimFrame(function() {
        guideElement.style.top = top + 'px';
        guideElement.style.display = 'block';
    });
};

/**
 * TimeMove#time_move_dragstart event handler
 * @param {object} dragStartEventData - dragstart event data
 */
TimeMoveGuide.prototype._onDragStart = function(dragStartEventData) {
    var guideElement = domutil.closest(
        dragStartEventData.target,
        '.schedule-view-time-date-event-block'
    );

    if (!guideElement) {
        return;
    }

    guideElement = guideElement.cloneNode(true);
    domutil.addClass(guideElement, 'schedule-view-time-move-guide');

    this._startTopPixel = parseFloat(guideElement.style.top);
    this._startGridY = dragStartEventData.nearestGridY;
    this.guideElement = guideElement;
    this._container = dragStartEventData.relatedView.container;
    this._container.appendChild(guideElement);
};

/**
 * TimeMove#time_move_drag event handler
 * @param {object} dragEventData - drag event data
 */
TimeMoveGuide.prototype._onDrag = function(dragEventData) {
    var timeView = dragEventData.currentView,
        viewOptions = timeView.options,
        viewHeight = timeView.getViewBound().height,
        guideHeight = parseFloat(this.guideElement.style.height),
        hourLength = viewOptions.hourEnd - viewOptions.hourStart,
        gridYOffset = dragEventData.nearestGridY - this._startGridY,
        // hourLength : viewHeight = gridYOffset : X;
        gridYOffsetPixel = ratio(hourLength, viewHeight, gridYOffset),
        bottomLimit,
        top;

    if (!util.browser.msie) {
        domutil.addClass(global.document.body, 'schedule-view-dragging');
    }

    if (this._container !== timeView.container) {
        this._container = timeView.container;
        this._container.appendChild(this.guideElement);
    }

    top = this._startTopPixel + gridYOffsetPixel;
    bottomLimit = viewHeight - guideHeight;

    top = Math.max(top, 0);
    top = Math.min(top, bottomLimit);

    this._refreshGuideElement(top);
};

module.exports = TimeMoveGuide;


}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"../../common/common":27,"../../common/domutil":30,"../../common/reqAnimFrame":33}],62:[function(require,module,exports){
(function (global){
/**
 * @fileoverview Handling resize events from drag handler and time grid view
 * @author NHN Ent. FE Development Team <dl_javascript@nhnent.com>
 */
'use strict';
var util = global.ne.util;
var datetime = require('../../datetime');
var domutil = require('../../common/domutil');
var timeCore = require('./core');
var TimeResizeGuide = require('./resizeGuide');

var parseTimeViewIDRx = /^schedule-view-time-date[\s]schedule-view-(\d+)/;

/**
 * @constructor
 * @implements {Handler}
 * @mixes timeCore
 * @mixes util.CustomEvents
 * @param {Drag} [dragHandler] - Drag handler instance.
 * @param {TimeGrid} [timeGridView] - TimeGrid view instance.
 * @param {Base} [baseController] - Base controller instance.
 */
function TimeResize(dragHandler, timeGridView, baseController) {
    /**
     * @type {Drag}
     */
    this.dragHandler = null;

    /**
     * @type {TimeGrid}
     */
    this.timeGridView = null;

    /**
     * @type {Base}
     */
    this.baseController = null;

    /**
     * @type {function}
     */
    this._getEventDataFunc = null;

    /**
     * @type {object}
     */
    this._dragStart = null;

    /**
     * @type {TimeResizeGuide}
     */
    this._guide = new TimeResizeGuide(this);

    if (arguments.length) {
        this.connect.apply(this, arguments);
    }
}

/**
 * Destroy method
 */
TimeResize.prototype.destroy = function() {
    this._guide.destroy();
    this.dragHandler.off(this);
    this.dragHandler = this.timeGridView = this.baseController =
        this._getEventDataFunc = this._dragStart = this._guide = null;
};

/**
 * Connect handler, view, controllers for event creations.
 * @param {Drag} [dragHandler] - Drag handler instance.
 * @param {TimeGrid} [timeGridView] - TimeGrid view instance.
 * @param {Base} [baseController] - Base controller instance.
 */
TimeResize.prototype.connect = function(dragHandler, timeGridView, baseController) {
    this.dragHandler = dragHandler;
    this.timeGridView = timeGridView;
    this.baseController = baseController;

    dragHandler.on({
        dragStart: this._onDragStart
    }, this);
};

/**
 * @param {HTMLElement} target - element to check condition.
 * @returns {object|boolean} - return time view instance or false
 */
TimeResize.prototype.checkExpectCondition = function(target) {
    var container,
        matches;

    if (!domutil.hasClass(target, 'schedule-view-time-resize-handle')) {
        return false;
    }

    container = domutil.closest(target, '.schedule-view-time-date');

    if (!container) {
        return false;
    }

    matches = domutil.getClass(container).match(parseTimeViewIDRx);

    if (!matches || matches.length < 2) {
        return false;
    }

    return util.pick(this.timeGridView.childs.items, +matches[1]);
};

/**
 * @emits TimeResize#time_resize_dragstart
 * @param {object} dragStartEventData - event data of Drag#dragstart
 */
TimeResize.prototype._onDragStart = function(dragStartEventData) {
    var target = dragStartEventData.target,
        timeView = this.checkExpectCondition(target),
        blockElement = domutil.closest(target, '.schedule-view-time-date-event-block'),
        getEventDataFunc,
        eventData;

    if (!timeView || !blockElement) {
        return;
    }

    getEventDataFunc = this._getEventDataFunc = this._retriveEventData(timeView);
    eventData = this._dragStart = getEventDataFunc(
        dragStartEventData.originEvent, {
            targetModelID: domutil.getData(blockElement, 'id')
        }
    );

    this.dragHandler.on({
        drag: this._onDrag,
        dragEnd: this._onDragEnd,
        click: this._onClick
    }, this);

    /**
     * @event TimeResize#time_resize_dragstart
     * @type {object}
     * @property {HTMLElement} target - current target in mouse event object.
     * @property {Time} relatedView - time view instance related with mouse position.
     * @property {MouseEvent} originEvent - mouse event object.
     * @property {number} mouseY - mouse Y px mouse event.
     * @property {number} gridY - grid Y index value related with mouseY value.
     * @property {number} timeY - milliseconds value of mouseY points.
     * @property {number} nearestGridY - nearest grid index related with mouseY value.
     * @property {number} nearestGridTimeY - time value for nearestGridY.
     * @property {string} targetModelID - The model unique id emitted move event.
     */
    this.fire('time_resize_dragstart', eventData);
};

/**
 * Drag#drag event handler
 * @emits TimeResize#time_resize_drag
 * @param {object} dragEventData - event data of Drag#drag custom event.
 * @param {string} [overrideEventName] - override emitted event name when supplied.
 * @param {function} [revise] - supply function for revise event data before emit.
 */
TimeResize.prototype._onDrag = function(dragEventData, overrideEventName, revise) {
    var getEventDataFunc = this._getEventDataFunc,
        startEventData = this._dragStart,
        eventData;

    if (!getEventDataFunc || !startEventData) {
        return;
    }

    eventData = getEventDataFunc(dragEventData.originEvent, {
        targetModelID: startEventData.targetModelID
    });

    if (revise) {
        revise(eventData);
    }

    /**
     * @event TimeResize#time_resize_drag
     * @type {object}
     * @property {HTMLElement} target - current target in mouse event object.
     * @property {Time} relatedView - time view instance related with drag start position.
     * @property {MouseEvent} originEvent - mouse event object.
     * @property {number} mouseY - mouse Y px mouse event.
     * @property {number} gridY - grid Y index value related with mouseY value.
     * @property {number} timeY - milliseconds value of mouseY points.
     * @property {number} nearestGridY - nearest grid index related with mouseY value.
     * @property {number} nearestGridTimeY - time value for nearestGridY.
     * @property {string} targetModelID - The model unique id emitted move event.
     */
    this.fire(overrideEventName || 'time_resize_drag', eventData);
};

/**
 * Update model instance by dragend event results.
 * @param {object} eventData - event data from TimeResize#time_resize_dragend
 */
TimeResize.prototype._updateEvent = function(eventData) {
    var ctrl = this.baseController,
        modelID = eventData.targetModelID,
        range = eventData.nearestRange,
        timeDiff = range[1] - range[0],
        model = ctrl.events.items[modelID],
        relatedView = eventData.relatedView,
        dateEnd,
        newEnds,
        baseDate;

    if (!model) {
        return;
    }

    timeDiff -= datetime.millisecondsFrom('minutes', 30);

    baseDate = new Date(relatedView.getDate());
    dateEnd = datetime.end(baseDate);
    newEnds = new Date(model.getEnds().getTime() + timeDiff);

    if (newEnds > dateEnd) {
        newEnds = new Date(dateEnd.getTime());
    }

    if (newEnds.getTime() - model.getStarts().getTime() < datetime.millisecondsFrom('minutes', 30)) {
        newEnds = new Date(model.getStarts().getTime() + datetime.millisecondsFrom('minutes', 30));
    }

    ctrl.updateEvent(modelID, {
        ends: newEnds
    });
};

/**
 * Drag#dragEnd event handler
 * @emits TimeResize#time_resize_dragend
 * @param {MouseEvent} dragEndEventData - Mouse event of Drag#dragEnd custom event.
 */
TimeResize.prototype._onDragEnd = function(dragEndEventData) {
    var getEventDataFunc = this._getEventDataFunc,
        dragStart = this._dragStart,
        eventData;

    this.dragHandler.off({
        drag: this._onDrag,
        dragEnd: this._onDragEnd,
        click: this._onClick
    }, this);

    if (!getEventDataFunc || !dragStart) {
        return;
    }

    eventData = getEventDataFunc(dragEndEventData.originEvent, {
        targetModelID: dragStart.targetModelID
    });

    eventData.range = [
        dragStart.timeY,
        eventData.timeY + datetime.millisecondsFrom('hour', 0.5)
    ];

    eventData.nearestRange = [
        dragStart.nearestGridTimeY,
        eventData.nearestGridTimeY + datetime.millisecondsFrom('hour', 0.5)
    ];

    this._updateEvent(eventData);

    /**
     * @event TimeResize#time_resize_dragend
     * @type {object}
     * @property {HTMLElement} target - current target in mouse event object.
     * @property {Time} relatedView - time view instance related with drag start position.
     * @property {MouseEvent} originEvent - mouse event object.
     * @property {number} mouseY - mouse Y px mouse event.
     * @property {number} gridY - grid Y index value related with mouseY value.
     * @property {number} timeY - milliseconds value of mouseY points.
     * @property {number} nearestGridY - nearest grid index related with mouseY value.
     * @property {number} nearestGridTimeY - time value for nearestGridY.
     * @property {string} targetModelID - The model unique id emitted move event.
     * @property {number[]} range - milliseconds range between drag start and end.
     * @property {number[]} nearestRange - milliseconds range related with nearestGridY between start and end.
     */
    this.fire('time_resize_dragend', eventData);

    this._getEventDataFunc = this._dragStart = null;
};

/**
 * @emits TimeResize#time_resize_click
 */
TimeResize.prototype._onClick = function() {
    this.dragHandler.off({
        drag: this._onDrag,
        dragEnd: this._onDragEnd,
        click: this._onClick
    }, this);

    /**
     * @event TimeResize#time_resize_click
     */
    this.fire('time_resize_click');
};

timeCore.mixin(TimeResize);
util.CustomEvents.mixin(TimeResize);

module.exports = TimeResize;


}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"../../common/domutil":30,"../../datetime":37,"./core":57,"./resizeGuide":63}],63:[function(require,module,exports){
(function (global){
/**
 * @fileoverview Module for Time.Resize effect while dragging.
 * @author NHN Ent. FE Development Team <dl_javascript@nhnent.com>
 */
'use strict';
var util = global.ne.util;
var domutil = require('../../common/domutil');
var reqAnimFrame = require('../../common/reqAnimFrame');

var ratio = require('../../common/common').ratio;

/**
 * Class for Time.Resize effect.
 * @constructor
 * @param {TimeResize} timeResize - the instance of TimeResize handler.
 */
function TimeResizeGuide(timeResize) {
    /**
     * @type {HTMLElement}
     */
    this.guideElement = null;

    /**
     * @type {TimeResize}
     */
    this.timeResize = timeResize;

    /**
     * @type {function}
     */
    this._getTopFunc = null;

    /**
     * @type {HTMLElement}
     */
    this._originEventElement = null;

    /**
     * @type {number}
     */
    this._startTopPixel = 0;

    /**
     * @type {number}
     */
    this._startHeightPixel = 0;

    /**
     * @type {number}
     */
    this._startGridY = 0;

    timeResize.on({
        'time_resize_dragstart': this._onDragStart,
        'time_resize_drag': this._onDrag,
        'time_resize_dragend': this._clearGuideElement,
        'time_resize_click': this._clearGuideElement
    }, this);
}

/**
 * Destroy method
 */
TimeResizeGuide.prototype.destroy = function() {
    this._clearGuideElement();
    this.timeResize.off(this);
    this.guideElement = this.timeResize = this._getTopFunc =
        this._originEventElement = this._startHeightPixel =
        this._startGridY = this._startTopPixel = null;
};

/**
 * Clear guide element.
 */
TimeResizeGuide.prototype._clearGuideElement = function() {
    var guideElement = this.guideElement,
        originElement = this._originEventElement;

    if (!util.browser.msie) {
        domutil.removeClass(global.document.body, 'schedule-view-resizing');
    }

    if (originElement) {
        originElement.style.display = 'block';
    }

    domutil.remove(guideElement);

    this.guideElement = this._getTopFunc = this._originEventElement =
        this._startHeightPixel = this._startGridY = this._startTopPixel = null;
};

/**
 * Refresh guide element
 * @param {string} height - guide element's style height.
 */
TimeResizeGuide.prototype._refreshGuideElement = function(height) {
    var guideElement = this.guideElement;

    if (!guideElement) {
        return;
    }

    reqAnimFrame.requestAnimFrame(function() {
        guideElement.style.height = height + 'px';
        guideElement.style.display = 'block';
    });
};


/**
 * TimeMove#time_move_dragstart event handler
 * @param {object} dragStartEventData - dragstart event data
 */
TimeResizeGuide.prototype._onDragStart = function(dragStartEventData) {
    var originElement = domutil.closest(
            dragStartEventData.target,
            '.schedule-view-time-date-event-block'
        ),
        guideElement;

    if (!util.browser.msie) {
        domutil.addClass(global.document.body, 'schedule-view-resizing');
    }

    if (!originElement) {
        return;
    }

    this._startGridY = dragStartEventData.nearestGridY;
    this._startHeightPixel = parseFloat(originElement.style.height);
    this._startTopPixel = parseFloat(originElement.style.top);

    this._originEventElement = originElement;
    guideElement = this.guideElement = originElement.cloneNode(true);
    domutil.addClass(guideElement, 'schedule-view-time-resize-guide');

    originElement.style.display = 'none';
    dragStartEventData.relatedView.container.appendChild(guideElement);
};

/**
 * @param {object} dragEventData - event data from Drag#drag.
 */
TimeResizeGuide.prototype._onDrag = function(dragEventData) {
    var timeView = dragEventData.relatedView,
        viewOptions = timeView.options,
        viewHeight = timeView.getViewBound().height,
        hourLength = viewOptions.hourEnd - viewOptions.hourStart,
        guideElement = this.guideElement,
        guideTop = parseFloat(guideElement.style.top),
        gridYOffset = dragEventData.nearestGridY - this._startGridY,
        // hourLength : viewHeight = gridYOffset : X;
        gridYOffsetPixel = ratio(hourLength, viewHeight, gridYOffset),
        minHeight,
        maxHeight,
        height;

    height = (this._startHeightPixel + gridYOffsetPixel);
    // at least large than 30min from event start time.
    minHeight = guideTop + ratio(hourLength, viewHeight, 0.5);
    minHeight -= this._startTopPixel;
    // smaller than 24h
    maxHeight = viewHeight - guideTop;

    height = Math.max(height, minHeight);
    height = Math.min(height, maxHeight);

    this._refreshGuideElement(height);
};

module.exports = TimeResizeGuide;


}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"../../common/common":27,"../../common/domutil":30,"../../common/reqAnimFrame":33}],64:[function(require,module,exports){
(function (global){
/**
 * @fileoverview Model of event.
 * @author NHN Ent. FE Development Team <dl_javascript@nhnent.com>
 */
'use strict';

var util = global.ne.util;
var datetime = require('../datetime');
var dirty = require('../common/dirty');
var model = require('../common/model');

/**
 * The model of calendar events.
 * @constructor
 * @mixes dirty
 * @mixes model
 */
function Event() {
    /**
     * title for event.
     * @type {string}
     */
    this.title = '';

    /**
     * is event is all day event?
     * @type {boolean}
     */
    this.isAllDay = false;

    /**
     * event starts
     * @type {Date}
     */
    this.starts = null;

    /**
     * event ends
     * @type {Date}
     */
    this.ends = null;

    this.init();

    // initialize model id
    util.stamp(this);
}

/**********
 * static props
 **********/

Event.schema = {
    required: ['title'],
    dateRange: ['starts', 'ends']
};

/**
 * create event model from json(object) data.
 * @param {object} data object for model.
 * @returns {Event} Event model instance.
 */
Event.create = function(data) {
    var event = new Event();

    event.init(data);

    return event;
};

/**********
 * prototype props
 **********/

/**
 * Initialize event instance.
 * @param {object} options options.
 */
Event.prototype.init = function(options) {
    options = options || {};

    this.title = options.title || '';
    this.isAllDay = util.isExisty(options.isAllDay) ? options.isAllDay : false;

    if (options.starts) {
        this.starts = new Date(options.starts);
    } else {
        this.starts = new Date();
    }

    if (options.ends) {
        this.ends = new Date(options.ends);
    } else {
        this.ends = new Date(this.starts.getTime());
        this.ends.setMinutes(this.ends.getMinutes() + 30);
    }
};

/**
 * @returns {Date} render start date.
 */
Event.prototype.getStarts = function() {
    return this.starts;
};

/**
 * @returns {Date} render end date.
 */
Event.prototype.getEnds = function() {
    return this.ends;
};

/**
 * @returns {number} instance unique id.
 */
Event.prototype.id = function() {
    return util.stamp(this);
};

/**
 * Check two event are equals (means title, isAllDay, starts, ends are same)
 * @param {Event} event Event model instance to compare.
 * @returns {boolean} Return false when not same.
 */
Event.prototype.equals = function(event) {
    if (this.title !== event.title) {
        return false;
    }

    if (this.isAllDay !== event.isAllDay) {
        return false;
    }

    if (datetime.compare(this.getStarts(), event.getStarts()) !== 0) {
        return false;
    }

    if (datetime.compare(this.getEnds(), event.getEnds()) !== 0) {
        return false;
    }

    return true;
};

/**
 * return duration between starts and ends.
 * @returns {Date} duration (UTC)
 */
Event.prototype.duration = function() {
    var starts = this.getStarts(),
        ends = this.getEnds(),
        duration;

    if (this.isAllDay) {
        duration = new Date(datetime.end(ends) - datetime.start(starts));
    } else {
        duration = new Date(ends - starts);
    }

    return duration;
};

/**
 * Returns true if the given Event coincides with the same time as the
 * calling Event.
 * @param {Event} event The other event to compare with this Event.
 * @returns {boolean} If the other event occurs within the same time as the first object.
 */
Event.prototype.collidesWith = function(event) {
    var ownStarts = this.getStarts(),
        ownEnds = this.getEnds(),
        starts = event.getStarts(),
        ends = event.getEnds();

    if ((starts > ownStarts && starts < ownEnds) ||
        (ends > ownStarts && ends < ownEnds) ||
        (starts <= ownStarts && ends >= ownEnds)) {
        return true;
    }
    return false;
};

model.mixin(Event.prototype);
dirty.mixin(Event.prototype);

module.exports = Event;


}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"../common/dirty":28,"../common/model":31,"../datetime":37}],65:[function(require,module,exports){
(function (global){
/**
 * @fileoverview Model for views
 * @author NHN Ent. FE Development Team <dl_javascript@nhnent.com>
 */
'use strict';

var util = global.ne.util;

/**
 * Event ViewModel
 * TODO: useless.
 * @constructor
 * @param {Event} event Event instance.
 */
function EventViewModel(event) {
    /**
     * The model of event.
     * @type {Event}
     */
    this.model = event;

    /**
     * @type {number}
     */
    this.top = 0;

    /**
     * @type {number}
     */
    this.left = 0;

    /**
     * @type {number}
     */
    this.width = 0;

    /**
     * @type {number}
     */
    this.height = 0;

    /**
     * Represent event has collide with other events when rendering.
     * @type {boolean}
     */
    this.hasCollide = false;

    /**
     * Extra space at rigth side of this event.
     * @type {number}
     */
    this.extraSpace = 0;

    /**
     * represent this event block is not visible after rendered.
     *
     * in month view, some viewmodel in date need to hide when already rendered before dates.
     *
     * set true then it just shows empty space.
     * @type {boolean}
     */
    this.hidden = false;

    /**
     * represent render start date used at rendering.
     *
     * if set null then use model's 'starts' property.
     * @type {Date}
     */
    this.renderStarts = null;

    /**
     * represent render end date used at rendering.
     *
     * if set null then use model's 'ends' property.
     * @type {Date}
     */
    this.renderEnds = null;
}

/**********
 * static props
 **********/

/**
 * EventViewModel factory method.
 * @param {Event} event Event instance.
 * @returns {EventViewModel} EventViewModel instance.
 */
EventViewModel.create = function(event) {
    return new EventViewModel(event);
};


/**********
 * prototype props
 **********/

/**
 * return renderStarts property to render properly when specific event that exceed rendering date range.
 *
 * if renderStarts is not set. return model's starts property.
 * @override
 * @returns {Date} render start date.
 */
EventViewModel.prototype.getStarts = function() {
    if (this.renderStarts) {
        return this.renderStarts;
    }

    return this.model.starts;
};

/**
 * return renderStarts property to render properly when specific event that exceed rendering date range.
 *
 * if renderEnds is not set. return model's ends property.
 * @override
 * @returns {Date} render end date.
 */
EventViewModel.prototype.getEnds = function() {
    if (this.renderEnds) {
        return this.renderEnds;
    }

    return this.model.ends;
};

/**
 * @returns {number} unique number for model.
 */
EventViewModel.prototype.id = function() {
    return util.stamp(this.model);
};

/**
 * Shadowing valueOf method for event sorting.
 * @returns {Event} The model of event.
 */
EventViewModel.prototype.valueOf = function() {
    return this.model;
};

/**
 * Link duration method
 * @returns {number} Event#duration result.
 */
EventViewModel.prototype.duration = function() {
    return this.model.duration();
};

/**
 * Link collidesWith method
 * @param {Event|EventViewModel} viewModel - Model or viewmodel instance of Events.
 * @returns {boolean} Event#collidesWith result.
 */
EventViewModel.prototype.collidesWith = function(viewModel) {
    return this.model.collidesWith(viewModel.valueOf());
};

module.exports = EventViewModel;


}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],66:[function(require,module,exports){
(function (global){
/**
 * @fileoverview Layout view. wrap all view containers at outside.
 * @author NHN Ent. FE Development Team <dl_javascript@nhnent.com>
 */
'use strict';

var util = global.ne.util;
var domutil = require('../common/domutil');
var Collection = require('../common/collection');
var View = require('./view');

/**
 * Layout view for toggle each child view. It will controlled via navigation UI.
 * @constructor
 * @extends {View}
 * @param {HTMLElement} container Container element to use layout view.
 */
function Layout(container) {
    /*eslint-disable*/
    /**
     * @type {Collection} Child view collection.
     */
    this.childs = new Collection(function(childView) {
        return childView.viewName;
    });
    /*eslint-enable*/

    domutil.addClass(container, 'schedule-view-layout');

    /**
     * @type {HTMLElement}
     */
    this.container = container;
}

util.inherit(Layout, View);

/**
 * Clear child views.
 */
Layout.prototype.clear = function() {
    this.childs.each(function(childView) {
        childView.destroy();
    });

    this.childs.clear();
};

/**
 * Add an view object by creation function **(adderFunc)**.
 *
 * Invocations of adderFunc is called with layout view's container.
 *
 * As result of adderFunc. added it to layout view's childs.
 * @override
 * @param {function} adderFunc The adder function.
 * @returns {View} View instance added.
 */
Layout.prototype.addChild = function(adderFunc) {
    var childView = adderFunc(this.container);
    this.childs.add(childView);
    return childView;
};

/**
 * Remove child view.
 * @override
 * @param {(string|View)} viewName - name of view or instance.
 */
Layout.prototype.removeChild = function(viewName) {
    this.childs.remove(viewName);
};

/**
 * Toggle child views.
 * @param {string} viewName - Name of view.
 */
Layout.prototype.toggleChildView = function(viewName) {
    var container,
        prefix = ['add', 'remove'],
        flag;

    this.childs.each(function(childView) {
        container = childView.container;
        flag = +(childView.viewName === viewName);
        domutil[prefix[flag] + 'Class'](container, 'schedule-view-hidden');
    });
};

module.exports = Layout;


}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"../common/collection":26,"../common/domutil":30,"./view":76}],67:[function(require,module,exports){
(function (global){
/**
 * @fileoverview View of week event container inside of Week view.
 * @author NHN Ent. FE Development Team <dl_javascript@nhnent.com>
 */
'use strict';

var util = global.ne.util;
var domutil = require('../common/domutil');
var datetime = require('../datetime');
var View = require('./view');
var tmpl = require('./template/monthweek.hbs');

var config = require('../config');
var FREE_HEIGHT_TO_CREATION = config.monthweek.view.FREE_HEIGHT_TO_CREATION;

/**
 * @constructor
 * @extends {View}
 * @param {object} options - view options.
 * @param {number} [options.height=60] - minimum height of event container element.
 * @param {number} [options.eventBlockHeight=18] - height of each event block.
 * @param {number} [options.eventBlockGutter=2] - gutter height of each event block.
 * @param {HTMLDIVElement} container - DOM element to use container for this view.
 */
function MonthWeek(options, container) {
    container = domutil.appendHTMLElement(
        'div',
        container,
        'schedule-view-allday-monthweek'
    );

    /**
     * @type {object}
     */
    this.options = util.extend({
        height: 60,              // default value when Month view rendering.
        eventBlockHeight: 18,    // event block's height value.
        eventBlockGutter: 2      // gutter between each event blocks
    }, options);

    container.style.minHeight = this.options.height + FREE_HEIGHT_TO_CREATION + 'px';

    View.call(this, null, container);
}

util.inherit(MonthWeek, View);

/**
 * @param {object} viewModel - viewModel from parent views.
 * @returns {object} viewModel to rendering.
 */
MonthWeek.prototype._getBaseViewModel = function(viewModel) {
    var options = this.options,
        range = datetime.range(
            viewModel.renderStartDate,
            viewModel.renderEndDate,
            datetime.MILLISECONDS_PER_DAY
        ),
        matrices = viewModel.eventsInDateRange.allday,
        widthPercent = 100 / range.length;

    return {
        width: widthPercent,
        height: options.height,
        eventBlockHeight: options.eventBlockHeight + options.eventBlockGutter,
        eventBlockGutter: options.eventBlockGutter,
        eventGrid: util.map(range, function() {
            return widthPercent;
        }),
        matrices: matrices
    };
};

/**
 * @override
 * @param {object} viewModel - viewModel from parent views.
 */
MonthWeek.prototype.render = function(viewModel) {
    var baseViewModel = this._getBaseViewModel(viewModel),
        maxEventInDay = 0;

    maxEventInDay = Math.max.apply(null, util.map(baseViewModel.matrices, function(matrix) {
        return Math.max.apply(null, util.map(matrix, function(row) {
            return row.length;
        }));
    }));

    this.resize(maxEventInDay);

    this.container.innerHTML = tmpl(baseViewModel);
};

/**
 * Resize MonthWeek container and send information to parent views.
 * @override
 * @param {number} maxEventInDay - how largest event block in one day?
 */
MonthWeek.prototype.resize = function(maxEventInDay) {
    var options = this.options,
        newHeight = (maxEventInDay * (options.eventBlockHeight + options.eventBlockGutter));

    newHeight = Math.max(newHeight, options.height);
    
    this.container.style.height = newHeight + FREE_HEIGHT_TO_CREATION + 'px';
};

module.exports = MonthWeek;


}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"../common/domutil":30,"../config":34,"../datetime":37,"./template/monthweek.hbs":70,"./view":76}],68:[function(require,module,exports){
// hbsfy compiled Handlebars template
var HandlebarsCompiler = require('hbsfy/runtime');
module.exports = HandlebarsCompiler.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"schedule-view-display-table\">\n    <div class=\"schedule-view-display-table-row\">\n        <div class=\"schedule-view-display-table-cell\">\n            <div class=\"schedule-view-scroll-y schedule-view-dayname-layout\"></div>\n        </div>\n    </div>\n    <div class=\"schedule-view-display-table-row\">\n        <div class=\"schedule-view-display-table-cell\">\n            <div class=\"schedule-view-scroll-y schedule-view-allday-layout\" style=\"min-height:68px\"></div>\n        </div>\n    </div>\n    <div class=\"schedule-view-display-table-row\">\n        <div class=\"schedule-view-display-table-cell schedule-view-timegrid-layout\"></div>\n    </div>\n</div>\n";
},"useData":true});

},{"hbsfy/runtime":22}],69:[function(require,module,exports){
(function (global){
/**
 * @fileoverview Helpers for handlebar templates.
 * @author NHN Ent. FE Development Team <dl_javascript@nhnent.com>
 */
'use strict';

var util = global.ne.util;

function getElSize(value, postfix, prefix) {
    prefix = prefix || '';
    if (util.isNumber(value)) {
        return prefix + ':' + value + postfix;
    }

    return prefix + ':auto';
}

module.exports = {
    'stamp': function(obj) {
        return util.stamp(obj);
    },

    'equal': function(a, b) {
        return a === b;
    },

    'or': function(a, b) {
        return a || b;
    },

    'common-width': function(width) {
        return getElSize(width, '%', 'width');
    },

    /**
     * Use in time.hbs
     * @param {EventViewModel} eventViewModel viewModel
     * @returns {string} element size css class
     */
    'time-eventBlock': function(eventViewModel) {
        var top = getElSize(eventViewModel.top, 'px', 'top'),
            left = getElSize(eventViewModel.left, '%', 'left'),
            width = getElSize(eventViewModel.width, '%', 'width'),
            height = getElSize(eventViewModel.height, 'px', 'height');

        return [top, left, width, height].join(';');
    },

    /**
     * Use in dayname.hbs
     * @returns {string} css class
     */
    'dayname-isHolliday': function() {
        if (this.day === 0 || this.day === 6) {
            return 'schedule-view-dayname schedule-holliday';
        }

        return 'schedule-view-dayname';
    },

    'multiply': function(a, b) {
        return a * b;
    }
};


}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],70:[function(require,module,exports){
// hbsfy compiled Handlebars template
var HandlebarsCompiler = require('hbsfy/runtime');
module.exports = HandlebarsCompiler.template({"1":function(container,depth0,helpers,partials,data) {
    var alias1=container.escapeExpression;

  return "<div class=\"schedule-view-monthweek-grid-line\" style=\"width:"
    + alias1(container.lambda(depth0, depth0))
    + "%;left:"
    + alias1((helpers.multiply || (depth0 && depth0.multiply) || helpers.helperMissing).call(depth0 != null ? depth0 : {},depth0,(data && data.index),{"name":"multiply","hash":{},"data":data}))
    + "%;\">&nbsp;</div>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},depth0,{"name":"each","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"4":function(container,depth0,helpers,partials,data) {
    var stack1;

  return " \n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},depth0,{"name":"each","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"5":function(container,depth0,helpers,partials,data) {
    var stack1;

  return " \n"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},depth0,{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"6":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3=container.escapeExpression, alias4=container.lambda;

  return " \n<div data-id=\""
    + alias3((helpers.stamp || (depth0 && depth0.stamp) || alias2).call(alias1,(depth0 != null ? depth0.model : depth0),{"name":"stamp","hash":{},"data":data}))
    + "\" \n    class=\"schedule-view-allday-event-block "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.renderStarts : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.renderEnds : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\"\n    style=\"top:"
    + alias3((helpers.multiply || (depth0 && depth0.multiply) || alias2).call(alias1,(depth0 != null ? depth0.top : depth0),((stack1 = (data && data.root)) && stack1.eventBlockHeight),{"name":"multiply","hash":{},"data":data}))
    + "px;left:"
    + alias3((helpers.multiply || (depth0 && depth0.multiply) || alias2).call(alias1,(depth0 != null ? depth0.left : depth0),((stack1 = (data && data.root)) && stack1.width),{"name":"multiply","hash":{},"data":data}))
    + "%;width:"
    + alias3((helpers.multiply || (depth0 && depth0.multiply) || alias2).call(alias1,(depth0 != null ? depth0.width : depth0),((stack1 = (data && data.root)) && stack1.width),{"name":"multiply","hash":{},"data":data}))
    + "%;height:"
    + alias3(alias4(((stack1 = (data && data.root)) && stack1.eventBlockHeight), depth0))
    + "px;margin-top:"
    + alias3(alias4(((stack1 = (data && data.root)) && stack1.eventBlockGutter), depth0))
    + "px\">\n    <div class=\"schedule-view-allday-event\">\n        <span class=\"schedule-view-allday-event-title\">"
    + alias3(alias4(((stack1 = (depth0 != null ? depth0.model : depth0)) != null ? stack1.title : stack1), depth0))
    + "</span>\n        <span class=\"schedule-view-allday-resize-handle handle-y\">&nbsp;</span>\n    </div> \n</div>\n";
},"7":function(container,depth0,helpers,partials,data) {
    return " schedule-view-allday-exceed-left";
},"9":function(container,depth0,helpers,partials,data) {
    return " schedule-view-allday-exceed-right";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {};

  return "<div class=\"schedule-view-monthweek-grid\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.eventGrid : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>\n<div class=\"schedule-view-monthweek-events\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.matrices : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>\n";
},"useData":true});

},{"hbsfy/runtime":22}],71:[function(require,module,exports){
(function (global){
/**
 * @fileoverview Register developed custom handlebars helper.
 * @author NHN Ent. FE Development Team <dl_javascript@nhnent.com>
 */
'use strict';

var util = global.ne.util;
var helper = require('./helper');
var Handlebars = require('hbsfy/runtime');

util.forEach(helper, function(helper, name) {
    Handlebars.registerHelper(name, helper);
}, this);


}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./helper":69,"hbsfy/runtime":22}],72:[function(require,module,exports){
// hbsfy compiled Handlebars template
var HandlebarsCompiler = require('hbsfy/runtime');
module.exports = HandlebarsCompiler.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<div class=\"schedule-view-allday-left\">\n    <span>"
    + container.escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"title","hash":{},"data":data}) : helper)))
    + "</span>\n</div>\n<div class=\"schedule-view-allday-right\">\n    <div class=\"schedule-view-allday-monthweek-container\"></div>\n</div>\n";
},"useData":true});

},{"hbsfy/runtime":22}],73:[function(require,module,exports){
// hbsfy compiled Handlebars template
var HandlebarsCompiler = require('hbsfy/runtime');
module.exports = HandlebarsCompiler.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\""
    + alias4(((helper = (helper = helpers["dayname-isHolliday"] || (depth0 != null ? depth0["dayname-isHolliday"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"dayname-isHolliday","hash":{},"data":data}) : helper)))
    + "\" style=\""
    + alias4((helpers["common-width"] || (depth0 && depth0["common-width"]) || alias2).call(alias1,(depth0 != null ? depth0.width : depth0),{"name":"common-width","hash":{},"data":data}))
    + "\">\n    <div class=\"schedule-view-dayname-label\">"
    + alias4(((helper = (helper = helpers.dayName || (depth0 != null ? depth0.dayName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"dayName","hash":{},"data":data}) : helper)))
    + "</div>\n    <div class=\"schedule-view-dayname-date\">"
    + alias4(((helper = (helper = helpers.date || (depth0 != null ? depth0.date : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"date","hash":{},"data":data}) : helper)))
    + "</div>\n</div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},depth0,{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true});

},{"hbsfy/runtime":22}],74:[function(require,module,exports){
// hbsfy compiled Handlebars template
var HandlebarsCompiler = require('hbsfy/runtime');
module.exports = HandlebarsCompiler.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},depth0,{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},depth0,{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},depth0,{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "            <div class=\"schedule-view-time-date-event-block\" data-id=\""
    + alias3((helpers.stamp || (depth0 && depth0.stamp) || alias2).call(alias1,(depth0 != null ? depth0.model : depth0),{"name":"stamp","hash":{},"data":data}))
    + "\" style=\""
    + alias3((helpers["time-eventBlock"] || (depth0 && depth0["time-eventBlock"]) || alias2).call(alias1,depth0,{"name":"time-eventBlock","hash":{},"data":data}))
    + "\">\n                <div class=\"schedule-view-time-event\">"
    + alias3(container.lambda(((stack1 = (depth0 != null ? depth0.model : depth0)) != null ? stack1.title : stack1), depth0))
    + "</div>\n                <div class=\"schedule-view-time-resize-handle handle-x\">&nbsp;</div>\n            </div>";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.matrices : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true});

},{"hbsfy/runtime":22}],75:[function(require,module,exports){
// hbsfy compiled Handlebars template
var HandlebarsCompiler = require('hbsfy/runtime');
module.exports = HandlebarsCompiler.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<li class=\"schedule-view-timegrid-hour-"
    + alias4(((helper = (helper = helpers.hour || (depth0 != null ? depth0.hour : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"hour","hash":{},"data":data}) : helper)))
    + "\"><span>"
    + alias4(((helper = (helper = helpers.hour || (depth0 != null ? depth0.hour : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"hour","hash":{},"data":data}) : helper)))
    + "</span></li>";
},"3":function(container,depth0,helpers,partials,data) {
    return "<div class=\"schedule-view-timegrid-grid\"></div>";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {};

  return "<div class=\"schedule-view-timegrid\">\n    <ul class=\"schedule-view-timegrid-left\">\n        "
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.hours : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n    </ul>\n    <div class=\"schedule-view-timegrid-right\">\n        "
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.hours : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n    </div>\n    <div class=\"schedule-view-timegrid-events\">\n        <div class=\"schedule-view-timegrid-events-container\"></div>\n    </div>\n    <div class=\"schedule-view-timegrid-hourmarker\" style=\"display:none;\">\n        <div class=\"schedule-view-timegrid-hourmarker-wrap\">\n            <div class=\"schedule-view-timegrid-hourmarker-line\"></div>\n            <div class=\"schedule-view-timegrid-hourmarker-time\">00:00</div>\n            <div class=\"schedule-view-timegrid-todaymarker\">today</div>\n        </div>\n    </div>\n</div>\n";
},"useData":true});

},{"hbsfy/runtime":22}],76:[function(require,module,exports){
(function (global){
/**
 * @fileoverview The base class of views.
 * @author NHN Ent. FE Development Team <dl_javascript@nhnent.com>
 */
'use strict';

var util = global.ne.util;
var domutil = require('../common/domutil');
var Collection = require('../common/collection');

/**
 * Base class of views.
 *
 * All views create own container element inside supplied container element.
 * @constructor
 * @param {options} options The object for describe view's specs.
 * @param {HTMLElement} container Default container element for view. you can use this element for this.container syntax.
 */
function View(options, container) {
    var id = util.stamp(this);

    options = options || {};

    if (util.isUndefined(container)) {
        container = domutil.appendHTMLElement('div');
    }

    domutil.addClass(container, 'schedule-view-' + id);

    /**
     * unique id
     * @type {number}
     */
    this.id = id;

    /**
     * base element of view.
     * @type {HTMLDIVElement}
     */
    this.container = container;

    /*eslint-disable*/
    /**
     * child views.
     * @type {Collection}
     */
    this.childs = new Collection(function(view) {
        return util.stamp(view);
    });
    /*eslint-enable*/

    /**
     * parent view instance.
     * @type {View}
     */
    this.parent = null;
}

/**
 * Add child views.
 * @param {View} view The view instance to add.
 * @param {function} [fn] Function for invoke before add. parent view class is supplied first arguments.
 */
View.prototype.addChild = function(view, fn) {
    if (fn) {
        fn.call(view, this);
    }
    // add parent view
    view.parent = this;

    this.childs.add(view);
};

/**
 * Remove added child view.
 * @param {(number|View)} id View id or instance itself to remove.
 * @param {function} [fn] Function for invoke before remove. parent view class is supplied first arguments.
 */
View.prototype.removeChild = function(id, fn) {
    var view = util.isNumber(id) ? this.childs.items[id] : id;

    id = util.stamp(view);

    if (fn) {
        fn.call(view, this);
    }

    this.childs.remove(id);
};

/**
 * Render view recursively.
 */
View.prototype.render = function() {
    this.childs.each(function(childView) {
        childView.render();
    });
};

/**
 * Invoke function recursively.
 * @param {function} fn - function to invoke child view recursively
 * @param {boolean} [skipThis=false] - set true then skip invoke with this(root) view.
 */
View.prototype.recursive = function(fn, skipThis) {
    if (!util.isFunction(fn)) {
        return;
    }

    if (!skipThis) {
        fn(this);
    }

    this.childs.each(function(childView) {
        childView.recursive(fn);
    });
};

/**
 * Resize view recursively to parent.
 */
View.prototype.resize = function() {
    var args = Array.prototype.slice.call(arguments),
        parent = this.parent;

    while (parent) {
        if (util.isFunction(parent._onResize)) {
            parent._onResize.apply(parent, args);
        }

        parent = parent.parent;
    }
};

/**
 * Invoking method before destroying.
 */
View.prototype._beforeDestroy = function() {};

/**
 * Clear properties
 */
View.prototype._destroy = function() {
    this._beforeDestroy();
    this.childs.clear();
    this.container.innerHTML = '';

    this.id = this.parent = this.childs = this.container = null;
};

/*eslint-disable*/
/**
 * Destroy child view recursively.
 */
View.prototype.destroy = function(isChildView) {
    this.childs.each(function(childView) {
        childView.destroy(true);
        childView._destroy();
    });

    if (isChildView) {
        return;
    }

    this._destroy();
};
/*eslint-enable*/

/**
 * Calculate view's container element bound.
 * @returns {object} The bound of container element.
 */
View.prototype.getViewBound = function() {
    var container = this.container,
        position = domutil.getPosition(container),
        size = domutil.getSize(container);

    return {
        x: position[0],
        y: position[1],
        width: size[0],
        height: size[1]
    };
};

module.exports = View;


}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"../common/collection":26,"../common/domutil":30}],77:[function(require,module,exports){
(function (global){
/**
 * @fileoverview View of allday event container inside of Week view.
 * @author NHN Ent. FE Development Team <dl_javascript@nhnent.com>
 */
'use strict';

var util = global.ne.util;
var domutil = require('../../common/domutil');
var View = require('../view');
var MonthWeek = require('../monthweek');
var mainTmpl = require('../template/week/allday.hbs');

/**
 * @constructor
 * @extends {View}
 * @param {object} options The object for view customization.
 * @param {string} options.renderStartDate - start date of allday view's render date. YYYY-MM-DD
 * @param {string} options.renderEndDate - end date of allday view's render date. YYYY-MM-DD
 * @param {number} [options.height=60] - minimum height of event container element.
 * @param {number} [options.eventBlockHeight=18] - height of each event block.
 * @param {number} [options.eventBlockGutter=2] - gutter height of each event block.
 * @param {HTMLElement} container Container element.
 */
function Allday(options, container) {
    container = domutil.appendHTMLElement(
        'div',
        container,
        'schedule-view-allday-container'
    );

    /**
     * rendering options.
     * @type {object}
     */
    this.options = util.extend({
        title: '종일일정',
        renderStartDate: '',
        renderEndDate: '',
        height: 60,
        eventBlockHeight: 18,
        eventBlockGutter: 2
    }, options);

    View.call(this, null, container);
}

util.inherit(Allday, View);

/**
 * create month week view model for render allday events in top of week views.
 * @override
 * @param {object} viewModel - viewModel from parent views.
 */
Allday.prototype.render = function(viewModel) {
    var container = this.container,
        monthWeekInst;

    container.innerHTML = mainTmpl(this.options);

    this.childs.clear();

    monthWeekInst = new MonthWeek(
        this.options, 
        domutil.find('.schedule-view-allday-monthweek-container', container)
    );

    this.addChild(monthWeekInst);

    this.childs.each(function(childView) {
        childView.render(viewModel);
    });
};

module.exports = Allday;


}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"../../common/domutil":30,"../monthweek":67,"../template/week/allday.hbs":72,"../view":76}],78:[function(require,module,exports){
(function (global){
/**
 * @fileoverview View for rendering daynames
 * @author NHN Ent. FE Development Team <dl_javascript@nhnent.com>
 */
'use strict';

var util = global.ne.util;
var datetime = require('../../datetime');
var domutil = require('../../common/domutil');
var View = require('../view');
var daynameTmpl = require('../template/week/daynames.hbs');

var DAY_NAME = require('../../config').dayname.view.DAY_NAME;

/**
 * @constructor
 * @param {HTMLElement} container Container element to use.
 * @extends {View}
 */
function DayName(container) {
    container = domutil.appendHTMLElement(
        'div',
        container,
        'schedule-view-dayname-container'
    );

    View.call(this, null, container);
}

util.inherit(DayName, View);

/**
 * Get default viewmodels.
 * @param {Date} start The date of start render
 * @param {Date} end The end of end render
 * @returns {array} viewmodel.
 */
DayName.prototype._getBaseViewModel = function(start, end) {
    var viewModel;

    viewModel = util.map(datetime.range(
        datetime.start(start),
        datetime.start(end),
        datetime.MILLISECONDS_PER_DAY
    ), function(d, i, arr) {
        var day = d.getDay();

        return {
            day: day,
            dayName: DAY_NAME.kor[day],
            date: d.getDate(),
            width: 100 / arr.length
        };
    });

    return viewModel;
};

/**
 * @override
 * @param {object} viewModel View model from parent (WeekView)
 */
DayName.prototype.render = function(viewModel) {
    var _viewModel = this._getBaseViewModel(
        viewModel.renderStartDate,
        viewModel.renderEndDate
    );

    this.container.innerHTML = daynameTmpl(_viewModel);
};

module.exports = DayName;


}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"../../common/domutil":30,"../../config":34,"../../datetime":37,"../template/week/daynames.hbs":73,"../view":76}],79:[function(require,module,exports){
(function (global){
/**
 * @fileoverview View of time.
 * @author NHN Ent. FE Development Team <dl_javascript@nhnent.com>
 */
'use strict';

var util = global.ne.util;
var datetime = require('../../datetime');
var domutil = require('../../common/domutil');
var View = require('../view');
var timeTmpl = require('../template/week/time.hbs');
var forEachArr = util.forEachArray;

/**
 * @constructor
 * @extends {View}
 * @param {number} width Date element width (percent)
 * @param {object} options Options
 * @param {string} options.ymd YYYMMDD string for this view
 * @param {boolean} options.isToday when set true then assign today design class to container.
 * @param {number} options.hourStart Can limit of render hour start.
 * @param {number} options.hourEnd Can limit of render hour end.
 * @param {HTMLElement} container Element to use container for this view.
 */
function Time(width, options, container) {
    View.call(this, null, container);

    container.style.width = width + '%';

    this.options = util.extend({
        ymd: '',
        isToday: false,
        hourStart: 0,
        hourEnd: 24
    }, options);

    if (this.options.isToday) {
        domutil.addClass(this.container, 'schedule-view-time-date-today');
    }
}

util.inherit(Time, View);

/**
 * Convert YYYYMMDD formatted string date to Date.
 * @param {string} str formatted string.
 * @returns {Date} start of date.
 */
Time.prototype._parseDateGroup = function(str) {
    var y = parseInt(str.substr(0, 4), 10),
        m = parseInt(str.substr(4, 2), 10),
        d = parseInt(str.substr(6, 2), 10);

    return new Date(y, m - 1, d);
};

/**
 * @param {EventViewModel} viewModel - view model instance to calculate bound.
 * @param {object} options - options for calculating event element's bound.
 * @param {Date} options.todayStart - date object represent event date's start (00:00:00)
 * @param {number} options.baseMS - the number of milliseconds to render event blocks.
 * @param {number} options.baseHeight - pixel value related with baseMS options.
 * @param {number[]} options.baseLeft - left position percents for each columns.
 * @param {number} options.baseWidth - the unit of event blocks width percent.
 * @param {number} options.columnIndex - the number index of event blocks.
 * it represent rendering index from left sides in view.
 * @returns {object} bound object for supplied view model.
 */
Time.prototype.getEventViewBound = function(viewModel, options) {
    var baseMS = options.baseMS,
        baseHeight = options.baseHeight,
        offsetStart,
        width,
        height,
        top;

    offsetStart = viewModel.valueOf().starts - options.todayStart;

    // containerHeight : milliseconds in day = x : event's milliseconds
    top = (baseHeight * offsetStart) / baseMS;
    height = (baseHeight * viewModel.duration()) / baseMS;
    width = options.baseWidth * (viewModel.extraSpace + 1);

    // set width auto when has no collisions.
    if (!viewModel.hasCollide) {
        width = null;
    }

    return {
        top: top,
        left: options.baseLeft[options.columnIndex],
        width: width,
        height: height
    };
};

/**
 * Set viewmodels for rendering.
 * @param {string} ymd The date of events. YYYYMMDD format.
 * @param {array} matrices The matrices for event placing.
 */
Time.prototype._getBaseViewModel = function(ymd, matrices) {
    var options = this.options,
        hourStart = options.hourStart,
        hourEnd = options.hourEnd,
        containerHeight,
        todayStart,
        baseMS;

    /**
     * Calculate each event element bounds relative with rendered hour milliseconds and
     * wrap each event model to viewmodels.
     */
    containerHeight = this.getViewBound().height;
    todayStart = this._parseDateGroup(ymd);
    todayStart.setHours(hourStart);
    baseMS = datetime.millisecondsFrom('hour', (hourEnd - hourStart));

    forEachArr(matrices, function(matrix) {
        var maxRowLength,
            widthPercent,
            leftPercents,
            i;

        maxRowLength = Math.max.apply(null, util.map(matrix, function(row) {
            return row.length;
        }));

        widthPercent = 100 / maxRowLength;

        leftPercents = [];
        for (i = 0; i < maxRowLength; i += 1) {
            leftPercents[i] = widthPercent * i;
        }

        forEachArr(matrix, function(row) {
            forEachArr(row, function(viewModel, col) {
                var viewBound;

                if (!viewModel) {
                    return;
                }

                viewBound = this.getEventViewBound(viewModel, {
                    todayStart: todayStart,
                    baseMS: baseMS,
                    baseLeft: leftPercents,
                    baseWidth: widthPercent,
                    baseHeight: containerHeight,
                    columnIndex: col
                });

                util.extend(viewModel, viewBound);
            }, this);
        }, this);
    }, this);
};

/**
 * @returns {Date} - Date of this view.
 */
Time.prototype.getDate = function() {
    return this._parseDateGroup(this.options.ymd);
};


/**
 * @override
 * @param {string} ymd The date of events. YYYYMMDD format
 * @param {array} matrices Matrices for placing events
 */
Time.prototype.render = function(ymd, matrices) {
    this._getBaseViewModel(ymd, matrices);
    this.container.innerHTML = timeTmpl({
        matrices: matrices
    });
};

module.exports = Time;


}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"../../common/domutil":30,"../../datetime":37,"../template/week/time.hbs":74,"../view":76}],80:[function(require,module,exports){
(function (global){
/**
 * @fileoverview View for rendered events by times.
 * @author NHN Ent. FE Development Team <dl_javascript@nhnent.com>
 */
'use strict';

var util = global.ne.util;
var domutil = require('../../common/domutil');
var datetime = require('../../datetime');
var reqAnimFrame = require('../../common/reqAnimFrame');
var View = require('../view');
var Time = require('./time');
var AutoScroll = require('../../common/autoScroll');
var mainTmpl = require('../template/week/timeGrid.hbs');
var config = require('../../config').timeGrid.view;

/**
 * @constructor
 * @extends {View}
 * @param {object} options The object for view customization.
 * @param {number} [options.hourStart=0] You can change view's start hours.
 * @param {number} [options.hourEnd=0] You can change view's end hours.
 * @param {HTMLElement} container Container element.
 */
function TimeGrid(options, container) {
    container = domutil.appendHTMLElement(
        'div',
        container,
        'schedule-view-timegrid-container'
    );

    View.call(this, null, container);

    if (!util.browser.safari) {
        /**
         * @type {AutoScroll}
         */
        this._autoScroll = new AutoScroll(container);
    }

    /**
     * Time view options.
     * @type {object}
     */
    this.options = util.extend({
        hourStart: 0,
        hourEnd: 24
    }, options);

    /**
     * Interval id for hourmarker animation.
     * @type {number}
     */
    this.intervalID = 0;

    /**
     * @type {boolean}
     */
    this._scrolled = false;

    this.attachEvent();
}

util.inherit(TimeGrid, View);

/**********
 * Prototype props
 **********/

/**
 * @type {string}
 */
TimeGrid.prototype.viewName = 'timegrid';

/**
 * Destroy view.
 * @override
 */
TimeGrid.prototype._beforeDestroy = function() {
    window.clearInterval(this.intervalID);

    if (this._autoScroll) {
        this._autoScroll.destroy();
    }

    this._autoScroll = this.hourmarker = null;
};

/**
 * Get base viewModel.
 * @returns {object} ViewModel
 */
TimeGrid.prototype._getBaseViewModel = function() {
    var options = this.options,
        end = options.hourEnd,
        i = options.hourStart,
        hours = [];

    for (; i < end; i += 1) {
        hours.push({hour: i});
    }

    return {hours: hours};
};

/**
 * Reconcilation child views and render.
 * @param {object} viewModels Viewmodel
 * @param {number} width The width percent of each time view.
 * @param {HTMLElement} container Container element for each time view.
 */
TimeGrid.prototype._renderChilds = function(viewModels, width, container) {
    var options = this.options,
        childOption,
        child,
        isToday,
        today = datetime.format(new Date(), 'YYYYMMDD');

    // clear contents
    container.innerHTML = '';
    this.childs.clear();
    this.todaymarkerLeft = null;

    // reconcilation of child views
    util.forEach(viewModels, function(events, ymd) {
        isToday = ymd === today;

        if (isToday) {
            this.todaymarkerLeft = width * this.childs.length;
        }

        childOption = {
            ymd: ymd,
            isToday: isToday,
            hourStart: options.hourStart,
            hourEnd: options.hourEnd
        };

        child = new Time(
            width,
            childOption,
            domutil.appendHTMLElement('div', container, 'schedule-view-time-date')
        );
        child.render(ymd, events);

        this.addChild(child);
    }, this);
};

/**
 * @override
 * @param {object} viewModel ViewModel list from Week view.
 */
TimeGrid.prototype.render = function(viewModel) {
    var timeViewModel = viewModel.eventsInDateRange.time,
        container = this.container,
        baseViewModel = this._getBaseViewModel(),
        eventLen = util.keys(timeViewModel).length;

    if (!eventLen) {
        return;
    }

    container.innerHTML = mainTmpl(baseViewModel);

    /**********
     * Render childs
     **********/
    this._renderChilds(
        timeViewModel,
        100 / eventLen,
        domutil.find('.schedule-view-timegrid-events-container', container)
    );

    this._hourLabels = domutil.find('ul', container);

    /**********
     * Render hourmarker
     **********/
    this.hourmarker = domutil.find('.schedule-view-timegrid-hourmarker', container);
    this.refreshHourmarker();

    if (!this._scrolled) {
        this._scrolled = true;
        this.scrollToNow();
    }
};

/**
 * Refresh hourmarker element.
 */
TimeGrid.prototype.refreshHourmarker = function() {
    var hourLabels = this._hourLabels,
        hourmarker = this.hourmarker,

        viewModel = this._getHourmarkerViewModel(),
        todaymarkerLeft = this.todaymarkerLeft,
        todaymarker,
        text,
        labelToVisible,
        labelToInvisible;

    if (!hourmarker || !viewModel) {
        return;
    }

    todaymarker = domutil.find('.schedule-view-timegrid-todaymarker', hourmarker);
    text = domutil.find('.schedule-view-timegrid-hourmarker-time', hourmarker);
    labelToVisible = domutil.find('.schedule-invisible', hourLabels);
    labelToInvisible = domutil.find('.schedule-view-timegrid-hour-' + viewModel.hour, hourLabels);

    reqAnimFrame.requestAnimFrame(function() {
        if (labelToVisible !== labelToInvisible) {
            if (labelToVisible) {
                domutil.removeClass(labelToVisible, 'schedule-invisible');
            }

            if (labelToInvisible) {
                domutil.addClass(labelToInvisible, 'schedule-invisible');
            }
        }

        hourmarker.style.display = 'block';
        hourmarker.style.top = (viewModel.top - config.PIXEL_RENDER_ERROR) + 'px';

        if (!util.isNull(todaymarkerLeft)) {
            todaymarker.style.display = 'block';
            todaymarker.style.left = todaymarkerLeft + '%';
        } else {
            todaymarker.style.display = 'none';
        }

        text.innerHTML = viewModel.text;
    });
};

/**
 * Return grid size.
 * @returns {number[]} The size of grid element.
 */
TimeGrid.prototype._getGridSize = function() {
    var childNode = this.container.childNodes[0];

    if (!childNode) {
        return false;
    }

    return domutil.getSize(childNode);
};

/**
 * @param {Date} [time] - date object to convert pixel in grids.
 * use **Date.now()** when not supplied.
 * @returns {number} The pixel value represent current time in grids.
 */
TimeGrid.prototype._getTopByTime = function(time) {
    var now = util.isDate(time) ? new Date(time.getTime()) : new Date(),
        start = datetime.start(now),
        hourStart = this.options.hourStart,
        gridSize = this._getGridSize(),
        offset,
        top;

    if (!gridSize) {
        return 0;
    }

    offset = +now - +start;
    if (hourStart) {
        offset -= datetime.millisecondsFrom('hour', hourStart);
    }

    top = (offset * gridSize[1]) / (datetime.millisecondsFrom('hour', this._getBaseViewModel().hours.length));

    return top;
};

/**
 * Get Hourmarker viewmodel.
 * @returns {object} ViewModel of hourmarker.
 */
TimeGrid.prototype._getHourmarkerViewModel = function() {
    var now = new Date();

    return {
        top: this._getTopByTime(),
        hour: now.getHours(),
        text: datetime.format(now, 'HH:mm')
    };
};

/**
 * Attach events
 */
TimeGrid.prototype.attachEvent = function() {
    window.clearInterval(this.intervalID);
    this.intervalID = window.setInterval(util.bind(this.onTick, this), config.TICK_INTERVAL);
};

/**
 * Scroll time grid to current hourmarker.
 */
TimeGrid.prototype.scrollToNow = function() {
    var currentHourTop = this._getTopByTime(),
        viewBound = this.getViewBound(),
        container = this.container;

    window.setTimeout(function() {
        container.scrollTop = (0, currentHourTop - (viewBound.height / 2));
    }, config.SET_SCROLL_DELAY);
};

/**********
 * Event handlers
 **********/

/**
 * Interval tick handler
 */
TimeGrid.prototype.onTick = function() {
    this.refreshHourmarker();
};

module.exports = TimeGrid;


}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"../../common/autoScroll":25,"../../common/domutil":30,"../../common/reqAnimFrame":33,"../../config":34,"../../datetime":37,"../template/week/timeGrid.hbs":75,"../view":76,"./time":79}],81:[function(require,module,exports){
(function (global){
/**
 * @fileoverview View of days UI.
 * @author NHN Ent. FE Development Team <dl_javascript@nhnent.com>
 */
'use strict';

var util = global.ne.util;
var domutil = require('../../common/domutil');
var datetime = require('../../datetime');
var View = require('../view');

/**
 * @constructor
 * @param {Base.Week} controller The controller mixin part.
 * @param {object} options View options
 * @param {string} [options.renderStartDate] Start date of render. if not supplied then use -3d from today. YYYY-MM-DD format.
 * @param {string} [options.renderEndDate] End date of render. if not supplied then use +3d from today. YYYY-MM-DD format.
 * @param {HTMLElement} container The element to use container for this view.
 * @extends {View}
 */
function Week(controller, options, container) {
    var range;

    container = domutil.appendHTMLElement(
        'div',
        container,
        'schedule-view-week-container'
    );

    View.call(this, null, container);

    range = this._getRenderDateRange(new Date());

    /**
     * @type {object} Options for view.
     */
    this.options = util.extend({
        renderStartDate: datetime.format(range.start, 'YYYY-MM-DD'),
        renderEndDate: datetime.format(range.end, 'YYYY-MM-DD')
    }, options);

    /**
     * Week controller mixin.
     * @type {Base.Week}
     */
    this.controller = controller;
}

util.inherit(Week, View);

/**********
 * Override props
 **********/

/**
 * Render each child view with events in ranges.
 */
Week.prototype.render = function() {
    var options = this.options,
        renderStartDate = datetime.parse(options.renderStartDate),
        renderEndDate = datetime.parse(options.renderEndDate),
        eventsInDateRange = this.controller.findByDateRange(
            datetime.start(renderStartDate),
            datetime.end(renderEndDate)
        ),
        viewModel = {
            eventsInDateRange: eventsInDateRange,
            renderStartDate: renderStartDate,
            renderEndDate: renderEndDate
        };

    this.childs.each(function(childView) {
        childView.render(viewModel);
    });
};

/**
 * Listen child view's resize event and handle it.
 * @param {string} source - the string to use group requests.
 * @param {number} param - additional information for resizing session.
 */
// Week.prototype._onResize = function(source, param) {
//     var ownChilds = this.childs,
//         timegrid,
//         height;
//
//     if (source === 'monthweek:resize') {
//         timegrid = ownChilds.find(function(view) {
//             return view.viewName === 'timegrid';
//         }).single();
//
//         height = this.timeGridOriginHeight;
//
//         if (!this.timeGridOriginHeight) {
//             height = this.timeGridOriginHeight = domutil.getSize(timegrid.container)[1];
//         }
//
//         timegrid.container.style.height = (height - param) + 'px';
//         return;
//     }
// };

/**********
 * Prototype props
 **********/

Week.prototype.viewName = 'week';

/**
 * Calculate default render date range from supplied date.
 * @param {Date} baseDate base date.
 * @returns {object} date range.
 */
Week.prototype._getRenderDateRange = function(baseDate) {
    var base = datetime.start(baseDate),
        start = new Date(+base),
        end = new Date(+base);

    start.setDate(start.getDate() - 3);
    end.setDate(end.getDate() + 3);

    return {
        start: start,
        end: end
    };
};

module.exports = Week;


}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"../../common/domutil":30,"../../datetime":37,"../view":76}]},{},[1])
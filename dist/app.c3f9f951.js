// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"js/genreList.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.genreList = void 0;
var genreList = [{
  "id": 28,
  "name": "Action"
}, {
  "id": 12,
  "name": "Adventure"
}, {
  "id": 16,
  "name": "Animation"
}, {
  "id": 35,
  "name": "Comedy"
}, {
  "id": 80,
  "name": "Crime"
}, {
  "id": 99,
  "name": "Documentary"
}, {
  "id": 18,
  "name": "Drama"
}, {
  "id": 10751,
  "name": "Family"
}, {
  "id": 14,
  "name": "Fantasy"
}, {
  "id": 36,
  "name": "History"
}, {
  "id": 27,
  "name": "Horror"
}, {
  "id": 10402,
  "name": "Music"
}, {
  "id": 9648,
  "name": "Mystery"
}, {
  "id": 10749,
  "name": "Romance"
}, {
  "id": 878,
  "name": "Science Fiction"
}, {
  "id": 10770,
  "name": "TV Movie"
}, {
  "id": 53,
  "name": "Thriller"
}, {
  "id": 10752,
  "name": "War"
}, {
  "id": 37,
  "name": "Western"
}];
exports.genreList = genreList;
},{}],"js/helpers/isArgumentGiven.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isArgumentGiven = isArgumentGiven;

function isArgumentGiven(args) {
  if (Array.isArray(args) && args.length) {
    // If the given arguments are given in an array
    // Check for every argument if it's not undefined
    var checkIfUndefined = args.every(function (argument) {
      return argument !== undefined;
    });

    if (checkIfUndefined) {
      return true;
    } else {
      throw Error("One or more given values are undefined");
    }
  } else {
    throw Error("Given value isn't an array or is an empty array");
  }
}
},{}],"js/helpers/createAndAppend.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createAndAppend = createAndAppend;

var _isArgumentGiven = require("../helpers/isArgumentGiven");

function createAndAppend(node, targetNode, template, position) {
  try {
    // console.log(isArgumentGiven([node]))
    if ((0, _isArgumentGiven.isArgumentGiven)([node])) {
      var element = document.createElement(node);

      if (targetNode) {
        targetNode.appendChild(element);
      }

      if (template) {
        element.textContent = template;
      }

      return element;
    }
  } catch (err) {
    console.log(err);
  }
}
},{"../helpers/isArgumentGiven":"js/helpers/isArgumentGiven.js"}],"js/helpers/data/getData.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getData = getData;

function getData(route, params) {
  var apiKey = "8ff1964e3739e2af5c150b85ecad19de";
  return fetch("https://api.themoviedb.org/3/".concat(route, "?api_key=").concat(apiKey, "&").concat(params));
}
},{}],"js/helpers/data/fakeData.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fakeData = void 0;
var fakeData = {
  "page": 1,
  "total_results": 10000,
  "total_pages": 500,
  "results": [{
    "popularity": 83.785,
    "vote_count": 948,
    "video": false,
    "poster_path": "\/p69QzIBbN06aTYqRRiCOY1emNBh.jpg",
    "id": 501170,
    "adult": false,
    "backdrop_path": "\/1nm0sk8UUx9jHCTHuMKe2jkt4Pn.jpg",
    "original_language": "en",
    "original_title": "Doctor Sleep",
    "genre_ids": [18, 14, 27],
    "title": "Doctor Sleep",
    "vote_average": 7.1,
    "overview": "Still irrevocably scarred by the trauma he endured as a child at the Overlook, Dan Torrance has fought to find some semblance of peace. But that peace is shattered when he encounters Abra, a courageous teenager with her own powerful extrasensory gift, known as the 'shine'. Instinctively recognising that Dan shares her power, Abra has sought him out, desperate for his help against the merciless Rose the Hat and her followers.",
    "release_date": "2019-10-30"
  }, {
    "popularity": 33.91,
    "id": 126889,
    "video": false,
    "vote_count": 5428,
    "vote_average": 5.9,
    "title": "Alien: Covenant",
    "release_date": "2017-05-09",
    "original_language": "en",
    "original_title": "Alien: Covenant",
    "genre_ids": [27, 878, 53],
    "backdrop_path": "\/6jajFcaY2YsfGQstJ5HaqZNVseX.jpg",
    "adult": false,
    "overview": "Bound for a remote planet on the far side of the galaxy, the crew of the colony ship 'Covenant' discovers what is thought to be an uncharted paradise, but is actually a dark, dangerous world—which has a sole inhabitant: the 'synthetic', David, survivor of the doomed Prometheus expedition.",
    "poster_path": "\/zecMELPbU5YMQpC81Z8ImaaXuf9.jpg"
  }, {
    "popularity": 52.244,
    "vote_count": 40,
    "video": false,
    "poster_path": "\/mBBBXseq4k4dI63k06XIrsc02j8.jpg",
    "id": 542224,
    "adult": false,
    "backdrop_path": "\/en1XAePgWqNSXb82luUMmo5u3cF.jpg",
    "original_language": "en",
    "original_title": "Gretel & Hansel",
    "genre_ids": [14, 27, 53],
    "title": "Gretel & Hansel",
    "vote_average": 5.4,
    "overview": "A long time ago in a distant fairy tale countryside, a young girl leads her little brother into a dark wood in desperate search of food and work, only to stumble upon a nexus of terrifying evil.",
    "release_date": "2020-01-30"
  }, {
    "popularity": 41.08,
    "vote_count": 7126,
    "video": false,
    "poster_path": "\/nAU74GmpUk7t5iklEp3bufwDq4n.jpg",
    "id": 447332,
    "adult": false,
    "backdrop_path": "\/roYyPiQDQKmIKUEhO912693tSja.jpg",
    "original_language": "en",
    "original_title": "A Quiet Place",
    "genre_ids": [18, 27, 878],
    "title": "A Quiet Place",
    "vote_average": 7.3,
    "overview": "A family is forced to live in silence while hiding from creatures that hunt by sound.",
    "release_date": "2018-04-03"
  }, {
    "popularity": 54.476,
    "vote_count": 3090,
    "video": false,
    "poster_path": "\/zfE0R94v1E8cuKAerbskfD3VfUt.jpg",
    "id": 474350,
    "adult": false,
    "backdrop_path": "\/8moTOzunF7p40oR5XhlDvJckOSW.jpg",
    "original_language": "en",
    "original_title": "It Chapter Two",
    "genre_ids": [18, 14, 27],
    "title": "It Chapter Two",
    "vote_average": 6.8,
    "overview": "27 years after overcoming the malevolent supernatural entity Pennywise, the former members of the Losers' Club, who have grown up and moved away from Derry, are brought back together by a devastating phone call.",
    "release_date": "2019-09-04"
  }, {
    "popularity": 44.066,
    "vote_count": 36,
    "video": false,
    "poster_path": "\/uiMHiHp9eAjJty8rddoUnL9G5fU.jpg",
    "id": 492611,
    "adult": false,
    "backdrop_path": "\/yv0NQmX1TWsXmIpxgpDQtlMRixp.jpg",
    "original_language": "en",
    "original_title": "The Turning",
    "genre_ids": [27, 53],
    "title": "The Turning",
    "vote_average": 5.6,
    "overview": "A young governess is hired by a man who has become responsible for his young nephew and niece after the deaths of their parents. A modern take on Henry James' novella \"The Turn of the Screw\".",
    "release_date": "2020-01-23"
  }, {
    "popularity": 34.727,
    "vote_count": 286,
    "video": false,
    "poster_path": "\/qCDPKUMX5xrxxQY8XhGVCKO3fks.jpg",
    "id": 599975,
    "adult": false,
    "backdrop_path": "\/zETkzgle7c6wAeW11snnVUBp67S.jpg",
    "original_language": "en",
    "original_title": "Countdown",
    "genre_ids": [27, 53],
    "title": "Countdown",
    "vote_average": 6.3,
    "overview": "A young nurse downloads an app that tells her she only has three days to live. With time ticking away and a mysterious figure haunting her, she must find a way to save her life before time runs out.",
    "release_date": "2019-10-24"
  }, {
    "popularity": 51.733,
    "vote_count": 1376,
    "video": false,
    "poster_path": "\/dtRbVsUb5O12WWO54SRpiMtHKC0.jpg",
    "id": 338967,
    "adult": false,
    "backdrop_path": "\/3ghImmHdp4RnC3UkL6hpLayclnb.jpg",
    "original_language": "en",
    "original_title": "Zombieland: Double Tap",
    "genre_ids": [28, 35, 27],
    "title": "Zombieland: Double Tap",
    "vote_average": 6.9,
    "overview": "Columbus, Tallahassee, Wichita, and Little Rock move to the American heartland as they face off against evolved zombies, fellow survivors, and the growing pains of the snarky makeshift family.",
    "release_date": "2019-10-09"
  }, {
    "popularity": 48.446,
    "vote_count": 8,
    "video": false,
    "poster_path": "\/ofJp9SfJFlzCaDCUFfvCx08Hwfh.jpg",
    "id": 586592,
    "adult": false,
    "backdrop_path": "\/nIXWrG6xxl56NFBtAR1vlduTEgy.jpg",
    "original_language": "en",
    "original_title": "Come to Daddy",
    "genre_ids": [35, 27, 53],
    "title": "Come to Daddy",
    "vote_average": 6.5,
    "overview": "After receiving a cryptic letter from his estranged father, Norval travels to his dad’s oceanfront home for what he hopes will be a positive experience. If only he’d known the dark truth about his old man beforehand.",
    "release_date": "2020-02-07"
  }, {
    "popularity": 38.512,
    "vote_count": 748,
    "video": false,
    "poster_path": "\/3nk9UoepYmv1G9oP18q6JJCeYwN.jpg",
    "id": 503919,
    "adult": false,
    "backdrop_path": "\/i51wnN9phojyn14xHjQt6rv1r0x.jpg",
    "original_language": "en",
    "original_title": "The Lighthouse",
    "genre_ids": [18, 14, 27, 9648],
    "title": "The Lighthouse",
    "vote_average": 7.7,
    "overview": "Two lighthouse keepers try to maintain their sanity while living on a remote and mysterious New England island in the 1890s.",
    "release_date": "2019-10-18"
  }, {
    "popularity": 33.825,
    "vote_count": 186,
    "video": false,
    "poster_path": "\/jlHL2BH176JApGiLnNQLQgdjMFd.jpg",
    "id": 443791,
    "adult": false,
    "backdrop_path": "\/fYPiQewg7ogbzro2XcCTACSB2KC.jpg",
    "original_language": "en",
    "original_title": "Underwater",
    "genre_ids": [27, 878, 53],
    "title": "Underwater",
    "vote_average": 6,
    "overview": "After an earthquake destroys their underwater station, six researchers must navigate two miles along the dangerous, unknown depths of the ocean floor to make it to safety in a race against time.",
    "release_date": "2020-01-08"
  }, {
    "popularity": 37.554,
    "vote_count": 1538,
    "video": false,
    "poster_path": "\/7LEI8ulZzO5gy9Ww2NVCrKmHeDZ.jpg",
    "id": 530385,
    "adult": false,
    "backdrop_path": "\/g6GtOfXtzDpY73ef7wludoorTti.jpg",
    "original_language": "en",
    "original_title": "Midsommar",
    "genre_ids": [18, 27, 9648],
    "title": "Midsommar",
    "vote_average": 7.1,
    "overview": "Several friends travel to Sweden to study as anthropologists a summer festival that is held every ninety years in the remote hometown of one of them. What begins as a dream vacation in a place where the sun never sets, gradually turns into a dark nightmare as the mysterious inhabitants invite them to participate in their disturbing festive activities.",
    "release_date": "2019-07-03"
  }, {
    "popularity": 55.152,
    "vote_count": 410,
    "video": false,
    "poster_path": "\/g4z7mDmJmx23vsVg6XNWcnXb6gc.jpg",
    "id": 480105,
    "adult": false,
    "backdrop_path": "\/3uG3aOhEzFCjcQulsJQiAzLSrw8.jpg",
    "original_language": "en",
    "original_title": "47 Meters Down: Uncaged",
    "genre_ids": [27],
    "title": "47 Meters Down: Uncaged",
    "vote_average": 4.9,
    "overview": "Four teenage girls go on a diving adventure to explore a submerged Mayan city. Once inside, their rush of excitement turns into a jolt of terror as they discover the sunken ruins are a hunting ground for deadly great white sharks. With their air supply steadily dwindling, the friends must navigate the underwater labyrinth of claustrophobic caves and eerie tunnels in search of a way out of their watery hell.",
    "release_date": "2019-08-15"
  }, {
    "popularity": 33.573,
    "id": 381283,
    "video": false,
    "vote_count": 4026,
    "vote_average": 7,
    "title": "mother!",
    "release_date": "2017-09-13",
    "original_language": "en",
    "original_title": "mother!",
    "genre_ids": [18, 27, 9648],
    "backdrop_path": "\/uuQpQ8VDOtVL2IO4y2pR58odkS5.jpg",
    "adult": false,
    "overview": "A couple's relationship is tested when uninvited guests arrive at their home, disrupting their tranquil existence.",
    "poster_path": "\/2yOKarmL8B4oXaLXUdHu882SUbu.jpg"
  }, {
    "popularity": 29.602,
    "vote_count": 10062,
    "video": false,
    "poster_path": "\/xazWoLealQwEgqZ89MLZklLZD3k.jpg",
    "id": 694,
    "adult": false,
    "backdrop_path": "\/h4DcDCOkQBENWBJZjNlPv3adQfM.jpg",
    "original_language": "en",
    "original_title": "The Shining",
    "genre_ids": [27, 53],
    "title": "The Shining",
    "vote_average": 8.2,
    "overview": "Jack Torrance accepts a caretaker job at the Overlook Hotel, where he, along with his wife Wendy and their son Danny, must live isolated from the rest of the world for the winter. But they aren't prepared for the madness that lurks within.",
    "release_date": "1980-05-22"
  }, {
    "popularity": 41.09,
    "vote_count": 947,
    "video": false,
    "poster_path": "\/vOl6shtL0wknjaIs6JdKCpcHvg8.jpg",
    "id": 567609,
    "adult": false,
    "backdrop_path": "\/ubqaGfwYxZMaTEVfhPghF87tzYm.jpg",
    "original_language": "en",
    "original_title": "Ready or Not",
    "genre_ids": [35, 27, 9648, 53],
    "title": "Ready or Not",
    "vote_average": 6.8,
    "overview": "A bride's wedding night takes a sinister turn when her eccentric new in-laws force her to take part in a terrifying game.",
    "release_date": "2019-08-21"
  }, {
    "popularity": 26.927,
    "vote_count": 7,
    "video": false,
    "poster_path": "\/tkFZmf2HbONsLaU6OEJ9ebCMQ8R.jpg",
    "id": 608812,
    "adult": false,
    "backdrop_path": "\/5r09qJvWwHnoTJzIWe7mIDfi0kQ.jpg",
    "original_language": "en",
    "original_title": "Handjob Cabin",
    "genre_ids": [35, 27],
    "title": "Handjob Cabin",
    "vote_average": 7,
    "overview": "4 friends descend on a log cabin for a weekend of fun, but an ominious sexually frustrated presence resides within.  Short trailers for a fictious movie...",
    "release_date": "2015-10-06"
  }, {
    "popularity": 10.754,
    "vote_count": 0,
    "video": false,
    "poster_path": "\/lRT4lbEUb4g0Yhi19iAJvxahiiH.jpg",
    "id": 664561,
    "adult": false,
    "backdrop_path": "\/1hZRRbtzQ7swNm0kdRxJTEX1ajY.jpg",
    "original_language": "en",
    "original_title": "Cruel Peter",
    "genre_ids": [27],
    "title": "Cruel Peter",
    "vote_average": 0,
    "overview": "It is Christmas 1908 in Messina, one of the richest merchant cities of the Mediterranean. Peter, the 13 year-old son of a rich English family is notorious for his cruelty to children, animals and servants. One night he is ambushed and wakes up in a coffin underground in the city's Gothic cemetery, buried in retaliation for his callousness by a servant boy from his mother's estate. When a powerful earthquake razes Messina to the ground, Peter is trapped and his whereabouts are forgotten. Until a century later an English archaeologist and his daughter arrive in the city.",
    "release_date": "2020-02-06"
  }, {
    "popularity": 19.893,
    "vote_count": 3851,
    "video": false,
    "poster_path": "\/cTaEIUYTt52ooq9quVbAQ7NpGwo.jpg",
    "id": 440021,
    "adult": false,
    "backdrop_path": "\/9bjHAkyi3aRRnfrIGhHPu7RATPR.jpg",
    "original_language": "en",
    "original_title": "Happy Death Day",
    "genre_ids": [27, 9648, 53],
    "title": "Happy Death Day",
    "vote_average": 6.6,
    "overview": "Caught in a bizarre and terrifying time warp, college student Tree finds herself repeatedly reliving the day of her murder, ultimately realizing that she must identify the killer and the reason for her death before her chances of survival run out.",
    "release_date": "2017-10-12"
  }, {
    "popularity": 25.922,
    "vote_count": 1588,
    "video": false,
    "poster_path": "\/fWOPN0XBvHXFYr3RsPr74qBge2I.jpg",
    "id": 243688,
    "adult": false,
    "backdrop_path": "\/i2otKlu6k5xM0bvA69y4z7XaCGo.jpg",
    "original_language": "en",
    "original_title": "Poltergeist",
    "genre_ids": [27, 53],
    "title": "Poltergeist",
    "vote_average": 5.1,
    "overview": "Legendary filmmaker Sam Raimi and director Gil Kenan reimagine and contemporize the classic tale about a family whose suburban home is invaded by angry spirits. When the terrifying apparitions escalate their attacks and take the youngest daughter, the family must come together to rescue her.",
    "release_date": "2015-05-20"
  }]
};
exports.fakeData = fakeData;
},{}],"js/components/subcomponents/Genre.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Genre = Genre;

var _createAndAppend = require("../../helpers/createAndAppend.js");

var _getData = require("../../helpers/data/getData");

var _fakeData = require("../../helpers/data/fakeData");

console.log(_fakeData.fakeData);

function Genre(params, genreObj) {
  console.log("test"); // getData("discover/movie", params)
  //     .then(data => data.json())
  //     .then(jsonData => {
  //         console.log(jsonData)

  var jsonData = _fakeData.fakeData;
  var section = (0, _createAndAppend.createAndAppend)("section", document.querySelector("main"));
  var h2 = (0, _createAndAppend.createAndAppend)("h2", section);
  var wrapper = (0, _createAndAppend.createAndAppend)("div", section);
  section.setAttribute("data-genre-name", genreObj.name);
  h2.textContent = genreObj.name;
  wrapper.setAttribute("class", "wrapper");
  jsonData.results.forEach(function (obj) {
    var article = (0, _createAndAppend.createAndAppend)("article", wrapper);
    var h3 = (0, _createAndAppend.createAndAppend)("h3", article, obj.title);
    var link = (0, _createAndAppend.createAndAppend)("a", article, "Meer lezen");
    link.setAttribute("href", "#movie/".concat(obj.id));
    var image = (0, _createAndAppend.createAndAppend)("img", article);
    image.src = "https://image.tmdb.org/t/p/w342/".concat(obj.poster_path);
  });
  section.append(wrapper); // })
}
},{"../../helpers/createAndAppend.js":"js/helpers/createAndAppend.js","../../helpers/data/getData":"js/helpers/data/getData.js","../../helpers/data/fakeData":"js/helpers/data/fakeData.js"}],"js/components/subcomponents/Movie.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Movie = Movie;

var _getData = require("../../helpers/data/getData");

var _createAndAppend = require("../../helpers/createAndAppend");

function Movie(id) {
  console.log(id + "fwefe");
  (0, _getData.getData)("movie/".concat(id)).then(function (data) {
    return data.json();
  }).then(function (movie) {
    console.log(movie);
    var section = (0, _createAndAppend.createAndAppend)("section", document.querySelector("main"));
    var article = (0, _createAndAppend.createAndAppend)("article", section);
    var h1 = (0, _createAndAppend.createAndAppend)("h1", article);
    h1.textContent = movie.title;
  });
}
},{"../../helpers/data/getData":"js/helpers/data/getData.js","../../helpers/createAndAppend":"js/helpers/createAndAppend.js"}],"js/components/views/views.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Home = Home;
exports.DetailSingle = DetailSingle;

var _genreList = _interopRequireDefault(require("../../genreList"));

var _Genre = require("../subcomponents/Genre");

var _Movie = require("../subcomponents/Movie");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Home() {
  //     genreList.forEach(obj => {
  //        Genre(`with_genres=${obj.id}`, obj.name)
  //    })
  // console.log(Genre)
  (0, _Genre.Genre)("with_genres=".concat(27), {
    id: 27,
    name: "Horror"
  });
  return;
}

function DetailSingle(id) {
  (0, _Movie.Movie)(id);
}
},{"../../genreList":"js/genreList.js","../subcomponents/Genre":"js/components/subcomponents/Genre.js","../subcomponents/Movie":"js/components/subcomponents/Movie.js"}],"js/helpers/router/routie.js":[function(require,module,exports) {
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
 * routie - a tiny hash router
 * v0.3.2
 * http://projects.jga.me/routie
 * copyright Greg Allen 2016
 * MIT License
*/
var Routie = function Routie(w, isModule) {
  var routes = [];
  var map = {};
  var reference = "routie";
  var oldReference = w[reference];

  var Route = function Route(path, name) {
    this.name = name;
    this.path = path;
    this.keys = [];
    this.fns = [];
    this.params = {};
    this.regex = pathToRegexp(this.path, this.keys, false, false);
  };

  Route.prototype.addHandler = function (fn) {
    this.fns.push(fn);
  };

  Route.prototype.removeHandler = function (fn) {
    for (var i = 0, c = this.fns.length; i < c; i++) {
      var f = this.fns[i];

      if (fn == f) {
        this.fns.splice(i, 1);
        return;
      }
    }
  };

  Route.prototype.run = function (params) {
    for (var i = 0, c = this.fns.length; i < c; i++) {
      this.fns[i].apply(this, params);
    }
  };

  Route.prototype.match = function (path, params) {
    var m = this.regex.exec(path);
    if (!m) return false;

    for (var i = 1, len = m.length; i < len; ++i) {
      var key = this.keys[i - 1];
      var val = 'string' == typeof m[i] ? decodeURIComponent(m[i]) : m[i];

      if (key) {
        this.params[key.name] = val;
      }

      params.push(val);
    }

    return true;
  };

  Route.prototype.toURL = function (params) {
    var path = this.path;

    for (var param in params) {
      path = path.replace('/:' + param, '/' + params[param]);
    }

    path = path.replace(/\/:.*\?/g, '/').replace(/\?/g, '');

    if (path.indexOf(':') != -1) {
      throw new Error('missing parameters for url: ' + path);
    }

    return path;
  };

  var pathToRegexp = function pathToRegexp(path, keys, sensitive, strict) {
    if (path instanceof RegExp) return path;
    if (path instanceof Array) path = '(' + path.join('|') + ')';
    path = path.concat(strict ? '' : '/?').replace(/\/\(/g, '(?:/').replace(/\+/g, '__plus__').replace(/(\/)?(\.)?:(\w+)(?:(\(.*?\)))?(\?)?/g, function (_, slash, format, key, capture, optional) {
      keys.push({
        name: key,
        optional: !!optional
      });
      slash = slash || '';
      return '' + (optional ? '' : slash) + '(?:' + (optional ? slash : '') + (format || '') + (capture || format && '([^/.]+?)' || '([^/]+?)') + ')' + (optional || '');
    }).replace(/([\/.])/g, '\\$1').replace(/__plus__/g, '(.+)').replace(/\*/g, '(.*)');
    return new RegExp('^' + path + '$', sensitive ? '' : 'i');
  };

  var addHandler = function addHandler(path, fn) {
    var s = path.split(' ');
    var name = s.length == 2 ? s[0] : null;
    path = s.length == 2 ? s[1] : s[0];

    if (!map[path]) {
      map[path] = new Route(path, name);
      routes.push(map[path]);
    }

    map[path].addHandler(fn);
  };

  var routie = function routie(path, fn) {
    if (typeof fn == 'function') {
      addHandler(path, fn);
      routie.reload();
    } else if (_typeof(path) == 'object') {
      for (var p in path) {
        addHandler(p, path[p]);
      }

      routie.reload();
    } else if (typeof fn === 'undefined') {
      routie.navigate(path);
    }
  };

  routie.lookup = function (name, obj) {
    for (var i = 0, c = routes.length; i < c; i++) {
      var route = routes[i];

      if (route.name == name) {
        return route.toURL(obj);
      }
    }
  };

  routie.remove = function (path, fn) {
    var route = map[path];
    if (!route) return;
    route.removeHandler(fn);
  };

  routie.removeAll = function () {
    map = {};
    routes = [];
  };

  routie.navigate = function (path, options) {
    options = options || {};
    var silent = options.silent || false;

    if (silent) {
      removeListener();
    }

    setTimeout(function () {
      window.location.hash = path;

      if (silent) {
        setTimeout(function () {
          addListener();
        }, 1);
      }
    }, 1);
  };

  routie.noConflict = function () {
    w[reference] = oldReference;
    return routie;
  };

  var getHash = function getHash() {
    return window.location.hash.substring(1);
  };

  var checkRoute = function checkRoute(hash, route) {
    var params = [];

    if (route.match(hash, params)) {
      route.run(params);
      return true;
    }

    return false;
  };

  var hashChanged = routie.reload = function () {
    var hash = getHash();

    for (var i = 0, c = routes.length; i < c; i++) {
      var route = routes[i];

      if (checkRoute(hash, route)) {
        return;
      }
    }
  };

  var addListener = function addListener() {
    if (w.addEventListener) {
      w.addEventListener('hashchange', hashChanged, false);
    } else {
      w.attachEvent('onhashchange', hashChanged);
    }
  };

  var removeListener = function removeListener() {
    if (w.removeEventListener) {
      w.removeEventListener('hashchange', hashChanged);
    } else {
      w.detachEvent('onhashchange', hashChanged);
    }
  };

  addListener();

  if (isModule) {
    return routie;
  } else {
    w[reference] = routie;
  }
};

if (typeof module == 'undefined') {
  Routie(window);
} else {
  module.exports = Routie(window, true);
}
},{}],"js/app.js":[function(require,module,exports) {
"use strict";

var _genreList = require("./genreList");

var _views = require("./components/views/views");

var _Genre = require("./components/subcomponents/Genre");

var _routie = _interopRequireDefault(require("./helpers/router/routie"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Import helper Utills
// Import subcomponents
console.log(_routie.default);

function init() {
  // genreList.forEach(obj => {
  //     Genre(`with_genres=${obj.id}`, obj.name)
  // })
  // Genre(`with_genres=${27}`, {
  //     id:27,
  //     name: "Horror"
  // })
  (0, _routie.default)({
    'movie/:id': function movieId(id) {
      console.log(id);
      (0, _views.DetailSingle)(id);
    },
    '': function _() {
      console.log("fwefwef");
      (0, _views.Home)();
    }
  });
}

init();
},{"./genreList":"js/genreList.js","./components/views/views":"js/components/views/views.js","./components/subcomponents/Genre":"js/components/subcomponents/Genre.js","./helpers/router/routie":"js/helpers/router/routie.js"}],"C:/Users/stolp/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "63341" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["C:/Users/stolp/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/app.js"], null)
//# sourceMappingURL=/app.c3f9f951.js.map
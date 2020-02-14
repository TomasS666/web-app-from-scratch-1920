This product uses the TMDb API but is not endorsed or certified by TMDb.

<Maybe a table of contents here? 📚>

### Demo: https://tomass666.github.io/web-app-from-scratch-1920/

## 

# Description

## How to install

## Actor diagram




App init()
    Routie()
  
View
View.home()
View.singleMovie()
View.searchresults() 

Data   
getData()


Subcomponent
Subcomponent.genre()
Subcomponent.movie()

Helpers
Helper.createAndAppend()
Storage.get()
Storage.set()
Storage.check()

## Interaction diagram

## Concept
The concept of this website is quite straightforward, the idea is to enable the user to browse and explore information about movies. 
It would have been nice to also offer them information about movies which are in theaters now, but that's a nice addition when there's time left over. 


## Actor diagram
(Might be updated, app still under construction)
## Interaction diagram

## API TheMovieDB
I'm fetching data on the following endpoints:

To get a list of movies of a certain genre:
```
/discover/with_genre={id}
```

### Used data
I'm not using 
### Guide
### Limit
The rate limit has been removed. Yet after some time I retrieved the data of a genre and I saved it locally temporarily so I wouldn't overload the server of such a nice company. 
## Features
Searching movies
Overview page of movie genres
Single page detail page

## Wishlist
* Preload skeleton layout. Image reflow.
* Keeping track of history / hashes to enable the user to pick up where they left of.
* Search results view
* Better flow of data
* Less cascading functional code, more human readable code ( export functions in a covering parent object )
* More readable way for creating components.

## References

## Acknowledgements
For creating my own templating engine I choose createElement() and append() over insertAdjacentHTML first because with innerAdjacentHTML you have to retrieve the DOM element again before you can add eventlisteners. 
But since the template became bigger and I realized of course I don't have to put events on everything I started using a mix of both innerAdjacdntHTML with template literals and createAndAppend().

## License

[MIT License Copyright (c) 2020 Tomas S](https://github.com/TomasS666/web-app-from-scratch-1920/blob/master/LICENSE)


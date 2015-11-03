# music.scale.build

[![Build Status](https://travis-ci.org/danigb/music.scale.build.svg?branch=master)](https://travis-ci.org/danigb/music.scale.build)
[![Test Coverage](https://codeclimate.com/github/danigb/music.scale.build/badges/coverage.svg)](https://codeclimate.com/github/danigb/music.scale.build/coverage)
[![Code Climate](https://codeclimate.com/github/danigb/music.scale.build/badges/gpa.svg)](https://codeclimate.com/github/danigb/music.scale.build)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)
[![npm version](https://img.shields.io/npm/v/music.scale.build.svg)](https://www.npmjs.com/package/music.scale.build)
[![license](https://img.shields.io/npm/l/music.scale.build.svg)](https://www.npmjs.com/package/music.scale.build)
[![distribution file](https://img.shields.io/badge/dist-8.1kb-blue.svg)](https://github.com/danigb/music.scale.build/blob/master/dist/music.scale.build.min.js)
[![music.kit](https://img.shields.io/badge/music-kit-yellow.svg)](https://www.npmjs.com/package/music.kit)

Music scales made easy:

```js
var scale = require('music.scale.build')
var major = scale('1 2 3 4 5 6 7')
major('A') // => ['A', 'B', 'C#', 'D', 'E', 'F#', 'G#']
```

## Install

#### Node

Via npm: `npm i --save music.scale.build`

#### Browsers

Grab the file from [dist](https://raw.githubusercontent.com/danigb/music.scale.build/master/dist/music.scale.build.min.js) folder.

## Usage

#### Build scales from intervals

The simplest use case is build scales from intervals:

```js
scale('1M 2M 3m 7m', 'F') // => ['F', 'G', 'Ab', 'Eb']
scale('1 2 3 4 5', 'A3') // => ['A3', 'B3', 'C#4', 'D4', 'E4']
```

To know the interval string format see [interval-parser](https://github.com/danigb/interval-parser). Notice that if the tonic contains octave, the scale will have octaves in it.

Also, you can partially apply the `scale` function:

```js
var pentatonic = scale('1 2 3 5 6')
pentatonic('E') // => ['E', 'F#', 'G#', 'B', 'C#']
```

#### Build scales from notes

You can also use notes as the source of your scale:

```js
var lydian = scale('C D E F# G A B')
lydian('A') // => ['A', 'B', 'C#', 'D#', 'E', 'F#', 'G#']
```

`scale` function assumes that the first note is the tonic.

#### Get scale intervals

You can get the scale intervals passing `false` as tonic:

```js
var dorian = scale('D E F G A B C')
dorian(false) // => ['1P', '2M', '3m', '4P', '5P', '6M', '7m']
```

#### More...

See [music.scale.builds](https://github.com/danigb/music.scale.builds) for scales dictionaries,
[music.kit](https://github.com/danigb/music.kit) for the complete library

## Documentation

You can read the [generated API documentation here](https://github.com/danigb/music.scale.build/blob/master/API.md)

## License

MIT License

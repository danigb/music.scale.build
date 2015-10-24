'use strict'

var gamut = require('music.gamut')
var harmonizer = require('music.harmonizer')
var pitchSet = require('music.pitchSet')

/**
 * Build a scale from a source and a tonic. A scale is an array of notes (or
 * intervals if tonic is null) ordered by frequency
 *
 * A source can be a list of intervals or notes. The tonic must be
 * a pitch (with or without octave) or null to get the scale intervals
 *
 * This function is currified, so you can partially apply the function passing
 * one parameter instead of two (see example)
 *
 * @name scale
 * @function
 * @param {Array} source - the list of intervals or notes
 * @param {String} tonic - the tonic of the scale
 * @return {Array} the list of notes
 *
 * @example
 * scale('1 2 3 5 6', 'G') // => ['G', 'A', 'B', 'D', 'E']
 * var dorian = scale('D E F G A B C')
 * dorian('C4')
 */
function scale (source, tonic) {
  if (arguments.length === 1) return function (t) { return scale(source, t) }
  return gamut.apply(function (g) {
    var intervals = pitchSet(harmonizer(g, false))
    return harmonizer(intervals, tonic)
  }, source)
}

if (typeof module === 'object' && module.exports) module.exports = scale
if (typeof window !== 'undefined') window.scale = scale

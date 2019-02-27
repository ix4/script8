const settings = {
  octaves: 4,
  volumes: 8,
  phrases: 8 * 8,
  chains: 8 * 8,
  songs: 8,
  matrixLength: 16,
  chainChannels: 4,
  startOffset: '+0.1',
  startOffsetDouble: '+0.5',
  bpm: 120,
  subdivision: '136n'
}

// 2000 bpm, 1n subdivision, 16n is top fast
// this is

//  1 -  4
//  2 -  8
//  3 - 12
//  5 - 20
//  8 - 32
// 13 - 52
// 21 - 84
// 34 - 136

export default settings

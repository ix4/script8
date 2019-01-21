import {
  convertPerMapToPerRoom,
  convertPerRoomToPerMap
} from './mapConverter.js'
import mapPerMapLayout from '../fixtures/mapPerMapLayout.json'
import mapPerRoomLayout from '../fixtures/mapPerRoomLayout.json'
// import fs from 'fs'

describe('mapConverter', () => {
  test('should convert map to room layout', () => {
    const perRoomLayout = convertPerMapToPerRoom(mapPerMapLayout)
    // fs.writeFileSync(
    //   '../perRoomLayout.json',
    //   JSON.stringify(perRoomLayout, null, 2)
    // )

    // expect(true).toEqual(false)
    expect(perRoomLayout).toEqual(mapPerRoomLayout)
  })

  test('should convert room to map layout', () => {
    const perMapLayout = convertPerRoomToPerMap(mapPerRoomLayout)

    expect(perMapLayout).toEqual(mapPerMapLayout)
  })
})

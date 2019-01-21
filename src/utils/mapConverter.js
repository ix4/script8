import chunk from 'lodash/chunk'
import flatten from 'lodash/flatten'
import zip from 'lodash/zip'
import zipWith from 'lodash/zipWith'
import range from 'lodash/range'

const convertPerRoomToPerMap = roomRows =>
  flatten(
    roomRows.map(row =>
      zipWith(...row, (...arrs) =>
        flatten(arrs.map(d => (d.length ? d : range(16).map(d => null))))
      )
    )
  )

const convertPerMapToPerRoom = layout => {
  // Take 16 rows at a time, which represent one row of 8 rooms.
  const newLayout = chunk(layout, 16).map(arrayOf16Rows =>
    zip(
      ...arrayOf16Rows.map(row =>
        chunk(row, 16).map(chunk => (chunk.filter(d => d).length ? chunk : []))
      )
    )
  )
  return newLayout
}

export { convertPerMapToPerRoom, convertPerRoomToPerMap }

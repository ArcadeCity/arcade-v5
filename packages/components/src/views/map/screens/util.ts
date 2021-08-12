import {
  feature,
  Feature,
  featureCollection,
  FeatureCollection,
} from '@turf/helpers'

export const makeGeojson = (data: any) => {
  const users = data.geos
  const features: Feature[] = []

  let i = 0
  // coords.push({
  //     coordinates: [parseFloat(datum.long), parseFloat(datum.lat)],
  // })
  users.forEach((user: any) => {
    i = i + 1
    const userFeature: Feature = feature(
      {
        type: 'Point',
        coordinates: [parseFloat(user.long), parseFloat(user.lat)],
      },
      {
        id: i,
        icon: 'guild',
        type: 'guild',
      }
    )
    features.push(userFeature)
  })
  const userCollection: FeatureCollection = featureCollection(features)
  // root.socialStore.setUserShape(userCollection)
  return userCollection
}

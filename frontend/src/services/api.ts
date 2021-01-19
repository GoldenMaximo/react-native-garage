export const getList = async () => {
  // React native identifies localhost as it's own
  //  device localhost when running on an emulator or a physical device
  //   when running locally, one workaround is to use the ip of your computer
  //    as the endpoint.
  const response = await fetch('http://172.18.77.145:3000/')
  return response.json()
}

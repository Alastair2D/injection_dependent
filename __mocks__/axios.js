export default {
  get: jest.fn(key => {
    return new Promise(resolve =>
      resolve("Hello")
    )
  }),
  post: jest.fn(key => {
    return new Promise(resolve =>
      resolve("Hello")
    )
  })
};

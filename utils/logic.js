export const someLogicThrowError = () => {
  try {
    throw new Error('Error in Logic');
  } catch (e) {
    console.log('Error caught: ', e);
    throw e;
  }
};

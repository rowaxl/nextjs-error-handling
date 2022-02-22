const doAsyncWork = () => Promise.reject(new Error('Async Error'));
doAsyncWork();

const OutsideOfPage = () => <h1>Async Error Occurs outside of Page</h1>;

export default OutsideOfPage;

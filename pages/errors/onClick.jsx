const onClickPage = () => {
  const handleOnClick = () => {
    try {
      throw new Error('Runtime Error');
      console.log('perform onClick');
    } catch (e) {
      console.error({ e });
      throw e;
    }
  };

  return (
    <>
      <h1>Throw Runtime Error</h1>

      <div>
        <button onClick={handleOnClick}>Click</button>
      </div>
    </>
  );
};

export default onClickPage;

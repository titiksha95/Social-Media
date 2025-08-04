const WelcomeMessage = ({ onGetPostCicked }) => {
  return (
    <center>
      <h1 className="wel-msg">There are no posts!</h1>
      <button
        type="button"
        onClick={onGetPostCicked}
        className="btn btn-primary"
      >
        Get Posts from Server
      </button>
    </center>
  );
};
export default WelcomeMessage;

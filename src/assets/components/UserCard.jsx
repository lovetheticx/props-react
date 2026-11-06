function UserCard(props) {
  return (
    <div className={"user-card " + props.platform}>
      <div className="user-name">
        <img src={"/" + props.platform + ".svg"} alt="" />
        <p>{props.username}</p>
      </div>
      <h2 className="followers">{props.followers}</h2>
      <p className="follower-label">
        {props.subscribers ? "SUBSCRIBERS" : "FOLLOWERS"}
      </p>
      <p className={props.down ? "change down" : "change"}>
        <img
          src={props.down ? "/arrow-down.svg" : "/arrow-up.svg"}
          alt=""
        />
        {props.change}
      </p>
    </div>
  );
}

export default UserCard;

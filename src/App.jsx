import UserCard from "./assets/components/UserCard";

function OverviewCard(props) {
  return (
    <div className="overview-card">
      <div className="overview-card-top">
        <h3>{props.title}</h3>
        <img src={props.icon} alt="" />
      </div>
      <div className="overview-card-bottom">
        <p className="overview-number">{props.number}</p>
        <p className={props.down ? "change down" : "change"}>
          <img src={props.down ? "/arrow-down.svg" : "/arrow-up.svg"} alt="" />
          {props.change}
        </p>
      </div>
    </div>
  );
}

function App() {
  return (
    <main className="dashboard">
      <div className="container">
        <header className="page-header">
          <div>
            <h1>Social Media Dashboard</h1>
            <p>Total Followers: 23,004</p>
          </div>
        </header>

        <section className="social-cards">
          <UserCard
            platform="facebook"
            username="@nathanf"
            followers="1987"
            change="12 Today"
          />
          <UserCard
            platform="twitter"
            username="@nathanf"
            followers="1044"
            change="99 Today"
          />
          <UserCard
            platform="instagram"
            username="@realnathanf"
            followers="11k"
            change="1099 Today"
          />
          <UserCard
            platform="youtube"
            username="Nathan F."
            followers="8239"
            change="144 Today"
            subscribers
            down
          />
        </section>

        <section className="overview">
          <h2>Overview - Today</h2>
          <div className="overview-cards">
            <OverviewCard
              title="Page Views"
              icon="/facebook.svg"
              number="87"
              change="3%"
            />
            <OverviewCard
              title="Likes"
              icon="/facebook.svg"
              number="52"
              change="2%"
              down
            />
            <OverviewCard
              title="Likes"
              icon="/instagram.svg"
              number="5462"
              change="2257%"
            />
            <OverviewCard
              title="Profile Views"
              icon="/instagram.svg"
              number="52k"
              change="1375%"
            />
            <OverviewCard
              title="Retweets"
              icon="/twitter.svg"
              number="117"
              change="303%"
            />
            <OverviewCard
              title="Likes"
              icon="/twitter.svg"
              number="507"
              change="553%"
            />
            <OverviewCard
              title="Likes"
              icon="/youtube.svg"
              number="107"
              change="19%"
              down
            />
            <OverviewCard
              title="Total Views"
              icon="/youtube.svg"
              number="1407"
              change="12%"
              down
            />
          </div>
        </section>
      </div>
    </main>
  );
}

export default App;

import "./Card.css";

export const Card = ({ searchType, data, isSubmitted, cardCategory }) => {
  let appearanceInfo, eventsInfo;
  let appearanceTitle, eventsTitle;

  switch (searchType) {
    case "characters":
      if (cardCategory === "appearance") {
        appearanceInfo = data?.comics?.available ?? "";
        appearanceTitle = "Appearances";
      }
      if (cardCategory === "events") {
        eventsInfo = data?.events?.available ?? "";
        eventsTitle = "Events";
      }
      if (cardCategory === "series") {
        eventsInfo = data?.series?.available ?? "";
        eventsTitle = "Series";
      }
      if (cardCategory === "stories") {
        eventsInfo = data?.stories?.available ?? "";
        eventsTitle = "Stories";
      }
      break;
    // case "comics":
    //   appearanceInfo = data.issueNumber;
    //   break;
    case "events":
      // appearanceInfo = data?.title ?? "";
      // appearanceTitle = data?.title ?? "";
      if (cardCategory === "creators") {
        eventsInfo = data?.creators?.available ?? "";
        eventsTitle = "Number of Creators";
      }
      if (cardCategory === "comics") {
        eventsInfo = data?.comics?.available ?? "";
        eventsTitle = "Number of Comics";
      }
      if (cardCategory === "stories") {
        eventsInfo = data?.stories?.available ?? "";
        eventsTitle = "Number of Stories";
      }
      break;
    default:
      appearanceInfo = "";
      appearanceTitle = "";
  }

  return (
    <>
      <div className="card-wrapper">
        <div className="card-container">
          <div className="card-col-a">
            <div className="card-content-value">
              <h1
                style={{
                  fontSize: "50px",
                  fontFamily: "Merriweather",
                }}
              >
                {appearanceInfo || eventsInfo}
              </h1>
            </div>
            <div className="card-content-title">
              <p>{appearanceTitle || eventsTitle}</p>
            </div>
          </div>
          <div className="card-col-b"></div>
        </div>
      </div>
    </>
  );
};

// Card.propTypes = {
//   searchType: PropTypes.string.isRequired,
//   data: PropTypes.shape({
//     comics: PropTypes.shape({
//       available: PropTypes.number,
//     }),
//     issueNumber: PropTypes.number,
//     title: PropTypes.string,
//   }),
// };
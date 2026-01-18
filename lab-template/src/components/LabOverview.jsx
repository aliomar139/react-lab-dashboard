import WelcomeBanner from "./WelcomeBanner";
import CourseSummary from "./CourseSummary";
import ResourceList from "./ResourceList";

function LabOverview({ welcome, current, upcoming, resources }) {
  return (
    <>
      <WelcomeBanner {...welcome} />
      <CourseSummary {...current} />
      <CourseSummary {...upcoming}>
        {upcoming.note && <p className="note">{upcoming.note}</p>}
      </CourseSummary>
      <ResourceList resources={resources} />
    </>
  );
}

export default LabOverview;

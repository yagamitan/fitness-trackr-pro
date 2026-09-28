import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getActivities } from "../api/activities";
import { useNavigate } from "react-router-dom";
import { deleteActivity } from "../api/activities";
import { useAuth } from "../auth/AuthContext";

export default function ActivitiesDetails() {
  const { id } = useParams();
  const [activity, setActivity] = useState(null);
  const { token } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    getActivities().then((activities) => {
      const found = activities.find((item) => item.id === Number(id));
      setActivity(found);
    });
  }, [id]);

  const tryDelete = async () => {
    await deleteActivity(token, activity.id);
    navigate("/activities");
  };

  if (!activity) {
    return <p>loading...</p>;
  }
  return (
    <>
      <h1>{activity.name}</h1>
      <p>{activity.description}</p>
      <p>Created by: {activity.creatorName}</p>
      {token && <button onClick={tryDelete}>Delete</button>}
    </>
  );
}

import { useParams, useSearchParams } from "react-router-dom";
import "./style.css";

export const Post = () => {
  const params = useParams();
  const { id } = params;
  const [qs] = useSearchParams();

  return (
    <h1>
      Post {`Param: ${id}`} {`QS: ${qs}`}
    </h1>
  );
};

import { ListGroup } from "react-bootstrap";
import SingleComment from "./SingleComment";

const CommentsList = (props) => {
  return (
    <ListGroup>
      {props.arrayOfComments.map((commentObj) => (
        <SingleComment key={commentObj._id} commentObj={commentObj} />
      ))}
    </ListGroup>
  );
};

export default CommentsList;

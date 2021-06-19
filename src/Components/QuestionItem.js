const QuestionItem = (props) => {
  return (
    <li className="list-group-item list-group-item-action d-flex justify-content-between mt-1 border">
      <small className="overflow-hidden">{props.question.question}</small>
      <small className="small">
        {props.title} - <span className="text-danger">({props.amount})</span>
      </small>
    </li>
  );
};

export default QuestionItem;

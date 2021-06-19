const ActivePersonItem = (props) => {
  return (
    <li className="list-group-item list-group-item-action border mt-1">
      {props.name}
      <span className="badge badge-primary text-primary text-right">{props.rating}</span>
    </li>
  );
};

export default ActivePersonItem;

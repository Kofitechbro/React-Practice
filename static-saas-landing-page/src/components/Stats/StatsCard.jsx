export function StatsCard(props) {
  return (
    <div>
      <div className="stats-num">{props.num}</div>
      <p>{props.description}</p>
    </div>
  );
}

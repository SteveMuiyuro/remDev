
type ResultsCountProps = {
  count:number
}

export default function ResultsCount({count = 0}:ResultsCountProps) {
  return <p className="count"><span className="u-bold">{count}</span> results</p>;
}

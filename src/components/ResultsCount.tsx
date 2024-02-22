import { useJobItemContext } from "../libs/hooks";

export default function ResultsCount() {

  const {count} = useJobItemContext()

  return <p className="count"><span className="u-bold">{count}</span> results</p>;
}

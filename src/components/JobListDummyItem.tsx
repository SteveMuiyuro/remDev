
import { useJobItemContext, useSearchContext, useSearchQuery } from '../libs/hooks'
import JobList from './JobList'

export default function JobListDummyItem() {
const {debounceSearchText}= useSearchContext()
const {isLoading} = useSearchQuery(debounceSearchText);

const {jobItemsSliced} = useJobItemContext()
  return (<JobList jobItemsList={jobItemsSliced} isLoading={isLoading}/>)


}

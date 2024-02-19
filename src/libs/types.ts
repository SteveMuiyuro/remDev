export type TjobItem = {
    badgeLetters: string,
    company: string,
    daysAgo: number,
    id: number,
    relevanceScore:number,
    title:string
   }

export type jobItemProps = TjobItem & {
    description:string,
    qualifications:string[],
    reviews:string[],
    duration:string,
    salary:string,
    location:string,
    coverImgURL:string,
    companyURL:string

}


export type sortBy = "relevant" | "recent"

export type PageDirection = "previous" | "next"

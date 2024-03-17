import WorkWithUsPageContent from "../components/WorkWithUsPage/WorkWithUsPageContent";
import { useEffect } from "react";

export default function WorkWithUsPage() {
    //Goes to top of page on redirect
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return (
        <div className="work-with-us-page">
            <WorkWithUsPageContent />
        </div>
    )
}
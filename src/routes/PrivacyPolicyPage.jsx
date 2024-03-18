import { useEffect } from "react";
import PrivacyPolicyPageContent from "../components/PrivacyPolicyPage/PrivacyPolicyPageContent";

export default function PrivacyPolicyPage() {
    //Goes to top of page on redirect
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return (
        <div className="privacy-policy-page">
            <PrivacyPolicyPageContent />
        </div>
    )
}
import { useEffect } from "react";

export default function PrivacyPolicyPage() {
    //Goes to top of page on redirect
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return (
        <div className="privacy-policy-page">
            <h1>PrivacyPolicyPage</h1>
        </div>
    )
}
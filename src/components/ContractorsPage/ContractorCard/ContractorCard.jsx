import "./ContractorCard.scss"

export default function ContractorCard({title, buttonText}) {


    return (
            <form className="contractor-card">
                <h2 className="contractor-card__title">Name and Contact Details</h2>
                <div className="contractor-card__input-group contractor-card__group">
                    <textarea type="text" name="contact-person" placeholder="Contact Person" />
                    <textarea type="text" name="date" placeholder="Date" />
                    <textarea type="text" name="lead-source" placeholder="Lead Source" />
                    <textarea type="text" name="address" placeholder="Address" />
                    <textarea type="text" name="home-phone" placeholder="Home Phone" />
                    <textarea type="text" name="work-phone" placeholder="Work Phone" />
                    <textarea type="text" name="company-name" placeholder="Company Name" />
                    <textarea type="text" name="email" placeholder="Email" />
                    <textarea className="specialized_field" type="text" name="specialized_field" placeholder="Specialized Field (GC, Plumber, Electric, Roofer, etc.)" />
                </div>

                <h2 className="contractor-card__title">Insurance and Experience</h2>
                <p>Are you licensed and insured?</p>
                <div className="contractor-card__button-group">
                    <div className="contractor-card__button-group__choice">
                        <input type="radio" id="yes" name="licensed" />
                        <label for="yes">Yes</label>
                    </div>
                    <div className="contractor-card__button-group__choice">
                        <input type="radio" id="no" name="licensed" />
                        <label for="no">No</label>
                    </div>
                </div>
                <div className="contractor-card__input-group contractor-card__group">
                    <textarea type="text" name="contractor-license" placeholder="Contractor License #" />
                    <textarea type="text" name="type-insurance" placeholder="Type of insurance?" />
                    <textarea type="text" name="coverage-amt" placeholder="How much coverage?" />
                    <textarea type="text" name="license-updated" placeholder="License updated?" />
                    <textarea type="text" name="time-in-area" placeholder="How long have you been doing business in the area?" />
                    <textarea type="text" name="time-with-crew" placeholder="How long running own crew?" />
                    <textarea type="text" name="people-in-crew" placeholder="How many people on crew full time?" />
                </div>


                <h2 className="contractor-card__title">Current Projects and Bidding</h2>
                <div className="contractor-card__input-group">
                    <textarea type="text" name="number-projects" placeholder="How many projects do you have going on right now?" />
                    <textarea type="text" name="past-year" placeholder="In the past year?" />
                    <textarea type="text" name="jobs-amount" placeholder="How many jobs do you typically handle at once?" />
                    <textarea type="text" name="scopes-of-work" placeholder="What were the scopes of work?" />
                    <textarea type="text" name="work-addresses" placeholder="What are the addresses?" />
                </div>
                <p>Can we see the work on one or two recent projects?</p>
                <div className="contractor-card__button-group">
                    <div className="contractor-card__button-group__choice">
                        <input type="radio" id="yes" name="projects-work" />
                        <label for="yes">Yes</label>
                    </div>
                    <div className="contractor-card__button-group__choice">
                        <input type="radio" id="no" name="projects-work" />
                        <label for="no">No</label>
                    </div>
                </div>
                <p>How do you usually bid out your work?</p>
                <div className="contractor-card__button-group">
                    <div className="contractor-card__button-group__choice">
                        <input type="radio" id="labor-material" name="bid-work" />
                        <label for="labor-material">Labor & material</label>
                    </div>
                    <div className="contractor-card__button-group__choice">
                        <input type="radio" id="labor" name="bid-work" />
                        <label for="labor">Labor</label>
                    </div>
                </div>

                <h2 className="contractor-card__title">Subcontractors</h2>
                <p>Do you use subcontractors?</p>
                <div className="contractor-card__button-group">
                    <div className="contractor-card__button-group__choice">
                        <input type="radio" id="yes" name="subcontractors" />
                        <label for="yes">Yes</label>
                    </div>
                    <div className="contractor-card__button-group__choice">
                        <input type="radio" id="no" name="subcontractors" />
                        <label for="no">No</label>
                    </div>
                </div>
                <p>Are they licensed and insured?</p>
                <div className="contractor-card__button-group">
                    <div className="contractor-card__button-group__choice">
                        <input type="radio" id="yes" name="subcontractors-licensed" />
                        <label for="yes">Yes</label>
                    </div>
                    <div className="contractor-card__button-group__choice">
                        <input type="radio" id="no" name="subcontractors-licensed" />
                        <label for="no">No</label>
                    </div>
                </div>

                <h2 className="contractor-card__title">More Pre-screening</h2>
                <div className="contractor-card__input-group">
                    <textarea type="text" name="communication-freq" placeholder="How often do you comminucate with your clients during a job?" />
                </div>
                <p>Do you clean the jobsite daily?</p>
                <div className="contractor-card__button-group">
                    <div className="contractor-card__button-group__choice">
                        <input type="radio" id="yes" name="clean-daily" />
                        <label for="yes">Yes</label>
                    </div>
                    <div className="contractor-card__button-group__choice">
                        <input type="radio" id="no" name="clean-daily" />
                        <label for="no">No</label>
                    </div>
                </div>
                <p>Do you have a problem with signing a lien waiver?</p>
                <div className="contractor-card__button-group">
                    <div className="contractor-card__button-group__choice">
                        <input type="radio" id="yes" name="lien-waver" />
                        <label for="yes">Yes</label>
                    </div>
                    <div className="contractor-card__button-group__choice">
                        <input type="radio" id="no" name="lien-waver" />
                        <label for="no">No</label>
                    </div>
                </div>

                <h2 className="contractor-card__title">References</h2>
                <p>Can you provide a list of references with the names and numbers you have done work for in the past?</p>
                <div className="contractor-card__input-group">
                    <textarea type="text" name="reference1" placeholder="Reference 1" />
                    <textarea type="text" name="reference2" placeholder="Reference 2" />
                    <textarea type="text" name="reference3" placeholder="Reference 3" />
                </div>
                <button className="contractor-card__submit-btn" type="submit" value="Submit">Apply Now</button>
            </form>
    )
}
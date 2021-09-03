import contactStyles from '../styles/contactMain.module.css'
const contactTitle = () => {
    return (
        <div>
            <div className={contactStyles.titlediv}>
               Contact Us 
            </div>
            <div className={contactStyles.helpdiv}>
                <p className={contactStyles.helpbigtext}>We are here to help!</p>
                <p className={contactStyles.helpsmalltext}>
                    Already use Slack? Sign in so we can tailor your support experience.
                    If that’s not possible, we’d still like to hear from you.
                </p>
            </div>
            <div className={contactStyles.maindiv}>
                <div className={contactStyles.submaindiv}>
                    <div className={contactStyles.whitediv}>
                        <p className={contactStyles.whitebigtext}>FAQ</p>
                        <p className={contactStyles.whitemediumtext}>
                            For quick answers to common questions,<br/>
                            try our FAQ first!
                        </p>
                        <p className={contactStyles.whitesmalltext}>Help Center</p>
                    </div>
                    <div className={contactStyles.rightdiv}>
                        <p className={contactStyles.whitebigtext}>Everything Else</p>
                        <p className={contactStyles.whitemediumtext}>
                            Still seeking your answers? Let us help<br/>
                            you directly
                        </p>
                        <p className={contactStyles.whitesmalltext}>Submit your request</p>
                    </div>
                </div>
                <div className={contactStyles.subscribemaindiv}>
                    <div className={contactStyles.subscribediv}>
                        <div className={contactStyles.subscribesubdiv}>
                            <p className={contactStyles.subscribetext}>
                                Want to get be the first to know about any updates?<br/> 
                                Suscribe to get our newsletters.
                            </p>
                        </div>
                        <div className={contactStyles.subdiv}>
                            <div>
                                <input type="email" placeholder="Email" className={contactStyles.input}/>
                                <p className={contactStyles.subdivtext}>
                                    By submitting your email, I consent to Zuri Chat sending me marketing communication <br/>
                                    via email. I may opt out at anytime. Read Zuri Chat’s   
                                    <span className={contactStyles.subdivgreen}>Privacy Policy</span> .
                                </p>
                            </div>
                            <div>
                                <button className={contactStyles.btn}>Subscribe</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default contactTitle

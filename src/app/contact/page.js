import styles from '../page.module.css';

import Link from 'next/link';

//Components
import Alerts from '../components/Alerts';


export default function Page() {
    return (
        <div>
            <div className={styles.navbar}>
                <ul>
                    <li><p>Lexaly AI</p></li>
                    <Link className={styles.linknav} href="/">Home</Link>
                    <Link className={styles.linknav} href="/contact/">Contact</Link>
                </ul>
            </div>
            <Alerts />
            <div className={styles.contact}>
                <h1>Lexaly AI Office Hours</h1>
                <hr />
                <div className={styles.info}>
                    <p><strong>Availability:</strong> Mondays and Wednesdays, 10:00 AM - 12:00 PM (Eastern Standard Time)</p>
                    <div>
                        <p>
                            <strong>Purpose:</strong>Lexaly AI Office Hours are dedicated to providing support, guidance, and answering any questions you may have regarding our AI platform, its features, integrations, or any related topics.
                        </p>
                    </div>
                    <div>
                        {/* <p>
                            <strong>How to Join:</strong> Office hours will be conducted virtually via Zoom. The meeting link will be shared with all team members prior to the scheduled time. If you're not a part of the team but would like to join, please reach out to [insert contact information] for access.
                        </p> */}
                    </div>
                    <div>
                        <p>
                            <strong>Topics Covered: </strong>We welcome questions and discussions on a wide range of topics, including but not limited to:
                        </p>
                    </div>
                    <div>
                        <li>Getting started with Lexaly AI</li>
                        <li>Platform features and functionalities</li>
                        <li>Troubleshooting and technical assistance</li>
                        <li>Best practices for AI implementation</li>
                        <li>Future updates and roadmap discussions</li>
                    </div>
                </div>
            </div>
        </div>
    )
}
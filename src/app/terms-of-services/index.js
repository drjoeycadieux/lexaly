import styles from "./page.module.css";

export default function terms() {
    return (
        <div>
            <div className={styles.terms}>
                <h1>Lexaly AI Terms of Service</h1>
            </div>
            <div className={styles.text}>
                <p>
                    Effective Date: 11 may 2024
                    <strong>Welcome to Lexaly AI!</strong>
                    These Terms of Service ("Terms") govern your use of Lexaly AI's website, products, and services (collectively referred to as the "Service"). By accessing or using the Service, you agree to be bound by these Terms.
                </p>
            </div>
            <div className={styles.text1}>
                <strong>Your Agreement</strong>
                <p>By using the Service, you agree to these Terms, including any additional terms and conditions referenced herein. If you do not agree to these Terms, please do not use the Service.</p>
            </div>
            <div className={styles.text1}>
                <strong>Use of the Service</strong>
                <p>License: Lexaly AI grants you a limited, non-exclusive, non-transferable, revocable license to access and use the Service for your personal or internal business purposes.</p>
            </div>
        </div>
    )
}
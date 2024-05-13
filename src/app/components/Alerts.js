import Link from 'next/link'


export default function Alerts() {
    return (
        <div>
            <div style={{ backgroundColor: 'firebrick', padding: '3px', textAlign: 'center', color: 'white', fontFamily: 'sans-serif', }}>
                <p style={{ textDecoration: 'none' }}>Our Office Are Close Today, We will be back Wednesdays.   <Link style={{ color: 'lightslategray', textDecoration: 'none' }} href="/">Home</Link></p>
            </div>
        </div>
    )
}
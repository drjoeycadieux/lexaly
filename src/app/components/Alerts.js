import Link from 'next/link'


export default function Alerts() {
    return (
        <div>
            <div style={{ backgroundColor: 'firebrick', padding: '3px', textAlign: 'center', color: 'white', fontFamily: 'sans-serif', }}>
                <p style={{ textDecoration: 'none' }}>Our office are close today, We will be back Wednesdays (10am eastern standard time).   <Link style={{ color: 'lightslategray', textDecoration: 'none' }} href="/">Home</Link></p>
            </div>
        </div>
    )
}
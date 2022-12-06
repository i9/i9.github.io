import React from 'react'
import Section from "../components/global/SectionFull"
import "bootstrap/dist/css/bootstrap.min.css"
import "../components/style/main.scss"

export default function banner_notification() {
    return (
        <Section bgColor={"#508CF0"}>
            <div style={{height:"100vh"}}>
                <p className="w text-left font-w-semibold" style={{padding:"160px 16px" }}>Dear Users,<br/>
Due to supplier changes, redemptions for Gift Cards and real prizes will be paused beginning from July 26th until further notice; however, Bonus Cash will still be redeemable. Thank you for your understanding!</p>
            </div>
        </Section>
            
       
    )
}

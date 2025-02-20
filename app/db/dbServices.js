import img0 from "@/public/image/Home/image0.png";
import img1 from "@/public/image/Home/image1.png";
import img2 from "@/public/image/Home/image2.png";
import img3 from "@/public/image/Home/image3.png";
import img4 from "@/public/image/Home/image4.png";
import img5 from "@/public/image/Home/image5.png";
import IOT0 from "@/public/image/Home/Service/IOT/0.png"
import IOT1 from "@/public/image/Home/Service/IOT/1.png"
import Net0 from "@/public/image/Home/Service/Network/0.png"
import Net1 from "@/public/image/Home/Service/Network/1.png"
import Net2 from "@/public/image/Home/Service/Network/2.png"
import Net3 from "@/public/image/Home/Service/Network/3.png"
import Net4 from "@/public/image/Home/Service/Network/4.png"
import Cloud0 from "@/public/image/Home/Service/Cloud/0.png"
import Cloud1 from "@/public/image/Home/Service/Cloud/1.png"


const dbServices = [
    {
        Main: "Application Security",
        pera:"Our experts deliver advanced application security testing, identifying critical vulnerabilities like CVEs and business logic flaws to protect your application and protect your brand's reputation",
        content: [
            {
                "heading": "Web Application Security Testing",
                "img": img0,
                "heading1": "Web Application",
                "heading2": "Security Testing"
            },
            {
                "heading": "Mobile Application Security Testing",
                "img": img2,
                "heading1": "Mobile Application",
                "heading2": "Security Testing"
            },
            {
                "heading": "API Security Testing",
                "img": img1,
                "heading1": "API Security",
                "heading2": "Testing"
            },
            
            {
                "heading": "Thick Client Application Security Testing",
                "img": img3,
                "heading1": "Thick Client Application",
                "heading2": "Security Testing"
            },
            // {
            //     "heading": "Secure Coding Review",
            //     "img": img4,
            //     "heading1": "Secure Coding",
            //     "heading2": "Review"
            // },
            {
                "heading": "POS Application Testing",
                "img": img5,
                "heading1": "POS Application",
                "heading2": "Testing"
            }
        ]
    },
    {
        Main: "Cloud Security",
        pera:"Protect your digital assets by securing servers, networks, data storage systems, and databases in the cloud. We identify vulnerabilities through comprehensive analysis and provide security solutions including configuration reviews, penetration testing, and compliance support.",
        content: [
            
            {
                "heading": "Cloud Security Assessment",
                "img": Cloud0,
                "heading1": "Cloud Security Assessment",
                "heading2": ""
            }
            ,
            {
                "heading": "Penetration testing",
                "img": Cloud1,
                "heading1": "Penetration testing",
                "heading2": ""
            }
            
        ]
    },
    {
        Main: "IoT Security",
        pera:"Our IoT security experts ensure secure hardware and firmware, protecting your entire IoT system to safeguard data privacy and mitigate vulnerabilities for a stable operation.",
        content: [
            {
                "heading": "Hardware Security",
                "img": IOT0,
                "heading1": "Hardware Security",
                "heading2": ""
            },
            {
                "heading": "Firmware Security",
                "img": IOT1,
                "heading1": "Firmware Security",
                "heading2": ""
            }
            // {
            //     "heading": "Firmware Security",
            //     "img": img1,
            //     "heading1": "Firmware Security",
            //     "heading2": ""
            // },            
        ]
    },
    {
        Main: "Network Security",
        pera:"Our network security experts identify critical vulnerabilities in network ports and services, pinpointing potential issues such as business logic flaws, privilege escalation, lateral movement, and Active Directory issues ensuring robust protection across all systems.",
        content: [
            {
                "heading": "Internal Penetration Testing",
                "img": Net0,
                "heading1": "Internal Penetration",
                "heading2": "Testing"
            },
            {
                "heading": "External Penetration Testing",
                "img": Net1,
                "heading1": "External Penetration",
                "heading2": "Testing"
            },
            {
                "heading": "Segmentation Penetration Testing (SpT)",
                "img": Net2,
                "heading1": "Segmentation Penetration",
                "heading2": "Testing"
            },
            {
                "heading": "Server Configuration Review",
                "img": Net3,
                "heading1": "Server Configuration",
                "heading2": "Review"
            },
            {
                "heading": "Firewall Rule Review (FRR)",
                "img": Net4,
                "heading1": "Firewall Rule",
                "heading2": "Review"
            },
        ]
    }
    
]





export default dbServices;
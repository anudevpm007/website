const QAdb = [
  [
    {
      id: 1,
      Q: "What is web application security testing ?",
      A: "Web application security testing involves identifying vulnerabilities in your web applications to prevent potential attacks. This includes testing for weaknesses in your application's code, business logic, third-party components, and known security flaws (CVEs).",
    },
    {
      id: 2,
      Q: "Why is API security important for my business?",
      A: "An unsecured API can expose sensitive data, allow unauthorized access, and jeopardize your system's integrity. Securing your APIs helps protect valuable user data, maintain trust, and ensure a smooth, secure experience for your customers.",
    },
    {
      id: 3,
      Q: "How does Astraliva approach API security differently from traditional methods?",
      A: "We use a comprehensive, multi-layered approach, focusing on securing API business logic, addressing CVE-related vulnerabilities, ensuring secure authentication, and verifying data integrity. We also implement effective rate limiting and test for common exploits like broken authentication and data exposure.",
    },
    {
      id: 4,
      Q: "What is the OWASP API Security Checklist, and why is it important?",
      A: "The OWASP API Security Checklist outlines industry best practices to protect APIs from common security risks such as broken authentication, excessive data exposure, and inadequate rate limiting. We use this checklist to ensure your API follows the most up-to-date security standards.",
    },
    {
      id: 5,
      Q: "How do you test for API vulnerabilities like broken authentication and data exposure?",
      A: "We perform both manual and automated testing to uncover vulnerabilities in your API's implementation. We specifically look for weaknesses in authentication mechanisms, data transmission, and access controls to ensure the security of your API endpoints.",
    },
    {
      id: 6,
      Q: "What are business logic errors in an API, and how do they impact security?",
      A: "Business logic errors occur when the API's logic or flow is flawed, potentially allowing unintended behavior or exploitation. We focus on detecting these errors, such as improper input handling or insecure API endpoints, to ensure your API functions securely.",
    },
    {
      id: 7,
      Q: "What is rate limiting, and how does it protect my API from DoS attacks?",
      A: "Rate limiting is a technique used to control the number of requests a user can make to an API within a set period. We test for rate limiting to ensure that your API can handle high traffic loads and prevent denial-of-service (DoS) attacks that could overwhelm your system.",
    },
    {
      id: 8,
      Q: "How do you ensure data integrity and encryption in API communications?",
      A: "We verify that sensitive data transmitted via your API is encrypted both in transit and at rest, ensuring that data remains secure and intact during interactions between clients and servers, preventing interception or unauthorized modification.",
    },
    {
      id: 9,
      Q: "How does Astraliva handle CVE vulnerabilities related to APIs?",
      A: "We stay updated on CVE identifiers relevant to the APIs in use, ensuring that your APIs are protected from known vulnerabilities. Timely patching and updates are critical in preventing potential exploits from affecting your system.",
    },
    {
      id: 10,
      Q: "Do you provide customized security assessments for different API types (REST, SOAP, GraphQL)?",
      A: "Yes, we develop tailored security checklists for each API type, considering the specific attack vectors and vulnerabilities unique to each architecture, whether it's REST, SOAP, or GraphQL.",
    },
    {
      id: 11,
      Q: "What makes your API security testing services stand out in the market?",
      A: "We focus on a holistic approach to API security, covering everything from threat modeling to dynamic testing. Our use of industry standards like OWASP and our commitment to tailored security measures ensure that your API is well-protected against modern threats.",
    },
  ],
  [
    {
      id: 1,
      Q: "Why is cloud security important?",
      A: "Cloud security protects sensitive data, applications, and infrastructure from cyber threats such as data breaches, unauthorized access, and misconfigurations. It ensures compliance with industry regulations and helps businesses maintain trust and operational stability.",
    },
    {
      id: 2,
      Q: "What are the biggest security risks in the cloud?",
      A: '<div className="ml-2 list-disc font-heading">Common cloud security risks include: <ul className="mt-2 ml-7 list-disc font-body"><li className="mb-2">Misconfigured storage and access controls</li><li className="mb-2">Insecure APIs and interfaces</li><li className="mb-2">Identity and access management (IAM) vulnerabilities</li><li className="mb-2">Lack of encryption for sensitive data</li><li className="mb-2">Compliance and governance issues</li><li className="mb-2">Insider threats and human errors</li></ul></div>',
    },
    {
      id: 3,
      Q: "How does cloud security differ from traditional IT security?",
      A: "Cloud security focuses on securing dynamic, distributed environments where resources scale rapidly, unlike traditional IT security, which protects static on-premise infrastructure. Cloud security also involves shared responsibility, where cloud providers secure the infrastructure, and businesses must secure their applications, data, and access controls.",
    },
    {
      id: 4,
      Q: "What is the shared responsibility model in cloud security?",
      A: "Cloud providers (AWS, Azure, GCP) secure the cloud infrastructure, including hardware, networking, and physical data centers. Customers are responsible for securing their applications, data, user access, and configurations within the cloud environment.",
    },
    {
      id: 5,
      Q: "How can businesses protect their cloud environments?",
      A: '<div className="ml-2 list-disc font-heading">To enhance cloud security, businesses should: <ul className="mt-2 ml-7 list-disc font-body"><li className="mb-2">Implement strong IAM policies with least privilege access</li><li className="mb-2">Encrypt sensitive data in transit and at rest</li><li className="mb-2">Regularly audit cloud configurations and permissions</li><li className="mb-2">Use multi-factor authentication (MFA) for access control</li><li className="mb-2">Monitor and log all activities for threat detection</li><li className="mb-2">Ensure compliance with standards like PCI DSS, ISO 27001, and CIS benchmarks</li></ul></div>',
    },
    {
      id: 6,
      Q: "What is cloud penetration testing, and why is it important?",
      A: "Cloud penetration testing simulates cyberattacks to identify vulnerabilities in cloud infrastructure, applications, and configurations. It helps businesses proactively strengthen their security posture by uncovering weaknesses before attackers can exploit them.",
    },
    {
      id: 7,
      Q: "Which cloud platforms do you test for security vulnerabilities?",
      A: "We conduct security assessments and penetration testing for AWS, Microsoft Azure, and Google Cloud Platform (GCP), ensuring compliance and best security practices across all major cloud providers.",
    },
    {
      id: 8,
      Q: "How often should cloud security assessments be performed?",
      A: "Cloud security assessments should be conducted regularly, at least quarterly or after major infrastructure changes, deployments, or security incidents. Continuous monitoring and periodic penetration testing are also recommended.",
    },
    {
      id: 9,
      Q: "Can cloud security help with regulatory compliance?",
      A: "Yes, implementing strong cloud security measures ensures compliance with industry regulations such as PCI DSS, ISO 27001, GDPR, and CIS benchmarks. It helps businesses meet legal and industry standards while protecting customer data.",
    },
    {
      id: 10,
      Q: "What should I do if my cloud environment is compromised?",
      A: '<div className="ml-2 list-disc font-heading">If a security breach occurs: <ul className="mt-2 ml-7 list-disc font-body"><li className="mb-2">Immediately isolate affected systems to prevent further damage</li><li className="mb-2">Investigate the incident and identify the root cause</li><li className="mb-2">Apply necessary patches and security fixes</li><li className="mb-2">Notify stakeholders and regulatory bodies if required</li><li className="mb-2">Strengthen security controls to prevent future incidents</li></ul></div>',
    },
  ],
  [
    {
      id: 1,
      Q: "What do you mean by AI/IoT research, and how does it apply to security testing?",
      A: "AI/IoT research explores how AI and IoT devices interact, identifying security vulnerabilities in the process. We are training our own AI to spot weaknesses in firmware, with continuous improvements to enhance its detection accuracy. As AI powers robotics and physical systems, we ensure their security against evolving threats.",
    },
    {
      id: 2,
      Q: "How does Astraliva’s security testing differ from traditional methods?",
      A: "Astraliva’s security testing goes beyond traditional methods by using a research-driven approach, custom tooling, and fuzzing to uncover vulnerabilities across the entire IoT ecosystem. We focus on understanding device functionality for more precise, actionable results.",
    },
    {
      id: 3,
      Q: "How long does the device security testing process take?",
      A: "The duration of the security testing process depends on the complexity and scope of the IoT ecosystem being tested. Typically, the process can take anywhere from a few weeks to several months, as we conduct thorough research, penetration testing, and vulnerability assessments across devices, networks, and integrated systems.",
    },
    {
      id: 4,
      Q: "How do I get started?",
      A: "To get started, simply reach out to us through our website or contact us directly. We'll discuss your specific IoT security needs, define the scope of testing, and outline a customized plan to ensure the highest level of protection for your devices and ecosystem.",
    },
    {
      id: 5,
      Q: "Can we get fuzzing as a standalone service for our firmware?",
      A: "Yes, we offer fuzzing as a standalone service for your firmware. Our team will conduct thorough fuzzing to identify vulnerabilities and potential security risks, and provide you with a detailed report along with actionable recommendations for remediation. Simply contact us to discuss your specific needs.",
    },
    {
      id: 6,
      Q: "Do you offer post-assessment support and remediation guidance?",
      A: "Yes, after completing our security testing, we provide detailed reports along with tailored remediation strategies. Our team is available for follow-up consultations to assist with implementing security fixes and improving overall device security.",
    },
    {
      id: 7,
      Q: "Do you offer security training for in-house development teams?",
      A: "Yes, we provide hands-on security training tailored to your development teams. Our training covers secure coding practices, IoT threat modelling, firmware security, and penetration testing techniques to help your team build and maintain secure IoT products.",
    },
  ],
  [
    {
      id: 1,
      Q: "What is Internal Penetration Testing?",
      A: "Internal Penetration Testing simulates real-world attacks within an organization's internal network. The goal is to identify vulnerabilities that could be exploited by insiders or compromised accounts to access sensitive data, systems, or perform lateral attacks. It aims to assess and strengthen internal security defenses by evaluating potential security gaps and weaknesses.",
    },
    {
      id: 2,
      Q: "Why is Internal Penetration Testing important?",
      A: "Internal threats—whether from insider malice, compromised employee accounts, or external malware infiltrating the internal network—pose significant risks. These threats can lead to data breaches, unauthorized access, or lateral attacks that compromise entire systems. Identifying these vulnerabilities helps prevent such incidents and ensures your organization is prepared to handle security breaches effectively.",
    },
    {
      id: 3,
      Q: "What does Astraliva focus on during internal penetration testing?",
      A: "Astraliva conducts an in-depth security assessment that includes port and service enumeration, vulnerability analysis, privilege escalation testing, and lateral movement simulations. We examine Active Directory configurations for potential misconfigurations and assess internal threats that may allow attackers to escalate privileges or move laterally across the network. Our tests ensure comprehensive evaluation of your internal security.",
    },
    {
      id: 4,
      Q: "How does Astraliva’s internal penetration testing process work?",
      A: "Astraliva follows a multi-layered approach, ensuring that every aspect of your network is examined. We begin by identifying open ports and services, then analyze the vulnerabilities associated with each service. Privilege escalation and lateral movement simulations are conducted to evaluate how attackers could spread through your network. Additionally, we review your Active Directory configuration, assess data exfiltration risks, and conduct vulnerability assessments based on CVEs (Common Vulnerabilities and Exposures).",
    },
    {
      id: 5,
      Q: "What security aspects are specifically tested?",
      A: '<div className="mt-3 font-heading">1. Port & Service Enumeration<div className="flex justify-center"><div className="w-[96%] font-body">We identify all open ports and services running across internal systems, which could be exploited.</div></div></div><div className="mt-3 font-heading">2. Vulnerability Analysis Per Service<div className="flex justify-center"><div className="w-[96%] font-body">Each identified service is individually assessed for potential weaknesses, ensuring comprehensive protection.</div></div></div><div className="mt-3 font-heading">3. Privilege Escalation Testing<div className="flex justify-center"><div className="w-[96%] font-body">We simulate attacks aimed at exploiting weak configurations or credentials to gain higher levels of access.</div></div></div><div className="mt-3 font-heading">4. Lateral Movement Simulation<div className="flex justify-center"><div className="w-[96%] font-body">We evaluate how threats can propagate within your internal network after an initial breach.</div></div></div><div className="mt-3 font-heading">5. Active Directory Security Review<div className="flex justify-center"><div className="w-[96%] font-body">We identify weak Group Policy Object (GPO) configurations, excessive privileges, and Kerberoasting vulnerabilities in your Active Directory.</div></div></div><div className="mt-3 font-heading">6. Data Exfiltration Testing<div className="flex justify-center"><div className="w-[96%] font-body">We test your defenses against potential internal data leaks and the effectiveness of your data security measures.</div></div></div><div className="mt-3 font-heading">7. CVE-Based Assessments<div className="flex justify-center"><div className="w-[96%] font-body">We identify and test for vulnerabilities related to known security flaws in your internal services.</div></div></div><div className="mt-3 font-heading">8. Custom Security Controls Assessment<div className="flex justify-center"><div className="w-[96%] font-body">We validate your organization’s specific security policies, ensuring they align with industry standards and real-world threats.</div></div></div>',
    },
    {
      id: 6,
      Q: "How does this testing benefit my organization?",
      A: "Internal penetration testing helps you understand where your security posture is weakest and how an attacker might exploit these gaps. By identifying issues like misconfigurations, excessive permissions, or weak authentication mechanisms, we can help you mitigate risks before they become major problems. This proactive approach helps prevent data breaches, loss of sensitive information, and network compromises.",
    },
    {
      id: 7,
      Q: "What makes Astraliva’s testing methodology unique?",
      A: "Astraliva’s testing process goes beyond traditional methods by applying a comprehensive, layered strategy that incorporates advanced techniques, including detailed enumeration, vulnerability assessments, privilege escalation simulations, and Active Directory security reviews. Our focus on real-world attack simulations ensures that your organization is prepared to handle both external and internal threats effectively.",
    },
    {
      id: 8,
      Q: "How do I get started with internal penetration testing at Astraliva?",
      A: "To begin, simply contact us to schedule an initial consultation. Our team will work with you to define the scope and objectives of the testing, taking into account your organization’s unique needs and infrastructure. Once the assessment is agreed upon, we’ll perform the testing and provide you with a detailed report that outlines vulnerabilities, risks, and actionable remediation recommendations.",
    },
    {
      id: 9,
      Q: "How frequently should internal penetration testing be conducted?",
      A: "It’s recommended to conduct internal penetration testing on an annual basis or after significant changes to your network or systems. However, if your organization experiences frequent changes or has complex infrastructure, more frequent testing may be beneficial to ensure ongoing security.",
    },
    {
      id: 10,
      Q: "Will internal penetration testing disrupt my operations?",
      A: "Our team works closely with you to minimize disruption during testing. We ensure testing is conducted in a controlled manner to avoid interference with business operations. In cases where testing could impact critical systems, we collaborate to schedule testing during off-hours or in a manner that ensures continuity.",
    },
  ],
];

export default QAdb;

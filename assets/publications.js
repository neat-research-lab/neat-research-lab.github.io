document.addEventListener('DOMContentLoaded', function() {
    const publications = [
        {
            category: "Peer-Reviewed Journal and Conference Full Paper (*co-first author)",
            items: [
                {
                    year: "2024",
                    title: "Emotion Recognition Technology for People With Autism: A Systematic Literature Review",
                    authors: "Dmitriy Bogush*, Connor Costello*, Emma Fong, Moushumi Sharmin, and Shameem Ahmed",
                    conference: "IEEE COMPSAC 2024. pp. 851-861. Paper acceptance Rate: 23%",
                    logo: "assets/images/ieee-compsac-logo.png",
                    links: [
                        { type: "link", url: "https://conferences.computer.org/compsacpub24", text: "Link" },
                        { type: "presentation", url: "https://facultyweb.cs.wwu.edu/~ahmeds/Papers/Ahmed-InnerEmotions-IEEECOMPSAC2024.pdf", text: "Presentation" }
                    ]
                },
                {
                    year: "2024",
                    title: "Towards Understanding the Challenges, Needs, and Opportunities Pertaining to Assessment Techniques for Autistic College Students in Computing.",
                    authors: "Moushumi Sharmin, Jordan Archer, Adrian Heffelman, Eli Graves, Yasmine Elglaly, and Shameem Ahmed.",
                    conference: "IEEE COMPSAC 2024. pp. 887-893. Paper acceptance Rate: 23%",
                    logo: "assets/images/ieee-compsac-logo.png",
                    links: [
                        { type: "link", url: "https://conferences.computer.org/compsacpub24", text: "Link" },
                        { type: "presentation", url: "https://facultyweb.cs.wwu.edu/~ahmeds/Papers/Ahmed-Assessment-IEEECOMPSAC2024.pdf", text: "Presentation" }
                    ]
                },
                {
                    year: "2023",
                    title: "Moving Towards an Accessible Approach to Music Therapy for Autistic People: A Systematic Review.",
                    authors: "Samantha Dobesh, Jamey Albert, Shameem Ahmed, and Moushumi Sharmin.",
                    conference: "IEEE COMPSAC 2023. pp. 472-480. Paper acceptance Rate: 27%",
                    logo: "assets/images/ieee-compsac-logo.png",
                    links: [
                        { type: "link", url: "https://ieeexplore.ieee.org/abstract/document/10196942?casa_token=Y1oPh3UG9c4AAAAA:BBXoT7MjXEvVnCD_e3zegq_CdvDQ2ef37zY84S4yPJO-WD3V0_KttcdYEdUltTp6me15y3WzRVzuLg", text: "Link" },
                        { type: "citations", url: "https://scholar.google.com/scholar?hl=en&as_sdt=0%2C48&q=Moving+Towards+an+Accessible+Approach+to+Music+Therapy+for+Autistic+People%3A+A+Systematic+Review&btnG=", text: "Citations: 1" }
                    ]
                },
                {
                    year: "2023",
                    title: "“Monday Feels Like Friday!” - Towards Overcoming Anxiety and Stress of Autistic Young Adults during Times of Isolation.",
                    authors: "Roberto Palma*, Ho Ching Lam*, Ashima Shrivastava, Ethan Karlinsey, Kohl Nguyen, Prab Deol, Moushumi Sharmin and Shameem Ahmed.",
                    conference: "iConference 2023. pp. 286-305. Paper acceptance Rate: 35%",
                    logo: "assets/images/iconference2023.jpg",
                    links: [
                        { type: "link", url: "https://link.springer.com/chapter/10.1007/978-3-031-28032-0_24", text: "Link" },
                        { type: "presentation", url: "https://facultyweb.cs.wwu.edu/~ahmeds/Papers/Ahmed-iConference-2023.pdf", text: "Presentation" }
                    ]
                },
                {
                    year: "2022",
                    title: "Constrained Life in a Multifarious Environment - A Closer Look at the Lives of Autistic College Students.",
                    authors: "Shameem Ahmed*, Md Monsur Hossain*, Cody Pragner, Mitch J Kimball, Ashima Shrivastava, Joseph Gildner, Sean Mcculloch, and Moushumi Sharmin.",
                    conference: "ACM CHI 2022. pp. 1-17. Paper acceptance Rate: 24.7%",
                    logo: "assets/images/acm.png",
                    links: [
                        { type: "link", url: "https://dl.acm.org/doi/abs/10.1145/3491102.3517788", text: "Link" },
                        { type: "presentation", url: "https://facultyweb.cs.wwu.edu/~ahmeds/Papers/Ahmed-ACMCHI2022.pdf", text: "Presentation" },
                        { type: "video", url: "https://www.youtube.com/watch?v=D0aZBdMdhsA", text: "Video" }
                    ]
                },
                {
                    year: "2021",
                    title: "College Life is Hard! - Shedding Light on StressPrediction for Autistic College Students usingData-Driven Analysis.",
                    authors: "Tanzima Z. Islam*, Philip Wu Liang*, Forest Sweeney, Cody Pragner, Jayaraman J. Thiagarajan,Moushumi Sharmin, and Shameem Ahmed.",
                    conference: "IEEE COMPSAC 2021. pp. 428-437. Paper acceptance Rate: 27%",
                    logo: "assets/images/ieee-compsac-logo.png",
                    links: [
                        { type: "link", url: "https://ieeexplore.ieee.org/document/9529720", text: "Link" },
                        { type: "presentation", url: "https://facultyweb.cs.wwu.edu/~ahmeds/Papers/Ahmed-StressModel-IEEECOMPSAC2021.pdf", text: "Presentation" },
                        { type: "citations", url: "https://scholar.google.com/scholar?hl=en&as_sdt=0%2C48&q=College+life+is+hard%21-shedding+light+on+stress+prediction+for+autistic+college+students+using+data-driven+analysis&btnG=", text: "Citations: 5" }
                    ]
                },
                {
                    year: "2021",
                    title: "Understanding the Education of Children with Autism in Bangladesh: Parents’ Perspective.",
                    authors: "Anurata Prabha Hridi*, Anik Saha*, Anik Sinha, Ifti Azad Abeer, Nova Ahmed, and Shameem Ahmed.",
                    conference: "ACM CSCW 2021, Vol 5, Artcile 60. pp. 1-30.",
                    logo: "assets/images/acm.png",
                    links: [
                        { type: "link", url: "https://dl.acm.org/doi/abs/10.1145/3449134", text: "Link" },
                        { type: "presentation", url: "https://facultyweb.cs.wwu.edu/~ahmeds/Papers/Ahmed-ACMCSCW2021.pdf", text: "Presentation" },
                        { type: "citations", url: "https://scholar.google.com/scholar?hl=en&as_sdt=0%2C48&q=Understanding+the+Education+of+Children+with+Autism+in+Bangladesh%3A+Parents%E2%80%99+Perspective.&btnG=", text: "Citations: 5" }
                    ]
                },
                {
                    year: "2020",
                    title: "InterViewR: A Mixed-Reality based Interview Training Simulation Platform for Individuals with Autism.",
                    authors: "Shameem Ahmed*, Wesley Deneke*, Victor Mai, Alexander Veneruso, Matthew Stepita, Anais Dawson, Bradley Hoefel, Garrett Clayes, Nicholas Lam, and Moushumi Sharmin.",
                    conference: "IEEE COMPSAC, 2020. pp. 439-448. Paper acceptance Rate: 24%",
                    logo: "assets/images/ieee-compsac-logo.png",
                    links: [
                        { type: "link", url: "https://ieeexplore.ieee.org/document/9202474", text: "Link" },
                        { type: "citations", url: "https://scholar.google.com/scholar?hl=en&as_sdt=0%2C48&q=nterViewR%3A+A+Mixed-Reality+based+Interview+Training+Simulation+Platform+for+Individuals+with+Autism&btnG=", text: "Citations: 6" }
                    ]
                },
                {
                    year: "2020",
                    title: "Towards Identifying the Optimal Timing for Near Real-Time Smoking Interventions Using Commercial Wearable Devices.",
                    authors: "Theodore Weber, Matthew Ferrin, Forest Sweeney, Shameem Ahmed, and Moushumi Sharmin.",
                    conference: "IEEE COMPSAC, 2020. pp. 429-438. Paper acceptance Rate: 24%",
                    logo: "assets/images/ieee-compsac-logo.png",
                    links: [
                        { type: "link", url: "https://ieeexplore.ieee.org/document/9202679", text: "Link" },
                        { type: "citations", url: "https://scholar.google.com/scholar?hl=en&as_sdt=0%2C48&q=Towards+Identifying+the+Optimal+Timing+for+Near+Real-Time+Smoking+Interventions+Using+Commercial+Wearable+Devices&btnG=", text: "Citations: 1" }
                    ]
                },
                {
                    year: "2020",
                    title: "Understanding the Educational Landscape of Children with Autism in Bangladesh.",
                    authors: "Anurata Prabha Hridi*, Shameem Ahmed*, Ifti Azad Abeer, Anik Saha, Anik Sinha, Mohammad Sorowar Hossain, Nova Ahmed, and Moushumi Sharmin.",
                    conference: "iConference 2020. pp. 441-455. Paper acceptance Rate: 30%",
                    logo: "assets/images/iconference.png",
                    links: [
                        { type: "link", url: "https://link.springer.com/chapter/10.1007/978-3-030-43687-2_35", text: "Link" },
                        { type: "presentation", url: "https://facultyweb.cs.wwu.edu/~ahmeds/Papers/Ahmed-iConference-2020.pdf", text: "Presentation" },
                        { type: "citations", url: "https://scholar.google.com/scholar?hl=en&as_sdt=0%2C48&q=Understanding+the+Educational+Landscape+of+Children+with+Autism+in+Bangladesh.&btnG=", text: "Citations: 5" }
                    ]
                },
                {
                    year: "2019",
                    title: "A Tale of the Social-Side of ASD.",
                    authors: "Shameem Ahmed*, Md. Forhad Hossain*, Kurt Price, Cody Pranger, Md. Monsur Hossain, and Moushumi Sharmin.",
                    conference: "IEEE COMPSAC 2019. pp. 644-652. Paper acceptance Rate: 24%",
                    logo: "assets/images/ieee-compsac-logo.png",
                    links: [
                        { type: "link", url: "https://ieeexplore.ieee.org/abstract/document/8754333", text: "Link" },
                        { type: "citations", url: "https://scholar.google.com/scholar?hl=en&as_sdt=0%2C48&q=+Tale+of+the+Social-Side+of+ASD&btnG=", text: "Citations: 7" }
                    ]
                },
                {
                    year: "2018",
                    title: "Bangladesh Emergency Services: A Mobile Application to Provide 911-Like Service in Bangladesh.",
                    authors: "Md Monsur Hossain, Moushumi Sharmin, and Shameem Ahmed.",
                    conference: "ACM COMPASS 2018. pp. 1-11.",
                    logo: "assets/images/acm.png",
                    links: [
                        { type: "link", url: "https://dl.acm.org/doi/10.1145/3209811.3209870", text: "Link" },
                        { type: "citations", url: "https://scholar.google.com/scholar?hl=en&as_sdt=0%2c48&q=angladesh+emergency+services%3a+a+mobile+application+to+provide+911-like+service+in+bangladesh&btng=", text: "Citations: 10" }
                    ]
                },
                {
                    year: "2018",
                    title: "From Research to Practice: Informing the Design of Autism Support Smart Technology.",
                    authors: "Moushumi Sharmin, Md. Monsur Hossain, Abir Saha, Maitraye Das, Margot Maxwell, and Shameem Ahmed.",
                    conference: "ACM CHI 2018. pp. 1-16. Paper acceptance Rate: 25.7%",
                    logo: "assets/images/acm.png",
                    links: [
                        { type: "link", url: "https://dl.acm.org/citation.cfm?id=3173676", text: "Link" },
                        { type: "video", url: "https://www.youtube.com/watch?v=9UpqDocBCX4", text: "Video" },
                        { type: "citations", url: "https://scholar.google.com/scholar?hl=en&as_sdt=5%2C48&sciodt=0%2C48&cites=8541975053199490287&scipsc=&q=From+research+to+practice%3A+Informing+the+design+of+autism+support+smart+technology&btnG=", text: "Citations: 59" }
                    ]
                },
                {
                    year: "2017",
                    title: "Understanding the Feasibility of a Location-Aware Mobile-Based 911-like Emergency Service in Bangladesh.",
                    authors: "Md Monsur Hossain, Moushumi Sharmin, and Shameem Ahmed.",
                    conference: "IEEE COMPSAC 2017, pp. 861-868. Paper acceptance Rate: 20%",
                    logo: "assets/images/ieee-compsac-logo.png",
                    links: [
                        { type: "link", url: "https://ieeexplore.ieee.org/document/8029709/", text: "Link" },
                        { type: "citations", url: "https://scholar.google.com/scholar?hl=en&as_sdt=0%2C48&q=Understanding+the+Feasibility+of+a+Location-Aware+Mobile-Based+911-like+Emergency+Service+in+Bangladesh&btnG=", text: "Citations: 4" }
                    ]
                },
                {
                    year: "2017",
                    title: "Opportunities and Challenges in Designing Participant-Centric Smoking Cessation System.",
                    authors: "Moushumi Sharmin, Theodore Weber, Hillol Sarker, Nazir Saleheen, Santosh Kumar, Shameem Ahmed, and Mustafa al’ Absi.",
                    conference: "IEEE COMPSAC 2017. pp. 835-844. Paper acceptance Rate: 20%",
                    logo: "assets/images/ieee-compsac-logo.png",
                    links: [
                        { type: "link", url: "https://ieeexplore.ieee.org/document/8029706/", text: "Link" },
                        { type: "citations", url: "https://scholar.google.com/scholar?hl=en&as_sdt=0%2C48&q=Opportunities+and+Challenges+in+Designing+Participant-Centric+Smoking+Cessation+System&btnG=", text: "Citations: 7" }
                    ]
                },
                {
                    year: "2015",
                    title: "Why do mobile phone-based smoking cessation interventions struggle and how can we make them more effective?",
                    authors: "Shameem Ahmed and Moushumi Sharmin.",
                    conference: "iConference 2015.",
                    logo: "assets/images/iconference.png",
                    links: [
                        { type: "link", url: "https://www.ideals.illinois.edu/items/73868", text: "Link" },
                        { type: "citations", url: "https://scholar.google.com/scholar?hl=en&as_sdt=0%2C48&q=Why+do+mobile+phone-based+smoking+cessation+interventions+struggle+and+how+can+we+make+them+more+effective%3F+&btnG=", text: "Citations: 2" }
                    ]
                },
                {
                    year: "2013",
                    title: "Research note: Measuring the globalization of knowledge: The case of community informatics.",
                    authors: "Kate Williams, Noah Lenstra, Shameem Ahmed, Qiyuan Liu.",
                    conference: "First Monday, Vol 18(8), 2013.",
                    logo: "https://firstmonday.org/images/firstmonday-logo.png",
                    links: [
                        { type: "link", url: "https://firstmonday.org/ojs/index.php/fm/article/view/4347", text: "Link" },
                        { type: "citations", url: "https://scholar.google.com/scholar?hl=en&as_sdt=5%2C48&sciodt=0%2C48&cites=11583360783880602793&scipsc=&q=Research+note%3A+Measuring+the+globalization+of+knowledge%3A+The+case+of+community+informatics&btnG=", text: "Citations: 9" }
                    ]
                },
                {
                    year: "2011",
                    title: "Topology-Aware Optimal Task Allocation for Mission Critical Environment - A Decentralized Approach.",
                    authors: "Shameem Ahmed, Klara Nahrstedt, and Guijun Wang.",
                    conference: "IEEE MILCOM 2011. pp. 884-889.",
                    logo: "assets/images/ieee-milcom.png",
                    links: [
                        { type: "link", url: "https://ieeexplore.ieee.org/document/6127790?casa_token=cxByK-xVjaAAAAAA:iTHqSy08jD4y1a7sD5fgYm_A8o_C5GXj6paPX6m8RCM40Kwzz1JWBcekqwYQBhbW6vGodjoR_ON4Q", text: "Link" },
                        { type: "citations", url: "https://scholar.google.com/scholar?hl=en&as_sdt=0%2C48&q=Topology-Aware+Optimal+Task+Allocation+for+Mission+Critical+Environment+-+A+Decentralized+Approach&btnG=", text: "Citations: 6" }
                    ]
                },
                {
                    year: "2010",
                    title: "Zero-knowledge Real-time Indoor Tracking via Outdoor Wireless Directional Antennas.",
                    authors: "Thadpong Pongthawornkamol, Shameem Ahmed, Akira Uchiyama, Klara Nahrstedt.",
                    conference: "IEEE PerCom 2010. pp. 253-261. Paper acceptance Rate: 12%",
                    logo: "assets/images/IEEE_logo.png",
                    links: [
                        { type: "citations", url: "http://goo.gl/DF9p5", text: "Citations: 12" }
                    ]
                },
                {
                    year: "2009",
                    title: "Topology-Aware Optimal Task Allocation for Publish/Subscribe Based Mission Critical Environment.",
                    authors: "Shameem Ahmed, Thadpong Pongthawornkamol, Klara Nahrstedt, Matthew Caesar, and Guijun Wang.",
                    conference: "IEEE MILCOM 2009. pp. 1-7.",
                    logo: "assets/images/ieee-milcom.png",
                    links: [
                        { type: "link", url: "http://goo.gl/JagBN", text: "Link" },
                        { type: "citations", url: "https://scholar.google.com/scholar?hl=en&as_sdt=0%2C48&q=opology-Aware+Optimal+Task+Allocation+for+Publish%2FSubscribe+Based+Mission+Critical+Environment&btnG=", text: "Citations: 6" }
                    ]
                },
                {
                    year: "2008",
                    title: "Ubi-App: A Ubiquitous Application using Ubicomp Assistant (UA) Service of MARKS for Universal Access from Handheld Devices.",
                    authors: "Shameem Ahmed, Moushumi Sharmin, and Sheikh I. Ahamed.",
                    conference: "Special Issue of Springer International Journal Universal Access in the Information Society (UAIS). Vol 7(4), 2008. pp. 273-283.",
                    logo: "https://media.springernature.com/full/springer-static/image/logo/logo-springer-blue-200.png",
                    links: [
                        { type: "link", url: "https://link.springer.com/article/10.1007/s10209-008-0117-0", text: "Link" },
                        { type: "citations", url: "http://scholar.google.com/scholar?hl=en&q=Ubi-App%3A+A+Ubiquitous+Application+using+Ubicomp+Assistant+%28UA%29+Service+of+MARKS+for+Universal+Access+from+Handheld+Devices&btnG=&as_sdt=1%2C43&as_sdtp=", text: "Citations: 4" }
                    ]
                },
                {
                    year: "2007",
                    title: "Design and Implementation of MARKS (Middleware Adaptability for Resource Discovery, Knowledge Usability and Self-healing) Middleware for Pervasive Computing Environments.",
                    authors: "Moushumi Sharmin, Shameem Ahmed, and Sheikh I. Ahamed.",
                    conference: "Ubiquitous Computing and Communication Journal. Vol 2(3), 2007.",
                    logo: "",
                    links: [
                        { type: "link", url: "http://ubicc.org/journal_detail.aspx?id=4", text: "Link" },
                        { type: "citations", url: "http://scholar.google.com/scholar?q=+Design+and+Implementation+of+MARKS+%28Middleware+Adaptability+for+Resource+Discovery%2C+Knowledge+Usability+and+Self-healing%29+Middleware+for+Pervasive+Computing&btnG=&hl=en&as_sdt=0%2C43", text: "Citations: 3" }
                    ]
                },
                {
                    year: "2007",
                    title: "ETS (Efficient, Transparent, and Secured) Self-healing Service for Pervasive Computing Applications.",
                    authors: "Shameem Ahmed, Moushumi Sharmin, and Sheikh I. Ahamed.",
                    conference: "International Journal of Network Security. Vol 4(3), May 2007. pp. 271-281.",
                    logo: "",
                    links: [
                        { type: "link", url: "http://goo.gl/ezrmy", text: "Link" },
                        { type: "citations", url: "http://goo.gl/v951f", text: "Citations: 37" }
                    ]
                },
                {
                    year: "2006",
                    title: "Ubicomp Assistant: an Omnipresent Customizable Service using MARKS.",
                    authors: "Moushumi Sharmin, Shameem Ahmed, and Sheikh I. Ahamed.",
                    conference: "ACM SAC 2006. pp. 1013-1017.",
                    logo: "assets/images/acm.png",
                    links: [
                        { type: "link", url: "https://dl.acm.org/doi/abs/10.1145/1141277.1141518?casa_token=vh_o5fYtZVwAAAAA:M3bmZYPdcCpMQk9FDaDcKrvYYVeDLzKTMbAia3uc0x26eGTJ5TEsEXHkuIkYKXTL2bGZJMDZjBar7g", text: "Link" },
                        { type: "citations", url: "http://scholar.google.com/scholar?q=Ubicomp+Assistant%3A+an+Omnipresent+Customizable+Service+using+MARKS&btnG=&hl=en&as_sdt=0%2C43", text: "Citations: 6" }
                    ]
                },
                {
                    year: "2006",
                    title: "SSRD+: A Privacy-aware Trust and Security Model for Resource Discovery in Pervasive Computing Environment.",
                    authors: "Moushumi Sharmin, Shameem Ahmed, Sheikh I. Ahamed, and Haifeng Li.",
                    conference: "IEEE COMPSAC 2006. pp. 67-70.",
                    logo: "assets/images/ieee-compsac-logo.png",
                    links: [
                        { type: "link", url: "http://ieeexplore.ieee.org/xpls/abs_all.jsp?arnumber=4020143&tag=1", text: "Link" },
                        { type: "citations", url: "http://goo.gl/dMwnR", text: "Citations: 16" }
                    ]
                },
                {
                    year: "2006",
                    title: "MARKS (Middleware Adaptability for Resource Discovery, Knowledge Usability and Self-healing) for Mobile Devices of Pervasive Computing Environments.",
                    authors: "Moushumi Sharmin, Shameem Ahmed, and Sheikh I. Ahamed.",
                    conference: "ITNG 2006. pp. 306-313.",
                    logo: "assets/images/IEEE_logo.png",
                    links: [
                        { type: "link", url: "http://www.computer.org/csdl/proceedings/itng/2006/2497/00/24970306-abs.html", text: "Link" },
                        { type: "citations", url: "http://goo.gl/e7H7c", text: "Citations: 73" }
                    ]
                },
                {
                    year: "2006",
                    title: "An Adaptive Lightweight Trust Reliant Secure Resource Discovery for Pervasive Computing Environments.",
                    authors: "Moushumi Sharmin, Shameem Ahmed, and Sheikh I. Ahamed.",
                    conference: "IEEE PerCom 2006, Italy, pp. 258-263.",
                    logo: "assets/images/IEEE_logo.png",
                    links: [
                        { type: "link", url: "http://dl.acm.org/citation.cfm?id=1128348", text: "Link" },
                        { type: "citations", url: "http://goo.gl/hysIB", text: "Citations: 62" }
                    ]
                },
                {
                    year: "2006",
                    title: "Design and Implementation of A Virtual Assistant for Healthcare Professionals Using Pervasive Computing Technologies.",
                    authors: "Sheikh I. Ahamed, Moushumi Sharmin, Shameem Ahmed, Munirul Haque, and Ahmed J Khan.",
                    conference: "Journal Springer e&i, vol 123(4), Apr 2006, pp. 112-120.",
                    logo: "https://media.springernature.com/full/springer-static/image/logo/logo-springer-blue-200.png",
                    links: [
                        { type: "link", url: "http://goo.gl/zd11o", text: "Link" },
                        { type: "citations", url: "http://scholar.google.com/scholar?q=Design+and+Implementation+of+A+Virtual+Assistant+for+Healthcare+Professionals+Using+Pervasive+Computing+Technologies&btnG=&hl=en&as_sdt=0%2C14", text: "Citations: 9" }
                    ]
                },
                {
                    year: "2005",
                    title: "An Assessment Tool for out of Class Learning using Pervasive Computing Technologies.",
                    authors: "Sheikh I. Ahamed, Moushumi Sharmin, Shameem Ahmed, Michael J. Havice, and Suresh Anamanamuri.",
                    conference: "Information Journal. Vol 8(5), 2005. pp. 751-768.",
                    logo: "",
                    links: [
                        { type: "link", url: "http://www.information-iii.org/abs_e2.html#No5-2005", text: "Link" },
                        { type: "citations", url: "http://goo.gl/ZUkSj", text: "Citations: 9" }
                    ]
                },
                {
                    year: "2005",
                    title: "A Smart Meeting Room with Pervasive Computing Technologies.",
                    authors: "Shameem Ahmed, Moushumi Sharmin, and Sheikh I. Ahamed.",
                    conference: "SNDP 2005. pp. 366-371.",
                    logo: "assets/images/IEEE_logo.png",
                    links: [
                        { type: "link", url: "https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=1434915&casa_token=jtK5KA81EVkAAAAA:lENpCU7KHjB6853z8h6GOkEGhRnIqT90U6eLBjsNPeQqpc9QKEQbm8J_gHRfuqJyQJvLc-4W7o3cbA&tag=1", text: "Link" },
                        { type: "citations", url: "http://goo.gl/Lb3ei", text: "Citations: 27" }
                    ]
                },
                {
                    year: "2005",
                    title: "SAFE-RD (Secure, Adaptive, Fault Tolerant, and Efficient Resource Discovery) in Pervasive Computing Environments.",
                    authors: "Moushumi Sharmin, Shameem Ahmed, and Sheikh I. Ahamed.",
                    conference: "ITCC 2005. pp. 271-276.",
                    logo: "assets/images/IEEE_logo.png",
                    links: [
                        { type: "link", url: "https://ieeexplore.ieee.org/abstract/document/1425156", text: "Link" },
                        { type: "citations", url: "http://goo.gl/8FNX5", text: "Citations: 54" }
                    ]
                }
            ]
        },
        {
            category: "Peer-Reviewed Short Paper, Workshop Paper, Fast Abstract, and Poster Publications",
            items: [
                {
                    year: "2022",
                    title: "Lessons Learned from the Design and Evaluation of InterViewR: A Mixed-Reality Based Interview Training Simulation Platform for Individuals with Autism.",
                    authors: "(Workshop) Anais Dawson, Shameem Ahmed, Moushumi Sharmin, and Wesley Deneke.",
                    conference: "ESAS at IEEE COMPSAC 2022. pp. 1324-1330.",
                    links: [
                        { type: "link", url: "#", text: "Link" }
                    ]
                },
                {
                    year: "2022",
                    title: "To Aid Emotion Expression for Non-Verbal Autistic Individuals, In an App, Less (Features) is More (Better).",
                    authors: "(Poster) Jamey Albert, Daniel Koronthaly, Samantha Dobesh, Zafir Nasim, Ilaana Khan, Shameem Ahmed, and Moushumi Sharmin.",
                    conference: "ACM UbiComp 2022. pp. 4-6.",
                    links: [
                        { type: "link", url: "#", text: "Link" },
                        { type: "citations", url: "#", text: "Citations: 2" }
                    ]
                },
                {
                    year: "2021",
                    title: "Visualization as a Tool to Understand the Experience of College Students with Autism.",
                    authors: "(Short paper) Sean McCulloch, Joe Gildner, Bradley Hoefel, Gabrielle Cervantes, Shameem Ahmed, and Moushumi Sharmin.",
                    conference: "IEEE COMPSAC 2021. pp. 438-445.",
                    links: [
                        { type: "link", url: "#", text: "Link" },
                        { type: "citations", url: "#", text: "Citations: 1" }
                    ]
                },
                {
                    year: "2019",
                    title: "Strength-Based ICT Design Supporting Individuals with Autism.",
                    authors: "(Poster) Jessica Navedo, Amelia Espiritu-Santo, and Shameem Ahmed.",
                    conference: "ASSETS 2019. pp. 560-562.",
                    links: [
                        { type: "link", url: "#", text: "Link" },
                        { type: "citations", url: "#", text: "Citations: 10" }
                    ]
                },
                {
                    year: "2019",
                    title: "Towards Understanding the Life of Neurodiverse College Students Through Visualization.",
                    authors: "(Poster) Sean McCulloch, Bradley Hoefel, Joe Gildner, Shameem Ahmed, Moushumi Sharmin.",
                    conference: "IEEE VIS 2019.",
                    links: [
                        { type: "link", url: "#", text: "Link" },
                        { type: "video", url: "#", text: "Video Preview" }
                    ]
                },
                {
                    year: "2014",
                    title: "Internet and Parents with Children with Special Needs: A Meta-Analysis of PubMed Articles.",
                    authors: "(Workshop) Shameem Ahmed.",
                    conference: "ACM CCCIC CSCW 2014.",
                    links: [
                        { type: "link", url: "#", text: "Link" },
                        { type: "citations", url: "#", text: "Citations: 4" }
                    ]
                },
                {
                    year: "2013",
                    title: "Identifying Claims in Social Science Literature.",
                    authors: "(Poster) Shameem Ahmed, Catherine Blake, Kate Williams, Noah Lenstra, and Qiyuan Liu.",
                    conference: "pp. 942-946. iConference 2013 .",
                    links: [
                        { type: "link", url: "#", text: "Link" },
                        { type: "award", url: "#", text: "Honorable Mention: Best Poster Award" },
                        { type: "news", url: "#", text: "UIUC iSchool News" }
                    ]
                },
                {
                    year: "2012",
                    title: "Information Network Analysis to Understand the Evolution of Online Social Networking Sites in the Context of India, Pakistan, and Bangladesh.",
                    authors: "(Workshop) Shameem Ahmed and Jana Diesner.",
                    conference: "Words and Networks Workshop (WON) at ACM Web Science Conference 2012. pp. 1-6.",
                    links: [
                        { type: "link", url: "#", text: "Link" },
                        { type: "citations", url: "#", text: "Citations: 11" }
                    ]
                },
                {
                    year: "2012",
                    title: "What is Community Informatics? A Global and Empirical Answer.",
                    authors: "(Poster) Kate Williams, Shameem Ahmed, Noah Lenstra, and Qiyuan Liu.",
                    conference: "pp. 598-600. iConference 2012 .",
                    links: [
                        { type: "link", url: "#", text: "Link" },
                        { type: "citations", url: "#", text: "Citations: 2" }
                    ]
                },
                {
                    year: "2009",
                    title: "A Market Anywhere: Establishing an SMS-based Virtual Market in Developing Regions.",
                    authors: "(Workshop) Ryo Kawaguchi, Shameem Ahmed, Aukrit Unahalekhaka, Ang Pan and Roy Campbell.",
                    conference: "Globicomp at ACM Ubicomp 2009 .",
                    links: [
                        { type: "link", url: "#", text: "Link" }
                    ]
                },
                {
                    year: "2008",
                    title: "A Risk-aware Trust Based Secure Resource Discovery (RTSRD) Model for Pervasive Computing.",
                    authors: "(Workshop) Moushumi Sharmin, Sheikh I. Ahamed, and Shameem Ahmed.",
                    conference: "WPS at IEEE PerCom 2008 . pp. 590-595.",
                    links: [
                        { type: "link", url: "#", text: "Link" },
                        { type: "citations", url: "#", text: "Citations: 12" }
                    ]
                },
                {
                    year: "2007",
                    title: "Self-healing for Autonomic Pervasive Computing.",
                    authors: "(Poster) Shameem Ahmed, Sheikh I. Ahamed, Moushumi Sharmin, and Munirul Haque.",
                    conference: "ACM SAC 2007. pp. 110-111.",
                    links: [
                        { type: "link", url: "#", text: "Link" },
                        { type: "citations", url: "#", text: "Citations: 32" }
                    ]
                },
                {
                    year: "2006",
                    title: "Healthcare Aide: Towards a Virtual Assistant for Doctors, Patients, Nurses and Resident Doctors Using Pervasive Middleware.",
                    authors: "(Workshop) Moushumi Sharmin, Shameem Ahmed, Sheikh I. Ahamed, Munirul Haque, and Ahmed J Khan.",
                    conference: "PERCOMW 2006 .",
                    links: [
                        { type: "link", url: "#", text: "Link" },
                        { type: "citations", url: "#", text: "Citations: 42" }
                    ]
                },
                {
                    year: "2005",
                    title: "PerAd-Service: A Middleware Service for Pervasive Advertisement in M-Business.",
                    authors: "(Fast Abstract) Shameem Ahmed, Moushumi Sharmin, and Sheikh I. Ahamed.",
                    conference: "IEEE COMPSAC 2005 . pp. 17-18.",
                    links: [
                        { type: "link", url: "#", text: "Link" },
                        { type: "citations", url: "#", text: "Citations: 9" }
                    ]
                },
                {
                    year: "2005",
                    title: "Knowledge Usability and Its Characteristics for Pervasive Computing.",
                    authors: "Shameem Ahmed, Moushumi Sharmin, and Sheikh I. Ahamed.",
                    conference: "PSC 2005, in conjunction with the 2005 Int. Multi-conference in Computer Science and Engineering. pp. 206-209.",
                    links: [
                        { type: "link", url: "#", text: "Link" },
                        { type: "citations", url: "#", text: "Citations: 21" }
                    ]
                }
            ]
        },
        {
            category: "Book Chapter",
            items: [
                {
                    year: "2009",
                    title: "Self-healing for Autonomic Pervasive Computing.",
                    authors: "Shameem Ahmed, Sheikh I. Ahamed, Moushumi Sharmin, and Chowdhury S. Hasan.",
                    conference: "Autonomic Communication, Springer US, ISBN 978-0-387-09752-7, 2009, pp. 285-307.",
                    links: [
                        { type: "link", url: "http://link.springer.com/chapter/10.1007/978-0-387-09753-4_11", text: "Link" },
                        { type: "citations", url: "https://citations.springernature.com/item?doi=10.1007/978-0-387-09753-4_11", text: "Citations: 4" }
                    ]
                }
            ]
        }
    ];

    const publicationsContainer = document.getElementById('publications');
    if (publicationsContainer) {
        publicationsContainer.innerHTML = ''; // Clear existing content
    }

    // Process data for charts
    const papersPerYear = {};
    const papersPerVenue = {};

    publications.forEach(category => {
        category.items.forEach(item => {
            // Year data
            papersPerYear[item.year] = (papersPerYear[item.year] || 0) + 1;

            // Venue data
            let venue = 'Other';
            if (item.conference.includes('IEEE')) {
                venue = 'IEEE';
            } else if (item.conference.includes('ACM')) {
                venue = 'ACM';
            } else if (item.conference.includes('iConference')) {
                venue = 'iConference';
            } else if (item.conference.includes('Springer')) {
                venue = 'Springer';
            }
            papersPerVenue[venue] = (papersPerVenue[venue] || 0) + 1;
        });
    });

    // Bar Chart
    const barCtx = document.getElementById('barChart');
    if (barCtx) {
        new Chart(barCtx, {
            type: 'bar',
            data: {
                labels: Object.keys(papersPerYear).sort(),
                datasets: [{
                    label: 'Number of Papers',
                    data: Object.values(papersPerYear),
                    backgroundColor: 'rgba(138, 43, 226, 0.8)',
                    borderColor: 'rgba(138, 43, 226, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'top',
                    },
                    title: {
                        display: false
                    }
                }
            }
        });
    }

    // Pie Chart
    const pieCtx = document.getElementById('pieChart');
    if (pieCtx) {
        new Chart(pieCtx, {
            type: 'pie',
            data: {
                labels: Object.keys(papersPerVenue),
                datasets: [{
                    label: 'Papers by Venue',
                    data: Object.values(papersPerVenue),
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.8)',
                        'rgba(54, 162, 235, 0.8)',
                        'rgba(255, 206, 86, 0.8)',
                        'rgba(75, 192, 192, 0.8)',
                        'rgba(153, 102, 255, 0.8)',
                        'rgba(255, 159, 64, 0.8)'
                    ],
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'top',
                        labels: {
                            boxWidth: 10,
                        }
                    },
                    title: {
                        display: false
                    }
                }
            }
        });
    }

    publications.forEach(category => {
        const categoryDiv = document.createElement('div');
        categoryDiv.className = 'publication-category';

        const categoryTitle = document.createElement('h3');
        categoryTitle.textContent = category.category;
        categoryDiv.appendChild(categoryTitle);

        const timelineDiv = document.createElement('div');
        timelineDiv.className = 'timeline';

        category.items.forEach(item => {
            const timelineItem = document.createElement('div');
            timelineItem.className = 'timeline-item';

            const iconDiv = document.createElement('div');
            iconDiv.className = 'timeline-icon';
            const icon = document.createElement('i');
            icon.className = 'fas fa-file-alt'; // Default icon
            if (item.authors.includes('(Poster)')) {
                icon.className = 'fas fa-image';
            } else if (category.category === 'Book Chapter') {
                icon.className = 'fas fa-book';
            } else if (item.authors.includes('(Workshop)')) {
                icon.className = 'fas fa-file';
            }
            iconDiv.appendChild(icon);
            timelineItem.appendChild(iconDiv);

            const contentDiv = document.createElement('div');
            contentDiv.className = 'timeline-content';

            const mainContentDiv = document.createElement('div');
            mainContentDiv.className = 'timeline-main-content';

            const p = document.createElement('p');
            p.innerHTML = `<strong>${item.title}</strong><br>${item.authors}<br>${item.conference}`;
            mainContentDiv.appendChild(p);

            const linksDiv = document.createElement('div');
            linksDiv.className = 'publication-links';

            item.links.forEach(link => {
                const a = document.createElement('a');
                a.href = link.url;
                a.className = 'icon-link';
                if (link.type === 'citations' || link.type === 'award' || link.type === 'news') {
                    a.className = 'citation-count';
                }
                a.target = '_blank';
                a.rel = 'noopener noreferrer';

                const linkIcon = document.createElement('i');
                switch (link.type) {
                    case 'link':
                        linkIcon.className = 'fas fa-link';
                        break;
                    case 'presentation':
                        linkIcon.className = 'fas fa-file-powerpoint';
                        break;
                    case 'video':
                        linkIcon.className = 'fas fa-video';
                        break;
                    case 'citations':
                        linkIcon.className = 'fas fa-quote-left';
                        break;
                    case 'award':
                        linkIcon.className = 'fas fa-award';
                        break;
                    case 'news':
                        linkIcon.className = 'fas fa-newspaper';
                        break;
                }
                a.appendChild(linkIcon);
                a.innerHTML += ` ${link.text}`;
                linksDiv.appendChild(a);
            });

            mainContentDiv.appendChild(linksDiv);
            contentDiv.appendChild(mainContentDiv);

            if (item.logo) {
                const logoDiv = document.createElement('div');
                logoDiv.className = 'publication-logo';
                const logoImg = document.createElement('img');
                logoImg.src = item.logo;
                logoDiv.appendChild(logoImg);
                contentDiv.appendChild(logoDiv);
            }

            timelineItem.appendChild(contentDiv);
            timelineDiv.appendChild(timelineItem);
        });

        categoryDiv.appendChild(timelineDiv);
        publicationsContainer.appendChild(categoryDiv);
    });
});

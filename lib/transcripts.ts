export interface TranscriptMeta {
  venue: string;
  panel: string;
  date: string;
  college: string;
  year: number;
  mode?: string;
  duration?: string;
}

export interface Transcript {
  id: string;
  title: string;
  content: string;
  meta: TranscriptMeta;
  author?: string;
  createdAt: string;
}

export type TranscriptTag = keyof TranscriptMeta;

export const TRANSCRIPT_TAGS: { key: TranscriptTag; label: string }[] = [
  { key: "college", label: "College" },
  { key: "year", label: "Year" },
  { key: "venue", label: "Venue" },
  { key: "panel", label: "Panel" },
  { key: "date", label: "Date" },
  { key: "mode", label: "Mode" },
  { key: "duration", label: "Duration" },
];

export const transcriptsData: Transcript[] = [
  {
    id: "iim-indore-interview-1-2023",
    title: "IIM Indore Interview 1 - Economics & Maths Focus",
    content: `Panel 1
● Started with introduction
● What is a Rights issue?
● What is an IPO?
● Stock and Flow variables with examples
● What is a limited company?
● Which kind of business does not have limited liability?
● Integrate x cosec x
● Differentiate x log x
● Graph of x^2 + y^2 = 1

Panel 2
● Why is it called Navi Mumbai?
● Suburbs of Navi Mumbai?
● Oldest suburb in Navi Mumbai?
● GDP of India?
● Maharashtra's contribution to GDP?
● Sectors that contribute to GDP
● When did WW2 end?
● What is a recession?
● Few questions on the Great Depression.`,
    meta: { college: "IIM Indore", year: 2023, venue: "IIM Indore Campus", panel: "Panel 1 & 2", date: "2023-04-01", mode: "In-person", duration: "25 minutes" },
    author: "Anonymous",
    createdAt: "2023-04-10",
  },
  {
    id: "iim-indore-interview-2-2023",
    title: "IIM Indore Interview 2 - GDP & Money Supply",
    content: `● They asked which subjects I had in grade 12
● Factors affecting the money supply
● Demand supply graph
● Law of demand and cross-questioning on that
● Methods to Calculate GDP
● Which method is used in India
● Should the government give money directly to people or invest it? Cross-questioning on this as well.
● Order in which financial statements are prepared. Cross-questioning here also.
● In maths, he asked for my favourite topic.
● I said matrices, so he asked about how to find the inverse of a matrix and real-life applications.
● Then, over to the next interviewer.
● He asked questions about Delhi, where I am from.
● UNESCO World Heritage Sites in Delhi
● Which emperor built Red Fort and Qutub Minar
● Significance of Delhi NCR
● Social Issues Affecting Delhi
● Significance of India Gate
● The soldiers whose names are inscribed on India Gate fought in which war
● CM and LG of Delhi
● Why does Delhi have an LG
● That was all for my interview
● One panellist was very discouraging, while the other was kind and smiling throughout the interview.`,
    meta: { college: "IIM Indore", year: 2023, venue: "IIM Indore Campus", panel: "Panel 1 & 2", date: "2023-04-02", mode: "In-person", duration: "20 minutes" },
    author: "Anonymous",
    createdAt: "2023-04-11",
  },
  {
    id: "iim-indore-interview-3-2023",
    title: "IIM Indore Interview 3 - Probability & Graphs",
    content: `1st Panelist
● I don't want an introduction. I know most of it already, so tell me an interesting story from your life
● Asked the spelling of connoisseur as I had C1 prof in English
● Name 3 Nobel Laureates of India
● Name the neighbouring states of Madhya Pradesh

2nd Panelist
● Favourite topic (got indecisive on purpose between probability and graphs)
● Asked that 20 right 5 wrong wala question
● Asked me to name a 1d,2d and 3d object
● Asked to draw a polygon (drew a triangle)
● I tried to confuse by saying that I asked for a polygon, not a triangle
● Asked the sum of exterior angles

1st Panelist
Any questions? (I asked if the 20 questions probably answer was correct and also about inquisitive-i as I had a national level achievement in quizzing)`,
    meta: { college: "IIM Indore", year: 2023, venue: "IIM Indore Campus", panel: "Panel 1 & 2", date: "2023-04-03", mode: "In-person", duration: "20 minutes" },
    author: "Anonymous",
    createdAt: "2023-04-12",
  },
  {
    id: "iim-indore-interview-4-2023",
    title: "IIM Indore Interview 4 - Financial Markets & Economics",
    content: `● Brief Intro
● What is a financial market
● Can the financial security be sold in a Mandi
● What is the financial system
● What are Sensex and T-bill
● T bill is issued in which multiples and their duration
● What we have for 1-2 day duration
● Explain the difference between the financial market and the financial system to a child.
● Diff. B/w Ncr and nct
● Is Delhi a UT or state
● Gurugram comes in NCR or NCT
● Did you have maths? (I said yes)
● What is a domain
● What is co-domain
● What is Range
● What is the equation of a Circle
● What are your favourite subjects? (I told eco and BST)
● What topics have you studied in Business Studies
● Maslows need hierarchy theory and where you stand right now in it
● States you will cover when travelling from Delhi to Odisha
● Female leaders of Adjoining countries
● PM Of Pakistan`,
    meta: { college: "IIM Indore", year: 2023, venue: "IIM Indore Campus", panel: "Panel 1 & 2", date: "2023-04-04", mode: "In-person", duration: "22 minutes" },
    author: "Anonymous",
    createdAt: "2023-04-13",
  },
  {
    id: "iim-indore-interview-5-2023",
    title: "IIM Indore Interview 5 - History & Calculus",
    content: `1st Panelist
● Introduce
● 2nd Battle of Panipat between
● Two series questions
● Manchester of South India
● Constituent states of Madras presidency
● Telengana formation yr
● Andra formation yr

2nd panelist
● Sinx, Modsix graph
● Is it continuous, differentiable
● Where pi/2 on Sinx graph
● Derivative of Sinx there, 2nd derivative
● Extempore: India is the land of opportunities`,
    meta: { college: "IIM Indore", year: 2023, venue: "IIM Indore Campus", panel: "Panel 1 & 2", date: "2023-04-05", mode: "In-person", duration: "18 minutes" },
    author: "Anonymous",
    createdAt: "2023-04-14",
  },
  {
    id: "iim-indore-interview-6-2023",
    title: "IIM Indore Interview 6 - Mumbai & Macroeconomics",
    content: `● No verification
● Asked about which all subjects I had in class 12th
● Questions on what is GDP
● Is import and export included in the GDP
● Why is it not included
● Questions on perfectly elastic demand
● 2 Questions on accounts
● Question on Venn diagram
● Question on 4x=y plot on a graph
● Question on the essence of Mumbai and the history of Mumbai
● How was Mumbai created
● Why is Mumbai known as the financial hub of India
● Maharashtra is on which ranks as the highest contributor to the nation's GDP
● Facts about football (I said it was my hobby)
● Ended the interview after this`,
    meta: { college: "IIM Indore", year: 2023, venue: "IIM Indore Campus", panel: "Panel 1 & 2", date: "2023-04-06", mode: "In-person", duration: "20 minutes" },
    author: "Anonymous",
    createdAt: "2023-04-15",
  },
  {
    id: "iim-indore-interview-7-2023",
    title: "IIM Indore Interview 7 - Ratios & Current Affairs",
    content: `● Intro
● You mentioned economic case studies. Tell me about them
● More questions about it
● Profit-to-earning ratio
● Operating ratio
● More such ratios
● Are you comfortable with maths
● Asked to place graphs y=x2 +4
● Y=4x
● Repo rate reserve repo rate
● Call money
● Other panelist
● The connection between these 3
● Who forms fiscal policies
● Where are you from
● Largest river in the state
● Do you follow current affairs
● Sri Lanka
● Romakwlqpq immigrants crisis
● Hobbies and interests
● Who won the recent badminton cup
● Name of the player
● Extempore: sports are not only good for physical health but for mental health, too`,
    meta: { college: "IIM Indore", year: 2023, venue: "IIM Indore Campus", panel: "Panel 1 & 2", date: "2023-04-07", mode: "In-person", duration: "20 minutes" },
    author: "Anonymous",
    createdAt: "2023-04-16",
  },
  {
    id: "iim-indore-interview-8-2023",
    title: "IIM Indore Interview 8 - Inflation & Graphs",
    content: `● Introduction
● Verification
● Which subject you didn't like and which were your favourite
● Indices of inflation
● How to calculate WPI
● Current inflation rate in India, who calculates and is it WPI or CPI
● Graph of x^2-x
● Explain Equilibrium with a graph
● Explain log32 to the base 2
● What is BPL? It's an indicator
● Is BPL different from EWS
● Can another reservation category also be included in EWS
● % of women in the labour force
● Current Lok sabha speaker
● Seats in Lok Sabha
● Current international sports events in the news and elaborate about it
● 5 major football leagues (because it is mentioned as a hobby)
● When was the last World Cup, and who won it`,
    meta: { college: "IIM Indore", year: 2023, venue: "IIM Indore Campus", panel: "Panel 1 & 2", date: "2023-04-08", mode: "In-person", duration: "22 minutes" },
    author: "Anonymous",
    createdAt: "2023-04-17",
  },
  {
    id: "iim-indore-interview-9-2023",
    title: "IIM Indore Interview 9 - GDP & Mumbai",
    content: `● No verification
● Asked about which all subjects I had in class 12th
● Questions on what is GDP
● Is import and export included in the GDP
● Why is it not included
● Questions on perfectly elastic demand
● 2 Questions on accounts
● Question on Venn diagram
● Question on 4x=y plot on a graph
● Question on the essence of Mumbai and the history of Mumbai
● How was Mumbai created
● Why is Mumbai known as the financial hub of India
● Maharashtra is on which ranks for the highest contributor to the nation's GDP
● Facts about football (I said it was my hobby)
● Ended the interview after this`,
    meta: { college: "IIM Indore", year: 2023, venue: "IIM Indore Campus", panel: "Panel 1 & 2", date: "2023-04-09", mode: "In-person", duration: "18 minutes" },
    author: "Anonymous",
    createdAt: "2023-04-18",
  },
  {
    id: "iim-indore-interview-10-2023",
    title: "IIM Indore Interview 10 - Money Supply & Delhi",
    content: `● Asked which subjects I had in grade 12
● Factors affecting money supply
● Demand supply graph
● Law of demand and cross-questioning on that
● Methods to Calculate GDP
● Which method is used in India
● Should the government give money directly to people or invest it. Cross-questioning on this as well
● Order in which financial statements are prepared. Cross-questioning here also.
● In maths, he asked for my favourite topic.
● I said matrices, so he asked about how to find the inverse of a matrix and real-life applications.
● Then, over to the next interviewer.
● He asked questions about Delhi, where I am from.
● UNESCO World Heritage Sites in Delhi
● Which emperor built Red Fort and Qutub Minar
● Significance of Delhi NCR
● Social Issues Affecting Delhi
● Significance of India Gate
● The soldiers whose names are inscribed on India Gate fought in which war
● CM and LG of Delhi
● Why does Delhi have a LG
● That was all for my interview
● One panellist was very discouraging, while the other was kind and smiling throughout the interview.`,
    meta: { college: "IIM Indore", year: 2023, venue: "IIM Indore Campus", panel: "Panel 1 & 2", date: "2023-04-10", mode: "In-person", duration: "22 minutes" },
    author: "Anonymous",
    createdAt: "2023-04-19",
  },
  {
    id: "ayan-hudda-iim-indore-2024",
    title: "Ayan Hudda - IIM Indore Interview 2024",
    content: `Panellist - 2 panellists, one male and one female

Questions Asked -
1. Introduce yourself
2. Why do you want to join IIM Indore? You are already in IIM Jammu
3. What is classifying?(in analytics)
4. Favourite subject in 12th?
5. What is the difference between statistics and variance?
6. What is the p-value?
7. Z value?
8. T stat
9. R-squared and adjusted R-squared
10. Anova table
11. Why is Ahmedabad called Ahmedabad?
12. In which century did Ahmed Shah rule?
13. Who is the chief minister of gujarat?
14. Since when has the BJP been in power in Gujarat?
15. What is my work as an AOL data science and impact analysis intern?
16. Some questions related to the investment portfolio case competition
17. SGPA at IIM Jammu`,
    meta: { college: "IIM Indore", year: 2024, venue: "IIM Indore Campus", panel: "Panel 1 & 2", date: "2024-04-01", mode: "In-person", duration: "25 minutes" },
    author: "Ayan Hudda",
    createdAt: "2024-04-10",
  },
  {
    id: "vincent-joseph-iim-indore-2024",
    title: "Vincent Joseph - IIM Indore Interview 2024",
    content: `Panellists - 2 both males

Questions Asked -
1. Introduction
2. Why did you shift from Mumbai to Ahmd
3. What do your parents do?
4. Who is an angel investor and when do they come in the financing process
5. Name 2 firms your father has invested in
6. Why is your locality called south bopal, what's the significance of bopal in it
7. What is Asiatic in Shanti Asiatic School and name something else which has Asiatic as its prefix
8. General equation of circle and asked me to draw with an example
9. Area of left out area if all 4 points on circle are connected
10. Prove pythagoras (i knew it but blanked out)
11. Transformation of curves: Plot 2x^2 -4 without solving by transformation
12. Describe Inflation
13. If there's good rain in the country will inflation come?
14. What is used to calculate inflation
15. Governor of RBI and his role
16. Is RBI governor accountable to government if not why`,
    meta: { college: "IIM Indore", year: 2024, venue: "IIM Indore Campus", panel: "Panel 1 & 2", date: "2024-04-02", mode: "In-person", duration: "22 minutes" },
    author: "Vincent Joseph",
    createdAt: "2024-04-10",
  },
  {
    id: "sanchit-mehta-iim-indore-2024",
    title: "Sanchit Mehta - IIM Indore Interview 2024",
    content: `Panellist - 2 Both Male

Questions Asked -
1. Introduction
2. What is Applied Maths?
3. What all did you study in Financial Maths?
4. PV and FV Questions
5. Whether to purchase a house on loan or via prepayment
6. How does RBI control inflation?
7. Name 5 heritage sites of Ahmedabad
8. How old is Siddi Saiyed Mosque?
9. When was Ahmedabad established?
10. Mayor of Ahmedabad
11. Reducing Balance Depreciation and it's graph and when the value of asset will become 0
12. What is GIFT City and What is IFSCA in GIFT City?`,
    meta: { college: "IIM Indore", year: 2024, venue: "IIM Indore Campus", panel: "Panel 1 & 2", date: "2024-04-03", mode: "In-person", duration: "20 minutes" },
    author: "Sanchit Mehta",
    createdAt: "2024-04-11",
  },
  {
    id: "priyansh-agarwal-iim-indore-2024",
    title: "Priyansh Agarwal - IIM Indore Interview 2024",
    content: `No. of Panelists - 2 (one male, one female)

Questions asked
1. Introduction
2. What is dy/dx of x^2
3. Why is dy/dx = tan theta
4. Current king of jaipur
5. What position is of Diya Kumari
6. Name 5 Indian economist who have won Nobel prizes
7. Name 5 classic economists
8. What monument is there behind ₹200 note and from which place it is
9. What is it's significance
10. Define marginal utility`,
    meta: { college: "IIM Indore", year: 2024, venue: "IIM Indore Campus", panel: "Panel 1 & 2", date: "2024-04-04", mode: "In-person", duration: "15 minutes" },
    author: "Priyansh Agarwal",
    createdAt: "2024-04-11",
  },
  {
    id: "rithin-reji-iim-indore-2024",
    title: "Rithin Reji - IIM Indore Interview 2024",
    content: `Panellists- 2 males

Questions asked
1. There was no intro asked
2. They started by asking me what subjects I had in the 12th. As I didn't have math as a subject, they asked me to draw an indifference curve.
3. After that they showed me a circle and told me to prove that both the tangents are equal
4. Afterwards the other panelist asked me about my 10th marks, and as I had AI in my profile, so they asked me the difference between machine learning and natural learning
5. Later asked me my views on generative ai and how people use it to write their SOPS
6. Asked me about my achievements
7. That was all. Interview lasted 15 mins.`,
    meta: { college: "IIM Indore", year: 2024, venue: "IIM Indore Campus", panel: "Panel 1 & 2", date: "2024-04-05", mode: "In-person", duration: "15 minutes" },
    author: "Rithin Reji",
    createdAt: "2024-04-12",
  },
  {
    id: "vamika-jain-iim-indore-2024",
    title: "Vamika Jain - IIM Indore Interview 2024",
    content: `Panellists - 2 Panellists (one female and one male)

Questions Asked:
1. Introduce yourself briefly.
2. What subjects did you have in the 12th?
3. How comfortable are you with maths?
4. What do you mean by log x to a base? Write in mathematical form
5. One square is (answered 1), so according to ur definition and answer, log 1 to the base -1 is 2? (I said no) Why no?
6. tell x^sinx derivative (did it)
7. X^2 derivative, why x^2 is 2x? Why, explain it properly
8. told mod x derivative (told wrong as 1), grilled, then I corrected myself
9. marginal cost- means?, asked by simple maths on MC, then connected it with maths ques of x^sinx, "if x^sin x is total cost, then marginal cost is?", (answered), why?
10. What is the triple bottom line?
11. Do u know CSR? Explain it, our top 100 companies follow it, is it mandatory.
12. My candidature had MUNS and ngo in old age homes. Old age homes- act name and compilations, where land is to children and parents have been left by children, what can be done?
13. UN bodies - how many? Name them`,
    meta: { college: "IIM Indore", year: 2024, venue: "IIM Indore Campus", panel: "Panel 1 & 2", date: "2024-04-06", mode: "In-person", duration: "20 minutes" },
    author: "Vamika Jain",
    createdAt: "2024-04-12",
  },
  {
    id: "aaditya-singh-iim-indore-2024",
    title: "Aaditya Singh - IIM Indore Interview 2024",
    content: `Panellists: 2 (Both Male)

Questions asked:
1. Introduce Yourself
2. What was Sri Krishna's role in the Mahabharata?
3. Why did Sri Krishna not fight for the Pandavas?
4. Who is your favourite cricketer? Why?
5. Recent Achievements of the Indian Cricket Team.
6. What is equimarginal utility?
7. Draw Profit & Loss Account.
8. What is an indifference graph?
9. What are Giffen's goods?
10. Panel 2
11. What is operating profit margin?
12. Why IPM?
13. What is psychology?
14. What is philosophy?
15. What is anthropology?
16. How are they different?
(Grilled on this. Panel 2 was the one being rude and pressuring.)`,
    meta: { college: "IIM Indore", year: 2024, venue: "IIM Indore Campus", panel: "Panel 1 & 2", date: "2024-04-07", mode: "In-person", duration: "20 minutes" },
    author: "Aaditya Singh",
    createdAt: "2024-04-13",
  },
  {
    id: "aviyush-sodhi-iim-indore-2024",
    title: "Aviyush Sodhi - IIM Indore Interview 2024",
    content: `Panellist - 2 (Both males)

Questions Asked -
1. Price elasticity of demand
2. Numerical on the same
3. Types (0, ∞1, etc.)
4. Onions fall under which category?
5. Which government fell because of the prices
6. Army chief
7. Anyone higher than him
8. Navy chief
9. Air Force chief
10. Which company is the highest employer (I said Tata Group)
11. No reliance?
12. Who holds the majority stock of Reliance
13. Which sectors is Reliance in?
14. Why not JEE? Or any other engineering exam.`,
    meta: { college: "IIM Indore", year: 2024, venue: "IIM Indore Campus", panel: "Panel 1 & 2", date: "2024-04-08", mode: "In-person", duration: "16 minutes" },
    author: "Aviyush Sodhi",
    createdAt: "2024-04-13",
  },
  {
    id: "shreya-shamsundar-iim-indore-2024",
    title: "Shreya Shamsundar - IIM Indore Interview 2024",
    content: `Questions asked:
1. Introduction
2. Did you have math in class 12
3. What is your strongest topic? (Differentiation)
4. Least comfortable topic? (Relations and functions)
5. What is the domain, range and relation between them?
6. Can you map more than one element in the domain to the same value in the range
7. What are imaginary numbers
8. Why is it √-1 and not negative √-1
9. What is L'Hôpital's rule? Why should it work? Explain the reasoning behind it. (I gave mathematical proof, but they wanted the reasoning and the meaning behind why the rule exists and works)
10. What do you know about coordinate geometry?
11. What is a hyperbola, and how does it look?
12. What is parabola? What is the connection between a hyperbola and a parabola? (Both conic sections)
13. What is the equation of a circle? What if it had a different origin?
14. What is the equation of a tangent to a circle?
15. What is UNICEF, and what do they do?
16. What are some special powers of the UNSC?
17. What happens if a member of the UNSC disagrees with the resolution being passed
18. What is deep learning
19. What are neural networks
20. Do you know about the metaverse
21. Which country digitised everything recently and shifted its monuments to the metaverse
22. Which country gave citizenship to a robot, and what is the robot's name
23. Then finally they asked if I had any questions for them.`,
    meta: { college: "IIM Indore", year: 2024, venue: "IIM Indore Campus", panel: "Panel 1 & 2", date: "2024-04-09", mode: "In-person", duration: "22 minutes" },
    author: "Shreya Shamsundar",
    createdAt: "2024-04-14",
  },
  {
    id: "bhoomi-khandelwal-iim-indore-2024",
    title: "Bhoomi Khandelwal - IIM Indore Interview 2024",
    content: `Panellist - Both Male

Questions asked:
1. Introduce yourself
2. What do your parents do? (Cross-questioning on that)
3. What subjects did you have in class 12th?
4. Fav subject?
5. Plot y =x^2 and y =- x on the same graph. What are the intersection points?
6. Difference between depreciation and amortisation
7. What financial statements are prepared? Why do they tally?
8. Any other accounting concepts/ principles?
9. A simple sum of admission
10. Effect of a transaction on trading, P&L and balance sheet.
11. Mayor of Ahmedabad
12. Former mayor?
13. Finance minister and home minister of Gujarat?
14. What is fixed cost? Which business has no or negligible fixed costs?`,
    meta: { college: "IIM Indore", year: 2024, venue: "IIM Indore Campus", panel: "Panel 1 & 2", date: "2024-04-10", mode: "In-person", duration: "18 minutes" },
    author: "Bhoomi Khandelwal",
    createdAt: "2024-04-14",
  },
  {
    id: "khushal-gupta-iim-indore-2024",
    title: "Khushal Gupta - IIM Indore Interview 2024",
    content: `Panellist - Both Male

Questions asked:
● (Asked "are you khushal", I heard "how are you khushal" and replied I am good — they laughed and then asked how are you in a funny way)
● Introduction
● How can Navi Mumbai be as clean as Indore
● What are fixed assets - further cross-questioning
● What is the difference between income and wealth- further cross-questioning
● Draw a cash flow statement.
● Draw a graph of equation, does it pass through origin, why does it pass? Modify the equation so it does not pass through equation
● What is accounting identity, What is cost accounting?
● Then gave me a sequence and asked me its summation, I could not solve and they laughed saying "tumhari shakal dekh ke pata chal gya nahi hora solve"
● Then gave me a couple of journal entries and cross-questioned on that`,
    meta: { college: "IIM Indore", year: 2024, venue: "IIM Indore Campus", panel: "Panel 1 & 2", date: "2024-04-11", mode: "In-person", duration: "20 minutes" },
    author: "Khushal Gupta",
    createdAt: "2024-04-15",
  },
  {
    id: "atharva-verma-iim-indore-2024",
    title: "Atharva Verma - IIM Indore Interview 2024",
    content: `Panellist - Both Male

It was the best interview; it couldn't have been better. I was not expecting this because everyone's interviews lasted 20 minutes, while my interview was probably less than 10 minutes.

1. He looked at my marks and was like wow, 99 percent, where did you lose the marks?
2. Your parents are both doctors. Why not you? You have your email id as docatharvverma@gmail.com, you have doc in your email
3. You are so good at commerce, why are you coming to management.
4. Relation between inflation and GDP
5. What can government do to control inflation?
6. Where do you study these concepts?
7. Is there any objection to Keynsian model
8. Asked something about Adam smith
9. What can a company do to gain the trust of the people? Like through its statements.
10. Asked about goodwill
11. Your parents must have a car and a scooty and must use a metro for work (I told that they don't use metro for work)
12. Let's assume they do. They have to go to a patient. They can choose any of them. The probability they reach on time if they use metro, scooty, car is bla bla bla. Let's say he reached on time, what is the probability he took scooty
13. Asked about vice president, the other constitutional position he holds. Which party he belongs to
14. Tell five female cms of India Answered (mentioned Uma Bharti so he asked which state she was the cm of, I said Madhya Pradesh, knew obv they would have asked that) - P2 nods to P1 for further questioning but P1 was like no no good good.
P1 was smiling too much throughout the interview. They asked me to leave and both said good luck.

My voice was unintentionally very polite throughout the interview compared to my mock interviews, kept the smile. I was not grilled. A lucky day to be alive.`,
    meta: { college: "IIM Indore", year: 2024, venue: "IIM Indore Campus", panel: "Panel 1 & 2", date: "2024-04-12", mode: "In-person", duration: "10 minutes" },
    author: "Atharva Verma",
    createdAt: "2024-04-15",
  },
  {
    id: "yatharth-kanojiya-iim-indore-2024",
    title: "Yatharth Kanojiya - IIM Indore Interview 2024",
    content: `Panellists: both Males

Questions asked:
1. Asked about the meaning of my name
2. Introduce yourself
3. Asked about my family business
4. Asked fav subject from commerce (Eco)
5. If currency depreciates against US dollar what can RBI do?
6. Which taxes are better Direct taxes or indirect taxes and why? (Cross Questions on this)
7. Are taxes good in economics?
8. Asked about Dead weight loss
9. What steps can RBI take to control inflation?
10. Asked about my previous attempt of IPMAT
11. Moved to GK: Asked where is Nirma university and also about its program. (A lot of Cross Questions on this) - (I mentioned in the intro that I am pursuing BBA from Nirma)
12. Asked why I chose Mumbai as center and not indore (I am from Bhopal)
13. Asked distance b/w ahemdabad to Mumbai and ahemdabad to indore.
14. Places to Visit in Ahemdabad for a first time visitor (5 places)
15. Mayor of Ahemdabad`,
    meta: { college: "IIM Indore", year: 2024, venue: "IIM Indore Campus", panel: "Panel 1 & 2", date: "2024-04-13", mode: "In-person", duration: "18 minutes" },
    author: "Yatharth Kanojiya",
    createdAt: "2024-04-16",
  },
  {
    id: "aadyot-karna-iim-indore-2024",
    title: "Aadyot Karna - IIM Indore Interview 2024",
    content: `Panelists: Both Males

Questions asked:
1. Introduce Yourself
2. Why did you shift to Vadodara?
3. When did you shift?
4. Did Bank of Baroda start in Vadodara? Who was the founder?
5. Is it Vadodara or Baroda? Why?
6. Favourite subject in 12th?
7. How much did you score in economics?
8. If a good was made last year and sold this year, which year's GDP will it be calculated in?
9. Speaking of the value-added method, if I buy this shirt from a shop, will it be a service good or manufactured?
10. What are the measures of Inflation? Who calculates CPI? Are you sure it's not Labour Beaureu?
11. Why is CPI considered a measure of inflation and not WPI?
12. What are fictitious assets?
13. What are intangible assets?
14. You said Advertisement Expenditure was a fictitious asset, so how can it be a service?
15. What are contingent assets?
16. What are contingent liabilities?
17. If you have to judge the solvency of the firm, what will you do?
18. If the D2E ratio is 2.3 what does that mean?
19. What is equity?
20. Draw a graph: x + root(x)
21. What is the minimum value?`,
    meta: { college: "IIM Indore", year: 2024, venue: "IIM Indore Campus", panel: "Panel 1 & 2", date: "2024-04-14", mode: "In-person", duration: "22 minutes" },
    author: "Aadyot Karna",
    createdAt: "2024-04-16",
  },
  {
    id: "shlok-kataria-iim-indore-2024",
    title: "Shlok Kataria - IIM Indore Interview 2024",
    content: `Panellsit - both males

Questions asked:
1. Introduction
2. What are cognitive biases (I said it as a topic I learnt at a fellowship program in the intro)
3. Which leader is the best according to you in the business world (GRILLED A HELL LOT) (I was going for Simon Sinek but messed up by saying Steve Jobs, whom I admire very much but he is a VERY controversial figure)
4. Which is your favourite subject in the 11th and 12th grades?
5. What did you learn in business studies?
6. What are the functions of management?
7. Which leader do you admire in the political arena? (I thought a lot to avoid any controversy and said S. Jaishanker)
8. What makes him a good leader?
9. How are India's relations with its neighbours (again grilled)
10. A firm has 2 assets
11. Assets A and B. The firm is buying asset B through exchange of asset A. The rest of the payment is through cash
12. B's value = 74000
13. A's book value = 18000
14. Accumulated dep. = 1800
15. The actual exchange value = 10000 Journalise this transaction (Panicked and didn't get this completely right)`,
    meta: { college: "IIM Indore", year: 2024, venue: "IIM Indore Campus", panel: "Panel 1 & 2", date: "2024-04-15", mode: "In-person", duration: "20 minutes" },
    author: "Shlok Kataria",
    createdAt: "2024-04-17",
  },
  {
    id: "avval-purohit-iim-indore-2024",
    title: "Avval Purohit - IIM Indore Interview 2024",
    content: `Panellist - Both males

Question asked:
1. What are u good at in academics (I said best?) Functions of management
2. Fayol's principle of management
3. Taylor scientific principles
4. Difference between the two
5. Why are these principles important
6. Graph of log mod x
7. Who discovered Ahmedabad
8. What is Ahmedabad famous for
9. Past 4 CM of Gujarat
10. Extempore - Reality is not real (sab moh maya hai)`,
    meta: { college: "IIM Indore", year: 2024, venue: "IIM Indore Campus", panel: "Panel 1 & 2", date: "2024-04-16", mode: "In-person", duration: "15 minutes" },
    author: "Avval Purohit",
    createdAt: "2024-04-17",
  },
  {
    id: "ruchaa-panchmatia-iim-indore-2024",
    title: "Ruchaa Panchmatia - IIM Indore Interview 2024",
    content: `Panellist: 2 Males

Questions asked
1. Introduction
2. Who do you admire/aspire to be as a public speaker? (I had spoken about public speaking in my introduction and the form as well) - Was asked to justify it. - Since I answered PM Modi, he asked which party he is from?
3. It's his which term in office?
4. Which constituency does he stand for elections in?
5. What subjects did you have?
6. Which is your favourite subject? Since I said I like some parts of all subjects, he started asking questions about economics.
7. What is equimarginal utility?
8. Draw an AFC curve.
9. Why is it downward sloping and curved in nature?
10. Draw the ATC curve on the same graph.
11. What is the optimal point of production and why?
12. If Ram is 54 and his mother is 80, when was Ram's mother his age?
13. He gave me a sequence and asked me to find the missing number.
14. Then he gave a grid-like pattern and asked me to find the missing number.
15. He gave the percentages of 5 students on a test and asked to calculate a probability (a very direct and simple question).`,
    meta: { college: "IIM Indore", year: 2024, venue: "IIM Indore Campus", panel: "Panel 1 & 2", date: "2024-04-17", mode: "In-person", duration: "18 minutes" },
    author: "Ruchaa Panchmatia",
    createdAt: "2024-04-18",
  },
  {
    id: "rashmeet-hooda-iim-indore-2024",
    title: "Rashmeet Hooda - IIM Indore Interview 2024",
    content: `Panellist - 1 Male 1 Female

Questions asked:
1. Introduction
2. Followed on my debating experiences, as I mentioned in the introduction
3. How can you say debate piqued your interest in management?
4. I thought debaters were bad listeners. Aren't they?
5. What's your favourite subject? I answered economics
6. How do you measure the health of the economy?
7. Name some UN indicators (I included the poverty rate)
8. How is poverty measured here? Don't you think the poor are underestimated? Improvements?
9. Tell me the advantages and disadvantages of a large population.
10. What is the political environment? How does it affect economy?
11. Coming back to our discussion of poverty, can we not just print more money?
12. An entire discussion of deficit financing and why it's harmful.
13. What is the fiscal deficit? What is the current rate of India?
14. What are the functions of SEBI?
15. Why was SEBI formed? How does SEBI ensure there are no malpractices?
16. What is the role of the stock market in any economy?
17. Gave a biquadratic equation and asked for my approach to solve it.
18. Asked about the nature of the graph around its roots.
19. Asked me an equation of a circle, and then an ellipse. Derive the equation of an ellipse. Now derive the equation of a circle from the ellipse.
20. Gave an equation of a circle x2 + y2 = 16. One radius at 45 degrees in the first quadrant. And one tangent perpendicular to that radius line.
21. What is conditional probability?
22. Before leaving, the ma'am said Tell me the name of Pope of Italy, I couldn't answer it.`,
    meta: { college: "IIM Indore", year: 2024, venue: "IIM Indore Campus", panel: "Panel 1 & 2", date: "2024-04-18", mode: "In-person", duration: "25 minutes" },
    author: "Rashmeet Hooda",
    createdAt: "2024-04-18",
  },
  {
    id: "parth-diwaker-iim-indore-2024",
    title: "Parth Diwaker - IIM Indore Interview 2024",
    content: `Panellist - 1 Male and 1 Female

Questions asked:
1. Asked me why my email had a peculiar name (Thankfully, Mock PI mein I had a similar question asked and thus gave a prepared answer)
2. Asked me to introduce myself
3. Pucha, what subject do you want me to ask you - I said I am comfortable with economics and applied maths
4. Economics - What are the different types of markets?
5. Considering your parents' business, in which market are they in?
6. What is GDP?
7. What is the factor cost in that? (They were going In-depth in subjects, trying to get exact definitions and criticising when not correct)
8. Accounts - What kind of business does your father come under?
9. So, what financial statements does your father prepare?
10. In what order are those financial statements prepared?
11. What are India's top accounting firms?
12. Applied maths - What are the topics taught to you?
13. (Matrices, Determinants, Functions, Differentiations)
14. What are Odd and even functions?
15. Asked me to speak extempore on "Knowing yourself thoroughly is the start of great wisdom" (Spoke extensively as observed by both panellists, smiling at the end)
16. Are you aware about data privacy?
17. Asked me the tagline "God's Own Country" is the tagline of which place?
18. (My parents have a travel agency firm and thus)
19. What is a major sports event which is to take place?`,
    meta: { college: "IIM Indore", year: 2024, venue: "IIM Indore Campus", panel: "Panel 1 & 2", date: "2024-04-19", mode: "In-person", duration: "15 minutes" },
    author: "Parth Diwaker",
    createdAt: "2024-04-19",
  },
  {
    id: "saksham-gulati-iim-indore-2024",
    title: "Saksham Gulati - IIM Indore Interview 2024",
    content: `Panellist - 1 M and 1 F (Both quite friendly)

Questions asked:
1. Messed up at first, saying good afternoon instead of evening at 4:15 pm.
2. Introduction (Interrupted while mentioning my interest, saying that I have an interest in reading novels and, to a lesser degree, writing them.)
3. What do you mean by "to a lesser degree"? That you either do or don't?
4. Mentioned the part of a novel I wrote during my 11th, and a basic synopsis of it, with some comparisons to other books I've read.
5. Is there a dip in your marks from 10th to 12th?
6. I was not up to the mark, but I worked hard during drop year, and I have examples of what I've been able to do (JEE Mentioned).
7. What are your favourite subjects?
8. Maths and English - Asked for the method to solve a bi-quadratic with trial and error.
9. Asked for the method to solve a bi-quadratic without x^3 and x term.
10. Let x^2 be t
11. A bacteria grows proportionally to its current size at a time. If the population at the end of 3hrs is 400, write the eq for this.
12. Circle with centre at origin and radius 4, line inside making 45 degrees and meeting the circle, find the tangent at that point.
13. Just questions regarding Jack Reacher and "To Sir, With Love", which we had both read and she had taught the latter.
14. So did you give CUET? - No, some normal convo leading to me saying yeah, I have all my eggs in one basket.
15. That basically finished it. Time literally flew, and it didn't feel like I was in there for more than 10 minutes. I was later told I was in there for about 20.`,
    meta: { college: "IIM Indore", year: 2024, venue: "IIM Indore Campus", panel: "Panel 1 & 2", date: "2024-04-20", mode: "In-person", duration: "20 minutes" },
    author: "Saksham Gulati",
    createdAt: "2024-04-20",
  },
  {
    id: "jash-shah-iim-indore-2024",
    title: "Jash Shah - IIM Indore Interview 2024",
    content: `Questions asked:
1. Intro
2. Why are you so dedicated towards ipm (i am a dropper)
3. Asked about my interests (cars)
4. Asked my fav car
5. Why is it your fav
6. What is diff between SUVS and XUVS
7. What is the difference between a diesel and a petrol engine, and is the car engine 2 stroke or 4 stroke (fumbled here a bit and they took the opportunity to grill me)
8. Asked about my dream car
9. What is Toyota known for
10. Asked my fav sub (acc)
11. Difference between accounting and auditing
12. How do auditors determine which info is correct
13. What is the accrual basis
14. What companies follow this (couldn't answer and just said that cash basis is outdated)
15. Why companies follow the accrual basis when it's easier to maintain accounts through the cash basis
16. Maths - I have a 5-litre and a 3-litre bucket, and I have to give the other panellist 4 litres. How would I proceed? (I said you fill the 5 L bucket fully and empty it in 3 L, you are left with 2 L - Repeat the process 2 times. He said, but what if I have to do it in one go? I couldn't answer)
17. Then they gave me a scenario where 2 coins are tossed 500 times and gave me the frequency of 2 heads | 1 head | No head (told me to find its probability - I was super nervous and couldn't solve)
18. What is the likelihood of elementary events
19. And then it struck me that the likelihood of these events would be 1
20. He told me to improve my mental math - (And then he said that the interview is over.)`,
    meta: { college: "IIM Indore", year: 2024, venue: "IIM Indore Campus", panel: "Panel 1 & 2", date: "2024-04-21", mode: "In-person", duration: "18 minutes" },
    author: "Jash Shah",
    createdAt: "2024-04-21",
  },
  {
    id: "parv-arora-iim-indore-2024",
    title: "Parv Arora - IIM Indore Interview 2024",
    content: `Panellist - Both male

Questions asked:
1. Both of them were very cheerful and not at all intimidating. They began by asking "Aaj konsa Parv banaaye fir"
2. Then they asked my intro and then spent 5-7 minutes discussing my venture.
3. Asked favourite subject and I replied with mathematics and economics.
4. Asked to find domain and range of e to power of sin inverse x which I did correctly.
5. Then started with economics questions. Asked about real and nominal gdp. Asked me to describe Inflation and Deflation.
6. Then asked about monopoly and cross questioned.
7. Then asked about monopsony which I didn't know about. Gave me hints like it's opposite of monopoly and after a while I figured it out.
8. Then started with gk. Named some animals and asked me what national park I would take them to. I was able to answer 2/4 questions.
9. Then asked some ministers' names from latest cabinet.
10. Then ended by asking 3 maharatnas.
11. Overall a decent interview and they were impressed at several moments while a bit disappointed once or twice.
12. (Tried to intimidate me by staring into my soul when I answered the questions but I maintained my smile)`,
    meta: { college: "IIM Indore", year: 2024, venue: "IIM Indore Campus", panel: "Panel 1 & 2", date: "2024-04-22", mode: "In-person", duration: "20 minutes" },
    author: "Parv Arora",
    createdAt: "2024-04-22",
  },
  {
    id: "bindra-chauhan-iim-indore-2024",
    title: "Bindra Chauhan - IIM Indore Interview 2024",
    content: `Panellist - 1 Male, 1 Female

Questions asked:
1. Introduce yourself
2. What is YLAC Club?
3. What is the full form of SRF?
4. What are Financial Statements?
5. What is Trial Balance?
6. What is Cash Flow Statement?
7. What are Investing Activities?
8. Differentiate (sin x)^tan x
9. How to find Adjoint of 4X4 matrix?
10. What kind of books do you read?
11. Name any 3 books written by your favourite author
12. Which place was named as City Of Literature recently?
13. Which award did Arundhati Roy win?
14. Who is the Governor of RBI?
15. Who is the Vice President of India?
16. What is B2B communication?
17. Is there scope for social media in B2B communication?
18. Why do you want to pursue HR management?
19. Extempore: Suppose that you're a CEO of a company and want to ensure Work-Life Balance of your employees. What measures would you take?`,
    meta: { college: "IIM Indore", year: 2024, venue: "IIM Indore Campus", panel: "Panel 1 & 2", date: "2024-04-23", mode: "In-person", duration: "22 minutes" },
    author: "Bindra Chauhan",
    createdAt: "2024-04-23",
  },
  {
    id: "shubhradeep-sahoo-iim-indore-2024",
    title: "Shubhradeep Sahoo - IIM Indore Interview 2024",
    content: `Panellist - Both Male

Questions asked:
1. Which subjects did you have in Senior Secondary?
2. Political Science: Give me some parameters to be kept in mind while making opposition unity index?
3. How united is the opposition in India? Rate on a scale of 0 to 1
4. Which all MPs from West Bengal (interview was held in Kolkata) spoke in Parliament in the recently concluded Monsoon Session?
5. Economics - Difference between Perfect Competition and Monopolistic Competition.
6. What is Returns to Scale?
7. Geography - Kolkata received 50 mm of rainfall. Why is rainfall measured in units of length and not units of volume?
8. Mathematics - Why is derivative of log x = 1/x?
9. Give all cases where two simultaneous linear equations cannot be solved.
10. What is an irrational number?
11. PI is irrational or rational?
12. Hobbies (Cricket) - Difference between off spin and leg spin.
13. Who is a Chinaman?
14. Name some Indian spinners.`,
    meta: { college: "IIM Indore", year: 2024, venue: "IIM Indore Campus", panel: "Panel 1 & 2", date: "2024-04-24", mode: "In-person", duration: "18 minutes" },
    author: "Shubhradeep Sahoo",
    createdAt: "2024-04-24",
  },
];

export function getUniqueValues(transcripts: Transcript[], key: TranscriptTag): string[] {
  const values = new Set<string>();
  for (const t of transcripts) {
    const val = t.meta[key];
    if (val !== undefined && val !== null && val !== "") {
      values.add(String(val));
    }
  }
  return Array.from(values).sort();
}

export function filterTranscripts(
  transcripts: Transcript[],
  filters: Partial<Record<TranscriptTag, string>>
): Transcript[] {
  return transcripts.filter((t) => {
    for (const [key, value] of Object.entries(filters)) {
      if (!value) continue;
      const metaVal = t.meta[key as TranscriptTag];
      if (metaVal === undefined || String(metaVal) !== value) return false;
    }
    return true;
  });
}

export function sortTranscriptsByDate(transcripts: Transcript[], order: "desc" | "asc" = "desc"): Transcript[] {
  return [...transcripts].sort((a, b) => {
    const dateA = new Date(a.meta.date || a.createdAt).getTime();
    const dateB = new Date(b.meta.date || b.createdAt).getTime();
    return order === "desc" ? dateB - dateA : dateA - dateB;
  });
}

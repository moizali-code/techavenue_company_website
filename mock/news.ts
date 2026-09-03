import type { EventItem } from "@/types/features/events";
import type { NewsStory } from "@/types/features/news";

export const featuredStory: NewsStory = {
  id: 1,
  uuid: "a7c31f95-4e28-4d60-b1a3-9f0e6c84d215",
  category: "Strategic Partnership",
  title:
    "Tech Avenue Announces Strategic AI Partnership with Global Infrastructure Leaders",
  description:
    "A transformative alliance aimed at revolutionizing urban connectivity and digital resilience across continents through advanced neural networks.",
  publishedAt: "2026-08-26T09:15:00.000Z",
  image: "/about_image.png",
  html: `
    <p>Tech Avenue has entered a multi-year alliance with a consortium of global infrastructure operators to bring adaptive AI models into the systems that move people, power, and data every day.</p>
    <h2>What the partnership covers</h2>
    <p>The agreement pairs our neural forecasting stack with operational telemetry from transit networks, energy grids, and metropolitan fibre estates across three continents. Joint teams will run shared pilots before any capability reaches general release.</p>
    <ul>
      <li>Shared model development for demand and load forecasting</li>
      <li>Co-funded resilience research on critical distribution assets</li>
      <li>A common integration layer for partner operations centres</li>
    </ul>
    <h2>Why it matters</h2>
    <p>Operators have no shortage of sensor data — what they lack is a way to turn it into decisions fast enough to matter. This partnership puts the modelling work next to the people who run the assets, rather than several handoffs away.</p>
    <blockquote>We are not selling a dashboard. We are shortening the distance between a signal and a repair crew.</blockquote>
    <p>First joint deployments begin next quarter, with findings published as the pilots close.</p>
  `,
};

export const newsStories: NewsStory[] = [
  {
    id: 2,
    uuid: "d4b82e10-6f37-4a95-8c21-3e7a5b0d9f14",
    category: "Cybersecurity",
    title: "New Cybersecurity Framework for Global Banking Launched",
    description:
      "A unified controls baseline built with regional regulators to help banks detect and contain threats faster.",
    publishedAt: "2026-08-28T10:20:00.000Z",
    image: "/about_image.png",
    html: `
      <p>Working alongside regional regulators, Tech Avenue has published a unified controls baseline that gives banks a single reference for detection, containment, and disclosure.</p>
      <h2>Inside the framework</h2>
      <p>The baseline maps existing supervisory expectations onto a common set of technical controls, so an institution operating in several jurisdictions can prove compliance once instead of five times.</p>
      <ul>
        <li>Tiered detection requirements scaled to institution size</li>
        <li>Containment playbooks for account takeover and lateral movement</li>
        <li>A shared disclosure timeline agreed with participating regulators</li>
      </ul>
      <h2>Adoption</h2>
      <p>Eleven institutions took part in the drafting group, and early adopters report meaningfully shorter triage cycles during simulated incidents.</p>
    `,
  },
  {
    id: 3,
    uuid: "5e19c7a3-82d4-4b06-9f75-1a63d8e2c470",
    category: "Smart Infrastructure",
    title: "Smart City Initiative to Modernize Mumbai's Transit Hubs",
    description:
      "Sensor networks and real-time passenger analytics roll out across the city's busiest interchange stations.",
    publishedAt: "2026-08-28T09:05:00.000Z",
    image: "/about_image.png",
    html: `
      <p>A city-wide programme is bringing live passenger analytics to Mumbai's busiest interchanges, starting with the stations that carry the heaviest peak-hour load.</p>
      <h2>The rollout</h2>
      <p>Platform-level sensors feed crowding estimates into the control centre, letting staff adjust gate flow and train dispatch before congestion builds rather than after it clears.</p>
      <ul>
        <li>Anonymous crowd density measurement at platform and concourse level</li>
        <li>Predictive dwell-time estimates for dispatch planning</li>
        <li>Public-facing crowding indicators on station displays</li>
      </ul>
      <h2>Next phases</h2>
      <p>Twelve further stations join the programme over the coming year, with the same instrumentation extended to feeder bus interchanges.</p>
    `,
  },
  {
    id: 4,
    uuid: "b23fd680-1c94-4e57-a8d2-70e9f5a3b168",
    category: "Company News",
    title: "Tech Avenue Leadership at World Economic Forum 2024",
    description:
      "Our executives joined global policy panels on responsible AI adoption and digital public infrastructure.",
    publishedAt: "2026-08-28T07:05:00.000Z",
    image: "/about_image.png",
    html: `
      <p>Members of our executive team joined policy discussions on responsible AI adoption and the future of digital public infrastructure.</p>
      <h2>Panels and themes</h2>
      <p>Conversations centred on how public institutions can adopt capable models without surrendering oversight, and on the procurement patterns that make that possible.</p>
      <ul>
        <li>Governance models for public sector AI deployment</li>
        <li>Interoperability standards for national digital identity</li>
        <li>Funding structures for long-horizon infrastructure programmes</li>
      </ul>
      <p>Session summaries and the accompanying position paper are available to partners on request.</p>
    `,
  },
  {
    id: 5,
    uuid: "9fa06d52-3b81-4c7e-95d0-6b48e12a7c39",
    category: "Energy & Climate",
    title: "Sustainable Energy Projects Surpass Quarterly Milestones",
    description:
      "Renewable deployments across four regions delivered ahead of schedule and under projected carbon budgets.",
    publishedAt: "2026-08-28T05:05:00.000Z",
    image: "/about_image.png",
    html: `
      <p>Renewable deployments across four regions closed the quarter ahead of schedule and below their projected carbon budgets.</p>
      <h2>Where the gains came from</h2>
      <p>Most of the schedule advantage came from standardised site designs, which cut the engineering review cycle for each new installation from weeks to days.</p>
      <ul>
        <li>Repeatable site templates across all four regions</li>
        <li>Earlier grid connection scheduling with local operators</li>
        <li>Lower embodied carbon through consolidated logistics</li>
      </ul>
      <h2>Outlook</h2>
      <p>The same template approach carries into next quarter's builds, where the constraint shifts from engineering capacity to grid connection queues.</p>
    `,
  },
  {
    id: 6,
    uuid: "3c8e17b4-05d9-4a62-8f31-27b6ea90d548",
    category: "Tech Announcements",
    title: "Quantum Encryption: The Next Era of Financial Safety",
    description:
      "Our research team unveils a breakthrough in lattice-based cryptography for institutional clients.",
    publishedAt: "2026-08-24T09:30:00.000Z",
    image: "/about_image.png",
    html: `
      <p>Our cryptography group has published results on a lattice-based scheme designed for the transaction volumes institutional clients actually run.</p>
      <h2>The result</h2>
      <p>The work reduces signature verification cost enough to make post-quantum protection practical inside existing settlement windows, rather than something deferred to a future migration.</p>
      <ul>
        <li>Verification overhead within current settlement timing budgets</li>
        <li>Drop-in compatibility with existing key management systems</li>
        <li>A staged migration path that runs classical and lattice schemes side by side</li>
      </ul>
      <h2>Availability</h2>
      <p>A reference implementation is in limited preview with institutional partners, with wider availability following independent review.</p>
    `,
  },
  {
    id: 7,
    uuid: "7d40a2f6-91c3-4e58-b0a7-5c19e836b274",
    category: "Infrastructure",
    title: "Mumbai Smart Transit: A Case Study in Efficiency",
    description:
      "Analyzing the impact of AI-driven traffic management on commuter satisfaction and carbon footprint.",
    publishedAt: "2026-08-21T14:10:00.000Z",
    image: "/about_image.png",
    html: `
      <p>Twelve months after the first signals came online, we looked at what AI-driven traffic management actually changed for commuters and for emissions.</p>
      <h2>What we measured</h2>
      <p>The study paired corridor travel times with survey responses, so the numbers could be read against how the journey felt to the people making it.</p>
      <ul>
        <li>Median corridor travel time across peak and off-peak windows</li>
        <li>Idle time at signalised intersections</li>
        <li>Commuter satisfaction scores collected quarterly</li>
      </ul>
      <h2>What we learned</h2>
      <p>Reliability moved satisfaction more than raw speed did. Commuters valued a predictable journey over a marginally faster one, which reshaped how the optimisation targets are now set.</p>
    `,
  },
  {
    id: 8,
    uuid: "b95c634e-2a70-41df-9e83-4f0d75a1c962",
    category: "Events",
    title: "Recap: Tech Avenue at the World Economic Forum",
    description:
      "Key takeaways from our CEO's keynote on the democratization of enterprise AI solutions.",
    publishedAt: "2026-08-18T08:45:00.000Z",
    image: "/about_image.png",
    html: `
      <p>Our keynote argued that enterprise AI stops being a pilot exercise only when the people closest to the work can change how it behaves.</p>
      <h2>Key takeaways</h2>
      <ul>
        <li>Capability without accessibility produces demos, not outcomes</li>
        <li>Domain experts should be able to adjust models without a data science queue</li>
        <li>Procurement cycles, not model quality, are the usual bottleneck</li>
      </ul>
      <blockquote>The organisations getting value are not the ones with the largest models. They are the ones with the shortest feedback loop.</blockquote>
      <p>The full transcript and slides are available to attendees.</p>
    `,
  },
  {
    id: 9,
    uuid: "1f27d580-6b94-4c03-a5e1-8d3096f4b721",
    category: "Tech Announcements",
    title: "Adaptive Threat Detection Reaches General Availability",
    description:
      "Behavioural models now flag lateral movement across hybrid estates within seconds of first contact.",
    publishedAt: "2026-08-14T11:20:00.000Z",
    image: "/about_image.png",
    html: `
      <p>Adaptive Threat Detection is now generally available, bringing behavioural modelling to hybrid estates where signature-based tooling has historically struggled.</p>
      <h2>How it works</h2>
      <p>The system learns normal service-to-service behaviour per environment, then flags deviations that resemble lateral movement — usually within seconds of first contact.</p>
      <ul>
        <li>Per-environment behavioural baselines with no manual tuning</li>
        <li>Correlation across cloud, on-premise, and edge segments</li>
        <li>Analyst-facing explanations attached to every alert</li>
      </ul>
      <h2>Rollout</h2>
      <p>Existing customers can enable it from the platform console; new deployments include it by default.</p>
    `,
  },
  {
    id: 10,
    uuid: "6a3b0c92-d847-4e15-9270-c5f81b6ea034",
    category: "Infrastructure",
    title: "Digital Twin Pilot Cuts Facility Downtime by a Third",
    description:
      "A twelve-month deployment across three campuses shows where predictive maintenance pays for itself.",
    publishedAt: "2026-08-11T15:05:00.000Z",
    image: "/about_image.png",
    html: `
      <p>A twelve-month digital twin pilot across three campuses reduced unplanned downtime by roughly a third, with the savings concentrated in a small number of asset classes.</p>
      <h2>Where the value landed</h2>
      <p>Predictive maintenance paid for itself on rotating equipment and chillers. On lower-cost assets, the instrumentation cost more than the failures it prevented.</p>
      <ul>
        <li>Rotating equipment: strong return, early warning of bearing wear</li>
        <li>Cooling plant: fewer emergency callouts and shorter repair windows</li>
        <li>Low-value assets: run to failure remains the better economics</li>
      </ul>
      <h2>What happens next</h2>
      <p>The programme expands to six more campuses, instrumenting only the asset classes the pilot proved out.</p>
    `,
  },
  {
    id: 11,
    uuid: "e058f271-4d36-49ba-8c17-2069b3ad57e4",
    category: "Events",
    title: "Hosting the Regional Public Sector Innovation Summit",
    description:
      "Ministries and municipal teams gathered to compare notes on citizen identity and service delivery.",
    publishedAt: "2026-08-07T10:00:00.000Z",
    image: "/about_image.png",
    html: `
      <p>Ministries and municipal delivery teams spent two days comparing what has worked — and what has quietly failed — in citizen identity and service delivery programmes.</p>
      <h2>Session themes</h2>
      <ul>
        <li>Identity systems that degrade gracefully when connectivity does not</li>
        <li>Service design for residents without smartphones</li>
        <li>Shared registries across departments that never intended to share</li>
      </ul>
      <h2>Outcome</h2>
      <p>Participants agreed to a working group that will publish a common interoperability profile before the next summit.</p>
    `,
  },
  {
    id: 12,
    uuid: "9b6410ce-83a5-4f72-b0d9-1e57c264f803",
    category: "Tech Announcements",
    title: "Open Sourcing Our Data Pipeline Orchestration Toolkit",
    description:
      "The scheduler behind our analytics practice is now available for teams to run on their own infrastructure.",
    publishedAt: "2026-08-03T13:40:00.000Z",
    image: "/about_image.png",
    html: `
      <p>The scheduler that has run our analytics practice for the past four years is now open source, available for teams to run on their own infrastructure.</p>
      <h2>What is included</h2>
      <ul>
        <li>The core scheduler and dependency resolver</li>
        <li>Backfill tooling with partition-aware reruns</li>
        <li>Adapters for the storage and warehouse engines we use in production</li>
      </ul>
      <h2>Why release it</h2>
      <p>The hard parts of orchestration are not novel, and every team rebuilding them is time not spent on the data itself. Contributions and issues are welcome in the public repository.</p>
    `,
  },
  {
    id: 13,
    uuid: "24e7ba09-5c18-4d63-97f2-b806a1de35c7",
    category: "Infrastructure",
    title: "Grid Resilience Modelling for Coastal Substations",
    description:
      "Simulating storm load on ageing distribution assets to prioritise which upgrades happen first.",
    publishedAt: "2026-07-29T09:15:00.000Z",
    image: "/about_image.png",
    html: `
      <p>Coastal distribution assets face storm loads their original designs never anticipated. Our modelling work helps operators decide which substations to reinforce first.</p>
      <h2>The approach</h2>
      <p>Historical storm records are combined with asset condition data to produce a failure probability per substation, then ranked by the number of customers each one serves.</p>
      <ul>
        <li>Storm surge and wind load simulation against as-built conditions</li>
        <li>Asset age and maintenance history as model inputs</li>
        <li>Customer impact weighting for prioritisation</li>
      </ul>
      <h2>Result</h2>
      <p>Operators using the model have redirected capital toward a smaller set of substations than their previous schedules assumed.</p>
    `,
  },
  {
    id: 14,
    uuid: "c71d38f5-b264-4a80-8e93-05f7126bd4a9",
    category: "Events",
    title: "Engineering Open House Draws Record Attendance",
    description:
      "Two hundred students toured our labs and sat in on live architecture reviews with the platform team.",
    publishedAt: "2026-07-24T16:30:00.000Z",
    image: "/about_image.png",
    html: `
      <p>Two hundred students joined our engineering open house, the largest turnout the programme has seen.</p>
      <h2>The day</h2>
      <p>Rather than a scripted tour, attendees sat in on live architecture reviews and watched the platform team argue through real design decisions.</p>
      <ul>
        <li>Lab tours across hardware, networking, and security teams</li>
        <li>An unedited architecture review session</li>
        <li>Open office hours with engineers from every discipline</li>
      </ul>
      <p>Applications for the next internship cohort open shortly after the event series concludes.</p>
    `,
  },
  {
    id: 15,
    uuid: "0d5926a8-7e41-4bc3-a1f6-38b04c9e7215",
    category: "Tech Announcements",
    title: "Multilingual Citizen Assistant Enters Public Beta",
    description:
      "Residents can now query permits, payments, and case status in four languages from one interface.",
    publishedAt: "2026-07-20T12:00:00.000Z",
    image: "/about_image.png",
    html: `
      <p>The citizen assistant is now in public beta, letting residents ask about permits, payments, and case status in four languages from a single interface.</p>
      <h2>What it handles</h2>
      <ul>
        <li>Permit application status and outstanding requirements</li>
        <li>Payment history and upcoming obligations</li>
        <li>Case routing to the correct department without a phone queue</li>
      </ul>
      <h2>Beta scope</h2>
      <p>The assistant answers from official records only and hands off to a human when confidence is low. Feedback from the beta shapes which services join next.</p>
    `,
  },
  {
    id: 16,
    uuid: "8e12c47b-90d6-4a35-b7a2-6c53f108e9d4",
    category: "Infrastructure",
    title: "Fibre Rollout Reaches Its Two Hundredth Rural Exchange",
    description:
      "A milestone in the programme connecting underserved districts to full-capacity backhaul.",
    publishedAt: "2026-07-15T07:50:00.000Z",
    image: "/about_image.png",
    html: `
      <p>The rural fibre programme has connected its two hundredth exchange, bringing full-capacity backhaul to districts that previously relied on constrained microwave links.</p>
      <h2>The programme so far</h2>
      <ul>
        <li>Two hundred exchanges connected across the target regions</li>
        <li>Shared trenching agreements with regional utilities</li>
        <li>Local contractor training in every district served</li>
      </ul>
      <h2>Remaining work</h2>
      <p>The final phase covers the most geographically difficult sites, where route surveys rather than construction set the pace.</p>
    `,
  },
  {
    id: 17,
    uuid: "5b83e0d1-2c76-4918-a4f0-d97e625b3c80",
    category: "Events",
    title: "Cybersecurity Tabletop Exercise with Banking Partners",
    description:
      "Six institutions ran a simulated ransomware incident end to end, from detection through disclosure.",
    publishedAt: "2026-07-09T14:25:00.000Z",
    image: "/about_image.png",
    html: `
      <p>Six institutions ran a simulated ransomware incident end to end, from first detection through regulatory disclosure, with no advance warning of the scenario.</p>
      <h2>Exercise structure</h2>
      <ul>
        <li>Injected detection signals across three separate systems</li>
        <li>Live coordination between security, legal, and communications teams</li>
        <li>A disclosure decision under realistic time pressure</li>
      </ul>
      <h2>Findings</h2>
      <p>Technical containment was rarely the constraint. Decision authority — who could approve what, and how quickly — accounted for most of the delay in every run.</p>
    `,
  },
  {
    id: 18,
    uuid: "a34f795c-816b-42e0-9d75-0f28c6b1e743",
    category: "Tech Announcements",
    title: "Precision Agriculture Models Add Soil Moisture Forecasting",
    description:
      "Field trials show irrigation savings without measurable yield loss across three crop types.",
    publishedAt: "2026-07-02T11:35:00.000Z",
    image: "/about_image.png",
    html: `
      <p>Soil moisture forecasting is now part of the precision agriculture suite, letting growers schedule irrigation against predicted rather than measured conditions.</p>
      <h2>Field trial results</h2>
      <p>Across three crop types, trial plots used measurably less water than control plots with no detectable yield difference.</p>
      <ul>
        <li>Forecast horizon of seven days at field-block resolution</li>
        <li>Inputs from soil probes, local weather, and satellite imagery</li>
        <li>Irrigation recommendations delivered ahead of scheduling decisions</li>
      </ul>
      <h2>Availability</h2>
      <p>The capability ships to existing customers in the current release.</p>
    `,
  },
  {
    id: 19,
    uuid: "f6019d2e-4a87-4c53-b8e1-7250da39c6b4",
    category: "Infrastructure",
    title: "Campus Energy Platform Hits Its First Net-Zero Quarter",
    description:
      "On-site generation and load shifting combined to offset every kilowatt-hour drawn from the grid.",
    publishedAt: "2026-06-26T08:20:00.000Z",
    image: "/about_image.png",
    html: `
      <p>A campus running our energy platform closed its first net-zero quarter, offsetting every kilowatt-hour drawn from the grid with on-site generation.</p>
      <h2>How it was achieved</h2>
      <p>Generation capacity alone would not have been enough. Load shifting moved flexible demand into surplus periods, which closed the remaining gap.</p>
      <ul>
        <li>On-site solar with battery buffering</li>
        <li>Automated load shifting for HVAC and laboratory equipment</li>
        <li>Export scheduling aligned to grid demand signals</li>
      </ul>
      <h2>Repeatability</h2>
      <p>The same configuration is being modelled for two further campuses with comparable load profiles.</p>
    `,
  },
  {
    id: 20,
    uuid: "2c95b7e3-0f48-4d16-a670-b3e8149c25da",
    category: "Events",
    title: "Annual Partner Summit Sets the Roadmap for Next Year",
    description:
      "Integration partners previewed the platform changes landing across the next three releases.",
    publishedAt: "2026-06-19T15:45:00.000Z",
    image: "/about_image.png",
    html: `
      <p>Integration partners gathered for an early look at the platform changes landing across the next three releases, with time set aside for the parts they disagreed with.</p>
      <h2>Roadmap highlights</h2>
      <ul>
        <li>A stable public API surface with a published deprecation policy</li>
        <li>Partner-facing observability into shared integrations</li>
        <li>Faster certification turnaround for new connectors</li>
      </ul>
      <h2>Partner feedback</h2>
      <p>The deprecation policy drew the most discussion, and the timelines were extended in response before the roadmap was finalised.</p>
    `,
  },
];

export const events: EventItem[] = [
  {
    id: 1,
    uuid: "e1a47c30-5b28-4d96-8f01-763ca9b2e5d4",
    title: "Cyber Security Summit",
    location: "Singapore",
    startsAt: "2026-06-15T09:00:00.000Z",
    image: "/about_image.png",
    html: `
      <p>Two days on the practical end of security operations, built for the teams who carry the pager rather than the ones who write the policy.</p>
      <h2>Programme</h2>
      <ul>
        <li>Live incident response walkthroughs from regional operators</li>
        <li>Threat intelligence sharing across financial and public sector teams</li>
        <li>Hands-on containment labs running against real telemetry</li>
      </ul>
      <p>Registration is open to security practitioners and their vendors.</p>
    `,
  },
  {
    id: 2,
    uuid: "7b30d5f9-146a-42c8-9e75-08b3fc6a1d27",
    title: "AI Innovation Expo",
    location: "San Francisco",
    startsAt: "2026-07-22T09:00:00.000Z",
    image: "/about_image.png",
    html: `
      <p>A working showcase of applied AI, weighted toward systems already running in production rather than research previews.</p>
      <h2>What to expect</h2>
      <ul>
        <li>Deployment case studies with published cost and accuracy figures</li>
        <li>Evaluation and monitoring practices for models in production</li>
        <li>Open technical clinics with our engineering team</li>
      </ul>
      <p>Our platform team will be present across all three days.</p>
    `,
  },
  {
    id: 3,
    uuid: "c9482e18-6d05-4b73-a1f8-52970be4c36d",
    title: "Tech Avenue Connect",
    location: "London",
    startsAt: "2026-08-05T09:00:00.000Z",
    image: "/about_image.png",
    html: `
      <p>Our annual customer gathering, where roadmap decisions are discussed with the people who have to live with them.</p>
      <h2>Agenda</h2>
      <ul>
        <li>Product roadmap review with open questions</li>
        <li>Customer-led sessions on deployments in the field</li>
        <li>Direct time with the engineering and support teams</li>
      </ul>
      <p>Invitations go to existing customers and their implementation partners.</p>
    `,
  },
  {
    id: 4,
    uuid: "2f68a5b1-90c7-4e34-b6d2-1804e7f95a63",
    title: "Sustainability Forum",
    location: "Berlin",
    startsAt: "2026-09-12T09:00:00.000Z",
    image: "/about_image.png",
    html: `
      <p>A forum for the measurement side of sustainability work — what gets counted, how it gets verified, and what remains genuinely hard to quantify.</p>
      <h2>Topics</h2>
      <ul>
        <li>Emissions accounting across complex supply chains</li>
        <li>Energy platform deployments and their measured outcomes</li>
        <li>Reporting frameworks and where they diverge in practice</li>
      </ul>
      <p>Sessions run in English with simultaneous translation.</p>
    `,
  },
  {
    id: 5,
    uuid: "8d51c027-b3e6-4a19-97f4-6c205ab85e31",
    title: "Smart Infrastructure Week",
    location: "Dubai",
    startsAt: "2026-10-03T09:00:00.000Z",
    image: "/about_image.png",
    html: `
      <p>A full week covering the instrumentation, modelling, and operations behind modern infrastructure programmes.</p>
      <h2>Tracks</h2>
      <ul>
        <li>Digital twins and predictive maintenance economics</li>
        <li>Transit and mobility analytics at city scale</li>
        <li>Grid resilience under changing climate load</li>
      </ul>
      <p>Site visits to active deployments run alongside the main programme.</p>
    `,
  },
  {
    id: 6,
    uuid: "4a7e9b62-1580-4cd3-8e07-b95f3a1c6720",
    title: "Public Sector Digital Congress",
    location: "Toronto",
    startsAt: "2026-10-28T09:00:00.000Z",
    image: "/about_image.png",
    html: `
      <p>Government delivery teams meet to compare notes on digital identity, service design, and the procurement patterns that shape both.</p>
      <h2>Focus areas</h2>
      <ul>
        <li>Citizen identity systems and their failure modes</li>
        <li>Service delivery for residents with limited digital access</li>
        <li>Procurement structures that survive multi-year programmes</li>
      </ul>
      <p>Attendance is open to public sector staff and accredited suppliers.</p>
    `,
  },
  {
    id: 7,
    uuid: "b0c38fd5-7291-4e46-a3b8-14e6072d95fc",
    title: "Enterprise Cloud Conference",
    location: "Amsterdam",
    startsAt: "2026-11-17T09:00:00.000Z",
    image: "/about_image.png",
    html: `
      <p>An architecture-heavy conference for teams running hybrid estates, with an emphasis on migrations that did not go to plan.</p>
      <h2>Sessions</h2>
      <ul>
        <li>Hybrid and multi-cloud architecture patterns</li>
        <li>Cost governance without blocking delivery teams</li>
        <li>Migration retrospectives, including the failed ones</li>
      </ul>
      <p>Technical depth is assumed; sessions are not introductory.</p>
    `,
  },
  {
    id: 8,
    uuid: "6e2140ba-8c53-4f07-9d61-70a5b8e3241f",
    title: "Telecom Intelligence Forum",
    location: "Tokyo",
    startsAt: "2026-12-09T09:00:00.000Z",
    image: "/about_image.png",
    html: `
      <p>A focused forum on network intelligence, covering the analytics operators use to plan capacity and diagnose faults.</p>
      <h2>Programme</h2>
      <ul>
        <li>Capacity planning against changing traffic patterns</li>
        <li>Automated fault localisation in large access networks</li>
        <li>Backhaul economics for rural and underserved coverage</li>
      </ul>
      <p>Operator-only sessions run on the closing afternoon.</p>
    `,
  },
];

const ASSETS = '/Portfolio/case-study-assets'

// Each fullForm is an array of blocks: { type: 'heading'|'text'|'image', text?, src?, alt? }
// This mirrors the exact document structure including image positions.

export const caseStudyContent = [
  {
    slug: 'flexcancel-revenue-system',
    title: 'Turning Cancellations Into a Revenue System',
    hook: 'What if a cancelled order could make the platform more money than a completed one?',
    tag: 'Operations',
    accentColor: '#c2410c',
    tagColor: 'rgba(249, 115, 22, 0.15)',

    shortForm: `Food delivery platforms treat order cancellations as a cost of doing business. They shouldn't.

Every cancelled order represents three simultaneous failures: revenue leakage for the platform, wasted food and effort for the restaurant, and a rigid penalty experience that frustrates the customer. Current platforms respond with a binary policy - either full refund or full charge - which satisfies no one and recovers nothing.

The real insight is that most cancellations happen within the first 60 to 90 seconds of placing an order. This is not intentional churn. This is decision friction. Treating a 10-second mis-click the same as a 10-minute cancellation is commercially wasteful and operationally lazy.

When food does get prepared and then cancelled, it becomes dead inventory. No platform has built a serious system to recover value from that inventory. That is the gap.

This case study proposes two interconnected systems - FlexCancel (a time-staged cancellation policy) and HotDrop (a real-time recovery marketplace for cancelled prepared orders) - that together convert a pure cost event into a demand generation channel.`,

    fullForm: [
      { type: 'heading', text: 'Turning Cancellations Into a Revenue System' },
      { type: 'text', text: 'A concept focused on transforming food delivery order cancellations into a structured revenue recovery system. It aims to reduce waste and recover lost income through strategic operational improvements, turning a common loss point into an opportunity for efficiency and added value.' },
      { type: 'image', src: `${ASSETS}/flexcancel-1.jpeg`, alt: 'Frustrated person reviewing documents at a laptop - representing the problem of unresolved cancellation friction' },
      { type: 'text', text: "Food delivery platforms treat order cancellations as a cost of doing business. They shouldn't." },
      { type: 'text', text: 'Every cancelled order represents three simultaneous failures: revenue leakage for the platform, wasted food and effort for the restaurant, and a rigid penalty experience that frustrates the customer. Current platforms respond with a binary policy - either full refund or full charge - which satisfies no one and recovers nothing.' },
      { type: 'text', text: 'The real insight is that most cancellations happen within the first 60 to 90 seconds of placing an order. This is not intentional churn. This is decision friction. The customer didn\'t mean to cancel - they mis-clicked, changed their mind in the moment, or second-guessed the order. Treating this the same as a cancellation at the 10-minute mark is both commercially wasteful and operationally lazy.' },
      { type: 'text', text: 'At the same time, when food does get prepared and then cancelled, it becomes dead inventory. No platform has built a serious system to recover value from that inventory. That is the gap.' },
      { type: 'heading', text: 'Why now' },
      { type: 'text', text: 'Platforms are beginning to experiment with discounted cancelled food. Regulators in multiple markets have launched probes into cancellation policies following waves of consumer complaints. The window to build this proactively - before regulation forces a worse version of it - is open right now.' },
      { type: 'heading', text: 'The solution: FlexCancel + HotDrop' },
      { type: 'text', text: 'Two interconnected systems, not two separate features.' },
      { type: 'subheading', text: 'System 1 - FlexCancel: Adaptive Buffer Cancellation (ABC)' },
      { type: 'image', src: `${ASSETS}/flexcancel-2.jpeg`, alt: 'FlexCancel: Adaptive Buffer Cancellation three-stage model - Stage 1 (0-60s) full cancellation allowed, Stage 2 (60-120s) 50% fee, Stage 3 (120s+) full charge, with compliance mechanism diagram' },
      { type: 'subheading', text: 'System 2 - HotDrop: Cancelled Order Recovery Engine' },
      { type: 'text', text: 'When a prepared order is cancelled at Stage 2 or Stage 3, it does not become waste. It enters a real-time recovery marketplace.' },
      { type: 'text', text: 'Nearby users within a 2km radius in high-density urban zones during peak hours see a time-sensitive deal with an expiry window of 10 to 12 minutes.' },
      { type: 'text', text: 'Pricing structure: HotDrop deals are structured as platform and delivery fee waivers, not food price reductions. The price a customer pays on a delivery app is a composite of restaurant markup, platform commission, delivery fees, packaging, and GST. No single party captures significant margin per order, which means discounting the food price directly would hurt restaurant margins that are already thin. Instead, the HotDrop buyer gets a meaningful saving through waived platform and delivery fees, while the restaurant\'s margin stays intact.' },
      { type: 'text', text: 'Off-peak or low-density scenarios where HotDrop demand is unlikely default to food donation partnerships or restaurant recovery credit instead.' },
      { type: 'heading', text: 'HotDrop as a margin expansion mechanism' },
      { type: 'text', text: 'Together, these levers mean HotDrop generates platform margin that didn\'t exist before the cancellation occurred. The cancelled order stops being a cost event and becomes a demand generation channel.' },
      { type: 'text', text: 'HotDrop is not a loss-recovery feature. It is a margin expansion mechanism. Three levers drive this:' },
      { type: 'text', text: 'Retained delivery infrastructure: The delivery partner assigned to the original order completes the HotDrop trip, eliminating new assignment cost. Partner compensation is funded through the cancellation fee collected from the original customer, converting an otherwise lost payout into a completed, compensated delivery event.' },
      { type: 'text', text: "Subscription upsell trigger: The HotDrop deal notification is a high-intent moment to convert deal-seeking users into platform subscribers. A platform's premium membership tier can offer HotDrop early access and free delivery as a feature, converting one-time deal buyers into recurring, higher-margin subscribers." },
      { type: 'text', text: 'New customer introduction fee: When a HotDrop buyer is a first-time customer for that restaurant, the platform charges the restaurant a new customer introduction fee on that conversion at zero acquisition cost to either party.' },
      { type: 'heading', text: "Operations dashboard - what you'd track" },
      { type: 'text', text: 'Monitor cancellations, revenue recovery, compliance, and HotDrop performance to optimize operations and growth. Use a tiered abuse detection system and targeted A/B tests to balance user experience, prevent misuse, and improve conversions.' },
      { type: 'image', src: `${ASSETS}/flexcancel-3.jpeg`, alt: 'Operations dashboard showing cancellation rates by stage, HotDrop revenue recovery (79% recovered), 87% restaurant compliance rate, 18.6% HotDrop conversion rate, abuse detection system, and A/B experiments' },
      { type: 'heading', text: 'Expected impact' },
      { type: 'text', text: 'Impact projections are directional estimates pending A/B validation - actual rates will vary by city density, cuisine type, and peak vs off-peak distribution.' },
      { type: 'text', text: 'Base case: 15-25% reduction in cancellations; 25-40% recovery of cancelled order value; 3-5% improvement in contribution margin.' },
      { type: 'text', text: 'Best case: 25% reduction in cancellations; 40% recovery rate; 6-8% margin lift; measurable subscription conversion uplift from HotDrop notifications.' },
      { type: 'text', text: 'Primary risk: Cancellation window abuse by high-frequency users.' },
      { type: 'text', text: 'Mitigation: Two-layer detection system - 7-day rolling flag plus 30-day cumulative threshold.' },
      { type: 'heading', text: 'Strategic reframe' },
      { type: 'text', text: "Cancellations today largely act as a cost centre, with limited scope for recovery. What approaches like FlexCancel and HotDrop attempt to explore is whether they can be treated as a more controllable, partially monetisable operational lever." },
      { type: 'text', text: 'If designed thoughtfully, this could not only help reduce losses but also open up additional possibilities such as enabling a demand generation channel, creating moments for subscription conversion, and supporting restaurants in acquiring new customers.' },
      { type: 'text', text: 'In essence, it reflects a shift from purely reactive policies toward more system-driven thinking, where existing inefficiencies are gradually reshaped into opportunities for value creation.' },
      { type: 'divider' },
      { type: 'closing', text: "These case studies were built without access to internal data, engineering resources, or a product team. What I had was a clear view of where systems were misaligned, who was absorbing costs they shouldn't, and what a structurally correct solution could look like." },
    ],

    execution: {
      brd: {
        title: 'Business Requirements Document',
        subtitle: 'FlexCancel - Adaptive Cancellation Policy System\nDocument Type: Combined BRD / FRD / A-B Test Design | Owner: Anand V | Status: Draft - Portfolio Case Study | Version: 1.0',
        coming: false,
        sections: [
          {
            heading: '1.1 Executive Summary',
            body: `Food delivery platforms apply a single, flat cancellation policy regardless of order stage - full refund or full charge. This creates two simultaneous revenue leaks: genuine customer mistakes (mis-clicks, address errors) are penalized like intentional cancellations, damaging trust and increasing support load; late-stage cancellations, where food cost and labor are already sunk, are under-recovered, directly hurting margin. FlexCancel proposes a tiered, prep-stage-aware cancellation policy to close both leaks without adding friction to the majority of orders that are never cancelled.`,
          },
          {
            heading: '1.2 Background & Problem Statement',
            body: `Analysis of cancellation timing patterns (industry-observed, not platform-specific) shows the large majority of cancellations occur within 60-90 seconds of order placement - consistent with decision-friction behavior (accidental taps, quick change of mind) rather than deliberate abandonment. Current flat policies do not distinguish this window from a cancellation occurring after the kitchen has committed resources to the order.`,
          },
          {
            heading: '1.3 Business Objectives',
            body: `Primary: Reduce net cancellation-driven revenue loss by 15-25% within 90 days of full rollout.\nSecondary: Reduce cancellation-related customer complaints by 20%.\nSecondary: Reduce restaurant-reported food-prep waste tied to cancelled orders by 30%.`,
          },
          {
            heading: '1.4 Stakeholders',
            table: {
              headers: ['Stakeholder', 'Interest / Impact'],
              rows: [
                ['Product/Ops', 'Owns policy configuration, monitors metric outcomes'],
                ['Restaurant Partners', 'Directly affected by prep-start timing change; needs clear communication and opt-in period'],
                ['Delivery Partners', 'Indirect impact - fewer wasted trips to restaurants for orders cancelled pre-dispatch'],
                ['Customer Support', 'Handles disputes on refund-tier boundary cases; needs clear escalation SOP'],
                ['Finance', 'Tracks refund cost impact, validates margin recovery claims'],
                ['Engineering', 'Builds/maintains the tiered refund logic and prep-hold trigger'],
              ],
            },
          },
          {
            heading: '1.5 Scope',
            body: `In scope: Customer-initiated cancellations, tiered refund logic, restaurant prep-hold mechanism, abuse detection for repeat cancellers.\n\nOut of scope (v1): Restaurant-initiated cancellations (kitchen stockouts etc.), recovery/resale of already-prepared cancelled orders (separate initiative), per-user personalized windows.`,
          },
          {
            heading: '1.6 Assumptions',
            body: `Restaurants are willing to hold prep-start for a short window if it's communicated as reducing their own waste.\n\nServer-side order-stage timestamps are reliable and not subject to significant latency.\n\nExisting refund infrastructure supports partial (tiered) refunds without a full rebuild.`,
          },
          {
            heading: '1.7 Risks & Dependencies',
            table: {
              headers: ['Risk', 'Mitigation'],
              rows: [
                ['Restaurants ignore the prep-hold and start early anyway', 'Add ops override + spot audits; restaurant-side compliance dashboard'],
                ['Customers perceive partial refunds as unfair', 'Clear in-app reason string at cancellation point; support SOP for edge-case disputes'],
                ['Delayed prep-start hurts delivery SLA', 'Cap window length based on A/B test results (Section 3)'],
                ['Dependency: order-stage event pipeline must emit real-time prep-start events', 'Confirm with Engineering before FRD sign-off'],
              ],
            },
          },
        ],
      },
      frd: {
        title: 'Functional Requirements Document',
        coming: false,
        sections: [
          {
            heading: '2.1 User Stories',
            body: `US-1 (Customer - genuine mistake): As a customer who cancels within the mistake window, I want a full, frictionless refund, so that I'm not penalized for a fast correction.\nAcceptance Criteria: Refund auto-processes within Stage 1 with no manual review, unless account is abuse-flagged (FR-4).\n\nUS-2 (Customer - post-prep cancellation): As a customer cancelling after prep has started, I want to clearly understand why my refund is partial, so the policy doesn't feel arbitrary.\nAcceptance Criteria: A reason string is shown and requires explicit acknowledgment before the cancellation is confirmed.\n\nUS-3 (Restaurant - waste reduction): As a restaurant partner, I want prep to only begin once the free-cancellation window has closed, so I'm not cooking food that gets cancelled at zero recovery.\nAcceptance Criteria: Prep-start trigger fires only after Stage 1 window elapses, visible in restaurant order queue UI.\n\nUS-4 (Ops - policy tuning): As an ops stakeholder, I want to configure refund tiers and window length per city/cuisine, so I can tune the policy without engineering involvement.\nAcceptance Criteria: Config changes take effect without a code deploy; changes are logged with timestamp and author.\n\nUS-5 (Support - dispute handling): As a support agent, I want visibility into which refund tier applied and why, so I can resolve disputes without escalating to engineering.\nAcceptance Criteria: Order detail view shows cancellation timestamp, applicable tier, and refund amount breakdown.`,
          },
          {
            heading: '2.2 Functional Requirements',
            table: {
              headers: ['ID', 'Requirement', 'Acceptance Criteria'],
              rows: [
                ['FR-1', 'Stage 1 (0-90s): full refund, auto-processed', 'Refund issued within [X] minutes; no manual review unless FR-4 flag'],
                ['FR-2', 'Stage 2 (90s-prep complete): partial refund, food cost withheld', 'Refund breakdown shown to customer pre-confirmation'],
                ['FR-3', 'Stage 3 (post-prep/dispatch): minimal/no refund', 'Order flagged and routed to downstream recovery workflow (out of scope)'],
                ['FR-4', 'Abuse detection: flag accounts exceeding 7-day rolling cancellation threshold', 'Flagged accounts routed to manual review before Stage 1 auto-refund'],
                ['FR-5', 'Config: refund tiers/window adjustable per city/cuisine', 'No-code config change via admin panel, changes audit-logged'],
                ['FR-6', 'Server-side cancellation timestamp', 'Client-side timestamps rejected as source of truth; server timestamp only'],
                ['FR-7', 'Restaurant-side prep-hold enforcement', 'Restaurant order queue displays "hold" state until Stage 1 closes'],
                ['FR-8', 'Soft-warn state for borderline abuse patterns', 'Users approaching (not exceeding) the abuse threshold receive a soft warning before hard restriction'],
              ],
            },
          },
          {
            heading: '2.3 Non-Functional Requirements',
            body: `Refund-tier decision latency: under 500ms at cancellation time (must not add checkout/cancellation friction).\n\nConfig changes must propagate to all regions within 5 minutes.\n\nAudit log retention: minimum 180 days for dispute resolution.`,
          },
          {
            heading: '2.4 Data Requirements',
            body: `Order-stage event stream: Order_placed, prep_started, prep_completed, dispatched, delivered - each with server-side timestamp.\n\nCancellation event: timestamp, stage-at-cancellation, refund tier applied, refund amount.\n\nAbuse-detection input: rolling cancellation count per account, 7-day window.`,
          },
          {
            heading: '2.5 Edge Cases',
            body: `Cancellation at exactly the window boundary (89s vs 91s) - resolved via server timestamp, no manual interpretation.\n\nRestaurant manually overrides hold and starts prep early - system cannot assume restaurant compliance; ops override path required.\n\nLegitimate repeat canceller (e.g., frequently reordering due to app bugs) - soft-warn state (FR-8) prevents false-positive hard restriction.`,
          },
        ],
      },
      abTest: {
        title: 'A/B Test Design',
        coming: false,
        sections: [
          {
            heading: '3.1 Background',
            body: `Stage 1 window is proposed at 90 seconds based on directional pattern observation, not validated data. This experiment resolves the actual optimal window length.`,
          },
          {
            heading: '3.2 Hypothesis',
            body: `H1: Extending the free-cancellation window from 90s to 120s increases the share of cancellations captured at zero food-cost impact, without materially increasing average delivery time.\n\nH0 (null): No statistically significant difference in capture rate between 90s and 120s, and/or delivery time regresses.`,
          },
          {
            heading: '3.3 Experiment Design',
            body: `Control (A): 90-second window\nVariant (B): 120-second window\nRandomization unit: User ID (prevents inconsistent experience across a user's own orders)\nSplit: 50/50\nRollout scope: 2-3 mid-density cities in phase 1, to control for city-density confounds before wider rollout`,
          },
          {
            heading: '3.4 Metrics',
            body: `Primary: % of cancellations captured within the free window (occurring before prep start).\n\nGuardrails (must not regress): Average delivery time; order completion rate; restaurant prep-waste rate.\n\nDiagnostic: Cancellation distribution by time bucket (0-30s / 30-60s / 60-90s / 90-120s) - informs whether 120s is the right next test point or a different window entirely.`,
          },
          {
            heading: '3.5 Sample Size & Duration',
            body: `Illustrative calculation: assuming ~60% baseline capture rate (to be replaced with real historical data pre-test) and targeting a 5-percentage-point detectable lift at 95% confidence / 80% power, approximately 2,000-3,000 cancellation events per arm are needed. Given typical cancellation rates as a fraction of total orders, this is estimated at 2-3 weeks of data collection in a mid-density city.`,
          },
          {
            heading: '3.6 Rollout & Monitoring Plan',
            body: `Launch in test cities, monitor guardrails daily for first 72 hours (early-stop trigger if guardrail breach exceeds threshold).\n\nRun minimum 2 weeks regardless of early significance, to rule out novelty effects.\n\nRead results against decision framework (3.7).\n\nIf shipped, monitor for 30 days post-rollout before considering further window extension tests.`,
          },
          {
            heading: '3.7 Decision Framework',
            table: {
              headers: ['Outcome', 'Action'],
              rows: [
                ['Primary metric improves, guardrails hold', 'Ship 120s as default; test further extension (e.g., 150s)'],
                ['No significant lift on primary metric', 'Do not ship on window length; investigate refund-tier clarity (reason string) as alternate lever'],
                ['Guardrail failure (delivery time regresses)', 'Do not ship broadly; consider scoping to long-prep-time cuisine categories only'],
              ],
            },
          },
          {
            heading: '3.8 Risks',
            body: `Confound: Restaurants may start prep early regardless of hold state to protect their own SLA - requires restaurant-side compliance tracking as a secondary read.\n\nNovelty effect: Early post-launch behavior may not reflect steady state - minimum 2-week run enforced regardless of early results.\n\nThis is a self-directed portfolio case study. Baseline rates, sample size inputs, and quantitative targets are illustrative assumptions clearly flagged as such - in a live environment these would be derived from historical platform data prior to test design.`,
          },
        ],
      },
    },
  },

  {
    slug: 'hotdrop-recovery',
    title: 'Designing Accountability into Delays',
    hook: 'The delivery partner got a 1-star review for a delay caused by the restaurant. No platform has fixed this.',
    tag: 'Operations',
    accentColor: '#c2410c',
    tagColor: 'rgba(249, 115, 22, 0.15)',

    shortForm: `When food arrives late, the customer is angry. They leave a one-star review. The delivery partner receives it. But the delivery partner was waiting outside the restaurant for 22 minutes while the kitchen ran behind. They had nothing to do with the delay.

This is the most structurally unfair dynamic in food delivery operations - and no platform has fixed it, because fixing it requires attributing blame correctly, which requires data discipline and willingness to hold restaurants accountable.

This case study proposes a three-layer delay accountability framework: a data-derived prep-time baseline for every restaurant (not self-declared), a proactive compensation system that issues credits before customers complain, and a delivery partner rating protection layer that freezes scores when delays are provably restaurant-origin.

The result is a system where every stakeholder's incentive is aligned with the outcome that matters - food delivered on time, accurately, with dignity for everyone in the chain.`,

    fullForm: [
      { type: 'heading', text: 'Designing Accountability into Delays' },
      { type: 'text', text: 'A practical take on delay accountability in food delivery, this framework explores how unclear ownership of late orders impacts customer trust, unit economics, and operational efficiency.' },
      { type: 'heading', text: 'The Delay Accountability Framework' },
      { type: 'image', src: `${ASSETS}/delays-1.jpeg`, alt: 'Food delivery illustration: customer with chat, rider on scooter with map, and delivery handoff at door' },
      { type: 'text', text: 'When food arrives late, the customer is angry. They leave a one-star review. The delivery partner receives it. But the delivery partner was waiting outside the restaurant for 22 minutes while the kitchen ran behind. They had nothing to do with the delay.' },
      { type: 'text', text: 'This is the most structurally unfair dynamic in food delivery operations - and no platform has fixed it, because fixing it requires attributing blame correctly, which requires data discipline and willingness to hold restaurants accountable.' },
      { type: 'text', text: 'The price a customer pays on a delivery app is a composite of restaurant markup, platform commission, delivery fees, packaging, and GST. No single party captures significant margin on every order - which means delay compensation costs need to be attributed precisely rather than absorbed by the platform alone. This is exactly why a liability split model matters. Currently the customer and the delivery partner bear the full consequence of failures that originate elsewhere in the chain.' },
      { type: 'text', text: 'This case study proposes a system that redistributes delay accountability to where the failure actually originated.' },
      { type: 'heading', text: 'Root causes of delivery delay' },
      { type: 'text', text: 'Not all delays are the same. The system must distinguish between three types.' },
      { type: 'text', text: "Type 1 - Restaurant prep overrun: Kitchen is behind. Food is not ready when the partner arrives. This is the restaurant's failure." },
      { type: 'text', text: "Type 2 - Partner assignment delay: Platform cannot find an available delivery partner in time. This is the platform's operational failure." },
      { type: 'text', text: 'Type 3 - External delay: Traffic, weather, accident. Neither party is at fault.' },
      { type: 'text', text: 'Current platforms treat all three identically. The customer sees one message: "Your order is on the way." This opacity is what generates the most frustration - not the delay itself, but the silence around it.' },
      { type: 'divider' },
      { type: 'heading', text: 'The solution: Three-layer delay accountability system' },
      { type: 'subheading', text: 'Layer 1 - Prep time baseline (the foundation)' },
      { type: 'text', text: 'Every restaurant, for every item, has a rolling 30-day median preparation time tracked by the platform. This is not self-declared. It is derived from actual data - time between order confirmation and partner pickup, segmented by item type and day-part.' },
      { type: 'text', text: "Why day-part matters: A restaurant's median prep time at 2pm on a Tuesday is meaningfully different from 8pm on a Saturday. Baseline calculations are segmented by peak and off-peak periods to ensure restaurants are measured against a fair, contextually accurate standard, not a flat average that ignores operational reality." },
      { type: 'text', text: "A specific dish at a specific restaurant has a rolling median prep time. If that order is not ready for pickup beyond the baseline threshold, the delay clock starts. This baseline is the source of truth. Restaurants cannot inflate it because they do not control it - it is derived from their own historical performance data." },
      { type: 'subheading', text: 'Layer 2 - Proactive delay compensation (the customer experience fix)' },
      { type: 'text', text: 'When the prep baseline is exceeded, the platform proactively compensates the customer without waiting for a complaint.' },
      { type: 'text', text: 'Minutes 0 to 5 beyond baseline: The platform absorbs a small credit for this delay window. This acts as a buffer layer to protect customer experience from minor inefficiencies. The cost is negligible relative to per-order economics, but the signal it sends is critical - the platform acknowledges the delay before the customer is forced to react.' },
      { type: 'text', text: "Minutes 5 and beyond: The restaurant absorbs the compensation cost. For every additional 5 minutes of delay, a defined credit amount is issued to the customer and deducted from the restaurant's monthly payout. This creates a direct financial consequence - not a warning, not a rating impact, but a monetary penalty tied to operational performance." },
      { type: 'text', text: 'The liability split by delay type:' },
      { type: 'image', src: `${ASSETS}/delays-2.png`, alt: 'Liability split table: Restaurant prep overrun - Platform absorbs first 5 minutes, Restaurant absorbs all delays beyond 5 minutes; Partner assignment delay - Platform absorbs fully; External delay - Platform absorbs fully' },
      { type: 'text', text: "This distinction is what makes the system defensible. Restaurants will push back. The response is simple: the prep baseline is derived from the restaurant's own historical performance, segmented by day-part. If that baseline is exceeded, the delay is operational, not external, and therefore attributable to the restaurant." },
      { type: 'subheading', text: 'Layer 3 - Delivery partner protection (the human fix)' },
      { type: 'text', text: "When a delay is tagged as restaurant prep overrun in the system, the delivery partner's rating for that order is frozen. It does not count toward their performance score. The customer can still leave a review, but it is flagged and excluded from the partner's aggregate rating." },
      { type: 'text', text: "This is not a courtesy. It is a data correction. The partner did not cause the delay. Including their rating in the performance system when they were a passive victim of the restaurant's failure is a measurement error, not a policy choice." },
      { type: 'heading', text: 'Restaurant accountability: The TAT compliance program' },
      { type: 'text', text: 'Parallel to the compensation system, restaurants are tracked on TAT (turnaround time) compliance and placed into performance tiers. Tier placement is reviewed monthly.' },
      { type: 'image', src: `${ASSETS}/delays-3.jpeg`, alt: "Performance tiers: Platinum (>90% compliance) gets Verified Kitchen badge and priority search placement; Gold (80-90%) gets 1% commission rebate; Standard (70-80%) baseline; At-Risk (<70%) gets deprioritised in search and delay label on listing. Peak hour performance is weighted 2x." },
      { type: 'divider' },
      { type: 'heading', text: "The 'staying listed during a rush' accountability gap" },
      { type: 'text', text: 'Right now there is zero financial cost for a restaurant to remain listed on a delivery platform during a Saturday dinner rush while every dine-in table is already occupied. They stay listed, accept delivery orders, fall behind on prep, and the customer and delivery partner pay the price.' },
      { type: 'text', text: 'The TAT Compliance Program changes this calculus. If staying listed during a dine-in rush causes prep overruns that trigger compensation deductions and badge downgrades, the restaurant now has a direct financial reason to manage their availability honestly.' },
      { type: 'text', text: 'The platform should make this easier - a one-tap "pause orders" button prominently placed in the restaurant dashboard, with suggested pause triggers based on current order volume vs historical capacity. The system should work with restaurants, not just penalise them.' },
      { type: 'divider' },
      { type: 'heading', text: 'What this system changes' },
      { type: 'text', text: 'Before this system: Customer waits. Gets no information. Complains after delivery. Takes frustration out on the delivery partner who had no fault. Receives credit as an apology. Feels unheard. Orders less frequently.' },
      { type: 'text', text: 'After this system: Customer receives a transparent delay message with attribution before they complain. Automatic credit is issued proactively. Delivery partner\'s rating is protected from a failure they didn\'t cause. Restaurant faces a real financial consequence tied directly to their operational performance. Platform has a structural incentive to improve ETA accuracy because it absorbs the first 5 minutes of every restaurant delay.' },
      { type: 'text', text: "Every stakeholder's incentive is now aligned with the outcome that matters: food delivered on time, accurately, with dignity for everyone in the chain." },
      { type: 'divider' },
      { type: 'heading', text: 'Operations metrics to track' },
      { type: 'image', src: `${ASSETS}/delays-4.jpeg`, alt: 'Metrics dashboard: (1) Delay attribution breakdown by type - restaurant 52%, platform 23%, external 25%; (2) Average compensation paid per order by restaurant tier and delay type; (3) TAT compliance rate by restaurant, city, time slot and day-part; (4) Delivery partner rating accuracy comparing frozen vs non-frozen ratings; (5) Tier movement month-on-month; (6) Pause orders button usage rate; (7) Customer reorder rate post-delay; (8) Platform credit cost per delayed order vs customer lifetime value retained' },
      { type: 'heading', text: 'Strategic reframe' },
      { type: 'text', text: 'This is less about customer service and more about aligning how costs are handled across the system.' },
      { type: 'text', text: 'Today, delay-related costs are often spread across customers and delivery partners, despite limited margins for each stakeholder. The idea here is to bring more structure, so costs are addressed closer to where they originate, improving clarity and accountability.' },
      { type: 'text', text: 'If done well, this can naturally strengthen trust and improve overall system performance. When each part of the chain is better aligned with the impact it creates, the system becomes more efficient and sustainable.' },
      { type: 'divider' },
      { type: 'closing', text: "These case studies were built without access to internal data, engineering resources, or a product team. What I had was a clear view of where systems were misaligned, who was absorbing costs they shouldn't, and what a structurally correct solution could look like." },
    ],

    execution: {
      brd: {
        title: 'Business Requirements Document',
        subtitle: 'Delay Accountability Framework\nDocument Type: Combined BRD / FRD / A-B Test Design | Owner: Anand V | Status: Draft - Portfolio Case Study | Version: 1.0',
        coming: false,
        sections: [
          {
            heading: '1.1 Executive Summary',
            body: `Late-order compensation and rating impact currently default to the delivery partner, regardless of actual cause. In many cases, delay originates from restaurant kitchen prep time, not delivery execution - yet the partner absorbs the rating damage, and the platform absorbs undifferentiated compensation cost with no attribution to root cause. This framework introduces a three-layer accountability system that attributes delay cost and rating impact to whichever party actually caused the breach, using restaurant-specific historical prep-time baselines.`,
          },
          {
            heading: '1.2 Background & Problem Statement',
            body: `Turnaround time (TAT) breaches are currently treated as a single undifferentiated event: customer complains, platform compensates, delivery partner's rating drops - without distinguishing whether the delay originated in the kitchen, in dispatch/routing, or in traffic/external conditions. This flattens accountability and removes any financial incentive for restaurants to improve prep consistency.`,
          },
          {
            heading: '1.3 Business Objectives',
            body: `Primary: Reduce restaurant-side TAT breach frequency through direct financial accountability.\nSecondary: Protect delivery partner rating scores from delays outside their control, improving partner retention.\nSecondary: Reduce undifferentiated compensation cost by attributing spend to root cause.`,
          },
          {
            heading: '1.4 Stakeholders',
            table: {
              headers: ['Stakeholder', 'Interest / Impact'],
              rows: [
                ['Restaurant Partners', 'Directly financially impacted by breach attribution; needs transparent baseline methodology'],
                ['Delivery Partners', 'Rating protection on non-attributable delays; core retention lever'],
                ['Ops', 'Owns TAT monitoring, tier management, baseline recalculation cadence'],
                ['Finance', 'Tracks compensation cost shift and validates savings'],
                ['Customer Support', 'Handles disputes on attribution edge cases'],
              ],
            },
          },
          {
            heading: '1.5 Scope',
            body: `In scope: TAT breach detection, root-cause attribution (kitchen vs. dispatch vs. platform), restaurant compliance tiering, partner rating protection logic.\n\nOut of scope (v1): Weather/traffic-caused delays (platform-absorbed by default, not attributed to any party), customer-caused delays (e.g., unavailable at delivery - separate workflow).`,
          },
          {
            heading: '1.6 Assumptions',
            body: `Order-stage timestamps (prep start, food ready, pickup, delivery) are captured reliably and in real time.\n\nRestaurants have sufficient order volume to establish a statistically meaningful rolling baseline (low-volume restaurants may need a fallback category-average baseline).\n\nRestaurants will not mass-exit the platform in response to financial accountability, provided the mechanism is transparent and phased.`,
          },
          {
            heading: '1.7 Risks & Dependencies',
            table: {
              headers: ['Risk', 'Mitigation'],
              rows: [
                ['Restaurant churn in response to payout deductions', 'Phase rollout: warning tier before financial tier; transparent baseline dashboard for restaurants'],
                ['Low-volume restaurants lack reliable baseline data', 'Fallback to cuisine/category-level average baseline until sufficient order history exists'],
                ['Attribution disputes (kitchen vs. dispatch ambiguity)', 'Require order-stage event granularity sufficient to isolate the breach stage; escalation SOP for ambiguous cases'],
                ['Dependency: real-time order-stage event pipeline', 'Confirm event granularity with Engineering before FRD sign-off'],
              ],
            },
          },
        ],
      },
      frd: {
        title: 'Functional Requirements Document',
        coming: false,
        sections: [
          {
            heading: '2.1 User Stories',
            body: `US-1 (Delivery Partner - rating protection): As a delivery partner, I want my rating shielded from delays caused by restaurant prep, so I'm not penalized for a failure outside my control.\nAcceptance Criteria: Orders tagged "restaurant-caused delay" are automatically excluded from the partner's rating calculation.\n\nUS-2 (Restaurant - transparency): As a restaurant partner, I want to see my own rolling prep-time baseline and how close I am to a breach, so I can proactively manage my kitchen operations.\nAcceptance Criteria: Restaurant dashboard displays current baseline, day-part breakdown, and recent breach history.\n\nUS-3 (Ops - tiering): As an ops stakeholder, I want restaurants automatically scored into compliance tiers based on breach frequency, so consistent poor performers face escalating consequences without manual review.\nAcceptance Criteria: Tier recalculates on a defined cadence (e.g., weekly rolling window) and is visible in the ops admin panel.\n\nUS-4 (Finance - cost attribution): As a finance stakeholder, I want compensation costs tagged by root cause (kitchen/dispatch/platform-absorbed), so I can report accurately on where compensation spend originates.\nAcceptance Criteria: Every compensation event carries an attribution tag in the finance export.\n\nUS-5 (Support - dispute resolution): As a support agent, I want to see the full order-stage timeline for a delayed order, so I can resolve attribution disputes without escalating.\nAcceptance Criteria: Order detail view shows timestamped stage events (prep start, food ready, pickup, delivered) alongside the baseline comparison.`,
          },
          {
            heading: '2.2 Functional Requirements',
            table: {
              headers: ['ID', 'Requirement', 'Acceptance Criteria'],
              rows: [
                ['FR-1', 'Rolling prep-time baseline per restaurant, segmented by day-part', 'Baseline recalculated on defined cadence; visible on restaurant dashboard'],
                ['FR-2', 'Buffer zone: first N minutes of breach absorbed by platform', 'No liability shift within buffer window'],
                ['FR-3', 'Liability shift beyond buffer: attribute to restaurant (prep) or platform (dispatch/routing)', 'Attribution based on which order-stage interval exceeded baseline'],
                ['FR-4', 'Delivery partner rating exclusion on restaurant-attributed delays', 'Automatic exclusion, no manual flag required'],
                ['FR-5', 'TAT compliance tiering', 'Restaurant tier recalculated weekly; tier affects in-app visibility/ranking'],
                ['FR-6', 'Fallback baseline for low-volume restaurants', 'Category/cuisine-average baseline applied until restaurant reaches minimum order threshold'],
                ['FR-7', 'Compensation cost attribution tagging', 'Every compensation event tagged with root-cause category for Finance reporting'],
                ['FR-8', 'Warning-tier phase before financial-tier phase', 'New restaurants onboarded to warning-only tier for a defined grace period before payout deductions activate'],
              ],
            },
          },
          {
            heading: '2.3 Non-Functional Requirements',
            body: `Attribution decision latency: must resolve within the order lifecycle, not retroactively beyond 24 hours (dispute window).\n\nBaseline recalculation job: must complete without impacting live order-serving systems.\n\nAudit trail: every liability shift decision logged with the underlying stage-timestamp data used to make it, retained minimum 180 days.`,
          },
          {
            heading: '2.4 Data Requirements',
            body: `Order-stage event stream: order_placed, prep_started, food_ready, picked_up, delivered - each with server-side timestamp.\n\nRestaurant baseline table: rolling average prep time, segmented by day-part, with sample size per segment.\n\nCompensation ledger: amount, root-cause tag, associated order ID.`,
          },
          {
            heading: '2.5 Edge Cases',
            body: `Breach spans both kitchen and dispatch delay simultaneously - requires a defined precedence rule (e.g., attribute to the stage that individually exceeded its own baseline by the largest margin).\n\nRestaurant disputes baseline accuracy - dashboard transparency (US-2) plus a defined recalculation appeal process.\n\nNew restaurant with no baseline history - fallback category baseline (FR-6) applies until sufficient data exists.`,
          },
        ],
      },
      abTest: {
        title: 'A/B Test Design',
        coming: false,
        sections: [
          {
            heading: '3.1 Background',
            body: `The core untested assumption is whether financial accountability (payout deduction) actually changes restaurant prep behavior, versus restaurants simply absorbing the cost or reducing active hours to avoid breaches.`,
          },
          {
            heading: '3.2 Hypothesis',
            body: `H1: Introducing restaurant-side payout deductions for TAT breaches reduces breach frequency without triggering restaurant churn or reduced active hours.\n\nH0 (null): Breach rate is unaffected by financial accountability (suggesting the issue is structural, e.g., kitchen capacity, not incentive-driven), and/or restaurants respond by reducing active hours or churning.`,
          },
          {
            heading: '3.3 Experiment Design',
            body: `Control (A): Existing undifferentiated compensation model (no attribution, no restaurant payout impact).\nVariant (B): Full accountability model - baseline tracking, buffer, liability shift, payout deduction on breach.\nRandomization unit: Restaurant ID, matched cohorts by cuisine type and order volume to reduce confounds.\nSplit: 50/50 within matched cohort.\nScope: Single city, phase 1.`,
          },
          {
            heading: '3.4 Metrics',
            body: `Primary: TAT breach rate per restaurant, pre- vs. post-intervention.\n\nGuardrails: Restaurant opt-out/churn rate; active hours per restaurant (detect if restaurants reduce availability to dodge breaches); customer complaint rate on delayed orders.\n\nDiagnostic: Breach rate segmented by day-part, to see if the intervention works differently at peak vs. off-peak.`,
          },
          {
            heading: '3.5 Sample Size & Duration',
            body: `Directional: requires a sufficient number of matched restaurant pairs per cohort to detect a meaningful breach-rate change at the cohort level. Actual required sample size depends on baseline breach-rate variance across restaurants - to be calculated from historical TAT logs before test launch, not assumed.`,
          },
          {
            heading: '3.6 Rollout & Monitoring Plan',
            body: `Onboard variant-group restaurants to warning-tier only for a 2-week grace period (per FR-8) before financial tier activates, to avoid a shock rollout.\n\nMonitor guardrails weekly; early-stop if churn rate in variant group exceeds a defined threshold relative to control.\n\nRun for a minimum of 6-8 weeks post financial-tier activation to capture behavior change beyond initial reaction.`,
          },
          {
            heading: '3.7 Decision Framework',
            table: {
              headers: ['Outcome', 'Action'],
              rows: [
                ['Breach rate drops, guardrails hold', 'Roll out city-wide, then expand; consider tuning buffer window next'],
                ['Breach rate unchanged', 'Investigate structural causes (kitchen capacity, staffing) - financial incentive alone may be insufficient'],
                ['Churn or reduced active hours spikes', 'Soften rollout - extend warning-tier grace period, reduce deduction severity, or exclude low-margin restaurant segments from financial tier'],
              ],
            },
          },
          {
            heading: '3.8 Risks',
            body: `Restaurant relationship risk: Financial accountability is a sensitive lever - a poorly communicated rollout risks partner trust even if the mechanism is fair. Transparent baseline dashboards (US-2) are a prerequisite, not an optional add-on.\n\nAttribution accuracy risk: If root-cause attribution is wrong even occasionally, restaurants will contest the entire system's legitimacy - dispute SOP (US-5) must be solid before wide rollout.\n\nThis is a self-directed portfolio case study. Baseline methodology, sample size inputs, and quantitative targets are illustrative assumptions clearly flagged as such - in a live environment these would be derived from historical platform data prior to test design.`,
          },
        ],
      },
    },
  },
]

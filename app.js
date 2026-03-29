const roles = [
  'Anchor',
  'Script Writer',
  'Researcher',
  'Video Editor',
  'SW + Researcher',
  'Anchor + Researcher + SW',
  'Open/Undecided'
];

const stages = [
  'Cold Outreach',
  'Platform Stages',
  'Assignment',
  'Follow-ups',
  'Offer/Onboarding',
  'Onboarding & Compliance',
  'WhatsApp Manual Templates',
  'Rejection'
];

const nukkadViewHRData = roles.reduce((roleAcc, role) => {
  roleAcc[role] = stages.reduce((stageAcc, stage) => {
    stageAcc[stage] = [
      {
        title: '',
        channel: '',
        content: ''
      }
    ];
    return stageAcc;
  }, {});
  return roleAcc;
}, {});

const coldOutreachTemplates = {
  Anchor: [
    {
      title: 'Warm Email Pitch',
      channel: 'Email',
      content: `Subject: [Candidate Name], your on-camera conviction stood out.

Hi [Candidate Name],

I stopped scrolling because you command heavy topics with real conviction—the kind of presence that can carry geopolitics and crime stories without theatrics.

At The NukkadView, we reject sensationalism, noise, and filler. We publish serious work across Geopolitics, History, and Crime.

This internship is built for day-one ownership: you will anchor real stories, shape angles, and influence editorial framing.

You also get formal byline credits on published work, access to closed-door webinars with senior news professionals, and an official internship certificate on successful completion. Top performers are strongly considered for paid full-time roles.

Workload stays clear and healthy: 2 to 3 short-form videos and 1 to 2 long-form videos per week.

If this aligns, I can share the first brief.

— [Your Name]`
    },
    {
      title: 'Professional LinkedIn Message',
      channel: 'LinkedIn',
      content: `Hi [Candidate Name] — your delivery style has authority without noise, which is rare.

I am reaching out from The NukkadView, where we do not do sensationalism or filler content. Our newsroom focuses on Geopolitics, History, and Crime.

If we collaborate, you get editorial ownership from day one, not passive internship tasks.

We also provide creator byline credits for portfolio building, invite interns to closed-door webinars with industry experts, and issue an official completion certificate. This internship is a real pathway: top performers are strongly considered for paid full-time roles.

Expected weekly cadence: 2 to 3 short-form videos + 1 to 2 long-form videos.

Open to a short conversation?`
    },
    {
      title: 'Casual Instagram DM',
      channel: 'Instagram DM',
      content: `Hey [Candidate Name] 🎙️
Your camera presence is powerful—seriously hard to ignore.
We are building The NukkadView (Geopolitics/History/Crime, zero sensationalism).
Day one = real editorial ownership, not coffee-run tasks.
Scope is clear: 2-3 short-form + 1-2 long-form videos/week.
Could this be your lane right now? 🎥🔍`
    },
    {
      title: 'Fast Intro Email',
      channel: 'Email',
      content: `Subject: Quick note, [Candidate Name] — your anchor voice fits serious journalism.

Hi [Candidate Name],

Short version: we liked your ability to hold attention on complex topics.

The NukkadView is anti-fluff by design, focused on Geopolitics, History, and Crime. You would get editorial ownership from day one, with a defined workload of 2 to 3 short-form videos and 1 to 2 long-form videos per week.

If you want details, I can send a quick role snapshot.

— [Your Name]`
    }
  ],
  'Script Writer': [
    {
      title: 'Warm Email Pitch',
      channel: 'Email',
      content: `Subject: [Candidate Name], your narrative rhythm is rare.

Hi [Candidate Name],

Your pacing and story architecture stood out immediately—every line moves, nothing drifts.

That is exactly how we work at The NukkadView: no sensationalism, no filler, no noise. We create serious content in Geopolitics, History, and Crime.

You would get editorial ownership from day one: scripting real outputs that go live.

We provide formal byline credits for every published piece, access to closed-door webinars led by experienced newsroom professionals, and an official internship certificate after successful completion. Top-performing interns are strongly considered for paid full-time roles.

Workload is transparent: 2 to 3 short-form videos and 1 to 2 long-form videos per week.

If this sounds like your zone, I can share next steps.

— [Your Name]`
    },
    {
      title: 'Professional LinkedIn Message',
      channel: 'LinkedIn',
      content: `Hi [Candidate Name] — your writing has strong narrative control, which is exactly what we value.

At The NukkadView, we avoid sensationalism and filler content. We focus on Geopolitics, History, and Crime with clarity.

This role offers day-one ownership across scripting and storytelling decisions.

You will receive public byline credits, exclusive access to closed-door webinars with industry experts, and an official completion certificate. High performers are strongly considered for paid full-time roles.

Weekly scope: 2 to 3 short-form videos + 1 to 2 long-form videos.

Would you be open to a quick fit chat?`
    },
    {
      title: 'Casual Instagram DM',
      channel: 'Instagram DM',
      content: `Hey [Candidate Name] ✏️
Your writing rhythm is genuinely sharp.
I am with The NukkadView—serious Geopolitics/History/Crime, zero filler.
You would own real scripts from day one.
Load is clear: 2-3 short-form + 1-2 long-form videos/week.
Open to a quick chat? 🔍🎙️`
    },
    {
      title: 'Fast Intro Email',
      channel: 'Email',
      content: `Subject: [Candidate Name], quick outreach from The NukkadView.

Hi [Candidate Name],

We noticed your ability to turn complex ideas into clean narrative flow.

The NukkadView covers Geopolitics, History, and Crime without sensationalism. This is a day-one ownership internship with a defined weekly cadence: 2 to 3 short-form videos and 1 to 2 long-form videos.

If useful, I can send a concise role brief.

— [Your Name]`
    }
  ],
  Researcher: [
    {
      title: 'Warm Email Pitch',
      channel: 'Email',
      content: `Subject: [Candidate Name], your epistemic curiosity is exactly what we need.

Hi [Candidate Name],

Your research instinct is clear: you chase source truth, not recycled narratives. We are looking for exactly that engine.

At The NukkadView, we do not do sensationalism, noise, or filler. Our reporting is focused on Geopolitics, History, and Crime.

This internship gives you editorial ownership from day one—fact architecture, source validation, and angle shaping.

You get formal byline credits, access to closed-door webinars with seasoned news professionals, and an official internship certificate on successful completion. Top-performing interns are strongly considered for paid full-time roles.

Workload is explicit: 2 to 3 short-form videos and 1 to 2 long-form videos per week.

If this aligns with your ambition, I can share the first assignment.

— [Your Name]`
    },
    {
      title: 'Professional LinkedIn Message',
      channel: 'LinkedIn',
      content: `Hi [Candidate Name] — your evidence-first approach stood out.

I am reaching out from The NukkadView, where we reject sensationalism and filler while covering Geopolitics, History, and Crime.

Researchers here own work from day one: finding what mainstream coverage often misses and strengthening editorial confidence.

You will receive formal byline credits, invitations to closed-door expert webinars, and an official internship certificate. This is also a real stepping stone—top performers are strongly considered for paid full-time roles.

Weekly expectation: 2 to 3 short-form videos + 1 to 2 long-form videos.

Open to a short conversation?`
    },
    {
      title: 'Casual Instagram DM',
      channel: 'Instagram DM',
      content: `Hey [Candidate Name] 🔍
Your research depth is exactly what we look for.
The NukkadView covers Geopolitics/History/Crime with zero sensationalism.
Day one, you would own real research decisions.
Clear cadence: 2-3 short-form + 1-2 long-form videos/week.
Would a quick vibe check help? ✏️🎥`
    },
    {
      title: 'Fast Intro Email',
      channel: 'Email',
      content: `Subject: Quick researcher note for [Candidate Name].

Hi [Candidate Name],

You seem wired for deep fact-finding, not surface-level trend summaries.

At The NukkadView, that matters. We cover Geopolitics, History, and Crime without noise, and this internship gives day-one ownership with a defined workload of 2 to 3 short-form videos and 1 to 2 long-form videos per week.

If you want, I can send details.

— [Your Name]`
    }
  ],
  'Video Editor': [
    {
      title: 'Warm Email Pitch',
      channel: 'Email',
      content: `Subject: [Candidate Name], your visual storytelling is exceptional.

Hi [Candidate Name],

Your edits show narrative intelligence—pacing, music sense, and emotional timing—not just software execution.

At The NukkadView, we do not do sensationalism or filler. We build serious visual journalism in Geopolitics, History, and Crime.

You get day-one editorial ownership: shaping story arcs, rhythm, and audience retention through visual storytelling.

We guarantee byline/creator credits, provide access to exclusive closed-door webinars with industry experts, and issue an official internship certificate upon successful completion. Top performers are strongly considered for paid full-time roles.

Expected workload: 2 to 3 short-form videos and 1 to 2 long-form videos per week.

If this sounds like your environment, I can send our workflow snapshot.

— [Your Name]`
    },
    {
      title: 'Professional LinkedIn Message',
      channel: 'LinkedIn',
      content: `Hi [Candidate Name] — your editing style feels story-first, not template-first.

I am with The NukkadView. We reject sensationalism and filler, and focus on Geopolitics, History, and Crime.

This role is about visual storytelling ownership from day one: pacing, music choices, narrative tension, and final impact.

You receive formal creator byline credits, closed-door webinar access with seasoned media professionals, and an official completion certificate. Strong performers are strongly considered for paid full-time roles.

Weekly workload is clear: 2 to 3 short-form videos + 1 to 2 long-form videos.

Would you be open to a short intro call?`
    },
    {
      title: 'Casual Instagram DM',
      channel: 'Instagram DM',
      content: `Hey [Candidate Name] 🎥
Your edits tell stories, not just cut clips.
I am from The NukkadView (Geopolitics/History/Crime, no sensational filler).
Day-one ownership on real visual storytelling.
Cadence: 2-3 short-form + 1-2 long-form videos/week.
Open to a quick chat? 🎙️🔍`
    },
    {
      title: 'Fast Intro Email',
      channel: 'Email',
      content: `Subject: [Candidate Name], quick note on your edit craft.

Hi [Candidate Name],

We noticed your sense of pacing and narrative shape right away.

The NukkadView builds serious coverage in Geopolitics, History, and Crime, without sensationalism. This internship gives day-one ownership, with a clear weekly scope of 2 to 3 short-form videos and 1 to 2 long-form videos.

If helpful, I can share the role brief.

— [Your Name]`
    }
  ],
  'SW + Researcher': [
    {
      title: 'Warm Email Pitch',
      channel: 'Email',
      content: `Subject: [Candidate Name], your writing + research combo is rare.

Hi [Candidate Name],

You can do what most teams split across two people: rigorous research plus clear narrative writing.

At The NukkadView, we avoid sensationalism, noise, and filler. We cover Geopolitics, History, and Crime with serious editorial standards.

You would get day-one ownership across both research depth and script execution.

You will receive formal byline credits, exclusive access to expert-only webinars, and an official internship certificate after successful completion. Top performers are strongly considered for paid full-time roles.

Workload is transparent: 2 to 3 short-form videos and 1 to 2 long-form videos per week.

If aligned, I can share the first brief.

— [Your Name]`
    },
    {
      title: 'Professional LinkedIn Message',
      channel: 'LinkedIn',
      content: `Hi [Candidate Name] — your cross-functional writing + research skill set stood out instantly.

I am reaching out from The NukkadView, where we deliberately reject sensationalism and filler. Our work focuses on Geopolitics, History, and Crime.

This role has day-one editorial ownership across evidence gathering and narrative scripting.

You will get byline credits for portfolio proof, closed-door webinars with industry professionals, and an official internship certificate. High performers are strongly considered for paid full-time roles.

Weekly cadence: 2 to 3 short-form videos + 1 to 2 long-form videos.

Open to a quick call?`
    },
    {
      title: 'Casual Instagram DM',
      channel: 'Instagram DM',
      content: `Hey [Candidate Name] ✏️🔍
Your writing + research combo is exactly our vibe.
The NukkadView does serious Geopolitics/History/Crime work—no sensational filler.
Day one, you own real editorial output.
Workload is clear: 2-3 short-form + 1-2 long-form videos/week.
Open to a quick chat? 🎥`
    },
    {
      title: 'Fast Intro Email',
      channel: 'Email',
      content: `Subject: Quick outreach, [Candidate Name] — hybrid newsroom role.

Hi [Candidate Name],

We are impressed by how you translate deep research into clean scripts.

At The NukkadView, we focus on Geopolitics, History, and Crime without sensationalism, and this internship offers day-one ownership with a defined scope of 2 to 3 short-form videos and 1 to 2 long-form videos weekly.

If useful, I can send details.

— [Your Name]`
    }
  ],
  'Anchor + Researcher + SW': [
    {
      title: 'Warm Email Pitch',
      channel: 'Email',
      content: `Subject: [Candidate Name], full-stack journalist energy noticed.

Hi [Candidate Name],

We noticed you already do the writing, researching, and presenting yourself. That full-stack journalist profile is exactly what we are building around.

At The NukkadView, we reject sensationalism, filler, and noise. We produce serious work in Geopolitics, History, and Crime.

You would get day-one editorial ownership across the entire story pipeline.

We guarantee formal byline credits, provide access to closed-door webinars with experienced industry professionals, and issue an official internship certificate at successful completion. Top performers are strongly considered for paid full-time roles.

Weekly workload is defined: 2 to 3 short-form videos and 1 to 2 long-form videos.

If this matches your ambition, I can share next steps.

— [Your Name]`
    },
    {
      title: 'Professional LinkedIn Message',
      channel: 'LinkedIn',
      content: `Hi [Candidate Name] — your profile reads like a true full-stack journalist.

You already handle research, writing, and presentation, and that is exactly what we want to amplify at The NukkadView.

We do not do sensationalism or filler content; we focus on Geopolitics, History, and Crime.

This internship gives day-one ownership across end-to-end editorial output.

You will receive formal byline credits, expert-only webinar access, and an official completion certificate. It is also a paid-pathway stepping stone: top performers are strongly considered for full-time roles.

Workload: 2 to 3 short-form videos + 1 to 2 long-form videos weekly.

Would you be open to a quick conversation?`
    },
    {
      title: 'Casual Instagram DM',
      channel: 'Instagram DM',
      content: `Hey [Candidate Name] 🎙️✏️
You already write, research, and present—full-stack journalist energy.
The NukkadView covers Geopolitics/History/Crime with zero sensational filler.
Day one = real editorial ownership.
Weekly load: 2-3 short-form + 1-2 long-form videos.
Open to a quick vibe check? 🔍`
    },
    {
      title: 'Fast Intro Email',
      channel: 'Email',
      content: `Subject: [Candidate Name], quick note for a full-stack newsroom role.

Hi [Candidate Name],

Your multi-skill profile is exactly what we need for high-accountability journalism.

The NukkadView builds serious Geopolitics, History, and Crime coverage with no sensationalism. This internship gives day-one ownership with defined output expectations: 2 to 3 short-form videos and 1 to 2 long-form videos per week.

If you are open, I can send details.

— [Your Name]`
    }
  ],
  'Open/Undecided': [
    {
      title: 'Warm Email Pitch',
      channel: 'Email',
      content: `Subject: [Candidate Name], quick skeptic's vibe check from The NukkadView.

Hi [Candidate Name],

Traditional titles can feel restrictive, and we respect that. Your raw media instincts stood out, even without a fixed label.

At The NukkadView, we do not do sensationalism, noise, or filler. We focus on Geopolitics, History, and Crime with serious intent.

This internship still gives day-one editorial ownership, then helps you discover your strongest lane through real work.

You receive formal byline credits, exclusive access to webinars with seasoned news professionals, and an official internship certificate on completion. Top performers are strongly considered for paid full-time roles.

Workload is clear and bounded: 2 to 3 short-form videos and 1 to 2 long-form videos per week.

If you are open to a low-pressure conversation, I can map options.

— [Your Name]`
    },
    {
      title: 'Professional LinkedIn Message',
      channel: 'LinkedIn',
      content: `Hi [Candidate Name] — this is a skeptic's vibe check, not a hard sell.

If standard job titles feel narrow, that is valid. We are more interested in raw talent and learning velocity.

At The NukkadView, we avoid sensationalism and filler while covering Geopolitics, History, and Crime.

You would get day-one ownership and space to find your best fit.

We offer byline credits, closed-door webinars with industry experts, and an official internship certificate. Top performers are strongly considered for paid full-time roles.

Weekly scope remains clear: 2 to 3 short-form videos + 1 to 2 long-form videos.

Open to a brief, low-pressure chat?`
    },
    {
      title: 'Casual Instagram DM',
      channel: 'Instagram DM',
      content: `Hey [Candidate Name] 🔍
Skeptic's vibe check: if fixed job titles feel limiting, we get it.
At The NukkadView, we do serious Geopolitics/History/Crime work (no sensational filler).
You get day-one ownership + room to find your lane.
Clear scope: 2-3 short-form + 1-2 long-form videos/week.
Open to a low-pressure chat? 🎥✏️`
    },
    {
      title: 'Fast Intro Email',
      channel: 'Email',
      content: `Subject: [Candidate Name], low-pressure role-fit conversation?

Hi [Candidate Name],

If you are still exploring your best media lane, that is completely okay.

The NukkadView runs on serious journalism in Geopolitics, History, and Crime—no sensationalism or filler. Our internship model gives day-one ownership with a clear weekly cadence of 2 to 3 short-form videos and 1 to 2 long-form videos.

If helpful, I can share a simple role-fit overview.

— [Your Name]`
    }
  ]
};

Object.entries(coldOutreachTemplates).forEach(([role, templates]) => {
  nukkadViewHRData[role]['Cold Outreach'] = templates;
});

const platformStageTemplates = {
  Anchor: [
    {
      title: 'step1_introExtraction',
      channel: 'Internshala/Unstop DM',
      content: `Hey [Candidate Name] — your screen presence has main-character aura ✨

Quick heads up: your Anchor application moved forward. The platform is acting a bit clown 🤡 with heavier assignment assets, so we can’t share the full brief here cleanly.

Please send a quick note to Contact@thenukkadview.com from your preferred inbox, and we’ll immediately reply with your assignment pack. 🙏`
    },
    {
      title: 'step2_dispatchConfirm',
      channel: 'Internshala/Unstop DM',
      content: `You crushed step one, [Candidate Name]. 🙌

We received your email and just dispatched your Anchor assignment brief to your inbox.

Deadline: [Deadline Date], [Deadline Time].

If you don’t see it in Primary, check Promotions/Spam once and reply “got it.”`
    },
    {
      title: 'step3_submissionNudge',
      channel: 'Internshala/Unstop DM',
      content: `12-hour check-in, [Candidate Name] — we’re in support mode, not panic mode.

Any roadblocks with scripting, references, or recording flow? Share what’s stuck and we’ll help unblock fast. 🙏

Friendly reminder: submission closes at [Deadline Time] today.`
    }
  ],
  'Script Writer': [
    {
      title: 'step1_introExtraction',
      channel: 'Internshala/Unstop DM',
      content: `Hey [Candidate Name] — your narrative flow and curiosity-gap instinct stood out instantly. ✨

Good news: you’re shortlisted for the writing stage. Platform DM formatting keeps breaking long briefs and references 🤡

Send a quick email to Contact@thenukkadview.com and we’ll share the full assignment pack right away. 🙏`
    },
    {
      title: 'step2_dispatchConfirm',
      channel: 'Internshala/Unstop DM',
      content: `Quick confirm: we received your note and your Script Writer assignment has been sent to your inbox.

Deadline is [Deadline Date], [Deadline Time].

You’re all set—reply here if anything is unclear and we’ll clarify fast.`
    },
    {
      title: 'step3_submissionNudge',
      channel: 'Internshala/Unstop DM',
      content: `12-hour support ping, [Candidate Name].

If you’re stuck on hook structure, in-media-res opening, or final narrative polish, message us—we can help you unblock quickly. ✏️

Reminder: submission window ends at [Deadline Time].`
    }
  ],
  Researcher: [
    {
      title: 'step1_introExtraction',
      channel: 'Internshala/Unstop DM',
      content: `Hey [Candidate Name] — your deep-dive mindset is exactly the epistemic curiosity we look for. 🔍

You’re shortlisted. Small issue: platform chat can’t safely carry the full research dossier + source matrix 🤡

Please mail Contact@thenukkadview.com and we’ll send your assignment brief + source format instantly. 🙏`
    },
    {
      title: 'step2_dispatchConfirm',
      channel: 'Internshala/Unstop DM',
      content: `Got your email, thank you.

Your Researcher assignment pack has been sent to your inbox with deadline details.

Final submission cutoff: [Deadline Date], [Deadline Time].

Ping us if any source-access issue appears.`
    },
    {
      title: 'step3_submissionNudge',
      channel: 'Internshala/Unstop DM',
      content: `12-hour check-in, [Candidate Name].

Any blockers with paywalls, source validation, data mining, or citation formatting? We can support fast so you don’t lose momentum. 🙏

Reminder: submission closes at [Deadline Time].`
    }
  ],
  'Video Editor': [
    {
      title: 'step1_introExtraction',
      channel: 'Internshala/Unstop DM',
      content: `Hey [Candidate Name] — your timeline pacing and visual hooks are CEO-level 🎥✨

You’re shortlisted for the editor round. The platform can’t handle our high-fidelity footage and asset bundle cleanly 🤡

Drop a quick email to Contact@thenukkadview.com and we’ll send the full brief + media package immediately. 🙏`
    },
    {
      title: 'step2_dispatchConfirm',
      channel: 'Internshala/Unstop DM',
      content: `Confirmation: your email came through and your Video Editor assignment pack is now in your inbox.

Deadline: [Deadline Date], [Deadline Time].

If the files don’t download correctly, tell us and we’ll resend with mirror links.`
    },
    {
      title: 'step3_submissionNudge',
      channel: 'Internshala/Unstop DM',
      content: `12-hour support nudge, [Candidate Name].

Any render crashes, export codec issues, timeline lag, or audio sync problems? Message us and we’ll help troubleshoot fast. 🎥

Submission closes at [Deadline Time].`
    }
  ],
  'SW + Researcher': [
    {
      title: 'step1_introExtraction',
      channel: 'Internshala/Unstop DM',
      content: `Hey [Candidate Name] — writing + research in one profile is rare, and yours stood out. ✨

You cleared to next stage. Platform chat is limiting for the full hybrid brief + references 🤡

Please email Contact@thenukkadview.com and we’ll send your complete assignment packet immediately. 🙏`
    },
    {
      title: 'step2_dispatchConfirm',
      channel: 'Internshala/Unstop DM',
      content: `Received your email—thank you.

Your SW + Researcher assignment brief is now sent and active.

Deadline is [Deadline Date], [Deadline Time].

Reply if you want quick clarification on expected structure.`
    },
    {
      title: 'step3_submissionNudge',
      channel: 'Internshala/Unstop DM',
      content: `12-hour check-in from our side.

Any friction with fact-structuring, source-to-script flow, or final narrative backbone? We can help you unblock quickly. 🙏

Deadline reminder: [Deadline Time] today.`
    }
  ],
  'Anchor + Researcher + SW': [
    {
      title: 'step1_introExtraction',
      channel: 'Internshala/Unstop DM',
      content: `Hey [Candidate Name] — full-stack creator energy detected: you research, write, and present like a one-person army. ✨

You’re shortlisted. Platform messaging is too clunky for our full-stack assignment stack 🤡

Please send a quick email to Contact@thenukkadview.com and we’ll share your complete brief + assets right away. 🙏`
    },
    {
      title: 'step2_dispatchConfirm',
      channel: 'Internshala/Unstop DM',
      content: `You’re in motion.

We got your email and sent the full-stack assignment brief to your inbox just now.

Submission deadline: [Deadline Date], [Deadline Time].

If anything looks unclear, ping us here and we’ll resolve quickly.`
    },
    {
      title: 'step3_submissionNudge',
      channel: 'Internshala/Unstop DM',
      content: `12-hour support ping, [Candidate Name].

Need help balancing research depth, script clarity, and on-camera framing? We can assist on whichever piece is blocking you. 🙏

Gentle reminder: final submit is [Deadline Time].`
    }
  ],
  'Open/Undecided': [
    {
      title: 'step1_introExtraction',
      channel: 'Internshala/Unstop DM',
      content: `Hey [Candidate Name] — skeptic’s vibe check: no pressure to lock a rigid title yet. ✨

You’re shortlisted for a discovery-style assignment. Platform chat is limited for sharing the complete brief and assets 🤡

Send a quick note to Contact@thenukkadview.com and we’ll reply with your custom starter assignment. 🙏`
    },
    {
      title: 'step2_dispatchConfirm',
      channel: 'Internshala/Unstop DM',
      content: `Thanks, [Candidate Name] — got your email.

Your discovery assignment is now in your inbox with role-fit guidance.

Deadline: [Deadline Date], [Deadline Time].

If anything feels ambiguous, ask and we’ll make it crystal clear.`
    },
    {
      title: 'step3_submissionNudge',
      channel: 'Internshala/Unstop DM',
      content: `12-hour friendly support check.

If you’re unsure about direction, that’s normal—we can help map your strongest lane before submission. 🙏

Reminder: submission closes at [Deadline Time].`
    }
  ]
};

Object.entries(platformStageTemplates).forEach(([role, templates]) => {
  nukkadViewHRData[role]['Platform Stages'] = templates;
});

const assignmentStageTemplates = {
  Anchor: [
    {
      title: 'Official Hiring Assignment',
      channel: 'Email / HTML',
      content: `<h3>Anchor Assignment — Stage Cleared ✅</h3><br>
      <strong>Your profile stood out from hundreds. Now, let's see how you execute.</strong><br><br>
      <h3>Universal Submission Rules</h3>
      <ul>
        <li><strong>AI Prohibition:</strong> ChatGPT, Claude, or any generative AI tool for writing/research is strictly forbidden. Immediate disqualification applies. We test human critical thinking.</li>
        <li><strong>Submission Logistics:</strong> Upload all scripts + videos to one Google Drive folder with access set to <strong>Anyone with the link can view</strong>. No API-based submission portals or external tracking software are to be used.</li>
        <li><strong>Subject Line Protocol:</strong> Send the Drive link to <strong>Contact@thenukkadview.com</strong> with subject: <strong>[Full Name] — Assignment</strong>.</li>
        <li><strong>Language:</strong> Primary delivery Hindi; natural English terms allowed where relevant.</li>
      </ul><br>
      <h3>Role Tasks (Anchor)</h3>
      <ul>
        <li><strong>Task 1 — Scripting:</strong> Write <strong>2 original scripts</strong> (60–90 words each) from Geopolitics, History, or Crime.</li>
        <li><strong>Task 2 — On-Camera Delivery:</strong> Record smartphone video delivering both scripts.<br><strong>We are not judging your lighting or camera quality. We are judging your authority, cadence, enunciation, and screen presence (aura).</strong></li>
        <li><strong>Time Limit:</strong> 24 Hours.</li>
      </ul>`
    }
  ],
  'Script Writer': [
    {
      title: 'Official Hiring Assignment',
      channel: 'Email / HTML',
      content: `<h3>Script Writer Assignment — You Made the Cut ✍️</h3><br>
      <strong>Your profile stood out from hundreds. Now, let's see how you execute.</strong><br><br>
      <h3>Universal Submission Rules</h3>
      <ul>
        <li><strong>AI Prohibition:</strong> ChatGPT, Claude, and all generative AI writing/research tools are strictly prohibited. Use leads to immediate disqualification.</li>
        <li><strong>Submission Logistics:</strong> Upload all files to one Google Drive folder; set visibility to <strong>Anyone with the link can view</strong>. No API-based submission portals or external tracking software are to be used.</li>
        <li><strong>Subject Line Protocol:</strong> Email your Drive link to <strong>Contact@thenukkadview.com</strong> with subject <strong>[Full Name] — Assignment</strong>.</li>
        <li><strong>Language:</strong> Hindi-first writing; modern English terms can be used naturally.</li>
      </ul><br>
      <h3>Role Tasks (Script Writer)</h3>
      <ul>
        <li><strong>Task 1 — Original Scripts:</strong> Write <strong>TWO</strong> original scripts (60–90 words each) optimized for 60-second retention on: Indian Geopolitics, History, or Crime &amp; Conspiracies.</li>
        <li><strong>Task 2 — Structure:</strong> Each script must follow: <strong>Psychological Hook (In Media Res opening or a curiosity gap) → Dense Information Body → Open-Loop Closing Question</strong>.</li>
        <li><strong>Task 3 — Social Copy:</strong> For one script, write a 150-character Instagram caption + 280-character Twitter/X thread starter.</li>
        <li><strong>Time Limit:</strong> 24 Hours.</li>
      </ul>`
    }
  ],
  Researcher: [
    {
      title: 'Official Hiring Assignment',
      channel: 'Email / HTML',
      content: `<h3>Researcher Assignment — Advanced Round 🔍</h3><br>
      <strong>Your profile stood out from hundreds. Now, let's see how you execute.</strong><br><br>
      <h3>Universal Submission Rules</h3>
      <ul>
        <li><strong>AI Prohibition:</strong> ChatGPT, Claude, or any generative AI for writing/research is forbidden. Violation = immediate disqualification.</li>
        <li><strong>Submission Logistics:</strong> Put all notes/docs in one Google Drive folder with <strong>Anyone with the link can view</strong>. No API-based submission portals or external tracking software are to be used.</li>
        <li><strong>Subject Line Protocol:</strong> Send Drive link to <strong>Contact@thenukkadview.com</strong>; subject line <strong>[Full Name] — Assignment</strong>.</li>
        <li><strong>Language:</strong> Hindi primary; English terms acceptable where context demands.</li>
      </ul><br>
      <h3>Role Tasks (Researcher)</h3>
      <ul>
        <li><strong>Task 1 — The Research Note:</strong> Choose one topic (example: The Indus Waters Treaty / Cybercrime in India) and submit a 5-part note:<br>
          1) Topic &amp; Editorial Angle<br>
          2) Key Facts &amp; Data (minimum 5 verifiable facts)<br>
          3) Source Verification URLs<br>
          4) What Is Being Missed (mainstream blind spots)<br>
          5) The Real Question
        </li>
        <li><strong>Task 2 — Rapid Fact-Check:</strong> Verify and contextualize this claim: <strong>"India meets 85% of its crude oil requirements through imports, making it the 3rd largest importer."</strong></li>
        <li><strong>Time Limit:</strong> 24 Hours.</li>
      </ul>`
    }
  ],
  'Video Editor': [
    {
      title: 'Official Hiring Assignment',
      channel: 'Email / HTML',
      content: `<h3>Video Editor Assignment — Build the Reel, Not Excuses 🎬</h3><br>
      <strong>Your profile stood out from hundreds. Now, let's see how you execute.</strong><br><br>
      <h3>Universal Submission Rules</h3>
      <ul>
        <li><strong>AI Prohibition:</strong> No ChatGPT/Claude/GenAI usage for writing, ideation, or research support. If detected, immediate disqualification.</li>
        <li><strong>Submission Logistics:</strong> Upload all edits/docs to one Google Drive folder and set it to <strong>Anyone with the link can view</strong>. No API-based submission portals or external tracking software are to be used.</li>
        <li><strong>Subject Line Protocol:</strong> Send folder link to <strong>Contact@thenukkadview.com</strong> with subject <strong>[Full Name] — Assignment</strong>.</li>
        <li><strong>Language:</strong> Hindi-first storytelling; English terms allowed naturally.</li>
      </ul><br>
      <h3>Role Tasks (Video Editor)</h3>
      <ul>
        <li><strong>Task 1 — Re-Edit (No Raw Footage Workflow):</strong> Find a public 3–10 minute YouTube news/current-affairs video on Indian geopolitics or crime. Re-edit it into a fast, engaging 30–60 second short-form reel. Include original YouTube link + your final edit link for baseline comparison. This tests rhythm through cuts, sound, and transitions without requiring us to send heavy raw files.</li>
        <li><strong>Task 2 — Visual Storyboard (5 Points):</strong> Use this exact script and map B-roll, text overlays, and SFX per sentence:<br>
          <strong>"Do ships aaye — aur poore desh ne chain ki saans li. Breaking news thi. Anchors desk thok rahe the. Lekin jab shor thoda kam hua — toh ek sawaal bacha. Kya hum sach mein surakshit hain — ya sirf ek achi khabar ke intezaar mein the?"</strong>
        </li>
        <li><strong>Task 3 — Editing Philosophy:</strong><br>
          1) "What is the first thing you look for before making a single cut?"<br>
          2) "What separates a technically correct edit from an edit that actually works?"</li>
        <li><strong>Time Limit:</strong> 48 Hours.</li>
      </ul>`
    }
  ],
  'SW + Researcher': [
    {
      title: 'Official Hiring Assignment',
      channel: 'Email / HTML',
      content: `<h3>SW + Researcher Assignment — Narrative Backbone Test 🧠</h3><br>
      <strong>Your profile stood out from hundreds. Now, let's see how you execute.</strong><br><br>
      <h3>Universal Submission Rules</h3>
      <ul>
        <li><strong>AI Prohibition:</strong> ChatGPT/Claude/GenAI tools are strictly banned for writing/research. Violation results in immediate disqualification.</li>
        <li><strong>Submission Logistics:</strong> Submit everything in one Google Drive folder with <strong>Anyone with the link can view</strong>. No API-based submission portals or external tracking software are to be used.</li>
        <li><strong>Subject Line Protocol:</strong> Email <strong>Contact@thenukkadview.com</strong> using subject <strong>[Full Name] — Assignment</strong>.</li>
        <li><strong>Language:</strong> Hindi-first output; English terminology acceptable when natural.</li>
      </ul><br>
      <h3>Role Tasks (SW + Researcher)</h3>
      <ul>
        <li><strong>Task 1 — 5-Part Research Note:</strong> Submit Topic &amp; Angle, 5+ verifiable facts, source URLs, what mainstream misses, and the real question.</li>
        <li><strong>Task 2 — Script from Research:</strong> Write one original 60–90 word script based exactly on your submitted research note.</li>
        <li><strong>Task 3 — Structure Rule:</strong> Hook → Information Body → Open-Loop Question.</li>
        <li><strong>Time Limit:</strong> 48 Hours.</li>
      </ul>`
    }
  ],
  'Anchor + Researcher + SW': [
    {
      title: 'Official Hiring Assignment',
      channel: 'Email / HTML',
      content: `<h3>Full-Stack Journalist Assignment — Master Round 🚀</h3><br>
      <strong>Your profile stood out from hundreds. Now, let's see how you execute.</strong><br><br>
      <h3>Universal Submission Rules</h3>
      <ul>
        <li><strong>AI Prohibition:</strong> ChatGPT, Claude, and all generative AI support for writing or research is forbidden. Any usage leads to immediate disqualification.</li>
        <li><strong>Submission Logistics:</strong> Upload scripts, notes, and videos to one Google Drive folder with access <strong>Anyone with the link can view</strong>. No API-based submission portals or external tracking software are to be used.</li>
        <li><strong>Subject Line Protocol:</strong> Send the folder link to <strong>Contact@thenukkadview.com</strong> using <strong>[Full Name] — Assignment</strong>.</li>
        <li><strong>Language:</strong> Hindi primary; English phrases allowed where naturally needed.</li>
      </ul><br>
      <h3>Role Tasks (Anchor + SW + Researcher)</h3>
      <ul>
        <li><strong>Task 1 — Research Note:</strong> 5-part note (angle, 5+ facts, source URLs, missed perspective, real question).</li>
        <li><strong>Task 2 — Scripting:</strong> Write two original 60–90 word scripts using your own research outputs.</li>
        <li><strong>Task 3 — On-Camera Delivery:</strong> Record both scripts on smartphone.<br><strong>We are not judging your lighting or camera quality. We are judging your authority, cadence, enunciation, and screen presence (aura).</strong></li>
        <li><strong>Time Limit:</strong> 48 Hours.</li>
      </ul>`
    }
  ],
  'Open/Undecided': [
    {
      title: 'Official Hiring Assignment',
      channel: 'Email / HTML',
      content: `<h3>Open / Undecided Assignment — Raw Talent Menu 🌱</h3><br>
      <strong>Your profile stood out from hundreds. Now, let's see how you execute.</strong><br><br>
      <h3>Universal Submission Rules</h3>
      <ul>
        <li><strong>AI Prohibition:</strong> No ChatGPT/Claude/GenAI support for writing or research. Violation means immediate disqualification.</li>
        <li><strong>Submission Logistics:</strong> Upload all deliverables to one Google Drive folder set to <strong>Anyone with the link can view</strong>. No API-based submission portals or external tracking software are to be used.</li>
        <li><strong>Subject Line Protocol:</strong> Email the link to <strong>Contact@thenukkadview.com</strong> with subject <strong>[Full Name] — Assignment</strong>.</li>
        <li><strong>Language:</strong> Hindi is primary; English vocabulary allowed where it fits naturally.</li>
      </ul><br>
      <h3>Menu Assignment (Choose Any TWO)</h3>
      <ul>
        <li><strong>The YouTube Re-Edit:</strong> Re-edit a 3–10 minute geopolitics/crime public video into a 30–60 second short.</li>
        <li><strong>The Research Note:</strong> Submit the 5-part research note format.</li>
        <li><strong>The 60-Word Script:</strong> Write one 60-word hook-led short script.</li>
        <li><strong>The On-Camera Delivery:</strong> Record your script via smartphone delivery.</li>
      </ul><br>
      <strong>We don't believe in rigid job titles for raw talent. Review the tasks below. Choose the TWO tasks that best showcase your natural strengths and submit them. Show us what you are undeniably good at.</strong>`
    }
  ]
};

Object.entries(assignmentStageTemplates).forEach(([role, templates]) => {
  nukkadViewHRData[role]['Assignment Stage'] = templates;
  nukkadViewHRData[role].Assignment = templates;
});

const rejectionFeedbackTemplates = {
  Anchor: [
    {
      title: 'Standard Rejection (High Volume)',
      channel: 'Email / HTML',
      content: `<p><strong>Thank you for your interest in The NukkadView and our mission to reshape independent news.</strong></p><br>
      <p>We genuinely appreciate the time and intent you invested in applying for the Anchor role.</p><br>
      <p>Due to the exceptionally high volume of competitive applications for our founding team, we are unable to move forward with your candidacy at this time.</p><br>
      <p>We value your interest and encourage you to stay connected for future openings aligned with your profile.</p>`
    },
    {
      title: 'Constructive Feedback Rejection (Post-Assignment)',
      channel: 'Email / HTML',
      content: `<p><strong>Thank you for the effort you put into your Anchor assignment—your [Insert strongest element: topic selection / confidence / script interpretation] stood out positively.</strong></p><br>
      <p>To be transparent, for this cycle we needed stronger consistency in <strong>on-camera composure, enunciation clarity, and authoritative presence and screen presence (aura)</strong> for heavy-format journalism. Example customization: <strong>[Insert specific feedback here: "You have great potential, but for this specific launch phase, we are looking for a slightly more authoritative screen presence and a more conversational, unscripted-feeling delivery when handling heavy geopolitical topics."]</strong></p><br>
      <p>We are sharing this because we see potential. If you refine these exact areas and reapply in our next cycle, we would be glad to review your work again.</p>`
    }
  ],
  'Script Writer': [
    {
      title: 'Standard Rejection (High Volume)',
      channel: 'Email / HTML',
      content: `<p><strong>Thank you for your interest in The NukkadView and our mission to reshape independent news.</strong></p><br>
      <p>We appreciate the time and creative effort you invested in your Script Writer application.</p><br>
      <p>Given the current volume of highly competitive applications for our founding team, we are unable to proceed with your candidacy at this time.</p><br>
      <p>We sincerely value your interest and hope to stay in touch for future opportunities.</p>`
    },
    {
      title: 'Constructive Feedback Rejection (Post-Assignment)',
      channel: 'Email / HTML',
      content: `<p><strong>Thank you for your submission—your [Insert strongest element: language command / topic ambition / closing question] showed real promise.</strong></p><br>
      <p>For this round, we needed a sharper <strong>psychological hook in the first 3 seconds, tighter pacing, and a clearer curiosity gap</strong>. Example customization: <strong>[Insert specific feedback here: "While your grammar and structure were excellent, the script lacked a strong initial hook, such as an In Media Res opening, and struggled to maintain a curiosity gap that would retain a digital audience for the full 60 seconds."]</strong></p><br>
      <p>Please keep building on these strengths. With focused refinement, we strongly encourage you to apply again in our next hiring cycle.</p>`
    }
  ],
  Researcher: [
    {
      title: 'Standard Rejection (High Volume)',
      channel: 'Email / HTML',
      content: `<p><strong>Thank you for your interest in The NukkadView and our mission to reshape independent news.</strong></p><br>
      <p>We appreciate the work you put into applying for the Researcher role.</p><br>
      <p>Because we received a very high number of competitive applications for our founding team, we are unable to move ahead with your candidacy right now.</p><br>
      <p>Thank you again for your time, and we hope to reconnect in a future cycle.</p>`
    },
    {
      title: 'Constructive Feedback Rejection (Post-Assignment)',
      channel: 'Email / HTML',
      content: `<p><strong>Thank you for your assignment—your [Insert strongest element: angle selection / structure / clarity] was a meaningful positive.</strong></p><br>
      <p>For this role, we needed deeper <strong>source verification, stronger cross-checking, and clearer expansion beyond mainstream narratives</strong>. Example customization: <strong>[Insert specific feedback here: "Your baseline data collection was good, but we require a deeper level of epistemic curiosity. The research note relied too heavily on mainstream narratives and missed the underlying, underreported angle we were looking for."]</strong></p><br>
      <p>We appreciate your effort and encourage you to sharpen these research fundamentals and reapply in our next cycle.</p>`
    }
  ],
  'Video Editor': [
    {
      title: 'Standard Rejection (High Volume)',
      channel: 'Email / HTML',
      content: `<p><strong>Thank you for your interest in The NukkadView and our mission to reshape independent news.</strong></p><br>
      <p>We appreciate the time and craft you invested in your Video Editor application.</p><br>
      <p>Due to the high volume of strong applications for our founding team, we are unable to proceed with your candidacy at this time.</p><br>
      <p>Thank you again for your effort—we hope to reconnect for future roles.</p>`
    },
    {
      title: 'Constructive Feedback Rejection (Post-Assignment)',
      channel: 'Email / HTML',
      content: `<p><strong>Thank you for your edit submission—your [Insert strongest element: shot selection / technical control / visual instinct] was genuinely strong.</strong></p><br>
      <p>For this cycle, we required tighter <strong>editorial pacing, cleaner audio mixing, and less transition-dependence in favor of narrative flow</strong>. Example customization: <strong>[Insert specific feedback here: "While your technical software skills are strong, we needed to see a tighter narrative rhythm, better ambient audio balancing in the B-roll sequences, and cuts that were driven by the story rather than just flashy transitions."]</strong></p><br>
      <p>Your foundation is clear. Refine these specific storytelling mechanics and please consider reapplying in the next hiring cycle.</p>`
    }
  ],
  'SW + Researcher': [
    {
      title: 'Standard Rejection (High Volume)',
      channel: 'Email / HTML',
      content: `<p><strong>Thank you for your interest in The NukkadView and our mission to reshape independent news.</strong></p><br>
      <p>We appreciate your effort in applying for this hybrid Script Writer + Researcher role.</p><br>
      <p>Given the volume of highly competitive applications for our founding team, we are unable to move forward with your candidacy at this stage.</p><br>
      <p>We are grateful for your time and encourage you to watch for future openings.</p>`
    },
    {
      title: 'Constructive Feedback Rejection (Post-Assignment)',
      channel: 'Email / HTML',
      content: `<p><strong>Thank you for your submission—your [Insert strongest element: research framing / writing voice / structure] reflected genuine potential.</strong></p><br>
      <p>For this role, we needed stronger integration between <strong>research depth and script execution</strong>: tighter verification, clearer data translation, and sharper hook-to-body flow. Example customization: <strong>[Insert specific feedback here: "Your research note was credible, but the script did not fully convert verified evidence into a high-retention narrative arc in the opening seconds."]</strong></p><br>
      <p>We appreciate the quality of effort. If you refine these hybrid competencies, we encourage you to reapply in our next cycle.</p>`
    }
  ],
  'Anchor + Researcher + SW': [
    {
      title: 'Standard Rejection (High Volume)',
      channel: 'Email / HTML',
      content: `<p><strong>Thank you for your interest in The NukkadView and our mission to reshape independent news.</strong></p><br>
      <p>We truly value the effort you put into applying for our full-stack journalist track.</p><br>
      <p>At this time, due to the large volume of highly competitive applications for our founding team, we cannot proceed with your candidacy.</p><br>
      <p>Thank you again for your interest, and we hope to reconnect in future cycles.</p>`
    },
    {
      title: 'Constructive Feedback Rejection (Post-Assignment)',
      channel: 'Email / HTML',
      content: `<p><strong>Thank you for completing a demanding full-stack assignment—your [Insert strongest element: initiative / multi-skill ambition / narrative angle] was a clear positive.</strong></p><br>
      <p>For this role, we needed higher consistency across all three layers: <strong>research rigor, script retention design, and on-camera authority</strong>. Example customization: <strong>[Insert specific feedback here: "You handled the workload well, but one pillar—[writing/researching/presenting]—fell below the consistency required for our full-stack launch standard."]</strong></p><br>
      <p>That said, your direction is promising. If you sharpen these integrated skills, we strongly encourage you to apply again in our next hiring cycle.</p>`
    }
  ],
  'Open/Undecided': [
    {
      title: 'Standard Rejection (High Volume)',
      channel: 'Email / HTML',
      content: `<p><strong>Thank you for your interest in The NukkadView and our mission to reshape independent news.</strong></p><br>
      <p>We appreciate the time and thought you invested in your application.</p><br>
      <p>Because this cycle received an overwhelming number of competitive submissions for our founding team, we are unable to move forward at this stage.</p><br>
      <p>We truly value your interest and hope to reconnect for future opportunities.</p>`
    },
    {
      title: 'Constructive Feedback Rejection (Post-Assignment)',
      channel: 'Email / HTML',
      content: `<p><strong>Thank you for your assignment submission—your [Insert strongest element: curiosity / adaptability / initiative] came through clearly.</strong></p><br>
      <p>For this track, we needed clearer <strong>specialization signals and a more distinct creative voice</strong>. Example customization: <strong>[Insert specific feedback here: "You possess raw creative talent, but at this stage in our startup's growth, we need candidates who have found their specific niche. We encourage you to hone in on one distinct skill—whether that is editing, writing, or researching—and apply again."]</strong></p><br>
      <p>We appreciate your effort and encourage you to refine your core lane, then apply again in our next hiring cycle.</p>`
    }
  ]
};

Object.entries(rejectionFeedbackTemplates).forEach(([role, templates]) => {
  nukkadViewHRData[role]['Rejection & Feedback'] = templates;
  nukkadViewHRData[role].Rejection = templates;
});

const offerLetterTemplates = {
  Anchor: [
    {
      title: 'Official Internship Offer Letter',
      channel: 'Email / HTML',
      content: `<h1>Official Internship Offer Letter — Anchor Intern</h1><br>
      <h2>Welcome to The NukkadView Founding Team</h2>
      <strong>Dear [Candidate Name],</strong><br>
      We are delighted to offer you the position of <strong>Anchor Intern</strong> at The NukkadView.<br><br>
      <h2>Operational Mechanics</h2>
      <ul>
        <li><strong>Internship Start Date:</strong> [Internship Start Date]</li>
        <li><strong>Internship Duration:</strong> [Internship Duration]</li>
        <li><strong>Reporting Manager:</strong> [Reporting Manager]</li>
        <li><strong>Stipend / Compensation:</strong> [Stipend / Compensation]</li>
      </ul>
      <h2>Workload & Flexibility Clause</h2>
      <strong>We prioritize outcomes over optics. Your highly flexible working hours are calculated strictly around the delivery of 2 to 3 short-form videos and 1 to 2 long-form videos per week.</strong><br><br>
      <h2>Perks & Growth Pathway</h2>
      <ul>
        <li><strong>Formal Byline Credits:</strong> You will receive full editorial credit for all researched, scripted, and edited content, allowing you to build a verifiable, public portfolio.</li>
        <li><strong>Industry Expert Webinars:</strong> Mandatory attendance at exclusive, closed-door webinars hosted by seasoned news industry professionals for direct mentorship.</li>
        <li><strong>The Paid Pathway:</strong> A clear, performance-based trajectory leading to a paid, full-time role at The NukkadView upon successful completion of the program.</li>
        <li><strong>Official Certification:</strong> A formal certificate of completion and a letter of recommendation.</li>
      </ul>
      <h2>Intellectual Property Clause</h2>
      <strong>All work products, innovations, and intellectual property created during this internship shall remain the exclusive property of The NukkadView. However, the intern is granted perpetual, non-exclusive rights to feature these credited works in their professional portfolio.</strong><br><br>
      <h2>Acceptance Protocol</h2>
      Please reply to this email with <strong>"I Accept"</strong> and a signed digital copy by <strong>[Acceptance Deadline]</strong>.`
    },
    {
      title: 'Congratulations Nudge',
      channel: 'DM / Platform Message',
      content: `You absolutely crushed it, [Candidate Name]! 🎉🙌🚀
Your Anchor offer letter is waiting in your inbox—please check spam/promotions too, then confirm acceptance.`
    }
  ],
  'Script Writer': [
    {
      title: 'Official Internship Offer Letter',
      channel: 'Email / HTML',
      content: `<h1>Official Internship Offer Letter — Script Writer Intern</h1><br>
      <h2>Welcome to The NukkadView Founding Team</h2>
      <strong>Dear [Candidate Name],</strong><br>
      We are pleased to offer you the role of <strong>Script Writer Intern</strong> at The NukkadView.<br><br>
      <h2>Operational Mechanics</h2>
      <ul><li><strong>Internship Start Date:</strong> [Internship Start Date]</li><li><strong>Internship Duration:</strong> [Internship Duration]</li><li><strong>Reporting Manager:</strong> [Reporting Manager]</li><li><strong>Stipend / Compensation:</strong> [Stipend / Compensation]</li></ul>
      <h2>Workload & Flexibility Clause</h2>
      <strong>We prioritize outcomes over optics. Your highly flexible working hours are calculated strictly around the delivery of 2 to 3 short-form videos and 1 to 2 long-form videos per week.</strong><br><br>
      <h2>Perks & Growth Pathway</h2>
      <ul>
        <li><strong>Formal Byline Credits:</strong> You will receive full editorial credit for all researched, scripted, and edited content, allowing you to build a verifiable, public portfolio.</li>
        <li><strong>Industry Expert Webinars:</strong> Mandatory attendance at exclusive, closed-door webinars hosted by seasoned news industry professionals for direct mentorship.</li>
        <li><strong>The Paid Pathway:</strong> A clear, performance-based trajectory leading to a paid, full-time role at The NukkadView upon successful completion of the program.</li>
        <li><strong>Official Certification:</strong> A formal certificate of completion and a letter of recommendation.</li>
      </ul>
      <h2>Intellectual Property Clause</h2>
      <strong>All work products, innovations, and intellectual property created during this internship shall remain the exclusive property of The NukkadView. However, the intern is granted perpetual, non-exclusive rights to feature these credited works in their professional portfolio.</strong><br><br>
      <h2>Acceptance Protocol</h2>
      Please reply to this email with <strong>"I Accept"</strong> and a signed digital copy by <strong>[Acceptance Deadline]</strong>.`
    },
    {
      title: 'Congratulations Nudge',
      channel: 'DM / Platform Message',
      content: `Massive congrats, [Candidate Name]—you crushed the assignment! 🎉🚀🙌
Your Script Writer offer letter is in your inbox now; check spam/promotions too and confirm acceptance.`
    }
  ],
  Researcher: [
    {
      title: 'Official Internship Offer Letter',
      channel: 'Email / HTML',
      content: `<h1>Official Internship Offer Letter — Researcher Intern</h1><br>
      <h2>Welcome to The NukkadView Founding Team</h2>
      <strong>Dear [Candidate Name],</strong><br>
      We are excited to offer you the role of <strong>Researcher Intern</strong> at The NukkadView.<br><br>
      <h2>Operational Mechanics</h2>
      <ul><li><strong>Internship Start Date:</strong> [Internship Start Date]</li><li><strong>Internship Duration:</strong> [Internship Duration]</li><li><strong>Reporting Manager:</strong> [Reporting Manager]</li><li><strong>Stipend / Compensation:</strong> [Stipend / Compensation]</li></ul>
      <h2>Workload & Flexibility Clause</h2>
      <strong>We prioritize outcomes over optics. Your highly flexible working hours are calculated strictly around the delivery of 2 to 3 short-form videos and 1 to 2 long-form videos per week.</strong><br><br>
      <h2>Perks & Growth Pathway</h2>
      <ul>
        <li><strong>Formal Byline Credits:</strong> You will receive full editorial credit for all researched, scripted, and edited content, allowing you to build a verifiable, public portfolio.</li>
        <li><strong>Industry Expert Webinars:</strong> Mandatory attendance at exclusive, closed-door webinars hosted by seasoned news industry professionals for direct mentorship.</li>
        <li><strong>The Paid Pathway:</strong> A clear, performance-based trajectory leading to a paid, full-time role at The NukkadView upon successful completion of the program.</li>
        <li><strong>Official Certification:</strong> A formal certificate of completion and a letter of recommendation.</li>
      </ul>
      <h2>Intellectual Property Clause</h2>
      <strong>All work products, innovations, and intellectual property created during this internship shall remain the exclusive property of The NukkadView. However, the intern is granted perpetual, non-exclusive rights to feature these credited works in their professional portfolio.</strong><br><br>
      <h2>Acceptance Protocol</h2>
      Please reply to this email with <strong>"I Accept"</strong> and a signed digital copy by <strong>[Acceptance Deadline]</strong>.`
    },
    {
      title: 'Congratulations Nudge',
      channel: 'DM / Platform Message',
      content: `Phenomenal work, [Candidate Name]—you crushed it! 🙌🎉🚀
Your Researcher offer letter is in your inbox now; please check spam/promotions too and send acceptance.`
    }
  ],
  'Video Editor': [
    {
      title: 'Official Internship Offer Letter',
      channel: 'Email / HTML',
      content: `<h1>Official Internship Offer Letter — Video Editor Intern</h1><br>
      <h2>Welcome to The NukkadView Founding Team</h2>
      <strong>Dear [Candidate Name],</strong><br>
      We are thrilled to offer you the position of <strong>Video Editor Intern</strong> at The NukkadView.<br><br>
      <h2>Operational Mechanics</h2>
      <ul><li><strong>Internship Start Date:</strong> [Internship Start Date]</li><li><strong>Internship Duration:</strong> [Internship Duration]</li><li><strong>Reporting Manager:</strong> [Reporting Manager]</li><li><strong>Stipend / Compensation:</strong> [Stipend / Compensation]</li></ul>
      <h2>Workload & Flexibility Clause</h2>
      <strong>We prioritize outcomes over optics. Your highly flexible working hours are calculated strictly around the delivery of 2 to 3 short-form videos and 1 to 2 long-form videos per week.</strong><br><br>
      <h2>Perks & Growth Pathway</h2>
      <ul>
        <li><strong>Formal Byline Credits:</strong> You will receive full editorial credit for all researched, scripted, and edited content, allowing you to build a verifiable, public portfolio.</li>
        <li><strong>Industry Expert Webinars:</strong> Mandatory attendance at exclusive, closed-door webinars hosted by seasoned news industry professionals for direct mentorship.</li>
        <li><strong>The Paid Pathway:</strong> A clear, performance-based trajectory leading to a paid, full-time role at The NukkadView upon successful completion of the program.</li>
        <li><strong>Official Certification:</strong> A formal certificate of completion and a letter of recommendation.</li>
      </ul>
      <h2>Intellectual Property Clause</h2>
      <strong>All work products, innovations, and intellectual property created during this internship shall remain the exclusive property of The NukkadView. However, the intern is granted perpetual, non-exclusive rights to feature these credited works in their professional portfolio.</strong><br><br>
      <h2>Acceptance Protocol</h2>
      Please reply to this email with <strong>"I Accept"</strong> and a signed digital copy by <strong>[Acceptance Deadline]</strong>.`
    },
    {
      title: 'Congratulations Nudge',
      channel: 'DM / Platform Message',
      content: `Unreal execution, [Candidate Name]—you crushed the assignment! 🎉🙌🚀
Your Video Editor offer letter is waiting in your inbox; check spam/promotions too and confirm acceptance.`
    }
  ],
  'SW + Researcher': [
    {
      title: 'Official Internship Offer Letter',
      channel: 'Email / HTML',
      content: `<h1>Official Internship Offer Letter — SW + Researcher Intern</h1><br>
      <h2>Welcome to The NukkadView Founding Team</h2>
      <strong>Dear [Candidate Name],</strong><br>
      We are pleased to offer you the role of <strong>SW + Researcher Intern</strong> at The NukkadView.<br><br>
      <h2>Operational Mechanics</h2>
      <ul><li><strong>Internship Start Date:</strong> [Internship Start Date]</li><li><strong>Internship Duration:</strong> [Internship Duration]</li><li><strong>Reporting Manager:</strong> [Reporting Manager]</li><li><strong>Stipend / Compensation:</strong> [Stipend / Compensation]</li></ul>
      <h2>Workload & Flexibility Clause</h2>
      <strong>We prioritize outcomes over optics. Your highly flexible working hours are calculated strictly around the delivery of 2 to 3 short-form videos and 1 to 2 long-form videos per week.</strong><br><br>
      <h2>Perks & Growth Pathway</h2>
      <ul>
        <li><strong>Formal Byline Credits:</strong> You will receive full editorial credit for all researched, scripted, and edited content, allowing you to build a verifiable, public portfolio.</li>
        <li><strong>Industry Expert Webinars:</strong> Mandatory attendance at exclusive, closed-door webinars hosted by seasoned news industry professionals for direct mentorship.</li>
        <li><strong>The Paid Pathway:</strong> A clear, performance-based trajectory leading to a paid, full-time role at The NukkadView upon successful completion of the program.</li>
        <li><strong>Official Certification:</strong> A formal certificate of completion and a letter of recommendation.</li>
      </ul>
      <h2>Intellectual Property Clause</h2>
      <strong>All work products, innovations, and intellectual property created during this internship shall remain the exclusive property of The NukkadView. However, the intern is granted perpetual, non-exclusive rights to feature these credited works in their professional portfolio.</strong><br><br>
      <h2>Acceptance Protocol</h2>
      Please reply to this email with <strong>"I Accept"</strong> and a signed digital copy by <strong>[Acceptance Deadline]</strong>.`
    },
    {
      title: 'Congratulations Nudge',
      channel: 'DM / Platform Message',
      content: `Huge congratulations, [Candidate Name]—you smashed this round! 🚀🎉🙌
Your SW + Researcher offer letter is in your inbox now; check spam/promotions too and confirm acceptance.`
    }
  ],
  'Anchor + Researcher + SW': [
    {
      title: 'Official Internship Offer Letter',
      channel: 'Email / HTML',
      content: `<h1>Official Internship Offer Letter — Anchor + Researcher + SW Intern</h1><br>
      <h2>Welcome to The NukkadView Founding Team</h2>
      <strong>Dear [Candidate Name],</strong><br>
      We are excited to welcome you as a <strong>Full-Stack Journalist Intern (Anchor + Researcher + SW)</strong> at The NukkadView.<br><br>
      <h2>Operational Mechanics</h2>
      <ul><li><strong>Internship Start Date:</strong> [Internship Start Date]</li><li><strong>Internship Duration:</strong> [Internship Duration]</li><li><strong>Reporting Manager:</strong> [Reporting Manager]</li><li><strong>Stipend / Compensation:</strong> [Stipend / Compensation]</li></ul>
      <h2>Workload & Flexibility Clause</h2>
      <strong>We prioritize outcomes over optics. Your highly flexible working hours are calculated strictly around the delivery of 2 to 3 short-form videos and 1 to 2 long-form videos per week.</strong><br><br>
      <h2>Perks & Growth Pathway</h2>
      <ul>
        <li><strong>Formal Byline Credits:</strong> You will receive full editorial credit for all researched, scripted, and edited content, allowing you to build a verifiable, public portfolio.</li>
        <li><strong>Industry Expert Webinars:</strong> Mandatory attendance at exclusive, closed-door webinars hosted by seasoned news industry professionals for direct mentorship.</li>
        <li><strong>The Paid Pathway:</strong> A clear, performance-based trajectory leading to a paid, full-time role at The NukkadView upon successful completion of the program.</li>
        <li><strong>Official Certification:</strong> A formal certificate of completion and a letter of recommendation.</li>
      </ul>
      <h2>Intellectual Property Clause</h2>
      <strong>All work products, innovations, and intellectual property created during this internship shall remain the exclusive property of The NukkadView. However, the intern is granted perpetual, non-exclusive rights to feature these credited works in their professional portfolio.</strong><br><br>
      <h2>Acceptance Protocol</h2>
      Please reply to this email with <strong>"I Accept"</strong> and a signed digital copy by <strong>[Acceptance Deadline]</strong>.`
    },
    {
      title: 'Congratulations Nudge',
      channel: 'DM / Platform Message',
      content: `Top-tier performance, [Candidate Name]—you absolutely crushed it! 🙌🚀🎉
Your full-stack offer letter is in your inbox now; check spam/promotions too and send acceptance.`
    }
  ],
  'Open/Undecided': [
    {
      title: 'Official Internship Offer Letter',
      channel: 'Email / HTML',
      content: `<h1>Official Internship Offer Letter — Open / Undecided Track</h1><br>
      <h2>Welcome to The NukkadView Founding Team</h2>
      <strong>Dear [Candidate Name],</strong><br>
      We are delighted to offer you an internship in our <strong>Open / Undecided Talent Track</strong> at The NukkadView.<br><br>
      <h2>Operational Mechanics</h2>
      <ul><li><strong>Internship Start Date:</strong> [Internship Start Date]</li><li><strong>Internship Duration:</strong> [Internship Duration]</li><li><strong>Reporting Manager:</strong> [Reporting Manager]</li><li><strong>Stipend / Compensation:</strong> [Stipend / Compensation]</li></ul>
      <h2>Workload & Flexibility Clause</h2>
      <strong>We prioritize outcomes over optics. Your highly flexible working hours are calculated strictly around the delivery of 2 to 3 short-form videos and 1 to 2 long-form videos per week.</strong><br><br>
      <h2>Perks & Growth Pathway</h2>
      <ul>
        <li><strong>Formal Byline Credits:</strong> You will receive full editorial credit for all researched, scripted, and edited content, allowing you to build a verifiable, public portfolio.</li>
        <li><strong>Industry Expert Webinars:</strong> Mandatory attendance at exclusive, closed-door webinars hosted by seasoned news industry professionals for direct mentorship.</li>
        <li><strong>The Paid Pathway:</strong> A clear, performance-based trajectory leading to a paid, full-time role at The NukkadView upon successful completion of the program.</li>
        <li><strong>Official Certification:</strong> A formal certificate of completion and a letter of recommendation.</li>
      </ul>
      <h2>Intellectual Property Clause</h2>
      <strong>All work products, innovations, and intellectual property created during this internship shall remain the exclusive property of The NukkadView. However, the intern is granted perpetual, non-exclusive rights to feature these credited works in their professional portfolio.</strong><br><br>
      <h2>Acceptance Protocol</h2>
      Please reply to this email with <strong>"I Accept"</strong> and a signed digital copy by <strong>[Acceptance Deadline]</strong>.`
    },
    {
      title: 'Congratulations Nudge',
      channel: 'DM / Platform Message',
      content: `You crushed the assignment and earned this, [Candidate Name]! 🎉🙌🚀
Your offer letter is in your inbox now—please check spam/promotions too and confirm acceptance.`
    }
  ]
};

Object.entries(offerLetterTemplates).forEach(([role, templates]) => {
  nukkadViewHRData[role]['Offer Letter / Congratulations'] = templates;
  nukkadViewHRData[role]['Offer/Onboarding'] = templates;
});

const onboardingComplianceTemplates = roles.reduce((acc, role) => {
  const roleLabel = role === 'Open/Undecided' ? 'Open / Undecided Intern Track' : `${role} Intern`;
  acc[role] = [
    {
      title: 'Official Onboarding & Compliance Checklist',
      channel: 'Email / HTML',
      content: `<h1>Official Onboarding & Compliance Checklist — ${roleLabel}</h1><br>
      <h2>Welcome to Day-0 Compliance</h2>
      <strong>Dear [Candidate Name],</strong><br>
      Congratulations once again. To complete onboarding before Day 1 and ensure statutory readiness under Indian HR/payroll requirements, please share the following digital documents.<br><br>
      <h2>Mandatory Document Checklist</h2>
      <ul>
        <li><strong>Aadhaar Card:</strong> Identity verification and EPF enrollment records.</li>
        <li><strong>PAN Card:</strong> Tax compliance and stipend processing.</li>
        <li><strong>10th Standard Marksheet:</strong> Academic verification.</li>
        <li><strong>12th Standard Marksheet:</strong> Academic verification.</li>
        <li><strong>Most Recent College Marksheet:</strong> Latest education-status validation.</li>
      </ul>
      <h2>Submission Instructions</h2>
      Please upload all files in one Drive folder and email the share link to <strong>Contact@thenukkadview.com</strong> with subject: <strong>[Full Name] — Onboarding Documents</strong>.<br><br>
      <h2>Intellectual Property (IP) & Confidentiality Clause</h2>
      <strong>All intellectual property created during this internship, including scripts, research notes, edited videos, visual concepts, and editorial frameworks, shall remain the exclusive property of The NukkadView.</strong><br><br>
      <strong>The intern agrees to maintain strict confidentiality regarding internal editorial strategy, planning systems, unpublished content pipelines, and operational discussions.</strong><br><br>
      <strong>Employer Brand Rights Protection:</strong> The intern is granted perpetual, non-exclusive rights to showcase credited published work in their personal professional portfolio.
      <br><br>
      Please complete this compliance submission by <strong>[Compliance Deadline]</strong>.`
    }
  ];
  return acc;
}, {});

Object.entries(onboardingComplianceTemplates).forEach(([role, templates]) => {
  nukkadViewHRData[role]['Onboarding & Compliance'] = templates;
});

const whatsappManualTemplates = roles.reduce((acc, role) => {
  acc[role] = [
    {
      title: 'Application Acknowledgment',
      channel: 'WhatsApp (Manual)',
      content: `Hey [Candidate Name], got your application for ${role} and we loved the energy. 😭
Quick heads-up: assignment details are now on your email. Please check inbox + spam once and confirm here.`
    },
    {
      title: 'Assignment Deadline Reminder',
      channel: 'WhatsApp (Manual)',
      content: `Hi [Candidate Name], 12-hour reminder before assignment deadline for ${role}.
If you are stuck with edits/research/scripting, ping me here and I’ll help you unblock fast. 💀`
    },
    {
      title: 'Offer Notification',
      channel: 'WhatsApp (Manual)',
      content: `You did it, [Candidate Name] — selected for ${role}! 🚀😭
Your official offer mail is in inbox now. Please check spam/promotions too and confirm once you send your acceptance.`
    }
  ];
  return acc;
}, {});

Object.entries(whatsappManualTemplates).forEach(([role, templates]) => {
  nukkadViewHRData[role]['WhatsApp Manual Templates'] = templates;
});

let activeRole = roles[0];
let activeStage = stages[0];
let searchTerm = '';

const roleForm = document.getElementById('role-form');
const stageSegment = document.getElementById('stage-segment');
const cardsPane = document.getElementById('cards-pane');
const globalSearch = document.getElementById('global-search');

function initializeRoleControls() {
  const roleMarkup = roles
    .map(
      (role, index) => `
      <div class="role-item">
        <input class="role-input" type="radio" name="hr-role" id="role-${index}" value="${role}" ${index === 0 ? 'checked' : ''} />
        <label class="role-label" for="role-${index}">
          <span>${role}</span>
          <span class="role-count" aria-label="${role} candidate count">0</span>
        </label>
      </div>
    `
    )
    .join('');

  roleForm.innerHTML = roleMarkup;

  roleForm.addEventListener('change', (event) => {
    const target = event.target;
    if (!(target instanceof HTMLInputElement) || target.name !== 'hr-role') return;
    activeRole = target.value;
    renderCards();
  });
}

function initializeStageControls() {
  stageSegment.innerHTML = stages
    .map(
      (stage, index) =>
        `<button class="stage-pill" type="button" data-stage="${stage}" aria-pressed="${index === 0}">${stage}</button>`
    )
    .join('');

  stageSegment.addEventListener('click', (event) => {
    if (!(event.target instanceof Element)) return;
    const button = event.target.closest('.stage-pill');
    if (!button) return;

    activeStage = button.dataset.stage;

    stageSegment.querySelectorAll('.stage-pill').forEach((pill) => {
      pill.setAttribute('aria-pressed', String(pill === button));
    });

    renderCards();
  });
}

async function copyToClipboard(text, buttonEl) {
  const originalLabel = buttonEl.textContent;

  try {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(text);
    } else {
      const fallbackInput = document.createElement('textarea');
      fallbackInput.value = text;
      fallbackInput.setAttribute('readonly', 'true');
      fallbackInput.style.position = 'absolute';
      fallbackInput.style.left = '-9999px';
      document.body.appendChild(fallbackInput);
      fallbackInput.select();
      document.execCommand('copy');
      document.body.removeChild(fallbackInput);
    }

    buttonEl.textContent = 'Copied!';
  } catch {
    buttonEl.textContent = 'Copy Failed';
  }

  buttonEl.disabled = true;
  window.setTimeout(() => {
    buttonEl.textContent = originalLabel;
    buttonEl.disabled = false;
  }, 2000);
}

function createCardElement(message) {
  const card = document.createElement('article');
  card.className = 'message-card glass-panel';

  const channel = document.createElement('span');
  channel.className = 'channel-tag';
  channel.textContent = message.channel || 'Email';

  const title = document.createElement('h2');
  title.className = 'message-title';
  title.textContent = message.title || 'Warm Outreach';

  const isHtmlTemplate = message.channel === 'Email / HTML';
  const content = isHtmlTemplate ? document.createElement('div') : document.createElement('textarea');

  if (isHtmlTemplate) {
    content.className = 'message-content-html';
    content.innerHTML = message.content || '';
  } else {
    content.className = 'message-content';
    content.value = message.content || '';
    content.placeholder = 'Template copy will be populated in Prompt 2.';
    content.readOnly = true;
  }

  const copyBtn = document.createElement('button');
  copyBtn.className = 'copy-btn';
  copyBtn.type = 'button';
  copyBtn.textContent = 'Copy';
  copyBtn.addEventListener('click', async () => {
    await copyToClipboard(message.content || '', copyBtn);
  });

  card.append(channel, title, content, copyBtn);
  return card;
}

function renderCards() {
  cardsPane.innerHTML = '';

  const stagedMessages = nukkadViewHRData[activeRole]?.[activeStage] ?? [];
  const safeMessages = Array.isArray(stagedMessages) ? stagedMessages : [];
  const filteredMessages = safeMessages.filter((message) => {
    if (!searchTerm.trim()) return true;
    const haystack = `${message.title} ${message.channel} ${message.content}`.toLowerCase();
    return haystack.includes(searchTerm.toLowerCase());
  });

  if (!filteredMessages.length) {
    const emptyState = document.createElement('p');
    emptyState.className = 'empty-state glass-panel';
    emptyState.textContent = 'No templates found for this role/stage filter yet.';
    cardsPane.appendChild(emptyState);
    return;
  }

  filteredMessages.forEach((message) => {
    cardsPane.appendChild(createCardElement(message));
  });
}

function initializeSearch() {
  globalSearch.addEventListener('input', (event) => {
    searchTerm = event.target.value || '';
    renderCards();
  });
}

function initializeCommsHub() {
  initializeRoleControls();
  initializeStageControls();
  initializeSearch();
  renderCards();
}

initializeCommsHub();

window.nukkadViewHRData = nukkadViewHRData;

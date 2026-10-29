export interface ChecklistStep {
  id: number;
  title: string;
  detail: string;
  fullText: string;
}

export interface ChecklistStage {
  id: string;
  stageNumber: string;
  title: string;
  lead: string;
  steps: ChecklistStep[];
  isDark?: boolean;
}

export const siteContent = {
  header: {
    brandName: "CLAIM READY",
    brandSubtitle: "A free checklist for anyone about to file a warranty claim.",
    tickerText: "CLAIM READY • A WARRANTY CLAIM IS DECIDED ON RECORDS • KEEP YOURS, AND ASK FOR THEIRS IN WRITING • 15 CHECKLIST STEPS • 4 RECORDS TO KEEP • 1 GOLDEN RULE",
  },
  whoThisIsFor: {
    eyebrow: "AUDIENCE",
    title: "WHO THIS IS FOR",
    text: "Anyone whose phone, TV, laptop or appliance stopped working while it is still under warranty, and who wants the claim to be decided on facts, in writing.",
  },
  theIdeaInOneLine: {
    eyebrow: "CORE PRINCIPLE",
    title: "THE IDEA IN ONE LINE",
    idea: "A warranty claim is decided on records. Keep yours, and ask for theirs in writing.",
  },
  stages: [
    {
      id: "before-anything-goes-wrong",
      stageNumber: "STAGE 01",
      title: "BEFORE ANYTHING GOES WRONG",
      lead: "Four essential records to secure as soon as you purchase or unbox your product.",
      steps: [
        {
          id: 1,
          title: "Keep the invoice.",
          detail: "Save the original bill and a photo or PDF copy. The warranty normally starts on the invoice date.",
          fullText: "1. Keep the invoice. Save the original bill and a photo or PDF copy. The warranty normally starts on the invoice date.",
        },
        {
          id: 2,
          title: "Register the product.",
          detail: "Many brands ask you to register on their website or app; some add extra warranty when you do.",
          fullText: "2. Register the product. Many brands ask you to register on their website or app; some add extra warranty when you do.",
        },
        {
          id: 3,
          title: "Read the warranty card once.",
          detail: "Note how long it lasts, what it covers, and what it excludes.",
          fullText: "3. Read the warranty card once. Note how long it lasts, what it covers, and what it excludes.",
        },
        {
          id: 4,
          title: "Record the condition.",
          detail: "Take a few dated photos of the product once it is installed or unboxed.",
          fullText: "4. Record the condition. Take a few dated photos of the product once it is installed or unboxed.",
        },
      ],
    },
    {
      id: "when-the-fault-appears",
      stageNumber: "STAGE 02",
      title: "WHEN THE FAULT APPEARS",
      lead: "Establishing a timestamped paper trail the moment malfunction occurs.",
      steps: [
        {
          id: 5,
          title: "Record the fault.",
          detail: "Take a clear photo or short video of the problem as soon as you see it, with the date visible if you can.",
          fullText: "5. Record the fault. Take a clear photo or short video of the problem as soon as you see it, with the date visible if you can.",
        },
        {
          id: 6,
          title: "Raise the complaint in writing.",
          detail: "Use email, the brand's website or its app, not only a phone call, so there is a record.",
          fullText: "6. Raise the complaint in writing. Use email, the brand's website or its app, not only a phone call, so there is a record.",
        },
        {
          id: 7,
          title: "Note every reference number.",
          detail: "Write down the complaint or ticket number, the date and the name of anyone you speak to.",
          fullText: "7. Note every reference number. Write down the complaint or ticket number, the date and the name of anyone you speak to.",
        },
      ],
    },
    {
      id: "when-a-technician-visits",
      stageNumber: "STAGE 03",
      title: "WHEN A TECHNICIAN VISITS",
      lead: "Documenting the diagnostic process and physical inspection on-site.",
      steps: [
        {
          id: 8,
          title: "Ask for the job sheet.",
          detail: "Ask the technician for a copy of the visit report or job sheet before they leave.",
          fullText: "8. Ask for the job sheet. Ask the technician for a copy of the visit report or job sheet before they leave.",
        },
        {
          id: 9,
          title: "Ask what was tested.",
          detail: "Ask which test or instrument was used to reach the diagnosis.",
          fullText: "9. Ask what was tested. Ask which test or instrument was used to reach the diagnosis.",
        },
        {
          id: 10,
          title: "Take your own photos.",
          detail: "Photograph the product and anything the technician points to, during the visit.",
          fullText: "10. Take your own photos. Photograph the product and anything the technician points to, during the visit.",
        },
      ],
    },
    {
      id: "if-the-claim-is-refused",
      stageNumber: "STAGE 04",
      title: "IF THE CLAIM IS REFUSED",
      lead: "Calm, evidence-based steps to challenge a rejection and protect your consumer rights.",
      isDark: true,
      steps: [
        {
          id: 11,
          title: "Ask for the reason in writing.",
          detail: "Request a written explanation that names the exact cause and the evidence for it.",
          fullText: "11. Ask for the reason in writing. Request a written explanation that names the exact cause and the evidence for it.",
        },
        {
          id: 12,
          title: "Ask for the technical report.",
          detail: "If the refusal rests on an inspection, ask for that inspection report.",
          fullText: "12. Ask for the technical report. If the refusal rests on an inspection, ask for that inspection report.",
        },
        {
          id: 13,
          title: "Escalate inside the company.",
          detail: "Most brands list a grievance or escalation contact on their website. Write to it, quoting your complaint number.",
          fullText: "13. Escalate inside the company. Most brands list a grievance or escalation contact on their website. Write to it, quoting your complaint number.",
        },
        {
          id: 14,
          title: "Keep it factual.",
          detail: "Stick to dates, documents and photos. Calm, written records are what a consumer forum or regulator will look at.",
          fullText: "14. Keep it factual. Stick to dates, documents and photos. Calm, written records are what a consumer forum or regulator will look at.",
        },
        {
          id: 15,
          title: "Know your consumer helpline.",
          detail: "Most countries run a free consumer helpline or online complaint portal that can guide you on the next step.",
          fullText: "15. Know your consumer helpline. Most countries run a free consumer helpline or online complaint portal that can guide you on the next step.",
        },
      ],
    },
  ],
  keyNumbers: {
    eyebrow: "METRICS",
    title: "KEY NUMBERS FOR THE PAGE",
    lead: "Three clear reference points to remember throughout your claim process.",
    items: [
      {
        value: "15",
        label: "steps in the checklist.",
        isHot: false,
      },
      {
        value: "4",
        label: "records to keep before anything goes wrong.",
        isHot: false,
      },
      {
        value: "1",
        label: "rule: if it is not in writing, it did not happen.",
        isHot: true,
      },
    ],
  },
  callToAction: {
    eyebrow: "TAKE ACTION",
    title: "CALL TO ACTION",
    lead: "Keep these safeguards within reach before you need them, or pass them on to someone who does.",
    actions: [
      {
        text: "Download the checklist and keep it with your invoices.",
        type: "download",
      },
      {
        text: "Share it with a friend who just bought something expensive.",
        type: "share",
      },
    ],
  },
  footerNote: {
    title: "FOOTER NOTE",
    disclaimer:
      "Claim Ready is a free, general guide. It is not legal advice. For your own case, check the warranty terms for your product and your country's consumer rules.",
  },
};

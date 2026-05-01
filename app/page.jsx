"use client";

import { useState } from "react";
import RevealOnScroll from "./components/reveal-on-scroll";

const navItems = [
  { label: "Services", type: "dropdown" },
  { label: "Benefits", href: "#benefits" },
  { label: "Workflow", href: "#workflow" },
  { label: "Pricing", href: "#pricing" },
];

const setupRequestEmail = "zeylun.team@gmail.com";
const setupRequestHref = `mailto:${setupRequestEmail}?subject=${encodeURIComponent("Setup request from website")}&body=${encodeURIComponent(
  `Hi Zeylun team,

I would like to request a setup for my business.

Name:
Business:
Phone / WhatsApp:
Email:
What do you need automated?

Thanks,`
)}`;

const serviceIndustries = [
  {
    title: "Educational Institutes",
    description: "Automate inquiries, admissions follow-ups, course questions, and student communication with one clear workflow.",
    image: "/images/service-education.png",
  },
  {
    title: "Clinics / Healthcare Clinics",
    description: "Handle patient questions, appointment requests, reminders, and front-desk coordination with less manual work.",
    image: "/images/service-healthcare.png",
  },
  {
    title: "Laptop & Computer Dealers",
    description: "Guide product inquiries, stock checks, quotes, and after-sales conversations from one organized inbox.",
    image: "/images/service-computers.png",
  },
];

const cmsStats = [
  ["Conversations", "1,284", "+18%"],
  ["Orders created", "316", "+24%"],
  ["Payments tracked", "$8.9k", "+12%"],
  ["AI resolution", "92%", "+9%"],
];

const serviceCards = [
  {
    title: "One place for every conversation",
    bodyLines: [
      "Keep customer questions and order requests",
      "clearly organized with payment confirmations,",
      "follow-up reminders, and team notes in one",
      "shared workspace",
    ],
    icon: "message",
  },
  {
    title: "Faster response\nat scale",
    bodyLines: [
      "Help your business respond quickly and",
      "consistently during busy sales hours,",
      "after-hours inquiries, and rising message",
      "activity across every channel.",
    ],
    icon: "chart",
  },
  {
    title: "More visibility for your team",
    bodyLines: [
      "See what has been answered, what still needs",
      "review, and which customer orders are moving",
      "forward or slowing down in real time.",
    ],
    icon: "bot",
  },
  {
    title: "Better conversion from social traffic",
    bodyLines: [
      "Convert more social inquiries into completed",
      "actions by guiding customers from first",
      "question to payment with clear, smooth next",
      "steps.",
    ],
    icon: "conversion",
  },
];

const workflowSteps = [
  ["01", "Map", "We study your products, FAQs, order process, payment rules, and customer tone. Every detail is carefully analyzed so we match your brand's unique voice."],
  ["02", "Train", "Your AI model is configured around real workflows instead of generic scripts. We meticulously build custom paths to ensure responses perfectly fit your rules."],
  ["03", "Connect", "Social inboxes, order stages, payment tracking, and CMS views are linked together. This unifies all your communications into one cohesive and powerful system."],
  ["04", "Improve", "After launch, workflows can be tuned from real customer conversations. We constantly refine performance by using real-time data to boost conversion and success."],
];

const pricingPlans = [
  {
    name: "Starter",
    tagline: "For small businesses getting their first automation",
    price: "LKR 28,000",
    label: "Initial setup fee",
    icon: "message",
    sections: [
      {
        title: "AI messaging",
        items: [
          { text: "AI auto-replies to customer messages", ai: true },
          { text: "Smart welcome message flow", ai: true },
        ],
      },
      {
        title: "WhatsApp",
        items: [
          { text: "1 WhatsApp number connected" },
          { text: "Keyword-triggered responses" },
          { text: "Business hours auto-reply" },
        ],
      },
      {
        title: "Leads & contacts",
        items: [
          { text: "Website form lead capture" },
          { text: "Contact storage up to 1,000" },
          { text: "Basic dashboard (messages + leads)" },
        ],
      },
      {
        title: "Support",
        items: [
          { text: "Manual reply fallback" },
          { text: "Email support" },
        ],
      },
    ],
  },
  {
    name: "Growth",
    tagline: "For businesses handling daily inquiries at scale",
    price: "LKR 58,000",
    label: "Initial setup fee",
    featured: true,
    badge: "Most popular",
    icon: "eye",
    sections: [
      {
        title: "AI messaging",
        items: [
          { text: "AI replies across WhatsApp + Instagram", ai: true },
          { text: "AI-powered follow-up sequences", ai: true },
          { text: "Sentiment detection (escalate to human)", ai: true },
        ],
      },
      {
        title: "Channels",
        items: [
          { text: "WhatsApp + Instagram connected" },
          { text: "Unified multi-channel inbox" },
        ],
      },
      {
        title: "Automation",
        items: [
          { text: "Advanced keyword-based flows" },
          { text: "Automated lead follow-up (3-step)" },
          { text: "Conversation history tracking" },
        ],
      },
      {
        title: "CRM",
        items: [
          { text: "Lead tracking & status stages" },
          { text: "Basic CRM dashboard" },
          { text: "Up to 5,000 contacts" },
        ],
      },
      {
        title: "Support",
        items: [{ text: "Chat + email support" }],
      },
    ],
  },
  {
    name: "Pro",
    tagline: "For high-volume businesses, institutes & agencies",
    price: "LKR 105,000",
    label: "Initial setup fee",
    icon: "shield",
    sections: [
      {
        title: "AI messaging",
        items: [
          { text: "Full AI conversation handling", ai: true },
          { text: "AI lead qualification & scoring", ai: true },
          { text: "Smart multi-step follow-up flows", ai: true },
          { text: "AI summary of each conversation", ai: true },
        ],
      },
      {
        title: "Channels",
        items: [
          { text: "WhatsApp + Instagram + Email + Web" },
          { text: "Unified omnichannel inbox" },
        ],
      },
      {
        title: "Automation",
        items: [
          { text: "Smart automation flows (visual builder)" },
          { text: "Custom trigger rules & conditions" },
          { text: "Broadcast campaigns to segments" },
        ],
      },
      {
        title: "CRM",
        items: [
          { text: "Full CRM with custom lead stages" },
          { text: "Team access (multiple agents)" },
          { text: "Unlimited contacts" },
          { text: "Custom integrations on request" },
        ],
      },
      {
        title: "Support",
        items: [{ text: "Priority support + onboarding call" }],
      },
    ],
  },
];

const maintenancePills = [
  "System monitoring",
  "AI prompt updates",
  "Flow improvements",
  "Minor changes",
  "LKR 5,000 - 12,000 / month",
];

function Icon({ name, className = "h-5 w-5" }) {
  const icons = {
    arrow: (
      <>
        <path d="M7 17 17 7" />
        <path d="M9 7h8v8" />
      </>
    ),
    bot: (
      <>
        <rect x="5" y="8" width="14" height="10" rx="3" />
        <path d="M12 4v4M9 13h.01M15 13h.01" />
      </>
    ),
    cart: (
      <>
        <path d="M6 6h15l-2 8H8L6 3H3" />
        <circle cx="9" cy="20" r="1" />
        <circle cx="18" cy="20" r="1" />
      </>
    ),
    chart: (
      <>
        <path d="M4 19V5" />
        <path d="M4 19h16" />
        <path d="M7 15l3-4 3 2 5-8" />
      </>
    ),
    check: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="m8.5 12.5 2.2 2.2 4.8-5" />
      </>
    ),
    chevronDown: <path d="m6 9 6 6 6-6" />,
    close: (
      <>
        <path d="M6 6l12 12" />
        <path d="M18 6 6 18" />
      </>
    ),
    menu: (
      <>
        <path d="M4 7h16" />
        <path d="M4 12h16" />
        <path d="M4 17h16" />
      </>
    ),
    clock: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </>
    ),
    database: (
      <>
        <ellipse cx="12" cy="5" rx="7" ry="3" />
        <path d="M5 5v6c0 1.7 3.1 3 7 3s7-1.3 7-3V5" />
        <path d="M5 11v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" />
      </>
    ),
    dollar: (
      <>
        <path d="M12 3v18" />
        <path d="M16 7.5c0-1.9-1.8-3.5-4-3.5s-4 1.6-4 3.5 1.8 3.1 4 3.5 4 1.1 4 3.5-1.8 3.5-4 3.5-4-1.6-4-3.5" />
      </>
    ),
    message: <path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z" />,
    payment: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="3" />
        <path d="M3 10h18M7 15h4" />
      </>
    ),
    route: (
      <>
        <circle cx="6" cy="6" r="3" />
        <circle cx="18" cy="18" r="3" />
        <path d="M9 6h3a4 4 0 0 1 0 8h-1a4 4 0 0 0 0 8h4" />
      </>
    ),
    shield: (
      <>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="m9 12 2 2 4-5" />
      </>
    ),
    eye: (
      <>
        <path d="M1.5 12s3.8-6 10.5-6 10.5 6 10.5 6-3.8 6-10.5 6S1.5 12 1.5 12Z" />
        <circle cx="12" cy="12" r="2.2" />
      </>
    ),
    spark: (
      <>
        <path d="M12 2l1.8 6.2L20 10l-6.2 1.8L12 18l-1.8-6.2L4 10l6.2-1.8L12 2z" />
        <path d="M19 16l.8 2.2L22 19l-2.2.8L19 22l-.8-2.2L16 19l2.2-.8L19 16z" />
      </>
    ),
    user: (
      <>
        <path d="M20 21a8 8 0 0 0-16 0" />
        <circle cx="12" cy="7" r="4" />
      </>
    ),
  };

  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      {icons[name]}
    </svg>
  );
}

function BenefitIcon({ name, className = "h-5 w-5" }) {
  const icons = {
    chart: (
      <path d="M13.5 2.25a.75.75 0 0 0-1.344-.454l-7.5 12A.75.75 0 0 0 5.25 15h4.5l-1.26 6.304a.75.75 0 0 0 1.365.56l7.5-12A.75.75 0 0 0 16.75 9h-4.5l1.26-6.304a.75.75 0 0 0-.01-.446Z" />
    ),
    bot: (
      <path d="M1.323 11.447C2.811 7.976 6.085 5.25 12 5.25s9.189 2.726 10.677 6.197a1.39 1.39 0 0 1 0 1.106C21.189 16.024 17.915 18.75 12 18.75s-9.189-2.726-10.677-6.197a1.39 1.39 0 0 1 0-1.106ZM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
    ),
    message: (
      <path
        clipRule="evenodd"
        d="M4.804 21.644A.75.75 0 0 1 3.75 20.96v-4.87C2.776 14.66 2.25 13.156 2.25 11.5 2.25 6.805 6.616 3 12 3s9.75 3.805 9.75 8.5S17.384 20 12 20a10.77 10.77 0 0 1-4.364-.892l-2.832 2.536ZM7.5 10.75a.75.75 0 0 0 0 1.5h9a.75.75 0 0 0 0-1.5h-9Z"
        fillRule="evenodd"
      />
    ),
    conversion: (
      <path
        clipRule="evenodd"
        d="M11.7 3.05a.75.75 0 0 1 .6 0l7.5 3.25a.75.75 0 0 1 .45.688V12c0 5.052-3.03 8.33-7.95 9.86a.75.75 0 0 1-.444 0C7.03 20.33 3 17.052 3 12V6.988A.75.75 0 0 1 3.45 6.3l7.5-3.25Zm3.08 6.42a.75.75 0 0 0-1.06-1.06l-2.47 2.47-1.22-1.22a.75.75 0 1 0-1.06 1.06l1.75 1.75a.75.75 0 0 0 1.06 0l3-3Z"
        fillRule="evenodd"
      />
    ),
  };

  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      {icons[name]}
    </svg>
  );
}

function Button({ children, variant = "primary", className = "" }) {
  const styles =
    variant === "secondary"
      ? "bg-white text-[#14231d] ring-1 ring-[#bfdbfe] hover:bg-[#f8fbff]"
      : "bg-[#2563eb] text-white shadow-[0_18px_34px_rgba(37,99,235,0.28)] hover:bg-[#1d4ed8]";

  return (
    <a
      className={`inline-flex items-center justify-center rounded-full px-6 py-3 font-body text-sm font-black tracking-[-0.01em] transition duration-200 active:scale-[0.98] ${styles} ${className}`}
      href="#pricing"
    >
      {children}
    </a>
  );
}

function Header() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const closeMobileNav = () => {
    setMobileNavOpen(false);
    setMobileServicesOpen(false);
  };

  return (
    <header className="absolute left-0 top-0 z-50 w-full px-5 pt-6 sm:px-8">
      <div className="relative mx-auto flex max-w-[1600px] items-center justify-between">
        <a className="flex items-center text-white" href="#">
          <span className="font-display text-lg font-black tracking-[-0.04em]">Zeylun Automate</span>
        </a>
        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center rounded-full border border-white/80 bg-white px-2 py-2 shadow-[0_14px_36px_rgba(3,10,35,0.2)] lg:flex">
          {navItems.map((item, index) => (
            item.type === "dropdown" ? (
              <div className="group relative" key={item.label}>
                <button
                  className={`inline-flex items-center gap-1.5 rounded-full px-5 py-2.5 font-body text-xs font-bold transition ${index === 0
                      ? "bg-[#2563eb] text-white shadow-[inset_0_-2px_0_rgba(0,0,0,0.12)]"
                      : "text-[#3b3f52] hover:bg-[#eff6ff] hover:text-[#1d4ed8]"
                    }`}
                  type="button"
                >
                  {item.label}
                  <Icon name="chevronDown" className="h-3 w-3" />
                </button>
                <div className="pointer-events-none absolute left-1/2 top-full z-50 w-[920px] -translate-x-1/2 pt-4 opacity-0 transition duration-200 group-hover:pointer-events-auto group-hover:opacity-100">
                  <div className="rounded-[1.9rem] border border-white/70 bg-white/95 p-4 shadow-[0_22px_55px_rgba(3,10,35,0.22)] backdrop-blur-xl">
                    <div className="grid grid-cols-3 gap-4">
                      {serviceIndustries.map((service) => (
                        <a
                          className="group/item flex min-h-[320px] flex-col rounded-[1.35rem] border border-[#dbeafe] bg-white p-2.5 text-left shadow-[0_18px_45px_rgba(37,99,235,0.07)] transition hover:border-[#93c5fd] hover:shadow-[0_22px_50px_rgba(37,99,235,0.14)]"
                          href="#pricing"
                          key={service.title}
                        >
                          <div className="overflow-hidden rounded-[1.05rem] bg-[#f8fafc]">
                            <img
                              alt={service.title}
                              className="aspect-[1.2/1] w-full object-cover transition duration-300 group-hover/item:scale-[1.03]"
                              src={service.image}
                            />
                          </div>
                          <div className="flex flex-1 flex-col rounded-[1.05rem] bg-[#f8fafc] p-4">
                            <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-full bg-[#2563eb] text-white shadow-[0_12px_22px_rgba(37,99,235,0.18)]">
                              <Icon name="spark" className="h-4 w-4" />
                            </div>
                            <p className="font-display text-[1.1rem] font-black leading-5 text-[#14231d]">
                              {service.title}
                            </p>
                            <p className="mt-3 text-sm leading-6 text-[#6f667f]">
                              {service.description}
                            </p>
                          </div>
                          <span className="mt-3 inline-flex items-center gap-2 self-start rounded-full border border-[#bfdbfe] bg-white pl-1 pr-3 py-1 font-body text-xs font-semibold text-[#1d4ed8] transition group-hover/item:bg-[#2563eb] group-hover/item:text-white">
                            <span className="grid h-7 w-7 place-items-center rounded-full bg-[#2563eb] text-white transition group-hover/item:bg-white group-hover/item:text-[#2563eb]">
                              <Icon name="arrow" className="h-3 w-3" />
                            </span>
                            Learn more
                          </span>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <a
                className="rounded-full px-5 py-2.5 font-body text-xs font-bold text-[#3b3f52] transition hover:bg-[#eff6ff] hover:text-[#1d4ed8]"
                href={item.href}
                key={item.label}
              >
                {item.label}
              </a>
            )
          ))}
        </nav>
        <div className="hidden items-center gap-1 rounded-full border border-white/85 bg-white px-2 py-2 shadow-[0_14px_36px_rgba(3,10,35,0.18)] lg:flex">
          <a className="rounded-full bg-[#14231d] px-5 py-2.5 font-body text-xs font-bold text-white shadow-[inset_0_-2px_0_rgba(255,255,255,0.16)] transition hover:bg-[#2563eb]" href={setupRequestHref}>
            Request setup
          </a>
        </div>
        <button
          className="flex h-10 w-10 items-center justify-center text-white transition duration-300 hover:text-white/75 lg:hidden"
          onClick={() => setMobileNavOpen(true)}
          type="button"
        >
          <span className="sr-only">Open navigation</span>
          <Icon name="menu" className="h-5 w-5" />
        </button>
        <>
          <button
            aria-label="Close navigation"
            className={`fixed inset-0 z-40 bg-[#0b2a74]/12 backdrop-blur-[2px] transition duration-300 lg:hidden ${mobileNavOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
              }`}
            onClick={closeMobileNav}
            type="button"
          />
          <div
            className={`fixed inset-y-0 right-0 z-50 flex w-[75vw] max-w-[26rem] min-w-[17rem] flex-col border-l border-white/75 bg-white p-4 shadow-[-18px_0_50px_rgba(3,10,35,0.22)] transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] lg:hidden ${mobileNavOpen ? "translate-x-0" : "translate-x-full"
              }`}
          >
            <div className="mb-5 flex items-center justify-between">
              <div>
                <p className="font-display text-lg font-black tracking-[-0.04em] text-[#14231d]">Zeylun Automate</p>
                <p className="text-xs text-[#6f667f]">Navigation</p>
              </div>
              <button
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#dbeafe] bg-[#f8fbff] text-[#1d4ed8] transition hover:bg-white"
                onClick={closeMobileNav}
                type="button"
              >
                <span className="sr-only">Close navigation</span>
                <Icon name="close" className="h-4 w-4" />
              </button>
            </div>

            <div className="flex flex-1 flex-col gap-2 overflow-y-auto pr-1">
              {navItems.map((item) =>
                item.type === "dropdown" ? (
                  <div className="rounded-[1.35rem] border border-[#dbeafe] bg-[#f8fbff] p-2" key={item.label}>
                    <button
                      className="flex w-full items-center justify-between rounded-[1rem] px-3 py-3 text-left font-body text-sm font-bold text-[#14231d] transition hover:bg-white"
                      onClick={() => setMobileServicesOpen((value) => !value)}
                      type="button"
                    >
                      <span>{item.label}</span>
                      <span
                        className={`grid h-8 w-8 place-items-center rounded-full bg-[#2563eb] text-white transition-transform duration-300 ${mobileServicesOpen ? "rotate-180" : ""
                          }`}
                      >
                        <Icon name="chevronDown" className="h-3.5 w-3.5" />
                      </span>
                    </button>
                    <div
                      className={`overflow-hidden transition-[max-height,opacity] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${mobileServicesOpen ? "max-h-[28rem] opacity-100" : "max-h-0 opacity-0"
                        }`}
                    >
                      <div className="mt-1 space-y-2 pb-2">
                        {serviceIndustries.map((service) => (
                          <a
                            className="ml-4 block w-[calc(100%-1rem)] rounded-[1rem] border border-[#dbeafe] bg-white px-4 py-3 text-sm font-semibold text-[#5f6880] transition hover:border-[#93c5fd] hover:text-[#14231d]"
                            href="#pricing"
                            key={service.title}
                            onClick={closeMobileNav}
                          >
                            {service.title}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <a
                    className="flex items-center justify-between rounded-[1.35rem] border border-[#dbeafe] bg-white px-4 py-3 font-body text-sm font-bold text-[#14231d] transition hover:bg-[#f8fbff]"
                    href={item.href}
                    key={item.label}
                    onClick={closeMobileNav}
                  >
                    {item.label}
                    <span className="grid h-8 w-8 place-items-center rounded-full bg-[#eff6ff] text-[#2563eb]">
                      <Icon name="arrow" className="h-3.5 w-3.5" />
                    </span>
                  </a>
                )
              )}
            </div>

            <div className="mt-4 grid gap-2">
              <a
                className="rounded-full bg-[#2563eb] px-4 py-3 text-center font-body text-sm font-bold text-white shadow-[0_16px_30px_rgba(37,99,235,0.24)] transition hover:bg-[#1d4ed8]"
                href={setupRequestHref}
                onClick={closeMobileNav}
              >
                Request setup
              </a>
            </div>
          </div>
        </>
      </div>
    </header>
  );
}

function DashboardStat({ label, value, change }) {
  return (
    <div className="rounded-2xl border border-[#e5edf8] bg-white p-4">
      <div className="mb-4 flex items-center justify-between">
        <p className="text-xs font-semibold text-[#14231d]">{label}</p>
        <span className="flex h-5 w-5 items-center justify-center rounded-full border border-[#dbeafe] text-[10px] text-[#64748b]">i</span>
      </div>
      <div className="flex items-end gap-3">
        <p className="font-display text-2xl font-black tracking-[-0.045em] text-[#14231d]">{value}</p>
        <span className="rounded-md bg-[#eafaf7] px-2 py-1 text-[10px] font-black text-[#0f9f8f]">{change}</span>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className="bg-[#f7fbff] px-0 pb-0 pt-0 sm:px-2 sm:pb-2 sm:pt-2">
      <div className="relative overflow-hidden rounded-none bg-[#11276f] px-0 pb-0 pt-28 sm:rounded-[1.5rem] sm:px-10 sm:pt-40">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_16%,rgba(84,126,255,0.42)_0%,rgba(49,86,214,0.24)_26%,rgba(18,40,114,0)_58%),linear-gradient(180deg,#2749cd_0%,#16358f_42%,#0a184f_100%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(9,20,67,0.28)_0%,rgba(9,20,67,0)_18%,rgba(9,20,67,0.12)_50%,rgba(9,20,67,0)_82%,rgba(9,20,67,0.28)_100%)]" />
          <div className="hero-glass-pane absolute inset-0 overflow-hidden" />
          <div className="absolute bottom-[-11.5rem] left-[-8rem] h-[23rem] w-[25rem] rotate-[33deg] rounded-[3rem] bg-white/7 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]" />
          <div className="absolute bottom-[-11.5rem] right-[-8rem] h-[23rem] w-[25rem] -rotate-[33deg] rounded-[3rem] bg-white/7 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]" />
        </div>
        <div className="relative z-10">


          {/* Hero text content */}
          <RevealOnScroll className="mx-auto mb-10 max-w-5xl px-4 text-center sm:mb-12 sm:px-0">
            <h1 className="mx-auto mb-5 max-w-5xl pt-4 font-display text-5xl font-extrabold leading-[1.02] tracking-[-0.06em] text-white sm:mb-6 sm:pt-6 sm:text-6xl lg:text-[84px]">
              Run your social business from one intelligent CMS.
            </h1>
            <p className="mx-auto mb-7 max-w-2xl text-base leading-7 text-white/60 sm:mb-8 sm:leading-8 sm:text-lg">
              We configure a trained AI model to answer questions, create orders, guide payments, and collect feedback across the channels your customers already use.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                className="group inline-flex items-center gap-1.5 rounded-full bg-white px-1.5 py-1.5 font-body text-sm font-black tracking-[-0.01em] text-[#0b2a74] shadow-[0_18px_34px_rgba(0,0,0,0.25)] transition duration-200 hover:bg-[#f0f4ff] active:scale-[0.98]"
                href={setupRequestHref}
              >
                <span className="pl-5">Request setup</span>
                <span className="grid h-10 w-10 place-items-center rounded-full bg-[#2563eb] text-white transition-colors group-hover:bg-[#1d4ed8]">
                  <Icon name="arrow" className="h-3.5 w-3.5" />
                </span>
              </a>
              <a
                className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/5 px-1.5 py-1.5 font-body text-sm font-black text-white backdrop-blur-sm transition duration-200 hover:bg-white/10 active:scale-[0.98]"
                href="#pricing"
              >
                <span className="grid h-10 w-10 place-items-center rounded-full bg-white text-[#0b2a74]">
                  <Icon name="dollar" className="h-3.5 w-3.5" />
                </span>
                <span className="pr-5">Pricing plans</span>
              </a>
            </div>
          </RevealOnScroll>

          {/* Dashboard image */}
          <RevealOnScroll className="relative ml-auto w-[78vw] max-w-none max-h-[750px] overflow-hidden pl-0 pr-0 sm:mx-auto sm:mr-auto sm:max-w-[1380px] sm:overflow-visible sm:px-4" delay={140}>
            <div className="relative z-10 overflow-hidden rounded-tl-[1.35rem] rounded-tr-none border border-white/10 bg-white p-3 sm:rounded-t-2xl sm:border-white/15 sm:bg-white/10 sm:p-5 sm:backdrop-blur-md">
              <img
                alt="Zeylun Automate CMS Dashboard"
                className="w-[128%] max-w-none origin-top-left rounded-tl-[1rem] rounded-tr-none object-cover object-top sm:w-full sm:rounded-t-xl"
                src="/images/Zyelun-automate-CMS-dashboard.png"
              />
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}

function Intro() {
  return (
    <section className="px-5 py-12 sm:px-10 sm:py-20" id="workflow">
      <RevealOnScroll className="mx-auto grid max-w-[1180px] gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div className="order-2 relative min-h-[620px] overflow-visible bg-transparent p-0 lg:order-1">
          <div className="absolute bottom-10 top-10 left-1/2 w-[82%] -translate-x-1/2 bg-[radial-gradient(#1d4ed8_2px,transparent_2px)] bg-[size:24px_24px] opacity-25 [mask-image:linear-gradient(90deg,transparent_0%,black_12%,black_88%,transparent_100%),linear-gradient(180deg,transparent_0%,black_10%,black_90%,transparent_100%)] [mask-composite:intersect] [-webkit-mask-image:linear-gradient(90deg,transparent_0%,black_12%,black_88%,transparent_100%),linear-gradient(180deg,transparent_0%,black_10%,black_90%,transparent_100%)] [-webkit-mask-composite:source-in]" />
          <div className="relative mx-auto grid max-w-[420px] grid-cols-2 gap-3 sm:gap-4">
            {[
              [
                "Question",
                "Understands customer intent, checks approved knowledge, and answers product, delivery, and policy questions.",
                "mr-2 h-[280px]",
              ],
              [
                "Order",
                "Collects product choices, contact details, delivery notes, and order preferences before creating records.",
                "ml-2 mt-[116px] h-[280px]",
              ],
              [
                "Payment",
                "Guides payment steps, records confirmation details, and keeps receipts ready for team review.",
                "mr-2 -mt-[96px] h-[280px]",
              ],
              [
                "Feedback",
                "Tags reviews, complaints, follow-ups, and service signals so teams can improve.",
                "ml-2 mt-5 h-[280px]",
              ],
            ].map(([title, body, position], index) => (
              <RevealOnScroll delay={index * 90} key={title}>
                <div className={`relative overflow-hidden rounded-[1.75rem] bg-[linear-gradient(335deg,#0b2a74_0%,#123a95_42%,#1d4ed8_100%)] p-5 text-white shadow-[0_18px_45px_rgba(37,99,235,0.16)] ${position}`}>
                  <div className="relative z-10">
                    <p className="mb-2 font-display text-lg font-black tracking-[-0.03em] text-white/75">{title}</p>
                    <p className="text-sm leading-6 text-white/75">{body}</p>
                  </div>
                  <div className="pointer-events-none absolute bottom-[-1.65rem] right-3 font-display text-[7rem] font-black leading-none tracking-[-0.08em] text-white/40">
                    {index + 1}
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>

        <div className="order-1 border-0 bg-transparent p-0 text-center shadow-none lg:order-2 lg:text-left">
          <h2 className="mb-6 max-w-xl font-display text-4xl font-black tracking-[-0.05em] text-[#14231d] sm:text-5xl">
            Every customer conversation becomes a trackable business action.
          </h2>
          <p className="mb-8 max-w-2xl text-base leading-8 text-[#6f667f] sm:hidden">
            Zeylun Automate turns customer chats into clear, trackable actions so your team can manage questions, orders, payments, and follow-ups in one flow.
          </p>
          <p className="mb-8 hidden max-w-2xl text-base leading-8 text-[#6f667f] sm:block sm:text-lg">
            Zeylun Automate is a hands-on automation system built around the real way your team operates. We map how customers ask questions, how orders are confirmed, how payments are verified, and how follow-ups are handled after the sale, then configure the AI model and CMS around those exact workflows. That means every conversation can move through a clear operational path instead of living as scattered messages across different social channels.
          </p>
          <div className="flex flex-wrap justify-center gap-x-7 gap-y-3 lg:justify-start">
            {["Always-on support", "Custom workflow", "CMS visibility"].map((item) => (
              <div className="inline-flex items-center gap-2" key={item}>
                <Icon name="check" className="h-5 w-5 text-[#2563eb]" />
                <p className="font-display text-sm font-black text-[#14231d]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}

function Services() {
  return (
    <section className="px-5 py-12 sm:px-10 sm:py-20" id="benefits">
      <div className="mx-auto max-w-[1180px]">
        <RevealOnScroll className="mx-auto mb-12 flex max-w-3xl flex-col items-center text-center">
          <h2 className="mb-5 font-display text-4xl font-black tracking-[-0.05em] text-[#14231d] sm:text-5xl">
            Benefits that make social selling easier to manage.
          </h2>
          <p className="text-base leading-8 text-[#6f667f] sm:text-lg">
            Zeylun Automate gives businesses a clearer, faster, and more reliable way to handle customer communication across social channels while keeping the entire workflow visible to the team.
          </p>
        </RevealOnScroll>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {serviceCards.map((item, index) => (
            <RevealOnScroll delay={index * 90} key={item.title}>
              <article className="flex min-h-[210px] flex-col rounded-[1.35rem] border border-[#dbeafe] bg-white p-2.5 text-[#14231d] shadow-[0_18px_45px_rgba(37,99,235,0.07)]">
                <div className={`rounded-[1.1rem] p-5 ${index === 2 ? 'bg-[linear-gradient(335deg,#0b2a74_0%,#123a95_42%,#1d4ed8_100%)]' : 'bg-[#f8fafc]'}`}>
                  <div className={`mb-4 flex h-8 w-8 items-center justify-center rounded-full text-white ${index === 2 ? 'bg-white/20' : 'bg-[#2563eb]'}`}>
                    <BenefitIcon name={item.icon} className="h-4 w-4" />
                  </div>
                  <h3 className={`mb-3 whitespace-pre-line font-display text-[1.35rem] font-black tracking-[-0.04em] ${index === 2 ? 'text-white/75' : 'text-[#14231d]'}`}>{item.title}</h3>
                  <p className={`w-full text-sm leading-6 min-h-[120px] ${index === 2 ? 'text-white/75' : 'text-[#6f667f]'}`}>{item.bodyLines.join(" ")}</p>
                </div>
                <a
                  className="group mt-3 inline-flex cursor-pointer items-center gap-2 self-start rounded-full border border-[#bfdbfe] bg-white pl-1 pr-2 py-1 font-body text-xs font-semibold text-[#1d4ed8] transition-colors duration-300 ease-out hover:bg-[#2563eb] hover:text-white"
                  href="#pricing"
                >
                  <span className="grid aspect-square h-6 shrink-0 place-items-center rounded-full bg-[#2563eb] text-white transition-colors duration-300 ease-out group-hover:bg-white group-hover:text-[#2563eb]">
                    <Icon name="arrow" className="h-3 w-[0.95rem]" />
                  </span>
                  Learn more
                </a>
              </article>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

function Channels() {
  return (
    <section className="px-5 py-12 sm:px-10 sm:py-20" id="channels">
      <RevealOnScroll className="mx-auto max-w-[1180px] px-2 py-4 sm:px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-5 font-display text-4xl font-black tracking-[-0.05em] text-[#14231d] sm:text-5xl">
            Integrates effortlessly with the tools you already use
          </h2>
          <p className="mx-auto max-w-2xl text-base leading-8 text-[#6f667f] sm:text-lg">
            Connect Zeylun Automate with the social platforms your team already relies on for customer conversations, payments, and follow-ups.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-[980px] sm:mt-14">
          <img
            alt="Zeylun Automate channels integration graphic"
            className="mx-auto w-full max-w-[340px] sm:max-w-[980px]"
            src="/channels.png"
          />
        </div>
      </RevealOnScroll>
    </section>
  );
}

function Workflow() {
  return (
    <section className="px-5 py-12 sm:px-10 sm:py-20" id="workflow">
      <div className="mx-auto max-w-[1180px] rounded-[2.75rem] bg-[#14231d] p-6 text-white shadow-[0_28px_80px_rgba(20,35,29,0.18)] lg:p-10">
        <div className="mb-12 grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <h2 className="font-display text-4xl font-black tracking-[-0.05em] sm:text-5xl">
            Configured first. Automated second.
          </h2>
          <p className="text-base leading-8 text-white/62 sm:text-lg">
            Because every client has different products, rules, channels, and payment flows, we set up Zeylun Automate around your real operating environment.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-4">
          {workflowSteps.map(([step, title, body]) => (
            <article className="rounded-[2rem] bg-white/8 p-6 ring-1 ring-white/10" key={step}>
              <p className="mb-8 font-display text-5xl font-black tracking-[-0.06em] text-[#bfdbfe]">{step}</p>
              <h3 className="mb-4 font-display text-xl font-black tracking-[-0.03em]">{title}</h3>
              <p className="text-sm leading-7 text-white/62 min-h-[140px]">{body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section className="px-5 py-12 sm:px-10 sm:py-20" id="pricing">
      <div className="mx-auto max-w-[1180px]">
        <h2 className="sr-only">
          Zeylun pricing plans: Starter, Growth, and Pro with features and monthly support
        </h2>

        <RevealOnScroll className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="mb-6 font-display text-4xl font-black tracking-[-0.05em] text-[#14231d] sm:text-5xl">
            Pricing plans built around your stage and message volume.
          </h2>
          <p className="mx-auto max-w-3xl text-base leading-8 text-[#6f667f] sm:text-lg">
            Follow the same operational approach at different depths, from first-time automation setup to full multi-channel AI handling with CRM and ongoing support.
          </p>
        </RevealOnScroll>

        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          {pricingPlans.map((plan, index) => (
            <RevealOnScroll delay={index * 90} key={plan.name}>
              <article
                className={`flex h-full flex-col rounded-[1.85rem] bg-white p-3 shadow-[0_18px_45px_rgba(37,99,235,0.07)] ring-1 ${plan.featured
                    ? "ring-[#dbeafe] shadow-[0_24px_55px_rgba(37,99,235,0.16)]"
                    : "ring-[#dbeafe]"
                  }`}
              >
                <div
                  className={`mb-2.5 flex flex-1 flex-col rounded-[1.35rem] p-3 ${plan.featured
                      ? "bg-[linear-gradient(180deg,#2850c9_0%,#1d3f9c_48%,#173789_100%)]"
                      : "bg-[#f8fafc]"
                    }`}
                >
                  <div className="mb-2.5 flex items-start justify-between gap-2.5">
                    <div
                      className={`flex h-11 w-11 items-center justify-center rounded-full text-white shadow-[0_12px_22px_rgba(37,99,235,0.24)] ${plan.featured ? "bg-[#4a6fe2]" : "bg-[#2563eb]"
                        }`}
                    >
                      <Icon name={plan.icon} className="h-4 w-4" />
                    </div>
                    {plan.badge ? (
                      <span
                        className={`inline-flex rounded-full px-3 py-1 font-body text-[11px] font-black ${plan.featured ? "bg-white/14 text-white/75" : "bg-[#eff6ff] text-[#1d4ed8]"
                          }`}
                      >
                        {plan.badge}
                      </span>
                    ) : null}
                  </div>

                  <div className="mb-2.5">
                    <h3
                      className={`max-w-[13rem] font-display text-[1.95rem] font-black leading-[1.08] tracking-[-0.05em] ${plan.featured ? "text-white/75" : "text-[#14231d]"
                        }`}
                    >
                      {plan.name}
                    </h3>
                    <p className={`mt-1.5 text-sm leading-6 ${plan.featured ? "text-white/75" : "text-[#6f667f]"}`}>
                      {plan.tagline}
                    </p>
                  </div>

                  <p
                    className={`font-display text-[1.8rem] font-black tracking-[-0.04em] ${plan.featured ? "text-white/75" : "text-[#14231d]"
                      }`}
                  >
                    {plan.price}
                  </p>
                  <p
                    className={`mt-1 text-xs font-semibold uppercase tracking-[0.08em] ${plan.featured ? "text-white/75" : "text-[#8a94a6]"
                      }`}
                  >
                    {plan.label}
                  </p>

                  <div className="mt-2.5 flex flex-1 flex-col gap-3">
                    {plan.sections.map((section) => (
                      <div key={section.title}>
                        <p
                          className={`mb-2 text-[10px] font-black uppercase tracking-[0.12em] ${plan.featured ? "text-white/75" : "text-[#8a94a6]"
                            }`}
                        >
                          {section.title}
                        </p>
                        <div className="space-y-2.5">
                          {section.items.map((item) => (
                            <div
                              className={`flex items-start gap-2.5 text-[13px] leading-5 ${plan.featured ? "text-white/75" : "text-[#6f667f]"
                                }`}
                              key={item.text}
                            >
                              <span
                                className={`mt-[7px] h-[5px] w-[5px] shrink-0 rounded-full ${item.ai
                                    ? plan.featured
                                      ? "bg-[#93c5fd]"
                                      : "bg-[#378add]"
                                    : plan.featured
                                      ? "bg-white/45"
                                      : "bg-[#94a3b8]"
                                  }`}
                              />
                              <span>
                                {item.text}
                                {item.ai ? (
                                  <span
                                    className={`ml-2 inline-flex rounded-md px-1.5 py-[1px] text-[10px] font-black uppercase tracking-[0.06em] ${plan.featured
                                        ? "bg-white/14 text-white/75"
                                        : "bg-[#eff6ff] text-[#1d4ed8]"
                                      }`}
                                  >
                                    AI
                                  </span>
                                ) : null}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-auto pt-0">
                  <a
                    className="group inline-flex items-center gap-2 self-start rounded-full border border-[#bfdbfe] bg-white pl-1 pr-3 py-1 font-body text-xs font-semibold text-[#1d4ed8] transition-colors duration-300 ease-out hover:bg-[#2563eb] hover:text-white"
                    href="#pricing"
                  >
                    <span className="grid aspect-square h-7 shrink-0 place-items-center rounded-full bg-[#2563eb] text-white transition-colors duration-300 ease-out group-hover:bg-white group-hover:text-[#2563eb]">
                      <Icon name="arrow" className="h-3 w-[0.95rem]" />
                    </span>
                    Learn more
                  </a>
                </div>
              </article>
            </RevealOnScroll>
          ))}
        </div>

        <RevealOnScroll className="mt-4 flex flex-col gap-4 rounded-[1.85rem] border border-[#dbeafe] bg-[#f8fbff] px-5 py-5 shadow-[0_18px_45px_rgba(37,99,235,0.07)] lg:flex-row lg:items-center lg:justify-between" delay={120}>
          <div>
            <p className="font-display text-lg font-black tracking-[-0.03em] text-[#14231d]">
              System Operation & Optimization (Required)
            </p>
            <p className="mt-1 text-sm leading-6 text-[#6f667f]">
              Keeps your system running smoothly after setup with prompt tuning, small updates, ongoing monitoring, and continuous AI-powered improvements.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {maintenancePills.map((item) => (
              <span
                className="rounded-full border border-[#dbeafe] bg-white px-3 py-1.5 font-body text-[11px] font-semibold text-[#6f667f]"
                key={item}
              >
                {item}
              </span>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="px-5 pb-10 sm:px-10">
      <div className="mx-auto flex max-w-[1180px] flex-col justify-between gap-5 border-t border-[#bfdbfe] pt-8 text-sm text-[#6f667f] md:flex-row">
        <p className="font-display font-black tracking-[-0.03em] text-[#14231d]">Zeylun Automate</p>
        <p>&copy; 2026 Zeylun Automate. Custom social automation for modern businesses.</p>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Intro />
        <Services />
        <Channels />
        <Pricing />
      </main>
      <Footer />
    </>
  );
}

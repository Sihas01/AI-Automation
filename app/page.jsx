const navItems = ["Services", "Channels", "Workflow", "Pricing"];

const channelLogos = [
  ["WhatsApp", "/social-logos/whatsapp.svg"],
  ["Instagram", "/social-logos/instagram.svg"],
  ["Messenger", "/social-logos/messenger.svg"],
  ["Facebook", "/social-logos/facebook.svg"],
  ["TikTok", "/social-logos/tiktok.svg"],
  ["Telegram", "/social-logos/telegram.svg"],
];

const cmsStats = [
  ["Conversations", "1,284", "+18%"],
  ["Orders created", "316", "+24%"],
  ["Payments tracked", "$8.9k", "+12%"],
  ["AI resolution", "92%", "+9%"],
];

const serviceCards = [
  {
    title: "Customer support",
    body: "Answers product, delivery, policy, and business questions with your approved tone.",
    icon: "message",
  },
  {
    title: "Order handling",
    body: "Collects product choices, quantities, addresses, and customer details from chat.",
    icon: "cart",
  },
  {
    title: "Payment flow",
    body: "Guides customers through payment steps and records confirmations for review.",
    icon: "payment",
  },
  {
    title: "Feedback loop",
    body: "Captures reviews, complaints, and follow-up requests so nothing gets buried.",
    icon: "spark",
  },
];

const workflowSteps = [
  ["01", "Map", "We study your products, FAQs, order process, payment rules, and customer tone."],
  ["02", "Train", "Your AI model is configured around real workflows instead of generic scripts."],
  ["03", "Connect", "Social inboxes, order stages, payment tracking, and CMS views are linked together."],
  ["04", "Improve", "After launch, workflows can be tuned from real customer conversations."],
];

const pricingRows = [
  ["Starting price", "$50+"],
  ["Pricing depends on", "Business scale and workflow complexity"],
  ["Included", "Trained AI model and CMS workflow setup"],
  ["Configured for", "Support, orders, payments, and feedback"],
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

function Button({ children, variant = "primary", className = "" }) {
  const styles =
    variant === "secondary"
      ? "bg-white text-[#14231d] ring-1 ring-[#bfdbfe] hover:bg-[#f8fbff]"
      : "bg-[#14231d] text-white shadow-[0_18px_34px_rgba(20,35,29,0.18)] hover:bg-[#243a31]";

  return (
    <a
      className={`inline-flex items-center justify-center rounded-full px-6 py-3 font-display text-sm font-black tracking-[-0.01em] transition duration-200 active:scale-[0.98] ${styles} ${className}`}
      href="#pricing"
    >
      {children}
    </a>
  );
}

function Header() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full px-4 py-4">
      <div className="mx-auto flex max-w-[1220px] items-center justify-between rounded-full border border-white/80 bg-white/70 px-5 py-3 shadow-[0_18px_60px_rgba(37,99,235,0.08)] backdrop-blur-2xl">
        <a className="font-display text-lg font-black tracking-[-0.05em] text-[#14231d]" href="#">
          SociaFlow AI
        </a>
        <nav className="hidden items-center gap-7 font-display text-sm font-extrabold text-[#686079] md:flex">
          {navItems.map((item) => (
            <a className="transition hover:text-[#14231d]" href={`#${item.toLowerCase()}`} key={item}>
              {item}
            </a>
          ))}
        </nav>
        <Button className="px-5 py-2.5 text-xs">Request setup</Button>
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

function CmsDashboard() {
  return (
    <div className="relative mx-auto h-[430px] w-full max-w-[1180px] sm:h-[560px] lg:h-[650px]">
      <div className="absolute left-8 top-8 h-56 w-56 rounded-full bg-[#93c5fd]/34 blur-3xl" />
      <div className="absolute bottom-4 right-8 h-60 w-60 rounded-full bg-[#7dd3fc]/24 blur-3xl" />

      <div className="absolute left-1/2 top-6 w-[92%] max-w-[920px] -translate-x-1/2 sm:top-10">
        <div className="rounded-[1.7rem] border border-[#cbd5e1] bg-gradient-to-br from-[#f8fafc] via-[#e2e8f0] to-[#cbd5e1] p-2.5 shadow-[0_38px_90px_rgba(15,23,42,0.22)]">
          <div className="overflow-hidden rounded-[1.28rem] border border-[#94a3b8]/50 bg-white">
            <img
              alt="SociaFlow CMS dashboard open on a laptop"
              className="aspect-[16/10] h-auto w-full object-cover"
              src="/images/Zyelun-automate-CMS-dashboard.png"
            />
          </div>
        </div>
        <div className="mx-auto h-4 w-[86%] rounded-b-[1.4rem] bg-gradient-to-b from-[#e2e8f0] to-[#94a3b8] shadow-[0_18px_35px_rgba(15,23,42,0.18)]">
          <div className="mx-auto h-1.5 w-24 rounded-b-xl bg-[#cbd5e1]" />
        </div>
        <div className="mx-auto h-2 w-[64%] rounded-b-full bg-[#64748b]/40 blur-[1px]" />
      </div>

      <div className="absolute bottom-7 left-0 hidden w-[34%] max-w-[330px] rotate-[-4deg] sm:block">
        <div className="rounded-[2rem] border border-[#cbd5e1] bg-gradient-to-br from-[#f8fafc] via-[#e2e8f0] to-[#cbd5e1] p-2.5 shadow-[0_30px_70px_rgba(15,23,42,0.2)]">
          <div className="mb-1 flex justify-center">
            <span className="h-1.5 w-10 rounded-full bg-[#94a3b8]" />
          </div>
          <div className="overflow-hidden rounded-[1.45rem] border border-[#94a3b8]/40 bg-white">
            <img
              alt="SociaFlow CMS dashboard open on a tablet"
              className="aspect-[4/5] h-auto w-full object-cover object-left-top"
              src="/images/Zyelun-automate-CMS-dashboard.png"
            />
          </div>
          <div className="mx-auto mt-1.5 h-2.5 w-2.5 rounded-full border border-[#94a3b8]/60 bg-[#e2e8f0]" />
        </div>
      </div>

      <div className="absolute bottom-0 right-2 w-[24%] min-w-[118px] max-w-[210px] rotate-[5deg]">
        <div className="rounded-[2.2rem] border border-[#cbd5e1] bg-gradient-to-br from-[#f8fafc] via-[#e2e8f0] to-[#cbd5e1] p-1.5 shadow-[0_28px_70px_rgba(15,23,42,0.24)] sm:p-2">
          <div className="overflow-hidden rounded-[1.75rem] border border-[#94a3b8]/40 bg-white">
            <div className="absolute left-1/2 top-3 z-10 h-4 w-14 -translate-x-1/2 rounded-full bg-[#0f172a]" />
            <img
              alt="SociaFlow CMS dashboard open on a mobile phone"
              className="aspect-[9/16] h-auto w-full object-cover object-left-top"
              src="/images/Zyelun-automate-CMS-dashboard.png"
            />
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="relative mx-auto w-full max-w-[1180px]">
      <div className="absolute -left-16 top-10 h-56 w-56 rounded-full bg-[#93c5fd]/30 blur-3xl" />
      <div className="absolute -right-10 bottom-8 h-56 w-56 rounded-full bg-[#7dd3fc]/24 blur-3xl" />
      <div className="relative rounded-[1.9rem] border border-white/80 bg-white/70 p-3 shadow-[0_34px_90px_rgba(37,99,235,0.14)] backdrop-blur">
        <div className="overflow-hidden rounded-[1.55rem] border border-[#dbeafe] bg-[#f8fbff]">
          <div className="flex h-11 items-center gap-3 border-b border-[#e5edf8] bg-[#eef4fb] px-4">
            <div className="flex gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-[#c8d1dc]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#c8d1dc]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#c8d1dc]" />
            </div>
            <div className="hidden items-center gap-3 text-[#64748b] sm:flex">
              <span className="text-lg leading-none">‹</span>
              <span className="text-lg leading-none">›</span>
            </div>
            <div className="mx-auto hidden h-7 w-[42%] items-center justify-center rounded-md border border-[#dbeafe] bg-white text-[10px] font-bold text-[#64748b] md:flex">
              sociaflow.cms
            </div>
            <div className="ml-auto flex items-center gap-3 text-xs font-bold text-[#64748b]">
              <span>+</span>
              <span>Export</span>
            </div>
          </div>

          <div className="grid min-h-[610px] lg:grid-cols-[235px_1fr]">
            <aside className="hidden border-r border-[#e5edf8] bg-white lg:flex lg:flex-col">
              <div className="flex h-16 items-center gap-3 border-b border-[#e5edf8] px-5">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#2563eb] text-white">
                  <Icon name="bot" className="h-4 w-4" />
                </div>
                <p className="font-display text-lg font-black tracking-[-0.05em] text-[#14231d]">SociaFlow</p>
              </div>
              <div className="flex-1 px-4 py-5">
                <p className="mb-3 px-2 text-[10px] font-black uppercase tracking-[0.18em] text-[#94a3b8]">General</p>
                {["Dashboard", "Payments", "Customers", "Messages"].map((item, index) => (
                  <div
                    className={`mb-1 flex items-center justify-between rounded-xl px-3 py-2.5 text-xs font-black ${
                      index === 0 ? "bg-[#eff6ff] text-[#14231d]" : "text-[#475569]"
                    }`}
                    key={item}
                  >
                    <span>{item}</span>
                    {item === "Messages" ? <span className="rounded-md bg-white px-2 py-0.5 text-[10px]">8</span> : null}
                  </div>
                ))}
                <p className="mb-3 mt-6 px-2 text-[10px] font-black uppercase tracking-[0.18em] text-[#94a3b8]">Tools</p>
                {["Products", "Invoices", "Analytics", "Automation"].map((item) => (
                  <div className="mb-1 flex items-center justify-between rounded-xl px-3 py-2.5 text-xs font-black text-[#475569]" key={item}>
                    <span>{item}</span>
                    {item === "Automation" ? <span className="rounded-md bg-[#eff6ff] px-2 py-0.5 text-[10px] text-[#1d4ed8]">AI</span> : null}
                  </div>
                ))}
                <p className="mb-3 mt-6 px-2 text-[10px] font-black uppercase tracking-[0.18em] text-[#94a3b8]">Support</p>
                {["Settings", "Security", "Help"].map((item) => (
                  <div className="mb-1 rounded-xl px-3 py-2.5 text-xs font-black text-[#475569]" key={item}>
                    {item}
                  </div>
                ))}
              </div>
              <div className="m-4 rounded-2xl border border-[#e5edf8] bg-[#f8fbff] p-4">
                <div className="mb-4 flex items-center gap-3">
                  <div className="h-9 w-9 rounded-xl bg-[#22c7c8]" />
                  <div>
                    <p className="text-xs font-black text-[#14231d]">Team</p>
                    <p className="text-xs text-[#64748b]">Operations</p>
                  </div>
                </div>
                <button className="w-full rounded-xl border border-[#dbeafe] bg-white py-2 text-xs font-black text-[#14231d]">
                  Upgrade plan
                </button>
              </div>
            </aside>

            <main className="min-w-0">
              <div className="flex h-16 items-center gap-4 border-b border-[#e5edf8] bg-white px-5">
                <div className="flex h-8 min-w-0 flex-1 items-center rounded-xl border border-[#e5edf8] bg-white px-3 text-xs font-semibold text-[#64748b] sm:max-w-[260px]">
                  Search workflows
                </div>
                <div className="ml-auto flex items-center gap-3 text-xs font-black text-[#64748b]">
                  <span className="hidden sm:inline">Notifications</span>
                  <div className="h-8 w-8 rounded-full bg-[#e2e8f0]" />
                  <div className="hidden sm:block">
                    <p className="text-[#14231d]">UrbanThreads</p>
                    <p className="font-semibold text-[#94a3b8]">Business</p>
                  </div>
                </div>
              </div>

              <div className="p-5">
                <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <h3 className="font-display text-2xl font-black tracking-[-0.05em] text-[#14231d]">Dashboard</h3>
                  <div className="flex flex-wrap gap-2">
                    {["Oct 18 - Nov 18", "Monthly", "Filter", "Export"].map((item) => (
                      <span className="rounded-lg border border-[#e5edf8] bg-white px-3 py-2 text-[11px] font-bold text-[#64748b]" key={item}>
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-4 grid gap-4 md:grid-cols-3">
                  {cmsStats.slice(0, 3).map(([label, value, change]) => (
                    <DashboardStat change={change} key={label} label={label} value={value} />
                  ))}
                </div>

                <div className="grid gap-4 xl:grid-cols-[1.25fr_0.85fr]">
                  <section className="rounded-2xl border border-[#e5edf8] bg-white p-5">
                    <div className="mb-5 flex items-center justify-between">
                      <div>
                        <p className="mb-2 text-xs font-semibold text-[#14231d]">Sales overview</p>
                        <p className="font-display text-2xl font-black tracking-[-0.05em] text-[#14231d]">$9,257.51</p>
                        <p className="mt-1 text-xs text-[#64748b]"><span className="font-black text-[#0f9f8f]">15.8%</span> + $143.50 increased</p>
                      </div>
                      <div className="flex gap-2">
                        <span className="rounded-lg border border-[#e5edf8] px-3 py-2 text-[11px] font-bold text-[#64748b]">Filter</span>
                        <span className="rounded-lg border border-[#e5edf8] px-3 py-2 text-[11px] font-bold text-[#64748b]">Sort</span>
                      </div>
                    </div>
                    <div className="relative flex h-52 items-end justify-between gap-6 overflow-hidden px-5 pb-8">
                      <svg className="absolute inset-x-10 bottom-16 top-16 h-28 w-[80%] text-[#dbeafe]" fill="none" preserveAspectRatio="none" viewBox="0 0 480 130">
                        <path d="M20 52 C130 42 170 82 240 84 C318 86 360 38 460 28" stroke="currentColor" strokeWidth="12" />
                        <path d="M20 82 C130 78 170 100 240 100 C320 98 360 64 460 56" stroke="currentColor" strokeWidth="12" />
                        <path d="M20 112 C128 108 172 118 240 116 C320 114 360 96 460 88" stroke="currentColor" strokeWidth="12" />
                      </svg>
                      {chartGroups.map(([amount, bars], groupIndex) => (
                        <div className="relative z-10 flex w-28 flex-col items-center" key={amount}>
                          <p className="mb-3 text-xs font-black text-[#14231d]">{amount}</p>
                          <div className="flex h-32 w-full flex-col justify-end gap-1.5">
                            {bars.map((height, index) => (
                              <span
                                className={`rounded-md ${index % 2 === 0 ? "bg-[#2563eb]" : "bg-[#22c7c8]"}`}
                                key={`${amount}-${height}`}
                                style={{ height: `${height / 4}px` }}
                              />
                            ))}
                          </div>
                          <p className="mt-3 text-xs text-[#64748b]">{["Oct", "Nov", "Dec"][groupIndex]}</p>
                        </div>
                      ))}
                    </div>
                    <div className="flex justify-center gap-4 text-[10px] font-bold text-[#64748b]">
                      {["Support", "Orders", "Payments", "Feedback"].map((item, index) => (
                        <span className="inline-flex items-center gap-1" key={item}>
                          <span className={`h-2 w-2 rounded-full ${index % 2 === 0 ? "bg-[#2563eb]" : "bg-[#22c7c8]"}`} />
                          {item}
                        </span>
                      ))}
                    </div>
                  </section>

                  <section className="rounded-2xl border border-[#e5edf8] bg-white p-5">
                    <div className="mb-6 flex items-center justify-between">
                      <div>
                        <p className="mb-2 text-xs font-semibold text-[#14231d]">Total customers</p>
                        <p className="font-display text-2xl font-black tracking-[-0.05em] text-[#14231d]">24,473</p>
                        <p className="mt-1 text-xs text-[#64748b]"><span className="font-black text-[#0f9f8f]">8.3%</span> +749 increased</p>
                      </div>
                      <span className="rounded-lg border border-[#e5edf8] px-3 py-2 text-[11px] font-bold text-[#64748b]">Weekly</span>
                    </div>
                    <div className="flex h-44 items-end justify-between gap-3">
                      {[28, 48, 124, 26, 70, 52, 88].map((height, index) => (
                        <div className="flex flex-1 flex-col items-center gap-2" key={index}>
                          <div
                            className={`w-full rounded-lg ${index === 2 ? "bg-gradient-to-t from-[#1d4ed8] to-[#60a5fa]" : "bg-[#edf2f8]"}`}
                            style={{ height }}
                          />
                          <span className="text-[10px] text-[#64748b]">{["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][index]}</span>
                        </div>
                      ))}
                    </div>
                  </section>
                </div>

                <div className="mt-4 grid gap-4 xl:grid-cols-[0.8fr_1.2fr]">
                  <section className="rounded-2xl border border-[#e5edf8] bg-white p-5">
                    <div className="mb-5 flex items-center justify-between">
                      <p className="text-xs font-semibold text-[#14231d]">Sales distribution</p>
                      <span className="rounded-lg border border-[#e5edf8] px-3 py-2 text-[11px] font-bold text-[#64748b]">Monthly</span>
                    </div>
                    <div className="grid grid-cols-3 gap-3 text-xs">
                      {["Website", "Mobile App", "Other"].map((item, index) => (
                        <div key={item}>
                          <p className="mb-2 text-[#64748b]">{item}</p>
                          <p className="font-display text-base font-black text-[#14231d]">{["$374.82", "$241.60", "$213.42"][index]}</p>
                        </div>
                      ))}
                    </div>
                    <div className="mx-auto mt-6 h-28 w-28 rounded-full bg-[conic-gradient(#2563eb_0_38%,#22c7c8_38%_72%,#e5edf8_72%_100%)] p-5">
                      <div className="h-full w-full rounded-full bg-white" />
                    </div>
                  </section>

                  <section className="rounded-2xl border border-[#e5edf8] bg-white p-5">
                    <div className="mb-5 flex items-center justify-between">
                      <p className="text-xs font-semibold text-[#14231d]">List of integrations</p>
                      <span className="text-xs font-black text-[#1d4ed8]">See all</span>
                    </div>
                    <div className="space-y-4">
                      {[
                        ["Stripe", "Payment", "40%", "$650.00"],
                        ["Shopify", "Store", "80%", "$720.50"],
                        ["WhatsApp", "Channel", "62%", "$432.25"],
                      ].map(([app, type, rate, profit]) => (
                        <div className="grid grid-cols-[1fr_0.8fr_0.8fr_0.8fr] items-center gap-3 text-xs" key={app}>
                          <p className="font-black text-[#14231d]">{app}</p>
                          <p className="text-[#64748b]">{type}</p>
                          <div className="h-1.5 rounded-full bg-[#e5edf8]">
                            <div className="h-1.5 rounded-full bg-[#2563eb]" style={{ width: rate }} />
                          </div>
                          <p className="text-right font-bold text-[#64748b]">{profit}</p>
                        </div>
                      ))}
                    </div>
                  </section>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#f7fbff] px-5 pb-20 pt-36 sm:px-10 sm:pt-40">
      <div className="absolute left-[-8rem] top-[-6rem] h-[26rem] w-[26rem] rounded-full bg-[#93c5fd]/35 blur-3xl" />
      <div className="absolute right-[-8rem] top-24 h-[28rem] w-[28rem] rounded-full bg-[#d577aa]/22 blur-3xl" />
      <div className="relative mx-auto max-w-[1440px]">
        <div className="mx-auto mb-12 max-w-5xl text-center">
          <h1 className="mx-auto mb-6 max-w-5xl font-display text-5xl font-black leading-[1.02] tracking-[-0.06em] text-[#14231d] sm:text-6xl lg:text-[84px]">
            Run your social business from one intelligent CMS.
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-base leading-8 text-[#625a73] sm:text-lg">
            We configure a trained AI model to answer questions, create orders, guide payments, and collect feedback across the channels your customers already use.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button>Request setup</Button>
            <a
              className="inline-flex items-center gap-2 font-display text-sm font-black text-[#14231d] underline underline-offset-4"
              href="#pricing"
            >
              See pricing
              <Icon name="arrow" className="h-4 w-4" />
            </a>
          </div>
        </div>
        <CmsDashboard />
      </div>
    </section>
  );
}

function Intro() {
  return (
    <section className="px-5 py-20 sm:px-10">
      <div className="mx-auto grid max-w-[1180px] gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div className="relative min-h-[620px] overflow-visible bg-transparent p-0">
          <div className="absolute -bottom-10 -top-10 left-1/2 w-[82%] -translate-x-1/2 bg-[linear-gradient(#dbeafe_1px,transparent_1px),linear-gradient(90deg,#dbeafe_1px,transparent_1px)] bg-[size:32px_32px] opacity-45 [mask-image:linear-gradient(90deg,transparent_0%,black_12%,black_88%,transparent_100%),linear-gradient(180deg,transparent_0%,black_10%,black_90%,transparent_100%)] [mask-composite:intersect] [-webkit-mask-image:linear-gradient(90deg,transparent_0%,black_12%,black_88%,transparent_100%),linear-gradient(180deg,transparent_0%,black_10%,black_90%,transparent_100%)] [-webkit-mask-composite:source-in]" />
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
              <div className={`rounded-[1.75rem] bg-[#dbeafe] p-5 text-[#14231d] shadow-[0_18px_45px_rgba(37,99,235,0.08)] ${position}`} key={title}>
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white font-display text-sm font-black text-[#2563eb] shadow-[0_10px_24px_rgba(37,99,235,0.12)]">
                    {index + 1}
                  </div>
                  <p className="font-display text-lg font-black tracking-[-0.03em]">{title}</p>
                </div>
                <p className="text-sm leading-7 text-[#475569]">{body}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="border-0 bg-transparent p-0 shadow-none">
          <h2 className="mb-6 max-w-xl font-display text-4xl font-black tracking-[-0.05em] text-[#14231d] sm:text-5xl">
            Every customer conversation becomes a trackable business action.
          </h2>
          <p className="mb-8 max-w-2xl text-base leading-8 text-[#6f667f] sm:text-lg">
            SociaFlow is not a self-serve chatbot template. We configure the model, CMS views, and workflow rules around how your business sells, supports, collects payments, and follows up with customers.
          </p>
          <div className="flex flex-wrap gap-x-7 gap-y-3">
            {["Always-on support", "Custom workflow", "CMS visibility"].map((item) => (
              <div className="inline-flex items-center gap-2" key={item}>
                <Icon name="check" className="h-5 w-5 text-[#2563eb]" />
                <p className="font-display text-sm font-black text-[#14231d]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="px-5 py-20 sm:px-10" id="services">
      <div className="mx-auto max-w-[1180px]">
        <div className="mb-12 grid gap-6 lg:grid-cols-[0.8fr_1fr] lg:items-end">
          <h2 className="font-display text-4xl font-black tracking-[-0.05em] text-[#14231d] sm:text-5xl">
            Built for the work that happens inside social DMs.
          </h2>
          <p className="text-base leading-8 text-[#6f667f] sm:text-lg">
            The dashboard gives your team a clear operational layer while the trained AI handles routine steps in the background.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {serviceCards.map((item) => (
            <article
              className="group rounded-[2rem] bg-white p-6 shadow-[0_18px_45px_rgba(37,99,235,0.07)] transition duration-200 hover:-translate-y-1"
              key={item.title}
            >
              <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#eff6ff] text-[#1d4ed8] transition group-hover:bg-[#2563eb] group-hover:text-white">
                <Icon name={item.icon} />
              </div>
              <h3 className="mb-3 font-display text-xl font-black tracking-[-0.03em] text-[#14231d]">{item.title}</h3>
              <p className="text-sm leading-7 text-[#6f667f]">{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Channels() {
  return (
    <section className="px-5 py-20 sm:px-10" id="channels">
      <div className="mx-auto grid max-w-[1180px] gap-10 rounded-[2.5rem] bg-white p-6 shadow-[0_24px_70px_rgba(37,99,235,0.08)] lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:p-10">
        <div>
          <h2 className="mb-5 max-w-xl font-display text-4xl font-black tracking-[-0.05em] text-[#14231d] sm:text-5xl">
            Connect the channels your customers already trust.
          </h2>
          <p className="max-w-2xl text-base leading-8 text-[#6f667f] sm:text-lg">
            We support the social platforms businesses use for customer questions, order requests, receipts, and follow-ups.
          </p>
        </div>
        <div className="relative min-h-[360px] overflow-hidden rounded-[2rem] bg-[#f8fbff]">
          <svg className="absolute inset-0 h-full w-full text-[#2563eb]/35" fill="none" viewBox="0 0 560 360">
            <path d="M280 180 C184 112 118 90 68 70" stroke="currentColor" strokeDasharray="7 9" strokeWidth="2" />
            <path d="M280 180 C280 92 280 56 280 34" stroke="currentColor" strokeDasharray="7 9" strokeWidth="2" />
            <path d="M280 180 C376 112 444 90 492 70" stroke="currentColor" strokeDasharray="7 9" strokeWidth="2" />
            <path d="M280 180 C184 226 124 256 78 292" stroke="currentColor" strokeDasharray="7 9" strokeWidth="2" />
            <path d="M280 180 C280 238 280 292 280 326" stroke="currentColor" strokeDasharray="7 9" strokeWidth="2" />
            <path d="M280 180 C376 226 438 256 492 292" stroke="currentColor" strokeDasharray="7 9" strokeWidth="2" />
          </svg>
          <div className="absolute left-1/2 top-1/2 z-10 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#14231d] font-display text-xl font-black text-white shadow-[0_22px_50px_rgba(20,35,29,0.2)]">
            AI
          </div>
          {[
            "left-[8%] top-[14%] rotate-[-10deg]",
            "left-1/2 top-[5%] -translate-x-1/2 rotate-[6deg]",
            "right-[8%] top-[14%] rotate-[11deg]",
            "left-[10%] bottom-[13%] rotate-[7deg]",
            "left-1/2 bottom-[5%] -translate-x-1/2 rotate-[-8deg]",
            "right-[10%] bottom-[13%] rotate-[8deg]",
          ].map((position, index) => (
            <div
              className={`absolute z-20 flex h-20 w-20 items-center justify-center rounded-[1.6rem] bg-white shadow-[0_18px_40px_rgba(37,99,235,0.12)] ${position}`}
              key={channelLogos[index][0]}
            >
              <img alt={`${channelLogos[index][0]} logo`} className="h-11 w-11" src={channelLogos[index][1]} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Workflow() {
  return (
    <section className="px-5 py-20 sm:px-10" id="workflow">
      <div className="mx-auto max-w-[1180px] rounded-[2.75rem] bg-[#14231d] p-6 text-white shadow-[0_28px_80px_rgba(20,35,29,0.18)] lg:p-10">
        <div className="mb-12 grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <h2 className="font-display text-4xl font-black tracking-[-0.05em] sm:text-5xl">
            Configured first. Automated second.
          </h2>
          <p className="text-base leading-8 text-white/62 sm:text-lg">
            Because every client has different products, rules, channels, and payment flows, we set up SociaFlow around your real operating environment.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-4">
          {workflowSteps.map(([step, title, body]) => (
            <article className="rounded-[2rem] bg-white/8 p-6 ring-1 ring-white/10" key={step}>
              <p className="mb-8 font-display text-5xl font-black tracking-[-0.06em] text-[#bfdbfe]">{step}</p>
              <h3 className="mb-4 font-display text-xl font-black tracking-[-0.03em]">{title}</h3>
              <p className="text-sm leading-7 text-white/62">{body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section className="px-5 py-20 sm:px-10" id="pricing">
      <div className="mx-auto grid max-w-[1180px] gap-10 overflow-hidden rounded-[2.75rem] bg-[#f8fbff] p-6 shadow-[0_24px_70px_rgba(37,99,235,0.08)] lg:grid-cols-[1.05fr_0.95fr] lg:p-10">
        <div>
          <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 font-display text-xs font-black text-[#1d4ed8]">
            <Icon name="clock" className="h-4 w-4" />
            Custom implementation
          </div>
          <h2 className="mb-6 max-w-xl font-display text-4xl font-black tracking-[-0.05em] text-[#14231d] sm:text-5xl">
            Starting at $50, then scaled to your workflow.
          </h2>
          <p className="mb-8 max-w-2xl text-base leading-8 text-[#6f667f] sm:text-lg">
            Clients pay for setup and configuration before launch. Final pricing varies based on business scale, workflow complexity, number of channels, and automation depth.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button>Request a quote</Button>
            <Button variant="secondary">Discuss workflow</Button>
          </div>
        </div>
        <div className="rounded-[2rem] bg-white p-5 shadow-[0_14px_34px_rgba(37,99,235,0.07)]">
          {pricingRows.map(([label, value]) => (
            <div className="flex items-start justify-between gap-4 border-b border-[#dbeafe] py-4 last:border-b-0" key={label}>
              <span className="text-sm font-bold text-[#6f667f]">{label}</span>
              <span className="max-w-[14rem] text-right font-display text-sm font-black text-[#14231d]">{value}</span>
            </div>
          ))}
          <div className="mt-5 rounded-[1.5rem] bg-[#14231d] p-5 text-white">
            <p className="mb-2 font-display text-lg font-black tracking-[-0.03em]">What you get</p>
            <p className="text-sm leading-7 text-white/62">
              A trained AI model, connected social workflows, CMS visibility, and a setup shaped around your business environment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="px-5 pb-10 sm:px-10">
      <div className="mx-auto flex max-w-[1180px] flex-col justify-between gap-5 border-t border-[#bfdbfe] pt-8 text-sm text-[#6f667f] md:flex-row">
        <p className="font-display font-black tracking-[-0.03em] text-[#14231d]">SociaFlow AI</p>
        <p>&copy; 2026 SociaFlow AI. Custom social automation for modern businesses.</p>
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
        <Workflow />
        <Pricing />
      </main>
      <Footer />
    </>
  );
}

import InteractiveChatPreview from "../components/ChatPreview";

const conversations = [
  {
    id: "product",
    name: "Maya Chen",
    phone: "+1 234 567 8900",
    channel: "Instagram",
    status: "Buying a product",
    preview: "Can I get the jacket in black?",
    time: "10:30 AM",
    unread: 3,
    messages: [
      { from: "customer", text: "Hi, do you have the premium jacket in black color?", time: "10:30 AM" },
      {
        from: "ai",
        text: "Yes, we have it in black. It is $89.99 and available in S, M, L, and XL.",
        time: "10:31 AM",
        tag: "Product match",
        card: {
          title: "Premium Jacket",
          subtitle: "$89.99",
          meta: "Sizes: S, M, L, XL - Color: Black",
          action: "View Details",
        },
      },
      { from: "customer", text: "Great. I want to place an order.", time: "10:32 AM" },
      {
        from: "ai",
        text: "Sure. I can create the order now. May I have your delivery address and contact number?",
        time: "10:32 AM",
        tag: "Order flow",
      },
      { from: "customer", text: "742 Pine Street, Austin. Same number as this chat.", time: "10:34 AM" },
      {
        from: "ai",
        text: "Order #ORD1234 is ready. I sent a secure payment link and will confirm once the receipt is verified.",
        time: "10:35 AM",
        tag: "Payment link",
      },
    ],
  },
  {
    id: "tracking",
    name: "Owen Brooks",
    phone: "+44 7700 900077",
    channel: "WhatsApp",
    status: "Tracking order",
    preview: "Where is order #SF8821?",
    time: "9:15 AM",
    unread: 1,
    messages: [
      { from: "customer", text: "Can you tell me where order #SF8821 is right now?", time: "9:15 AM" },
      {
        from: "ai",
        text: "I found it. Your order left the regional hub this morning and is scheduled for delivery tomorrow before 6 PM.",
        time: "9:16 AM",
        tag: "Order lookup",
      },
      { from: "customer", text: "Can I change the delivery window to afternoon?", time: "9:17 AM" },
      {
        from: "ai",
        text: "Yes. I updated the carrier preference to afternoon delivery and sent the new tracking link.",
        time: "9:18 AM",
        tag: "Carrier update",
      },
      { from: "customer", text: "Perfect, thank you.", time: "9:19 AM" },
    ],
  },
  {
    id: "refund",
    name: "Nora Patel",
    phone: "+1 555 123 4567",
    channel: "Messenger",
    status: "Refund request",
    preview: "I need to return an item.",
    time: "8:45 AM",
    unread: 2,
    messages: [
      { from: "customer", text: "I received the sneakers yesterday, but the size is wrong. Can I refund them?", time: "8:45 AM" },
      {
        from: "ai",
        text: "I can help with that. The order is within the 30-day return window, so it is eligible for a refund or exchange.",
        time: "8:46 AM",
        tag: "Policy check",
      },
      { from: "customer", text: "Refund please. What do you need from me?", time: "8:47 AM" },
      {
        from: "ai",
        text: "Please upload a photo of the item and packaging. I will generate a return label once the photo is received.",
        time: "8:48 AM",
        tag: "Return label",
      },
      { from: "customer", text: "Uploaded.", time: "8:51 AM" },
      {
        from: "ai",
        text: "Thanks. The refund request is approved. Your prepaid return label is ready, and the refund will be issued after carrier scan.",
        time: "8:52 AM",
        tag: "Refund approved",
      },
    ],
  },
  {
    id: "discount",
    name: "Ava Wilson",
    phone: "+61 400 123 456",
    channel: "Instagram",
    status: "Discount validation",
    preview: "Is the discount still valid?",
    time: "Yesterday",
    unread: 0,
    messages: [
      { from: "customer", text: "Is the spring discount still valid for the starter bundle?", time: "Yesterday" },
      {
        from: "ai",
        text: "Yes. SPRING15 is valid until Friday and applies to the starter bundle.",
        time: "Yesterday",
        tag: "Promo check",
      },
      { from: "customer", text: "Can you apply it if I order here?", time: "Yesterday" },
      {
        from: "ai",
        text: "Absolutely. I applied the discount and generated a checkout link with the reduced total.",
        time: "Yesterday",
        tag: "Checkout link",
      },
    ],
  },
  {
    id: "support",
    name: "Lukas Meyer",
    phone: "+49 151 2345678",
    channel: "WhatsApp",
    status: "Account support",
    preview: "How do I reset my password?",
    time: "Yesterday",
    unread: 0,
    messages: [
      { from: "customer", text: "How do I reset my password? I cannot access the dashboard.", time: "Yesterday" },
      {
        from: "ai",
        text: "I can send a secure reset link to the email on your account. Please confirm the last two digits of your phone number.",
        time: "Yesterday",
        tag: "Identity check",
      },
      { from: "customer", text: "78", time: "Yesterday" },
      {
        from: "ai",
        text: "Verified. I sent the reset link and added a note for the support team in case you need help after signing in.",
        time: "Yesterday",
        tag: "Resolved",
      },
    ],
  },
  {
    id: "stock",
    name: "Sofia Rossi",
    phone: "+39 347 000 1122",
    channel: "Messenger",
    status: "Inventory check",
    preview: "Do you restock the oak desk?",
    time: "Mon",
    unread: 1,
    messages: [
      { from: "customer", text: "Do you restock the minimalist oak desk soon?", time: "Mon" },
      {
        from: "ai",
        text: "Yes. The next restock is expected on May 3. I can add you to the waitlist and message you when it arrives.",
        time: "Mon",
        tag: "Inventory sync",
      },
      { from: "customer", text: "Please add me.", time: "Mon" },
      {
        from: "ai",
        text: "Done. You are on the priority waitlist, and I saved your preferred finish as oak.",
        time: "Mon",
        tag: "Waitlist added",
      },
    ],
  },
  {
    id: "lead",
    name: "Priya Shah",
    phone: "+91 98765 43210",
    channel: "Instagram",
    status: "Lead capture",
    preview: "Can someone demo this?",
    time: "Sun",
    unread: 4,
    messages: [
      { from: "customer", text: "We run a small store. Can someone demo social automation for us?", time: "Sun" },
      {
        from: "ai",
        text: "Yes. I can book a 20-minute demo with a product specialist. What time zone should I use?",
        time: "Sun",
        tag: "Lead qualification",
      },
      { from: "customer", text: "IST. Tomorrow afternoon works.", time: "Sun" },
      {
        from: "ai",
        text: "I found openings at 2:30 PM and 4:00 PM IST. Which slot should I reserve?",
        time: "Sun",
        tag: "Calendar sync",
      },
    ],
  },
  {
    id: "payment",
    name: "Ethan Cole",
    phone: "+1 415 010 2020",
    channel: "WhatsApp",
    status: "Receipt verification",
    preview: "I sent the payment receipt.",
    time: "Sat",
    unread: 2,
    messages: [
      { from: "customer", text: "I sent the payment receipt. Can you confirm the order?", time: "Sat" },
      {
        from: "ai",
        text: "I received the screenshot and matched it to order #SF7710. I am verifying the transaction reference now.",
        time: "Sat",
        tag: "Receipt scan",
      },
      {
        from: "ai",
        text: "Payment verified. Your order is confirmed and the warehouse has been notified.",
        time: "Sat",
        tag: "Order confirmed",
      },
    ],
  },
];

const benefits = [
  {
    title: "Fully Automate",
    body: "Reclaim hundreds of hours weekly by automating routine inquiries, order taking, and FAQ responses with zero human intervention.",
    icon: "bolt",
    tone: "bg-primary-container/50 text-primary",
  },
  {
    title: "Improve Experience",
    body: "Deliver instant, accurate, and personalized responses that delight customers and significantly boost satisfaction scores.",
    icon: "heart",
    tone: "bg-secondary-container/70 text-secondary",
  },
  {
    title: "24/7 Availability",
    body: "Never miss a lead. Your AI agent works around the clock, capturing sales and supporting customers globally, regardless of time zones.",
    icon: "clock",
    tone: "bg-tertiary-container/60 text-tertiary",
  },
];

const workflow = [
  {
    step: "1",
    title: "Customer Inquiry",
    icon: "user",
    body: '"Hi, do you have the minimalist desk in oak?"',
    active: false,
  },
  {
    step: "2",
    title: "AI Answers",
    icon: "bot",
    body: '"Yes, it is in stock! It features solid oak and hidden cable management. Would you like to order?"',
    active: true,
  },
  {
    step: "3",
    title: "Order Placement",
    icon: "cart",
    body: '"Yes, please!"',
    active: false,
  },
  {
    step: "4",
    title: "Details Collected",
    icon: "doc",
    body: "AI securely captures delivery address and contact info.",
    active: true,
  },
  {
    step: "5",
    title: "Secure Link Sent",
    icon: "link",
    body: "Generates and sends dynamic payment link.",
    active: true,
  },
  {
    step: "6",
    title: "Receipt Submitted",
    icon: "receipt",
    body: "Customer uploads payment screenshot or confirmation.",
    active: false,
  },
  {
    step: "7",
    title: "Order Confirmed",
    icon: "verified",
    body: "AI verifies payment receipt, updates CRM, and sends tracking details automatically.",
    active: true,
    featured: true,
  },
];

const navItems = ["Features", "Solutions", "Workflow", "Pricing", "Resources"];

function Icon({ name, className = "h-5 w-5" }) {
  const icons = {
    bolt: (
      <path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" />
    ),
    heart: (
      <path d="M20.8 4.6a5.4 5.4 0 0 0-7.6 0L12 5.8l-1.2-1.2a5.4 5.4 0 0 0-7.6 7.6L12 21l8.8-8.8a5.4 5.4 0 0 0 0-7.6z" />
    ),
    clock: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </>
    ),
    user: (
      <>
        <path d="M20 21a8 8 0 0 0-16 0" />
        <circle cx="12" cy="7" r="4" />
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
    doc: (
      <>
        <path d="M7 3h7l4 4v14H7z" />
        <path d="M14 3v5h5M9 13h6M9 17h6" />
      </>
    ),
    link: (
      <>
        <path d="M10 13a5 5 0 0 0 7.1.2l2-2a5 5 0 0 0-7.1-7.1l-1.1 1.1" />
        <path d="M14 11a5 5 0 0 0-7.1-.2l-2 2a5 5 0 0 0 7.1 7.1l1.1-1.1" />
      </>
    ),
    receipt: (
      <>
        <path d="M6 3h12v18l-2-1-2 1-2-1-2 1-2-1-2 1z" />
        <path d="M9 8h6M9 12h6M9 16h4" />
      </>
    ),
    verified: (
      <>
        <path d="M12 3l2.1 2.1 3-.1.9 2.8 2.5 1.7-1.3 2.7.5 3-2.7 1.3-1.7 2.5-3-.5-2.7 1.3-1.3-2.7-2.5-1.7.5-3L3.8 9.5l2.5-1.7.9-2.8 3 .1z" />
        <path d="M8.8 12.1l2 2 4.4-4.5" />
      </>
    ),
    check: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M8.5 12.5l2.2 2.2 4.8-5" />
      </>
    ),
    chat: (
      <>
        <path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z" />
      </>
    ),
    menu: (
      <>
        <path d="M4 7h16M4 12h16M4 17h16" />
      </>
    ),
    phone: (
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.7.6 2.5a2 2 0 0 1-.5 2.1L8 9.5a16 16 0 0 0 6.5 6.5l1.2-1.2a2 2 0 0 1 2.1-.5c.8.3 1.6.5 2.5.6A2 2 0 0 1 22 16.9z" />
    ),
    mic: (
      <>
        <rect x="9" y="3" width="6" height="11" rx="3" />
        <path d="M5 11a7 7 0 0 0 14 0M12 18v3" />
      </>
    ),
    attach: <path d="M21.4 11.6l-8.5 8.5a6 6 0 0 1-8.5-8.5l8.5-8.5a4 4 0 1 1 5.7 5.7l-8.6 8.5a2 2 0 0 1-2.8-2.8l7.8-7.8" />,
    arrowUpRight: (
      <>
        <path d="M7 17L17 7" />
        <path d="M9 7h8v8" />
      </>
    ),
    smile: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M8 10h.01M16 10h.01M8 15c1 1.3 2.4 2 4 2s3-.7 4-2" />
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
      ? "border border-outline-variant bg-white text-on-background hover:bg-surface-container-low"
      : "bg-ink text-white shadow-[0_10px_28px_rgba(0,0,0,0.12)] hover:bg-black";

  return (
    <button
      className={`rounded-full px-7 py-3.5 font-display text-sm font-bold tracking-tight transition duration-200 active:scale-[0.98] ${styles} ${className}`}
    >
      {children}
    </button>
  );
}

function Header() {
  return (
    <header className="glass-bar fixed left-0 top-0 z-50 w-full border-b border-white/70 shadow-ambient">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-5 py-4 sm:px-10">
        <a className="font-display text-lg font-extrabold tracking-[-0.04em] text-ink" href="#">
          SociaFlow AI
        </a>
        <nav className="hidden items-center gap-8 font-display text-xs font-semibold tracking-tight text-on-surface-variant md:flex">
          {navItems.map((item) => (
            <a className="transition hover:text-ink" href={`#${item.toLowerCase()}`} key={item}>
              {item}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <button className="hidden font-display text-xs font-semibold text-on-surface-variant transition hover:text-ink sm:inline-flex">
            Log In
          </button>
          <Button className="px-5 py-2.5 text-xs">Request Setup</Button>
        </div>
      </div>
    </header>
  );
}

function ChatPreview() {
  const [selectedId, setSelectedId] = useState(conversations[0].id);
  const selectedConversation =
    conversations.find((conversation) => conversation.id === selectedId) ?? conversations[0];

  return (
    <div className="reveal reveal-delay-2 mx-auto flex h-[520px] w-full max-w-5xl overflow-hidden rounded-[2.25rem] border border-surface-variant bg-surface-container-lowest shadow-float lg:h-[600px]">
      <aside className="hidden w-[320px] flex-col border-r border-surface-variant bg-surface-container-low md:flex">
        <div className="flex items-center justify-between border-b border-surface-variant bg-surface-container p-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-container text-primary">
            <Icon name="user" />
          </div>
          <div className="flex items-center gap-4 text-on-surface-variant">
            <Icon name="chat" className="h-5 w-5" />
            <Icon name="phone" className="h-5 w-5" />
            <Icon name="menu" className="h-5 w-5" />
          </div>
        </div>
        <div className="soft-scroll flex-1 overflow-y-auto">
          {conversations.map((conversation) => (
            <button
              className={`flex w-full items-center gap-3 border-b border-surface-variant p-4 text-left transition ${
                selectedId === conversation.id ? "bg-white" : "hover:bg-surface-container"
              }`}
              key={conversation.id}
              onClick={() => setSelectedId(conversation.id)}
              type="button"
            >
              <div
                className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full ${
                  selectedId === conversation.id
                    ? "bg-primary-container text-primary"
                    : "bg-surface-variant text-on-surface-variant"
                }`}
              >
                <Icon name="user" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-baseline justify-between gap-2">
                  <h4 className="truncate font-display text-sm font-bold text-on-surface">
                    {conversation.phone}
                  </h4>
                  <span className="shrink-0 text-[10px] text-on-surface-variant">{conversation.time}</span>
                </div>
                <p className="truncate text-xs font-semibold text-on-surface-variant">
                  Last seen {conversation.time}
                </p>
              </div>
            </button>
          ))}
        </div>
      </aside>

      <section className="relative flex flex-1 flex-col bg-[#f0f2f5] text-left">
        <div className="soft-scroll flex gap-2 overflow-x-auto border-b border-surface-variant bg-surface-container-low px-4 py-3 md:hidden">
          {conversations.map((conversation) => (
            <button
              className={`shrink-0 rounded-full px-3 py-2 text-xs font-bold transition ${
                selectedId === conversation.id
                  ? "bg-primary text-white"
                  : "bg-white text-on-surface-variant"
              }`}
              key={conversation.id}
              onClick={() => setSelectedId(conversation.id)}
              type="button"
            >
              {conversation.phone}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-4 border-b border-surface-variant bg-surface-container p-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-container text-primary">
            <Icon name="user" />
          </div>
          <div className="min-w-0">
            <h4 className="truncate font-display text-sm font-bold text-on-surface">
              {selectedConversation.phone}
            </h4>
            <p className="truncate text-xs font-semibold text-primary">
              Last seen {selectedConversation.time}
            </p>
          </div>
        </div>

        <div className="mint-wash soft-scroll flex-1 space-y-3 overflow-y-auto p-4 sm:p-6">
          {selectedConversation.messages.map((message, index) => {
            const isAi = message.from === "ai";

            return (
              <div className={`flex ${isAi ? "justify-end" : "justify-start"}`} key={`${selectedConversation.id}-${index}`}>
                <div
                  className={`max-w-[88%] rounded-3xl p-3 shadow-sm md:max-w-[76%] ${
                    isAi ? "rounded-tr-md bg-[#d9fdd3]" : "rounded-tl-md bg-white"
                  }`}
                >
                  <p className="text-xs leading-5 text-on-surface sm:text-sm">{message.text}</p>
                  {message.card ? (
                    <div className="mt-2 rounded-2xl border border-surface-variant bg-white p-2.5">
                      <div className="flex gap-3">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-ink to-on-surface-variant text-white">
                          <Icon name="cart" className="h-6 w-6" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="font-display text-xs font-black text-on-surface sm:text-sm">{message.card.title}</p>
                          <p className="text-xs font-bold text-ink">{message.card.subtitle}</p>
                          <p className="text-[11px] leading-4 text-on-surface-variant">{message.card.meta}</p>
                        </div>
                      </div>
                      <button className="mt-2 w-full rounded-full border border-outline-variant py-1.5 text-[11px] font-black text-ink">
                        {message.card.action}
                      </button>
                    </div>
                  ) : null}
                  <div className={`mt-2 flex items-center gap-1 text-primary ${isAi ? "justify-end" : "justify-start"}`}>
                    <span className="text-[10px] text-on-surface-variant">{message.time}</span>
                    {isAi ? <Icon name="check" className="h-4 w-4" /> : null}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex items-center gap-4 bg-surface-container p-4">
          <Icon name="smile" className="h-5 w-5 text-on-surface-variant" />
          <Icon name="attach" className="h-5 w-5 text-on-surface-variant" />
          <div className="flex-1 rounded-2xl border border-surface-variant bg-white px-4 py-3 text-sm text-on-surface-variant">
            Type a message
          </div>
          <Icon name="mic" className="h-5 w-5 text-on-surface-variant" />
        </div>
      </section>
    </div>
  );
}

function ProductCard() {
  return (
    <div className="rounded-panel border border-surface-variant bg-surface-container-lowest p-5 shadow-ambient sm:p-card-pad">
      <div className="relative mb-6 aspect-video overflow-hidden rounded-card bg-gradient-to-br from-white via-surface-container-low to-primary-container/35 p-6">
        <div className="absolute left-8 top-8 w-36 rounded-2xl border border-surface-variant bg-white/90 p-3 shadow-ambient">
          {["WhatsApp", "Instagram", "Messenger"].map((item, index) => (
            <div className="mb-2 flex items-center gap-2 last:mb-0" key={item}>
              <span className={`h-2.5 w-2.5 rounded-full ${index === 0 ? "bg-primary" : "bg-surface-dim"}`} />
              <span className="text-[10px] font-semibold text-on-surface-variant">{item}</span>
            </div>
          ))}
        </div>
        <div className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-primary text-white shadow-teal">
          <Icon name="bot" className="h-9 w-9" />
        </div>
        <div className="absolute right-8 top-8 w-44 rounded-2xl border border-surface-variant bg-white p-4 shadow-ambient">
          <p className="mb-2 text-[10px] font-bold text-primary">New lead captured</p>
          <div className="h-2 rounded-full bg-surface-container" />
          <div className="mt-2 h-2 w-3/4 rounded-full bg-surface-container" />
        </div>
        <div className="absolute bottom-8 right-10 grid gap-3">
          {["Reply generated", "Payment link ready", "CRM updated"].map((item) => (
            <div className="flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-ambient" key={item}>
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary-container text-primary">
                <Icon name="check" className="h-4 w-4" />
              </span>
              <span className="text-xs font-bold text-on-surface">{item}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-between rounded-card bg-surface p-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-container text-primary">
            <Icon name="chat" />
          </div>
          <div>
            <p className="font-display text-sm font-bold">Active Conversations</p>
            <p className="text-xs text-on-surface-variant">Across 3 platforms</p>
          </div>
        </div>
        <span className="font-display text-2xl font-bold text-primary">1,248</span>
      </div>
    </div>
  );
}

function FeatureIntro() {
  return (
    <section className="mx-auto grid max-w-[1180px] grid-cols-1 items-center gap-12 px-5 py-section-gap sm:px-10 lg:grid-cols-2 lg:gap-16">
      <div className="reveal">
        <h2 className="mb-6 max-w-xl font-display text-3xl font-bold tracking-tight text-ink sm:text-[32px] sm:leading-tight">
          Automate Every Social Conversation from Support to Sale
        </h2>
        <p className="mb-8 max-w-2xl text-base leading-8 text-on-surface-variant sm:text-lg">
          SociaFlow AI helps businesses stay reachable around the clock by handling customer support,
          product questions, order placement, payments, and feedback directly through social media. Each AI
          model is trained around your business type, workflows, and customer journey, so conversations move
          naturally from first question to completed order.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
          {["24/7 Customer Support", "Custom AI Workflows"].map((title) => (
            <div className="flex items-center gap-3" key={title}>
              <Icon name="check" className="h-4 w-4 shrink-0 text-primary" />
              <h3 className="font-display text-sm font-bold sm:text-base">{title}</h3>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-center">
        <img
          alt="Simplified SociaFlow AI automation illustration showing AI connecting social conversations to questions, orders, payments, and feedback."
          className="h-auto w-full max-w-[760px] object-contain"
          src="/social-automation-illustration-simple.png"
        />
      </div>
    </section>
  );
}

function Benefits() {
  return (
    <section className="bg-surface py-section-gap" id="features">
      <div className="mx-auto max-w-[1180px] px-5 sm:px-10">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-4 font-display text-3xl font-bold tracking-tight text-ink sm:text-[32px]">
            Why Modern Teams Choose SociaFlow
          </h2>
          <p className="text-base leading-8 text-on-surface-variant sm:text-lg">
            Unlock unparalleled efficiency without sacrificing the personal touch your customers expect.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-gutter md:grid-cols-3">
          {benefits.map((benefit, index) => (
            <article
              className="reveal rounded-panel border border-surface-variant bg-surface-container-lowest p-card-pad text-center shadow-ambient transition duration-300 hover:-translate-y-1 hover:shadow-float"
              key={benefit.title}
              style={{ animationDelay: `${index * 90}ms` }}
            >
              <div className={`mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full ${benefit.tone}`}>
                <Icon name={benefit.icon} className="h-8 w-8" />
              </div>
              <h3 className="mb-3 font-display text-2xl font-semibold tracking-tight">{benefit.title}</h3>
              <p className="text-sm leading-7 text-on-surface-variant">{benefit.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function PlatformSupport() {
  const platforms = [
    ["WhatsApp", "/social-logos/whatsapp.svg", "left-[7%] top-[18%] h-16 w-16 rotate-[-10deg]"],
    ["Instagram", "/social-logos/instagram.svg", "left-1/2 top-[4%] h-[4.75rem] w-[4.75rem] -translate-x-1/2 rotate-[7deg]"],
    ["Messenger", "/social-logos/messenger.svg", "right-[8%] top-[18%] h-16 w-16 rotate-[11deg]"],
    ["Facebook", "/social-logos/facebook.svg", "left-[10%] bottom-[15%] h-[4.5rem] w-[4.5rem] rotate-[6deg]"],
    ["TikTok", "/social-logos/tiktok.svg", "left-1/2 bottom-[4%] h-16 w-16 -translate-x-1/2 rotate-[-9deg]"],
    ["Telegram", "/social-logos/telegram.svg", "right-[9%] bottom-[15%] h-[4.5rem] w-[4.5rem] rotate-[8deg]"],
  ];

  return (
    <section className="mx-auto max-w-[1180px] px-5 py-section-gap sm:px-10">
      <div className="grid gap-10 rounded-[2.5rem] border border-surface-variant bg-surface-container-lowest p-6 shadow-ambient lg:grid-cols-[0.9fr_1.1fr] lg:p-10">
        <div className="relative min-h-[320px] overflow-hidden">
          <svg className="absolute inset-0 h-full w-full text-primary/35" fill="none" viewBox="0 0 520 320">
            <path d="M260 160 C180 118 120 96 70 82" stroke="currentColor" strokeDasharray="6 8" strokeWidth="2" />
            <path d="M260 160 C258 92 258 54 260 38" stroke="currentColor" strokeDasharray="6 8" strokeWidth="2" />
            <path d="M260 160 C340 116 396 96 452 82" stroke="currentColor" strokeDasharray="6 8" strokeWidth="2" />
            <path d="M260 160 C178 202 112 226 78 252" stroke="currentColor" strokeDasharray="6 8" strokeWidth="2" />
            <path d="M260 160 C260 218 260 252 260 286" stroke="currentColor" strokeDasharray="6 8" strokeWidth="2" />
            <path d="M260 160 C342 204 408 226 452 252" stroke="currentColor" strokeDasharray="6 8" strokeWidth="2" />
          </svg>
          <div className="absolute left-1/2 top-1/2 z-10 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-ink font-display text-lg font-black text-white shadow-float">
            AI
          </div>
          {platforms.map(([name, src, position]) => (
            <img
              alt={`${name} logo`}
              className={`absolute z-20 rounded-[1.5rem] shadow-[0_18px_36px_rgba(15,23,42,0.14)] transition duration-300 hover:-translate-y-1 hover:scale-105 ${position}`}
              key={name}
              src={src}
            />
          ))}
        </div>

        <div className="flex flex-col justify-center">
          <h2 className="mb-5 max-w-xl font-display text-3xl font-bold tracking-tight text-ink sm:text-[32px]">
            Built for the social channels your customers already use.
          </h2>
          <p className="max-w-2xl text-base leading-8 text-on-surface-variant sm:text-lg">
            We configure SociaFlow around the platforms where your business receives questions, orders,
            payment confirmations, and feedback, so customers can reach you without changing how they already communicate.
          </p>
        </div>
      </div>
    </section>
  );
}

function WorkflowCard({ item, className = "" }) {
  return (
    <article
      className={`relative rounded-card bg-surface-container-lowest p-6 shadow-ambient ${
        item.featured ? "border-2 border-primary shadow-teal" : item.active ? "border border-primary/25" : "border border-surface-variant"
      } ${className}`}
    >
      <span
        className={`absolute -left-3 -top-3 flex h-8 w-8 items-center justify-center rounded-full font-body text-sm font-black ${
          item.active ? "bg-primary text-white" : "bg-ink text-white"
        }`}
      >
        {item.step}
      </span>
      <div className={item.featured ? "mb-3 flex flex-col items-center gap-3 text-center" : "mb-3 flex items-center gap-3"}>
        <span
          className={`flex h-10 w-10 items-center justify-center rounded-full ${
            item.active ? "bg-primary-container text-primary" : "bg-surface text-secondary"
          }`}
        >
          <Icon name={item.icon} />
        </span>
        <h3 className="font-display text-base font-bold">{item.title}</h3>
      </div>
      <p
        className={`rounded-soft p-3 text-sm leading-6 text-on-surface-variant ${
          item.featured ? "bg-transparent p-0 text-center" : item.active ? "border border-primary-container bg-primary-container/20" : "bg-surface"
        }`}
      >
        {item.body}
      </p>
    </article>
  );
}

function Workflow() {
  const phases = [
    {
      title: "Map Your Workflow",
      body: "We study your products, customer questions, order flow, payment process, and support rules before anything goes live.",
      meta: "Discovery",
    },
    {
      title: "Train the AI Model",
      body: "Your AI assistant is trained to answer business-specific questions, guide customers, collect order details, and respond in your tone.",
      meta: "Training",
    },
    {
      title: "Connect Social Channels",
      body: "We connect the assistant to the channels your customers already use, then automate support, payments, orders, and feedback handling.",
      meta: "Integration",
    },
    {
      title: "Launch and Improve",
      body: "After launch, conversations can be reviewed and refined so the automation keeps adapting to your environment and customer behavior.",
      meta: "Optimization",
    },
  ];

  return (
    <section className="mx-auto max-w-[1180px] px-5 py-section-gap sm:px-10" id="workflow">
      <div className="mx-auto mb-14 max-w-3xl text-center">
        <h2 className="mb-4 font-display text-3xl font-bold tracking-tight text-ink sm:text-[32px]">
          A Setup Process Built Around Your Business
        </h2>
        <p className="text-base leading-8 text-on-surface-variant sm:text-lg">
          SociaFlow is configured for each client instead of shipped as a one-size-fits-all product.
          We adapt the model to your business type, customer journey, and operational workflow.
        </p>
      </div>

      <div className="rounded-[2.5rem] border border-surface-variant bg-surface-container-lowest p-4 shadow-ambient sm:p-6 lg:p-8">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-[0.85fr_1.15fr] lg:gap-6">
          <div className="relative overflow-hidden rounded-[2rem] bg-ink p-8 text-white">
            <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-primary/40 blur-3xl" />
            <div className="absolute -bottom-20 left-8 h-48 w-48 rounded-full bg-tertiary-container/20 blur-3xl" />
            <div className="relative z-10">
              <h3 className="mb-5 font-display text-3xl font-black tracking-tight">
                We build the automation to match how you already operate.
              </h3>
              <p className="text-sm leading-7 text-inverse-on-surface/80">
                The result is a trained AI workflow that can answer questions, create orders, handle
                payment steps, and collect feedback without forcing your team into a generic template.
              </p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {phases.map((phase, index) => (
              <article
                className="relative rounded-[1.75rem] border border-surface-variant bg-surface p-6 transition duration-300 hover:-translate-y-1 hover:shadow-float"
                key={phase.title}
              >
                <span className="mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-black text-white">
                  {index + 1}
                </span>
                <h3 className="mb-3 font-display text-xl font-black tracking-tight text-ink">{phase.title}</h3>
                <p className="text-sm leading-7 text-on-surface-variant">{phase.body}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="mx-auto mb-20 max-w-[1180px] px-5 py-section-gap sm:px-10" id="pricing">
      <div className="relative overflow-hidden rounded-[2rem] bg-surface-container-highest px-6 py-16 sm:rounded-hero sm:p-16">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(178,223,219,0.45),transparent_48%),radial-gradient(ellipse_at_bottom_left,_rgba(255,204,174,0.35),transparent_46%)]" />
        <div className="relative z-10 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <h2 className="mb-6 max-w-xl font-display text-3xl font-bold tracking-tight text-ink sm:text-[32px]">
              Pricing starts at $50 and scales with your workflow.
            </h2>
            <p className="mb-8 max-w-2xl text-base leading-8 text-on-surface-variant sm:text-lg">
              SociaFlow is configured after purchase to work inside your business environment. Final pricing
              depends on business scale, connected channels, automation depth, and workflow complexity.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button className="w-full sm:w-auto">Request a Quote</Button>
              <Button className="w-full sm:w-auto" variant="secondary">
                Talk to Sales
              </Button>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/70 bg-white/70 p-5 shadow-ambient backdrop-blur">
            {[
              ["Starting setup", "$50+"],
              ["Pricing depends on", "Scale and workflow complexity"],
              ["Included", "Trained AI model for your workflow"],
              ["Configured for", "Support, orders, payments, and feedback"],
            ].map(([label, value]) => (
              <div className="flex items-start justify-between gap-4 border-b border-surface-variant py-4 last:border-b-0" key={label}>
                <span className="text-sm font-semibold text-on-surface-variant">{label}</span>
                <span className="max-w-[14rem] text-right font-display text-sm font-black text-ink">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="w-full rounded-t-[40px] border-t border-surface-variant bg-surface-container-low">
      <div className="mx-auto grid max-w-[1180px] grid-cols-1 gap-10 px-5 py-16 sm:px-10 md:grid-cols-2">
        <div>
          <div className="mb-4 font-display text-lg font-black tracking-tight text-ink">SociaFlow AI</div>
          <p className="font-display text-sm text-on-surface-variant">
            &copy; 2026 SociaFlow AI. Effortless intelligence for modern teams.
          </p>
        </div>
        <div className="flex flex-wrap gap-6 md:justify-end">
          {["Privacy Policy", "Terms of Service", "Cookie Policy", "Contact Us", "Documentation", "Status"].map((item) => (
            <a
              className="font-display text-sm text-on-surface-variant opacity-80 transition hover:text-primary hover:opacity-100"
              href="#"
              key={item}
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <>
      <Header />
      <main className="overflow-hidden">
        <section className="hero-gradient rounded-b-[3rem]">
          <div className="mx-auto flex max-w-[1440px] flex-col items-center px-5 pb-section-gap pt-[156px] text-center sm:px-10 sm:pt-[172px]">
            <h1 className="reveal mx-auto mb-6 max-w-4xl font-display text-5xl font-extrabold leading-[1.05] tracking-[-0.045em] text-ink sm:text-6xl lg:text-[64px]">
              The Trusted Platform for Social Media Business Automation
            </h1>
            <p className="reveal reveal-delay-1 mx-auto mb-10 max-w-2xl text-base leading-8 text-on-surface-variant sm:text-lg">
              Streamline customer interactions, automate responses, and scale social commerce with an
              AI workflow configured specifically for your business environment.
            </p>
            <div className="reveal reveal-delay-2 mb-16 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button>Request Setup</Button>
              <a
                className="inline-flex items-center gap-2 px-4 py-3 font-display text-sm font-bold text-ink underline underline-offset-4"
                href="#pricing"
              >
                See pricing
                <Icon name="arrowUpRight" className="h-4 w-4" />
              </a>
            </div>
            <InteractiveChatPreview />
          </div>
        </section>
        <FeatureIntro />
        <Benefits />
        <PlatformSupport />
        <Workflow />
        <CTA />
      </main>
      <Footer />
    </>
  );
}

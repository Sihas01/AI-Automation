"use client";

import { useState } from "react";

const conversations = [
  {
    id: "product",
    phone: "+1 234 567 8900",
    preview: "Can I get the jacket in black?",
    time: "10:30 AM",
    messages: [
      { from: "customer", text: "Hi, do you have the premium jacket in black color?", time: "10:30 AM" },
      {
        from: "ai",
        text: "Yes, we have it in black. It is $89.99 and available in S, M, L, and XL.",
        time: "10:31 AM",
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
      },
      { from: "customer", text: "742 Pine Street, Austin. Same number as this chat.", time: "10:34 AM" },
      {
        from: "ai",
        text: "Order #ORD1234 is ready. I sent a secure payment link and will confirm once the receipt is verified.",
        time: "10:35 AM",
      },
    ],
  },
  {
    id: "tracking",
    phone: "+44 7700 900077",
    preview: "Where is order #SF8821?",
    time: "9:15 AM",
    messages: [
      { from: "customer", text: "Can you tell me where order #SF8821 is right now?", time: "9:15 AM" },
      {
        from: "ai",
        text: "I found it. Your order left the regional hub this morning and is scheduled for delivery tomorrow before 6 PM.",
        time: "9:16 AM",
      },
      { from: "customer", text: "Can I change the delivery window to afternoon?", time: "9:17 AM" },
      {
        from: "ai",
        text: "Yes. I updated the carrier preference to afternoon delivery and sent the new tracking link.",
        time: "9:18 AM",
      },
      { from: "customer", text: "Perfect, thank you.", time: "9:19 AM" },
    ],
  },
  {
    id: "refund",
    phone: "+1 555 123 4567",
    preview: "I need to return an item.",
    time: "8:45 AM",
    messages: [
      { from: "customer", text: "I received the sneakers yesterday, but the size is wrong. Can I refund them?", time: "8:45 AM" },
      {
        from: "ai",
        text: "I can help with that. The order is within the 30-day return window, so it is eligible for a refund or exchange.",
        time: "8:46 AM",
      },
      { from: "customer", text: "Refund please. What do you need from me?", time: "8:47 AM" },
      {
        from: "ai",
        text: "Please upload a photo of the item and packaging. I will generate a return label once the photo is received.",
        time: "8:48 AM",
      },
      { from: "customer", text: "Uploaded.", time: "8:51 AM" },
      {
        from: "ai",
        text: "Thanks. The refund request is approved. Your prepaid return label is ready, and the refund will be issued after carrier scan.",
        time: "8:52 AM",
      },
    ],
  },
  {
    id: "discount",
    phone: "+61 400 123 456",
    preview: "Is the discount still valid?",
    time: "Yesterday",
    messages: [
      { from: "customer", text: "Is the spring discount still valid for the starter bundle?", time: "Yesterday" },
      { from: "ai", text: "Yes. SPRING15 is valid until Friday and applies to the starter bundle.", time: "Yesterday" },
      { from: "customer", text: "Can you apply it if I order here?", time: "Yesterday" },
      { from: "ai", text: "Absolutely. I applied the discount and generated a checkout link with the reduced total.", time: "Yesterday" },
    ],
  },
  {
    id: "support",
    phone: "+49 151 2345678",
    preview: "How do I reset my password?",
    time: "Yesterday",
    messages: [
      { from: "customer", text: "How do I reset my password? I cannot access the dashboard.", time: "Yesterday" },
      {
        from: "ai",
        text: "I can send a secure reset link to the email on your account. Please confirm the last two digits of your phone number.",
        time: "Yesterday",
      },
      { from: "customer", text: "78", time: "Yesterday" },
      {
        from: "ai",
        text: "Verified. I sent the reset link and added a note for the support team in case you need help after signing in.",
        time: "Yesterday",
      },
    ],
  },
  {
    id: "stock",
    phone: "+39 347 000 1122",
    preview: "Do you restock the oak desk?",
    time: "Mon",
    messages: [
      { from: "customer", text: "Do you restock the minimalist oak desk soon?", time: "Mon" },
      {
        from: "ai",
        text: "Yes. The next restock is expected on May 3. I can add you to the waitlist and message you when it arrives.",
        time: "Mon",
      },
      { from: "customer", text: "Please add me.", time: "Mon" },
      { from: "ai", text: "Done. You are on the priority waitlist, and I saved your preferred finish as oak.", time: "Mon" },
    ],
  },
  {
    id: "lead",
    phone: "+91 98765 43210",
    preview: "Can someone demo this?",
    time: "Sun",
    messages: [
      { from: "customer", text: "We run a small store. Can someone demo social automation for us?", time: "Sun" },
      { from: "ai", text: "Yes. I can book a 20-minute demo with a product specialist. What time zone should I use?", time: "Sun" },
      { from: "customer", text: "IST. Tomorrow afternoon works.", time: "Sun" },
      { from: "ai", text: "I found openings at 2:30 PM and 4:00 PM IST. Which slot should I reserve?", time: "Sun" },
    ],
  },
  {
    id: "payment",
    phone: "+1 415 010 2020",
    preview: "I sent the payment receipt.",
    time: "Sat",
    messages: [
      { from: "customer", text: "I sent the payment receipt. Can you confirm the order?", time: "Sat" },
      {
        from: "ai",
        text: "I received the screenshot and matched it to order #SF7710. I am verifying the transaction reference now.",
        time: "Sat",
      },
      { from: "ai", text: "Payment verified. Your order is confirmed and the warehouse has been notified.", time: "Sat" },
    ],
  },
];

function Icon({ name, className = "h-5 w-5" }) {
  const icons = {
    user: (
      <>
        <path d="M20 21a8 8 0 0 0-16 0" />
        <circle cx="12" cy="7" r="4" />
      </>
    ),
    chat: <path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z" />,
    phone: <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.7.6 2.5a2 2 0 0 1-.5 2.1L8 9.5a16 16 0 0 0 6.5 6.5l1.2-1.2a2 2 0 0 1 2.1-.5c.8.3 1.6.5 2.5.6A2 2 0 0 1 22 16.9z" />,
    menu: (
      <>
        <path d="M4 7h16M4 12h16M4 17h16" />
      </>
    ),
    cart: (
      <>
        <path d="M6 6h15l-2 8H8L6 3H3" />
        <circle cx="9" cy="20" r="1" />
        <circle cx="18" cy="20" r="1" />
      </>
    ),
    check: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M8.5 12.5l2.2 2.2 4.8-5" />
      </>
    ),
    smile: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M8 10h.01M16 10h.01M8 15c1 1.3 2.4 2 4 2s3-.7 4-2" />
      </>
    ),
    attach: <path d="M21.4 11.6l-8.5 8.5a6 6 0 0 1-8.5-8.5l8.5-8.5a4 4 0 1 1 5.7 5.7l-8.6 8.5a2 2 0 0 1-2.8-2.8l7.8-7.8" />,
    mic: (
      <>
        <rect x="9" y="3" width="6" height="11" rx="3" />
        <path d="M5 11a7 7 0 0 0 14 0M12 18v3" />
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

export default function ChatPreview() {
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
                  <h4 className="truncate font-display text-sm font-bold text-on-surface">{conversation.phone}</h4>
                  <span className="shrink-0 text-[10px] text-on-surface-variant">{conversation.time}</span>
                </div>
                <p className="truncate text-xs font-semibold text-on-surface-variant">Last seen {conversation.time}</p>
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
                selectedId === conversation.id ? "bg-primary text-white" : "bg-white text-on-surface-variant"
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
            <h4 className="truncate font-display text-sm font-bold text-on-surface">{selectedConversation.phone}</h4>
            <p className="truncate text-xs font-semibold text-primary">Last seen {selectedConversation.time}</p>
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

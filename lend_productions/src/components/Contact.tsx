
"use client";

import { ArrowUpRight } from "@phosphor-icons/react";

export default function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="container contact-inner">
        <div className="eyebrow">
          <span className="eyebrow-line" />
          YOUR NEXT CHAPTER STARTS HERE
        </div>

        <h2>
          Let&apos;s make
          <br />
          <span>something matter.</span>
        </h2>

        <p>
          Have a brand to build, a campaign to launch, or a story
          worth telling? Let&apos;s talk about what we can create together.
        </p>

        <a href="mailto:hello@lendproductions.com" className="button button-gold">
          Start a conversation
          <ArrowUpRight size={19} weight="bold" />
        </a>

        <span className="contact-note">
          GOOD WORK STARTS WITH A GOOD CONVERSATION.
        </span>
      </div>
    </section>
  );
}

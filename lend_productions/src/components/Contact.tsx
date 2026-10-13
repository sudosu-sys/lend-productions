
"use client";

import { useState } from "react";
import {
  ArrowUpRight,
  Phone,
  TelegramLogo,
  X,
} from "@phosphor-icons/react";

const PHONE_NUMBER = "099 100 5292";
const TELEGRAM_USERNAME = "LEND_PRODUCTIONS";

export default function Contact() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const telegramUrl = `https://t.me/${TELEGRAM_USERNAME.replace(/^@/, "")}`;

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

        <button
          type="button"
          className="button button-gold"
          onClick={() => setIsModalOpen(true)}
        >
          Start a conversation
          <ArrowUpRight size={19} weight="bold" />
        </button>

        <span className="contact-note">
          GOOD WORK STARTS WITH A GOOD CONVERSATION.
        </span>
      </div>

      {isModalOpen && (
        <div
          className="contact-modal-backdrop"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="contact-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-modal-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="contact-modal-close"
              aria-label="Close contact modal"
              onClick={() => setIsModalOpen(false)}
            >
              <X size={22} />
            </button>

            <div className="eyebrow">
              <span className="eyebrow-line" />
              GET IN TOUCH
            </div>

            <h3 id="contact-modal-title">
              Let&apos;s start a conversation.
            </h3>

            <p className="contact-modal-description">
              Choose how you&apos;d like to reach us. We&apos;d love
              to hear about your next project.
            </p>

            <div className="contact-modal-options">
              <a
                href={`tel:${PHONE_NUMBER.replace(/[^\d+]/g, "")}`}
                className="contact-modal-option"
              >
                <span className="contact-modal-icon">
                  <Phone size={23} weight="regular" />
                </span>

                <span className="contact-modal-details">
                  <span className="contact-modal-label">CALL US</span>
                  <span className="contact-modal-value">
                    {PHONE_NUMBER}
                  </span>
                </span>

                <ArrowUpRight
                  className="contact-modal-arrow"
                  size={19}
                />
              </a>

              <a
                href={telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-modal-option"
              >
                <span className="contact-modal-icon">
                  <TelegramLogo size={25} weight="regular" />
                </span>

                <span className="contact-modal-details">
                  <span className="contact-modal-label">TELEGRAM</span>
                  <span className="contact-modal-value">
                    @{TELEGRAM_USERNAME.replace(/^@/, "")}
                  </span>
                </span>

                <ArrowUpRight
                  className="contact-modal-arrow"
                  size={19}
                />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

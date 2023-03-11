"use strict";

// SELECTIONS
const interactiveSection = document.querySelector(".interactive-vr");
const interactiveContainer = document.querySelector(".interactive__container");
const interactiveText = document.querySelector(".first__article-content");
const secondArticleHeader = document.querySelector(".flex-cont");
const cardsLeft = document.querySelectorAll(".card-left-hidden");
const cardsRight = document.querySelectorAll(".card-right-hidden");
const footer = document.querySelector("footer");
// OBSERVERS

const interactiveObserver = new IntersectionObserver(
  (entries, observer) => {
    const entry = entries[0];

    if (!entry.isIntersecting) return;
    const entryTarget = entry.target;
    entryTarget.classList.remove("interactive-hidden");
    observer.unobserve(entryTarget);
  },
  {
    root: null,
    rootMargin: `-300px`,
  }
);
interactiveObserver.observe(interactiveSection);
const interactiveObserver2 = new IntersectionObserver(
  (entries, observer) => {
    const entry = entries[0];

    if (!entry.isIntersecting) return;
    const entryTarget = entry.target;
    entryTarget.classList.remove("interactive__container-hidden");
    observer.unobserve(entryTarget);
  },
  {
    root: null,
    rootMargin: `50px`,
  }
);
interactiveObserver2.observe(interactiveContainer);
const interactiveObserver3 = new IntersectionObserver(
  (entries, observer) => {
    const entry = entries[0];

    if (!entry.isIntersecting) return;
    const entryTarget = entry.target;
    entryTarget.classList.remove("text-hidden");
    observer.unobserve(entryTarget);
  },
  {
    root: null,
    threshold: 0.6,
  }
);
interactiveObserver3.observe(interactiveText);

const interactiveObserver4 = new IntersectionObserver(
  (entries, observer) => {
    const entry = entries[0];

    if (!entry.isIntersecting) return;
    const entryTarget = entry.target;
    entryTarget.classList.remove("header-hidden");
    observer.unobserve(entryTarget);
  },
  {
    root: null,
    threshold: 0.7,
  }
);
interactiveObserver4.observe(secondArticleHeader);

const interactiveObserver5 = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const entryTarget = entry.target;
      console.log(entryTarget);
      entryTarget.classList.remove("card-left-hidden");
      entryTarget.classList.remove("card-right-hidden");
      observer.unobserve(entryTarget);
    });
  },
  {
    root: null,
    threshold: 0.5,
  }
);
cardsLeft.forEach((card) => interactiveObserver5.observe(card));
cardsRight.forEach((card) => interactiveObserver5.observe(card));
const interactiveObserver6 = new IntersectionObserver(
  (entries, observer) => {
    const entry = entries[0];

    if (!entry.isIntersecting) return;
    const entryTarget = entry.target;
    entryTarget.classList.remove("footer__content-hidden");
    observer.unobserve(entryTarget);
  },
  {
    root: null,
    threshold: 0.25,
  }
);
interactiveObserver6.observe(footer);

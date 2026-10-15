/* AI Website Launch — lesson videos (the one place to configure them)
 *
 * HOW TO ADD A VIDEO
 *   1. Find the lesson ID below (for example "m1l2" = Module 01, lesson 2).
 *   2. Paste the video address into "url". Leave it "" if there is no video yet.
 *
 * SUPPORTED URLS
 *   - YouTube:   https://www.youtube.com/watch?v=VIDEO_ID, https://youtu.be/VIDEO_ID, /embed/VIDEO_ID or /shorts/VIDEO_ID
 *   - Video file: a direct link to .mp4, .webm or .ogv (the file must allow playback from your site)
 *
 * OPTIONAL FIELDS (all can be left out)
 *   title:       overrides the lesson title shown above the video
 *   description: short text shown under the title (falls back to the lesson objective)
 *   duration:    length in seconds, shown before the video loads (the real length replaces it once known)
 *   poster:      image URL shown before a video file starts (video files only)
 *   captions:    for video files only, an array of WebVTT tracks:
 *                  [{ src: "captions/m1l2-en.vtt", lang: "en", label: "English" }]
 *                YouTube videos use YouTube's own CC button when captions exist.
 *
 * CREDIT FIELDS (shown under the video; fill them in for every real video)
 *   videoTitle:  the video's own title
 *   creator:     channel or author name
 *   creatorUrl:  link to the creator's channel
 *   sourceUrl:   link to the original video page
 *   attribution: extra attribution text if the license requires it
 *   note:        short honest note about how well the video matches the lesson
 *   reason:      for lessons WITHOUT a video, why (shown in the placeholder)
 *   more:        [{ title, creator, url }] related videos shown as plain links
 * The full evidence register (license, embed check, verification status) is in VIDEO-CREDITS.md.
 *
 * Lessons for Modules 03 to 12 are not written yet. Their IDs are reserved here so
 * videos can be attached the moment the lessons are added.
 */
window.LESSON_VIDEOS = {

  /* Module 00 — Welcome to AI Website Launch */
  m0l1: {"url": "", "reason": "This lesson introduces this specific course, so no outside video can teach it. Record it from the transcript below."},  // Welcome: What You Will Build
  m0l2: {"url": "", "reason": "This lesson is a tour of this platform, so no outside video can teach it. Record it from the transcript below."},  // How the Course and the Platform Work
  m0l3: {"url": "", "reason": "No verified video matched this lesson closely enough. The transcript and activities below cover it."},  // How AI Fits In: Your Development Partner
  m0l4: {"url": "", "reason": "This lesson is a hands-on activity inside this platform, so no outside video fits."},  // Your First Mini Challenge: Choose a Project Idea

  /* Module 01 — How Modern Websites Work */
  m1l1: {"url": "https://www.youtube.com/watch?v=vcRmKtL4o_4", "videoTitle": "How Websites Work | simply explained with examples", "creator": "TechWorld with Nana", "creatorUrl": "https://www.youtube.com/@TechWorldwithNana", "sourceUrl": "https://www.youtube.com/watch?v=vcRmKtL4o_4"},  // What a Website Actually Is
  m1l2: {"url": "https://www.youtube.com/watch?v=AlkDbnbv7dk", "videoTitle": "What happens when you type a URL into your browser?", "creator": "ByteByteGo", "creatorUrl": "https://www.youtube.com/@ByteByteGo", "sourceUrl": "https://www.youtube.com/watch?v=AlkDbnbv7dk"},  // What Happens When You Type a URL
  m1l3: {"url": "https://www.youtube.com/watch?v=ok-plXXHlWw", "videoTitle": "HTML in 100 Seconds", "creator": "Fireship", "creatorUrl": "https://www.youtube.com/@Fireship", "sourceUrl": "https://www.youtube.com/watch?v=ok-plXXHlWw", "note": "Covers HTML only. Watch the related CSS and JavaScript videos below for the other two layers.", "more": [{"title": "CSS in 100 Seconds", "creator": "Fireship", "url": "https://www.youtube.com/watch?v=OEV8gMkCHXQ"}, {"title": "JavaScript in 100 Seconds", "creator": "Fireship", "url": "https://www.youtube.com/watch?v=DHjqpvDnNGE"}]},  // HTML, CSS and JavaScript: The Three Layers
  m1l4: {"url": "", "reason": "No video from an official or established source could be verified for hosting, domains and HTTPS together."},  // Servers, Hosting, Domains and HTTPS
  m1l5: {"url": "https://www.youtube.com/watch?v=Qw8qVSZEWBc", "videoTitle": "What Is an API? Types, Uses, & AI Integration", "creator": "IBM Technology", "creatorUrl": "https://www.youtube.com/@IBMTechnology", "sourceUrl": "https://www.youtube.com/watch?v=Qw8qVSZEWBc", "note": "Covers APIs. Databases are explained in the lesson text."},  // APIs, Databases and Choosing an Architecture

  /* Module 02 — AI Fundamentals for Web Creation */
  m2l1: {"url": "https://www.youtube.com/watch?v=o3YCjK7bWHI", "videoTitle": "What are AI 'hallucinations' and can we fix LLMs so that they don't happen?", "creator": "Microsoft Developer", "creatorUrl": "https://www.youtube.com/@MicrosoftDeveloper", "sourceUrl": "https://www.youtube.com/watch?v=o3YCjK7bWHI"},  // What Generative AI Is, and What It Is Not
  m2l2: {"url": "https://www.youtube.com/watch?v=ysPbXH0LpIE", "videoTitle": "Prompting 101 | Code w/ Claude", "creator": "Anthropic", "creatorUrl": "https://www.youtube.com/@anthropic-ai", "sourceUrl": "https://www.youtube.com/watch?v=ysPbXH0LpIE"},  // The Anatomy of a Great Prompt
  m2l3: {"url": "", "reason": "This lesson uses this platform's own Prompt Builder, so no outside video fits."},  // The Prompt Builder
  m2l4: {"url": "", "reason": "No verified video matched debugging and reviewing AI-generated code closely enough."},  // Iterating, Debugging and Reviewing AI Code
  m2l5: {"url": "", "reason": "No verified video matched AI-assisted design and copywriting closely enough."},  // AI for Design and Copywriting

  /* Module 03 — Website Strategy */
  m3l1: { url: "" },
  m3l2: { url: "" },
  m3l3: { url: "" },
  m3l4: { url: "" },
  m3l5: { url: "" },
  m3l6: { url: "" },

  /* Module 04 — Premium Web Design */
  m4l1: { url: "" },
  m4l2: { url: "" },
  m4l3: { url: "" },
  m4l4: { url: "" },
  m4l5: { url: "" },
  m4l6: { url: "" },
  m4l7: { url: "" },
  m4l8: { url: "" },

  /* Module 05 — Building with AI */
  m5l1: { url: "" },
  m5l2: { url: "" },
  m5l3: { url: "" },
  m5l4: { url: "" },
  m5l5: { url: "" },
  m5l6: { url: "" },
  m5l7: { url: "" },
  m5l8: { url: "" },

  /* Module 06 — Responsive Design */
  m6l1: { url: "" },
  m6l2: { url: "" },
  m6l3: { url: "" },
  m6l4: { url: "" },
  m6l5: { url: "" },
  m6l6: { url: "" },

  /* Module 07 — Accessibility & Quality */
  m7l1: {"url": "https://www.youtube.com/watch?v=3f31oufqFSM", "videoTitle": "Web Accessibility Perspectives - Compilation of 10 Topics/Videos", "creator": "W3C Web Accessibility Initiative (WAI)", "creatorUrl": "https://www.youtube.com/@w3c-wai", "sourceUrl": "https://www.youtube.com/watch?v=3f31oufqFSM", "note": "Provisional match: Module 07 lessons are not written yet, so check this still fits when they are."},
  m7l2: { url: "" },
  m7l3: { url: "" },
  m7l4: { url: "" },
  m7l5: { url: "" },
  m7l6: { url: "" },

  /* Module 08 — SEO & Performance */
  m8l1: {"url": "https://www.youtube.com/watch?v=_0QOePCkyK4", "videoTitle": "Google Search Explained - Search for Beginners Ep 4", "creator": "Google Search Central", "creatorUrl": "https://www.youtube.com/@GoogleSearchCentral", "sourceUrl": "https://www.youtube.com/watch?v=_0QOePCkyK4", "note": "Provisional match: Module 08 lessons are not written yet, so check this still fits when they are."},
  m8l2: { url: "" },
  m8l3: { url: "" },
  m8l4: { url: "" },
  m8l5: { url: "" },
  m8l6: { url: "" },

  /* Module 09 — Advanced AI Workflow */
  m9l1: { url: "" },
  m9l2: { url: "" },
  m9l3: { url: "" },
  m9l4: { url: "" },
  m9l5: { url: "" },
  m9l6: { url: "" },

  /* Module 10 — Building a Production Website */
  m10l1: { url: "" },
  m10l2: { url: "" },
  m10l3: { url: "" },
  m10l4: { url: "" },
  m10l5: { url: "" },
  m10l6: { url: "" },
  m10l7: { url: "" },
  m10l8: { url: "" },
  m10l9: { url: "" },
  m10l10: { url: "" },

  /* Module 11 — The 100-Point Website Audit */
  m11l1: { url: "" },
  m11l2: { url: "" },
  m11l3: { url: "" },
  m11l4: { url: "" },

  /* Module 12 — Capstone Project */
  m12l1: { url: "" },
  m12l2: { url: "" },
  m12l3: { url: "" },
  m12l4: { url: "" },
  m12l5: { url: "" }
};

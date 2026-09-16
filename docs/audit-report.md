Accessibility Audit Report

1.  Website Audited

Website: India.gov.in
URL: https://www.india.gov.in/
Audit Date: 16 September 2026
Tool: Google Lighthouse 13.4.1
Accessibility Score: 89/100
Device: Desktop
Audit Mode: Navigation

2.  Testing Method

The website was evaluated using:

Google Lighthouse Accessibility Audit
Keyboard-only navigation testing

The keyboard-only navigation test was successfully completed and the website was navigable using the keyboard.

3.  Key Findings

| ID      | Issue                                    | Severity |
| ------- | ---------------------------------------- | -------- |
| WEB-001 | Incorrect ARIA parent-child structure    | High     |
| WEB-002 | Insufficient color contrast              | Medium   |
| WEB-003 | Incorrect list structure                 | Medium   |
| WEB-004 | Redundant image alternative text         | Low      |
| WEB-005 | Inconsistent identical link descriptions | Medium   |

4.  Detailed Findings

WEB-001 — Incorrect ARIA Parent-Child Structure

Evidence: Lighthouse detected that some ARIA child roles are not contained by their required parent elements.

User Impact: Screen-reader users may receive incorrect or incomplete information about the page structure.

Recommended Fix: Correct the ARIA parent-child structure and use appropriate semantic HTML where possible.

Priority: High

---

WEB-002 — Insufficient Color Contrast

Evidence: Lighthouse detected background and foreground colors that do not have a sufficient contrast ratio.

User Impact: Users with low vision may have difficulty reading the affected content.

Recommended Fix: Increase the contrast between foreground text and its background.

Priority: Medium

---

WEB-003 — Incorrect List Structure

Evidence: Lighthouse detected list items (`<li>`) that are not contained within `<ul>`, `<ol>`, or `<menu>` parent elements.

User Impact: Screen-reader users may not understand the list structure correctly.

Recommended Fix: Place each `<li>` element inside an appropriate `<ul>`, `<ol>`, or `<menu>` element.

Priority: Medium

---

WEB-004 — Redundant Image Alternative Text

Evidence: Lighthouse detected images with redundant alternative text.

User Impact: Screen-reader users may hear unnecessary repeated information when navigating images.

Recommended Fix: Remove redundant alternative text or provide concise, meaningful alternative text where required.

Priority: Low

---

WEB-005 — Identical Links With Inconsistent Descriptions

Evidence: Lighthouse detected identical links that do not always have the same purpose or description.

User Impact: Users may become confused when similar links lead to the same destination but have different descriptions.

Recommended Fix: Use consistent and descriptive link text for links pointing to the same destination.

Priority: Medium

5.  Overall Observation

The India.gov.in website achieved an 89/100 Accessibility score in the Lighthouse desktop audit. The automated audit identified issues related to ARIA structure, color contrast, list structure, redundant image alternative text, and link descriptions.

The keyboard-only navigation test was also performed and navigation was successfully completed.

6.  Recommended Accessibility Improvements

The identified issues can be addressed through:

Proper semantic HTML
Correct ARIA parent-child relationships
Sufficient color contrast
Correct list markup
Meaningful and non-redundant alternative text
Consistent and descriptive link text

7.  Evidence

Screenshots of the Lighthouse audit and keyboard-only testing are stored in:

`docs/screenshots/`

The detailed issue data is available in:

`docs/accessibility-audit.csv`

# [The Official SDH Website](https://sdh-mtg.net)
This is the repository for the source code of [the SDH website](https://sdh-mtg.net).

The site is built using Vite and Sveltekit.

It has most of the NPM scripts that frontend developers have come to expect:
- `npm run dev` starts the Vite dev server
- `npm run build` builds the website.

Eventually, the (fairly ambitious) goals of this project are the following:
1. A directory of Markdown files containing the essential documents (the ban list, the rules, the constitution, etc). The intention is that rules changes can be proposed directly through the website's source code, limiting the possibility for desynchronization between the intended rules of the game and the actual rules. (The website's rules pages are authoritative; if they are not updated, the rules have not changed.)
2. A Markdown dialect that supports a variant of the `[[ Cardname ]]` convention for referencing Magic cards. That syntax will be supported, but so will `(text)[[ Cardname ]]` so that cards don't need to be referenced by their full names. This is probably the most daunting challenge of this project, as the modified Markdown parser will ideally have its output specified in Svelte components (so the card can appear as a nice looking popover instead of just being a link). An affordance for inline clarifications would also be borderline essential.
3. Implement a spouse search using Scryfall's database, but without being a bad citizen of Scryfall's API. This will probably be accomplished by having a REST service in another repo that uses a cached database of legal SDH commanders. Unfortunately, as far as I can tell, there's no built-in affordance for using Scryfall's query syntax on a subset of Magic cards, but, given the restricted scope of these searches (often *very* restricted if you're finding an uncommon spouse for a multicolor commander), a color selector and naive text match may be sufficient. Many Magic players don't know the Scryfall search syntax anyway. If we wanted to get really fancy with it, we could even detect new set releases, and highlight the newly added commanders from the most recent set.
4. The deck database will eventually be dynamicized instead of using a hardcoded JSON dataset. This would enable clean interfaces to exist for decklist submission (probably using a Discord bot combined with a special "Deck DB Curator" role in the Discord)
5. An announcements page that, like the deck database, will be driven from Discord. This will also involve the Markdown work described earlier.

These goals will be formalized as GitHub issues along with many other little problems (for example, the behavior of Clarification on mobile is completely unknown).


This codebase does feature a few images that incorporate MtG art, for which I provide the following the disclaimer:
The [SDH Website](https://sdh-mtg.net) is unofficial Fan Content permitted under the Fan Content Policy. This site is not approved and/or endorsed by Wizards of the Coast.
Portions of the materials used are property of Wizards of the Coast, ©Wizards of the Coast LLC.

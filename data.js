/* ═══════════════════════════════════════════════════════════════
   IdiomVault 3.0 — Shared Data & Game Engine
   All 198 expressions + XP / Streak / Progress / SR / Badges
═══════════════════════════════════════════════════════════════ */

/* ── FULL DATASET ─────────────────────────────────────────────── */
const DATA = [
  {n:1,   expr:"A blessing in disguise",                         type:"idiom",       cat:"Luck & Fate",    meaning:"Something that seems bad at first but turns out to be good.",             example:"Losing that job was a blessing in disguise — I found a much better one."},
  {n:2,   expr:"A dime a dozen",                                 type:"idiom",       cat:"Value",          meaning:"Something very common and therefore of little value.",                    example:"Talented singers are a dime a dozen these days."},
  {n:3,   expr:"A piece of cake",                                type:"idiom",       cat:"Difficulty",     meaning:"Something very easy to do.",                                             example:"The exam was a piece of cake — I finished in 20 minutes."},
  {n:4,   expr:"Actions speak louder than words",                type:"proverb",     cat:"Character",      meaning:"What someone does matters more than what they say.",                     example:"He promised to help but never did — actions speak louder than words."},
  {n:5,   expr:"Add insult to injury",                           type:"idiom",       cat:"Bad Situations", meaning:"To make an already bad situation even worse.",                           example:"They cancelled my flight, then lost my bag — adding insult to injury!"},
  {n:6,   expr:"Barking up the wrong tree",                      type:"idiom",       cat:"Mistakes",       meaning:"Pursuing a mistaken or misguided course of action.",                    example:"If you think I took your keys, you're barking up the wrong tree."},
  {n:7,   expr:"Beat around the bush",                           type:"idiom",       cat:"Communication",  meaning:"Avoid the main topic; not speaking directly about the issue.",           example:"Stop beating around the bush and just tell me what happened."},
  {n:8,   expr:"Break a leg",                                    type:"idiom",       cat:"Encouragement",  meaning:"Good luck! (especially said to performers before going on stage).",     example:"You're on in five minutes — break a leg!"},
  {n:9,   expr:"Burn the midnight oil",                          type:"idiom",       cat:"Work & Effort",  meaning:"To work or study very late into the night.",                            example:"She burned the midnight oil to finish her dissertation."},
  {n:10,  expr:"By the skin of your teeth",                      type:"idiom",       cat:"Luck & Fate",    meaning:"Just barely; with very little margin to spare.",                        example:"I passed the exam by the skin of my teeth — I got 51%."},
  {n:11,  expr:"Call it a day",                                  type:"idiom",       cat:"Work & Effort",  meaning:"To stop working and rest for the remainder of the day.",                example:"We've done enough for now — let's call it a day."},
  {n:12,  expr:"Caught between a rock and a hard place",         type:"idiom",       cat:"Bad Situations", meaning:"Facing two equally difficult choices with no easy way out.",            example:"I can't afford rent or food — I'm caught between a rock and a hard place."},
  {n:13,  expr:"Cut corners",                                    type:"idiom",       cat:"Mistakes",       meaning:"Do something the cheapest or easiest way, sacrificing quality.",        example:"The builders cut corners and the roof started leaking."},
  {n:14,  expr:"Cry over spilled milk",                          type:"idiom",       cat:"Attitude",       meaning:"Be upset about something that cannot be changed.",                      example:"The deadline passed — no point crying over spilled milk."},
  {n:15,  expr:"Curiosity killed the cat",                       type:"proverb",     cat:"Character",      meaning:"Being too inquisitive can lead to trouble or danger.",                  example:"Don't snoop through his messages — curiosity killed the cat."},
  {n:16,  expr:"Don't count your chickens before they hatch",    type:"proverb",     cat:"Caution",        meaning:"Don't assume success before it actually happens.",                      example:"I haven't got the offer yet — don't count your chickens."},
  {n:17,  expr:"Don't put all your eggs in one basket",          type:"proverb",     cat:"Caution",        meaning:"Don't risk everything on a single venture.",                            example:"Invest in different assets — don't put all your eggs in one basket."},
  {n:18,  expr:"Draw the line",                                  type:"idiom",       cat:"Boundaries",     meaning:"Set a firm limit on what you will tolerate.",                           example:"I draw the line at working weekends — that's my family time."},
  {n:19,  expr:"Drop in the bucket",                             type:"idiom",       cat:"Value",          meaning:"A small, insignificant amount compared to what is needed.",             example:"The donation was generous, but it's just a drop in the bucket."},
  {n:20,  expr:"Dressed to the nines",                           type:"idiom",       cat:"Appearance",     meaning:"Dressed very elegantly and stylishly.",                                 example:"She arrived at the gala dressed to the nines."},
  {n:21,  expr:"Every cloud has a silver lining",                type:"proverb",     cat:"Optimism",       meaning:"There is something positive in every bad situation.",                   example:"I missed the flight, but every cloud has a silver lining — I met my partner."},
  {n:22,  expr:"Eye for an eye",                                 type:"idiom",       cat:"Justice",        meaning:"Punishment equivalent to the offense committed.",                       example:"He demanded justice — an eye for an eye."},
  {n:23,  expr:"Face the music",                                 type:"idiom",       cat:"Consequences",   meaning:"Accept and deal with the unpleasant consequences of your actions.",     example:"He made the mistake, and now he has to face the music."},
  {n:24,  expr:"Feeling under the weather",                      type:"idiom",       cat:"Health",         meaning:"Feeling ill or unwell.",                                                example:"I'm a bit under the weather — I think I'm getting a cold."},
  {n:25,  expr:"Fingers crossed",                                type:"idiom",       cat:"Luck & Fate",    meaning:"Hoping for good luck or a positive outcome.",                           example:"The results come out tomorrow — fingers crossed!"},
  {n:26,  expr:"Get out of hand",                                type:"idiom",       cat:"Control",        meaning:"Become uncontrolled or chaotic.",                                       example:"The party got completely out of hand by midnight."},
  {n:27,  expr:"Get your act together",                          type:"idiom",       cat:"Character",      meaning:"Organize yourself; start behaving more responsibly.",                   example:"If you want to pass, you need to get your act together."},
  {n:28,  expr:"Give the benefit of the doubt",                  type:"idiom",       cat:"Attitude",       meaning:"Trust someone, despite uncertainty, rather than assuming the worst.",   example:"She was late, but I'll give her the benefit of the doubt."},
  {n:29,  expr:"Go back to square one",                          type:"idiom",       cat:"Mistakes",       meaning:"Start again from the very beginning after a failure.",                  example:"The deal fell through — we have to go back to square one."},
  {n:30,  expr:"Hang in there",                                  type:"idiom",       cat:"Encouragement",  meaning:"Persist; keep going despite difficulties.",                             example:"Hang in there — the interview is almost over."},
  {n:31,  expr:"Hit the nail on the head",                       type:"idiom",       cat:"Communication",  meaning:"Say or do exactly the right thing; be precisely correct.",              example:"You hit the nail on the head — that's exactly what the problem is."},
  {n:32,  expr:"Hit the sack",                                   type:"idiom",       cat:"Daily Life",     meaning:"Go to bed or go to sleep.",                                             example:"I'm exhausted — I'm going to hit the sack early tonight."},
  {n:33,  expr:"In the same boat",                               type:"idiom",       cat:"Relationships",  meaning:"In the same unpleasant situation as others.",                           example:"We're all struggling this semester — we're in the same boat."},
  {n:34,  expr:"Kill two birds with one stone",                  type:"idiom",       cat:"Efficiency",     meaning:"Accomplish two things with a single action.",                           example:"I'll visit dad and pick up groceries — kill two birds with one stone."},
  {n:35,  expr:"Let the cat out of the bag",                     type:"idiom",       cat:"Communication",  meaning:"Accidentally reveal a secret.",                                         example:"She let the cat out of the bag about the surprise party."},
  {n:36,  expr:"Look before you leap",                           type:"proverb",     cat:"Caution",        meaning:"Think carefully before taking any action.",                             example:"You should research the company before signing — look before you leap."},
  {n:37,  expr:"Miss the boat",                                  type:"idiom",       cat:"Mistakes",       meaning:"Miss an opportunity; be too late to take advantage of something.",      example:"We missed the boat on that investment — the price tripled."},
  {n:38,  expr:"No pain, no gain",                               type:"proverb",     cat:"Work & Effort",  meaning:"Suffering and hard work are necessary to achieve something worthwhile.",  example:"Training hurts, but no pain, no gain."},
  {n:39,  expr:"Not my cup of tea",                              type:"idiom",       cat:"Preference",     meaning:"Not something you enjoy or are interested in.",                         example:"Horror movies are not my cup of tea — I prefer comedies."},
  {n:40,  expr:"Off the top of my head",                         type:"idiom",       cat:"Communication",  meaning:"From memory, without careful thought or preparation.",                  example:"Off the top of my head, I'd say it costs around £200."},
  {n:41,  expr:"Off the hook",                                   type:"idiom",       cat:"Consequences",   meaning:"Freed from blame, responsibility, or an obligation.",                   example:"The charges were dropped — he's completely off the hook."},
  {n:42,  expr:"On thin ice",                                    type:"idiom",       cat:"Bad Situations", meaning:"In a risky or precarious situation.",                                   example:"After the third warning, he's on thin ice with his employer."},
  {n:43,  expr:"Pull someone's leg",                             type:"idiom",       cat:"Humour",         meaning:"To joke with or tease someone.",                                        example:"Are you serious? Or are you pulling my leg?"},
  {n:44,  expr:"Put all your eggs in one basket",                type:"proverb",     cat:"Caution",        meaning:"Risk everything on a single venture or option.",                        example:"He invested everything in one stock — never put all your eggs in one basket."},
  {n:45,  expr:"Quick on the draw",                              type:"idiom",       cat:"Character",      meaning:"Quick to react or respond to a situation.",                             example:"She's quick on the draw — she answered before anyone else."},
  {n:46,  expr:"Read between the lines",                         type:"idiom",       cat:"Communication",  meaning:"Understand the hidden meaning behind what is said.",                   example:"Reading between the lines, it's clear she wasn't happy."},
  {n:47,  expr:"Right off the bat",                              type:"idiom",       cat:"Time",           meaning:"Immediately; without any delay.",                                       example:"Right off the bat, she knew something was wrong."},
  {n:48,  expr:"Spill the beans",                                type:"idiom",       cat:"Communication",  meaning:"Reveal secret information, often unintentionally.",                    example:"Don't spill the beans about the surprise — it's a secret!"},
  {n:49,  expr:"Steal someone's thunder",                        type:"idiom",       cat:"Relationships",  meaning:"Take attention or credit away from someone else.",                     example:"He announced his news right after hers — stealing her thunder."},
  {n:50,  expr:"Straight from the horse's mouth",                type:"idiom",       cat:"Communication",  meaning:"Directly from the original or most reliable source.",                  example:"I heard it straight from the horse's mouth — the CEO confirmed it."},
  {n:51,  expr:"Take it with a grain of salt",                   type:"idiom",       cat:"Attitude",       meaning:"Don't take it too seriously; be skeptical.",                           example:"Take his stories with a grain of salt — he tends to exaggerate."},
  {n:52,  expr:"The ball is in your court",                      type:"idiom",       cat:"Responsibility", meaning:"It's your decision or responsibility now.",                             example:"I've made my offer — the ball is in your court."},
  {n:53,  expr:"Under the weather",                              type:"idiom",       cat:"Health",         meaning:"Feeling ill or unwell.",                                                example:"She's been under the weather all week — probably the flu."},
  {n:54,  expr:"Up in arms",                                     type:"idiom",       cat:"Emotions",       meaning:"Angry and protesting about something.",                                example:"The workers were up in arms over the proposed pay cuts."},
  {n:55,  expr:"Variety is the spice of life",                   type:"proverb",     cat:"Optimism",       meaning:"Different experiences make life more interesting and enjoyable.",       example:"Try a new cuisine every week — variety is the spice of life!"},
  {n:56,  expr:"When pigs fly",                                  type:"idiom",       cat:"Impossibility",  meaning:"Something that will never happen.",                                    example:"He'll apologise when pigs fly — he never admits he's wrong."},
  {n:57,  expr:"Wild goose chase",                               type:"idiom",       cat:"Mistakes",       meaning:"A futile pursuit or hopeless search.",                                 example:"Searching for that file was a wild goose chase — it never existed."},
  {n:58,  expr:"You can't judge a book by its cover",            type:"proverb",     cat:"Character",      meaning:"Don't judge someone based solely on appearance.",                      example:"He looked scruffy but was brilliant — you can't judge a book by its cover."},
  {n:59,  expr:"A bird in the hand is worth two in the bush",    type:"proverb",     cat:"Caution",        meaning:"Better to keep what you have than risk losing it seeking more.",        example:"Take the job offer — a bird in the hand is worth two in the bush."},
  {n:60,  expr:"A penny for your thoughts",                      type:"idiom",       cat:"Communication",  meaning:"Asking someone what they are thinking about.",                          example:"You've been quiet all evening — a penny for your thoughts?"},
  {n:61,  expr:"All bark and no bite",                           type:"idiom",       cat:"Character",      meaning:"Someone who talks tough but never actually takes action.",              example:"Don't worry about his threats — he's all bark and no bite."},
  {n:62,  expr:"Bite off more than you can chew",                type:"idiom",       cat:"Mistakes",       meaning:"Take on more responsibility or work than you can handle.",              example:"He bit off more than he could chew by managing three projects at once."},
  {n:63,  expr:"Break the ice",                                  type:"idiom",       cat:"Communication",  meaning:"Initiate conversation or ease tension in a social situation.",          example:"He told a joke to break the ice at the start of the meeting."},
  {n:64,  expr:"Burning the candle at both ends",                type:"idiom",       cat:"Work & Effort",  meaning:"Working excessively hard without enough rest, leading to exhaustion.",  example:"She's burning the candle at both ends — work all day, study all night."},
  {n:65,  expr:"Caught red-handed",                              type:"idiom",       cat:"Consequences",   meaning:"Caught in the act of doing something wrong or illegal.",               example:"The shoplifter was caught red-handed by the security guard."},
  {n:66,  expr:"Cut to the chase",                               type:"idiom",       cat:"Communication",  meaning:"Get to the point without wasting time on unnecessary details.",         example:"Let's cut to the chase — how much will it cost?"},
  {n:67,  expr:"Every dog has its day",                          type:"proverb",     cat:"Optimism",       meaning:"Everyone will have their moment of success or good fortune.",           example:"Keep trying — every dog has its day, and yours will come."},
  {n:68,  expr:"Falling on deaf ears",                           type:"idiom",       cat:"Communication",  meaning:"When advice or requests are ignored and not listened to.",             example:"All her warnings fell on deaf ears — nobody listened."},
  {n:69,  expr:"Get your ducks in a row",                        type:"idiom",       cat:"Work & Effort",  meaning:"Organize yourself and prepare thoroughly for something.",              example:"Get your ducks in a row before the investors arrive."},
  {n:70,  expr:"Hit the ground running",                         type:"idiom",       cat:"Work & Effort",  meaning:"Start an activity with great enthusiasm and energy from the beginning.", example:"The new manager hit the ground running — she had a plan on day one."},
  {n:71,  expr:"In one ear and out the other",                   type:"idiom",       cat:"Communication",  meaning:"When information is not retained; quickly forgotten.",                  example:"I told him three times, but it goes in one ear and out the other."},
  {n:72,  expr:"Jump through hoops",                             type:"idiom",       cat:"Difficulty",     meaning:"Go through many complicated procedures to achieve something.",          example:"I had to jump through so many hoops just to get a visa."},
  {n:73,  expr:"Keep your chin up",                              type:"idiom",       cat:"Encouragement",  meaning:"Stay positive and remain optimistic during difficult times.",           example:"I know it's hard, but keep your chin up — things will improve."},
  {n:74,  expr:"Know the ropes",                                 type:"idiom",       cat:"Experience",     meaning:"Be familiar with how something works; understand the procedures.",      example:"Ask Sarah — she knows the ropes and can show you around."},
  {n:75,  expr:"Leave no stone unturned",                        type:"idiom",       cat:"Work & Effort",  meaning:"Try every possible option or course of action.",                       example:"The detective left no stone unturned in her search for the truth."},
  {n:76,  expr:"Let sleeping dogs lie",                          type:"proverb",     cat:"Caution",        meaning:"Don't stir up old problems or issues that have been forgotten.",        example:"Don't bring up the argument again — let sleeping dogs lie."},
  {n:77,  expr:"Lose the plot",                                  type:"slang",       cat:"Confusion",      meaning:"Become confused, frantic, or lose control of a situation.",            example:"He completely lost the plot during the negotiation."},
  {n:78,  expr:"Make ends meet",                                 type:"idiom",       cat:"Finance",        meaning:"Earn just enough money to cover one's basic needs.",                    example:"With the rent increase, it's hard to make ends meet."},
  {n:79,  expr:"Neck and neck",                                  type:"idiom",       cat:"Competition",    meaning:"Very close in a competition; almost equal.",                           example:"The two candidates were neck and neck in the polls."},
  {n:80,  expr:"New kid on the block",                           type:"idiom",       cat:"Experience",     meaning:"Someone who is new to a place, group, or activity.",                   example:"As the new kid on the block, she had a lot to prove."},
  {n:81,  expr:"Once in a blue moon",                            type:"idiom",       cat:"Time",           meaning:"Very rarely; not very often at all.",                                  example:"We only see our cousins once in a blue moon."},
  {n:82,  expr:"On the ball",                                    type:"idiom",       cat:"Character",      meaning:"Alert, competent, and in control of a situation.",                     example:"The new assistant is really on the ball."},
  {n:83,  expr:"On the fence",                                   type:"idiom",       cat:"Decisions",      meaning:"Undecided or uncommitted about a particular issue.",                   example:"I'm still on the fence about whether to accept the offer."},
  {n:84,  expr:"Out of the blue",                                type:"idiom",       cat:"Surprise",       meaning:"Unexpectedly; without any prior warning or indication.",               example:"He called me out of the blue after five years of silence."},
  {n:85,  expr:"Over the moon",                                  type:"idiom",       cat:"Emotions",       meaning:"Extremely happy and delighted.",                                       example:"She was over the moon when she got the promotion."},
  {n:86,  expr:"Pass the buck",                                  type:"idiom",       cat:"Responsibility", meaning:"Shift responsibility to someone else instead of accepting it yourself.", example:"Don't pass the buck — you made the decision, own it."},
  {n:87,  expr:"Piece of the action",                            type:"idiom",       cat:"Opportunity",    meaning:"A share in the profits or benefits of something.",                     example:"He wanted a piece of the action once the startup took off."},
  {n:88,  expr:"Play devil's advocate",                          type:"idiom",       cat:"Communication",  meaning:"Argue a point for the sake of debate, not because you believe it.",    example:"Let me play devil's advocate — what if the plan fails?"},
  {n:89,  expr:"Pull the plug",                                  type:"idiom",       cat:"Decisions",      meaning:"Put an end to a project or activity; stop something from continuing.",  example:"The board decided to pull the plug on the new product line."},
  {n:90,  expr:"Rain on someone's parade",                       type:"idiom",       cat:"Relationships",  meaning:"Spoil someone's plans or pleasure.",                                   example:"I hate to rain on your parade, but the venue is double-booked."},
  {n:91,  expr:"Run out of steam",                               type:"idiom",       cat:"Energy",         meaning:"Lose all energy, enthusiasm, or motivation.",                          example:"The project ran out of steam after the lead developer left."},
  {n:92,  expr:"Saved by the bell",                              type:"idiom",       cat:"Luck & Fate",    meaning:"Rescued from a difficult situation by a timely interruption.",          example:"The phone rang just as my boss started asking awkward questions — saved by the bell."},
  {n:93,  expr:"See eye to eye",                                 type:"idiom",       cat:"Relationships",  meaning:"Agree with someone; share the same views.",                            example:"They don't always see eye to eye, but they respect each other."},
  {n:94,  expr:"Sit on the fence",                               type:"idiom",       cat:"Decisions",      meaning:"Refuse to make a decision or take a definite position.",               example:"Stop sitting on the fence and tell us what you think."},
  {n:95,  expr:"Skating on thin ice",                            type:"idiom",       cat:"Bad Situations", meaning:"Doing something risky that could have serious consequences.",          example:"You're skating on thin ice with those comments about the boss."},
  {n:96,  expr:"Sleep on it",                                    type:"idiom",       cat:"Decisions",      meaning:"Think about a decision carefully before deciding overnight.",           example:"It's a big commitment — sleep on it and let me know tomorrow."},
  {n:97,  expr:"Speak of the devil",                             type:"idiom",       cat:"Coincidence",    meaning:"Said when the person you were just talking about appears.",            example:"Speak of the devil — we were just talking about you!"},
  {n:98,  expr:"Take a rain check",                              type:"idiom",       cat:"Decisions",      meaning:"Politely decline but say you'd like to do it at another time.",        example:"I can't make lunch today — can I take a rain check?"},
  {n:99,  expr:"Take the bull by the horns",                     type:"idiom",       cat:"Character",      meaning:"Deal with a difficult situation boldly and directly.",                  example:"She took the bull by the horns and confronted her manager."},
  {n:100, expr:"The best of both worlds",                        type:"idiom",       cat:"Advantage",      meaning:"A situation where you can enjoy two advantages at the same time.",     example:"Working from home gives me the best of both worlds — peace and flexibility."},
  {n:101, expr:"The elephant in the room",                       type:"idiom",       cat:"Communication",  meaning:"An obvious problem or issue that everyone avoids discussing.",          example:"No one mentioned the budget cuts — it was the elephant in the room."},
  {n:102, expr:"The last straw",                                 type:"idiom",       cat:"Bad Situations", meaning:"The final problem in a series that causes everything to collapse.",    example:"Forgetting my birthday was the last straw — I ended the friendship."},
  {n:103, expr:"The whole nine yards",                           type:"idiom",       cat:"Completeness",   meaning:"Everything possible; the full amount of something.",                   example:"She planned the wedding — flowers, cake, band, the whole nine yards."},
  {n:104, expr:"Think outside the box",                          type:"idiom",       cat:"Creativity",     meaning:"Think creatively and unconventionally to solve a problem.",            example:"We need to think outside the box to compete in this market."},
  {n:105, expr:"Throw in the towel",                             type:"idiom",       cat:"Giving Up",      meaning:"Accept defeat; give up on something.",                                 example:"After months of losses, he threw in the towel and closed the shop."},
  {n:106, expr:"Throw someone under the bus",                    type:"idiom",       cat:"Betrayal",       meaning:"Sacrifice someone to avoid blame yourself.",                           example:"When things went wrong, he threw his assistant under the bus."},
  {n:107, expr:"Time flies",                                     type:"idiom",       cat:"Time",           meaning:"Time seems to pass very quickly.",                                     example:"I can't believe it's December already — time flies!"},
  {n:108, expr:"To be on the safe side",                         type:"idiom",       cat:"Caution",        meaning:"To take extra precautions to avoid a problem.",                        example:"Take an umbrella, just to be on the safe side."},
  {n:109, expr:"Too many cooks spoil the broth",                 type:"proverb",     cat:"Teamwork",       meaning:"Too many people involved in something can ruin it.",                   example:"Six managers on one project? Too many cooks spoil the broth."},
  {n:110, expr:"Touch wood",                                     type:"idiom",       cat:"Luck & Fate",    meaning:"Said to avoid bad luck after a positive statement.",                   example:"I've never had a car accident — touch wood."},
  {n:111, expr:"Turn a blind eye",                               type:"idiom",       cat:"Attitude",       meaning:"Deliberately ignore something you know is wrong.",                     example:"Management turned a blind eye to the safety violations."},
  {n:112, expr:"Turn over a new leaf",                           type:"idiom",       cat:"Change",         meaning:"Change your behaviour or habits for the better.",                      example:"He promised to turn over a new leaf after the incident."},
  {n:113, expr:"Two peas in a pod",                              type:"idiom",       cat:"Similarity",     meaning:"Two people who are very similar in appearance, habits, or character.",  example:"Those two are two peas in a pod — always together, always laughing."},
  {n:114, expr:"Under someone's thumb",                          type:"idiom",       cat:"Control",        meaning:"Totally controlled by another person.",                                example:"She was completely under his thumb and couldn't make her own decisions."},
  {n:115, expr:"Up for grabs",                                   type:"idiom",       cat:"Opportunity",    meaning:"Available for anyone to take or win.",                                 example:"The contract is still up for grabs — apply now."},
  {n:116, expr:"Up the ante",                                    type:"idiom",       cat:"Competition",    meaning:"Increase the stakes, demands, or risks of a situation.",              example:"The rival company upped the ante with a much lower price."},
  {n:117, expr:"Wet behind the ears",                            type:"idiom",       cat:"Experience",     meaning:"Inexperienced and naive.",                                             example:"He's still wet behind the ears — give him time to learn the role."},
  {n:118, expr:"Wrap your head around",                          type:"idiom",       cat:"Understanding",  meaning:"Understand something complicated.",                                    example:"I still can't wrap my head around quantum physics."},
  {n:119, expr:"You reap what you sow",                          type:"proverb",     cat:"Consequences",   meaning:"The consequences you experience are a direct result of your actions.",  example:"He treated people badly for years — you reap what you sow."},
  {n:120, expr:"Zero in on",                                     type:"phrasal verb",cat:"Focus",          meaning:"Focus your attention on something.",                                   example:"Let's zero in on the main issue and stop getting distracted."},
  {n:121, expr:"Ace something",                                  type:"slang",       cat:"Success",        meaning:"Perform or do something extremely well.",                              example:"She aced the interview — she starts Monday."},
  {n:122, expr:"All in",                                         type:"slang",       cat:"Commitment",     meaning:"Totally committed or exhausted.",                                      example:"After that marathon, I'm completely all in."},
  {n:123, expr:"Back someone up",                                type:"phrasal verb",cat:"Support",        meaning:"Give support or confirmation to someone.",                             example:"I'll back you up in the meeting — your idea is solid."},
  {n:124, expr:"Bail on someone",                                type:"phrasal verb",cat:"Relationships",  meaning:"Cancel plans or abandon someone at the last minute.",                  example:"She bailed on us again — third time this month."},
  {n:125, expr:"Bear with me",                                   type:"idiom",       cat:"Patience",       meaning:"Be patient and wait while I do something.",                            example:"Bear with me while I find the right file."},
  {n:126, expr:"Bend over backwards",                            type:"idiom",       cat:"Effort",         meaning:"Try extremely hard to help or please someone.",                        example:"The team bent over backwards to meet the client's demands."},
  {n:127, expr:"Bite the bullet",                                type:"idiom",       cat:"Courage",        meaning:"Endure a painful or difficult situation with courage.",                example:"Just bite the bullet and apologise — it'll fix everything."},
  {n:128, expr:"Bite the dust",                                  type:"idiom",       cat:"Failure",        meaning:"Fail completely or come to an end; die.",                              example:"Three more startups bit the dust during the recession."},
  {n:129, expr:"Blow someone's mind",                            type:"slang",       cat:"Surprise",       meaning:"Amaze or astonish someone greatly.",                                  example:"The ending of that film totally blew my mind."},
  {n:130, expr:"Break down",                                     type:"phrasal verb",cat:"Failure",        meaning:"Stop functioning; or to lose emotional control.",                      example:"My car broke down on the motorway this morning."},
  {n:131, expr:"Bring something up",                             type:"phrasal verb",cat:"Communication",  meaning:"Introduce a topic into a conversation.",                              example:"He brought up the salary issue during the appraisal."},
  {n:132, expr:"Burn bridges",                                   type:"idiom",       cat:"Relationships",  meaning:"Destroy a relationship permanently by one's actions.",                 example:"Don't burn bridges when you leave — you might need them again."},
  {n:133, expr:"Call off",                                       type:"phrasal verb",cat:"Decisions",      meaning:"Cancel something that was planned.",                                   example:"They called off the meeting due to the storm."},
  {n:134, expr:"Catch up",                                       type:"phrasal verb",cat:"Progress",       meaning:"Reach the same level as someone; or talk after time apart.",           example:"Let's catch up over coffee — it's been months!"},
  {n:135, expr:"Chill out",                                      type:"slang",       cat:"Emotions",       meaning:"Relax and calm down.",                                                example:"Chill out — it's just a game, not the end of the world."},
  {n:136, expr:"Come across",                                    type:"phrasal verb",cat:"Discovery",      meaning:"Find or encounter something/someone by chance.",                       example:"I came across her old diary while cleaning the attic."},
  {n:137, expr:"Come clean",                                     type:"idiom",       cat:"Honesty",        meaning:"Confess or admit the truth about something.",                          example:"He finally came clean about where he'd been that night."},
  {n:138, expr:"Cool your jets",                                 type:"slang",       cat:"Emotions",       meaning:"Calm down; stop being so agitated or impatient.",                     example:"Cool your jets — the results will come when they come."},
  {n:139, expr:"Count someone in",                               type:"phrasal verb",cat:"Inclusion",      meaning:"Include someone in a plan or activity.",                              example:"Are you joining us for dinner? Count me in!"},
  {n:140, expr:"Crash and burn",                                 type:"slang",       cat:"Failure",        meaning:"Fail spectacularly and completely.",                                   example:"His presentation crashed and burned — the client walked out."},
  {n:141, expr:"Dead in the water",                              type:"idiom",       cat:"Failure",        meaning:"A plan or project that has completely failed and cannot succeed.",     example:"Without funding, the project is dead in the water."},
  {n:142, expr:"Die down",                                       type:"phrasal verb",cat:"Change",         meaning:"Become less intense or active; subside.",                             example:"The controversy eventually died down after the apology."},
  {n:143, expr:"Dig your heels in",                              type:"idiom",       cat:"Stubbornness",   meaning:"Refuse to change your position; be stubborn.",                        example:"He dug his heels in and refused to compromise on price."},
  {n:144, expr:"Do someone a solid",                             type:"slang",       cat:"Favours",        meaning:"Do someone a significant favour.",                                     example:"Can you do me a solid and cover my shift on Friday?"},
  {n:145, expr:"Down to earth",                                  type:"idiom",       cat:"Character",      meaning:"Practical, realistic, and unpretentious.",                            example:"Despite her fame, she's completely down to earth."},
  {n:146, expr:"Drop the ball",                                  type:"idiom",       cat:"Mistakes",       meaning:"Fail to do something that was expected; make a careless mistake.",    example:"We dropped the ball on the deadline — the client is furious."},
  {n:147, expr:"Eat crow",                                       type:"idiom",       cat:"Humility",       meaning:"Admit that you were wrong after being very confident you were right.",  example:"He had to eat crow after his bold prediction failed completely."},
  {n:148, expr:"Elephant memory",                                type:"idiom",       cat:"Memory",         meaning:"An extremely good memory for past events.",                            example:"Don't try to revise history with her — she has an elephant memory."},
  {n:149, expr:"Fade out",                                       type:"phrasal verb",cat:"Change",         meaning:"Gradually disappear or become less important.",                        example:"The trend began to fade out by the end of the year."},
  {n:150, expr:"Fall apart",                                     type:"phrasal verb",cat:"Failure",        meaning:"Break into pieces; or lose control of one's emotions.",               example:"The coalition fell apart after the finance scandal."},
  {n:151, expr:"Feel it in your bones",                          type:"idiom",       cat:"Intuition",      meaning:"Have a strong intuition or feeling about something.",                  example:"I feel it in my bones — something big is going to happen today."},
  {n:152, expr:"Figure out",                                     type:"phrasal verb",cat:"Understanding",  meaning:"Understand or find the solution to something.",                        example:"I finally figured out how to fix the bug."},
  {n:153, expr:"Fire someone up",                                type:"phrasal verb",cat:"Motivation",     meaning:"Make someone very enthusiastic or excited about something.",           example:"The coach fired up the team before the final."},
  {n:154, expr:"First things first",                             type:"idiom",       cat:"Priorities",     meaning:"The most important matters should be dealt with before other things.",  example:"First things first — let's agree on the budget before anything else."},
  {n:155, expr:"Fit as a fiddle",                                type:"idiom",       cat:"Health",         meaning:"In perfect health; very fit and well.",                                example:"She's 80 years old and fit as a fiddle."},
  {n:156, expr:"Fix someone up",                                 type:"phrasal verb",cat:"Relationships",  meaning:"Arrange a date or meeting for someone; or repair something.",          example:"My sister wants to fix me up with her colleague."},
  {n:157, expr:"Flake out",                                      type:"phrasal verb",cat:"Reliability",    meaning:"Fail to do something promised; let someone down at the last minute.",  example:"He always flakes out at the last minute — I'm done inviting him."},
  {n:158, expr:"Fly by the seat of your pants",                  type:"idiom",       cat:"Improvisation",  meaning:"Act without planning or preparation; improvise.",                      example:"We had no script — we flew by the seat of our pants all evening."},
  {n:159, expr:"Foam at the mouth",                              type:"idiom",       cat:"Emotions",       meaning:"Be extremely angry and unable to control your rage.",                  example:"He was foaming at the mouth when he found out they'd sold the car."},
  {n:160, expr:"Follow through",                                 type:"phrasal verb",cat:"Commitment",     meaning:"Carry out a plan or promise to its conclusion.",                       example:"She followed through on every commitment she made."},
  {n:161, expr:"Freak out",                                      type:"phrasal verb",cat:"Emotions",       meaning:"Become very scared, upset, or lose control of emotions.",              example:"Don't freak out — it's just a small cut."},
  {n:162, expr:"Get a grip",                                     type:"slang",       cat:"Self-control",   meaning:"Control your emotions and behave rationally.",                         example:"Get a grip — panicking won't help anyone right now."},
  {n:163, expr:"Get along with",                                 type:"phrasal verb",cat:"Relationships",  meaning:"Have a good friendly relationship with someone.",                      example:"I get along really well with my new flatmates."},
  {n:164, expr:"Get away with",                                  type:"phrasal verb",cat:"Consequences",   meaning:"Avoid punishment or blame for something wrong.",                       example:"He's been cutting corners for years and getting away with it."},
  {n:165, expr:"Get on someone's nerves",                        type:"idiom",       cat:"Irritation",     meaning:"Irritate or annoy someone.",                                           example:"His constant humming is really getting on my nerves."},
  {n:166, expr:"Get over it",                                    type:"phrasal verb",cat:"Recovery",       meaning:"Recover from or stop being upset about something.",                   example:"It was just a game — you need to get over it."},
  {n:167, expr:"Get the ball rolling",                           type:"idiom",       cat:"Initiative",     meaning:"Start an activity or process.",                                        example:"Let's get the ball rolling by assigning roles."},
  {n:168, expr:"Ghost someone",                                  type:"slang",       cat:"Relationships",  meaning:"Suddenly stop all communication with someone without explanation.",    example:"She totally ghosted him after the third date."},
  {n:169, expr:"Give it a shot",                                 type:"idiom",       cat:"Attempt",        meaning:"Try something even though success is uncertain.",                      example:"I've never cooked Italian before, but I'll give it a shot."},
  {n:170, expr:"Give someone a heads up",                        type:"idiom",       cat:"Communication",  meaning:"Warn or inform someone about something in advance.",                   example:"Give me a heads up if the client calls — I'm in a meeting."},
  {n:171, expr:"Give someone the cold shoulder",                 type:"idiom",       cat:"Relationships",  meaning:"Deliberately ignore or show indifference toward someone.",             example:"She gave him the cold shoulder after the argument."},
  {n:172, expr:"Go down the drain",                              type:"idiom",       cat:"Waste",          meaning:"Be wasted; fail or be ruined.",                                        example:"All that work went down the drain when the server crashed."},
  {n:173, expr:"Go the extra mile",                              type:"idiom",       cat:"Effort",         meaning:"Make more effort than is required.",                                   example:"She always goes the extra mile for her clients."},
  {n:174, expr:"Gut feeling",                                    type:"idiom",       cat:"Intuition",      meaning:"An instinctive feeling or reaction without logical reasoning.",        example:"My gut feeling says this deal isn't right — don't sign it."},
  {n:175, expr:"Have a blast",                                   type:"slang",       cat:"Enjoyment",      meaning:"Have a very enjoyable and exciting time.",                             example:"We had an absolute blast at the festival last weekend."},
  {n:176, expr:"Have a lot on your plate",                       type:"idiom",       cat:"Work & Effort",  meaning:"Have many responsibilities or things to deal with.",                   example:"I can't take on more work — I already have a lot on my plate."},
  {n:177, expr:"Head over heels",                                type:"idiom",       cat:"Emotions",       meaning:"Deeply in love; completely infatuated with someone.",                  example:"He fell head over heels for her the moment they met."},
  {n:178, expr:"Hit the books",                                  type:"slang",       cat:"Study",          meaning:"Study hard; start studying.",                                           example:"Exams start next week — time to hit the books."},
  {n:179, expr:"Hold your horses",                               type:"idiom",       cat:"Patience",       meaning:"Slow down; wait and be more patient.",                                 example:"Hold your horses — we haven't agreed on the price yet."},
  {n:180, expr:"Hype someone up",                                type:"slang",       cat:"Motivation",     meaning:"Build excitement or enthusiasm around someone or something.",          example:"She hyped up the whole crowd before the performance."},
  {n:181, expr:"In a nutshell",                                  type:"idiom",       cat:"Communication",  meaning:"Summarised in a very brief way.",                                      example:"In a nutshell, the plan is to launch in three markets simultaneously."},
  {n:182, expr:"In hot water",                                   type:"idiom",       cat:"Bad Situations", meaning:"In a difficult situation likely to lead to trouble or punishment.",    example:"He's in hot water with the tax office again."},
  {n:183, expr:"In the bag",                                     type:"idiom",       cat:"Success",        meaning:"Certain to succeed or be achieved.",                                   example:"With a 20-point lead, the match is in the bag."},
  {n:184, expr:"In the loop",                                    type:"idiom",       cat:"Communication",  meaning:"Being kept informed about what is happening.",                         example:"Keep me in the loop — I want updates every hour."},
  {n:185, expr:"Keep a low profile",                             type:"idiom",       cat:"Discretion",     meaning:"Avoid attracting attention to yourself.",                              example:"After the scandal, he kept a low profile for several months."},
  {n:186, expr:"Keep tabs on",                                   type:"phrasal verb",cat:"Monitoring",     meaning:"Monitor or keep track of someone or something.",                       example:"The manager kept tabs on all project deadlines."},
  {n:187, expr:"Kick the bucket",                                type:"idiom",       cat:"Death",          meaning:"Die.",                                                                 example:"The old photocopier finally kicked the bucket."},
  {n:188, expr:"Laid back",                                      type:"slang",       cat:"Character",      meaning:"Relaxed and easy-going; not stressed or anxious.",                    example:"He's so laid back — nothing ever seems to bother him."},
  {n:189, expr:"Leave someone hanging",                          type:"idiom",       cat:"Relationships",  meaning:"Fail to give someone a response or conclusion they are waiting for.",  example:"Don't leave me hanging — did you get the job?"},
  {n:190, expr:"Level up",                                       type:"slang",       cat:"Progress",       meaning:"Improve or advance to a higher level of skill or status.",             example:"She's been levelling up her design skills every month."},
  {n:191, expr:"Look up to someone",                             type:"phrasal verb",cat:"Respect",        meaning:"Admire and respect someone.",                                          example:"She always looked up to her older sister."},
  {n:192, expr:"Low-key",                                        type:"slang",       cat:"Discretion",     meaning:"Quiet, subtle, or not intended to attract attention.",                 example:"It was a low-key birthday — just a few close friends."},
  {n:193, expr:"Make a long story short",                        type:"idiom",       cat:"Communication",  meaning:"Summarise a long story or explanation into a few key points.",        example:"To make a long story short, we missed the train and had to walk."},
  {n:194, expr:"No brainer",                                     type:"slang",       cat:"Decisions",      meaning:"Something that requires no thought because it is obviously correct.",  example:"Hiring her was a no brainer — she was the best candidate by far."},
  {n:195, expr:"On a roll",                                      type:"idiom",       cat:"Success",        meaning:"Experiencing a period of continuous success.",                         example:"The team is on a roll — five wins in a row!"},
  {n:196, expr:"Own it",                                         type:"slang",       cat:"Confidence",     meaning:"Take full responsibility for something; or do it with complete confidence.", example:"She owned the stage from the moment she walked out."},
  {n:197, expr:"Pushing the envelope",                           type:"idiom",       cat:"Innovation",     meaning:"Going beyond the usual limits; trying something new and unconventional.", example:"Their new album pushes the envelope in terms of sound design."},
  {n:198, expr:"Take it easy",                                   type:"idiom",       cat:"Relaxation",     meaning:"Relax; not work too hard or get too stressed.",                        example:"The doctor told him to take it easy for at least two weeks."},
];

/* ── LEVELS ─────────────────────────────────────────────────── */
const LEVELS = [
  {level:1,  minXP:0,    label:"Beginner",     emoji:"🌱"},
  {level:2,  minXP:100,  label:"Explorer",     emoji:"🌿"},
  {level:3,  minXP:250,  label:"Learner",      emoji:"🌱"},
  {level:4,  minXP:500,  label:"Student",      emoji:"🌳"},
  {level:5,  minXP:800,  label:"Practitioner", emoji:"🌲"},
  {level:6,  minXP:1200, label:"Skilled",      emoji:"🎋"},
  {level:7,  minXP:1700, label:"Advanced",     emoji:"🌴"},
  {level:8,  minXP:2300, label:"Expert",       emoji:"⭐"},
  {level:9,  minXP:3000, label:"Master",       emoji:"💫"},
  {level:10, minXP:4000, label:"Legend",       emoji:"🌟"},
];

/* ── BADGE DEFINITIONS ──────────────────────────────────────── */
const BADGE_DEFS = [
  { id:'first_step',      emoji:'🌱', name:'First Step',        desc:'Learn your first expression',          xp:20  },
  { id:'vault_rookie',    emoji:'🔓', name:'Vault Rookie',      desc:'Learn 10 expressions',                 xp:30  },
  { id:'idiom_hunter',    emoji:'🏹', name:'Idiom Hunter',      desc:'Learn 30 idioms',                      xp:50  },
  { id:'halfway',         emoji:'⚡', name:'Halfway There',     desc:'Learn 99 expressions (50%)',           xp:100 },
  { id:'vault_master',    emoji:'🏆', name:'Vault Master',      desc:'Learn all 198 expressions',            xp:500 },
  { id:'phrasal_ninja',   emoji:'🥷', name:'Phrasal Verb Ninja',desc:'Learn all phrasal verbs',              xp:80  },
  { id:'proverb_sage',    emoji:'🧙', name:'Proverb Sage',      desc:'Learn all proverbs',                   xp:80  },
  { id:'street_smart',    emoji:'😎', name:'Street Smart',      desc:'Learn all slang expressions',          xp:60  },
  { id:'idiom_overlord',  emoji:'👑', name:'Idiom Overlord',    desc:'Learn all idioms',                     xp:120 },
  { id:'on_fire',         emoji:'🔥', name:'On Fire',           desc:'7-day streak',                         xp:40  },
  { id:'unstoppable',     emoji:'💎', name:'Unstoppable',       desc:'30-day streak',                        xp:150 },
  { id:'first_sentence',  emoji:'✍️', name:'First Sentence',   desc:'Complete your first Usage exercise',   xp:25  },
  { id:'wordsmith',       emoji:'🖋️', name:'Wordsmith',        desc:'Complete 20 Usage exercises',          xp:60  },
  { id:'perfect_round',   emoji:'🎯', name:'Perfect Round',     desc:'Score 10/10 in Quiz',                  xp:35  },
  { id:'speed_demon',     emoji:'🚀', name:'Speed Demon',       desc:'Score 10/10 in Quiz under 60s',        xp:50  },
  { id:'comeback_king',   emoji:'💪', name:'Comeback King',     desc:'Recover 10 difficult expressions',     xp:45  },
  { id:'challenge_ace',   emoji:'🧠', name:'Challenge Ace',     desc:'Score 100+ in Brain Challenge',        xp:40  },
];

/* ── STORAGE KEYS ──────────────────────────────────────────────── */
const KEYS = {
  learned:   'iv3_learned',
  difficult: 'iv3_difficult',
  xp:        'iv3_xp',
  streak:    'iv3_streak',
  lastDate:  'iv3_last_date',
  sr:        'iv3_sr',         // spaced repetition data: {n, interval, easeFactor, reps, nextReview}
  badges:    'iv3_badges',     // array of earned badge ids
  usageCount:'iv3_usage_count',// number of usage exercises completed
  recoveries:'iv3_recoveries', // count of difficult→learned recoveries
};

/* ── STATE HELPERS ─────────────────────────────────────────────── */
function getState() {
  return {
    learned:    new Set(JSON.parse(localStorage.getItem(KEYS.learned)   || '[]')),
    difficult:  new Set(JSON.parse(localStorage.getItem(KEYS.difficult) || '[]')),
    xp:         parseInt(localStorage.getItem(KEYS.xp)     || '0', 10),
    streak:     parseInt(localStorage.getItem(KEYS.streak) || '0', 10),
    lastDate:   localStorage.getItem(KEYS.lastDate) || '',
  };
}

function saveState(state) {
  localStorage.setItem(KEYS.learned,   JSON.stringify([...state.learned]));
  localStorage.setItem(KEYS.difficult, JSON.stringify([...state.difficult]));
  localStorage.setItem(KEYS.xp,        state.xp);
  localStorage.setItem(KEYS.streak,    state.streak);
  localStorage.setItem(KEYS.lastDate,  state.lastDate);
}

/* ── SPACED REPETITION ENGINE ──────────────────────────────────── */
function getSRData() {
  try { return JSON.parse(localStorage.getItem(KEYS.sr) || '{}'); }
  catch(e) { return {}; }
}

function saveSRData(data) {
  localStorage.setItem(KEYS.sr, JSON.stringify(data));
}

/*
  SR record per idiom:
  { interval: int (days), easeFactor: float, reps: int, nextReview: 'YYYY-MM-DD' }
  Rating: 'easy'(3), 'correct'(2), 'hard'(1), 'missed'(0)
*/
function updateSR(n, rating) {
  const data = getSRData();
  const today = todayStr();
  let rec = data[n] || { interval: 1, easeFactor: 2.5, reps: 0, nextReview: today };

  if (rating === 'easy') {
    rec.reps++;
    rec.interval    = Math.min(Math.round(rec.interval * 2.5), 14);
    rec.easeFactor  = Math.min(rec.easeFactor + 0.1, 3.0);
  } else if (rating === 'correct') {
    rec.reps++;
    rec.interval    = rec.reps === 1 ? 1 : rec.reps === 2 ? 3 : Math.round(rec.interval * rec.easeFactor);
    rec.interval    = Math.min(rec.interval, 14);
    rec.easeFactor  = Math.max(rec.easeFactor + 0.05, 1.3);
  } else if (rating === 'hard') {
    rec.interval    = Math.max(Math.round(rec.interval / 2), 1);
    rec.easeFactor  = Math.max(rec.easeFactor - 0.15, 1.3);
  } else { // missed
    rec.interval    = 1;
    rec.reps        = 0;
    rec.easeFactor  = Math.max(rec.easeFactor - 0.2, 1.3);
  }

  const next = new Date();
  next.setDate(next.getDate() + rec.interval);
  rec.nextReview = next.toISOString().slice(0, 10);
  data[n] = rec;
  saveSRData(data);
  return rec;
}

function getSRStatus(n) {
  const data = getSRData();
  if (!data[n]) return 'new';
  const today = todayStr();
  if (data[n].nextReview <= today) return 'due';
  const diff = Math.ceil((new Date(data[n].nextReview) - new Date(today)) / 86400000);
  return 'in ' + diff + 'd';
}

function getDueCards() {
  const data = getSRData();
  const today = todayStr();
  return DATA.filter(d => {
    if (!data[d.n]) return false;
    return data[d.n].nextReview <= today;
  });
}

/* ── BADGE ENGINE ──────────────────────────────────────────────── */
function getEarnedBadges() {
  try { return JSON.parse(localStorage.getItem(KEYS.badges) || '[]'); }
  catch(e) { return []; }
}

function checkBadges(state, extras) {
  const earned    = getEarnedBadges();
  const usageDone = parseInt(localStorage.getItem(KEYS.usageCount) || '0', 10);
  const recoveries= parseInt(localStorage.getItem(KEYS.recoveries) || '0', 10);
  const learned   = state.learned;

  const idiomCount   = DATA.filter(d => d.type === 'idiom').length;
  const provCount    = DATA.filter(d => d.type === 'proverb').length;
  const slangCount   = DATA.filter(d => d.type === 'slang').length;
  const phrasalCount = DATA.filter(d => d.type === 'phrasal verb').length;

  const learnedIdioms   = [...learned].filter(n => DATA.find(d=>d.n===n)?.type==='idiom').length;
  const learnedProverbs = [...learned].filter(n => DATA.find(d=>d.n===n)?.type==='proverb').length;
  const learnedSlang    = [...learned].filter(n => DATA.find(d=>d.n===n)?.type==='slang').length;
  const learnedPhrsal   = [...learned].filter(n => DATA.find(d=>d.n===n)?.type==='phrasal verb').length;

  const checks = [
    { id:'first_step',     cond: learned.size >= 1 },
    { id:'vault_rookie',   cond: learned.size >= 10 },
    { id:'idiom_hunter',   cond: learnedIdioms >= 30 },
    { id:'halfway',        cond: learned.size >= 99 },
    { id:'vault_master',   cond: learned.size >= 198 },
    { id:'phrasal_ninja',  cond: learnedPhrsal >= phrasalCount },
    { id:'proverb_sage',   cond: learnedProverbs >= provCount },
    { id:'street_smart',   cond: learnedSlang >= slangCount },
    { id:'idiom_overlord', cond: learnedIdioms >= idiomCount },
    { id:'on_fire',        cond: state.streak >= 7 },
    { id:'unstoppable',    cond: state.streak >= 30 },
    { id:'first_sentence', cond: usageDone >= 1 },
    { id:'wordsmith',      cond: usageDone >= 20 },
    { id:'comeback_king',  cond: recoveries >= 10 },
    { id:'perfect_round',  cond: extras && extras.quizPerfect === true },
    { id:'speed_demon',    cond: extras && extras.speedDemon === true },
    { id:'challenge_ace',  cond: extras && extras.challengeScore >= 100 },
  ];

  const newBadges = checks.filter(b => b.cond && !earned.includes(b.id)).map(b => b.id);
  if (newBadges.length) {
    const updated = [...earned, ...newBadges];
    localStorage.setItem(KEYS.badges, JSON.stringify(updated));
    newBadges.forEach(id => {
      const def = BADGE_DEFS.find(b => b.id === id);
      if (def) {
        state.xp += def.xp;
        saveState(state);
        triggerBadgeCelebration(def);
      }
    });
  }
  return newBadges;
}

function triggerBadgeCelebration(def) {
  // Create overlay
  const overlay = document.createElement('div');
  overlay.id = 'badgeOverlay';
  overlay.style.cssText = `
    position:fixed;inset:0;z-index:9000;
    background:rgba(10,10,10,0.88);
    display:flex;flex-direction:column;align-items:center;justify-content:center;
    animation:fadeIn 0.3s ease;gap:12px;
  `;
  overlay.innerHTML = `
    <div style="font-size:80px;animation:popIn 0.5s cubic-bezier(0.34,1.56,0.64,1)">${def.emoji}</div>
    <div style="font-size:13px;font-weight:700;letter-spacing:0.14em;text-transform:uppercase;color:var(--tx-3)">Badge Unlocked!</div>
    <div style="font-family:var(--font-display);font-size:28px;font-weight:700;color:var(--accent)">${def.name}</div>
    <div style="font-size:15px;color:var(--tx-2)">${def.desc}</div>
    <div style="font-size:14px;font-weight:700;color:var(--accent);margin-top:4px">+${def.xp} XP</div>
    <div id="badgeConfetti" style="position:absolute;inset:0;pointer-events:none;overflow:hidden"></div>
  `;
  document.body.appendChild(overlay);

  // Confetti
  const confettiEl = overlay.querySelector('#badgeConfetti');
  const colors = ['#a8f040','#f04060','#40d090','#f0a840','#7ED4F7'];
  for (let i = 0; i < 40; i++) {
    const p = document.createElement('div');
    const color = colors[i % colors.length];
    const left  = Math.random() * 100;
    const delay = Math.random() * 0.8;
    const dur   = 1.2 + Math.random() * 0.8;
    p.style.cssText = `
      position:absolute;top:-10px;left:${left}%;
      width:8px;height:8px;background:${color};border-radius:50%;
      animation:confettiFall ${dur}s ${delay}s ease-in forwards;
    `;
    confettiEl.appendChild(p);
  }

  // Inject confetti animation if not present
  if (!document.getElementById('badgeAnimStyle')) {
    const s = document.createElement('style');
    s.id = 'badgeAnimStyle';
    s.textContent = `
      @keyframes confettiFall{to{top:110%;transform:rotate(720deg);opacity:0}}
      @keyframes fadeIn{from{opacity:0}to{opacity:1}}
    `;
    document.head.appendChild(s);
  }

  // Auto-close after 2.8s
  setTimeout(() => {
    overlay.style.opacity = '0';
    overlay.style.transition = 'opacity 0.4s';
    setTimeout(() => overlay.remove(), 400);
  }, 2800);

  // Click to dismiss early
  overlay.addEventListener('click', () => overlay.remove());
}

/* ── STREAK LOGIC ──────────────────────────────────────────────── */
function todayStr() {
  return new Date().toISOString().slice(0, 10);
}

function updateStreak(state) {
  const today = todayStr();
  if (state.lastDate === today) return state;
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  const yStr = yesterday.toISOString().slice(0, 10);
  if (state.lastDate === yStr) {
    state.streak += 1;
  } else if (state.lastDate !== today) {
    state.streak = 1;
  }
  state.lastDate = today;
  return state;
}

/* ── MASCOT ENGINE ─────────────────────────────────────────────── */
function getMascotState(streak, lastDate) {
  const today = todayStr();
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  const yStr = yesterday.toISOString().slice(0, 10);

  if (!lastDate || lastDate < yStr) return 'sleeping'; // missed a day
  if (streak >= 7) return 'fire';
  if (lastDate === today) return 'happy';
  return 'waiting';
}

function getMascotMessage(state, userName) {
  const name   = userName ? `, ${userName}` : '';
  const mState = getMascotState(state.streak, state.lastDate);
  const today  = todayStr();
  const dueCount = getDueCards().length;

  if (mState === 'sleeping') {
    return { emoji: '😴', msg: `Wake me up${name}! You've been gone — let's get back on track.`, color: 'var(--tx-3)' };
  }
  if (mState === 'fire') {
    return { emoji: '🦊🔥', msg: `${state.streak} days${name}! You're absolutely unstoppable!`, color: '#f06428' };
  }
  if (state.lastDate === today && dueCount === 0) {
    return { emoji: '😊', msg: `All caught up today${name}! Come back tomorrow.`, color: 'var(--correct)' };
  }
  if (dueCount > 0) {
    return { emoji: '🦊', msg: `${dueCount} expression${dueCount>1?'s':''} due for review${name}. Don't lose that streak!`, color: 'var(--warn)' };
  }
  return { emoji: '🦊', msg: `Ready to learn${name}? Your vocabulary is waiting.`, color: 'var(--accent)' };
}

/* ── XP + LEVEL ────────────────────────────────────────────────── */
function getLevel(xp) {
  let current = LEVELS[0];
  for (const l of LEVELS) { if (xp >= l.minXP) current = l; }
  return current;
}

function getNextLevel(xp) {
  for (const l of LEVELS) { if (xp < l.minXP) return l; }
  return null;
}

function xpProgressPct(xp) {
  const curr = getLevel(xp);
  const next = getNextLevel(xp);
  if (!next) return 100;
  const range = next.minXP - curr.minXP;
  const done  = xp - curr.minXP;
  return Math.round((done / range) * 100);
}

/* ── SHUFFLE ───────────────────────────────────────────────────── */
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/* ── TYPE BADGE COLOR ──────────────────────────────────────────── */
const TYPE_COLOR = {
  "idiom":       "#4A8FD9",
  "proverb":     "#4DC48A",
  "slang":       "#D96AB0",
  "phrasal verb":"#7ED4F7",
};
function typeColor(type) { return TYPE_COLOR[type] || "#888"; }

/* ── USAGE FORGE HELPERS ───────────────────────────────────────── */
function incrementUsageCount() {
  const current = parseInt(localStorage.getItem(KEYS.usageCount) || '0', 10);
  localStorage.setItem(KEYS.usageCount, current + 1);
  return current + 1;
}

function incrementRecoveries() {
  const current = parseInt(localStorage.getItem(KEYS.recoveries) || '0', 10);
  localStorage.setItem(KEYS.recoveries, current + 1);
  return current + 1;
}

const JURISDICTION_CARDS = [
  {
    id: "smj-01",
    type: "binary",
    category: "SUBJECT-MATTER JURISDICTION",
    scenario: "A Pennsylvania citizen sues another Pennsylvania citizen in federal court for $120,000 after a car accident. The claim is based entirely on Pennsylvania negligence law.",
    question: "Can the federal court hear the case based on diversity jurisdiction?",
    answer: "no",
    explanation: "Diversity jurisdiction requires complete diversity of citizenship. Both parties are Pennsylvania citizens, so the amount alone cannot create diversity jurisdiction."
  },
  {
    id: "smj-02",
    type: "binary",
    category: "SUBJECT-MATTER JURISDICTION",
    scenario: "A Pennsylvania employee sues in federal court, claiming the employer violated a federal employment discrimination statute.",
    question: "Can the federal court hear the case?",
    answer: "yes",
    explanation: "The claim arises under federal law. That provides a basis for federal-question jurisdiction."
  },
  {
    id: "smj-03",
    type: "binary",
    category: "SUBJECT-MATTER JURISDICTION",
    scenario: "A Delaware citizen sues a Pennsylvania citizen in federal court for $90,000 over a state-law contract dispute.",
    question: "Can diversity jurisdiction potentially exist?",
    answer: "yes",
    explanation: "The parties are citizens of different states, and the amount in controversy exceeds $75,000."
  },
  {
    id: "smj-04",
    type: "binary",
    category: "SUBJECT-MATTER JURISDICTION",
    scenario: "A New Jersey citizen sues a Pennsylvania citizen in federal court for $62,000 over property damage. The only claim is based on state law.",
    question: "Can the federal court hear the case based on diversity jurisdiction?",
    answer: "no",
    explanation: "The citizenship requirement is met, but the amount in controversy does not exceed $75,000."
  },
  {
    id: "smj-05",
    type: "binary",
    category: "SUBJECT-MATTER JURISDICTION",
    scenario: "A tenant files an ordinary state-law security-deposit claim against a landlord in a Pennsylvania state trial court.",
    question: "Can the state court hear this kind of claim?",
    answer: "yes",
    explanation: "State trial courts generally may hear ordinary state-law civil claims such as landlord-tenant disputes."
  },
  {
    id: "smj-06",
    type: "binary",
    category: "SUBJECT-MATTER JURISDICTION",
    scenario: "A consumer sues in federal court under a federal statute that expressly gives consumers a civil claim against deceptive debt collectors.",
    question: "Can the federal court hear the case?",
    answer: "yes",
    explanation: "The consumer's claim is created by federal law, so federal-question jurisdiction is available."
  },
  {
    id: "smj-07",
    type: "binary",
    category: "SUBJECT-MATTER JURISDICTION",
    scenario: "Two Pennsylvania citizens dispute a $300,000 construction contract. The complaint raises only Pennsylvania contract claims and is filed in federal court.",
    question: "Does the federal court have diversity jurisdiction?",
    answer: "no",
    explanation: "A large amount in controversy does not replace the need for diverse citizenship. Both sides are Pennsylvania citizens."
  },
  {
    id: "smj-08",
    type: "binary",
    category: "SUBJECT-MATTER JURISDICTION",
    scenario: "A citizen of Ohio sues a citizen of Pennsylvania in federal court for $75,000 exactly on a state-law fraud claim.",
    question: "Is the amount requirement for diversity jurisdiction satisfied?",
    answer: "no",
    explanation: "The amount in controversy must exceed $75,000. Exactly $75,000 is not enough."
  },
  {
    id: "smj-09",
    type: "binary",
    category: "SUBJECT-MATTER JURISDICTION",
    scenario: "A citizen of Maryland sues a citizen of Pennsylvania for $75,001 in federal court on a state-law negligence claim.",
    question: "Can diversity jurisdiction potentially exist?",
    answer: "yes",
    explanation: "The parties have diverse citizenship, and the stated amount exceeds $75,000."
  },
  {
    id: "smj-10",
    type: "binary",
    category: "SUBJECT-MATTER JURISDICTION",
    scenario: "A Pennsylvania homeowner sues a Pennsylvania contractor in federal court for breach of contract. The complaint mentions federal building guidelines as background, but the claim arises only under Pennsylvania contract law.",
    question: "Does the mention of federal guidelines create federal-question jurisdiction?",
    answer: "no",
    explanation: "Merely mentioning a federal standard does not create federal-question jurisdiction when the claim itself arises under state law."
  },
  {
    id: "smj-11",
    type: "binary",
    category: "SUBJECT-MATTER JURISDICTION",
    scenario: "A voter files a federal lawsuit claiming that a state official violated the voter's rights under the U.S. Constitution.",
    question: "Can the federal court hear the claim?",
    answer: "yes",
    explanation: "A claim based on rights arising under the U.S. Constitution presents a federal question."
  },
  {
    id: "smj-12",
    type: "binary",
    category: "SUBJECT-MATTER JURISDICTION",
    scenario: "A Pennsylvania citizen sues citizens of New York and Pennsylvania for $180,000 in federal court on state-law claims.",
    question: "Does complete diversity exist?",
    answer: "no",
    explanation: "Complete diversity is missing because one defendant and the plaintiff are both Pennsylvania citizens."
  },
  {
    id: "smj-13",
    type: "binary",
    category: "SUBJECT-MATTER JURISDICTION",
    scenario: "A citizen of Virginia sues two defendants, one a citizen of Pennsylvania and one a citizen of Delaware, for $140,000 in federal court on state-law claims.",
    question: "Can diversity jurisdiction potentially exist?",
    answer: "yes",
    explanation: "No defendant shares the plaintiff's state citizenship, and the amount in controversy exceeds $75,000."
  },
  {
    id: "smj-14",
    type: "binary",
    category: "SUBJECT-MATTER JURISDICTION",
    scenario: "A worker brings a claim under a Pennsylvania wage statute in Pennsylvania state court. Both parties are Pennsylvania citizens.",
    question: "Can the state court hear the claim?",
    answer: "yes",
    explanation: "This is an ordinary state-law claim filed in a state court with authority to hear that type of civil dispute."
  },
  {
    id: "smj-15",
    type: "binary",
    category: "SUBJECT-MATTER JURISDICTION",
    scenario: "A business files a federal antitrust claim in federal court and seeks only $20,000 in damages.",
    question: "Can the federal court hear the claim even though the amount is below $75,000?",
    answer: "yes",
    explanation: "The claim arises under federal law. The diversity amount requirement does not apply to federal-question jurisdiction."
  },
  {
    id: "smj-16",
    type: "binary",
    category: "SUBJECT-MATTER JURISDICTION",
    scenario: "A citizen of Pennsylvania sues a citizen of West Virginia in federal court for $125,000, but the complaint states no federal claim and no other basis for federal jurisdiction.",
    question: "Can the federal court potentially hear the state-law dispute?",
    answer: "yes",
    explanation: "Diverse citizenship and an amount exceeding $75,000 can provide diversity jurisdiction even without a federal claim."
  },
  {
    id: "smj-17",
    type: "binary",
    category: "SUBJECT-MATTER JURISDICTION",
    scenario: "A student who is domiciled in Pennsylvania temporarily attends college in Ohio. The student sues another Pennsylvania citizen for $100,000 in federal court on a state-law claim.",
    question: "Does the student's temporary stay in Ohio create diversity?",
    answer: "no",
    explanation: "Citizenship for diversity is based on domicile, not a temporary physical location. Both parties remain Pennsylvania citizens."
  },
  {
    id: "smj-18",
    type: "binary",
    category: "SUBJECT-MATTER JURISDICTION",
    scenario: "A person moved to Delaware, made it a permanent home, and intends to remain there. That person sues a Pennsylvania citizen for $95,000 in federal court on a state-law claim.",
    question: "Can the citizenship facts support diversity jurisdiction?",
    answer: "yes",
    explanation: "The facts establish Delaware domicile and therefore Delaware citizenship. The opposing party is a Pennsylvania citizen, and the amount exceeds $75,000."
  },
  {
    id: "smj-19",
    type: "binary",
    category: "SUBJECT-MATTER JURISDICTION",
    scenario: "A plaintiff files a federal lawsuit alleging only that a neighbor's fence violates a city ordinance. The parties are citizens of the same state.",
    question: "Can the federal court hear the case on these facts?",
    answer: "no",
    explanation: "A city ordinance is not federal law, and the facts do not support diversity jurisdiction. Federal courts have limited jurisdiction."
  },
  {
    id: "smj-20",
    type: "binary",
    category: "SUBJECT-MATTER JURISDICTION",
    scenario: "A patient sues a doctor in state court for medical negligence under state law and seeks $500,000. Both are citizens of Pennsylvania.",
    question: "Can the Pennsylvania state court hear the case?",
    answer: "yes",
    explanation: "State courts generally have authority over state-law civil claims. A large damages request does not make the case exclusively federal."
  },
  {
    id: "pj-01",
    type: "binary",
    category: "PERSONAL JURISDICTION",
    scenario: "A defendant lives permanently in Pennsylvania and is sued in a Pennsylvania court over a personal loan.",
    question: "Does Pennsylvania have authority over the defendant?",
    answer: "yes",
    explanation: "A defendant who lives in and is domiciled in the forum state is subject to that state's general authority."
  },
  {
    id: "pj-02",
    type: "binary",
    category: "PERSONAL JURISDICTION",
    scenario: "A New Jersey company regularly advertises to Pennsylvania customers, ships hundreds of orders there, and sells a defective product to a Pennsylvania customer. The customer sues in Pennsylvania over that product.",
    question: "Is there a strong basis for Pennsylvania to exercise authority over the company?",
    answer: "yes",
    explanation: "The company deliberately does business in Pennsylvania, and the lawsuit arises from that activity."
  },
  {
    id: "pj-03",
    type: "binary",
    category: "PERSONAL JURISDICTION",
    scenario: "A small Oregon shop has never advertised, sold, or sent employees to Pennsylvania. A Pennsylvania resident buys an item while visiting Oregon and later sues the shop in Pennsylvania.",
    question: "Is there a clear basis for Pennsylvania to exercise authority over the shop?",
    answer: "no",
    explanation: "The shop did not direct the transaction toward Pennsylvania and appears to have no meaningful connection with the state."
  },
  {
    id: "pj-04",
    type: "binary",
    category: "PERSONAL JURISDICTION",
    scenario: "A New York driver is personally handed a summons while voluntarily visiting Pennsylvania. The lawsuit is then brought in Pennsylvania.",
    question: "Does service while the individual is physically present provide a traditional basis for authority?",
    answer: "yes",
    explanation: "Personal service on an individual who is voluntarily present in the state is a traditional basis for personal jurisdiction."
  },
  {
    id: "pj-05",
    type: "binary",
    category: "PERSONAL JURISDICTION",
    scenario: "A Delaware contractor travels to Pennsylvania, negotiates a renovation there, performs the work there, and is sued in Pennsylvania over defects in that project.",
    question: "Can Pennsylvania likely exercise authority over the contractor?",
    answer: "yes",
    explanation: "The contractor purposefully worked in Pennsylvania, and the dispute directly arises from that work."
  },
  {
    id: "pj-06",
    type: "binary",
    category: "PERSONAL JURISDICTION",
    scenario: "A Maine artist sells one painting to a buyer in Maine. Years later the buyer moves to Pennsylvania and sues the artist there about the sale. The artist has no other Pennsylvania contacts.",
    question: "Is Pennsylvania a clearly proper forum based on these facts?",
    answer: "no",
    explanation: "The artist did not direct the sale toward Pennsylvania, and the buyer's later move cannot create the artist's connection to the state."
  },
  {
    id: "pj-07",
    type: "binary",
    category: "PERSONAL JURISDICTION",
    scenario: "A Virginia software company runs ads aimed at Pennsylvania businesses, signs 60 Pennsylvania clients, and is sued there by one of those clients over the software subscription.",
    question: "Can Pennsylvania likely exercise authority over the company for this dispute?",
    answer: "yes",
    explanation: "The company intentionally sought Pennsylvania business, and the claim arises from those forum-directed sales."
  },
  {
    id: "pj-08",
    type: "binary",
    category: "PERSONAL JURISDICTION",
    scenario: "A national website can be viewed in Pennsylvania, but it makes no sales there, does not target Pennsylvania users, and has no offices or workers there. A dispute unrelated to Pennsylvania is filed against it in Pennsylvania.",
    question: "Does the website's visibility alone clearly support authority in Pennsylvania?",
    answer: "no",
    explanation: "A website's mere availability is not the same as deliberately creating contacts with the state, especially when the dispute is unrelated to the forum."
  },
  {
    id: "pj-09",
    type: "binary",
    category: "PERSONAL JURISDICTION",
    scenario: "A contract states in clear language that any lawsuit about the agreement must be brought in Pennsylvania. The defendant signed it and is sued there over that contract.",
    question: "Is there a strong basis for Pennsylvania to exercise authority?",
    answer: "yes",
    explanation: "A valid forum-selection provision can show that the defendant agreed to litigate contract disputes in Pennsylvania."
  },
  {
    id: "pj-10",
    type: "binary",
    category: "PERSONAL JURISDICTION",
    scenario: "A defendant appears in a Pennsylvania lawsuit and expressly agrees that the court may decide the case.",
    question: "Can consent provide personal jurisdiction?",
    answer: "yes",
    explanation: "Personal jurisdiction can be based on the defendant's consent."
  },
  {
    id: "pj-11",
    type: "binary",
    category: "PERSONAL JURISDICTION",
    scenario: "A Colorado consultant emails advice to a client in Pennsylvania every week for a year, receives payment from Pennsylvania, and is sued there over that advice.",
    question: "Can Pennsylvania likely exercise authority over the consultant for this dispute?",
    answer: "yes",
    explanation: "The consultant deliberately maintained an ongoing Pennsylvania client relationship, and the claim arises from that work."
  },
  {
    id: "pj-12",
    type: "binary",
    category: "PERSONAL JURISDICTION",
    scenario: "A California museum has no Pennsylvania operations. A Pennsylvania resident sues the museum in Pennsylvania over an accident that occurred during a visit to California.",
    question: "Is there a clear basis for Pennsylvania to exercise authority?",
    answer: "no",
    explanation: "The facts show no purposeful Pennsylvania contact by the museum, and the accident occurred elsewhere."
  },
  {
    id: "pj-13",
    type: "binary",
    category: "PERSONAL JURISDICTION",
    scenario: "A manufacturer sends sales representatives to Pennsylvania each month and sells equipment there. A Pennsylvania buyer sues there after one of those machines fails.",
    question: "Can Pennsylvania likely exercise authority over the manufacturer for this claim?",
    answer: "yes",
    explanation: "The manufacturer deliberately conducts business in Pennsylvania, and the lawsuit is connected to that forum activity."
  },
  {
    id: "pj-14",
    type: "binary",
    category: "PERSONAL JURISDICTION",
    scenario: "A Georgia company sells only to customers in Georgia. A third party independently resells one product in Pennsylvania, where an injury occurs. The Georgia company did not know of or encourage Pennsylvania sales.",
    question: "Do these facts show a clear purposeful connection to Pennsylvania?",
    answer: "no",
    explanation: "The unilateral action of a third party does not, by itself, show that the defendant deliberately reached into Pennsylvania."
  },
  {
    id: "pj-15",
    type: "binary",
    category: "PERSONAL JURISDICTION",
    scenario: "An Ohio seller lists an item online, agrees to ship it to a known Pennsylvania address, takes payment from the Pennsylvania buyer, and is sued there because the item never arrives.",
    question: "Can Pennsylvania likely exercise authority over the seller for this transaction?",
    answer: "yes",
    explanation: "The seller knowingly entered a Pennsylvania-directed transaction, and the lawsuit arises from that exact sale."
  },
  {
    id: "pj-16",
    type: "binary",
    category: "PERSONAL JURISDICTION",
    scenario: "A Nevada blogger writes about Nevada politics for a general audience and has no Pennsylvania business. A Pennsylvania company sues the blogger in Pennsylvania over an unrelated Nevada contract.",
    question: "Does the blog's possible Pennsylvania readership clearly support authority?",
    answer: "no",
    explanation: "Possible readers in Pennsylvania do not establish purposeful forum contacts, and the contract dispute is unrelated to the blog."
  },
  {
    id: "pj-17",
    type: "binary",
    category: "PERSONAL JURISDICTION",
    scenario: "A landlord owns and rents an apartment in Pennsylvania while living in Florida. A tenant sues the landlord in Pennsylvania over unsafe conditions in that apartment.",
    question: "Can Pennsylvania likely exercise authority over the landlord?",
    answer: "yes",
    explanation: "The landlord purposefully owns and rents Pennsylvania property, and the claim arises directly from that activity."
  },
  {
    id: "pj-18",
    type: "binary",
    category: "PERSONAL JURISDICTION",
    scenario: "A Pennsylvania customer orders from a small Idaho store after finding it during a general web search. The store did not advertise to Pennsylvania and cancels the only order before shipping anything.",
    question: "Is there a clear basis for Pennsylvania authority from these facts alone?",
    answer: "no",
    explanation: "The customer's unilateral contact and one canceled order do not clearly show that the store purposefully created a Pennsylvania connection."
  },
  {
    id: "pj-19",
    type: "binary",
    category: "PERSONAL JURISDICTION",
    scenario: "A company is incorporated in Pennsylvania and has its main office there. It is sued in Pennsylvania over conduct that happened in another state.",
    question: "Can Pennsylvania generally exercise authority over the company?",
    answer: "yes",
    explanation: "A corporation is ordinarily subject to general jurisdiction where it is incorporated and where it has its principal place of business."
  },
  {
    id: "pj-20",
    type: "binary",
    category: "PERSONAL JURISDICTION",
    scenario: "A Texas company has occasional unrelated sales in Pennsylvania. It is sued in Pennsylvania over an accident in Texas involving a Texas customer and a product sold in Texas. The company is not incorporated or headquartered in Pennsylvania.",
    question: "Do the occasional unrelated sales clearly support authority over this lawsuit?",
    answer: "no",
    explanation: "The claim does not arise from the Pennsylvania sales, and occasional sales do not make the company at home in Pennsylvania."
  },
  {
    id: "challenge-01",
    type: "challenge",
    category: "WHAT'S MISSING?",
    scenario: "A Florida citizen sues a Pennsylvania citizen in federal court over a state-law contract dispute.",
    question: "What additional fact is needed before deciding whether diversity jurisdiction exists?",
    choices: ["Amount in controversy", "Defendant's age", "County where the contract was signed", "Whether either party has an attorney"],
    answer: "Amount in controversy",
    explanation: "Different state citizenship is established, but diversity jurisdiction also requires an amount in controversy exceeding $75,000."
  },
  {
    id: "challenge-02",
    type: "challenge",
    category: "WHAT'S MISSING?",
    scenario: "A plaintiff says only that the defendant currently rents an apartment in New Jersey and files a $100,000 state-law claim in federal court.",
    question: "What fact is needed to evaluate diversity of citizenship?",
    choices: ["The defendant's domicile", "The defendant's job title", "The apartment's monthly rent", "The plaintiff's lawyer"],
    answer: "The defendant's domicile",
    explanation: "Diversity uses citizenship, which for a person is based on domicile. Current residence alone may not establish citizenship."
  },
  {
    id: "challenge-03",
    type: "challenge",
    category: "WHAT'S MISSING?",
    scenario: "An out-of-state retailer regularly sells products to Pennsylvania customers. A lawsuit against the retailer is filed in Pennsylvania.",
    question: "What fact matters most for deciding specific personal jurisdiction?",
    choices: ["Whether the claim arises from the Pennsylvania sales", "The retailer's logo color", "The judge's home county", "How long the complaint is"],
    answer: "Whether the claim arises from the Pennsylvania sales",
    explanation: "Specific personal jurisdiction usually requires a connection between the defendant's forum contacts and the lawsuit."
  },
  {
    id: "challenge-04",
    type: "challenge",
    category: "WHAT'S MISSING?",
    scenario: "A complaint is filed in federal court and seeks $40,000. The parties are citizens of the same state.",
    question: "What additional fact could still provide subject-matter jurisdiction?",
    choices: ["The claim arises under federal law", "The courthouse has an open courtroom", "The plaintiff requests a jury", "The defendant owns a business"],
    answer: "The claim arises under federal law",
    explanation: "A federal claim can support federal-question jurisdiction regardless of diversity or the diversity amount requirement."
  }
];

if (typeof module !== "undefined") module.exports = JURISDICTION_CARDS;

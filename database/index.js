const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const IntentionSchema = new Schema({
  title: String,
  suggestions: [String],
});

async function getIntentions() {
  console.log("getting intentions")
  await mongoose.connect('mongodb://localhost:27017/stanislavski');
  console.log("db connected")
  const intentions = await Intention.find();
  console.log(`intentions found. Count: ${intentions.length}`);
  console.log(`in db type of intentions: ${typeof intentions}`)
  return intentions;
}

// consider creating function here and export to access db

// Consider functions here in the database to return all intentions
// const data = [
//   { "title": "To Give Someone a Bad Time version A",
//    "suggestions": [
//     "Ape (mock) their mannerisms",
//     "Tell them they bore you",
//     "Be nastily polite (sarcastic)",
//     "Borrow their money, their things",
//     "Contradict them.",
//     "Control them.",
//     "Criticize their appearance, pets, relatives, sexual prowess, blemishes, use of English, etc.",
//     "Give advice"
//   ]
//   },
//   {"title": "To Give Someone a Bad Time version B",
//   "suggestions": [
//   "Be offensively blunt.",
//   "Be restless, tap fingers.",
//   "Break their things.",
//   "Change the subject.",
//   "Confuse them.",
//   "Contradict them.",
//   "Cross your legs away from them.",
//   "Disagree with them."
// ]
// },
// { "title": "To Be Thought  Beautiful",
//   "suggestions": [
//   "Be languid, sensual",
//   "Check appearance (in mirror?).",
//   "Draw attention to your good points.",
//   "Glide about, dance.",
//   "Use your eyes expressively.",
//   "Smile a lot (flash teeth).",
//   "Walk tall.",
//   "Worry about figure, skin, make-up, etc.",
//   "Ask opinion of your attractiveness.",
//   "Fish for compliments."
// ]},
// { "title": "To Show Someone They're Boring",
//   "suggestions": [
//   "Yawn.",
//   "Interrupt.",
//   "Change subject.",
//   "Complain they always say the same things.",
//   "Know what they're going to say.",
//   "Ignore them.",
//   "Beat head against the wall.",
//   "Ask them to leave."

// ]},
// {"title": "To Be Thought a Computer", "suggestions": [
//   "Be efficient - everything in its right place.",
//   "Be cold and distant.",
//   "Be friendless and like it.",
//   "Be wooden.",
//   "Be insensitive to emotion (yours or other peoples).",
//   "Be insensitive to pain or pleasure.",
//   "Express your love (or hate) as if indifferent."
// ]},
// {"title": "To Flirt With Someone", "suggestions": [
//   "Check for reactions, especially by raising eyebrows and opening eyes wide.",
//   "Emphasize points with hands more than usual.",
//   "Hold gaze longer than usual.",
//   "Face other person head on.",
//   "Find topics on which you can agree.",
//   "Keep mouth slightly open and look unconsciously at parts of other person.",
//   "Moisten your lips often.",
//   "Move closer than is normal.",
//   "Nod head in agreement, no matter what is being said.",
//   "Rest hand on some parts of others body.",
//   "Slight smile plus bashful look, lower eyes, look to the side, repeat.",
//   "Small touching movements."
// ]},
// {"title": "To Give Someone a Good Time version A", "suggestions": [
//   "Ask questions about them and be interested in the answers.",
//   "Ask advice on their opinion.",
//   "Admire and praise their voice, their body, the way they fold a newspaper, etc.",
//   "Compliment.",
//   "Consider them first."


// ]},
// {"title": "To Give Someone a Good Time version B", "suggestions": [
//   "Agree.",
//   "Be modest (subservient).",
//   "Be positive (enthusiastic).",
//   "Be easy to control.",
//   "Be good natured.",
//   "Encourage (nod, make encouraging sounds, etc.",
//   "Endow with humor.",
//   "Quote them (admiringly)."
// ]},
// {"title": "To Accept Guilt", "suggestions": [
//   "Apologize.",
//   "Break or ruin something.",
//   "Confess, e.g. hit and run driver; you sat on a small pet; you were unjust; you stole something; left the bath dirty, etc.",
//   "Avoid peoples eyes, hang head.",
//   "Whatever you do, over-explain the reasons for it."
// ]},
// {"title": "To Appear Happy and Contented with Everything", "suggestions": [
//   "Behave as if you have a delightful secret.",
//   "Endow others with good intentions.",
//   "Endow others with humor.",
//   "Enjoy touching things, including yourself.",
//   "Have a pop tune inside your head."
// ]},
// {"title": "To Be Thought a Hero", "suggestions": [
//   "Have a weapon",
//   "Be on a quest",
//   "Be attacked",
//   "Detect dangers.",
//   "Display strength, athleticism.",
//   "Have firm, resonant voice."

// ]},
// {"intention": "To Humiliate Someone", "suggestions": [
//   "Blame them.",
//   "Make unflattering comparisons.",
//   "Tell bad storeis about them.",
//   "Ridicule them to other people (to the audience?)",
//   "Stare with contempt."
// ]},
// {"title": "To Impress Someone", "suggestions": [
//   "Be a neurosurgeon, rock star, author, witch, murderer, athlete.",
//   "Talk about your achievements.",
//   "Demonstrate skills: yodelling? knife throwing? hypnosis?",
//   "Detect errors",
//   "Name drop"
// ]},
// {"title": "To Be Thought Intelligent", "suggestions": [
//   "Correct people",
//   "Know everything",
//   "Explain baffling things",
//   "Use complex sentences",
//   "Use long words"
// ]},
// {"title": "To Be Thought a Jerk", "suggestions": [
//   "Be tactless - refer to broken love affairs, drag up old bones",
//   "Bad manners",
//   "Brag",
//   "Be a bigot",
//   "Have chip on your shoulder"
// ]},
// {"title": "To Be Judgmental", "suggestions": [
//   "Accuse people",
//   "Correct people",
//   "Be (or try to be) higher status than others are",
//   "Be moralistic",
//   "Be shocked"
// ]},
// {"title": "To be the Life and Soul of the Party", "suggestions": [
//   "Admire people and objects",
//   "Agree - give total approval",
//   "Be positive",
//   "Be flamboyant",
//   "Be generous"
// ]},
// {"title": "To be Thought Mysterious", "suggestions": [
//   "Be secretive",
//   "Drop hints",
//   "Receive strange presents, phone calls, etc.",
//   "Be a psychic (know things in advance)",
//   "Laugh at private thoughts"
// ]},
// {"title": "To be Thought a Teenage Nerd", "suggestions": [
//   "Be enthusiastic",
//   "Be good natured",
//   "Be positive",
//   "Be tactless",
//   "Be clumsy: spill things, trip up, etc."
// ]},
// {"title": "To be Thought Normal", "suggestions": [
//   "Agree with caution",
//   "Ask dull questions",
//   "Be a churchgoer",
//   "Be conservative",
//   "Check appearance, opinions"
// ]},
// {"title": "To be Parental (a Bad Parent)", "suggestions": [
//   "Accusation of unfeelingness",
//   "Ask people to do stuff and then do it yourself",
//   "Adjust people's appearance",
//   "Be a martyr",
//   "Be disgusted"
// ]},
// {"title": "To Seduce a Man Version A", "suggestions": [
//   "Ask him to dance",
//   "Admire his taste",
//   "Be breathless",
//   "Be close to him",
//   "Be suggestive"
// ]},
// {"title": "To Seduce a Man Version B", "suggestions": [
//   "Be close to him",
//   "Be mysterious",
//   "Be vulnerable",
//   "Boost his ego",
//   "Caress objects as if they were part of him"
// ]},
// {"title": "To Seduce a Woman Version A", "suggestions": [
//   "Be boyish, playful",
//   "Be close to her",
//   "Be 'lonely'",
//   "Be polite, chivalrous",
//   "Be self-revealing"
// ]},
// {"title": "To Seduce a Woman Version B", "suggestions": [
//   "Be a hero",
//   "Be masterful",
//   "Be macho yet sensitive",
//   "Be firm and confident",
//   "Be high status (natural leader)"
// ]},
// {"title": "To be High Status", "suggestions": [
//   "Take control (or fight for control)",
//   "Alternate between saying things to raise yourself and saying things to lower the other person",
//   "Be more relaxed and stiller than your partner",
//   "Crush any 'challenges'",
//   "Delay before reacting"
// ]},
// {"title": "To be Low Status (positive)", "suggestions": [
//   "Admire other people's possessions, poise, etc. but secretly or hesitatingly",
//   "Answer promptly",
//   "Bite lower teeth when smiling.",
//   "Blink more than your partner.",
//   "Be wide-eyed",
//   "Have no job, car, lover, sexual technique, but it doesn't worry you"
// ]},
// {"title": "To Get Sympathy", "suggestions": [
//   "Sigh",
//   "Have a brave smile",
//   "Be clumsy",
//   "Weep",
//   "Be embarrassed",
//   "Be unemployed",
//   "Cover face and 'weep'"
// ]}
// ]



const Intention = mongoose.model('Intention', IntentionSchema)
// module.exports = { Intention };
module.exports.getIntentions = getIntentions;
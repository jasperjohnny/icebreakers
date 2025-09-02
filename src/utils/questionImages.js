export const questionImages = {
  superpower: "👨‍🦸‍♂️",
  travel: "✈️",
  food: "🍔",
  hobby: "🎨",
  book: "📚",
  music: "🎵",
  dream: "💭",
  adventure: "🏃‍♂️",
  learning: "🎓",
  nature: "🌲",
  technology: "💻",
  career: "💼",
  creativity: "🎪",
  childhood: "🎠",
  goals: "🎯",
  skills: "🛠️",
  memory: "📸",
  culture: "🌏",
  inspiration: "💡",
  friendship: "🤝"
};

// Function to get the most relevant image for a question
export function getImageForQuestion(question) {
  const questionLower = question.toLowerCase();
  
  if (questionLower.includes("superpower")) return questionImages.superpower;
  if (questionLower.includes("travel") || questionLower.includes("place") || questionLower.includes("world")) return questionImages.travel;
  if (questionLower.includes("food") || questionLower.includes("eat") || questionLower.includes("cook")) return questionImages.food;
  if (questionLower.includes("hobby") || questionLower.includes("activity")) return questionImages.hobby;
  if (questionLower.includes("book") || questionLower.includes("read")) return questionImages.book;
  if (questionLower.includes("music") || questionLower.includes("song")) return questionImages.music;
  if (questionLower.includes("dream")) return questionImages.dream;
  if (questionLower.includes("adventure") || questionLower.includes("exciting")) return questionImages.adventure;
  if (questionLower.includes("learn") || questionLower.includes("study")) return questionImages.learning;
  if (questionLower.includes("nature") || questionLower.includes("outdoor")) return questionImages.nature;
  if (questionLower.includes("technology") || questionLower.includes("tech")) return questionImages.technology;
  if (questionLower.includes("career") || questionLower.includes("job") || questionLower.includes("work")) return questionImages.career;
  if (questionLower.includes("create") || questionLower.includes("invent")) return questionImages.creativity;
  if (questionLower.includes("child") || questionLower.includes("grow")) return questionImages.childhood;
  if (questionLower.includes("goal")) return questionImages.goals;
  if (questionLower.includes("skill")) return questionImages.skills;
  if (questionLower.includes("memory")) return questionImages.memory;
  if (questionLower.includes("culture") || questionLower.includes("tradition")) return questionImages.culture;
  if (questionLower.includes("inspire") || questionLower.includes("idea")) return questionImages.inspiration;
  if (questionLower.includes("friend") || questionLower.includes("together")) return questionImages.friendship;
  
  // Default emoji if no specific match is found
  return "💬";
}

module.exports = {
 
  fileName: "CHANGELOG.md",
 
  dateFormat: "dd/LL/yyyy",
 
  separator: "-",
 
  triggers: [
    "🐛 Bug",
    "feat: ",
    "💥 Change",
  ],
 
  pluraliseTrigger: true,
  
  skipEmptyCommitMessages: false,
 
  customMessageFormatter: null,
  
  customHeadingFormatter: null,
 
};

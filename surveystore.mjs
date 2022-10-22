class Option {
  constructor(newValue) {
    this.optionName = newValue.optionName;
    this.optionText = newValue.optionText;
    this.count = 0;
  }

  incrementCount() {
    this.count = this.count + 1;
  }

  getCount() {
    return this.count;
  }
}

class Survey {
  constructor(newValue) {
    this.topicName = newValue.topicName; 
    this.options = []; 
    newValue.options.forEach(optionDetails => { 
      let newOption = new Option(optionDetails);
      this.options.push(newOption);
    });
  }
  
  incrementCount(optionName) {
    let option = this.options.find(
      item => item.optionName == optionName);;
    if (option != undefined) {
      option.incrementCount();
    }
  }

  getCounts() {
    let options = [];
    this.options.forEach(option => {
      let countInfo = { optionText: option.optionText, count: option.getCount() };
      options.push(countInfo);
    });
    let result = { topicName: this.topicName, options: options };
    return result;
  }

  getOptions() {
    let options = [];
    this.options.forEach(option => {
      let optionInfo = { optionText: option.optionText, optionName: option.optionName };
      options.push(optionInfo);
    });
    let result = { topicName: this.topicName, options: options };
    return result;
  }
}

class Surveys {
  constructor() {
    this.surveys = [];
  }

  saveSurvey(survey) {
    this.surveys.push(survey);
  }

  findSurvey(topicName) {
    return this.surveys.find(element => element.topicName == topicName);
  }
}

export { Option, Survey, Surveys };

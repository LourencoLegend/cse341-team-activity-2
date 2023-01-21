const data = {
    "professionalName": "Lourenco Da Silva",
    "nameLink": {
      "firstName": "Lourenco",
      "url": "https://github.com/LourencoLegend/cse341-team-activity-2.git",
      },
    "base64Image": "",
    "firstName": "Lourenco",
    "primaryDescription": "Learning day by day",
    "workDescription1": "Works at Eterna",
    "workDescription2": "Online University student",
    "linkTitleText": "See work",
    "linkedInLink": {
      "link": "https://github.com/LourencoLegend/cse341-team-activity-2.git",
      "text": "github"
    },
    "githubLink": {
      "link": "https://github.com/LourencoLegend/cse341-team-activity-2.git",
      "text": "GitHub"
    },
    "contactText": "Any contact request should be sent to LourencoLegend@yahoo.com."
  };

exports.getProfessional = (_req, res, _next) => {
    res.status(200).json(data);
  };

  

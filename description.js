function navSlide(){
    // const nav = document.querySelector(".nav-links");
    // const navLinks = document.querySelectorAll(".nav-links li");
    // const burger = document.querySelector(".burger");
    const slideContainer = document.querySelector(".slideContainer");
    const boundingContainer = document.querySelector(".boundingContainer");
  
    //translates the nav links and dropdown container between on and off screen
    // nav.classList.toggle("nav-active");
    slideContainer.classList.toggle("slideContainer-active");
    // boundingContainer.classList.toggle("boundingcontainer-active");
  
    // //toggles between up and down arrow for burger
    // burger.classList.toggle("burger-response");
    // // setTimeout(delayIconChange = () => {burger.classList.toggle("burger-response");}, 50);
  
    // //animates the links
    // navLinks.forEach((link, index) => {
    //   if(link.style.animation){
    //     link.style.animation = ``;
    //   } else {
    //     link.style.animation = `navLinkFade 0.75 ease-in-out forwards ${index/7 +1.15}s`;
    //   }
    // });

}

function prideDescription(){
    const descr = document.getElementById("description");
    const nums = document.getElementById("numbers");
    const skills = document.getElementById("skills");
    const date = document.getElementById("date");
    const img1 = document.getElementById("refImg1");
    const img2 = document.getElementById("refImg2");
    const caption = document.getElementById("caption");

    let description = "San Diego Pride is a nonprofit that aims to foster pride, equality, and respect for the LGBT community. " + 
    "In addition to holding an annual Pride Parade and Festival, SD Pride is one of the only pride organizations that provides year-round education and advocacy programs. " + 
    "As the Programs Intern, I created, edited, and reviewed content and documents for live programming, organization coalitions, and volunteer resources. "+
    "I helped manage speakers at livestream events as well as fundraise and moderate social media. With our streamed events, we were able "+
    "to broaden our reach across the globe, including to those not out and those in countries where there is heavy stigma or homosexuality is criminalized.";

    let skill = "Content/Client Management, Grassroots Activism, Effective Communication, Organization, Event Planning, Efficient Management of Multiple Assignments";

    descr.innerHTML = description;
    date.innerHTML = "May 2020 - Present";
    skills.innerHTML = skill;
    nums.innerHTML = "Raised $56,454 for a $50,000 goal. "+
    "Pride week streaming live segments reached 333,414 people, and 265,624 watched Pride Live (the stream in place of the parade and festival). "+
    "The earned media hit 10.6 million people from the week.";
    img1.setAttribute('src', 'images/prideZoom.jpg');
    img2.setAttribute('src', '');
    caption.innerHTML = "Moderation Team Photo for Pride Live";
}

function stemsDescription(){
    const descr = document.getElementById("description");
    const nums = document.getElementById("numbers");
    const skills = document.getElementById("skills");
    const date = document.getElementById("date");
    const img1 = document.getElementById("refImg1");
    const img2 = document.getElementById("refImg2");
    const caption = document.getElementById("caption");

    let description = "STEMS is a math and science tutoring program at Hope High School in Providence. " + 
    "Tutors are paired in a teacher's class and help students twice a week. " + 
    "STEMS aims to offer extra help to teachers, provide academic support, and act as mentors for students, and to support a greater self-efficacy for students in STEM fields. "+
    "As part of the Tutor Development Team, I am responsible for recruiting tutors, community building and meeting planning, running social media, and gathering feedback.";

    let skill = "Creative Problem Solving, Concept Visualization, Conflict Resolution, Interpersonal Skills"

    descr.innerHTML = description;
    date.innerHTML = "September 2019 - Present";
    skills.innerHTML = skill;
    nums.innerHTML = "";
    img1.setAttribute('src', '');
    img2.setAttribute('src', '');
    caption.innerHTML = "";
}

function fsabDescription(){
    const descr = document.getElementById("description");
    const nums = document.getElementById("numbers");
    const skills = document.getElementById("skills");
    const date = document.getElementById("date");
    const img1 = document.getElementById("refImg1");
    const img2 = document.getElementById("refImg2");
    const caption = document.getElementById("caption");
    
    let description = "Full Stack At Brown completes pro-bono projects for members of the Brown community to give them the ability to provide their users well designed and well built software. " + 
    "FSAB provide our community with workshops and other resources to get involved in the world of software engineering. " + 
    "As a frontend engineer, I focus on HTML, CSS, and JavaScript as well as UI (user interface) design. ";

    let skill = "Responsive Design, Effective Visual Presentation, Client Interaction, Collaborative Coding, Self-Teaching";

    descr.innerHTML = description;
    date.innerHTML = "September 2019 - Present";
    skills.innerHTML = skill;
    nums.innerHTML = "";
    img1.setAttribute('src', 'images/csa.png');
    img2.setAttribute('src', '');
    caption.innerHTML = "Pages from the Brown CSA Website"
}

function agssDescription(){
    const descr = document.getElementById("description");
    const nums = document.getElementById("numbers");
    const skills = document.getElementById("skills");
    const date = document.getElementById("date");
    const img1 = document.getElementById("refImg1");
    const img2 = document.getElementById("refImg2");
    const caption = document.getElementById("caption");
    
    let description = "All Girls STEM Society is a student run nonprofit that aims to empower young girls to pursue STEM through various free events (e.g. outreach, math tournaments) and workshops. " + 
    "In libraries across San Diego County, AGSS runs monthly workshops that involve speakers, original lectures, and hands-on activities. " + 
    "I created and taught circuitry and cellular biology workshops in addition to reviewing the development of other workshops and individually interacting and supporting participants.";

    let skill = "Managing Teams, Public Speaking, Presenting and Explaining Difficult Concepts, Improvisation, Time Management";

    let numbers = "Roughly 1000 participants across all events annually, with the All Girls Math Tournament garnering 100+ and STEAM Maker Festivals at the County Fair garnering around 200. "+
    "In 2017-2018, girls from over 20 new schools participated, with half the workshops ran being brand-new curriculum."

    descr.innerHTML = description;
    date.innerHTML = "March 2016 - August 2019";
    skills.innerHTML = skill;
    nums.innerHTML = numbers;
    img1.setAttribute('src', 'images/agssSteam.jpg');
    img2.setAttribute('src', 'images/agssCircuit.jpg');
    caption.innerHTML = "(above) I'm helping a young girl test her shock absorber at a STEAM Maker Festival. "+
    "(below) Girls gather to watch a demonstration at my circuitry workshop";
}

function ljpcDescription(){
    const descr = document.getElementById("description");
    const nums = document.getElementById("numbers");
    const skills = document.getElementById("skills");
    const date = document.getElementById("date");
    const img1 = document.getElementById("refImg1");
    const img2 = document.getElementById("refImg2");
    const caption = document.getElementById("caption");
    
    let description = "La Jolla Pharmaceutical Company develops and commercializes innovative therapies that improve outcomes in patients suffering from life-threatening diseases. " + 
    "In December 2017, GIAPREZA™ (angiotensin II) was approved by the U.S. Food and Drug Administration (FDA) to treat adults with septic or other distributive shock. " + 
    "Using R Studio and Excel, I extractred, organized, merged, and analyzed pharmacokinetic/pharmacodynamic data from clinical trials for toxicology reports. "+
    "I charted macrophage levels in the blood at different dosages and times to help determine efficacy of drugs in development. "+
    "I then presented and explained the graphs in internal meetings";

    let skill = "R Studio, Excel, Data Visualization, Self-Teaching, Data Presentation";

    descr.innerHTML = description;
    date.innerHTML = "June 2018 - August 2018";
    skills.innerHTML = skill;
    nums.innerHTML = "";
    img1.setAttribute('src', '');
    img2.setAttribute('src', '');
    caption.innerHTML = "";
}

function sharksDescription(){
    const descr = document.getElementById("description");
    const nums = document.getElementById("numbers");
    const skills = document.getElementById("skills");
    const date = document.getElementById("date");
    const img1 = document.getElementById("refImg1");
    const img2 = document.getElementById("refImg2");
    const caption = document.getElementById("caption");
    
    let description = "DMCV Sharks is a San Diego soccer club. "+
    "My team traveled domestically and internationally (eg. Las Vegas, Sweden) for tournaments and showcases. "+
    "My responsibilities as captain included acting as a liason between the coach, team manager, and players; leading warm ups and practices; and planning bonding.";

    let skill = "Organization, Team Relations, Adaptability, Mediation, Conflict Resolution";

    descr.innerHTML = description;
    date.innerHTML = "March 2016 - August 2019";
    skills.innerHTML = skill;
    nums.innerHTML = "";
    img1.setAttribute('src', 'images/soccer.jpg');
    img2.setAttribute('src', 'images/sharks.jpg');
    caption.innerHTML = "Photos from varsity and club games";
}

function bwcsDescription(){
    const descr = document.getElementById("description");
    const nums = document.getElementById("numbers");
    const skills = document.getElementById("skills");
    const date = document.getElementById("date");
    const img1 = document.getElementById("refImg1");
    const img2 = document.getElementById("refImg2");
    const caption = document.getElementById("caption");

    let description = "Brown Women's Club Soccer plays competitively against schools in the New England area.";

    let skill = "Collaboration, Goal Setting";

    descr.innerHTML = description;
    date.innerHTML = "September 2019 - Present";
    skills.innerHTML = skill;
    nums.innerHTML = "";
    img1.setAttribute('src', 'images/bwcsPic.png');
    img2.setAttribute('src', '');
    caption.innerHTML = "BWCS Team";
}

function acluDescription(){
    const descr = document.getElementById("description");
    const nums = document.getElementById("numbers");
    const skills = document.getElementById("skills");
    const date = document.getElementById("date");
    const img1 = document.getElementById("refImg1");
    const img2 = document.getElementById("refImg2");
    const caption = document.getElementById("caption");
    
    let description = "ACLU's Brown University Chapter seeks to raise awareness around civil liberties issues. "+
    "Each semester, new working groups dedicated to various civil issues are created. "+
    "I was a part of the Immigrants' Rights Working Group and we sought to clarify the financial aid and college application process for undocumented/DACA students. " +
    "I designed a page long infographic (2) representing the culmination of research and interviews of relevant university staff. "+
    "I also created the new branding for all Brown ACLU social media (1).";

    let skill = "Research, Effective Representation of Information, Grassroots Activism";

    descr.innerHTML = description;
    date.innerHTML = "September 2019 - Present";
    skills.innerHTML = skill;
    nums.innerHTML = "";
    img1.setAttribute('src', 'images/dissentBearBlue.png');
    img2.setAttribute('src', 'images/acluInfographic.png');
    caption.innerHTML = "(above) Facebook Banner with bear statue from Brown's campus. "+
    "(below) Application infographic created in Adobe Illustrator."
}

  //activates navSlide function when image clicked
document.addEventListener("DOMContentLoaded", function(){
    $(".img").click(navSlide)
    $('#sdpride').click(prideDescription);
    $('#stems').click(stemsDescription);
    $('#fsab').click(fsabDescription);
    $('#agss').click(agssDescription);
    $('#ljpc').click(ljpcDescription);
    $('#bwcs').click(bwcsDescription);
    $('#sharks').click(sharksDescription);
    $('#aclu').click(acluDescription);
})
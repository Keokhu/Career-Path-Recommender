import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar1';
import './Careers.css';

// Import all images at the top
import actorImage from '../../assets/actor.png';
import administrativeAssistantImage from '../../assets/person.png';
import agriculturalInspectorImage from '../../assets/financing.png';
import agriculturalWorkerImage from '../../assets/worker.png';
import animalBreederImage from '../../assets/chicken.png';
import animalCaretakerImage from '../../assets/caretaker.png';
import athleteImage from '../../assets/runner.png';
import autoBodyRepairerImage from '../../assets/automobile.png';
import bakerImage from '../../assets/baker.png';
import bookkeeperImage from '../../assets/accountant.png';
import cashierImage from '../../assets/cashier.png';
import choreographerImage from '../../assets/dancing.png';
import culinaryChefImage from '../../assets/chef.png';
import customsBrokerImage from '../../assets/brokerage.png';
import dairyScientistImage from '../../assets/dairy-products.png';
import dataScientistImage from '../../assets/data-scientist.png';
import dentistImage from '../../assets/dentist.png';
import detectiveImage from '../../assets/private-detective.png';
import diplomatImage from '../../assets/diplomat.png';
import doctorImage from '../../assets/doctor.png';
import ecologistImage from '../../assets/people.png';
import economistImage from '../../assets/investor.png';
import editorImage from '../../assets/content.png';
import electricalEngineerImage from '../../assets/power.png';
import electronicsEngineerImage from '../../assets/data-scientist.png';
import ethicalHackerImage from '../../assets/hacker.png';
import eventPlannerImage from '../../assets/event-planner.png';
import fashionDesignerImage from '../../assets/sketch.png';
import fictionWriterImage from '../../assets/ghost-face.png';
import firefighterImage from '../../assets/firetruck.png';
import fitnessTrainerImage from '../../assets/male.png';
import foodCriticImage from '../../assets/restaurant.png';
import governmentAccountantImage from '../../assets/customer.png';
import historianImage from '../../assets/historian.png';
import housekeeperImage from '../../assets/maid.png';
import illustratorImage from '../../assets/graphic-tablet.png';
import influencerImage from '../../assets/investor.png';
import janitorImage from '../../assets/janitor.png';
import judgeImage from '../../assets/judge.png';
import lawyerImage from '../../assets/lawyer.png';
import linguistImage from '../../assets/languages.png';
import lyricistImage from '../../assets/song.png';
import magicianImage from '../../assets/wizard.png';
import marketingManagerImage from '../../assets/social-media.png';
import mechanicalEngineerImage from '../../assets/engineering.png';
import meteorologistImage from '../../assets/forecaster.png';
import microbiologistImage from '../../assets/microbiology.png';
import motivationalSpeakerImage from '../../assets/motivational-speaker.png';
import naturopathImage from '../../assets/ecosystem.png';
import newsAnchorImage from '../../assets/news-reporter.png';
import nonfictionWriterImage from '../../assets/book.png';
import nurseImage from '../../assets/nurse.png';
import nutritionistImage from '../../assets/dietitian.png';
import opticianImage from '../../assets/optician.png';
import painterImage from '../../assets/painter.png';
import pharmacistImage from '../../assets/pharmacist.png';
import photographerImage from '../../assets/photography.png';
import physicistImage from '../../assets/physicist.png';
import pilotImage from '../../assets/pilot.png';
import poetImage from '../../assets/poet.png';
import policeOfficerImage from '../../assets/police.png';
import professorImage from '../../assets/class.png';
import psychiatristImage from '../../assets/psychiatrist.png';
import publicAdministratorImage from '../../assets/public-administration.png';
import researcherImage from '../../assets/search.png';
import sailorImage from '../../assets/captain.png';
import scientistImage from '../../assets/data-science-system.png';
import sculptorImage from '../../assets/art.png';
import teacherImage from '../../assets/teacher.png';
import uxDesignerImage from '../../assets/ux-design.png';
import voiceActorImage from '../../assets/voiceover.png';
import webDeveloperImage from '../../assets/world-wide-web.png';
import yogaInstructorImage from '../../assets/meditation.png';
import zoologistImage from '../../assets/chameleon.png';

export default function Careers() {
  const [activeFilters, setActiveFilters] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const careerData = [
    { title: "Actor", image: actorImage, link: "https://en.wikipedia.org/wiki/Actor", categories: ["high-paying", "no-degree-careers"] },
    { title: "Administrative Assistant", image: administrativeAssistantImage, link: "https://en.wikipedia.org/wiki/Administrative_assistant", categories: ["attainable-careers"] },
    { title: "Agricultural Inspector", image: agriculturalInspectorImage, link: "https://www.careers360.com/careers/agricultural-inspector", categories: ["high-paying", "attainable-careers"] },
    { title: "Agricultural Worker", image: agriculturalWorkerImage, link: "https://en.wikipedia.org/wiki/Farmworker", categories: ["attainable-careers", "no-degree-careers"] },
    { title: "Animal Breeder", image: animalBreederImage, link: "https://en.wikipedia.org/wiki/Breeder_(animal)", categories: ["attainable-careers"] },
    { title: "Animal Caretaker", image: animalCaretakerImage, link: "https://www.careerexplorer.com/careers/animal-caretaker/", categories: ["part-time-careers", "no-degree-careers"] },
    { title: "Athlete", image: athleteImage, link: "https://en.wikipedia.org/wiki/Athlete", categories: ["high-paying"] },
    { title: "Auto Body Repairer", image: autoBodyRepairerImage, link: "https://en.wikipedia.org/wiki/Auto_body_technician", categories: ["attainable-careers"] },
    { title: "Baker", image: bakerImage, link: "https://en.wikipedia.org/wiki/Baker", categories: ["attainable-careers", "no-degree-careers"] },
    { title: "Bookkeeper", image: bookkeeperImage, link: "https://en.wikipedia.org/wiki/Bookkeeping", categories: ["no-degree-careers", "attainable-careers", "part-time-careers"] },
    { title: "Cashier", image: cashierImage, link: "https://en.wikipedia.org/wiki/Cashier", categories: ["no-degree-careers"] },
    { title: "Choreographer", image: choreographerImage, link: "https://en.wikipedia.org/wiki/Choreography", categories: ["high-paying", "no-degree-careers"] },
    { title: "Culinary Chef", image: culinaryChefImage, link: "https://en.wikipedia.org/wiki/Chef", categories: [] },
    { title: "Customs Broker", image: customsBrokerImage, link: "https://en.wikipedia.org/wiki/Customs_broker", categories: ["high-paying", "attainable-careers"] },
    { title: "Dairy Scientist", image: dairyScientistImage, link: "https://www.careerexplorer.com/careers/dairy-scientist/", categories: ["attainable-careers"] },
    { title: "Data Scientist", image: dataScientistImage, link: "https://en.wikipedia.org/wiki/Data_science", categories: ["high-paying"] },
    { title: "Dentist", image: dentistImage, link: "https://en.wikipedia.org/wiki/Dentist", categories: ["high-paying", "attainable-careers"] },
    { title: "Detective", image: detectiveImage, link: "https://en.wikipedia.org/wiki/Detective", categories: [] },
    { title: "Diplomat", image: diplomatImage, link: "https://en.wikipedia.org/wiki/Diplomat", categories: ["high-paying"] },
    { title: "Doctor", image: doctorImage, link: "https://en.wikipedia.org/wiki/Physician", categories: ["high-paying", "attainable-careers"] },
    { title: "Ecologist", image: ecologistImage, link: "https://en.wikipedia.org/wiki/Ecology", categories: ["part-time-careers"] },
    { title: "Economist", image: economistImage, link: "https://en.wikipedia.org/wiki/Economist", categories: ["high-paying"] },
    { title: "Editor", image: editorImage, link: "https://en.wikipedia.org/wiki/Editing", categories: ["attainable-careers", "part-time-careers"] },
    { title: "Electrical Engineer", image: electricalEngineerImage, link: "https://en.wikipedia.org/wiki/Electronic_engineering", categories: ["attainable-careers"] },
    { title: "Electronics Engineer", image: electronicsEngineerImage, link: "https://en.wikipedia.org/wiki/Electronic_engineering", categories: ["attainable-careers"] },
    { title: "Ethical Hacker", image: ethicalHackerImage, link: "https://en.wikipedia.org/wiki/White_hat_(computer_security)", categories: ["high-paying"] },
    { title: "Event Planner", image: eventPlannerImage, link: "https://en.wikipedia.org/wiki/Event_management", categories: ["part-time-careers", "no-degree-careers"] },
    { title: "Fashion Designer", image: fashionDesignerImage, link: "https://en.wikipedia.org/wiki/Fashion_design", categories: ["high-paying"] },
    { title: "Fiction Writer", image: fictionWriterImage, link: "https://en.wikipedia.org/wiki/Writer#Fictional_writers", categories: ["part-time-careers"] },
    { title: "Firefighter", image: firefighterImage, link: "https://en.wikipedia.org/wiki/Firefighter", categories: [] },
    { title: "Fitness Trainer", image: fitnessTrainerImage, link: "https://en.wikipedia.org/wiki/Personal_trainer", categories: ["no-degree-careers"] },
    { title: "Food Critic", image: foodCriticImage, link: "https://en.wikipedia.org/wiki/Food_critic", categories: ["high-paying"] },
    { title: "Government Accountant", image: governmentAccountantImage, link: "https://en.wikipedia.org/wiki/Accountant", categories: [] },
    { title: "Historian", image: historianImage, link: "https://en.wikipedia.org/wiki/Historian", categories: [] },
    { title: "Housekeeper", image: housekeeperImage, link: "https://en.wikipedia.org/wiki/Housekeeper", categories: ["attainable-careers", "no-degree-careers"] },
    { title: "Illustrator", image: illustratorImage, link: "https://en.wikipedia.org/wiki/Illustrator", categories: ["no-degree-careers"] },
    { title: "Influencer", image: influencerImage, link: "https://en.wikipedia.org/wiki/Influencer", categories: ["high-paying", "no-degree-careers"] },
    { title: "Janitor", image: janitorImage, link: "https://en.wikipedia.org/wiki/Cleaner", categories: ["attainable-careers", "no-degree-careers"] },
    { title: "Judge", image: judgeImage, link: "https://en.wikipedia.org/wiki/Judge", categories: ["high-paying"] },
    { title: "Lawyer", image: lawyerImage, link: "https://en.wikipedia.org/wiki/Lawyer", categories: ["high-paying"] },
    { title: "Linguist", image: linguistImage, link: "https://en.wikipedia.org/wiki/Linguistics", categories: ["part-time-careers"] },
    { title: "Lyricist", image: lyricistImage, link: "https://en.wikipedia.org/wiki/Lyricist", categories: [] },
    { title: "Magician", image: magicianImage, link: "https://en.wikipedia.org/wiki/Magic_(illusion)", categories: ["no-degree-careers"] },
    { title: "Marketing Manager", image: marketingManagerImage, link: "https://en.wikipedia.org/wiki/Marketing_management", categories: ["high-paying"] },
    { title: "Mechanical Engineer", image: mechanicalEngineerImage, link: "https://en.wikipedia.org/wiki/Mechanical_engineering", categories: ["attainable-careers"] },
    { title: "Meteorologist", image: meteorologistImage, link: "https://en.wikipedia.org/wiki/Meteorology", categories: ["attainable-careers"] },
    { title: "Microbiologist", image: microbiologistImage, link: "https://en.wikipedia.org/wiki/Microbiologist", categories: ["high-paying"] },
    { title: "Motivational Speaker", image: motivationalSpeakerImage, link: "https://en.wikipedia.org/wiki/Motivational_speaker", categories: ["part-time-careers", "no-degree-careers"] },
    { title: "Naturopath", image: naturopathImage, link: "https://en.wikipedia.org/wiki/Naturopathy", categories: ["part-time-careers", "no-degree-careers"] },
    { title: "News Anchor", image: newsAnchorImage, link: "https://en.wikipedia.org/wiki/News_presenter", categories: ["attainable-careers"] },
    { title: "Nonfiction Writer", image: nonfictionWriterImage, link: "https://en.wikipedia.org/wiki/News_presenter", categories: ["part-time-careers", "no-degree-careers"] },
    { title: "Nurse", image: nurseImage, link: "https://en.wikipedia.org/wiki/Nursing", categories: ["attainable-careers"] },
    { title: "Nutritionist", image: nutritionistImage, link: "https://en.wikipedia.org/wiki/Nutritionist", categories: [] },
    { title: "Optician", image: opticianImage, link: "https://en.wikipedia.org/wiki/Optician", categories: [] },
    { title: "Painter", image: painterImage, link: "https://en.wikipedia.org/wiki/Painting", categories: ["no-degree-careers"] },
    { title: "Pharmacist", image: pharmacistImage, link: "https://en.wikipedia.org/wiki/Pharmacist", categories: [] },
    { title: "Photographer", image: photographerImage, link: "https://en.wikipedia.org/wiki/Photographer", categories: ["no-degree-careers", "part-time-careers"] },
    { title: "Physicist", image: physicistImage, link: "https://en.wikipedia.org/wiki/Physicist", categories: ["high-paying"] },
    { title: "Pilot", image: pilotImage, link: "https://en.wikipedia.org/wiki/Aircraft_pilot", categories: ["high-paying"] },
    { title: "Poet", image: poetImage, link: "https://en.wikipedia.org/wiki/Poet", categories: ["part-time-careers"] },
    { title: "Police Officer", image: policeOfficerImage, link: "https://en.wikipedia.org/wiki/Police_officer", categories: [] },
    { title: "Professor", image: professorImage, link: "https://en.wikipedia.org/wiki/Professor", categories: [] },
    { title: "Psychiatrist", image: psychiatristImage, link: "https://en.wikipedia.org/wiki/Psychiatrist", categories: [] },
    { title: "Public Administrator", image: publicAdministratorImage, link: "https://en.wikipedia.org/wiki/Public_administration", categories: ["attainable-careers"] },
    { title: "Researcher", image: researcherImage, link: "https://en.wikipedia.org/wiki/Research", categories: [] },
    { title: "Sailor", image: sailorImage, link: "https://en.wikipedia.org/wiki/Sailor", categories: ["no-degree-careers"] },
    { title: "Scientist", image: scientistImage, link: "https://en.wikipedia.org/wiki/Scientist", categories: [] },
    { title: "Sculptor", image: sculptorImage, link: "https://en.wikipedia.org/wiki/Sculpture", categories: ["no-degree-careers", "part-time-careers"] },
    { title: "Teacher", image: teacherImage, link: "https://en.wikipedia.org/wiki/Teacher", categories: [] },
    { title: "UX Designer", image: uxDesignerImage, link: "https://www.coursera.org/in/articles/what-does-a-ux-designer-do", categories: ["part-time-careers"] },
    { title: "Voice Actor", image: voiceActorImage, link: "https://en.wikipedia.org/wiki/Voice_acting", categories: ["high-paying", "no-degree-careers"] },
    { title: "Web Developer", image: webDeveloperImage, link: "http://en.wikipedia.org/wiki/Web_developer", categories: ["attainable-careers"] },
    { title: "Yoga Instructor", image: yogaInstructorImage, link: "https://en.wikipedia.org/wiki/Yoga", categories: ["no-degree-careers", "attainable-careers"] },
    { title: "Zoologist", image: zoologistImage, link: "https://en.wikipedia.org/wiki/Zoology", categories: [] }
  ];

  const careerCategories = [
    { id: "high-paying", label: "High paying careers" },
    { id: "attainable-careers", label: "Attainable careers" },
    { id: "part-time-careers", label: "Part-time careers" },
    { id: "no-degree-careers", label: "Careers that don't require a degree" }
  ];

  const toggleFilter = (filter) => {
    setActiveFilters(prev => 
      prev.includes(filter) 
        ? prev.filter(f => f !== filter) 
        : [...prev, filter]
    );
  };

  const filteredCareers = careerData.filter(career => {
    const categoryMatch = activeFilters.length === 0 || 
      activeFilters.some(filter => career.categories.includes(filter));
    const searchMatch = career.title.toLowerCase().includes(searchTerm.toLowerCase());
    return categoryMatch && searchMatch;
  });

  return (
    <div className="careers-page">
      <Navbar />
      
      <div className="container">
        <div className="left">
          <span className="spec"><p>GENERAL</p></span>
          <div className="careers">
            {careerCategories.map(category => (
              <p 
                key={category.id}
                className={activeFilters.includes(category.id) ? 'active' : ''}
                onClick={() => toggleFilter(category.id)}
              >
                {category.label}
              </p>
            ))}
          </div>
          <hr />
        </div>

        <div className="right">
          <form className="search-bar">
            <input 
              type="text" 
              placeholder="Search..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </form>

          <div className="careers-grid">
            {filteredCareers.map((career, index) => (
              <div 
                key={index}
                className={`jobs ${career.categories.join(' ')}`}
                onClick={() => window.open(career.link, '_blank')}
              >
                <img 
                  style={{ width: '100%', height: '100%' }}
                  src={career.image} 
                  alt={career.title}
                />
                <p className="text">{career.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  // Personal Info
  name = 'Angelo Nicolaci';
  title = 'Programmatore Full Stack';
  bio = `Sono uno studente appassionato di informatica, con una grande passione per lo sviluppo web e app. Sono un programmatore full stack con una conoscenza più approfondita del front-end, ma affascinato anche dal back-end. Sono sempre desideroso di imparare e migliorarmi. Amo sperimentare, trovare nuove soluzioni e dare spazio alla mia creatività attraverso il codice.`;
  bioExtended = `Il mio obiettivo è crescere professionalmente e lavorare su progetti innovativi che uniscano funzionalità ed estetica. Affronto le sfide con determinazione e cerco costantemente di migliorarmi, imparando nuove tecnologie e affinando le mie competenze. Sono curioso, preciso e sempre pronto a mettermi in gioco per dare il meglio in ogni progetto, rispettando i tempi di consegna.`;

  email = 'angelo.nicolaci.commerciale@gmail.com';
  phone = '+39 392 646 6602';
  github = 'https://github.com/DarkFireAngel';
  githubAlt = 'DarkFireAngel';
  linkedin = 'https://www.linkedin.com/in/angelo-nicolaci-3823482b2';
  location = 'Catania, Sicilia, Italia';

  // Experience
  experience = [
    {
      role: 'Front-end Developer',
      company: 'Tirocinio formativo presso Darwin Technologies Srl',
      location: 'Catania (CT)',
      period: 'Settembre 2025 - Dicembre 2025',
      description: 'Sviluppo di interfacce web moderne e responsive utilizzando le ultime tecnologie frontend.'
    }
  ];

  // Technical Skills
  technicalSkills = [
    { name: 'Linguaggi di Programmazione', items: ['JavaScript', 'TypeScript', 'Java', 'C/C++', 'Python', 'Swift', 'Kotlin'] },
    { name: 'Frontend', items: ['HTML', 'CSS', 'Angular', 'React'] },
    { name: 'Backend', items: ['Node.js', 'Express', 'API Development'] },
    { name: 'Mobile', items: ['Android (Kotlin)', 'iOS (Swift)'] },
    { name: 'Database', items: ['MySQL', 'MongoDB'] },
    { name: 'Robotica', items: ['Programmazione Robot Arm', 'Automazione Industriale'] },
    { name: 'Tools & Cloud', items: ['Git', 'GitHub', 'Azure', 'Figma'] }
  ];

  // Soft Skills
  softSkills = [
    'Problem Solving',
    'Gestione del tempo e delle scadenze',
    'Creatività e Precisione',
    'Attenzione ai dettagli',
    'Determinazione e Dedizione',
    'Propensione all\'apprendimento',
    'Capacità di lavorare in team',
    'Adattabilità'
  ];

  // Certifications
  certifications = [
    {
      title: 'Patentino in Robotica Industriale – Use and Programming',
      issuer: 'Fondazione COMAU',
      date: '2023'
    },
    {
      title: 'Certificazioni GameJam – Game4Value',
      issuer: 'Fondazione ANIA',
      date: 'Edizioni 2021 - 2022'
    },
    {
      title: 'Certificato di Sicurezza sul Lavoro',
      issuer: 'Istituto Tecnico Industriale Cucuzza Euclide',
      date: '2022'
    },
    {
      title: 'Patente di Guida (B1)',
      issuer: '',
      date: ''
    }
  ];

  // Education
  education = [
    {
      degree: 'Web and Mobile Development',
      level: 'EQF Livello 5',
      school: 'Steve Jobs Academy',
      location: 'Caltagirone (CT)',
      period: 'In itinere'
    },
    {
      degree: 'Istituto Tecnico Industriale – Indirizzo Informatico',
      level: 'EQF Livello 4',
      school: 'Istituto Tecnico Industriale Cucuzza Euclide',
      location: 'Caltagirone (CT)',
      period: 'Settembre 2018 - Luglio 2023'
    }
  ];

  languages = [
    { name: 'Italiano', level: 'Madrelingua' },
    { name: 'Inglese', level: 'B1' }
  ];

  scrollToSection(sectionId: string): void {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  }
}

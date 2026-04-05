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
  name = 'ANGELO NICOLACI';
  title = 'Full-stack developer';
  tagline = 'Specializzato in sistemi backend e frontend personalizzati tramite codice pulito e creatività.';
  
  bioDetailed = `Sviluppatore Full Stack specializzato in Back-end con solide basi Front-end. Scrivo codice pulito, ordinato e facile da mantenere, garantendo sempre una documentazione tecnica strutturata e ben stilata.
  Il mio approccio è preciso, curato e verticale: non mi fermo alla superficie, ma analizzo ogni dettaglio dell'architettura per trasformare le idee in applicazioni solide e rifinite.`;

  email = 'angelo.nicolaci.commerciale@gmail.com';
  phone = '+39 392 646 6602';
  github = 'https://github.com/DarkFireAngel';
  githubAlt = 'DrkC0deZ';
  linkedin = 'https://www.linkedin.com/in/angelo-nicolaci-3823482b2';
  location = 'Catania, Sicilia, Italia';

  // How I Work (Processo Mentale)
  methodology = [
    {
      title: 'Architettura & Design',
      desc: 'Analizzo ogni dettaglio dell\'architettura prima di scrivere una riga di codice, garantendo scalabilità e manutenibilità.',
      icon: 'architecture'
    },
    {
      title: 'Clean Code & Patterns',
      desc: 'Utilizzo design pattern consolidati e scrivo codice leggibile che chiunque possa capire al primo sguardo.',
      icon: 'code'
    },
    {
      title: 'Debugging & Quality',
      desc: 'Non mi fermo finché non trovo la root cause. La qualità del software e i test sono la mia priorità assoluta.',
      icon: 'bug_report'
    },
    {
      title: 'Documentazione',
      desc: 'Una soluzione tecnicamente avanzata non è completa senza una documentazione tecnica strutturata e lucida.',
      icon: 'docs'
    }
  ];

  // Projects (Case Studies) - Real Project + Placeholder
  projects = [
    {
      name: 'AI Agents Pipeline: Legacy to Python',
      tagline: 'Modernizzazione automatizzata da COBOL a Python (LangGraph + Mistral AI)',
      tech: ['Python', 'LangGraph', 'Mistral AI', 'MLflow', 'Marimo'],
      problem: 'La migrazione manuale di logica business legacy (COBOL) è costosa, lenta e soggetta ad errori umani.',
      solution: 'Pipeline multi-agente (Analyzer, Architect, Generator, Reviewer, Output Builder) con cicli di feedback per garantire equivalenza funzionale.',
      results: 'Codice Python modulare e moderno con "Functional Mirroring" garantito, tracciabilità completa ed interfaccia interattiva.',
      github: 'https://github.com/DarkFireAngel/ai-agents-pipeline-legacy-modernization',
      image: 'logo-an.png'
    },
    {
      name: 'Project Case Study #2',
      tagline: 'Interfaccia Web Personalizzata in [Tech]',
      tech: ['Angular', 'TypeScript', 'SCSS'],
      problem: 'Superare i limiti di un layout standard per creare un\'esperienza utente immersiva.',
      solution: 'Sviluppo di componenti custom con gestione avanzata dello stato e animazioni ottimizzate.',
      results: 'UI rifinita e adattabile ad ogni risoluzione, focalizzata sulla precisione del brand.',
      github: 'https://github.com/DarkFireAngel',
      image: 'logo-an.png'
    }
  ];

  // Experience
  experience = [
    {
      role: 'Academy AI for Legacy Language Modernization',
      company: 'Aitho',
      location: 'Catania (CT)',
      period: 'Febbraio 2026 - Marzo 2026',
      description: 'Studio ed applicazione di tecniche AI per la modernizzazione di linguaggi legacy.'
    },
    {
      role: 'Academy Java Developer',
      company: 'IGgroup',
      location: 'Catania (CT)',
      period: 'Gennaio 2026 - Febbraio 2026',
      description: 'Percorso intensivo nello sviluppo Java e Framework moderni.'
    },
    {
      role: 'Front-end Developer (Tirocinio)',
      company: 'Darwin Technologies Srl',
      location: 'Catania (CT)',
      period: 'Settembre 2025 - Dicembre 2025',
      description: 'Sviluppo di interfacce web moderne e responsive utilizzando tecnologie frontend all\'avanguardia.'
    }
  ];

  // Technical Skills (Raggruppate per Stack)
  skillGroups = [
    { name: 'Frameworks', items: ['Angular', 'React', 'Spring'] },
    { name: 'Front-end', items: ['HTML', 'CSS', 'SCSS', 'JavaScript', 'TypeScript'] },
    { name: 'Back-end', items: ['C/C++', 'Java', 'PHP', 'Python'] },
    { name: 'Mobile / App', items: ['Dart (Flutter)', 'Swift (Xcode)'] },
    { name: 'Database', items: ['MySQL', 'MongoDB'] },
    { name: 'Version Control', items: ['Git', 'GitHub'] },
    { name: 'Robotica', items: ['PDL2 (COMAU)'] }
  ];

  softSkills = [
    'Problem Solving',
    'Gestione del tempo e delle scadenze',
    'Attenzione ai dettagli',
    'Propensione all\'apprendimento'
  ];

  // Certifications
  certifications = [
    {
      title: 'Attestato Form. AI for Legacy Language Modernization',
      issuer: 'Aitho',
      date: '2026'
    },
    {
      title: 'Attestato Forma.Temp (Corso Java)',
      issuer: 'IGgroup',
      date: '2026'
    },
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
      issuer: 'ITI Cucuzza Euclide',
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
      info: 'Diploma EQF Livello 5 | Voto: 110',
      school: 'Steve Jobs Academy, Caltagirone (CT)',
      period: 'Novembre 2023 - Febbraio 2026'
    },
    {
      degree: 'Istituto Tecnico Industriale - Indirizzo Informatico',
      info: 'Diploma EQF Livello 4',
      school: 'Istituto Tecnico Industriale Cucuzza Euclide, Caltagirone (CT)',
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

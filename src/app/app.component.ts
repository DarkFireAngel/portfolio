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
  title = 'SOFTWARE DEVELOPER | FULL STACK';
  tagline = 'Specializzato in sistemi backend e frontend personalizzati tramite codice pulito e creatività.';
  
  bioDetailed = `Sviluppatore Full-Stack con focus sul back-end e solide competenze front-end, specializzato in Angular, TypeScript e Java Spring.
  Realizzo codice pulito, mantenibile e ben documentato, con attenzione alla struttura dell'architettura e alla qualità del software.
  Affronto ogni progetto in modo metodico e orientato alla risoluzione dei problemi, trasformando le idee in applicazioni stabili, scalabili e curate nei dettagli.`;

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

  // Projects (Case Studies) - Real Project
  projects = [
    {
      name: 'AI Agents Pipeline: Legacy to Python',
      tagline: 'Modernizzazione automatizzata da COBOL a Python (LangGraph + Mistral AI)',
      tech: ['Python', 'LangGraph', 'Mistral AI', 'MLflow', 'Marimo'],
      problem: 'La migrazione manuale di logica business legacy (COBOL) è costosa, lenta e soggetta ad errori umani.',
      solution: 'Pipeline multi-agente (Analyzer, Architect, Generator, Reviewer, Output Builder) con cicli di feedback per garantire equivalenza funzionale.',
      results: 'Codice Python modulare e moderno con "Functional Mirroring" garantito, tracciabilità completa ed interfaccia interattiva.',
      github: 'https://github.com/DarkFireAngel/ai-agents-pipeline-legacy-modernization',
      image: 'pipeline-workflow.png'
    }
  ];

  // Experience
  experience = [
    {
      role: 'Academy AI for Legacy Language Modernization',
      company: 'Aitho',
      location: 'Catania (CT)',
      period: 'Febbraio 2026 - Marzo 2026',
      description: 'Percorso formativo su tecniche di modernizzazione di codice legacy tramite strumenti AI, con focus su analisi, refactoring e migrazione di sistemi datati. Tecnologie usate: AI Tools, Python, LangGraph, MLflow, Marimo.'
    },
    {
      role: 'Academy Java Developer',
      company: 'IGgroup',
      location: 'Catania (CT)',
      period: 'Gennaio 2026 - Febbraio 2026',
      description: 'Formazione intensiva sullo sviluppo back-end in Java, con focus su Spring Boot, architetture REST e pattern enterprise. Tecnologie usate: Java, Spring Boot, REST API, Maven.'
    },
    {
      role: 'Front-end Developer',
      company: 'Darwin Technologies Srl',
      location: 'Catania (CT)',
      period: 'Settembre 2025 - Dicembre 2025',
      description: 'Sviluppo feature e refactoring di componenti Angular esistenti. Versioning con Git/GitHub (workflow feature-branch) e task tracking su Azure DevOps. Traduzione di mockup Figma in interfacce responsive. Tecnologie usate: Angular, TypeScript, SCSS, Azure DevOps, Git/GitHub, Figma.'
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
      title: 'Attestato AI for Legacy Language Modernization',
      issuer: 'Aitho',
      date: '2026'
    },
    {
      title: 'Attestato Java Developer',
      issuer: 'IGgroup / Forma.Temp',
      date: '2026'
    },
    {
      title: 'Patentino in Robotica Industriale – Use and Programming',
      issuer: 'Fondazione COMAU',
      date: '2023'
    },
    {
      title: 'Certificazioni Game4Value',
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
      degree: 'Diploma Tecnico Informatico',
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

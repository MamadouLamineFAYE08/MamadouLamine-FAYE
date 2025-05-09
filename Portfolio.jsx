
import React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sparkles, Hammer, Phone, FileText } from "lucide-react";

const projects = [
  {
    title: "Dimensionnement installation tertiaire",
    description:
      "Conception complète d’une installation électrique pour un bâtiment de bureaux : calculs de charges, protections, choix de matériel, conformité aux normes NF C15-100."
  },
  {
    title: "Supervision d’une station de pompage hydraulique",
    description:
      "Automatisation et supervision SCADA d’une station de pompage avec capteurs, actionneurs, régulation PID et communication Modbus."
  },
  {
    title: "Optimisation énergétique bâtiment tertiaire",
    description:
      "Étude de faisabilité pour intégrer panneaux photovoltaïques et stockage, analyse de rentabilité, simulation de consommation."
  },
  {
    title: "Automatisme industriel avec Grafcet",
    description:
      "Programmation d’un process automatisé via Grafcet et automates Siemens (TIA Portal), tests sur maquette industrielle."
  },
  {
    title: "Programmation VHDL",
    description:
      "Développement d’un code VHDL pour la commande d’un moteur, simulation sous ModelSim et implémentation sur FPGA."
  },
  {
    title: "Simulation de convertisseur Boost pour borne de recharge",
    description:
      "Étude et simulation sous Matlab/Simulink d’un hacheur Boost pour l’alimentation d’un véhicule électrique."
  },
  {
    title: "Modélisation thermique d’un système de chauffage",
    description:
      "Analyse du comportement thermique d’une enceinte chauffée, avec régulation PID et modélisation RC."
  }
];

export default function Portfolio() {
  return (
    <main className="p-8 max-w-6xl mx-auto">
      {/* Header amélioré */}
      <div className="text-center mb-10">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-2">Mamadou Lamine Faye</h1>
        <p className="text-lg text-gray-600 italic mb-1">Étudiant en Ingénierie Électrique & Énergie</p>
        <span className="inline-block px-4 py-1 bg-blue-100 text-blue-800 text-sm rounded-full shadow-sm">
          Spécialisé en dimensionnement énergétique, automatisme & installations tertiaires
        </span>
      </div>

      {/* Onglets */}
      <Tabs defaultValue="competences" className="w-full mt-8">
        <TabsList className="grid grid-cols-4 gap-2 mb-6">
          <TabsTrigger value="competences"><Sparkles className="inline w-4 h-4 mr-1" />Compétences</TabsTrigger>
          <TabsTrigger value="projets"><Hammer className="inline w-4 h-4 mr-1" />Projets</TabsTrigger>
          <TabsTrigger value="contact"><Phone className="inline w-4 h-4 mr-1" />Contact</TabsTrigger>
          <TabsTrigger value="cv"><FileText className="inline w-4 h-4 mr-1" />CV</TabsTrigger>
        </TabsList>

        {/* COMPÉTENCES */}
        <TabsContent value="competences">
          <div className="grid gap-6">
            <Card className="p-5 shadow-md border-l-4 border-blue-600 bg-white">
              <h2 className="font-bold text-2xl text-blue-800 mb-3">Conception et dimensionnement tertiaire</h2>
              <ul className="list-disc pl-5 text-gray-700 space-y-2">
                <li>Calculs de sections de câbles, protections, bilans de puissance</li>
                <li>Réalisation de schémas unifilaires, plans d’implantation et synoptiques</li>
                <li>Études d’éclairage intérieur/extérieurs (Dialux)</li>
                <li>Normes : NF C15-100, RT2012, RE2020</li>
              </ul>
            </Card>

            <Card className="p-5 shadow-md border-l-4 border-green-600 bg-white">
              <h2 className="font-bold text-2xl text-green-800 mb-3">Automatisme et supervision</h2>
              <ul className="list-disc pl-5 text-gray-700 space-y-2">
                <li>Automates Siemens / Schneider (TIA Portal, Zelio Soft, PL7)</li>
                <li>SCADA, IHM, protocoles Modbus, Profinet, Ethernet/IP</li>
                <li>Grafcet, régulation PID, supervision d'installations industrielles</li>
              </ul>
            </Card>

            <Card className="p-5 shadow-md border-l-4 border-yellow-600 bg-white">
              <h2 className="font-bold text-2xl text-yellow-700 mb-3">Bureau d’étude, électronique & programmation</h2>
              <ul className="list-disc pl-5 text-gray-700 space-y-2">
                <li>Caneco BT, See Electrical, AutoCAD, Ecodial, ETAP</li>
                <li>Simulation : Matlab/Simulink, PSpice, Scilab</li>
                <li>Programmation : VHDL, C, Python</li>
                <li>Électronique numérique, logique séquentielle, microcontrôleurs</li>
              </ul>
            </Card>

            <Card className="p-5 shadow-md border-l-4 border-purple-600 bg-white">
              <h2 className="font-bold text-2xl text-purple-700 mb-3">Savoir-être professionnel</h2>
              <ul className="list-disc pl-5 text-gray-700 space-y-2">
                <li>Esprit d’analyse, rigueur, autonomie</li>
                <li>Gestion de projets, communication interdisciplinaire</li>
                <li>Capacité à s’adapter et à résoudre les problèmes complexes</li>
              </ul>
            </Card>
          </div>
        </TabsContent>

        {/* PROJETS */}
        <TabsContent value="projets">
          <div className="grid gap-6">
            {projects.map((proj, index) => (
              <Card key={index} className="p-5 bg-white shadow-md hover:shadow-xl transition-shadow duration-200">
                <h3 className="font-semibold text-xl text-blue-900 mb-2">{proj.title}</h3>
                <p className="text-gray-700">{proj.description}</p>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* CONTACT */}
        <TabsContent value="contact">
          <Card className="p-5 mt-2 bg-white text-gray-800 shadow-md">
            <p className="mb-2"><strong>Email :</strong> <a href="mailto:faylamine9@gmail.com" className="text-blue-600 underline">faylamine9@gmail.com</a></p>
            <p className="mb-2"><strong>Téléphone :</strong> <a href="tel:+33627863469" className="text-blue-600 underline">06 27 86 34 69</a></p>
            <p><strong>LinkedIn :</strong> <a href="https://www.linkedin.com/in/mamadou-lamine-faye" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">linkedin.com/in/mamadou-lamine-faye</a></p>
          </Card>
        </TabsContent>

        {/* CV */}
        <TabsContent value="cv">
          <div className="flex flex-col items-center mt-8 gap-4">
            <Button variant="default">
              <a href="/files/CV_Lamine.pdf" download className="text-white">
                📄 Télécharger mon CV (PDF)
              </a>
            </Button>
            <a href="/files/CV_Lamine.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
              ➤ Voir le CV en ligne
            </a>
          </div>
        </TabsContent>
      </Tabs>
    </main>
  );
}

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, X, TrendingDown, Zap } from "lucide-react";
import { Link } from "react-router-dom";

interface Project {
  id: number;
  title: string;
  location: string;
  type: string;
  savings: string;
  surface: string;
  images: string[];
  description: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Entrepôt Logistique",
    location: "Marseille (13)",
    type: "LED Industriel",
    savings: "-70%",
    surface: "3 200 m²",
    images: [
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1495107334309-fcf20504a5ab?w=800&h=600&fit=crop",
    ],
    description: "Remplacement de 180 luminaires sodium par des LED haute performance. Éclairage optimisé pour les zones de picking et les allées de stockage."
  },
  {
    id: 2,
    title: "Hypermarché Carrefour",
    location: "Bordeaux (33)",
    type: "Grande Surface",
    savings: "-65%",
    surface: "8 500 m²",
    images: [
      "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1534723452862-4c874018d66d?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1601598851547-4302969d0614?w=800&h=600&fit=crop",
    ],
    description: "Relamping complet en 5 jours sans interruption d'activité. Installation de 450 panneaux LED avec gestion intelligente."
  },
  {
    id: 3,
    title: "Usine Automobile",
    location: "Lyon (69)",
    type: "Industriel",
    savings: "-72%",
    surface: "12 000 m²",
    images: [
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop",
    ],
    description: "Éclairage haute performance pour lignes de production. Intégration de capteurs de présence pour optimisation énergétique maximale."
  },
  {
    id: 4,
    title: "Centre Commercial",
    location: "Paris (75)",
    type: "Tertiaire",
    savings: "-58%",
    surface: "15 000 m²",
    images: [
      "https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1567449303183-ae0d6ed1498e?w=800&h=600&fit=crop",
    ],
    description: "Rénovation complète de l'éclairage des parties communes et des parkings. Mise en valeur des espaces avec éclairage architectural."
  },
  {
    id: 5,
    title: "Plateforme Amazon",
    location: "Nantes (44)",
    type: "Logistique",
    savings: "-68%",
    surface: "25 000 m²",
    images: [
      "https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop",
    ],
    description: "Installation de plus de 800 luminaires LED avec système de gradation automatique selon la luminosité naturelle."
  },
  {
    id: 6,
    title: "Bureaux Société Générale",
    location: "La Défense (92)",
    type: "Tertiaire",
    savings: "-55%",
    surface: "4 200 m²",
    images: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1497215842964-222b430dc094?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&h=600&fit=crop",
    ],
    description: "Remplacement de l'éclairage fluorescent par des dalles LED biodynamiques pour le confort des collaborateurs."
  },
];

const ProjectGallery = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openLightbox = (project: Project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  const closeLightbox = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        prev === selectedProject.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedProject.images.length - 1 : prev - 1
      );
    }
  };

  return (
    <section id="realisations" className="py-24 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-secondary font-semibold mb-3 uppercase tracking-widest text-sm">Nos Réalisations</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            Projets{" "}
            <span className="text-primary">terminés</span>
          </h2>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto text-lg">
            Découvrez nos installations LED réalisées pour des entreprises de toute taille.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card 
              key={project.id}
              onClick={() => openLightbox(project)}
              className="group overflow-hidden cursor-pointer hover:shadow-2xl transition-all duration-500 border-border/50 bg-card hover:-translate-y-2"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.images[0]}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Badge économie */}
                <div className="absolute top-4 right-4 bg-secondary text-secondary-foreground px-4 py-2 rounded-full font-bold text-sm flex items-center gap-1 shadow-lg">
                  <TrendingDown className="h-4 w-4" />
                  {project.savings}
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-primary-foreground font-semibold text-lg">Voir le projet</span>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-secondary font-semibold uppercase tracking-wider">
                    {project.type}
                  </span>
                  <span className="text-xs text-muted-foreground">{project.surface}</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-secondary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground">📍 {project.location}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <Dialog open={!!selectedProject} onOpenChange={() => closeLightbox()}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden bg-card">
          {selectedProject && (
            <>
              <DialogHeader className="sr-only">
                <DialogTitle>{selectedProject.title}</DialogTitle>
              </DialogHeader>
              
              {/* Image Carousel */}
              <div className="relative h-[50vh] bg-primary/5">
                <img
                  src={selectedProject.images[currentImageIndex]}
                  alt={`${selectedProject.title} - Image ${currentImageIndex + 1}`}
                  className="w-full h-full object-cover"
                />
                
                {/* Navigation */}
                {selectedProject.images.length > 1 && (
                  <>
                    <button
                      onClick={(e) => { e.stopPropagation(); prevImage(); }}
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-primary/80 hover:bg-primary text-primary-foreground rounded-full flex items-center justify-center transition-colors"
                    >
                      <ChevronLeft className="h-6 w-6" />
                    </button>
                    <button
                      onClick={(e) => { e.stopPropagation(); nextImage(); }}
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-primary/80 hover:bg-primary text-primary-foreground rounded-full flex items-center justify-center transition-colors"
                    >
                      <ChevronRight className="h-6 w-6" />
                    </button>
                  </>
                )}

                {/* Image counter */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-primary/80 text-primary-foreground px-4 py-2 rounded-full text-sm font-medium">
                  {currentImageIndex + 1} / {selectedProject.images.length}
                </div>

                {/* Badge économie */}
                <div className="absolute top-4 left-4 bg-secondary text-secondary-foreground px-6 py-3 rounded-2xl font-bold text-lg flex items-center gap-2 shadow-xl">
                  <TrendingDown className="h-5 w-5" />
                  Économie : {selectedProject.savings}
                </div>
              </div>

              {/* Project Info */}
              <div className="p-8">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
                    {selectedProject.type}
                  </span>
                  <span className="text-muted-foreground">•</span>
                  <span className="text-muted-foreground text-sm">{selectedProject.surface}</span>
                </div>
                
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {selectedProject.title}
                </h3>
                <p className="text-muted-foreground mb-4">📍 {selectedProject.location}</p>
                
                <p className="text-foreground mb-8">
                  {selectedProject.description}
                </p>

                <Link to="/simulateur">
                  <Button className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground h-14 text-lg font-bold rounded-xl">
                    <Zap className="mr-2 h-5 w-5" />
                    Demander une étude similaire
                  </Button>
                </Link>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ProjectGallery;
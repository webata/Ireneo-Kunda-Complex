import React, { useState } from 'react';
import { SectionId } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomeSection } from './components/HomeSection';
import { AboutSection } from './components/AboutSection';
import { ProfileSection } from './components/ProfileSection';
import { GallerySection } from './components/GallerySection';
import { EventsSection } from './components/EventsSection';
import { StudentPortalSection } from './components/StudentPortalSection';
import { ContactSection } from './components/ContactSection';
import { ApplicationModal } from './components/ApplicationModal';
import { LightboxModal } from './components/LightboxModal';
import { SearchModal } from './components/SearchModal';

export default function App() {
  const [activeSection, setActiveSection] = useState<SectionId>('home');
  const [applyModalOpen, setApplyModalOpen] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);

  // Lightbox state
  const [lightboxData, setLightboxData] = useState<{
    isOpen: boolean;
    imageUrl: string;
    title: string;
    description?: string;
    date?: string;
  }>({
    isOpen: false,
    imageUrl: '',
    title: '',
  });

  const handleOpenLightbox = (
    imageUrl: string,
    title: string,
    description?: string,
    date?: string
  ) => {
    setLightboxData({
      isOpen: true,
      imageUrl,
      title,
      description,
      date,
    });
  };

  const handleCloseLightbox = () => {
    setLightboxData((prev) => ({ ...prev, isOpen: false }));
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans text-slate-800 selection:bg-amber-500 selection:text-white">
      {/* Top Navbar */}
      <Navbar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        onOpenApplyModal={() => setApplyModalOpen(true)}
        onOpenSearchModal={() => setSearchModalOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {activeSection === 'home' && (
          <HomeSection
            setActiveSection={setActiveSection}
            onOpenApplyModal={() => setApplyModalOpen(true)}
          />
        )}

        {activeSection === 'about' && (
          <AboutSection
            setActiveSection={setActiveSection}
            onOpenApplyModal={() => setApplyModalOpen(true)}
          />
        )}

        {activeSection === 'profile' && (
          <ProfileSection
            setActiveSection={setActiveSection}
            onOpenApplyModal={() => setApplyModalOpen(true)}
            onSelectImageForLightbox={handleOpenLightbox}
          />
        )}

        {activeSection === 'gallery' && (
          <GallerySection onSelectImageForLightbox={handleOpenLightbox} />
        )}

        {activeSection === 'events' && <EventsSection />}

        {activeSection === 'portal' && <StudentPortalSection />}

        {activeSection === 'contact' && <ContactSection />}
      </main>

      {/* Footer */}
      <Footer
        setActiveSection={setActiveSection}
        onOpenApplyModal={() => setApplyModalOpen(true)}
      />

      {/* Modals */}
      <ApplicationModal
        isOpen={applyModalOpen}
        onClose={() => setApplyModalOpen(false)}
      />

      <LightboxModal
        isOpen={lightboxData.isOpen}
        onClose={handleCloseLightbox}
        imageUrl={lightboxData.imageUrl}
        title={lightboxData.title}
        description={lightboxData.description}
        date={lightboxData.date}
      />

      <SearchModal
        isOpen={searchModalOpen}
        onClose={() => setSearchModalOpen(false)}
        setActiveSection={setActiveSection}
      />
    </div>
  );
}

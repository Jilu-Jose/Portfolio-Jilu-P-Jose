import HeroSection from '../components/HeroSection';
import SkillsSection from '../components/SkillsSection';
import JobRoles from '../components/JobRoles';
import Services from '../components/Services';
import ExperienceTimeline from '../components/ExperienceTimeline';
import ProjectsGrid from '../components/ProjectsGrid';
import Certifications from '../components/Certifications';
import ContactForm from '../components/ContactForm';

const Home = () => {
    return (
        <div className="page-container">
            <HeroSection />
            <SkillsSection />
            <JobRoles />
            <Services />
            <ExperienceTimeline />
            <ProjectsGrid />
            <Certifications />
            <ContactForm />
        </div>
    );
};

export default Home;
